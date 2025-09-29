import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    // TODO: https://github.com/vercel/next.js/discussions/77266
    remarkPlugins: [["remark-gfm", { strict: true, throwOnError: true }]],
    rehypePlugins: [],
  },
});
const nextConfig: NextConfig = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgv.vm-movie.jp",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "cmoa.akamaized.net",
        pathname: "/data/image/**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        pathname: "/attachments/**",
      },
    ],
  },
});

export default nextConfig;
