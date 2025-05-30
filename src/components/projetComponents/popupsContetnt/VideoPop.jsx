import { nexusTrigger, useNexus } from "nexus-state";

import Button from "../UIComponents/Button";

export default function VideoPop({ content }) {
  const popupState = useNexus("popupState");

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

      <div className="content">
        <div className="popupFrame">
          <div className="frame top"></div>
          <div className="frame bottom"></div>
        </div>
        {content}

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
