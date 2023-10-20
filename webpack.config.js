const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

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
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /(node_modules|scripts)/,
        use: {
          loader: "swc-loader",
          options: {
            // Add your SWC options
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
