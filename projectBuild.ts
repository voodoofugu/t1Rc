import fs from "fs";
import path from "path";

const pagesDir = path.join(__dirname, "src/pages");
const componentsDir = path.join(__dirname, "src/pagesComponents");
const componentsMapFilename = "AaPagesComponentMap.jsx";
const componentsMapPath = path.join(componentsDir, componentsMapFilename);
const componDir = path.join(__dirname, "src/components");
const componMapFilename = "AaComponMap.jsx";
const componMapPath = path.join(componDir, componMapFilename);

const htmlPages = fs
    .readdirSync(pagesDir)
    .filter((file) => file.endsWith(".html"));

function generateComponentName(pageName: string): string {
    const cleanedName =
        pageName
            .replace(".html", "")
            .replace(/[-_](\w)/g, (_, letter) => letter.toUpperCase())
            .replace(/^\w/, (c) => c.toUpperCase()) + "Component";
    return cleanedName;
}

const formattedPageNames = htmlPages.map((page) => generateComponentName(page));

const imports: string[] = [];
let existingComponents: string[] = [];

function wrapPageWithComponent(componentName: string): string {
    return `import React from "react";
import styles from "../styles/${componentName}.scss";

const ${componentName} = () => {
    return (
        <></>
    );
};

export default React.memo(${componentName});
`;
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

formattedPageNames.forEach((componentName, index) => {
    const page = htmlPages[index];
    const componentPath = path.join(componentsDir, `${componentName}.jsx`);

    if (fs.existsSync(componentPath)) {
        console.log(`Component for ${page} already exists. Skipping.`);
    } else {
        const componentCode = wrapPageWithComponent(componentName);

        fs.writeFileSync(componentPath, componentCode);
        console.log(`Created component for ${page}`);
    }

    imports.push(
        `const ${componentName} = React.lazy(() => import("./${componentName}.jsx"));`
    );
});

const componentsToKeep = ["TemplateComponent"];
const componentsToDelete = existingComponents.filter(
    (component) =>
        !componentsToKeep.includes(component) &&
        !formattedPageNames.includes(component) &&
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
    ${formattedPageNames
        .map((pageComponent) => {
            const importName = generateComponentName(pageComponent);
            return `  ${importName.replace(
                "ComponentComponent",
                "Component"
            )},`;
        })
        .join("\n")}
};

export default AaPagesComponentMap;`;

fs.writeFileSync(componentsMapPath, componentsMapCode);
console.log("Created AaPagesComponentMap.jsx");
