import nextra from 'nextra'

const withNextra = nextra({})
const isProduction = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isProduction ? { output: 'export' } : {}),
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

export default withNextra(nextConfig)
