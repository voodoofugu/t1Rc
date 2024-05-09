import React from "react";

export const cssFiles = [
  "v2-screen-tower",
  "v2-screen-tower-relics",
  "v2-screen-bf-event__chests",
];

export default function V2MainScreen10BlackfridayEventChests() {
  return (
    <div className="main world1">
      <div className="main-bg"></div>
      <div className="popup-layer" style={{ display: "block" }}>
        <div className="screen-blend-55" style={{ display: "block" }}></div>
        <div
          className="m-popup bf-event__chests-pop"
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
              <div className="chest__info"></div>
              <div className="color-btn blue">
                <div className="color-btn-text">Открыть</div>
              </div>
            </div>
            <div className="chest">
              <div className="chest__image">
                <img src="img/change-sun1.png" loading="lazy" />
              </div>
              <div className="chest__label">Silver and black chest</div>
              <div className="chest__count">99</div>
              <div className="chest__info"></div>
              <div className="color-btn blue">
                <div className="color-btn-text">Открыть</div>
              </div>
            </div>
          </div>
          <div className="bf-keys-all">
            <div className="key">
              <div className="key__image">
                <img src="img/icn-bf-key.png" alt="" loading="lazy" />
              </div>
              <div className="key__count">99</div>
              <div className="color-btn green">
                <div className="color-btn-text">Купить</div>
              </div>
            </div>
            <div className="key">
              <div className="key__image">
                <img src="img/icn-bf-key.png" alt="" loading="lazy" />
              </div>
              <div className="key__count">99</div>
              <div className="color-btn green">
                <div className="color-btn-text">Купить</div>
              </div>
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
