# SemiAnalysis WordPress Engineer Coding Challenge MVP

Redesigned landing page and Models/Institutional Research sales funnel for [SemiAnalysis](https://semianalysis.com).

## Objective

Drive inbound interest for institutional products (ChipBook, Industry Models) while surfacing free Substack research as a credibility hook.

## Repository structure

```
SemiAnalysis/
├── prototype/           # Next.js design prototype
├── wordpress-theme/     # LocalWP-compatible block theme (final deliverable)
├── scripts/             # LocalWP setup helper
└── docs/                # Design decisions log
```

## Quick start — prototype

```bash
cd prototype
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Pages:** `/` · `/models` · `/products/chipbook` · `/about`

WordPress theme mirrors the same routes when activated in LocalWP.

## Live deployment

The Next.js prototype is deployed on Vercel and **auto-deploys on every push to `main`**:

**https://prototype-black-ten.vercel.app**

GitHub repo: [BabjiKilaru/SemiAnalysis](https://github.com/BabjiKilaru/SemiAnalysis) → Vercel project `prototype` (root directory: `prototype/`)

To redeploy manually:

```bash
cd prototype
npx vercel --prod
```

## Quick start — WordPress (LocalWP)

```bash
# One-command theme install (requires LocalWP site)
./scripts/setup-localwp.sh semianalysis-mvp
```

Or manually:
1. Create a LocalWP site (PHP 8.1+)
2. Copy `wordpress-theme/semianalysis-mvp` → `wp-content/themes/`
3. Activate **SemiAnalysis MVP** — auto-seeds 6 products, Home page, and Models page

See [wordpress-theme/README.md](wordpress-theme/README.md) for details.

## WordPress blocks

| Block | Purpose |
|-------|---------|
| `sa/hero` | Full-viewport hero + background visual |
| `sa/funnel-path` | How-it-works funnel |
| `sa/industry-models` | Homepage models showcase |
| `sa/chipbook-feature` | ChipBook section |
| `sa/model-catalog` | Models page + overlay |
| `sa/about` | About page |
| `sa/article-cards` | Live Substack RSS |
| `sa/value-props` | Why SemiAnalysis |
| `sa/cta-band` | Conversion band |
| `sa/product-single` | Product landing layout |

## Deliverables checklist

- [x] Next.js prototype with animations
- [x] WordPress block theme (prototype parity)
- [ ] Tested on LocalWP (activate theme and verify routes)
- [ ] Public GitHub repository
- [ ] Walkthrough video
- [ ] Daily Slack progress updates

## Brand

- **SA Amber** `#F7B041` · **SA Cobalt** `#0B86D1`
- **Outfit** typography · dark editorial backgrounds

See [docs/design-decisions.md](docs/design-decisions.md) for rationale.
