/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pure static export (SSG) — deployed to Cloudflare Pages. No SSR, no API routes.
  output: "export",
  // Cloudflare Pages serves /path/ as /path/index.html — trailing slash keeps routing clean.
  trailingSlash: true,
  // next/image optimisation needs a server; static export cannot use it.
  images: { unoptimized: true },
  reactStrictMode: true,
};
export default nextConfig;
