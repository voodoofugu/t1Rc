import fs from "fs";
import glob from "glob";

const scssFiles = glob.sync("./src/styles/*.scss"); // Путь к вашим SCSS файлам
const styleComponentsDir = "./src/styleComponents/"; // Путь к папке для стилизованных компонентов
const mapFilePath = `${styleComponentsDir}AaStyleComponentsMap.jsx`; // Путь к файлу AaStyleComponentsMap.jsx
const styleComponentMap: Record<string, string> = {}; // Объект для хранения импортов и экспорта

scssFiles.forEach((scssFile) => {
  const fileName = scssFile.split("/").pop() || ""; // Извлечь имя файла без пути
  const componentName = fileName
    .replace(".scss", "")
    .replace(/^[0-9]{1,2}/, "")
    .replace(/[-_](\w)/g, (_, letter) => letter.toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase());

  const scssContent = fs.readFileSync(scssFile, "utf8");

  // Создать содержимое для компонента
  const componentContent = `
import styled from "styled-components";

const ${componentName} = styled.div\`
  ${scssContent}
\`;

export default ${componentName};
`;

  // Записать компонент в файл
  fs.writeFileSync(
    `${styleComponentsDir}${componentName}.jsx`,
    componentContent
  );

  // Добавить компонент в объект
  styleComponentMap[componentName] = componentName;
});

// Создать содержимое для AaStyleComponentsMap.jsx
const mapContent = `${Object.keys(styleComponentMap)
  .map((component) => `import ${component} from "./${component}";`)
  .join("\n")}

const AaStyleComponentsMap = {
  ${Object.keys(styleComponentMap).join(",\n  ")}
};

export default AaStyleComponentsMap;
`;

// Записать AaStyleComponentsMap.jsx
fs.writeFileSync(mapFilePath, mapContent);
