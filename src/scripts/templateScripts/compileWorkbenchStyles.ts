import { mkdirSync, writeFileSync } from "node:fs";
import * as path from "node:path";
import {
  discoverWorkbenchFileNames,
  getWorkbenchCompileWatchPaths,
  WORKBENCH_STYLE_RELOAD_MANIFEST_FILE,
  watchWorkbenchCompile,
  workbenchCompile,
} from "demo-workbench/node"; // использовать /node не удобно

import type {
  WorkbenchCompileOptions,
  WorkbenchCompileResult,
  WorkbenchStyleReloadManifest,
} from "demo-workbench/node";

const watch =
  process.argv.includes("--watch") || process.argv.includes("watch");

const popupInputDir = "src/components/projetComponents/popupsContetnt";

const options: WorkbenchCompileOptions = {
  styles: {
    inputDir: "titans_rc/styles/scss",
    // outputDir: "src/styles/css", // Original output directory
    // isolateStyles: false,
    outputDir: "src/styles/workbench-css",
    assetUrlPrefix: "http://localhost:3000/img/",
    clean: true,
  },
  demos: {
    inputDir: "src/components/projetComponents/pagesComponents",
  },
};

function printResult(result: WorkbenchCompileResult, popupNames?: string[]) {
  if (result.styles) {
    const files = result.styles.files.map((file) => file.outputFile).join(", ");
    console.log(
      `✨ styles: compiled ${result.styles.files.length}${files ? ` (${files})` : ""}`,
    );
  }

  if (result.demos) {
    console.log(
      `📄 pages: discovered ${result.demos.names.length} page file(s)`,
    );
  }

  if (popupNames) {
    console.log(`🗄️ popups: discovered ${popupNames.length} popup file(s)`);
  }
}

async function getPopupNames() {
  return discoverWorkbenchFileNames({ inputDir: popupInputDir });
}

function writeDisabledStyleReloadManifest() {
  if (!options.styles) return;

  const outputFile = path.resolve(
    options.styles.outputDir,
    WORKBENCH_STYLE_RELOAD_MANIFEST_FILE,
  );
  const manifest = {
    enabled: false,
    updatedAt: new Date().toISOString(),
  } satisfies WorkbenchStyleReloadManifest;

  mkdirSync(path.dirname(outputFile), { recursive: true });
  writeFileSync(outputFile, `${JSON.stringify(manifest, null, 2)}\n`);
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
  console.log(`demo-workbench: 👀 watching ${watchPaths.join(", ")}`);

  // Watch/rebuild is now owned by demo-workbench, so this project only keeps
  // t1Rc-specific paths and style rewrite options here.
  const watcher = await watchWorkbenchCompile({
    ...options,
    watchPaths: [popupInputDir],
    styleReload: true,
    onBuild: async (result) => {
      printResult(result, await getPopupNames());
    },
  });

  console.log(`demo-workbench: style reload stream ${watcher.styleReloadUrl}`);

  let isClosing = false;
  const closeWatcher = async () => {
    if (isClosing) return;
    isClosing = true;
    writeDisabledStyleReloadManifest();
    await watcher.close();
    process.exit(0);
  };

  process.once("exit", writeDisabledStyleReloadManifest);
  process.once("SIGINT", () => {
    closeWatcher().catch((error: unknown) => {
      console.error(error instanceof Error ? error.message : error);
      process.exit(1);
    });
  });
  process.once("SIGTERM", () => {
    closeWatcher().catch((error: unknown) => {
      console.error(error instanceof Error ? error.message : error);
      process.exit(1);
    });
  });
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
