import React, { memo } from "react";
import { nexusDispatch, useNexus } from "nexus-state";

export default memo(function FapopRules() {
  const popupState = useNexus("popupState");

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
        <div className="color-btn-text" onClick={() => popupState.popClose()}>
          закрыть
        </div>
      </div>
    </>
  );
});
