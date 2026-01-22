import React, { memo } from "react";
import nexus from "nexus";

export default memo(function LoseBoss() {
  const popupState = nexus.use("popupState");

  return (
    <>
      <div className="color-box"></div>
      <div className="lb-girl"></div>
      <div className="lb-content-box">
        <div className="lb-text-box">
          <div className="lb-text">
            Ты не смог победить босса. Усиль своих героинь и попробуй снова.
            Используй эту кнопку для возвращения к боссу.
          </div>
        </div>
        <div className="lb-pic">
          <div className="boss-back-box">
            <div className="btn-simple-gold btn-get">
              <div className="boss-txt">назад к боссу</div>
            </div>
          </div>
        </div>
        <div className="lb-checkbox-box">
          <div className="lb-checkbox"></div>
          <div className="lb-checkbox-text">
            Не показывать это сообщение снова
          </div>
        </div>
        <div className="lbclose-btn">
          <div
            className="btn-text"
            onClick={() => nexus.acts.handlePopup({ type: "close" })}
          >
            закрыть
          </div>
        </div>
      </div>
    </>
  );
});
