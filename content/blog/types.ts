/**
 * Blog post data shape.
 *
 * Body is stored as an HTML string (not MDX). Migrated posts come from
 * Webflow's `<div class="w-richtext">` body and are rendered via
 * `dangerouslySetInnerHTML` inside a `.prose-blog` wrapper.
 *
 * New posts (Content Library §5) follow the same shape — authored as
 * readable HTML in a template literal.
 */
export type BlogCategory = "roofing" | "gutters";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO 8601 — date the post was first published on the live site. */
  datePublished: string;
  /** ISO 8601 — date last edited. Falls back to datePublished. */
  dateModified?: string;
  /** Path under /public/images/blog/ — `null` if no hero image. */
  imageUrl: string | null;
  /** Webflow CDN absolute URL the migrated image originally lived at. Kept for traceability; not rendered. */
  legacyImageUrl?: string;
  category: BlogCategory;
  /** Author byline — defaults to brand name in render. */
  author?: string;
  /** Sanitized HTML body. Internal links rewritten to relative paths. */
  bodyHtml: string;
};
