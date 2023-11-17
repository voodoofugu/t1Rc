import React from "react";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "v2-screen-titans-upgrade",
];

function V2MainScreen17TitansUpgradeComponent() {
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
            <div className="tab-panel-box at-titans-upgrade">
              <div className="titans-stats">
                <div className="color-btn leaderbord">
                  <div className="color-btn-text">Leaderboard</div>
                </div>
                <div className="color-btn green upgrade">
                  <div className="color-btn-text">Upgrade Mecha</div>
                </div>
                <div className="titan-characteristics">
                  <div className="q-counter">
                    <div className="stat qq">686868</div>
                  </div>
                  <div className="mech-stats">
                    <div className="stat atk">686868</div>
                    <div className="stat hp">686868</div>
                    <div className="stat pow">686868</div>
                  </div>
                </div>
              </div>

              <div className="titans-left">
                <div className="stars">
                  <div className="star checked"></div>
                  <div className="star checked"></div>
                  <div className="star checked"></div>
                  <div className="star checked"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                </div>
                <div className="titan-screen">
                  <img src="img/v2-at-master.png" alt="" loading="lazy" />
                </div>
                <div className="titan-label">Master</div>
              </div>
              <div className="titans-center">
                <div className="color-btn blue">
                  <div className="color-btn-text">Change mecha type</div>
                </div>
                <div className="upgrades">
                  <div className="upgrade atk">
                    <div className="value">686868</div>
                    <div className="color-btn orange">
                      <div className="color-btn-text">
                        Increace <span></span> 77779
                      </div>
                    </div>
                  </div>
                  <div className="upgrade hp">
                    <div className="value">686868</div>
                    <div className="color-btn orange">
                      <div className="color-btn-text">
                        Increace <span></span> 77779
                      </div>
                    </div>
                  </div>
                  <div className="upgrade pow">
                    <div className="value">686868</div>
                    <div className="color-btn orange">
                      <div className="color-btn-text">
                        Increace <span></span> 77779
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="titans-right">
                <div className="boss">
                  <div className="boss-wrapper">
                    <img src="img/v2-at-enemy.png" alt="" loading="lazy" />
                  </div>
                </div>
                <div className="boss-timer">
                  Boss will escape in:
                  <div className="time">00h : 35m : 15s</div>
                </div>
                <div className="color-btn green">
                  <div className="color-btn-text">
                    ATTACK
                    <div className="attempts">999 free attempts</div>
                  </div>
                </div>
                <div className="boss-name">
                  Железный Хуй
                  <div className="lvl">LEVEL 999</div>
                </div>
                <div className="hp-bar-bg">
                  <div className="hp-bar"></div>
                  <div className="hp-text">6868К / 6969M</div>
                </div>
              </div>

              <div className="btn-close-x"></div>
              <div className="trophy-res-box-all">
                <div className="trophy-res-box gems">
                  <div className="trophy-value">696969К</div>
                  <div className="trophy-value-btn-add"></div>
                </div>
                <div className="trophy-res-box mithril">
                  <div className="trophy-value">696969К</div>
                  <div className="trophy-value-btn-add"></div>
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

export default React.memo(V2MainScreen17TitansUpgradeComponent);
