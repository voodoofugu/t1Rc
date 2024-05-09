import React from "react";

export const cssFiles = ["v2-screen-cw-guildorder"];

export default function V2MainScreen15CwGuildorderPop() {
  return (
    <div className="main world1">
      <div className="popup-layer" style={{ display: "block" }}>
        <div className="m-popup guildorder" style={{ display: "block" }}>
          <div className="title">guild order</div>
          <div className="color-box"></div>
          <div className="cw-clan-order-box-all">
            <div className="cw-clan-order-btn-box">
              <div className="color-btn">
                <div className="color-btn-text">order</div>
              </div>
              <div className="color-btn">
                <div className="color-btn-text">upgrade</div>
              </div>
            </div>
            <div className="cw-clan-order-ab-box-all">
              <div className="cw-clan-order-ab-box">
                <div className="cw-clan-order-ab-pic">
                  <img src="img/change-ic-gem-master.png" loading="lazy" />
                </div>
                <div className="cw-clan-order-ab-prg-box">
                  <div
                    className="cw-clan-order-ab-prg"
                    style={{ width: "80%" }}
                  ></div>
                  <div className="cw-clan-order-ab-prg-text">1:00:00</div>
                </div>
              </div>
              <div className="cw-clan-order-ab-box">
                <div className="cw-clan-order-ab-pic">
                  <img src="img/change-ic-gem-master.png" loading="lazy" />
                </div>
                <div className="cw-clan-order-ab-prg-box">
                  <div
                    className="cw-clan-order-ab-prg"
                    style={{ width: "5%" }}
                  ></div>
                  <div className="cw-clan-order-ab-prg-text">1:00:00</div>
                </div>
              </div>
              <div className="cw-clan-order-ab-box">
                <div className="cw-clan-order-ab-pic">
                  <img src="img/change-ic-gem-master.png" loading="lazy" />
                </div>
                <div className="cw-clan-order-ab-prg-box">
                  <div
                    className="cw-clan-order-ab-prg"
                    style={{ width: "30%" }}
                  ></div>
                  <div className="cw-clan-order-ab-prg-text">1:00:00</div>
                </div>
              </div>
            </div>
            <div className="cw-clan-order-rew-box-all">
              <div className="cw-clan-order-rew-text">battle reward</div>
              <div className="cw-clan-order-rew-box">
                <div className="cw-clan-order-rew">
                  <div className="cw-clan-order-rew-img">
                    <img src="img/change-sun1.png" loading="lazy" />
                  </div>
                </div>
                <div className="cw-clan-order-rew">
                  <div className="cw-clan-order-rew-img">
                    <img src="img/change-sun1.png" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="color-btn green working">
                <div className="color-btn-text">working</div>
              </div>
            </div>
          </div>

          <div className="color-btn close">
            <div className="color-btn-text">close</div>
          </div>
          <div className="btn-close-x"></div>
        </div>
      </div>
    </div>
  );
}
