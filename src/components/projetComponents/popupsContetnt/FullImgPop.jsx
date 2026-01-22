import nexus from "nexus";

import Button from "../UIComponents/Button";

export default function FullImgPop() {
  const popupState = nexus.use("popupState");

  const img = popupState.img;
  return (
    <>
      <div
        className="closeBG"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      ></div>

      <div className="content fullImgPop">
        <div className="pic-wrap">
          <img className="pic" src={img} loading="lazy" />
        </div>

        <Button
          className="exit"
          text="✖"
          onClick={() => nexus.acts.handlePopup({ type: "close" })}
        />
      </div>
    </>
  );
}
