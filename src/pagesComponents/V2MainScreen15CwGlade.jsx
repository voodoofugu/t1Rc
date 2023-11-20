import React from "react";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "v2-screen-cw-glade",
];

export default function V2MainScreen15CwGladeComponent() {
  return (
    <HelmetForCss cssFiles={cssFiles}>
      <div className="main world1">
        <div className="cw-content">
          <div className="cw-bg">
            <div className="cw-glade-info raidboss block">
              <div className="cw-glade-name">clan raids</div>
            </div>
            <div className="cw-glade-raidboss"></div>

            <div className="cw-glade-tree1"></div>

            <div className="cw-glade-info job block">
              <div className="cw-glade-name">Orders</div>
            </div>
            <div className="cw-glade-job"></div>

            <div className="cw-glade-info skills block">
              <div className="cw-glade-name">skills</div>
            </div>
            <div className="cw-glade-skills"></div>

            <div className="cw-glade-tree2"></div>

            <div className="cw-glade-info fire block">
              <div className="cw-glade-name">Clans</div>
            </div>
            <div className="cw-glade-fire"></div>

            <div className="cw-glade-info store block">
              <div className="cw-glade-name">store</div>
            </div>
            <div className="cw-glade-store"></div>

            <div className="cw-glade-info map block">
              <div className="cw-glade-name">map</div>
            </div>
            <div className="cw-glade-map"></div>

            <div className="cw-glade-tree3"></div>

            <div className="cw-glade-tree4"></div>
          </div>
          <div className="color-btn exit">
            <div className="color-btn-text">Exit</div>
          </div>
        </div>
      </div>
    </HelmetForCss>
  );
}
