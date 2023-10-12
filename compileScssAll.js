// тут мы собираем все scss файлы в css файлы
// и изменяем пути к картинкам
// а так же минимизируем файл с помощью регулярных выражений
const sass = require("sass");
const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

// Путь к директории с исходными SCSS файлами
const sourceDir = "./src/styles/scss";

// Путь к директории, в которой будут сохранены скомпилированные CSS файлы
const outputDir = "./src/styles/css";

function compileSCSS(sourceFile) {
  // Полный путь к исходному SCSS файлу
  const sourceFilePath = path.join(sourceDir, sourceFile);

  // Полный путь к выходному CSS файлу
  const outputFilePath = path.join(
    outputDir,
    sourceFile.replace(".scss", ".css")
  );

  // Скомпилируйте SCSS в CSS
  const result = sass.renderSync({
    file: sourceFilePath,
  });

  // Получите скомпилированный CSS как строку
  let cssContent = result.css.toString();

  // Выполните замену всех URL-адресов, тут я учитываю три варианта:
  // `url(`
  // `url("`
  // `url(#` игнор для svg
  // `url(http` игнор для ссылок
  cssContent = cssContent.replace(
    /url\((?:"|')?([^"')]+)(?:"|')?\)/g,
    (match, url) => {
      if (url.startsWith("#") || url.startsWith("http")) {
        return `url(${url})`;
      } else {
        return `url("../../img/${url}")`;
      }
    }
  );

  // Минимизация CSS с помощью регулярных выражений
  cssContent = cssContent.replace(/\s+/g, " "); // Удалить лишние пробелы
  cssContent = cssContent.replace(/\n/g, ""); // Удалить переносы строк
  cssContent = cssContent.replace(/\r/g, ""); // Удалить возвраты каретки
  cssContent = cssContent.replace(/\t/g, ""); // Удалить табуляции

  // Сохраните обновленное и минимизированное содержимое в выходной файл
  fs.writeFileSync(outputFilePath, cssContent);

  console.log(
    `File "${outputFilePath}" compiled, URLs updated, and minimized.`
  );
}
