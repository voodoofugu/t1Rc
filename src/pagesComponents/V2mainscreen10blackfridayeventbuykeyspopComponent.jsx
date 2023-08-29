import React from "react";
import v2ScreenBfEvent_keys from "../styles/v2-screen-bf-event__keys.scss";

const V2MainScreen10BlackfridayEvent_buyKeysPopComponent = () => {
    return (
        <>
            <div className="main">
                <div className="main-bg"></div>

                <div className="popup-layer" style="display: block;">
                    <div
                        className="screen-blend-55"
                        style="display: block;"></div>

                    <div
                        className="m-popup bf-event__buy-keys-pop"
                        style="display: block;">
                        <div className="title">Buy keys</div>
                        <div className="keys-card-box">
                            <div className="keys-but-box">
                                <img src="rc/v2-bf-key-pop1-gold.png" alt="" />
                            </div>
                            <div className="keys-price">10k</div>
                            {/* <div className="keys-bonus">+5 free</div> */}
                            <div className="keybtn-box">
                                <div className="keybtn">
                                    <div className="coron-icon"></div>
                                    <div className="coron-price">250</div>
                                </div>
                            </div>
                        </div>
                        <div className="keys-card-box">
                            <div className="keys-but-box">
                                <img src="rc/v2-bf-key-pop2-gold.png" alt="" />
                            </div>
                            <div className="keys-price">100k</div>
                            <div className="keys-bonus">+20 free</div>
                            <div className="keybtn-box">
                                <div className="keybtn">
                                    <div className="coron-icon"></div>
                                    <div className="coron-price">250</div>
                                </div>
                            </div>
                        </div>
                        <div className="keys-card-box">
                            <div className="keys-but-box">
                                <img src="rc/v2-bf-key-pop3-gold.png" alt="" />
                            </div>
                            <div className="keys-price">1000k</div>
                            <div className="keys-bonus">+200 free</div>
                            <div className="keybtn-box">
                                <div className="keybtn">
                                    <div className="coron-icon"></div>
                                    <div className="coron-price">250</div>
                                </div>
                            </div>
                        </div>
                        <div className="keys-card-box">
                            <div className="keys-but-box">
                                <img src="rc/v2-bf-key-pop4-gold.png" alt="" />
                            </div>
                            <div className="keys-price">100000k</div>
                            <div className="keys-bonus">+2000 free</div>
                            <div className="keybtn-box">
                                <div className="keybtn">
                                    <div className="coron-icon"></div>
                                    <div className="coron-price">250</div>
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

export default React.memo(V2MainScreen10BlackfridayEvent_buyKeysPopComponent);
