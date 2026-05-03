import { BRAND } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

/**
 * 5-step process — used on the homepage and on every city/neighborhood page
 * via the master template (Content Library §2). Keep wording stable across
 * pages.
 */
const STEPS: Array<{ title: string; body: string }> = [
  {
    title: "Free inspection",
    body: "We come out, climb the roof, and walk the property. You get an honest assessment, not a sales pitch.",
  },
  {
    title: "Written estimate and materials",
    body: "Line-itemed estimate, options for materials and warranty length, and time to think it over.",
  },
  {
    title: "Permits and scheduling",
    body: "We pull the City of Madison or Dane County permit and book a date that works around your weather window.",
  },
  {
    title: "Installation",
    body: "Crews show up on time, tarp landscaping, and clean as they go. Most replacements finish in one to two days.",
  },
  {
    title: "Cleanup and walkthrough",
    body: "Magnetic sweep for nails, debris removed, final walkthrough with you, and warranty paperwork in your hand.",
  },
];

export function Process() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2
            className="text-2xl font-medium sm:text-3xl"
            style={{ color: BRAND.colors.navy }}
          >
            How a roof replacement actually works
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Five steps, in order, no surprises. Same process for repairs and
            gutter installs — fewer steps, same approach.
          </p>
        </div>
        <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="rounded-img border border-gray-200 bg-white p-5"
            >
              <div
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: BRAND.colors.green }}
              >
                Step {i + 1}
              </div>
              <h3
                className="mt-2 text-base font-semibold"
                style={{ color: BRAND.colors.navy }}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
