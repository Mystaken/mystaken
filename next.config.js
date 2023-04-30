const withMDX = require("@next/mdx");

const isProd = process.env.NODE_ENV === "production";

module.exports = withMDX({
  extension: /\.mdx$/,
  options: {
    providerImportSource: "@mdx-js/react",
  },
})({
  basePath: isProd ? "/mystaken" : "",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
});
