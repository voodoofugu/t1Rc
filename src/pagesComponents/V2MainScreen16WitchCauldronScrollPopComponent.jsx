import React from "react";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "v2-screen-witch-cauldron-scroll",
];

function V2MainScreen16WitchCauldronScrollPopComponent() {
  return (
    <HelmetForCss cssFiles={cssFiles}>
      <div className="main world1">
        <div className="main-bg"></div>
        <div className="popup-layer" style={{ display: "block" }}>
          <div className="screen-blend-55" style={{ display: "block" }}></div>
          <div
            className="m-popup witch-cauldron-scroll"
            style={{ display: "block" }}
          >
            <div className="title">witch's cauldron</div>
            <div className="color-box"></div>
            <div className="witch-cauldron-scroll-all">
              <div className="witch-cauldron-scroll-scroll">
                <div className="witch-cauldron-scroll-card">
                  <div className="witch-cauldron-scroll-card-img">
                    <img src="img/232sh-1.jpg" alt="" loading="lazy" />
                  </div>
                  <div className="witch-cauldron-scroll-boiler-all">
                    <div className="witch-cauldron-scroll-item first-item">
                      <div className="witch-cauldron-scroll-res-pic">
                        <img src="img/pse-epic1.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="witch-cauldron-scroll-item second-item">
                      <div className="witch-cauldron-scroll-res-pic">
                        <img src="img/pse-uncommon1.png" loading="lazy" />
                      </div>
                    </div>
                  </div>
                  <div className="witch-cauldron-scroll-card-label">Master</div>
                </div>
                <div className="witch-cauldron-scroll-card">
                  <div className="witch-cauldron-scroll-card-img">
                    <img src="img/232sh-1.jpg" alt="" loading="lazy" />
                  </div>
                  <div className="witch-cauldron-scroll-boiler-all">
                    <div className="witch-cauldron-scroll-item first-item">
                      <div className="witch-cauldron-scroll-res-pic">
                        <img src="img/pse-epic1.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="witch-cauldron-scroll-item second-item">
                      <div className="witch-cauldron-scroll-res-pic">
                        <img src="img/pse-uncommon1.png" loading="lazy" />
                      </div>
                    </div>
                  </div>
                  <div className="witch-cauldron-scroll-card-label">Master</div>
                </div>
                <div className="witch-cauldron-scroll-card">
                  <div className="witch-cauldron-scroll-card-img">
                    <img src="img/232sh-1.jpg" alt="" loading="lazy" />
                  </div>
                  <div className="witch-cauldron-scroll-boiler-all">
                    <div className="witch-cauldron-scroll-item first-item">
                      <div className="witch-cauldron-scroll-res-pic">
                        <img src="img/pse-epic1.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="witch-cauldron-scroll-item second-item">
                      <div className="witch-cauldron-scroll-res-pic">
                        <img src="img/pse-uncommon1.png" loading="lazy" />
                      </div>
                    </div>
                  </div>
                  <div className="witch-cauldron-scroll-card-label">Master</div>
                </div>
                <div className="witch-cauldron-scroll-card">
                  <div className="witch-cauldron-scroll-card-img">
                    <img src="img/232sh-1.jpg" alt="" loading="lazy" />
                  </div>
                  <div className="witch-cauldron-scroll-boiler-all">
                    <div className="witch-cauldron-scroll-item first-item">
                      <div className="witch-cauldron-scroll-res-pic">
                        <img src="img/pse-epic1.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="witch-cauldron-scroll-item second-item">
                      <div className="witch-cauldron-scroll-res-pic">
                        <img src="img/pse-uncommon1.png" loading="lazy" />
                      </div>
                    </div>
                  </div>
                  <div className="witch-cauldron-scroll-card-label">Master</div>
                </div>
                <div className="witch-cauldron-scroll-card">
                  <div className="witch-cauldron-scroll-card-img">
                    <img src="img/232sh-1.jpg" alt="" loading="lazy" />
                  </div>
                  <div className="witch-cauldron-scroll-boiler-all">
                    <div className="witch-cauldron-scroll-item first-item">
                      <div className="witch-cauldron-scroll-res-pic">
                        <img src="img/pse-epic1.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="witch-cauldron-scroll-item second-item">
                      <div className="witch-cauldron-scroll-res-pic">
                        <img src="img/pse-uncommon1.png" loading="lazy" />
                      </div>
                    </div>
                  </div>
                  <div className="witch-cauldron-scroll-card-label">Master</div>
                </div>
                <div className="witch-cauldron-scroll-card">
                  <div className="witch-cauldron-scroll-card-img">
                    <img src="img/232sh-1.jpg" alt="" loading="lazy" />
                  </div>
                  <div className="witch-cauldron-scroll-boiler-all">
                    <div className="witch-cauldron-scroll-item first-item">
                      <div className="witch-cauldron-scroll-res-pic">
                        <img src="img/pse-epic1.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="witch-cauldron-scroll-item second-item">
                      <div className="witch-cauldron-scroll-res-pic">
                        <img src="img/pse-uncommon1.png" loading="lazy" />
                      </div>
                    </div>
                  </div>
                  <div className="witch-cauldron-scroll-card-label">Master</div>
                </div>
              </div>
            </div>
            <div className="witch-cauldron-scroll-buttons-box-all">
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
    </HelmetForCss>
  );
}

export default React.memo(V2MainScreen16WitchCauldronScrollPopComponent);
