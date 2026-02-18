import React from "react";
import Button from "./Button";

const arabicToRoman = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
};

export default function ItemBox({
  className,
  itemPic,
  count,
  countOut,
  get,
  unique,
  arrow, // left, right, top, bottom
  rare,
  heroClass,
  cardType, // s, h, g
  squadRank,
  notif,
  sale,
  onClick,
  children,
}) {
  const selectable = className && className.includes("selectable");
  const greekNum = squadRank && arabicToRoman[squadRank];

  return (
    <div
      className={`itemBox${className ? " " + className : ""}`}
      onClick={selectable ? onClick : undefined}
    >
      {notif && <div className="notif">{notif}</div>}
      {!!sale && <div className="sale-banner">{sale}</div>}
      {!!unique && (
        <div className={`unique ${unique[1] ? unique[1] : ""}`}>
          {unique[0] ? unique[0] : unique}
        </div>
      )}
      <div className="itemBox_pic">
        {typeof itemPic === "string" ? (
          <img src={itemPic}></img>
        ) : Array.isArray(itemPic) ? (
          <>
            <img src={itemPic[0]}></img>
            <img src={itemPic[1]}></img>
          </>
        ) : null}
      </div>
      {!!count && !get && (
        <div className="itemBox_count_wrap">
          <div className="itemBox_count">{count}</div>
        </div>
      )}
      {!!countOut && <div className="itemBox_countOut">{countOut}</div>}
      {get && (
        <Button
          className="max green"
          text={`${typeof get === "string" ? get : ""}${count}`}
          onClick={!selectable ? onClick : undefined}
        />
      )}
      {rare && <img className="rare" src={`img/cur-${rare}.png`} />}
      {heroClass && (
        <img className="heroClass" src={`img/cur2-${heroClass}.png`} />
      )}
      {cardType && (
        <div className={`cardTypeBox ${cardType}`}>
          <div className="cardType"></div>
        </div>
      )}
      {squadRank && (
        <div className="squadRank">
          <img className="rankImg" src={`img/2vip-s${squadRank}.png`} />
          <div className="rank">{greekNum}</div>
        </div>
      )}
      {arrow ? <div className={`itemBox_arrow ${arrow}`}></div> : ""}
      {children}
    </div>
  );
}
