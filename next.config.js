module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true
    },
    images: {
      // domains: ['res.cloudinary.com'],
      unoptimized: true
    }
  }
  return nextConfig
}