import React, { useEffect } from "react";
// import v2ScreenMineEvent from "../styles/v2-screen-mine-event.scss";
// import v2ScreenFwStore from "../styles/v2-screen-fw-store.scss";

const V2MainScreen18MineComponent = () => {
  // создаём такой же айди как у родителя здесь и так попадаем к нему для проверки наличия класса noScripts
  const currentUrl = window.location.href;
  const fileNameWithoutExtension = currentUrl.split("/").pop().split(".")[0];
  const pageContainerId = `root-${fileNameWithoutExtension}`;
  const pageContainer = document.getElementById(pageContainerId);

  useEffect(() => {
    if (pageContainer && !pageContainer.classList.contains("noScripts")) {
      // все попапы
      [...document.querySelectorAll(".m-popup")].map((i) => {
        i.style.display = "none";
      });

      const po = document.getElementById("popupWrapper");
      const re = document.querySelector(".popup-layer");
      const pStr = document.querySelector(".m-popup.fw-store");

      // закрытие попапов
      [...document.querySelectorAll(".m-popup")].map((i) => {
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
          ".btn-close-x, div.uki-story-nav-box.btn2 > div:nth-of-type(1)"
        ),
      ].map((i) => {
        i.addEventListener("click", () => {
          po.classList.remove("dialog-emersion-enter");
          po.classList.add("dialog-emersion-exit");
          setTimeout(function () {
            re.style.display = "none";
            i.closest(".m-popup").style.display = "none";
            po.classList.remove("dialog-emersion-exit");
          }, 100);
        });
      });

      const pic = document.querySelector(".score-count.spirit3");
      pic.addEventListener("click", () => {
        re.style.display = "block";
        setTimeout(function () {
          pStr.style.display = "block";
          po.classList.add("dialog-emersion-enter");
        }, 100);
      });
      return;
    }
    return () => {};
  }, []);
  return (
    <>
      <div id="root" style={{ display: "block" }}>
        <div>
          <div className="main lang-ru world1">
            <div
              className="main-bg"
              style={{
                backgroundImage:
                  "url('../img/images/back/new/04-Town-Square-1.jpg')",
              }}
            ></div>
            <div className="mine-event-screen">
              <div className="mine-event-screen__head">
                <div className="next-count">
                  <div className="t">21:47:15</div>
                </div>
                <div className="mine-quest-all q1">
                  <div className="mine-quest-text">Open cells</div>
                  <div className="mine-quest-prg">
                    <div
                      className="mine-quest-prgbar"
                      style={{ width: "6.66667%" }}
                    ></div>
                    <div className="mine-quest-prg-text">2/30</div>
                  </div>
                </div>
                <div className="mine-quest-all q2">
                  <div className="mine-quest-text">Pass levels</div>
                  <div className="mine-quest-prg">
                    <div
                      className="mine-quest-prgbar"
                      style={{ width: "0%" }}
                    ></div>
                    <div className="mine-quest-prg-text">0/25</div>
                  </div>
                </div>
                <div className="mine-quest-all q3">
                  <div className="mine-quest-text">Open cells</div>
                  <div className="mine-quest-prg">
                    <div
                      className="mine-quest-prgbar"
                      style={{ width: "6.66667%" }}
                    ></div>
                    <div className="mine-quest-prg-text">2/30</div>
                  </div>
                </div>
                <div className="score-count">0</div>
                <div className="score-count spirit3 cursor-pointer">0</div>
                <div className="color-btn exit">
                  <div className="color-btn-text">Exit</div>
                </div>
              </div>
              <div className="mine-event-screen__resources">
                <div className="resource">
                  <img
                    src="img/v2-mn-pr1.png"
                    alt=""
                    style={{
                      filter:
                        "drop-shadow(\r\n                                            rgb(255, 255, 255) 0px 0px 15px\r\n                                        )",
                    }}
                    loading="lazy"
                  />
                  <div className="resource__count">97</div>
                </div>
                <div className="resource">
                  <img
                    src="img/v2-mn-pr2.png"
                    alt=""
                    style={{}}
                    loading="lazy"
                  />
                  <div className="resource__count">50</div>
                </div>
                <div className="resource">
                  <img
                    src="img/v2-mn-pr3.png"
                    alt=""
                    style={{}}
                    loading="lazy"
                  />
                  <div className="resource__count">10</div>
                </div>
                <div className="resource">
                  <img
                    src="img/v2-mn-pr4.png"
                    alt=""
                    style={{}}
                    loading="lazy"
                  />
                  <div className="resource__count">5</div>
                </div>
              </div>
              <div
                className="mine-event-screen__wrapper"
                style={{
                  backgroundImage: "url('../img/v2-mn-bg1.jpg')",
                }}
              >
                <div className="x-info-btn">?</div>
                <div
                  className="mine"
                  style={{
                    cursor: "url('../img/cursor.png'), auto",
                  }}
                >
                  <div className="mine__row">
                    <div className="mine-cell">
                      <div className="content"></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content copper"></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st solid">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="mine__row">
                    <div className="mine-cell gr">
                      <div className="content copper"></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                    </div>
                    <div className="mine-cell">
                      <div className="content"></div>
                    </div>
                    <div className="mine-cell">
                      <div className="content"></div>0
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>0
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="mine__row">
                    <div className="mine-cell">
                      <div className="content"></div>0
                    </div>
                    <div className="mine-cell">
                      <div className="content"></div>
                    </div>
                    <div className="mine-cell">
                      <div className="content"></div>
                    </div>
                    <div className="mine-cell st cracked">
                      <div className="content"></div>0
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                      0
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="mine__row">
                    <div className="mine-cell gr">
                      <div className="content"></div>
                    </div>
                    <div className="mine-cell">
                      <div className="content"></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content boom"></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st solid">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="mine__row">
                    <div className="mine-cell gr">
                      <div className="content iron"></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content silver"></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st solid">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st solid">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="mine__row">
                    <div className="mine-cell st">
                      <div className="content iron"></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="mine__row">
                    <div className="mine-cell gr">
                      <div className="content"></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell st">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                    <div className="mine-cell gr">
                      <div className="content"></div>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          opacity: "0.33",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="position player" style={{ left: "26%" }}>
                    <div className="value">Floor: 1</div>
                  </div>
                  <div className="position player" style={{ left: "51%" }}>
                    <div className="value">Level: 0 / 100</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="popupWrapper" className="popup-layer">
              <div className="screen-blend-55"></div>
              <div id="popupContainer">
                <div className="m-popup fw-store">
                  <div className="title">Gold Rush shop</div>
                  <div className="color-box"></div>
                  <div className="store-item-box-all">
                    <div className="store-item-box-scroll">
                      <div className="store-item-all">
                        <div className="store-item-box">
                          <div className="store-name">Random</div>
                          <div className="item-box piecesHero">
                            <div className="img-wrap">
                              <img
                                src="img/unknown-hero-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="store-quant">
                              <div className="quantity">0/10</div>
                            </div>
                            <div className="rate">10</div>
                          </div>
                          <div
                            className="color-btn diamond"
                            style={{
                              filter: "grayscale(1)",
                            }}
                          >
                            <div className="color-btn-text">
                              <div>
                                buy
                                <span className="f-contrib spirit3">199</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="store-item-box">
                          <div className="store-name">Takaro Kaminoken</div>
                          <div className="item-box piecesHero">
                            <div className="img-wrap">
                              <img
                                src="img/images/hero-all/tithero-230/x1/ava/tithero-230-1-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="store-quant">
                              <div className="quantity">0/10</div>
                            </div>
                            <div className="rate">10</div>
                          </div>
                          <div
                            className="color-btn diamond"
                            style={{
                              filter: "grayscale(1)",
                            }}
                          >
                            <div className="color-btn-text">
                              <div>
                                buy
                                <span className="f-contrib spirit3">199</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="store-item-box">
                          <div className="store-name">Chiasa Saike</div>
                          <div className="item-box piecesHero">
                            <div className="img-wrap">
                              <img
                                src="img/images/hero-all/tithero-231/x1/ava/tithero-231-1-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="store-quant">
                              <div className="quantity">0/10</div>
                            </div>
                            <div className="rate">10</div>
                          </div>
                          <div
                            className="color-btn diamond"
                            style={{
                              filter: "grayscale(1)",
                            }}
                          >
                            <div className="color-btn-text">
                              <div>
                                buy
                                <span className="f-contrib spirit3">199</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="store-item-box">
                          <div className="store-name">Azumi Uchubito</div>
                          <div className="item-box piecesHero">
                            <div className="img-wrap">
                              <img
                                src="img/images/hero-all/tithero-310/x1/ava/tithero-310-1-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="store-quant">
                              <div className="quantity">0/10</div>
                            </div>
                            <div className="rate">10</div>
                          </div>
                          <div
                            className="color-btn diamond"
                            style={{
                              filter: "grayscale(1)",
                            }}
                          >
                            <div className="color-btn-text">
                              <div>
                                buy
                                <span className="f-contrib spirit3">199</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="store-item-all">
                        <div className="store-item-box">
                          <div className="store-name">Dark Super Chests 1</div>
                          <div className="item-box undefined">
                            <div className="img-wrap">
                              <img
                                src="img/sh-icon-chest-dark.png"
                                loading="lazy"
                              />
                            </div>
                            <div className="store-quant">
                              <div className="quantity">0/10</div>
                            </div>
                            <div className="rate">100</div>
                          </div>
                          <div
                            className="color-btn diamond"
                            style={{
                              filter: "grayscale(1)",
                            }}
                          >
                            <div className="color-btn-text">
                              <div>
                                buy
                                <span className="f-contrib spirit3">3000</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="store-item-box">
                          <div className="store-name">Dark Super Chests 2</div>
                          <div className="item-box undefined">
                            <div className="img-wrap">
                              <img
                                src="img/sh-icon-chest-dark.png"
                                loading="lazy"
                              />
                            </div>
                            <div className="store-quant">
                              <div className="quantity">0/10</div>
                            </div>
                            <div className="rate">20</div>
                          </div>
                          <div
                            className="color-btn diamond"
                            style={{
                              filter: "grayscale(1)",
                            }}
                          >
                            <div className="color-btn-text">
                              <div>
                                buy
                                <span className="f-contrib spirit3">700</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="store-item-box">
                          <div className="store-name">Rika Mahojo</div>
                          <div className="item-box piecesHero">
                            <div className="img-wrap">
                              <img
                                src="img/images/hero-all/tithero-311/x1/ava/tithero-311-1-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="store-quant">
                              <div className="quantity">0/10</div>
                            </div>
                            <div className="rate">10</div>
                          </div>
                          <div
                            className="color-btn diamond"
                            style={{
                              filter: "grayscale(1)",
                            }}
                          >
                            <div className="color-btn-text">
                              <div>
                                buy
                                <span className="f-contrib spirit3">199</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="store-item-box">
                          <div className="store-name">Yukiko Hikogatana</div>
                          <div className="item-box piecesHero">
                            <div className="img-wrap">
                              <img
                                src="img/images/hero-all/tithero-360/x1/ava/tithero-360-1-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="store-quant">
                              <div className="quantity">0/10</div>
                            </div>
                            <div className="rate">10</div>
                          </div>
                          <div
                            className="color-btn diamond"
                            style={{
                              filter: "grayscale(1)",
                            }}
                          >
                            <div className="color-btn-text">
                              <div>
                                buy
                                <span className="f-contrib spirit3">199</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fw-main-bl-name">
                    <span className="f-contrib spirit3">0</span>
                  </div>
                  <div className="fw-shop-girl"></div>
                  <div className="btn-close-x"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(V2MainScreen18MineComponent);
