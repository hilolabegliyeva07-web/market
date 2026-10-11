import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // dummyjson rasmlari shu domendan keladi
    remotePatterns: [{ protocol: "https", hostname: "cdn.dummyjson.com" }],
  },
};

export default nextConfig;
