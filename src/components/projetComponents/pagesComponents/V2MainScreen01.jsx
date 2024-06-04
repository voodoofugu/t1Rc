import React, { useEffect } from "react";
import WorldBtnBox from "../UIComponents/WorldBtnBox.jsx";

export const cssFiles = [
  "screen-bank",
  "screen-bank1",
  "angel-tab",
  "gf-sale-pop",
  "screen-superhero",
];

export default function V2MainScreen01({ pageName }) {
  useEffect(() => {
    if (pageName === currentPath) {
      // все попапы
      [...document.querySelectorAll(".m-popup")].map((i) => {
        i.style.display = "none";
      });

      const po = document.getElementById("popupAll");
      const re = document.querySelector(".popup-layer");
      const pIn = document.querySelector(".pop-in");
      const pRg = document.querySelector(".pop-reg");
      const pS = document.querySelector(".m-popup.chests-shop");
      const gC = document.querySelector(".m-popup.busters.gold-coins");
      const aG = document.querySelector(".m-popup.add-resources-popup");
      const aH = document.querySelector(".m-popup.angels-heros");
      const aN = document.querySelector(".m-popup.angels-supheros-notadded");
      const aS = document.querySelector(".m-popup.angels-supheros-added");
      const aA = document.querySelector(".m-popup.angels-supheros-add");
      const sC = document.querySelector(".m-popup.angels-currency-shop");
      const aI = document.querySelector(".m-popup.angels-info");

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
          ".btn-close-x, .btn-close, .lbclose-btn, .ok-all-box, .openchest-btn-close, .color-btn.close, .ratingballon-box > div.color-btn, .error-popup > .btn-simple-gold, .btlpass-btn-box > div:nth-of-type(1), .fortuna-winpop2 > div.color-btn, .btlpass-info > div.color-btn"
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

      const si = document.querySelector(".signinout-btn");
      si.addEventListener("click", () => {
        re.style.display = "block";
        setTimeout(function () {
          pIn.style.display = "block";
          po.classList.add("dialog-emersion-enter");
        }, 100);
      });

      const reg = document.querySelector(".go");
      reg.addEventListener("click", () => {
        po.classList.remove("dialog-emersion-enter");
        po.classList.add("dialog-emersion-exit");
        setTimeout(function () {
          pIn.style.display = "none";
          po.classList.remove("dialog-emersion-exit");
        }, 104);
        re.style.display = "block";
        setTimeout(function () {
          pRg.style.display = "block";
          po.classList.add("dialog-emersion-enter");
        }, 100);
      });

      // const bC = document.querySelector(".res-chest-btn-count");
      // bC.addEventListener("click", () => {
      //   re.style.display = "block";
      //   setTimeout(function () {
      //     pS.style.display = "block";
      //     po.classList.add("popup-view");
      //   }, 100);
      // });

      const bGb = document.querySelector(".buster-btn.buster-gold");
      bGb.addEventListener("click", () => {
        re.style.display = "block";
        setTimeout(function () {
          gC.style.display = "block";
          po.classList.add("popup-view");
        }, 100);
      });

      const aGb = document.querySelector(".resource-gold .resource-btn-add");
      aGb.addEventListener("click", () => {
        re.style.display = "block";
        setTimeout(function () {
          aG.style.display = "block";
          po.classList.add("popup-view");
        }, 100);
      });

      const ba = document.querySelector(".color-btn.add");
      ba.addEventListener("click", () => {
        re.style.display = "block";
        setTimeout(function () {
          aH.style.display = "block";
          po.classList.add("dialog-emersion-enter");
        }, 100);
      });

      const bs = document.querySelector(".color-btn.supheros");
      bs.addEventListener("click", () => {
        re.style.display = "block";
        setTimeout(function () {
          aN.style.display = "block";
          po.classList.add("dialog-emersion-enter");
        }, 100);
      });

      const ad = document.querySelector(
        ".angels-supheros-notadded .color-btn.add"
      );
      ad.addEventListener("click", () => {
        po.classList.remove("dialog-emersion-enter");
        po.classList.add("dialog-emersion-exit");
        setTimeout(function () {
          aN.style.display = "none";
          po.classList.remove("dialog-emersion-exit");
        }, 104);
        re.style.display = "block";
        setTimeout(function () {
          aS.style.display = "block";
          po.classList.add("dialog-emersion-enter");
        }, 100);
      });

      const sd = document.querySelector(
        ".angels-supheros-added .color-btn.add"
      );
      sd.addEventListener("click", () => {
        po.classList.remove("dialog-emersion-enter");
        po.classList.add("dialog-emersion-exit");
        setTimeout(function () {
          aS.style.display = "none";
          po.classList.remove("dialog-emersion-exit");
        }, 104);
        re.style.display = "block";
        setTimeout(function () {
          aA.style.display = "block";
          po.classList.add("dialog-emersion-enter");
        }, 100);
      });

      [...document.querySelectorAll(".trophy-value-btn-add.angels")].map(
        (i) => {
          i.addEventListener("click", () => {
            po.classList.remove("dialog-emersion-enter");
            po.classList.add("dialog-emersion-exit");
            setTimeout(function () {
              aH.style.display = "none";
              aA.style.display = "none";
              po.classList.remove("dialog-emersion-exit");
            }, 104);
            re.style.display = "block";
            setTimeout(function () {
              sC.style.display = "block";
              po.classList.add("dialog-emersion-enter");
            }, 100);
          });
        }
      );

      [...document.querySelectorAll(".color-btn.info")].map((i) => {
        i.addEventListener("click", () => {
          re.style.display = "block";
          setTimeout(function () {
            aI.style.display = "block";
            po.classList.add("dialog-emersion-enter");
          }, 100);
        });
      });

      // вкладки
      const taH = document.querySelector(".tabs-all.heroes");
      const taW = document.querySelector(".tabs-all.w-house2");
      const tbW = document.querySelector(".tabs-all.w-house");

      const conH = document.querySelector(".heroes-list-all-box");
      const conW = document.querySelector(".womens-btns-screen");
      const abH = document.querySelector(".angels-all-box");
      const conS = document.querySelector(".skills-all-box");
      conW.style.display = "none";
      abH.style.display = "none";

      const rightSide = document.querySelector(".right-side");
      rightSide.style.display = "block";

      const le = document.querySelector(".left-panel");

      taH.addEventListener("click", () => {
        le.classList.remove("wide");
        taW.classList.remove("selected");
        tbW.classList.remove("selected");
        conW.style.display = "none";
        abH.style.display = "none";
        rightSide.style.display = "none";
        taH.classList.add("selected");
        conH.style.display = "block";
        conS.style.display = "block";
      });
      taW.addEventListener("click", () => {
        le.classList.add("wide");
        taH.classList.remove("selected");
        tbW.classList.remove("selected");
        conH.style.display = "none";
        conS.style.display = "none";
        abH.style.display = "none";
        rightSide.style.display = "none";
        taW.classList.add("selected");
        conW.style.display = "block";
      });
      tbW.addEventListener("click", () => {
        le.classList.add("wide");
        taH.classList.remove("selected");
        taW.classList.remove("selected");
        conH.style.display = "none";
        conS.style.display = "none";
        conW.style.display = "none";
        tbW.classList.add("selected");
        abH.style.display = "block";
        rightSide.style.display = "none";
      });

      const ac = document.querySelector(".angels-cards-content");
      const ci = document.querySelector(".card-info-content");
      ci.style.display = "none";
      const bb = document.querySelector(".content-header > .btn-close-x");
      [...document.querySelectorAll(".angel-card-box")].map((i) => {
        i.addEventListener("click", () => {
          ac.style.display = "none";
          ci.style.display = "block";
        });
      });
      bb.addEventListener("click", () => {
        ci.style.display = "none";
        ac.style.display = "block";
      });

      const ab = document.querySelectorAll(
        ".angels-icons-scroll-box .angel-avatar-box"
      );
      ab.forEach((item) => {
        item.addEventListener("click", (e) => {
          ab.forEach((el) => {
            el.classList.remove("selected");
          });
          item.classList.add("selected");
          sa.classList.remove("lock");
          ah.classList.remove("lock");
        });
      });

      const ai = document.querySelector(
        ".selected-angel-box .angel-card-box .img-wrap img"
      );
      const bl = document.querySelector(".btn-scroll-card.left");
      const br = document.querySelector(".btn-scroll-card.right");
      br.addEventListener("click", () => {
        ai.src =
          "https://cdn.faptitans.com/s1/images/goddess/goddess-2/x2/goddess-2-2.jpg";
        ai.closest(
          ".selected-angel-box .angel-card-box .img-wrap"
        ).classList.add("lock");
      });
      bl.addEventListener("click", () => {
        ai.src =
          "https://cdn.faptitans.com/s1/images/goddess/goddess-2/x2/goddess-1.jpg";
        ai.closest(
          ".selected-angel-box .angel-card-box .img-wrap"
        ).classList.remove("lock");
      });

      const sa = document.querySelector(".selected-angel-box .angel-card-box");
      const ah = document.querySelector(".angels-heros-box-wrap");
      const sm = document.querySelector(
        ".selected-angel-box .angel-card-box .img-wrap"
      );
      [
        ...document.querySelectorAll(
          ".angels-icons-scroll-box .angel-avatar-box.lock"
        ),
      ].map((i) => {
        i.addEventListener("click", () => {
          sa.classList.add("lock");
          ah.classList.add("lock");
          sm.classList.remove("lock");
        });
      });

      const cf = document.querySelector(".angels-heros .color-btn.add .f-gold");
      cf.innerHTML = "";
      const hA = document.querySelectorAll(
        ".add-heros-skrollbox .hero-avatar-box"
      );
      hA.forEach((item) => {
        item.addEventListener("click", (e) => {
          hA.forEach((el) => {
            el.classList.remove("selected");
          });
          item.classList.add("selected");
          cf.closest(".color-btn.add").classList.remove("unselected");
          if (item.classList.contains("added")) {
            cf.closest(".color-btn-text").style.display = "none";
          } else {
            cf.closest(".color-btn-text").style.display = "flex";
            cf.textContent = 500;
          }
        });
      });

      const cg = document.querySelector(
        ".angels-supheros-add .color-btn.add .f-gold"
      );
      cg.innerHTML = "";
      const sA = document.querySelectorAll(
        ".add-supheros-scrollbox .suphero-avatar-box"
      );
      sA.forEach((item) => {
        item.addEventListener("click", (e) => {
          sA.forEach((el) => {
            el.classList.remove("selected");
          });
          item.classList.add("selected");
          cg.closest(".color-btn.add").classList.remove("unselected");
          if (item.classList.contains("added")) {
            cg.closest(".color-btn-text").style.display = "none";
          } else {
            cg.closest(".color-btn-text").style.display = "flex";
            cg.innerHTML = "500";
          }
        });

        const sC = document.querySelectorAll(".suphero-card");
        sC.forEach((item) => {
          item.addEventListener("click", (e) => {
            sC.forEach((el) => {
              el.classList.remove("check");
            });
            item.classList.add("check");
          });
        });
      });

      // кнопка с уровнями игры
      const loB = document.querySelector(".loc-back");
      loB.addEventListener("click", () => {
        loB.closest(".loc-list").classList.remove("back");
      });
      const lo = document.querySelector(".locs");
      lo.addEventListener("click", () => {
        lo.closest(".loc-list").classList.toggle("opened");
      });

      const quTb = document.querySelectorAll(".quest-title-btn");
      quTb.forEach((item) => {
        item.addEventListener("click", (e) => {
          if (item.closest(".quest-box").classList.contains("closed")) {
            item.closest(".quest-box").classList.remove("closed");
          } else {
            item.closest(".quest-box").classList.add("closed");
          }
        });
      });

      const xBtn = document.querySelectorAll(".x2-btn");
      xBtn.forEach((i) => {
        i.addEventListener("click", (e) => {
          xBtn.forEach((el) => {
            el.classList.remove("selected");
          });
          i.classList.add("selected");
        });
      });
      return;
    }
    return () => {};
  }, [pageName, currentPath]);

  return (
    <div className="main world1">
      <div
        className="main-bg"
        style={{
          backgroundImage: "url('../img/images/back/new/09-River.jpg')",
        }}
      ></div>
      <div className="header">
        <div className="resource-panel">
          <div className="avatar-box-all">
            <div className="avatar-box-pic">
              <img src="img/hero0093-ava.jpg" loading="lazy" />
            </div>
            <div className="avatar-box-name">Dormidont</div>
          </div>
          <div className="resource-gold">
            <div className="value">6969K</div>
            <div className="value-bonus">+6969K%</div>
            <div className="resource-btn-add"></div>
            <div className="resource-pic">
              <img src="img/v2-res-gold.png" loading="lazy" />
            </div>
          </div>
          <div className="resource-vip lvl5">
            <div className="value-vip-diamond">6969K</div>
            <div className="value-vip-ticket">6969K</div>
            <div className="resource-btn-add"></div>
            <div className="resource-pic-vip">
              <div className="viplvl">VIP</div>
            </div>
          </div>
          <div className="might-box-all">
            <div>
              <div className="might-box-pic">
                <img className="bg" src="img/v2-cw-bg34.png" loading="lazy" />
                <img className="fg" src="img/v2-cw-p03.png" loading="lazy" />
              </div>
              <div className="might-box-name">Clan</div>
            </div>
          </div>
        </div>
        <div className="shop-chest-box-all">
          <div className="res-shop-btn">
            <div className="res-shop-btn-text">магазин</div>
          </div>
          <div className="res-chest-btn">
            <div className="res-chest-btn-text">Chests</div>
          </div>
        </div>
        <div className="signinout-btn">
          <div className="icon-reg"></div>
        </div>
      </div>
      <div className="quest-box-all">
        <div className="quest-box-scroll">
          <div className="quest-box">
            <li className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </li>
          </div>
          <div className="quest-box wrap closed">
            <div className="quest-title-btn">offers</div>
            <div className="quest-wrap">
              <li className="quest angel-pop">
                <img
                  className="icon"
                  src="img/picmeh-ic-angel-pop.png"
                  loading="lazy"
                />
              </li>
              <li className="quest angel-pop-x3">
                <img
                  className="icon"
                  src="img/picmeh-ic-angel-pop-x3.png"
                  loading="lazy"
                />
              </li>
              <li
                className="quest default-hero"
                style={{ animationDelay: "0ms" }}
              >
                <img className="icon" src="img/ic-sh-28.png" loading="lazy" />
              </li>
              <li className="quest picmeh-info info">
                <img
                  className="icon"
                  src="img/picmeh-ic-diamond.png"
                  loading="lazy"
                />
              </li>
              <li
                className="quest startpack open"
                style={{ animationDelay: "450ms" }}
              >
                <img
                  className="icon"
                  src="img/ic-hero-211.png"
                  loading="lazy"
                />
                <div className="timerbox">
                  <div className="timer">23:29:14</div>
                </div>
                <div className="v2-uni-notif notif notif20"></div>
              </li>
              <li
                className="quest startpack open"
                style={{ animationDelay: "600ms" }}
              >
                <img
                  className="icon"
                  src="img/v2-ico-gold.png"
                  loading="lazy"
                />
                <div className="timerbox">
                  <div className="timer">23:36:10</div>
                </div>
              </li>
            </div>
          </div>
          <div className="quest-box wrap">
            <div className="quest-title-btn">events</div>
            <div className="quest-wrap">
              <li className="quest startpack wide">
                <img
                  className="icon"
                  src="img/cw-quest-icon.png"
                  loading="lazy"
                />
                <div className="timerbox">
                  <div className="timer">1D 03:08</div>
                </div>
              </li>
              <li
                className="quest startpack open"
                style={{ animationDelay: "150ms" }}
              >
                <img
                  className="icon"
                  src="img/v2-fw-icon-fr0.png"
                  loading="lazy"
                />
                <div className="timerbox">
                  <div className="timer">71:32:33</div>
                </div>
              </li>
              <li className="quest startpack wide">
                <img
                  className="icon"
                  src="img/evPopArts/angel_spirit_1.png"
                  loading="lazy"
                />
              </li>
              <li className="quest open" style={{ animationDelay: "750ms" }}>
                <img
                  className="icon"
                  src="img/v2-ico-quest.png"
                  loading="lazy"
                />
              </li>
              <li className="quest marked">
                <img className="icon" src="img/ic-quests.png" loading="lazy" />
                <div className="quest-notif"></div>
              </li>
            </div>
          </div>
        </div>
        <div className="opt-panel-box">
          <div className="color-bg"></div>
          <div className="btn feedback"></div>
          <div className="btn statistic"></div>
          <div className="btn settings"></div>
          <div className="btn ru"></div>
        </div>
        <div className="btn-discord"></div>
      </div>

      <div className="right-side">
        <div className="darkness-progress-bar-wrap">
          <div className="progress">
            <div className="fulfilled" style={{ width: "40%" }}></div>
          </div>
          <div className="value">
            <div className="from">400</div>
            <div className="to">1000</div>
          </div>
        </div>
        <div className="world-portal underworld">
          <img src="img/portal-underworld.png" loading="lazy" />
          <div className="title">Underworld</div>
        </div>
        <div className="world-portal darkworld">
          <img src="img/portal-darkworld.png" loading="lazy" />
          <div className="title">Darkworld</div>
        </div>
        <div className="buster-box">
          <div className="buster-btn buster-gold x2 active">
            <div className="buster-icn"></div>
            <div className="timerbox">
              <div className="timer">4:32:33</div>
            </div>
          </div>
        </div>
        <div className="monster"></div>
        <div className="monster-prg-box-all">
          <div className="lvl-prg">3/10</div>
          <div className="name">The boss name</div>
          <div className="health">
            <div className="p100">
              <div className="prg"></div>
            </div>
            <div className="num">
              <div className="from">8888K</div>
              <div className="to">6969K</div>
            </div>
          </div>
          <div className="timer">
            <div className="p100">
              <div className="prg"></div>
            </div>
            <div className="time">
              <div className="txt">12:22</div>
            </div>
          </div>
          <div className="loc-list back">
            <div className="loc-back">
              <div className="lvl-prg-num">6969K</div>
              <div className="lvl-prg-text">LVL</div>
              <div className="lvl-prg-back">назад</div>
            </div>
            <div className="locs">
              <div className="loc">
                <div className="loc-text">151</div>
                <div className="loc-text2">lvl</div>
              </div>
              <div className="loc">
                <div className="loc-text">152</div>
                <div className="loc-text2">lvl</div>
              </div>
              <div className="loc">
                <div className="loc-text">153</div>
                <div className="loc-text2">lvl</div>
              </div>
              <div className="loc">
                <div className="loc-text">154</div>
                <div className="loc-text2">lvl</div>
              </div>
              <div className="loc">
                <div className="loc-text">155</div>
                <div className="loc-text2">lvl</div>
              </div>
              <div className="loc">
                <div className="loc-text">156</div>
                <div className="loc-text2">lvl</div>
              </div>
            </div>
          </div>
        </div>
        <div className="back-boss-box">
          <div className="color-btn">
            <div className="color-btn-text">BACK TO BOSS</div>
          </div>
        </div>
        <div className="boss-drop-box">
          <div className="bd-name">предметы боссов</div>
          <div className="bd-drops">
            <div className="bd-stone">
              <img src="img/ms-stone-blue.png" loading="lazy" />
            </div>
            <div className="bd-check-box check">
              <div className="bd-check"></div>
            </div>
          </div>
          <div className="bd-drops two">
            <div className="bd-stone">
              <img src="img/ms-stone-green.png" loading="lazy" />
            </div>
            <div className="bd-check-box">
              <div className="bd-check"></div>
            </div>
          </div>
          <div className="bd-drops chest received">
            <div className="bd-stone">
              <img src="img/change-sun1.png" loading="lazy" />
            </div>
            <div className="bd-check-box1 check">
              <div className="bd-check"></div>
            </div>
            <div className="bd-check-box2 check">
              <div className="bd-check"></div>
            </div>
            <div className="bd-check-box3">
              <div className="bd-check"></div>
            </div>
            <div className="end-banner">
              <p className="txt">At next reborn</p>
            </div>
          </div>
        </div>
      </div>
      <div className="left-side">
        <div className="left-panel">
          <div className="heroes-list-all-box">
            <div className="dps-dpc-panel-box">
              <div className="dpc">
                <div className="value">20349</div>
                <div className="mlt-prm">x3212</div>
                <div className="title">
                  DPC
                  <div className="icon-dpc"></div>
                </div>
              </div>
              <div className="dps">
                <div className="value">234234T</div>
                <div className="mlt-prm">x3212</div>
                <div className="title">
                  DPS
                  <div className="icon-dps"></div>
                </div>
              </div>
            </div>
            <div className="all-heroes-box">
              <div className="all-heroes-box-scroll">
                <div className="hero-card-box-all">
                  <div className="hero-card starterpack">
                    <div
                      className="btn-close-x"
                      style={{
                        zoom: "0.75",
                        top: "0px",
                        right: "0px",
                      }}
                    ></div>
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-328/x2/ava/tithero-328-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">Осталось</div>
                    <div className="hero-dps-box">
                      <div className="st-time">15:01:37</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Tokuda Arisu</div>
                    </div>
                    <div className="btn-buy starterpack">
                      <div className="txt">Купить</div>
                    </div>
                  </div>
                  <div className="hero-card highlight">
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">
                      level
                      <div className="hero-level">6969</div>
                    </div>
                    <div className="hero-dps-box">
                      dps
                      <div className="hero-dps">6969K</div>
                    </div>
                    <div className="hero-power-box">
                      power
                      <div className="hero-power">223</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Murayama Naora Blowjob</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">
                        <div className="gold">
                          <span className="f-gold">10</span>
                        </div>
                        <div className="color-btn-text1">Hire</div>
                      </div>
                    </div>
                    <div className="v2-hero-notif notif notif10"></div>
                    <div className="hero-abil-icon">
                      <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
                    </div>
                  </div>
                  <div className="hero-card disabled">
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">
                      level
                      <div className="hero-level">6969</div>
                    </div>
                    <div className="hero-dps-box">
                      dps
                      <div className="hero-dps">6969K</div>
                    </div>
                    <div className="hero-power-box">
                      power
                      <div className="hero-power">223</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Murayama Naora Blowjob</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">
                        <div className="gold">
                          <span className="f-gold">6969K</span>
                        </div>
                        <div className="color-btn-text1">hire</div>
                      </div>
                    </div>
                  </div>
                  <div className="hero-card bronzeCard">
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">
                      level
                      <div className="hero-level">6969</div>
                    </div>
                    <div className="hero-dps-box">
                      dps
                      <div className="hero-dps">6969K</div>
                    </div>
                    <div className="hero-power-box">
                      power
                      <div className="hero-power">223</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Murayama Naora Blowjob</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">
                        <div className="gold">
                          <span className="f-gold">6969K</span>
                        </div>
                        <div className="color-btn-text1">up</div>
                      </div>
                    </div>
                    <div className="hero-abil-icon">
                      <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
                    </div>
                  </div>
                  <div className="hero-card silverCard">
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">
                      level
                      <div className="hero-level">6969</div>
                    </div>
                    <div className="hero-dps-box">
                      dps
                      <div className="hero-dps">6969K</div>
                    </div>
                    <div className="hero-power-box">
                      power
                      <div className="hero-power">223</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Murayama Naora Blowjob</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">
                        <div className="gold">
                          <span className="f-gold">6969K</span>
                        </div>
                        <div className="color-btn-text1">up</div>
                      </div>
                    </div>
                    <div className="hero-abil-icon">
                      <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
                    </div>
                  </div>
                  <div className="hero-card goldCard">
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">
                      level
                      <div className="hero-level">6969</div>
                    </div>
                    <div className="hero-dps-box">
                      dps
                      <div className="hero-dps">6969K</div>
                    </div>
                    <div className="hero-power-box">
                      power
                      <div className="hero-power">223</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Murayama Naora Blowjob</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">
                        <div className="gold">
                          <span className="f-gold">6969K</span>
                        </div>
                        <div className="color-btn-text1">up</div>
                      </div>
                    </div>
                    <div className="hero-abil-icon">
                      <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
                    </div>
                  </div>
                  <div className="hero-card">
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">
                      level
                      <div className="hero-level">6969</div>
                    </div>
                    <div className="hero-dps-box">
                      dps
                      <div className="hero-dps">6969K</div>
                    </div>
                    <div className="hero-power-box">
                      power
                      <div className="hero-power">223</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Murayama Naora Blowjob</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">
                        <div className="gold">
                          <span className="f-gold">6969K</span>
                        </div>
                        <div className="color-btn-text1">up</div>
                      </div>
                    </div>
                    <div className="hero-abil-icon">
                      <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="x2-btn-all-box">
              <div className="x2-btn selected">
                <div className="x2-btn-text">x1</div>
              </div>
              <div className="x2-btn">
                <div className="x2-btn-text">x10</div>
              </div>
              <div className="x2-btn">
                <div className="x2-btn-text">x25</div>
              </div>
              <div className="x2-btn">
                <div className="x2-btn-text">x100</div>
              </div>
              <div className="x2-btn">
                <div className="x2-btn-text">x200</div>
              </div>
              <div className="x2-btn">
                <div className="x2-btn-text">x500</div>
              </div>
              <div className="x2-btn">
                <div className="x2-btn-text">x1000</div>
              </div>
            </div>
          </div>
          <div className="womens-btns-screen">
            <div className="womens-btns-content">
              <div className="women-btn-wrap heros">
                <div className="title">HEROS</div>
                <div className="women-btn-box">
                  <div className="img-wrap">
                    <img
                      src="img/images/hero-all/tithero-5001/x2/tithero-5001-1.jpg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="women-btn-wrap supheros">
                <div className="title">SUPERHEROS</div>
                <div className="women-btn-box">
                  <div className="img-wrap">
                    <img
                      src="img/images/superhero/suphero-03/x2/03sh-1.jpg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="women-btn-wrap angels">
                <div className="title">ANGELS</div>
                <div className="women-btn-box">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-1/x2/goddess-1.jpg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="angels-all-box">
            <div className="angels-cards-content">
              <div className="content-header">
                <div className="title">ANGELS</div>
                <div className="color-btn chest">
                  <div className="btn-img"></div>
                </div>
                <div className="color-btn info">i</div>
              </div>
              <div className="angels-scroll-box">
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
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-2/x2/goddess-1.jpg"
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
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box lock">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-3/x2/goddess-1.jpg"
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
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box lock">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-4/x2/goddess-1.jpg"
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
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box lock">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-5/x2/goddess-1.jpg"
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
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box lock">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-6/x2/goddess-1.jpg"
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
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box lock">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-2/x2/goddess-1.jpg"
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
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box lock">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-2/x2/goddess-1.jpg"
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
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-info-content">
              <div className="trophy-res-box-all">
                <div className="trophy-res-box spirit">
                  <div className="trophy-value">1000</div>
                  <div className="trophy-value-btn-add angels"></div>
                </div>
                <div className="trophy-res-box spirit2">
                  <div className="trophy-value">1000</div>
                  <div className="trophy-value-btn-add"></div>
                </div>
              </div>
              <div className="content-header">
                <div className="btn-close-x"></div>
                <div className="color-btn info">i</div>
                <div className="title">
                  Ангел
                  <div className="angel-name">Amaterasu</div>
                </div>
                <div className="dps">
                  <div className="value">2.32B</div>
                  <div className="dps-title">
                    DPS
                    <div className="icon-dps"></div>
                  </div>
                </div>
                <div className="angels-heros-title">Героини Ангела</div>
              </div>
              <div className="angels-icons-box-all">
                <div className="angels-icons-scroll-box">
                  <div className="angel-avatar-box">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-1/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box selected">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-2/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box lock">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-3/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box lock">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-4/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box lock">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-5/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box lock">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-6/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box lock">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-6/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box lock">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-6/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="color-btn chest">
                  <div className="btn-img"></div>
                </div>
              </div>
              <div className="selected-angel-box">
                <div className="angel-card-box">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-2/x2/goddess-1.jpg"
                      loading="lazy"
                    />
                    <div className="b-fs"></div>
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
                    <div className="text-box">
                      <div className="text1">
                        Current Star
                        <div className="buff-level-info">
                          Max Buff Level:
                          <div className="level-value">250</div>
                        </div>
                        <div className="buff-bonus-info">
                          Buff Bonus:
                          <div className="buff-value">x3</div>
                        </div>
                      </div>
                      <div className="text2">
                        Current Star
                        <div className="buff-level-info">
                          Max Buff Level:
                          <div className="level-value">250</div>
                        </div>
                        <div className="buff-bonus-info">
                          Buff Bonus:
                          <div className="buff-value">x3</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    </div>
                  </div>
                  <div className="arrow-box-all">
                    <div className="btn-scroll-card left"></div>
                    <div className="btn-scroll-card right"></div>
                  </div>
                  <div className="color-btn green get-angel">
                    <div className="color-btn-text">Get Angel</div>
                  </div>
                </div>
                <div className="progress-box">
                  <div className="selected-angel-icons-box">
                    <div className="angel-avatar-box">
                      <div className="angel-avatar-wrap">
                        <img
                          className="angel-avatar"
                          src="img/images/goddess/goddess-2/comics/ava/goddess-com-ava-1.jpg "
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="angel-avatar-box">
                      <div className="angel-avatar-wrap">
                        <img
                          className="angel-avatar"
                          src="img/images/goddess/goddess-2/comics/ava/goddess-com-ava-2.jpg "
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="angel-avatar-box lock">
                      <div className="angel-avatar-wrap">
                        <img
                          className="angel-avatar"
                          src="img/images/goddess/goddess-2/comics/ava/goddess-com-ava-3.jpg "
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="angel-avatar-box lock">
                      <div className="angel-avatar-wrap">
                        <img
                          className="angel-avatar"
                          src="img/images/goddess/goddess-2/comics/ava/goddess-com-ava-4.jpg "
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="selected-angel-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "60%",
                        }}
                      ></div>
                    </div>
                    <div className="progress-level-wrap">
                      <div className="progress-level l1">
                        <div className="progress-level-txt">200</div>
                      </div>
                      <div className="progress-level l2">
                        <div className="progress-level-txt">500</div>
                      </div>
                      <div className="progress-level l3">
                        <div className="progress-level-txt">1000</div>
                      </div>
                      <div className="progress-level l4">
                        <div className="progress-level-txt">2000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="angels-heros-box-wrap">
                <div className="angels-heros-box">
                  <div className="hero-page-wrapper">
                    <div className="hero-btn-card-add">
                      <div className="color-btn add">
                        <div className="color-btn-text">
                          <div className="color-btn-text">+</div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-card disabled">
                      <div className="hero-avatar-box">
                        <div className="hero-avatar-wrap">
                          <img
                            className="hero-avatar"
                            src="img/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="sh2-icon-forgirl">
                          <img src="img/cur2-barbarian.png" loading="lazy" />
                        </div>
                        <div className="hero-level-box">
                          lvl
                          <div className="hero-level">20</div>
                        </div>
                        <div className="hero-dps-box">
                          dps
                          <div className="hero-dps">1.5M</div>
                        </div>
                      </div>
                      <div className="color-btn blue">
                        <div className="color-btn-text">buy</div>
                      </div>
                    </div>
                    <div className="hero-card">
                      <div className="hero-avatar-box">
                        <div className="hero-avatar-wrap">
                          <img
                            className="hero-avatar"
                            src="img/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="sh2-icon-forgirl">
                          <img src="img/cur2-barbarian.png" loading="lazy" />
                        </div>
                        <div className="hero-level-box">
                          lvl
                          <div className="hero-level">20</div>
                        </div>
                        <div className="hero-dps-box">
                          dps
                          <div className="hero-dps">1.5M</div>
                        </div>
                      </div>
                      <div className="color-btn green">
                        <div className="color-btn-text">
                          <div className="gold">
                            <span className="f-gold">6969K</span>
                          </div>
                          <div className="color-btn-text">buff up</div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-card">
                      <div className="hero-avatar-box">
                        <div className="hero-avatar-wrap">
                          <img
                            className="hero-avatar"
                            src="img/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="sh2-icon-forgirl">
                          <img src="img/cur2-barbarian.png" loading="lazy" />
                        </div>
                        <div className="hero-level-box">
                          lvl
                          <div className="hero-level">20</div>
                        </div>
                        <div className="hero-dps-box">
                          dps
                          <div className="hero-dps">1.5M</div>
                        </div>
                      </div>
                      <div className="color-btn green">
                        <div className="color-btn-text">
                          <div className="gold">
                            <span className="f-gold">6969K</span>
                          </div>
                          <div className="color-btn-text">buff up</div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-card">
                      <div className="hero-avatar-box">
                        <div className="hero-avatar-wrap">
                          <img
                            className="hero-avatar"
                            src="img/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="sh2-icon-forgirl">
                          <img src="img/cur2-barbarian.png" loading="lazy" />
                        </div>
                        <div className="hero-level-box">
                          lvl
                          <div className="hero-level">20</div>
                        </div>
                        <div className="hero-dps-box">
                          dps
                          <div className="hero-dps">1.5M</div>
                        </div>
                      </div>
                      <div className="color-btn green">
                        <div className="color-btn-text">
                          <div className="gold">
                            <span className="f-gold">6969K</span>
                          </div>
                          <div className="color-btn-text">buff up</div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-card">
                      <div className="hero-avatar-box">
                        <div className="hero-avatar-wrap">
                          <img
                            className="hero-avatar"
                            src="img/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="sh2-icon-forgirl">
                          <img src="img/cur2-barbarian.png" loading="lazy" />
                        </div>
                        <div className="hero-level-box">
                          lvl
                          <div className="hero-level">20</div>
                        </div>
                        <div className="hero-dps-box">
                          dps
                          <div className="hero-dps">1.5M</div>
                        </div>
                      </div>
                      <div className="color-btn green">
                        <div className="color-btn-text">
                          <div className="gold">
                            <span className="f-gold">6969K</span>
                          </div>
                          <div className="color-btn-text">buff up</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-scroll-dark left slick-disabled"></div>
                <div className="btn-scroll-dark right"></div>
                <div className="x2-btn">
                  <div className="x2-btn-text">x10</div>
                </div>
              </div>
              <div className="supheros-bottom-content">
                <div className="supheros-bonus-wrap">
                  SuperHeroes Bonus:
                  <div className="supheros-bonus-value">0</div>
                </div>
                <div className="color-btn supheros">
                  <div className="color-btn-text">SuperHeroes</div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-all-box">
            <div className="skills-all">
              <div className="skills-pic in-progress">
                <img src="img/skill-icons/skill-icon01.png" loading="lazy" />
                <div className="timer">00:00:20</div>
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic idle">
                <img
                  className="icon"
                  src="img/skill-icons/skill-icon02.png"
                  loading="lazy"
                />
                <div className="timer">00:01:11</div>
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic">
                <img src="img/skill-icons/skill-icon03.png" loading="lazy" />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic">
                <img src="img/skill-icons/skill-icon04.png" loading="lazy" />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic disabled">
                <img src="img/skill-icons/skill-icon05.png" loading="lazy" />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic disabled">
                <img src="img/skill-icons/skill-icon06.png" loading="lazy" />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic disabled">
                <img src="img/skill-icons/skill-icon07.png" loading="lazy" />
                <div className="skills-pic-disabled"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs-all-box">
          <div className="tabs-all heroes selected">
            <div className="tabs-name">Heroes</div>
            <div className="tabs-pic">
              <img src="img/tab-01.png" loading="lazy" />
            </div>
          </div>
          <div className="tabs-all">
            <div className="tabs-name">Album</div>
            <div className="tabs-pic">
              <img src="img/tab-05.png" loading="lazy" />
            </div>
          </div>
          <div className="tabs-all">
            <div className="tabs-name">Guild</div>
            <div className="tabs-pic">
              <img src="img/tab-08.png" loading="lazy" />
            </div>
          </div>
          <div className="tabs-all">
            <div className="tabs-name">Rating</div>
            <div className="tabs-pic">
              <img src="img/tab-02.png" loading="lazy" />
            </div>
          </div>
          <div className="tabs-all w-house2">
            <div className="tabs-name">Women's</div>
            <div className="tabs-pic">
              <img src="img/tab-11.png" loading="lazy" />
            </div>
          </div>
          <div className="tabs-all w-house">
            <div className="tabs-name">Angels</div>
            <div className="tabs-pic">
              <img src="img/tab-12.png" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      <div id="popupAll" className="popup-hiden">
        <div id="popupWrapper" className="popup-layer">
          <div className="screen-blend-55"></div>
          <div id="popupContainer" className="popup-in">
            <div className="m-popup sign-in pop-in">
              <div className="title">Вход</div>
              <div className="color-box"></div>
              <div className="content sign-in1 error">
                <div className="err-msg1">Требуется пароль</div>
                <div className="sign-in-form">
                  <div className="block-a">
                    <label className="tfield username">
                      Имя пользователя
                      <input
                        type="text"
                        name="username"
                        className="itext username"
                      />
                    </label>
                    <label className="tfield password">
                      Пароль
                      <input
                        type="password"
                        name="password"
                        className="itext password"
                      />
                      <div className="note">Забыли пароль?</div>
                    </label>
                  </div>
                  <div className="btn-simple-gold btn-ok">Войти</div>
                  <div className="alt-step">
                    Нет пароля?&nbsp;
                    <span className="go">Регистрация</span>
                  </div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>

            <div className="m-popup sign-in pop-reg">
              <div className="title">Регистрация</div>
              <div className="color-box"></div>
              <div className="content sign-up2">
                <div className="text-1">
                  На ваш почтовый адрес было отправлено письмо с кодом
                  подтверждения. Пожалуйста, введите его тут
                </div>
                <div className="megapack-banner">
                  <div className="g1">
                    <div className="num">+100%</div>
                    <div className="txt">Шанс выпадения</div>
                  </div>
                  <div className="g2 tickets">
                    <div className="num">+5</div>
                    <div className="txt">tickets</div>
                  </div>
                  <div className="g3">
                    <div className="num">+10</div>
                    <div className="txt">DPC</div>
                  </div>
                </div>
                <div className="sign-up-form">
                  <div className="block-a">
                    <label className="tfield code">
                      Код подтверждения
                      <p className="error"></p>
                      <input type="text" name="code" className="itext code" />
                    </label>
                    <label className="tfield check">
                      Возникла проблема?&nbsp;
                      <a className="verifyHelp" href="#">
                        Кликните здесь!
                      </a>
                    </label>
                  </div>
                  <div className="btn-simple-gold btn-ok">Подтвердить</div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>

            <div className="m-popup chests-shop">
              <div className="title">Chest Shop</div>
              <div className="content">
                <div className="content-header">
                  <div className="trophy-res-box diamonds">
                    <div className="trophy-value">1000</div>
                    <div className="trophy-value-btn-add"></div>
                  </div>
                  <div className="trophy-res-box oil">
                    <div className="trophy-value">1000</div>
                    <div className="trophy-value-btn-add"></div>
                  </div>
                  <div className="trophy-res-box spirit">
                    <div className="trophy-value">1000</div>
                    <div className="trophy-value-btn-add"></div>
                  </div>
                </div>
                <div className="item-box">
                  <div className="store-item-box">
                    <div className="store-name">Boss Chest</div>
                    <div className="item">
                      <img src="img/change-sun1.png" loading="lazy" />
                      <div className="reward-value">100</div>
                    </div>
                    <div className="chest-currency"></div>
                    <div className="color-btn gold">
                      <div className="color-btn-text">Open</div>
                    </div>
                  </div>
                  <div className="store-item-box orange">
                    <div className="store-name">Superhero Chest</div>
                    <div className="item">
                      <img
                        className="winner-prize"
                        src="img/sh-icon-chest-128.png"
                        loading="lazy"
                      />
                      <div className="reward-value">100</div>
                    </div>
                    <div className="chest-currency"></div>
                    <div className="color-btn gold">
                      <div className="color-btn-text">Open</div>
                    </div>
                  </div>
                  <div className="store-item-box blue">
                    <div className="store-name">Superhero Chest</div>
                    <div className="item">
                      <img src="img/sh-icon-chest-dark.png" loading="lazy" />
                      <div className="reward-value">100</div>
                    </div>
                    <div className="chest-currency"></div>
                    <div className="color-btn gold">
                      <div className="color-btn-text">Open</div>
                    </div>
                  </div>
                  <div className="store-item-box gold">
                    <div className="store-name">Angel Chest</div>
                    <div className="item">
                      <img src="img/darkworld-chest-agels.png" loading="lazy" />
                      <div className="reward-value">100</div>
                    </div>
                    <div className="chest-currency"></div>
                    <div className="color-btn gold">
                      <div className="color-btn-text">Open</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>

            <div className="m-popup busters gold-coins">
              <div className="title">Нужен Бонус Сейчас?</div>
              <div className="content">
                <div className="buster-imgs-box">
                  <div className="buster-stand"></div>
                  <div className="buster-icn"></div>
                  <div className="buster-value">x2</div>
                </div>
                <div className="title">
                  Получи
                  <div className="dps-value">x2</div>к Золоту
                </div>
                <div className="text-description">
                  Описание оффера, текст про оффер
                </div>
                <div className="time-of-action">
                  Время действия бонуса
                  <div className="buster-name">DPS x4</div>
                  <div className="time">12h:35m:50s</div>
                </div>
                <div className="color-btn gold bay">
                  <div className="color-btn-text">
                    <span className="f-gold">50</span>
                  </div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>

            <div className="m-popup add-resources-popup">
              <div className="title">Купите еще gold!</div>
              <div className="res gold">
                <div className="item undefined">
                  <div className="icon gold time">
                    <div className="reborn">
                      <img src="img/ic-abil-reborn.png" loading="lazy" />
                    </div>
                    <div className="gold">
                      <img src="img/ic-abil-gold.png" loading="lazy" />
                    </div>
                    <div className="dark_gold">
                      <img src="img/v2-res-dark.png" loading="lazy" />
                    </div>
                    <div className="shards">
                      <img src="img/ic-abil-butil.png" loading="lazy" />
                    </div>
                    <div className="gems">
                      <img src="img/ic-abil-rubin.png" loading="lazy" />
                    </div>
                    <div className="gold-shards">
                      <img src="img/ic-abil-gold-but.png" loading="lazy" />
                    </div>
                    <div className="ice_gold">
                      <img src="img/ic-ice_gold.png" loading="lazy" />
                    </div>
                    <div className="newtime t1h">
                      <div className="newclocktime">1</div>
                    </div>
                    <div className="rate red">+%</div>
                  </div>
                  <div className="desc-box with-reward">
                    <div className="desc-title">Gold for 1h</div>
                    <div className="desc-price">
                      <span>
                        <span className="price gold glow">4.21BD25</span>
                      </span>
                    </div>
                    <div className="decs-text">
                      You instantly get Gold, as if you played for 1h.
                    </div>
                  </div>
                  <div className="btn-panel">
                    <div className="btn-box">
                      <div className="btn-buy">
                        <div className="price diamonds">5</div>
                        <div className="txt">Buy</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item undefined">
                  <div className="icon gold time">
                    <div className="reborn">
                      <img src="img/ic-abil-reborn.png" loading="lazy" />
                    </div>
                    <div className="gold">
                      <img src="img/ic-abil-gold.png" loading="lazy" />
                    </div>
                    <div className="dark_gold">
                      <img src="img/v2-res-dark.png" loading="lazy" />
                    </div>
                    <div className="shards">
                      <img src="img/ic-abil-butil.png" loading="lazy" />
                    </div>
                    <div className="gems">
                      <img src="img/ic-abil-rubin.png" loading="lazy" />
                    </div>
                    <div className="gold-shards">
                      <img src="img/ic-abil-gold-but.png" loading="lazy" />
                    </div>
                    <div className="ice_gold">
                      <img src="img/ic-ice_gold.png" loading="lazy" />
                    </div>
                    <div className="newtime t6h">
                      <div className="newclocktime">6</div>
                    </div>
                    <div className="rate red">+%</div>
                  </div>
                  <div className="desc-box with-reward">
                    <div className="desc-title">Gold for 6h</div>
                    <div className="desc-price">
                      <span>
                        <span className="price gold glow">25.2BD25</span>
                      </span>
                    </div>
                    <div className="decs-text">
                      You instantly get Gold, as if you played for 6h.
                    </div>
                  </div>
                  <div className="btn-panel">
                    <div className="btn-box">
                      <div className="btn-buy">
                        <div className="price diamonds">8</div>
                        <div className="txt">Buy</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item undefined">
                  <div className="icon gold time">
                    <div className="reborn">
                      <img src="img/ic-abil-reborn.png" loading="lazy" />
                    </div>
                    <div className="gold">
                      <img src="img/ic-abil-gold.png" loading="lazy" />
                    </div>
                    <div className="dark_gold">
                      <img src="img/v2-res-dark.png" loading="lazy" />
                    </div>
                    <div className="shards">
                      <img src="img/ic-abil-butil.png" loading="lazy" />
                    </div>
                    <div className="gems">
                      <img src="img/ic-abil-rubin.png" loading="lazy" />
                    </div>
                    <div className="gold-shards">
                      <img src="img/ic-abil-gold-but.png" loading="lazy" />
                    </div>
                    <div className="ice_gold">
                      <img src="img/ic-ice_gold.png" loading="lazy" />
                    </div>
                    <div className="newtime t24h">
                      <div className="newclocktime">24</div>
                    </div>
                    <div className="rate red">+%</div>
                  </div>
                  <div className="desc-box with-reward">
                    <div className="desc-title">Gold for 24h</div>
                    <div className="desc-price">
                      <span>
                        <span className="price gold glow">101BD25</span>
                      </span>
                    </div>
                    <div className="decs-text">
                      You instantly get Gold, as if you played for 24h.
                    </div>
                  </div>
                  <div className="btn-panel">
                    <div className="btn-box">
                      <div className="btn-buy">
                        <div className="price diamonds">15</div>
                        <div className="txt">Buy</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item undefined">
                  <div className="icon gold time">
                    <div className="reborn">
                      <img src="img/ic-abil-reborn.png" loading="lazy" />
                    </div>
                    <div className="gold">
                      <img src="img/ic-abil-gold.png" loading="lazy" />
                    </div>
                    <div className="dark_gold">
                      <img src="img/v2-res-dark.png" loading="lazy" />
                    </div>
                    <div className="shards">
                      <img src="img/ic-abil-butil.png" loading="lazy" />
                    </div>
                    <div className="gems">
                      <img src="img/ic-abil-rubin.png" loading="lazy" />
                    </div>
                    <div className="gold-shards">
                      <img src="img/ic-abil-gold-but.png" loading="lazy" />
                    </div>
                    <div className="ice_gold">
                      <img src="img/ic-ice_gold.png" loading="lazy" />
                    </div>
                    <div className="newtime t72h">
                      <div className="newclocktime">72</div>
                    </div>
                    <div className="rate red">+%</div>
                  </div>
                  <div className="desc-box with-reward">
                    <div className="desc-title">Gold for 72h</div>
                    <div className="desc-price">
                      <span>
                        <span className="price gold glow">303BD25</span>
                      </span>
                    </div>
                    <div className="decs-text">
                      You instantly get Gold, as if you played for 72h.
                    </div>
                  </div>
                  <div className="btn-panel">
                    <div className="btn-box">
                      <div className="btn-buy">
                        <div className="price diamonds">22</div>
                        <div className="txt">Buy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>

            <div className="m-popup angels-heros">
              <div className="title">Heroes</div>
              <div className="content">
                <div className="trophy-value">
                  1000
                  <div className="trophy-value-btn-add angels">+</div>
                </div>
                <div className="header-box">
                  <div className="header-text-wrap">
                    <div className="header-text">Choose and Add Hero</div>
                  </div>
                </div>
                <div className="add-heros-skrollbox-wrap">
                  <div className="add-heros-skrollbox">
                    <div className="hero-avatar-box added">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                    <div className="hero-avatar-box">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar"
                          src="img/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="hero-dps-box">
                        dps
                        <div className="hero-dps">1.5M</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="color-btn golg add unselected">
                  <div className="color-btn-text">
                    Add For
                    <span className="f-gold">500</span>
                  </div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>

            <div className="m-popup angels-supheros-notadded">
              <div className="title">Superheroes</div>
              <div className="content">
                <div className="header-box">
                  <div className="header-text-wrap">
                    <div className="header-text">
                      Click to attach Your first Superhero to the Angel!
                    </div>
                  </div>
                </div>
                <div className="suphero-btn-card-add">
                  <div className="color-btn add">
                    <div className="color-btn-text">
                      <div className="color-btn-text">+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>

            <div className="m-popup angels-supheros-added">
              <div className="title">Superheroes</div>
              <div className="content">
                <div className="header-box">
                  <div className="dps">
                    <div className="value">2.32B</div>
                    <div className="dps-title">
                      DPS
                      <div className="icon-dps"></div>
                    </div>
                  </div>
                  <div className="trophy-res-box-all">
                    <div className="trophy-res-box spirit">
                      <div className="trophy-value">1000</div>
                      <div className="trophy-value-btn-add"></div>
                    </div>
                    <div className="trophy-res-box spirit2">
                      <div className="trophy-value">1000</div>
                      <div className="trophy-value-btn-add"></div>
                    </div>
                  </div>
                </div>
                <div className="content-box-all">
                  <div className="leftside-box-all">
                    <div className="hero-left-box">
                      <div className="filter-box">
                        <div className="btn-stars-wrap">
                          <div className="color-btn">
                            <div className="color-btn-text">
                              <img src="img/star1.png" loading="lazy" />
                            </div>
                          </div>
                          <div className="color-btn green">
                            <div className="color-btn-text">
                              <img src="img/star1.png" loading="lazy" />
                            </div>
                          </div>
                          <div className="color-btn">
                            <div className="color-btn-text">
                              <img src="img/star1.png" loading="lazy" />
                            </div>
                          </div>
                          <div className="color-btn">
                            <div className="color-btn-text">
                              <img src="img/star1.png" loading="lazy" />
                            </div>
                          </div>
                          <div className="color-btn">
                            <div className="color-btn-text">
                              <img src="img/star1.png" loading="lazy" />
                            </div>
                          </div>
                          <div className="color-btn">
                            <div className="color-btn-text">
                              <img src="img/star1-purple.png" loading="lazy" />
                            </div>
                          </div>
                        </div>
                        <div className="filter-btn-wrap">
                          <div className="filter-btn-value">
                            <div className="color-btn-text"></div>
                          </div>
                          <div className="filter-btn">
                            <div className="btn-text">Filter</div>
                            <div className="filter-options-box">
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img src="img/cur-c.png" loading="lazy" />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img src="img/cur-u.png" loading="lazy" />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img src="img/cur-r.png" loading="lazy" />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img src="img/cur-e.png" loading="lazy" />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img
                                    src="img/cur2-sword.png"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img
                                    src="img/cur2-quitar.png"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img
                                    src="img/cur2-cleric.png"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img
                                    src="img/cur2-druid.png"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img
                                    src="img/cur2-barbarian.png"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img
                                    src="img/cur2-ranger.png"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img
                                    src="img/cur2-wizard.png"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img src="img/cur2-gun.png" loading="lazy" />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img src="img/ico-click.png" loading="lazy" />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img src="img/ico-sword.png" loading="lazy" />
                                </div>
                              </div>
                              <div className="color-btn">
                                <div className="color-btn-text">
                                  <img src="img/ico-gold.png" loading="lazy" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="suphero-all-box">
                        <div className="suphero-btn-card-add">
                          <div className="color-btn add">
                            <div className="color-btn-text">
                              <div className="color-btn-text">+</div>
                            </div>
                          </div>
                        </div>
                        <li className="suphero-card check">
                          <div className="hero-pic-box">
                            <div className="hero-pic">
                              <img
                                src="img/images/superhero/suphero-01/x1/avatar/01sh-ava-5.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="herostar-box">
                              <div className="herostar lvl010"></div>
                            </div>
                          </div>
                          <div className="sh2-icon">
                            <img src="img/cur-c.png" loading="lazy" />
                          </div>
                          <div className="sh2-icon-forgirl">
                            <img src="img/cur2-sword.png" loading="lazy" />
                          </div>
                          <div className="v2-sh1-notif notif notif20"></div>
                        </li>
                        <li className="suphero-card">
                          <div className="hero-pic-box">
                            <div className="hero-pic">
                              <img
                                src="img/images/superhero/suphero-02/x1/avatar/02sh-ava-5.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="herostar-box">
                              <div className="herostar lvl010"></div>
                            </div>
                          </div>
                          <div className="sh2-icon">
                            <img src="img/icon-rare.png" loading="lazy" />
                          </div>
                          <div className="sh2-icon-forgirl">
                            <img src="img/cur2-quitar.png" loading="lazy" />
                          </div>
                          <div className="v2-sh1-notif notif notif20"></div>
                        </li>
                        <li className="suphero-card">
                          <div className="hero-pic-box">
                            <div className="hero-pic">
                              <img
                                src="img/images/superhero/suphero-03/x1/avatar/03sh-ava-5.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="herostar-box">
                              <div className="herostar lvl010"></div>
                            </div>
                          </div>
                          <div className="sh2-icon">
                            <img src="img/cur-c.png" loading="lazy" />
                          </div>
                          <div className="sh2-icon-forgirl">
                            <img src="img/cur2-cleric.png" loading="lazy" />
                          </div>
                          <div className="v2-sh1-notif notif notif20"></div>
                        </li>
                        <li className="suphero-card">
                          <div className="hero-pic-box">
                            <div className="hero-pic">
                              <img
                                src="img/images/superhero/suphero-04/x1/avatar/04sh-ava-5.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="herostar-box">
                              <div className="herostar lvl010"></div>
                            </div>
                          </div>
                          <div className="sh2-icon">
                            <img src="img/cur-u.png" loading="lazy" />
                          </div>
                          <div className="sh2-icon-forgirl">
                            <img src="img/cur2-druid.png" loading="lazy" />
                          </div>
                          <div className="v2-sh1-notif notif notif20"></div>
                        </li>
                        <li className="suphero-card">
                          <div className="hero-pic-box">
                            <div className="hero-pic">
                              <img
                                src="img/images/superhero/suphero-07/x1/avatar/07sh-ava-1.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="herostar-box">
                              <div className="herostar lvl02"></div>
                            </div>
                          </div>
                          <div className="sh2-icon">
                            <img src="img/cur-c.png" loading="lazy" />
                          </div>
                          <div className="sh2-icon-forgirl">
                            <img src="img/cur2-barbarian.png" loading="lazy" />
                          </div>
                          <div className="v2-sh1-notif notif notif20"></div>
                        </li>
                        <li className="suphero-card">
                          <div className="hero-pic-box">
                            <div className="hero-pic">
                              <img
                                src="img/images/superhero/suphero-08/x1/avatar/08sh-ava-2.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="herostar-box">
                              <div className="herostar lvl04"></div>
                            </div>
                          </div>
                          <div className="sh2-icon">
                            <img src="img/cur-u.png" loading="lazy" />
                          </div>
                          <div className="sh2-icon-forgirl">
                            <img src="img/cur2-ranger.png" loading="lazy" />
                          </div>
                          <div className="v2-sh1-notif notif notif20"></div>
                        </li>
                        <li className="suphero-card">
                          <div className="hero-pic-box">
                            <div className="hero-pic">
                              <img
                                src="img/images/superhero/suphero-09/x1/avatar/09sh-ava-2.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="herostar-box">
                              <div className="herostar lvl04"></div>
                            </div>
                          </div>
                          <div className="sh2-icon">
                            <img src="img/icon-rare.png" loading="lazy" />
                          </div>
                          <div className="sh2-icon-forgirl">
                            <img src="img/cur2-wizard.png" loading="lazy" />
                          </div>
                          <div className="v2-sh1-notif notif notif20"></div>
                        </li>
                        <li className="suphero-card">
                          <div className="hero-pic-box">
                            <div className="hero-pic">
                              <img
                                src="img/images/superhero/suphero-10/x1/avatar/10sh-ava-1.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="herostar-box">
                              <div className="herostar lvl02"></div>
                            </div>
                          </div>
                          <div className="sh2-icon">
                            <img src="img/cur-e.png" loading="lazy" />
                          </div>
                          <div className="sh2-icon-forgirl">
                            <img src="img/cur2-gun.png" loading="lazy" />
                          </div>
                          <div className="v2-sh1-notif notif notif20"></div>
                        </li>
                        <li className="suphero-card">
                          <div className="hero-pic-box">
                            <div className="hero-pic">
                              <img
                                src="img/images/superhero/suphero-13/x1/avatar/13sh-ava-1.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="herostar-box">
                              <div className="herostar lvl02"></div>
                            </div>
                          </div>
                          <div className="sh2-icon">
                            <img src="img/cur-c.png" loading="lazy" />
                          </div>
                          <div className="sh2-icon-forgirl">
                            <img src="img/cur2-barbarian.png" loading="lazy" />
                          </div>
                          <div className="v2-sh1-notif notif notif20"></div>
                        </li>
                        <li className="suphero-card">
                          <div className="hero-pic-box">
                            <div className="hero-pic">
                              <img
                                src="img/images/superhero/suphero-09/x1/avatar/09sh-ava-2.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="herostar-box">
                              <div className="herostar lvl04"></div>
                            </div>
                          </div>
                          <div className="sh2-icon">
                            <img src="img/icon-rare.png" loading="lazy" />
                          </div>
                          <div className="sh2-icon-forgirl">
                            <img src="img/cur2-wizard.png" loading="lazy" />
                          </div>
                          <div className="v2-sh1-notif notif notif20"></div>
                        </li>
                        <li className="suphero-card">
                          <div className="hero-pic-box">
                            <div className="hero-pic">
                              <img
                                src="img/images/superhero/suphero-10/x1/avatar/10sh-ava-1.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="herostar-box">
                              <div className="herostar lvl02"></div>
                            </div>
                          </div>
                          <div className="sh2-icon">
                            <img src="img/cur-e.png" loading="lazy" />
                          </div>
                          <div className="sh2-icon-forgirl">
                            <img src="img/cur2-gun.png" loading="lazy" />
                          </div>
                          <div className="v2-sh1-notif notif notif20"></div>
                        </li>
                        <li className="suphero-card">
                          <div className="hero-pic-box">
                            <div className="hero-pic">
                              <img
                                src="img/images/superhero/suphero-13/x1/avatar/13sh-ava-1.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="herostar-box">
                              <div className="herostar lvl02"></div>
                            </div>
                          </div>
                          <div className="sh2-icon">
                            <img src="img/cur-c.png" loading="lazy" />
                          </div>
                          <div className="sh2-icon-forgirl">
                            <img src="img/cur2-barbarian.png" loading="lazy" />
                          </div>
                          <div className="v2-sh1-notif notif notif20"></div>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div className="suphero-rightside-box-all">
                    <div className="suphero-right-box">
                      <div className="lhero-box">
                        <div className="lhero-pic">
                          <img
                            src="img/images/superhero/suphero-01/x1/01sh-5.jpg"
                            loading="lazy"
                          />
                          <img
                            className="star-up"
                            src="img/images/superhero/suphero-01/x1/01sh-5.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="topname-box">
                          <div className="lrare-box common"></div>
                          <div className="sh2-icon left">
                            <img src="img/cur-c.png" loading="lazy" />
                          </div>
                          <div className="sh2-icon-forgirl right">
                            <img src="img/cur2-sword.png" loading="lazy" />
                          </div>
                          <div className="lhero-name-box">
                            <div className="lhero-name">Haruko Yasha</div>
                          </div>
                        </div>
                        <div className="bottom-star-box gold">
                          <div className="big-herostar-box">
                            <div className="big-hero-star lvl010"></div>
                          </div>
                        </div>
                        <div className="bottom-star-box-girl-count-box">
                          <div className="sh2-prgbar-all gold">
                            <div
                              className="sh2-prgbar"
                              style={{
                                width: "36.6667%",
                              }}
                            ></div>
                            <div className="sh2-prgbar-text">110/300</div>
                          </div>
                          <div className="girl-bonus-box">
                            <div className="girl-bonus-pic">
                              <img
                                src="img/images/superhero/suphero-01/x1/avatar/01sh-ava-5.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="arrow-box-all">
                          <div className="btn-scroll left"></div>
                          <div className="btn-scroll right"></div>
                        </div>
                      </div>
                      <div className="rstar-box">
                        <div className="rname-box">girl effects</div>
                        <div className="bonus-lvl-box">
                          <div className="lvlbox-name">Aura of flame</div>
                          <div className="bonus-lvl-box-name">71-й уровень</div>
                          <div className="bonus-lvl-box-bonus-box">
                            <div className="bonus-lvl-box-bonus">
                              <div className="bonus-lvl-box-bonus">
                                DPS +17.5K%
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bonus-lvl-box next">
                          <div className="lvlbox-name">Hardened blades</div>
                          <div className="bonus-lvl-box-name">71-й уровень</div>
                          <div className="bonus-lvl-box-bonus-box">
                            <div className="bonus-lvl-box-bonus">
                              <div className="bonus-lvl-box-bonus">
                                +259.2% dps to
                                <div className="ff-sh2-icon">
                                  <img
                                    src="img/cur2-sword.png"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rbottom-box">
                          <div className="all-btn-box">
                            <div className="lvlup-btn undefined">
                              <div className="essence-text-box">
                                <div className="essence-icon"></div>
                                <div className="essence-text">256</div>
                              </div>
                              <div className="btn-text">level up</div>
                            </div>
                            <div className="v2-sh2-notif notif notif201"></div>
                            <div className="lvlup-btn right">
                              <div className="essence-text-box">
                                <div className="essence-icon"></div>
                                <div className="essence-text">256</div>
                              </div>
                              <div className="btn-text">level up</div>
                            </div>
                            <div className="xall-box">
                              <div className="xall-btn">x10</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rlevel-box upgrade">
                        <div className="rname-box">star bonus</div>
                        <div>
                          <div className="line-top-box"></div>
                          <div className="line-right-box"></div>
                          <div className="bonus-lvl-box undefined">
                            <div className="herostar-box">
                              <div className="herostar lvl010 ult"></div>
                            </div>
                            <div className="first-bonus-box">
                              <div className="box-name">Aura of flame</div>
                              <div className="bonus-size">x45</div>
                            </div>
                            <div className="second-bonus-box">
                              <div className="box-name">Hardened blades</div>
                              <div className="bonus-size">x45</div>
                            </div>
                          </div>
                          <div className="girl-bonus-box">
                            <div className="girl-bonus-pic">
                              <img
                                src="img/images/superhero/suphero-01/x1/avatar/01sh-ava-5.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="girl-5star"></div>
                            <div className="sh2-prgbar-all">
                              <div
                                className="sh2-prgbar"
                                style={{
                                  width: "73.3333%",
                                }}
                              ></div>
                              <div className="sh2-prgbar-text">110/150</div>
                            </div>
                          </div>
                          <div className="girl-bonus-box next">
                            <div className="girl-bonus-pic">
                              <img
                                src="img/images/superhero/suphero-02/x1/avatar/02sh-ava-5.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="girl-5star"></div>
                            <div className="sh2-prgbar-all">
                              <div
                                className="sh2-prgbar"
                                style={{
                                  width: "36.6667%",
                                }}
                              ></div>
                              <div className="sh2-prgbar-text">55/150</div>
                            </div>
                          </div>
                          <div className="bonus-hero-pic-box-upgrade">
                            <div className="bonus-hero-pic">
                              <img
                                src="img/images/superhero/suphero-01/x2/avatar/01sh-ava-6.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="bonus-buy-box-all">
                            <div className="color-btn green disabled">
                              <div className="color-btn-text">
                                <div>
                                  buy
                                  <span className="ff-but"></span>
                                  15
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dps-bonus-box-all">
                            <div className="dps-bonus-box-name-box">
                              <div className="dps-bonus-box-name">bonus</div>
                            </div>
                            <div className="dps-bonus-box">
                              <div className="dps-bonus">
                                <div>DPS +24.6K%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>

            <div className="m-popup angels-supheros-add">
              <div className="title">Superheroes</div>
              <div className="content">
                <div className="trophy-value">
                  1000
                  <div className="trophy-value-btn-add angels">+</div>
                </div>
                <div className="header-box">
                  <div className="header-text-wrap">
                    <div className="header-text">
                      Choose from the list and attach to the Angel
                    </div>
                  </div>
                </div>
                <div className="add-supheros-scrollbox-wrap">
                  <div className="add-supheros-scrollbox">
                    <div className="suphero-avatar-box added">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box selected">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="suphero-avatar-box">
                      <div className="suphero-avatar-wrap">
                        <img
                          className="suphero-avatar"
                          src="img/images/superhero/suphero-92/x2/92sh-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="stars-box">
                        <div className="star active"></div>
                        <div className="star active"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="sh2-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="color-btn golg add unselected">
                  <div className="color-btn-text">
                    Add For
                    <span className="f-gold">500</span>
                  </div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>

            <div className="m-popup angels-currency-shop">
              <div className="title">SHOP</div>
              <div className="content">
                <div className="keys-card-box">
                  <div className="keys-card-imgs-box">
                    <div className="currency-stand"></div>
                    <div className="currency-icn"></div>
                    <div className="currency-value">x100</div>
                  </div>
                  <div className="color-btn green bay">
                    <div className="color-btn-text">
                      <span className="f-gold">3.90</span>
                    </div>
                  </div>
                </div>
                <div className="keys-card-box">
                  <div className="keys-card-imgs-box">
                    <div className="currency-stand"></div>
                    <div className="currency-icn"></div>
                    <div className="currency-value">x100</div>
                  </div>
                  <div className="color-btn green bay">
                    <div className="color-btn-text">
                      <span className="f-gold">3.90</span>
                    </div>
                  </div>
                </div>
                <div className="keys-card-box">
                  <div className="keys-card-imgs-box">
                    <div className="currency-stand"></div>
                    <div className="currency-icn"></div>
                    <div className="currency-value">x100</div>
                  </div>
                  <div className="color-btn green bay">
                    <div className="color-btn-text">
                      <span className="f-gold">3.90</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>

            <div className="m-popup angels-info">
              <div className="title">Angels Info</div>
              <div className="content">
                <div className="text-box">
                  <div className="text">
                    <li>
                      Angels are unique girls who are among the elite. They help
                      our heroines fight monsters.
                    </li>
                    <br />
                    <li>
                      You can get Angel and her Stars by collecting Angel Soul
                      Pieces from Angel Chests in the Dark Angel Garden. You
                      will need Angel Spirit to open chests. Angel Spirit can be
                      collected from various events in the game and at the
                      Spirit Shop. The buff multiplier increases significantly
                      when Angels gain new stars.
                    </li>
                    <br />
                    <li>
                      Each Angel has six Heroines attached to her. You can add
                      more heroines to each Angel. You can buff each Heroine.
                      Also, Superheroines can be attached to each Angel. Combine
                      them in such a way as to get the most power.
                    </li>
                    <br />
                    <li>
                      You will need Angel Essence to buff Dark DPS. Angel
                      Essence can be collected from Events and Angel Chests.
                    </li>
                    <br />
                    <li>
                      Each buff increases Angel's level required to unlock
                      Angel's Erotic Album.
                    </li>
                  </div>
                </div>
                <div className="color-btn gold close">
                  <div className="color-btn-text">Закрыть</div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>
          </div>
        </div>
      </div>
      <WorldBtnBox pageName={pageName} />
    </div>
  );
}
