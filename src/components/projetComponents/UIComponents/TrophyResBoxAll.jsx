import React from "react";

export default function TrophyResBoxAll({
  class1,
  class2,
  onClick1,
  onClick2,
}) {
  return (
    <div className="trophy-res-box-all">
      <div className={`trophy-res-box ${class1}`}>
        <div className="trophy-value">6969К</div>
        {onClick1 ? (
          <div className="trophy-value-btn-add" onClick={onClick1}></div>
        ) : (
          ""
        )}
      </div>
      <div className={`trophy-res-box ${class2}`}>
        <div className="trophy-value">6969К</div>
        {onClick1 ? (
          <div className="trophy-value-btn-add" onClick={onClick2}></div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
