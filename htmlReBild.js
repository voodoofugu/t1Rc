const fs = require("fs");
const path = require("path");

const folderPath = "./titans_rc/htmlOld";

function processFile(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const updatedContent = fileContent
    .replace(/href="rc\//g, 'href="../styles/css/')
    .replace(/titans_rc="js\//g, 'titans_rc="../scripts/FapTitansScripts/');

  fs.writeFileSync(filePath, updatedContent, "utf-8");
}

function processFilesInFolder(folderPath) {
  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processFilesInFolder(filePath);
    } else if (path.extname(filePath) === ".html") {
      processFile(filePath);
      console.log(`Processed: ${filePath}`);
    }
  });
}

processFilesInFolder(folderPath);
