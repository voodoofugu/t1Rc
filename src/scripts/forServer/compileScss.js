const fs = require("fs");
const path = require("path");
const sass = require("sass");
const chokidar = require("chokidar");
const transformCssFileNames = require("../forBild/transformCssFileNames.js");

const sourceDir = path.join(__dirname, "../../styles/scss");
const outputDir = path.join(__dirname, "../../styles/css");

// добавление .changesClass
async function wrapSCSSFile(sourceFile) {
  const sourceFilePath = path.join(sourceDir, sourceFile);

  // Если это файл sass_commons.scss, вернем его содержимое
  if (sourceFile === "sass_commons.scss") {
    const sourceContent = fs.readFileSync(sourceFilePath, "utf-8");
    const newFilePath = path.join(outputDir, sourceFile);
    fs.writeFileSync(newFilePath, sourceContent);
    console.log(`Файл "${newFilePath}" создан, но не обёрнут 😐`);
    return;
  }

  const outputFilePath = path.join(outputDir, sourceFile);
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
  const indent = " "; // 1 пробел для отступа
  const wrappedContent = `.changesClass {\n${filteredLines
    .map((line) => indent + line)
    .join("\n")}\n}`;
  // Добавляем строки @charset и @import перед обернутым контентом
  const finalContent = charsetImports.join("\n") + "\n" + wrappedContent;

  fs.writeFileSync(outputFilePath, finalContent);
  console.log(`"${outputFilePath}" - создан и обернут в .changesClass 🤗`);
}
// компиляция
async function compileSCSSFile(sourceFile) {
  try {
    const sourceFilePath = path.join(outputDir, sourceFile);
    const outputFilePath = path.join(
      outputDir,
      sourceFile.replace(".scss", ".css")
    );

    // компиляция и сжатие
    const result = await sass.compileAsync(sourceFilePath, {
      style: "compressed",
    });

    if (result && result.css) {
      const cssContent = result.css.toString();
      // заменяем url всех img
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
      // заменяем тег body на класс .likeBody
      modifiedContent = modifiedContent.replace(
        /(^|\s)(body)/g,
        (match, body) => {
          return ".likeBody";
        }
      );
      // заменяем все классы .changesClass на имя файла
      modifiedContent = modifiedContent.replace(
        /changesClass/g,
        transformCssFileNames([sourceFile.replace(".scss", "")])[0]
      );

      fs.writeFileSync(outputFilePath, modifiedContent);
      console.log(
        `"${outputFilePath}" скомпилирован, сжат, img ссылки обновлены 💪`
      );

      // Удаление .scss файла кроме sass_commons
      if (sourceFile !== "sass_commons.scss") {
        fs.unlinkSync(sourceFilePath);
      }
    } else {
      console.error(`Ошибка компиляции SCSS, не удалось получить CSS 🧐
      Файл "${sourceFile}" может быть пуст`);
    }
  } catch (error) {
    console.error(`Ошибка компиляции в "${sourceFile}" 🔥 `, error);
  }
}

// преобразование
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
    console.log(`"${filePath}" изменен ✨\n Пересобираем...🤔`);
  });
}

compileAllSCSSFiles();
watchSCSSChanges();
