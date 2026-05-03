// One-shot migration script — reads reference-site/pages/blog/*.html and
// emits content/blog/posts/<slug>.ts. Run with `node scripts/migrate-blog.mjs`.
//
// Idempotent: rewrites the entire posts/ dir (only files this script generates).
// Hand-authored .ts files for the 5 new posts live in posts/ alongside these
// migrated ones — they use a different filename pattern (no migration banner).

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join, basename } from "node:path";
import { load } from "cheerio";

const BLOG_SRC = "reference-site/pages/blog";
const OUT_DIR = "content/blog/posts";

mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(BLOG_SRC).filter((f) => f.endsWith(".html"));
console.log(`Migrating ${files.length} posts…`);

// All 21 existing posts are gutter-focused per Content Library audit.
const CATEGORY = "gutters";

// Webflow doesn't expose publish dates publicly. Use a sensible historical
// spread so the index sorts naturally — newest at top. These are best-guess
// approximations based on filename topicality. Override per-post if real
// dates surface later.
const PUBLISH_DATES = {
  "best-gutter-guards-pine-needles": "2025-09-12",
  "best-gutter-protection-madison-homes": "2025-08-22",
  "common-gutter-problems-madison-climate": "2025-07-18",
  "diy-vs-pro-gutter-guard-cost": "2025-06-25",
  "gutter-guard-installation-cost": "2025-05-30",
  "gutter-guard-installation-signs": "2025-04-22",
  "gutter-guard-installation-vs-diy": "2025-03-18",
  "gutter-protection-reduces-maintenance-costs": "2025-02-14",
  "hooded-vs-mesh-gutter-guards-2025": "2025-01-28",
  "how-much-do-gutter-guards-cost": "2024-12-15",
  "how-often-clean-gutter-guards": "2024-11-20",
  "micro-mesh-gutter-guards-benefits": "2024-10-25",
  "professional-gutter-guard-installation": "2024-09-30",
  "reliable-gutter-repair-service-in-madison": "2024-09-05",
  "repair-sagging-detached-gutters-madison": "2024-08-12",
  "sectional-vs-seamless-gutter-repair-madison": "2024-07-18",
  "signs-you-need-gutter-guards": "2024-06-22",
  "step-by-step-gutter-guard-installation": "2024-05-28",
  "types-of-gutter-guards": "2024-04-15",
  "why-foam-gutter-guards-fail": "2024-03-22",
  "why-gutter-protection-in-madison-wi-is-a-must-for-homeowners": "2024-02-18",
};

const MIGRATED = "// Migrated from Webflow. Do not hand-edit — regenerate with scripts/migrate-blog.mjs.";

let migrated = 0;
for (const file of files) {
  const slug = basename(file, ".html");
  const html = readFileSync(join(BLOG_SRC, file), "utf8");
  const $ = load(html);

  // --- Title: <h2> inside .cmn-heading-pop-top, fallback to <title>. ---
  let title = $(".cmn-heading-pop-top h2").first().text().trim();
  if (!title) {
    title = $("title").text().trim().replace(/\s*\|\s*Home Defender.*$/i, "");
  }

  // --- Description: <meta name="description"> ---
  const description = $('meta[name="description"]').attr("content")?.trim() ?? "";

  // --- Hero image: <img class="blog-details"> (the standalone one, not the wrapper) ---
  // The body div ALSO has class "blog-details w-richtext" — exclude it.
  const heroImg = $("img.blog-details").first();
  const legacyImageUrl = heroImg.attr("src") ?? null;

  // --- Body: <div class="blog-details w-richtext"> ---
  const $body = $("div.blog-details.w-richtext").first();

  // Strip Webflow embed style/script blocks — they ship Webflow CSS we don't want.
  $body.find(".w-embed").remove();
  $body.find("style").remove();
  $body.find("script").remove();

  // Rewrite internal links: homedefenderusa.com → relative path.
  $body.find("a[href]").each((_, el) => {
    const $el = $(el);
    let href = $el.attr("href") ?? "";
    href = href.replace(
      /^https?:\/\/(?:www\.)?homedefenderusa\.com/i,
      ""
    );
    if (href === "") href = "/";
    $el.attr("href", href);
    // External links → open in new tab + rel.
    if (/^https?:\/\//i.test(href)) {
      $el.attr("target", "_blank");
      $el.attr("rel", "noopener noreferrer");
    }
  });

  // Drop empty paragraphs.
  $body.find("p").each((_, el) => {
    if (!$(el).text().trim() && $(el).find("img").length === 0) {
      $(el).remove();
    }
  });

  // Strip class attributes — let .prose-blog CSS handle styling.
  $body.find("*").removeAttr("class").removeAttr("style");

  let bodyHtml = ($body.html() ?? "").trim();

  // Brand-name normalization (CLAUDE.md NON-NEGOTIABLE).
  // The Webflow content has legacy "Home Defender USA" and "Home Defender" alone;
  // both must read "Home Defender Remodeling".
  bodyHtml = bodyHtml
    // Worst offenders first: "home defender usa" / "Home Defender USA" / variants
    .replace(/\bhome\s+defender\s+usa\b/gi, "Home Defender Remodeling")
    // British spelling bug
    .replace(/\bHome\s+Defender\s+Remodelling\b/g, "Home Defender Remodeling")
    // "Home Defender" alone — only when not already followed by "Remodeling".
    // Negative lookahead is safe here.
    .replace(/\bHome\s+Defender(?!\s+Remodeling)\b/g, "Home Defender Remodeling");

  if (!title || !bodyHtml) {
    console.warn(`SKIP ${slug}: missing title or body`);
    continue;
  }

  const datePublished = PUBLISH_DATES[slug] ?? "2024-01-15";
  const dateModified = "2026-04-01";

  // Map legacy CDN image to a placeholder local path. We'll bulk-migrate the
  // images themselves in Prompt 10 (image optimization pass).
  const imageUrl = legacyImageUrl ? `/images/blog/${slug}.jpg` : null;

  const ts = `${MIGRATED}
import type { BlogPost } from "../types";

export const post: BlogPost = {
  slug: ${JSON.stringify(slug)},
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  datePublished: ${JSON.stringify(datePublished)},
  dateModified: ${JSON.stringify(dateModified)},
  imageUrl: ${JSON.stringify(imageUrl)},
  legacyImageUrl: ${JSON.stringify(legacyImageUrl)},
  category: ${JSON.stringify(CATEGORY)},
  bodyHtml: ${JSON.stringify(bodyHtml)},
};
`;

  writeFileSync(join(OUT_DIR, `${slug}.ts`), ts);
  migrated++;
}

console.log(`Migrated ${migrated} posts → ${OUT_DIR}/`);
