import React from "react";
import v2ScreenCwMap from "../styles/v2-screen-cw-map.scss";

const V2MainScreen15CwMapComponent = () => {
    return (
        <>
            <div className="main">
                <div className="main-bg cw-map"></div>
                <div className="cw-map-name-box-all">
                    <div className="cw-map-time-box">
                        <div className="cw-map-time1">
                            битва начнется: 06:59
                        </div>
                        <div className="cw-map-time2">
                            награда появится: 23:59
                        </div>
                    </div>
                    <div className="cw-map-name-box">
                        <div className="cw-map-name">клановые войны</div>
                        <div className="cw-map-date">day 31</div>
                    </div>
                </div>
                <div className="cw-map-claim-box-all">
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box">
                        <div className="cw-map-mercs">
                            <div className="cw-map-merc occupied"></div>
                            <div className="cw-map-merc occupied"></div>
                            <div className="cw-map-merc occupied"></div>
                            <div className="cw-map-merc"></div>
                        </div>
                    </div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                    <div className="cw-map-claim-box"></div>
                </div>
                <div className="cw-round-box-all">
                    <div className="cw-round-box-name">раунд</div>
                    <div className="cw-round-box">
                        <div className="cw-round-num check">1</div>
                        <div className="cw-round-num check">2</div>
                        <div className="cw-round-num check">3</div>
                        <div className="cw-round-num check">4</div>
                        <div className="cw-round-num check">5</div>
                        <div className="cw-round-num check">6</div>
                        <div className="cw-round-num active">7</div>
                        <div className="cw-round-num">8</div>
                        <div className="cw-round-num">9</div>
                        <div className="cw-round-num">10</div>
                        <div className="cw-round-num">11</div>
                        <div className="cw-round-num">12</div>
                        <div className="cw-round-num">13</div>
                        <div className="cw-round-num">14</div>
                        <div className="cw-round-num">15</div>
                        <div className="cw-round-num">16</div>
                    </div>
                </div>
                <div className="cw-myfraction-box">
                    <div className="cw-myfraction-pic">
                        <img src="rc/v2-fw-fr-2.png" />
                    </div>
                    <div className="cw-myfraction-text">моя фракция</div>
                    <div className="cw-myfraction-name-box">
                        <div className="cw-myfraction-name">
                            Львиное Королевство
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(V2MainScreen15CwMapComponent);
