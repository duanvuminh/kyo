import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    // TODO: https://github.com/vercel/next.js/discussions/77266
    remarkPlugins: [["remark-gfm", { strict: true, throwOnError: true }]],
    rehypePlugins: [],
  },
});
const nextConfig = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    localPatterns: [
      {
        pathname: "/api/file",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgv.vm-movie.jp",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        pathname: "/attachments/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.mzstatic.com",
        pathname: "/**",
      },
    ],
  },
});

export default nextConfig;
