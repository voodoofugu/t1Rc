import { memo } from "react";
import spriteData from "../../../img/figmaSVG/sprite";

const SVGIcon = ({ svgID }) => {
  const iconData = spriteData.find((icon) => icon.id === svgID);

  if (!iconData) {
    console.warn(`Иконка ID "${svgID}" не найдена`);
    return null;
  }

  const { width, height, viewBox, path } = iconData;

  return (
    <div
      className={`svgIcon ${svgID}`}
      style={{ width: "32px", height: "32px" }}
    >
      <svg viewBox={viewBox}>
        <path d={path} />
      </svg>
    </div>
  );
};

export default memo(SVGIcon);
