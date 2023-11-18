// Функция для создания текста стилей из CSS файлов
async function createStyleText(cssFiles) {
  try {
    const cssTextArray = await Promise.all(
      cssFiles.map(async (cssFile) => {
        // Динамический импорт стиля
        const importedStyle = await import(`../../styles/css/${cssFile}.css`);

        if (importedStyle.default) {
          return importedStyle.default;
        }

        throw new Error(`Ошибка загрузки файла ${cssFile}`);
      })
    );

    return cssTextArray;
  } catch (error) {
    console.error(error);
    return []; // Вернуть пустой массив в случае ошибки
  }
}

export default createStyleText;
