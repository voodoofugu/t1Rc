import React, { memo } from "react";
import { nexusDispatch, useNexus } from "nexus-state";

export default memo(function RatingpopBox() {
  const popupState = useNexus("popupState");

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
            onClick={() =>
              nexusDispatch({
                type: "handlePopup",
                payload: { type: "close" },
              })
            }
          >
            ок
          </div>
        </div>
      </div>
    </>
  );
});
