# Home Defender Remodeling — Project Context

This file is read by Claude Code at the start of every session. Update it as
decisions are made.

See `PLAN.md` for the full migration plan and the live `reference-site/` mirror
for visual baseline + existing copy.

## Business

- Wisconsin roofing-led home improvement contractor.
- Service area: Madison and Dane County (NOT all of Wisconsin).
- Services: Roofing (lead), Gutter Protection, Windows.
- Phone: (608) 925-3576
- Email: info@homedefenderusa.com
- Domain: homedefenderusa.com
- Address: 3342 Ridgeway Ave, Madison, WI 53704

Canonical brand name: **"Home Defender Remodeling"**
- Never write "Home Defender" alone (was historically inconsistent — locked now)
- Never write "Home Defender USA" (legacy domain only, not the brand)
- Never write "Home Defender Remodelling" (British spelling — was a bug)

Single source of truth: `src/lib/constants.ts` (`BUSINESS`, `BRAND`).

## Brand

- Navy: `#1A2E3B` (primary)
- Green: `#3A7D5C` (accent)
- Typography: Arial / system sans-serif
- Tone: Plainspoken, no superlatives, honest. Concrete examples and numbers.
  Avoid "Wisconsin's #1 trusted..." style language. Avoid corporate marketing
  speak.

## The Defender Shield

Branded annual home protection plan, $295/year. Reference the program by full
name "The Defender Shield" on every page where natural — homepage, service
pages, blog posts.

**Lead-only positioning** (Neighborhood Strategy §3 — supersedes Brief).
Every CTA resolves to a phone call or contact form. There is **no online
enrollment, no Stripe, no payment processing** anywhere on the site.

- Primary Defender Shield CTA: `Schedule a Free Consultation`
- Secondary line: `Or call (608) 925-3576 to enroll over the phone`
- Final CTA heading: `Ready to lock in your Defender Shield?`

Replace anywhere on the site:
- `Enroll now` / `Sign up online` → `Schedule a free consultation` / `Call to enroll`
- `Buy now` / `Get started today` → `Get a free estimate` / `Call (608) 925-3576`
- `Subscribe` / `Auto-renew` → `Become a member` / `Annual plan`

Never frame the Defender Shield as a competitor to "Ridge Top's RoofCare+" by
name on public pages — use the framing "typical roofing maintenance plans."

## SEO Priorities (NON-NEGOTIABLE)

- Service area: ALWAYS `Madison, Dane County, and southern Wisconsin`. Never
  `Milwaukee to Madison, Green Bay to Kenosha` (was an old bug).
- Every page MUST have:
  - Unique `<title>` (50–60 chars), Open Graph, Twitter Card
  - Unique meta description (145–160 chars)
  - Single `<h1>` with primary keyword + city
  - LocalBusiness schema (JSON-LD)
- City and neighborhood pages MUST have FAQ schema.
- Blog posts MUST have Article schema with author + dates.
- All images need descriptive alt text — never empty, never `image1.jpg`.

## URL Architecture (51 pages — see PLAN.md for full table)

Two-layer roofing slug strategy:
- Broad (no city): `/services/roofing/{roof-replacement, roof-repair, roof-inspection, ...}`
- Geo-targeted: `/services/roofing/roof-replacement-{city}-wi` (11 cities), plus
  `roof-replacement-{neighborhood}-(wi|madison)` (6 neighborhoods).

Required 301 redirects (configured in `next.config.ts`):
- `/testimonial` → `/testimonials`
- `/service-archive/{gutter-protection,windows,roofing}` → `/service/$1`

## Content Conventions

- City pages target the format "Roof Replacement in [City], WI"
- Neighborhood pages target "Roof Replacement in [Neighborhood] (Madison, WI)"
- Page copy lives in `/content/`, not hardcoded in JSX
- Edit testimonials in `content/testimonials.ts`, never inline
- All real customer names start as `[Customer Name]` placeholders until verified
- Phone numbers: display `(608) 925-3576`, `tel:` links use `+16089253576`

## Key Files to Reference Before Writing Page Copy

- `docs/HomeDefender_Website_Content_Library.docx` (or `.txt`) — full copy for every new page
- `docs/HomeDefender_Website_Sitemap.docx` (or `.txt`) — complete URL architecture
- `docs/HomeDefender_Neighborhood_Strategy.docx` (or `.txt`) — 6 neighborhood pages + lead-only positioning
- `docs/HomeDefender_Claude_Code_Brief.docx` (or `.txt`) — original tech-stack rationale
- `reference-site/pages/` — current Webflow HTML (visual + copy reference; do not edit)
- `reference-site/assets/` — current Webflow imagery (Home-Defender-owned; bulk-migrate to `public/images/`)

## Tech Stack

- Next.js 16 (App Router) — landed on 16 because it's the latest stable at
  build time (Brief originally said Next 15)
- React 19, TypeScript strict mode
- Tailwind CSS v4 (with `@tailwindcss/postcss`)
- ESLint via `eslint-config-next`
- Forms: Resend (`RESEND_API_KEY` in `.env.local` and Vercel env vars)
- Hosting: Vercel
- Analytics: GA4 tag `G-527SS464GW` + Vercel Analytics
- Pixels: Meta Pixel `1768103664011292`

## Deploy

- Hosted on Vercel
- Auto-deploys from `main`; preview deploys on PRs
- Domain stays at current registrar; only DNS points to Vercel during cutover

## What NOT to do

- Do not write fake testimonials with full names
- Do not invent statistics or specific dollar amounts not in the docs
- Do not claim certifications (GAF, Owens Corning) — those are aspirational, not current
- Do not claim "25 years in business" — actual age unspecified
- Do not link to broken pages or `#` placeholders
- Do not add LinkedIn/Instagram social links (no active profiles yet)
- Do not introduce online payment, Stripe, or auto-renewing subscription UX
