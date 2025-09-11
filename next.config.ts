import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
      {
        protocol:"https",
        hostname:"fivjcqmbqrbfdcrzlpra.supabase.co"
      }
    ],
    unoptimized: isDev,
  },
};

export default nextConfig;