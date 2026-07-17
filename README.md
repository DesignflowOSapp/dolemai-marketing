# Dolemai Marketing Website (dolemai.com)

Public-facing marketing site for **Dolemai** — construction project intelligence and
reporting for UK construction consultants. Separate from the app at `app.dolemai.com`.

- **Stack:** Next.js 14 (app router), TypeScript, inline React styles (no Tailwind).
- **Rendering:** pure static export (`output: "export"`) — SSG, no server, no database, no auth.
- **Deploy target:** Cloudflare Pages (new project `dolemai-marketing`).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build    # outputs static site to ./out
```

## Deploy to Cloudflare Pages

Create a **new** Cloudflare Pages project (`dolemai-marketing`) connected to this repo:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Framework preset:** Next.js (Static HTML Export)

`public/_redirects` is copied into `out/` and handles the edge redirects:
`/login` and `/signup` → `app.dolemai.com`, and `/demo` → `/demo/overview`.

### DNS (confirm before go-live)
`dolemai.com` currently points to Cloudflare with no site served. Point the apex
(and `www`) at the new Pages project. `app.dolemai.com` must remain on the app.

## Pages

Marketing: `/` · `/how-it-works` · `/pricing` · `/privacy` · `/terms` · `/cookies`
· `/security` · `/login` (→ app) · `/signup` (→ app) · custom `404`.

Demo (read-only, hardcoded "Riverside Works" data, no backend):
`/demo` → `/demo/overview` · `/demo/registers` · `/demo/reports`.

## Structure

```
app/
  layout.tsx              root: fonts, global CSS, cookie banner
  (marketing)/            marketing pages (shared Nav + Footer)
  demo/                   demo experience (own banner + simplified nav)
  not-found.tsx           404
components/                Nav, Footer, CookieBanner, AppMockup, ScrollStory, FAQ, ...
lib/theme.ts               design tokens (colours, buttons)
lib/seo.ts                 per-page metadata helper (title, canonical, OG, robots)
lib/demoData.ts            hardcoded demo project data
public/_redirects          Cloudflare Pages redirects
public/og.png              1200x630 social share image
```

## Notes / to confirm before publishing

- **Legal pages** (`/privacy`, `/terms`, `/security`) contain `SOLICITOR REVIEW REQUIRED`
  markers on sections needing qualified review. Data-storage region is a placeholder
  ("EU-based infrastructure" / "EU region") — confirm the actual region.
- "Lapunne Limited" appears only in the footer line and legal pages, as specified.
