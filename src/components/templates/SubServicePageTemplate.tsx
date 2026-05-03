import Link from "next/link";
import { BRAND, BUSINESS } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { FinalCTA } from "@/components/sections/FinalCTA";
import type { ServiceSection, SubService } from "../../../content/services";
import { getSubServiceBySlug } from "../../../content/services";
import { getCityBySlug } from "../../../content/cities";

/**
 * Master template for every roofing/gutter sub-service detail page.
 *
 * Sections, in order:
 *   1. Hero (eyebrow + H1 + hero subtext + CTAs)
 *   2. Body sections (heading, optional paragraphs, optional labeled list)
 *   3. FAQs (with FAQSchema)
 *   4. Related services (cross-links)
 *   5. City callouts (only when isGeoTargeted)
 *   6. Final CTA
 */
export function SubServicePageTemplate({ service }: { service: SubService }) {
  return (
    <main className="flex flex-1 flex-col">
      <LocalBusinessSchema />
      <FAQSchema faqs={service.faqs} />

      {/* 1. Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}
      >
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            {service.eyebrow && (
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: BRAND.colors.green }}
              >
                {service.eyebrow}
              </p>
            )}
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
              {service.h1}
            </h1>
            <p className="mt-5 text-base sm:text-lg opacity-90">
              {service.hero}
            </p>
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

      {/* 2. Body sections — alternating background for visual rhythm */}
      {service.sections.map((section, idx) => (
        <BodySection
          key={section.heading}
          section={section}
          tinted={idx % 2 === 0}
        />
      ))}

      {/* 3. FAQs */}
      {service.faqs.length > 0 && (
        <section
          className={
            service.sections.length % 2 === 0
              ? "bg-gray-50 py-14 sm:py-20"
              : "py-14 sm:py-20"
          }
        >
          <Container>
            <div className="max-w-3xl">
              <h2
                className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
                style={{ color: BRAND.colors.navy }}
              >
                Frequently asked questions
              </h2>
              <dl className="mt-8 space-y-6">
                {service.faqs.map((f) => (
                  <div
                    key={f.question}
                    className="rounded-img border border-gray-200 bg-white p-5"
                  >
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

      {/* 4. Related services */}
      {service.related && service.related.length > 0 && (
        <RelatedServices slugs={service.related} />
      )}

      {/* 5. City callouts — only on geo-targeted pages */}
      {service.isGeoTargeted &&
        service.cityCallouts &&
        service.cityCallouts.length > 0 && (
          <CityCallouts slugs={service.cityCallouts} />
        )}

      {/* 6. Final CTA */}
      <FinalCTA />
    </main>
  );
}

function BodySection({
  section,
  tinted,
}: {
  section: ServiceSection;
  tinted: boolean;
}) {
  return (
    <section
      className={tinted ? "py-14 sm:py-20" : "bg-gray-50 py-14 sm:py-20"}
    >
      <Container>
        <div className="max-w-3xl">
          <h2
            className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
            style={{ color: BRAND.colors.navy }}
          >
            {section.heading}
          </h2>
          {section.paragraphs?.map((p, i) => (
            <p
              key={i}
              className="mt-4 text-base text-gray-700 whitespace-pre-line"
            >
              {p}
            </p>
          ))}
          {section.list && section.list.length > 0 && (
            <ul className="mt-6 space-y-5">
              {section.list.map((item, i) => (
                <li
                  key={i}
                  className="rounded-img border border-gray-200 bg-white p-5"
                >
                  {item.heading && (
                    <p
                      className="text-base font-semibold"
                      style={{ color: BRAND.colors.navy }}
                    >
                      {item.heading}
                    </p>
                  )}
                  <p
                    className={`text-sm text-gray-700 ${item.heading ? "mt-2" : ""}`}
                  >
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}

function RelatedServices({ slugs }: { slugs: string[] }) {
  const items = slugs
    .map((slug) => getSubServiceBySlug(slug))
    .filter((s): s is SubService => Boolean(s));
  if (items.length === 0) return null;
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2
            className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
            style={{ color: BRAND.colors.navy }}
          >
            Related services
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <Link
              key={s.slug}
              href={s.path}
              className="group block rounded-img border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <h3
                className="text-base font-semibold"
                style={{ color: BRAND.colors.navy }}
              >
                {s.h1}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{s.hero}</p>
              <p
                className="mt-4 inline-flex items-center text-sm font-semibold"
                style={{ color: BRAND.colors.green }}
              >
                Learn more
                <span
                  aria-hidden="true"
                  className="ml-1 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CityCallouts({ slugs }: { slugs: string[] }) {
  const cities = slugs
    .map((slug) => ({ slug, city: getCityBySlug(slug) }))
    .filter(({ city }) => Boolean(city));
  if (cities.length === 0) return null;
  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2
            className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
            style={{ color: BRAND.colors.navy }}
          >
            Also serving these communities
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            We work across Madison, Dane County, and southern Wisconsin. Tap a
            community below for the local roof-replacement page.
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 text-sm">
          {cities.map(({ slug, city }) => {
            if (!city) return null;
            return (
              <li key={slug}>
                <Link
                  href={`/services/roofing/roof-replacement-${slug}-wi`}
                  className="block rounded-btn border border-gray-200 bg-white px-3 py-2 hover:border-gray-300 hover:bg-gray-100"
                  style={{ color: BRAND.colors.navy }}
                >
                  {city.cityName}
                  {city.isNeighborhood ? "" : ", WI"}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
