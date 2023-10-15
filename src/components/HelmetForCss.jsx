import React, { useEffect, useState } from "react";
import HelmetComponent from "./HelmetComponent.jsx";
import createStyleText from "../scripts/forBild/createStyleText.js";

function transformCssFiles(str) {
  return str.map((str) => {
    str = str.replace(/^\d+/, "");
    str = str.replace(/[-_]\w/g, (match) => match.charAt(1).toUpperCase());
    str = str.charAt(0).toLowerCase() + str.slice(1);
    return str;
  });
}

const HelmetForCss = ({ cssFiles, children }) => {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    // Создаем текст стилей с помощью функции createStyleText
    createStyleText(cssFiles)
      .then((cssTextArray) => {
        setStyles(cssTextArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cssFiles]);

  const modifiedCssFiles = transformCssFiles(cssFiles);
  // const modifiedCssFilesWithDot = modifiedCssFiles.map(
  //   (cssFile) => ` .${cssFile}`
  // );

  return (
    <>
      <HelmetComponent>
        {modifiedCssFiles.map((cssFile, index) => (
          <style key={index} type="text/css">
            {`.${cssFile} { ${styles[index]} }`}
          </style>
        ))}
      </HelmetComponent>
      <div className={`likeBody ${modifiedCssFiles.join(" ")}`}>{children}</div>
    </>
  );
};

export default HelmetForCss;
