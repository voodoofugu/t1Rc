import webpack from "webpack";
import { devServer } from "./devServer";
import { loaders } from "./loaders";
import { optimization } from "./optimization";
import { plugins } from "./plugins";
import { resolvers } from "./resolvers";
import { BuildOptions } from "./types";

export default function webpackSett(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === "development";

  return {
    mode: mode ?? "development",
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    optimization: optimization(options),
    performance: {
      hints: options.mode === "production" ? "warning" : false,
      maxAssetSize: 512 * 1024,
      maxEntrypointSize: 512 * 1024,
    },
    plugins: plugins(options),
    module: {
      rules: loaders(options),
    },
    resolve: resolvers(options),
    devtool: isDev ? "eval-cheap-module-source-map" : false, //false or "source-map"
    devServer: isDev ? devServer(options) : undefined,
  };
}
