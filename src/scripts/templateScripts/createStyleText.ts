export default async function createStyleText(
  cssFiles: string[],
  pathFiles?: string
) {
  try {
    if (!cssFiles || !Array.isArray(cssFiles)) {
      throw new Error("Invalid or missing cssFiles");
    }

    const cssTextArray = await Promise.all(
      cssFiles.map(async (cssFile) => {
        const importedStyle = await import(
          pathFiles
            ? `${pathFiles}/${cssFile}.css`
            : `../../styles/css/${cssFile}.css`
        );

        if (importedStyle.default) {
          return importedStyle.default;
        }

        throw new Error(`Ошибка загрузки файла ${cssFile}`);
      })
    );

    return cssTextArray;
  } catch (error) {
    console.error(error);
    return [];
  }
}
