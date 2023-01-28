/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URL: "mongodb://ddunn:Robod123!@karen/karen"
  }
}

module.exports = nextConfig
