import { pageMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { faqCategories, allFaqs } from "../../../content/faqs";

export const metadata = pageMetadata({
  title: "Roofing, Gutter & Window FAQs | Home Defender Remodeling",
  description:
    "Answers to the questions Madison and Dane County homeowners ask most: cost, timing, warranties, financing, storm claims, and the Defender Shield plan.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LocalBusinessSchema />
      <FAQSchema faqs={allFaqs} />

      {/* Hero */}
      <section style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}>
        <Container className="py-14 sm:py-20">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: BRAND.colors.green }}
            >
              Frequently Asked Questions
            </p>
            <h1 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl">
              Answers to the questions we hear most.
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-90">
              Roofing, gutters, windows, and the Defender Shield annual plan.
              If your question isn&apos;t here, call (608) 925-3576 — we&apos;d
              rather answer it on the phone in five minutes than make you guess.
            </p>
          </div>
        </Container>
      </section>

      {/* Category nav */}
      <section className="border-b border-gray-200 py-6">
        <Container>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {faqCategories.map((cat) => (
              <li key={cat.id}>
                <a
                  href={`#${cat.id}`}
                  className="underline underline-offset-2"
                  style={{ color: BRAND.colors.navy }}
                >
                  {cat.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Categories */}
      {faqCategories.map((cat) => (
        <section
          key={cat.id}
          id={cat.id}
          className="py-12 even:bg-gray-50 sm:py-16"
        >
          <Container>
            <div className="max-w-3xl">
              <h2
                className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
                style={{ color: BRAND.colors.navy }}
              >
                {cat.title}
              </h2>
              {cat.description && (
                <p className="mt-3 text-base text-gray-700">{cat.description}</p>
              )}
              <dl className="mt-8 space-y-6">
                {cat.faqs.map((f) => (
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
                    <dd className="mt-2 text-sm text-gray-700">{f.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>
      ))}

      <FinalCTA
        heading="Didn't find what you were looking for?"
        body="Call (608) 925-3576 or send us a note through the contact form. We answer roofing questions all day long — there's no such thing as a dumb one."
      />
    </main>
  );
}
