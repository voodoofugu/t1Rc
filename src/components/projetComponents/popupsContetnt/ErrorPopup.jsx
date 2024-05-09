import React, { memo } from "react";

import {
  selectors,
  useDispatch,
} from "../../templateComponents/GlobalStateStor";

export default memo(function ErrorPopup() {
  const popupState = selectors.usePopupState();
  const dispatch = useDispatch();

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
        onClick={() => popupState.popClose(dispatch)}
      >
        Ок
      </div>
    </>
  );
});
