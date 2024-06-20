import React from "react";

export const cssFiles = ["gf-sale-pop", "screen-unipop-subscription"];

export default function MainScreen25GfSalePop() {
  return (
    <div className="main world1">
      <div className="main-bg"></div>

      <div className="popup-layer" style={{ display: "block" }}>
        <div className="screen-blend-55" style={{ display: "block" }}></div>

        <div className="m-popup gf-sale" style={{ display: "block" }}>
          <div className="title">girlfriend pack</div>
          <div className="sv-sale-pack-box">
            <div className="lhero-box">
              <div className="lhero-pic">
                <img src="img/hero0075@1x.jpg" loading="lazy" />
              </div>
              <div className="topname-box">
                <div className="sh2-icon left">
                  <img src="img/cur-r.png" loading="lazy" />
                </div>
                <div className="sh2-icon-forgirl right">
                  <img src="img/cur2-sword.png" loading="lazy" />
                </div>
                <div className="lhero-name-box">
                  <div className="lhero-name">Rei Hadakasutsu Blowjob</div>
                </div>
              </div>
              <div className="sv-sale-bonus-box-all">
                <div className="acbonus-box">
                  <div className="lvlbox-name">first bonus</div>
                  <div className="bonus-lvl-box-bonus-box">
                    <div className="bonus-lvl-box-bonus">
                      Увеличение DPS + 5000%
                      <span className="ff-sh2-icon">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="acbonus-box second">
                  <div className="lvlbox-name">second bonus</div>
                  <div className="bonus-lvl-box-bonus-box">
                    <div className="bonus-lvl-box-bonus">
                      Увеличение DPS + 5000%
                      <span className="ff-sh2-icon">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sv-reward-box-all gf-plus">
            <div className="sv-reward-box">
              <div className="sv-reward-pic">
                <img
                  src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                  loading="lazy"
                />
              </div>
              <div className="sv-reward-count">999</div>
            </div>
            <div className="sv-reward-box plus">
              <div className="sv-reward-pic">
                <img
                  src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                  loading="lazy"
                />
              </div>
              <div className="sv-reward-count">999</div>
            </div>
            <div className="gf-plus"></div>
          </div>
          <div className="sv-sale-pack-box next">
            <div className="lhero-box lock">
              <div className="lhero-pic">
                <img src="img/hero0075@1x.jpg" loading="lazy" />
              </div>
              <div className="topname-box">
                <div className="sh2-icon left">
                  <img src="img/cur-r.png" loading="lazy" />
                </div>
                <div className="sh2-icon-forgirl right">
                  <img src="img/cur2-sword.png" loading="lazy" />
                </div>
                <div className="lhero-name-box">
                  <div className="lhero-name">Rei Hadakasutsu Blowjob</div>
                </div>
              </div>
              <div className="sv-sale-bonus-box-all">
                <div className="acbonus-box">
                  <div className="lvlbox-name">first bonus</div>
                  <div className="bonus-lvl-box-bonus-box">
                    <div className="bonus-lvl-box-bonus">
                      Увеличение DPS + 5000%
                      <span className="ff-sh2-icon">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="acbonus-box second">
                  <div className="lvlbox-name">second bonus</div>
                  <div className="bonus-lvl-box-bonus-box">
                    <div className="bonus-lvl-box-bonus">
                      Увеличение DPS + 5000%
                      <span className="ff-sh2-icon">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gf-ballon-box">
            <div className="gf-ballon-text">
              I FOUND MY GIRLFRIEND! MASTER, HELP US REUNITE!
            </div>
          </div>
          <div className="gf-twice-box">
            <div className="gf-twice-text">twice cheaper!</div>
          </div>
          <div className="sv-sale-btn-box">
            <div className="store-button">
              <div className="but-price old">$20</div>
              <div className="but-price">$5</div>
            </div>
          </div>
          <div className="wpck-timer-box">
            <div className="time-left">time left</div>
            <div className="time-sec">23:54:55</div>
          </div>
          <div className="btn-close-x"></div>
        </div>
      </div>
    </div>
  );
}
