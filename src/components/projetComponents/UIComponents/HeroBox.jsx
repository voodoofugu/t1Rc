import React from "react";
import Button from "../UIComponents/Button";
import ItemBox from "../UIComponents/ItemBox";
import FraimedTitle from "../UIComponents/FraimedTitle";

export default function HeroBox({
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
  const [visible, setVisible] = React.useState(true);
  const heroCardRef = React.useRef(null);

  const closeEvent = () => {
    heroCardRef.current.classList.add("close");
    setTimeout(() => {
      setVisible(false);
    }, 200);
  };

  // check classes existing from className with RegEx
  const offerExist = /offer/.test(className);
  const starterExist = /starterpack/.test(className);
  const offerCloseExist = /offerClose/.test(className);
  const disabledExist = /disabled/.test(className);
  const highlightExist = /highlight/.test(className);

  const offerStarterExist = offerExist || starterExist;
  const offerDisabledExist = offerExist || disabledExist;

  return visible ? (
    <div
      className="heroCardBox"
      // draggable="true"
      // ms-custom-drag=""
    >
      {highlightExist && <div className="highlightBg"></div>}
      <div className="clickArea" onClick={onClick}></div>
      <div
        className={`hero-card${className ? ` ${className}` : ""}`}
        ref={heroCardRef}
      >
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
          className={`cardAva${offerDisabledExist ? " close" : ""}`}
          heroClass={heroClass}
          cardType={cardType}
          squadRank={squadRank}
          itemPic={`img/images/hero-all/tithero-${imgId}/x1/ava/tithero-ava-1.jpg`}
        />

        {abilImg && (
          <div className="heroAbilWrap">
            <div className="highlightBg"></div>
            <ItemBox
              className="wh44 selectable"
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

        {offerStarterExist && (
          <Button className="exit" text="✖" onClick={closeEvent} />
        )}
      </div>
    </div>
  ) : null;
}
