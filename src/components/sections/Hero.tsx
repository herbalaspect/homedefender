import Link from "next/link";
import Image from "next/image";
import { BUSINESS, BRAND } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

const HERO_IMAGE =
  "/images/676573629ab794e176dde87e/6772af2540850ea323415b3a_Home.png";

export function Hero() {
  return (
    <section
      style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}
      className="relative overflow-hidden"
    >
      <Container className="py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: BRAND.colors.green }}
            >
              Madison · Dane County · Southern Wisconsin
            </p>
            <h1 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              Madison Roofing, Gutters &amp; Windows | Built for Wisconsin Weather
            </h1>
            <p className="mt-5 text-base sm:text-lg opacity-90 max-w-2xl">
              Roof replacements, repairs, and gutter protection from a local team
              that&apos;s seen what Wisconsin winters and summer hailstorms do to
              a house. Free estimates, written warranties, no high-pressure sales.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-btn px-6 py-3 text-base font-semibold"
                style={{ backgroundColor: BRAND.colors.green, color: "#ffffff" }}
              >
                Get a Free Estimate
              </Link>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="inline-flex items-center justify-center rounded-btn border border-white/30 px-6 py-3 text-base font-semibold hover:bg-white/10"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src={HERO_IMAGE}
              alt="Home Defender Remodeling roofing crew in Madison, WI"
              width={1040}
              height={780}
              priority
              className="h-auto w-full rounded-img object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
