import React from "react";

import Button from "../UIComponents/Button";
import FraimedTitle from "../UIComponents/FraimedTitle";
import ItemBox from "../UIComponents/ItemBox";

export const cssFiles = ["screen-unipop-spack"];

export default function V2Unipop20Starterpack() {
  return (
    <div className="main world1">
      <div className="main-bg"></div>

      <div className="popup-layer" style={{ display: "block" }}>
        <div className="screen-blend-55" style={{ display: "block" }}></div>

        <div
          className="m-popup unipop-starterpack"
          style={{ display: "block" }}
        >
          <div className="title">announcement</div>
          <div className="color-box"></div>
          <div className="color-box-decor"></div>
          <div className="unipop-box-content-all">
            <div className="unipop-box-left-box">
              <div className="unipop-scroll-box">
                <div className="unipop-box">
                  <div className="unipop-box-pic">
                    <img src="img/unipop-m-back.jpg" loading="lazy" />
                  </div>
                  <div className="unipop-gold-arrow"></div>
                </div>
                <div className="unipop-box">
                  <div className="unipop-box-pic">
                    <img src="img/unipop-m-sale.jpg" loading="lazy" />
                  </div>
                  <div className="unipop-gold-arrow"></div>
                </div>
                <div className="unipop-box select">
                  <div className="unipop-box-pic">
                    <img src="img/unipop-m-starterpack.jpg" loading="lazy" />
                  </div>
                  <div className="unipop-gold-arrow"></div>
                </div>
                <div className="unipop-box"></div>
                <div className="unipop-box"></div>
                <div className="unipop-box"></div>
              </div>
            </div>
            <div className="unipop-box-right-box">
              <div className="right-box-f">
                <div className="right-box-f-name-box">Стартовый пакет</div>
                <div className="red-timer-box">
                  <div className="time-text">Осталось</div>
                  <div className="time">47:56:22</div>
                </div>

                <div className="noobpack-box">
                  <FraimedTitle
                    className="cornersTop packTit"
                    text="Novice pack"
                  />

                  <div className="rewardBox">
                    <ItemBox
                      className="wh94"
                      unique={["unique"]}
                      cardType="h"
                      itemPic="img/images/hero-all/tithero-353/x1/ava/tithero-353-1-ava.jpg"
                    />
                    <ItemBox className="wh94" itemPic="img/ic-abil-dps2.png" />
                    <ItemBox
                      className="wh94"
                      count="+100%"
                      itemPic="img/change-ic-gold.png"
                    />
                    <ItemBox
                      className="wh94"
                      count="2.44M"
                      itemPic="img/change-ic-gold.png"
                    />
                  </div>

                  <Button className="max green buy-btn" text="buy 1.99$" />
                </div>

                <div className="kingpack-box">
                  <FraimedTitle
                    className="cornersTop packTit"
                    text="King pack"
                  />

                  <div className="rewardBox">
                    <ItemBox
                      className="wh94"
                      unique={["unique"]}
                      cardType="h"
                      itemPic="img/images/hero-all/tithero-68/x1/ava/tithero-68-1-ava.jpg"
                    />
                    <ItemBox
                      className="wh94"
                      unique={["unique"]}
                      cardType="h"
                      itemPic="img/images/hero-all/tithero-45/x1/ava/tithero-45-1-ava.jpg"
                    />
                    <ItemBox
                      className="wh94"
                      unique={["unique"]}
                      cardType="h"
                      itemPic="img/images/hero-all/tithero-80/x1/ava/tithero-80-1-ava.jpg"
                    />
                    <ItemBox className="wh94" itemPic="img/ic-abil-dps2.png" />
                    <ItemBox
                      className="wh94"
                      count="+10K%"
                      itemPic="img/change-ic-gold.png"
                    />
                    <ItemBox
                      className="wh94"
                      count="22M"
                      itemPic="img/change-ic-gold.png"
                    />
                    <ItemBox
                      className="wh94"
                      count="150"
                      itemPic="img/diamond5.png"
                    />
                  </div>

                  <Button className="max green buy-btn" text="buy 29.99$" />
                </div>

                <div className="sale-box">
                  <div className="sale-text">Скидка 80%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-close-x"></div>
        </div>
      </div>
    </div>
  );
}
