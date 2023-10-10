// createStyleText.js

// Функция для создания текста стилей из CSS файлов
async function createStyleText(cssFiles) {
  try {
    const cssTextArray = await Promise.all(
      cssFiles.map(async (cssFile) => {
        const response = await fetch(`css/${cssFile}.css`);

        if (!response.ok) {
          throw new Error(`Ошибка загрузки файла ${cssFile}`);
        }

        return await response.text();
      })
    );

    return cssTextArray;
  } catch (error) {
    console.error(error);
    return []; // Вернуть пустой массив в случае ошибки
  }
}

export default createStyleText;
