import React from "react";

export default function AllTowerBox({ setFight, hole }) {
  return (
    <div className="all-tower-box">
      <div className="all-tower-bg"></div>
      <div className="all-tower-scroll nextwall">
        <div className="tower-wall a1 completed">
          <div className="tower-lock-bg"></div>
          <div className="tower-lock"></div>
          <div className="color-btn orange">
            <div className="color-btn-text">go</div>
          </div>
          <div>
            <div className="tower-chest-box">
              <div className="tower-chest"></div>
            </div>
          </div>
          <div className="tower-completed"></div>
          <div className="tower-counter">1</div>
        </div>
        <div className="tower-wall a2 ">
          <div className="tower-lock-bg"></div>
          <div className="tower-lock"></div>
          <div
            className="color-btn"
            onClick={() => {
              setFight(true);
            }}
          >
            {hole ? (
              <div className="color-btn-text">
                go
                <div className="icn"></div>
                123
              </div>
            ) : (
              <div className="color-btn-text">go</div>
            )}
          </div>
          <div>
            <div className="tower-chest-box">
              <div className="tower-chest"></div>
            </div>
          </div>
          <div className="tower-completed"></div>
          <div className="tower-counter">2</div>
          {hole && (
            <div className="extraInf">
              <img src="img/hole/holeKay.png" loading="lazy" />
              x5
            </div>
          )}
        </div>
        <div className="tower-wall a3 lock">
          <div className="tower-lock-bg"></div>
          <div className="tower-lock"></div>
          <div className="color-btn orange">
            <div className="color-btn-text">go</div>
          </div>
          <div>
            <div className="tower-chest-box">
              <div className="tower-chest"></div>
            </div>
          </div>
          <div className="tower-completed"></div>
          <div className="tower-counter">3</div>
        </div>
        <div className="tower-wall a4 lock">
          <div className="tower-lock-bg"></div>
          <div className="tower-lock"></div>
          <div className="color-btn orange">
            <div className="color-btn-text">go</div>
          </div>
          <div>
            <div className="tower-chest-box">
              <div className="tower-chest"></div>
            </div>
          </div>
          <div className="tower-completed"></div>
          <div className="tower-counter">4</div>
        </div>
        <div className="tower-wall a5 lock chest">
          <div className="tower-lock-bg"></div>
          <div className="tower-lock"></div>
          <div className="color-btn orange">
            <div className="color-btn-text">go</div>
          </div>
          <div>
            <div className="tower-chest-box">
              <div className="tower-chest"></div>
            </div>
          </div>
          <div className="tower-completed"></div>
          <div className="tower-counter">5</div>
        </div>
        <div className="tower-wall a6 lock">
          <div className="tower-lock-bg"></div>
          <div className="tower-lock"></div>
          <div className="color-btn orange">
            <div className="color-btn-text">go</div>
          </div>
          <div>
            <div className="tower-chest-box">
              <div className="tower-chest"></div>
            </div>
          </div>
          <div className="tower-completed"></div>
          <div className="tower-counter">6</div>
        </div>
      </div>
    </div>
  );
}
