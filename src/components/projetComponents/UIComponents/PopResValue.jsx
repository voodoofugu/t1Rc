import { memo } from "react";

import {
  selectors,
  useDispatch,
} from "../../templateComponents/GlobalStateStor";

export default memo(function PopResValue({ resClass, resValue, notPlus }) {
  const popupState = selectors.usePopupState();
  const dispatch = useDispatch();

  let click = null;

  if (resClass === "chest") {
    click = () =>
      popupState.popOpen(dispatch, {
        mpopClass: "m-popup change-addchest",
        popTit: "Купите еще Boss Chests!",
        popCont: ["ChangeAddchest"],
      });
  }

  return (
    <div className={`res-value ${resClass}`}>
      {resValue}
      {!notPlus && (
        <div className="res-value-btn-add" onClick={click}>
          +
        </div>
      )}
    </div>
  );
});
