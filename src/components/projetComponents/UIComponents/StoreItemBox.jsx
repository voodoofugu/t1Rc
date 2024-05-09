import React from "react";

export default function StoreItemBox({ imgClass }) {
  return (
    <div className="store-item-box chest">
      <div className="store-name">Wooden Chest</div>
      <div className="rpg_poly-chest wooden-chest"></div>
      <div className="color-btn_shop">
        <div className="color-btn_shop-text">
          <div>
            buy
            <span className="buy_value">7500</span>
          </div>
        </div>
      </div>
    </div>
  );
}
