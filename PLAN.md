# Home Defender — Webflow → Next.js Migration Plan

## Context

`homedefenderusa.com` is currently on Webflow (41 live URLs as of Apr 2026). The
four strategy documents in this repo (Brief, Sitemap, Content Library,
Neighborhood Strategy) collectively prescribe a migration to **Next.js 15 +
Tailwind**, with the site growing from 19 substantively-distinct pages to **~51
pages** once new city, neighborhood, blog, pricing, and Defender Shield pages
are built.

The user asked me to (a) gather context from the repo + live site, (b) pull the
existing site files into the repo, and (c) build a concrete plan from the
strategy docs. Steps (a) and (b) are complete. This file is step (c).

## Current state of the repo

```
homedefender/
├── README.md
├── docs/                                          ← all 4 strategy docs (.docx + .txt)
│   ├── HomeDefender_Claude_Code_Brief.docx | .txt
│   ├── HomeDefender_Neighborhood_Strategy.docx | .txt
│   ├── HomeDefender_Website_Content_Library.docx | .txt
│   └── HomeDefender_Website_Sitemap.docx | .txt
└── reference-site/                                ← mirrored Webflow site (read-only reference)
    ├── sitemap.xml                                ← 41 live URLs
    ├── robots.txt
    ├── pages/                                     ← 41 HTML files (~2.9 MB)
    │   ├── index.html, about.html, contact.html, faq.html, services.html, testimonial.html, blog.html
    │   ├── service-archive/{gutter-protection,roofing,windows}.html   (legacy — must 301)
    │   ├── services/gutter/{gutter-installation,gutter-replacement,gutter-cleaning,gutter-repair}.html
    │   ├── services/roofing/{roof-replacement,roof-repair,emergency-roof-repair,
    │   │                     asphalt-shingle-roofing,metal-roofing,roof-inspection}.html
    │   └── blog/                                  ← 21 existing posts (all gutter-focused)
    └── assets/                                    ← 469 CDN files (~73 MB): 254 images, 90 SVGs,
                                                     10 JS, 2 CSS, 1 font (Webflow default font)
```

`reference-site/` is the canonical source of truth for visual styling, copy
that's already on the live site, and existing structured data — read it, don't
modify it.

## Strategic constraints (locked decisions from the docs)

These supersede any conflicting instruction elsewhere:

1. **Lead-only positioning, site-wide** (Neighborhood Strategy §3). No Stripe,
   no online enrollment, no payment processing — anywhere, ever. Every CTA
   resolves to phone (`(608) 925-3576` / `tel:+16089253576`) or contact form.
   The Brief's `"Enroll for $295/year"` Defender Shield CTA is **superseded** by
   `"Schedule a Free Consultation"` + secondary line `"Or call (608) 925-3576 to
   enroll over the phone"`.
2. **Brand name lock**: `Home Defender Remodeling` only — never `Home Defender`,
   `Home Defender USA`, or `Home Defender Remodelling` (British spelling bug).
3. **Service area lock**: `Madison, Dane County, and southern Wisconsin` —
   never `Milwaukee to Madison, Green Bay to Kenosha`.
4. **Six neighborhoods, not 120** (Neighborhood Strategy §1). Substantive 1,400–
   1,800-word pages for Maple Bluff, Shorewood Hills, Spring Harbor, University
   Heights, Marquette / Third Lake Ridge, Nakoma — not thin programmatic SEO.
5. **No fake testimonials, no aspirational claims**: customer names stay as
   `[Customer Name]` placeholders until verified; no GAF/Owens Corning
   certification claims; no `"25 years in business"`.

## Tech stack (per Brief)

