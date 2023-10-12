// HelmetForCss.jsx
import React, { useEffect, useState } from "react";
import HelmetComponent from "./HelmetComponent.jsx";
import createStyleText from "../scripts/forBild/createStyleText.js";

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

  return (
    <>
      <HelmetComponent>
        {cssFiles.map((cssFile, index) => (
          <style key={index} type="text/css">
            {`.${cssFile} { ${styles[index]} }`}
          </style>
        ))}
      </HelmetComponent>
      <div className={cssFiles.join(" ")}>{children}</div>
    </>
  );
};

export default HelmetForCss;
