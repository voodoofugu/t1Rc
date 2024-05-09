import "dotenv/config";

import fs from "fs";
import pathModule from "path";

const { OUTPUT_DIR, JSON_NAME } = process.env;

interface Icon {
  id: string;
  viewBox: string;
  path: string;
}

function createJSON() {
  const icons: Icon[] = [];

  fs.readdir(OUTPUT_DIR, (err, files) => {
    if (err) {
      console.error("❓ Ошибка чтения директории:", err);
      return;
    }

    files.forEach((file) => {
      if (pathModule.extname(file) !== ".svg") {
        return;
      }

      const iconName = pathModule.basename(file, ".svg");
      const filePath = pathModule.join(OUTPUT_DIR, file);
      const svgContent = fs.readFileSync(filePath, "utf8");

      // Парсим viewBox из SVG
      const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
      const viewBox = viewBoxMatch ? viewBoxMatch[1] : "";

      // Парсим путь из SVG
      const pathMatch = svgContent.match(/<path[^>]* d="([^"]+)"/);
      const path = pathMatch ? pathMatch[1] : "";

      console.log("✅ Добавляем иконку:", iconName);
      icons.push({ id: iconName, viewBox, path });
    });

    const spriteJson = JSON.stringify(icons, null, 0); // минификация JSON

    fs.writeFile(
      pathModule.join(OUTPUT_DIR, `${JSON_NAME}`),
      spriteJson,
      (err) => {
        if (err) {
          console.error("🚫 Ошибка записи файла:", err);
          return;
        }
        console.log("✨ JSON-спрайт", `${JSON_NAME}`, "успешно создан");
      }
    );
  });
}

createJSON();
