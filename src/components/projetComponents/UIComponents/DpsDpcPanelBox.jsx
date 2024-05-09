import React from "react";

export default function DpsDpcPanelBox() {
  return (
    <div className="dps-dpc-panel-box">
      <div className="dpc">
        <div className="value">100</div>
        <div className="mlt-prm"></div>
        <div className="title">
          DPC
          <div className="icon-dpc"></div>
        </div>
      </div>
      <div className="dps">
        <div className="value">2</div>
        <div className="mlt-prm">
          <span>
            +20%<span> idle</span>
          </span>
        </div>
        <div className="title">
          DPS
          <div className="icon-dps"></div>
        </div>
      </div>
      <div>
        <div className="dps-dpc-panel-d1"></div>
        <div className="dps-dpc-panel-d2"></div>
      </div>
    </div>
  );
}
