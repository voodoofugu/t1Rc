const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackConfig = require("./webpack.config.js");
const TerserPlugin = require("terser-webpack-plugin");
const fs = require("fs");
const path = require("path");

// Функция для динамической генерации HtmlWebpackPlugin
function generateHtmlPlugins() {
  const pageFiles = fs.readdirSync("./titans_rc/pages");

  return pageFiles
    .map((file) => {
      const pageName = path.parse(file).name;

      if (file === "template.html") {
        return null; // Не создавать HtmlWebpackPlugin для template.html
      } else {
        return new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "titans_rc", "htmlContent.ejs"),
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
    minimizer: [new TerserPlugin()],
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
  plugins: [...plugins],
});
