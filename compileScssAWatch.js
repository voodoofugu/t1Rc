const chokidar = require("chokidar");
const fs = require("fs");
const path = require("path");
import { compileSCSS, sourceDir, outputDir } from "./compileScssAll";

// Создайте слушателя изменений SCSS файлов с использованием chokidar
const watcher = chokidar.watch(sourceDir);

// Добавьте обработчик события изменения файла
watcher.on("change", (filePath) => {
  // Получите имя файла из полного пути
  const fileName = path.basename(filePath);

  // Проверьте, что файл - SCSS
  if (fileName.endsWith(".scss")) {
    console.log(`File "${filePath}" changed. Recompiling...`);
    compileSCSS(fileName);
  }
});

// Компилируйте все SCSS файлы при первом запуске
fs.readdirSync(sourceDir).forEach((fileName) => {
  if (fileName.endsWith(".scss")) {
    compileSCSS(fileName);
  }
});
