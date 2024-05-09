import React from "react";

export const cssFiles = ["v2-screen-fw-main", "v2-screen-fw-map"];

export default function V2MainScreen15CwMain3() {
  return (
    <div className="main lang-ru world1">
      <div
        className="main-bg"
        style={{
          backgroundImage: "url('../img/images/back/new/02-Forest-2.jpg')",
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
            <div className="value">6.57BD22</div>
            <div className="value-bonus">
              <span>+29.9M%</span>
            </div>
            <div className="resource-btn-add"></div>
            <div className="resource-pic">
              <img src="img/v2-res-gold.png" loading="lazy" />
            </div>
            <div className="anim-in-p gold"></div>
          </div>
          <div className="resource-vip lvl0">
            <div className="value-vip-diamond">21</div>
            <div className="value-vip-ticket">2</div>
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
              <img className="icon" src="img/ic-quests.png" loading="lazy" />
              <div className="quest-notif notif notif10"></div>
            </li>
            <li className="quest open" style={{ animationDelay: "0ms" }}>
              <img className="icon" src="img/change-sun3.png" loading="lazy" />
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
            <li className="quest-fortune">
              <img className="icon" src="img/ic-fortuna.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">SPIN!</div>
              </div>
            </li>
            <li
              className="quest startpack open"
              style={{ animationDelay: "450ms" }}
            >
              <img
                className="icon"
                src="img/rating-sign-gold@1x.png"
                loading="lazy"
              />
              <div className="timerbox">
                <div className="timer">17:25:18</div>
              </div>
            </li>
            <li className="quest startpack wide">
              <img className="icon" src="img/v2-ns-chest.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">17:25:18</div>
              </div>
            </li>
            <li
              className="quest startpack open"
              style={{ animationDelay: "600ms" }}
            >
              <img className="icon" src="img/v2-ns-ball.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">17:25:18</div>
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
              style={{ animationDelay: "750ms" }}
            >
              <img className="icon" src="img/m-ico-gold.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">04:10:27</div>
              </div>
            </li>
            <li className="quest-fortune picmeh-info info">
              <img
                className="icon"
                src="img/picmeh-ic-diamond.png"
                loading="lazy"
              />
            </li>
            <li className="quest open" style={{ animationDelay: "900ms" }}>
              <img className="icon" src="img/m-ico-quest.png" loading="lazy" />
            </li>
            <li className="quest open" style={{ animationDelay: "1050ms" }}>
              <img
                className="icon"
                src="img/m-ico-quest-gift.png"
                loading="lazy"
              />
            </li>
            <li className="quest open" style={{ animationDelay: "1200ms" }}>
              <img
                className="icon"
                src="img/m-ico-quest-gift.png"
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
          target="_blank"
        ></a>
      </div>
      <div className="left-side false false">
        <div className="left-panel wide false false">
          <div className="">
            <div className="tab-panel-box fw-main">
              <div>
                <div className="tab-panel-box-title">Clan Wars</div>
                <div className="fw-info"></div>
                <div className="fw-main-bl-box">
                  <div className="fw-main-bl map">
                    <div className="fw-main-bl-name">map of war</div>
                    <div className="fw-main-bl-pic">
                      <img src="img/v2-fw-icon-maps.png" loading="lazy" />
                    </div>
                    <div
                      className="color-btn"
                      style={{
                        filter: "grayscale(1)",
                      }}
                    >
                      <div className="color-btn-text">
                        <div className="t">00:00:00</div>
                      </div>
                    </div>
                  </div>
                  <div className="fw-main-bl shop">
                    <div className="fw-main-bl-pic" style={{ top: "75px" }}>
                      <img src="img/v2-fw-icon-shop.png" loading="lazy" />
                    </div>
                    <div className="color-btn shop">
                      <div className="color-btn-text">Shop</div>
                    </div>
                    <div
                      className="color-btn"
                      style={{
                        filter: "grayscale(1)",
                      }}
                    >
                      <div className="color-btn-text">Clans</div>
                    </div>
                    <div className="fw-map-name-box-all cw">
                      <div className="fw-map-time-box">
                        <div>
                          <div className="fw-map-time1">
                            clash starts in:
                            <span className="t">17:25:18</span>
                          </div>
                          <div className="fw-map-time2">
                            Map locks 3 mins before clash
                          </div>
                        </div>
                      </div>
                      <div className="fw-map-name-box">
                        <div className="fw-map-name">day 0</div>
                        <div className="fw-map-date">Round 0/16</div>
                      </div>
                    </div>
                  </div>
                  <div className="fw-main-bl fraction">
                    <div className="fw-main-bl-name">rating</div>
                    <div className="fw-main-bl-pic">
                      <img src="img/v2-fw-icon-fraction.png" loading="lazy" />
                    </div>
                    <div
                      className="color-btn"
                      style={{
                        filter: "grayscale(1)",
                      }}
                    >
                      <div className="color-btn-text">rating</div>
                    </div>
                  </div>
                </div>
                <div className="btn-close-x"></div>
                <div>
                  <div className="fw-btlpass-buy-box-all">
                    <div className="fw-btlpass-girl cw"></div>
                    <div className="fw-btlpass-info"></div>
                    <div className="store-button cw both">
                      <div className="but-price-text">become elite</div>
                      <div className="but-price">$19.99</div>
                    </div>
                  </div>
                  <div className="fw-level-box-all">
                    <div className="fw-sim-el-box">
                      <div className="fw-simple">simple</div>
                      <div className="fw-level">0/50</div>
                      <div className="fw-elite">elite</div>
                    </div>
                    <div className="fw-level-simple-box-scroll indiana-scroll-container">
                      <div className="fw-level-simple">
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_red@2x.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">1.22K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-orange.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.42K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-blue.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.35K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/sh-icon-chest-128.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">1</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-green.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.27K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/photo-ic@2x.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">2</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-pink.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.33K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_yellow.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">100</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_red@2x.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">1.22K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-blue.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.35K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/sh-icon-chest-128.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">1</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-orange.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">12K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_red@2x.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">1.22K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_green.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">100</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/photo-ic@2x.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">2</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-green.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.27K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-pink.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.33K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_blue.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">200</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-orange.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.42K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-blue.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.35K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_red@2x.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">1.22K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/sh-icon-chest-128.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">2</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-orange.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.42K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-blue.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.35K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-green.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.27K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-pink.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.33K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/sh-icon-chest-128.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">2</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_yellow.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">1K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-pink.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">11.7K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-orange.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">12K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-blue.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">11.7K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-green.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">11.5K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_red@2x.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">1.22K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_green.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">200</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-pink.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">11.7K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-blue.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">11.7K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/photo-ic@2x.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">2</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-green.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">11.5K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-orange.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">12K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/sh-icon-chest-128.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">2</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_blue.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">100</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-green.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3.27K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_red@2x.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">1.22K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/photo-ic@2x.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">2</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-orange.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">12K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-blue.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">11.7K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_green.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">100</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-pink.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">11.7K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/heroup-150.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">1</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block girl">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/images/superhero/suphero-264/x2/avatar/264sh-ava-1.jpg"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">700</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                      </div>
                      <div className="fw-level-level">
                        <div
                          className="fw-level-level-prg"
                          style={{
                            width: "0%",
                          }}
                        ></div>
                        <div className="fw-level-level-num-box">
                          <div className="fw-level-level-num">1</div>
                          <div className="fw-level-level-num">2</div>
                          <div className="fw-level-level-num">3</div>
                          <div className="fw-level-level-num">4</div>
                          <div className="fw-level-level-num">5</div>
                          <div className="fw-level-level-num">6</div>
                          <div className="fw-level-level-num">7</div>
                          <div className="fw-level-level-num">8</div>
                          <div className="fw-level-level-num">9</div>
                          <div className="fw-level-level-num">10</div>
                          <div className="fw-level-level-num">11</div>
                          <div className="fw-level-level-num">12</div>
                          <div className="fw-level-level-num">13</div>
                          <div className="fw-level-level-num">14</div>
                          <div className="fw-level-level-num">15</div>
                          <div className="fw-level-level-num">16</div>
                          <div className="fw-level-level-num">17</div>
                          <div className="fw-level-level-num">18</div>
                          <div className="fw-level-level-num">19</div>
                          <div className="fw-level-level-num">20</div>
                          <div className="fw-level-level-num">21</div>
                          <div className="fw-level-level-num">22</div>
                          <div className="fw-level-level-num">23</div>
                          <div className="fw-level-level-num">24</div>
                          <div className="fw-level-level-num">25</div>
                          <div className="fw-level-level-num">26</div>
                          <div className="fw-level-level-num">27</div>
                          <div className="fw-level-level-num">28</div>
                          <div className="fw-level-level-num">29</div>
                          <div className="fw-level-level-num">30</div>
                          <div className="fw-level-level-num">31</div>
                          <div className="fw-level-level-num">32</div>
                          <div className="fw-level-level-num">33</div>
                          <div className="fw-level-level-num">34</div>
                          <div className="fw-level-level-num">35</div>
                          <div className="fw-level-level-num">36</div>
                          <div className="fw-level-level-num">37</div>
                          <div className="fw-level-level-num">38</div>
                          <div className="fw-level-level-num">39</div>
                          <div className="fw-level-level-num">40</div>
                          <div className="fw-level-level-num">41</div>
                          <div className="fw-level-level-num">42</div>
                          <div className="fw-level-level-num">43</div>
                          <div className="fw-level-level-num">44</div>
                          <div className="fw-level-level-num">45</div>
                          <div className="fw-level-level-num">46</div>
                          <div className="fw-level-level-num">47</div>
                          <div className="fw-level-level-num">48</div>
                          <div className="fw-level-level-num">49</div>
                          <div className="fw-level-level-num">50</div>
                        </div>
                      </div>
                      <div className="fw-level-elite">
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_red@2x.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">6.1K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/sh-icon-chest-128.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">4</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/photo-ic@2x.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">2</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-orange.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">23.9K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-blue.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">23.5K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-green.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">22.9K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-pink.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">23.3K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_green.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">500</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_red@2x.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">6.1K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/sh-icon-chest-128.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">4</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/photo-ic@2x.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">2</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-orange.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">23.9K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-blue.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">23.5K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-green.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">22.9K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-pink.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">23.3K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_blue.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">500</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_red@2x.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">6.1K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/sh-icon-chest-128.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">6</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/photo-ic@2x.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">2</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-orange.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">59.9K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-blue.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">58.7K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-green.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">57.3K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-pink.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">58.3K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_yellow.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">5K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block girl">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/images/superhero/suphero-265/x2/avatar/265sh-ava-1.jpg"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">700</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/sh-icon-chest-128.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">6</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/photo-ic@2x.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">2</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-orange.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">59.9K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-blue.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">58.7K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-green.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">57.3K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/sh-icon-chest-128.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">6</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_green.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">1K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_red@2x.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">6.1K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/sh-icon-chest-128.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">6</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/photo-ic@2x.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">2</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-orange.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">59.9K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-blue.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">58.7K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-green.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">57.3K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-pink.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">58.3K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_blue.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">1K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/evPopArts/potion_red@2x.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">6.1K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/sh-icon-chest-128.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">6</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/photo-ic@2x.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">2</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-orange.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">59.9K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-blue.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">58.7K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-green.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">57.3K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/ms-stone-pink.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">58.3K</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block girl">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/trophy/gt_03-a-ava.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">1</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block">
                          <div className="fw-level-rew-pic">
                            <img src="img/heroup-150.png" loading="lazy" />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">3</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                        <div className="fw-level-rew-box block girl">
                          <div className="fw-level-rew-pic">
                            <img
                              src="img/images/superhero/suphero-266/x2/avatar/266sh-ava-1.jpg"
                              loading="lazy"
                            />
                          </div>
                          <div className="fw-level-rew-good"></div>
                          <div className="fw-level-rew-num">700</div>
                          <div className="fw-level-rew-num-check"></div>
                          <div className="color-btn green">
                            <div className="color-btn-text">собрать</div>
                          </div>
                          <div className="fw-level-rew-num-block"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trophy-res-box-all">
                  <div className="trophy-res-box ctb cw">
                    <div className="trophy-value" style={{ width: "120px" }}>
                      60.5K
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs-all-box">
          <a className="tabs-all heroes" href="#/">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Heroes</div>
              <div className="tabs-pic">
                <img src="img/tab-01.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a
            className="tabs-all guild selected"
            aria-current="page"
            href="#/guild"
          >
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Guild base</div>
              <div className="tabs-pic">
                <img src="img/tab-08.png" loading="lazy" />
              </div>
            </div>
            <div className="v2-tab-notif notif notif20"></div>
          </a>
          <a className="tabs-all album" href="#/galery/pictures">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Gallery</div>
              <div className="tabs-pic">
                <img src="img/tab-05.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all rating" href="#/rating/jewerly">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Rating Tab</div>
              <div className="tabs-pic">
                <img src="img/tab-02.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all squests" href="#/quests/daily">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Quests</div>
              <div className="tabs-pic">
                <img src="img/tab-10.png" loading="lazy" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
