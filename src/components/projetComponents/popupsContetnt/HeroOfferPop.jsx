import nexus from "nexus";

import ImageBg from "../UIComponents/ImageBg";
import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import OfferCardBox from "../UIComponents/OfferCardBox";
import Tooltip from "../UIComponents/Tooltip";

export default function HeroOfferPop({ imgId, name, heroClass, cardType }) {
  return (
    <>
      <div
        className="closeBG"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
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
              className="wh180-long"
              heroClass={heroClass}
              cardType={cardType}
              itemPic={`img/images/hero-all/tithero-${imgId}/x2/ava/tithero-ava-1.jpg`}
            >
              <Tooltip
                // className="lheroPic"
                targetContent={
                  <div className="achiev-hint default">
                    <div className="tooltip">
                      <div className="paramWrap">
                        <div className="dps-extra small">
                          <div className="value">2.32B</div>
                          <div className="dps-title">
                            DPS
                            <div className="icon-dps"></div>
                          </div>
                        </div>
                        <div className="pow-extra small">
                          <div className="value">51</div>
                          <div className="pow-title">
                            POW
                            <div className="icon-pow"></div>
                          </div>
                        </div>
                      </div>
                      <div className="descr">
                        Demon that penetrates into the peoples dreams.
                      </div>
                    </div>
                  </div>
                }
              >
                <Button className="infoOnly" text="i" />
              </Tooltip>
            </ItemBox>
          }
          btnWrap={
            <Button
              className="btnGold big"
              text="49.90$"
              crossedOutText="99.90$"
              onClick={() =>
                nexus.acts.handlePopup({
                  type: "open",
                  data: {
                    mpopClass: "m-popup contentOnly framedPop heroRewardPop",
                    popCont: "CongraPop",
                    props: {
                      rewardsData: [
                        {
                          heroClass: `${heroClass}`,
                          cardType: `${cardType}`,
                          itemPic: `img/images/hero-all/tithero-${imgId}/x2/ava/tithero-ava-1.jpg`,
                        },
                      ],
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
          onClick={() => nexus.acts.handlePopup({ type: "close" })}
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
