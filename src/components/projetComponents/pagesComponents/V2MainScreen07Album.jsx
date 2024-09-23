import React, { useEffect } from "react";

export const cssFiles = [
  "screen-change-main",
  "screen-change-bonuses",
  "screen-change-collpop",
  "screen-album",
];

export default function V2MainScreen07Album({ pageName }) {
  const currentPath = window.location.hash.substring(3).split("/")[0];

  useEffect(() => {
    if (pageName === currentPath) {
      [...document.querySelectorAll(".m-popup")].map((i) => {
        i.style.display = "none";
      });

      const po = document.getElementById("popupAll");
      const re = document.querySelector(".popup-layer");
      re.style.display = "none";
      const cC = document.querySelector(".m-popup.change-collpop");

      [...document.querySelectorAll(".btn-close-x, .color-btn.close")].map(
        (i) => {
          i.addEventListener("click", () => {
            po.classList.remove("dialog-emersion-enter");
            po.classList.add("dialog-emersion-exit");
            setTimeout(function () {
              re.style.display = "none";
              cC.style.display = "none";

              po.classList.remove("dialog-emersion-exit");
            }, 104);
          });
        }
      );

      const bI = document.querySelector(".change-btn-info");
      bI.addEventListener("click", () => {
        re.style.display = "block";
        setTimeout(function () {
          cC.style.display = "block";
          po.classList.add("dialog-emersion-enter");
        }, 100);
      });

      const bA = document.querySelectorAll(".box-all");
      bA.forEach((item) => {
        item.addEventListener("click", (e) => {
          bA.forEach((el) => {
            el.classList.remove("opened");
          });
          item.classList.add("opened");
        });
      });

      const tL = document.querySelectorAll(".tags-line");
      tL.forEach((item) => {
        item.addEventListener("click", (e) => {
          tL.forEach((el) => {
            el.classList.remove("selected");
          });
          item.classList.add("selected");
        });
      });

      const fB = document.querySelectorAll(".fav-box");
      fB.forEach((item) => {
        item.addEventListener("click", (e) => {
          if (item.classList.contains("fav")) {
            item.classList.remove("fav");
          } else {
            item.classList.add("fav");
          }
        });
      });

      const cM = document.querySelector(
        ".left-panel > div > div:nth-of-type(1)"
      );
      const cMb = document.querySelector(".color-btn.pictures");
      const cB = document.querySelector(
        ".left-panel > div > div:nth-of-type(2)"
      );
      const cBb = document.querySelector(".color-btn.bonuses");
      cB.style.display = "none";
      cBb.addEventListener("click", () => {
        cM.style.display = "none";
        cB.style.display = "block";
      });
      cMb.addEventListener("click", () => {
        cB.style.display = "none";
        cM.style.display = "block";
      });
      return;
    }
    return () => {};
  }, [pageName, currentPath]);

  return (
    <div id="root" style={{ display: "block" }}>
      <div>
        <div className="main lang-ru world1">
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
                  <img src="img/v2-master-pic1.png" loading="lazy" />
                </div>
                <div className="avatar-box-name">Rank 27</div>
              </div>
              <div className="resource-gold">
                <div className="value">61.3MD21</div>
                <div className="value-bonus">
                  <span>+28.6M%</span>
                </div>
                <div className="resource-btn-add"></div>
                <div className="resource-pic">
                  <img src="img/v2-res-gold.png" loading="lazy" />
                </div>
                <div className="anim-in-p gold"></div>
              </div>
              <div className="resource-vip lvl0">
                <div className="value-vip-diamond">9</div>
                <div className="value-vip-ticket">1</div>
                <div className="resource-btn-add"></div>
                <div className="resource-pic-vip">
                  <div className="viplvl">VIP</div>
                </div>
              </div>
              <div className="might-box-all">
                <div>
                  <div className="might-box-pic">
                    <img
                      className="bg"
                      src="img/v2-cw-bg34.png"
                      loading="lazy"
                    />
                    <img
                      className="fg"
                      src="img/v2-cw-p03.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="might-box-name">Valhalla</div>
                </div>
              </div>
            </div>
            <div className="shop-chest-box-all">
              <div className="res-shop-btn">
                <div className="res-shop-btn-text">shop</div>
              </div>
              <div>
                <div className="res-chest-btn">
                  <div className="res-chest-btn-text">Chests</div>

                  <div className="v2-bosschest-notif notif"></div>
                </div>
              </div>
            </div>
            <div className="btn signinout-btn out">
              <div className="icon-reg"></div>
              <div className="icon-reg2"></div>
            </div>
          </div>
          <div className="quest-box-all quests">
            <div className="quest-box-scroll">
              <div className="quest-box">
                <li className="quest quest-box">
                  <img
                    className="icon"
                    src="img/ic-quests.png"
                    loading="lazy"
                  />
                  <div className="quest-notif notif notif10"></div>
                </li>
                <li className="quest open" style={{ animationDelay: "0ms" }}>
                  <img
                    className="icon"
                    src="img/change-sun3.png"
                    loading="lazy"
                  />
                </li>
                <li className="quest open" style={{ animationDelay: "150ms" }}>
                  <img
                    className="icon"
                    src="img/ic-abil-reborn.png"
                    loading="lazy"
                  />
                </li>
                <li
                  className="quest angel-pop open"
                  style={{ animationDelay: "300ms" }}
                >
                  <img
                    className="icon"
                    src="img/picmeh-ic-angel-pop.png"
                    loading="lazy"
                  />
                </li>
                <li className="quest startpack wide">
                  <img
                    className="icon"
                    src="img/v2-mn-pr-100-in.png"
                    loading="lazy"
                  />
                  <div className="timerbox">
                    <div className="timer">2D 22:18</div>
                  </div>
                </li>
                <li
                  className="quest startpack open"
                  style={{ animationDelay: "450ms" }}
                >
                  <img
                    className="icon"
                    src="img/v2-ns-ball.png"
                    loading="lazy"
                  />
                  <div className="timerbox">
                    <div className="timer">70:18:44</div>
                  </div>
                </li>
                <li className="quest startpack wide">
                  <img
                    className="icon"
                    src="img/evPopArts/angel_spirit_1.png"
                    loading="lazy"
                  />
                </li>
                <li
                  className="quest startpack open"
                  style={{ animationDelay: "600ms" }}
                >
                  <img
                    className="icon"
                    src="img/ic-hero-327.png"
                    loading="lazy"
                  />
                  <div className="timerbox">
                    <div className="timer">20:56:12</div>
                  </div>
                </li>
                <li className="quest-fortune picmeh-info info">
                  <img
                    className="icon"
                    src="img/picmeh-ic-diamond.png"
                    loading="lazy"
                  />
                </li>
                <li
                  className="quest startpack open"
                  style={{ animationDelay: "750ms" }}
                >
                  <img
                    className="icon"
                    src="img/v2-fw-icon-fr0.png"
                    loading="lazy"
                  />
                  <div className="timerbox">
                    <div className="timer">00:00:34</div>
                  </div>
                </li>
                <li className="quest open" style={{ animationDelay: "900ms" }}>
                  <img
                    className="icon"
                    src="img/m-ico-quest.png"
                    loading="lazy"
                  />
                </li>
              </div>
            </div>
            <div className="opt-panel-box">
              <div className="color-bg"></div>
              <div className="btn feedback"></div>
              <div className="btn statistic"></div>
              <div className="btn settings"></div>
              <div className="btn ru"></div>
            </div>
            <a
              className="btn-discord"
              href="https://discord.gg/7pjeXF3emj"
              target="_blank" rel="noreferrer"
            ></a>
          </div>
          <div className="left-side false false">
            <div className="left-panel wide false false">
              <div className="container">
                <div style={{ display: "block" }}>
                  <div className="tab-panel change-main">
                    <div className="all-content">
                      <div className="change-top-menu">
                        <div className="color-btn bonuses">
                          <div className="color-btn-text">bonuses</div>
                        </div>
                      </div>
                      <div className="change-main-tags-box-all">
                        <div className="search-box-all">
                          <div className="search-box">
                            <input
                              type="text"
                              className="search"
                              name="search"
                              placeholder="Поиск"
                            />
                            <div className="sbutton">
                              <img src="img/search-ic.png" loading="lazy" />
                            </div>
                          </div>
                        </div>
                        <div className="tags-box-all">
                          <div className="box-all tags opened">
                            <div className="box-all-name">Current</div>
                            <div className="tags-scroll">
                              <div className="tags-line">
                                <div className="tags-name">All</div>
                                <div className="tags-counter"></div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">Reward</div>
                                <div className="tags-counter"></div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">anal (4)</div>
                                <div className="tags-counter">14/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">ass (4)</div>
                                <div className="tags-counter">18/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">big boobs (4)</div>
                                <div className="tags-counter">17/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">blonde (4)</div>
                                <div className="tags-counter">14/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">blowjob (5)</div>
                                <div className="tags-counter">2/25</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">boobs (4)</div>
                                <div className="tags-counter">8/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">bukkake (4)</div>
                                <div className="tags-counter">17/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">
                                  cowgirl (sex position) (5)
                                </div>
                                <div className="tags-counter">9/25</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">creampie (4)</div>
                                <div className="tags-counter">18/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">crossover (5)</div>
                                <div className="tags-counter">6/25</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">cum (4)</div>
                                <div className="tags-counter">8/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line selected">
                                <div className="tags-name">cumshot (5)</div>
                                <div className="tags-counter">2/25</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">doggystyle (4)</div>
                                <div className="tags-counter">0/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">
                                  double penetration (4)
                                </div>
                                <div className="tags-counter">8/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">facial (4)</div>
                                <div className="tags-counter">10/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">futanari (4)</div>
                                <div className="tags-counter">19/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">gangbang (5)</div>
                                <div className="tags-counter">2/25</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">handjob (4)</div>
                                <div className="tags-counter">15/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">lesbian (4)</div>
                                <div className="tags-counter">7/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">MILF (4)</div>
                                <div className="tags-counter">16/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">nude (5)</div>
                                <div className="tags-counter">8/25</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">orgy (5)</div>
                                <div className="tags-counter">1/25</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">panels (4)</div>
                                <div className="tags-counter">17/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">
                                  reverse cowgirl (sex position) (4)
                                </div>
                                <div className="tags-counter">13/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">threesome (5)</div>
                                <div className="tags-counter">13/25</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">titjob (4)</div>
                                <div className="tags-counter">8/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">vaginal (4)</div>
                                <div className="tags-counter">10/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                            </div>
                          </div>
                          <div className="box-all collected-tags">
                            <div className="box-all-name">Completed</div>
                            <div className="tags-scroll">
                              <div className="tags-line check">
                                <div className="tags-name">ahegao</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">ahegao (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">ahegao (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">anal</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">anal (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">anal (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">ass</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">ass (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">ass (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">big boobs</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">big boobs (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">big boobs (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">blonde</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">blonde (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">blonde (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">blowjob</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">blowjob (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">blowjob (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">blowjob (4)</div>
                                <div className="tags-counter">20/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">boobs</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">boobs (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">boobs (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">bukkake</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">bukkake (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">bukkake (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">
                                  cowgirl (sex position)
                                </div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">
                                  cowgirl (sex position) (2)
                                </div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">
                                  cowgirl (sex position) (3)
                                </div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">
                                  cowgirl (sex position) (4)
                                </div>
                                <div className="tags-counter">20/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">creampie</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">creampie (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">creampie (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">crossover</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">crossover (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">crossover (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">crossover (4)</div>
                                <div className="tags-counter">20/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">cum</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">cum (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">cum (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">cumshot</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">cumshot (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">cumshot (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">cumshot (4)</div>
                                <div className="tags-counter">20/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">doggystyle</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">doggystyle (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">doggystyle (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">
                                  double penetration
                                </div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">
                                  double penetration (2)
                                </div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">
                                  double penetration (3)
                                </div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">facial</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">facial (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">facial (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">foursome</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">foursome (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">foursome (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">futanari</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">futanari (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">futanari (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">gangbang</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">gangbang (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">gangbang (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">gangbang (4)</div>
                                <div className="tags-counter">20/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">handjob</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">handjob (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">handjob (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">lesbian</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">lesbian (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">lesbian (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">MILF</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">MILF (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">MILF (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">nude</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">nude (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">nude (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">nude (4)</div>
                                <div className="tags-counter">20/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">orgy</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">orgy (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">orgy (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">orgy (4)</div>
                                <div className="tags-counter">20/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">panels</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">panels (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">panels (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">redhead</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">redhead (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">redhead (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">
                                  reverse cowgirl (sex position)
                                </div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">
                                  reverse cowgirl (sex position) (2)
                                </div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">
                                  reverse cowgirl (sex position) (3)
                                </div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">threesome</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">threesome (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">threesome (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">threesome (4)</div>
                                <div className="tags-counter">20/20</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">titjob</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">titjob (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">titjob (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">underwear</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">underwear (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">underwear (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">vaginal</div>
                                <div className="tags-counter">5/5</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">vaginal (2)</div>
                                <div className="tags-counter">10/10</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line check">
                                <div className="tags-name">vaginal (3)</div>
                                <div className="tags-counter">15/15</div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                            </div>
                          </div>
                          <div className="box-all favorite-tags">
                            <div className="box-all-name">Favorite</div>
                            <div className="tags-scroll">
                              <div className="tags-line">
                                <div className="tags-name">All</div>
                                <div className="tags-counter"></div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                              <div className="tags-line">
                                <div className="tags-name">Reward</div>
                                <div className="tags-counter"></div>
                                <div className="tags-check"></div>
                                <div className="tags-new"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="change-main-right-side">
                        <div className="change-main-counter-collection-all">
                          <div className="tag-name">cumshot</div>
                          <div className="change-btn-info">info</div>
                          <div className="change-prgbar-box">
                            <div className="prgbar-box">
                              <div
                                className="prgbar"
                                style={{
                                  width: "8%",
                                }}
                              ></div>
                            </div>
                            <div className="prgbar-text">2/25</div>
                          </div>
                          <div className="change-take-all">
                            <div className="change-chest-box"></div>
                            <div className="change-chest-text">
                              Collect pictures to receive this reward!
                            </div>
                            <div className="color-btn take green disable">
                              <div className="color-btn-text">take</div>
                            </div>
                          </div>
                        </div>
                        <div className="right-side-img-wrap">
                          <ul className="img-list">
                            <li className="img-box">
                              <img
                                className="img"
                                src="https://cdn.faptitans.com/ths/5/a/1/o5a1f021f42eb6d20744d778bf203156e.jpg"
                                style={{
                                  visibility: "visible",
                                }}
                                loading="lazy"
                              />
                              <div className="info">Художник: DKIR</div>
                              <div className="price p3"></div>
                              <div className="btn-fs"></div>
                              <div className="fav-box"></div>
                            </li>
                            <li className="img-box">
                              <img
                                className="img"
                                src="https://cdn.faptitans.com/ths/5/c/5/o5c5a586b394a238e00ce50064271c97b.jpg"
                                style={{
                                  visibility: "visible",
                                }}
                                loading="lazy"
                              />
                              <div className="info">Художник: Artemisumi</div>
                              <div className="price p2"></div>
                              <div className="btn-fs"></div>
                              <div className="fav-box"></div>
                            </li>
                            <li className="img-box blocked">
                              <div className="im-text">
                                Множество картинок ожидают вас!
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-close-x"></div>
                </div>
                <div style={{ visibility: "visible" }}>
                  <div className="tab-panel change-bonuses">
                    <div className="change-top-menu">
                      <div className="color-btn pictures">
                        <div className="color-btn-text">pictures</div>
                      </div>
                    </div>
                    <div className="change-main-right-side">
                      <div className="change-reward-box">
                        <div className="change-reward-name">
                          completed collections
                        </div>
                        <div className="change-reward-count">101</div>
                      </div>
                      <div className="change-bonus-main-box">
                        <div className="change-bonus-main-scroll">
                          <div className="change-bonus-rewads-wrap">
                            <div className="coll-prg-box-all">
                              <div className="col-prg-box-ff"></div>
                              <div className="col-prg-box">
                                <div className="prg-box">
                                  <div
                                    className="prgbar"
                                    style={{
                                      width: "83.75%",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="box-coll s1 bot">
                              <div className="openchest-in check">
                                <img
                                  className="inchest-pic"
                                  src="img/ic-abil-dps-plus@2x.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">+500%</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/ic-abil-dps-plus@2x.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">1</div>
                            </div>
                            <div>
                              <div>
                                <div className="box-coll s2">
                                  <div className="openchest-in check">
                                    <img
                                      className="inchest-pic hero-pic"
                                      src="img/images/hero-all/tithero-50/x1/ava/tithero-50-1-ava.jpg"
                                      loading="lazy"
                                    />
                                    <div className="openchest-in-count">
                                      New Hero
                                    </div>
                                    <div className="openchest-bonus-pic">
                                      <img
                                        className="openchest-pic"
                                        src="img/images/hero-all/tithero-50/x1/ava/tithero-50-1-ava.jpg"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="openchest-in-check"></div>
                                  </div>
                                  <div className="change-line"></div>
                                  <div className="openchest-in-num">2</div>
                                </div>
                              </div>
                            </div>
                            <div className="box-coll s3 bot">
                              <div className="openchest-in check">
                                <img
                                  className="inchest-pic"
                                  src="img/ic-abil-gold@2x.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">
                                  144 hours
                                </div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/ic-abil-gold@2x.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">4</div>
                            </div>
                            <div className="box-coll s4">
                              <div className="openchest-in check">
                                <img
                                  className="inchest-pic"
                                  src="img/change-ic-ticket.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">100</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/change-ic-ticket.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">6</div>
                            </div>
                            <div className="box-coll s5 bot">
                              <div className="openchest-in check">
                                <img
                                  className="inchest-pic"
                                  src="img/ic-abil-dps-plus@2x.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">+10K%</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/ic-abil-dps-plus@2x.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">8</div>
                            </div>
                            <div className="box-coll s6">
                              <div className="openchest-in check">
                                <img
                                  className="inchest-pic"
                                  src="img/ic-abil-dpc-plus@2x.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">+10K%</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/ic-abil-dpc-plus@2x.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">12</div>
                            </div>
                            <div>
                              <div>
                                <div className="box-coll s7 bot">
                                  <div className="openchest-in check">
                                    <img
                                      className="inchest-pic hero-pic"
                                      src="img/images/hero-all/tithero-51/x1/ava/tithero-51-1-ava.jpg"
                                      loading="lazy"
                                    />
                                    <div className="openchest-in-count">
                                      New Hero
                                    </div>
                                    <div className="openchest-bonus-pic">
                                      <img
                                        className="openchest-pic"
                                        src="img/images/hero-all/tithero-51/x1/ava/tithero-51-1-ava.jpg"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="openchest-in-check"></div>
                                  </div>
                                  <div className="change-line"></div>
                                  <div className="openchest-in-num">16</div>
                                </div>
                              </div>
                            </div>
                            <div className="box-coll s8">
                              <div className="openchest-in check">
                                <img
                                  className="inchest-pic"
                                  src="img/ic-abil-gold@2x.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">
                                  288 hours
                                </div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/ic-abil-gold@2x.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">20</div>
                            </div>
                            <div className="box-coll s9 bot">
                              <div className="openchest-in check">
                                <img
                                  className="inchest-pic"
                                  src="img/change-ic-ticket.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">50</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/change-ic-ticket.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">24</div>
                            </div>
                            <div className="box-coll s10">
                              <div className="openchest-in check">
                                <img
                                  className="inchest-pic"
                                  src="img/change-ic-ticket.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">150</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/change-ic-ticket.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">32</div>
                            </div>
                            <div className="box-coll s11 bot">
                              <div className="openchest-in check">
                                <img
                                  className="inchest-pic"
                                  src="img/ic-abil-dps-plus@2x.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">+25K%</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/ic-abil-dps-plus@2x.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">40</div>
                            </div>
                            <div className="box-coll s12">
                              <div className="openchest-in check">
                                <img
                                  className="inchest-pic"
                                  src="img/ic-abil-dpc-plus@2x.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">+25K%</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/ic-abil-dpc-plus@2x.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">50</div>
                            </div>
                            <div>
                              <div>
                                <div className="box-coll s13 bot">
                                  <div className="openchest-in check">
                                    <img
                                      className="inchest-pic hero-pic"
                                      src="img/images/hero-all/tithero-52/x1/ava/tithero-52-1-ava.jpg"
                                      loading="lazy"
                                    />
                                    <div className="openchest-in-count">
                                      New Hero
                                    </div>
                                    <div className="openchest-bonus-pic">
                                      <img
                                        className="openchest-pic"
                                        src="img/images/hero-all/tithero-52/x1/ava/tithero-52-1-ava.jpg"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="openchest-in-check"></div>
                                  </div>
                                  <div className="change-line"></div>
                                  <div className="openchest-in-num">60</div>
                                </div>
                              </div>
                            </div>
                            <div className="box-coll s14">
                              <div className="openchest-in check">
                                <img
                                  className="inchest-pic"
                                  src="img/ms-stone-pink.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">x2</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/ms-stone-pink.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">70</div>
                            </div>
                            <div className="box-coll s15 bot">
                              <div className="openchest-in check">
                                <img
                                  className="inchest-pic"
                                  src="img/ic-abil-dpc-plus@2x.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">x2</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/ic-abil-dpc-plus@2x.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">80</div>
                            </div>
                            <div className="box-coll s16">
                              <div className="openchest-in check">
                                <img
                                  className="inchest-pic"
                                  src="img/ic-abil-dps-plus@2x.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">+50K%</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/ic-abil-dps-plus@2x.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">92</div>
                            </div>
                            <div className="box-coll s17 bot">
                              <div className="openchest-in">
                                <img
                                  className="inchest-pic"
                                  src="img/ic-abil-dpc-plus@2x.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">+50K%</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/ic-abil-dpc-plus@2x.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">104</div>
                            </div>
                            <div className="box-coll s18">
                              <div className="openchest-in">
                                <img
                                  className="inchest-pic"
                                  src="img/ic-abil-dps-plus@2x.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">x2</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/ic-abil-dps-plus@2x.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">116</div>
                            </div>
                            <div className="box-coll s19 bot">
                              <div className="openchest-in">
                                <img
                                  className="inchest-pic"
                                  src="img/ic-abil-gold-up@2x.png"
                                  loading="lazy"
                                />
                                <div className="openchest-in-count">x2</div>
                                <div className="openchest-bonus-pic">
                                  <img
                                    className="openchest-pic"
                                    src="img/ic-abil-gold-up@2x.png"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="openchest-in-check"></div>
                              </div>
                              <div className="change-line"></div>
                              <div className="openchest-in-num">130</div>
                            </div>
                            <div>
                              <div>
                                <div className="box-coll s20">
                                  <div className="openchest-in">
                                    <img
                                      className="inchest-pic hero-pic"
                                      src="img/images/hero-all/tithero-53/x1/ava/tithero-53-1-ava.jpg"
                                      loading="lazy"
                                    />
                                    <div className="openchest-in-count">
                                      New Hero
                                    </div>
                                    <div className="openchest-bonus-pic">
                                      <img
                                        className="openchest-pic"
                                        src="img/images/hero-all/tithero-53/x1/ava/tithero-53-1-ava.jpg"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="openchest-in-check"></div>
                                  </div>
                                  <div className="change-line"></div>
                                  <div className="openchest-in-num">140</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tabs-all-box">
              <a className="tabs-all heroes" href="#/">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div className="tabs-name">Heroes</div>
                  <div className="tabs-pic">
                    <img src="img/tab-01.png" loading="lazy" />
                  </div>
                </div>
              </a>
              <a className="tabs-all guild" href="#/guild">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div className="tabs-name">Guild base</div>
                  <div className="tabs-pic">
                    <img src="img/tab-08.png" loading="lazy" />
                  </div>
                </div>
                <div className="v2-tab-notif notif notif20"></div>
              </a>
              <a
                className="tabs-all album selected"
                href="#/galery/pictures"
                aria-current="page"
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div className="tabs-name">Gallery</div>
                  <div className="tabs-pic">
                    <img src="img/tab-05.png" loading="lazy" />
                  </div>
                </div>
              </a>
              <a className="tabs-all rating" href="#/rating/jewerly">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div className="tabs-name">Rating Tab</div>
                  <div className="tabs-pic">
                    <img src="img/tab-02.png" loading="lazy" />
                  </div>
                </div>
              </a>
              <a className="tabs-all squests" href="#/quests/daily">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div className="tabs-name">Quests</div>
                  <div className="tabs-pic">
                    <img src="img/tab-10.png" loading="lazy" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div id="popupAll" className="popup-hiden">
            <div id="popupWrapper" className="popup-layer show">
              <div className="screen-blend-55"></div>
              <div id="popupContainer" className="popup-in">
                <div className="m-popup change-collpop">
                  <div className="title">collection</div>
                  <div className="color-box"></div>
                  <div className="close-btn-box">
                    <div className="color-btn close">
                      <div className="color-btn-text">закрыть</div>
                    </div>
                  </div>
                  <div className="collpop-cont">
                    <div className="coll-prg-box-all">
                      <div className="col-prg-box-ff"></div>
                      <div className="col-prg-box">
                        <div className="prg-box">
                          <div
                            className="prgbar"
                            style={{
                              width: "81.6%",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="box-coll-all coll5">
                      <div className="box-coll one">
                        <div className="openchest-in check">
                          <img
                            className="inchest-pic"
                            src="img/photo-ic@2x.png"
                            loading="lazy"
                          />
                          <div className="openchest-in-count">2</div>
                          <div className="openchest-in-check"></div>
                        </div>
                        <div className="box-coll-name">
                          1st
                          <br />
                          collection
                        </div>
                        <div className="change-chest open"></div>
                        <div className="change-line"></div>
                      </div>
                      <div className="box-coll two">
                        <div className="openchest-in check">
                          <img
                            className="inchest-pic"
                            src="img/photo-ic@2x.png"
                            loading="lazy"
                          />
                          <div className="openchest-in-count">4</div>
                          <div className="openchest-in-check"></div>
                        </div>
                        <div className="box-coll-name">
                          2nd
                          <br />
                          collection
                        </div>
                        <div className="change-chest open"></div>
                        <div className="change-line"></div>
                      </div>
                      <div className="box-coll three">
                        <div className="openchest-in check">
                          <img
                            className="inchest-pic"
                            src="img/photo-ic@2x.png"
                            loading="lazy"
                          />
                          <div className="openchest-in-count">6</div>
                          <div className="openchest-in-check"></div>
                        </div>
                        <div className="box-coll-name">
                          3rd
                          <br />
                          collection
                        </div>
                        <div className="change-chest open"></div>
                        <div className="change-line"></div>
                      </div>
                      <div className="box-coll four">
                        <div className="openchest-in check">
                          <img
                            className="inchest-pic"
                            src="img/photo-ic@2x.png"
                            loading="lazy"
                          />
                          <div className="openchest-in-count">6</div>
                          <div className="openchest-in-check"></div>
                        </div>
                        <div className="box-coll-name">
                          4th
                          <br />
                          collection
                        </div>
                        <div className="change-chest open"></div>
                        <div className="change-line"></div>
                      </div>
                      <div className="box-coll five">
                        <div className="openchest-in">
                          <img
                            className="inchest-pic"
                            src="img/photo-ic@2x.png"
                            loading="lazy"
                          />
                          <div className="openchest-in-count">8</div>
                          <div className="openchest-in-check"></div>
                        </div>
                        <div className="box-coll-name">
                          5th
                          <br />
                          collection
                        </div>
                        <div className="change-chest close"></div>
                        <div className="change-line"></div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-close-x"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="dialogWrapper" className="popup-layer">
            <div className="screen-blend-55"></div>
            <div id="dialogContainer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
