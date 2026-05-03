import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { BUSINESS, BRAND, DEFENDER_SHIELD } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { FinalCTA } from "@/components/sections/FinalCTA";

/**
 * /defender-shield — the strategic centerpiece. Lead-only positioning per
 * Neighborhood Strategy §3: every CTA goes to the contact form or the phone.
 * No "Enroll for $295/year" button anywhere. No Stripe. No automated billing
 * UI. Comparison wording stays generic — "typical roofing maintenance plans"
 * — never names the competitor.
 */

export const metadata = pageMetadata({
  title: "The Defender Shield — Annual Home Protection Plan | Madison",
  description:
    "The Defender Shield is Home Defender Remodeling's annual home protection plan. Roof + gutters + storm response + insurance help — all for one yearly fee.",
  path: "/defender-shield",
});

const BENEFITS: Array<{ title: string; body: string }> = [
  {
    title: "30-point full exterior inspection",
    body: "Once a year we inspect your roof, gutters, visible siding, window seals, flashing, and ventilation. Photos and a written summary so you know what's holding up and what to budget for.",
  },
  {
    title: "Annual gutter cleaning + downspout flush",
    body: "We clean the gutters AND flush the downspouts every fall. Most contractors do one or the other. Both matter — clogged downspouts back water into the fascia even when the trough is clear.",
  },
  {
    title: "20% off any repair",
    body: "If we find something during your inspection — or if anything breaks during the year — you get 20% off our standard repair pricing. Not 5%. A real discount.",
  },
  {
    title: "Priority response with a 24-hour callback guarantee",
    body: "Members move to the front of the line when storms hit. We guarantee a callback within 24 hours, even during the busiest weeks of the year when others are quoting 2–3 weeks out.",
  },
  {
    title: "Free post-storm damage assessment",
    body: "After any major weather event in Madison or Dane County — hail, severe wind, ice — we come inspect your home for damage. No charge. Catch problems before they get expensive.",
  },
  {
    title: "Insurance claim documentation",
    body: "If your home suffers covered damage, we handle the documentation that matters: detailed photos, written scope of work, and direct communication with your insurance adjuster.",
  },
  {
    title: "Transferable to the next homeowner",
    body: "If you sell, the remaining months of your plan transfer to the new homeowner automatically. No paperwork, no fees — a tangible add-on at closing.",
  },
  {
    title: "Annual maintenance summary report",
    body: "A written report tracking your home exterior's condition year over year. Plan ahead. No surprises.",
  },
];

// Comparison row tuples: feature, Defender Shield, "typical maintenance plans"
const COMPARISON: Array<{ feature: string; ours: string; theirs: string }> = [
  { feature: "Inspection scope", ours: "30-point full exterior (roof, gutters, siding, flashing, seals)", theirs: "Roof only" },
  { feature: "Annual gutter service", ours: "Cleaning + downspout flush", theirs: "Cleaning only" },
  { feature: "Repair discount", ours: "20% off all repairs", theirs: "10–15% off repairs" },
  { feature: "Emergency response", ours: "24-hour callback guarantee", theirs: "Priority service, no guarantee" },
  { feature: "Post-storm assessment", ours: "Free, after every major storm", theirs: "Not included" },
  { feature: "Insurance documentation", ours: "Photos, scope, adjuster communication", theirs: "Not included" },
  { feature: "Plan transfer when you sell", ours: "Yes — transfers to new owner", theirs: "Not included" },
  { feature: "Annual summary report", ours: "Yes — tracks condition year-over-year", theirs: "Not included" },
];

const FAQS: Array<{ question: string; answer: string }> = [
  {
    question: "When does my plan start?",
    answer:
      "Your plan starts the day you enroll. Your first inspection is scheduled within 30 days, and the renewal date is set 12 months from your enrollment date.",
  },
  {
    question: "What if I just had a new roof installed?",
    answer:
      "Even better. The Defender Shield documents your roof's condition from the start, which becomes critical evidence if you ever need to file a warranty claim with the manufacturer or a damage claim with your insurance.",
  },
  {
    question: "What if I sell my house?",
    answer:
      "The remaining months of your plan transfer to the new homeowner automatically. No paperwork, no fees. Just one more reason your home stands out at closing.",
  },
  {
    question: "What's NOT included?",
    answer:
      "The Defender Shield includes inspection, annual gutter cleaning, priority service, storm response, and insurance documentation. It does not include the cost of repairs themselves — but plan members get 20% off our standard rates on any work that's needed.",
  },
  {
    question: "How do I enroll?",
    answer:
      "Call us at (608) 925-3576 or schedule a free in-home consultation. We'll walk through the program, answer your questions, and enroll you in person. We don't take online enrollment or automated payments — every Defender Shield member gets the same direct, person-to-person treatment.",
  },
  {
    question: "How do I pay?",
    answer:
      "Defender Shield members are invoiced annually. We accept check or credit card (over the phone), or financing through Synchrony for those who prefer monthly payments. Whatever works best for you. No automated charges, no online portals — we keep it simple.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Yes. You can cancel your renewal at any time. We don't auto-charge — every renewal is invoiced and you have the option to renew or not. If you decide the plan isn't right for you partway through your year, just let us know.",
  },
  {
    question: "Does this cover my entire property?",
    answer:
      "The Defender Shield covers your primary residence — roof, gutters, exterior visible from the ground, window seals, and flashing. Detached structures (sheds, garages, outbuildings) can be added for $50/year each.",
  },
];

