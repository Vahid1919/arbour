/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
    redirects: async () => {
      return [
        {
          source: '/auth/signup',
          destination: '/auth/login',
          permanent: true,
        },
      ]
    },
  
}

module.exports = nextConfig
