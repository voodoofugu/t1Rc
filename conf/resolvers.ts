import { Configuration } from "webpack";
import { BuildOptions } from "./types";
import path from "path";

export function resolvers(options: BuildOptions): Configuration["resolve"] {
  return {
    extensions: [".ts", ".js", ".tsx", ".jsx", ".css", ".scss", ".json"],
    alias: {
      "@": path.resolve(options.paths.mainDir),
    },
  };
}
