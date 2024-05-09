import React from "react";

export default function ClanTrophy() {
  return (
    <>
      <div className="color-box"></div>
      <div
        className="popup-trophy-image"
        style={{
          backgroundImage: "url('../img/images/back/clan/bg_03.jpg')",
        }}
      >
        <img src="img/trophy/trophy/004_1.png" alt="" loading="lazy" />
        <div className="popup-stars">
          <div className="star checked"></div>
          <div className="star checked"></div>
          <div className="star checked"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        <div className="popup-name">380/400</div>
      </div>
      <div className="popup-left">
        <div className="rstar-box">
          <div className="rname-box">Effects</div>
          <div className="bonus-lvl-box first">
            <div className="lvlbox-name">Underworld Loot</div>
            <div className="bonus-lvl-box-name">In 3 Districts</div>
            <div className="bonus-lvl-box-bonus-box">
              <div className="bonus-lvl-box-bonus">
                <div className="bonus-lvl-box-bonus">
                  <img src="img/evPopArts/potion_blue.png" loading="lazy" />
                  600 to Loot
                </div>
              </div>
            </div>
          </div>
          <div className="bonus-lvl-box next">
            <div className="lvlbox-name">Underworld DPS</div>
            <div className="bonus-lvl-box-name">Level 0/10</div>
            <div className="bonus-lvl-box-bonus-box">
              <div className="bonus-lvl-box-bonus">
                <div className="bonus-lvl-box-bonus">+3%</div>
              </div>
            </div>
          </div>
          <div className="rbottom-box">
            <div className="all-btn-box">
              <div className="lvlup-btn undefined disabled0">
                <div className="essence-text-box">
                  <div className="essence-icon green"></div>
                  <div className="essence-text">100/10K</div>
                </div>
                <div className="btn-text">level up</div>
              </div>
              <div className="lvlup-btn right">
                <div className="essence-text-box">
                  <div className="essence-icon green"></div>
                  <div className="essence-text">100/10K</div>
                </div>
                <div className="btn-text">level up</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rstar-box howtoget">
          <div className="rname-box">How to get</div>
          <div className="bonus-lvl-box">
            <div className="lvlbox-name">Get in events</div>
            <div className="bonus-lvl-box-name">Wait for start</div>
            <div className="bonus-lvl-box-bonus-box">
              <div
                className="color-btn get-button"
                style={{
                  filter: "grayscale(1)",
                }}
              >
                <div className="color-btn-text">Get in events</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
