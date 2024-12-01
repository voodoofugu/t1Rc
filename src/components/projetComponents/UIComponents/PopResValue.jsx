import { memo } from "react";
import { nexusDispatch, useNexus } from "nexus-state";

export default memo(function PopResValue({ resClass, resValue, notPlus }) {
  const popupState = useNexus("popupState");

  let click = null;

  if (resClass === "chest") {
    click = () =>
      nexusDispatch({
        type: "handlePopup",
        payload: {
          type: "open",
          data: {
            mpopClass: "m-popup change-addchest",
            popTit: "Купите еще Boss Chests!",
            popCont: "ChangeAddchest",
          },
        },
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
