const fs = require("fs/promises");
const path = require("path");

const folderType = "h"; // h / s / a
function getOutputDirName() {
  if (folderType === "h") {
    return "hero-all";
  } else if (folderType === "s") {
    return "superhero";
  } else if (folderType === "a") {
    return "goddess";
  }
}

const SOURCE_DIR = path.resolve(
  __dirname,
  "../../../titans_rc/img/images/",
  getOutputDirName()
);
const OUTPUT_DIR = path.resolve(
  __dirname,
  "../../../img-rebuild-output/",
  getOutputDirName()
);

function getId(from, to) {
  return Array.from({ length: to - from + 1 }, (_, i) => i + from);
}
// ban
const singleIds = [
  ...getId(1, 352),
  ...getId(5001, 5010),
  354,
  355,
  372,
  374,
  380,
  383,
  384,
  385,
  386,
  390,
  398,
  410,
  422,
  432,
  437,
  438,
  450,
  457,
  487,
  493,
  498,
  499,
  502,
  555,
];
// clear
const excludeIds = [
  11, 29, 62, 64, 91, 95, 132, 151, 164, 175, 188, 202, 233, 268, 270, 297, 320,
  325, 334, 417, 501, 507, 546,
];

async function copyFile(src, dest) {
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.copyFile(src, dest);
}

async function processFolder(folderName) {
  const folderId = parseInt(folderName.split("-").pop(), 10);

  if (excludeIds.includes(folderId)) return; // Исключённые ID

  const sourceFolder = path.join(SOURCE_DIR, folderName);
  const outputFolder = path.join(OUTPUT_DIR, folderName);

  const entries = await fs.readdir(sourceFolder, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(sourceFolder, entry.name);
    const destPath = path.join(outputFolder, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "icons") {
        await copyFolder(srcPath, destPath);
      } else if (entry.name === "x2") {
        if (excludeIds.includes(folderId)) {
          continue;
        } else if (singleIds.includes(folderId)) {
          await processX2_Single(srcPath, destPath);
        } else {
          await copyFolder(srcPath, destPath);
        }
      }
    }
  }
}

const avaFolderName = folderType === "s" ? "avatar" : "ava";
async function processX2_Single(srcDir, destDir) {
  const entries = await fs.readdir(srcDir, { withFileTypes: true });

  // Сначала обрабатываем ava
  const avaSrcDir = path.join(srcDir, avaFolderName);
  const avaDestDir = path.join(destDir, avaFolderName);

  try {
    const avaFiles = (await fs.readdir(avaSrcDir)).filter(
      (name) => name.endsWith(".jpg") || name.endsWith(".png")
    );

    if (avaFiles.length) {
      await fs.mkdir(avaDestDir, { recursive: true });

      await copyFile(
        path.join(avaSrcDir, avaFiles[0]),
        path.join(avaDestDir, avaFiles[0])
      );
    }
  } catch {
    // Папки ava может не быть, пропускаем без ошибки
  }

  // Затем обрабатываем одно изображение в корне x2
  for (const entry of entries) {
    if (entry.isFile()) {
      const match = entry.name.match(/-\d+\./);

      if (match) {
        await fs.mkdir(destDir, { recursive: true });
        await copyFile(
          path.join(srcDir, entry.name),
          path.join(destDir, entry.name)
        );
        break; // Копируем только один файл
      }
    }
  }
}

async function copyFolder(src, dest) {
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyFolder(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  console.log("📂 Сборка картинок...");

  await fs.rm(OUTPUT_DIR, { recursive: true, force: true });

  const allFolders = await fs.readdir(SOURCE_DIR);
  for (const folder of allFolders) {
    if (/^\D+-\d+$/.test(folder)) {
      await processFolder(folder);
    }
  }

  console.log("✅ Готово. Сборка завершена в:", OUTPUT_DIR);
}

main().catch(console.error);
