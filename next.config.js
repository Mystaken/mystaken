const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
  options: {
    providerImportSource: "@mdx-js/react",
  },
});
const isProd = process.env.NODE_ENV === "production";

module.exports = withMDX({
  basePath: isProd ? "/mystaken" : "",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
});
