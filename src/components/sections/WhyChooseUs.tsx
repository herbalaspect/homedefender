import { BRAND } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

const POINTS: Array<{ heading: string; body: string }> = [
  {
    heading: "Local to Madison and Dane County",
    body: "We live and work here. Every estimate is from someone who has driven your street before.",
  },
  {
    heading: "Written warranties, in plain English",
    body: "Workmanship and manufacturer warranties spelled out before you sign anything. No mystery clauses.",
  },
  {
    heading: "Transparent pricing",
    body: "Estimates list materials, labor, and dump fees as separate line items. No vague \"project total\" surprises.",
  },
  {
    heading: "Insurance claim help",
    body: "We document storm damage so your adjuster has what they need, and we'll be on-site for the inspection if you want.",
  },
  {
    heading: "Plainspoken, no high-pressure sales",
    body: "If your roof has another five years in it, we'll tell you. We're not paid to talk anyone into a replacement they don't need.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <h2
            className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
            style={{ color: BRAND.colors.navy }}
          >
            Why Madison homeowners choose us
          </h2>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {POINTS.map((p) => (
            <li key={p.heading} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: BRAND.colors.green }}
              >
                ✓
              </span>
              <div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: BRAND.colors.navy }}
                >
                  {p.heading}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
