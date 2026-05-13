import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: "Page Not Found | Home Defender Remodeling",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex-1">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#3A7D5C]">
            404
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            The page you&apos;re looking for may have moved or no longer exists.
            Try one of the links below, or call us directly.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-btn bg-[#1A2E3B] px-8 py-4 text-base font-medium text-white hover:bg-[#1A2E3B]/90"
            >
              Back to homepage
            </Link>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center justify-center rounded-btn border-[1.5px] border-[#1A2E3B] px-8 py-4 text-base font-medium text-[#1A2E3B] hover:bg-gray-50"
            >
              Call {BUSINESS.phone}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
            {[
              { href: "/services", label: "All services" },
              { href: "/service/roofing", label: "Roofing" },
              { href: "/service/gutter-protection", label: "Gutter protection" },
              { href: "/service/windows", label: "Windows" },
              { href: "/service/siding", label: "Siding" },
              { href: "/defender-shield", label: "The Defender Shield" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact us" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-img border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900 hover:border-gray-400 hover:bg-gray-50"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
