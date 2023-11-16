import React from "react";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "v2-screen-main-relics-pop",
];

function V2MainScreen01RelicsPopComponent() {
  return (
    <HelmetForCss cssFiles={cssFiles}>
      <div className="main world1">
        <div className="popup-layer" style={{ display: "block" }}>
          <div className="m-popup main-relics-pop" style={{ display: "block" }}>
            <div className="title">buy relics</div>
            <div className="color-box"></div>
            <div className="main-relics-girl-box">
              <div className="main-relics-girl-pic">
                <img src="img/hero0075@1x.jpg" loading="lazy" />
              </div>
              <div className="main-relics-timer-box">
                <div className="main-relics-timer-text">time left</div>
                <div className="main-relics-timer">23:59:58</div>
              </div>
              <div className="main-relics-info"></div>
              <div className="main-relics-girl-ballon">
                <div className="main-relics-girl-ballon-text-box">
                  <div className="main-relics-girl-ballon-text">
                    open more packs to get me!
                  </div>
                </div>
              </div>
              <div className="main-relics-prize-box">
                <div className="prize-dps-box">
                  <div className="prize-dps-text">5.92Q</div>
                </div>
                <div className="prize-promote-box">
                  <div className="prize-promote-text">99</div>
                </div>
              </div>
            </div>
            <div className="main-relics-right-box-all">
              <div className="main-relics-set-box">
                <div className="main-relics-set r1">
                  <div className="main-relics-set-pic"></div>
                  <div className="main-relics-set-text">1 set of relics</div>
                  <div className="color-btn diamond">
                    <div className="color-btn-text">
                      buy
                      <span className="f-diamond">7</span>
                    </div>
                  </div>
                </div>
                <div className="main-relics-set r2">
                  <div className="main-relics-set-pic"></div>
                  <div className="main-relics-set-text">5 set of relics</div>
                  <div className="color-btn diamond">
                    <div className="color-btn-text">
                      buy
                      <span className="f-diamond">20</span>
                    </div>
                  </div>
                </div>
                <div className="main-relics-set r3">
                  <div className="main-relics-set-pic"></div>
                  <div className="main-relics-set-text">20 set of relics</div>
                  <div className="color-btn diamond">
                    <div className="color-btn-text">
                      buy
                      <span className="f-diamond">45</span>
                    </div>
                  </div>
                </div>
                <div className="main-relics-set r4">
                  <div className="main-relics-set-pic"></div>
                  <div className="main-relics-set-text">50 set of relics</div>
                  <div className="color-btn diamond">
                    <div className="color-btn-text">
                      buy
                      <span className="f-diamond">80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-relics-bonus-box">
                <div className="relics-prize-box-all">
                  <div className="relics-pack-opened-box">
                    <div className="relics-pack-opened-name">pack opened</div>
                    <div className="relics-pack-opened-count">500/1000</div>
                  </div>
                  <div className="relics-prize-box"></div>
                </div>
                <div className="relics-prg-box-all">
                  <div className="relics-prg-box">
                    <div className="prg-box">
                      <div className="prgbar"></div>
                    </div>
                  </div>
                </div>
                <div className="relics-coll-box-all">
                  <div className="relics-coll-box r1 check">
                    <div className="relics-coll-line"></div>
                    <div className="relics-coll-count-box">
                      <div className="relics-coll-count">250</div>
                    </div>
                    <div className="relics-coll">
                      <div className="relics-coll-pic">
                        <img src="img/change-ic-diamond.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="relics-coll-check"></div>
                    <div className="color-btn blue">
                      <div className="color-btn-text">claim</div>
                    </div>
                  </div>
                  <div className="relics-coll-box r2 claim">
                    <div className="relics-coll-line"></div>
                    <div className="relics-coll-count-box">
                      <div className="relics-coll-count">500</div>
                    </div>
                    <div className="relics-coll">
                      <div className="relics-coll-pic">
                        <img src="img/change-ic-diamond.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="relics-coll-check"></div>
                    <div className="color-btn blue">
                      <div className="color-btn-text">claim</div>
                    </div>
                  </div>
                  <div className="relics-coll-box r3">
                    <div className="relics-coll-line"></div>
                    <div className="relics-coll-count-box">
                      <div className="relics-coll-count">750</div>
                    </div>
                    <div className="relics-coll">
                      <div className="relics-coll-pic">
                        <img src="img/change-ic-diamond.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="relics-coll-check"></div>
                    <div className="color-btn blue">
                      <div className="color-btn-text">claim</div>
                    </div>
                  </div>
                  <div className="relics-coll-box r4">
                    <div className="relics-coll-line"></div>
                    <div className="relics-coll-count-box">
                      <div className="relics-coll-count">1000</div>
                    </div>
                    <div className="relics-coll">
                      <div className="relics-coll-pic">
                        <img src="img/change-ic-diamond.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="relics-coll-check"></div>
                    <div className="color-btn blue">
                      <div className="color-btn-text">claim</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn-close-x"></div>
          </div>
        </div>
      </div>
    </HelmetForCss>
  );
}

export default React.memo(V2MainScreen01RelicsPopComponent);
