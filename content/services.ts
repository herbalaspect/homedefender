/**
 * Service category + sub-service copy. Used by:
 *   - /service/{roofing,gutter-protection,windows}             (category overview)
 *   - /services/roofing/{roof-replacement,roof-repair,...}     (broad sub-service)
 *   - /services/roofing/{storm-damage-...,roof-inspection-...} (geo-targeted)
 *   - /services/gutter/{installation,replacement,cleaning,repair}
 *
 * The 11 city pages and 6 neighborhood pages live in `cities.ts`, not here —
 * they share the CityPageTemplate, which is templated against location.
 *
 * Source of voice: CLAUDE.md "Tone" + Content Library §4 (storm-damage and
 * roof-inspection are verbatim; the other sub-services are written to match).
 */

export type ServiceCategorySlug = "roofing" | "gutter-protection" | "windows" | "siding";

/** Hero image paths. Category-specific so each page's hero matches its topic. */
const HERO_ROOFING = "/images/hero_roofing-hero.webp";
const HERO_GUTTERS = "/images/hero_gutters-hero.webp";
const HERO_WINDOWS = "/images/hero_windows-hero.webp";
const HERO_SIDING = "/images/hero_siding-hero.webp";

export interface ServiceSection {
  /** H2 on the page. */
  heading: string;
  /** Plain paragraphs rendered in order. */
  paragraphs?: string[];
  /**
   * Labeled list. Each item renders as a bolded heading followed by body
   * copy — used for things like "Hail damage / Wind damage / Ice damage".
   */
  list?: { heading?: string; body: string }[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface SubService {
  /** URL slug — last path segment (e.g. "roof-replacement"). */
  slug: string;
  /** Which category folder this lives under in /services/{category}/. */
  category: "roofing" | "gutter" | "siding";
  /** Full path on the site. */
  path: string;
  /** True when the slug already contains a city suffix (storm-damage-...-madison-wi etc). */
  isGeoTargeted: boolean;
  /** Meta title (50–60 chars target). */
  title: string;
  /** Meta description (145–160 chars target). */
  metaDescription: string;
  /** Single H1 for the page. */
  h1: string;
  /** Optional uppercase eyebrow above the H1 (e.g. "Roofing Service" or "Storm Response · Madison, WI"). */
  eyebrow?: string;
  /** Hero subtext — 1–3 sentences below the H1. */
  hero: string;
  /** Background image for the hero block. Optional — falls back to flat navy. */
  heroImage?: string;
  /** Body sections, rendered in order after the hero. */
  sections: ServiceSection[];
  /** Page-specific FAQ block. Empty array = no FAQ section. */
  faqs: ServiceFAQ[];
  /** Sub-service slugs to link as "Related services". */
  related?: string[];
  /** When set, render the geo-page neighbors block linking to these city slugs. */
  cityCallouts?: string[];
  /** Detail-shot gallery rendered between body sections and FAQs. */
  images?: Array<{ src: string; alt: string; caption?: string }>;
}

export interface ServiceCategoryPage {
  slug: ServiceCategorySlug;
  /** Where this category lives — `/service/${slug}`. */
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow?: string;
  hero: string;
  /** Background image for the hero block. Optional — falls back to flat navy. */
  heroImage?: string;
  /** Paragraphs above the sub-service grid. */
  intro: string[];
  /** Sub-service cards. Order = display order. */
  subServiceCards: { slug: string; title: string; description: string }[];
  /** Optional content below the cards. */
  sections?: ServiceSection[];
  /** Detail-shot gallery rendered between sections and FAQs. */
  images?: Array<{ src: string; alt: string; caption?: string }>;
  faqs: ServiceFAQ[];
}

/* ------------------------------------------------------------------ *
 * Service category pages (the three /service/* overviews).
 * Critical: /service/roofing must NOT contain gutter content — that
 * was a live bug on the Webflow site.
 * ------------------------------------------------------------------ */

export const serviceCategories: ServiceCategoryPage[] = [
  {
    slug: "roofing",
    path: "/service/roofing",
    heroImage: HERO_ROOFING,
    title: "Roofing Services in Madison, WI | Home Defender Remodeling",
    metaDescription:
      "Roof replacement, repair, inspection, and storm response in Madison and Dane County. Asphalt, metal, free estimates, written warranties. Call (608) 925-3576.",
    h1: "Roofing Services for Madison and Dane County",
    eyebrow: "Roofing",
    hero: "Replacement, repair, and storm response — done right by a local crew that has to live with its work in this town.",
    intro: [
      "Roofing is what we lead with. Most of the homes we work on are 1950s–1990s asphalt-shingle roofs in Madison, Dane County, and southern Wisconsin — the kind that take a beating from hail, ice damming, and the freeze/thaw cycle every year. We replace, repair, and inspect them, document storm damage for insurance claims, and install asphalt or standing-seam metal when it's time for a new system.",
      "Every roof we touch gets a written estimate, a workmanship warranty in writing, and the manufacturer warranty handed over at the final walkthrough. No hidden line items, no high-pressure close.",
    ],
    subServiceCards: [
      {
        slug: "roof-replacement",
        title: "Roof Replacement",
        description:
          "Full tear-off, new decking where needed, ice and water shield past the eaves, architectural shingles or standing-seam metal. The full system, not just the top layer.",
      },
      {
        slug: "roof-repair",
        title: "Roof Repair",
        description:
          "Targeted repairs for missing shingles, flashing failures, leaks around penetrations, and storm damage. We document the cause so the same spot doesn't fail again.",
      },
      {
        slug: "emergency-roof-repair",
        title: "Emergency Roof Repair",
        description:
          "Active leaks, storm-torn sections, tree impacts. We tarp same-day where safe, then come back to do the permanent fix once the weather lets us work.",
      },
      {
        slug: "asphalt-shingle-roofing",
        title: "Asphalt Shingle Roofing",
        description:
          "Architectural shingles with 30–50 year manufacturer warranties — the right call for most Wisconsin roofs. Predictable cost, good wind ratings, broad color choice.",
      },
      {
        slug: "metal-roofing",
        title: "Metal Roofing",
        description:
          "Standing-seam metal that sheds snow, lasts 50+ years, and earns insurance discounts in some hail zones. Costs 2–3× asphalt up front; pays back over decades.",
      },
      {
        slug: "storm-damage-roof-repair-madison-wi",
        title: "Storm Damage Roof Repair (Madison)",
        description:
          "Free post-storm inspection, full insurance documentation, and direct adjuster communication. We level the playing field on hail and wind claims.",
      },
      {
        slug: "roof-inspection-madison-wi",
        title: "Free Roof Inspection (Madison)",
        description:
          "30-point physical inspection — we climb the roof, photograph every issue, and send you a written report with severity ratings. No upsell.",
      },
    ],
    sections: [
      {
        heading: "Where we work",
        paragraphs: [
          "Madison, Dane County, and southern Wisconsin. We have dedicated city pages for the cities and Madison neighborhoods we work in most often, with notes on permitting, architectural-review constraints, and the weather patterns specific to each area.",
        ],
      },
    ],
    images: [
      { src: "/images/materials_asphalt-shingles.webp", alt: "Architectural asphalt shingles on a Madison roof", caption: "Asphalt shingles" },
      { src: "/images/materials_metal-roofing.webp", alt: "Standing-seam metal roofing panels", caption: "Metal roofing" },
      { src: "/images/materials_tile-roofing.webp", alt: "Tile roofing detail", caption: "Tile" },
      { src: "/images/materials_flat-roofing.webp", alt: "Flat / low-slope membrane roof installation", caption: "Flat / low-slope" },
    ],
    faqs: [
      {
        question: "Do you handle insurance claims for storm and hail damage?",
        answer:
          "Yes. Free post-storm inspection, photo documentation, written scope of work for the adjuster, and on-site presence during the adjuster's inspection if you'd like. See our storm damage page for the full process.",
      },
      {
        question: "Asphalt or metal — which is right for my house?",
        answer:
          "Asphalt for most Wisconsin homes — predictable cost, good wind and impact ratings, easy to match neighborhood styles. Metal for steeper roofs, homes you plan to keep 30+ years, or where snow management matters. We'll tell you straight which one fits your house.",
      },
      {
        question: "What does a roof replacement cost in Madison?",
        answer:
          "Most full replacements in Madison and Dane County land between $9,000 and $22,000 — the bulk fall in the $11,000–$16,000 range. The pricing page breaks down what drives the spread.",
      },
      {
        question: "Do you offer warranties?",
        answer:
          "Workmanship warranty in writing from us, plus the manufacturer warranty from the shingle or metal panel maker. Both handed over at the final walkthrough. The Defender Shield ($295/year) keeps both warranties valid by catching small issues before they become claim disputes.",
      },
    ],
  },
  {
    slug: "gutter-protection",
    path: "/service/gutter-protection",
    heroImage: HERO_GUTTERS,
    title: "Gutter Services in Madison, WI | Home Defender Remodeling",
    metaDescription:
      "Seamless gutter installation, replacement, cleaning, and repair across Madison and Dane County. Stops ice dams and fascia rot. Call (608) 925-3576.",
    h1: "Gutter Installation, Replacement, and Maintenance",
    eyebrow: "Gutter Protection",
    hero: "Seamless aluminum and steel gutters, leaf guards, downspout flushing, and full-system replacements — sized for the roof above and the drainage below.",
    intro: [
      "Gutters fail in two directions: water that doesn't drain (clogged downspouts, undersized troughs, bad pitch) backs up into the fascia and rots it. Water that drains in the wrong place undermines the foundation. Both problems show up as expensive interior repairs years later.",
      "We install seamless gutters cut to length on the driveway, replace failing systems with the right capacity for the roof above, clean and flush every fall, and repair leaks and sagging without ripping out everything that still works.",
    ],
    subServiceCards: [
      {
        slug: "gutter-installation",
        title: "Gutter Installation",
        description:
          "Seamless 5\" or 6\" aluminum or steel, cut on-site to match the run. Hidden hangers every 24\", proper pitch, downspouts sized to the drainage area.",
      },
      {
        slug: "gutter-replacement",
        title: "Gutter Replacement",
        description:
          "When repair stops being economical. Full tear-off, fascia inspection, capacity check, and a new system that drains in the right places.",
      },
      {
        slug: "gutter-cleaning",
        title: "Gutter Cleaning",
        description:
          "Hand-clean troughs, flush downspouts, check splash blocks. Twice a year for most Madison homes — once in spring, once after leaf-fall.",
      },
      {
        slug: "gutter-repair",
        title: "Gutter Repair",
        description:
          "Re-pitch, re-hang, re-seal, replace damaged sections. Cheaper than full replacement when the bones of the system are still good.",
      },
    ],
    sections: [
      {
        heading: "Why ice damming is a Wisconsin gutter problem",
        paragraphs: [
          "Ice dams form when warm air from the attic melts snow on the upper roof, the meltwater runs down to the cold eaves, and refreezes — building a wall of ice that backs water up under the shingles. Properly pitched gutters and clean downspouts don't prevent ice damming on their own, but a clogged or sagging gutter system makes it dramatically worse. Cleaning, flushing, and re-pitching every couple of years is the cheapest insurance against winter water damage.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should Madison homes have their gutters cleaned?",
        answer:
          "Twice a year for most homes — once in spring after the maple seeds drop, and once in late fall after leaves come down. Homes near pines or oaks may need a third cleaning. Defender Shield members get one cleaning included, with a downspout flush.",
      },
      {
        question: "Do gutter guards actually work?",
        answer:
          "The good ones, yes. Micromesh and reverse-curve guards keep most debris out and reduce cleaning frequency to once every 2–3 years. Cheap plastic screens clog within a year and trap moisture against the trough. We install the systems we'd put on our own homes.",
      },
      {
        question: "What size gutters do I need?",
        answer:
          "5-inch K-style for most Madison homes. 6-inch when the roof above is large, steep, or pine-shaded. Undersized gutters overflow in heavy rain — common on Madison ranch additions where the original gutter was sized for a smaller roof.",
      },
      {
        question: "Can you repair my gutters or do I need full replacement?",
        answer:
          "Often we can repair. Re-pitching, re-hanging, replacing a sagging section, and resealing seams keep most systems running another 5–10 years. Full replacement makes sense when the trough itself is rotted through or the fascia behind it has failed.",
      },
    ],
  },
  {
    slug: "windows",
    path: "/service/windows",
    heroImage: HERO_WINDOWS,
    title: "Window Replacement in Madison, WI | Home Defender Remodeling",
    metaDescription:
      "Energy-efficient window replacement for Madison and Dane County homes. Fewer drafts, lower heating bills, professional install. Call (608) 925-3576.",
    h1: "Window Replacement for Madison Homes",
    eyebrow: "Windows",
    hero: "Energy-efficient replacement windows that cut drafts, lower winter heating bills, and don't sweat through the December cold snaps.",
    intro: [
      "Wisconsin homes built before 1990 are usually losing 20–30% of their winter heating through old single-pane and aluminum-frame windows. Replacing them is one of the best ROI exterior projects most homeowners do, especially if you're already updating siding or doing a roof.",
      "We install double- and triple-pane vinyl and fiberglass replacement windows with low-E coatings and argon fill. Quiet install, clean job site, and a clear written warranty on both the window and the installation.",
    ],
    subServiceCards: [],
    sections: [
      {
        heading: "What we install",
        list: [
          {
            heading: "Double-hung vinyl",
            body: "The default for most Madison replacements. Tilt-in sashes for cleaning, low-E coating, argon fill. 25-year frame warranty from the manufacturers we install.",
          },
          {
            heading: "Casement and awning",
            body: "Tighter weather seal than double-hung — better for the windward side of the house and rooms where you want maximum draft control.",
          },
          {
            heading: "Triple-pane",
            body: "Worth the upgrade for north-facing rooms, bedrooms over unheated spaces, and homeowners who plan to stay 15+ years. Real reduction in winter draft and condensation on the inside pane.",
          },
          {
            heading: "Fiberglass frames",
            body: "Best long-term durability for Wisconsin's freeze/thaw — minimal expansion, paintable, 30+ year service life. Costs more than vinyl up front.",
          },
        ],
      },
      {
        heading: "How a Wisconsin window install actually works",
        paragraphs: [
          "Most replacement windows go in as inserts inside the existing frame — minimal interior trim damage, no siding work. Full-frame replacement (rip out the existing frame down to the studs) is more invasive but the right call when the frame is rotted, when you're changing window size, or when you want the maximum thermal performance.",
          "We always inspect the frame and sill before quoting. Inserts on a rotted sill is throwing money away — the rot keeps eating, the new window fails early, and you do the job twice.",
        ],
      },
    ],
    images: [
      { src: "/images/windows_double-hung-window.webp", alt: "Double-hung replacement window installed on a Madison home", caption: "Double-hung" },
      { src: "/images/windows_casement-window.webp", alt: "Casement replacement window with tight weather seal", caption: "Casement" },
      { src: "/images/windows_sliding-window.webp", alt: "Horizontal sliding replacement window", caption: "Sliding" },
      { src: "/images/windows_bay-window.webp", alt: "Bay window installed on a Wisconsin home exterior", caption: "Bay" },
    ],
    faqs: [
      {
        question: "How much do replacement windows cost in Madison?",
        answer:
          "Most homeowners pay $700–$1,400 per window installed for double-pane vinyl, and $1,200–$2,000 for triple-pane or fiberglass. Whole-house replacement runs $10,000–$25,000 depending on count, size, and frame type. Free measure and written estimate.",
      },
      {
        question: "Will new windows actually lower my heating bill?",
        answer:
          "Yes — the magnitude depends on what you're replacing. Going from single-pane wood to double-pane low-E typically cuts heating energy use by 15–25%. Going from a recent double-pane to triple-pane gives you a smaller energy gain but a bigger comfort gain (less cold air falling off the glass).",
      },
      {
        question: "Vinyl or fiberglass?",
        answer:
          "Vinyl is the right call for most homes — proven, cost-effective, durable enough. Fiberglass costs more but lasts longer in our freeze/thaw climate and holds paint well if you want a custom color. We install both.",
      },
      {
        question: "Do you handle the trim and interior finish work?",
        answer:
          "Yes. Insert installations leave most of the interior trim intact. Full-frame replacement requires interior trim work, which we do as part of the install — match the existing profile, prime, and leave it ready for paint.",
      },
    ],
  },
  /* ============== SIDING ============== */
  {
    slug: "siding",
    path: "/service/siding",
    heroImage: HERO_SIDING,
    title: "Siding Replacement & Repair in Madison, WI | Home Defender",
    metaDescription:
      "Madison siding contractor for vinyl, fiber cement, repair, and full replacement. Built for Wisconsin freeze-thaw, hail, and humidity. Free in-home consultation.",
    h1: "Siding Replacement & Repair in Madison, WI",
    eyebrow: "Siding",
    hero:
      "Your siding is the only thing standing between Wisconsin weather and the wood frame holding up your house. Twenty winters of freeze-thaw, a few hailstorms, and a couple of humid summers later, even quality siding starts to fail — usually in places you can't see from the ground. We install and repair siding on Madison-area homes with materials built for our climate. No high-pressure quotes. Just a contractor who'll tell you whether you actually need a replacement.",
    intro: [
      "Wisconsin climate is harder on siding than almost any other part of the country. A 110-degree seasonal swing — from -20°F January nights to 90°F July afternoons — puts every panel, seam, and fastener through hundreds of expansion and contraction cycles every year. Add ice damming on north-facing walls, summer hail storms across Dane County, and lake-effect humidity for homes near Mendota or Monona, and your siding has a hard job. The wrong material — or the right material installed badly — can fail in under ten years. The right material installed correctly can protect your home for fifty.",
      "We work on Madison-area homes that span more than a century of construction — from 1890s Queen Anne homes in the Marquette historic district to 2010s subdivisions in Sun Prairie and Verona. Different eras need different approaches. A historic Tudor Revival in University Heights needs material that satisfies the Madison Landmarks Commission. A lake-adjacent home in McFarland needs corrosion-resistant flashings and humidity-rated materials. A 1990s Colonial in Waunakee usually needs the underlying ventilation and house wrap brought up to current standards while the siding is off. We don't pretend every home is the same project. We look at yours, tell you what we see, and write an honest estimate.",
    ],
    subServiceCards: [
      {
        slug: "siding-replacement",
        title: "Siding Replacement",
        description:
          "Full siding replacement for Madison-area homes. We tear off the old, inspect and upgrade the underlying wall system, and install new siding rated for Wisconsin's climate. Most projects complete in 1–2 weeks. Free written estimate after an in-person inspection.",
      },
      {
        slug: "siding-repair",
        title: "Siding Repair",
        description:
          "Targeted repair for isolated damage — cracked panels, wind-lifted boards, hail dents, water-damaged sections. We assess whether repair is the right call or whether replacement makes more sense. Most repairs complete in a single visit.",
      },
      {
        slug: "vinyl-siding",
        title: "Vinyl Siding",
        description:
          "Vinyl and insulated vinyl siding installation for Madison homes. The most common siding choice in Wisconsin — affordable, low-maintenance, and available in dozens of profiles and colors. We use premium-grade products rated for Midwest cold.",
      },
      {
        slug: "fiber-cement-siding",
        title: "Fiber Cement Siding",
        description:
          "Fiber cement siding for homeowners who want maximum durability — including premium products engineered specifically for Wisconsin's climate. Hail-resistant, fire-resistant, and rated for 30–50 years. Higher upfront cost, lowest long-term cost.",
      },
    ],
    faqs: [
      {
        question: "How much does siding replacement cost in Madison?",
        answer:
          "For 2026, most Madison-area siding replacement projects run between $9,000 and $22,000 depending on home size, material, and complexity. Vinyl is the most affordable — typically $4–$8 per square foot installed. Fiber cement runs $10–$15 per square foot. A typical 1,800–2,400 sq ft home runs $11,000–$18,000 for a full replacement. We never quote without seeing the home. Estimates are written, itemized, and free.",
      },
      {
        question: "How do I know if I need siding repair or full replacement?",
        answer:
          "If less than half the siding is damaged and the rest is in good shape, repair is usually the right call. If damage is widespread, the siding is more than 20 years old, you're seeing moisture damage behind the panels, or repairs keep failing in the same areas — replacement is the smarter long-term move. A free in-home inspection is the only way to know for sure. We'll tell you honestly which path makes more sense for your home.",
      },
      {
        question: "What siding material is best for Wisconsin?",
        answer:
          "For most Madison-area homes, premium architectural vinyl or fiber cement give the best results. Vinyl wins on upfront cost and low maintenance. Fiber cement wins on lifespan, hail resistance, and resale value. Insulated vinyl is a middle path that adds noticeable energy efficiency at a moderate price premium. The right answer depends on how long you plan to stay in your home and your budget. We walk through the tradeoffs during your free consultation — no pressure toward any specific material.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * Sub-service detail pages.
 * ------------------------------------------------------------------ */

export const subServices: SubService[] = [
  /* ============== ROOFING SUB-SERVICES ============== */
  {
    slug: "roof-replacement",
    category: "roofing",
    path: "/services/roofing/roof-replacement",
    heroImage: HERO_ROOFING,
    images: [
      { src: "/images/roofing_replacement-tear-off.webp", alt: "Roof tear-off down to the decking on a Madison home" },
      { src: "/images/roofing_replacement-underlayment.webp", alt: "Ice and water shield plus synthetic underlayment installed on roof deck" },
      { src: "/images/roofing_replacement-shingles.webp", alt: "Architectural asphalt shingles being installed on a new roof" },
    ],
    isGeoTargeted: false,
    title: "Roof Replacement in Madison & Dane County | Home Defender Remodeling",
    metaDescription:
      "Full roof replacement across Madison and Dane County. Tear-off, ice and water shield, architectural shingles or standing-seam metal. Free written estimate.",
    h1: "Roof Replacement in Madison and Dane County",
    eyebrow: "Roofing Service",
    hero: "Full tear-off, decking inspection, ice and water shield well past the eaves, synthetic underlayment, and architectural shingles or standing-seam metal — the system, not just the top layer.",
    sections: [
      {
        heading: "What a roof replacement actually includes",
        paragraphs: [
          "A roof is a system of layers, and shortcuts at any layer are how roofs fail early. Every full replacement we do covers the same basics, in the same order:",
        ],
        list: [
          {
            heading: "Tear-off down to the deck",
            body: "We strip the existing roof completely. Going over an existing layer hides decking damage, voids most manufacturer warranties, and adds weight your trusses weren't engineered for.",
          },
          {
            heading: "Decking inspection and replacement",
            body: "With the old roof off, we walk the deck and replace any rotted, soft, or split sheathing. Most Madison roofs need 1–4 sheets replaced; a few need significantly more.",
          },
          {
            heading: "Ice and water shield",
            body: "Self-adhered membrane along eaves, valleys, and around penetrations — extending well past the inside wall line, not just the standard 24 inches code minimum. Wisconsin ice damming demands the extra coverage.",
          },
          {
            heading: "Synthetic underlayment",
            body: "Across the field of the roof. Tougher and lighter than felt; doesn't tear when it gets wet during install.",
          },
          {
            heading: "Drip edge, starter, ridge cap",
            body: "All factory-coordinated with the field shingle or metal panel. Done right, these are invisible. Done wrong, they're how leaks start at the edges.",
          },
          {
            heading: "Architectural shingles or standing-seam metal",
            body: "Installed to manufacturer specs — nailing pattern, exposure, pattern shift — so the warranty actually applies if anything goes wrong.",
          },
          {
            heading: "Ventilation and flashing",
            body: "Ridge venting balanced with soffit intake. New step and counter flashing at every wall, chimney, and skylight. Old flashing reused is a leak waiting to happen.",
          },
        ],
      },
      {
        heading: "Why we always tear off",
        paragraphs: [
          "Some contractors will quote a layover (new shingles installed over old) because it's cheaper and faster. We don't. A layover hides decking rot, doubles the weight on your trusses, voids the manufacturer's warranty in most cases, and shortens the life of the new shingles by trapping heat against them. Madison's freeze/thaw climate makes the trade especially bad. We tear off every roof, every time.",
        ],
      },
      {
        heading: "Materials we install",
        list: [
          {
            heading: "Architectural asphalt shingles",
            body: "30–50 year manufacturer warranties, good wind and impact ratings, predictable cost. Right for most Wisconsin homes.",
          },
          {
            heading: "Standing-seam metal",
            body: "Sheds snow well, lasts 50+ years, costs 2–3× asphalt up front. Best for steeper roofs, homes you plan to keep, and where insurance discounts apply.",
          },
          {
            heading: "Flat / low-slope membranes",
            body: "TPO and modified bitumen for porches, dormers, and additions. Different install rules than pitched roofs — we handle the transitions.",
          },
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Most full roof replacements in Madison and Dane County land between $9,000 and $22,000. The bulk fall in the $11,000–$16,000 range. Cost drivers, in roughly the order they matter: square footage, roof pitch and complexity, decking condition under the old roof, and material choice (asphalt vs. metal). The pricing page breaks the math down in detail.",
        ],
      },
      {
        heading: "Warranties",
        paragraphs: [
          "Workmanship warranty in writing from us. Manufacturer warranty from the shingle or metal panel maker. Both handed over at the final walkthrough — not buried in fine print, not contingent on staying enrolled in a maintenance plan.",
          "The Defender Shield ($295/year) is optional, but it's the cheapest way to keep both warranties valid: annual inspection catches the small issues that turn into warranty denials a decade later.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a roof replacement take?",
        answer:
          "Most single-family homes are one or two days for the tear-off, decking, and new install — three days for larger or more complex roofs. We don't leave the deck exposed overnight; if weather forces a stop, we tarp and seal everything before we go home.",
      },
      {
        question: "Do you handle the dump load and cleanup?",
        answer:
          "Yes. The estimate includes the dump trailer, dump fees, magnet sweep for nails (twice — start and end of day), and a final walkthrough with you. We don't leave shingles in your yard or nails in your driveway.",
      },
      {
        question: "What happens if you find rotted decking under my old roof?",
        answer:
          "We replace it and document what we replaced. The estimate includes 1–2 sheets of decking at no extra charge — that covers most homes. Anything beyond that is itemized at the price quoted on the estimate, so there are no surprises.",
      },
      {
        question: "Will my homeowner's insurance pay for the new roof?",
        answer:
          "Only if the replacement is driven by covered storm or hail damage. Wear-and-tear and end-of-life replacements aren't covered. If you think there's storm damage on your existing roof, start with a free inspection — see the storm damage page for how the claim process works.",
      },
    ],
    related: [
      "roof-inspection-madison-wi",
      "asphalt-shingle-roofing",
      "metal-roofing",
      "storm-damage-roof-repair-madison-wi",
    ],
    cityCallouts: [
      "madison",
      "sun-prairie",
      "verona",
      "fitchburg",
      "middleton",
      "waunakee",
    ],
  },
  {
    slug: "roof-repair",
    category: "roofing",
    path: "/services/roofing/roof-repair",
    heroImage: HERO_ROOFING,
    images: [
      { src: "/images/roofing_repair-shingle-damage.webp", alt: "Close-up of wind-damaged asphalt shingles needing repair" },
      { src: "/images/roofing_repair-flashing.webp", alt: "Roof flashing repair around a chimney" },
      { src: "/images/roofing_repair-completed.webp", alt: "Completed roof repair section on a Madison home" },
    ],
    isGeoTargeted: false,
    title: "Roof Repair in Madison, WI | Home Defender Remodeling",
    metaDescription:
      "Targeted roof repair across Madison and Dane County. Missing shingles, flashing failures, leaks, and storm damage. Honest assessment, written estimate.",
    h1: "Roof Repair in Madison and Dane County",
    eyebrow: "Roofing Service",
    hero: "Missing shingles, flashing failures, leaks around penetrations, and storm damage. We diagnose the cause first, then fix it — so the same spot doesn't fail again.",
    sections: [
      {
        heading: "When a repair is the right call",
        paragraphs: [
          "Roofs fail in a lot of places before they fail as a system. A repair makes sense when the underlying material has years of service left, the damage is localized, and the cause is fixable without disturbing the rest of the roof.",
        ],
        list: [
          {
            heading: "Localized wind damage",
            body: "A few lifted or missing shingles after a wind event. We replace the affected area and re-seal the surrounding shingles.",
          },
          {
            heading: "Flashing failures",
            body: "Around chimneys, skylights, plumbing vents, and sidewalls. The shingles around them are usually fine — the flashing itself is what's leaking.",
          },
          {
            heading: "Leaks around penetrations",
            body: "Boots split with age, sealant cracks, attic vents come loose. Targeted repair restores the seal without touching the field of the roof.",
          },
          {
            heading: "Storm and hail damage",
            body: "When damage is contained to one slope or one area. Insurance often covers these — see the storm damage page for the claims process.",
          },
        ],
      },
      {
        heading: "When repair stops being the right call",
        paragraphs: [
          "Sometimes the honest answer is that repair is throwing money at a roof that's about to fail anyway. We'll tell you straight when that's the situation. The signs we look for: granule loss across the whole field (not just one slope), curling or cupping shingles in multiple areas, multiple leak points, a roof past 20 years old in Wisconsin's climate. At that point, replacement is the better spend.",
        ],
      },
      {
        heading: "How we diagnose",
        paragraphs: [
          "Every repair starts with a physical inspection — we get on the roof, find the cause, photograph it, and write up what we found. We don't quote repairs sight-unseen and we don't replace shingles without understanding why they failed in the first place.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a roof repair cost?",
        answer:
          "Most targeted repairs in Madison run $400–$1,200. Complex repairs involving flashing replacement, decking, or multiple leak sources can run $1,500–$3,500. Free inspection with a written estimate before any work starts.",
      },
      {
        question: "Will the repaired area match my existing shingles?",
        answer:
          "We do our best to match — same manufacturer, same color, same profile when we can source it. Older shingles fade over time, so the new ones will look slightly brighter for the first year. On highly visible slopes we'll talk through whether to repair or to re-shingle the whole slope to keep the appearance uniform.",
      },
      {
        question: "How long do roof repairs take?",
        answer:
          "Most localized repairs are 2–4 hours. Bigger repairs involving flashing, multiple penetrations, or decking can take a full day. We schedule weather windows carefully — no roof repair during rain.",
      },
      {
        question: "Do repairs come with a warranty?",
        answer:
          "Yes. Two-year workmanship warranty on the repair itself. The surrounding existing roof keeps whatever warranty it already had — we don't void it by working on it.",
      },
    ],
    related: [
      "emergency-roof-repair",
      "storm-damage-roof-repair-madison-wi",
      "roof-inspection-madison-wi",
      "roof-replacement",
    ],
  },
  {
    slug: "emergency-roof-repair",
    category: "roofing",
    path: "/services/roofing/emergency-roof-repair",
    heroImage: HERO_ROOFING,
    images: [
      { src: "/images/roofing_emergency-tarping.webp", alt: "Emergency tarp installed over storm-damaged roof section" },
      { src: "/images/roofing_storm-damage.webp", alt: "Storm-damaged roof shingles after a Wisconsin thunderstorm" },
      { src: "/images/roofing_wind-damage.webp", alt: "High-wind damage to asphalt shingles on a Dane County home" },
    ],
    isGeoTargeted: false,
    title: "Emergency Roof Repair in Madison, WI | Home Defender Remodeling",
    metaDescription:
      "Active leaks, storm damage, tree impacts? Fast tarping and emergency roof repair across Madison and Dane County. Call (608) 925-3576.",
    h1: "Emergency Roof Repair in Madison and Dane County",
    eyebrow: "Emergency Response",
    hero: "Active leak, storm-torn section, or tree impact on your roof? Call (608) 925-3576. We tarp same-day where it's safe, then come back to do the permanent fix once the weather lets us work.",
    sections: [
      {
        heading: "What counts as an emergency",
        list: [
          {
            heading: "Active leaks into the home",
            body: "Water entering the attic or living space during or after a storm. Every hour the water keeps coming, the interior damage compounds.",
          },
          {
            heading: "Storm-torn sections",
            body: "Wind has lifted or removed enough shingles that the underlayment or decking is exposed. The next rain will turn this into an active leak.",
          },
          {
            heading: "Tree impacts",
            body: "Limb or whole tree on the roof, with visible structural damage to shingles, decking, or framing.",
          },
          {
            heading: "Failed flashing after a storm",
            body: "Chimney, skylight, or plumbing vent flashing torn loose. The roof itself may look fine but water is finding the gap.",
          },
        ],
      },
      {
        heading: "What we do when you call",
        paragraphs: [
          "Step one is a call back from someone who can actually help — not an answering service. We'll ask what you're seeing, when it started, and what the weather has been like. If it sounds like an active emergency we're on the way the same day where it's safe to be on a roof.",
          "Step two is the tarp. We secure tarps over the affected area to stop water entry while we plan the permanent repair. A tarp isn't a fix — it's a holding action while we figure out scope, get materials, and wait for a weather window. Defender Shield members move to the front of the line on emergency response.",
          "Step three is the repair. Once the weather lets us work, we come back, pull the tarp, do the permanent fix, and document everything. If the cause was storm damage, we hand you the photos and scope you'll need for an insurance claim.",
        ],
      },
    ],
    faqs: [
      {
        question: "How fast can you get here?",
        answer:
          "Most emergency calls in Madison and Dane County get a same-day or next-morning tarping during normal weather. After major regional storm events, expect 24–72 hours — we triage by severity, with active interior leaks first. Defender Shield members get a 24-hour callback guarantee even during peak demand.",
      },
      {
        question: "What does emergency tarping cost?",
        answer:
          "Tarping is typically $300–$600 depending on roof size, pitch, and access. Defender Shield members get tarping included as part of the post-storm response. Permanent repair cost is quoted separately after we can see the underlying damage.",
      },
      {
        question: "What should I do before you arrive?",
        answer:
          "Get out from under the leak — move furniture, valuables, and electronics. Put a bucket where the water is coming in. Do not climb on the roof. Take ground-level photos of any visible damage; they help with insurance claims later.",
      },
      {
        question: "Is emergency damage covered by insurance?",
        answer:
          "Storm-related damage usually is — wind, hail, ice, falling trees. Wear-and-tear failures aren't. We document every emergency call so you have a complete record if you decide to file. See the storm damage page for the claims process.",
      },
    ],
    related: [
      "storm-damage-roof-repair-madison-wi",
      "roof-repair",
      "roof-inspection-madison-wi",
    ],
  },
  {
    slug: "asphalt-shingle-roofing",
    category: "roofing",
    path: "/services/roofing/asphalt-shingle-roofing",
    heroImage: HERO_ROOFING,
    images: [
      { src: "/images/roofing_3-tab-vs-architectural.webp", alt: "Side-by-side comparison of 3-tab and architectural asphalt shingles" },
      { src: "/images/roofing_architectural-shingles-detail.webp", alt: "Close-up of architectural asphalt shingle texture and tab pattern" },
      { src: "/images/roofing_asphalt-installation.webp", alt: "Asphalt shingle installation in progress on a Madison home" },
    ],
    isGeoTargeted: false,
    title: "Asphalt Shingle Roofing in Madison, WI | Home Defender Remodeling",
    metaDescription:
      "Architectural asphalt shingle roofs for Madison and Dane County. 30–50 year warranties, good wind and impact ratings, predictable cost. Free estimate.",
    h1: "Asphalt Shingle Roofing in Madison",
    eyebrow: "Roofing Material",
    hero: "Architectural asphalt shingles are the right call for most Wisconsin homes. 30–50 year manufacturer warranties, good wind and impact ratings, broad color choice, predictable cost.",
    sections: [
      {
        heading: "Why asphalt is the default for Wisconsin",
        paragraphs: [
          "Almost every neighborhood we work in is mostly asphalt-shingled — Maple Bluff, Shorewood Hills, the Madison isthmus, Sun Prairie, Verona, Fitchburg, the post-war ranches in DeForest and Cottage Grove. There's a reason. Architectural asphalt does well in this climate: handles freeze/thaw cycles, sheds rain reliably, and is rated for the wind events southern Wisconsin sees most years.",
          "The cost story matters too. A typical Madison ranch or two-story can be re-roofed in asphalt for $11,000–$16,000. The same home in standing-seam metal runs $25,000–$40,000+. That gap is real money, and most homeowners get more value out of asphalt over the time they actually plan to stay in the house.",
        ],
      },
      {
        heading: "What we install",
        list: [
          {
            heading: "Architectural (laminated) shingles",
            body: "The default. Two layers laminated together for depth, dimensional appearance, and better wind resistance than 3-tab. 30–50 year manufacturer warranties depending on line.",
          },
          {
            heading: "Class 4 impact-resistant",
            body: "Heavier, harder-to-crack shingles rated for hail. Worth the upgrade if you've had a recent hail claim or if your insurer offers a discount for the rating — common in some Wisconsin zones.",
          },
          {
            heading: "Designer / luxury asphalt",
            body: "Thicker shingles that mimic shake or slate. Aesthetic upgrade for historic neighborhoods or homes with HOA architectural review. Costs roughly 1.5× standard architectural.",
          },
        ],
      },
      {
        heading: "Real-world lifespan",
        paragraphs: [
          "Manufacturer ratings list 30, 40, 50 year warranties. The honest answer for southern Wisconsin: most architectural shingles deliver 22–28 years of real service before they're due for replacement. Freeze/thaw, summer heat, and ice damming all accelerate granule loss and seal degradation. Plan for replacement around the 22-year mark and you'll rarely be caught off guard.",
          "Class 4 impact-resistant shingles tend to last a few years longer in real-world use because the heavier mat resists thermal cycling better. The Defender Shield's annual inspection catches the early signs of wear so you can plan replacement on your timeline, not the weather's.",
        ],
      },
      {
        heading: "Color choice and HOA considerations",
        paragraphs: [
          "Most Madison-area HOAs and architectural review committees approve architectural asphalt without question. Some Maple Bluff and Nakoma blocks restrict shingle color to specific palettes (typically darker browns, grays, and slate blacks); we check before quoting and bring samples to the estimate visit. Historic Marquette homes have looser rules but neighbors notice — we tend toward conservative color matches there.",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the difference between 3-tab and architectural shingles?",
        answer:
          "3-tab is the older, single-layer style — flat, uniform, lower wind rating, shorter warranty. Architectural is laminated (two layers), looks dimensional, has higher wind ratings, and lasts longer. We don't install 3-tab on full replacements anymore — the cost difference is small and the longevity difference is significant.",
      },
      {
        question: "Are Class 4 impact-resistant shingles worth the upgrade?",
        answer:
          "If your insurer offers a premium discount for them — yes, almost always. The discount alone pays for the upgrade over a few years. If your insurer doesn't, it depends on hail history in your area. Sun Prairie, DeForest, and Madison's east side have seen meaningful hail in recent years; Class 4 makes more sense there than in lake-shielded neighborhoods like Maple Bluff.",
      },
      {
        question: "Which manufacturers do you install?",
        answer:
          "We install the major asphalt manufacturers — we'll talk through which line fits your roof, your budget, and your color preference at the estimate. We don't push a single brand because the right answer depends on warranty terms, color availability, and the specific roof.",
      },
      {
        question: "How does asphalt compare to metal for my house?",
        answer:
          "Asphalt makes sense for most Madison homes. Metal makes sense for steeper roofs, homes you plan to keep 30+ years, and where snow management is a real headache. See the metal roofing page or the blog post 'Asphalt vs Metal in Wisconsin' for the full comparison.",
      },
    ],
    related: ["roof-replacement", "metal-roofing", "roof-inspection-madison-wi"],
  },
  {
    slug: "metal-roofing",
    category: "roofing",
    path: "/services/roofing/metal-roofing",
    heroImage: HERO_ROOFING,
    images: [
      { src: "/images/roofing_standing-seam-detail.webp", alt: "Standing-seam metal roof panel and seam detail" },
      { src: "/images/roofing_stone-coated-metal.webp", alt: "Stone-coated steel roofing tiles installed on a steep slope" },
      { src: "/images/roofing_metal-roof-snow.webp", alt: "Standing-seam metal roof shedding snow in a Wisconsin winter" },
    ],
    isGeoTargeted: false,
    title: "Metal Roofing in Madison, WI | Home Defender Remodeling",
    metaDescription:
      "Standing-seam metal roofing for Madison and Dane County homes. 50+ year service life, snow shedding, hail-resistant. Free estimate, written warranty.",
    h1: "Metal Roofing in Madison",
    eyebrow: "Roofing Material",
    hero: "Standing-seam metal sheds snow well, lasts 50+ years, and resists hail in ways asphalt can't match. Costs 2–3× asphalt up front; pays back over decades.",
    sections: [
      {
        heading: "When metal is the right call",
        list: [
          {
            heading: "You plan to stay in the house long-term",
            body: "Metal's lifespan advantage only matters if you're around to capture it. If you're moving in 5 years, asphalt is almost always the better financial choice.",
          },
          {
            heading: "Steep or complex roofs",
            body: "Standing-seam handles steep pitches and unusual geometries cleanly. The panels run continuously top-to-bottom, so there are fewer failure points.",
          },
          {
            heading: "Snow management is a real problem",
            body: "Metal sheds snow before it builds up to ice-damming weight. North-facing slopes that always ice over in February stop being a problem. We add snow guards above doorways and walkways to control where the snow lands.",
          },
          {
            heading: "Hail history in your area",
            body: "Metal dents under hail but rarely fails. Asphalt cracks and loses granules and sometimes needs full replacement after a serious hailstorm. Some insurers offer real discounts for metal roofs in hail-prone Wisconsin zones.",
          },
        ],
      },
      {
        heading: "What we install",
        list: [
          {
            heading: "Standing-seam panels",
            body: "Vertical panels with raised seams, mechanically locked or snap-locked. The default for residential metal roofing — clean look, hidden fasteners, best longevity.",
          },
          {
            heading: "Stamped metal shingles",
            body: "Metal panels stamped to look like shake, slate, or tile. Useful when standing-seam doesn't fit the architecture — historic homes, certain HOA contexts.",
          },
          {
            heading: "Exposed-fastener panels (limited use)",
            body: "Lower-cost agricultural-style panels with screws through the panel face. We install these on outbuildings and pole barns but rarely on homes — the exposed gaskets become the limiting factor on lifespan.",
          },
        ],
      },
      {
        heading: "Cost and longevity",
        paragraphs: [
          "Standing-seam metal runs $1,000–$1,500 per square installed for standard panel systems, higher for premium colors and finishes. A typical Madison home that costs $13,000 in asphalt costs $26,000–$40,000 in metal. The math is real — but so is the lifespan: 50+ years of service vs. 22–28 for asphalt.",
          "Cost-per-year-of-service is the more useful metric. Asphalt at $13,000 over 25 years is about $520/year. Metal at $30,000 over 55 years is about $545/year. The difference shrinks once you account for not paying to replace it once or twice in between. Add the insurance discount where applicable and metal often comes out ahead over the long run.",
        ],
      },
      {
        heading: "What metal doesn't fix",
        paragraphs: [
          "Metal isn't a bypass for the rest of the roof system. Underlayment still matters, ice and water shield still matters, ventilation still matters, flashing details still matter. We see metal roofs that fail at 15 years because the install rushed past the basics. Done right, the panels last 50+ years; done wrong, you've paid 2–3× and gotten asphalt-equivalent service life.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will my insurance company give me a discount for metal?",
        answer:
          "Sometimes. It depends on the carrier, the policy, and the hail history of your zip code. Ask your agent before committing — get the discount amount in writing if it's offered. In some Wisconsin zones the discount is meaningful; in others it's nominal.",
      },
      {
        question: "Are metal roofs noisy in rain?",
        answer:
          "Not on a properly installed residential metal roof. The decking, underlayment, attic insulation, and ceiling all sit between you and the panel — by the time sound reaches the living space it's no louder than asphalt. The 'rain on a tin roof' association comes from uninsulated barns and outbuildings.",
      },
      {
        question: "Can metal go over my existing shingles?",
        answer:
          "Some standing-seam systems can be installed over an existing layer of asphalt — but we recommend tearing off anyway. Hidden decking damage, voided manufacturer warranties, and trapped heat all argue for tear-off. If cost is the only reason to consider a layover, asphalt is the better choice.",
      },
      {
        question: "Will my HOA approve metal?",
        answer:
          "Depends on the HOA. Some Madison-area subdivisions explicitly approve metal, some require board approval, and some prohibit it. We check before quoting. Stamped metal shingles (slate or shake profile) get approved more often than standing-seam in tradition-heavy neighborhoods.",
      },
    ],
    related: ["roof-replacement", "asphalt-shingle-roofing", "roof-inspection-madison-wi"],
  },
  /* --- The two NEW geo-targeted roofing pages from Content Library §4 --- */
  {
    slug: "storm-damage-roof-repair-madison-wi",
    category: "roofing",
    path: "/services/roofing/storm-damage-roof-repair-madison-wi",
    heroImage: HERO_ROOFING,
    images: [
      { src: "/images/roofing_storm-inspection.webp", alt: "Post-storm roof inspection on a Madison home" },
      { src: "/images/roofing_hail-damage-detail.webp", alt: "Close-up of hail damage on asphalt shingles" },
      { src: "/images/roofing_insurance-documentation.webp", alt: "Storm-damage documentation packet for an insurance claim" },
    ],
    isGeoTargeted: true,
    title: "Storm Damage Roof Repair in Madison, WI | Home Defender Remodeling",
    metaDescription:
      "Storm or hail damage to your Madison roof? Free inspection, full insurance documentation, fast emergency response. We handle the claim. Call (608) 925-3576.",
    h1: "Storm Damage Roof Repair in Madison, WI",
    eyebrow: "Storm Response · Madison, WI",
    hero: "Wisconsin storms hit hard. Hail, high winds, ice events, and severe thunderstorms can damage a roof in minutes that's been holding up fine for years. If your Madison home was just hit, two things matter: getting an honest inspection fast, and documenting damage properly so insurance pays for what they should.",
    sections: [
      {
        heading: "What storm damage actually looks like",
        paragraphs: [
          "Most storm damage isn't visible from the ground. The granule loss, lifted shingles, dented metal flashings, and cracked seals that compromise a roof are usually only visible when someone is up there looking. By the time damage shows up as a leak or a stain on your ceiling, the underlying problem has been working for weeks.",
        ],
        list: [
          {
            heading: "Hail damage",
            body: "Visible as small circular impact marks on shingles, with displaced granules collecting in gutters. Hail compromises the shingle's protective layer even when the shingle itself isn't visibly cracked. Insurance typically covers hail damage — but only if it's documented before the next storm causes more damage.",
          },
          {
            heading: "Wind damage",
            body: "Lifted shingles, missing shingles, and creased shingles from high winds. Even shingles that look reseated may have been compromised — they often fail in the next storm rather than the one that lifted them.",
          },
          {
            heading: "Ice damage",
            body: "Wisconsin's freeze/thaw cycles can crack flashings, split sealants, and expand small leaks into major problems. Ice damming damage often shows up as water stains inside the home weeks or months after the freezing event.",
          },
          {
            heading: "Tree and debris damage",
            body: "Branches, debris, and even hailstones can puncture or crack roofing materials. Even small punctures compromise the entire system underneath.",
          },
        ],
      },
      {
        heading: "What to do immediately after a storm",
        list: [
          {
            heading: "Step 1 — Stay off the roof",
            body: "After a storm, roof surfaces are more dangerous than usual — wet, possibly damaged, possibly hiding nails or sharp debris. Let a professional inspect.",
          },
          {
            heading: "Step 2 — Document what's visible from the ground",
            body: "Photos of obvious damage, debris, or water entry. Date-stamp them. This helps with insurance claims.",
          },
          {
            heading: "Step 3 — Open the claim",
            body: "Call your insurance company to start the claim file — but do not get repairs done before an inspection from your own contractor. Insurance adjusters work for the insurance company; you want an independent voice in the room.",
          },
          {
            heading: "Step 4 — Schedule a free inspection",
            body: "We'll document the damage thoroughly, write a scope of work for your adjuster, and be on-site when the adjuster inspects if you'd like.",
          },
        ],
      },
      {
        heading: "How we handle insurance claims for Madison homeowners",
        paragraphs: [
          "Most homeowners under-document storm damage and lose claims they should win. Insurance adjusters move fast, work for the insurance company, and don't always identify damage that exists. Home Defender Remodeling levels the playing field.",
        ],
        list: [
          {
            heading: "Documentation",
            body: "Detailed photos of every damage point, with location annotations, severity ratings, and timestamps. Documented in a format your adjuster recognizes.",
          },
          {
            heading: "Written scope of work",
            body: "A clear, line-item document specifying what work needs to be done, what materials are needed, and what the costs are. Adjusters work from these scopes — having one professionally prepared significantly improves claim outcomes.",
          },
          {
            heading: "Adjuster meetings",
            body: "If you'd like, we'll be on-site when your insurance adjuster comes to inspect. We don't argue with adjusters — we just make sure damage gets documented properly.",
          },
          {
            heading: "Direct repair coordination",
            body: "Once the claim is approved, we coordinate the repair work directly. You don't manage between insurance, contractor, and material supplier — we handle it.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How quickly can you inspect my storm-damaged roof?",
        answer:
          "In most cases, within 24–48 hours. Major weather events sometimes extend this to 3–5 days due to demand. Defender Shield members get a guaranteed 24-hour callback.",
      },
      {
        question: "Do I need to file an insurance claim before calling you?",
        answer:
          "No. Many homeowners call us first for an inspection, and based on what we find, decide whether to file a claim. We'll give you an honest assessment of whether the damage is worth filing.",
      },
      {
        question: "What if my insurance denies my claim?",
        answer:
          "We can help with appeals when appropriate. We'll review the adjuster's report, identify documentation gaps, and help you put together a stronger case for reconsideration.",
      },
      {
        question: "Do you offer emergency tarping?",
        answer:
          "Yes. If your roof has active leaks or visible structural damage, we can tarp the affected areas to prevent further damage while the claim and repair process moves forward.",
      },
      {
        question: "How much does storm damage repair cost?",
        answer:
          "Costs vary widely based on damage severity. If a claim is approved, your insurance typically covers most or all of the repair cost minus your deductible. We work within insurance scopes.",
      },
    ],
    related: [
      "emergency-roof-repair",
      "roof-inspection-madison-wi",
      "roof-repair",
      "roof-replacement",
    ],
    cityCallouts: ["madison", "sun-prairie", "fitchburg", "middleton", "deforest", "cottage-grove"],
  },
  {
    slug: "roof-inspection-madison-wi",
    category: "roofing",
    path: "/services/roofing/roof-inspection-madison-wi",
    heroImage: HERO_ROOFING,
    images: [
      { src: "/images/roofing_inspection-checklist.webp", alt: "Roof inspection checklist used on every Home Defender inspection" },
      { src: "/images/roofing_inspection-flashings.webp", alt: "Roof flashing being inspected around a vent pipe" },
      { src: "/images/roofing_inspection-report.webp", alt: "Written roof inspection report with photo documentation" },
    ],
    isGeoTargeted: true,
    title: "Free Roof Inspection in Madison, WI | Home Defender Remodeling",
    metaDescription:
      "Free 30-point roof inspection for Madison and Dane County homes. Honest assessment of your roof's condition with photos and a written report. No upsell.",
    h1: "Free Roof Inspection in Madison, WI",
    eyebrow: "Free Inspection · Madison, WI",
    hero: "Don't wait until you have a leak. Most roof problems are visible long before they cause damage inside your home — but only if someone's looking. Our free 30-point inspection gives Madison homeowners a clear, honest picture of what's working, what's wearing, and what to plan for.",
    sections: [
      {
        heading: "What our 30-point inspection covers",
        paragraphs: [
          "We don't shortcut roof inspections. Our inspectors physically climb every roof we inspect — drone footage and ground-level photos miss too much. Each inspection covers thirty distinct check points, organized into six categories:",
        ],
        list: [
          {
            heading: "Shingles & roofing material (8 points)",
            body: "Granule loss, curling, cupping, missing shingles, lifted shingles, hail impact marks, sealant condition, and overall material wear stage.",
          },
          {
            heading: "Flashings & penetrations (6 points)",
            body: "Chimney flashing, plumbing vent boots, skylight flashing, valley flashings, drip edges, and step flashings at sidewall transitions.",
          },
          {
            heading: "Gutters & drainage (5 points)",
            body: "Gutter pitch and securement, downspout function, splash guards, debris accumulation, and visible damage to fascia or soffits.",
          },
          {
            heading: "Ventilation (4 points)",
            body: "Ridge vents, soffit vents, attic ventilation balance, and signs of moisture or condensation issues in the attic.",
          },
          {
            heading: "Structural (4 points)",
            body: "Visible deck issues, sagging or unevenness, ice damming evidence, and any visible signs of structural compromise.",
          },
          {
            heading: "Documentation (3 points)",
            body: "Overall photo documentation, damage-specific close-ups, and a written summary of findings.",
          },
        ],
      },
      {
        heading: "What you get after the inspection",
        list: [
          {
            heading: "Written report",
            body: "A clear, plain-language summary of what we found. Each finding gets a severity rating (good / monitor / repair recommended / urgent) and a recommended action.",
          },
          {
            heading: "Photo documentation",
            body: "Every issue gets photographed. We share photos in a format you can keep — useful for your records, for insurance, and for selling the home if you ever do.",
          },
          {
            heading: "Honest recommendation",
            body: "If your roof has years of life left, we'll tell you. If it needs replacement, we'll tell you that too. We're not the contractor that finds 'urgent repairs' on every inspection — that approach hurts homeowners and hurts our reputation.",
          },
          {
            heading: "Estimate (only if needed)",
            body: "If repairs or replacement are recommended, you'll receive a written estimate within 1–2 business days. No pressure to act immediately — the report is yours to use however you want.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a roof inspection take?",
        answer:
          "Most inspections take 45–60 minutes. Larger or more complex roofs can take longer.",
      },
      {
        question: "Is the inspection really free?",
        answer:
          "Yes. Free, no obligation, no sales pressure. We do this because most homeowners need help understanding their roof's condition, and an honest inspection often turns into a customer over time.",
      },
      {
        question: "When should I get my roof inspected?",
        answer:
          "At minimum, every 2–3 years for asphalt-shingle roofs and every 3–5 years for metal. Also after any major storm, and before listing your home for sale.",
      },
      {
        question: "Will you tell me my roof is fine if it actually is?",
        answer:
          "Yes. Plenty of Madison homeowners worry about their roof's age but are years away from needing replacement. We tell people the truth — including when their roof is in good shape.",
      },
    ],
    related: [
      "roof-replacement",
      "roof-repair",
      "storm-damage-roof-repair-madison-wi",
      "emergency-roof-repair",
    ],
    cityCallouts: ["madison", "sun-prairie", "fitchburg", "middleton", "verona", "monona"],
  },
  /* ============== GUTTER SUB-SERVICES ============== */
  {
    slug: "gutter-installation",
    category: "gutter",
    path: "/services/gutter/gutter-installation",
    heroImage: HERO_GUTTERS,
    images: [
      { src: "/images/gutters_gutter-installation.webp", alt: "Seamless gutter installation in progress on a Madison home" },
      { src: "/images/gutters_seamless-aluminum.webp", alt: "Seamless aluminum gutter run installed along a fascia" },
      { src: "/images/gutters_gutter-color-options.webp", alt: "Seamless aluminum gutter color options" },
    ],
    isGeoTargeted: false,
    title: "Gutter Installation in Madison, WI | Home Defender Remodeling",
    metaDescription:
      "Seamless gutter installation in Madison and Dane County. 5\" and 6\" aluminum or steel, cut to length, hidden hangers, proper pitch. Free estimate.",
    h1: "Seamless Gutter Installation in Madison",
    eyebrow: "Gutter Service",
    hero: "Seamless aluminum and steel gutters, cut to length on the driveway, installed with hidden hangers and proper pitch. Sized to match the roof above and the drainage below.",
    sections: [
      {
        heading: "What we install",
        list: [
          {
            heading: "Seamless 5\" K-style aluminum",
            body: "The default for most Madison homes. One continuous piece per run, no factory seams to leak, color-matched to trim. 25-year material warranty.",
          },
          {
            heading: "Seamless 6\" K-style",
            body: "For larger or steeper roofs, pine-shaded homes, and additions where the original 5\" gutter is overflowing in heavy rain. 50% more capacity than 5\".",
          },
          {
            heading: "Half-round copper or galvanized",
            body: "For historic homes (Marquette, Maple Bluff older blocks) where K-style doesn't match the architecture. Costs more, lasts longer, ages well.",
          },
          {
            heading: "Steel gutters",
            body: "Heavier-duty option for homes with major snow or ice loads. Higher cost than aluminum but holds up better under sliding snow and falling ice.",
          },
        ],
      },
      {
        heading: "How we install",
        list: [
          {
            heading: "On-site fabrication",
            body: "We bring a gutter machine to your driveway and roll the gutter to the exact length of each run. No factory seams except at corners and outlets — the only places water can leak.",
          },
          {
            heading: "Hidden hangers every 24 inches",
            body: "Screwed into the fascia behind the gutter, not nailed through the front. Hidden hangers hold up under snow and ice loads that pull spike-and-ferrule systems loose within 5–10 years.",
          },
          {
            heading: "Proper pitch",
            body: "1/4 inch of fall per 10 feet of run, sloped toward the downspout. Too flat and it pools; too steep and it overshoots. We string-line every run before fastening.",
          },
          {
            heading: "Downspout sizing",
            body: "Sized to the drainage area above. 2×3\" for small to medium roofs, 3×4\" for large or steep roofs. Undersized downspouts are a common reason gutters overflow even when the trough is clean.",
          },
        ],
      },
      {
        heading: "Gutter guards (optional)",
        paragraphs: [
          "Installed during the gutter install or added later. Micromesh and reverse-curve guards keep most debris out and reduce cleaning frequency to once every 2–3 years. Cheap plastic screens clog within a year and trap moisture against the trough — we don't install those.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does gutter installation cost in Madison?",
        answer:
          "Most homes pay $9–$13 per linear foot for seamless 5\" aluminum, including downspouts. A typical 200-foot home runs $1,800–$2,600. 6\" gutters add about 20%. Steel and copper are quoted on the home.",
      },
      {
        question: "Do I really need 6\" gutters?",
        answer:
          "For most Madison homes, no — 5\" is fine. You need 6\" when the roof above is large (over 1,500 sq ft draining to one gutter), steep (over 8/12 pitch), or pine-shaded (debris constricts capacity). We measure and tell you straight.",
      },
      {
        question: "Where should the downspouts drain?",
        answer:
          "At least 4 feet away from the foundation, on a slope away from the house, or into an underground drain that empties at a safe distance. Splash blocks and extension elbows are cheap; foundation water damage is not.",
      },
      {
        question: "Do you offer gutter guards?",
        answer:
          "Yes — micromesh and reverse-curve are the systems we install. We don't install plastic snap-in screens. The right system for your home depends on tree cover, roof pitch, and budget; we'll talk through trade-offs at the estimate.",
      },
    ],
    related: ["gutter-replacement", "gutter-cleaning", "gutter-repair"],
  },
  {
    slug: "gutter-replacement",
    category: "gutter",
    path: "/services/gutter/gutter-replacement",
    heroImage: HERO_GUTTERS,
    images: [
      { src: "/images/gutters_gutter-removal.webp", alt: "Old gutters being removed during a Madison gutter replacement" },
      { src: "/images/gutters_old-vs-new-gutters.webp", alt: "Side-by-side comparison of old failing gutters and new seamless gutters" },
      { src: "/images/gutters_gutter-protection-detail.webp", alt: "Gutter protection guard installed over a new seamless gutter" },
    ],
    isGeoTargeted: false,
    title: "Gutter Replacement in Madison, WI | Home Defender Remodeling",
    metaDescription:
      "Full gutter replacement in Madison and Dane County. Tear-off, fascia inspection, capacity check, and a new seamless system. Free written estimate.",
    h1: "Gutter Replacement in Madison",
    eyebrow: "Gutter Service",
    hero: "When repair stops being economical, we tear off the old system, inspect the fascia underneath, check capacity, and install seamless gutters that drain in the right places.",
    sections: [
      {
        heading: "When replacement is the right call",
        list: [
          {
            heading: "Trough damage past repair",
            body: "Rotted-through aluminum, repeated split seams, multiple sagging sections. At some point patching costs more than starting over.",
          },
          {
            heading: "Fascia rot behind the gutter",
            body: "If the fascia is rotted, the gutter has nothing to hang from. We replace the fascia and install new gutters in the same project — repairing one without the other doesn't last.",
          },
          {
            heading: "Undersized or wrong-pitch system",
            body: "If the original system overflows in heavy rain or pools at the wrong end, sometimes the only fix is a new system sized correctly with proper pitch. Repairing and re-pitching old, dented gutters often isn't worth the labor.",
          },
          {
            heading: "Coordinating with a roof or siding project",
            body: "If you're already replacing the roof or siding, replacing aging gutters at the same time costs less per project — the staging, scaffolding, and dump load are shared.",
          },
        ],
      },
      {
        heading: "What we do",
        list: [
          {
            heading: "Tear off the old system",
            body: "Pull all gutters, downspouts, hangers, and clean out 30+ years of debris and corrosion behind them.",
          },
          {
            heading: "Inspect and repair the fascia",
            body: "Probe for rot, replace damaged fascia and soffit, prime and paint. New gutters won't hold to bad wood.",
          },
          {
            heading: "Capacity and pitch review",
            body: "Re-check whether the original gutter size and downspout count actually drained the roof. Adjust if needed.",
          },
          {
            heading: "Install the new seamless system",
            body: "On-site fabrication, hidden hangers, color-matched, downspouts where they belong (not just where the old ones were).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does gutter replacement take?",
        answer:
          "Most single-family homes are one day — tear-off in the morning, fascia repair if needed, new install in the afternoon. Larger homes with extensive fascia repair can run two days.",
      },
      {
        question: "How much does gutter replacement cost?",
        answer:
          "$2,000–$3,500 for most Madison homes, including tear-off, dump, and a new seamless 5\" or 6\" aluminum system. Add $400–$1,200 if fascia repair is needed. Free written estimate before any work.",
      },
      {
        question: "Should I replace gutters at the same time as the roof?",
        answer:
          "Often, yes. Sharing the staging and dump load saves money, and a fresh roof on aging gutters means tearing the gutters off again in 5–10 years. If the gutters are 15+ years old and the roof is being replaced, we'll usually quote both.",
      },
      {
        question: "Do you handle the dump and cleanup?",
        answer:
          "Yes — included in the estimate. Magnet sweep for any nails, all debris removed, splash blocks reset.",
      },
    ],
    related: ["gutter-installation", "gutter-cleaning", "gutter-repair"],
  },
  {
    slug: "gutter-cleaning",
    category: "gutter",
    path: "/services/gutter/gutter-cleaning",
    heroImage: HERO_GUTTERS,
    images: [
      { src: "/images/gutters_gutter-cleaning.webp", alt: "Gutter cleaning in progress on a Dane County home" },
      { src: "/images/gutters_cleaning-debris.webp", alt: "Leaves and debris removed during a gutter cleaning" },
      { src: "/images/gutters_cleaning-tools.webp", alt: "Professional gutter cleaning tools and equipment" },
    ],
    isGeoTargeted: false,
    title: "Gutter Cleaning in Madison, WI | Home Defender Remodeling",
    metaDescription:
      "Gutter cleaning and downspout flushing across Madison and Dane County. Spring and fall service. Stops fascia rot and ice dams. Call (608) 925-3576.",
    h1: "Gutter Cleaning in Madison",
    eyebrow: "Gutter Service",
    hero: "Hand-clean troughs, flush downspouts, check splash blocks. Twice a year for most Madison homes — once in spring after the maple seeds drop, once after leaf-fall.",
    sections: [
      {
        heading: "Why cleaning matters",
        paragraphs: [
          "Clogged gutters back water up under the shingles and into the fascia. The fascia rots. The water finds the soffit. From there it gets into the wall cavity. By the time you see a stain on the ceiling, the underlying repair is into the thousands.",
          "Clogged downspouts are the version of this problem that most people miss. The trough can look clean from the ground while the downspout outlet is fully packed with debris — water backs up into the gutter, overflows, and ends up dumping at the foundation. Splash blocks and downspout extensions matter just as much as the trough itself.",
        ],
      },
      {
        heading: "What we do",
        list: [
          {
            heading: "Hand-clean every trough",
            body: "Bag debris on-site, no leaf piles left in the lawn. We don't flush the trough with a hose — fast but pushes debris into the downspouts and the foundation drains.",
          },
          {
            heading: "Flush every downspout",
            body: "Hose flush from the top, listening for the back-pressure that means a partial blockage, then snake out the obstruction if needed. Most contractors skip this step.",
          },
          {
            heading: "Inspect for damage",
            body: "Sagging sections, separated seams, loose hangers, fascia rot signs. We send you photos of anything that needs attention.",
          },
          {
            heading: "Splash block check",
            body: "Make sure water exits at least 4 feet from the foundation on a slope away from the house. Reset or replace splash blocks where needed.",
          },
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Twice a year is right for most Madison homes — once in late spring after the silver-maple seeds and oak catkins drop, once in late fall after leaves come down. Pine-heavy lots may need a third cleaning. Defender Shield members get one cleaning included as part of the annual plan, with a downspout flush.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does gutter cleaning cost?",
        answer:
          "$150–$300 for most single-story Madison homes. $250–$450 for two-story. Steep, complex, or heavily-treed homes can run higher. Defender Shield members get one cleaning included.",
      },
      {
        question: "Should I have my gutters cleaned even if I have gutter guards?",
        answer:
          "Yes — once every 2–3 years instead of twice a year, but still yes. Even good guards let some fines through, and the downspouts still need flushing. No guard system is fully maintenance-free.",
      },
      {
        question: "What if you find damage during the cleaning?",
        answer:
          "We photograph it and send you the photos. No upsell on the spot — you decide whether and when to repair. If you want a written estimate, we'll send one within a couple of days.",
      },
      {
        question: "Do you do one-time cleanings or only ongoing service?",
        answer:
          "Both. Most customers schedule individual cleanings as needed; some prefer the Defender Shield, which includes one cleaning a year along with inspection and other benefits. Whatever fits.",
      },
    ],
    related: ["gutter-repair", "gutter-replacement", "gutter-installation"],
  },
  {
    slug: "gutter-repair",
    category: "gutter",
    path: "/services/gutter/gutter-repair",
    heroImage: HERO_GUTTERS,
    images: [
      { src: "/images/gutters_repair-detached-gutter.webp", alt: "Detached gutter being repaired and re-secured to fascia" },
      { src: "/images/gutters_repair-leaking-seam.webp", alt: "Leaking gutter seam being sealed during repair" },
      { src: "/images/gutters_gutter-clogged-comparison.webp", alt: "Side-by-side comparison of clogged and properly draining gutters" },
    ],
    isGeoTargeted: false,
    title: "Gutter Repair in Madison, WI | Home Defender Remodeling",
    metaDescription:
      "Gutter repair in Madison and Dane County. Re-pitch, re-seal, re-hang, replace damaged sections. Cheaper than full replacement when the bones are good.",
    h1: "Gutter Repair in Madison",
    eyebrow: "Gutter Service",
    hero: "Re-pitch, re-hang, re-seal, replace damaged sections. Cheaper than full replacement when the rest of the system is still solid.",
    sections: [
      {
        heading: "What we repair",
        list: [
          {
            heading: "Sagging or separated sections",
            body: "Re-hang with new hidden hangers, re-pitch to the downspout, re-seal seams. Most sags are fixable without replacing the whole run.",
          },
          {
            heading: "Leaking seams and corners",
            body: "The factory-cut joints at corners and outlets are where gutters leak. We strip the old sealant, clean the metal, and re-seal with gutter-grade sealant — a different product than caulk.",
          },
          {
            heading: "Damaged sections",
            body: "Cut out dented or punctured sections (snow load, falling branches, ladder dings), splice in new seamless gutter, color-matched.",
          },
          {
            heading: "Fascia repair behind the gutter",
            body: "When water has gotten behind the gutter and rotted the fascia, we pull the gutter, replace the rotted board, and re-hang. Common on older homes where the gutter pitch was wrong for years.",
          },
          {
            heading: "Downspout repairs",
            body: "Re-secure loose downspouts, replace cracked elbows, snake out persistent blockages, re-route downspouts that drain too close to the foundation.",
          },
        ],
      },
      {
        heading: "When repair stops being the right call",
        paragraphs: [
          "If we're patching a third leak in a 20-year-old aluminum gutter that's also sagging in two places, we'll tell you straight: replacement is the better spend. We're not going to talk you into a series of small repairs on a system that's at the end of its life. The Defender Shield's annual inspection makes this judgment easier — we have a year-over-year record of how the system is holding up.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much do gutter repairs cost?",
        answer:
          "Targeted repairs run $200–$600 for most Madison homes — re-pitching a section, replacing a few hangers, re-sealing a corner. Bigger repairs involving fascia replacement or section splicing run $500–$1,200. Free assessment, written estimate.",
      },
      {
        question: "Can you repair gutters in winter?",
        answer:
          "Some repairs, yes. Sealant work needs above-freezing temperatures to cure properly, so we time those for warm spells. Hanger replacement and re-pitching can usually be done year-round on safe days.",
      },
      {
        question: "Will the repaired section match my existing gutters?",
        answer:
          "Color-matched to the existing finish — we carry the common Madison-area trim colors and can order matches when needed. Aged gutters may show a slight color difference for the first year or two; we'll flag this at the estimate.",
      },
      {
        question: "How long do gutter repairs last?",
        answer:
          "Five to ten years for most repairs on systems that have life left in them. We warranty workmanship for two years — if a repair we did fails earlier, we come back and re-do it.",
      },
    ],
    related: ["gutter-cleaning", "gutter-replacement", "gutter-installation"],
  },
  /* ============== SIDING SUB-SERVICES ============== */
  {
    slug: "siding-replacement",
    category: "siding",
    path: "/services/siding/siding-replacement",
    heroImage: HERO_SIDING,
    images: [
      { src: "/images/siding_replacement-tear-off.webp", alt: "Siding tear-off on a Madison home before re-siding" },
      { src: "/images/siding_replacement-house-wrap.webp", alt: "House wrap installed over sheathing before new siding goes up" },
      { src: "/images/siding_replacement-installation.webp", alt: "New siding being installed on a Wisconsin home" },
    ],
    isGeoTargeted: false,
    title: "Siding Replacement in Madison, WI | Home Defender",
    metaDescription:
      "Full siding replacement for Madison-area homes. Vinyl, fiber cement, and engineered wood options. 10-year workmanship warranty. Free in-home consultation.",
    h1: "Siding Replacement in Madison, WI",
    eyebrow: "Siding Service",
    hero:
      "A full siding replacement is one of the most expensive things you'll do to your home — and one of the most consequential. Done right, the new siding will outlast you. Done wrong, you'll be calling a different contractor in five years to fix what should have been done correctly the first time. We don't shortcut the underlayment, the flashing, or the moisture management. Free in-home consultation. Written estimates. No high-pressure quotes.",
    sections: [
      {
        heading: "Signs your home needs full siding replacement",
        paragraphs: [
          "Not every damaged panel means you need a full replacement. But there's a point where targeted repair stops making sense and full replacement becomes the better long-term move. Most homeowners hit that point when one or more of these conditions show up at the same time.",
        ],
        list: [
          {
            heading: "Widespread damage",
            body: "Cracks, holes, warping, or rot affecting more than 30–40% of the home's siding.",
          },
          {
            heading: "Age",
            body: "Siding more than 20 years old that's starting to show wear in multiple places.",
          },
          {
            heading: "Recurring moisture problems",
            body: "Mold, mildew, or water stains that keep coming back after repairs.",
          },
          {
            heading: "Structural damage behind the panels",
            body: "Soft sheathing, rotted studs, or visible damage when a panel is pulled.",
          },
          {
            heading: "Rising energy bills",
            body: "Older siding without proper insulation or with failed seams lets conditioned air escape.",
          },
          {
            heading: "Fading or chalking",
            body: "UV damage across the entire exterior, especially on south and west-facing walls.",
          },
        ],
      },
      {
        heading: "The replacement process — what to expect",
        paragraphs: [
          "A full siding replacement is more than just swapping panels. The siding is the outer layer of a system that includes sheathing, house wrap, insulation, and flashing. When old siding comes off, we inspect everything underneath — and address what needs addressing before new siding goes on. Skipping that step is the single biggest reason new siding fails early.",
          "A typical Home Defender Remodeling siding replacement includes the following steps.",
        ],
        list: [
          {
            heading: "1. Tear-off and disposal",
            body: "We remove existing siding, trim, and flashings and haul them off the site.",
          },
          {
            heading: "2. Sheathing inspection",
            body: "We identify and replace any rotted or damaged wood before anything new goes up.",
          },
          {
            heading: "3. House wrap upgrade",
            body: "Modern weather-resistive barriers replace older felt or damaged wrap.",
          },
          {
            heading: "4. Insulation review",
            body: "If your wall cavities are under-insulated, we discuss options while the wall is open.",
          },
          {
            heading: "5. New flashing",
            body: "Fresh flashing at every window, door, and penetration.",
          },
          {
            heading: "6. Siding installation",
            body: "In the material and profile you've chosen, fastened to manufacturer spec.",
          },
          {
            heading: "7. Trim, corners, and final detailing",
            body: "Matched to your home's architectural style.",
          },
          {
            heading: "8. Magnet sweep and full cleanup",
            body: "We leave the site cleaner than we found it.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a full siding replacement take?",
        answer:
          "Most Madison-area homes complete in 1–2 weeks of active work. Smaller homes (under 1,800 sq ft) often finish in 5–7 days. Larger homes or complex architectural details (multiple gables, decorative trim, multi-story) can run 2–3 weeks. Weather can extend the timeline — we won't leave the wall open if there's serious rain or storms in the forecast.",
      },
      {
        question: "What's the warranty on a Home Defender Remodeling siding replacement?",
        answer:
          "We back our installation with a 10-year workmanship warranty. That's separate from the manufacturer warranty on the siding material itself, which typically runs 25–50 years depending on the product. If anything goes wrong because of how we installed it, we fix it. No fine print.",
      },
      {
        question: "Can you replace siding around existing windows, or do I need to replace them at the same time?",
        answer:
          "Both options work. We can install new siding around existing windows with proper flashing and trim integration. That said, replacing siding is also one of the easiest times to replace windows — the wall is already open and the trim is coming off either way. Most homeowners who are within 5–10 years of needing window replacement choose to do both at once. We'll walk through the tradeoffs honestly during your consultation.",
      },
      {
        question: "How much does a full siding replacement cost?",
        answer:
          "For Madison-area homes in 2026, expect $9,000–$22,000 for a full replacement, with most projects landing in the $11,000–$18,000 range. The biggest cost drivers are home size, material choice, and architectural complexity. Vinyl is the most affordable; fiber cement adds 50–100% to material cost but extends lifespan significantly. We provide written, itemized estimates after an in-person inspection — no phone quotes, no rough ranges over email.",
      },
    ],
    related: ["siding-repair", "vinyl-siding", "fiber-cement-siding"],
  },
  {
    slug: "siding-repair",
    category: "siding",
    path: "/services/siding/siding-repair",
    heroImage: HERO_SIDING,
    images: [
      { src: "/images/siding_repair-panel.webp", alt: "Damaged siding panel being replaced" },
      { src: "/images/siding_repair-wind-damage.webp", alt: "Wind-damaged siding on a Madison-area home" },
      { src: "/images/siding_repair-completed.webp", alt: "Completed siding repair section blending into surrounding panels" },
    ],
    isGeoTargeted: false,
    title: "Siding Repair in Madison, WI | Home Defender",
    metaDescription:
      "Siding repair for Madison-area homes — wind damage, hail, cracked panels, water damage. Honest assessment of repair vs replacement. Call (608) 925-3576.",
    h1: "Siding Repair in Madison, WI",
    eyebrow: "Siding Service",
    hero:
      "A few cracked panels after a hailstorm don't mean you need to replace your entire siding. Sometimes a targeted repair is the right call — fixes the problem, costs a fraction of full replacement, and buys your existing siding another 5–10 years of life. The trick is knowing when repair makes sense and when it doesn't. We assess the damage, give you an honest answer, and only recommend replacement when repair genuinely isn't the better choice. Free inspection. Written estimates.",
    sections: [
      {
        heading: "When siding repair makes sense",
        paragraphs: [
          "Siding repair is most appropriate when damage is localized, the rest of the home's siding is in good condition, and the underlying wall system hasn't been compromised. Common repair-appropriate scenarios we see across Madison and Dane County.",
        ],
        list: [
          {
            heading: "Storm damage",
            body: "Hail dents on a few panels, wind-lifted boards, debris impact in one section.",
          },
          {
            heading: "Isolated cracks",
            body: "A single panel cracked from impact, with surrounding panels intact.",
          },
          {
            heading: "Loose or detached sections",
            body: "Boards that have pulled away from fasteners but aren't structurally damaged.",
          },
          {
            heading: "Color matching for a recent buy",
            body: "Homeowner just bought a home and a few panels were damaged before they moved in.",
          },
          {
            heading: "Pre-sale touch-ups",
            body: "Getting the exterior presentable before listing the home.",
          },
          {
            heading: "Insurance claim work",
            body: "Covered damage being restored as part of a homeowner's policy claim.",
          },
        ],
      },
      {
        heading: "When replacement is the smarter long-term move",
        paragraphs: [
          "We turn down siding repair work when repair genuinely isn't in the homeowner's interest. The honest answer matters more than the short-term job. Replacement usually makes more sense in these cases.",
        ],
        list: [
          {
            heading: "Damage is widespread",
            body: "More than 30–40% of the home's siding shows similar damage.",
          },
          {
            heading: "The siding is more than 20 years old",
            body: "Patching old material that's failing across the board doesn't extend its life much.",
          },
          {
            heading: "Moisture damage is present behind the panels",
            body: "Repairing siding over rotted sheathing just hides the problem.",
          },
          {
            heading: "You've already had repeated repairs",
            body: "The same areas keep failing, suggesting the underlying problem isn't fixable at the panel level.",
          },
          {
            heading: "The home is being prepared for long-term ownership",
            body: "Putting another $1,500 into siding that needs replacement in 2 years isn't a good investment.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How much does siding repair cost?",
        answer:
          "Most siding repairs in the Madison area run between $300 and $2,500 depending on the size of the damaged area, material, and accessibility. A single cracked vinyl panel might be $250–$500. A section of storm-damaged siding across two stories of a home might run $1,500–$3,000. We provide written estimates after an inspection — no rough numbers over the phone.",
      },
      {
        question: "Can you match my existing siding color?",
        answer:
          "Most of the time, yes. We carry the most common vinyl and fiber cement colors in stock. Older siding, discontinued colors, or unusual profiles can sometimes require a special order — which adds 1–3 weeks to the timeline. We'll let you know during the inspection what's involved. Worst case, we can sometimes pull undamaged siding from a less-visible side of the house and use it for the visible repair, then install the new color on the back where it shows less.",
      },
      {
        question: "Will my insurance cover storm damage repairs?",
        answer:
          "Often yes, if the damage is from a covered event (hail, severe wind, falling debris). Your homeowner's policy usually covers the repair minus your deductible. We document the damage in writing, photograph everything, and work directly with your insurance adjuster. Most Madison homeowners under-document storm damage and end up with smaller payouts than they're entitled to — we don't let that happen to our customers.",
      },
    ],
    related: ["siding-replacement", "vinyl-siding", "fiber-cement-siding"],
  },
  {
    slug: "vinyl-siding",
    category: "siding",
    path: "/services/siding/vinyl-siding",
    heroImage: HERO_SIDING,
    images: [
      { src: "/images/siding_vinyl-detail.webp", alt: "Vinyl siding profile detail" },
      { src: "/images/siding_vinyl-color-options.webp", alt: "Vinyl siding color options" },
      { src: "/images/siding_vinyl-installation.webp", alt: "Vinyl siding installation in progress" },
    ],
    isGeoTargeted: false,
    title: "Vinyl Siding Installation in Madison, WI | Home Defender",
    metaDescription:
      "Vinyl and insulated vinyl siding installation for Madison homes. Premium products rated for Wisconsin cold. Free consultation, 10-year workmanship warranty.",
    h1: "Vinyl Siding Installation in Madison, WI",
    eyebrow: "Siding Material",
    hero:
      "Vinyl is the most common siding material in Wisconsin — and for good reason. It's affordable, low-maintenance, and available in more colors and profiles than any other siding material. But not all vinyl is the same. The cheap stuff you'd find on a 1990s spec home cracks in a Wisconsin January. Premium vinyl, properly installed, holds up for 25–30 years and looks great the entire time. We install only premium-grade vinyl products engineered for Midwest cold.",
    sections: [
      {
        heading: "What vinyl siding actually delivers",
        paragraphs: [
          "For most Madison-area homes, vinyl siding hits the right balance of cost, durability, and appearance. The honest case for vinyl.",
        ],
        list: [
          {
            heading: "Cost",
            body: "Installed cost typically runs $4–$8 per square foot, roughly half of what fiber cement runs.",
          },
          {
            heading: "Maintenance",
            body: "Wash it once a year with a garden hose. No painting, no sealing, no staining.",
          },
          {
            heading: "Color permanence",
            body: "Color is baked through the material rather than painted on, so scratches don't show a different color underneath.",
          },
          {
            heading: "Selection",
            body: "Dozens of profiles — traditional lap, Dutch lap, board and batten, shake — and hundreds of colors.",
          },
          {
            heading: "Lifespan",
            body: "25–30 years for premium products in Wisconsin's climate, with insulated vinyl on the longer end of that range.",
          },
        ],
      },
      {
        heading: "The honest tradeoffs",
        paragraphs: [
          "Vinyl isn't perfect. These are the things honest contractors talk about up front. For homes where the budget points to vinyl, premium-grade products installed correctly perform very well in Madison — but it's worth knowing where vinyl has limits.",
        ],
        list: [
          {
            heading: "Cold brittleness",
            body: "Vinyl gets harder and more brittle below 10°F. Cheap vinyl can crack from impact in deep winter. Premium vinyl handles cold significantly better.",
          },
          {
            heading: "Heat expansion",
            body: "Vinyl expands and contracts substantially with temperature swings. Installation has to account for this, or seams pull apart over time.",
          },
          {
            heading: "Hail vulnerability",
            body: "Vinyl dents and cracks under significant hail more than fiber cement does.",
          },
        ],
      },
      {
        heading: "Insulated vinyl — when it's worth the upgrade",
        paragraphs: [
          "Insulated vinyl adds a layer of rigid foam backing bonded directly to the back of the vinyl panel. The result is a measurably more rigid, more impact-resistant, and more energy-efficient siding system. The upgrade typically adds about $1.50–$3.00 per square foot installed.",
          "Where insulated vinyl makes the most sense in Madison.",
        ],
        list: [
          {
            heading: "Homes with older insulation",
            body: "Most homes built before 1985 are under-insulated by current standards. Insulated vinyl is a noticeable improvement.",
          },
          {
            heading: "North-facing walls",
            body: "North sides of the home see the most cold exposure and the most ice damming risk. Insulated vinyl helps both.",
          },
          {
            heading: "Homeowners staying long-term",
            body: "The energy savings compound over time. If you're staying 10+ years, the math usually works.",
          },
          {
            heading: "Homes with poor sound insulation",
            body: "The rigid foam noticeably reduces outdoor noise.",
          },
          {
            heading: "When standard vinyl is the smarter call",
            body: "Investment properties or short-term holds where the payback period won't match your timeline; tight budgets where standard vinyl still performs well; or homes that already have good wall insulation.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does vinyl siding last in Wisconsin?",
        answer:
          "Premium-grade vinyl in Wisconsin typically delivers 25–30 years of service life before significant degradation. Standard or budget vinyl usually delivers 15–20 years before fading, cracking, or seam failure shows up. Wisconsin's deep cold and freeze-thaw cycles are harder on vinyl than the climates manufacturers test in — premium products are worth the modest upgrade for the longer life and warranty backing.",
      },
      {
        question: "Does vinyl siding really crack in Wisconsin winters?",
        answer:
          "Cheaper vinyl can. Below about 10°F — which Madison hits regularly in January and February — older or thinner vinyl becomes brittle and more vulnerable to impact damage from snow shovels, hail, or wind-blown debris. Premium vinyl is engineered to maintain flexibility at lower temperatures, but it's still not invincible. This is one reason we only install premium-grade products. The cost difference between budget and premium vinyl is small compared to the cost of replacing prematurely failed siding.",
      },
      {
        question: "Can I paint vinyl siding?",
        answer:
          "Technically yes, but we don't recommend it. Vinyl is designed with the color baked into the material — painting works against that design and the paint typically fails within 5–7 years, sometimes peeling in sheets. If your vinyl is faded or you don't like the color, replacement is almost always the better long-term move than painting. The exception is if the vinyl is otherwise in great condition and you only have 5 years left in the home — in that case, paint might bridge the gap.",
      },
    ],
    related: ["fiber-cement-siding", "siding-replacement", "siding-repair"],
  },
  {
    slug: "fiber-cement-siding",
    category: "siding",
    path: "/services/siding/fiber-cement-siding",
    heroImage: HERO_SIDING,
    images: [
      { src: "/images/siding_fiber-cement-detail.webp", alt: "Fiber-cement siding profile detail" },
      { src: "/images/siding_fiber-cement-installation.webp", alt: "Fiber-cement siding installation in progress" },
    ],
    isGeoTargeted: false,
    title: "Fiber Cement Siding in Madison, WI | Home Defender",
    metaDescription:
      "Fiber cement siding installation for Madison homes. 30–50 year lifespan, hail-resistant, engineered for Wisconsin climate. Free in-home consultation.",
    h1: "Fiber Cement Siding in Madison, WI",
    eyebrow: "Siding Material",
    hero:
      "If you're staying in your home for the long term and you want siding that won't need replacement again in your lifetime, fiber cement is hard to beat. It's the most durable siding material widely available in Wisconsin — won't crack in cold, won't dent from hail, won't burn, and lasts 30–50 years. The tradeoff is upfront cost: roughly 2x what vinyl costs. For long-term homeowners, the math almost always works. We install fiber cement on Madison-area homes using premium products engineered for cold-climate performance.",
    sections: [
      {
        heading: "Built for everything Wisconsin throws at it",
        paragraphs: [
          "Fiber cement is a composite of Portland cement, sand, and cellulose fibers — pressed into siding panels that look like wood but perform like masonry. The combination delivers properties that no other siding material matches at a residential price point.",
        ],
        list: [
          {
            heading: "Cold resistance",
            body: "Fiber cement doesn't become brittle in deep cold. It's stable from -40°F to 120°F without expansion-contraction stress.",
          },
          {
            heading: "Hail resistance",
            body: "Hailstones typically bounce off without leaving marks. Compare that to vinyl, which dents and cracks.",
          },
          {
            heading: "Fire resistance",
            body: "Class A fire rating. Won't ignite, won't accelerate flame spread.",
          },
          {
            heading: "Pest resistance",
            body: "Termites, carpenter ants, and woodpeckers can't damage it. Not food, not nesting material.",
          },
          {
            heading: "Moisture resistance",
            body: "Won't rot, won't grow mold, won't swell from humidity.",
          },
          {
            heading: "Wind resistance",
            body: "Heavier than vinyl, properly fastened fiber cement handles winds well above 130 mph.",
          },
          {
            heading: "Lifespan",
            body: "30–50 years in Wisconsin's climate, with proper paint maintenance every 10–15 years.",
          },
        ],
      },
      {
        heading: "The honest tradeoffs",
        paragraphs: [
          "Fiber cement is the right answer for many Madison homes, but it's not the right answer for every Madison home. Honest tradeoffs to weigh.",
        ],
        list: [
          {
            heading: "Upfront cost",
            body: "Installed cost typically runs $10–$15 per square foot, roughly 2x what vinyl runs. For an average Madison home, that translates to $5,000–$10,000 more upfront.",
          },
          {
            heading: "Repainting cycle",
            body: "Fiber cement is painted, not color-impregnated. The paint typically holds up 10–15 years before needing refresh. Not a huge cost, but it's a maintenance item vinyl doesn't have.",
          },
          {
            heading: "Installation complexity",
            body: "Fiber cement is heavier than vinyl, requires specialized cutting tools, and demands more skilled installation. Choosing the right contractor matters more than with vinyl.",
          },
          {
            heading: "Weight",
            body: "Heavier panels need solid sheathing underneath. Older homes with damaged or undersized sheathing may need that upgraded as part of the project.",
          },
        ],
      },
      {
        heading: "When fiber cement is the clear winner",
        paragraphs: [
          "Fiber cement is the clear winner for long-term homeowners (10+ years), homes in hail-prone areas, premium neighborhoods where resale value matters, and historic districts where appearance fidelity is important. Vinyl may still be the better call for short-term holds, tight budgets, or lower-end investment properties. We walk through the tradeoffs honestly during your consultation — no pressure toward either material.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is one fiber cement brand better than the others?",
        answer:
          "James Hardie is the market leader in North America and the brand most Madison-area homeowners recognize. Their HardieZone system genuinely does engineer different formulations for different climates — Wisconsin homes get a different product than Florida homes, optimized for cold and freeze-thaw rather than humidity and salt air. Other brands like Allura, Nichiha, and CertainTeed are also reputable and can be the right call depending on the project and price point. During the consultation we walk through the options based on what fits your home, your timeline, and your budget — we're not locked into any single manufacturer.",
      },
      {
        question: "How often does fiber cement need to be repainted?",
        answer:
          "Most fiber cement paint systems hold up 10–15 years before showing wear. Pre-finished products with factory-applied color (such as James Hardie's ColorPlus line) typically come with a 15-year color warranty that's realistic in Wisconsin's climate. Repainting a fiber cement home costs about $3,000–$8,000 depending on size — significant, but spread over 15 years it's about $250–$550 per year, which is reasonable for the lifespan you're getting.",
      },
      {
        question: "Will my home appraise higher with fiber cement siding?",
        answer:
          "Generally yes. Real estate data consistently shows fiber cement adds more resale value than vinyl, particularly in mid-range and premium home markets. The exact number varies by neighborhood, but fiber cement typically recoups 70–80% of its installed cost in home value — compared to vinyl's 60–70%. In premium Madison neighborhoods (Maple Bluff, Shorewood Hills, University Heights, Nakoma), the resale value premium is often larger.",
      },
      {
        question: "Does fiber cement work on historic district homes in Madison?",
        answer:
          "In most cases, yes — and the Madison Landmarks Commission generally approves fiber cement as a substitute for original wood siding when the profile matches the home's original architectural style. Historic district homes in University Heights and Marquette / Third Lake Ridge require Certificate of Appropriateness approval for visible material changes, and we handle that application as part of our process. Most major fiber cement manufacturers offer profiles specifically designed to match traditional clapboard, shingle, and board-and-batten styles common in Madison's historic neighborhoods.",
      },
    ],
    related: ["vinyl-siding", "siding-replacement", "siding-repair"],
  },
];

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */

export function getSubServiceBySlug(slug: string): SubService | undefined {
  return subServices.find((s) => s.slug === slug);
}

export function getServiceCategoryBySlug(
  slug: ServiceCategorySlug
): ServiceCategoryPage | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getRoofingSubServices(): SubService[] {
  return subServices.filter((s) => s.category === "roofing");
}

export function getGutterSubServices(): SubService[] {
  return subServices.filter((s) => s.category === "gutter");
}
