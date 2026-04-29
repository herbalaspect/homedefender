import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { BRAND, BUSINESS } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { serviceCategories } from "../../../content/services";

export const metadata = pageMetadata({
  title: "Services — Roofing, Gutters, Windows | Home Defender",
  description:
    "Roofing, gutter protection, and window replacement for Madison, Dane County, and southern Wisconsin. Free written estimates and a workmanship warranty in writing.",
  path: "/services",
});

/**
 * /services — top-level services hub. Three cards linking to the three
 * /service/* category pages. Roofing leads (brand strategy is roofing-led).
 *
 * Note the URL split: this hub is /services (plural), the category pages are
 * /service/{slug} (singular). It's odd but it's what the sitemap prescribes
 * and it's already what the live Webflow site uses.
 */
export default function ServicesHubPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LocalBusinessSchema />

      {/* Hero */}
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
              Services
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              What we do for Madison and Dane County homes
            </h1>
            <p className="mt-5 text-base sm:text-lg opacity-90">
              Three services. One local team. Roofing leads what we do —
              gutters and windows are how we keep the rest of the exterior
              weather-tight without sending you to three different
              contractors.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold"
                style={{ backgroundColor: BRAND.colors.green, color: "#ffffff" }}
              >
                Get a Free Estimate
              </Link>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-base font-semibold hover:bg-white/10"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Category cards */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceCategories.map((c) => (
              <Link
                key={c.slug}
                href={c.path}
                className="group block rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                {c.eyebrow && (
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: BRAND.colors.green }}
                  >
                    {c.eyebrow}
                  </p>
                )}
                <h2
                  className="mt-2 text-lg font-semibold"
                  style={{ color: BRAND.colors.navy }}
                >
                  {c.h1}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{c.hero}</p>
                <p
                  className="mt-4 inline-flex items-center text-sm font-semibold"
                  style={{ color: BRAND.colors.green }}
                >
                  See the full service
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

      {/* Service area */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-2xl font-bold sm:text-3xl"
              style={{ color: BRAND.colors.navy }}
            >
              Where we work
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Madison, Dane County, and southern Wisconsin. We have dedicated
              local pages for each of the cities and Madison neighborhoods we
              work in most often — from Sun Prairie and Verona to Maple Bluff
              and Marquette / Third Lake Ridge.
            </p>
            <p className="mt-3 text-base text-gray-700">
              Don&apos;t see your town listed?{" "}
              <Link
                href="/contact"
                className="underline"
                style={{ color: BRAND.colors.green }}
              >
                Call or message us
              </Link>{" "}
              — we work outside the city pages all the time.
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
