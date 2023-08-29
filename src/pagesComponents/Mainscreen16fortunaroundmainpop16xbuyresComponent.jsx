import React from "react";

const MainScreen16FortunaRoundMainpop16xBuyresComponent = () => {
    return (
        <>
            <div className="main">
                <div className="main-bg"></div>

                <div className="popup-layer" style="display: block">
                    <div
                        className="screen-blend-55"
                        style="display: block"></div>

                    <div
                        className="m-popup bonus-25 bf-event__buy-keys-pop"
                        style="display: block">
                        <div className="title">Buy energy</div>
                        <div className="keys-card-box">
                            <div className="keys-but-box">
                                <img src="rc/v2-f-e1.png" alt="" />
                            </div>
                            <div className="keys-price">5</div>
                            {/* <div className="keys-bonus">+5 free</div> */}
                            <div className="keybtn-box">
                                <div className="keybtn">$2.00</div>
                            </div>
                        </div>
                        <div className="keys-card-box">
                            <div className="keys-but-box">
                                <img src="rc/v2-f-e2.png" alt="" />
                            </div>
                            <div className="keys-price">30</div>
                            {/*                <div className="keys-bonus">+20 free</div>*/}
                            <div className="keybtn-box">
                                <div className="keybtn">$10.00</div>
                            </div>
                        </div>
                        <div className="keys-card-box">
                            <div className="keys-but-box">
                                <img src="rc/v2-f-e3.png" alt="" />
                            </div>
                            <div className="keys-price">160</div>
                            {/*                <div className="keys-bonus">+200 free</div>*/}
                            <div className="keybtn-box">
                                <div className="keybtn">$49.00</div>
                            </div>
                        </div>
                        <div className="keys-card-box">
                            <div className="keys-but-box">
                                <img src="rc/v2-f-e4.png" alt="" />
                            </div>
                            <div className="keys-price">450</div>
                            {/*                <div className="keys-bonus">+2000 free</div>*/}
                            <div className="keybtn-box">
                                <div className="keybtn">$99.00</div>
                            </div>
                        </div>

                        <div className="btn-close-x"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(MainScreen16FortunaRoundMainpop16xBuyresComponent);
