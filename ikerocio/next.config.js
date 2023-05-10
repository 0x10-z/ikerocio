/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

// const nextConfig = {
//   reactStrictMode: true,
//   ...nextTranslate(),
// };

const nextTranslateConfig = nextTranslate({
  reactStrictMode: true,
});

module.exports = {
  ...nextTranslateConfig,
};
