import { BUSINESS } from "@/lib/constants";
import { absoluteUrl } from "@/lib/utils";

/**
 * Article JSON-LD for blog posts. Required on every post per CLAUDE.md.
 * Pulls organization details from BUSINESS constants — no per-post duplication.
 */
export function ArticleSchema({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName = BUSINESS.name,
}: {
  title: string;
  description: string;
  /** Path or full URL. Path is auto-resolved against BUSINESS.url. */
  url: string;
  /** Path or full URL. */
  imageUrl?: string;
  /** ISO 8601 date string. */
  datePublished: string;
  /** ISO 8601 date string. Falls back to datePublished. */
  dateModified?: string;
  authorName?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(url),
    },
    image: imageUrl ? [absoluteUrl(imageUrl)] : undefined,
    author: {
      "@type": "Organization",
      name: authorName,
      url: BUSINESS.url,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    datePublished,
    dateModified: dateModified ?? datePublished,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
