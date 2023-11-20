import React from "react";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "screen-fapopoly-main",
];

export default function MainScreen23FapopolyMainComponent() {
  return (
    <HelmetForCss cssFiles={cssFiles}>
      <div className="main world1">
        <div className="main-bg easter"></div>
        <div className="fapop-content-all">
          <div className="fapop-exit-box">
            <div className="fapop-exit-text-box">
              <div className="fapop-exit-text">
                Your progress will be saved even if you leave
              </div>
            </div>
            <div className="color-btn">
              <div className="color-btn-text">exit</div>
            </div>
          </div>
          <div className="fapop-rating-tokens-box">
            <div className="color-btn">
              <div className="color-btn-text">rating</div>
            </div>
            <div className="color-btn">
              <div className="color-btn-text">tokens</div>
            </div>
          </div>
          <div className="fapop-times-around-box">
            <div className="fapop-times-around-prgbar">
              <div
                className="fapop-times-around-prgbar-full"
                style={{ height: "100%" }}
              ></div>
              <div className="fapop-times-around-prgbar-text">100/1500</div>
              <div className="fapop-times-around-text">times around board</div>
            </div>
          </div>
          <div className="fapop-rewards-box-all">
            <div className="fapop-rewards-text">rewards</div>
            <div className="fapop-rewards-box">
              <div className="fapop-rewards girl good">
                <div className="fapop-rew-pic">
                  <img src="img/hero0093-ava.jpg" loading="lazy" />
                </div>
                <div className="fapop-rew-pts">100</div>
                <div className="fapop-rew-good"></div>
                <div className="fapop-pts-num">1500 pt</div>
              </div>
              <div className="fapop-rewards">
                <div className="fapop-rew-pic">
                  <img src="img/change-ic-essence.png" loading="lazy" />
                </div>
                <div className="fapop-rew-pts">100</div>
                <div className="fapop-pts-num">1500 pt</div>
              </div>
              <div className="fapop-rewards">
                <div className="fapop-rew-pic">
                  <img src="img/change-ic-essence.png" loading="lazy" />
                </div>
                <div className="fapop-rew-pts">100</div>
                <div className="fapop-pts-num">1500 pt</div>
              </div>
              <div className="fapop-rewards">
                <div className="fapop-rew-pic">
                  <img src="img/change-ic-essence.png" loading="lazy" />
                </div>
                <div className="fapop-rew-pts">100</div>
                <div className="fapop-pts-num">1500 pt</div>
              </div>
              <div className="fapop-rewards claimed">
                <div className="fapop-rew-pic">
                  <img src="img/change-ic-essence.png" loading="lazy" />
                </div>
                <div className="fapop-rew-pts">claim</div>
                <div className="fapop-rew-claimed"></div>
                <div className="fapop-pts-num">1500 pt</div>
              </div>
              <div className="fapop-rewards claim">
                <div className="fapop-rew-pic">
                  <img src="img/change-ic-essence.png" loading="lazy" />
                </div>
                <div className="fapop-rew-pts">claim</div>
                <div className="fapop-pts-num">1500 pt</div>
              </div>
            </div>
          </div>
          <div className="fapop-prgbar-box-all">
            <div className="fapop-prgbar-reward-box claim">
              <div className="fapop-prgbar-reward-pic">
                <img src="img/rating-ring-red@1x.png" loading="lazy" />
              </div>
              <div className="fapop-prgbar-reward-text">claim</div>
            </div>
            <div className="fapop-prgbar-box">
              <div className="fapop-prgbar-full" style={{ width: "30%" }}></div>
              <div className="fapop-prgbar-text">
                Kill <span className="f-yellow-text">10</span> monsters
              </div>
              <div className="fapop-prgbar-text-count">
                <span className="f-yellow-text">999</span>/999
              </div>
            </div>
            <div className="fapop-noquest-box">
              <div className="fapop-noquest-text">
                You have no more active quests today. Come back in 23:59:59
              </div>
            </div>
          </div>
          <div className="fapop-rolldice-box-all">
            <div className="fapop-dice-2"></div>
            <div className="fapop-dice-1"></div>
            <div className="color-btn green">
              <div className="color-btn-text">roll dice</div>
              <div className="token-count-box">
                <div className="token-count">
                  1<span className="f-token"></span>
                </div>
              </div>
            </div>
            <div className="color-btn green ten">
              <div className="color-btn-text">ten dice rolls</div>
              <div className="token-count-box">
                <div className="token-count">
                  10<span className="f-token"></span>
                </div>
              </div>
            </div>
            <div className="fapop-dice-end-1">
              <img src="img/fapop-dice-end4.png" />{" "}
            </div>
            <div className="fapop-dice-end-2">
              <img src="img/fapop-dice-end6.png" />{" "}
            </div>
            <div className="fapop-dice-end-rolled">
              <div className="fapop-dice-rolled-text">you rolled 10</div>
            </div>
          </div>
          <div className="fapop-info-btn">?</div>
          <div className="fapop-player">
            <div className="fapop-player-name">Supervasya</div>
          </div>
          <div className="fapop-rewardx2">
            <div className="fapop-rewardx2-text">double reward</div>
          </div>
        </div>
      </div>
    </HelmetForCss>
  );
}
