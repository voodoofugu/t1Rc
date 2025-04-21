import React, { useEffect } from "react";

import ImageBg from "../UIComponents/ImageBg";
import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import Tooltip from "../UIComponents/Tooltip";

export const cssFiles = [
  "v2-unipop-20-pse2-pop",
  "screen-bank",
  "tutorGirlAnim",
  "screen-unipop-subscription",
];

export default function V2Unipop20Pse2Pop({ pageName }) {
  const currentPath = window.location.hash.substring(3).split("/")[0];

  useEffect(() => {
    if (pageName === currentPath) {
      // все попапы
      const po = document.getElementById("popupAll");
      const re = document.querySelector(".popup-layer");
      const mPop = document.querySelectorAll(".unipop-pse2-pop");

      // закрытие попапов
      [
        ...document.querySelectorAll(
          ".m-popup, .ratingpop-box, .quest-popup, .popup, .reborn-popup"
        ),
      ].map((i) => {
        i.style.display = "none";
        // закрываем все попапы при клике на затемнение
        const blS = document.querySelector(".screen-blend-55");
        blS.addEventListener("click", () => {
          po.classList.remove("dialog-emersion-enter");
          po.classList.add("dialog-emersion-exit");
          setTimeout(function () {
            re.style.display = "none";
            i.style.display = "none";
            po.classList.remove("dialog-emersion-exit");
          }, 100);
        });
      });
      [
        ...document.querySelectorAll(
          ".btn-close-x, .btn-close, .lbclose-btn, .ok-all-box, .openchest-btn-close, .color-btn.close, .ratingballon-box > div.color-btn, .error-popup > .btn-simple-gold, .btlpass-btn-box > div:nth-child(1), .fortuna-winpop2 > div.color-btn, .btlpass-info > div.color-btn"
        ),
      ].map((i) => {
        i.addEventListener("click", () => {
          po.classList.remove("dialog-emersion-enter");
          po.classList.add("dialog-emersion-exit");
          setTimeout(function () {
            re.style.display = "none";
            i.closest(
              ".m-popup, .ratingpop-box, .quest-popup, .popup"
            ).style.display = "none";
            po.classList.remove("dialog-emersion-exit");
          }, 100);
        });
      });

      const mPopB = document.querySelectorAll(".quest");
      mPop.item(0).style.display = "block";
      mPopB.item(0).addEventListener("click", () => {
        re.style.display = "block";
        setTimeout(function () {
          mPop.item(0).style.display = "block";
          mPop.item(1).style.display = "none";
          po.classList.add("dialog-emersion-enter");
        }, 100);
      });
      mPopB.item(1).addEventListener("click", () => {
        re.style.display = "block";
        setTimeout(function () {
          mPop.item(0).style.display = "none";
          mPop.item(1).style.display = "block";
          po.classList.add("dialog-emersion-enter");
        }, 100);
      });
    }
    return () => {};
  }, [pageName, currentPath]);

  return (
    <div className="main world1">
      <div className="main-bg"></div>
      <div
        className="quest-box-all quests"
        style={{ zIndex: "99999", left: "0" }}
      >
        <div className="quest-box-scroll">
          <div
            className="quest-box wrap"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <div className="quest-title-btn">offers</div>
            <div className="quest-wrap">
              <li className="quest welcome-back">
                <img
                  className="icon"
                  src="img/ic-superhero-60.png"
                  loading="lazy"
                />
              </li>
              <li className="quest squad-hero">
                <img
                  className="icon"
                  src="img/ic-hero-327.png"
                  loading="lazy"
                />
              </li>
            </div>
          </div>
        </div>
      </div>
      <div id="popupAll" className="dialog-emersion-enter">
        <div
          id="popupWrapper"
          className="popup-layer"
          style={{ display: "block" }}
        >
          <div className="screen-blend-55"></div>
          <div id="popupContainer" className="popup-in">
            <div className="m-popup unipop-pse2-pop">
              <div className="title">Welcome Back!</div>
              <div className="color-box"></div>
              <div className="color-box-decor"></div>
              <div className="unipop-box-content-all">
                <div className="unipop-box-left-box">
                  <div className="unipop-scroll-box">
                    <div className="unipop-box select">
                      <div className="unipop-box-pic">
                        <img
                          src="img/unipop-m-wsale.jpg"
                          alt="offermania.regular2"
                          loading="lazy"
                        />
                        <div>
                          <img
                            src="img/images/hero-all/tithero-351/icons/ic-hero-351.png"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="unipop-gold-arrow"></div>
                      <div className="unipop-timer">02:40:35</div>
                    </div>
                    <div className="unipop-box">
                      <div className="unipop-box-pic">
                        <img
                          src="img/unipop-m-back.jpg"
                          alt="welcomeBack"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="unipop-box">
                      <div className="unipop-box-pic">
                        <img
                          src="img/unipop-m-sale.jpg"
                          alt="todaySale"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="unipop-box">
                      <div className="unipop-box-pic">
                        <img
                          src="img/unipop-m-news.jpg"
                          alt="news"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="unipop-box">
                      <div className="unipop-box-pic">
                        <img
                          src="img/unipop-m-plb-pack.jpg"
                          alt="smartPack"
                          loading="lazy"
                        />
                      </div>
                      <div className="unipop-timer">23:14:02</div>
                    </div>
                  </div>
                </div>
                <div className="unipop-box-right-box">
                  <div className="right-box-f">
                    <div className="right-box-f-name-box">
                      Resources and heroine pack
                    </div>
                    <div className="pse2-girl-left-box">
                      <div className="pse2-girl">
                        <img
                          src="img/images\hero-all\tithero-351\x1/tithero-351-1.jpg"
                          loading="lazy"
                        />
                      </div>

                      <Tooltip
                        className="pse2"
                        targetContent={
                          <div className="achiev-hint">
                            <div className="tooltip">
                              Demon that penetrates into the peoples dreams.
                            </div>
                          </div>
                        }
                      >
                        <Button className="infoOnly" text="i" />
                      </Tooltip>

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
                      </div>
                      <div className="prize-promote-box">
                        <div className="prize-promote-text">3</div>
                      </div>
                    </div>
                    {/* <div className="pse2-girl-right-box">
                        <div className="pse2-girl">
                          <img src="img/rating-girl.png" loading="lazy" />
                        </div>
                        <div className="pse2-girl-buble">
                          Rewards waiting for you!
                        </div>
                      </div> */}
                    <div className="pse2-reward-box-all">
                      <ItemBox
                        count="700"
                        itemPic="img/images/superhero/suphero-26/x1/avatar/26sh-ava-1.jpg"
                      />
                      <ItemBox
                        count="700"
                        itemPic="img/images/superhero/suphero-25/x1/avatar/25sh-ava-1.jpg"
                      />
                      <ItemBox
                        count="100"
                        itemPic="img/images/superhero/suphero-251/x1/avatar/251sh-ava-1.jpg"
                      />
                      <ItemBox
                        count="x2"
                        itemPic="img/ic-abil-dps-plus@2x.png"
                      />
                      <ItemBox count="1600" itemPic="img/v2-fw-icon-fr0.png" />
                      <ItemBox count="1200" itemPic="img/cw-quest-icon.png" />
                      <ItemBox
                        count="500"
                        itemPic="img/evPopArts/potion_blue.png"
                      />
                      <ItemBox
                        count="500"
                        itemPic="img/evPopArts/potion_green.png"
                      />
                      <ItemBox
                        count="500"
                        itemPic="img/evPopArts/potion_green.png"
                      />
                    </div>
                    <div className="store-button">
                      <div className="but-price">
                        <div className="price-nutaku"></div>
                        $24.99
                      </div>
                      <div className="but-price old">49.99$</div>
                    </div>
                    <div className="sale-banner">-50%</div>
                  </div>
                </div>
              </div>
              <div id="tutorGirlBox">
                <div id="tutorGirl"></div>
                <div id="clickBox"></div>
              </div>
              <div className="btn-close-x"></div>
            </div>
            <div className="m-popup unipop-pse2-pop squad-hero">
              <div className="title">Buy Squad Hero</div>
              <div className="color-box"></div>
              <div className="color-box-decor"></div>
              <div className="unipop-box-content-all">
                <div className="unipop-box-right-box" style={{ left: "100px" }}>
                  <div className="right-box-f">
                    {/* <div className="right-box-f-name-box">Squad Hero pack</div> */}
                    <div className="pse2-girl-left-box">
                      <div className="pse2-girl">
                        <img
                          src="img/break-girls/break-girl238.png"
                          loading="lazy"
                        />
                      </div>
                      <Tooltip
                        className="pse2"
                        targetContent={
                          <div className="achiev-hint">
                            <div className="tooltip">
                              Demon that penetrates into the peoples dreams.
                            </div>
                          </div>
                        }
                      >
                        <Button className="infoOnly" text="i" />
                      </Tooltip>
                    </div>
                    {/* <div className="pse2-girl-right-box">
                      <div className="pse2-girl">
                        <img src="img/bre-pse1.png" loading="lazy" />
                      </div>
                      <div className="pse2-girl-buble">
                        I'm ready for EVERYTHING
                      </div>
                    </div> */}
                    <ImageBg
                      className="girlImg"
                      img={`img/images/hero-all/tithero-430/icons/break-girl.png`}
                    />
                    <div className="pse2-reward-box-all">
                      <ItemBox itemPic="img/images/hero-all/tithero-108/x1/ava/tithero-108-1-ava.jpg" />
                      <ItemBox
                        count="700"
                        itemPic="img/images/superhero/suphero-211/x1/avatar/211sh-ava-1.jpg"
                      />
                      <ItemBox
                        count="100"
                        itemPic="img/images/superhero/suphero-600/x1/avatar/600sh-ava-1.jpg"
                      />
                      <ItemBox
                        count="x2"
                        itemPic="img/ic-abil-dps-plus@2x.png"
                      />
                      <ItemBox count="1600" itemPic="img/v2-fw-icon-fr0.png" />
                      <ItemBox count="1200" itemPic="img/cw-quest-icon.png" />
                      <ItemBox
                        count="500"
                        itemPic="img/evPopArts/potion_blue.png"
                      />
                      <ItemBox
                        count="500"
                        itemPic="img/evPopArts/potion_green.png"
                      />
                      <ItemBox
                        count="Squad #14"
                        itemPic="img/elements/Dark.png"
                      />
                    </div>
                    <div className="store-button">
                      <div className="but-price">$29.99</div>
                    </div>
                    <div className="sale-banner">-80%</div>
                  </div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
