import React, { memo } from "react";
import { nexusDispatch, useNexus } from "nexus-state";

export default memo(function TsConfirm() {
  const popupState = useNexus("popupState");

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
        onClick={() => popupState.popClose(nexusDispatch)}
      >
        Ок
      </div>
    </>
  );
});
