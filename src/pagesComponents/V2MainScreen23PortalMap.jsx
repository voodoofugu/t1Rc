import React, { useEffect } from "react";
import { useStylesLoaded } from "../components/StylesLoadedProvider";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "screen-achiev",
  "v2-screen-portal-map",
  "screen-fortuna-winpop",
  "v2-screen-world-district",
];

export default function V2MainScreen23PortalMapComponent({ pageName = "" }) {
  const currentPath = window.location.href.split("/").pop().split(".")[0];
  const { stylesLoaded } = useStylesLoaded();

  useEffect(() => {
    if (pageName === currentPath && stylesLoaded) {
      // все попапы
      const po = document.getElementById("popupAll");
      const re = document.querySelector(".popup-layer");
      const pInf = document.querySelector(".m-popup.fortuna-winpop2");
      const distPop = document.querySelector(".m-popup.world-district");

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

      const dungTreas = document.querySelector(".dungTreas-btn");
      dungTreas.addEventListener("click", () => {
        if (dungTreas.classList.contains("active")) {
          re.style.display = "block";
          setTimeout(function () {
            pInf.style.display = "block";
            po.classList.add("dialog-emersion-enter");
          }, 100);
        }
        dungTreas.classList.toggle("active");
      });

      const distPopB = document.querySelector(".progres-bar");
      distPopB.addEventListener("click", () => {
        re.style.display = "block";
        setTimeout(function () {
          distPop.style.display = "block";
          po.classList.add("dialog-emersion-enter");
        }, 100);
      });

      // имена локаций
      let locName1 = [
        // карта1
        "start tower",
        "old cathedral",
        "gorge of death I",
        "gorge of death II",
        "mysterious ziggurat",
        "royal court",
        "house on the cliff",
        "path to the bridge",
        "fighting arena",
        "entry to the dungeon",
      ];
      let locName2 = [
        // карта2
        "exit to the tower",
        "cursed castle",
        "watch tower",
        "suspicious steppe",
        "great tree",
        "sleeping dragon",
        "waterfall of truth",
        "lake of the lost",
        "troll cave",
        "outpost of change",
      ];
      let headTit = document.querySelector(".header-title");

      const locations = [...document.querySelectorAll(".map-bg")];
      locations.map((el) => {
        el.addEventListener("click", () => {
          if (el.closest(".loc-box").classList.contains("foropen")) {
            el.closest(".loc-box").classList.remove("foropen");
          }

          if (!el.closest(".loc-box").classList.contains("lock")) {
            locations.map((el) => {
              el.closest(".loc-box").classList.remove("active");
            });
            el.closest(".loc-box").classList.add("active");
          }
        });
      });

      const popUp = document.querySelector(".chest-pop-up");
      const chests = document.querySelectorAll(".chest");
      const win = document.querySelector(".main");
      [...chests].map((chest, index) => {
        if (chest.classList.contains("close")) {
          chest.querySelector(".chest-notif").innerHTML = "LP 1000";
        }
        // всплывашка
        if (!chest.classList.contains("open")) {
          chest.addEventListener("mouseenter", () => {
            // двигаем по X
            popUp.style.transform = `translateX(${
              chest.getBoundingClientRect().x -
              win.getBoundingClientRect().x -
              popUp.getBoundingClientRect().width / 2 +
              chest.getBoundingClientRect().width / 2
            }px)`;
            // двигаем по Y
            popUp.style.transform += ` translateY(${
              chest.getBoundingClientRect().y - win.getBoundingClientRect().y
            }px)`;

            popUp.classList.add("active");

            const addLeft = [0, 1, 2, 3];
            if (addLeft.includes(index)) {
              popUp.classList.add("left");
            }
            const addRigt = [16, 17, 18, 19];
            if (addRigt.includes(index)) {
              popUp.classList.add("right");
            }
            const center = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
            if (center.includes(index)) {
              popUp.classList.remove("left");
              popUp.classList.remove("right");
            }
          });
          chest.addEventListener("mouseleave", () => {
            popUp.classList.remove("active");
          });
        }

        // переключаем состояния сундуков
        chest.addEventListener("click", () => {
          let currentClassName = "";
          if (chest.classList.contains("ready")) {
            currentClassName = "ready";
          }
          if (chest.classList.contains("open")) {
            currentClassName = "open";
          }
          if (chest.classList.contains("closed")) {
            currentClassName = "closed";
          }

          if (currentClassName === "ready") {
            chest.classList.remove("ready");
            chest.classList.add("open");

            const chestOpen = [...document.querySelectorAll(".chest.open")];
            chestOpen.map((el) => {
              el.style.pointerEvents = "all";
            });
          }
          if (currentClassName === "open") {
            chest.classList.remove("open");
            chest.classList.add("closed");
          }
          if (currentClassName === "closed") {
            chest.classList.remove("closed");
            chest.classList.add("ready");
          }
        });
      });

      // стрелки смена карты
      const mapLoc = document.querySelector(".map-locs-wrap");
      const arL = document.querySelector(".arrow.left");
      const arR = document.querySelector(".arrow.right");
      arR.addEventListener("click", () => {
        if (mapLoc.classList.contains("map-01")) {
          mapLoc.classList.remove("map-01");
          mapLoc.classList.add("map-02");
        }
        if (mapLoc.classList.contains("map-02")) {
          arR.classList.add("unactive");
          arL.classList.remove("unactive");
        }
      });
      arL.addEventListener("click", () => {
        if (mapLoc.classList.contains("map-02")) {
          mapLoc.classList.remove("map-02");
          mapLoc.classList.add("map-01");
        }
        if (mapLoc.classList.contains("map-01")) {
          arL.classList.add("unactive");
          arR.classList.remove("unactive");
        }
      });

      // смена заголовков
      const locBox = document.querySelectorAll(".loc-box");
      locBox.forEach((item, index) => {
        item.addEventListener("click", () => {
          if (mapLoc.classList.contains("map-01")) {
            headTit.innerHTML = locName1[index];
          }
          if (mapLoc.classList.contains("map-02")) {
            headTit.innerHTML = locName2[index];
          }
        });
      });

      // тултип
      const tooltip = document.querySelector(".tooltip-layer");
      tooltip.style.display = "none";
      const acHint = document.querySelector(".achiev-hint");
      const popGirl = document.querySelectorAll(".pop-up-girl");
      [...popGirl].map((popGirl) => {
        popGirl.addEventListener("mouseenter", () => {
          tooltip.style.display = "block";
          acHint.style.left =
            popGirl.getBoundingClientRect().x -
            win.getBoundingClientRect().x -
            acHint.getBoundingClientRect().width / 2 +
            popGirl.getBoundingClientRect().width / 2 +
            "px";
          acHint.style.top =
            popGirl.getBoundingClientRect().y -
            win.getBoundingClientRect().y +
            56 +
            "px";
        });
        popUp.addEventListener("mouseleave", () => {
          tooltip.style.display = "none";
        });
      });
      return;
    }
    return () => {};
  }, [pageName, currentPath, stylesLoaded]);

  return (
    <HelmetForCss cssFiles={cssFiles}>
      <div className="main world2">
        <div className="main-bg"></div>
        <div className="portal-map-box">
          <div className="map-locs-wrap map-01">
            <div className="loc-box">
              <div className="map-bg map-location1">
                <svg>
                  <clipPath id="clipping-1">
                    <path d="M 0 320 L 129.29 320 L 215.03 0 L 0 0 L 0 320"></path>
                  </clipPath>
                </svg>
                <div className="station-wrap">
                  <div className="station"></div>
                  <div className="station-lvl-box">
                    <div className="lvl-box-text1">lvl</div>
                    <div className="lvl-box-text2">6969</div>
                  </div>
                </div>
                <div className="chest-wrap">
                  <div className="chest chest-1 open">
                    <div className="chest-notif">claim</div>
                  </div>
                  <div className="chest chest-2 ready">
                    <div className="chest-notif">claim</div>
                  </div>
                </div>
                <svg className="svg-frame">
                  <g>
                    <path d="M 0 320 L 129.29 320 L 215.03 0 L 0 0 L 0 320"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="loc-box">
              <div className="map-bg map-location2">
                <svg>
                  <clipPath id="clipping-2">
                    <path d="M 0 0 L 0 320 L 215.03 320 L 300.78 0 L 0 0"></path>
                  </clipPath>
                </svg>
                <div className="station-wrap">
                  <div className="station"></div>
                  <div className="station-lvl-box">
                    <div className="lvl-box-text1">lvl</div>
                    <div className="lvl-box-text2">6969</div>
                  </div>
                </div>
                <div className="chest-wrap">
                  <div className="chest chest-1 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                  <div className="chest chest-2 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                </div>
                <svg className="svg-frame">
                  <g>
                    <path d="M 0 0 L 0 320 L 215.03 320 L 300.78 0 L 0 0"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="loc-box active">
              <div className="map-bg map-location3">
                <svg>
                  <clipPath id="clipping-3">
                    <path d="M 344 0 L 258.25 320 L 0 320 L 85.74 0 L 344 0"></path>
                  </clipPath>
                </svg>
                <div className="station-wrap">
                  <div className="station"></div>
                  <div className="station-lvl-box">
                    <div className="lvl-box-text1">lvl</div>
                    <div className="lvl-box-text2">6969</div>
                  </div>
                </div>
                <div className="chest-wrap">
                  <div className="chest chest-1 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                  <div className="chest chest-2 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                </div>
                <svg className="svg-frame">
                  <g>
                    <path d="M 344 0 L 258.25 320 L 0 320 L 85.74 0 L 344 0"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="loc-box">
              <div className="map-bg map-location4">
                <div className="station-wrap">
                  <div className="station"></div>
                  <div className="station-lvl-box">
                    <div className="lvl-box-text1">lvl</div>
                    <div className="lvl-box-text2">6969</div>
                  </div>
                </div>
                <div className="chest-wrap">
                  <div className="chest chest-1 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                  <div className="chest chest-2 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                </div>
                <svg className="svg-frame">
                  <g>
                    <path d="M 344 0 L 258.25 320 L 0 320 L 85.74 0 L 344 0"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="loc-box">
              <div className="map-bg map-location5">
                <div className="station-wrap">
                  <div className="station"></div>
                  <div className="station-lvl-box">
                    <div className="lvl-box-text1">lvl</div>
                    <div className="lvl-box-text2">6969</div>
                  </div>
                </div>
                <div className="chest-wrap">
                  <div className="chest chest-1 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                  <div className="chest chest-2 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                </div>
                <svg className="svg-frame">
                  <g>
                    <path d="M 344 0 L 258.25 320 L 0 320 L 85.74 0 L 344 0"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="loc-box foropen">
              <div className="map-bg map-location6">
                <div className="station-wrap">
                  <div className="station"></div>
                  <div className="station-lvl-box">
                    <div className="lvl-box-text1">lvl</div>
                    <div className="lvl-box-text2">6969</div>
                  </div>
                </div>
                <div className="chest-wrap">
                  <div className="chest chest-1 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                  <div className="chest chest-2 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                </div>
                <svg className="svg-frame">
                  <g>
                    <path d="M 344 0 L 258.25 320 L 0 320 L 85.74 0 L 344 0"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="loc-box lock">
              <div className="map-bg map-location7">
                <div className="station-wrap">
                  <div className="station"></div>
                  <div className="station-lvl-box">
                    <div className="lvl-box-text1">lvl</div>
                    <div className="lvl-box-text2">6969</div>
                  </div>
                </div>
                <div className="chest-wrap">
                  <div className="chest chest-1 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                  <div className="chest chest-2 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                </div>
                <svg className="svg-frame">
                  <g>
                    <path d="M 344 0 L 258.25 320 L 0 320 L 85.74 0 L 344 0"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="loc-box lock">
              <div className="map-bg map-location8">
                <div className="station-wrap">
                  <div className="station"></div>
                  <div className="station-lvl-box">
                    <div className="lvl-box-text1">lvl</div>
                    <div className="lvl-box-text2">6969</div>
                  </div>
                </div>
                <div className="chest-wrap">
                  <div className="chest chest-1 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                  <div className="chest chest-2 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                </div>
                <svg className="svg-frame">
                  <g>
                    <path d="M 344 0 L 258.25 320 L 0 320 L 85.74 0 L 344 0"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="loc-box lock">
              <div className="map-bg map-location9">
                <svg>
                  <clipPath id="clipping-4">
                    <path d="M 301.78 0 L 85.74 0 L 0 320 L 301.78 320 L 301.78 0"></path>
                  </clipPath>
                </svg>
                <div className="station-wrap">
                  <div className="station"></div>
                  <div className="station-lvl-box">
                    <div className="lvl-box-text1">lvl</div>
                    <div className="lvl-box-text2">6969</div>
                  </div>
                </div>
                <div className="chest-wrap">
                  <div className="chest chest-1 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                  <div className="chest chest-2 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                </div>
                <svg className="svg-frame">
                  <g>
                    <path d="M 300.78 0 L 85.74 0 L 0 320 L 300.78 320 L 300.78 0"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="loc-box lock">
              <div className="map-bg map-location10">
                <svg>
                  <clipPath id="clipping-5">
                    <path d="M 216.03 0 L 216.03 320 L 0 320 L 85.74 0 L 216.03 0"></path>
                  </clipPath>
                </svg>
                <div className="station-wrap">
                  <div className="station"></div>
                  <div className="station-lvl-box">
                    <div className="lvl-box-text1">lvl</div>
                    <div className="lvl-box-text2">6969</div>
                  </div>
                </div>
                <div className="chest-wrap">
                  <div className="chest chest-1 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                  <div className="chest chest-2 closed">
                    <div className="chest-notif">claim</div>
                  </div>
                </div>
                <svg className="svg-frame">
                  <g>
                    <path d="M 215.03 0 L 215.03 320 L 0 320 L 85.74 0 L 215.03 0"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="inf-btn step5">
              <div className="inf-text">LP 5000</div>
            </div>
          </div>
          <div className="btn-close-x"></div>
          <div className="color-btn-info">i</div>
          <div className="title-wrap">
            <div className="header-title">—</div>
          </div>
          <div className="arrow left unactive"></div>
          <div className="arrow right"></div>
          <div className="progres-bar">
            <div className="bar-scale">
              <div className="bar-scale-patf" style={{ width: "40%" }}></div>
            </div>
            <div className="bar-value">40/100 LP</div>
            <div className="bar-text">
              This shows the progress of the location or LP
            </div>
          </div>
          <div className="dungTreas-btn">
            <div className="dungTreas-inf-ic">
              <div className="dungTreas-inf-box">
                <div className="dungTreas-tit">Dungeon Treasures</div>
                <div className="dungTreas-cont">
                  <div className="dungTreas-text">
                    Here you can get rewards after a certain time.
                    <br />
                    To level up the dungeon, you will need a
                    <p>special reward*</p>, which can be found in chests on the
                    map.
                  </div>
                  <div className="mark">
                    <img
                      className="prize-pic"
                      src="img/dungTreas-res-ic.png"
                      loading="lazy"
                    />
                    <div className="dungTreas-text">
                      <p>*special reward</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dungTreas-lvl">lvl 1</div>
            <div className="timer">20:48:43</div>
            <div className="claim-inf">claim</div>
          </div>
        </div>
        <div className="chest-pop-up">
          <div className="pop-up-bg"></div>
          <div className="chests-scroll-box">
            <div className="chests-scroll">
              <div className="pop-up-girl girl-1">
                <img
                  src="img/images/hero-all/tithero-5007/x1/ava/tithero-5007-1-ava.jpg"
                  loading="lazy"
                />
                <div className="value">100</div>
              </div>
              <div className="pop-up-girl girl-2">
                <img src="img/essence-80x80.png" loading="lazy" />
                <div className="value">100</div>
              </div>
              <div className="pop-up-girl girl-3">
                <img
                  src="img/images/hero-all/tithero-5009/x1/ava/tithero-5009-1-ava.jpg"
                  loading="lazy"
                />
                <div className="value">100</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tooltip-layer">
          <div className="achiev-hint">
            <div className="tooltip">
              <div className="descr">инфа сотка</div>
            </div>
          </div>
        </div>
        <div id="popupAll" className="dialog-emersion-enter">
          <div id="popupWrapper" className="popup-layer">
            <div className="screen-blend-55"></div>
            <div id="popupContainer" className="popup-in">
              <div className="m-popup fortuna-winpop2">
                <div className="title">Congratulations</div>
                <div className="color-box"></div>
                <div className="info-box">
                  Вы подняли уровень Dungeon Treasures!
                </div>
                <div className="winner-box">
                  <div className="fortuna-wheel special">
                    <div>
                      <div className="fortuna-prize">
                        <img
                          className="prize-pic"
                          src="img/dungTreas-res-ic.png"
                          loading="lazy"
                        />
                        <div className="fortuna-check-num res-amount">
                          4.53sD15
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fortuna-wheel">
                    <div>
                      <div className="fortuna-prize">
                        <img
                          className="prize-pic"
                          src="img/gold.png"
                          loading="lazy"
                        />
                        <div className="fortuna-check-num res-amount">
                          4.53sD15
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fortuna-wheel">
                    <div>
                      <div className="fortuna-prize">
                        <img
                          className="prize-pic"
                          src="img/gold.png"
                          loading="lazy"
                        />
                        <div className="fortuna-check-num res-amount">
                          4.53sD15
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fortuna-wheel piecesHero">
                    <div>
                      <div className="fortuna-prize">
                        <img
                          className="prize-pic"
                          src="img/images/superhero/suphero-761/x2/avatar/761sh-ava-1.jpg"
                          loading="lazy"
                        />
                        <div className="fortuna-check-num res-amount">
                          4.53sD15
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="color-btn">
                  <div className="color-btn-text">закрыть</div>
                </div>
                <div className="btn-close-x"></div>
              </div>
              <div className="m-popup world-district">
                <div className="title">Watchtowers</div>
                <div className="map-locs-wrap map-01">
                  <div className="map-locs-title">District loot</div>
                  <div className="loc-box">
                    <div className="map-bg map-location1"></div>
                    <div className="lock-num-box">
                      <div className="num"></div>
                    </div>
                  </div>
                </div>
                <div className="cw-clan-order-box-all">
                  <div className="rewards-tit">
                    <div className="tit-text">Rewards</div>
                  </div>
                  <div className="cw-clan-order-ab-box-all scroll">
                    <div
                      className="cw-clan-order-ab-box"
                      tooltiptext="1 order"
                      topdistance="120"
                    >
                      <div className="cw-clan-order-ab-pic">
                        <img src="img/change-ic-essence.png" loading="lazy" />
                      </div>
                      <div className="cw-clan-order-ab-prg-box">
                        <div className="cw-clan-order-ab-prg false"></div>
                        <div className="cw-clan-order-ab-prg-text">x1</div>
                      </div>
                    </div>
                    <div
                      className="cw-clan-order-ab-box"
                      tooltiptext="2 order"
                      topdistance="120"
                    >
                      <div className="cw-clan-order-ab-pic">
                        <img src="img/ic-yellow-butil.png" loading="lazy" />
                      </div>
                      <div className="cw-clan-order-ab-prg-box">
                        <div className="cw-clan-order-ab-prg false"></div>
                        <div className="cw-clan-order-ab-prg-text">100</div>
                      </div>
                    </div>
                    <div
                      className="cw-clan-order-ab-box"
                      tooltiptext="3 order"
                      topdistance="120"
                    >
                      <div className="cw-clan-order-ab-pic">
                        <img src="img/ic-green-butil.png" loading="lazy" />
                      </div>
                      <div className="cw-clan-order-ab-prg-box">
                        <div className="cw-clan-order-ab-prg red"></div>
                        <div className="cw-clan-order-ab-prg-text">
                          Need Clan Trophy
                        </div>
                      </div>
                    </div>
                    <div
                      className="cw-clan-order-ab-box"
                      tooltiptext="4 order"
                      topdistance="120"
                    >
                      <div className="cw-clan-order-ab-pic">
                        <img src="img/ic-blue-butil.png" loading="lazy" />
                      </div>
                      <div className="cw-clan-order-ab-prg-box">
                        <div className="cw-clan-order-ab-prg false"></div>
                        <div className="cw-clan-order-ab-prg-text">100</div>
                      </div>
                    </div>
                    <div
                      className="cw-clan-order-ab-box"
                      tooltiptext="5 order"
                      topdistance="120"
                    >
                      <div className="cw-clan-order-ab-pic">
                        <img src="img/v2-icon-chaos.png" loading="lazy" />
                      </div>
                      <div className="cw-clan-order-ab-prg-box">
                        <div className="cw-clan-order-ab-prg false"></div>
                        <div className="cw-clan-order-ab-prg-text">500</div>
                      </div>
                    </div>
                  </div>
                  <div className="cw-clan-order-rew-box-all">
                    <div className="color-btn green working">
                      <div className="color-btn-text">
                        <div>
                          In
                          <span className="t">23:50:04</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-close-x"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetForCss>
  );
}