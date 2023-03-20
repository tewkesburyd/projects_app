/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

// module.exports = { 
//   async rewrites(){
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://localhost:3000/api/:path'
//       }
//     ]
//   }
// }
