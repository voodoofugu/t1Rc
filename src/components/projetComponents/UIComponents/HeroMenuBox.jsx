import React from "react";

export default function HeroMenuBox({
  activeMenu,
  setActiveMenu,
  tab1,
  tab2,
  tab3,
  tab4,
  tab5,
  contentWrapClass,
  flatt,
}) {
  function handleMenuClick(menuSectionName) {
    setActiveMenu(menuSectionName);
  }

  let contentComponent;
  switch (activeMenu) {
    case tab1[0]:
      contentComponent = tab1[2];
      break;
    case tab2[0]:
      contentComponent = tab2[2];
      break;
    case tab3[0]:
      contentComponent = tab3[2];
      break;
    case tab4[0]:
      contentComponent = tab4[2];
      break;
    default:
      contentComponent = tab1[2];
  }

  return (
    <>
      <div className={`hero-menu-box ${flatt ? "flatt" : ""}`}>
        {tab1 && (
          <div
            className={`tabs-menu-btn ${tab1[0]} ${
              activeMenu === tab1[0] ? "active" : ""
            }`}
            onClick={() => handleMenuClick(tab1[0])}
          >
            <div className="txt">{tab1[1]}</div>
          </div>
        )}
        {tab2 && (
          <div
            className={`tabs-menu-btn ${tab2[0]} ${
              activeMenu === tab2[0] ? "active" : ""
            }`}
            onClick={() => handleMenuClick(tab2[0])}
          >
            <div className="txt">{tab2[1]}</div>
          </div>
        )}
        {tab3 && (
          <div
            className={`tabs-menu-btn ${tab3[0]} ${
              activeMenu === tab3[0] ? "active" : ""
            }`}
            onClick={() => handleMenuClick(tab3[0])}
          >
            <div className="txt">{tab3[1]}</div>
          </div>
        )}
        {tab4 && (
          <div
            className={`tabs-menu-btn ${tab4[0]} ${
              activeMenu === tab4[0] ? "active" : ""
            }`}
            onClick={() => handleMenuClick(tab4[0])}
          >
            <div className="txt">{tab4[1]}</div>
          </div>
        )}
        {tab5 && (
          <div
            className={`tabs-menu-btn ${tab5[0]} ${
              activeMenu === tab5[0] ? "active" : ""
            }`}
            onClick={() => handleMenuClick(tab5[0])}
          >
            <div className="txt">{tab5[1]}</div>
          </div>
        )}
      </div>
      {contentWrapClass ? (
        <div className={contentWrapClass}>{contentComponent}</div>
      ) : (
        contentComponent
      )}
    </>
  );
}
