// /**
//  * @type {import('next').NextConfig}
//  */
const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(?<temp1>ogg|mp3|wav|mpe?g)$/iu,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve("file-loader"),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: config.esModule || false
          }
        }
      ]
    });

    return config;
  }
  // output: 'export',
  // distDir: 'dist',
};

module.exports = nextConfig;
