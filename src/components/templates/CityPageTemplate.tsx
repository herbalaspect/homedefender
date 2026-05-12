import Image from "next/image";
import Link from "next/link";
import { BRAND, BUSINESS } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import type { CityPage } from "../../../content/cities";
import { getCityBySlug } from "../../../content/cities";

/**
 * Service-area page master template (Content Library §2). Used by the
 * dynamic route at /services/roofing/roof-replacement-[city] to render all
 * 12 cities (Prompt 4) and the 6 neighborhood pages (Prompt 4.5) from one
 * component.
 *
 * Sections, in order:
 *   1. Hero (custom per city)
 *   2. Local context paragraph
 *   3. Service overview (template, city-name swapped in)
 *   4. Why choose us (template)
 *   5. Process (shared component)
 *   6. Materials (template)
 *   7. Warranty + Defender Shield mention
 *   8. Pricing (template, links to pricing page)
 *   9. FAQs (custom per city) + FAQSchema
 *  10. Local testimonial
 *  11. Neighbors block
 *  12. Final CTA
 */
export function CityPageTemplate({ city }: { city: CityPage }) {
  const cityLabel = city.isNeighborhood
    ? `${city.cityName} (${city.parentCity ?? "Madison"}, WI)`
    : `${city.cityName}, WI`;

  return (
    <main className="flex flex-1 flex-col">
      {/* Schema: LocalBusiness scoped to this city + FAQ from this city's FAQs */}
      <LocalBusinessSchema cityServed={city.cityName} />
      <FAQSchema faqs={city.faqs} />

      {/* 1. Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}
      >
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: BRAND.colors.green }}
            >
              {cityLabel}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
              {city.h1}
            </h1>
            <p className="mt-5 text-base sm:text-lg opacity-90">{city.hero}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-btn px-6 py-3 text-base font-semibold"
                style={{ backgroundColor: BRAND.colors.green, color: "#ffffff" }}
              >
                Get a Free Estimate
              </Link>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="inline-flex items-center justify-center rounded-btn border border-white/30 px-6 py-3 text-base font-semibold hover:bg-white/10"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Local context */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <div className="max-w-2xl">
              <h2
                className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
                style={{ color: BRAND.colors.navy }}
              >
                About {city.cityName}{city.isNeighborhood ? "" : ", WI"}
              </h2>
              <p className="mt-4 text-base text-gray-700 whitespace-pre-line">
                {city.localContext}
              </p>
            </div>
            {!city.isNeighborhood && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-img border border-gray-200">
                <Image
                  src={`/images/cities_${city.slug}-local-context.webp`}
                  alt={`Roof replacement work in ${city.cityName}, ${city.cityState}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 2b. Permitting / oversight (neighborhoods only when present) */}
      {city.permittingSection && (
        <section className="bg-gray-50 py-20 sm:py-28">
          <Container>
            <div className="max-w-3xl">
              <h2
                className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
                style={{ color: BRAND.colors.navy }}
              >
                Permitting and oversight in {city.cityName}
              </h2>
              <p className="mt-4 text-base text-gray-700 whitespace-pre-line">
                {city.permittingSection}
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* 2c. Roofing considerations specific to this place */}
      {city.roofingConsiderations && (
        <section className="py-20 sm:py-28">
          <Container>
            <div className="max-w-3xl">
              <h2
                className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
                style={{ color: BRAND.colors.navy }}
              >
                Roofing considerations specific to {city.cityName}
              </h2>
              <p className="mt-4 text-base text-gray-700 whitespace-pre-line">
                {city.roofingConsiderations}
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* 3. Service overview */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
              style={{ color: BRAND.colors.navy }}
            >
              Roof replacement built for {city.cityName} homes
            </h2>
            <p className="mt-4 text-base text-gray-700">
              We replace roofs the same way for every home in {city.cityName}: a
              full tear-off so we can inspect and replace the decking where
              needed, ice and water shield extending well past the eaves to
              handle Wisconsin&apos;s ice-damming patterns, synthetic
              underlayment, architectural shingles or standing-seam metal, and
              proper attic ventilation. Cheap shortcuts at any of those layers
              are how roofs fail early.
            </p>
          </div>
        </Container>
      </section>

      {/* 4. Why choose us */}
      <section className="py-20 sm:py-28">
        <Container>
          <h2
            className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
            style={{ color: BRAND.colors.navy }}
          >
            Why {city.cityName} homeowners choose Home Defender Remodeling
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              `Local crews who know ${city.cityName} permitting and inspection cycles.`,
              "Written, line-itemed estimates — materials, labor, dump fees broken out.",
              "Workmanship warranty plus the manufacturer warranty in plain language.",
              "Insurance-claim documentation when the damage is storm-related.",
              "No high-pressure sales — if your roof has another five years, we say so.",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: BRAND.colors.green }}
                >
                  ✓
                </span>
                <span className="text-sm text-gray-700">{p}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. Process (shared) */}
      <Process />

      {/* 6. Materials */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
              style={{ color: BRAND.colors.navy }}
            >
              Materials we install
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  h: "Architectural asphalt shingles",
                  p: "The right call for most Wisconsin roofs. 30–50 year manufacturer warranties, good wind ratings, predictable cost.",
                },
                {
                  h: "Standing-seam metal",
                  p: "Sheds snow well, lasts 50+ years, costs 2–3x asphalt up front. Best for steeper roofs and homes you plan to keep.",
                },
                {
                  h: "Flat / low-slope membranes",
                  p: "TPO and modified bitumen for porches, dormers, and additions. Different install rules — we handle the transitions.",
                },
              ].map((m) => (
                <div key={m.h} className="rounded-img border border-gray-200 bg-white p-5">
                  <h3
                    className="text-base font-semibold"
                    style={{ color: BRAND.colors.navy }}
                  >
                    {m.h}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{m.p}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Warranty */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
              style={{ color: BRAND.colors.navy }}
            >
              What&apos;s covered after we leave
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Workmanship warranty in writing, plus the manufacturer warranty
              from your shingle or metal panel maker. We hand both over at the
              final walkthrough.
            </p>
            <p className="mt-3 text-base text-gray-700">
              Optional: <Link className="underline" href="/defender-shield" style={{ color: BRAND.colors.green }}>The Defender Shield</Link>{" "}
              — our $295/year preventative-maintenance plan that keeps the
              warranties valid by catching small issues before they become
              claims.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. Pricing */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
              style={{ color: BRAND.colors.navy }}
            >
              What does a roof replacement cost in {city.cityName}?
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Pricing depends on square footage, pitch, decking condition, and
              material. Most {city.cityName} replacements land between $9,000
              and $22,000. We&apos;ll come out, measure, and put a written
              estimate in your hand within a week.
            </p>
            <Link
              href="/how-much-does-roof-replacement-cost-madison"
              className="mt-6 inline-flex items-center text-sm font-semibold"
              style={{ color: BRAND.colors.green }}
            >
              See the full pricing breakdown →
            </Link>
          </div>
        </Container>
      </section>

      {/* 9. FAQs */}
      {city.faqs.length > 0 && (
        <section className="py-20 sm:py-28">
          <Container>
            <div className="max-w-3xl">
              <h2
                className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
                style={{ color: BRAND.colors.navy }}
              >
                {city.cityName} roof replacement FAQs
              </h2>
              <dl className="mt-8 space-y-6">
                {city.faqs.map((f) => (
                  <div key={f.question} className="rounded-img border border-gray-200 bg-white p-5">
                    <dt
                      className="text-base font-semibold"
                      style={{ color: BRAND.colors.navy }}
                    >
                      {f.question}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-700 whitespace-pre-line">
                      {f.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>
      )}

      {/* 10. Local testimonial */}
      <Testimonials
        heading={`What ${city.cityName} customers say`}
        items={[
          {
            id: `${city.slug}-local`,
            quote: city.testimonial.quote,
            author: city.testimonial.author,
            location: city.testimonial.location,
            service: "roofing",
            isPlaceholder: true,
          },
        ]}
      />

      {/* 11. Neighbors */}
      {city.neighbors.length > 0 && (
        <section className="bg-gray-50 py-20 sm:py-28">
          <Container>
            <div className="max-w-3xl">
              <h2
                className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
                style={{ color: BRAND.colors.navy }}
              >
                Also serving these {city.cityName}-area communities
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Roof replacement, repair, and gutter work across Madison and
                Dane County. Tap a neighbor below for the service area page.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 text-sm">
              {city.neighbors.map((slug) => {
                const n = getCityBySlug(slug);
                if (!n) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/services/roofing/roof-replacement-${slug}-wi`}
                      className="block rounded-btn border border-gray-200 bg-white px-3 py-2 hover:border-gray-300 hover:bg-gray-100"
                      style={{ color: BRAND.colors.navy }}
                    >
                      {n.cityName}, WI
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      )}

      {/* 12. Final CTA */}
      <FinalCTA
        heading={`Ready for a free estimate in ${city.cityName}?`}
        body={`Tell us about the project. We'll come out to ${city.cityName}, take a look, and put a written estimate in your hand within a week.`}
      />
    </main>
  );
}
