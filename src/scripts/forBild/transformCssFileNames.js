// Функция для преобразования названий CSS-файлов в верблюжий стиль
function transformCssFileNames(str) {
  return str.map((str) => {
    str = str.replace(/^\d+/, "");
    str = str.replace(/[-_]\w/g, (match) => match.charAt(1).toUpperCase());
    str = str.charAt(0).toLowerCase() + str.slice(1);
    return str;
  });
}

module.exports = transformCssFileNames;

// export default function transformCssFileNames(str) {
//   return str.map((str) => {
//     str = str.replace(/^\d+/, "");
//     str = str.replace(/[-_]\w/g, (match) => match.charAt(1).toUpperCase());
//     str = str.charAt(0).toLowerCase() + str.slice(1);
//     return str;
//   });
// }
