import { pageMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FinalCTA } from "@/components/sections/FinalCTA";

/**
 * /how-much-does-roof-replacement-cost-madison — pricing transparency page.
 * Copy is from Content Library §4.3 verbatim. Lead-only CTA per
 * Neighborhood Strategy §3 — no payment UI.
 */

export const metadata = pageMetadata({
  title: "Roof Replacement Cost in Madison, WI — 2026 Pricing Guide",
  description:
    "Madison roof replacement pricing for 2026: $9,000–$22,000 typical. Cost drivers, ranges by home type, financing — actual numbers from a local contractor.",
  path: "/how-much-does-roof-replacement-cost-madison",
});

const COST_DRIVERS: Array<{ heading: string; body: string }> = [
  {
    heading: "1. Roof size (square footage)",
    body: "Pricing is typically calculated per 'square,' which equals 100 square feet of roof surface. A typical Madison single-family home has 20–35 squares of roof surface. The base cost per square varies by material — see the next section. A 1,500 sq ft single-story ranch typically has 18–22 squares of roof. A 2,500 sq ft two-story with a moderate pitch has around 25–30 squares. A larger 3,500+ sq ft home or a steep complex roof can run 35–50 squares.",
  },
  {
    heading: "2. Material choice",
    body: "Architectural asphalt shingles run $400–$600 per square installed. Premium architectural shingles (lifetime warranty grades) run $550–$700 per square. Metal roofing runs $1,000–$1,500 per square installed for standard panels, higher for premium standing seam systems. Tile and slate are significantly more — $1,500–$2,500+ per square — and uncommon in Wisconsin's climate.",
  },
  {
    heading: "3. Roof complexity",
    body: "Steeper pitches require more labor (and special safety equipment). Multiple gables, dormers, valleys, and skylights all add to flashing complexity and labor hours. A simple gable roof costs roughly 20–30% less per square foot than a complex roof of the same size.",
  },
  {
    heading: "4. Tear-off and structural condition",
    body: "If your existing roof has only one layer of shingles, tear-off costs are minimal. Two layers (which Wisconsin code now disallows for new installs but is common on older homes) doubles tear-off labor and disposal costs. If we find rotted decking during tear-off, replacement of damaged plywood adds $50–$100 per sheet.",
  },
  {
    heading: "5. Accessories and upgrades",
    body: "Ice and water shield, synthetic underlayment, ridge vents, drip edge, and proper flashing all add to material cost but extend roof life. Cheaping out on accessories saves a few hundred dollars upfront and costs thousands later. We don't recommend it.",
  },
];

const HOME_TYPES: Array<{ type: string; surface: string; price: string }> = [
  {
    type: "Small ranch home (1,200–1,600 sq ft)",
    surface: "~18–22 squares",
    price: "$9,000–$13,000",
  },
  {
    type: "Mid-size home (1,800–2,400 sq ft, two-story)",
    surface: "~22–28 squares",
    price: "$11,500–$15,500",
  },
  {
    type: "Larger home (2,500–3,500 sq ft, complex roof)",
    surface: "~30–40 squares",
    price: "$14,000–$20,000",
  },
  {
    type: "Premium home (3,500+ sq ft, complex roof, premium materials)",
    surface: "40+ squares",
    price: "$18,000–$30,000+",
  },
];

