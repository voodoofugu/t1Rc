import { memo } from "react";

export default memo(function WpckEnd() {
  return (
    <>
      {/* <div className="title">congratulations!</div> */}
      <div className="content-all-box">
        <div className="yougot">you got Lovelace pack</div>
        <div className="yougot-box-all">
          <div className="yougot-box">
            <div className="prize-name-box">new hero</div>
            <div className="girl-box">
              <img
                className="girl-prize"
                src="img/images/hero-all/tithero-335/x1/tithero-335-1.jpg"
                loading="lazy"
              />
            </div>
          </div>
          <div className="yougot-box">
            <div className="prize-name-box">diamonds</div>
            <div className="prize-box-gems">
              <div className="prize-item">
                <img
                  className="prize-pic"
                  src="img/diamond5.png"
                  loading="lazy"
                />
              </div>
              <div className="prize-text">100</div>
            </div>
            <div className="item-box">
              <img src="img/ic-abil-gold.png" loading="lazy" />
              <div className="rate gold">+500%</div>
            </div>
          </div>
        </div>
        <div className="ok-all-box">
          <div className="ok-all-btn">
            <div className="btn-text1">ок</div>
          </div>
        </div>
      </div>
    </>
  );
});
