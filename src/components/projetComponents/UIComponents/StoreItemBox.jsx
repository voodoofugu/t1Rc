import React from "react";

export default React.memo(function StoreItemBox({
  storeItemName,
  currencyIcon,
  buyValue,
  children,
}) {
  return (
    <div className="store-item-box">
      <div className="store-name">{storeItemName}</div>
      {children}
      <div className="color-btn_shop">
        <div className="color-btn_shop-text">
          buy
          <img src={currencyIcon} loading="lazy" />
          {buyValue}
        </div>
      </div>
    </div>
  );
});
