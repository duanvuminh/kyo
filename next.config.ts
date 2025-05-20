import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    // TODO: https://github.com/vercel/next.js/discussions/77266
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    remarkPlugins: [["remark-gfm", { strict: true, throwOnError: true }]],
    rehypePlugins: [],
  },
});
const nextConfig: NextConfig = withMDX({
  experimental: {
    useCache: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      new URL("https://imgv.vm-movie.jp/image/**"),
      new URL("https://cmoa.akamaized.net/data/image/**"),
    ],
  },
});

export default nextConfig;
