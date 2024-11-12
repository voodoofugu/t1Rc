import chokidar, { FSWatcher } from "chokidar";
import path from "path";
import fs from "fs/promises";

const neededFile: string = "popupList"; // popupList, pageList

const directoryPath: string =
  neededFile === "pageList"
    ? path.join("./src/components/projetComponents/pagesComponents")
    : path.join("./src/components/projetComponents/popupsContetnt");

const outputPath: string =
  neededFile === "pageList"
    ? path.join(directoryPath, "a_pageList.json")
    : path.join(directoryPath, "a_popupList.json");

// Функция для получения списка страниц
async function getPageList(): Promise<string[]> {
  try {
    const files = await fs.readdir(directoryPath);
    const components = files
      .filter((file) => file.endsWith(".jsx") && file !== "Template.jsx")
      .map((file) => file.replace(".jsx", ""));
    return components;
  } catch (error: any) {
    throw new Error(`Error reading directory: ${error}`);
  }
}

// Функция для генерации списка страниц
async function generatePageList(): Promise<void> {
  try {
    const components = await getPageList();
    const data = JSON.stringify(components, null, 2);
    await fs.writeFile(outputPath, data);
    console.log("✨ Data generated!");
  } catch (error: any) {
    console.error("🔥 Error generating page list:", error);
  }
}

generatePageList();

// Типизация для chokidar
const watcher: FSWatcher = chokidar.watch(directoryPath, {
  ignored: /(^|[/\\])\../, // игнорировать скрытые файлы
  persistent: true,
  ignoreInitial: true, // игнорировать события при старте
});

// Типизация для событий в watcher
watcher.on("all", async (event: string, filePath: string) => {
  console.log(`Event ${event} detected in ${filePath}`);
  await generatePageList();
});
