const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/mystaken" : "",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};
