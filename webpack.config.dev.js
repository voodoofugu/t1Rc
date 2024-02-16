import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import webpackConfig from "./webpack.config.js";
import path from "path";

function generateHtmlPlugins() {
  return new HtmlWebpackPlugin({
    template: path.resolve("titans_rc", "htmlContent.ejs"),
    filename: "index.html", // этой строчкой мы и определяем какой файл будет открываться по адресу сервера
    title: "Template",
  });
}

let devServerConfig = {
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
        directory: path.join("titans_rc", "img"),
        publicPath: "/img/",
      },
      {
        directory: path.join("titans_rc", "scripts"),
        publicPath: "/scripts/",
      },
      {
        directory: path.join("titans_rc", "spine"),
        publicPath: "/spine/",
      },
    ],
  },
};

export default devServerConfig = merge(webpackConfig, {
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
