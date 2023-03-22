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
  
    env: {
      mapbox_key: "pk.eyJ1IjoidmFoaWRuZXNybyIsImEiOiJjbGZqMDd2MW0yZGtmM3hwZ2syZXRhN3NlIn0.6QRdF_heEfkJ5wafuqsaUg"
    }
}

module.exports = nextConfig
