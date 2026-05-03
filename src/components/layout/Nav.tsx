"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BUSINESS, BRAND } from "@/lib/constants";
import { Container } from "./Container";

const HEADER_LOGO =
  "/images/676573629ab794e176dde87e/676583b14b52c1e8ca6a2385_hdr-logo-top.svg";

interface NavLink {
  href: string;
  label: string;
}

interface NavGroup {
  label: string;
  href: string; // landing page for the category
  items: NavLink[];
}

const ROOFING: NavGroup = {
  label: "Roofing",
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
  label: "Gutters",
  href: "/service/gutter-protection",
  items: [
    { href: "/services/gutter/gutter-installation", label: "Gutter Installation" },
    { href: "/services/gutter/gutter-replacement", label: "Gutter Replacement" },
    { href: "/services/gutter/gutter-repair", label: "Gutter Repair" },
    { href: "/services/gutter/gutter-cleaning", label: "Gutter Cleaning" },
  ],
};

const TOP_LINKS: NavLink[] = [
  { href: "/service/windows", label: "Windows" },
  { href: "/defender-shield", label: "Defender Shield" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header
      className="sticky top-0 z-40 border-b border-white/10"
      style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}
    >
      <Container as="nav" className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label={`${BUSINESS.name} home`}
        >
          <Image
            src={HEADER_LOGO}
            alt={BUSINESS.name}
            width={180}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <DesktopGroup group={ROOFING} openGroup={openGroup} setOpenGroup={setOpenGroup} />
          <DesktopGroup group={GUTTERS} openGroup={openGroup} setOpenGroup={setOpenGroup} />
          {TOP_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium hover:opacity-80"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="ml-2 rounded-btn px-4 py-2 text-sm font-semibold"
            style={{ backgroundColor: BRAND.colors.green, color: "#ffffff" }}
          >
            {BUSINESS.phone}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-btn hover:bg-white/10"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
      </Container>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-white/10"
          style={{ backgroundColor: BRAND.colors.navy }}
        >
          <Container className="py-4 space-y-4">
            <MobileGroup group={ROOFING} onLinkClick={() => setMobileOpen(false)} />
            <MobileGroup group={GUTTERS} onLinkClick={() => setMobileOpen(false)} />
            {TOP_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-2 text-base font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="block w-full rounded-btn px-4 py-3 text-center text-base font-semibold"
              style={{ backgroundColor: BRAND.colors.green, color: "#ffffff" }}
            >
              Call {BUSINESS.phone}
            </a>
          </Container>
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
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium hover:opacity-80"
        aria-expanded={isOpen}
      >
        {group.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Link>
      {isOpen && (
        <div className="absolute left-0 top-full pt-1">
          <ul
            className="min-w-[260px] rounded-btn border border-black/5 bg-white py-2 shadow-lg"
            style={{ color: BRAND.colors.navy }}
          >
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm hover:bg-black/5"
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
      <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-base font-medium">
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
      <ul className="mt-1 space-y-1 pl-4 text-sm opacity-90">
        <li>
          <Link href={group.href} className="block py-1.5" onClick={onLinkClick}>
            All {group.label}
          </Link>
        </li>
        {group.items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="block py-1.5" onClick={onLinkClick}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
