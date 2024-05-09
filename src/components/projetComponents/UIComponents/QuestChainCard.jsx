import React from "react";

export default function QuestChainCard({ progressClass, text, icnClass }) {
  return (
    <div className={`questCard ${progressClass}`}>
      <div className="questCard_progressLine" />

      <div className="questCard_bg"></div>
      <div className="questCard_text">{text}</div>

      <div className="questCard_icnWrap">
        <div className={`questCard_icn ${icnClass}`}></div>
      </div>

      <div className="questCard_prgBarWrap">
        <div className="questCard_prgBar" style={{ width: "0%" }} />
        <div className="questCard_prgBarText">
          {progressClass === "check" ? "done" : "0/30"}
        </div>
      </div>

      {progressClass === "claim" ? (
        <div className="color-btn green">
          <div className="color-btn-text">claim</div>
        </div>
      ) : (
        ""
      )}
      {progressClass === "check" ? (
        <div className="questCard_check" />
      ) : progressClass === "lock" ? (
        <div className="questCard_lock" />
      ) : (
        ""
      )}
    </div>
  );
}
