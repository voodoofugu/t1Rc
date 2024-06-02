import React, { memo } from "react";

export default memo(function AngelPopX3() {
  return (
    <>
      <div className="re-pop-bg"></div>
      <div className="content">
        <div className="offer-card-box novice-pack">
          <div className="card-content">
            <div className="card-title">Novice Pack</div>
            <div className="reward-card-box">
              <div className="hero-image-box tithero">
                <div className="hero-image-wrap">
                  <img
                    className="hero"
                    src="img/images/hero-all/tithero-5004/x2/tithero-5004-1.jpg"
                    loading="lazy"
                  />
                </div>
                <div className="hero-name">Izumi Yosei</div>
              </div>
              <div className="hero-image-box suphero">
                <div className="hero-image-wrap">
                  <img
                    className="hero"
                    src="img/images/superhero/suphero-127/x2/127sh-1.jpg"
                    loading="lazy"
                  />
                </div>
                <div className="hero-name">Izumi Yosei</div>
              </div>
            </div>
            <div className="reward-box">
              <div className="reward-piece">
                <img
                  className="reward-img"
                  src="img/v2-res-diamond.png"
                  loading="lazy"
                />
                <div className="reward-value">1000</div>
              </div>
              <div className="reward-piece">
                <img
                  className="reward-img"
                  src="img/v2-res-diamond.png"
                  loading="lazy"
                />
                <div className="reward-value">1000</div>
              </div>
              <div className="reward-piece">
                <img
                  className="reward-img"
                  src="img/v2-res-diamond.png"
                  loading="lazy"
                />
                <div className="reward-value">1000</div>
              </div>
            </div>
            <div className="btn-bay-wrap">
              <div className="color-btn green">
                <div className="color-btn-text">
                  <div className="price-nutaku"></div>
                  49.90$
                  <div className="old-price">
                    <div className="price-nutaku"></div>
                    99.90$
                  </div>
                </div>
              </div>
              <div className="sale-banner">-50%</div>
            </div>
          </div>
        </div>
        <div className="offer-card-box king-pack block">
          <div className="card-content">
            <div className="card-title">King Pack</div>
            <div className="reward-card-box">
              <div className="hero-image-box tithero">
                <div className="hero-image-wrap">
                  <img
                    className="hero"
                    src="img/images/hero-all/tithero-5004/x2/tithero-5004-1.jpg"
                    loading="lazy"
                  />
                </div>
                <div className="hero-name">
                  <div className="unique-title">Уникальный герой</div>
                  Izumi Yosei
                </div>
              </div>
              <div className="hero-image-box suphero">
                <div className="hero-image-wrap">
                  <img
                    className="hero"
                    src="img/images/superhero/suphero-127/x2/127sh-1.jpg"
                    loading="lazy"
                  />
                </div>
                <div className="hero-name">
                  <div className="unique-title">Уникальный герой</div>
                  Izumi Yosei
                </div>
              </div>
            </div>
            <div className="reward-box">
              <div className="reward-piece">
                <img
                  className="reward-img"
                  src="img/v2-res-diamond.png"
                  loading="lazy"
                />
                <div className="reward-value">1000</div>
              </div>
              <div className="reward-piece">
                <img
                  className="reward-img"
                  src="img/v2-res-diamond.png"
                  loading="lazy"
                />
                <div className="reward-value">1000</div>
              </div>
              <div className="reward-piece">
                <img
                  className="reward-img"
                  src="img/v2-res-diamond.png"
                  loading="lazy"
                />
                <div className="reward-value">1000</div>
              </div>
              <div className="reward-piece">
                <img
                  className="reward-img"
                  src="img/v2-res-diamond.png"
                  loading="lazy"
                />
                <div className="reward-value">1000</div>
              </div>
            </div>
            <div className="btn-bay-wrap">
              <div className="color-btn green disabled">
                <div className="color-btn-text">
                  49.90$
                  <div className="old-price">99.90$</div>
                </div>
              </div>
              <div className="sale-banner">-50%</div>
            </div>
            <div className="block-layer">
              <div className="block-layer-text">
                Купи NOVICE PACK и Разблокируй KING PACK со Скидкой!
              </div>
            </div>
          </div>
        </div>
        <div className="offer-card-box angel-pack block">
          <div className="card-content">
            <div className="card-title">Hild</div>
            <div className="reward-card-box">
              <div className="angel-image-box">
                <div className="angel-image-wrap">
                  <img
                    className="angel"
                    src="img/images/goddess/goddess-1/x2/goddess-1.jpg"
                    loading="lazy"
                  />
                  <div className="info-box">
                    <div className="progress-bar-wrap-box">
                      <div className="angel-card-progress-bar-wrap">
                        <div className="progress">
                          <div
                            className="fulfilled"
                            style={{
                              width: "50%",
                            }}
                          ></div>
                        </div>
                        <div className="value">
                          <div className="from">500</div>
                          <div className="to">1000</div>
                          <div className="bonus">+700</div>
                        </div>
                      </div>
                      <div className="girl-bonus-box">
                        <div className="girl-bonus-pic">
                          <img
                            src="img/images/goddess/goddess-1/x2/ava/goddess-ava-1.jpg "
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-bay-wrap">
              <div className="color-btn green disabled">
                <div className="color-btn-text">
                  49.90$
                  <div className="old-price">99.90$</div>
                </div>
              </div>
              <div className="sale-banner">-50%</div>
            </div>
            <div className="block-layer">
              <div className="block-layer-text">
                Купи NOVICE PACK и Разблокируй KING PACK со Скидкой!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