| Layer       | Choice                          | Note                                                      |
|-------------|---------------------------------|-----------------------------------------------------------|
| Framework   | Next.js 15 (App Router)         | Static generation; built-in image opt; per-page metadata. |
| Styling     | Tailwind CSS                    | Brand colors: navy `#1A2E3B`, green `#3A7D5C`.            |
| Content     | TypeScript data files + MDX     | `content/cities.ts`, `content/blog/*.mdx`. No CMS.        |
| Forms       | Formspree **or** Resend         | Decision needed — see Open Questions.                     |
| Hosting     | Vercel                          | Free tier covers it; auto-deploys on `main`.              |
| Analytics   | GA4 + Vercel Analytics          | GA tag `G-527SS464GW` already in use (preserve).          |
| Pixels      | Meta Pixel `1768103664011292`   | Already in use on Webflow (preserve).                     |
| Domain      | Keep registrar; cut DNS to Vercel | Don't transfer the registrar during migration.          |

## Final URL architecture (51 pages)

**5 top-level**: `/`, `/about`, `/services`, `/contact`, `/defender-shield` *(NEW)*
**3 service category**: `/service/{roofing,gutter-protection,windows}` *(canonical — `/service-archive/*` 301s here)*
**7 roofing sub-services**: existing 5 + `storm-damage-roof-repair-madison-wi`, `roof-inspection-madison-wi` *(NEW; note: live site already has `/services/roofing/roof-inspection` — keep that slug or rename + 301)*
**4 gutter sub-services**: existing 4 (edit only)
**11 city pages** *(NEW)*: `/services/roofing/roof-replacement-{madison,sun-prairie,verona,fitchburg,middleton,waunakee,cottage-grove,mcfarland,stoughton,oregon,deforest,monona}-wi`
**6 neighborhood pages** *(NEW)*: `/services/roofing/roof-replacement-{maple-bluff-wi,shorewood-hills-wi,spring-harbor-madison-wi,university-heights-madison-wi,marquette-madison-wi,nakoma-madison-wi}`
**1 commercial-intent**: `/how-much-does-roof-replacement-cost-madison` *(NEW)*
**3 support**: `/faq`, `/testimonials` *(rename from `/testimonial` + 301)*, `/contact`
**1 blog index** + **5 new MDX posts** + **21 migrated existing gutter posts** = 26 posts total
**1 Defender Shield**: `/defender-shield` *(NEW)*

## Required 301 redirects (configured in `next.config.ts`)

| From                                           | To                                  |
|------------------------------------------------|-------------------------------------|
| `/testimonial`                                 | `/testimonials`                     |
| `/service-archive/gutter-protection`           | `/service/gutter-protection`        |
| `/service-archive/windows`                     | `/service/windows`                  |
| `/service-archive/roofing`                     | `/service/roofing`                  |
| any deprecated blog slug (TBD — see open Qs)   | nearest topical service page        |

## Recommended target repo layout

