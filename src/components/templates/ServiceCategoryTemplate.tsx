import Link from "next/link";
import { BRAND, BUSINESS } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { FinalCTA } from "@/components/sections/FinalCTA";
import type {
  ServiceCategoryPage,
  ServiceSection,
} from "../../../content/services";
import { getSubServiceBySlug } from "../../../content/services";

/**
 * Master template for the three /service/* category overview pages.
 * Renders hero → intro → sub-service cards (if any) → optional sections →
 * FAQs → final CTA.
 *
 * Critical: /service/roofing must NOT contain gutter content. The cards on
 * the roofing page only reference roofing sub-services. The data file
 * enforces this; the template just renders what's given.
 */
export function ServiceCategoryTemplate({
  category,
}: {
  category: ServiceCategoryPage;
}) {
  return (
    <main className="flex flex-1 flex-col">
      <LocalBusinessSchema />
      <FAQSchema faqs={category.faqs} />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}
      >
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            {category.eyebrow && (
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: BRAND.colors.green }}
              >
                {category.eyebrow}
              </p>
            )}
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
              {category.h1}
            </h1>
            <p className="mt-5 text-base sm:text-lg opacity-90">
              {category.hero}
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

      {/* Intro */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            {category.intro.map((p, i) => (
              <p
                key={i}
                className={`${i === 0 ? "" : "mt-4"} text-base text-gray-700`}
              >
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Sub-service cards (if any). Roofing has 7, gutters have 4, windows has 0. */}
      {category.subServiceCards.length > 0 && (
        <section className="bg-gray-50 py-14 sm:py-20">
          <Container>
            <div className="max-w-3xl">
              <h2
                className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
                style={{ color: BRAND.colors.navy }}
              >
                What we do
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.subServiceCards.map((card) => {
                const sub = getSubServiceBySlug(card.slug);
                const href = sub ? sub.path : `#${card.slug}`;
                return (
                  <Link
                    key={card.slug}
                    href={href}
                    className="group block rounded-img border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
                  >
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: BRAND.colors.navy }}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {card.description}
                    </p>
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
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Optional content sections after the cards */}
      {category.sections?.map((section, idx) => (
        <BodySection
          key={section.heading}
          section={section}
          tinted={
            // Alternate background starting from where the cards left off.
            // If there are cards (gray-50 above), this should start white.
            // If no cards, intro was white, this should start gray.
            (category.subServiceCards.length > 0 ? idx : idx + 1) % 2 === 0
          }
        />
      ))}

      {/* FAQs */}
      {category.faqs.length > 0 && (
        <section className="bg-gray-50 py-14 sm:py-20">
          <Container>
            <div className="max-w-3xl">
              <h2
                className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
                style={{ color: BRAND.colors.navy }}
              >
                Frequently asked questions
              </h2>
              <dl className="mt-8 space-y-6">
                {category.faqs.map((f) => (
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
