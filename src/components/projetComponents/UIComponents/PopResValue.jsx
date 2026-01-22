import { memo } from "react";
import nexus from "nexus";

export default memo(function PopResValue({ resClass, resValue, notPlus }) {
  const popupState = nexus.use("popupState");

  let click = null;

  if (resClass === "chest") {
    click = () =>
      nexus.acts.handlePopup({
        type: "open",
        data: {
          mpopClass: "m-popup change-addchest",
          popTit: "Купите еще Boss Chests!",
          popCont: "ChangeAddchest",
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