(Kept identical to the Brief so subsequent prompts don't drift.)

```
src/
├── app/
│   ├── layout.tsx                                ← global nav/footer, GA, Meta Pixel, schema
│   ├── page.tsx                                  ← homepage
│   ├── (static pages: about, contact, faq, testimonials, defender-shield, how-much-does-...)
│   ├── services/
│   │   ├── page.tsx
│   │   ├── {roofing,gutter-protection,windows}/page.tsx
│   │   └── roofing/
│   │       ├── {existing 5 sub-services}/page.tsx
│   │       ├── storm-damage-roof-repair-madison-wi/page.tsx
│   │       ├── roof-inspection-madison-wi/page.tsx
│   │       └── roof-replacement-[city]/page.tsx ← dynamic; handles all 11 cities + 6 neighborhoods
│   ├── blog/{page.tsx,[slug]/page.tsx}
│   ├── sitemap.ts
│   ├── robots.ts
│   └── api/contact/route.ts
├── components/
│   ├── layout/   { Nav, Footer, Container }
│   ├── sections/ { Hero, ServiceList, FAQ, Testimonials, CTA, DefenderShieldUpsell }
│   ├── seo/      { LocalBusinessSchema, FAQSchema, ArticleSchema }
│   └── templates/{ CityPageTemplate, NeighborhoodPageTemplate }
├── lib/{ constants.ts, seo.ts, utils.ts }
└── styles/globals.css

content/
├── cities.ts          ← extended schema with isNeighborhood / parentCity / isHistoricDistrict
│                        / isLakeshore / separateMunicipality / architecturalContext
│                        / permittingSection / neighborhoodRoofingConsiderations
├── services.ts
├── faqs.ts
├── testimonials.ts
└── blog/*.mdx
```

## Build sequence (12 prompts)

The Brief defines Prompts 0–10; the Neighborhood Strategy inserts Prompt 4.5
(neighborhoods after cities, before Defender Shield). Each prompt should be
committed and reviewed before the next runs.

| #    | Goal                                                                                  | Strategy doc reference |
|------|---------------------------------------------------------------------------------------|------------------------|
| 0    | `create-next-app` + folder scaffolding + `CLAUDE.md` + `src/lib/constants.ts`         | Brief §"Repository Structure", §"CLAUDE.md" |
| 1    | `layout.tsx` + `Nav` + `Footer` + `Container`. Drop dead Linkedin/IG `#` links.       | Brief Prompt 1 |
| 2    | `LocalBusinessSchema`, `FAQSchema`, `ArticleSchema`, `lib/seo.ts`                     | Brief Prompt 2 |
| 3    | Homepage — Hero / Services / Why / Process / Testimonials / Defender Shield Upsell / Service Area / CTA | Content Library §Page-by-Page (referenced) |
| 4    | `content/cities.ts` (11 cities) + `roof-replacement-[city]/page.tsx` dynamic route + `CityPageTemplate` | Content Library §2 master template, §3 per-city copy |
| 4.5  | Extend `cities.ts` with 6 neighborhoods + `NeighborhoodPageTemplate` + Madison page hyperlocal block | Neighborhood Strategy §4, §6 |
| 5    | `/defender-shield` — hero, 8 benefits, comparison table (no Ridge Top by name), 6 FAQs, lead-only CTA | Content Library §1 + Neighborhood Strategy §3 CTA overrides |
| 6    | Service-category + remaining sub-service pages. **Critical**: strip gutter content from `/service/roofing` (live bug). | Content Library §4 (storm + inspection); Page-by-Page Rewrites |
| 7    | `/how-much-does-roof-replacement-cost-madison`, `/about`, `/contact` (form → `/api/contact`), `/faq`, `/testimonials` | Content Library §4.3; Brief Prompt 7 |
| 8    | Blog: index + `[slug]` MDX route + `ArticleSchema` + 5 new MDX posts + migration of 21 existing gutter posts (slug-preserving, parsed from `reference-site/pages/blog/*.html`) | Content Library §5 + `reference-site/pages/blog/` |
| 9    | `sitemap.ts`, `robots.ts`, redirects in `next.config.ts`, single-H1/title/meta audit  | Brief Prompt 9; Sitemap §"Required 301 Redirects" |
| 10   | Lighthouse pass: 90+ perf, 100 SEO, 95+ a11y; `next/image` + `next/font` everywhere   | Brief Prompt 10 |

## Critical files to modify (when execution begins)

These don't exist yet; they are the files Prompts 0–10 will create. Listed for
the executor's planning only:

- `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`
- `CLAUDE.md` (paste from Brief §"The CLAUDE.md File")
- `src/lib/constants.ts` (single source of NAP — full template in Brief)
- `content/cities.ts` (extended schema from Neighborhood Strategy §6)
- `src/app/services/roofing/roof-replacement-[city]/page.tsx` (the highest-leverage file — generates 17 pages from one template)
- `src/components/templates/{CityPageTemplate,NeighborhoodPageTemplate}.tsx`

## What to reuse from `reference-site/`

- **Visual reference**: existing Webflow design is the visual baseline. Use the
  mirrored HTML to extract layout proportions, hero treatments, and color usage.
- **Imagery**: 254 images + 90 SVGs already pulled into
  `reference-site/assets/cdn.prod.website-files.com/`. Re-use those (rename to
  human-readable filenames under `public/images/` during Prompt 3) rather than
  re-shooting. Keep the favicon, logo SVGs, and process icons.
- **Existing FAQ content** in `reference-site/pages/faq.html` — many answers are
  reusable verbatim.
- **Existing testimonial copy** in `reference-site/pages/testimonial.html` —
  flag any with full real names as `[Customer Name]` placeholders per the
  CLAUDE.md rule.
- **GA tag (`G-527SS464GW`) and Meta Pixel (`1768103664011292`)** — pulled from
  `reference-site/pages/index.html` head; preserve in `app/layout.tsx`.

## Resolved decisions

1. **Existing 21 gutter blog posts** → **Migrate all to MDX** in `content/blog/`.
   Preserves SEO equity and existing inbound links. Each post gets
   `ArticleSchema`, original publish date pulled from Webflow source HTML, and
   internal links retargeted to the new gutter sub-service pages and to the
   relevant new posts from Content Library §5. Original Webflow URLs map 1:1
   (no redirects needed) since slugs stay the same.
2. **Forms backend** → **Resend** ($20/mo). Email automation needed for
   Defender Shield follow-up sequences. `RESEND_API_KEY` goes in `.env.local`
   and Vercel env vars; never committed.
3. **Roofing service slug strategy** → **Keep both layers**:
   - Broad service-level pages (no city qualifier):
     `/services/roofing/roof-inspection`, `/services/roofing/roof-repair`,
     `/services/roofing/roof-replacement`, `/services/roofing/storm-damage-roof-repair`, etc.
   - Geo-targeted landing pages (city-suffixed) for SEO capture:
     `/services/roofing/roof-replacement-{city}-wi`,
     `/services/roofing/roof-inspection-madison-wi`,
     `/services/roofing/storm-damage-roof-repair-madison-wi`.
   - The two layers cross-link: every broad page links down to the geo pages
     (`Also serving these communities`), every geo page links up to the broad
     page in the breadcrumb.
   - Existing live `/services/roofing/roof-inspection` is preserved (no
     rename, no 301).
4. **Business address** → `3342 Ridgeway Ave, Madison, WI 53704`. Goes into
   `src/lib/constants.ts` `BUSINESS.address` as `streetAddress: "3342 Ridgeway
   Ave"`, `addressLocality: "Madison"`, `addressRegion: "WI"`,
   `postalCode: "53704"`.
5. **Image rights** → Home Defender-owned. **Bulk-migrate** all 254 images +
   90 SVGs from `reference-site/assets/cdn.prod.website-files.com/` into
   `public/images/`. Rename Webflow's hash filenames to human-readable slugs
   during the migration (e.g.
   `67692970a14916d41b9e7185_home-overlay.png` → `public/images/home/hero-overlay.png`).
   No licensing review required.

## Verification

After each prompt completes (and especially before DNS cutover):

- `npm run build` → zero TS / lint errors.
- Lighthouse on `/`, `/services/roofing/roof-replacement-madison-wi`,
  `/defender-shield`, top blog post → Performance ≥ 90, SEO 100, A11y ≥ 95.
- Google Rich Results Test on every page type → schema valid.
- Manually click every nav link — no `#` placeholders, no broken anchors.
- `httpstatus.io` on every redirect in the Sitemap §"Required 301 Redirects"
  table → all return 301 to the right destination.
- Submit `/sitemap.xml` to Search Console; URL-Inspect every priority page.
- 30-day Search Console daily check post-cutover (404s, crawl errors, ranking
  volatility). Cancel Webflow only after 30 clean days.

## Immediate next action (once user approves this plan)

Commit the work already on disk to `claude/migrate-website-files-06UuE`:
- `docs/` (4 docx + 4 txt extracts)
- `reference-site/pages/` (41 HTML files)
- `reference-site/assets/` (469 CDN assets)
- `reference-site/{sitemap.xml,robots.txt}`
- this plan

Then proceed to the open-questions resolution → Prompt 0.
