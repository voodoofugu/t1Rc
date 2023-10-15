const sass = require("sass");
const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

const sourceDir = "./src/styles/scss";
const outputDir = "./src/styles/css";

// механика

async function compileSCSSFile(sourceFile) {
  const sourceFilePath = path.join(sourceDir, sourceFile);
  const outputFilePath = path.join(
    outputDir,
    sourceFile.replace(".scss", ".css")
  );

  const fileDescriptor = fs.openSync(sourceFilePath, "r");
  const scssContent = fs.readFileSync(fileDescriptor, "utf8");
  const wrappedSCSSContent = `.changesClass {\n${scssContent}\n}`;
  // fs.closeSync(fileDescriptor);

  const result = await sass.compileAsync(wrappedSCSSContent, {
    // style: "compressed",
    // sourceMap: true,
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

  // modifiedContent = modifiedContent.replace(
  //   /(^)([.|#|\w])/g,
  //   (match, before, selector) => {
  //     return ".changesClass " + selector;
  //   }
  // );

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
