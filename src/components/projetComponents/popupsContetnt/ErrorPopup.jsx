import React, { memo } from "react";
import { nexusDispatch, useNexus } from "nexus-state";

export default memo(function ErrorPopup() {
  const popupState = useNexus("popupState");

  return (
    <>
      <div className="color-box"></div>
      <div className="content">
        <div className="error-text">
          <p>Oops, our bad! An error occurred.</p>
          <p>Please refresh the page to come back to your hotties.</p>
        </div>
      </div>
      <div
        className="btn-simple-gold btn-ok"
        onClick={() => popupState.popClose()}
      >
        Ок
      </div>
    </>
  );
});
