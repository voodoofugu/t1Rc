// эта функция принимает в себя массив названий файлов стиля и генерирует на их основе stylePairs состоящую из stylesFileName и pageStyles
// которые мы передаём в файлах стиля, это делается для удобного импорта класса стиля (для изоляции их) и для создания style тега со стилями
export function generateStylePairs(styleFileNames) {
  return styleFileNames.map((stylesFileName) => {
    const styles = require(`../../styleComponents/${stylesFileName}`);
    return {
      stylesFileName: styles.stylesFileName,
      pageStyles: styles.pageStyles,
    };
  });
}
