import { nexusTrigger } from "nexus-state";

import MorphScroll from "../../../../morphing-scroll/src/components/MorphScroll";
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

        <MorphScroll
          className="rewardsScroll"
          size={[490, 275]}
          objectsSize={[80, 80]}
          gap={12}
          wrapperMargin={[5, 0]}
          progressTrigger={{ wheel: true, progressElement: <ScrollThumb /> }}
          progressElement={<ScrollThumb />}
          elementsAlign={"center"}
          wrapperAlign={["center", "center"]}
        >
          {rewardsData.map((item, index) => (
            <ItemBox key={index} {...item} />
          ))}
        </MorphScroll>

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
