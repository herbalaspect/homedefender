import Link from "next/link";
import { BRAND, BUSINESS } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

/**
 * Slug per city — must match content/cities.ts entries built in Prompt 4.
 * For now we link to the planned URL pattern; Next.js will 404 until those
 * pages exist. (That's fine for the homepage — Prompt 4 lights them up.)
 */
function citySlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function ServiceArea() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2
            className="text-2xl font-bold sm:text-3xl"
            style={{ color: BRAND.colors.navy }}
          >
            Where we work
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Madison, Dane County, and southern Wisconsin. We don&apos;t take
            work past about 45 minutes from our shop — keeps response times
            tight and crews home for dinner.
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 md:grid-cols-4">
          {BUSINESS.serviceAreas.map((city) => (
            <li key={city}>
              <Link
                href={`/services/roofing/roof-replacement-${citySlug(city)}-wi`}
                className="block rounded-md border border-gray-200 px-3 py-2 hover:border-gray-300 hover:bg-gray-50"
                style={{ color: BRAND.colors.navy }}
              >
                {city}, WI
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
