import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every route here prerenders, and Netlify's Next runtime v5 does not yet
  // support Next 16 — its server handler 500s on all routes. Exporting static
  // HTML skips the runtime entirely.
  output: "export",
  // A stray package-lock.json above this repo makes Turbopack guess the wrong root.
  turbopack: { root: import.meta.dirname },
  images: {
    // Static export has no image optimization server.
    unoptimized: true,
    // The gallery placeholders are locally authored SVGs. Sandboxed so an SVG
    // dropped in later cannot execute script.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
