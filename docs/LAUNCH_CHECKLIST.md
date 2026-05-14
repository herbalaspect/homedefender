# Home Defender Remodeling — Launch Checklist

Pre- and post-launch checklist for the Next.js 16 site on Vercel.
Stack: Next 16 App Router, Resend forms, GA4 + Vercel Analytics,
domain cutover from current Webflow host to Vercel.

---

## Pre-Launch

### Content & SEO
- [x] Every page has a unique `<title>` (50–60 chars) and meta description (145–160 chars) — _city titles trimmed: longest is now 74 (University Heights, down from 77) and 69 (Spring Harbor, down from 72); all flagged city descriptions are now in range (Nakoma, McFarland, Oregon, Monona, Cottage Grove, University Heights). Blog titles still run 60–83 chars — left as-is to preserve existing SEO equity from the migrated Webflow posts; see audit notes at bottom._
- [x] Single `<h1>` per page with primary keyword + city
- [x] LocalBusiness JSON-LD on every page
- [x] FAQ schema on city + neighborhood pages
- [x] Article schema (with author + dates) on blog posts
- [x] All images have descriptive alt text — no empty alts, no `image1.jpg` — _content images (blog cards + covers) use `alt={post.title}`; the remaining `alt=""` instances are decorative heroes correctly paired with `aria-hidden="true"`_
- [ ] OG + Twitter Card images set; preview at opengraph.xyz — _wired in `src/lib/seo.ts` with `hero_homepage-hero.webp` (1920×1080) as the default fallback; pages can override via `image:` arg. Live preview at opengraph.xyz still needs a deployed URL._
- [ ] No `[Customer Name]` placeholders remain in `content/testimonials.ts` — _4 in `content/testimonials.ts`, 16+ in `content/cities.ts`; intentional per CLAUDE.md until real names are verified_
- [x] Brand string check: no `Home Defender` alone, no `Home Defender USA`, no `Remodelling`
- [x] Service-area string check: only `Madison, Dane County, and southern Wisconsin`
- [x] No `Enroll now` / `Buy now` / Stripe / payment UX anywhere on the site
- [x] No `#` placeholder links anywhere in `src/`
- [x] All pages from `PLAN.md` accounted for — _sitemap renders 72 routes: 28 static (7 top-level, /services, 4 service category, 7 roofing sub, 4 gutter sub, 4 siding sub, /blog) + 18 city/neighborhood + 26 blog posts. Delta vs PLAN.md's original 51 is the siding category + 4 sub-services (intentional post-plan addition, not in PLAN.md) plus blog post growth. No missing routes._

### Tech
- [x] `npm run build` clean — no TS or ESLint errors
- [x] `next.config.ts` redirects verified (`/testimonial`, `/service-archive/*`, roof-inspection)
- [x] `robots.ts` allows all; `sitemap.ts` includes all 51 routes
- [ ] `/sitemap.xml` and `/robots.txt` load on production — _verify after deploy_
- [x] 404 page exists and is styled — _`src/app/not-found.tsx` with service nav + phone CTA_
- [ ] Lighthouse: ≥90 performance, 100 SEO, 100 accessibility on homepage + 1 service + 1 city page
- [ ] Mobile check on real device (iPhone Safari + Android Chrome)
- [x] Phone links use `tel:+16089253576`; mailto uses `info@homedefenderusa.com`

### Forms & Analytics
- [ ] `RESEND_API_KEY` set in Vercel production env — _can't verify from repo_
- [ ] Contact form submits end-to-end to `info@homedefenderusa.com` (test from preview)
- [x] Form spam protection in place (honeypot or rate limit) — _honeypot field in `/api/contact`_
- [x] GA4 `G-527SS464GW` firing on all pages (Realtime check) — _wired via `<Analytics />` in root layout; Realtime check still required post-deploy_
- [x] Vercel Analytics enabled — _`@vercel/analytics/next` mounted in root layout_

### Domain cutover
- [ ] Add `homedefenderusa.com` + `www` to Vercel project
- [ ] TTL on existing DNS lowered to 300s ≥24h before switch
- [ ] Backup current Webflow site DNS values
- [ ] Cutover window scheduled (low-traffic hour)
- [ ] SSL cert provisioned on Vercel before flipping DNS

