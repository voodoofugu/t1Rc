import React from "react";

export default React.memo(function ResCount({
  img,
  value,
  plus,
  onClick,
  className,
}) {
  return (
    <div className={`resCount${className ? ` ${className}` : ""}`}>
      {img && <img className="resIcn" src={img} loading="lazy"></img>}
      <div className={`resValueText${img ? " withImg" : ""}`}>
        {value ? value : 0}
      </div>
      {plus && <div className="resAdd" onClick={onClick && onClick}></div>}
    </div>
  );
});
