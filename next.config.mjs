/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  serverRuntimeConfig: {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    CONTACT_PASS: process.env.CONTACT_PASS,
  },
};

export default nextConfig;
