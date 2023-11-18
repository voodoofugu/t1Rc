import React from "react";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "v2-screen-tower",
  "v2-screen-tower-relics",
  "v2-screen-bf-event__chest",
];

export default function V2MainScreen10BlackfridayEventChestComponent() {
  return (
    <HelmetForCss cssFiles={cssFiles}>
      <div className="main world1">
        <div className="main-bg"></div>
        <div className="popup-layer" style={{ display: "block" }}>
          <div className="screen-blend-55" style={{ display: "block" }}></div>
          <div
            className="m-popup bf-event__chest-pop"
            style={{ display: "block" }}
          >
            <div className="title">black friday event</div>
            <div className="color-box"></div>
            <div className="bf-chests-all">
              <div className="chest">
                <div className="chest__image">
                  <img src="img/change-sun1.png" loading="lazy" />
                </div>
                <div className="chest__label">Silver and black chest</div>
                <div className="chest__count">99</div>
              </div>
              <div className="chest-info">
                <div className="chest-info__name">Chest fuck name</div>
                <div className="chest-info__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium assumenda consequatur consequuntur debitis fugit
                  libero, omnis placeat sequi tempora voluptate? consequuntur
                  debitis fugit libero, omnis placeat sequi tempora voluptate?
                </div>
              </div>
            </div>
            <div className="chest-contents">
              <div className="equip-item blue">
                <div className="equip-item__picture">
                  <img src="img/v2-res-mithril2.png" loading="lazy" />
                </div>
                <div className="equip-item__count">27/30</div>
              </div>
              <div className="chest-contents__plus"></div>
              <div className="equip-item">
                <div className="equip-item__picture">
                  <img src="img/ms-stone-blue.png" loading="lazy" />
                </div>
                <div className="equip-item__count">27/30</div>
                <div className="equip-item__percent">16.6%</div>
              </div>
              <div className="equip-item">
                <div className="equip-item__picture">
                  <img src="img/ms-stone-blue.png" loading="lazy" />
                </div>
                <div className="equip-item__count">27/30</div>
                <div className="equip-item__percent">16.6%</div>
              </div>
              <div className="equip-item">
                <div className="equip-item__picture">
                  <img src="img/ms-stone-blue.png" loading="lazy" />
                </div>
                <div className="equip-item__count">27/30</div>
                <div className="equip-item__percent">16.6%</div>
              </div>
              <div className="equip-item">
                <div className="equip-item__picture">
                  <img src="img/ms-stone-blue.png" loading="lazy" />
                </div>
                <div className="equip-item__count">27/30</div>
                <div className="equip-item__percent">16.6%</div>
              </div>
              <div className="equip-item">
                <div className="equip-item__picture">
                  <img src="img/ms-stone-blue.png" loading="lazy" />
                </div>
                <div className="equip-item__count">27/30</div>
                <div className="equip-item__percent">16.6%</div>
              </div>
              <div className="equip-item">
                <div className="equip-item__picture">
                  <img src="img/ms-stone-blue.png" loading="lazy" />
                </div>
                <div className="equip-item__count">27/30</div>
                <div className="equip-item__percent">16.6%</div>
              </div>
            </div>
            <div className="bf-progress">
              <div className="bf-progress__bar" style={{ height: "70%" }}></div>
              <div className="bf-progress__step step25">250</div>
              <div className="bf-progress__step step50">500</div>
              <div className="bf-progress__step step75">750</div>
              <div className="bf-progress__step step100">1000</div>
            </div>
            <div className="bf-rewards">
              <div className="bf-rewards__label">Rewards</div>
              <div className="bf-rewards__items">
                <div className="equip-item">
                  <div className="equip-item__picture">
                    <img src="img/ms-stone-blue.png" loading="lazy" />
                  </div>
                  <div className="equip-item__count">27/30</div>
                </div>
                <div className="equip-item">
                  <div className="equip-item__picture">
                    <img src="img/ms-stone-blue.png" loading="lazy" />
                  </div>
                  <div className="equip-item__count">27/30</div>
                </div>
                <div className="equip-item">
                  <div className="equip-item__picture">
                    <img src="img/ms-stone-blue.png" loading="lazy" />
                  </div>
                  <div className="equip-item__count">27/30</div>
                </div>
                <div className="equip-item">
                  <div className="equip-item__picture">
                    <img src="img/ms-stone-blue.png" loading="lazy" />
                  </div>
                  <div className="equip-item__count">27/30</div>
                </div>
              </div>
              <div className="bf-rewards__collected">
                <div className="collected__img">
                  <img src="img/v2-res-mithril.png" loading="lazy" />
                </div>
                <div className="collected__label">Ballons collected</div>
                <div className="collected__count">300/1000</div>
              </div>
            </div>
            <div className="color-btn back">
              <div className="color-btn-text">Back</div>
            </div>
            <div className="wpck-timer-box">
              <div className="time-left">time left</div>
              <div className="time-sec">23:54:55</div>
            </div>
            <div className="btn-close-x"></div>
          </div>
        </div>
      </div>
    </HelmetForCss>
  );
}
