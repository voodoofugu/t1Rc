import React from "react";

export default function MonsterPrgBoxAll() {
  return (
    <div className="monster-prg-box-all r_b">
      <div className="name">Шалунишка Орк</div>
      <div className="health">
        <div className="p100">
          <div
            className="prg"
            style={{
              width: "98%",
            }}
          ></div>
        </div>
        <div className="num pulse">
          <div className="from">4.6K</div>
          <div className="to">4.66K</div>
        </div>
      </div>
      <div className="timer">
        <div className="p100">
          <div
            className="prg"
            style={{
              width: "0.276667%",
            }}
          ></div>
        </div>
        <div className="time run">
          <div className="txt">0:0</div>
        </div>
      </div>
      <div className="boss-lvl boss">
        <div className="label">LVL</div>
        <div className="icon"></div>
        <div className="text">1</div>
      </div>
      <div className="loc-list">
        <div className="locs">
          <div className="loc">
            <div className="loc-text">1</div>
            <div className="loc-text2">lvl</div>
          </div>
        </div>
      </div>
    </div>
  );
}
