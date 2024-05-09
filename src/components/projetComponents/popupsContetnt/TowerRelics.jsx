import React, { useState } from "react";

export default function TowerRelics({ hole }) {
  const [className, setclassName] = useState("");
  return (
    <>
      <div className="color-box"></div>
      <div className="cardreward-box-all choose">
        <div className="cardreward-box gold collected">
          <div className="card-box-back">
            <div className="card-vis">?</div>
            <div className="reward-pic">
              <img src="img/skill-icons/skill-icon01x2.png" loading="lazy" />
            </div>
            <div className="tower-relics-text-box">
              <div className="tower-relics-text">
                Lyca's normal attacks and "rapid arrows" ability are able to hit
                3 enemies at once
              </div>
            </div>
            <div className="rb-card-light"></div>
          </div>
          <div className="color-btn purple">
            <div className="color-btn-text">collected</div>
          </div>
        </div>
        <div
          className={`cardreward-box silver ${className}`}
          onClick={() => setclassName("collected")}
        >
          <div className="card-box-back">
            <div className="card-vis">?</div>
            <div className="reward-pic">
              <img src="img/skill-icons/skill-icon01x2.png" loading="lazy" />
            </div>
            <div className="tower-relics-text-box">
              <div className="tower-relics-text">
                Lyca's normal attacks and "rapid arrows" ability are able to hit
                3 enemies at once
              </div>
            </div>
            <div className="rb-card-light"></div>
          </div>
          <div className="color-btn purple">
            <div className="color-btn-text">
              buy this
              <span className={hole ? "holeGem" : "f-diamond "}></span>
              99
            </div>
          </div>
        </div>
        <div className="cardreward-box bronze">
          <div className="card-box-back">
            <div className="card-vis">?</div>
            <div className="reward-pic">
              <img src="img/skill-icons/skill-icon01x2.png" loading="lazy" />
            </div>
            <div className="tower-relics-text-box">
              <div className="tower-relics-text">
                Lyca's normal attacks and "rapid arrows" ability are able to hit
                3 enemies at once
              </div>
            </div>
            <div className="rb-card-light"></div>
          </div>
          <div className="color-btn purple">
            <div className="color-btn-text">
              buy this
              <span className={hole ? "holeGem" : "f-diamond "}></span>
              99
            </div>
          </div>
        </div>
      </div>
      <div className="cardreward-text-box">
        <div className="cardreward-text">You can buy additional cards</div>
      </div>
    </>
  );
}
