import { useEffect, useState, memo, startTransition } from "react";
import { Helmet } from "react-helmet-async";
import createStyleText from "../../scripts/templateScripts/createStyleText";

export default memo(function HelmetForCss({ cssFiles, setStylesLoaded }) {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const cssTextArray = await createStyleText(cssFiles);
        startTransition(() => {
          setStyles(cssTextArray);
          // setStylesLoaded(true);
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (cssFiles) {
      fetchStyles();
    }
  }, [cssFiles, setStylesLoaded]);

  useEffect(() => {
    if (styles.length === cssFiles.length) {
      setTimeout(() => setStylesLoaded(true), 100);
    }
  }, [styles]);

  return (
    <Helmet>
      {cssFiles &&
        styles &&
        cssFiles.map((cssFile, index) => (
          <style sourceName={cssFile} key={cssFile} type="text/css">
            {` ${styles[index] || ""} `}
          </style>
        ))}
    </Helmet>
  );
});
