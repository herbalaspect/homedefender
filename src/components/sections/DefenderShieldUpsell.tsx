import Link from "next/link";
import { BRAND, BUSINESS, DEFENDER_SHIELD } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

const BENEFITS = [
  "30-point exterior inspection every year",
  "Annual gutter cleaning and downspout flush",
  "20% off any repair work",
  "24-hour emergency callback guarantee",
  "Free post-storm damage assessment",
  "Transferable to the next homeowner",
];

/**
 * Compact Defender Shield block for the homepage. The full /defender-shield
 * page is built in Prompt 5. Lead-only — no online enrollment, no payment UI.
 */
export function DefenderShieldUpsell() {
  return (
    <section
      className="py-16 sm:py-20"
      style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: BRAND.colors.green }}
            >
              Annual Home Protection Plan
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              {DEFENDER_SHIELD.name}: one plan, total exterior protection
            </h2>
            <p className="mt-4 text-base opacity-90 max-w-xl">
              ${DEFENDER_SHIELD.pricePerYear}/year keeps your roof, gutters, and
              attic on a predictable maintenance rhythm — small problems caught
              early instead of in the middle of a January thaw.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={DEFENDER_SHIELD.primaryCtaHref}
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold"
                style={{ backgroundColor: BRAND.colors.green, color: "#ffffff" }}
              >
                {DEFENDER_SHIELD.primaryCta}
              </Link>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-base font-semibold hover:bg-white/10"
              >
                Call to enroll
              </a>
            </div>
            <p className="mt-3 text-sm opacity-70">
              {DEFENDER_SHIELD.secondaryLine}
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ backgroundColor: BRAND.colors.green, color: "#ffffff" }}
                >
                  ✓
                </span>
                <span className="opacity-95">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
