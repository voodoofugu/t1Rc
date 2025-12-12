import { nexusTrigger, useNexus } from "nexus-state";

import Button from "../UIComponents/Button";

export default function FullImgPop() {
  const popupState = useNexus("popupState");

  const img = popupState.img;
  return (
    <>
      <div
        className="closeBG"
        onClick={() =>
          nexusTrigger({
            type: "handlePopup",
            payload: { type: "close" },
          })
        }
      ></div>

      <div className="content fullImgPop">
        <div className="pic-wrap">
          <img className="pic" src={img} loading="lazy" />
        </div>

        <Button
          className="exit"
          text="✖"
          onClick={() =>
            nexusTrigger({
              type: "handlePopup",
              payload: { type: "close" },
            })
          }
        />
      </div>
    </>
  );
}
