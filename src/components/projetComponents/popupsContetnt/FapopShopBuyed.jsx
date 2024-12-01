import React from "react";
import { nexusDispatch, useNexus } from "nexus-state";

export default React.memo(function FapopShopBuyed() {
  const popupState = useNexus("popupState");

  return (
    <>
      <div className="fapop-shop-content">
        <div className="fapop-shop-box-all">
          <div className="cardnameback">
            <div className="card-text">get unique hero</div>
          </div>
          <div className="lhero-box">
            <div className="lhero-pic">
              <img src="img/images/superhero/suphero-15/x1/15sh-1.jpg" />
              <img
                className="star-up"
                src="img/images/superhero/suphero-15/x1/15sh-1.jpg"
              />
            </div>
            <div className="topname-box">
              <div className="lrare-box uncommon" />
              <div className="sh2-icon left">
                <img src="img/cur-u.png" />
              </div>
              <div className="sh2-icon-forgirl right">
                <img src="img/cur2-wizard.png" />
              </div>
              <div className="lhero-name-box">
                <div className="lhero-name">Ichigo Ui</div>
              </div>
            </div>
            <div className="bottom-star-box-girl-count-box">
              <div className="sh2-prgbar-all gold">
                <div className="sh2-prgbar" style={{ width: "100%" }} />
                <div className="sh2-prgbar-text">300/300</div>
              </div>
              <div className="girl-bonus-box">
                <div className="girl-bonus-pic">
                  <img src="img/images/superhero/suphero-15/x1/avatar/15sh-ava-1.jpg" />
                </div>
              </div>
            </div>
            <div className="sv-sale-bonus-box-all">
              <div className="ashero-bonus-box">
                <div className="acbonus-box">
                  <div className="lvlbox-name">Leprechauns luck</div>
                  <div className="bonus-lvl-box-bonus-box">
                    <div className="bonus-lvl-box-bonus">
                      +45%
                      <div className="ff-sh2-icon gold" />
                    </div>
                  </div>
                </div>
                <div className="acbonus-box second">
                  <div className="lvlbox-name">Fairys blessing</div>
                  <div className="bonus-lvl-box-bonus-box">
                    <div className="bonus-lvl-box-bonus">
                      +2.15% dps to
                      <div className="ff-sh2-icon">
                        <img src="img/cur2-wizard.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpck-plus" />
          <div className="fapop-token-booster-name">50 tokens</div>
          <div className="fapop-token-booster-pic">
            <img src="img/evPopArts/fapop-token1.png" />
          </div>
          <div className="wpck-plus1" />
          <div className="prize-box">
            <div className="prize-item">
              <img className="prize-pic" src="img/diamond5.png" />
            </div>
            <div className="prize-text">100</div>
          </div>
          <div className="store-button">
            <div className="but-price old">$200</div>
            <div className="but-price">$49.99</div>
          </div>
        </div>
        <div className="fapop-token-box-all">
          <div className="cardnameback">
            <div className="card-text">choose your pack</div>
          </div>
          <div className="fapop-token-booster ">
            <div className="fapop-token-booster-name">3+3 tokens</div>
            <div className="fapop-token-booster-pic">
              <img src="img/evPopArts/fapop-token1.png" />
            </div>
            <div className="color-btn green ">
              <div className="color-btn-text">$1.99</div>
            </div>
          </div>
          <div className="fapop-token-booster sliver">
            <div className="fapop-token-booster-name">10+10 tokens</div>
            <div className="fapop-token-booster-pic">
              <img src="img/evPopArts/fapop-tokenGold1.png" />
            </div>
            <div className="color-btn green ">
              <div className="color-btn-text">$4.99</div>
            </div>
          </div>
          <div className="fapop-token-booster gold">
            <div className="fapop-token-booster-name">45+45 tokens</div>
            <div className="fapop-token-booster-pic">
              <img src="img/evPopArts/fapop-token2.png" />
            </div>
            <div className="color-btn green ">
              <div className="color-btn-text">$19.99</div>
            </div>
          </div>
          <div className="fapop-token-booster top">
            <div className="fapop-token-booster-name">135+135 tokens</div>
            <div className="fapop-token-booster-pic">
              <img src="img/evPopArts/fapop-tokenGold2.png" />
            </div>
            <div className="color-btn green ">
              <div className="color-btn-text">$49.99</div>
            </div>
          </div>
        </div>
      </div>
      <div className="color-btn">
        <div
          className="color-btn-text"
          onClick={() =>
            nexusDispatch({
              type: "handlePopup",
              payload: { type: "close" },
            })
          }
        >
          закрыть
        </div>
      </div>
    </>
  );
});
