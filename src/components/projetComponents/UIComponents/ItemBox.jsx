import React from "react";
import Button from "./Button";

export default React.memo(function ItemBox({
  itemClass,
  itemPic,
  count,
  countOut,
  get,
  unique,
  arrow, // left, right, top, bottom
  rare,
  notif,
  sale,
  onClick,
}) {
  return (
    <div className={`itemBox${itemClass ? " " + itemClass : ""}`}>
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
        <Button className="max green" text={`get ${count}`} onClick={onClick} />
      )}
      {!!rare && <img className="rare" src={`img/cur2-${rare}.png`} />}
      {arrow ? <div className={`itemBox_arrow ${arrow}`}></div> : ""}
    </div>
  );
});
