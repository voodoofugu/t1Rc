import React from "react";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "screen-unipop-events",
];

function V2Unipop20EventsComponent() {
  return (
    <HelmetForCss cssFiles={cssFiles}>
      <div className="main world1">
        <div className="main-bg"></div>

        <div className="popup-layer" style={{ display: "block" }}>
          <div className="screen-blend-55" style={{ display: "block" }}></div>

          <div className="m-popup unipop-hw2019 sv">
            <div className="title">Welcome Back!</div>
            <div className="color-box"></div>
            <div className="color-box-decor"></div>
            <div className="unipop-box-content-all">
              <div className="unipop-box-left-box">
                <div className="unipop-scroll-box">
                  <div className="unipop-box select">
                    <div className="unipop-box-pic">
                      <img
                        src="img/unipop-vl-2023.jpg"
                        alt="nyDust"
                        loading="lazy"
                      />
                    </div>
                    <div className="unipop-gold-arrow"></div>
                  </div>
                  <div className="unipop-box">
                    <div className="unipop-box-pic">
                      <img
                        src="img/unipop-m-wsale.jpg"
                        alt="offermania.regular2"
                        loading="lazy"
                      />
                      <div>
                        <img
                          src="img/ic-hero-330.png"
                          style={{
                            position: "absolute",
                            width: "55px",
                            height: "55px",
                            borderRadius: "60px",
                            left: "75px",
                            top: "5px",
                            border: "3px solid rgb(243, 199, 88)",
                            boxShadow: "rgb(0, 0, 0) 0px 0px 1px",
                          }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="unipop-timer">99:52:32</div>
                  </div>
                  <div className="unipop-box">
                    <div className="unipop-box-pic">
                      <img
                        src="img/unipop-m-fp.jpg"
                        alt="fapopoly"
                        loading="lazy"
                      />
                    </div>
                    <div className="unipop-timer top">27:52:32</div>
                  </div>
                  <div className="unipop-box">
                    <div className="unipop-box-pic">
                      <img
                        src="img/unipop-m-koi.jpg"
                        alt="koi"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="unipop-box">
                    <div className="unipop-box-pic">
                      <img
                        src="img/unipop-m-sale.jpg"
                        alt="todaySale"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="unipop-box">
                    <div className="unipop-box-pic">
                      <img
                        src="img/unipop-m-wsale.jpg"
                        alt="offermania.whalesale"
                        loading="lazy"
                      />
                      <div>
                        <img
                          src="img/images/hero-all/tithero-188/x2/ava/tithero-188-1-ava.jpg"
                          style={{
                            position: "absolute",
                            width: "55px",
                            height: "55px",
                            borderRadius: "60px",
                            left: "75px",
                            top: "5px",
                            border: "3px solid rgb(243, 199, 88)",
                            boxShadow: "rgb(0, 0, 0) 0px 0px 1px",
                          }}
                          loading="lazy"
                        />
                        <div className="v2-whale-notif notif notif20"></div>
                      </div>
                    </div>
                    <div className="unipop-timer">22:50:52</div>
                  </div>
                  <div className="unipop-box">
                    <div className="unipop-box-pic">
                      <img
                        src="img/unipop-m-wsale.jpg"
                        alt="offermania.whalesupersale"
                        loading="lazy"
                      />
                      <div>
                        <img
                          src="img/images/superhero/suphero-757/x2/avatar/757sh-ava-1.jpg"
                          style={{
                            position: "absolute",
                            width: "55px",
                            height: "55px",
                            borderRadius: "60px",
                            left: "75px",
                            top: "5px",
                            border: "3px solid rgb(243, 199, 88)",
                            boxShadow: "rgb(0, 0, 0) 0px 0px 1px",
                          }}
                          loading="lazy"
                        />
                        <div className="v2-whale-notif notif notif20"></div>
                      </div>
                    </div>
                    <div className="unipop-timer">22:50:52</div>
                  </div>
                  <div className="unipop-box">
                    <div className="unipop-box-pic">
                      <img
                        src="img/unipop-m-starterpack.jpg"
                        alt="starterPack"
                        loading="lazy"
                      />
                    </div>
                    <div className="unipop-timer">00:00:00</div>
                  </div>
                  <div className="unipop-box">
                    <div className="unipop-box-pic">
                      <img
                        src="img/unipop-m-tower.jpg"
                        alt="raid_bosses"
                        loading="lazy"
                      />
                    </div>
                    <div className="unipop-timer top">99:52:32</div>
                  </div>
                  <div className="unipop-box">
                    <div className="unipop-box-pic">
                      <img
                        src="img/unipop-m-news.jpg"
                        alt="news"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="unipop-box-right-box">
                {/* angel */}
                <div className="right-box-f sv">
                  <div className="right-box-f-name-box">
                    Happy Valentine's Day!
                  </div>
                  <div className="red-timer-box">
                    <div className="time-text">time left</div>
                    <div className="time">00:00:00</div>
                  </div>
                  <div className="event-btlpass-collect-box-all">
                    <div className="event-btlpass-collect-box-text">
                      Dear players! We wish you Merry Christmas and Happy
                      Holidays. Don't miss out on our Winter Wonder deals: these
                      hot girls can't wait to warm you up during cold winter
                      days!
                    </div>
                    <div className="event-squad-wrap">
                      <div className="event-squad-suphero">
                        <div className="event-hero-box">
                          <div className="hero-avatar-box">
                            <img
                              className="hero-avatar"
                              src="img/images\superhero\suphero-778\x1\avatar\778sh-ava-1.jpg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="event-hero-box">
                          <div className="hero-avatar-box">
                            <img
                              className="hero-avatar"
                              src="img/images\superhero\suphero-777\x1\avatar\777sh-ava-1.jpg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="event-hero-box">
                          <div className="hero-avatar-box">
                            <img
                              className="hero-avatar"
                              src="img/images\superhero\suphero-776\x1\avatar\776sh-ava-1.jpg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="event-hero-box">
                          <div className="hero-avatar-box">
                            <img
                              className="hero-avatar"
                              src="img/images\superhero\suphero-771\x1\avatar\771sh-ava-1.jpg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="event-hero-box">
                          <div className="hero-avatar-box">
                            <img
                              className="hero-avatar"
                              src="img/images\superhero\suphero-767\x1\avatar\767sh-ava-1.jpg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-btlpass-collect-box-angel">
                    <div className="angel-title">Angel</div>
                    <div className="angel-avatar-box">
                      <div className="img-wrap">
                        <img
                          src="img/images/goddess/goddess-1/x2/goddess-1.jpg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="buy-pack-all-box">
                    <div className="color-btn green event-pass">
                      <div className="color-btn-text">Event Pass</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">
                        <div>Fapopoly</div>
                        <div className="t">1D 03:52:32</div>
                      </div>
                    </div>
                    <div className="color-btn green dark-tower">
                      <div className="color-btn-text">Dark Tower</div>
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

export default React.memo(V2Unipop20EventsComponent);
