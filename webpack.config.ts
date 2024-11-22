import path from "path";
import webpack from "webpack";
import { webpackSett } from "./conf/webpackSett";
import { BuildMode, BuildPaths, BuildPlatform } from "./conf/types";

interface EnvVariables {
  mode?: BuildMode;
  analyzer?: boolean;
  port?: number;
  platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "htmlContent.ejs"),
    public: path.resolve(__dirname, "titans_rc/img"),
    mainDir: path.resolve(__dirname, "./"),
  };

  const config: webpack.Configuration = webpackSett({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    platform: env.platform ?? "desktop",
  });

  return config;
};
