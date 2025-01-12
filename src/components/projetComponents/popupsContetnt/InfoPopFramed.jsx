import { nexusTrigger, useNexus } from "nexus-state";

import Scroll from "../../../../morphing-scroll/src/MorphingScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ImageBg from "../UIComponents/ImageBg";
import Button from "../UIComponents/Button";

export default function InfoPopFramed({ inner, girlImg }) {
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
        <Scroll
          scrollXY={[700, 342]}
          objectXY={["none", "none"]}
          padding={[0, 20]}
          progressTrigger={["wheel", "progressElement"]}
          thumbElement={<ScrollThumb />}
          progressBarSize={8}
          contentAlign={["center", "center"]}
        >
          <div className="inner">{inner}</div>
        </Scroll>

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

      <ImageBg className="girlImg infoGirl" img={girlImg} />
    </>
  );
}
