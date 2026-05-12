"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BUSINESS } from "@/lib/constants";

const HEADER_LOGO =
  "/images/676573629ab794e176dde87e/688dbd4055a6972d91949d3f_HomeDefenderLogoBlack.png";

interface NavLink {
  href: string;
  label: string;
}

interface NavGroup {
  label: string;
  href: string;
  items: NavLink[];
}

const ROOFING: NavGroup = {
  label: "Roofing Services",
  href: "/service/roofing",
  items: [
    { href: "/services/roofing/roof-replacement", label: "Roof Replacement" },
    { href: "/services/roofing/roof-repair", label: "Roof Repair" },
    { href: "/services/roofing/emergency-roof-repair", label: "Emergency Roof Repair" },
    { href: "/services/roofing/roof-inspection-madison-wi", label: "Roof Inspection" },
    { href: "/services/roofing/asphalt-shingle-roofing", label: "Asphalt Shingle Roofing" },
    { href: "/services/roofing/metal-roofing", label: "Metal Roofing" },
  ],
};

const GUTTERS: NavGroup = {
  label: "Gutter Services",
  href: "/service/gutter-protection",
  items: [
    { href: "/service/gutter-protection", label: "Gutter Protection" },
    { href: "/services/gutter/gutter-installation", label: "Gutter Installation" },
    { href: "/services/gutter/gutter-replacement", label: "Gutter Replacement" },
    { href: "/services/gutter/gutter-cleaning", label: "Gutter Cleaning" },
    { href: "/services/gutter/gutter-repair", label: "Gutter Repair" },
  ],
};

const SIDING: NavGroup = {
  label: "Siding Services",
  href: "/service/siding",
  items: [
    { href: "/services/siding/siding-replacement", label: "Siding Replacement" },
    { href: "/services/siding/siding-repair", label: "Siding Repair" },
    { href: "/services/siding/vinyl-siding", label: "Vinyl Siding" },
    { href: "/services/siding/fiber-cement-siding", label: "Fiber-Cement Siding" },
  ],
};

const TOP_LINKS: NavLink[] = [
  { href: "/service/windows", label: "Window Service" },
  { href: "/defender-shield", label: "Defender Shield" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 text-gray-900">
      <div className="mx-auto flex min-h-[4.5rem] max-w-[1200px] items-center justify-between gap-8 px-6 lg:px-10">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center"
          aria-label={`${BUSINESS.name} home`}
        >
          <Image
            src={HEADER_LOGO}
            alt={BUSINESS.name}
            width={263}
            height={56}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden lg:flex flex-1 items-center justify-end gap-7">
          <DesktopGroup group={ROOFING} openGroup={openGroup} setOpenGroup={setOpenGroup} />
          <DesktopGroup group={GUTTERS} openGroup={openGroup} setOpenGroup={setOpenGroup} />
          <DesktopGroup group={SIDING} openGroup={openGroup} setOpenGroup={setOpenGroup} />
          {TOP_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium leading-none hover:text-black/70"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="ml-2 inline-flex items-center gap-2 rounded-btn bg-[#0a0a0a] px-3 py-2.5 text-[14px] font-semibold tracking-wide text-white hover:bg-black/85"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>{BUSINESS.phone}</span>
          </a>
        </nav>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-btn hover:bg-black/5"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 py-4 space-y-4">
            <MobileGroup group={ROOFING} onLinkClick={() => setMobileOpen(false)} />
            <MobileGroup group={GUTTERS} onLinkClick={() => setMobileOpen(false)} />
            <MobileGroup group={SIDING} onLinkClick={() => setMobileOpen(false)} />
            {TOP_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-2 text-[15px] font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-btn bg-[#0a0a0a] px-4 py-3 text-base font-semibold text-white"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>{BUSINESS.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function DesktopGroup({
  group,
  openGroup,
  setOpenGroup,
}: {
  group: NavGroup;
  openGroup: string | null;
  setOpenGroup: (g: string | null) => void;
}) {
  const isOpen = openGroup === group.label;
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenGroup(group.label)}
      onMouseLeave={() => setOpenGroup(null)}
    >
      <Link
        href={group.href}
        className="inline-flex items-center gap-1.5 text-[15px] font-medium leading-none hover:text-black/70"
        aria-expanded={isOpen}
      >
        {group.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Link>
      {isOpen && (
        <div className="absolute left-0 top-full pt-3">
          <ul className="min-w-[260px] rounded-btn border border-gray-200 bg-white py-2 shadow-lg">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-[15px] font-medium leading-none hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MobileGroup({
  group,
  onLinkClick,
}: {
  group: NavGroup;
  onLinkClick: () => void;
}) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-[15px] font-medium">
        <span>{group.label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-open:rotate-180"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </summary>
      <ul className="mt-1 space-y-1 pl-4 text-[15px]">
        <li>
          <Link href={group.href} className="block py-2" onClick={onLinkClick}>
            All {group.label}
          </Link>
        </li>
        {group.items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="block py-2" onClick={onLinkClick}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.55.42L135,159c-15.49-7.52-31.49-23.4-39-38.69l20.78-24.71c.15-.18.29-.36.42-.55a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z" />
    </svg>
  );
}
