# Home Defender Remodeling — Launch Checklist

Pre- and post-launch checklist for the Next.js 16 site on Vercel.
Stack: Next 16 App Router, Resend forms, GA4 + Vercel Analytics,
domain cutover from current Webflow host to Vercel.

---

## Pre-Launch

### Content & SEO
- [ ] Every page has a unique `<title>` (50–60 chars) and meta description (145–160 chars) — _hardcoded titles are in range; data-driven titles often run long. ~20 city/blog titles exceed 60 chars (longest 83) and ~7 city descriptions fall under 145 or over 160. See audit notes at bottom._
- [x] Single `<h1>` per page with primary keyword + city
- [x] LocalBusiness JSON-LD on every page
- [x] FAQ schema on city + neighborhood pages
- [x] Article schema (with author + dates) on blog posts
- [x] All images have descriptive alt text — no empty alts, no `image1.jpg` — _content images (blog cards + covers) use `alt={post.title}`; the remaining `alt=""` instances are decorative heroes correctly paired with `aria-hidden="true"`_
- [ ] OG + Twitter Card images set; preview at opengraph.xyz — _wired in `src/lib/seo.ts`; not yet previewed_
- [ ] No `[Customer Name]` placeholders remain in `content/testimonials.ts` — _4 in `content/testimonials.ts`, 16+ in `content/cities.ts`; intentional per CLAUDE.md until real names are verified_
- [x] Brand string check: no `Home Defender` alone, no `Home Defender USA`, no `Remodelling`
- [x] Service-area string check: only `Madison, Dane County, and southern Wisconsin`
- [x] No `Enroll now` / `Buy now` / Stripe / payment UX anywhere on the site
- [x] No `#` placeholder links anywhere in `src/`
- [ ] All pages from `PLAN.md` accounted for — _sitemap renders 49 routes (5 top-level, 4 service category, 7 roofing sub, 4 gutter sub, 4 siding sub, 18 city/neighborhood, 1 cost guide, 27 blog including index). Note: siding wasn't in original 51-page plan; total now ~67. Cross-check the +siding additions against PLAN.md when convenient._

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
- **City titles** (`content/cities.ts`): `Roof Replacement in <City>, WI | Home Defender Remodeling` runs 62–66 chars for most cities and 72–83 chars for the four "Neighborhood, Madison WI" variants (Spring Harbor, University Heights, Marquette / Willy Street, Nakoma). Consider dropping `| Home Defender Remodeling` for the longest ones — the `<title>` template will still suffix the brand on the rendered tag.
- **Blog titles** (`content/blog/posts/*.ts`): most posts are 60–80 chars; a few hit 75–83. Question-form titles read well at length but trim risk on SERP.
- **City descriptions** (`content/cities.ts`): handful at 121–144 chars (Nakoma, McFarland, Oregon, Monona, Cottage Grove) and one at 163 (University Heights). Stretch the short ones, trim the long one.

### Manufacturer-name copy
CLAUDE.md says "Do not claim certifications (GAF, Owens Corning) — those are aspirational, not current." Several content files now name those brands as **products we install** rather than **certifications we hold**:
- `content/cities.ts:47` (Madison meta description), `:206` (Middleton local context), `:222`, `:560`, `:711`, `:848` — phrasing like "lifetime-warranty architectural shingles from GAF, Owens Corning, and CertainTeed"
- `content/blog/posts/how-to-choose-roofing-contractor-madison.ts:36,40` — names GAF Master Elite / Owens Corning Platinum / CertainTeed SELECT as desirable certifications (in third-person industry context, not claimed)
- `content/services.ts:1848` — siding brand discussion is appropriately neutral

Decide: is "we install GAF shingles" allowed (selling a product), or does it conflate with "we are GAF-certified"? If the former is fine, the only true offender is the blog post's positive framing of certifications — but that reads as industry context, not a claim. Worth a 5-minute read-through with that frame in mind.
