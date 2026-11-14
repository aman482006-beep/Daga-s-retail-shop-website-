/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// If building for GitHub Pages under repository /Daga-s-retail-shop-website-
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || isProd;
const basePath = isGitHubPages ? '/Daga-s-retail-shop-website-' : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
