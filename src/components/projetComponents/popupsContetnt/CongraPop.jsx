import { nexusTrigger } from "nexus-state";

import Scroll from "../../../../morphing-scroll/src/MorphingScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ImageBg from "../UIComponents/ImageBg";
import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import FraimedTitle from "../UIComponents/FraimedTitle";

export default function CongraPop({ rewardsData }) {
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

        <FraimedTitle className="cornersTop" text="Congratulations" />

        <Scroll
          className="rewardsScroll"
          scrollXY={[490, 275]}
          objectXY={[80, 80]}
          gap={12}
          padding={[5, 0]}
          progressTrigger={["wheel", "progressElement"]}
          thumbElement={<ScrollThumb />}
          progressBarSize={8}
          contentAlignCenter
          wrapAlignCenter
        >
          {rewardsData.map((item, index) => (
            <ItemBox key={index} {...item} />
          ))}
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
    </>
  );
}
