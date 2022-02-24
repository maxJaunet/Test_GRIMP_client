/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['images.unsplash.com', "uploads-ssl.webflow.com"]
  }
}

module.exports = nextConfig
