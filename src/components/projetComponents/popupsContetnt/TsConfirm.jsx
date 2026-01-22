import React, { memo } from "react";
import nexus from "nexus";

export default memo(function TsConfirm() {
  const popupState = nexus.use("popupState");

  return (
    <>
      <div className="color-box"></div>
      <div className="content sale ts_confirm">
        <div className="timer">
          <div className="clock"></div>
          <div className="time">24h 00m</div>
        </div>
        <div className="rewards">
          <div className="reward gold">
            <div className="text">1.31SD15</div>
          </div>
        </div>
      </div>
      <div
        className="btn-simple-green btn-ok"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      >
        Ок
      </div>
    </>
  );
});
