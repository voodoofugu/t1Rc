import React from "react";

export default function TowerTrophy() {
  return (
    <>
      <div className="color-box"></div>
      <div className="tower-trophy-bg-all">
        <div className="tower-trophy-pic">
          <img src="img/trophy/v2-trophy-dragon-head-c.png" loading="lazy" />
        </div>
        <div className="tower-trophy-prgbar-empty">
          <div
            className="tower-trophy-prgbar-full"
            style={{ width: "80%" }}
          ></div>
        </div>
      </div>
    </>
  );
}
