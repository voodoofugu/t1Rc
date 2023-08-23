import fs from "fs";
import path from "path";

const pagesDir = path.join(__dirname, "src/pages");
const componentsDir = path.join(__dirname, "src/pagesComponents");
const componentsMapFilename = "AaPagesComponentMap.jsx";
const componentsMapPath = path.join(componentsDir, componentsMapFilename);
const stylesDir = path.join(__dirname, "src/styles");
const stylesMapPath = path.join(__dirname, "src/stylesMap.jsx");
const componDir = path.join(__dirname, "src/components");
const componMapFilename = "AaComponMap.jsx";
const componMapPath = path.join(componDir, componMapFilename);

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function wrapPageWithComponent(pageName: string): string {
  const componentName = `${capitalizeFirstLetter(
    pageName.replace(".html", "")
  )}Component`;

  return `import React from "react";

const ${componentName} = () => {
  return (
    <></>
  );
};

export default React.memo(${componentName});
`;
}

function getStylesImports(): string {
  const stylesFiles = fs.readdirSync(stylesDir);
  const stylesImports = stylesFiles
    .filter((file) => file.endsWith(".scss"))
    .map((file) => `import "styles/${file.replace(".scss", "")}";`);
  return stylesImports.join("\n");
}

function updateStylesMap(): void {
  const stylesImports = getStylesImports();
  const content = `import "../node_modules/normalize.css/normalize.css";\n${stylesImports}\n`;
  fs.writeFileSync(stylesMapPath, content);
  console.log("Updated src/stylesMap.jsx");
}

function generateAaComponMap(): void {
  if (!fs.existsSync(componDir)) {
    fs.mkdirSync(componDir);
    console.log("Created components directory");
  }

  const componentFiles = fs
    .readdirSync(componDir)
    .filter((file) => file.endsWith(".jsx"));

  const componentsMapCode = componentFiles
    .filter((file) => file !== componMapFilename)
    .map((file) => {
      const componentName = path.basename(file, ".jsx");
      return `import ${componentName} from "./${componentName}.jsx";`;
    })
    .join("\n");

  let fullComponentsMapCode = `${componentsMapCode}\n`;

  // Добавляем TemplateComponent только в режиме разработки
  if (process.env.NODE_ENV === "development") {
    fullComponentsMapCode += `
const TemplateComponent = React.lazy(() => import("./TemplateComponent.jsx"));
`;
  }

  fullComponentsMapCode += `
const AaComponMap = {
${componentFiles
  .filter((file) => file !== componMapFilename)
  .map((file) => {
    const componentName = path.basename(file, ".jsx");
    return `    ${componentName},`;
  })
  .join("\n")}
};

export default AaComponMap;`;

  fs.writeFileSync(componMapPath, fullComponentsMapCode);
  console.log("Created or updated AaComponMap.jsx");
}

generateAaComponMap();

const imports: string[] = [];
let existingComponents: string[] = [];
let pagesComponents: string[] = [];

fs.readdir(pagesDir, (err, files) => {
  if (err) {
    console.error("Error reading pages directory:", err);
    return;
  }

  existingComponents = fs
    .readdirSync(componentsDir)
    .map((file) => file.replace(".jsx", ""));

  pagesComponents = files
    .filter((file) => file.endsWith(".html"))
    .map(
      (file) => capitalizeFirstLetter(file.replace(".html", "")) + "Component"
    );

  files.forEach((file) => {
    if (file.endsWith(".html")) {
      const pageName = path.basename(file);
      const componentName = `${capitalizeFirstLetter(
        pageName.replace(".html", "")
      )}Component`;
      const componentPath = path.join(componentsDir, `${componentName}.jsx`);

      if (fs.existsSync(componentPath)) {
        console.log(`Component for ${pageName} already exists. Skipping.`);
      } else {
        const componentCode = wrapPageWithComponent(pageName);

        fs.writeFileSync(componentPath, componentCode);
        console.log(`Created component for ${pageName}`);
      }

      imports.push(
        `const ${componentName} = React.lazy(() => import("./${componentName}.jsx"));`
      );
    }
  });

  const componentsToKeep = ["TemplateComponent"];
  const componentsToDelete = existingComponents.filter(
    (component) =>
      !componentsToKeep.includes(component) &&
      !pagesComponents.includes(component) &&
      component !== componMapFilename
  );

  componentsToDelete.forEach((component) => {
    const componentPath = path.join(componentsDir, `${component}.jsx`);
    fs.unlinkSync(componentPath);
    console.log(`Deleted component ${component}.jsx`);
  });

  const componentsMapCode = `import React from "react";
${imports.join("\n")}

const AaPagesComponentMap = {
    ${pagesComponents
      .map((pageComponent) => {
        return `  ${pageComponent},`;
      })
      .join("\n")}
};

export default AaPagesComponentMap;`;

  fs.writeFileSync(componentsMapPath, componentsMapCode);
  console.log("Created AaPagesComponentMap.jsx");

  updateStylesMap();
});
