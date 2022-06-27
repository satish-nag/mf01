const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "testorg",
    projectName: "mf01",
    webpackConfigEnv,
    disableHtmlGeneration: true,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    entry: {
      bootstrap: "./src/bootstrap.ts",
    },
    output: {
      filename: "[name].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.ejs",
        inject: false,
      }),
    ],
  });
};
