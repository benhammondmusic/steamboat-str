#!/usr/bin/env bash
# Pulls the listing photos from the iTrip CDN and writes web-sized JPEGs into
# public/images. Re-run it when the iTrip gallery changes.
#
# Static export disables next/image optimization, so whatever lands here is what
# ships. Gallery tiles are ~370 CSS px in a max-w-6xl 3-column grid, so 1000px
# covers 2x. The hero spans the viewport, hence 2000px.
#
# Requires ImageMagick (`brew install imagemagick`).

set -euo pipefail

CDN="https://s3.amazonaws.com/st1.itrip.net/upload/1600"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public/images"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# output-name <TAB> source-file-on-cdn <TAB> optional crop against the 1600px source
#
# Everything except the winter-* entries is a photo of this unit or of Wildhorse
# Meadows. The winter-* files are iTrip's generic Steamboat destination stock, so
# the site renders them in their own labelled block, never alongside the unit.
MANIFEST=$(
  cat <<'EOF'
hero	wild_horse_2.1693406594.jpg
living	living_room2_28.1693406761.jpg
kitchen	kitchen_105.1693406758.jpg
bedroom	master_bedroom2_18.1693406768.jpg
bunks	spare_bedroom_14.1693406774.jpg
bathroom	master_bathroom_23.1693406766.jpg
laundry	laundry_59.1693406759.jpg
deck	patio_36.1693406771.jpg
entry	img-3564_4.1689622155.jpg
exterior	img-3605_3.1689622317.jpg
neighborhood	drone_35.1693406576.jpg
gondola	wild_horse_2.1693406594.jpg	900x675+40+330
pool	pool_57.1693406592.jpg
hot-tubs	hot_tubs1_2.1693406585.jpg
pool-aerial	wild_horse1_2.1693406593.jpg
game-room	game_room_12.1693406581.jpg
winter-powder	steamboatrealtyphotosteamboat-8966.1537366233.jpg
winter-trees	steamboatrealtyphotosteamboat-8953.1537366118.jpg
winter-resort	steamboatrealtyphotosteamboat-9015.1537366752.jpg
EOF
)

mkdir -p "$OUT"

while IFS=$'\t' read -r name src crop; do
  [ -n "$name" ] || continue
  [ -f "$TMP/$src" ] || curl -sfL -A "Mozilla/5.0" -o "$TMP/$src" "$CDN/$src"

  if [ "$name" = "hero" ]; then
    extent="2000x1000"
    quality=72
  else
    extent="1000x750"
    quality=78
  fi

  crop_args=()
  [ -n "${crop:-}" ] && crop_args=(-crop "$crop" +repage)

  magick "$TMP/$src" \
    -auto-orient \
    ${crop_args[@]+"${crop_args[@]}"} \
    -resize "$extent^" -gravity center -extent "$extent" \
    -strip -interlace Plane -sampling-factor 4:2:0 -quality "$quality" \
    "$OUT/$name.jpg"

  printf '%-16s %s\n' "$name.jpg" "$(du -h "$OUT/$name.jpg" | cut -f1)"
done <<<"$MANIFEST"
