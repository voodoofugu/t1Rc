import React from "react";

export default React.memo(function StoreItemBox({
  storeItemName,
  currencyIcon,
  buyValue,
  children,
  check,
}) {
  return (
    <div className={`store-item-box ${check ? "check" : ""}`}>
      <div className="store-name">{storeItemName}</div>
      {children}
      {!check ? (
        <div className="color-btn_shop">
          <div className="color-btn_shop-text">
            buy
            <img src={currencyIcon} loading="lazy" />
            {buyValue}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
});
