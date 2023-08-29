const fs = require("fs");

// Путь к папке с HTML-файлами
const folderPath = "./src/pagesComponents";

fs.readdirSync(folderPath).forEach((file) => {
    if (file.endsWith(".jsx")) {
        const filePath = `${folderPath}/${file}`;
        let content = fs.readFileSync(filePath, "utf-8");

        // Используем регулярное выражение для замены style="..." на style={{ ... }}
        content = content.replace(/style="([^"]*)"/g, (_, styleString) => {
            const styleObject = styleString.split(";").reduce((acc, pair) => {
                const [property, value] = pair
                    .split(":")
                    .map((part) => part.trim());
                if (property && value) {
                    acc[property] = value;
                }
                return acc;
            }, {});
            return `style={${JSON.stringify(styleObject)}}`;
        });

        fs.writeFileSync(filePath, content, "utf-8");
        console.log(`Updated styles in ${file}`);
    }
});

console.log("Conversion completed successfully!");
