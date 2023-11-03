import React, { useEffect, useState } from "react";
import HelmetComponent from "./HelmetComponent.jsx";
import createStyleText from "../scripts/forBild/createStyleText.js";
import transformCssFileNames from "../scripts/forBild/transformCssFileNames.js";
import { useStylesLoaded } from "./StylesLoadedProvider";
import Loading from "./Loading.jsx";

const importStyles = async (cssFiles) => {
  try {
    const cssTextArray = await createStyleText(cssFiles);
    return cssTextArray;
  } catch (error) {
    console.error(error);
    return [];
  }
};

function HelmetForCss({ cssFiles, children }) {
  const [styles, setStyles] = useState(null);
  const [loadedStyleCount, setLoadedStyleCount] = useState(0);
  const { stylesLoaded, setStylesLoaded } = useStylesLoaded();
  const modifiedCssFileNames = transformCssFileNames(cssFiles);

  function setStylesLoadedTrue() {
    setStylesLoaded(true);
  }

  useEffect(() => {
    importStyles(cssFiles)
      .then((cssTextArray) => {
        setStyles(cssTextArray);
        setLoadedStyleCount((prevCount) => prevCount + 1);

        // if (loadedStyleCount === cssFiles.length - 1) {
        //   setStylesLoaded(true); // Установите stylesLoaded в true после загрузки всех стилей
        // }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cssFiles, setStylesLoaded]);

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
        {!stylesLoaded && loadedStyleCount < cssFiles.length ? (
          <Loading />
        ) : (
          (setStylesLoadedTrue(), children)
        )}
      </div>
    </>
  );
}

export default React.memo(HelmetForCss);
