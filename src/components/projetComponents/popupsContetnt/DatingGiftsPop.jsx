import { useNexus, nexusTrigger } from "nexus-state";

import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import ResCount from "../UIComponents/ResCount";
import OfferCardBox from "../UIComponents/OfferCardBox";

export default function DaitingGiftsPop({ girleID }) {
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
        <OfferCardBox
          className="oneItem"
          btnWrap={<Button className="green big" text="Open" />}
        >
          <ItemBox itemClass="wh200" itemPic="img/dating/giftsIcn.png" />
          <ResCount value="234" />
        </OfferCardBox>

        <OfferCardBox
          title="Any Pack"
          rewardCard={
            <ItemBox
              itemClass="cardAvaX2"
              itemPic={`img/images/superhero/suphero-${girleID}/x2/avatar/sh-ava-1.jpg`}
              count="+1000 Coins"
            />
          }
          btnWrap={
            <Button
              className="btnGold big"
              text="49.90$"
              crossedOutText="99.90$"
              onClick={() => {}}
              discountSticker="-50%"
            />
          }
        >
          <ItemBox
            itemClass="wh60"
            itemPic="img/v2-res-diamond.png"
            count="1000"
          />
          <ItemBox
            itemClass="wh60"
            itemPic="img/v2-res-diamond.png"
            count="1000"
          />
          <ItemBox
            itemClass="wh60"
            itemPic="img/v2-res-diamond.png"
            count="1000"
          />
        </OfferCardBox>

        <div
          className="btn-close-x"
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
