import { memo } from "react";

export default memo(function Fullcoll() {
  return (
    <>
      {/* <div className="title">Поздравляем!</div> */}
      {/* <div className="color-box"></div> */}
      <div className="rating-girl">
        <img
          src="img/images/superhero/suphero-254/x1/254sh-2.jpg"
          loading="lazy"
        />
      </div>
      <div className="fullcollright-box">
        <div className="fullcolltop-text-box">
          Hooray! You've collected full jewerly set!
        </div>
        <div className="fullcolltop-video-box video-box">
          <div className="full-video">
            <img
              src="img/rating-video-thumbnails/big/Sc-4_Full.jpg"
              loading="lazy"
            />
            <div className="rating-video-play"></div>
            <div className="bdiz"></div>
            <div className="rating-lock"></div>
          </div>
        </div>
        <div className="fullcolltop-bonus-text">Бонус за полный набор</div>
        <div className="fullcolltop-bonus-all bn-price">DPS +500%</div>
        <div className="color-btn">
          <div className="color-btn-text">закрыть</div>
        </div>
      </div>
    </>
  );
});
