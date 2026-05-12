import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { BUSINESS, BRAND } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { FinalCTA } from "@/components/sections/FinalCTA";

/**
 * /about — fixes the live-site bugs CLAUDE.md flags: brand name "Home Defender"
 * (alone) is replaced with "Home Defender Remodeling", and the service-area
 * line that listed Milwaukee/Green Bay/Kenosha is corrected to Madison and
 * Dane County. Tone follows the plainspoken-no-superlatives rule.
 */

export const metadata = pageMetadata({
  title: "About Home Defender Remodeling | Madison Roofing Contractor",
  description:
    "Local Madison roofing and home-improvement contractor serving Dane County. How we work, what we stand behind, and why the warranty is in writing.",
  path: "/about",
});

const VALUES: Array<{ title: string; body: string }> = [
  {
    title: "Workmanship in writing",
    body: "Every job comes with a written workmanship warranty plus the manufacturer's product warranty. Both are handed over at the final walkthrough — no fine print, no asterisks, no chasing paperwork after we leave.",
  },
  {
    title: "Estimates that match the invoice",
    body: "Written estimate within 1–2 business days of the inspection. The price you sign on is the price you pay unless we open the roof and find rot — in which case we stop, document, and call before billing for anything extra.",
  },
  {
    title: "Local crew, local accountability",
    body: "We live and work in Madison and Dane County. The same person who quotes the job runs the crew on it, and we're going to see you again — at the grocery store, at the kid's soccer game, at the next storm. That changes how we work.",
  },
  {
    title: "Plain talk on what your house needs",
    body: "If repair makes more sense than replacement, we'll say so. If a competitor's bid is fair, we'll say so. The Defender Shield isn't right for every home — we'll tell you when it isn't. Honest answers cost us occasional revenue and earn us referrals.",
  },
];
const SERVICE_AREA = BUSINESS.serviceAreas;

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LocalBusinessSchema />

      {/* Hero */}
      <section
        className="relative isolate overflow-hidden"
        style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}
      >
        <HeroBackground src="/images/hero_about-hero.webp" />
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: BRAND.colors.green }}
            >
              About Us
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
              A local Madison roofing crew that has to live with its work.
            </h1>
            <p className="mt-5 text-base sm:text-lg opacity-90">
              {BUSINESS.name} is a roofing-led home improvement contractor
              serving Madison, Dane County, and southern Wisconsin. We
              replace, repair, and inspect roofs, install seamless gutters and
              gutter protection, and replace failing windows. Roofing is the
              core of what we do — gutters and windows are the systems that
              keep a roof working.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-btn px-6 py-3 text-base font-semibold"
                style={{ backgroundColor: BRAND.colors.green, color: "#ffffff" }}
              >
                Schedule a Free Estimate
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

      {/* How we work */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div className="max-w-3xl">
              <h2
                className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
                style={{ color: BRAND.colors.navy }}
              >
                How we work
              </h2>
              <p className="mt-4 text-base text-gray-700">
                Most of the homes we work on are 1950s–1990s asphalt-shingle
                roofs in Madison and Dane County — the kind that take a beating
                from hail, ice damming, and the freeze/thaw cycle every year.
                That focus shapes everything we do: we know what fails on a
                Wisconsin roof, we know the local permit offices, and we know
                which storms an insurance adjuster is going to dispute.
              </p>
              <p className="mt-4 text-base text-gray-700">
                We don&apos;t run sales-driven appointments. The first visit is
                a physical inspection — we climb the roof, take photos, walk
                the attic when relevant, and write up what we find. The
                estimate that follows is itemized, written, and arrives within
                a couple business days. If you decide to move forward, the
                crew that shows up is our crew, not subcontractors we&apos;ve
                never met.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-img border border-gray-200">
              <Image
                src="/images/about_our-story.webp"
                alt="Home Defender Remodeling crew at work on a Madison roofing project"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {VALUES.map((v) => (
              <article
                key={v.title}
                className="rounded-img border border-gray-200 bg-white p-6"
              >
                <h3
                  className="text-lg font-semibold"
                  style={{ color: BRAND.colors.navy }}
                >
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700">{v.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Service area */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
              style={{ color: BRAND.colors.navy }}
            >
              Where we work
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Madison, Dane County, and southern Wisconsin. We have dedicated
              city pages and Madison neighborhood pages for the places we work
              in most often, with notes on permitting, architectural review,
              and weather patterns specific to each area.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700 sm:grid-cols-3">
              {SERVICE_AREA.map((city) => (
                <li key={city}>{city}, WI</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              Outside this list? Call us — if you&apos;re in Dane County or a
              neighboring township, we likely still serve your area.
            </p>
          </div>
        </Container>
      </section>

      {/* What we don't do */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
              style={{ color: BRAND.colors.navy }}
            >
              What we don&apos;t do
            </h2>
            <p className="mt-4 text-base text-gray-700">
              No high-pressure closing. No &ldquo;today only&rdquo; pricing.
              No subcontracted crews you&apos;ve never met until the day they
              show up. No vague estimates designed to grow once work starts.
              No automated billing for our annual home protection plan — the
              Defender Shield is invoiced once a year, by a person, with the
              option to renew or not.
            </p>
            <p className="mt-4 text-base text-gray-700">
              And no claims we can&apos;t back up. We don&apos;t advertise
              certifications we don&apos;t have, ratings we haven&apos;t
              earned, or a year-of-founding we can&apos;t document. The work
              is the proof.
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
