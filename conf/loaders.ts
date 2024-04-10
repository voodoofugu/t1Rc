import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types";

export function loaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const cssLoader = {
    test: /\.(c|sa|sc)ss$/i,
    exclude: /node_modules\/(?!normalize\.css)/,
    use: {
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: isDev ? "[local]" : "[hash:base64:8]",
        },
      },
    },
  };

  const fileLoader = {
    test: /\.(woff2?|jpe?g|png|webp|gif|svg)$/i,
    use: {
      loader: "file-loader",
      options: {
        name: "[name][ext]",
        outputPath: "assets",
      },
    },
  };

  const esbuildLoader = {
    test: /\.(ts|tsx|js|jsx)$/,
    exclude: /(node_modules|scripts)/,
    use: {
      loader: "esbuild-loader",
      options: {
        loader: "tsx",
        target: "es2015",
      },
    },
  };

  return [cssLoader, fileLoader, esbuildLoader];
}
