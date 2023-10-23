import React, { useEffect, useState } from "react";
import HelmetComponent from "./HelmetComponent.jsx";
import createStyleText from "../scripts/forBild/createStyleText.js";
import transformCssFileNames from "../scripts/forBild/transformCssFileNames.js";

const HelmetForCss = ({ cssFiles, children }) => {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    // Загружаем стили асинхронно
    importStyles(cssFiles)
      .then((cssTextArray) => {
        setStyles(cssTextArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cssFiles]);

  const modifiedCssFileNames = transformCssFileNames(cssFiles);

  return (
    <>
      <HelmetComponent>
        {modifiedCssFileNames.map((cssFile, index) => (
          <style key={index} type="text/css">
            {` ${styles[index]} `}
          </style>
        ))}
      </HelmetComponent>
      <div className={`likeBody ${modifiedCssFileNames.join(" ")}`}>
        {children}
      </div>
    </>
  );
};

const importStyles = async (cssFiles) => {
  try {
    const cssTextArray = await createStyleText(cssFiles);
    return cssTextArray;
  } catch (error) {
    throw error;
  }
};

export default HelmetForCss;
