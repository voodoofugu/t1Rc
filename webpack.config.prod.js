const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLMinimizerPlugin = require("html-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackConfig = require("./webpack.config.js");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const fs = require("fs");
const path = require("path");

// Функция для динамической генерации HtmlWebpackPlugin
function generateHtmlPlugins() {
  const pageFiles = fs.readdirSync("./src/pages");

  return pageFiles
    .map((file) => {
      const pageName = path.parse(file).name;

      if (file === "template.html") {
        return null; // Не создавать HtmlWebpackPlugin для template.html
      } else {
        return new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "htmlContent.ejs"),
          filename: `pages/${pageName}.html`,
          minify: true,
          inject: false, // не забудь проверить inject
          excludeChunks: ["template"],
          title: pageName,
          pageName: pageName,
          scriptLoading: "defer",
          // sourceMap: true,
        });
      }
    })
    .filter((plugin) => plugin !== null); // Удалить null значения из массива
}

const plugins = [...generateHtmlPlugins()];

module.exports = merge(webpackConfig, {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
    minimizer: [new HTMLMinimizerPlugin(), new TerserPlugin()],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "scripts/[name].[contenthash].js",
    chunkFilename: "scripts/[name].[contenthash].js",
    assetModuleFilename: "[name][ext]",
    publicPath: "../",
  },
  // devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: "styles/[name].[contenthash].css",
    //   chunkFilename: "styles/[id].[contenthash].css",
    // }),
    new webpack.IgnorePlugin({
      resourceRegExp: /themeToggle\.(js|scss)|template\.html$/,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/img",
          to: "img",
        },
        {
          from: "src/styles",
          to: "styles",
        },
      ],
    }),
    ...plugins,
  ],
  // resolve: {
  //   alias: {
  //     imgPath: path.resolve(__dirname, "src/rc"),
  //   },
  // },
});
