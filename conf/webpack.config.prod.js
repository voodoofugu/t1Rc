import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpackConfig from "./webpack.config.js";
import path from "path";
import { EsbuildPlugin } from "esbuild-loader";

function generateHtmlPlugins() {
  return new HtmlWebpackPlugin({
    template: path.resolve("titans_rc", "htmlContent.ejs"),
    filename: "index.html",
    title: "Template",
    minify: true, // Минифицируем HTML для продакшена
  });
}

const prodConfig = merge(webpackConfig, {
  mode: "production",
  output: {
    filename: "scripts/[name].[contenthash].js", // Используем хэшированные имена файлов для кэширования
    chunkFilename: "scripts/[name].[contenthash].js",
    assetModuleFilename: "assets/[name].[contenthash][ext]",
    publicPath: "/", // Обновляем publicPath для корректной работы с ресурсами на сервере
  },
  devtool: false, // Отключаем source maps для продакшена
  plugins: [
    generateHtmlPlugins(),
    new EsbuildPlugin({
      target: "es2015",
    }),
    // Другие плагины, которые вам необходимы для продакшена
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // Дополнительные оптимизации, например, минификация и оптимизация JavaScript
      new EsbuildPlugin({
        target: "es2015",
        minify: true,
      }),
    ],
  },
});

export default prodConfig;
