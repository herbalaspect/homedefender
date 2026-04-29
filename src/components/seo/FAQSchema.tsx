/**
 * FAQPage JSON-LD. Render once per page that has a substantive FAQ section.
 * The visible FAQ markup must mirror the questions/answers passed here —
 * Google's Rich Results Test rejects FAQ schema where the on-page text doesn't
 * match the structured data.
 */
export function FAQSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  if (!faqs.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
