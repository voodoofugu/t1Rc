const fs = require("fs");
const path = require("path");

const pagesDir = path.join(__dirname, "src/pages");

const htmlPages = fs
    .readdirSync(pagesDir)
    .filter((file) => file.endsWith(".html"));

function generateComponentName(pageName) {
    const cleanedName =
        pageName
            .replace(".html", "")
            .replace(/[-_](\w)/g, (_, letter) => letter.toUpperCase())
            .replace(/^\w/, (c) => c.toUpperCase()) + "Component";
    return cleanedName;
}

const formattedPageNames = htmlPages.map((page) => generateComponentName(page));

console.log(formattedPageNames); // Выводим массив имен файлов в терминал
