// Static export for GitHub Pages.
// - User site (username.github.io): leave NEXT_PUBLIC_BASE_PATH empty.
// - Project site (username.github.io/repo-name): set NEXT_PUBLIC_BASE_PATH="/repo-name".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
