import React from "react";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "v2-screen-fw-fr-rating",
];

function V2MainScreen05FwFrRatingComponent() {
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
            <div className="tab-panel-box fw-fr-rating">
              <div className="tab-panel-box-title">fraction war rating</div>
              <div className="fw-left-side">
                <div className="fw-left-box-name">reward</div>
                <div className="fw-rating-ped-box-all check-p2">
                  <div className="fw-rating-ped-box-p1">
                    <div className="fw-rating-ped-pic">
                      <img src="img/icon-sunduk-200-3.png" loading="lazy" />
                    </div>
                    <div className="fw-rating-ped-num-box">
                      <div className="fw-rating-ped-place-num">1 place</div>
                      <div className="fw-rating-ped-place-name-box">
                        <div className="fw-rating-ped-place-name">
                          Pizda Sobaka Yaserica
                        </div>
                      </div>
                      <div className="fw-rating-ped-place-points">69696969</div>
                    </div>
                  </div>
                  <div className="fw-rating-ped-box-p2">
                    <div className="fw-rating-ped-pic">
                      <img src="img/icon-sunduk-200-2.png" loading="lazy" />
                    </div>
                    <div className="fw-rating-ped-num-box">
                      <div className="fw-rating-ped-place-num">2 place</div>
                      <div className="fw-rating-ped-place-name-box">
                        <div className="fw-rating-ped-place-name">
                          Pizda Sobaka Yaserica
                        </div>
                      </div>
                      <div className="fw-rating-ped-place-points">69696969</div>
                    </div>
                  </div>
                  <div className="fw-rating-ped-box-p3">
                    <div className="fw-rating-ped-pic">
                      <img src="img/icon-sunduk-200-1.png" loading="lazy" />
                    </div>
                    <div className="fw-rating-ped-num-box">
                      <div className="fw-rating-ped-place-num">3 place</div>
                      <div className="fw-rating-ped-place-name-box">
                        <div className="fw-rating-ped-place-name">
                          Pizda Sobaka Yaserica
                        </div>
                      </div>
                      <div className="fw-rating-ped-place-points">69696969</div>
                    </div>
                  </div>
                  <div className="fw-master-pic"></div>
                </div>
              </div>
              <div className="fw-right-side">
                <div className="fw-rating-menu-btn-box">
                  <div className="color-btn">
                    <div className="color-btn-text">player rating</div>
                  </div>
                  <div className="color-btn green">
                    <div className="color-btn-text">fraction rating</div>
                  </div>
                  <div className="color-btn">
                    <div className="color-btn-text">all player rating</div>
                  </div>
                </div>
                <div className="fw-right-side-content-box">
                  <div className="fw-flag-box win2">
                    <div className="fw-flag">
                      <img src="img/v2-fw-fr-3.png" loading="lazy" />
                    </div>
                    <div className="color-btn">
                      <div className="color-btn-text">players top</div>
                    </div>
                    <div className="fw-flag-win">
                      <div className="fw-flag-win-num">2</div>
                    </div>
                  </div>
                  <div className="fw-flag-box win1">
                    <div className="fw-flag">
                      <img src="img/v2-fw-fr-1.png" loading="lazy" />
                    </div>
                    <div className="color-btn">
                      <div className="color-btn-text">players top</div>
                    </div>
                    <div className="fw-flag-win">
                      <div className="fw-flag-win-num">1</div>
                    </div>
                  </div>
                  <div className="fw-flag-box win3">
                    <div className="fw-flag">
                      <img src="img/v2-fw-fr-2.png" loading="lazy" />
                    </div>
                    <div className="color-btn">
                      <div className="color-btn-text">players top</div>
                    </div>
                    <div className="fw-flag-win">
                      <div className="fw-flag-win-num">3</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-close-x"></div>
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

export default React.memo(V2MainScreen05FwFrRatingComponent);
