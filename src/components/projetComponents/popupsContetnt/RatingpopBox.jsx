import React, { memo } from "react";
import nexus from "nexus";

export default memo(function RatingpopBox() {
  const popupState = nexus.use("popupState");

  return (
    <>
      <div className="rating-girl"></div>
      <div className="ratingballon-box">
        <div className="ballon-check"></div>
        <div className="ratingballon-text">
          Ты следовал по советам и за это я даю тебе украшение. Стань
          победителем и получи еще!
        </div>
        <div className="rating-price-box">
          <img
            className="rating-price"
            src="img/rating-ring-red@1x.png"
            loading="lazy"
          />
        </div>
        <div className="color-btn">
          <div
            className="color-btn-text"
            onClick={() => nexus.acts.handlePopup({ type: "close" })}
          >
            ок
          </div>
        </div>
      </div>
    </>
  );
});
