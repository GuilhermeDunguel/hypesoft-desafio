/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['i.imgur.com', 'www.guilhermedunguel.com']
  },
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en'
  }
}