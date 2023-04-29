const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/test' : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};
