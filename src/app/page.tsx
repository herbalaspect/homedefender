import { BUSINESS, BRAND } from "@/lib/constants";

/**
 * Placeholder homepage for Prompt 0. Replaced in Prompt 3 with the real
 * Hero / Services / Why / Process / Testimonials / Defender Shield Upsell /
 * Service Area / CTA sections per Content Library §"Page 1 — Homepage."
 */
export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section
        className="px-6 py-24 sm:py-32"
        style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}
      >
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold sm:text-4xl">
            {BUSINESS.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg">
            Madison roofing, gutters, and windows — built for Wisconsin
            weather.
          </p>
          <p className="mt-2 text-sm opacity-80">
            Scaffold placeholder. Replaced in Prompt 3.
          </p>
        </div>
      </section>
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl text-sm">
          <p>
            Call{" "}
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="font-medium underline"
              style={{ color: BRAND.colors.green }}
            >
              {BUSINESS.phone}
            </a>{" "}
            for a free estimate. Serving Madison, Dane County, and southern
            Wisconsin.
          </p>
        </div>
      </section>
    </main>
  );
}
