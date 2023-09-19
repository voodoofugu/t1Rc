import React from "react";
// import v2ScreenValentineCauldron from "../styles/v2-screen-valentine-cauldron.scss";

const V2MainScreen16ValentineCauldronPopComponent = () => {
  return (
    <>
      <div className="main world1">
        <div className="main-bg"></div>
        <div className="popup-layer" style={{ display: "block" }}>
          <div className="screen-blend-55" style={{ display: "block" }}></div>
          <div
            className="m-popup valentine-cauldron"
            style={{ display: "block" }}
          >
            <div className="title">valentine's cauldron</div>
            <div className="color-box"></div>
            <div className="valentine-cauldron-left-box-all">
              <div className="valentine-cauldron-items-label">
                Select an item and place it in the slot
              </div>
              <div className="valentine-cauldron-items">
                <div className="valentine-cauldron-item">
                  <div className="valentine-cauldron-res-pic">
                    <img src="img/ms-stone-blue.png" loading="lazy" />
                  </div>
                  <div className="valentine-cauldron-res-count">27/30</div>
                </div>
                <div className="valentine-cauldron-item">
                  <div className="valentine-cauldron-res-pic">
                    <img src="img/ms-stone-blue.png" loading="lazy" />
                  </div>
                  <div className="valentine-cauldron-res-count">27/30</div>
                </div>
                <div className="valentine-cauldron-item">
                  <div className="valentine-cauldron-res-pic">
                    <img src="img/ms-stone-blue.png" loading="lazy" />
                  </div>
                  <div className="valentine-cauldron-res-count">27/30</div>
                </div>
                <div className="valentine-cauldron-item">
                  <div className="valentine-cauldron-res-pic">
                    <img src="img/ms-stone-blue.png" loading="lazy" />
                  </div>
                  <div className="valentine-cauldron-res-count">27/30</div>
                </div>
                <div className="valentine-cauldron-item">
                  <div className="valentine-cauldron-res-pic">
                    <img src="img/ms-stone-blue.png" loading="lazy" />
                  </div>
                  <div className="valentine-cauldron-res-count">27/30</div>
                </div>
                <div className="valentine-cauldron-item">
                  <div className="valentine-cauldron-res-pic">
                    <img src="img/ms-stone-blue.png" loading="lazy" />
                  </div>
                  <div className="valentine-cauldron-res-count">27/30</div>
                </div>
                <div className="valentine-cauldron-item">
                  <div className="valentine-cauldron-res-pic">
                    <img src="img/ms-stone-blue.png" loading="lazy" />
                  </div>
                  <div className="valentine-cauldron-res-count">27/30</div>
                </div>
              </div>
            </div>
            <div className="valentine-cauldron-right-box-all">
              <div className="valentine-cauldron-boiler-all">
                <div className="valentine-cauldron-item first-item">
                  <div className="valentine-cauldron-res-pic">
                    {/*                                <img  src="img/pse-epic1.png"/>*/}
                  </div>
                  {/*                            <div className="valentine-cauldron-res-count">27/30</div>*/}
                </div>
                <div className="valentine-cauldron-item second-item">
                  <div className="valentine-cauldron-res-pic">
                    {/*                                <img src="img/pse-uncommon1.png"/>*/}
                  </div>
                  {/*                            <div className="valentine-cauldron-res-count">27/30</div>*/}
                </div>
                <div className="color-btn blue">
                  <div className="color-btn-text">Brew a potion</div>
                </div>
              </div>
              <div className="valentine-cauldron-girl-right-box">
                {/*                        <div className="valentine-cauldron-girl-right-box-bg">*/}
                {/*                            <img src="img/../images/back/01-Forest-1.jpg"/>*/}
                {/*                        </div>*/}
                <img src="img/val2021_0.jpg" loading="lazy" />
              </div>
            </div>
            <div className="valentine-cauldron-buttons-box-all">
              <div className="color-btn">
                <div className="color-btn-text">BTN 1</div>
              </div>
              <div className="color-btn">
                <div className="color-btn-text">BTN 2</div>
              </div>
            </div>
            <div className="btn-close-x"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(V2MainScreen16ValentineCauldronPopComponent);
