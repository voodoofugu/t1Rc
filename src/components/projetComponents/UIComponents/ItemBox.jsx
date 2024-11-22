import React from "react";
import Button from "./Button";

export default function ItemBox({
  itemClass,
  itemPic,
  count,
  countOut,
  get,
  unique,
  arrow, // left, right, top, bottom
  rare,
  type,
  notif,
  sale,
  onClick,
}) {
  const selectable = itemClass && itemClass.includes("selectable");

  return (
    <div
      className={`itemBox${itemClass ? " " + itemClass : ""}`}
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
        <img src={itemPic}></img>
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
          text={`get ${count}`}
          onClick={!selectable ? onClick : undefined}
        />
      )}
      {!!rare && <img className="rare" src={`img/cur-${rare}.png`} />}
      {!!type && <img className="type" src={`img/cur2-${type}.png`} />}
      {arrow ? <div className={`itemBox_arrow ${arrow}`}></div> : ""}
    </div>
  );
}
