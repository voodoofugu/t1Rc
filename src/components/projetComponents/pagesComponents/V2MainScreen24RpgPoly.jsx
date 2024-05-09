import React, { useEffect } from "react";

export const cssFiles = ["v2-screen-rpg_poly"];

export default function V2MainScreen24RpgPoly({ pageName }) {
  const currentPath = window.location.hash.substring(3).split("/")[0];

  useEffect(() => {
    if (pageName === currentPath) {
      const ba = document.querySelector(".backpack-button");
      const sh = document.querySelector(".shop-button");
      const ra = document.querySelector(".rating-button");
      const sb = document.querySelectorAll(".color-btn_shop");
      const po = document.querySelector(".popupWrapper.backpack-popup");
      const sp = document.querySelector(".popupWrapper.shop-popup");
      const rp = document.querySelector(".popupWrapper.rating-popup");
      const pr = document.querySelector(".popupWrapper.reward-popup");

      ba.addEventListener("click", () => {
        po.style.display = "block";
      });
      sh.addEventListener("click", () => {
        sp.style.display = "block";
      });
      ra.addEventListener("click", () => {
        rp.style.display = "block";
      });

      const x = [
        ...document.querySelectorAll(
          ".btn-close-x, .screen-blend-55, .pop-close"
        ),
      ];
      x.map((el) => {
        el.addEventListener("click", () => {
          po.style.display = "none";
          sp.style.display = "none";
          rp.style.display = "none";
          pr.style.display = "none";
        });
      });

      const tm = [
        ...document.querySelectorAll(
          ".quest_item-reward-wrap .quest-item-wrap .quest-item"
        ),
      ];
      tm.map((el) => {
        el.addEventListener("click", () => {
          sp.style.display = "block";
        });
      });

      const pl = [...document.querySelectorAll(".quest-item.item-plus")];
      pl.map((el) => {
        el.addEventListener("click", () => {
          po.style.display = "none";
          sp.style.display = "block";
        });
      });

      const wr = document.querySelector(".quest_item-reward-wrap");
      const it = document.querySelector(".quest_item-button");
      const re = document.querySelector(".quest_reward-button");

      it.addEventListener("click", () => {
        wr.classList.remove("reward_activ");
        wr.classList.add("item_activ");
      });
      re.addEventListener("click", () => {
        wr.classList.remove("item_activ");
        wr.classList.add("reward_activ");
      });

      const op = document.querySelector(".btn-open");
      const qa = document.querySelector(".quest-popup-wrap");

      op.addEventListener("click", () => {
        qa.classList.toggle("activ");
      });

      const qi = document.querySelector(".quest_info-button");
      const qw = document.querySelector(".questlist-popup-wrap");
      const px = [
        ...document.querySelectorAll(".questlist-popup .m-popup .btn-close-x"),
      ];

      qi.addEventListener("click", () => {
        qw.classList.toggle("activ");
      });
      px.map((el) => {
        el.addEventListener("click", () => {
          qw.classList.remove("activ");
        });
      });

      const cw = document.querySelector(".quest-done-wrap");
      const co = document.querySelector(".quest-done_button");
      co.addEventListener("click", () => {
        cw.classList.add("disabled");
        pr.style.display = "block";
        sp.style.display = "none";
        notice.style.display = "block";
        setTimeout(function () {
          notice.style.display = "none";
        }, 3000);
      });

      const notice = document.querySelector(".notification-popup");
      const popUp = document.querySelector(".chest-pop-up");
      const chests = document.querySelectorAll(".store-item-box.chest");
      const win = document.querySelector(".main");
      [...chests].map((chest) => {
        chest.addEventListener("mouseenter", () => {
          popUp.style.left =
            chest.getBoundingClientRect().x -
            win.getBoundingClientRect().x +
            "px";
          popUp.style.top = chest.getBoundingClientRect().y + "px";
          popUp.classList.add("active");
          chest.style.opacity = "1";
          chest.classList.add("active");
          [...chests].map((chest) => {
            chest.classList.add("unactive");
          });
          chest.classList.remove("unactive");
          [...sb].map((el) => {
            el.addEventListener("click", () => {
              pr.style.display = "block";
              sp.style.display = "none";
              notice.style.display = "block";
              setTimeout(function () {
                notice.style.display = "none";
              }, 3000);
            });
          });
        });
        chest.addEventListener("mouseleave", () => {
          popUp.classList.remove("active");
          chest.classList.remove("active");
          [...chests].map((chest) => {
            chest.classList.remove("unactive");
          });
        });
      });
      return;
    }
    return () => {};
  }, [pageName, currentPath]);

  return (
    <div className="main rpg-poly world1">
      <div className="main-bg"></div>

      <div className="rpg_poly-bottom-bar">
        <div className="rpg_poly-bar_wrap">
          <div className="questlist-popup-wrap">
            <div
              className="popupWrapper questlist-popup"
              style={{ display: "block" }}
            >
              <div className="m-popup" style={{ display: "block" }}>
                <div className="title">Quests</div>
                <div className="popup-wrap">
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                  <div className="bar_quest">
                    Finish 10 levels
                    <div className="bar_quest-chip_value">2</div>
                  </div>
                </div>
                <div className="btn-close-x"></div>
              </div>
            </div>
          </div>
          <div className="quest_info-button"></div>
          <div className="bar_quest_wrap">
            <div className="bar_quest">
              Finish 10 levels
              <div className="completion_value">4/10</div>
              <div className="bar_quest-chip_value">2</div>
            </div>
          </div>
          <div className="rpg_poly-bar">
            <div className="bar-scale">
              <div className="bar-scale-patf" style={{ width: "40%" }}></div>
            </div>
          </div>
        </div>

        <div className="dice-wrap">
          <div className="dice-white">
            <div className="dice-white-value dice-value">1/0</div>
            <div className="dice-white-button dice-button">roll dice</div>
          </div>
          <div className="dice-gold">
            <div className="dice-gold-value dice-value">1/0</div>
            <div className="dice-gold-button dice-button">roll dice</div>
          </div>
        </div>
      </div>

      <div className="rpg_poly-top-bar">
        <div className="parameters-wrap">
          <div className="level-parameter">
            <div className="level-value">99</div>
          </div>
          <div className="currency-parameter parameters">
            <div className="currency-value parameters-value">999</div>
          </div>
          <div className="strength-parameter parameters">
            <div className="strength-value parameters-value">999</div>
          </div>
          <div className="dexterity-parameter parameters">
            <div className="dexterity-value parameters-value">999</div>
          </div>
          <div className="intelligence-parameter parameters">
            <div className="intelligence-value parameters-value">999</div>
          </div>
        </div>
        <div className="backpack-button rpg_poly-button">backpack</div>
        <div className="rating-button rpg_poly-button">rating</div>
        <div className="exit-button rpg_poly-button">
          <a className="active0" aria-current="page" href="#/">
            <div className="color-btn-text">exit</div>
          </a>
        </div>
      </div>

      <div className="shop-button-wrap">
        <div className="shop-button rpg_poly-button">shop</div>
      </div>

      <div className="offer-button-wrap">
        <div className="offer-button rpg_poly-button">offer</div>
      </div>

      <div className="popupWrapper backpack-popup" style={{ display: "none" }}>
        <div className="screen-blend-55" style={{ display: "block" }}></div>
        <div className="m-popup" style={{ display: "block" }}>
          <div className="title">Backpack</div>
          <div className="popup-wrap">
            <div className="quest-item-wrap">
              <div className="quest-item">
                <div className="quest-item-img"></div>
                <div className="quest-item_value">10</div>
              </div>
              <div className="quest-item-name">Название</div>
              <div className="quest-item item-plus">
                <div className="quest-item-img"></div>
              </div>
            </div>
            <div className="quest-item-wrap">
              <div className="quest-item">
                <div className="quest-item-img"></div>
                <div className="quest-item_value">10</div>
              </div>
              <div className="quest-item-name">Название</div>
              <div className="quest-item item-plus">
                <div className="quest-item-img"></div>
              </div>
            </div>
            <div className="quest-item-wrap">
              <div className="quest-item">
                <div className="quest-item-img"></div>
                <div className="quest-item_value">10</div>
              </div>
              <div className="quest-item-name">Название</div>
              <div className="quest-item item-plus">
                <div className="quest-item-img"></div>
              </div>
            </div>
            <div className="quest-item-wrap">
              <div className="quest-item">
                <div className="quest-item-img"></div>
                <div className="quest-item_value">10</div>
              </div>
              <div className="quest-item-name">Название</div>
              <div className="quest-item item-plus">
                <div className="quest-item-img"></div>
              </div>
            </div>
            <div className="quest-item-wrap">
              <div className="quest-item">
                <div className="quest-item-img"></div>
                <div className="quest-item_value">10</div>
              </div>
              <div className="quest-item-name">Название</div>
              <div className="quest-item item-plus">
                <div className="quest-item-img"></div>
              </div>
            </div>
            <div className="quest-item-wrap">
              <div className="quest-item">
                <div className="quest-item-img"></div>
                <div className="quest-item_value">10</div>
              </div>
              <div className="quest-item-name">Название</div>
              <div className="quest-item item-plus">
                <div className="quest-item-img"></div>
              </div>
            </div>
            <div className="quest-item-wrap">
              <div className="quest-item">
                <div className="quest-item-img"></div>
                <div className="quest-item_value">10</div>
              </div>
              <div className="quest-item-name">Название</div>
              <div className="quest-item item-plus">
                <div className="quest-item-img"></div>
              </div>
            </div>
            <div className="quest-item-wrap">
              <div className="quest-item">
                <div className="quest-item-img"></div>
                <div className="quest-item_value">10</div>
              </div>
              <div className="quest-item-name">Название</div>
              <div className="quest-item item-plus">
                <div className="quest-item-img"></div>
              </div>
            </div>
            <div className="quest-item-wrap">
              <div className="quest-item">
                <div className="quest-item-img"></div>
                <div className="quest-item_value">10</div>
              </div>
              <div className="quest-item-name">Название</div>
              <div className="quest-item item-plus">
                <div className="quest-item-img"></div>
              </div>
            </div>
            <div className="quest-item-wrap">
              <div className="quest-item">
                <div className="quest-item-img"></div>
                <div className="quest-item_value">10</div>
              </div>
              <div className="quest-item-name">Название</div>
              <div className="quest-item item-plus">
                <div className="quest-item-img"></div>
              </div>
            </div>
            <div className="quest-item-wrap">
              <div className="quest-item">
                <div className="quest-item-img"></div>
                <div className="quest-item_value">10</div>
              </div>
              <div className="quest-item-name">Название</div>
              <div className="quest-item item-plus">
                <div className="quest-item-img"></div>
              </div>
            </div>
          </div>
          <div className="btn-close-x"></div>
        </div>
      </div>

      <div className="quest-popup-wrap">
        <div className="popupWrapper quest-popup" style={{ display: "block" }}>
          <div className="m-popup" style={{ display: "block" }}>
            <div className="title">Event</div>
            <div className="popup-wrap">
              <div className="quest-character_img"></div>
              <div className="quest-main">
                <div className="quest-info-wrap">
                  <div className="quest-info-text_block">
                    <div className="quest-info-text">
                      Локализация: Девушка говорит, что попала в беду и просит
                      ей помоч. Ей требуются определённые предметы, чтобы
                      продолжить путешествие. Пожалуйста принесите следующие
                      предметы:
                    </div>
                  </div>
                </div>
                <div className="quest_item-reward-wrap item_activ">
                  <div className="quest_button-wrap">
                    <div className="quest_item-button quest_button">item</div>
                    <div className="quest_reward-button quest_button">
                      reward
                    </div>
                  </div>
                  <div className="quest-item-wrap">
                    <div className="quest-item done">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">
                        10
                        <div className="item-needful_value">/10</div>
                      </div>
                    </div>
                    <div className="quest-item done">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">
                        10
                        <div className="item-needful_value">/10</div>
                      </div>
                    </div>
                    <div className="quest-item shop">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">
                        0<div className="item-needful_value">/10</div>
                      </div>
                    </div>
                  </div>
                  <div className="quest-reward-wrap">
                    <div className="quest-item quest-reward">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">10</div>
                    </div>
                    <div className="quest-item quest-reward">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">10</div>
                    </div>
                    <div className="quest-item quest-reward">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">10</div>
                    </div>
                  </div>
                </div>
                <div className="quest-done-wrap">
                  <div className="quest-done_button rpg_poly-button">
                    <div>claim</div>
                  </div>
                  <div className="flare"></div>
                </div>
              </div>
            </div>
            <div className="btn-close-x btn-open"></div>
            <div className="notif"></div>
          </div>
        </div>
      </div>

      <div className="popupWrapper shop-popup" style={{ display: "none" }}>
        <div className="screen-blend-55" style={{ display: "block" }}></div>
        <div className="m-popup" style={{ display: "block" }}>
          <div className="title">Shop</div>
          <div className="popup-wrap">
            <div className="currency-parameter parameters">
              <div className="currency-value parameters-value">999</div>
            </div>
            <div className="shop-girl-wrap">
              <div className="shop-girl"></div>
            </div>
            <div className="store-item-box-all">
              <div className="store-item-box-scroll">
                <div className="store-item-all">
                  <div className="store-item-box chest">
                    <div className="store-name">Wooden Chest</div>
                    <div className="rpg_poly-chest wooden-chest"></div>
                    <div className="color-btn_shop">
                      <div className="color-btn_shop-text">
                        <div>
                          buy
                          <span className="buy_value">7500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="store-item-box chest">
                    <div className="store-name">Silver Chest</div>
                    <div className="rpg_poly-chest silver-chest"></div>
                    <div className="color-btn_shop">
                      <div className="color-btn_shop-text">
                        <div>
                          buy
                          <span className="buy_value">7500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="store-item-box chest">
                    <div className="store-name">Golden Chest</div>
                    <div className="rpg_poly-chest golden-chest"></div>
                    <div className="color-btn_shop">
                      <div className="color-btn_shop-text">
                        <div>
                          buy
                          <span className="buy_value">7500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="store-item-all-name">
                    Super Girl's Kittens
                  </div>
                </div>
                <div className="store-item-all">
                  <div className="store-item-box">
                    <div className="store-name">Предмет</div>
                    <div className="quest-item">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">10</div>
                    </div>
                    <div className="color-btn_shop">
                      <div className="color-btn_shop-text">
                        <div>
                          buy
                          <span className="buy_value">7500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="store-item-box">
                    <div className="store-name">Предмет</div>
                    <div className="quest-item">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">10</div>
                    </div>
                    <div className="color-btn_shop">
                      <div className="color-btn_shop-text">
                        <div>
                          buy
                          <span className="buy_value">7500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="store-item-box">
                    <div className="store-name">Предмет</div>
                    <div className="quest-item">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">10</div>
                    </div>
                    <div className="color-btn_shop">
                      <div className="color-btn_shop-text">
                        <div>
                          buy
                          <span className="buy_value">7500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="store-item-box">
                    <div className="store-name">Предмет</div>
                    <div className="quest-item">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">10</div>
                    </div>
                    <div className="color-btn_shop">
                      <div className="color-btn_shop-text">
                        <div>
                          buy
                          <span className="buy_value">7500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="store-item-all-name">
                    Super Girl's Kittens
                  </div>
                </div>
                <div className="store-item-all">
                  <div className="store-item-box">
                    <div className="store-name">Предмет</div>
                    <div className="quest-item">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">10</div>
                    </div>
                    <div className="color-btn_shop">
                      <div className="color-btn_shop-text">
                        <div>
                          buy
                          <span className="buy_value">7500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="store-item-box">
                    <div className="store-name">Предмет</div>
                    <div className="quest-item">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">10</div>
                    </div>
                    <div className="color-btn_shop">
                      <div className="color-btn_shop-text">
                        <div>
                          buy
                          <span className="buy_value">7500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="store-item-box">
                    <div className="store-name">Предмет</div>
                    <div className="quest-item">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">10</div>
                    </div>
                    <div className="color-btn_shop">
                      <div className="color-btn_shop-text">
                        <div>
                          buy
                          <span className="buy_value">7500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="store-item-box">
                    <div className="store-name">Предмет</div>
                    <div className="quest-item">
                      <div className="quest-item-img"></div>
                      <div className="quest-item_value">10</div>
                    </div>
                    <div className="color-btn_shop">
                      <div className="color-btn_shop-text">
                        <div>
                          buy
                          <span className="buy_value">7500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="store-item-all-name">
                    Super Girl's Kittens
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-close-x"></div>
        </div>
      </div>

      <div className="popupWrapper rating-popup" style={{ display: "none" }}>
        <div className="screen-blend-55"></div>
        <div className="m-popup">
          <div className="title">poly rating</div>
          <div className="popup-wrap">
            <div className="fw-right-side-content-box">
              <div className="fw-rating-ped-box-all check-p2">
                <div className="fw-rating-ped-box-p1">
                  <div className="place">1 place:</div>
                  1% of all <span></span> spent in your group, rounded up
                  <div className="fw-rating-ped-num-box">
                    <div className="fw-rating-ped-num">1-3</div>
                  </div>
                </div>
                <div className="fw-rating-ped-box-p2">
                  <div className="place">2 place:</div>
                  <span></span> 1000
                  <div className="fw-rating-ped-num-box">
                    <div className="fw-rating-ped-num">4-20</div>
                  </div>
                </div>
                <div className="fw-rating-ped-box-p3">
                  <div className="place">All other places:</div>
                  <span></span> 50
                  <div className="fw-rating-ped-num-box">
                    <div className="fw-rating-ped-num">21-100</div>
                  </div>
                </div>
                <div className="fw-master-pic"></div>
              </div>
              <div className="rating-scroll-name-box">
                <div className="rating-scroll-name var1">Место</div>
                <div className="rating-scroll-name var2">Имя</div>
                <div className="rating-scroll-name var3">Очки</div>
              </div>
              <div className="rating-scroll-box">
                <div className="rating-scroll">
                  <div>
                    <div className="rating-card-rank top">
                      <div className="top-name-diamond">top</div>
                    </div>
                    <div className="rating-card color2 ">
                      <div className="number">1</div>
                      <div className="name">JonPaul4u2c</div>
                      <div className="points">46</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">2</div>
                      <div className="name">theinflator</div>
                      <div className="points">39</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 ">
                      <div className="number">3</div>
                      <div className="name">menswer</div>
                      <div className="points">38</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card-rank gold">
                      <div className="">gold rank</div>
                    </div>
                    <div className="rating-card  ">
                      <div className="number">4</div>
                      <div className="name">studente</div>
                      <div className="points">38</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 ">
                      <div className="number">5</div>
                      <div className="name">vvb60</div>
                      <div className="points">37</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">6</div>
                      <div className="name">417537ss</div>
                      <div className="points">36</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 ">
                      <div className="number">7</div>
                      <div className="name">corelione</div>
                      <div className="points">34</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">8</div>
                      <div className="name">fresnoman40</div>
                      <div className="points">33</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 ">
                      <div className="number">9</div>
                      <div className="name">oleg90668</div>
                      <div className="points">33</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">10</div>
                      <div className="name">misstelma</div>
                      <div className="points">33</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 ">
                      <div className="number">11</div>
                      <div className="name">dima125</div>
                      <div className="points">32</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">12</div>
                      <div className="name">marik30</div>
                      <div className="points">31</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 ">
                      <div className="number">13</div>
                      <div className="name">kipples</div>
                      <div className="points">30</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">14</div>
                      <div className="name">vovatyrjan</div>
                      <div className="points">30</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 ">
                      <div className="number">15</div>
                      <div className="name">aleiri60</div>
                      <div className="points">26</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">16</div>
                      <div className="name">sashka706</div>
                      <div className="points">25</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 ">
                      <div className="number">17</div>
                      <div className="name">jimphonex</div>
                      <div className="points">25</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">18</div>
                      <div className="name">badt</div>
                      <div className="points">24</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 ">
                      <div className="number">19</div>
                      <div className="name">sanek16</div>
                      <div className="points">23</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">20</div>
                      <div className="name">serg55me</div>
                      <div className="points">23</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card-rank silver">
                      <div className="">silver rank</div>
                    </div>
                    <div className="rating-card color2 ">
                      <div className="number">21</div>
                      <div className="name">mememe419</div>
                      <div className="points">22</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">22</div>
                      <div className="name">alf446</div>
                      <div className="points">21</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 ">
                      <div className="number">23</div>
                      <div className="name">lowbob</div>
                      <div className="points">21</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">24</div>
                      <div className="name">lordwellington91</div>
                      <div className="points">20</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 ">
                      <div className="number">25</div>
                      <div className="name">skobka</div>
                      <div className="points">20</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">26</div>
                      <div className="name">orlinnn</div>
                      <div className="points">20</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 ">
                      <div className="number">27</div>
                      <div className="name">straikor</div>
                      <div className="points">19</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">28</div>
                      <div className="name">ikcheleos</div>
                      <div className="points">17</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 ">
                      <div className="number">29</div>
                      <div className="name">istoriya</div>
                      <div className="points">16</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card  ">
                      <div className="number">30</div>
                      <div className="name">padonak778</div>
                      <div className="points">15</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-card color2 active">
                      <div className="number">31</div>
                      <div className="name">guest26572</div>
                      <div className="points">1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-close-x"></div>
        </div>
      </div>

      <div className="notification-popup" style={{ display: "none" }}>
        <div className="notif-pop-box">
          <div className="title">reward</div>
          <div className="popup-wrap">
            <div className="quest-item">
              <div className="quest-item-img"></div>
              <div className="quest-item_value">10</div>
            </div>
          </div>
        </div>
      </div>

      <div className="popupWrapper reward-popup" style={{ display: "none" }}>
        <div className="screen-blend-55"></div>
        <div className="m-popup fortuna-winpop2">
          <div className="title">Congratulations</div>
          <div className="color-box"></div>
          <div className="winner-box">
            <div className="quest-item">
              <div className="quest-item-img"></div>
              <div className="quest-item_value">10</div>
            </div>
          </div>
          <div className="color-btn pop-close">
            <div className="color-btn-text">закрыть</div>
          </div>
          <div className="btn-close-x"></div>
        </div>
      </div>

      <div className="chest-pop-up">
        <div className="chest-pop-up_tit">Reward</div>
        <div className="quest-item-wrap">
          <div className="quest-item-box2">
            <div className="quest-item">
              <div className="quest-item-img"></div>
              <div className="quest-item_value">10</div>
            </div>
            <div className="quest-item">
              <div className="quest-item-img"></div>
              <div className="quest-item_value">10</div>
            </div>
          </div>
          <div className="quest-item-box2">
            <div className="quest-item">
              <div className="quest-item-img"></div>
              <div className="quest-item_value">10</div>
            </div>
            <div className="quest-item">
              <div className="quest-item-img"></div>
              <div className="quest-item_value">10</div>
            </div>
          </div>
          <div className="quest-item-box2">
            <div className="quest-item">
              <div className="quest-item-img"></div>
              <div className="quest-item_value">10</div>
            </div>
            <div className="quest-item">
              <div className="quest-item-img"></div>
              <div className="quest-item_value">10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
