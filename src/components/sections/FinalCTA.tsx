import Link from "next/link";
import { BRAND, BUSINESS } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

/**
 * Repeating final CTA block. Use on most pages — the brand strategy is
 * lead-only, so every page should resolve to a free-estimate ask.
 */
export function FinalCTA({
  heading = "Ready for a free estimate?",
  body = "Tell us about the project. We'll come out, take a look, and put a written estimate in your hand within a week.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#ffffff" }}>
      <Container>
        <div
          className="rounded-2xl px-6 py-12 sm:px-12 sm:py-16"
          style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>
            <p className="mt-3 text-base opacity-90">{body}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
        </div>
      </Container>
    </section>
  );
}
