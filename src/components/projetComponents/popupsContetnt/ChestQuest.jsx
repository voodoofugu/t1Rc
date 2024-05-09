import { memo } from "react";

export default memo(function ChestQuest() {
  return (
    <>
      {/* <div className="title">задание: сундук</div> */}
      <div className="qhero-box"></div>
      <div className="qhero-ballon-box">
        <div className="qhero-ballon-text">
          Здравствуйте! Найдите ключи, убив боссов на каждом из 10 уровней, и
          получите эти сундуки. Но поторопитесь, у меня осталось мало времени.
        </div>
      </div>
      <div className="qsun-all-box">
        <div className="qsun-box">
          <div className="chest-box-all">
            <div className="chest-box">
              <img src="img/sh-icon-chest-128.png" loading="lazy" />
            </div>
          </div>
          <div className="sh2-5">5</div>
          <div className="btn-buy green disabled">
            <div className="price keys">5</div>
            <div className="txt">открыть</div>
          </div>
          <div className="end-banner">
            <p className="txt">Куплено</p>
          </div>
        </div>
        <div className="qsun-box">
          <div className="chest-box-all">
            <div className="chest-box">
              <img src="img/sh-icon-chest-128.png" loading="lazy" />
            </div>
          </div>
          <div className="sh2-5">5</div>
          <div className="btn-buy green disabled">
            <div className="price keys">10</div>
            <div className="txt">открыть</div>
          </div>
          <div className="end-banner">
            <p className="txt">Куплено</p>
          </div>
        </div>
        <div className="qsun-box">
          <div className="chest-box-all">
            <div className="chest-box">
              <img src="img/sh-icon-chest-128.png" loading="lazy" />
            </div>
          </div>
          <div className="sh2-5">5</div>
          <div className="btn-buy green disabled">
            <div className="price keys">15</div>
            <div className="txt">открыть</div>
          </div>
          <div className="end-banner">
            <p className="txt">Куплено</p>
          </div>
        </div>
      </div>
      <div className="uhave-box">
        <div className="uhave-text">у вас есть</div>
        <div className="uhave-count">0</div>
        <div className="keys-icon"></div>
      </div>
      <div className="uhave-prg-box">
        <div className="prg-keys-box">
          <div className="prg-keys">
            <div
              className="prg-all"
              style={{
                width: "0%",
              }}
            ></div>
          </div>
          <div className="keys-num">0/5</div>
          <div className="keys-pic"></div>
        </div>
      </div>
      <div className="best-bigtimer-box">
        <div className="best-off">осталось</div>
        <div className="best-timer">21:32:58</div>
      </div>
    </>
  );
});
