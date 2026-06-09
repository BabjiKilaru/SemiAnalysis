# Design Decisions Log

## Day 1

### Conversion strategy
- **Primary goal:** Funnel to ChipBook and Industry Models product pages with explicit CTAs.
- **Secondary hook:** "Latest Research" article cards link externally to Substack — no in-site article CMS.

### Visual direction
- Dark editorial canvas (`#0A0A0A` background) with SA Amber accents used sparingly on CTAs and highlights.
- Outfit for all web typography per brand guide; Grift deferred unless font files are provided.
- Inspiration: Anthropic (institutional hero), Epoch.ai (research content UX), Cluely (funnel structure adapted to research tone).

### Technical approach
- **Phase A:** Next.js prototype for fast layout iteration and Slack previews.
- **Phase B:** Custom WordPress block theme with `theme.json` tokens mirrored from prototype CSS variables.
- Custom Gutenberg blocks over page builders to demonstrate engineering skill.

### Scope boundaries
- 3 deep product pages: ChipBook, AI Accelerator Model, AI Cloud TCO Model.
- Remaining models appear as cards on Models hub only.
- No email capture, paywall, or Substack API integration in MVP.
