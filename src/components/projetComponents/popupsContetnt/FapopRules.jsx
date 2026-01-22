import React, { memo } from "react";
import nexus from "nexus";

export default memo(function FapopRules() {
  const popupState = nexus.use("popupState");

  return (
    <>
      <div className="fapop-rules-content">
        <div className="fapop-rules-box">
          <div className="fapop-rules-text">
            <div>1. You can get event tokens in Fapopoly event.</div>
            <div>2. Event tokens increase your level of battle pass.</div>
            <div>
              3. Once you have reached the next level of the battle pass, you
              can receive a reward in the battle pass window.
            </div>
          </div>
        </div>
      </div>
      <div className="color-btn">
        <div
          className="color-btn-text"
          onClick={() => nexus.acts.handlePopup({ type: "close" })}
        >
          закрыть
        </div>
      </div>
    </>
  );
});
