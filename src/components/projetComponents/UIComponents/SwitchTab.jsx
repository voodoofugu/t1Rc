import React from "react";

export default function SwitchTab({ activeTab, setActiveTab, tab1, tab2 }) {
  return (
    <div
      className={`switchTab ${activeTab === false ? "" : "right"}`}
      onClick={() => setActiveTab((prevCheck) => !prevCheck)}
    >
      <div className={`switchBtn ${activeTab === false ? "active" : ""}`}>
        {tab1[0]}
      </div>
      <div className={`switchBtn ${activeTab === true ? "active" : ""}`}>
        {tab2[0]}
      </div>
    </div>
  );
}
