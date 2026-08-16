import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = resolve(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

const palettes = [
  ["#23503d", "#3f7a5e"],
  ["#1b2429", "#3a4d57"],
  ["#b47c1c", "#e0a63c"],
  ["#2f4858", "#5b7a8c"],
];

const images = [
  { name: "hero", label: "Hero photo", width: 1600, height: 900 },
  { name: "exterior", label: "Exterior in winter", width: 1200, height: 900 },
  { name: "living", label: "Living room", width: 1200, height: 900 },
  { name: "kitchen", label: "Kitchen and dining", width: 1200, height: 900 },
  { name: "bedroom", label: "Primary bedroom", width: 1200, height: 900 },
  { name: "bunks", label: "Second bedroom bunks", width: 1200, height: 900 },
  { name: "deck", label: "Private deck and view", width: 1200, height: 900 },
  { name: "pool", label: "Pool and hot tubs", width: 1200, height: 900 },
  { name: "gondola", label: "Wildhorse gondola", width: 1200, height: 900 },
];

function ridge(width, height) {
  const points = [
    [0, height * 0.78],
    [width * 0.16, height * 0.44],
    [width * 0.28, height * 0.58],
    [width * 0.44, height * 0.26],
    [width * 0.6, height * 0.55],
    [width * 0.74, height * 0.36],
    [width * 0.88, height * 0.6],
    [width, height * 0.48],
    [width, height],
    [0, height],
  ];
  return points.map(([x, y]) => x.toFixed(1) + "," + y.toFixed(1)).join(" ");
}

function svg({ label, width, height }, index) {
  const [from, to] = palettes[index % palettes.length];
  const fontSize = Math.round(width / 26);
  const subSize = Math.round(fontSize * 0.5);
  const subY = height / 2 + fontSize * 1.4;
  return [
    '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + " " + height + '" role="img" aria-label="' + label + ' placeholder">',
    '  <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="' + to + '"/><stop offset="100%" stop-color="' + from + '"/></linearGradient></defs>',
    '  <rect width="' + width + '" height="' + height + '" fill="url(#sky)"/>',
    '  <polygon points="' + ridge(width, height) + '" fill="#ffffff" opacity="0.14"/>',
    '  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="system-ui, sans-serif" font-size="' + fontSize + '" font-weight="600" fill="#ffffff" opacity="0.92">' + label + "</text>",
    '  <text x="50%" y="' + subY + '" text-anchor="middle" dominant-baseline="middle" font-family="system-ui, sans-serif" font-size="' + subSize + '" fill="#ffffff" opacity="0.6">replace with a real photo</text>',
    "</svg>",
    "",
  ].join("\n");
}

await mkdir(outDir, { recursive: true });

await Promise.all(
  images.map((image, index) =>
    writeFile(resolve(outDir, "placeholder-" + image.name + ".svg"), svg(image, index), "utf8"),
  ),
);

console.log("Wrote " + images.length + " placeholders to public/images");
