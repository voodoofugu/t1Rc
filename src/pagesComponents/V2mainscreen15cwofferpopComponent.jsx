import React from "react";
import v2ScreenCwOfferPop from "../styles/v2-screen-cw-offer-pop.scss";

const V2MainScreen15CwOfferPopComponent = () => {
  return (
    <>
      <div className="main world1">
        <div className="main-bg"></div>

        <div className="popup-layer" style={{ display: "block" }}>
          <div className="screen-blend-55" style={{ display: "block" }}></div>

          <div className="m-popup cw-offers-pop" style={{ display: "block" }}>
            <div className="title">Clan wars offer</div>
            <div className="offers-card-box">
              <div className="offers-but-box">
                <img src="img/v2-x2.png" alt="" />
              </div>
              <div className="offers-text-box">
                <div className="offers-text">
                  Double experience
                  <br />
                  for both
                  <br />
                  clan wars and
                  <br />
                  fraction wars
                </div>
              </div>
              <div className="keybtn-box">
                <div className="keybtn">$29.99</div>
              </div>
            </div>
            <div className="offers-card-box">
              <div className="offers-but-box">
                <img src="img/v2-cw-icon-maps.png" alt="" />
              </div>
              <div className="offers-text-box">
                <div className="offers-text">
                  Clan wars
                  <br />
                  battle pass
                </div>
              </div>
              <div className="keybtn-box">
                <div className="keybtn">$29.99</div>
              </div>
            </div>
            <div className="offers-card-box">
              <div className="offers-but-box">
                <img src="img/v2-cw-icon-maps.png" alt="" />
              </div>
              <div className="offers-text-box">
                <div className="offers-text">
                  Fraction wars
                  <br />
                  battle pass
                </div>
              </div>
              <div className="keybtn-box">
                <div className="keybtn">$29.99</div>
              </div>
            </div>
            <div className="offers-card-box">
              <div className="offers-but-box">
                <img src="img/v2-cw-icon-maps-both.png" alt="" />
              </div>
              <div className="offers-text-box">
                <div className="offers-text">
                  Both
                  <br />
                  clan wars
                  <br />
                  and
                  <br />
                  fraction wars
                  <br />
                  battle passes
                </div>
              </div>
              <div className="keybtn-box">
                <div className="keybtn">$29.99</div>
              </div>
            </div>

            <div className="btn-close-x"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(V2MainScreen15CwOfferPopComponent);
