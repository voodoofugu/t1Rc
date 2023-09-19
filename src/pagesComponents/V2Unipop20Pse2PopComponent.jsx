import React, { useEffect } from "react";
// import v2Unipop20Pse2Pop from "../styles/v2-unipop-20-pse2-pop.scss";
// import screenBank from "../styles/screen-bank.scss";

const V2Unipop20Pse2PopComponent = () => {
  // создаём такой же айди как у родителя здесь и так попадаем к нему
  const currentUrl = window.location.href;
  const fileNameWithoutExtension = currentUrl.split("/").pop().split(".")[0];
  const pageContainerId = `root-${fileNameWithoutExtension}`;
  const pageContainer = document.getElementById(pageContainerId);

  useEffect(() => {
    if (pageContainer && !pageContainer.classList.contains("noScripts")) {
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
      return;
    }
    return () => {};
  }, []);
  return (
    <>
      <div className="main world1">
        <div className="main-bg"></div>
        <div className="quest-box-all quests" style={{ zIndex: "99999" }}>
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
                        <div className="info-box">
                          <div className="dps-extra">
                            <div className="value">2.32B</div>
                            <div className="dps-title">
                              DPS
                              <div className="icon-dps"></div>
                            </div>
                          </div>
                          <div className="prize-promote-box">
                            <div className="prize-promote-text">3</div>
                          </div>
                        </div>
                      </div>
                      <div className="pse2-girl-right-box">
                        <div className="pse2-girl">
                          <img src="img/rating-girl.png" loading="lazy" />
                        </div>
                        <div className="pse2-girl-buble">
                          Rewards waiting for you!
                        </div>
                      </div>
                      <div className="pse2-reward-box-all">
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img
                              src="img/images/superhero/suphero-26/x1/avatar/26sh-ava-1.jpg"
                              loading="lazy"
                            />
                          </div>
                          <div className="pse2-num">700</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img
                              src="img/images/superhero/suphero-25/x1/avatar/25sh-ava-1.jpg"
                              loading="lazy"
                            />
                          </div>
                          <div className="pse2-num">700</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img
                              src="img/images/superhero/suphero-251/x1/avatar/251sh-ava-1.jpg"
                              loading="lazy"
                            />
                          </div>
                          <div className="pse2-num">100</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img
                              src="img/ic-abil-dps-plus@2x.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="pse2-num">x2</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img src="img/v2-fw-icon-fr0.png" loading="lazy" />
                          </div>
                          <div className="pse2-num">1600</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img src="img/cw-quest-icon.png" loading="lazy" />
                          </div>
                          <div className="pse2-num">1200</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img src="img/ic-blue-butil.png" loading="lazy" />
                          </div>
                          <div className="pse2-num">500</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img src="img/ic-green-butil.png" loading="lazy" />
                          </div>
                          <div className="pse2-num">500</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img src="img/ic-green-butil.png" loading="lazy" />
                          </div>
                          <div className="pse2-num">500</div>
                        </div>
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
                <div className="btn-close-x"></div>
              </div>
              <div className="m-popup unipop-pse2-pop squad-hero">
                <div className="title">Buy Squad Hero</div>
                <div className="color-box"></div>
                <div className="color-box-decor"></div>
                <div className="unipop-box-content-all">
                  <div
                    className="unipop-box-right-box"
                    style={{ left: "100px" }}
                  >
                    <div className="right-box-f">
                      <div className="right-box-f-name-box">
                        Squad Hero pack
                      </div>
                      <div className="pse2-girl-left-box">
                        <div className="pse2-girl">
                          <img src="img/break-girl238.png" loading="lazy" />
                        </div>
                      </div>
                      <div className="pse2-girl-right-box">
                        <div className="pse2-girl">
                          <img src="img/bre-pse1.png" loading="lazy" />
                        </div>
                        <div className="pse2-girl-buble">
                          I'm ready for EVERYTHING
                        </div>
                      </div>
                      <div className="pse2-reward-box-all">
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img
                              src="img/images/hero-all/tithero-108/x1/ava/tithero-108-1-ava.jpg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img
                              src="img/images/superhero/suphero-211/x1/avatar/211sh-ava-1.jpg"
                              loading="lazy"
                            />
                          </div>
                          <div className="pse2-num">700</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img
                              src="img/images/superhero/suphero-600/x1/avatar/600sh-ava-1.jpg"
                              loading="lazy"
                            />
                          </div>
                          <div className="pse2-num">100</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img
                              src="img/ic-abil-dps-plus@2x.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="pse2-num">x2</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img src="img/v2-fw-icon-fr0.png" loading="lazy" />
                          </div>
                          <div className="pse2-num">1600</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img src="img/cw-quest-icon.png" loading="lazy" />
                          </div>
                          <div className="pse2-num">1200</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img src="img/ic-blue-butil.png" loading="lazy" />
                          </div>
                          <div className="pse2-num">500</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img src="img/ic-green-butil.png" loading="lazy" />
                          </div>
                          <div className="pse2-num">500</div>
                        </div>
                        <div className="pse2-reward">
                          <div className="pse2-pic">
                            <img src="img/elements/Dark.png" loading="lazy" />
                          </div>
                          <div className="pse2-num">Squad #14</div>
                        </div>
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
    </>
  );
};

export default React.memo(V2Unipop20Pse2PopComponent);
