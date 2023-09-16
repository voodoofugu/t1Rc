const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.jsx"),
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "styles/[id].[contenthash].css",
    }),
    new NodePolyfillPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".scss"],
    fallback: {
      fs: false,
      path: false,
    },
  },
  module: {
    rules: [
      // Правила для обработки файлов, оставляем общие правила для разработки и продакшна
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: false, // Отключаем обработку атрибутов src и href
            },
          },
        ],
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        exclude: /node_modules\/(?!normalize\.css)/,
        use: [
          "style-loader", // Добавить стили в DOM при загрузке страницы
          "css-loader", // Обработка CSS-файлов
          "sass-loader", // Преобразование SCSS в CSS
        ],
      },
      {
        test: /\.woff2?$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
        type: "asset/resource",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