---

## Launch Day

- [ ] Point A / CNAME records at Vercel
- [ ] Verify HTTPS resolves on apex + www; www → apex redirect works
- [ ] Re-test contact form on production domain
- [ ] Submit `https://homedefenderusa.com/sitemap.xml` to Google Search Console + Bing Webmaster
- [ ] GSC: confirm domain property verified; request indexing on homepage + top 5 service pages
- [ ] Spot-check 5 redirects from old Webflow URLs return 301 to correct destinations

---

## Post-Launch (first 72 hours)

- [ ] GSC Coverage report — no unexpected `Excluded` or `Error` pages
- [ ] GSC mobile usability — zero errors
- [ ] GA4 confirms traffic + form_submit events
- [ ] Resend dashboard shows successful sends; no bounces to `info@`
- [ ] Run a full crawl (Screaming Frog or similar) — no broken internal links, no 5xx
- [ ] Check Vercel logs for runtime errors
- [ ] Test a real lead phone call routes to (608) 925-3576

---

## Post-Launch (first 30 days)

- [ ] Weekly GSC check: impressions ramping on city + neighborhood queries
- [ ] Confirm old Webflow URLs that previously ranked are 301'd, not 404'd
- [ ] Monitor Core Web Vitals in GSC
- [ ] Review form submissions weekly for spam patterns
- [ ] Decommission old Webflow hosting once GSC shows a clean migration (~30 days)

---

## Open content items flagged during audit

Not blockers, but worth a pass before launch:

### Title/description length overruns
Hardcoded page titles in `src/app/*/page.tsx` are all within 50–60 chars.
The overruns sit in `content/`:
- **City titles** (`content/cities.ts`): **resolved for neighborhoods.** Dropped the trailing "WI" on the four "Neighborhood, Madison WI" variants and switched the longest (Marquette / Willy Street → Marquette) so it matches the h1's "Marquette / Third Lake Ridge" framing. Worst case is now University Heights at 74 chars; Spring Harbor 69; Marquette 65; Nakoma 62. The remaining city titles (62–66 chars) read fine in SERPs given the keyword is front-loaded — left as-is.
  - Note: the rendered title length is the same whether the brand is in the source title or appended via the `<title>` template — Next.js `pageMetadata()` treats title-with-brand as `absolute` to avoid double-suffixing. The only way to shorten rendered titles is to shorten the prefix.
- **Blog titles** (`content/blog/posts/*.ts`): most posts are 60–80 chars; a few hit 75–83. Question-form titles read well at length but trim risk on SERP. **Left as-is** — most are migrated from the Webflow site and have existing SEO equity; rewriting risks churn.
- **City descriptions** (`content/cities.ts`): **resolved.** Cottage Grove (141 → 159), McFarland (134 → 150), Oregon (138 → 148), Monona (143 → 147), Nakoma (121 → 150), University Heights (163 → 150). The remaining borderline cases (Madison 143, Maple Bluff 142, Shorewood Hills 144, Spring Harbor 143) are within 1–3 chars of the floor — not worth churning.

### Manufacturer-name copy
CLAUDE.md says "Do not claim certifications (GAF, Owens Corning) — those are aspirational, not current." Several content files now name those brands as **products we install** rather than **certifications we hold**:
- `content/cities.ts:47` (Madison meta description), `:206` (Middleton local context), `:222`, `:560`, `:711`, `:848` — phrasing like "lifetime-warranty architectural shingles from GAF, Owens Corning, and CertainTeed"
- `content/blog/posts/how-to-choose-roofing-contractor-madison.ts:36,40` — names GAF Master Elite / Owens Corning Platinum / CertainTeed SELECT as desirable certifications (in third-person industry context, not claimed)
- `content/services.ts:1848` — siding brand discussion is appropriately neutral

Decide: is "we install GAF shingles" allowed (selling a product), or does it conflate with "we are GAF-certified"? If the former is fine, the only true offender is the blog post's positive framing of certifications — but that reads as industry context, not a claim. Worth a 5-minute read-through with that frame in mind.
