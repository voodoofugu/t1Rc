import React from "react";
import { selectors } from "../../templateComponents/GlobalStateStor";

export default function PersonAva({
  img,
  condition = "", // "active" | "disabled" | "closed"
  index,
  onClick,
}) {
  const dateGirlIndex = selectors.useDateGirlIndex();

  return (
    <div
      className={`personAva ${index === dateGirlIndex ? "active" : condition}
    }`}
      onClick={onClick}
    >
      <div className="avaBg">
        <div className="avaBgExtra"></div>
      </div>
      <div className="imgWrap">
        <img src={img} loading="lazy" alt="ava" />
      </div>
    </div>
  );
}
