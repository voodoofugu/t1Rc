import React from "react";
// import v2ScreenWarehouse from "../styles/v2-screen-warehouse.scss";

const V2MainScreen02GuildWarehouseComponent = () => {
  return (
    <>
      <div className="main lang-ru world1">
        <div
          className="main-bg"
          style={{ backgroundImage: "url('https" }}
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
                <div className="res-chest-btn-text">Открыть</div>
                <div className="res-chest-btn-count">14</div>
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
                  <div className="timer">40:33:52</div>
                </div>
              </li>
              <li className="quest startpack wide">
                <img
                  className="icon"
                  src="img/v2-ns-chest.png"
                  loading="lazy"
                />
                <div className="timerbox">
                  <div className="timer">1D 16:33</div>
                </div>
              </li>
              <li
                className="quest startpack open"
                style={{ animationDelay: "600ms" }}
              >
                <img className="icon" src="img/v2-ns-ball.png" loading="lazy" />
                <div className="timerbox">
                  <div className="timer">40:33:52</div>
                </div>
              </li>
              <li className="quest startpack wide">
                <img
                  className="icon"
                  src="img/v2-mn-soul-sg-160.png"
                  loading="lazy"
                />
              </li>
              <li
                className="quest startpack open"
                style={{ animationDelay: "750ms" }}
              >
                <img className="icon" src="img/m-ico-gold.png" loading="lazy" />
                <div className="timerbox">
                  <div className="timer">00:00:01</div>
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
                <img
                  className="icon"
                  src="img/m-ico-quest.png"
                  loading="lazy"
                />
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
              <div className="tab-panel-box warehouse">
                <div className="tab-panel-box-title">warehouse</div>
                <div className="leftside-box-all">
                  <div className="guildhall-leftside-title-box">
                    <div className="guildhall-leftside-title-name">
                      Building level:<span>8</span>
                    </div>
                  </div>
                  <div className="guildhall-leftside-building">
                    <div className="guildhall-building-pic-wirehouse"></div>
                  </div>
                  <div className="guildhall-lvlup-box">
                    <div className="guildhall-lvlup-count-box">
                      <div className="guildhall-lvlup-count">35</div>
                    </div>
                    <div className="guildhall-lvlup-count-box two">
                      <div className="guildhall-lvlup-count">1.67K</div>
                    </div>
                    <div className="color-btn green disabled">
                      <div className="color-btn-text">level up</div>
                    </div>
                  </div>
                  <div className="guildhall-nownext-box">
                    <div className="guildhall-nownext-name">now</div>
                    <div className="guildhall-nownext-pic">
                      <img src="img/v2-res-mithril2.png" loading="lazy" />
                    </div>
                    <div className="guildhall-nownext-count">4.4K</div>
                  </div>
                  <div className="str-right"></div>
                  <div className="guildhall-nownext-box next">
                    <div className="guildhall-nownext-name">следующий lvl</div>
                    <div className="guildhall-nownext-pic">
                      <img src="img/v2-res-mithril2.png" loading="lazy" />
                    </div>
                    <div className="guildhall-nownext-count">5.1K</div>
                  </div>
                </div>
                <div className="wirehouse-rightside-box">
                  <div className="wirehouse-rightside-box-bg"></div>
                </div>
                <div className="btn-close-x"></div>
                <div className="guildhall-res-box-all">
                  <div className="guildhall-res-box gems">
                    <div className="guildhall-value" style={{ width: "120px" }}>
                      13
                    </div>
                  </div>
                  <div className="guildhall-res-box mithril">
                    <div className="guildhall-value">22.7M</div>
                    <div className="guildhall-value-btn-add"></div>
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
              href="#/guild"
              aria-current="page"
            >
              <div style={{ width: "100%", height: "100%" }}>
                <div className="tabs-name">Guild base</div>
                <div className="tabs-pic">
                  <img src="img/tab-08.png" loading="lazy" />
                </div>
              </div>
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
        <div></div>
        <div id="dialogWrapper" className="popup-layer">
          <div className="screen-blend-55"></div>
          <div id="dialogContainer"></div>
        </div>
      </div>
    </>
  );
};

export default React.memo(V2MainScreen02GuildWarehouseComponent);
