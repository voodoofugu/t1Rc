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
        directory: path.join(__dirname, "src", "scripts", "forBild"),
        publicPath: "/scripts/forBild/",
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
