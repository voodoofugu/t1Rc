import "dotenv/config";
import fs from "fs";
import path from "path";

const {
  FIGMA_TOKEN,
  OUTPUT_DIR,
  FIGMA_API_HOST,
  FIGMA_FILE_KEY,
  TARGET_FRAME_NAME,
  FORMAT,
} = process.env;

interface IconData {
  id: string;
  name: string;
}

interface ImageInfo {
  [key: string]: string;
}

async function getIconIdsAndNamesInFrame(frameName: string) {
  if (!FIGMA_TOKEN) {
    console.error("❓ Переменная окружения FIGMA_TOKEN не установлена");
    return;
  }

  try {
    const response = await fetch(`${FIGMA_API_HOST}/files/${FIGMA_FILE_KEY}`, {
      headers: {
        "X-Figma-Token": FIGMA_TOKEN,
      },
    });
    const data = await response.json();

    if (response.ok) {
      const { document } = data;
      const { children } = document;
      const iconsData: IconData[] = [];

      // Рекурсивная функция для поиска идентификаторов и имен иконок внутри кадра
      function findIconIdsAndNames(node: any): void {
        if (node.name === frameName && node.type === "FRAME") {
          if (node.children) {
            node.children.forEach((child: any) => {
              if (child.type === "COMPONENT") {
                const iconData = {
                  id: child.id,
                  name: child.name,
                };
                iconsData.push(iconData);
              }
            });
          }
        } else if (node.children) {
          node.children.forEach((child: any) => findIconIdsAndNames(child));
        }
      }

      children.forEach((child: any) => findIconIdsAndNames(child));

      console.log("✨ Icon IDs and Names in frame:", iconsData);
      return iconsData;
    } else {
      throw new Error(
        `🚫 Failed to fetch icon ids. Status: ${response.status}`
      );
    }
  } catch (error) {
    console.error("🚫 Error fetching icon ids:", error);
    throw error;
  }
}

async function fetchImageInfo(iconIds: string[]): Promise<ImageInfo> {
  if (!FIGMA_TOKEN) {
    console.error("❓ Переменная окружения FIGMA_TOKEN не установлена");
    return {};
  }

  try {
    const response = await fetch(
      `${FIGMA_API_HOST}/images/${FIGMA_FILE_KEY}?ids=${iconIds.join(
        ","
      )}&format=${FORMAT}`,
      {
        headers: {
          "X-Figma-Token": FIGMA_TOKEN,
        },
      }
    );
    const data = await response.json();

    if (response.ok) {
      return data.images; // Возвращаем объект с данными об изображениях
    } else {
      throw new Error(
        `🚫 Failed to fetch image info. Status: ${response.status}`
      );
    }
  } catch (error) {
    console.error("🚫 Error fetching image info:", error);
    throw error;
  }
}

async function createIcnFiles(
  iconIdsAndNames: IconData[],
  imageInfo: ImageInfo
) {
  if (!OUTPUT_DIR) {
    console.error("❓ Переменная окружения OUTPUT_DIR не установлена");
    return;
  }

  try {
    // Проверяем, существует ли директория OUTPUT_DIR, если нет, создаем ее
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Проходимся по каждой паре идентификатора и имени
    for (const { id, name } of iconIdsAndNames) {
      try {
        // Получаем URL изображения по идентификатору
        const imageUrl = imageInfo[id];
        if (!imageUrl) {
          throw new Error(`❓ Image URL not found for icon ${id}`);
        }

        // Загружаем изображение по URL
        const response = await fetch(imageUrl);
        const imageData = await response.arrayBuffer();

        // Определяем расширение файла на основе формата
        const fileExtension =
          FORMAT === "png"
            ? "png"
            : FORMAT === "jpg"
            ? "jpg"
            : FORMAT === "pdf"
            ? "pdf"
            : "svg";

        // Получаем данные изображения в зависимости от формата
        let imageDataBuffer;
        if (FORMAT === "svg") {
          // Для SVG преобразуем данные в строку
          const svgText = Buffer.from(imageData).toString("utf-8");
          imageDataBuffer = Buffer.from(svgText);
        } else {
          // Для других форматов оставляем данные в бинарном формате
          imageDataBuffer = Buffer.from(imageData);
        }

        // Создаем путь к файлу иконки
        const filePath = path.join(OUTPUT_DIR, `${name}.${fileExtension}`);

        // Записываем данные в файл
        fs.writeFileSync(filePath, imageDataBuffer);

        console.log(`✅ Icon file saved: ${filePath}`);
      } catch (error) {
        console.error(`🚫 Error saving Icon file for icon ${id}:`, error);
      }
    }
  } catch (error) {
    console.error("🚫 Error creating icon files:", error);
    throw error;
  }
}

async function main() {
  if (!TARGET_FRAME_NAME) {
    console.error("❓ Переменная окружения TARGET_FRAME_NAME не установлена");
    return;
  }

  try {
    const iconIdsAndNames = (await getIconIdsAndNamesInFrame(
      TARGET_FRAME_NAME
    )) as IconData[];

    const imageInfo = await fetchImageInfo(
      iconIdsAndNames.map((icon) => icon.id)
    );
    console.log("✨ Image info:", imageInfo);

    await createIcnFiles(iconIdsAndNames, imageInfo);
  } catch (error) {
    console.error("🚫 Main error:", error);
  }
}

main();
