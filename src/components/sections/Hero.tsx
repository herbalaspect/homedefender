import Link from "next/link";
import { BUSINESS, BRAND } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

/**
 * Homepage hero. H1 enforces the canonical "Madison Roofing, Gutters & Windows
 * | Built for Wisconsin Weather" wording per the Brief Prompt 3.
 */
export function Hero() {
  return (
    <section
      style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}
      className="relative overflow-hidden"
    >
      <Container className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: BRAND.colors.green }}
          >
            Madison · Dane County · Southern Wisconsin
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Madison Roofing, Gutters &amp; Windows | Built for Wisconsin Weather
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-90 max-w-2xl">
            Roof replacements, repairs, and gutter protection from a local team
            that&apos;s seen what Wisconsin winters and summer hailstorms do to
            a house. Free estimates, written warranties, no high-pressure sales.
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
  );
}
