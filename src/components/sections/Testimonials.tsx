import { BRAND } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import type { Testimonial } from "../../../content/testimonials";

/**
 * Testimonials section. Pass an explicit array (3 distinct entries on the
 * homepage, fewer on service-specific pages). Never duplicate quote text
 * across the page — CLAUDE.md SEO rule.
 */
export function Testimonials({
  heading = "What customers say",
  items,
}: {
  heading?: string;
  items: Testimonial[];
}) {
  if (!items.length) return null;
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2
            className="text-2xl font-medium sm:text-3xl"
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
      </Container>
    </section>
  );
}
