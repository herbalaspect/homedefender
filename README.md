# homedefender

Next.js 16 + Tailwind v4 source for **homedefenderusa.com**. Migrating from
Webflow per `PLAN.md`.

## Quickstart

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
```

## Repo layout

| Path              | Purpose                                                                  |
|-------------------|--------------------------------------------------------------------------|
| `CLAUDE.md`       | Project context loaded by Claude Code at session start                    |
| `PLAN.md`         | Migration plan: 51-page architecture + 12-step build sequence            |
| `docs/`           | 4 strategy docs (Brief, Sitemap, Content Library, Neighborhood Strategy) |
| `reference-site/` | Read-only mirror of the live Webflow site (visual + copy reference)      |
| `src/app/`        | Next.js App Router pages                                                 |
| `src/components/` | UI / layout / sections / seo / templates                                 |
| `src/lib/`        | `constants.ts` (NAP, brand), `utils.ts`                                  |
| `content/`        | TypeScript data files (`cities.ts`, `services.ts`, `testimonials.ts`, ...)|
| `content/blog/`   | MDX blog posts                                                           |
| `public/images/`  | Production imagery (bulk-migrated from `reference-site/assets/`)         |

## Environment variables

| Var                | Used by              | Notes                              |
|--------------------|----------------------|------------------------------------|
| `RESEND_API_KEY`   | `/api/contact`       | Set in `.env.local` and Vercel     |
| `RESEND_TO_EMAIL`  | `/api/contact`       | Where contact-form submissions go  |

Never commit `.env*.local`.

## Conventions

Read `CLAUDE.md` before editing. The non-negotiables:
- Brand name is exactly `Home Defender Remodeling`
- Lead-only — never add Stripe / online enrollment / payment UI
- Page copy lives in `content/`, not in JSX
- All testimonial customer names default to `[Customer Name]` until verified
