# Home Defender Remodeling — Launch Checklist

Pre- and post-launch checklist for the Next.js 16 site on Vercel.
Stack: Next 16 App Router, Resend forms, GA4 + Meta Pixel + Vercel Analytics,
domain cutover from current Webflow host to Vercel.

---

## Pre-Launch

### Content & SEO
- [ ] Every page has a unique `<title>` (50–60 chars) and meta description (145–160 chars) — _not yet audited per-page_
- [x] Single `<h1>` per page with primary keyword + city
- [x] LocalBusiness JSON-LD on every page
- [x] FAQ schema on city + neighborhood pages
- [x] Article schema (with author + dates) on blog posts
- [ ] All images have descriptive alt text — no empty alts, no `image1.jpg` — _8 empty `alt=""` still in src (Hero, blog, services, templates, Analytics noscript pixel)_
- [ ] OG + Twitter Card images set; preview at opengraph.xyz — _wired in `src/lib/seo.ts`; not yet previewed_
- [ ] No `[Customer Name]` placeholders remain in `content/testimonials.ts` — _4 in `content/testimonials.ts`, 16+ in `content/cities.ts`_
- [x] Brand string check: no `Home Defender` alone, no `Home Defender USA`, no `Remodelling`
- [x] Service-area string check: only `Madison, Dane County, and southern Wisconsin`
- [x] No `Enroll now` / `Buy now` / Stripe / payment UX anywhere on the site
- [ ] All 51 pages from `PLAN.md` accounted for; no `#` placeholder links — _not yet cross-checked against PLAN.md_

### Tech
- [x] `npm run build` clean — no TS or ESLint errors
- [x] `next.config.ts` redirects verified (`/testimonial`, `/service-archive/*`, roof-inspection)
- [x] `robots.ts` allows all; `sitemap.ts` includes all 51 routes
- [ ] `/sitemap.xml` and `/robots.txt` load on production — _verify after deploy_
- [ ] 404 page exists and is styled — _no `not-found.tsx` in `src/app/`_
- [ ] Lighthouse: ≥90 performance, 100 SEO, 100 accessibility on homepage + 1 service + 1 city page
- [ ] Mobile check on real device (iPhone Safari + Android Chrome)
- [x] Phone links use `tel:+16089253576`; mailto uses `info@homedefenderusa.com`

### Forms & Analytics
- [ ] `RESEND_API_KEY` set in Vercel production env — _can't verify from repo_
- [ ] Contact form submits end-to-end to `info@homedefenderusa.com` (test from preview)
- [x] Form spam protection in place (honeypot or rate limit) — _honeypot field in `/api/contact`_
- [x] GA4 `G-527SS464GW` firing on all pages (Realtime check) — _wired via `<Analytics />` in root layout; Realtime check still required post-deploy_
- [ ] Meta Pixel `1768103664011292` firing + Lead event on form submit — _PageView fires; **no `fbq('track','Lead')` on submit**_
- [ ] Vercel Analytics enabled — _`@vercel/analytics` not installed_

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
