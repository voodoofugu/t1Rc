import { nexusTrigger, useNexus } from "nexus-state";

import ImageBg from "../UIComponents/ImageBg";
import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import FraimedTitle from "../UIComponents/FraimedTitle";
import { url } from "inspector";

export default function HeroOfferPop({ data }) {
  const img = data.img;
  const name = data.name;
  const heroType = data.heroType;

  // метчим иконку фигуры
  const girlFigure = img.match(/^(.*?tithero-\d+)(?=\/)/);
  const girlMatch = girlFigure ? girlFigure[1] : null;
  // получаем x2 аву
  const x2Ava = img.replace(/\/x1\//, "/x2/");

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

        <div className="offer-card-box noneAnim">
          <div
            className="card-content"
            style={{ background: `url(${girlMatch}/icons/break-girl.png)` }}
          >
            <FraimedTitle className="cornersTop" text={name} />

            <div className="reward-card-box">
              <ItemBox itemClass="cardAvaX2" type={heroType} itemPic={x2Ava} />
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

      <ImageBg
        className="girlImg infoGirl"
        img={
          girlMatch
            ? `${girlMatch}/icons/break-girl.png`
            : "img/break-girls/break-girl915.png"
        }
      />
    </>
  );
}
