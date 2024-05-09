import React, { memo } from "react";

function Sh2Openchest1() {
  return (
    <>
      <div className="sh2-openchest-cont-box">
        <div className="sh2-uhave-box">
          <div className="sh2-uhave-title">you have:</div>
          <div className="sh2-uhave-text">
            1<span className="f-sh2-chest"></span>
          </div>
          <div className="sh2-uhave-text">
            1<span className="f-black-butil"></span>
          </div>
        </div>
        <div className="sh2-chest-box-all">
          <div className="sh2-chest-box">
            <div className="sh2-chest-box-name">1 chest</div>
            <div className="sh2-chest-box-prize">
              <img
                className="winner-prize"
                src="img/sh-icon-chest-128.png"
                loading="lazy"
              />
            </div>
            <div className="color-btn gold">
              <div className="color-btn-text">open 1</div>
            </div>
          </div>
          <div className="sh2-chest-box">
            <div className="sh2-chest-box-name">5 chest</div>
            <div className="sh2-chest-box-prize">
              <img
                className="winner-prize"
                src="img/sh-icon-chest-128.png"
                loading="lazy"
              />
            </div>
            <div className="color-btn green">
              <div className="color-btn-text">
                <div>
                  buy
                  <span className="ff-diamond"></span>
                  13
                </div>
              </div>
            </div>
          </div>
          <div className="sh2-chest-box">
            <div className="sh2-chest-box-name">100 chest</div>
            <div className="sh2-chest-box-prize">
              <img
                className="winner-prize"
                src="img/sh-icon-chest-dark.png"
                loading="lazy"
              />
            </div>
            <div className="color-btn green">
              <div className="color-btn-text">
                <div>
                  buy
                  <span className="ff-oil"></span>
                  200
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="color-btn">
          <div className="color-btn-text">обратно</div>
        </div>
      </div>
      <div className="winner-girl"></div>
    </>
  );
}

function Sh2Openchest2({ dark }) {
  return (
    <>
      <div className="sh2-openchest-cont-box">
        <div className="sh2-uhave-box">
          <div className="sh2-uhave-title">you have:</div>
          <div className="sh2-uhave-text">
            1
            <span className={`${dark ? "f-sh2d-chest" : "f-sh2-chest"}`}></span>
          </div>
          <div className="sh2-uhave-text">
            1<span className={`${dark ? "f-black-butil" : "f-diamond"}`}></span>
          </div>
        </div>
        <div className="sh2-chest-box-all">
          <div className="sh2-chest-box">
            <div className="sh2-chest-box-name">1 chest</div>
            <div className="sh2-chest-box-prize">
              <img
                className="winner-prize"
                src={`${dark ? "img/sh-icon-chest-dark.png" : "img/sh-icon-chest-128.png"}`}
                loading="lazy"
              />
            </div>
            <div className="color-btn gold">
              <div className="color-btn-text">open 1</div>
            </div>
          </div>
          <div className="sh2-chest-box">
            <div className="sh2-chest-box-name">5 chest</div>
            <div className="sh2-chest-box-prize">
              <img
                className="winner-prize"
                src={`${dark ? "img/sh-icon-chest-dark.png" : "img/sh-icon-chest-128.png"}`}
                loading="lazy"
              />
            </div>
            <div className="color-btn green">
              <div className="color-btn-text">
                <div>
                  buy
                  <span className={`${dark ? "ff-oil" : "ff-diamond"}`}></span>
                  13
                </div>
              </div>
            </div>
          </div>
          <div className="sh2-chest-box">
            <div className="sh2-chest-box-name">5 chest</div>
            <div className="sh2-chest-box-prize">
              <img
                className="winner-prize"
                src={`${dark ? "img/sh-icon-chest-dark.png" : "img/sh-icon-chest-128.png"}`}
                loading="lazy"
              />
            </div>
            <div className="color-btn green">
              <div className="color-btn-text">
                <div>
                  buy
                  <span className={`${dark ? "ff-oil" : "ff-diamond"}`}></span>
                  13
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="color-btn">
          <div className="color-btn-text">обратно</div>
        </div>
      </div>
      <div className="winner-girl"></div>
    </>
  );
}

