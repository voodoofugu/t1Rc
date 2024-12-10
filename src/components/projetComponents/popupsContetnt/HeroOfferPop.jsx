import { nexusTrigger, useNexus } from "nexus-state";

import ImageBg from "../UIComponents/ImageBg";
import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import FraimedTitle from "../UIComponents/FraimedTitle";
import OfferCardBox from "../UIComponents/OfferCardBox";

export default function HeroOfferPop({ data }) {
  const imgId = data.imgId;
  const name = data.name;
  const heroType = data.heroType;

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
              onClick={() => {}}
              discountSticker="-50%"
            />
          }
        >
          Теперь вы можете купить эту особенную карту героини!
        </OfferCardBox>
        {/* <div className="offer-card-box noneAnim">
          <div className="card-content">
            <div
              className="imgBg"
              style={{
                background: `url(img/images/hero-all/tithero-${imgId}/x2/tithero-1.jpg)`,
              }}
            ></div>

            <FraimedTitle className="cornersTop" text={name} />

            <div className="reward-card-box">
              <ItemBox
                itemClass="cardAvaX2"
                type={heroType}
                itemPic={`img/images/hero-all/tithero-${imgId}/x2/ava/tithero-ava-1.jpg`}
              />
            </div>

            <div className="btnWrap">
              <Button
                className="btnGold big"
                text="49.90$"
                crossedOutText="99.90$"
                onClick={() => {}}
                discountSticker="-50%"
              />
            </div>
          </div>
        </div> */}

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
