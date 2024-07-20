import React from "react";
import { selectors } from "../../templateComponents/GlobalStateStor";

export default function PersonAva({ img, className, onClick }) {
  return (
    <div
      className={`personAva ${className ? className : ""}`}
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