function Sh2Openchest3() {
  return (
    <>
      <div className="sh2-openchest-cont-box">
        <div className="sh2-uhave-box">
          <div className="sh2-uhave-text">
            you have 5<span className="f-sh2d-chest"></span>
          </div>
          <div className="sh2-uhave-text">
            209K
            <span className="f-black-butil"></span>
          </div>
        </div>
        <div className="sh2-chest-box-all-girl undefined">
          <div className="sh2-chest-box-all">
            <div className="sh2-chest-box-girl">
              <img
                className="sh2-icon-girl"
                src="img/images/superhero/suphero-702/x2/avatar/702sh-ava-1.jpg"
                loading="lazy"
              />
            </div>
            <div className="sh2-icon-forgirl">
              <img src="img/cur2-druid.png" loading="lazy" />
            </div>
            <div className="sh2-icon">
              <img src="img/cur-c.png" loading="lazy" />
            </div>
            <div className="sh2-prgbar-all undefined">
              <div
                className="sh2-prgbar"
                style={{
                  width: "50%",
                }}
              ></div>
              <div className="sh2-prgbar-text">5/10</div>
            </div>
            <div className="sh2-5">5</div>
          </div>
          <div className="sh2-chest-box-all heroGirl">
            <div className="sh2-chest-box-girl">
              <img
                className="sh2-icon-girl"
                src="img/images/hero-all/tithero-5010/x1/ava/tithero-5010-1-ava.jpg"
                style={{
                  width: "130px",
                }}
                loading="lazy"
              />
              <div className="hero-pieces-icon">
                <img
                  className=""
                  src="img/powerHero-pieces-ic.png"
                  style={{
                    position: "absolute",
                    width: "70px",
                    height: "70px",
                    left: "3px",
                    top: "70px",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="sh2-prgbar-all undefined">
              <div
                className="sh2-prgbar"
                style={{
                  width: "50%",
                }}
              ></div>
              <div className="sh2-prgbar-text">5/10</div>
            </div>
          </div>
          <div className="sh2-chest-box-all">
            <div className="sh2-chest-box-girl">
              <img
                className="sh2-icon-girl"
                src="img/images/superhero/suphero-420/x2/avatar/420sh-ava-1.jpg"
                loading="lazy"
              />
            </div>
            <div className="sh2-icon-forgirl">
              <img src="img/cur2-barbarian.png" loading="lazy" />
            </div>
            <div className="sh2-icon">
              <img src="img/cur-e.png" loading="lazy" />
            </div>
            <div className="sh2-prgbar-all undefined">
              <div
                className="sh2-prgbar"
                style={{
                  width: "50%",
                }}
              ></div>
              <div className="sh2-prgbar-text">5/10</div>
            </div>
            <div className="sh2-5">5</div>
          </div>
          <div className="sh2-chest-box-all heroAngel">
            <div className="sh2-chest-box-girl">
              <img
                className="sh2-icon-girl"
                src="img/images/goddess/goddess-2/x2/ava/goddess-ava-1.jpg "
                loading="lazy"
              />
              <div className="sh2-5">1</div>
            </div>
            <div className="sh2-prgbar-all undefined">
              <div
                className="sh2-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="sh2-prgbar-text">1</div>
            </div>
          </div>
          <div className="sh2-chest-box-all">
            <div className="sh2-chest-box-girl">
              <img
                className="sh2-icon-girl"
                src="img/images/hero-all/tithero-155/x1/ava/tithero-155-1-ava.jpg"
                style={{
                  width: "130px",
                }}
                loading="lazy"
              />
              <div className="hero-pieces-icon">
                <img
                  className=""
                  src="img/powerHero-pieces-ic.png"
                  style={{
                    position: "absolute",
                    width: "70px",
                    height: "70px",
                    left: "3px",
                    top: "70px",
                  }}
                  loading="lazy"
                />
              </div>
              <div
                className="sh2-5"
                style={{
                  left: "unset",
                  right: "5px",
                  top: "unset",
                  bottom: "5px",
                }}
              >
                10
              </div>
            </div>
          </div>
          <div className="sh2-chest-box-all">
            <div className="sh2-chest-box-girl">
              <img
                className="sh2-icon-girl"
                src="img/images/superhero/suphero-218/x2/avatar/218sh-ava-1.jpg"
                loading="lazy"
              />
            </div>
            <div className="sh2-icon-forgirl">
              <img src="img/cur2-quitar.png" loading="lazy" />
            </div>
            <div className="sh2-icon">
              <img src="img/cur-u.png" loading="lazy" />
            </div>
            <div className="sh2-prgbar-all undefined">
              <div
                className="sh2-prgbar"
                style={{
                  width: "50%",
                }}
              ></div>
              <div className="sh2-prgbar-text">5/10</div>
            </div>
            <div className="sh2-5">5</div>
          </div>
          <div className="sh2-chest-box-all">
            <div className="sh2-chest-box-girl">
              <img
                className="sh2-icon-girl"
                src="img/images/hero-all/tithero-5005/x1/ava/tithero-5005-1-ava.jpg"
                style={{
                  width: "130px",
                }}
                loading="lazy"
              />
              <div className="hero-pieces-icon">
                <img
                  className=""
                  src="img/powerHero-pieces-ic.png"
                  style={{
                    position: "absolute",
                    width: "70px",
                    height: "70px",
                    left: "3px",
                    top: "70px",
                  }}
                  loading="lazy"
                />
              </div>
              <div
                className="sh2-5"
                style={{
                  left: "unset",
                  right: "5px",
                  top: "unset",
                  bottom: "5px",
                }}
              >
                10
              </div>
            </div>
          </div>
          <div className="sh2-chest-box-all">
            <div className="sh2-chest-box-girl">
              <img
                className="sh2-icon-girl"
                src="img/images/superhero/suphero-615/x2/avatar/615sh-ava-1.jpg"
                loading="lazy"
              />
            </div>
            <div className="sh2-icon-forgirl">
              <img src="img/cur2-cleric.png" loading="lazy" />
            </div>
            <div className="sh2-icon">
              <img src="img/cur-u.png" loading="lazy" />
            </div>
            <div className="sh2-prgbar-all undefined">
              <div
                className="sh2-prgbar"
                style={{
                  width: "50%",
                }}
              ></div>
              <div className="sh2-prgbar-text">5/10</div>
            </div>
            <div className="sh2-5">5</div>
          </div>
          <div className="sh2-chest-box-all">
            <div className="sh2-chest-box-girl">
              <img
                className="sh2-icon-girl"
                src="img/images/hero-all/tithero-156/x1/ava/tithero-156-1-ava.jpg"
                style={{
                  width: "130px",
                }}
                loading="lazy"
              />
              <div className="hero-pieces-icon">
                <img
                  className=""
                  src="img/powerHero-pieces-ic.png"
                  style={{
                    position: "absolute",
                    width: "70px",
                    height: "70px",
                    left: "3px",
                    top: "70px",
                  }}
                  loading="lazy"
                />
              </div>
              <div
                className="sh2-5"
                style={{
                  left: "unset",
                  right: "5px",
                  top: "unset",
                  bottom: "5px",
                }}
              >
                10
              </div>
            </div>
          </div>
          <div className="sh2-chest-box-all">
            <div className="sh2-chest-box-girl">
              <img
                className="sh2-icon-girl"
                src="img/images/superhero/suphero-402/x2/avatar/402sh-ava-1.jpg"
                loading="lazy"
              />
            </div>
            <div className="sh2-icon-forgirl">
              <img src="img/cur2-cleric.png" loading="lazy" />
            </div>
            <div className="sh2-icon">
              <img src="img/cur-c.png" loading="lazy" />
            </div>
            <div className="sh2-prgbar-all undefined">
              <div
                className="sh2-prgbar"
                style={{
                  width: "50%",
                }}
              ></div>
              <div className="sh2-prgbar-text">5/10</div>
            </div>
            <div className="sh2-5">5</div>
          </div>
          <div className="sh2-chest-box-all">
            <div className="sh2-chest-box-girl">
              <img
                className="sh2-icon-girl"
                src="img/images/hero-all/tithero-5006/x1/ava/tithero-5006-1-ava.jpg"
                style={{
                  width: "130px",
                }}
                loading="lazy"
              />
              <div className="hero-pieces-icon">
                <img
                  className=""
                  src="img/powerHero-pieces-ic.png"
                  style={{
                    position: "absolute",
                    width: "70px",
                    height: "70px",
                    left: "3px",
                    top: "70px",
                  }}
                  loading="lazy"
                />
              </div>
              <div
                className="sh2-5"
                style={{
                  left: "unset",
                  right: "5px",
                  top: "unset",
                  bottom: "5px",
                }}
              >
                10
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sh2-bnt-box-all">
        <div className="color-btn green five">
          <div className="color-btn-text five">open 5</div>
        </div>
        <div className="color-btn">
          <div className="color-btn-text">close</div>
        </div>
      </div>
    </>
  );
}

export default memo(function Sh2Openchest({ dark, shClass }) {
  return (
    <>
      {shClass === "sh1" ? (
        <Sh2Openchest1 />
      ) : shClass === "sh2" ? (
        <Sh2Openchest2 dark={dark} />
      ) : shClass === "sh3" ? (
        <Sh2Openchest3 />
      ) : (
        ""
      )}
    </>
  );
});
