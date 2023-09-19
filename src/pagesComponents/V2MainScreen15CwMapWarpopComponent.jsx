import React from "react";
// import v2ScreenCwMap from "../styles/v2-screen-cw-map.scss";
// import v2ScreenCwMapWarpop from "../styles/v2-screen-cw-map-warpop.scss";

const V2MainScreen15CwMapWarpopComponent = () => {
  return (
    <>
      <div className="main world1">
        <div className="main-bg cw-map"></div>
        <div className="cw-map-name-box-all">
          <div className="cw-map-time-box">
            <div className="cw-map-time1">битва начнется: 06:59</div>
            <div className="cw-map-time2">награда появится: 23:59</div>
          </div>
          <div className="cw-map-name-box">
            <div className="cw-map-name">клановые войны</div>
            <div className="cw-map-date">day 31</div>
          </div>
        </div>
        <div className="cw-map-claim-box-all">
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box">
            <div className="cw-map-mercs">
              <div className="cw-map-merc occupied"></div>
              <div className="cw-map-merc occupied"></div>
              <div className="cw-map-merc occupied"></div>
              <div className="cw-map-merc"></div>
            </div>
          </div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
          <div className="cw-map-claim-box"></div>
        </div>
        <div className="cw-round-box-all">
          <div className="cw-round-box-name">раунд</div>
          <div className="cw-round-box">
            <div className="cw-round-num check">1</div>
            <div className="cw-round-num check">2</div>
            <div className="cw-round-num check">3</div>
            <div className="cw-round-num check">4</div>
            <div className="cw-round-num check">5</div>
            <div className="cw-round-num check">6</div>
            <div className="cw-round-num active">7</div>
            <div className="cw-round-num">8</div>
            <div className="cw-round-num">9</div>
            <div className="cw-round-num">10</div>
            <div className="cw-round-num">11</div>
            <div className="cw-round-num">12</div>
            <div className="cw-round-num">13</div>
            <div className="cw-round-num">14</div>
            <div className="cw-round-num">15</div>
            <div className="cw-round-num">16</div>
          </div>
        </div>
        <div className="cw-warpop-box-all">
          {/*available classes: left*/}
          <div className="cw-warpop-box-pic">
            <img src="img/v2-cw-map-bg3-1.jpg" loading="lazy" />
          </div>
          <div className="cw-warpop-box-name">Enemy Faction</div>
          <div className="cw-warpop-effect-box-all">
            <div className="cw-warpop-effect-box">
              <div className="cw-warpop-effect-name">effect</div>
              <div className="cw-warpop-effect-text-box">
                <div className="cw-warpop-effect-text">
                  doubles contributoin income
                </div>
              </div>
            </div>
            <div className="cw-warpop-income-box">
              <div className="cw-warpop-income-name">contribution income</div>
              <div className="cw-warpop-income-text">
                <div>
                  <span className="ic-contrip"></span>
                  686868/round
                </div>
                <div>
                  <span className="ic-contrip"></span>
                  686868/round
                </div>
              </div>
            </div>
          </div>
          <div className="cw-warpop-at-def-box-all">
            {/*available classes: defence*/}
            <div className="cw-warpop-def-box">
              <div className="cw-warpop-def-name">defence</div>
              <div className="cw-warpop-def-pic">
                <img src="img/v2-fw-icon-fr2.png" loading="lazy" />
              </div>
              <div className="cw-warpop-def-num">696969</div>
            </div>
            <div className="cw-warpop-at-box-all">
              <div className="cw-warpop-at-name">attackers</div>
              <div className="cw-warpop-at-box">
                <div className="cw-warpop-at-pic">
                  <img src="img/v2-fw-icon-fr1.png" loading="lazy" />
                </div>
                <div className="cw-warpop-at-num">696969</div>
              </div>
              <div className="cw-warpop-at-box">
                <div className="cw-warpop-at-pic">
                  <img src="img/v2-fw-icon-fr3.png" loading="lazy" />
                </div>
                <div className="cw-warpop-at-num">696969</div>
              </div>
              <div className="cw-warpop-at-box">
                <div className="cw-warpop-at-pic">
                  <img src="img/v2-fw-icon-fr4.png" loading="lazy" />
                </div>
                <div className="cw-warpop-at-num">696969</div>
              </div>
            </div>
            <div className="cw-warpop-army-power-box">
              <div className="cw-warpop-army-power-text">
                Your army power here
              </div>
              <div className="cw-warpop-army-power-num">69696969</div>
            </div>
            <div className="cw-warpop-gr-con-power-box">
              <div className="cw-warpop-gr-box">
                <div className="cw-warpop-army-power-text">
                  your garnison power
                </div>
                <div className="cw-warpop-army-power-num">69696969</div>
              </div>
              <div className="cw-warpop-gr-box">
                <div className="cw-warpop-army-power-text">
                  double contribution power in
                </div>
                <div className="cw-warpop-army-power-num">69696969</div>
              </div>
            </div>
          </div>
          <div className="color-btn green">
            <div className="color-btn-text">attack</div>
          </div>
          <div className="color-btn blue">
            <div className="color-btn-text">mercs</div>
          </div>
          <div className="cw-warpop-close"></div>
        </div>
        <div className="cw-myfraction-box">
          <div className="cw-myfraction-pic">
            <img src="img/v2-fw-fr-2.png" loading="lazy" />
          </div>
          <div className="cw-myfraction-text">моя фракция</div>
          <div className="cw-myfraction-name-box">
            <div className="cw-myfraction-name">Львиное Королевство</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(V2MainScreen15CwMapWarpopComponent);