export default function CostPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LocalBusinessSchema />

      {/* Hero */}
      <section style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}>
        <Container className="py-14 sm:py-20">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: BRAND.colors.green }}
            >
              Pricing Transparency · 2026
            </p>
            <h1 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              How Much Does a Roof Replacement Cost in Madison, WI? Complete 2026 Pricing Guide
            </h1>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-5 text-base text-gray-800">
            <p>
              Most roofing companies won&apos;t tell you what a roof actually
              costs. They want you to call, schedule an in-home estimate, and
              only learn pricing after you&apos;ve invested time in the
              conversation. That&apos;s a sales tactic — not customer service.
            </p>
            <p>We think Madison homeowners deserve straight numbers. So we wrote this guide.</p>
            <p>
              For 2026, the realistic price range for a full roof replacement
              in Madison and the surrounding Dane County area is{" "}
              <strong>$9,000 to $22,000</strong>. Most homes fall in the{" "}
              <strong>$11,000 to $16,000</strong> range. Below, we break down
              exactly what drives those numbers — roof size, material,
              complexity, accessories, and the variables homeowners often
              don&apos;t know about until they&apos;re staring at the estimate.
            </p>
            <p>
              A few caveats up front. These ranges reflect typical replacement
              projects. Insurance-claim work, commercial properties, structural
              repairs, and exotic materials (slate, premium tile, custom metal
              systems) can fall outside these ranges. The only way to know
              exactly what your roof will cost is an in-person inspection —
              anyone giving you a firm number over the phone before seeing
              your roof is guessing.
            </p>
            <p>
              We inspect for free. We document with photos. We give you a
              written estimate within 1–2 business days. And we never use
              high-pressure sales tactics. If you&apos;re shopping for roofing
              in Madison, the rest of this guide should help you understand
              what you&apos;re going to be paying for.
            </p>
            <p>Let&apos;s break it down.</p>
          </div>
        </Container>
      </section>

      {/* Cost drivers */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-2xl font-medium sm:text-3xl"
              style={{ color: BRAND.colors.navy }}
            >
              The five biggest cost drivers
            </h2>
            <div className="mt-8 space-y-8">
              {COST_DRIVERS.map((d) => (
                <article key={d.heading}>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: BRAND.colors.navy }}
                  >
                    {d.heading}
                  </h3>
                  <p className="mt-2 text-base text-gray-800">{d.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Realistic ranges by home type */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-2xl font-medium sm:text-3xl"
              style={{ color: BRAND.colors.navy }}
            >
              Realistic price ranges by home type
            </h2>
            <p className="mt-4 text-base text-gray-800">
              Below is a breakdown of typical price ranges for common
              Madison-area home types. These assume single-layer tear-off,
              architectural asphalt shingles, and standard accessories.
              Premium materials, complex roofs, or structural repairs would
              add to these ranges.
            </p>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}>
                    <th className="px-4 py-3 font-semibold">Home type</th>
                    <th className="px-4 py-3 font-semibold">Roof surface</th>
                    <th className="px-4 py-3 font-semibold">Typical replacement cost</th>
                  </tr>
                </thead>
                <tbody>
                  {HOME_TYPES.map((row, i) => (
                    <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td
                        className="border-t border-gray-200 px-4 py-3 font-medium"
                        style={{ color: BRAND.colors.navy }}
                      >
                        {row.type}
                      </td>
                      <td className="border-t border-gray-200 px-4 py-3 text-gray-700">
                        {row.surface}
                      </td>
                      <td className="border-t border-gray-200 px-4 py-3 text-gray-700">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Financing */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-2xl font-medium sm:text-3xl"
              style={{ color: BRAND.colors.navy }}
            >
              Financing and payment options
            </h2>
            <p className="mt-4 text-base text-gray-800">
              Roof replacement is a significant investment. Home Defender
              Remodeling offers financing through Synchrony, including:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-base text-gray-800">
              <li>0% interest short-term plans (typically 12 months)</li>
              <li>Low monthly payment plans (up to 10 years)</li>
              <li>No prepayment penalties</li>
            </ul>
            <p className="mt-4 text-base text-gray-800">
              We can run a soft credit check during your estimate to give you
              exact monthly payment options before you commit. No surprises,
              no hidden fees.
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA
        heading="Want a real number for your specific home?"
        body="Schedule a free roof inspection. We'll come out, climb the roof, document the condition, and give you a written estimate within 1–2 business days. No pressure, no sales pitch."
      />
    </main>
  );
}
