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
        "src/components/projetComponents",
      ),
      nexus: path.resolve(options.paths.mainDir, "nexus/nexusConfig.ts"),
      react: path.resolve(options.paths.mainDir, "node_modules/react"),
      "react-dom": path.resolve(
        options.paths.mainDir,
        "node_modules/react-dom",
      ),
    },
  };
}
