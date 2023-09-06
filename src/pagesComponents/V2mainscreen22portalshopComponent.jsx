import React from "react";
import v2ScreenPortalShop from "../styles/v2-screen-portal-shop.scss";

const V2MainScreen22PortalShopComponent = () => {
    return (
        <>
            <div className="main world1">
                <div className="main-bg"></div>

                <div className="popup-layer" style={{ display: "block" }}>
                    <div
                        className="screen-blend-55"
                        style={{ display: "block" }}></div>

                    <div
                        className="m-popup bf-event__buy-keys-pop"
                        style={{ display: "block" }}>
                        <div className="timer-text">
                            До обновления магазина:
                        </div>
                        <div className="update-timer-wrap">
                            <div className="timer">01:20:10</div>
                        </div>
                        <div className="title">Shop</div>
                        <div className="popup-wrap">
                            <div className="cards-wrap">
                                <div className="keys-card-wrap">
                                    <div className="keybtn-box">
                                        <div className="keybtn">Buy</div>
                                        <div className="quantity">150</div>
                                    </div>
                                    <div className="keys-card-box">
                                        <div className="card-header">
                                            Squad Offer
                                        </div>
                                        <div className="card-info-btn"></div>
                                        <div className="keys-but-box">
                                            <img
                                                src="img/images\superhero\suphero-506\x2\506sh-1.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="essence-quantity">
                                            100
                                        </div>
                                        <div className="limit">5/5</div>
                                    </div>
                                </div>
                                <div className="keys-card-wrap card-block">
                                    <div className="keybtn-box">
                                        <div className="keybtn">Buy</div>
                                        <div className="quantity">150</div>
                                    </div>
                                    <div className="keys-card-box">
                                        <div className="card-header">
                                            Squad Offer
                                        </div>
                                        <div className="card-info-btn"></div>
                                        <div className="keys-but-box">
                                            <img
                                                src="img/chest-shop-1.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="essence-quantity">
                                            200
                                        </div>
                                        <div className="offer-attributes">
                                            <img
                                                className="squad-color"
                                                src="img/cur2-barbarian.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="limit">0/5</div>
                                    </div>
                                </div>
                                <div className="keys-card-wrap">
                                    <div className="keybtn-box">
                                        <div className="keybtn">Buy</div>
                                        <div className="quantity">300</div>
                                    </div>
                                    <div className="keys-card-box">
                                        <div className="card-header">
                                            Squad Offer
                                        </div>
                                        <div className="card-info-btn"></div>
                                        <div className="keys-but-box">
                                            <img
                                                src="img/chest-shop-2.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="essence-quantity">
                                            300
                                        </div>
                                        <div className="offer-attributes">
                                            <img
                                                className="squad-class"
                                                src="img/cur2-ranger.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="limit">5/5</div>
                                    </div>
                                </div>
                                <div className="keys-card-wrap">
                                    <div className="keybtn-box">
                                        <div className="keybtn">Buy</div>
                                        <div className="quantity">600</div>
                                    </div>
                                    <div className="keys-card-box">
                                        <div className="card-header">
                                            Squad Offer
                                        </div>
                                        <div className="card-info-btn"></div>
                                        <div className="keys-but-box">
                                            <img
                                                src="img/chest-shop-3.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="essence-quantity">
                                            400
                                        </div>
                                        <div className="offer-attributes">
                                            <img
                                                className="squad-color"
                                                src="img/cur2-druid.png"
                                                alt=""
                                            />
                                            <img
                                                className="squad-class"
                                                src="img/cur2-gun.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="limit">5/5</div>
                                    </div>
                                </div>
                                <div className="keys-card-wrap">
                                    <div className="keybtn-box">
                                        <div className="keybtn">Buy</div>
                                        <div className="quantity">950</div>
                                    </div>
                                    <div className="keys-card-box">
                                        <div className="card-header">
                                            Squad Offer
                                        </div>
                                        <div className="card-info-btn"></div>
                                        <div className="keys-but-box">
                                            <img
                                                src="img/chest-shop-4.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="essence-quantity">
                                            500
                                        </div>
                                        <div className="offer-attributes">
                                            <div className="settings-offer-btn">
                                                settings offer
                                            </div>
                                        </div>
                                        <div className="limit">5/5</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-block-wrap">
                                <div className="passed-text">
                                    Уровней пройденных Вами:
                                    <div className="passed-levels">6969</div>
                                    <div className="equals">=</div>
                                    <div className="levels-essence-quantity">
                                        969
                                    </div>
                                </div>
                                <div className="reward-btn">Забрать</div>
                            </div>
                        </div>
                        <div className="btn-close-x"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(V2MainScreen22PortalShopComponent);
