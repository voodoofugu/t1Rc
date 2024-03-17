import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpackConfig from "./webpack.config";
import fs from "fs";
import path from "path";

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
          template: path.resolve("titans_rc", "htmlContent.ejs"),
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

const webpackConfigProd = merge(webpackConfig, {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
  },
  output: {
    path: path.resolve("dist"),
    clean: true,
    filename: "scripts/[name].[contenthash].js",
    chunkFilename: "scripts/[name].[contenthash].js",
    assetModuleFilename: "[name][ext]",
    publicPath: "../",
  },
  // devtool: "source-map",
  plugins: [...plugins],
});
