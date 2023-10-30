// эта функция при вызыве выдаёт названия того файла в котором она вызвана
export default function foundFileName() {
  const stackTrace = new Error().stack;
  const callerLine = stackTrace.split("\n")[2];
  const matches = callerLine.match(/\/([^/]+)\.[^/]+$/);

  if (matches && matches.length > 1) {
    return matches[1];
  }

  return "defaultFileName";
}

// ещё проще способ сделать это, но с библиотекой
// import path from "path-browserify";
// const аileName = path.basename(import.meta.url).replace(".jsx", "");
