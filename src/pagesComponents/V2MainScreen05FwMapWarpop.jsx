import React from "react";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "v2-screen-fw-map",
  "v2-screen-fw-map-warpop",
];

export default function V2MainScreen05FwMapWarpopComponent() {
  return (
    <HelmetForCss cssFiles={cssFiles}>
      <div className="main world1">
        <div className="main-bg fw-map"></div>
        <div className="fw-map-name-box-all">
          <div className="fw-map-time-box">
            <div className="fw-map-time1">битва начнется: 06:59</div>
            <div className="fw-map-time2">награда появится: 23:59</div>
          </div>
          <div className="fw-map-name-box">
            <div className="fw-map-name">фракционные войны</div>
            <div className="fw-map-date">day 31</div>
          </div>
        </div>
        <div className="fw-map-claim-box-all">
          <div className="fw-map-claim-box"></div>
          <div className="fw-map-claim-box fr1 w1">
            <div className="fw-icon-fr">
              <img src="img/v2-fw-icon-fr1.png" loading="lazy" />
            </div>
            <div className="fw-icon-ws">
              <img src="img/v2-fw-icon-w1.png" loading="lazy" />
            </div>
            <div className="fw-icon-sword">
              <img src="img/v2-fw-icon-w3.png" loading="lazy" />
            </div>
          </div>
          <div className="fw-map-claim-box fr1">
            <div className="fw-icon-fr">
              <img src="img/v2-fw-icon-fr1.png" loading="lazy" />
            </div>
            <div className="fw-icon-ws">
              <img src="img/v2-fw-icon-w2.png" loading="lazy" />
            </div>
            <div className="fw-icon-sword">
              <img src="img/v2-fw-icon-w3.png" loading="lazy" />
            </div>
          </div>
          <div className="fw-map-claim-box fr1"></div>
          <div className="fw-map-claim-box"></div>
          <div className="fw-map-claim-box"></div>
          <div className="fw-map-claim-box fr2 select">
            <div className="fw-icon-fr">
              <img src="img/v2-fw-icon-fr2.png" loading="lazy" />
            </div>
            <div className="fw-icon-ws">
              <img src="img/v2-fw-icon-w2.png" loading="lazy" />
            </div>
            <div className="fw-icon-sword">
              <img src="img/v2-fw-icon-w3.png" loading="lazy" />
            </div>
          </div>
          <div className="fw-map-claim-box fr2"></div>
          <div className="fw-map-claim-box fr2"></div>
          <div className="fw-map-claim-box fr2"></div>
          <div className="fw-map-claim-box">
            <div className="fw-icon-fr">
              <img src="img/v2-fw-icon-fr4.png" loading="lazy" />
            </div>
            <div className="fw-icon-ws">
              <img src="img/v2-fw-icon-w1.png" loading="lazy" />
            </div>
            <div className="fw-icon-sword">
              <img src="img/v2-fw-icon-w3.png" loading="lazy" />
            </div>
          </div>
          <div className="fw-map-claim-box"></div>
          <div className="fw-map-claim-box"></div>
          <div className="fw-map-claim-box"></div>
          <div className="fw-map-claim-box fr3">
            <div className="fw-icon-fr">
              <img src="img/v2-fw-icon-fr3.png" loading="lazy" />
            </div>
            <div className="fw-icon-ws">
              <img src="img/v2-fw-icon-w2.png" loading="lazy" />
            </div>
            <div className="fw-icon-sword">
              <img src="img/v2-fw-icon-w3.png" loading="lazy" />
            </div>
          </div>
          <div className="fw-map-claim-box fr3"></div>
          <div className="fw-map-claim-box fr3">
            <div className="fw-icon-fr">
              <img src="img/v2-fw-icon-fr1.png" loading="lazy" />
            </div>
            <div className="fw-icon-ws">
              <img src="img/v2-fw-icon-w1.png" loading="lazy" />
            </div>
            <div className="fw-icon-sword">
              <img src="img/v2-fw-icon-w3.png" loading="lazy" />
            </div>
          </div>
          <div className="fw-map-claim-box fr3"></div>
          <div className="fw-map-claim-box fr3"></div>
          <div className="fw-map-claim-box fr3"></div>
        </div>
        <div className="fw-round-box-all">
          <div className="fw-round-box-name">раунд</div>
          <div className="fw-round-box">
            <div className="fw-round-num check">1</div>
            <div className="fw-round-num check">2</div>
            <div className="fw-round-num check">3</div>
            <div className="fw-round-num check">4</div>
            <div className="fw-round-num check">5</div>
            <div className="fw-round-num check">6</div>
            <div className="fw-round-num active">7</div>
            <div className="fw-round-num">8</div>
            <div className="fw-round-num">9</div>
            <div className="fw-round-num">10</div>
            <div className="fw-round-num">11</div>
            <div className="fw-round-num">12</div>
            <div className="fw-round-num">13</div>
            <div className="fw-round-num">14</div>
            <div className="fw-round-num">15</div>
            <div className="fw-round-num">16</div>
          </div>
        </div>
        <div className="fw-warpop-box-all left">
          <div className="fw-warpop-box-leader-box">
            <div className="fw-warpop-box-leader-text">
              you are fraction leader!
            </div>
            <div className="color-btn green">
              <div className="color-btn-text">call to attack</div>
              <div className="color-btn-text2">
                (+10% contribution points for win)
              </div>
            </div>
          </div>
          <div className="fw-warpop-box-pic">
            <img src="img/v2-fw-map-bg3-1.jpg" loading="lazy" />
          </div>
          <div className="fw-warpop-box-name">Enemy Faction</div>
          <div className="fw-warpop-effect-box-all">
            <div className="fw-warpop-effect-box">
              <div className="fw-warpop-effect-name">effect</div>
              <div className="fw-warpop-effect-text-box">
                <div className="fw-warpop-effect-text">
                  doubles contributoin income
                </div>
              </div>
            </div>
            <div className="fw-warpop-income-box">
              <div className="fw-warpop-income-name">contribution income</div>
              <div className="fw-warpop-income-text">
                <span className="ic-contrip"></span>686868/turn
              </div>
            </div>
          </div>
          <div className="fw-warpop-at-def-box-all defence">
            <div className="fw-warpop-def-box">
              <div className="fw-warpop-def-name">defence</div>
              <div className="fw-warpop-def-pic">
                <img src="img/v2-fw-icon-fr2.png" loading="lazy" />
              </div>
              <div className="fw-warpop-def-num">696969</div>
            </div>
            <div className="fw-warpop-at-box-all">
              <div className="fw-warpop-at-name">attackers</div>
              <div className="fw-warpop-at-box">
                <div className="fw-warpop-at-pic">
                  <img src="img/v2-fw-icon-fr1.png" loading="lazy" />
                </div>
                <div className="fw-warpop-at-num">696969</div>
              </div>
              <div className="fw-warpop-at-box">
                <div className="fw-warpop-at-pic">
                  <img src="img/v2-fw-icon-fr3.png" loading="lazy" />
                </div>
                <div className="fw-warpop-at-num">696969</div>
              </div>
              <div className="fw-warpop-at-box">
                <div className="fw-warpop-at-pic">
                  <img src="img/v2-fw-icon-fr4.png" loading="lazy" />
                </div>
                <div className="fw-warpop-at-num">696969</div>
              </div>
            </div>
            <div className="fw-warpop-army-power-box">
              <div className="fw-warpop-army-power-text">
                Your army power here
              </div>
              <div className="fw-warpop-army-power-num">69696969</div>
            </div>
            <div className="fw-warpop-gr-con-power-box">
              <div className="fw-warpop-gr-box">
                <div className="fw-warpop-army-power-text">
                  your garnison power
                </div>
                <div className="fw-warpop-army-power-num">69696969</div>
              </div>
              <div className="fw-warpop-gr-box">
                <div className="fw-warpop-army-power-text">
                  double contribution power in
                </div>
                <div className="fw-warpop-army-power-num">69696969</div>
              </div>
            </div>
          </div>
          <div className="color-btn green">
            <div className="color-btn-text">attack</div>
          </div>

          <div className="fw-warpop-close"></div>
        </div>
      </div>
    </HelmetForCss>
  );
}
