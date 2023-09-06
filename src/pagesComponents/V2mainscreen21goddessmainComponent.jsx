import React from "react";
import v2ScreenGoddessMain from "../styles/v2-screen-goddess-main.scss";
import v2ScreenGoddessPicture from "../styles/v2-screen-goddess-picture.scss";

const V2MainScreen21GoddessMainComponent = () => {
    return (
        <>
            <div className="main world1">
                <div className="main-bg"></div>
                <div className="header">
                    <div className="resource-panel">
                        <div className="avatar-box-all">
                            <div className="avatar-box-pic">
                                <img src="img/hero0093-ava.jpg" />
                            </div>
                            <div className="avatar-box-name">Dormidont</div>
                        </div>
                        <div className="resource-gold">
                            <div className="value">6969K</div>
                            <div className="value-bonus">+6969K%</div>
                            <div className="resource-btn-add"></div>
                            <div className="resource-pic">
                                <img src="img/v2-res-gold.png" />
                            </div>
                        </div>
                        <div className="resource-vip lvl5">
                            <div className="value-vip-diamond">6969K</div>
                            <div className="value-vip-ticket">6969K</div>
                            <div className="resource-btn-add"></div>
                            <div className="resource-pic-vip">
                                <div className="viplvl">VIP</div>
                            </div>
                        </div>
                    </div>
                    <div className="shop-chest-box-all">
                        <div className="res-shop-btn">
                            <div className="res-shop-btn-text">магазин</div>
                        </div>
                        <div className="res-chest-btn">
                            <div className="res-chest-btn-text">открыть</div>
                            <div className="res-chest-btn-count">6969K</div>
                        </div>
                    </div>
                    <div className="singinout-btn out">
                        <div className="singinout-btn-text">sign out</div>
                    </div>
                </div>
                <div className="quest-box-all">
                    <div className="quest-box-all-text">квесты</div>
                    <div className="quest-box">
                        <div className="quest">
                            <img
                                className="icon"
                                src="img/ic-abil-reborn.png"
                            />
                        </div>
                        <div className="quest">
                            <img
                                className="icon"
                                src="img/ic-abil-reborn.png"
                            />
                        </div>
                        <div className="quest">
                            <img
                                className="icon"
                                src="img/ic-abil-reborn.png"
                            />
                        </div>
                        <div className="quest">
                            <img
                                className="icon"
                                src="img/ic-abil-reborn.png"
                            />
                        </div>
                        <div className="quest">
                            <img
                                className="icon"
                                src="img/ic-abil-reborn.png"
                            />
                        </div>
                        <div className="quest">
                            <img
                                className="icon"
                                src="img/ic-abil-reborn.png"
                            />
                        </div>
                        <div className="quest">
                            <img
                                className="icon"
                                src="img/ic-abil-reborn.png"
                            />
                        </div>
                    </div>
                    <div className="opt-panel-box">
                        <div className="btn feedback"></div>
                        <div className="btn statistic"></div>
                        <div className="btn ru"></div>
                    </div>
                </div>
                <div className="left-side">
                    <div className="left-panel wide">
                        <div className="tab-panel-box goddess-room">
                            <div className="tab-panel-box-title">Angels</div>
                            <div className="gd-left-box-all">
                                <div className="gd-left-box-scroll-box">
                                    <div className="hero-avatar-box cursor-pointer">
                                        <img
                                            className="hero-avatar"
                                            src="img/images/goddess/goddess-1/x2/ava/goddess-1-1-ava.jpg"
                                        />
                                    </div>
                                    <div className="hero-avatar-box cursor-pointer">
                                        <img
                                            className="hero-avatar"
                                            src="img/images/goddess/goddess-2/x2/ava/goddess-2-1-ava.jpg"
                                        />
                                    </div>
                                    <div className="hero-avatar-box cursor-pointer">
                                        <img
                                            className="hero-avatar"
                                            src="img/images/goddess/goddess-3/x2/ava/goddess-3-1-ava.jpg"
                                        />
                                    </div>
                                    <div className="hero-avatar-box cursor-pointer">
                                        <img
                                            className="hero-avatar"
                                            src="img/images/goddess/goddess-4/x2/ava/goddess-4-1-ava.jpg"
                                        />
                                    </div>
                                    <div className="hero-avatar-box cursor-pointer">
                                        <img
                                            className="hero-avatar"
                                            src="img/images/goddess/goddess-5/x2/ava/goddess-5-1-ava.jpg"
                                        />
                                    </div>
                                    <div className="hero-avatar-box cursor-pointer">
                                        <img
                                            className="hero-avatar"
                                            src="img/images/goddess/goddess-6/x2/ava/goddess-6-1-ava.jpg"
                                        />
                                    </div>
                                    <div className="hero-avatar-box cursor-pointer">
                                        <div
                                            className="notif notif20"
                                            style={{
                                                right: "-6px",
                                                top: "-3px",
                                            }}></div>
                                        <img
                                            className="hero-avatar"
                                            src="img/v2-mn-chest-gold-open.png"
                                            style={{ height: "90px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="gd-box-goddess">
                                <div className="x-info-btn">?</div>
                                <div className="gd-box-goddess-pic" style={{}}>
                                    <div className="b-fs"></div>
                                    <img src="img/images/goddess/goddess-4/x2/goddess-4-1.jpg" />
                                </div>
                                <div className="gd-box-goddess-name-box">
                                    <div className="gd-box-goddess-name">
                                        Muse
                                    </div>
                                    <div className="gd-box-goddess-lvl">
                                        Level 615
                                    </div>
                                </div>
                                <div className="gd-box-goddess-bottom-box tall">
                                    <div className="gd-arrow-box-all">
                                        <div className="gd-btn-scroll left"></div>
                                        <div className="gd-btn-scroll right"></div>
                                    </div>
                                    <div className="info-block">
                                        <div>Current Star</div>
                                        <div>Max Buff Level: 100</div>
                                        <div>Buff Bonus: x1</div>
                                    </div>
                                    <div className="info-block next">
                                        <div>Next Star</div>
                                        <div>Max Buff Level: 250</div>
                                        <div>Buff Bonus: x2</div>
                                    </div>
                                    <div className="gd-prgbar-box">
                                        <div className="gd-prgbar">
                                            <div
                                                className="gd-prgbar-all"
                                                style={{ width: "93%" }}></div>
                                        </div>
                                        <div className="gd-prgbar-text">
                                            327/350
                                        </div>
                                    </div>
                                    <div className="gd-star-box lvl01"></div>
                                </div>
                            </div>
                            <div className="gd-right-box-all">
                                <div
                                    className="gd-attr-box-all"
                                    style={{ top: "10px" }}>
                                    <div className="gd-attr-box" style={{}}>
                                        <div className="gd-attr-girl-box">
                                            <div className="hero-avatar-box">
                                                <img
                                                    className="hero-avatar"
                                                    src="img/images/hero-all/tithero-20/x1/ava/tithero-20-1-ava.jpg"
                                                />
                                                <div className="sh2-icon-forgirl">
                                                    <img src="img/cur2-barbarian.png" />
                                                </div>
                                                <div className="gd-hero-name">
                                                    Mi Hyo
                                                </div>
                                            </div>
                                            <div className="gd-lvl-pds-box-all">
                                                <div className="hero-level-box">
                                                    buff lvl
                                                    <div className="hero-level">
                                                        100
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        3.51OD29
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box cw">
                                                    CW
                                                    <div className="hero-dps">
                                                        0.3%
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box pos">
                                                    Pos
                                                    <div className="hero-dps">
                                                        +0.3
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green disabled0">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-gold"></span>
                                                        503
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        buff up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green cw">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-green"></span>
                                                        21K/130
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        percent up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green pos">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-blue"></span>
                                                        41.8K/130
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        position up
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gd-attr-girl-box">
                                            <div className="hero-avatar-box">
                                                <img
                                                    className="hero-avatar"
                                                    src="img/images/hero-all/tithero-21/x1/ava/tithero-21-1-ava.jpg"
                                                />
                                                <div className="sh2-icon-forgirl">
                                                    <img src="img/cur2-wizard.png" />
                                                </div>
                                                <div className="gd-hero-name">
                                                    Rika Mahojo
                                                </div>
                                            </div>
                                            <div className="gd-lvl-pds-box-all">
                                                <div className="hero-level-box">
                                                    buff lvl
                                                    <div className="hero-level">
                                                        100
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        948OD29
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box cw">
                                                    CW
                                                    <div className="hero-dps">
                                                        0.3%
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box pos">
                                                    Pos
                                                    <div className="hero-dps">
                                                        +0.3
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green disabled0">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-gold"></span>
                                                        503
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        buff up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green cw">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-green"></span>
                                                        21K/130
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        percent up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green pos">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-blue"></span>
                                                        41.8K/130
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        position up
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gd-attr-girl-box">
                                            <div className="hero-avatar-box">
                                                <img
                                                    className="hero-avatar"
                                                    src="img/images/hero-all/tithero-22/x1/ava/tithero-22-1-ava.jpg"
                                                />
                                                <div className="sh2-icon-forgirl">
                                                    <img src="img/cur2-quitar.png" />
                                                </div>
                                                <div className="gd-hero-name">
                                                    Sango Yudoku
                                                </div>
                                            </div>
                                            <div className="gd-lvl-pds-box-all">
                                                <div className="hero-level-box">
                                                    buff lvl
                                                    <div className="hero-level">
                                                        100
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        42.1DD29
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box cw">
                                                    CW
                                                    <div className="hero-dps">
                                                        0.3%
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box pos">
                                                    Pos
                                                    <div className="hero-dps">
                                                        +0.3
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green disabled0">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-gold"></span>
                                                        503
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        buff up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green cw">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-green"></span>
                                                        21K/130
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        percent up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green pos">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-blue"></span>
                                                        41.8K/130
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        position up
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gd-attr-girl-box">
                                            <div className="hero-avatar-box">
                                                <img
                                                    className="hero-avatar"
                                                    src="img/images/hero-all/tithero-23/x1/ava/tithero-23-1-ava.jpg"
                                                />
                                                <div className="sh2-icon-forgirl">
                                                    <img src="img/cur2-cleric.png" />
                                                </div>
                                                <div className="gd-hero-name">
                                                    Takaro Kaminoken
                                                </div>
                                            </div>
                                            <div className="gd-lvl-pds-box-all">
                                                <div className="hero-level-box">
                                                    buff lvl
                                                    <div className="hero-level">
                                                        100
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        3.21KD30
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box cw">
                                                    CW
                                                    <div className="hero-dps">
                                                        0.3%
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box pos">
                                                    Pos
                                                    <div className="hero-dps">
                                                        +0.3
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green disabled0">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-gold"></span>
                                                        503
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        buff up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green cw">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-green"></span>
                                                        21K/130
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        percent up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green pos">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-blue"></span>
                                                        41.8K/130
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        position up
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gd-attr-girl-box">
                                            <div className="hero-avatar-box">
                                                <img
                                                    className="hero-avatar"
                                                    src="img/images/hero-all/tithero-24/x1/ava/tithero-24-1-ava.jpg"
                                                />
                                                <div className="sh2-icon-forgirl">
                                                    <img src="img/cur2-wizard.png" />
                                                </div>
                                                <div className="gd-hero-name">
                                                    Ume Shinpu
                                                </div>
                                            </div>
                                            <div className="gd-lvl-pds-box-all">
                                                <div className="hero-level-box">
                                                    buff lvl
                                                    <div className="hero-level">
                                                        100
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        2.9OD29
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box cw">
                                                    CW
                                                    <div className="hero-dps">
                                                        0.3%
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box pos">
                                                    Pos
                                                    <div className="hero-dps">
                                                        +0.3
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green disabled0">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-gold"></span>
                                                        503
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        buff up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green cw">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-green"></span>
                                                        21K/130
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        percent up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green pos">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-blue"></span>
                                                        41.8K/130
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        position up
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gd-attr-girl-box">
                                            <div className="hero-avatar-box">
                                                <img
                                                    className="hero-avatar"
                                                    src="img/images/hero-all/tithero-25/x1/ava/tithero-25-1-ava.jpg"
                                                />
                                                <div className="sh2-icon-forgirl">
                                                    <img src="img/cur2-druid.png" />
                                                </div>
                                                <div className="gd-hero-name">
                                                    Amaya Karasu
                                                </div>
                                            </div>
                                            <div className="gd-lvl-pds-box-all">
                                                <div className="hero-level-box">
                                                    buff lvl
                                                    <div className="hero-level">
                                                        100
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        15.4DD29
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box cw">
                                                    CW
                                                    <div className="hero-dps">
                                                        0.3%
                                                    </div>
                                                </div>
                                                <div className="hero-dps-box pos">
                                                    Pos
                                                    <div className="hero-dps">
                                                        +0.3
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green disabled0">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-gold"></span>
                                                        503
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        buff up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green cw">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-green"></span>
                                                        21K/130
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        percent up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-btn green pos">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-blue"></span>
                                                        41.8K/130
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        position up
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gd-nl-box-all girl">
                                    <div className="gd-girl-box-all">
                                        <div className="hero-avatar-box cursor-pointer">
                                            <img
                                                className="hero-avatar"
                                                src="img/images/goddess/goddess-4/comics/ava/goddess-4-1-com-ava.jpg"
                                            />
                                            <div className="gd-av-bg-black">
                                                <div className="gd-av-block"></div>
                                            </div>
                                        </div>
                                        <div className="hero-avatar-box cursor-pointer">
                                            <img
                                                className="hero-avatar"
                                                src="img/images/goddess/goddess-4/comics/ava/goddess-4-2-com-ava.jpg"
                                            />
                                            <div className="gd-av-bg-black">
                                                <div className="gd-av-block"></div>
                                            </div>
                                        </div>
                                        <div className="hero-avatar-box cursor-pointer block">
                                            <img
                                                className="hero-avatar"
                                                src="img/images/goddess/goddess-4/comics/ava/goddess-4-3-com-ava.jpg"
                                            />
                                            <div className="gd-av-bg-black">
                                                <div className="gd-av-block"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gd-girl-prg-bal-all">
                                        <div
                                            className="gd-girl-prg"
                                            style={{ width: "55.75%" }}></div>
                                        <div className="gd-girl-prg-rd p1">
                                            <div className="gd-girl-prg-rd-txt">
                                                200
                                            </div>
                                        </div>
                                        <div className="gd-girl-prg-rd p2">
                                            <div className="gd-girl-prg-rd-txt">
                                                500
                                            </div>
                                        </div>
                                        <div className="gd-girl-prg-rd p3">
                                            <div className="gd-girl-prg-rd-txt">
                                                1000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trophy-res-box-all">
                                <div className="trophy-res-box spirit">
                                    <div
                                        className="trophy-value"
                                        style={{ width: "120px" }}>
                                        35
                                    </div>
                                </div>
                                <div className="trophy-res-box spirit2">
                                    <div
                                        className="trophy-value"
                                        style={{ width: "120px" }}>
                                        692
                                    </div>
                                </div>
                            </div>
                            <div className="btn-close-x"></div>
                        </div>
                    </div>
                    <div className="tabs-all-box">
                        <div className="tabs-all selected">
                            <div className="tabs-name">Heroes</div>
                            <div className="tabs-pic">
                                <img src="img/tab-01.png" />
                            </div>
                        </div>
                        <div className="tabs-all">
                            <div className="tabs-name">Album</div>
                            <div className="tabs-pic">
                                <img src="img/tab-05.png" />
                            </div>
                        </div>
                        <div className="tabs-all">
                            <div className="tabs-name">Guild</div>
                            <div className="tabs-pic">
                                <img src="img/tab-08.png" />
                            </div>
                        </div>
                        <div className="tabs-all">
                            <div className="tabs-name">Rating</div>
                            <div className="tabs-pic">
                                <img src="img/tab-02.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="popupWrapper" className="popup-layer">
                    <div className="screen-blend-55"></div>
                    <div id="popupContainer">
                        <div className="m-popup goddess-picture narrow">
                            <div className="btn-close-x"></div>
                            <img
                                className="img-goddess-picture"
                                src="img/images/goddess/goddess-4/x2/goddess-4-1.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(V2MainScreen21GoddessMainComponent);
