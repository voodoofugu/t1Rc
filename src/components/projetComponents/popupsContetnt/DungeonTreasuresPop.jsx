import nexus from "nexus";

import Button from "../UIComponents/Button";

export default function DungeonTreasuresPop() {
  return (
    <>
      <Button
        className="exit"
        text="✖"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      />

      <div className="info-box">Вы подняли уровень Dungeon Treasures!</div>
      <div className="winner-box">
        <div className="fortuna-wheel special">
          <div>
            <div className="fortuna-prize">
              <img
                className="prize-pic"
                src="img/dungTreas-res-ic.png"
                loading="lazy"
              />
              <div className="fortuna-check-num res-amount">4.53sD15</div>
            </div>
          </div>
        </div>
        <div className="fortuna-wheel">
          <div>
            <div className="fortuna-prize">
              <img className="prize-pic" src="img/gold.png" loading="lazy" />
              <div className="fortuna-check-num res-amount">4.53sD15</div>
            </div>
          </div>
        </div>
        <div className="fortuna-wheel">
          <div>
            <div className="fortuna-prize">
              <img className="prize-pic" src="img/gold.png" loading="lazy" />
              <div className="fortuna-check-num res-amount">4.53sD15</div>
            </div>
          </div>
        </div>
        <div className="fortuna-wheel piecesHero">
          <div>
            <div className="fortuna-prize">
              <img
                className="prize-pic"
                src="img/images/superhero/suphero-761/x2/avatar/761sh-ava-1.jpg"
                loading="lazy"
              />
              <div className="fortuna-check-num res-amount">4.53sD15</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="color-btn"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      >
        <div className="color-btn-text">закрыть</div>
      </div>
    </>
  );
}
