# reference-site/

Read-only mirror of the live homedefenderusa.com (Webflow) site, captured 2026-04-27
to ground the Next.js migration. Do not edit — see PLAN.md at the repo root.

## Contents

- `sitemap.xml` — pulled from https://www.homedefenderusa.com/sitemap.xml
- `robots.txt`  — pulled from https://www.homedefenderusa.com/robots.txt
- `pages/` — 41 HTML files mirroring the live URL structure
- `assets/` — 469 CDN files (images, SVGs, CSS, JS, fonts) from
  `cdn.prod.website-files.com`, `cdnjs`, `jsdelivr`, `googleapis`, etc.

## What to use it for

- Visual reference (layout, hero treatments, color usage)
- Source of existing copy (FAQ, testimonials, service descriptions)
- Source of imagery (Home-Defender-owned per project decision) — bulk-migrate
  to `public/images/` during Next.js build, with human-readable filenames
- Confirming GA tag (G-527SS464GW) and Meta Pixel (1768103664011292) IDs
