const sass = require("sass");
const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

const sourceDir = "./src/styles/scss";
const outputDir = "./src/styles/css";

// механика

// Функция для обертки SCSS-файла и сохранения его в outputDir
async function wrapSCSSFile(sourceFile) {
  const sourceFilePath = path.join(sourceDir, sourceFile);
  const outputFilePath = path.join(outputDir, sourceFile);

  // Читаем исходный файл SCSS
  const sourceContent = fs.readFileSync(sourceFilePath, "utf-8");

  // Разделяем контент на строки
  const lines = sourceContent.split("\n");

  // Отфильтровываем строки, учитывая @charset и @import
  const charsetImports = [];
  const filteredLines = lines.filter((line) => {
    if (
      line.trim().startsWith("@charset") ||
      line.trim().startsWith("@import")
    ) {
      // Сохраняем строки @charset и @import
      charsetImports.push(line);
      return false;
    }
    return true;
  });

  // Оборачиваем SCSS-контент в .changesClass {}
  const wrappedContent = `.changesClass {\n${filteredLines.join("\n")}\n}`;

  // Добавляем строки @charset и @import перед обернутым контентом
  const finalContent = charsetImports.join("\n") + "\n" + wrappedContent;

  // Сохраняем обернутый SCSS в outputDir
  fs.writeFileSync(outputFilePath, finalContent);
  console.log(`Файл "${outputFilePath}" обернут в .changesClass и сохранен.`);
}

async function compileSCSSFile(sourceFile) {
  const sourceFilePath = path.join(outputDir, sourceFile);
  const outputFilePath = path.join(
    outputDir,
    sourceFile.replace(".scss", ".css")
  );

  const result = await sass
    .compileAsync(sourceFilePath, {
      // style: "compressed",
    })
    .catch((error) => {
      console.error(error);
    });
  const cssContent = result.css.toString();

  let modifiedContent = cssContent.replace(
    /url\((?:"|')?([^"')]+)(?:"|')?\)/g,
    (match, url) => {
      if (url.startsWith("#") || url.startsWith("http")) {
        return `url(${url})`;
      } else {
        return `url("../../img/${url}")`;
      }
    }
  );

  modifiedContent = modifiedContent.replace(/(^|\s)(body)/g, (match, body) => {
    return "\n.likeBody";
  });

  // modifiedContent = modifiedContent.replace(/\s+/g, " ");
  // modifiedContent = modifiedContent.replace(/\n/g, "");
  // modifiedContent = modifiedContent.replace(/\r/g, "");
  // modifiedContent = modifiedContent.replace(/\t/g, "");

  fs.writeFileSync(outputFilePath, modifiedContent);
  console.log(
    `Файл "${outputFilePath}" скомпилирован, обновлены ссылки и сжат.`
  );
}

function compileSCSSIfFileEndsWithSCSS(fileName) {
  if (fileName.endsWith(".scss")) {
    wrapSCSSFile(fileName);
    compileSCSSFile(fileName);
  }
}

// функционал

function compileAllSCSSFiles() {
  fs.readdirSync(sourceDir).forEach((fileName) => {
    compileSCSSIfFileEndsWithSCSS(fileName);
  });
}

function watchSCSSChanges() {
  const watcher = chokidar.watch(sourceDir);

  watcher.on("change", (filePath) => {
    const fileName = path.basename(filePath);
    compileSCSSIfFileEndsWithSCSS(fileName);
    console.log(`File "${filePath}" changed. Recompiling...`);
  });
}

compileAllSCSSFiles();
watchSCSSChanges();
