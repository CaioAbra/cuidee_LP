// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "https://apiappdev.cuidee.com.br/:path*", // URL da API
//       },
//     ];
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 Adicionado aqui
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://apiappdev.cuidee.com.br/:path*",
      },
    ];
  },
};

export default nextConfig;
