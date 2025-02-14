import React, { useEffect } from "react";
import { nexusTrigger } from "nexus-state";
import ComicsPop from "../popupsContetnt/ComicsPop";

export const cssFiles = ["quests_all", "quests-ui", "v2-screen-uki-story-pop"];

export default function V2MainScreen08UkiDaily({ pageName, children }) {
  const currentPath = window.location.hash.substring(3).split("/")[0];

  useEffect(() => {
    if (pageName === currentPath) {
      // переключалка меню
      const tmAll = document.querySelectorAll(".tabs-menu-btn");
      const tmD = document.querySelector(".tabs-menu-btn.quest-daily");
      const tmM = document.querySelector(".tabs-menu-btn.quest-main");
      const tmS = document.querySelector(".tabs-menu-btn.quest-story");

      const tmDin1 = document.querySelector(".daily-mission-box");
      const tmDin2 = document.querySelector(".daily-mission-box-scroll");
      const tmDin3 = document.querySelector(".daily-mission-reset");

      const tmMin1 = document.querySelector(".journal-parth-header");
      tmMin1.style.display = "none";
      const tmMin2 = document.querySelectorAll(".journal-parth-box-scroll");
      tmMin2[0].style.display = "none";
      tmMin2[1].style.display = "none";
      tmMin2[2].style.display = "none";
      tmMin2[3].style.display = "none";

      const tmSin1 = document.querySelector(".journal-parth-box-scroll.story");
      const skBx = document.querySelector(".skills-all-box");
      const jrRiBx = document.querySelector(".journal-rightside-box-all");
      tmSin1.style.display = "none";
      jrRiBx.style.display = "none";

      const leftPanel = document.querySelector(".left-panel");

      tmAll.forEach((item) => {
        item.addEventListener("click", (e) => {
          tmAll.forEach((el) => {
            el.classList.remove("active");
          });
          item.classList.add("active");

          if (tmD.classList.contains("active")) {
            tmDin1.style.display = "block";
            tmDin2.style.display = "block";
            tmDin3.style.display = "block";
            skBx.style.display = "block";

            tmMin1.style.display = "none";
            tmMin2[0].style.display = "none";
            tmMin2[1].style.display = "none";
            tmMin2[2].style.display = "none";
            tmMin2[3].style.display = "none";

            jrRiBx.style.display = "none";

            leftPanel.classList.remove("wide");
          }
          if (tmM.classList.contains("active")) {
            tmDin1.style.display = "none";
            tmDin2.style.display = "none";
            tmDin3.style.display = "none";

            jrRiBx.style.display = "none";

            tmMin1.style.display = "block";
            tmMin2[0].style.display = "block";
            tmMin2[1].style.display = "block";
            tmMin2[2].style.display = "block";
            tmMin2[3].style.display = "none";
            skBx.style.display = "block";

            leftPanel.classList.remove("wide");
          }
          if (tmS.classList.contains("active")) {
            tmDin1.style.display = "none";
            tmDin2.style.display = "none";
            tmDin3.style.display = "none";

            tmMin1.style.display = "none";
            tmMin2[0].style.display = "none";
            tmMin2[1].style.display = "none";
            tmMin2[2].style.display = "none";

            skBx.style.display = "none";

            tmMin2[3].style.display = "block";
            jrRiBx.style.display = "block";

            leftPanel.classList.add("wide");
          }
        });
      });

      const jp = document.querySelectorAll(".journal-parth-wrap");
      [...jp].map((el) => {
        el.addEventListener("click", () => {
          el.parentNode.classList.toggle("view");
        });
      });

      const jc = document.querySelectorAll(".journal-comics-box");
      jc.forEach((item) => {
        item.addEventListener("click", (e) => {
          jc.forEach((el) => {
            el.classList.remove("active");
          });
          item.classList.add("active");
        });
      });

      // переключалка в main квестах
      const secN = document.querySelectorAll(".section-name");
      let elements = Array.from(
        document.querySelectorAll(".journal-parth-box-scroll")
      );
      elements.pop(); // убираем последний элемент
      console.log(elements);
      const arr = document.querySelectorAll(".arrow");

      arr[1].addEventListener("click", () => {
        if (!arr[1].classList.contains("unactive")) {
          // заголовки
          secN.forEach((element) => {
            if (
              !element.classList.contains("disabLeft") &&
              !element.classList.contains("disabRight")
            ) {
              const elementIndex = Array.from(secN).indexOf(element);

              const nextElement = secN[elementIndex + 1];
              setTimeout(function () {
                nextElement.classList.remove("disabRight");
              }, 10);

              element.classList.add("disabLeft");
            }
          });
          arrowCheck();
          // квесты
          elements.forEach((element) => {
            if (
              !element.classList.contains("disabLeft") &&
              !element.classList.contains("disabRight")
            ) {
              const elementIndex = Array.from(elements).indexOf(element);

              const nextElement = elements[elementIndex + 1];
              setTimeout(function () {
                nextElement.classList.remove("disabRight");
              }, 10);

              element.classList.add("disabLeft");
            }
          });
        }
      });
      arr[0].addEventListener("click", () => {
        if (!arr[0].classList.contains("unactive")) {
          // заголовки
          secN.forEach((element) => {
            if (
              !element.classList.contains("disabLeft") &&
              !element.classList.contains("disabRight")
            ) {
              const elementIndex = Array.from(secN).indexOf(element);

              const nextElement = secN[elementIndex - 1];
              setTimeout(function () {
                nextElement.classList.remove("disabLeft");
              }, 10);

              element.classList.add("disabRight");
            }
          });
          arrowCheck();
          // квесты
          elements.forEach((element) => {
            if (
              !element.classList.contains("disabLeft") &&
              !element.classList.contains("disabRight")
            ) {
              const elementIndex = Array.from(elements).indexOf(element);

              const nextElement = elements[elementIndex - 1];
              setTimeout(function () {
                nextElement.classList.remove("disabLeft");
              }, 10);

              element.classList.add("disabRight");
            }
          });
        }
      });

      function arrowCheck() {
        setTimeout(function () {
          if (!secN[0].classList.contains("disabLeft")) {
            arr[0].classList.add("unactive");
          }
          if (!secN[secN.length - 1].classList.contains("disabRight")) {
            arr[1].classList.add("unactive");
          }
          if (secN[0].classList.contains("disabLeft")) {
            arr[0].classList.remove("unactive");
          }
          if (secN[secN.length - 1].classList.contains("disabRight")) {
            arr[1].classList.remove("unactive");
          }
        }, 10);
      }
      arrowCheck();

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
      <div className="quest-box-all"></div>

      <div className="left-side false false">
        <div className="left-panel false false">
          <div className="quests-list-all-box">
            <div className="hero-menu-box">
              <div className="tabs-menu-btn quest-daily active">
                <a className="txt" href="#/quests/daily">
                  <div className="color-btn-text">daily</div>
                </a>
              </div>
              <div className="tabs-menu-btn quest-main">
                <a className="txt" href="#/quests/quest">
                  <div className="color-btn-text">main</div>
                </a>
                <div className="notif"></div>
              </div>
              <div className="tabs-menu-btn quest-story">
                <a className="txt" href="#/quests/story">
                  <div className="color-btn-text">story</div>
                </a>
              </div>
            </div>
            <div className="journal-parth-box-all">
              {/* daily */}
              <div className="daily-mission-box completed">
                <div className="daily-mission-name">mission clear:</div>
                <div className="daily-prgbar-all">
                  <div
                    className="daily-prgbar"
                    style={{ width: "16.6667%" }}
                  ></div>
                  <div className="daily-prgbar-text">1/6</div>
                </div>
                <div className="daily-reward">
                  <div className="daily-reward-pic">
                    <img src="img/diamond1.png" loading="lazy" />
                  </div>
                  <div className="daily-reward-count">3</div>
                  {/* <div className="color-btn green">
                                        <div className="color-btn-text">
                                            claim
                                        </div>
                                    </div> */}
                </div>
              </div>
              <div className="daily-mission-box-scroll">
                <div className="journal-parth-box">
                  <div className="journal-parth-block">
                    <div className="daily-parth-box completed">
                      <div className="daily-parth-text">Hunt 25 monsters.</div>
                      <div className="daily-prgbar-all">
                        <div
                          className="daily-prgbar"
                          style={{
                            width: "100%",
                          }}
                        ></div>
                        <div className="daily-prgbar-text">25/25</div>
                      </div>
                      <div className="daily-parth-claim-box">
                        <div className="daily-reward">
                          <div className="daily-reward-pic">
                            <img src="img/gold.png" loading="lazy" />
                          </div>
                          <div className="daily-reward-count">23.1UD13</div>
                        </div>
                      </div>
                      <div className="progress-banner-green">completed!</div>
                    </div>
                    <div className="daily-parth-box available">
                      <div className="daily-parth-text">
                        Use player ability 10 times.
                      </div>
                      <div className="daily-prgbar-all">
                        <div
                          className="daily-prgbar"
                          style={{
                            width: "100%",
                          }}
                        ></div>
                        <div className="daily-prgbar-text">10/10</div>
                      </div>
                      <div className="daily-parth-claim-box">
                        <div className="daily-reward">
                          <div className="daily-reward-pic">
                            <img
                              src="img/change-ic-gem-master.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="daily-reward-count">1 pack</div>
                        </div>
                        <div className="color-btn green">
                          <div className="color-btn-text">claim</div>
                        </div>
                      </div>
                      <div className="progress-banner-red">available!</div>
                    </div>
                    <div className="daily-parth-box">
                      <div className="daily-parth-text">
                        Pass through 15 locations.
                      </div>
                      <div className="daily-prgbar-all">
                        <div
                          className="daily-prgbar"
                          style={{
                            width: "80%",
                          }}
                        ></div>
                        <div className="daily-prgbar-text">8/10</div>
                      </div>
                      <div className="daily-parth-claim-box">
                        <div className="daily-reward">
                          <div className="daily-reward-pic">
                            <img src="img/top-arrow@2x.png" loading="lazy" />
                          </div>
                          <div className="daily-reward-count">1</div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                    <div className="daily-parth-box">
                      <div className="daily-parth-text">
                        Level up any superheroine skill by 30 levels.
                      </div>
                      <div className="daily-prgbar-all">
                        <div
                          className="daily-prgbar"
                          style={{
                            width: "0%",
                          }}
                        ></div>
                        <div className="daily-prgbar-text">0/30</div>
                      </div>
                      <div className="daily-parth-claim-box">
                        <div className="daily-reward">
                          <div className="daily-reward-pic">
                            <img src="img/essence.png" loading="lazy" />
                          </div>
                          <div className="daily-reward-count">2 pack</div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                    <div className="daily-parth-box completed">
                      <div className="daily-parth-text">
                        Level up any trophy by 5 levels.
                      </div>
                      <div className="daily-prgbar-all">
                        <div
                          className="daily-prgbar"
                          style={{
                            width: "100%",
                          }}
                        ></div>
                        <div className="daily-prgbar-text">5/5</div>
                      </div>
                      <div className="daily-parth-claim-box">
                        <div className="daily-reward">
                          <div className="daily-reward-pic">
                            <img src="img/essence.png" loading="lazy" />
                          </div>
                          <div className="daily-reward-count">1 pack</div>
                        </div>
                      </div>
                      <div className="progress-banner-green">completed!</div>
                    </div>
                    <div className="daily-parth-box">
                      <div className="daily-parth-text">
                        Level up any trophy by 10 levels.
                      </div>
                      <div className="daily-prgbar-all">
                        <div
                          className="daily-prgbar"
                          style={{
                            width: "0%",
                          }}
                        ></div>
                        <div className="daily-prgbar-text">0/10</div>
                      </div>
                      <div className="daily-parth-claim-box">
                        <div className="daily-reward">
                          <div className="daily-reward-pic">
                            <img src="img/gold.png" loading="lazy" />
                          </div>
                          <div className="daily-reward-count">23.1UD13</div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="daily-mission-reset">
                daily mission reset:
                <span className="t">15:07:41</span> left
              </div>

              {/* main */}
              <div className="journal-parth-header">
                <div className="quest-switch-section">
                  <div className="section-name tutor">
                    <div className="nameText">tutor</div>
                  </div>
                  <div className="section-name disabRight">
                    <div className="nameText">underworld</div>
                  </div>
                  <div className="section-name disabRight darkWorld">
                    <div className="nameText">darkworld</div>
                  </div>
                </div>
                <div className="arrow left"></div>
                <div className="arrow right"></div>
              </div>
              <div className="journal-parth-box-scroll">
                <div className="journal-parth-box">
                  <div className="journal-parth-block">
                    <div className="journal-parth-name">parth 1</div>
                    <div className="journal-parth">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>First battle</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div
                            className="daily-prgbar"
                            style={{
                              width: "100%",
                            }}
                          ></div>
                          <div className="daily-prgbar-text">1/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                    <div className="journal-parth">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>First money</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div className="daily-prgbar"></div>
                          <div className="daily-prgbar-text">1/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                    <div className="journal-parth">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>First adventure</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div className="daily-prgbar"></div>
                          <div className="daily-prgbar-text">1/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                  </div>
                  <div className="journal-parth-block">
                    <div className="journal-parth-name">parth 2</div>
                    <div className="journal-parth available">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>First heroine</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div
                            className="daily-prgbar"
                            style={{
                              width: "100%",
                            }}
                          ></div>
                          <div className="daily-prgbar-text">10/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                        <div className="color-btn green">
                          <div className="color-btn-text">claim</div>
                        </div>
                      </div>
                      <div className="progress-banner-red">available!</div>
                    </div>
                    <div className="journal-parth completed">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>Boss hunt</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div
                            className="daily-prgbar"
                            style={{
                              width: "100%",
                            }}
                          ></div>
                          <div className="daily-prgbar-text">10/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-green">conpleted!</div>
                    </div>
                    <div className="journal-parth view">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>The hunt begun</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div className="daily-prgbar"></div>
                          <div className="daily-prgbar-text">1/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="journal-parth-box-scroll disabRight">
                <div className="journal-parth-box">
                  <div className="journal-parth-block">
                    <div className="journal-parth-name">parth 1</div>
                    <div className="journal-parth">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>First battle</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div
                            className="daily-prgbar"
                            style={{
                              width: "100%",
                            }}
                          ></div>
                          <div className="daily-prgbar-text">1/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                    <div className="journal-parth">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>First money</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div className="daily-prgbar"></div>
                          <div className="daily-prgbar-text">1/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                    <div className="journal-parth">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>First adventure</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div className="daily-prgbar"></div>
                          <div className="daily-prgbar-text">1/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                  </div>
                  <div className="journal-parth-block">
                    <div className="journal-parth-name">parth 2</div>
                    <div className="journal-parth available">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>First heroine</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div
                            className="daily-prgbar"
                            style={{
                              width: "100%",
                            }}
                          ></div>
                          <div className="daily-prgbar-text">10/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                        <div className="color-btn green">
                          <div className="color-btn-text">claim</div>
                        </div>
                      </div>
                      <div className="progress-banner-red">available!</div>
                    </div>
                    <div className="journal-parth completed">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>Boss hunt</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div
                            className="daily-prgbar"
                            style={{
                              width: "100%",
                            }}
                          ></div>
                          <div className="daily-prgbar-text">10/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-green">conpleted!</div>
                    </div>
                    <div className="journal-parth view">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>The hunt begun</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div className="daily-prgbar"></div>
                          <div className="daily-prgbar-text">1/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="journal-parth-box-scroll disabRight darkWorld">
                <div className="journal-parth-box">
                  <div className="journal-parth-block">
                    <div className="journal-parth-name">parth 1</div>
                    <div className="journal-parth">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>First battle</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div
                            className="daily-prgbar"
                            style={{
                              width: "100%",
                            }}
                          ></div>
                          <div className="daily-prgbar-text">1/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                    <div className="journal-parth">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>First money</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div className="daily-prgbar"></div>
                          <div className="daily-prgbar-text">1/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                    <div className="journal-parth">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>First adventure</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div className="daily-prgbar"></div>
                          <div className="daily-prgbar-text">1/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                  </div>
                  <div className="journal-parth-block">
                    <div className="journal-parth-name">parth 2</div>
                    <div className="journal-parth available">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>First heroine</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div
                            className="daily-prgbar"
                            style={{
                              width: "100%",
                            }}
                          ></div>
                          <div className="daily-prgbar-text">10/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                        <div className="color-btn green">
                          <div className="color-btn-text">claim</div>
                        </div>
                      </div>
                      <div className="progress-banner-red">available!</div>
                    </div>
                    <div className="journal-parth completed">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>Boss hunt</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div
                            className="daily-prgbar"
                            style={{
                              width: "100%",
                            }}
                          ></div>
                          <div className="daily-prgbar-text">10/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-green">conpleted!</div>
                    </div>
                    <div className="journal-parth view">
                      <div className="journal-parth-wrap">
                        <div className="journal-parth-text-box">
                          <div className="journal-parth-title">
                            <p>The hunt begun</p>
                          </div>
                          <div className="journal-parth-text">
                            Kill 10 monsters
                          </div>
                        </div>
                        <div className="daily-prgbar-all">
                          <div className="daily-prgbar"></div>
                          <div className="daily-prgbar-text">1/10</div>
                        </div>
                        <div className="text">
                          You are tired to fend small orders and you decide to
                          create your guild. To do this, you have to hunt for
                          monsters near the city.
                        </div>
                      </div>
                      <div className="journal-reward">
                        <div className="journal-reward-pic-wrap">
                          <div className="journal-reward-pic story-icn">
                            <img src="img/story/t/p3-c1.png" loading="lazy" />
                          </div>
                          <div className="journal-reward-pic">
                            <img src="img/change-ic-gold.png" loading="lazy" />
                            <div className="journal-reward-value">1000</div>
                          </div>
                        </div>
                      </div>
                      <div className="progress-banner-gray">in progress..</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* story */}
              <div className="journal-parth-box-scroll story">
                <div className="journal-parth-box">
                  <div className="journal-parth-block">
                    <div className="journal-parth-name">Intro</div>
                    <div className="journal-comics-box">
                      <div className="journal-prw-comics-pic">
                        <img src="img/story/t/p1-c1.png" loading="lazy" />
                      </div>
                      <div className="journal-prw-comics-lock"></div>
                      <div className="journal-prw-comics-text-box">
                        <div className="journal-prw-comics-text">
                          First battle
                        </div>
                      </div>
                    </div>
                    <div className="journal-comics-box">
                      <div className="journal-prw-comics-pic">
                        <img src="img/story/t/p1-c2.png" loading="lazy" />
                      </div>
                      <div className="journal-prw-comics-lock"></div>
                      <div className="journal-prw-comics-text-box">
                        <div className="journal-prw-comics-text">
                          First money
                        </div>
                      </div>
                    </div>
                    <div className="journal-comics-box">
                      <div className="journal-prw-comics-pic">
                        <img src="img/story/t/p1-c3.png" loading="lazy" />
                      </div>
                      <div className="journal-prw-comics-lock"></div>
                      <div className="journal-prw-comics-text-box">
                        <div className="journal-prw-comics-text">
                          First adventure
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="journal-parth-block">
                    <div className="journal-parth-name">Step by step</div>
                    <div className="journal-comics-box">
                      <div className="journal-prw-comics-pic">
                        <img src="img/story/t/p2-c1.png" loading="lazy" />
                      </div>
                      <div className="journal-prw-comics-lock"></div>
                      <div className="journal-prw-comics-text-box">
                        <div className="journal-prw-comics-text">
                          First heroine
                        </div>
                      </div>
                    </div>
                    <div className="journal-comics-box">
                      <div className="journal-prw-comics-pic">
                        <img src="img/story/t/p2-c2.png" loading="lazy" />
                      </div>
                      <div className="journal-prw-comics-lock"></div>
                      <div className="journal-prw-comics-text-box">
                        <div className="journal-prw-comics-text">Boss hunt</div>
                      </div>
                    </div>
                  </div>
                  <div className="journal-parth-block">
                    <div className="journal-parth-name">Superheroes</div>
                    <div className="journal-comics-box active">
                      <div className="journal-prw-comics-pic">
                        <img src="img/story/t/p3-c1.png" loading="lazy" />
                      </div>
                      <div className="journal-prw-comics-lock"></div>
                      <div className="journal-prw-comics-text-box">
                        <div className="journal-prw-comics-text">
                          The hunt begun
                        </div>
                      </div>
                    </div>
                    <div className="journal-comics-box">
                      <div className="journal-prw-comics-pic">
                        <img src="img/story/t/p3-c2.png" loading="lazy" />
                      </div>
                      <div className="journal-prw-comics-lock"></div>
                      <div className="journal-prw-comics-text-box">
                        <div className="journal-prw-comics-text">
                          New assistants
                        </div>
                      </div>
                    </div>
                    <div className="journal-comics-box">
                      <div className="journal-prw-comics-pic">
                        <img src="img/story/t/p3-c3.png" loading="lazy" />
                      </div>
                      <div className="journal-prw-comics-lock"></div>
                      <div className="journal-prw-comics-text-box">
                        <div className="journal-prw-comics-text">
                          Distant journey
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="journal-parth-block">
                    <div className="journal-parth-name">Royal tournament</div>
                    <div className="journal-comics-box">
                      <div className="journal-prw-comics-pic">
                        <img src="img/story/t/p4-c1.png" loading="lazy" />
                      </div>
                      <div className="journal-prw-comics-lock"></div>
                      <div className="journal-prw-comics-text-box">
                        <div className="journal-prw-comics-text">
                          Royal tournament
                        </div>
                      </div>
                    </div>
                    <div className="journal-comics-box lock">
                      <div className="journal-prw-comics-pic">
                        <img src="img/story/t/p4-c2.png" loading="lazy" />
                      </div>
                      <div className="journal-prw-comics-lock"></div>
                      <div className="journal-prw-comics-text-box">
                        <div className="journal-prw-comics-text">
                          Further and further
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-all-box">
            <div className="skills-all">
              <div className="skills-pic">
                <img
                  className="icon"
                  src="img/skill-icons/skill-icon01.png"
                  loading="lazy"
                />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic">
                <img
                  className="icon"
                  src="img/skill-icons/skill-icon02.png"
                  loading="lazy"
                />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic">
                <img
                  className="icon"
                  src="img/skill-icons/skill-icon03.png"
                  loading="lazy"
                />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic">
                <img
                  className="icon"
                  src="img/skill-icons/skill-icon04.png"
                  loading="lazy"
                />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic">
                <img
                  className="icon"
                  src="img/skill-icons/skill-icon05.png"
                  loading="lazy"
                />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic">
                <img
                  className="icon"
                  src="img/skill-icons/skill-icon06.png"
                  loading="lazy"
                />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic">
                <img
                  className="icon"
                  src="img/skill-icons/skill-icon07.png"
                  loading="lazy"
                />
                <div className="skills-pic-disabled"></div>
              </div>
            </div>
          </div>
          <div className="journal-rightside-box-all">
            <div className="journal-parth-name">Intro</div>
            <div className="journal-comics-view-box">
              <div className="journal-comics-view">
                <div
                  className="journal-comics"
                  onClick={() => {
                    nexusTrigger({
                      type: "handlePopup",
                      payload: {
                        type: "open",
                        data: {
                          mpopClass: "m-popup uki-story-popup contentOnly",
                          popCont: "ComicsPop",
                        },
                      },
                    });
                  }}
                >
                  <img
                    className="pic"
                    src="img/quests/comics/step_1_01.jpg"
                    loading="lazy"
                  />
                  <div className="ballonsWrap">
                    <div
                      className="journal-comics-ballon-box"
                      style={{
                        top: "0px",
                        left: "80px",
                        width: "170px",
                        opacity: "1",
                      }}
                    >
                      <div className="journal-comics-ballon-text">
                        Damn it... were out of gold again.
                      </div>
                    </div>
                    <div
                      className="journal-comics-ballon-box"
                      style={{
                        bottom: "15px",
                        right: "20px",
                        width: "230px",
                        opacity: "1",
                      }}
                    >
                      <div className="journal-comics-ballon-text">
                        The best monster orders are taken by the Guilders
                      </div>
                    </div>
                  </div>
                  <div className="trophy-bonus-pic-lup"></div>
                </div>
              </div>
              <div className="journal-comics-view-nav-box">
                <div className="journal-comics-view-nav"></div>
                <div className="journal-comics-view-nav right"></div>
                <div className="journal-comics-view-nav-count">1 / 3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs-all-box">
          <a className="tabs-all heroes" href="#/">
            <div>
              <div className="tabs-name">Heroes</div>
              <div className="tabs-pic">
                <img src="img/tab-01.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all guild" href="#/guild">
            <div>
              <div className="tabs-name">Guild base</div>
              <div className="tabs-pic">
                <img src="img/tab-08.png" loading="lazy" />
              </div>
            </div>
            <div className="v2-tab-notif notif notif20"></div>
          </a>
          <a className="tabs-all album" href="#/galery/pictures">
            <div>
              <div className="tabs-name">Gallery</div>
              <div className="tabs-pic">
                <img src="img/tab-05.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all rating" href="#/rating/jewerly">
            <div>
              <div className="tabs-name">Rating Tab</div>
              <div className="tabs-pic">
                <img src="img/tab-02.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a
            className="tabs-all squests selected"
            href="#/quests/daily"
            aria-current="page"
          >
            <div>
              <div className="tabs-name">Quests</div>
              <div className="tabs-pic">
                <img src="img/tab-10.png" loading="lazy" />
              </div>
            </div>
          </a>
        </div>
      </div>
      {children}
    </div>
  );
}
