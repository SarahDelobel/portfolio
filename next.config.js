/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/SarahDelobel/sarahdelobel.github.io/portfolio/' : '',

}

