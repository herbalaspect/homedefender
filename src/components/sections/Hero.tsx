import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

const HERO_IMAGE = "/images/hero_homepage-hero.webp";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden bg-[#0a0a0a] py-20 text-white">
      <Image
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.9))",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="max-w-[60ch]">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-[12px] font-medium uppercase tracking-[0.05em] text-white backdrop-blur-sm">
            Madison · Dane County · Southern Wisconsin
          </span>
          <h1 className="mt-5 text-balance text-4xl leading-[1.1] tracking-[-0.0125em] sm:text-5xl lg:text-6xl">
            Madison Roofing, Gutters, Windows &amp; Siding{" "}
            <strong className="font-semibold">Built for Wisconsin Weather</strong>
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-[1.5] opacity-90 sm:text-xl">
            Roof replacements, repairs, and gutter protection from a local team
            that&apos;s seen what Wisconsin winters and summer hailstorms do to
            a house. Free estimates, written warranties, no high-pressure sales.
          </p>
          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-btn border-[1.5px] border-white bg-white px-8 py-5 text-base font-medium tracking-[0.025em] text-[#0a0a0a] hover:bg-white/90"
            >
              Get a Free Estimate
            </Link>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center justify-center rounded-btn border-[1.5px] border-white/80 px-8 py-5 text-base font-medium tracking-[0.025em] text-white hover:bg-white/10"
            >
              Call {BUSINESS.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-1">
            <div className="flex items-center gap-1 text-amber-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
            </div>
            <p className="text-[15px] font-medium">
              5/5 Reviews from{" "}
              <a
                href={BUSINESS.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-80"
              >
                Google Ratings
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
    </svg>
  );
}
