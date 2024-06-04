import React, { memo } from "react";
import ItemBox from "../UIComponents/ItemBox";

export default memo(function DarkHeroPack() {
  return (
    <>
      <div className="title dark-pack-tit">DARK HERO PACK</div>
      <div className="content">
        <div className="hero-top"></div>
        <div className="hero-bottom"></div>
        <div className="hero-card-box">
          <div className="img-wrap">
            <img
              src="img/images\hero-all\tithero-356\x2/tithero-356-1.jpg"
              loading="lazy"
            />
          </div>
          <div className="hero-name-box">
            <div className="hero-name">Amaterasu</div>
          </div>
          <div className="info-box">
            <div className="dps-extra">
              <div className="value">2.32B</div>
              <div className="dps-title">
                DPS
                <div className="icon-dps"></div>
              </div>
            </div>
            <div className="pow-extra">
              <div className="value">51</div>
              <div className="pow-title">
                POW
                <div className="icon-pow"></div>
              </div>
            </div>
            <div className="prize-promote-box">
              <div className="prize-promote-text">3</div>
            </div>
          </div>
          <div className="progress-banner-red">only in the dark world</div>
        </div>
        <div className="right-side-reward-box">
          <ItemBox itemPic="img/ic-diamond.png" count="x100" />
          <ItemBox itemPic="img/evPopArts/potion_yellow.png" count="x100" />
          <ItemBox itemPic="img/ic-diamond.png" count="x100" />
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
    </>
  );
});
