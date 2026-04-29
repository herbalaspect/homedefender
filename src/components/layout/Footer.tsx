import Link from "next/link";
import { BUSINESS, BRAND } from "@/lib/constants";
import { Container } from "./Container";

const NAV_COLUMNS: Array<{ heading: string; links: Array<{ href: string; label: string }> }> = [
  {
    heading: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/service/roofing", label: "Roofing" },
      { href: "/service/gutter-protection", label: "Gutter Protection" },
      { href: "/service/windows", label: "Windows" },
      { href: "/defender-shield", label: "The Defender Shield" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}>
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-lg font-semibold">{BUSINESS.name}</p>
            <p className="mt-3 text-sm opacity-80">
              Roofing, gutters, and windows for Madison, Dane County, and southern
              Wisconsin. Free estimates, written warranties, no high-pressure sales.
            </p>
            <address className="mt-4 not-italic text-sm opacity-90">
              <p>{BUSINESS.address.streetAddress}</p>
              <p>
                {BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion}{" "}
                {BUSINESS.address.postalCode}
              </p>
              <p className="mt-2">
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="hover:underline"
                  style={{ color: BRAND.colors.green }}
                >
                  {BUSINESS.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${BUSINESS.email}`} className="hover:underline">
                  {BUSINESS.email}
                </a>
              </p>
            </address>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${BUSINESS.name} on Facebook`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
                </svg>
              </a>
              <a
                href={BUSINESS.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${BUSINESS.name} on Google Maps`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
              </a>
            </div>
          </div>

          {NAV_COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-semibold uppercase tracking-wider opacity-90">
                {col.heading}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="opacity-90 hover:opacity-100 hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs opacity-70 flex flex-col gap-2 sm:flex-row sm:justify-between">
          <p>
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
          <p>
            Serving Madison, Dane County, and southern Wisconsin.
          </p>
        </div>
      </Container>
    </footer>
  );
}
