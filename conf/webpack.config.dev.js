import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import webpackConfig from "./webpack.config.js";
import path from "path";
import { EsbuildPlugin } from "esbuild-loader";

function generateHtmlPlugins() {
  return new HtmlWebpackPlugin({
    template: path.resolve("titans_rc", "htmlContent.ejs"),
    filename: "index.html",
    title: "Template",
  });
}

const devServer = {
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: {
      index: "/",
    },
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

const devServerConfig = merge(webpackConfig, {
  mode: "development",
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    assetModuleFilename: "[name][ext]",
    publicPath: "/",
  },
  devtool: "eval-cheap-module-source-map",
  plugins: [new ReactRefreshWebpackPlugin(), generateHtmlPlugins()],
  optimization: {
    minimize: true,
    minimizer: [
      new EsbuildPlugin({
        target: "es2015",
      }),
    ],
  },
  ...devServer,
});

export default devServerConfig;
