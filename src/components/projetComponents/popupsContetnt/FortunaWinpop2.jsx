import { memo } from "react";

export default memo(function FortunaWinpop2() {
  return (
    <>
      {/* <div className="title">Congratulations</div> */}
      {/* <div className="color-box"></div> */}
      <div className="winner-box">
        <div className="fortuna-wheel b1">
          <div>
            <div className="fortuna-prize">
              <img className="prize-pic" src="img/gold.png" loading="lazy" />
              <div className="fortuna-check-num res-amount">4.53sD15</div>
            </div>
          </div>
        </div>
      </div>
      <div className="color-btn">
        <div className="color-btn-text">закрыть</div>
      </div>
    </>
  );
});
