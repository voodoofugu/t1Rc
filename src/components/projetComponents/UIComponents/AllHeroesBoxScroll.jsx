import { nexusTrigger } from "nexus-state";
import React from "react";

import Button from "../UIComponents/Button";
import ItemBox from "../UIComponents/ItemBox";
import FraimedTitle from "../UIComponents/FraimedTitle";

import MorphScroll from "../../../../morphing-scroll/src/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

import heroBoxData from "../data/heroBoxData";

function HeroBox({
  className,
  name,
  text,
  lvl,
  dps,
  power,
  timer,
  imgId,
  heroClass,
  cardType,
  abilImg,
  abilOnClick,
  onClick,
  btnText,
  btnNumX,
  btnOnClick,
  squadRank,
}) {
  // check classes existing from className with RegEx
  const offerExist = /offer/.test(className);
  const starterExist = /starterpack/.test(className);
  const offerCloseExist = /offerClose/.test(className);
  const disabledExist = /disabled/.test(className);
  const highlightExist = /highlight/.test(className);

  const offerStarterExist = offerExist || starterExist;
  const offerDisabledExist = offerExist || disabledExist;

  return (
    <div className="heroCardBox">
      {highlightExist && <div className="highlightBg"></div>}
      <div className="clickArea" onClick={onClick}></div>
      <div className={`hero-card${className ? ` ${className}` : ""}`}>
        {!offerCloseExist && (
          <Button
            className={`max ${offerStarterExist ? "btnGold btnBuy" : "green"}`}
            text={btnText}
            textIcn={!offerStarterExist ? "img/ico-gold.png" : ""}
            onClick={btnOnClick}
          />
        )}

        {btnNumX && !offerStarterExist && !disabledExist && btnNumX > 1 && (
          <div className="numX">{`x${btnNumX}`}</div>
        )}

        <ItemBox
          itemClass={`cardAva${offerDisabledExist ? " close" : ""}`}
          heroClass={heroClass}
          cardType={cardType}
          squadRank={squadRank}
          itemPic={`img/images/hero-all/tithero-${imgId}/x1/ava/tithero-ava-1.jpg`}
        />

        {abilImg && (
          <div className="heroAbilWrap">
            <div className="highlightBg"></div>
            <ItemBox
              itemClass="wh44 selectable"
              itemPic={`img/images/hero-all/tithero-${imgId}/icons/ic-abil.jpg`}
              onClick={abilOnClick}
            />
          </div>
        )}

        <div className="hero-name-box">
          <FraimedTitle className="corners" text={name} />
          {text && <div className="hero-info">{text}</div>}
        </div>

        {timer && starterExist && (
          <div className="timerBox">
            <div className="timerText">осталось</div>
            <div className="timer">{timer}</div>
          </div>
        )}

        {!offerStarterExist && (
          <div className="heroProp">
            <div className="hero-level-box">
              level
              <div className="hero-level">{lvl}</div>
            </div>
            <div className="hero-dps-box">
              dps
              <div className="hero-dps">{dps}</div>
            </div>
            <div className="hero-power-box">
              power
              <div className="hero-power">{power}</div>
            </div>
          </div>
        )}

        {offerStarterExist && <Button className="exit" text="✖" />}
      </div>
    </div>
  );
}

export default function AllHeroesBoxScroll({ numX }) {
  return (
    <MorphScroll
      className="heroBoxsScroll"
      size={[504, 346]}
      objectsSize={[230, 124]}
      gap={12}
      padding={[5, 0]}
      progressTrigger={{ wheel: true, progressElement: <ScrollThumb /> }}
      progressElement={<ScrollThumb />}
      edgeGradient={{ color: "#584a49" }}
      infiniteScroll
      progressVisibility="hover"
      contentAlign={["center", "center"]}
      // direction
    >
      {heroBoxData.map((item, index) => (
        <HeroBox
          key={index}
          {...item}
          btnNumX={numX}
          btnOnClick={() => {
            // index === 2 &&
            nexusTrigger({
              type: "handlePopup",
              payload: {
                type: "open",
                data: {
                  mpopClass: "m-popup contentOnly framedPop heroOfferPop",
                  popCont: "HeroOfferPop",
                  props: { ...item },
                },
              },
            });
          }}
        />
      ))}
    </MorphScroll>
  );
}
