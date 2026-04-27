import type { Metadata } from "next";
import { BUSINESS } from "./constants";
import { absoluteUrl } from "./utils";

/**
 * Generate a Next.js Metadata object with all the bits a page needs:
 * canonical URL, Open Graph, Twitter Card, robots. Use on every page so
 * we never ship a missing meta description or canonical.
 *
 * Title length target: 50–60 chars. Description: 145–160 chars.
 * The CLAUDE.md SEO non-negotiables enforce these — code review should reject
 * pages that don't pass them.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
}: {
  /** Will be wrapped by the title template "%s | Home Defender Remodeling"
   *  unless the title already contains "Home Defender Remodeling". */
  title: string;
  description: string;
  /** Path on the site (e.g. "/about" or "/services/roofing/roof-replacement-madison-wi"). */
  path: string;
  /** Path or full URL to the OG image. */
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : undefined;

  // If the title already contains the brand name, use it as-is to avoid
  // double-suffixing via the layout's title template.
  const finalTitle = title.includes(BUSINESS.name)
    ? { absolute: title }
    : title;

  return {
    title: finalTitle,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type,
      url,
      siteName: BUSINESS.name,
      title: typeof finalTitle === "string" ? finalTitle : finalTitle.absolute,
      description,
      images: ogImage ? [ogImage] : undefined,
      ...(type === "article" && publishedTime
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: typeof finalTitle === "string" ? finalTitle : finalTitle.absolute,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
