import React from "react";
import nexus from "nexus";

function isLeftOrRightHalf(elementRef) {
  if (!elementRef) return null;

  const rect = elementRef.getBoundingClientRect();
  const elementCenterX = rect.left + rect.width / 2;
  const screenCenterX = window.innerWidth / 2;

  return elementCenterX < screenCenterX ? "" : "left";
}

function mapCellSelectHandler(mapCellRef, index, type) {
  document.querySelectorAll(".fw-map-claim-box").forEach((el) => {
    el.classList.remove("selected");
  });
  mapCellRef.classList.toggle("selected");
  nexus.set({
    warpop: {
      key: index,
      visible: true,
      tit: `Cell on the Map ${index + 1}`,
      className: `cell_${index + 1} ${isLeftOrRightHalf(mapCellRef)}`,
      type: type,
    },
  });
}

function MapCell({
  className,
  index,
  fraction,
  type,
  iconFr,
  iconSword,
  iconShield,
  iconRiot,
  img,
  children,
}) {
  const warpop = nexus.use("warpop");

  const mapCellRef = React.useRef(null);

  if (mapCellRef.current && !warpop?.visible) {
    mapCellRef.current.classList?.remove("selected");
  }

  return (
    <>
      <div
        className={`fw-map-claim-box${
          className ? ` ${className}` : ""
        }${` fr${fraction}`}${type ? ` type-${type}` : " type-0"}`}
        onClick={() => {
          mapCellSelectHandler(mapCellRef.current, index, type);
        }}
        ref={mapCellRef}
      >
        {img && (
          <div className="imgWrap">
            <img src={img} loading="lazy" alt="Cell Image" />
          </div>
        )}
        {iconShield && (
          <div className="fw-icon-ws">
            <img src="img/v2-fw-icon-w1.png" loading="lazy" alt="Icon" />
          </div>
        )}
        {iconFr.length > 0 && (
          <div className="fw-icon-fr cw">
            <img className="bg" src={iconFr[0]} alt="Background Icon" />
            {iconFr[1] && (
              <img className="fg" src={iconFr[1]} alt="Foreground Icon" />
            )}
          </div>
        )}
        {iconRiot && (
          <div className="fw-icon-riot">
            <img src="img/v2-fw-icon-w4.png" loading="lazy" alt="Icon" />
          </div>
        )}
        {iconSword && (
          <div className="fw-icon-sword">
            <img src="img/v2-fw-icon-w3.png" loading="lazy" alt="Icon" />
          </div>
        )}
      </div>
    </>
  );
}

export default MapCell;
