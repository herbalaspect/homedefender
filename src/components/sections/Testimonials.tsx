import { BRAND, BUSINESS } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import type { Testimonial } from "../../../content/testimonials";

/**
 * Testimonials section. Pass an explicit array (3 distinct entries on the
 * homepage, fewer on service-specific pages). Never duplicate quote text
 * across the page — CLAUDE.md SEO rule.
 *
 * Set `showReviewCta` to append a "Leave us a review" link that opens the
 * Google review dialog (homepage only — service pages leave it off).
 */
export function Testimonials({
  heading = "What customers say",
  items,
  showReviewCta = false,
}: {
  heading?: string;
  items: Testimonial[];
  showReviewCta?: boolean;
}) {
  if (!items.length) return null;
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <h2
            className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
            style={{ color: BRAND.colors.navy }}
          >
            {heading}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.id}
              className="flex h-full flex-col rounded-img border border-gray-200 bg-white p-6"
            >
              <blockquote className="flex-1 text-sm text-gray-700">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <p className="font-semibold" style={{ color: BRAND.colors.navy }}>
                  {t.author}
                </p>
                <p className="text-gray-500">{t.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        {showReviewCta && (
          <div className="mt-10 flex flex-col items-start gap-2">
            <a
              href={BUSINESS.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-img px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND.colors.green }}
            >
              <span aria-hidden="true">★</span>
              Leave us a review on Google
            </a>
            <p className="text-sm text-gray-500">
              Worked with us? A quick review helps other Madison homeowners find us.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
