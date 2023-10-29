const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
// const escapeHtml = require("escape-html");

// Путь к вашему JSX компоненту
const jsxFilePath = path.join(
  __dirname,
  "../../components/RSC/MainScreen16FortunaHtml.jsx"
);
const jsxCode = fs.readFileSync(jsxFilePath, "utf-8");

const transpiledCode = renderJSXToHTML(jsxCode);

// Читайте ваш HTML файл
const htmlFilePath = path.join(__dirname, "../../htmlContent.ejs");
const htmlContent = fs.readFileSync(htmlFilePath, "utf-8");

const updatedHtmlContent = htmlContent.replace(
  "<!-- INSERT_JSX_COMPONENT_HERE -->",
  transpiledCode
);

function renderJSXToHTML(jsx) {
  if (typeof jsx === "string" || typeof jsx === "number") {
    return jsx;
  } else if (jsx == null || typeof jsx === "boolean") {
    return "";
  } else if (Array.isArray(jsx)) {
    return jsx.map((child) => renderJSXToHTML(child)).join("");
  } else if (typeof jsx === "object") {
    if (jsx.$$typeof === Symbol.for("react.element")) {
      if (typeof jsx.type === "string") {
        let html = "<" + jsx.type;
        for (const propName in jsx.props) {
          if (jsx.props.hasOwnProperty(propName) && propName !== "children") {
            html += " ";
            html += propName;
            html += "=";
            html += escapeHtml(jsx.props[propName]);
          }
        }
        html += ">";
        html += renderJSXToHTML(jsx.props.children);
        html += "</" + jsx.type + ">";
        return html;
      } else if (typeof jsx.type === "function") {
        const Component = jsx.type;
        const props = jsx.props;
        const returnedJsx = Component(props);
        return renderJSXToHTML(returnedJsx);
      } else throw new Error("Not implemented.");
    } else throw new Error("Cannot render an object.");
  } else throw new Error("Not implemented.");
}

fs.writeFileSync(htmlFilePath, updatedHtmlContent);
