import { Configuration } from "webpack";
import { BuildOptions } from "./types";
import path from "path";

export function resolvers(options: BuildOptions): Configuration["resolve"] {
  return {
    extensions: [".ts", ".js", ".tsx", ".jsx", ".css", ".scss", ".json"],
    alias: {
      "@": path.resolve(options.paths.mainDir),
      "@prCo": path.resolve(
        options.paths.mainDir,
        "src/components/projetComponents"
      ),
      eventemitter3: path.resolve(
        options.paths.mainDir,
        "src/libs/eventemitter3.js"
      ),
    },
    // полифилы для pixi
    fallback: {
      path: require.resolve("path-browserify"),
      fs: false,
      os: false,
      crypto: false,
      stream: false,
      util: require.resolve("util/"),
    },
  };
}
