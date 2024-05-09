import React from "react";

export default function RebornDarkPopup() {
  return (
    <div className="content">
      <div className="header-pop">
        <div className="header-text-box">
          <div className="text">
            Reborn and claim your rewards from the Dark World!
          </div>
        </div>
      </div>
      <div className="rewards-wrap">
        <div className="reward-box">
          <img src="img/evPopArts/angel_spirit_1.png" loading="lazy" />
          <div className="reward-icn"></div>
          <div className="reward-value">x100</div>
        </div>
        <div className="reward-box">
          <img src="img/evPopArts/potion_black.png" loading="lazy" />
          <div className="reward-icn"></div>
          <div className="reward-value">x100</div>
        </div>
      </div>
      <div className="reborn-btn-wrap">
        <div className="reborn-progress losing">
          <div className="info-wrap">
            <div className="text-description">
              Reborn without losing progress
              <div className="info-box">
                <div className="info-btn">i</div>
                <div className="text">
                  <div>You will keep:</div>
                  <li>
                    All the achievements and achievement bonuses you received
                  </li>
                  <li>The Guild's progress and bonuses</li>
                  <li>Gems and Crowns</li>
                  <li>VIP status</li>
                  <li>Pictures you found</li>
                  <li>Your heroes' promotions</li>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-simple-gold">
            <span className="price diamonds">35</span>
            Diamonds
          </div>
        </div>
        <div className="reborn-progress loss">
          <div className="info-wrap">
            <div className="text-description">
              Free reborn with loss of progress
              <div className="info-box">
                <div className="info-btn">i</div>
                <div className="text">
                  <div>You will lose:</div>
                  <li>All the heroes, hero levels and abilities</li>
                  <li>Gold and Memory shards</li>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-simple-gold">Free</div>
        </div>
      </div>
    </div>
  );
}
