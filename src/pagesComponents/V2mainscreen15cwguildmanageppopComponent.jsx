import React from "react";
import v2ScreenCwGuildmanageP from "../styles/v2-screen-cw-guildmanage-p.scss";

const V2MainScreen15CwGuildmanagePPopComponent = () => {
    return (
        <>
            <div className="main world1">
                <div className="popup-layer" style={{ display: "block" }}>
                    <div
                        className="m-popup guildmanage-p"
                        style={{ display: "block" }}>
                        <div className="title">guild manage p</div>
                        <div className="color-box"></div>
                        <div className="cw-clan-manage-p-box-all">
                            <div className="cw-main-right-b-av">
                                <div className="cw-main-girl-ava">
                                    <div className="cw-main-girl-ava-img">
                                        <img src="img/hero0093-ava.jpg" />
                                    </div>
                                </div>
                                <div className="cw-girl-num-big">180855</div>
                                <div className="cw-main-right-b-name-box">
                                    <div className="cw-main-right-b-name">
                                        Rudolf Mozgoebov Abdurahman
                                    </div>
                                    <div className="cw-main-right-b-rank">
                                        Guild Leader
                                    </div>
                                </div>
                                <div className="cw-main-right-b-at-box">
                                    <div className="cw-main-right-b-at-pic"></div>
                                    <div className="cw-main-right-b-at-text">
                                        23 mins before
                                    </div>
                                </div>
                            </div>
                            <div className="cw-clan-manage-p-btn-box">
                                <div className="color-btn">
                                    <div className="color-btn-text">
                                        appoint officials
                                    </div>
                                </div>
                                <div className="color-btn">
                                    <div className="color-btn-text">
                                        appoint leader
                                    </div>
                                </div>
                                <div className="color-btn">
                                    <div className="color-btn-text">
                                        kick off
                                    </div>
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

export default React.memo(V2MainScreen15CwGuildmanagePPopComponent);
