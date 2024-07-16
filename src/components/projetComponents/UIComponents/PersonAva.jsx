import React from "react";

export default function PersonAva({
  img,
  condition = "", // "active" | "disabled" | "closed"
  onClick,
}) {
  return (
    <div
      className={`personAva ${condition}
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
