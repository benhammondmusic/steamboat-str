import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The gallery placeholders are locally authored SVGs. Sandboxed so an SVG
    // dropped in later cannot execute script.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
