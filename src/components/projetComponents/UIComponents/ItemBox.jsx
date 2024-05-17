import React from "react";

export default React.memo(function ItemBox({
  itemClass,
  itemPic,
  count,
  countOut,
  get,
  unique,
  arrow,
  rare,
  notif,
  sale,
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
        <div className="color-btn green">
          <div className="color-btn-text">get {count}</div>
        </div>
      )}
      {!!rare && <img className="rare" src={`img/cur-${rare}.png`} />}
      {arrow ? <div className={`itemBox_arrow ${arrow}`}></div> : ""}
    </div>
  );
});
