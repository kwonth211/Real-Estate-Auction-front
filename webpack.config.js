// // Learn more on how to config.
// // - https://github.com/ant-tool/atool-build#配置扩展

// module.exports = function (webpackConfig) {
//   webpackConfig.babel.plugins.push("transform-runtime");
//   webpackConfig.babel.plugins.push([
//     "import",
//     {
//       libraryName: "antd",
//       style: "css",
//     },
//   ]);

//   return webpackConfig;
// };

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
module.exports = {
  /**
   * Custom Webpack Config
   * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
   */
  webpack(config, options) {
    const { dev, isServer } = options;

    // Do not run type checking twice:
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    return config;
  },
};
