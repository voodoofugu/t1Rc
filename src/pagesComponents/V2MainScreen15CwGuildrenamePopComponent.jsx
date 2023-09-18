import React from "react";
// import v2ScreenCwGuildrename from "../styles/v2-screen-cw-guildrename.scss";

const V2MainScreen15CwGuildrenamePopComponent = () => {
    return (
        <>
            <div className="main world1">
                <div className="popup-layer" style={{ display: "block" }}>
                    <div
                        className="m-popup guildrename"
                        style={{ display: "block" }}>
                        <div className="title">guild rename</div>
                        <div className="color-box"></div>
                        <div className="cw-clan-rename-box-all">
                            <div className="cw-clan-settings-name-box">
                                <div className="cw-clan-settings-name">
                                    Zalupa Konskaya
                                </div>
                                <input
                                    className="cw-clan-edit"
                                    type="text"
                                    size="20"
                                />
                                <div className="cw-clan-settings-name-btn"></div>
                            </div>
                            <div className="color-btn rename green">
                                <div className="color-btn-text">
                                    rename
                                    <span className="f-diamond">6969</span>
                                </div>
                            </div>
                        </div>
                        <div className="btn-close-x"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(V2MainScreen15CwGuildrenamePopComponent);
