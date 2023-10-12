const sass = require("sass");
const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

const sourceDir = "./src/styles/scss";
const outputDir = "./src/styles/css";

// механика

function compileSCSSFile(sourceFile) {
  const sourceFilePath = path.join(sourceDir, sourceFile);
  const outputFilePath = path.join(
    outputDir,
    sourceFile.replace(".scss", ".css")
  );

  const result = sass.renderSync({ file: sourceFilePath });
  let cssContent = result.css.toString();

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

  cssContent = cssContent.replace(/\s+/g, " ");
  cssContent = cssContent.replace(/\n/g, "");
  cssContent = cssContent.replace(/\r/g, "");
  cssContent = cssContent.replace(/\t/g, "");

  fs.writeFileSync(outputFilePath, cssContent);
  console.log(
    `File "${outputFilePath}" compiled, URLs updated, and minimized.`
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
