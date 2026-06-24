import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types";

export function loaders(options: BuildOptions): ModuleOptions["rules"] {
  const fileLoader = {
    test: /\.(woff2?|jpe?g|png|webp|gif|svg)$/i,
    use: {
      loader: "esbuild-loader",
      options: {
        name: "[name][ext]",
        outputPath: "assets",
      },
    },
  };

  const esbuildLoader = {
    test: /\.(ts|tsx|js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "esbuild-loader",
      options: {
        loader: "tsx",
        target: "es2015",
      },
    },
  };

  return [fileLoader, esbuildLoader];
}
