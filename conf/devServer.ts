import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";
import path from "path";

export function devServer(options: BuildOptions): DevServerConfiguration {
  return {
    host: "0.0.0.0",
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
        directory: path.join("public", "pixi"),
        publicPath: "/pixi/",
      },
    ],
  };
}
