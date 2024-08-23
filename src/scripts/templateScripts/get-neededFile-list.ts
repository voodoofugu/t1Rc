import chokidar from "chokidar";
import path from "path";
import fs from "fs/promises";

const neededFile: string = "popupList"; // popupList, pageList

const directoryPath =
  (neededFile === "pageList" &&
    path.join("./src/components/projetComponents/pagesComponents")) ||
  (neededFile === "popupList" &&
    path.join("./src/components/projetComponents/popupsContetnt"));
const outputPath =
  (neededFile === "pageList" && path.join(directoryPath, "a_pageList.json")) ||
  (neededFile === "popupList" && path.join(directoryPath, "a_popupList.json"));

async function getPageList() {
  try {
    const files = await fs.readdir(directoryPath);
    const components = files
      .filter((file) => file.endsWith(".jsx") && file !== "Template.jsx")
      .map((file) => file.replace(".jsx", ""));
    return components;
  } catch (error) {
    throw new Error(`Error reading directory: ${error}`);
  }
}

async function generatePageList() {
  try {
    const components = await getPageList();
    const data = JSON.stringify(components, null, 2);
    await fs.writeFile(outputPath, data);
    console.log("✨ Data generated!");
  } catch (error) {
    console.error("🔥 Error generating page list:", error);
  }
}

generatePageList();

const watcher = chokidar.watch(directoryPath, {
  ignored: /(^|[/\\])\../, // игнорировать скрытые файлы
  persistent: true,
  ignoreInitial: true, // игнорировать события при старте
});

watcher.on("all", async (event, path) => {
  console.log(`Event ${event} detected in ${path}`);
  await generatePageList();
});
