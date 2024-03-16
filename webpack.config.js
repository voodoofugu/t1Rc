import path from "path";

const webpackConfig = {
  entry: path.resolve("titans_rc", "index.jsx"),
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
            outputPath: "assets",
          },
        },
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /(node_modules|scripts)/,
        use: {
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            target: "es2015",
          },
        },
      },
    ],
  },
};

export default webpackConfig;
