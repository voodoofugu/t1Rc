import React from "react";
import { nexusTrigger, useNexus, nexusUpdate } from "nexus-state";

import FraimedTitle from "../UIComponents/FraimedTitle";
import Button from "../UIComponents/Button";

export default function Warpop() {
  const warpop = useNexus("warpop");

  const warpopBoxRef = React.useRef(null);
  const warpopBackRef = React.useRef(null);
  const timeoutRef = React.useRef(0);

  const key = warpop?.key || false;
  const visible = warpop?.visible || false;
  const tit = warpop?.tit || "";
  const className = warpop?.className || "";
  const type = warpop?.type || "";

  function warpopClose() {
    warpopBoxRef.current.classList.add("close");
    warpopBackRef.current.classList.add("close");
    timeoutRef.current = setTimeout(() => {
      nexusUpdate({
        warpop: null,
      });
    }, 250);
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    visible && (
      <>
        <div
          className={`warpopBack${className?.includes("left") ? " left" : ""}`}
          ref={warpopBackRef}
        ></div>
        <div
          className={`fw-warpop-box-all${className ? ` ${className}` : ""}`}
          ref={warpopBoxRef}
          key={key}
        >
          <div className="fw-warpop-box-pic">
            {type && <div className={`fr-warpop-building type-${type}`}></div>}
          </div>

          {/* <div className="fw-warpop-box-name">{tit}</div> */}
          <FraimedTitle className="corners warPopTit" text={tit} />

          <div className="fw-warpop-effect-box-all">
            <div className="fw-warpop-effect-box">
              <div className="fw-warpop-effect-name">effect</div>
              <div className="fw-warpop-effect-text-box">
                <div className="fw-warpop-effect-text">
                  3 war rating points per round
                </div>
              </div>
            </div>
            <div className="fw-warpop-income-box">
              <div className="fw-warpop-income-name">rewards</div>
              <div className="fw-warpop-income-text">
                <span className="ic-contrip cw"></span>
                144/round
              </div>
              <div className="fw-warpop-income-text second">
                <span className="ic-warchest"></span>
                3/round
              </div>
            </div>
          </div>
          <div className="fw-warpop-at-def-box-all attack">
            <div className="fw-warpop-def-box">
              <div className="fw-warpop-def-name">defence</div>
              <div className="fw-warpop-def-pic">
                <img src="img/v2-fw-icon-fr0.png" alt="Defence Icon" />
              </div>
              <div className="fw-warpop-def-num">
                <span>0</span>
              </div>
            </div>
            <div className="fw-warpop-at-box-all">
              <div className="fw-warpop-at-name">attackers</div>
              <div className="fw-warpop-at-text">There are no attackers</div>
              {/* <div className="fw-warpop-at-box cw">
                <div className="fw-warpop-at-pic">
                  <img
                    className="bg"
                    src="img/v2-cw-bg34.png"
                    alt="Background Icon"
                  />
                  <img
                    className="fg"
                    src="img/v2-cw-p03.png"
                    alt="Foreground Icon"
                  />
                </div>
              </div> */}
            </div>
            {/* <div className="fw-warpop-army-power-box">
              <div className="fw-warpop-army-power-text">
                Your army power here
              </div>
              <div className="fw-warpop-army-power-num">0</div>
            </div> */}
            {/* <div className="fw-warpop-gr-con-power-box">
              <div className="fw-warpop-gr-box">
                <div className="fw-warpop-army-power-text">Your army power</div>
                <div className="fw-warpop-army-power-num">0</div>
              </div>
            </div> */}
          </div>
          <div className="fw-warpop-army-power-box">
            <div className="fw-warpop-tit">Your army power here</div>
            <div className="fw-warpop-army-power-num">0</div>
          </div>
          {/* <div>
            <div className="color-btn green" style={{ filter: "grayscale(1)" }}>
              <div className="color-btn-text">clash in progress</div>
            </div>
          </div> */}

          <Button
            className="green max warPopBtn"
            text="clash in progress"
            onClick={() => {
              nexusTrigger({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    mpopClass: "m-popup army-setup contentOnly",
                    popCont: "ArmySetupCW",
                  },
                },
              });
            }}
          />

          <Button className="exit" text="✖" onClick={() => warpopClose()} />
        </div>
      </>
    )
  );
}
