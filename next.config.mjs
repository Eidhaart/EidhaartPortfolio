/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/fonts/:font*", // 🎯 applies to all font files
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // 🌐 allow usage from any domain
          },
        ],
      },
    ];
  },
};

export default nextConfig;
