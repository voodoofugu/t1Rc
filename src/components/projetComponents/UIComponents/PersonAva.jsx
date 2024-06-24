import React from "react";

export default function PersonAva({
  img,
  active = "",
  disabled = "",
  closed = "",
  onClick,
}) {
  return (
    <div
      className={`personAva${active && " active"}${disabled && " disabled"}${
        closed && " closed"
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
