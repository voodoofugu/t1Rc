// styles-rsc.js
import { Helmet } from "react-helmet-async";

export default function StylesRSC({ cssFiles }) {
  const styles = cssFiles.map((cssFile, index) => {
    // Динамический импорт стиля
    const importedStyle = import(`../../styles/css/${cssFile}.css`);
    return (
      <style key={index} type="text/css">
        {importedStyle.default || ""}
      </style>
    );
  });

  return <Helmet>{styles}</Helmet>;
}
