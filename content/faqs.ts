/**
 * Site-wide FAQ data. Drives /faq. Per-city/neighborhood FAQs live in
 * content/cities.ts; per-service FAQs live in content/services.ts.
 *
 * Sourced from reference-site/pages/faq.html (existing live copy), rewritten
 * to:
 *   - Replace bare "Home Defender" with the canonical "Home Defender Remodeling"
 *   - Replace the bad service-area list (Milwaukee/Green Bay/Kenosha) with
 *     "Madison, Dane County, and southern Wisconsin"
 *   - Strip superlatives ("incredible", "exceptional", "lifesaver")
 *   - Drop online-payment/auto-renew framing per Neighborhood Strategy §3
 */

import type { FAQ } from "./cities";

export interface FAQCategory {
  id: string;
  title: string;
  description?: string;
  faqs: FAQ[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    title: "General",
    faqs: [
      {
        question: "What areas do you serve?",
        answer:
          "Madison, Dane County, and southern Wisconsin. We have dedicated city pages for the cities we work in most often, plus six Madison neighborhood pages with hyperlocal notes on permitting and weather patterns.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes. Roof, gutter, and window estimates are free, with no obligation. We come out, inspect the home, take photos, and send a written estimate within 1–2 business days.",
      },
      {
        question: "Do you offer financing?",
        answer:
          "Yes. We offer financing through Synchrony, including 0% short-term plans (typically 12 months) and longer-term low-payment plans (up to 10 years). We can run a soft credit check during your estimate to give you exact monthly options before you commit.",
      },
      {
        question: "Do your services come with warranties?",
        answer:
          "Yes. Every job carries a written workmanship warranty from us, plus the manufacturer warranty for the materials installed. Both are handed over at the final walkthrough — not buried in fine print.",
      },
      {
        question: "How do I schedule an appointment?",
        answer:
          "Call (608) 925-3576 or use the contact form. Phone calls are triaged ahead of email — call us if your situation is urgent (active leak, storm damage, safety concern).",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "Check, all major credit cards, and Synchrony financing for eligible projects. We invoice — we don't take automated online payments or auto-renewing subscriptions.",
      },
    ],
  },
  {
    id: "roofing",
    title: "Roofing",
    faqs: [
      {
        question: "What roofing materials do you offer?",
        answer:
          "Architectural asphalt shingles (the right call for most Wisconsin roofs), standing-seam metal roofing, and limited synthetic systems for specific cases. We don't install slate or natural tile in this climate.",
      },
      {
        question: "How long does a roof replacement take?",
        answer:
          "Most full replacements in Madison and Dane County take 1–3 days, depending on roof size, complexity, and whether decking needs replacement. Storm-damage jobs are scheduled around weather windows and can run longer.",
      },
      {
        question: "How do I know if I need a new roof?",
        answer:
          "Common signs: missing or curled shingles, granule loss in the gutters, daylight visible in the attic, repeated leaks at the same flashing, sagging rooflines, or a roof that's 20+ years old. When in doubt, schedule a free roof inspection — we'll tell you straight whether repair or replacement makes more sense.",
      },
      {
        question: "Do you handle storm damage and insurance claims?",
        answer:
          "Yes. Free post-storm inspection, photo documentation, written scope of work for the adjuster, and on-site presence during the adjuster's inspection if you'd like. See the storm damage roof repair page for the full process.",
      },
      {
        question: "What does a roof replacement cost in Madison?",
        answer:
          "Most full replacements in Madison and Dane County land between $9,000 and $22,000 — the bulk fall in the $11,000–$16,000 range. The pricing transparency page breaks down the five biggest cost drivers.",
      },
    ],
  },
  {
    id: "gutters",
    title: "Gutter Protection",
    faqs: [
      {
        question: "What is a gutter protection system?",
        answer:
          "A cover or insert that keeps debris (leaves, maple seeds, pine needles, twigs) out of the gutter trough so water flows freely. The good systems use micromesh or reverse-curve covers; cheap plastic screens clog within a year and trap moisture against the trough.",
      },
      {
        question: "How often do gutters need to be cleaned?",
        answer:
          "Twice a year for most Madison homes — once in spring after the maple seeds drop, and once in late fall after leaves come down. Homes near pines or oaks may need a third cleaning. Defender Shield members get one cleaning included, with a downspout flush.",
      },
      {
        question: "Will gutter guards eliminate cleaning entirely?",
        answer:
          "No system eliminates cleaning entirely. Quality micromesh systems extend cleaning intervals to once every 2–3 years and prevent the kind of clogs that cause overflow and ice damming. We install the systems we'd put on our own homes — we don't install the cheap ones.",
      },
      {
        question: "Are your gutter systems durable in Wisconsin's weather?",
        answer:
          "The systems we install are rated for Wisconsin's winters: heavy snowfall, ice loading, freeze/thaw cycles, and wind. Hidden hangers every 24 inches, proper pitch, and downspouts sized to the drainage area — the failure points are usually undersizing or bad pitch, not the materials themselves.",
      },
    ],
  },
  {
    id: "windows",
    title: "Windows",
    faqs: [
      {
        question: "What types of windows do you install?",
        answer:
          "Double-hung, casement, sliding, bay, bow, and custom configurations. All available with energy-efficient glazing packages (Low-E, argon-filled, double or triple pane) suited to Wisconsin's heating-dominant climate.",
      },
      {
        question: "How do I know if I need new windows?",
        answer:
          "Drafts you can feel near the frame, condensation between the panes (a sign the seal has failed), difficulty opening or closing, visible rot in the sash or trim, or unusually high heating bills relative to the home's size and age — any of those are worth an estimate.",
      },
      {
        question: "How long does window installation take?",
        answer:
          "Most full-home replacements take 1–2 days, depending on the number of windows and access. We protect interior finishes, clean as we go, and remove the old units the day they come out — no waiting weeks for someone to come back for the trash.",
      },
      {
        question: "Are your windows energy-efficient?",
        answer:
          "The packages we install meet or exceed ENERGY STAR Northern Climate Zone requirements. The exact energy savings depend on what you're replacing — single-pane to dual-pane is a step change; dual-pane to triple-pane is a smaller marginal improvement at higher cost.",
      },
    ],
  },
  {
    id: "defender-shield",
    title: "The Defender Shield (Annual Plan)",
    faqs: [
      {
        question: "What is The Defender Shield?",
        answer:
          "Our annual home protection plan. For $295/year, members get a 30-point exterior inspection, annual gutter cleaning + downspout flush, 20% off any repair, priority storm response, free post-storm assessments, and insurance-claim documentation. See the full breakdown at /defender-shield.",
      },
      {
        question: "How do I enroll?",
        answer:
          "Call (608) 925-3576 or schedule a free in-home consultation. We don't take online enrollment — every member gets a person-to-person conversation about the plan and what their home needs.",
      },
      {
        question: "How is the plan billed?",
        answer:
          "Annual invoice — by check, credit card over the phone, or financing through Synchrony for monthly payments. No automated charges, no online billing portal, no auto-renew. Each renewal is invoiced and you can decline.",
      },
      {
        question: "Can I cancel?",
        answer:
          "Yes. You can cancel your renewal at any time. We don't auto-charge — every renewal is invoiced separately. If the plan isn't the right fit partway through your year, just let us know.",
      },
    ],
  },
];

/** Flat list of every FAQ on /faq, used by FAQSchema. */
export const allFaqs: FAQ[] = faqCategories.flatMap((c) => c.faqs);
