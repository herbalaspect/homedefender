import { pageMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { testimonials, type ServiceType } from "../../../content/testimonials";

/**
 * /testimonials (plural) — the canonical URL. The old /testimonial slug
 * needs a 301 redirect, configured in next.config.ts.
 *
 * Names are placeholder ("[Customer Name]") until verified — the CLAUDE.md
 * rule is non-negotiable. We render the placeholder verbatim rather than
 * inventing a name.
 */

export const metadata = pageMetadata({
  title: "Customer Testimonials | Home Defender Remodeling",
  description:
    "What homeowners across Madison, Dane County, and southern Wisconsin say about working with Home Defender Remodeling on roofing, gutter, and window projects.",
  path: "/testimonials",
});

const SERVICE_LABEL: Record<ServiceType, string> = {
  roofing: "Roofing",
  gutter: "Gutter Protection",
  windows: "Windows",
  general: "General",
};

export default function TestimonialsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LocalBusinessSchema />

      {/* Hero */}
      <section style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}>
        <Container className="py-14 sm:py-20">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: BRAND.colors.green }}
            >
              Customer Stories
            </p>
            <h1 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl">
              What homeowners in Madison and Dane County say.
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-90">
              The work has to speak for itself. Below are notes from customers
              we&apos;ve worked with on roofing, gutters, and windows. Names are
              redacted where we don&apos;t have written permission to publish.
            </p>
          </div>
        </Container>
      </section>

      {/* Testimonials grid */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="flex flex-col rounded-img border border-gray-200 bg-white p-6"
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: BRAND.colors.green }}
                >
                  {SERVICE_LABEL[t.service]}
                </p>
                <blockquote
                  className="mt-3 flex-1 text-base text-gray-800"
                  style={{ fontStyle: "italic" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-4 text-sm text-gray-600">
                  <span
                    className="font-semibold"
                    style={{ color: BRAND.colors.navy }}
                  >
                    {t.author}
                  </span>
                  {" — "}
                  {t.location}
                </footer>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Note about placeholder names */}
      <section className="bg-gray-50 py-10">
        <Container>
          <div className="max-w-3xl text-sm text-gray-600">
            <p>
              <strong>A note on customer names.</strong> Some entries above
              show &ldquo;[Customer Name]&rdquo; rather than a real name.
              We don&apos;t publish a customer&apos;s full name without their
              written permission — period. As we collect releases from past
              customers, we&apos;ll update entries accordingly.
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
