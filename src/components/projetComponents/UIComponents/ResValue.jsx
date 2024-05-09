import React from "react";

export default function ResValue({ classProp, value }) {
  return (
    <div className={`resValue ${classProp}`}>
      <div className="value">{value}</div>
      <div className="addBtn">+</div>
    </div>
  );
}
