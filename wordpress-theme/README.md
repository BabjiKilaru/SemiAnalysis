# SemiAnalysis MVP WordPress Theme

LocalWP-compatible block theme for the SemiAnalysis coding challenge.

## Quick setup (LocalWP)

1. **Create site** in LocalWP
   - PHP 8.1+
   - WordPress 6.4+
   - Site name: `semianalysis-mvp` (or any name)

2. **Install theme**
   ```bash
   cp -r wordpress-theme/semianalysis-mvp \
     "~/Local Sites/<your-site>/app/public/wp-content/themes/"
   ```

3. **Activate theme**
   - WordPress Admin → Appearance → Themes → **SemiAnalysis MVP**
   - On activation, 6 products and a Models page are auto-seeded

4. **Configure homepage**
   - Settings → Reading → "A static page"
   - Homepage: create a page titled **Home** (uses `front-page.html` template automatically)
   - Or leave default — `front-page.html` applies when a static front page is set

5. **Verify pages**
   - `/` — Homepage (hero, products, articles, CTA)
   - `/models/` — Industry Models hub
   - `/products/chipbook/` — ChipBook sales page
   - `/products/accelerator-model/` — Accelerator Model page

## Custom blocks

| Block | Purpose |
|-------|---------|
| `sa/hero` | Homepage hero with dual CTAs |
| `sa/product-grid` | Grid of `sa_product` CPT entries |
| `sa/article-cards` | Substack article cards (external links) |
| `sa/cta-band` | Conversion footer strip |
| `sa/product-single` | Full product landing layout |

## Custom post type: `sa_product`

Meta fields (editable in block editor sidebar via REST):
- `sa_tagline` — product subtitle
- `sa_cta_label` / `sa_cta_email` — sales CTA
- `sa_featured` — show on homepage featured grid
- `sa_investors` / `sa_executives` — audience value props
- `sa_includes` — array of included features

## Re-seed content

If you need to re-seed (e.g. after testing):
```sql
DELETE FROM wp_options WHERE option_name = 'sa_mvp_seeded';
```
Then deactivate and reactivate the theme.

## Brand tokens

Defined in `theme.json` and `assets/css/theme.css`:
- SA Amber `#F7B041`
- SA Cobalt `#0B86D1`
- Outfit font (Google Fonts)
- Dark editorial background `#0A0A0A`
