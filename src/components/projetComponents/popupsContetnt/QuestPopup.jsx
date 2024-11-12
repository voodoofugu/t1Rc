import React, { memo } from "react";
import { nexusDispatch, useNexus } from "nexus-state";

export default memo(function QuestPopup({ done }) {
  const popupState = useNexus("popupState");

  return (
    <>
      <div className="balloon">
        <div>
          <div className="title">Выполните задание и получите награду!</div>
          <p className="text">
            Raise the attribute strength to 2 in Master House
          </p>
          <div className="progress">
            <div className="num">0/2</div>
            <div className="prg-box">
              <div
                className="prg"
                style={{
                  width: "0%",
                }}
              ></div>
            </div>
          </div>
          <div className="rewards">
            <p className="t">Награда:</p>
            <p className="icon">
              <img
                className="img"
                src="img/ms-stone-orange.png"
                loading="lazy"
              />
            </p>
            <p className="n">10</p>
          </div>
        </div>
        <div className="btn-box">
          {!done ? (
            <div
              className="btn-simple-silver btn-close"
              onClick={() => popupState.popClose(nexusDispatch)}
            >
              <div className="txt">Закрыть</div>
            </div>
          ) : (
            <div
              className="btn-simple-gold btn-get"
              onClick={() => popupState.popClose(nexusDispatch)}
            >
              <div className="txt">Получить награду!</div>
            </div>
          )}
        </div>
      </div>
      <div className="person"></div>
    </>
  );
});
