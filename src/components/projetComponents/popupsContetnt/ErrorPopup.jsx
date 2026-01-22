import React, { memo } from "react";
import nexus from "nexus";

export default memo(function ErrorPopup() {
  const popupState = nexus.use("popupState");

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
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      >
        Ок
      </div>
    </>
  );
});
