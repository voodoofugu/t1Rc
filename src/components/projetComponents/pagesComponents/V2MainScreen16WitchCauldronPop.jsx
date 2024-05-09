import React from "react";

export const cssFiles = ["v2-screen-witch-cauldron"];

export default function V2MainScreen16WitchCauldronPop() {
  return (
    <div className="main world1">
      <div className="main-bg"></div>
      <div className="popup-layer" style={{ display: "block" }}>
        <div className="screen-blend-55" style={{ display: "block" }}></div>
        <div className="m-popup witch-cauldron" style={{ display: "block" }}>
          <div className="title">witch's cauldron</div>
          <div className="color-box"></div>
          <div className="witch-cauldron-left-box-all">
            <div className="witch-cauldron-items-label">
              Select an item and place it in the slot
            </div>
            <div className="witch-cauldron-items">
              <div className="witch-cauldron-item">
                <div className="witch-cauldron-res-pic">
                  <img src="img/ms-stone-blue.png" loading="lazy" />
                </div>
                <div className="witch-cauldron-res-count">27/30</div>
              </div>
              <div className="witch-cauldron-item">
                <div className="witch-cauldron-res-pic">
                  <img src="img/ms-stone-blue.png" loading="lazy" />
                </div>
                <div className="witch-cauldron-res-count">27/30</div>
              </div>
              <div className="witch-cauldron-item">
                <div className="witch-cauldron-res-pic">
                  <img src="img/ms-stone-blue.png" loading="lazy" />
                </div>
                <div className="witch-cauldron-res-count">27/30</div>
              </div>
              <div className="witch-cauldron-item">
                <div className="witch-cauldron-res-pic">
                  <img src="img/ms-stone-blue.png" loading="lazy" />
                </div>
                <div className="witch-cauldron-res-count">27/30</div>
              </div>
              <div className="witch-cauldron-item">
                <div className="witch-cauldron-res-pic">
                  <img src="img/ms-stone-blue.png" loading="lazy" />
                </div>
                <div className="witch-cauldron-res-count">27/30</div>
              </div>
              <div className="witch-cauldron-item">
                <div className="witch-cauldron-res-pic">
                  <img src="img/ms-stone-blue.png" loading="lazy" />
                </div>
                <div className="witch-cauldron-res-count">27/30</div>
              </div>
              <div className="witch-cauldron-item">
                <div className="witch-cauldron-res-pic">
                  <img src="img/ms-stone-blue.png" loading="lazy" />
                </div>
                <div className="witch-cauldron-res-count">27/30</div>
              </div>
            </div>
          </div>
          <div className="witch-cauldron-right-box-all">
            <div className="witch-cauldron-boiler-all">
              <div className="witch-cauldron-item first-item">
                <div className="witch-cauldron-res-pic">
                  {/*                                <img  src="img/pse-epic1.png"/>*/}
                </div>
                {/*                            <div className="witch-cauldron-res-count">27/30</div>*/}
              </div>
              <div className="witch-cauldron-item second-item">
                <div className="witch-cauldron-res-pic">
                  {/*                                <img src="img/pse-uncommon1.png"/>*/}
                </div>
                {/*                            <div className="witch-cauldron-res-count">27/30</div>*/}
              </div>
              <div className="color-btn blue">
                <div className="color-btn-text">Brew a potion</div>
              </div>
            </div>
            <div className="witch-cauldron-girl-right-box">
              <img src="img/bre-pse1.png" loading="lazy" />
            </div>
          </div>
          <div className="witch-cauldron-buttons-box-all">
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
  );
}
