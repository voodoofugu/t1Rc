import React, { useEffect } from "react";
// import v2ScreenSexpedMain from "../styles/v2-screen-sexped-main.scss";
// import screenInfoPop from "../styles/screen-info-pop.scss";
// import v2ScreenSexpedQuestevent from "../styles/v2-screen-sexped-questevent.scss";

const V2MainScreen12SexpedMainComponent = () => {
  // создаём такой же айди как у родителя здесь и так попадаем к нему для проверки наличия класса noScripts
  const currentUrl = window.location.href;
  const fileNameWithoutExtension = currentUrl.split("/").pop().split(".")[0];
  const pageContainerId = `root-${fileNameWithoutExtension}`;
  const pageContainer = document.getElementById(pageContainerId);

  useEffect(() => {
    if (pageContainer && !pageContainer.classList.contains("noScripts")) {
      // все попапы
      const po = document.getElementById("popupAll");
      const re = document.querySelector(".popup-layer");
      const pInf = document.querySelector(".m-popup.info-pop");
      const pQuest = document.querySelector(".m-popup.sexped-questevent");

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

      const bInf = document.querySelector(".color-btn-info");
      bInf.addEventListener("click", () => {
        re.style.display = "block";
        setTimeout(function () {
          pInf.style.display = "block";
          po.classList.add("dialog-emersion-enter");
        }, 100);
      });

      const bQuest = document.querySelector(".color-btn.quest");
      bQuest.addEventListener("click", () => {
        re.style.display = "block";
        setTimeout(function () {
          pQuest.style.display = "block";
          po.classList.add("dialog-emersion-enter");
        }, 100);
      });

      // окна игрофой механики
      const mainBg = document.querySelector(
        ".main-bg-scroll-box.indiana-scroll-container"
      );
      const seMiS = document.querySelector(".sexped-mission-screen");
      const seFiS = document.querySelector(".sexped-fight-screen");
      seMiS.style.display = "none";
      seFiS.style.display = "none";

      const seMiB = document.querySelector(".lastDone");
      seMiB.addEventListener("click", (e) => {
        seMiS.style.display = "block";
        seFiS.style.display = "none";
      });

      let btn = document.querySelectorAll(".sexped-mission-btn-box .color-btn");
      btn.item(0).addEventListener("click", (e) => {
        seMiS.style.display = "none";
        seFiS.style.display = "none";
      });
      btn.item(1).addEventListener("click", (e) => {
        seMiS.style.display = "none";
        seFiS.style.display = "block";
        mainBg.style.display = "none";
      });
      btn.item(2).addEventListener("click", (e) => {
        seMiS.style.display = "none";
        seFiS.style.display = "none";
        mainBg.style.display = "block";
      });

      const sMis = document.querySelectorAll(".sexped-mission-scroll");
      sMis.item(1).style.display = "none";
      // переключалка
      const tabAll = document.querySelectorAll(".tabs-menu-btn");
      tabAll.forEach((item) => {
        item.addEventListener("click", (e) => {
          // меню
          tabAll.forEach((el) => {
            el.classList.remove("active");
          });
          item.classList.add("active");
          // окна
          if (tabAll.item(0).classList.contains("active")) {
            sMis.item(0).style.display = "flex";
            sMis.item(1).style.display = "none";
          }
          if (tabAll.item(1).classList.contains("active")) {
            sMis.item(0).style.display = "none";
            sMis.item(1).style.display = "flex";
          }
        });
      });
      // фильтры
      const filtr = document.querySelectorAll(".sexped-fl");
      filtr.forEach((item) => {
        item.addEventListener("click", (e) => {
          // меню
          filtr.forEach((el) => {
            el.classList.remove("select");
          });
          item.classList.add("select");
        });
      });
      // карты
      const heroAva = document.querySelectorAll(".hero-avatar-box");
      heroAva.forEach((item) => {
        item.addEventListener("click", (e) => {
          // меню
          heroAva.forEach((el) => {
            el.classList.remove("selected");
          });
          item.classList.add("selected");
        });
      });
      return;
    }
    return () => {};
  }, []);
  return (
    <>
      <div className="main lang-ru world1">
        <div
          className="main-bg"
          style={{
            backgroundImage: "url('../img/images/back/new/01-Forest-1.jpg')",
          }}
        ></div>
        <div className="sexped-header">
          <div className="title-wrap">
            <div className="header-title">Sexpedition</div>
          </div>
          <div className="btn-close-x"></div>
          <div className="color-btn-info"></div>

          <div className="res-shop-btn">
            <div className="res-shop-btn-text">shop</div>
          </div>
          <div className="sexped-chaos-btn">
            <div className="sexped-chaos-icon"></div>
            <div className="sexped-chaos-count">0</div>
          </div>
          <div className="sexped-energy-prgbar-box-all">
            <div className="sexped-energy-pic"></div>
            <div className="sexped-prgbar-btn-add"></div>
            <div className="sexped-prgbar-bg">
              <div className="sexped-prgbar-100">
                <div className="sexped-prgbar" style={{ width: "100%" }}></div>
              </div>
              <div className="sexped-prgbar-text">energy: 1.04K/50</div>
            </div>
          </div>
          <div className="sexped-top-btn-box">
            <div className="color-btn quest">
              <div className="sexped-btn-pic">
                <img src="img/v2-ic-book.png" loading="lazy" />
              </div>
            </div>
            <div className="color-btn rating">
              <div className="sexped-btn-pic">
                <img src="img/v2-ic-rating.png" loading="lazy" />
              </div>
            </div>
            <div className="color-btn dual-pack">
              <div className="sexped-btn-pic">
                <img src="img/v2-sexpedition-ball.png" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        <div className="main-bg-scroll-box indiana-scroll-container">
          <div className="sexped-bg-map-scroll-box">
            <div className="sexped-bg-map"></div>
            <div className="sexped-nods-box sexped-nods-box--1 lastDone">
              <div className="sexped-nods-pic"></div>
              <div className="fw-mission-num">Lvl 1</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--2 false">
              <div className="sexped-nods-pic active"></div>
              <div className="fw-mission-num">Lvl 2</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--3 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 3</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--4 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 4</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--5 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 5</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--6 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 6</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--7 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 7</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--8 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 8</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--9 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 9</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--10 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 10</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--11 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 11</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--12 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 12</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--13 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 13</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--14 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 14</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--15 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 15</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--16 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 16</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--17 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 17</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--18 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 18</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--19 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 19</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--20 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 20</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--21 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 21</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--22 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 22</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--23 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 23</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--24 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 24</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--25 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 25</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--26 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 26</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--27 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 27</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--28 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 28</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--29 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 29</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--30 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 30</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--101 false">
              <div className="sexped-nods-pic done"></div>
              <div className="fw-mission-num">Lvl 1-1</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--102 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 1-2</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--103 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 1-3</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--301 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 3-1</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--302 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 3-2</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--1101 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 11-1</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--1102 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 11-2</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--1103 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 11-3</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--1401 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 14-1</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--1402 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 14-2</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--1501 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 15-1</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--1502 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 15-2</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--2401 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 24-1</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--2402 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 24-2</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--2403 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 24-3</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--2404 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 24-4</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--2601 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 26-1</div>
            </div>
            <div className="sexped-nods-box sexped-nods-box--2602 false">
              <div className="sexped-nods-pic false false"></div>
              <div className="fw-mission-num">Lvl 26-2</div>
            </div>
          </div>
        </div>
        <div className="sexped-mission-screen">
          <div className="sexped-mission-left-side">
            <div className="hero-menu-box">
              <div className="tabs-menu-btn hero active">
                <a className="txt">
                  <div className="color-btn-text">heroes</div>
                </a>
              </div>
              <div className="tabs-menu-btn suphero">
                <a className="txt">
                  <div className="color-btn-text">superheroes</div>
                </a>
              </div>
            </div>
            <div
              className="sexped-mission-scroll-all-box"
              style={{ visibility: "visible" }}
            >
              <div className="sexped-mission-filter-box">
                <div className="fw-as-filter">
                  <div className="fw-as-filter-name">
                    <span className="ic-filter"></span>
                    filter
                  </div>
                </div>
                <div className="sexped-filter">
                  <div className="sexped-fl false">
                    <img src="img/cur2-sword.png" loading="lazy" />
                  </div>
                  <div className="sexped-fl false">
                    <img src="img/cur2-quitar.png" loading="lazy" />
                  </div>
                  <div className="sexped-fl false">
                    <img src="img/cur2-cleric.png" loading="lazy" />
                  </div>
                  <div className="sexped-fl false">
                    <img src="img/cur2-druid.png" loading="lazy" />
                  </div>
                  <div className="sexped-fl false">
                    <img src="img/cur2-barbarian.png" loading="lazy" />
                  </div>
                  <div className="sexped-fl false">
                    <img src="img/cur2-ranger.png" loading="lazy" />
                  </div>
                  <div className="sexped-fl false">
                    <img src="img/cur2-wizard.png" loading="lazy" />
                  </div>
                  <div className="sexped-fl false">
                    <img src="img/cur2-gun.png" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="sexped-mission-scroll-all">
                <div className="sexped-mission-scroll">
                  <div
                    draggable="true"
                    style={{
                      opacity: "1",
                      position: "relative",
                    }}
                  >
                    <div className="hero-avatar-box selected">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-235/x1/ava/tithero-235-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh3-icon-forgirl">
                        <img src="img/cur2-quitar.png" loading="lazy" />
                      </div>
                      <div className="fw-as-num">20</div>
                    </div>
                  </div>
                  <div
                    draggable="true"
                    style={{
                      opacity: "1",
                      position: "relative",
                    }}
                  >
                    <div className="hero-avatar-box false">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-234/x1/ava/tithero-234-2.jpg"
                        loading="lazy"
                      />
                      <div className="sh3-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="fw-as-num">24</div>
                    </div>
                  </div>
                  <div
                    draggable="true"
                    style={{
                      opacity: "1",
                      position: "relative",
                    }}
                  >
                    <div className="hero-avatar-box false">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-233/x1/ava/tithero-233-1.jpg"
                        loading="lazy"
                      />
                      <div className="sh3-icon-forgirl">
                        <img src="img/cur2-cleric.png" loading="lazy" />
                      </div>
                      <div className="fw-as-num">20</div>
                    </div>
                  </div>
                  <div
                    draggable="true"
                    style={{
                      opacity: "1",
                      position: "relative",
                    }}
                  >
                    <div className="hero-avatar-box false">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-163/x1/ava/tithero-163-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh3-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                      <div className="fw-as-num">20</div>
                    </div>
                  </div>
                  <div
                    draggable="true"
                    style={{
                      opacity: "1",
                      position: "relative",
                    }}
                  >
                    <div className="hero-avatar-box false">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-160/x1/ava/tithero-160-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh3-icon-forgirl">
                        <img src="img/cur2-wizard.png" loading="lazy" />
                      </div>
                      <div className="fw-as-num">20</div>
                    </div>
                  </div>
                  <div
                    draggable="true"
                    style={{
                      opacity: "1",
                      position: "relative",
                    }}
                  >
                    <div className="hero-avatar-box false">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh3-icon-forgirl">
                        <img src="img/cur2-wizard.png" loading="lazy" />
                      </div>
                      <div className="fw-as-num">20</div>
                    </div>
                  </div>
                  <div
                    draggable="true"
                    style={{
                      opacity: "1",
                      position: "relative",
                    }}
                  >
                    <div className="hero-avatar-box false">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-5002/x1/ava/tithero-5002-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh3-icon-forgirl">
                        <img src="img/cur2-cleric.png" loading="lazy" />
                      </div>
                      <div className="fw-as-num">20</div>
                    </div>
                  </div>
                  <div
                    draggable="true"
                    style={{
                      opacity: "1",
                      position: "relative",
                    }}
                  >
                    <div className="hero-avatar-box false">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-5001/x1/ava/tithero-5001-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh3-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                      <div className="fw-as-num">20</div>
                    </div>
                  </div>
                  <div
                    draggable="true"
                    style={{
                      opacity: "1",
                      position: "relative",
                    }}
                  >
                    <div className="hero-avatar-box false">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh3-icon-forgirl">
                        <img src="img/cur2-wizard.png" loading="lazy" />
                      </div>
                      <div className="fw-as-num">20</div>
                    </div>
                  </div>
                  <div
                    draggable="true"
                    style={{
                      opacity: "1",
                      position: "relative",
                    }}
                  >
                    <div className="hero-avatar-box false">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-5002/x1/ava/tithero-5002-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh3-icon-forgirl">
                        <img src="img/cur2-cleric.png" loading="lazy" />
                      </div>
                      <div className="fw-as-num">20</div>
                    </div>
                  </div>
                  <div
                    draggable="true"
                    style={{
                      opacity: "1",
                      position: "relative",
                    }}
                  >
                    <div className="hero-avatar-box false">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-5001/x1/ava/tithero-5001-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh3-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                      <div className="fw-as-num">20</div>
                    </div>
                  </div>
                </div>
                <div className="sexped-mission-scroll">
                  <div
                    style={{
                      opacity: "1",
                      position: "relative",
                    }}
                    draggable="true"
                  >
                    <div className="hero-avatar-box superheroines false">
                      <img
                        className="hero-avatar"
                        src="img/images/superhero/suphero-830/x1/avatar/830sh-ava-1.jpg"
                        loading="lazy"
                      />
                      <div className="sh3-icon-forgirl">
                        <img src="img/cur2-quitar.png" loading="lazy" />
                      </div>
                      <div className="sh3-icon">
                        <img src="img/icon-rare.png" loading="lazy" />
                      </div>
                      <div className="fw-as-num">+100%</div>
                    </div>
                  </div>
                  <div
                    style={{
                      opacity: "1",
                      position: "relative",
                    }}
                    draggable="true"
                  >
                    <div className="hero-avatar-box superheroines false">
                      <img
                        className="hero-avatar"
                        src="img/images/superhero/suphero-831/x1/avatar/831sh-ava-1.jpg"
                        loading="lazy"
                      />
                      <div className="sh3-icon-forgirl">
                        <img src="img/cur2-cleric.png" loading="lazy" />
                      </div>
                      <div className="sh3-icon">
                        <img src="img/cur-c.png" loading="lazy" />
                      </div>
                      <div className="fw-as-num">+100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sexped-mission-description">
              <div className="color-btn">
                <div className="color-btn-text">arrange team</div>
              </div>
              <div className="text">or</div>
              <div className="text-hint-wrap">
                <div className="text">Choose/Drag and drop your heroes</div>
              </div>
            </div>
          </div>
          <div className="sexped-mission-right-side">
            <div className="sexped-mission-team-name">sexpedition team</div>
            <div className="sexped-mission-team-box buffteam">
              <div className="sexped-mission-team-n">
                <div className="dpc-dps-sp">
                  <div className="title">
                    <div className="text buff">buff</div>
                    <div className="icon-buff"></div>
                  </div>
                </div>
              </div>
              <div className="sexped-mission-team-card-box">
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase buff
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase buff
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase buff
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase buff
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sexped-mission-team-box dpsteam">
              <div className="sexped-mission-team-n">
                <div className="dpc-dps-sp">
                  <div className="title">
                    <div className="text dps">dps</div>
                    <div className="icon-dps"></div>
                  </div>
                </div>
              </div>
              <div className="sexped-mission-team-card-box">
                <div className="sexped-mission-team-card avail">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dps
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dps
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dps
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dps
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sexped-mission-team-box dpcteam">
              <div className="sexped-mission-team-n">
                <div className="dpc-dps-sp">
                  <div className="title">
                    <div className="text dpc">dpc</div>
                    <div className="icon-dpc"></div>
                  </div>
                </div>
              </div>
              <div className="sexped-mission-team-card-box">
                <div className="sexped-mission-team-card selected">
                  <div className="hero-avatar-box undefined">
                    <img
                      className="hero-avatar"
                      src="img/images/hero-all/tithero-185/x1/ava/tithero-185-1-ava.jpg"
                      loading="lazy"
                    />
                    <div className="sh3-icon-forgirl">
                      <img src="img/cur2-barbarian.png" loading="lazy" />
                    </div>
                    <div className="fw-as-num">20</div>
                  </div>
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dpc
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                  <div className="remove-view">remove</div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dpc
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dpc
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dpc
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sexped-mission-team-name rewards">
              mission rewards
            </div>
            <div className="sexped-mission-team-rewards-box">
              <div className="sexped-mission-rewards-box firstclear check">
                <div className="sexped-mission-rewards-text">1st clear</div>
                <div className="sexped-mission-rewards-pic">
                  <img src="img/v2-icon-sexped-ore.png" loading="lazy" />
                </div>
                <div className="sexped-mission-rewards-num">100</div>
                <div className="sexped-mission-rewards-check"></div>
              </div>
              <div className="sexped-mission-rewards-box firstclear check">
                <div className="sexped-mission-rewards-text">1st clear</div>
                <div className="sexped-mission-rewards-pic">
                  <img src="img/v2-sexped-chest-ore.png" loading="lazy" />
                </div>
                <div className="sexped-mission-rewards-num">1</div>
                <div className="sexped-mission-rewards-check"></div>
              </div>
              <div className="sexped-mission-rewards-box firstclear false">
                <div className="sexped-mission-rewards-text">2-4th clear</div>
                <div className="sexped-mission-rewards-pic firstclear">
                  <img src="img/v2-icon-sexped-ore.png" loading="lazy" />
                </div>
                <div className="sexped-mission-rewards-num">10</div>
                <div className="sexped-mission-rewards-check"></div>
              </div>
              <div className="sexped-mission-rewards-box firstclear false">
                <div className="sexped-mission-rewards-text">5th clear</div>
                <div className="sexped-mission-rewards-pic">
                  <img src="img/v2-sexped-chest-ore.png" loading="lazy" />
                </div>
                <div className="sexped-mission-rewards-num">1</div>
                <div className="sexped-mission-rewards-check"></div>
              </div>
              <div className="sexped-mission-rewards-box">
                <div className="sexped-mission-rewards-text">x</div>
                <div className="sexped-mission-rewards-pic">
                  <img src="img/v2-icon-sexped-ore.png" loading="lazy" />
                </div>
                <div className="sexped-mission-rewards-num">10</div>
                <div className="sexped-mission-rewards-check"></div>
              </div>
            </div>
            <div className="sexped-mission-btn-box">
              <div className="color-btn">
                <div className="color-btn-text">back</div>
              </div>
              <div className="color-btn green">
                <div className="color-btn-text">
                  start mission
                  <div className="color-btn-text-energy">
                    5<span className="f-energy"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="monster">
              <div className="">
                <canvas width="668" height="640"></canvas>
              </div>
            </div>
            <div></div>
            <div className="monster-prg-box-all sp">
              <div className="lvl-prg">NaN/</div>
              <div className="name"></div>
              <div className="health">
                <div className="p100">
                  <div className="prg" style={{ width: "0%" }}></div>
                </div>
                <div className="num pulse">
                  <div className="from">0</div>
                  <div className="to">1</div>
                </div>
              </div>
              <div className="loc-list">
                <div className="locs">
                  <div className="loc">
                    <div className="loc-text">0</div>
                    <div className="loc-text2">lvl</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sexped-fight-screen">
          <div className="sexped-mission-left-side">
            <div className="dps-dpc-panel-box">
              <div className="dpc">
                <div className="value">60</div>
                <div className="mlt-prm">+0%</div>
                <div className="title">
                  DPC
                  <div className="icon-dpc"></div>
                </div>
              </div>
              <div className="dps">
                <div className="value">0</div>
                <div className="mlt-prm">+0%</div>
                <div className="title">
                  DPS
                  <div className="icon-dps"></div>
                </div>
              </div>
            </div>
            <div className="sexped-mission-team-box buffteam">
              <div className="sexped-mission-team-n">buff</div>
              <div className="sexped-mission-team-card-box">
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase buff
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase buff
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase buff
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase buff
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sexped-mission-team-box dpsteam">
              <div className="sexped-mission-team-n">dps</div>
              <div className="sexped-mission-team-card-box">
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dps
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dps
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dps
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dps
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sexped-mission-team-box dpcteam">
              <div className="sexped-mission-team-n">dpc</div>
              <div className="sexped-mission-team-card-box">
                <div className="sexped-mission-team-card selected">
                  <div className="hero-avatar-box undefined">
                    <img
                      className="hero-avatar"
                      src="img/images/hero-all/tithero-163/x1/ava/tithero-163-1-ava.jpg"
                      loading="lazy"
                    />
                    <div className="sh3-icon-forgirl">
                      <img src="img/cur2-barbarian.png" loading="lazy" />
                    </div>
                    <div className="fw-as-num">20</div>
                  </div>
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dpc
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                  <div className="remove-view">remove</div>
                </div>
                <div className="sexped-mission-team-card selected">
                  <div className="hero-avatar-box undefined">
                    <img
                      className="hero-avatar"
                      src="img/images/hero-all/tithero-160/x1/ava/tithero-160-1-ava.jpg"
                      loading="lazy"
                    />
                    <div className="sh3-icon-forgirl">
                      <img src="img/cur2-wizard.png" loading="lazy" />
                    </div>
                    <div className="fw-as-num">20</div>
                  </div>
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dpc
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                  <div className="remove-view">remove</div>
                </div>
                <div className="sexped-mission-team-card selected">
                  <div className="hero-avatar-box undefined">
                    <img
                      className="hero-avatar"
                      src="img/images/hero-all/tithero-185/x1/ava/tithero-185-1-ava.jpg"
                      loading="lazy"
                    />
                    <div className="sh3-icon-forgirl">
                      <img src="img/cur2-barbarian.png" loading="lazy" />
                    </div>
                    <div className="fw-as-num">20</div>
                  </div>
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dpc
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                  <div className="remove-view">remove</div>
                </div>
                <div className="sexped-mission-team-card">
                  <div className="sexped-mission-team-card-effect-box">
                    <div className="sexped-mission-team-card-effect-name">
                      effect
                    </div>
                    <div className="sexped-mission-team-card-effect-text-box">
                      <div className="sexped-mission-team-card-effect-text">
                        Increase dpc
                      </div>
                    </div>
                  </div>
                  <div className="hero-avatar-box-add">
                    <div className="hero-avatar-box-add-plus"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sexped-mission-btn-box">
              <div className="color-btn">
                <div className="color-btn-text">back</div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="monster">
              <div className="">
                <canvas width="668" height="640"></canvas>
              </div>
            </div>
            <div></div>
            <div className="monster-prg-box-all sp">
              <div className="lvl-prg">1/10</div>
              <div className="name">Awful Spider</div>
              <div className="health">
                <div className="p100">
                  <div className="prg" style={{ width: "92%" }}></div>
                </div>
                <div className="num pulse">
                  <div className="from">780</div>
                  <div className="to">840</div>
                </div>
              </div>
              <div className="timer">
                <div className="p100">
                  <div className="prg" style={{ width: "72.1367%" }}></div>
                </div>
                <div className="time run">
                  <div className="txt">0:21</div>
                </div>
              </div>
              <div className="loc-list">
                <div className="locs">
                  <div className="loc">
                    <div className="loc-text">0</div>
                    <div className="loc-text2">lvl</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div id="popupAll" className="popup-layer">
          <div className="screen-blend-55"></div>
          <div id="dialogContainer">
            <div className="m-popup info-pop">
              <div className="title">Sexpedition rules</div>
              <div className="btn-close-x"></div>
              <div className="content">
                <div className="text-box">
                  <div className="text">
                    <div>
                      1. The strength of the heroine is the number of her
                      promotions.
                    </div>
                    <div>
                      2. The strength of a superheroine is the number of her
                      stars.
                    </div>
                    <div>
                      3. Sexpedition consists of a chain of battles that follow
                      each other.
                    </div>
                    <div>
                      4. Each battle requires a certain amount of energy.
                    </div>
                    <div>
                      5. Each battle has its own limitations on the available
                      heroines.
                    </div>
                    <div>
                      6. The reward for fighting is chaos chests and coins of
                      chaos. For coins of chaos, you can buy additional chaos
                      chests in the store.
                    </div>
                    <div>
                      7. Opening a chaos chest gives points for the rating of
                      the sexpedition, can give points for energy and
                      superheroes.
                    </div>
                    <div>
                      8. Those who take the highest places in the ranking will
                      receive unique superheroines.
                    </div>
                  </div>
                </div>
                <div className="color-btn close">
                  <div className="color-btn-text">закрыть</div>
                </div>
              </div>
            </div>
            <div className="m-popup sexped-questevent">
              <div className="title">Sexpedition Quests</div>
              <div className="color-box"></div>
              <div className="xmas-daily-prg-box-all">
                <div className="xmas-prg-girl"></div>
                <div className="xmas-prg-bar-box">
                  <div className="xmas-prg-name-pic">0</div>
                  <div className="xmas-prg-bar">
                    <div className="xmas-prg" style={{ width: "0%" }}></div>
                  </div>
                </div>
                <div className="xmas-reward-chest-box undefined undefined undefined">
                  <div className="xmas-prg-bar-num-line">
                    <div className="xmas-prg-bar-num">30</div>
                  </div>
                  <div className="xmas-level-rew-pic">
                    <img src="img/v2-sexped-chest-ore.png" loading="lazy" />
                  </div>
                  <div className="xmas-level-rew-num-check"></div>
                  <div className="color-btn green">
                    <div className="color-btn-text">collect</div>
                  </div>
                  <div className="xmas-level-rew-num-block"></div>
                </div>
                <div className="xmas-reward-chest-box v2 undefined undefined">
                  <div className="xmas-prg-bar-num-line">
                    <div className="xmas-prg-bar-num">70</div>
                  </div>
                  <div className="xmas-level-rew-pic">
                    <img src="img/v2-sexped-chest-ore.png" loading="lazy" />
                  </div>
                  <div className="xmas-level-rew-num-check"></div>
                  <div className="color-btn green">
                    <div className="color-btn-text">collect</div>
                  </div>
                  <div className="xmas-level-rew-num-block"></div>
                </div>
                <div className="xmas-reward-chest-box v3 undefined undefined">
                  <div className="xmas-prg-bar-num-line">
                    <div className="xmas-prg-bar-num">100</div>
                  </div>
                  <div className="xmas-level-rew-pic">
                    <img src="img/v2-sexped-chest-ore.png" loading="lazy" />
                  </div>
                  <div className="xmas-level-rew-num-check"></div>
                  <div className="color-btn green">
                    <div className="color-btn-text">collect</div>
                  </div>
                  <div className="xmas-level-rew-num-block"></div>
                </div>
              </div>
              <div className="xmas-daily-box-all">
                <div className="xmas-daily-box">
                  <div className="daily-parth-box">
                    <div className="daily-parth-text">
                      Pass through 5 locations.
                    </div>
                    <div className="daily-prgbar-all">
                      <div
                        className="daily-prgbar"
                        style={{ width: "0%" }}
                      ></div>
                      <div className="daily-prgbar-text">0/5</div>
                    </div>
                    <div className="daily-parth-claim-box">
                      <div className="daily-reward">
                        <div className="daily-reward-pic">
                          <img src="img/ic-dildo-purple.png" loading="lazy" />
                        </div>
                        <div className="daily-reward-count">10</div>
                      </div>
                      <div className="color-btn disabled">
                        <div className="color-btn-text">
                          <span>claim reward</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="daily-parth-box">
                    <div className="daily-parth-text">Use 3 boss chests.</div>
                    <div className="daily-prgbar-all">
                      <div
                        className="daily-prgbar"
                        style={{ width: "0%" }}
                      ></div>
                      <div className="daily-prgbar-text">0/3</div>
                    </div>
                    <div className="daily-parth-claim-box">
                      <div className="daily-reward">
                        <div className="daily-reward-pic">
                          <img src="img/ic-dildo-purple.png" loading="lazy" />
                        </div>
                        <div className="daily-reward-count">20</div>
                      </div>
                      <div className="color-btn disabled">
                        <div className="color-btn-text">
                          <span>claim reward</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="daily-parth-box">
                    <div className="daily-parth-text">
                      Level up any heroine by 10 levels.
                    </div>
                    <div className="daily-prgbar-all">
                      <div
                        className="daily-prgbar"
                        style={{ width: "0%" }}
                      ></div>
                      <div className="daily-prgbar-text">0/10</div>
                    </div>
                    <div className="daily-parth-claim-box">
                      <div className="daily-reward">
                        <div className="daily-reward-pic">
                          <img src="img/ic-dildo-purple.png" loading="lazy" />
                        </div>
                        <div className="daily-reward-count">10</div>
                      </div>
                      <div className="color-btn disabled">
                        <div className="color-btn-text">
                          <span>claim reward</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="daily-parth-box">
                    <div className="daily-parth-text">
                      Increase any master stat by 5 levels.
                    </div>
                    <div className="daily-prgbar-all">
                      <div
                        className="daily-prgbar"
                        style={{ width: "0%" }}
                      ></div>
                      <div className="daily-prgbar-text">0/5</div>
                    </div>
                    <div className="daily-parth-claim-box">
                      <div className="daily-reward">
                        <div className="daily-reward-pic">
                          <img src="img/ic-dildo-purple.png" loading="lazy" />
                        </div>
                        <div className="daily-reward-count">10</div>
                      </div>
                      <div className="color-btn disabled">
                        <div className="color-btn-text">
                          <span>claim reward</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="daily-parth-box">
                    <div className="daily-parth-text">
                      Build 5 levels of any guild building.
                    </div>
                    <div className="daily-prgbar-all">
                      <div
                        className="daily-prgbar"
                        style={{ width: "0%" }}
                      ></div>
                      <div className="daily-prgbar-text">0/5</div>
                    </div>
                    <div className="daily-parth-claim-box">
                      <div className="daily-reward">
                        <div className="daily-reward-pic">
                          <img src="img/ic-dildo-purple.png" loading="lazy" />
                        </div>
                        <div className="daily-reward-count">30</div>
                      </div>
                      <div className="color-btn disabled">
                        <div className="color-btn-text">
                          <span>claim reward</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="daily-parth-box">
                    <div className="daily-parth-text">
                      Hunt 55 Sexpedition monsters.
                    </div>
                    <div className="daily-prgbar-all">
                      <div
                        className="daily-prgbar"
                        style={{ width: "0%" }}
                      ></div>
                      <div className="daily-prgbar-text">0/55</div>
                    </div>
                    <div className="daily-parth-claim-box">
                      <div className="daily-reward">
                        <div className="daily-reward-pic">
                          <img src="img/ic-dildo-purple.png" loading="lazy" />
                        </div>
                        <div className="daily-reward-count">20</div>
                      </div>
                      <div className="color-btn disabled">
                        <div className="color-btn-text">
                          <span>claim reward</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xmas-btn-box">
                <div className="color-btn">
                  <div className="color-btn-text">back</div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(V2MainScreen12SexpedMainComponent);
