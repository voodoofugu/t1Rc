import React from "react";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "v2-screen-guildhall",
];

function V2MainScreen02GuildGuildhallComponent() {
  return (
    <HelmetForCss cssFiles={cssFiles}>
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
          </div>
          <div className="shop-chest-box-all">
            <div className="res-shop-btn">
              <div className="res-shop-btn-text">магазин</div>
            </div>
            <div className="res-chest-btn">
              <div className="res-chest-btn-text">Chests</div>
            </div>
          </div>
          <div className="singinout-btn out">
            <div className="singinout-btn-text">sign out</div>
          </div>
        </div>
        <div className="quest-box-all">
          <div className="quest-box">
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
          </div>
          <div className="opt-panel-box">
            <div className="btn feedback"></div>
            <div className="btn statistic"></div>
            <div className="btn ru"></div>
          </div>
        </div>
        <div className="left-side">
          <div className="left-panel wide">
            <div className="tab-panel-box guildhall">
              <div className="tab-panel-box-title">guild hall</div>
              <div className="leftside-box-all">
                <div className="guildhall-leftside-title-box">
                  <div className="guildhall-leftside-title-name">
                    Building level:<span>6969K</span>
                  </div>
                </div>
                <div className="guildhall-leftside-building">
                  <div className="guild-building-pic-guildhall"></div>
                  <div className="reborn-box-all">
                    <div className="reborn-box-count-box">+6969K</div>
                  </div>
                </div>
                <div className="guildhall-lvlup-box">
                  <div className="guildhall-lvlup-count-box">
                    <div className="guildhall-lvlup-count">68K/6969K</div>
                  </div>
                  <div className="guildhall-lvlup-count-box two">
                    <div className="guildhall-lvlup-count">68K/6969K</div>
                  </div>
                  <div className="color-btn green">
                    <div className="color-btn-text">level up</div>
                  </div>
                </div>
                <div className="guildhall-nownext-box">
                  <div className="guildhall-nownext-name">сейчас</div>
                  <div className="guildhall-nownext-text">уровень</div>
                  <div className="guildhall-nownext-count">6969K</div>
                </div>
                <div className="str-right"></div>
                <div className="guildhall-nownext-box next">
                  <div className="guildhall-nownext-name">
                    следующий уровень
                  </div>
                  <div className="guildhall-nownext-text">уровень</div>
                  <div className="guildhall-nownext-count">6969K</div>
                </div>
              </div>
              <div className="guildhall-rightside-box-all">
                <div className="guildhall-rightside-bonus-box">
                  <div className="guildhall-bonus">
                    <div className="guildhall-bonus-num">+6969K</div>
                  </div>
                  <div className="guildhall-bonus gold">
                    <div className="guildhall-bonus-num">+6969K</div>
                  </div>
                  <div className="guildhall-bonus gems">
                    <div className="guildhall-bonus-num">+6969K</div>
                  </div>
                  <div className="guildhall-bonus dpc">
                    <div className="guildhall-bonus-num">+6969K</div>
                  </div>
                </div>
                <div className="guildhall-base-box">
                  <div className="room gold n01 opened">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room gems n02">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room shards n03">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room dpc n04">
                    <div className="count">100</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room gold n05 opened">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room gold n06">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room gold n07 disabled">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room gems n08 opened">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room gold n09 disabled">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room gold n10 selected">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room gold n11">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room shards n12 opened selected">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room gold n13">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room gold n14">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room dpc n15 opened">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="room gold n16">
                    <div className="count">9000</div>
                    <div className="roomback">
                      <img
                        src="img/roomback/room-bk-01-small.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="guildhall-rightside-lvlup-box-all">
                  <div className="guildhall-lvlup-box">
                    <div className="guildhall-lvlup-count-box">
                      <div className="guildhall-lvlup-count">68K/6969K</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">level up</div>
                    </div>
                  </div>
                  <div className="guildhall-lvlup-box diamond">
                    <div className="guildhall-lvlup-count-box">
                      <div className="guildhall-lvlup-count">68K/6969K</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">level up</div>
                    </div>
                  </div>
                  <div className="guildhall-room-lvlup-box">
                    <div className="color-btn blue">
                      <div className="color-btn-text">all rooms lvl up</div>
                    </div>
                    <div className="guildhall-room-lvlup-box-small">
                      <div className="color-btn blue">
                        <div className="color-btn-text">x1</div>
                      </div>
                      <div className="color-btn blue">
                        <div className="color-btn-text">x100</div>
                      </div>
                      <div className="color-btn blue">
                        <div className="color-btn-text">x250</div>
                      </div>
                      <div className="color-btn blue">
                        <div className="color-btn-text">x500</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-close-x"></div>
              <div className="guildhall-res-box-all">
                <div className="guildhall-res-box gems">
                  <div className="guildhall-value">696969К</div>
                  <div className="guildhall-value-btn-add"></div>
                </div>
                <div className="guildhall-res-box mithril">
                  <div className="guildhall-value">696969К</div>
                  <div className="guildhall-value-btn-add"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="tabs-all-box">
            <div className="tabs-all selected">
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
          </div>
        </div>
      </div>
    </HelmetForCss>
  );
}

export default React.memo(V2MainScreen02GuildGuildhallComponent);
