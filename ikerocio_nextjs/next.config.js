/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

// const nextConfig = {
//   reactStrictMode: true,
//   ...nextTranslate(),
// };

const nextConfig = nextTranslate({
  reactStrictMode: true,
});

module.exports = nextConfig;
