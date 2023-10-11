const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.jsx"),
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".scss"],
    fallback: {
      fs: false,
      path: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            sources: false,
          },
        },
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        exclude: /node_modules\/(?!normalize\.css)/,
        use: ["css-loader"],
      },
      {
        test: /\.(woff2?|jpe?g|png|webp|gif|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name][ext]",
            outputPath: "assets", // Вы можете настроить директорию для разных видов файлов
          },
        },
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
