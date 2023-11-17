import React from "react";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "v2-screen-pse-info",
];

function V2MainScreen16PseInfoPopComponent() {
  return (
    <HelmetForCss cssFiles={cssFiles}>
      <div className="main world1">
        <div className="main-bg"></div>
        <div className="popup-layer" style={{ display: "block" }}>
          <div className="screen-blend-55" style={{ display: "block" }}></div>
          <div className="m-popup pseinfo" style={{ display: "block" }}>
            <div className="title">collector's fever</div>
            <div className="color-box"></div>
            <div className="pse-cf-left-box-all">
              <div className="pse-cf-girl"></div>
              <div className="color-btn">
                <div className="color-btn-text">exchange</div>
              </div>
              <div className="pse-count-res-box">
                <div className="pse-count-res-text">
                  <span className="ic-pse-keygirl"></span>
                  10/10
                </div>
              </div>
            </div>
            <div className="pse-cf-right-box-all">
              <div className="pse-cf-right-box-text">
                collector's fever rules
                <div className="info-btn"></div>
              </div>
              <div className="pse-cf-res-shop-box-all">
                <div className="pse-cf-res-rules-box">
                  <div className="pse-cf-res-rules-text-box">
                    <div className="pse-cf-res-rules-text">
                      Collect resources on FAPOPOLY board
                    </div>
                  </div>
                </div>
                <div className="pse-cf-res-rules-box">
                  <div className="pse-cf-res-rules-text-box">
                    <div className="pse-cf-res-rules-text">
                      EXCHANGE them for choosen rewards. For each you will get
                      additional item
                    </div>
                  </div>
                </div>
                <div className="pse-cf-res-rules-box">
                  <div className="pse-cf-res-rules-text-box">
                    <div className="pse-cf-res-rules-text">
                      COLLECT 10 special items and TAKE most powerful girl here
                    </div>
                  </div>
                </div>
              </div>
              <div className="color-btn">
                <div className="color-btn-text">back</div>
              </div>
            </div>
            <div className="btn-close-x"></div>
          </div>
        </div>
      </div>
    </HelmetForCss>
  );
}

export default React.memo(V2MainScreen16PseInfoPopComponent);
