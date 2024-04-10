import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";
import path from "path";

export function devServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
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
  };
}
