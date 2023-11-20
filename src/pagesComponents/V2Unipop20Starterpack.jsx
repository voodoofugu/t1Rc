import React from "react";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "screen-unipop-starterpack",
];

export default function V2Unipop20StarterpackComponent() {
  return (
    <HelmetForCss cssFiles={cssFiles}>
      <div className="main world1">
        <div className="main-bg"></div>

        <div className="popup-layer" style={{ display: "block" }}>
          <div className="screen-blend-55" style={{ display: "block" }}></div>

          <div
            className="m-popup unipop-starterpack"
            style={{ display: "block" }}
          >
            <div className="title">announcement</div>
            <div className="color-box"></div>
            <div className="color-box-decor"></div>
            <div className="unipop-box-content-all">
              <div className="unipop-box-left-box">
                <div className="unipop-scroll-box">
                  <div className="unipop-box">
                    <div className="unipop-box-pic">
                      <img src="img/unipop-m-back.jpg" loading="lazy" />
                    </div>
                    <div className="unipop-gold-arrow"></div>
                  </div>
                  <div className="unipop-box">
                    <div className="unipop-box-pic">
                      <img src="img/unipop-m-sale.jpg" loading="lazy" />
                    </div>
                    <div className="unipop-gold-arrow"></div>
                  </div>
                  <div className="unipop-box select">
                    <div className="unipop-box-pic">
                      <img src="img/unipop-m-starterpack.jpg" loading="lazy" />
                    </div>
                    <div className="unipop-gold-arrow"></div>
                  </div>
                  <div className="unipop-box"></div>
                  <div className="unipop-box"></div>
                  <div className="unipop-box"></div>
                </div>
              </div>
              <div className="unipop-box-right-box">
                <div className="right-box-f">
                  <div className="right-box-f-name-box">starter pack</div>
                  <div className="red-timer-box">
                    <div className="time-text">TIME LEFT</div>
                    <div className="time">23:12:57</div>
                  </div>
                  <div className="noobpack-box">
                    <div className="moredps-box"></div>
                    <div className="cardnameback">
                      <div className="card-text">noob pack</div>
                    </div>
                    <div className="moregold-box noob">
                      <div className="pack-pack">
                        <img src="img/change-ic-gold.png" loading="lazy" />
                        <div className="rate-text">+500%</div>
                        <div className="more-text">More GOLD Dropped</div>
                      </div>
                    </div>
                    <div className="card-box mini">
                      <div className="card">
                        <img
                          className="card-img"
                          src="img/images/hero-all/tithero-194/x2/tithero-194-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="card-name">
                        <span className="cn">Limited Edition Card</span>
                        <br />
                        Mr. Garry
                      </div>
                    </div>
                    <div className="buy-box">
                      <div className="buy-text-box">
                        <div className="moregold-oldprice">
                          a <span className="ss">60$</span> value...
                        </div>
                        <div className="moregold-newprice">
                          Now for only 15$
                        </div>
                      </div>
                      <div className="color-btn green">
                        <div className="color-btn-text">BUY</div>
                      </div>
                    </div>
                  </div>
                  <div className="kingpack-box">
                    <div className="card-box">
                      <div className="card">
                        <img
                          className="card-img"
                          src="img/images/hero-all/tithero-194/x2/tithero-194-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="card-name">
                        <span className="cn">Limited Edition Card</span>
                        <br />
                        Mr. Garry
                      </div>
                      <div className="cardnameback">
                        <div className="card-text">King pack</div>
                      </div>
                    </div>
                    <div className="card-box mini">
                      <div className="card">
                        <img
                          className="card-img"
                          src="img/images/hero-all/tithero-194/x2/tithero-194-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="card-name">
                        <span className="cn">Limited Edition Card</span>
                        <br />
                        Mr. Garry
                      </div>
                    </div>
                    <div className="card-box mini">
                      <div className="card">
                        <img
                          className="card-img"
                          src="img/images/hero-all/tithero-194/x2/tithero-194-1.jpg"
                          loading="lazy"
                        />
                      </div>
                      <div className="card-name">
                        <span className="cn">Limited Edition Card</span>
                        <br />
                        Mr. Garry
                      </div>
                    </div>
                    <div className="moregold-box king">
                      <div className="pack-pack">
                        <img src="img/change-sun1.png" loading="lazy" />
                        <div className="rate-text small-text">
                          Boss chests x50
                        </div>
                      </div>
                    </div>
                    <div className="moregold-box king two">
                      <div className="pack-pack">
                        <img src="img/change-ic-gold.png" loading="lazy" />
                        <div className="rate-text">+1000%</div>
                      </div>
                    </div>
                    <div className="buy-box">
                      <div className="buy-text-box">
                        <div className="moregold-oldprice">
                          a <span className="ss">60$</span> value...
                        </div>
                        <div className="moregold-newprice">
                          Now for only 30$
                        </div>
                      </div>
                      <div className="color-btn green">
                        <div className="color-btn-text">BUY</div>
                      </div>
                    </div>
                    <div className="moredps-box"></div>
                  </div>
                  <div className="or-box">или</div>
                  <div className="sale-box">
                    <div className="sale-text">
                      <div>50%</div>off
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