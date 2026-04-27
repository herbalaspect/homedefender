import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

interface ServiceCard {
  href: string;
  title: string;
  description: string;
}

/**
 * Roofing leads — the brand strategy is roofing-led. Order matters here.
 */
const SERVICES: ServiceCard[] = [
  {
    href: "/service/roofing",
    title: "Roofing",
    description:
      "Full roof replacements, storm damage repairs, and emergency response. Asphalt shingle and metal options for Wisconsin weather.",
  },
  {
    href: "/service/gutter-protection",
    title: "Gutter Protection",
    description:
      "Seamless gutter installation, repair, cleaning, and guard systems that keep leaves, pine needles, and ice dams from clogging your runs.",
  },
  {
    href: "/service/windows",
    title: "Windows",
    description:
      "Energy-efficient replacement windows that cut drafts and lower winter heating bills, with quiet, professional installation.",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2
            className="text-2xl font-bold sm:text-3xl"
            style={{ color: BRAND.colors.navy }}
          >
            Three services. One local team.
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Roofing leads what we do. Gutter protection and windows are how we
            keep the rest of the exterior weather-tight without sending you to
            three different contractors.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3
                className="text-lg font-semibold"
                style={{ color: BRAND.colors.navy }}
              >
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{s.description}</p>
              <p
                className="mt-4 inline-flex items-center text-sm font-semibold"
                style={{ color: BRAND.colors.green }}
              >
                Learn more
                <span className="ml-1 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
