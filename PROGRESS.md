# SemiAnalysis MVP — 7-Day Progress Log

Coding challenge build log: **Day 1 → Day 7** (Jun 6–12, 2026).

**Days 1–5 → Next.js prototype** · **Days 5–7 → WordPress theme**


| Day | Date   | Track                 |
| --- | ------ | --------------------- |
| 1   | Jun 6  | Prototype             |
| 2   | Jun 7  | Prototype             |
| 3   | Jun 8  | Prototype             |
| 4   | Jun 9  | Prototype             |
| 5   | Jun 10 | Prototype → WordPress |
| 6   | Jun 11 | WordPress             |
| 7   | Jun 12 | WordPress             |


---

## Days 1–5 — Prototype (`/prototype`)

### Day 1 — Kickoff & foundation

- Read coding challenge requirements (landing page, models funnel, WordPress deliverable).
- Scaffolded **Next.js 15** app with App Router, Tailwind 4, Framer Motion.
- Set up brand tokens (SA Amber, Cobalt, dark theme, Outfit font).
- Created base layout: header, mobile nav, footer, sticky sales bar.
- Stubbed routes: `/`, `/models`, `/products/chipbook`, `/about`.

### Day 2 — Landing page & content

- Built homepage sections: hero, funnel path, industry models showcase, ChipBook feature, Why SemiAnalysis, CTA band.
- Added **data-driven content** in `src/lib/content.ts` and `src/lib/models.ts` (14 models).
- Integrated **Substack RSS** for article carousel (`src/lib/substack.ts`).
- Wired external links (newsletter, events, careers, login).

### Day 3 — Models hub & review

- Built **Industry Models page** with filterable catalog and topic marquee.
- Added reusable **model detail overlay** (`?model=slug`) with nutrition-facts spec panel.
- Consolidated model routing — one overlay template instead of per-model pages.
- Shared **Vercel prototype** for team review; drafted Slack feedback replies.

### Day 4 — Deploy & feedback fixes

- Pushed to **GitHub** and configured **Vercel auto-deploy** on `main` ([live prototype](https://prototype-black-ten.vercel.app)).
- Reworked **ChipBook page** background: darker scrim, scroll fade, normal watermark text.
- Moved model card icons **inline with title** to save vertical space.
- Pointed **Contact Sales** CTAs to `#` placeholder (pending on-site form).
- Added **Home** to nav; removed unused prototype files.

### Day 5 — Hero visual & handoff

**Prototype**

- Designed interactive **hero visual** (orbital rings, company icon, animated nodes).
- Iterated on size, brightness, position, and load animations from feedback.
- Fixed carousel card icons, models page layout, ChipBook hero tuning.

**WordPress**

- Started **block theme** (`wordpress-theme/semianalysis-mvp/`).
- Scaffolded FSE templates, `functions.php`, and initial `sa/`* block structure.
- Began porting homepage layout and brand CSS to `theme.css`.

---

## Days 5–7 — WordPress (`/wordpress-theme`)

### Day 6 — Theme build & homepage parity

- Finished core **11 custom Gutenberg blocks** with `render.php` server rendering.
- Built PHP data layer: `models-data.php` (14 models), `substack.php` (RSS cache), `site-config.php`.
- Ported homepage to LocalWP: hero, funnel, models carousel, ChipBook, articles, value props, CTA.
- Fixed **animations** in `theme.js` (scroll reveal, carousels, sticky bar, word rotator).
- Added `scripts/setup-localwp.sh` for one-command theme sync.
- Seeded CPT products, Home, Models, and About pages on theme activation.

### Day 7 — Pages, contact & docs

**Industry Models**

- Rebuilt `/models/`: hero, stats count-up, featured spotlight, full catalog, filters, overlay.

**ChipBook & About**

- ChipBook landing: fixed background, scroll fade, audience cards, tracker panels, CTA band.
- About page: narrative, abstraction stack, methodology, services sections.

**Contact & polish**

- Added `/contact/` page with inquiry form UI and sales sidebar.
- Wired **Contact Sales** links site-wide to `/contact/`.
- Hid sticky bar on contact page; Contact link in footer.
- Removed unused blocks/files; wrote **README.md** (root + `wordpress-theme/`).

