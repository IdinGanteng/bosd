const CracoLessPlugin = require("craco-less");
const CracoEsbuildPlugin = require("craco-esbuild");

module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#eb1863" },
            javascriptEnabled: true,
          },
        },
      },
    },
    { plugin: CracoEsbuildPlugin },
  ],
};
