const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpackConfig = require("./webpack.config.js");
const path = require("path");

function generateHtmlPlugins() {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src", "htmlContent.ejs"),
    filename: "index.html", // этой строчкой мы и определяем какой файл будет открываться по адресу сервера
    title: "Template",
  });
}

const devServerConfig = {
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: {
      index: "/",
    }, // штука устанавливает маршрутизацию, если вырубить можно будет попадать на страницы статических файлов ниже, видить что есть, Включаем поддержку HTML5 History API, чтобы react-router работал во время разработки
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    static: [
      // Добавляем пути для обслуживания статических файлов
      {
        directory: path.join(__dirname, "src", "img"),
        publicPath: "/img/",
      },
      {
        directory: path.join(__dirname, "src", "scripts"),
        publicPath: "/scripts/",
      },
    ],
  },
};

module.exports = merge(webpackConfig, {
  mode: "development",
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    assetModuleFilename: "[name][ext]",
    publicPath: "/",
  },
  devtool: "eval-cheap-module-source-map",
  plugins: [
    // Добавляем плагин для горячей перезагрузки
    new ReactRefreshWebpackPlugin(),
    generateHtmlPlugins(),
  ],
  ...devServerConfig,
});

// import { merge } from "webpack-merge";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
// import webpackConfig from "./webpack.config.js";

// import path from "path";
// import { fileURLToPath } from "url";
// import webpack from "webpack";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// function generateHtmlPlugins() {
//   return new HtmlWebpackPlugin({
//     template: path.resolve(__dirname, "src", "htmlContent.ejs"),
//     filename: "index.html",
//     title: "Template",
//   });
// }

// const devServerConfig = {
//   devServer: {
//     port: 3000,
//     open: true,
//     hot: true,
//     historyApiFallback: {
//       index: "/",
//     },
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//     client: {
//       overlay: {
//         errors: true,
//         warnings: false,
//       },
//     },
//     static: [
//       {
//         directory: path.join(__dirname, "src", "img"),
//         publicPath: "/img/",
//       },
//       {
//         directory: path.join(__dirname, "src", "scripts"),
//         publicPath: "/scripts/",
//       },
//     ],
//   },
// };

// const webpackConfigDev = (env, argv) => {
//   return merge(webpackConfig, {
//     mode: "development",
//     output: {
//       filename: "[name].js",
//       chunkFilename: "[name].js",
//       assetModuleFilename: "[name][ext]",
//       publicPath: "/",
//     },
//     devtool: "eval-cheap-module-source-map",
//     plugins: [
//       new ReactRefreshWebpackPlugin(),
//       generateHtmlPlugins(),
//       new webpack.DefinePlugin({
//         "process.env.NODE_ENV": JSON.stringify("development"),
//       }),
//     ],
//     ...devServerConfig,
//   });
// };

// export default webpackConfigDev;
