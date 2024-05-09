import React from "react";

export default function TowerTrophyBoxScroll({ onClickPop }) {
  return (
    <div className="tower-trophy-box-scroll">
      <div className="tower-trophy-box">
        <div className="trophy-bonus-pic-box">
          <div className="trophy-bonus-pic" onClick={onClickPop}>
            <img src="img/v2-trophy-pillar-a.png" />
          </div>
          <div className="trophy-bonus-lvl">Lvl 2</div>
          <div className="trophy-bonus-name-box">
            <div className="trophy-bonus-name">Pillar of DPC</div>
          </div>
        </div>
        <div className="trophy-bonus-about-box">
          <div className="trophy-bonus-about-name">bonus</div>
          <div className="trophy-bonus-about-text-box">
            <div className="trophy-bonus-about-text">Adds 110% to DPC</div>
          </div>
        </div>
        <div className="trophy-text">Upgrade in Trophy Room</div>
        <div className="trophy-lvlup-box">
          <div className="color-btn green ">
            <div className="color-btn-text">Upgrade in Trophy Room</div>
          </div>
        </div>
      </div>
      <div className="tower-trophy-box">
        <div className="trophy-bonus-pic-box">
          <div className="trophy-bonus-pic" onClick={onClickPop}>
            <img src="img/change-ic-gem-master.png" loading="lazy" />
          </div>
          <div className="trophy-bonus-lvl">Level 6969K</div>
          <div className="trophy-bonus-name-box">
            <div className="trophy-bonus-name">Ancient of Moderation</div>
          </div>
        </div>
        <div className="trophy-bonus-about-box">
          <div className="trophy-bonus-about-name">бонус</div>
          <div className="trophy-bonus-about-text-box">
            <div className="trophy-bonus-about-text">
              +400% of DPS in tower divided by 1000
            </div>
          </div>
        </div>
        <div className="cards-res-box cards">
          <div className="cards-value">696969К</div>
          <div className="cards-value-btn-add"></div>
        </div>
        <div className="trophy-lvlup-box">
          <div className="color-btn green">
            <div className="color-btn-text">unlock</div>
          </div>
        </div>
      </div>
      <div className="tower-trophy-box">
        <div className="trophy-bonus-pic-box">
          <div className="trophy-bonus-pic" onClick={onClickPop}>
            <img src="img/change-ic-gem-master.png" loading="lazy" />
          </div>
          <div className="trophy-bonus-lvl">Level 6969K</div>
          <div className="trophy-bonus-name-box">
            <div className="trophy-bonus-name">Ancient of Moderation</div>
          </div>
        </div>
        <div className="trophy-bonus-about-box">
          <div className="trophy-bonus-about-name">бонус</div>
          <div className="trophy-bonus-about-text-box">
            <div className="trophy-bonus-about-text">
              +400% of DPS in tower divided by 1000
            </div>
          </div>
        </div>
        <div className="cards-res-box cards">
          <div className="cards-value">696969К</div>
          <div className="cards-value-btn-add"></div>
        </div>
        <div className="trophy-lvlup-box">
          <div className="color-btn green">
            <div className="color-btn-text">unlock</div>
          </div>
        </div>
      </div>
    </div>
  );
}
