import React from "react";

export default function BossbtnBox({ hole }) {
  return (
    <div className="bossbtn-box">
      <div className="type-box">
        <div className="type-top">type</div>
        <div className="type-name">FAST</div>
      </div>
      <div className="plas-all-box">
        <div className="plas-all">
          <div className="plas">
            -50%
            <span className="xp-icon"></span>
          </div>
          <div className="btn-buy">
            <div className={`price ${hole ? "holeGem" : "diamonds"}`}>1</div>
            <div className="txt">use</div>
          </div>
          <div className="used-already">
            <div className="us-al-text">used already</div>
          </div>
        </div>
        <div className="plas-all">
          <div className="plas">
            +15
            <span className="time-icon"></span>
          </div>
          <div className="btn-buy">
            <div className={`price ${hole ? "holeGem" : "diamonds"}`}>1</div>
            <div className="txt">use</div>
          </div>
          <div className="used-already">
            <div className="us-al-text">used already</div>
          </div>
        </div>
        <div className="plas-all">
          <div className="plas dps">
            +100%
            <span className="dps-icon"></span>
            <span className="dpc-icon"></span>
            for this run
          </div>
          <div className="btn-buy">
            <div className={`price ${hole ? "holeGem" : "diamonds"}`}>1</div>
            <div className="txt">use</div>
          </div>
          <div className="used-already">
            <div className="us-al-text">used already</div>
          </div>
        </div>
      </div>
    </div>
  );
}
