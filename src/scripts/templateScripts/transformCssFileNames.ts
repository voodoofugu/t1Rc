// Функция для преобразования названий CSS-файлов в верблюжий стиль
export default function transformCssFileNames(arr: string[]) {
  return arr.map((item) => {
    let transformed = item.replace(/^\d+/, "");
    transformed = transformed.replace(/[-_]\w/g, (match) =>
      match.charAt(1).toUpperCase()
    );
    transformed = transformed.charAt(0).toLowerCase() + transformed.slice(1);
    return transformed;
  });
}