export default function DefenderShieldPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LocalBusinessSchema />
      <FAQSchema faqs={FAQS} />

      {/* Hero */}
      <section style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}>
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: BRAND.colors.green }}
            >
              Annual Home Protection Plan · ${DEFENDER_SHIELD.pricePerYear}/year
            </p>
            <h1 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              The Defender Shield — One Plan. Total Home Protection.
            </h1>
            <p className="mt-5 text-base sm:text-lg opacity-90">
              Your home&apos;s exterior takes a beating from Wisconsin weather every
              year. Ice, hail, wind, snowmelt, sun — every season chips away at
              something. Most Madison homeowners only call a contractor when
              something goes wrong, by which point the repair costs ten times
              what prevention would have.
            </p>
            <p className="mt-3 text-base sm:text-lg opacity-90">
              The Defender Shield changes that. For a single annual fee, our
              team inspects your entire home exterior, cleans your gutters,
              gives you priority access when storms hit, and handles your
              insurance documentation if anything happens. One plan. One fee.
              Total protection.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={DEFENDER_SHIELD.primaryCtaHref}
                className="inline-flex items-center justify-center rounded-btn px-6 py-3 text-base font-semibold"
                style={{ backgroundColor: BRAND.colors.green, color: "#ffffff" }}
              >
                {DEFENDER_SHIELD.primaryCta}
              </Link>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="inline-flex items-center justify-center rounded-btn border border-white/30 px-6 py-3 text-base font-semibold hover:bg-white/10"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
            <p className="mt-3 text-sm opacity-70">
              {DEFENDER_SHIELD.secondaryLine}
            </p>
          </div>
        </Container>
      </section>

      {/* Everything included */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-2xl font-medium sm:text-3xl"
              style={{ color: BRAND.colors.navy }}
            >
              Everything The Defender Shield includes
            </h2>
            <p className="mt-3 text-base text-gray-700">
              Eight benefits, one annual fee, zero surprises. Designed to be the
              most comprehensive home protection plan available to Madison
              homeowners.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <article
                key={b.title}
                className="rounded-img border border-gray-200 bg-white p-6"
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: BRAND.colors.green }}
                >
                  Benefit {i + 1}
                </p>
                <h3
                  className="mt-2 text-lg font-semibold"
                  style={{ color: BRAND.colors.navy }}
                >
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{b.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Why preventative care saves money */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-2xl font-medium sm:text-3xl"
              style={{ color: BRAND.colors.navy }}
            >
              Why preventative care saves money
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Most roof replacements happen 3–5 years earlier than they had to.
              The reason is almost always the same: small problems that went
              undetected until they became big problems.
            </p>
            <p className="mt-4 text-base text-gray-700">
              A single missing shingle, left alone for a winter, lets ice and
              water work into the underlayment. By spring, you&apos;ve got a
              leak. By summer, mold in the attic. By fall, you&apos;re getting
              quotes for a full replacement that could have been a $200 repair
              if anyone had been looking.
            </p>
            <p className="mt-4 text-base text-gray-700">
              The Defender Shield exists to make sure someone is looking. Once
              a year, our team does what you don&apos;t have time to do
              yourself: get on the roof, walk the gutters, check the seals, and
              document everything. The first time it catches a $100 problem
              before it becomes a $5,000 problem, the plan has paid for itself
              for the next 50 years.
            </p>
          </div>
        </Container>
      </section>

      {/* Comparison table — never name the competitor */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-2xl font-medium sm:text-3xl"
              style={{ color: BRAND.colors.navy }}
            >
              How The Defender Shield compares
            </h2>
            <p className="mt-3 text-base text-gray-700">
              Versus typical roofing maintenance plans available elsewhere in
              the Madison area.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}>
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">The Defender Shield</th>
                  <th className="px-4 py-3 font-semibold">Typical maintenance plans</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td
                      className="border-t border-gray-200 px-4 py-3 font-medium"
                      style={{ color: BRAND.colors.navy }}
                    >
                      {row.feature}
                    </td>
                    <td className="border-t border-gray-200 px-4 py-3 text-gray-700">
                      {row.ours}
                    </td>
                    <td className="border-t border-gray-200 px-4 py-3 text-gray-500">
                      {row.theirs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-2xl font-medium sm:text-3xl"
              style={{ color: BRAND.colors.navy }}
            >
              Defender Shield FAQs
            </h2>
            <dl className="mt-8 space-y-6">
              {FAQS.map((f) => (
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

      {/* Final CTA — overrides per Neighborhood Strategy §3 */}
      <FinalCTA
        heading="Ready to lock in your Defender Shield?"
        body="The Defender Shield is open to homeowners across Madison and Dane County. Call (608) 925-3576 or schedule a free in-home consultation. We'll walk through the plan, answer your questions, and enroll you in person — no online forms, no automated billing, no surprises."
      />
    </main>
  );
}
