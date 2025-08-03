import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // ← THIS fixes local images in static export builds
  },
};

export default nextConfig;