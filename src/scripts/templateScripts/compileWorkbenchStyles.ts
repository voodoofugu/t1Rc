import {
  getWorkbenchCompileWatchPaths,
  watchWorkbenchCompile,
  workbenchCompile,
} from "demo-workbench/node";
import type {
  WorkbenchCompileOptions,
  WorkbenchCompileResult,
} from "demo-workbench/node";

const watch =
  process.argv.includes("--watch") || process.argv.includes("watch");

const options: WorkbenchCompileOptions = {
  styles: {
    inputDir: "titans_rc/styles/scss",
    outputDir: "src/styles/css",
    bodySelectorReplacement: ".likeBody",
    assetUrlPrefix: "http://localhost:3000/img/",
  },
  demos: {
    inputDir: "src/components/projetComponents/pagesComponents",
  },
  popups: {
    inputDir: "src/components/projetComponents/popupsContetnt",
  },
};

function printResult(result: WorkbenchCompileResult) {
  if (result.styles) {
    const files = result.styles.files.map((file) => file.outputFile).join(", ");
    console.log(`✨ styles: compiled ${result.styles.files.length}${files ? ` (${files})` : ""}`);
  }

  if (result.demos || result.popups) {
    const outputFiles = result.demos?.outputFiles ?? result.popups?.outputFiles ?? [];
    const target = outputFiles.length
      ? outputFiles.join(", ")
      : "demo-workbench internal registry";
    console.log(
      `📚 registry: stored ${result.demos?.names.length ?? 0} page(s), ${result.popups?.names.length ?? 0} popup name(s): ${target}`,
    );
  }
}

async function main() {
  if (!watch) {
    printResult(await workbenchCompile(options));
    return;
  }

  const watchPaths = getWorkbenchCompileWatchPaths(options);
  console.log(`demo-workbench: watching ${watchPaths.join(", ")}`);

  // Watch/rebuild is now owned by demo-workbench, so this project only keeps
  // t1Rc-specific paths and style rewrite options here.
  await watchWorkbenchCompile({
    ...options,
    onBuild: printResult,
  });
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
