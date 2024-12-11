import { nexusTrigger } from "nexus-state";

import ImageBg from "../UIComponents/ImageBg";
import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import OfferCardBox from "../UIComponents/OfferCardBox";

export default function HeroOfferPop({ imgId, name, heroType }) {
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
          className="noneAnim"
          addBg={`img/images/hero-all/tithero-${imgId}/x2/tithero-1.jpg`}
          title={name}
          rewardCard={
            <ItemBox
              itemClass="cardAvaX2"
              type={heroType}
              itemPic={`img/images/hero-all/tithero-${imgId}/x2/ava/tithero-ava-1.jpg`}
            />
          }
          btnWrap={
            <Button
              className="btnGold big"
              text="49.90$"
              crossedOutText="99.90$"
              onClick={() =>
                nexusTrigger({
                  type: "handlePopup",
                  payload: {
                    type: "open",
                    data: {
                      mpopClass: "m-popup contentOnly framedPop heroRewardPop",
                      popCont: "CongraPop",
                      props: {
                        rewardsData: [
                          {
                            type: `${heroType}`,
                            itemPic: `img/images/hero-all/tithero-${imgId}/x2/ava/tithero-ava-1.jpg`,
                          },
                        ],
                      },
                    },
                  },
                })
              }
              discountSticker="-50%"
            />
          }
        >
          Теперь вы можете купить эту особенную карту героини!
        </OfferCardBox>

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

      <ImageBg
        className="girlImg infoGirl"
        img={
          imgId
            ? `img/images/hero-all/tithero-${imgId}/icons/break-girl.png`
            : "img/break-girls/break-girl915.png"
        }
      />
    </>
  );
}
