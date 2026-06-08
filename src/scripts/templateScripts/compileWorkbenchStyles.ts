import {
  discoverWorkbenchFileNames,
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

const popupInputDir = "src/components/projetComponents/popupsContetnt";

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
};

function printResult(result: WorkbenchCompileResult, popupNames?: string[]) {
  if (result.styles) {
    const files = result.styles.files.map((file) => file.outputFile).join(", ");
    console.log(`✨ styles: compiled ${result.styles.files.length}${files ? ` (${files})` : ""}`);
  }

  if (result.demos) {
    const outputFiles = result.demos.outputFiles;
    const target = outputFiles.length
      ? outputFiles.join(", ")
      : "demo-workbench internal registry";
    console.log(
      `📚 registry: stored ${result.demos.names.length} page(s): ${target}`,
    );
  }

  if (popupNames) {
    console.log(`🪟 popups: discovered ${popupNames.length} popup file(s)`);
  }
}

async function getPopupNames() {
  return discoverWorkbenchFileNames({ inputDir: popupInputDir });
}

async function main() {
  if (!watch) {
    const [result, popupNames] = await Promise.all([
      workbenchCompile(options),
      getPopupNames(),
    ]);
    printResult(result, popupNames);
    return;
  }

  const watchPaths = getWorkbenchCompileWatchPaths(options, [popupInputDir]);
  console.log(`demo-workbench: watching ${watchPaths.join(", ")}`);

  // Watch/rebuild is now owned by demo-workbench, so this project only keeps
  // t1Rc-specific paths and style rewrite options here.
  await watchWorkbenchCompile({
    ...options,
    watchPaths: [popupInputDir],
    onBuild: async (result) => {
      printResult(result, await getPopupNames());
    },
  });
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
