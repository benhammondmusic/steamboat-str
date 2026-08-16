import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json above this repo makes Turbopack guess the wrong root.
  turbopack: { root: import.meta.dirname },
  images: {
    // The gallery placeholders are locally authored SVGs. Sandboxed so an SVG
    // dropped in later cannot execute script.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
