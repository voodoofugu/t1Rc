import React, { memo } from "react";

export default memo(function ResCount({
  img,
  value,
  plus,
  onClick,
  className,
}) {
  return (
    <div className={`resCount ${className}`}>
      <img className="resIcn" src={img} loading="lazy"></img>
      <div className="resValueText">{value ? value : 0}</div>
      {plus && <div className="resAdd" onClick={onClick && onClick}></div>}
    </div>
  );
});
