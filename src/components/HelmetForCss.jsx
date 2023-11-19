import React, { useEffect, useState } from "react";
import HelmetComponent from "./HelmetComponent.jsx";
import createStyleText from "../scripts/forClient/createStyleText.js";
import transformCssFileNames from "../scripts/forClient/transformCssFileNames.js";
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

export default function HelmetForCss({ cssFiles, children }) {
  const [styles, setStyles] = useState(null);
  const [loadedStyleCount, setLoadedStyleCount] = useState(0);
  const { stylesLoaded, setStylesLoaded } = useStylesLoaded(false);
  const modifiedCssFileNames = transformCssFileNames(cssFiles);

  useEffect(() => {
    importStyles(cssFiles)
      .then((cssTextArray) => {
        setStyles(cssTextArray);
        setLoadedStyleCount((prevCount) => prevCount + 1);
        setStylesLoaded(true);
      })
      .catch((error) => {
        console.error(error);
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
        {!stylesLoaded && loadedStyleCount < 1 ? <Loading /> : children}
      </div>
    </>
  );
}
