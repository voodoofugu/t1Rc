import React, { memo } from "react";

export default memo(function AngelPop() {
  return (
    <div className="content">
      <div className="angle-top"></div>
      <div className="angle-bottom"></div>
      <div className="angel-card-box">
        <div className="img-wrap">
          <img
            src="img/images/goddess/goddess-1/x2/goddess-1.jpg"
            loading="lazy"
          />
        </div>
        <div className="angel-name-box">
          <div className="angel-name">Amaterasu</div>
        </div>
        <div className="info-box">
          <div className="stars-box">
            <div className="star active"></div>
            <div className="star active"></div>
            <div className="star active"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
        <div className="progress-bar-wrap-box">
          <div className="angel-card-progress-bar-wrap">
            <div className="progress">
              <div
                className="fulfilled"
                style={{
                  width: "50%",
                }}
              ></div>
            </div>
            <div className="value">
              <div className="from">500</div>
              <div className="to">1000</div>
              <div className="bonus">+700</div>
            </div>
          </div>
          <div className="girl-bonus-box">
            <div className="girl-bonus-pic">
              <img
                src="img/images/goddess/goddess-1/x2/ava/goddess-ava-1.jpg "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="right-side-reward-box x2-sale">
        <div className="reward-box">
          <img src="img/ic-diamond.png" loading="lazy" />
          <div className="reward-value">x100</div>
        </div>
        <div className="reward-box">
          <img src="img/evPopArts/potion_yellow.png" loading="lazy" />
          <div className="reward-value">x100</div>
        </div>
        <div className="reward-box">
          <img src="img/ic-diamond.png" loading="lazy" />
          <div className="reward-value">x100</div>
        </div>
        <div className="reward-box">
          <img src="img/evPopArts/potion_yellow.png" loading="lazy" />
          <div className="reward-value">x100</div>
        </div>
        <div className="sale-banner">X2</div>
      </div>
      <div className="btn-bay-wrap">
        <div className="color-btn green">
          <div className="color-btn-text">
            <div className="price-nutaku"></div>
            49.90$
            <div className="old-price">99.90$</div>
          </div>
        </div>
        <div className="sale-banner">-50%</div>
      </div>
    </div>
  );
});
