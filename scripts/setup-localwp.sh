#!/usr/bin/env bash
# Copy SemiAnalysis MVP theme into a LocalWP site.
# Usage: ./scripts/setup-localwp.sh "My Site Name"

set -euo pipefail

SITE_NAME="${1:-semianalysis-mvp}"
THEME_SRC="$(cd "$(dirname "$0")/../wordpress-theme/semianalysis-mvp" && pwd)"
LOCAL_SITES="$HOME/Local Sites"
TARGET=""

if [[ -d "$LOCAL_SITES" ]]; then
  for dir in "$LOCAL_SITES"/*; do
    if [[ -d "$dir/app/public/wp-content/themes" ]]; then
      if [[ "$(basename "$dir")" == *"$SITE_NAME"* ]] || [[ "$SITE_NAME" == "auto" ]]; then
        TARGET="$dir/app/public/wp-content/themes/semianalysis-mvp"
        break
      fi
    fi
  done
fi

if [[ -z "$TARGET" ]]; then
  echo "Could not find LocalWP site matching '$SITE_NAME'."
  echo "Available sites:"
  ls -1 "$LOCAL_SITES" 2>/dev/null || echo "  (none found in ~/Local Sites)"
  echo ""
  echo "Manual copy:"
  echo "  cp -r $THEME_SRC \"~/Local Sites/<site>/app/public/wp-content/themes/\""
  exit 1
fi

rm -rf "$TARGET"
cp -r "$THEME_SRC" "$TARGET"

echo "Theme installed to: $TARGET"
echo ""
echo "Next steps:"
echo "  1. Open LocalWP and start the site"
echo "  2. WordPress Admin → Appearance → Themes → Activate 'SemiAnalysis MVP'"
echo "  3. Visit the site — Home and Models pages are auto-seeded on activation"
