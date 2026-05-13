# Home Defender Remodeling — Launch Checklist

Pre- and post-launch checklist for the Next.js 16 site on Vercel.
Stack: Next 16 App Router, Resend forms, GA4 + Meta Pixel + Vercel Analytics,
domain cutover from current Webflow host to Vercel.

---

## Pre-Launch

### Content & SEO
- [ ] Every page has a unique `<title>` (50–60 chars) and meta description (145–160 chars)
- [ ] Single `<h1>` per page with primary keyword + city
- [ ] LocalBusiness JSON-LD on every page
- [ ] FAQ schema on city + neighborhood pages
- [ ] Article schema (with author + dates) on blog posts
- [ ] All images have descriptive alt text — no empty alts, no `image1.jpg`
- [ ] OG + Twitter Card images set; preview at opengraph.xyz
- [ ] No `[Customer Name]` placeholders remain in `content/testimonials.ts`
- [ ] Brand string check: no `Home Defender` alone, no `Home Defender USA`, no `Remodelling`
- [ ] Service-area string check: only `Madison, Dane County, and southern Wisconsin`
- [ ] No `Enroll now` / `Buy now` / Stripe / payment UX anywhere on the site
- [ ] All 51 pages from `PLAN.md` accounted for; no `#` placeholder links

### Tech
- [ ] `npm run build` clean — no TS or ESLint errors
- [ ] `next.config.ts` redirects verified (`/testimonial`, `/service-archive/*`, roof-inspection)
- [ ] `robots.ts` allows all; `sitemap.ts` includes all 51 routes
- [ ] `/sitemap.xml` and `/robots.txt` load on production
- [ ] 404 page exists and is styled
- [ ] Lighthouse: ≥90 performance, 100 SEO, 100 accessibility on homepage + 1 service + 1 city page
- [ ] Mobile check on real device (iPhone Safari + Android Chrome)
- [ ] Phone links use `tel:+16089253576`; mailto uses `info@homedefenderusa.com`

### Forms & Analytics
- [ ] `RESEND_API_KEY` set in Vercel production env
- [ ] Contact form submits end-to-end to `info@homedefenderusa.com` (test from preview)
- [ ] Form spam protection in place (honeypot or rate limit)
- [ ] GA4 `G-527SS464GW` firing on all pages (Realtime check)
- [ ] Meta Pixel `1768103664011292` firing + Lead event on form submit
- [ ] Vercel Analytics enabled

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
