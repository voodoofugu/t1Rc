import { nexusDispatch, useNexus } from "nexus-state";

import Scroll from "../../../../morphing-scroll/src/MorphingScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ImageBg from "../UIComponents/ImageBg";
import Button from "../UIComponents/Button";

export default function InfoPopFramed({ inner, girlImg }) {
  const popupState = useNexus("popupState");

  return (
    <>
      <div className="closeBG" onClick={() => popupState.popClose()}></div>
      <div className="content">
        <div className="popupFrame">
          <div className="frame top"></div>
          <div className="frame bottom"></div>
        </div>
        <Scroll
          scrollXY={[700, 342]}
          padding={[0, 20]}
          progressTrigger={["wheel", "progressElement"]}
          thumbElement={<ScrollThumb />}
          progressBarSize={8}
          wrapAlignCenter
        >
          <div className="inner">{inner}</div>
        </Scroll>

        <Button
          className="exit"
          text="✖"
          onClick={() => popupState.popClose()}
        />
      </div>

      <ImageBg className="girlImg infoGirl" img={girlImg} />
    </>
  );
}
