import { runWorkbenchCompile } from "demo-workbench/node";

runWorkbenchCompile({
  styles: {
    inputDir: "titans_rc/styles/scss",
    outputDir: "src/styles/workbench-css",
    assetUrlPrefix: "http://localhost:3000/img/",
    logs: false,
  },
  demos: {
    inputDir: "src/components/projetComponents/pagesComponents",
    outputFile: "src/components/templateComponents/demos",
  },
});
