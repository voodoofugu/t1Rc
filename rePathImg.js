const fs = require("fs");
const glob = require("glob");

// Функция для обновления путей в файле
function updatePathsInFile(filePath, imgPathAlias) {
  const content = fs.readFileSync(filePath, "utf8");
  const updatedContent = content.replace(
    /((?:background(?:-image)?|cursor):\s*[^;]*url\([]?)(?!~)(.+?\.(png|jpg|jpeg|gif|svg))['"]?\)/g,
    // /(background(?:-image)?:\s*[^;]*url\(['"]?)([^)'"]+\.(png|jpg|jpeg|gif|svg))['"]?\)/g,
    (match, prefix, imagePath, extension) => {
      // Удаляем одинарные и двойные кавычки из пути к изображению
      const cleanImagePath = imagePath.replace(/['"]/g, "");
      return `${prefix}~${imgPathAlias}/${cleanImagePath})`;
    }
  );

  fs.writeFileSync(filePath, updatedContent, "utf8");
  console.log(`Updated file: ${filePath}`);
}

// Основная функция для обновления путей во всех SCSS файлах в папке src/styles
function updateImagePaths(imgPathAlias) {
  const scssFiles = glob.sync("src/styles/**/*.scss");

  scssFiles.forEach((filePath) => {
    updatePathsInFile(filePath, imgPathAlias);
  });
}

// Заменить 'imgPath' на ваш алиас
updateImagePaths("imgPath");
