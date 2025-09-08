import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // If you want to allow external images:
    // remotePatterns: [
    //   { protocol: "https", hostname: "example.com" },
    // ],
  },
};

export default nextConfig;
