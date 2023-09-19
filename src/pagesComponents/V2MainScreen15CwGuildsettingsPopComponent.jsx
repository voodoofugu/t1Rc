import React from "react";
// import v2ScreenCwGuildsettings from "../styles/v2-screen-cw-guildsettings.scss";

const V2MainScreen15CwGuildsettingsPopComponent = () => {
  return (
    <>
      <div className="main world1">
        <div className="popup-layer" style={{ display: "block" }}>
          <div className="m-popup guildsettings" style={{ display: "block" }}>
            <div className="title">guild settings</div>
            <div className="color-box"></div>
            <div className="cw-clan-settings-box-all">
              <div className="cw-clan-settings-name-box">
                <div className="cw-clan-settings-name">Zalupa Konskaya</div>
                <input className="cw-clan-edit" type="text" size="20" />
                <div className="cw-clan-settings-name-btn"></div>
              </div>
              <div className="cw-clan-settings-clanlogo-box-all">
                <div className="cw-clan-logo-box">
                  <div className="cw-clan-logo-bg">
                    <img src="img/v2-cw-bg01.png" loading="lazy" />
                    <div className="cw-clan-logo">
                      <img src="img/v2-cw-p03.png" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="color-btn choose">
                  <div className="color-btn-text">choose</div>
                </div>
              </div>
              <div className="cw-clan-settings-text-box">
                <div className="cw-clan-settings-text">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </div>
              </div>
            </div>
            <div className="color-btn disband">
              <div className="color-btn-text">disband guild</div>
            </div>
            <div className="btn-close-x"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(V2MainScreen15CwGuildsettingsPopComponent);
