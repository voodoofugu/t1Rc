import React from "react";
import v2ScreenFwMap from "../styles/v2-screen-fw-map.scss";

const V2MainScreen05FwMapComponent = () => {
    return (
        <>
            <div className="main">
                <div className="main-bg fw-map"></div>
                <div className="fw-map-name-box-all">
                    <div className="fw-map-time-box">
                        <div className="fw-map-time1">
                            битва начнется: 06:59
                        </div>
                        <div className="fw-map-time2">
                            награда появится: 23:59
                        </div>
                    </div>
                    <div className="fw-map-name-box">
                        <div className="fw-map-name">фракционные войны</div>
                        <div className="fw-map-date">day 31</div>
                    </div>
                </div>
                <div className="fw-map-claim-box-all">
                    <div className="fw-map-claim-box fr1 w1">
                        <div className="fw-icon-fr">
                            <img src="img/v2-fw-icon-fr1.png" />
                        </div>
                        <div className="fw-icon-ws">
                            <img src="img/v2-fw-icon-w1.png" />
                        </div>
                        <div className="fw-icon-sword">
                            <img src="img/v2-fw-icon-w3.png" />
                        </div>
                    </div>
                    <div className="fw-map-claim-box fr1 w2">
                        <div className="fw-icon-fr">
                            <img src="img/v2-fw-icon-fr1.png" />
                        </div>
                        <div className="fw-icon-ws">
                            <img src="img/v2-fw-icon-w2.png" />
                        </div>
                        <div className="fw-icon-sword">
                            <img src="img/v2-fw-icon-w3.png" />
                        </div>
                    </div>
                    <div className="fw-map-claim-box fr1 w3 blue">
                        <div className="fw-frac-arrow"></div>
                    </div>
                    <div className="fw-map-claim-box"></div>
                    <div className="fw-map-claim-box"></div>
                    <div className="fw-map-claim-box fr2 w1">
                        <div className="fw-icon-fr">
                            <img src="img/v2-fw-icon-fr2.png" />
                        </div>
                        <div className="fw-icon-ws">
                            <img src="img/v2-fw-icon-w2.png" />
                        </div>
                        <div className="fw-icon-sword">
                            <img src="img/v2-fw-icon-w3.png" />
                        </div>
                    </div>
                    <div className="fw-map-claim-box fr2 w2"></div>
                    <div className="fw-map-claim-box fr2 w3"></div>
                    <div className="fw-map-claim-box"></div>
                    <div className="fw-map-claim-box">
                        <div className="fw-icon-fr">
                            <img src="img/v2-fw-icon-fr4.png" />
                        </div>
                        <div className="fw-icon-ws">
                            <img src="img/v2-fw-icon-w1.png" />
                        </div>
                        <div className="fw-icon-sword">
                            <img src="img/v2-fw-icon-w3.png" />
                        </div>
                    </div>
                    <div className="fw-map-claim-box fr3 w1 red">
                        <div className="fw-frac-arrow"></div>
                        <div className="fw-icon-fr">
                            <img src="img/v2-fw-icon-fr3.png" />
                        </div>
                        <div className="fw-icon-ws">
                            <img src="img/v2-fw-icon-w2.png" />
                        </div>
                        <div className="fw-icon-sword">
                            <img src="img/v2-fw-icon-w3.png" />
                        </div>
                    </div>
                    <div className="fw-map-claim-box fr3 w2"></div>
                    <div className="fw-map-claim-box fr3 w3">
                        <div className="fw-icon-fr">
                            <img src="img/v2-fw-icon-fr1.png" />
                        </div>
                        <div className="fw-icon-ws">
                            <img src="img/v2-fw-icon-w1.png" />
                        </div>
                        <div className="fw-icon-sword">
                            <img src="img/v2-fw-icon-w3.png" />
                        </div>
                    </div>
                    <div className="fw-map-claim-box"></div>
                    <div className="fw-map-claim-box green">
                        <div className="fw-frac-arrow"></div>
                    </div>
                    <div className="fw-map-claim-box w1"></div>
                    <div className="fw-map-claim-box w2"></div>
                    <div className="fw-map-claim-box w3"></div>
                    <div className="fw-map-claim-box"></div>
                    <div className="fw-map-claim-box"></div>
                </div>
                <div className="fw-round-box-all">
                    <div className="fw-round-box-name">раунд</div>
                    <div className="fw-round-box">
                        <div className="fw-round-num check">1</div>
                        <div className="fw-round-num check">2</div>
                        <div className="fw-round-num check">3</div>
                        <div className="fw-round-num check">4</div>
                        <div className="fw-round-num check">5</div>
                        <div className="fw-round-num check">6</div>
                        <div className="fw-round-num active">7</div>
                        <div className="fw-round-num">8</div>
                        <div className="fw-round-num">9</div>
                        <div className="fw-round-num">10</div>
                        <div className="fw-round-num">11</div>
                        <div className="fw-round-num">12</div>
                        <div className="fw-round-num">13</div>
                        <div className="fw-round-num">14</div>
                        <div className="fw-round-num">15</div>
                        <div className="fw-round-num">16</div>
                    </div>
                </div>
                <div className="fw-myfraction-box">
                    <div className="fw-myfraction-pic">
                        <img src="img/v2-fw-fr-2.png" />
                    </div>
                    <div className="fw-myfraction-text">моя фракция</div>
                    <div className="fw-myfraction-name-box">
                        <div className="fw-myfraction-name">
                            Львиное Королевство
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(V2MainScreen05FwMapComponent);
