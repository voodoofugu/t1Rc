import React, { useEffect, useState } from "react";
import HelmetComponent from "./HelmetComponent.jsx";
import createStyleText from "../scripts/forBild/createStyleText.js";
import transformCssFileNames from "../scripts/forBild/transformCssFileNames.js";
import Loading from "./Loading.jsx";

const importStyles = async (cssFiles) => {
  try {
    const cssTextArray = await createStyleText(cssFiles);
    return cssTextArray;
  } catch (error) {
    console.error(error); // Обработка ошибки, можно дополнительно улучшить
    return []; // Вернуть пустой массив или другое значение по умолчанию
  }
};

function HelmetForCss({ cssFiles, children }) {
  const [styles, setStyles] = useState(null);
  const [stylesLoaded, setStylesLoaded] = useState(false);
  const modifiedCssFileNames = transformCssFileNames(cssFiles);

  useEffect(() => {
    importStyles(cssFiles)
      .then((cssTextArray) => {
        setStyles(cssTextArray);
        setStylesLoaded(true);
      })
      .catch((error) => {
        console.error(error); // Обработка ошибки
      });
  }, [cssFiles]);

  return (
    <>
      <HelmetComponent>
        {modifiedCssFileNames.map((cssFile, index) => (
          <style sourceName={cssFile} key={cssFile} type="text/css">
            {` ${styles ? styles[index] : ""} `}
          </style>
        ))}
      </HelmetComponent>
      <div className={`likeBody ${modifiedCssFileNames.join(" ")}`}>
        {!stylesLoaded ? <Loading /> : children}
      </div>
    </>
  );
}

export default React.memo(HelmetForCss);
