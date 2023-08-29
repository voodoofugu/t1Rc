import React from "react";
import screenBank from "../styles/screen-bank.scss";
import screenBank1 from "../styles/screen-bank1.scss";
import angelTab from "../styles/angel-tab.scss";
import screenSuperhero from "../styles/screen-superhero.scss";

const V2MainScreen01Component = () => {
    return (
        <>
            <div className="main world1">
                <div
                    className="main-bg"
                    style={{
                        "background-image":
                            "url('/images/back/new/09-River.jpg')",
                    }}></div>
                <div className="header">
                    <div className="resource-panel">
                        <div className="avatar-box-all">
                            <div className="avatar-box-pic">
                                <img src="hero0093-ava.jpg" />
                            </div>
                            <div className="avatar-box-name">Dormidont</div>
                        </div>
                        <div className="resource-gold">
                            <div className="value">6969K</div>
                            <div className="value-bonus">+6969K%</div>
                            <div className="resource-btn-add"></div>
                            <div className="resource-pic">
                                <img src="v2-res-gold.png" />
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
                        <div className="might-box-all">
                            <div>
                                <div className="might-box-pic">
                                    <img
                                        className="bg"
                                        src="https://cdn.faptitans.com/s1/rc/v2-cw-bg34.png"
                                    />
                                    <img
                                        className="fg"
                                        src="https://cdn.faptitans.com/s1/rc/v2-cw-p03.png"
                                    />
                                </div>
                                <div className="might-box-name">Clan</div>
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
                    <div className="signinout-btn">
                        <div className="icon-reg"></div>
                    </div>
                </div>
                <div className="quest-box-all">
                    <div className="quest-box-scroll">
                        <div className="quest-box">
                            <li className="quest">
                                <img
                                    className="icon"
                                    src="rc/ic-abil-reborn.png"
                                />
                            </li>
                        </div>
                        <div className="quest-box wrap closed">
                            <div className="quest-title-btn">offers</div>
                            <div className="quest-wrap">
                                <li className="quest angel-pop">
                                    <img
                                        className="icon"
                                        src="rc/picmeh-ic-angel-pop.png"
                                    />
                                </li>
                                <li className="quest angel-pop-x3">
                                    <img
                                        className="icon"
                                        src="rc/picmeh-ic-angel-pop-x3.png"
                                    />
                                </li>
                                <li
                                    className="quest default-hero"
                                    style={{ "animation-delay": "0ms" }}>
                                    <img
                                        className="icon"
                                        src="rc/ic-superhero-10.png"
                                    />
                                </li>
                                <li className="quest picmeh-info info">
                                    <img
                                        className="icon"
                                        src="rc/picmeh-ic-diamond.png"
                                    />
                                </li>
                                <li
                                    className="quest startpack open"
                                    style={{ "animation-delay": "450ms" }}>
                                    <img
                                        className="icon"
                                        src="https://cdn.faptitans.com/s1/rc/ic-hero-211.png"
                                    />
                                    <div className="timerbox">
                                        <div className="timer">23:29:14</div>
                                    </div>
                                    <div className="v2-uni-notif notif notif20"></div>
                                </li>
                                <li
                                    className="quest startpack open"
                                    style={{ "animation-delay": "600ms" }}>
                                    <img
                                        className="icon"
                                        src="rc/v2-ico-gold.png"
                                    />
                                    <div className="timerbox">
                                        <div className="timer">23:36:10</div>
                                    </div>
                                </li>
                            </div>
                        </div>
                        <div className="quest-box wrap">
                            <div className="quest-title-btn">events</div>
                            <div className="quest-wrap">
                                <li className="quest startpack wide">
                                    <img
                                        className="icon"
                                        src="https://cdn.faptitans.com/s1/rc/cw-quest-icon.png"
                                    />
                                    <div className="timerbox">
                                        <div className="timer">1D 03:08</div>
                                    </div>
                                </li>
                                <li
                                    className="quest startpack open"
                                    style={{ "animation-delay": "150ms" }}>
                                    <img
                                        className="icon"
                                        src="https://cdn.faptitans.com/s1/rc/v2-fw-icon-fr0.png"
                                    />
                                    <div className="timerbox">
                                        <div className="timer">71:32:33</div>
                                    </div>
                                </li>
                                <li className="quest startpack wide">
                                    <img
                                        className="icon"
                                        src="https://cdn.faptitans.com/s1/rc/v2-mn-soul-sg-160.png"
                                    />
                                </li>
                                <li
                                    className="quest open"
                                    style={{ "animation-delay": "750ms" }}>
                                    <img
                                        className="icon"
                                        src="rc/v2-ico-quest.png"
                                    />
                                </li>
                                <li className="quest marked">
                                    <img
                                        className="icon"
                                        src="rc/ic-quests.png"
                                    />
                                    <div className="quest-notif"></div>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="opt-panel-box">
                        <div className="color-bg"></div>
                        <div className="btn feedback"></div>
                        <div className="btn statistic"></div>
                        <div className="btn settings"></div>
                        <div className="btn ru"></div>
                    </div>
                    <div className="btn-discord"></div>
                </div>

                <div className="right-side">
                    <div className="darkness-progress-bar-wrap">
                        <div className="progress">
                            <div
                                className="fulfilled"
                                style={{ width: "40%" }}></div>
                        </div>
                        <div className="value">
                            <div className="from">400</div>
                            <div className="to">1000</div>
                        </div>
                    </div>
                    <div className="world-portal underworld">
                        <img src="portal-underworld.png" />
                        <div className="title">Underworld</div>
                    </div>
                    <div className="world-portal darkworld">
                        <img src="portal-darkworld.png" />
                        <div className="title">Darkworld</div>
                    </div>
                    <div className="buster-box">
                        <div className="buster-btn buster-gold x2 active">
                            <div className="buster-icn"></div>
                            <div className="timerbox">
                                <div className="timer">4:32:33</div>
                            </div>
                        </div>
                    </div>
                    <div className="monster"></div>
                    <div className="monster-prg-box-all">
                        <div className="lvl-prg">3/10</div>
                        <div className="name">The boss name</div>
                        <div className="health">
                            <div className="p100">
                                <div className="prg"></div>
                            </div>
                            <div className="num">
                                <div className="from">8888K</div>
                                <div className="to">6969K</div>
                            </div>
                        </div>
                        <div className="timer">
                            <div className="p100">
                                <div className="prg"></div>
                            </div>
                            <div className="time">
                                <div className="txt">12:22</div>
                            </div>
                        </div>
                        <div className="loc-list back">
                            <div className="loc-back">
                                <div className="lvl-prg-num">6969K</div>
                                <div className="lvl-prg-text">LVL</div>
                                <div className="lvl-prg-back">назад</div>
                            </div>
                            <div className="locs">
                                <div className="loc">
                                    <div className="loc-text">151</div>
                                    <div className="loc-text2">lvl</div>
                                </div>
                                <div className="loc">
                                    <div className="loc-text">152</div>
                                    <div className="loc-text2">lvl</div>
                                </div>
                                <div className="loc">
                                    <div className="loc-text">153</div>
                                    <div className="loc-text2">lvl</div>
                                </div>
                                <div className="loc">
                                    <div className="loc-text">154</div>
                                    <div className="loc-text2">lvl</div>
                                </div>
                                <div className="loc">
                                    <div className="loc-text">155</div>
                                    <div className="loc-text2">lvl</div>
                                </div>
                                <div className="loc">
                                    <div className="loc-text">156</div>
                                    <div className="loc-text2">lvl</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="back-boss-box">
                        <div className="color-btn">
                            <div className="color-btn-text">BACK TO BOSS</div>
                        </div>
                    </div>
                    <div className="boss-drop-box">
                        <div className="bd-name">предметы боссов</div>
                        <div className="bd-drops">
                            <div className="bd-stone">
                                <img src="ms-stone-blue.png" />
                            </div>
                            <div className="bd-check-box check">
                                <div className="bd-check"></div>
                            </div>
                        </div>
                        <div className="bd-drops two">
                            <div className="bd-stone">
                                <img src="ms-stone-green.png" />
                            </div>
                            <div className="bd-check-box">
                                <div className="bd-check"></div>
                            </div>
                        </div>
                        <div className="bd-drops chest received">
                            <div className="bd-stone">
                                <img src="change-sun1.png" />
                            </div>
                            <div className="bd-check-box1 check">
                                <div className="bd-check"></div>
                            </div>
                            <div className="bd-check-box2 check">
                                <div className="bd-check"></div>
                            </div>
                            <div className="bd-check-box3">
                                <div className="bd-check"></div>
                            </div>
                            <div className="end-banner">
                                <p className="txt">At next reborn</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-side">
                    <div className="left-panel">
                        <div className="heroes-list-all-box">
                            <div className="dps-dpc-panel-box">
                                <div className="dpc">
                                    <div className="value">20349</div>
                                    <div className="mlt-prm">x3212</div>
                                    <div className="title">
                                        DPC
                                        <div className="icon-dpc"></div>
                                    </div>
                                </div>
                                <div className="dps">
                                    <div className="value">234234T</div>
                                    <div className="mlt-prm">x3212</div>
                                    <div className="title">
                                        DPS
                                        <div className="icon-dps"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="all-heroes-box">
                                <div className="all-heroes-box-scroll">
                                    <div className="hero-card-box-all">
                                        <div className="hero-card starterpack">
                                            <div
                                                className="btn-close-x"
                                                style={{
                                                    zoom: "0.75",
                                                    top: "0px",
                                                    right: "0px",
                                                }}></div>
                                            <div className="hero-avatar-box">
                                                <img
                                                    className="hero-avatar"
                                                    src="https://cdn.faptitans.com/s1/__a62a/images/hero-all/tithero-328/x2/ava/tithero-328-1-ava.jpg"
                                                />
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="hero-level-box">
                                                Осталось
                                            </div>
                                            <div className="hero-dps-box">
                                                <div className="st-time">
                                                    15:01:37
                                                </div>
                                            </div>
                                            <div className="hero-name-box">
                                                <div className="hero-name">
                                                    Tokuda Arisu
                                                </div>
                                            </div>
                                            <div className="btn-buy starterpack">
                                                <div className="txt">
                                                    Купить
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hero-card highlight">
                                            <div className="hero-avatar-box">
                                                <img
                                                    className="hero-avatar"
                                                    src="rc/tithero-11-1-ava.jpg"
                                                />
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                            </div>
                                            <div className="hero-level-box">
                                                level
                                                <div className="hero-level">
                                                    6969
                                                </div>
                                            </div>
                                            <div className="hero-dps-box">
                                                dps
                                                <div className="hero-dps">
                                                    6969K
                                                </div>
                                            </div>
                                            <div className="hero-power-box">
                                                power
                                                <div className="hero-power">
                                                    223
                                                </div>
                                            </div>
                                            <div className="hero-name-box">
                                                <div className="hero-name">
                                                    Murayama Naora Blowjob
                                                </div>
                                            </div>
                                            <div className="color-btn green">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-gold">
                                                            10
                                                        </span>
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        Hire
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="v2-hero-notif notif notif10"></div>
                                            <div className="hero-abil-icon">
                                                <img src="icons/ic-abil-78.jpg" />
                                            </div>
                                        </div>
                                        <div className="hero-card disabled">
                                            <div className="hero-avatar-box">
                                                <img
                                                    className="hero-avatar"
                                                    src="rc/tithero-11-1-ava.jpg"
                                                />
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                            </div>
                                            <div className="hero-level-box">
                                                level
                                                <div className="hero-level">
                                                    6969
                                                </div>
                                            </div>
                                            <div className="hero-dps-box">
                                                dps
                                                <div className="hero-dps">
                                                    6969K
                                                </div>
                                            </div>
                                            <div className="hero-power-box">
                                                power
                                                <div className="hero-power">
                                                    223
                                                </div>
                                            </div>
                                            <div className="hero-name-box">
                                                <div className="hero-name">
                                                    Murayama Naora Blowjob
                                                </div>
                                            </div>
                                            <div className="color-btn green">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-gold">
                                                            6969K
                                                        </span>
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        hire
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hero-card bronzeCard">
                                            <div className="hero-avatar-box">
                                                <img
                                                    className="hero-avatar"
                                                    src="rc/tithero-11-1-ava.jpg"
                                                />
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                            </div>
                                            <div className="hero-level-box">
                                                level
                                                <div className="hero-level">
                                                    6969
                                                </div>
                                            </div>
                                            <div className="hero-dps-box">
                                                dps
                                                <div className="hero-dps">
                                                    6969K
                                                </div>
                                            </div>
                                            <div className="hero-power-box">
                                                power
                                                <div className="hero-power">
                                                    223
                                                </div>
                                            </div>
                                            <div className="hero-name-box">
                                                <div className="hero-name">
                                                    Murayama Naora Blowjob
                                                </div>
                                            </div>
                                            <div className="color-btn green">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-gold">
                                                            6969K
                                                        </span>
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-abil-icon">
                                                <img src="icons/ic-abil-78.jpg" />
                                            </div>
                                        </div>
                                        <div className="hero-card silverCard">
                                            <div className="hero-avatar-box">
                                                <img
                                                    className="hero-avatar"
                                                    src="rc/tithero-11-1-ava.jpg"
                                                />
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                            </div>
                                            <div className="hero-level-box">
                                                level
                                                <div className="hero-level">
                                                    6969
                                                </div>
                                            </div>
                                            <div className="hero-dps-box">
                                                dps
                                                <div className="hero-dps">
                                                    6969K
                                                </div>
                                            </div>
                                            <div className="hero-power-box">
                                                power
                                                <div className="hero-power">
                                                    223
                                                </div>
                                            </div>
                                            <div className="hero-name-box">
                                                <div className="hero-name">
                                                    Murayama Naora Blowjob
                                                </div>
                                            </div>
                                            <div className="color-btn green">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-gold">
                                                            6969K
                                                        </span>
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-abil-icon">
                                                <img src="icons/ic-abil-78.jpg" />
                                            </div>
                                        </div>
                                        <div className="hero-card goldCard">
                                            <div className="hero-avatar-box">
                                                <img
                                                    className="hero-avatar"
                                                    src="rc/tithero-11-1-ava.jpg"
                                                />
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                            </div>
                                            <div className="hero-level-box">
                                                level
                                                <div className="hero-level">
                                                    6969
                                                </div>
                                            </div>
                                            <div className="hero-dps-box">
                                                dps
                                                <div className="hero-dps">
                                                    6969K
                                                </div>
                                            </div>
                                            <div className="hero-power-box">
                                                power
                                                <div className="hero-power">
                                                    223
                                                </div>
                                            </div>
                                            <div className="hero-name-box">
                                                <div className="hero-name">
                                                    Murayama Naora Blowjob
                                                </div>
                                            </div>
                                            <div className="color-btn green">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-gold">
                                                            6969K
                                                        </span>
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-abil-icon">
                                                <img src="icons/ic-abil-78.jpg" />
                                            </div>
                                        </div>
                                        <div className="hero-card">
                                            <div className="hero-avatar-box">
                                                <img
                                                    className="hero-avatar"
                                                    src="rc/tithero-11-1-ava.jpg"
                                                />
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                            </div>
                                            <div className="hero-level-box">
                                                level
                                                <div className="hero-level">
                                                    6969
                                                </div>
                                            </div>
                                            <div className="hero-dps-box">
                                                dps
                                                <div className="hero-dps">
                                                    6969K
                                                </div>
                                            </div>
                                            <div className="hero-power-box">
                                                power
                                                <div className="hero-power">
                                                    223
                                                </div>
                                            </div>
                                            <div className="hero-name-box">
                                                <div className="hero-name">
                                                    Murayama Naora Blowjob
                                                </div>
                                            </div>
                                            <div className="color-btn green">
                                                <div className="color-btn-text">
                                                    <div className="gold">
                                                        <span className="f-gold">
                                                            6969K
                                                        </span>
                                                    </div>
                                                    <div className="color-btn-text1">
                                                        up
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-abil-icon">
                                                <img src="icons/ic-abil-78.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="x2-btn-all-box">
                                <div className="x2-btn selected">
                                    <div className="x2-btn-text">x1</div>
                                </div>
                                <div className="x2-btn">
                                    <div className="x2-btn-text">x10</div>
                                </div>
                                <div className="x2-btn">
                                    <div className="x2-btn-text">x25</div>
                                </div>
                                <div className="x2-btn">
                                    <div className="x2-btn-text">x100</div>
                                </div>
                                <div className="x2-btn">
                                    <div className="x2-btn-text">x200</div>
                                </div>
                                <div className="x2-btn">
                                    <div className="x2-btn-text">x500</div>
                                </div>
                                <div className="x2-btn">
                                    <div className="x2-btn-text">x1000</div>
                                </div>
                            </div>
                        </div>
                        <div className="womens-btns-screen">
                            <div className="womens-btns-content">
                                <div className="women-btn-wrap heros">
                                    <div className="title">HEROS</div>
                                    <div className="women-btn-box">
                                        <div className="img-wrap">
                                            <img src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5001/x2/tithero-5001-1.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="women-btn-wrap supheros">
                                    <div className="title">SUPERHEROS</div>
                                    <div className="women-btn-box">
                                        <div className="img-wrap">
                                            <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-03/x2/03sh-1.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="women-btn-wrap angels">
                                    <div className="title">ANGELS</div>
                                    <div className="women-btn-box">
                                        <div className="img-wrap">
                                            <img src="https://cdn.faptitans.com/s1/images/goddess/goddess-1/x2/goddess-1-1.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="angels-all-box">
                            <div className="angels-cards-content">
                                <div className="content-header">
                                    <div className="title">ANGELS</div>
                                    <div className="color-btn chest">
                                        <div className="btn-img"></div>
                                    </div>
                                    <div className="color-btn info">i</div>
                                </div>
                                <div className="angels-scroll-box">
                                    <div className="angel-card-box">
                                        <div className="img-wrap">
                                            <img src="https://cdn.faptitans.com/s1/images/goddess/goddess-1/x2/goddess-1-1.jpg" />
                                        </div>
                                        <div className="angel-name-box">
                                            <div className="angel-name">
                                                Amaterasu
                                            </div>
                                        </div>
                                        <div className="info-box">
                                            <div className="stars-box">
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                            </div>
                                            <div className="buff-level-info">
                                                Max Buff Level:
                                                <div className="level-value">
                                                    250
                                                </div>
                                            </div>
                                            <div className="buff-bonus-info">
                                                Buff Bonus:
                                                <div className="buff-value">
                                                    x3
                                                </div>
                                            </div>
                                            <div className="dps-box">
                                                <div className="dps-title">
                                                    DPS
                                                </div>
                                                <div className="dps-value">
                                                    1.43T
                                                </div>
                                            </div>
                                        </div>
                                        <div className="angel-card-progress-bar-wrap">
                                            <div className="progress">
                                                <div
                                                    className="fulfilled"
                                                    style={{
                                                        width: "40%",
                                                    }}></div>
                                            </div>
                                            <div className="value">
                                                You collect
                                                <div className="from">40</div>
                                                <div className="to">100</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="angel-card-box">
                                        <div className="img-wrap">
                                            <img src="https://cdn.faptitans.com/s1/images/goddess/goddess-2/x2/goddess-2-1.jpg" />
                                        </div>
                                        <div className="angel-name-box">
                                            <div className="angel-name">
                                                Amaterasu
                                            </div>
                                        </div>
                                        <div className="info-box">
                                            <div className="stars-box">
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                            </div>
                                            <div className="buff-level-info">
                                                Max Buff Level:
                                                <div className="level-value">
                                                    250
                                                </div>
                                            </div>
                                            <div className="buff-bonus-info">
                                                Buff Bonus:
                                                <div className="buff-value">
                                                    x3
                                                </div>
                                            </div>
                                            <div className="dps-box">
                                                <div className="dps-title">
                                                    DPS
                                                </div>
                                                <div className="dps-value">
                                                    1.43T
                                                </div>
                                            </div>
                                        </div>
                                        <div className="angel-card-progress-bar-wrap">
                                            <div className="progress">
                                                <div
                                                    className="fulfilled"
                                                    style={{
                                                        width: "40%",
                                                    }}></div>
                                            </div>
                                            <div className="value">
                                                You collect
                                                <div className="from">40</div>
                                                <div className="to">100</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="angel-card-box lock">
                                        <div className="img-wrap">
                                            <img src="https://cdn.faptitans.com/s1/images/goddess/goddess-3/x2/goddess-3-1.jpg" />
                                        </div>
                                        <div className="angel-name-box">
                                            <div className="angel-name">
                                                Amaterasu
                                            </div>
                                        </div>
                                        <div className="info-box">
                                            <div className="stars-box">
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                            </div>
                                            <div className="buff-level-info">
                                                Max Buff Level:
                                                <div className="level-value">
                                                    250
                                                </div>
                                            </div>
                                            <div className="buff-bonus-info">
                                                Buff Bonus:
                                                <div className="buff-value">
                                                    x3
                                                </div>
                                            </div>
                                            <div className="dps-box">
                                                <div className="dps-title">
                                                    DPS
                                                </div>
                                                <div className="dps-value">
                                                    1.43T
                                                </div>
                                            </div>
                                        </div>
                                        <div className="angel-card-progress-bar-wrap">
                                            <div className="progress">
                                                <div
                                                    className="fulfilled"
                                                    style={{
                                                        width: "40%",
                                                    }}></div>
                                            </div>
                                            <div className="value">
                                                You collect
                                                <div className="from">40</div>
                                                <div className="to">100</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="angel-card-box lock">
                                        <div className="img-wrap">
                                            <img src="https://cdn.faptitans.com/s1/images/goddess/goddess-4/x2/goddess-4-1.jpg" />
                                        </div>
                                        <div className="angel-name-box">
                                            <div className="angel-name">
                                                Amaterasu
                                            </div>
                                        </div>
                                        <div className="info-box">
                                            <div className="stars-box">
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                            </div>
                                            <div className="buff-level-info">
                                                Max Buff Level:
                                                <div className="level-value">
                                                    250
                                                </div>
                                            </div>
                                            <div className="buff-bonus-info">
                                                Buff Bonus:
                                                <div className="buff-value">
                                                    x3
                                                </div>
                                            </div>
                                            <div className="dps-box">
                                                <div className="dps-title">
                                                    DPS
                                                </div>
                                                <div className="dps-value">
                                                    1.43T
                                                </div>
                                            </div>
                                        </div>
                                        <div className="angel-card-progress-bar-wrap">
                                            <div className="progress">
                                                <div
                                                    className="fulfilled"
                                                    style={{
                                                        width: "40%",
                                                    }}></div>
                                            </div>
                                            <div className="value">
                                                You collect
                                                <div className="from">40</div>
                                                <div className="to">100</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="angel-card-box lock">
                                        <div className="img-wrap">
                                            <img src="https://cdn.faptitans.com/s1/images/goddess/goddess-5/x2/goddess-5-1.jpg" />
                                        </div>
                                        <div className="angel-name-box">
                                            <div className="angel-name">
                                                Amaterasu
                                            </div>
                                        </div>
                                        <div className="info-box">
                                            <div className="stars-box">
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                            </div>
                                            <div className="buff-level-info">
                                                Max Buff Level:
                                                <div className="level-value">
                                                    250
                                                </div>
                                            </div>
                                            <div className="buff-bonus-info">
                                                Buff Bonus:
                                                <div className="buff-value">
                                                    x3
                                                </div>
                                            </div>
                                            <div className="dps-box">
                                                <div className="dps-title">
                                                    DPS
                                                </div>
                                                <div className="dps-value">
                                                    1.43T
                                                </div>
                                            </div>
                                        </div>
                                        <div className="angel-card-progress-bar-wrap">
                                            <div className="progress">
                                                <div
                                                    className="fulfilled"
                                                    style={{
                                                        width: "40%",
                                                    }}></div>
                                            </div>
                                            <div className="value">
                                                You collect
                                                <div className="from">40</div>
                                                <div className="to">100</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="angel-card-box lock">
                                        <div className="img-wrap">
                                            <img src="https://cdn.faptitans.com/s1/images/goddess/goddess-6/x2/goddess-6-1.jpg" />
                                        </div>
                                        <div className="angel-name-box">
                                            <div className="angel-name">
                                                Amaterasu
                                            </div>
                                        </div>
                                        <div className="info-box">
                                            <div className="stars-box">
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                            </div>
                                            <div className="buff-level-info">
                                                Max Buff Level:
                                                <div className="level-value">
                                                    250
                                                </div>
                                            </div>
                                            <div className="buff-bonus-info">
                                                Buff Bonus:
                                                <div className="buff-value">
                                                    x3
                                                </div>
                                            </div>
                                            <div className="dps-box">
                                                <div className="dps-title">
                                                    DPS
                                                </div>
                                                <div className="dps-value">
                                                    1.43T
                                                </div>
                                            </div>
                                        </div>
                                        <div className="angel-card-progress-bar-wrap">
                                            <div className="progress">
                                                <div
                                                    className="fulfilled"
                                                    style={{
                                                        width: "40%",
                                                    }}></div>
                                            </div>
                                            <div className="value">
                                                You collect
                                                <div className="from">40</div>
                                                <div className="to">100</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="angel-card-box lock">
                                        <div className="img-wrap">
                                            <img src="https://cdn.faptitans.com/s1/images/goddess/goddess-2/x2/goddess-2-1.jpg" />
                                        </div>
                                        <div className="angel-name-box">
                                            <div className="angel-name">
                                                Amaterasu
                                            </div>
                                        </div>
                                        <div className="info-box">
                                            <div className="stars-box">
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                            </div>
                                            <div className="buff-level-info">
                                                Max Buff Level:
                                                <div className="level-value">
                                                    250
                                                </div>
                                            </div>
                                            <div className="buff-bonus-info">
                                                Buff Bonus:
                                                <div className="buff-value">
                                                    x3
                                                </div>
                                            </div>
                                            <div className="dps-box">
                                                <div className="dps-title">
                                                    DPS
                                                </div>
                                                <div className="dps-value">
                                                    1.43T
                                                </div>
                                            </div>
                                        </div>
                                        <div className="angel-card-progress-bar-wrap">
                                            <div className="progress">
                                                <div
                                                    className="fulfilled"
                                                    style={{
                                                        width: "40%",
                                                    }}></div>
                                            </div>
                                            <div className="value">
                                                You collect
                                                <div className="from">40</div>
                                                <div className="to">100</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="angel-card-box lock">
                                        <div className="img-wrap">
                                            <img src="https://cdn.faptitans.com/s1/images/goddess/goddess-2/x2/goddess-2-1.jpg" />
                                        </div>
                                        <div className="angel-name-box">
                                            <div className="angel-name">
                                                Amaterasu
                                            </div>
                                        </div>
                                        <div className="info-box">
                                            <div className="stars-box">
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                            </div>
                                            <div className="buff-level-info">
                                                Max Buff Level:
                                                <div className="level-value">
                                                    250
                                                </div>
                                            </div>
                                            <div className="buff-bonus-info">
                                                Buff Bonus:
                                                <div className="buff-value">
                                                    x3
                                                </div>
                                            </div>
                                            <div className="dps-box">
                                                <div className="dps-title">
                                                    DPS
                                                </div>
                                                <div className="dps-value">
                                                    1.43T
                                                </div>
                                            </div>
                                        </div>
                                        <div className="angel-card-progress-bar-wrap">
                                            <div className="progress">
                                                <div
                                                    className="fulfilled"
                                                    style={{
                                                        width: "40%",
                                                    }}></div>
                                            </div>
                                            <div className="value">
                                                You collect
                                                <div className="from">40</div>
                                                <div className="to">100</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-info-content">
                                <div className="trophy-res-box-all">
                                    <div className="trophy-res-box spirit">
                                        <div className="trophy-value">1000</div>
                                        <div className="trophy-value-btn-add angels"></div>
                                    </div>
                                    <div className="trophy-res-box spirit2">
                                        <div className="trophy-value">1000</div>
                                        <div className="trophy-value-btn-add"></div>
                                    </div>
                                </div>
                                <div className="content-header">
                                    <div className="btn-close-x"></div>
                                    <div className="color-btn info">i</div>
                                    <div className="title">
                                        Ангел
                                        <div className="angel-name">
                                            Amaterasu
                                        </div>
                                    </div>
                                    <div className="dps">
                                        <div className="value">2.32B</div>
                                        <div className="dps-title">
                                            DPS
                                            <div className="icon-dps"></div>
                                        </div>
                                    </div>
                                    <div className="angels-heros-title">
                                        Героини Ангела
                                    </div>
                                </div>
                                <div className="angels-icons-box-all">
                                    <div className="angels-icons-scroll-box">
                                        <div className="angel-avatar-box">
                                            <div className="angel-avatar-wrap">
                                                <img
                                                    className="angel-avatar"
                                                    src="https://cdn.faptitans.com/s1/images/goddess/goddess-1/x2/ava/goddess-1-1-ava.jpg"
                                                />
                                            </div>
                                        </div>
                                        <div className="angel-avatar-box selected">
                                            <div className="angel-avatar-wrap">
                                                <img
                                                    className="angel-avatar"
                                                    src="https://cdn.faptitans.com/s1/images/goddess/goddess-2/x2/ava/goddess-2-1-ava.jpg"
                                                />
                                            </div>
                                        </div>
                                        <div className="angel-avatar-box lock">
                                            <div className="angel-avatar-wrap">
                                                <img
                                                    className="angel-avatar"
                                                    src="https://cdn.faptitans.com/s1/images/goddess/goddess-3/x2/ava/goddess-3-1-ava.jpg"
                                                />
                                            </div>
                                        </div>
                                        <div className="angel-avatar-box lock">
                                            <div className="angel-avatar-wrap">
                                                <img
                                                    className="angel-avatar"
                                                    src="https://cdn.faptitans.com/s1/images/goddess/goddess-4/x2/ava/goddess-4-1-ava.jpg"
                                                />
                                            </div>
                                        </div>
                                        <div className="angel-avatar-box lock">
                                            <div className="angel-avatar-wrap">
                                                <img
                                                    className="angel-avatar"
                                                    src="https://cdn.faptitans.com/s1/images/goddess/goddess-5/x2/ava/goddess-5-1-ava.jpg"
                                                />
                                            </div>
                                        </div>
                                        <div className="angel-avatar-box lock">
                                            <div className="angel-avatar-wrap">
                                                <img
                                                    className="angel-avatar"
                                                    src="https://cdn.faptitans.com/s1/images/goddess/goddess-6/x2/ava/goddess-6-1-ava.jpg"
                                                />
                                            </div>
                                        </div>
                                        <div className="angel-avatar-box lock">
                                            <div className="angel-avatar-wrap">
                                                <img
                                                    className="angel-avatar"
                                                    src="https://cdn.faptitans.com/s1/images/goddess/goddess-6/x2/ava/goddess-6-1-ava.jpg"
                                                />
                                            </div>
                                        </div>
                                        <div className="angel-avatar-box lock">
                                            <div className="angel-avatar-wrap">
                                                <img
                                                    className="angel-avatar"
                                                    src="https://cdn.faptitans.com/s1/images/goddess/goddess-6/x2/ava/goddess-6-1-ava.jpg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="color-btn chest">
                                        <div className="btn-img"></div>
                                    </div>
                                </div>
                                <div className="selected-angel-box">
                                    <div className="angel-card-box">
                                        <div className="img-wrap">
                                            <img src="https://cdn.faptitans.com/s1/images/goddess/goddess-2/x2/goddess-2-1.jpg" />
                                            <div className="b-fs"></div>
                                        </div>
                                        <div className="info-box">
                                            <div className="stars-box">
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star active"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                            </div>
                                            <div className="text-box">
                                                <div className="text1">
                                                    Current Star
                                                    <div className="buff-level-info">
                                                        Max Buff Level:
                                                        <div className="level-value">
                                                            250
                                                        </div>
                                                    </div>
                                                    <div className="buff-bonus-info">
                                                        Buff Bonus:
                                                        <div className="buff-value">
                                                            x3
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text2">
                                                    Current Star
                                                    <div className="buff-level-info">
                                                        Max Buff Level:
                                                        <div className="level-value">
                                                            250
                                                        </div>
                                                    </div>
                                                    <div className="buff-bonus-info">
                                                        Buff Bonus:
                                                        <div className="buff-value">
                                                            x3
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="angel-card-progress-bar-wrap">
                                            <div className="progress">
                                                <div
                                                    className="fulfilled"
                                                    style={{
                                                        width: "50%",
                                                    }}></div>
                                            </div>
                                            <div className="value">
                                                <div className="from">500</div>
                                                <div className="to">1000</div>
                                            </div>
                                        </div>
                                        <div className="arrow-box-all">
                                            <div className="btn-scroll-card left"></div>
                                            <div className="btn-scroll-card right"></div>
                                        </div>
                                        <div className="color-btn green get-angel">
                                            <div className="color-btn-text">
                                                Get Angel
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-box">
                                        <div className="selected-angel-icons-box">
                                            <div className="angel-avatar-box">
                                                <div className="angel-avatar-wrap">
                                                    <img
                                                        className="angel-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/goddess/goddess-2/comics/ava/goddess-2-1-com-ava.jpg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="angel-avatar-box">
                                                <div className="angel-avatar-wrap">
                                                    <img
                                                        className="angel-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/goddess/goddess-2/comics/ava/goddess-2-2-com-ava.jpg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="angel-avatar-box lock">
                                                <div className="angel-avatar-wrap">
                                                    <img
                                                        className="angel-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/goddess/goddess-2/comics/ava/goddess-2-3-com-ava.jpg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="angel-avatar-box lock">
                                                <div className="angel-avatar-wrap">
                                                    <img
                                                        className="angel-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/goddess/goddess-2/comics/ava/goddess-2-4-com-ava.jpg"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="selected-angel-progress-bar-wrap">
                                            <div className="progress">
                                                <div
                                                    className="fulfilled"
                                                    style={{
                                                        width: "60%",
                                                    }}></div>
                                            </div>
                                            <div className="progress-level-wrap">
                                                <div className="progress-level l1">
                                                    <div className="progress-level-txt">
                                                        200
                                                    </div>
                                                </div>
                                                <div className="progress-level l2">
                                                    <div className="progress-level-txt">
                                                        500
                                                    </div>
                                                </div>
                                                <div className="progress-level l3">
                                                    <div className="progress-level-txt">
                                                        1000
                                                    </div>
                                                </div>
                                                <div className="progress-level l4">
                                                    <div className="progress-level-txt">
                                                        2000
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="angels-heros-box-wrap">
                                    <div className="angels-heros-box">
                                        <div className="hero-page-wrapper">
                                            <div className="hero-btn-card-add">
                                                <div className="color-btn add">
                                                    <div className="color-btn-text">
                                                        <div className="color-btn-text">
                                                            +
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-card">
                                                <div className="hero-avatar-box">
                                                    <div className="hero-avatar-wrap">
                                                        <img
                                                            className="hero-avatar"
                                                            src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                                                        />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="cur2-barbarian.png" />
                                                    </div>
                                                    <div className="hero-level-box">
                                                        lvl
                                                        <div className="hero-level">
                                                            20
                                                        </div>
                                                    </div>
                                                    <div className="hero-dps-box">
                                                        dps
                                                        <div className="hero-dps">
                                                            1.5M
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="color-btn green">
                                                    <div className="color-btn-text">
                                                        <div className="gold">
                                                            <span className="f-gold">
                                                                6969K
                                                            </span>
                                                        </div>
                                                        <div className="color-btn-text">
                                                            buff up
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-card">
                                                <div className="hero-avatar-box">
                                                    <div className="hero-avatar-wrap">
                                                        <img
                                                            className="hero-avatar"
                                                            src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                                                        />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="cur2-barbarian.png" />
                                                    </div>
                                                    <div className="hero-level-box">
                                                        lvl
                                                        <div className="hero-level">
                                                            20
                                                        </div>
                                                    </div>
                                                    <div className="hero-dps-box">
                                                        dps
                                                        <div className="hero-dps">
                                                            1.5M
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="color-btn green">
                                                    <div className="color-btn-text">
                                                        <div className="gold">
                                                            <span className="f-gold">
                                                                6969K
                                                            </span>
                                                        </div>
                                                        <div className="color-btn-text">
                                                            buff up
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-card">
                                                <div className="hero-avatar-box">
                                                    <div className="hero-avatar-wrap">
                                                        <img
                                                            className="hero-avatar"
                                                            src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                                                        />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="cur2-barbarian.png" />
                                                    </div>
                                                    <div className="hero-level-box">
                                                        lvl
                                                        <div className="hero-level">
                                                            20
                                                        </div>
                                                    </div>
                                                    <div className="hero-dps-box">
                                                        dps
                                                        <div className="hero-dps">
                                                            1.5M
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="color-btn green">
                                                    <div className="color-btn-text">
                                                        <div className="gold">
                                                            <span className="f-gold">
                                                                6969K
                                                            </span>
                                                        </div>
                                                        <div className="color-btn-text">
                                                            buff up
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-card">
                                                <div className="hero-avatar-box">
                                                    <div className="hero-avatar-wrap">
                                                        <img
                                                            className="hero-avatar"
                                                            src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                                                        />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="cur2-barbarian.png" />
                                                    </div>
                                                    <div className="hero-level-box">
                                                        lvl
                                                        <div className="hero-level">
                                                            20
                                                        </div>
                                                    </div>
                                                    <div className="hero-dps-box">
                                                        dps
                                                        <div className="hero-dps">
                                                            1.5M
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="color-btn green">
                                                    <div className="color-btn-text">
                                                        <div className="gold">
                                                            <span className="f-gold">
                                                                6969K
                                                            </span>
                                                        </div>
                                                        <div className="color-btn-text">
                                                            buff up
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-card">
                                                <div className="hero-avatar-box">
                                                    <div className="hero-avatar-wrap">
                                                        <img
                                                            className="hero-avatar"
                                                            src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                                                        />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="cur2-barbarian.png" />
                                                    </div>
                                                    <div className="hero-level-box">
                                                        lvl
                                                        <div className="hero-level">
                                                            20
                                                        </div>
                                                    </div>
                                                    <div className="hero-dps-box">
                                                        dps
                                                        <div className="hero-dps">
                                                            1.5M
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="color-btn green">
                                                    <div className="color-btn-text">
                                                        <div className="gold">
                                                            <span className="f-gold">
                                                                6969K
                                                            </span>
                                                        </div>
                                                        <div className="color-btn-text">
                                                            buff up
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-scroll-dark left slick-disabled"></div>
                                    <div className="btn-scroll-dark right"></div>
                                    <div className="x2-btn">
                                        <div className="x2-btn-text">x10</div>
                                    </div>
                                </div>
                                <div className="supheros-bottom-content">
                                    <div className="supheros-bonus-wrap">
                                        SuperHeroes Bonus:
                                        <div className="supheros-bonus-value">
                                            0
                                        </div>
                                    </div>
                                    <div className="color-btn supheros">
                                        <div className="color-btn-text">
                                            SuperHeroes
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills-all-box">
                            <div className="skills-all">
                                <div className="skills-pic in-progress">
                                    <img src="skill-icons/skill-icon01.png" />
                                    <div className="timer">00:00:20</div>
                                    <div className="skills-pic-disabled"></div>
                                </div>
                                <div className="skills-pic idle">
                                    <img
                                        className="icon"
                                        src="rc/skill-icons/skill-icon02.png"
                                    />
                                    <div className="timer">00:01:11</div>
                                    <div className="skills-pic-disabled"></div>
                                </div>
                                <div className="skills-pic">
                                    <img src="skill-icons/skill-icon03.png" />
                                    <div className="skills-pic-disabled"></div>
                                </div>
                                <div className="skills-pic">
                                    <img src="skill-icons/skill-icon04.png" />
                                    <div className="skills-pic-disabled"></div>
                                </div>
                                <div className="skills-pic disabled">
                                    <img src="skill-icons/skill-icon05.png" />
                                    <div className="skills-pic-disabled"></div>
                                </div>
                                <div className="skills-pic disabled">
                                    <img src="skill-icons/skill-icon06.png" />
                                    <div className="skills-pic-disabled"></div>
                                </div>
                                <div className="skills-pic disabled">
                                    <img src="skill-icons/skill-icon07.png" />
                                    <div className="skills-pic-disabled"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabs-all-box">
                        <div className="tabs-all heroes selected">
                            <div className="tabs-name">Heroes</div>
                            <div className="tabs-pic">
                                <img src="tab-01.png" />
                            </div>
                        </div>
                        <div className="tabs-all">
                            <div className="tabs-name">Album</div>
                            <div className="tabs-pic">
                                <img src="tab-05.png" />
                            </div>
                        </div>
                        <div className="tabs-all">
                            <div className="tabs-name">Guild</div>
                            <div className="tabs-pic">
                                <img src="tab-08.png" />
                            </div>
                        </div>
                        <div className="tabs-all">
                            <div className="tabs-name">Rating</div>
                            <div className="tabs-pic">
                                <img src="tab-02.png" />
                            </div>
                        </div>
                        <div className="tabs-all w-house2">
                            <div className="tabs-name">Women's</div>
                            <div className="tabs-pic">
                                <img src="tab-11.png" />
                            </div>
                        </div>
                        <div className="tabs-all w-house">
                            <div className="tabs-name">Angels</div>
                            <div className="tabs-pic">
                                <img src="tab-12.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="popupAll" className="popup-hiden">
                    <div id="popupWrapper" className="popup-layer">
                        <div className="screen-blend-55"></div>
                        <div id="popupContainer" className="popup-in">
                            <div className="m-popup sign-in pop-in">
                                <div className="title">Вход</div>
                                <div className="color-box"></div>
                                <div className="content sign-in1 error">
                                    <div className="err-msg1">
                                        Требуется пароль
                                    </div>
                                    <div className="sign-in-form">
                                        <div className="block-a">
                                            <label className="tfield username">
                                                Имя пользователя
                                                <input
                                                    type="text"
                                                    name="username"
                                                    className="itext username"
                                                    value=""
                                                />
                                            </label>
                                            <label className="tfield password">
                                                Пароль
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="itext password"
                                                    value=""
                                                />
                                                <div className="note">
                                                    Забыли пароль?
                                                </div>
                                            </label>
                                        </div>
                                        <div className="btn-simple-gold btn-ok">
                                            Войти
                                        </div>
                                        <div className="alt-step">
                                            Нет пароля?&nbsp;
                                            <span className="go">
                                                Регистрация
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>

                            <div className="m-popup sign-in pop-reg">
                                <div className="title">Регистрация</div>
                                <div className="color-box"></div>
                                <div className="content sign-up2">
                                    <div className="text-1">
                                        На ваш почтовый адрес было отправлено
                                        письмо с кодом подтверждения.
                                        Пожалуйста, введите его тут
                                    </div>
                                    <div className="megapack-banner">
                                        <div className="g1">
                                            <div className="num">+100%</div>
                                            <div className="txt">
                                                Шанс выпадения
                                            </div>
                                        </div>
                                        <div className="g2 tickets">
                                            <div className="num">+5</div>
                                            <div className="txt">tickets</div>
                                        </div>
                                        <div className="g3">
                                            <div className="num">+10</div>
                                            <div className="txt">DPC</div>
                                        </div>
                                    </div>
                                    <div className="sign-up-form">
                                        <div className="block-a">
                                            <label className="tfield code">
                                                Код подтверждения
                                                <p className="error"></p>
                                                <input
                                                    type="text"
                                                    name="code"
                                                    className="itext code"
                                                    value=""
                                                />
                                            </label>
                                            <label className="tfield check">
                                                Возникла проблема?&nbsp;
                                                <a
                                                    className="verifyHelp"
                                                    href="#">
                                                    Кликните здесь!
                                                </a>
                                            </label>
                                        </div>
                                        <div className="btn-simple-gold btn-ok">
                                            Подтвердить
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>

                            <div className="m-popup chests-shop">
                                <div className="title">Chest Shop</div>
                                <div className="content">
                                    <div className="content-header">
                                        <div className="trophy-res-box diamonds">
                                            <div className="trophy-value">
                                                1000
                                            </div>
                                            <div className="trophy-value-btn-add"></div>
                                        </div>
                                        <div className="trophy-res-box oil">
                                            <div className="trophy-value">
                                                1000
                                            </div>
                                            <div className="trophy-value-btn-add"></div>
                                        </div>
                                        <div className="trophy-res-box spirit">
                                            <div className="trophy-value">
                                                1000
                                            </div>
                                            <div className="trophy-value-btn-add"></div>
                                        </div>
                                    </div>
                                    <div className="item-box">
                                        <div className="store-item-box">
                                            <div className="store-name">
                                                Boss Chest
                                            </div>
                                            <div className="item">
                                                <img src="https://cdn.faptitans.com/s1/rc/change-sun1.png" />
                                                <div className="reward-value">
                                                    100
                                                </div>
                                            </div>
                                            <div className="chest-currency"></div>
                                            <div className="color-btn gold">
                                                <div className="color-btn-text">
                                                    Open
                                                </div>
                                            </div>
                                        </div>
                                        <div className="store-item-box orange">
                                            <div className="store-name">
                                                Superhero Chest
                                            </div>
                                            <div className="item">
                                                <img
                                                    className="winner-prize"
                                                    src="https://cdn.faptitans.com/s1/rc/sh-icon-chest-128.png"
                                                />
                                                <div className="reward-value">
                                                    100
                                                </div>
                                            </div>
                                            <div className="chest-currency"></div>
                                            <div className="color-btn gold">
                                                <div className="color-btn-text">
                                                    Open
                                                </div>
                                            </div>
                                        </div>
                                        <div className="store-item-box blue">
                                            <div className="store-name">
                                                Superhero Chest
                                            </div>
                                            <div className="item">
                                                <img src="sh-icon-chest-dark.png" />
                                                <div className="reward-value">
                                                    100
                                                </div>
                                            </div>
                                            <div className="chest-currency"></div>
                                            <div className="color-btn gold">
                                                <div className="color-btn-text">
                                                    Open
                                                </div>
                                            </div>
                                        </div>
                                        <div className="store-item-box gold">
                                            <div className="store-name">
                                                Angel Chest
                                            </div>
                                            <div className="item">
                                                <img src="darkworld-chest-agels.png" />
                                                <div className="reward-value">
                                                    100
                                                </div>
                                            </div>
                                            <div className="chest-currency"></div>
                                            <div className="color-btn gold">
                                                <div className="color-btn-text">
                                                    Open
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>

                            <div className="m-popup busters gold-coins">
                                <div className="title">Нужен Бонус Сейчас?</div>
                                <div className="content">
                                    <div className="buster-imgs-box">
                                        <div className="buster-stand"></div>
                                        <div className="buster-icn"></div>
                                        <div className="buster-value">x2</div>
                                    </div>
                                    <div className="title">
                                        Получи
                                        <div className="dps-value">x2</div>к
                                        Золоту
                                    </div>
                                    <div className="text-description">
                                        Описание оффера, текст про оффер
                                    </div>
                                    <div className="time-of-action">
                                        Время действия бонуса
                                        <div className="buster-name">
                                            DPS x4
                                        </div>
                                        <div className="time">12h:35m:50s</div>
                                    </div>
                                    <div className="color-btn gold bay">
                                        <div className="color-btn-text">
                                            <span className="f-gold">50</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>

                            <div className="m-popup add-resources-popup">
                                <div className="title">Купите еще gold!</div>
                                <div className="res gold">
                                    <div className="item undefined">
                                        <div className="icon gold time">
                                            <div className="reborn">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-reborn.png" />
                                            </div>
                                            <div className="gold">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-gold.png" />
                                            </div>
                                            <div className="dark_gold">
                                                <img src="https://cdn.faptitans.com/s1/rc/v2-res-dark.png" />
                                            </div>
                                            <div className="shards">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-butil.png" />
                                            </div>
                                            <div className="gems">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-rubin.png" />
                                            </div>
                                            <div className="gold-shards">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-gold-but.png" />
                                            </div>
                                            <div className="ice_gold">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-ice_gold.png" />
                                            </div>
                                            <div className="newtime t1h">
                                                <div className="newclocktime">
                                                    1
                                                </div>
                                            </div>
                                            <div className="rate red">+%</div>
                                        </div>
                                        <div className="desc-box with-reward">
                                            <div className="desc-title">
                                                Gold for 1h
                                            </div>
                                            <div className="desc-price">
                                                <span>
                                                    <span className="price gold glow">
                                                        4.21BD25
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="decs-text">
                                                You instantly get Gold, as if
                                                you played for 1h.
                                            </div>
                                        </div>
                                        <div className="btn-panel">
                                            <div className="btn-box">
                                                <div className="btn-buy">
                                                    <div className="price diamonds">
                                                        5
                                                    </div>
                                                    <div className="txt">
                                                        Buy
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item undefined">
                                        <div className="icon gold time">
                                            <div className="reborn">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-reborn.png" />
                                            </div>
                                            <div className="gold">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-gold.png" />
                                            </div>
                                            <div className="dark_gold">
                                                <img src="https://cdn.faptitans.com/s1/rc/v2-res-dark.png" />
                                            </div>
                                            <div className="shards">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-butil.png" />
                                            </div>
                                            <div className="gems">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-rubin.png" />
                                            </div>
                                            <div className="gold-shards">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-gold-but.png" />
                                            </div>
                                            <div className="ice_gold">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-ice_gold.png" />
                                            </div>
                                            <div className="newtime t6h">
                                                <div className="newclocktime">
                                                    6
                                                </div>
                                            </div>
                                            <div className="rate red">+%</div>
                                        </div>
                                        <div className="desc-box with-reward">
                                            <div className="desc-title">
                                                Gold for 6h
                                            </div>
                                            <div className="desc-price">
                                                <span>
                                                    <span className="price gold glow">
                                                        25.2BD25
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="decs-text">
                                                You instantly get Gold, as if
                                                you played for 6h.
                                            </div>
                                        </div>
                                        <div className="btn-panel">
                                            <div className="btn-box">
                                                <div className="btn-buy">
                                                    <div className="price diamonds">
                                                        8
                                                    </div>
                                                    <div className="txt">
                                                        Buy
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item undefined">
                                        <div className="icon gold time">
                                            <div className="reborn">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-reborn.png" />
                                            </div>
                                            <div className="gold">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-gold.png" />
                                            </div>
                                            <div className="dark_gold">
                                                <img src="https://cdn.faptitans.com/s1/rc/v2-res-dark.png" />
                                            </div>
                                            <div className="shards">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-butil.png" />
                                            </div>
                                            <div className="gems">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-rubin.png" />
                                            </div>
                                            <div className="gold-shards">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-gold-but.png" />
                                            </div>
                                            <div className="ice_gold">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-ice_gold.png" />
                                            </div>
                                            <div className="newtime t24h">
                                                <div className="newclocktime">
                                                    24
                                                </div>
                                            </div>
                                            <div className="rate red">+%</div>
                                        </div>
                                        <div className="desc-box with-reward">
                                            <div className="desc-title">
                                                Gold for 24h
                                            </div>
                                            <div className="desc-price">
                                                <span>
                                                    <span className="price gold glow">
                                                        101BD25
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="decs-text">
                                                You instantly get Gold, as if
                                                you played for 24h.
                                            </div>
                                        </div>
                                        <div className="btn-panel">
                                            <div className="btn-box">
                                                <div className="btn-buy">
                                                    <div className="price diamonds">
                                                        15
                                                    </div>
                                                    <div className="txt">
                                                        Buy
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item undefined">
                                        <div className="icon gold time">
                                            <div className="reborn">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-reborn.png" />
                                            </div>
                                            <div className="gold">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-gold.png" />
                                            </div>
                                            <div className="dark_gold">
                                                <img src="https://cdn.faptitans.com/s1/rc/v2-res-dark.png" />
                                            </div>
                                            <div className="shards">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-butil.png" />
                                            </div>
                                            <div className="gems">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-rubin.png" />
                                            </div>
                                            <div className="gold-shards">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-abil-gold-but.png" />
                                            </div>
                                            <div className="ice_gold">
                                                <img src="https://cdn.faptitans.com/s1/rc/ic-ice_gold.png" />
                                            </div>
                                            <div className="newtime t72h">
                                                <div className="newclocktime">
                                                    72
                                                </div>
                                            </div>
                                            <div className="rate red">+%</div>
                                        </div>
                                        <div className="desc-box with-reward">
                                            <div className="desc-title">
                                                Gold for 72h
                                            </div>
                                            <div className="desc-price">
                                                <span>
                                                    <span className="price gold glow">
                                                        303BD25
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="decs-text">
                                                You instantly get Gold, as if
                                                you played for 72h.
                                            </div>
                                        </div>
                                        <div className="btn-panel">
                                            <div className="btn-box">
                                                <div className="btn-buy">
                                                    <div className="price diamonds">
                                                        22
                                                    </div>
                                                    <div className="txt">
                                                        Buy
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>

                            <div className="m-popup angels-heros">
                                <div className="title">Heroes</div>
                                <div className="content">
                                    <div className="trophy-value">
                                        1000
                                        <div className="trophy-value-btn-add angels">
                                            +
                                        </div>
                                    </div>
                                    <div className="header-box">
                                        <div className="header-text-wrap">
                                            <div className="header-text">
                                                Choose and Add Hero
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-heros-skrollbox-wrap">
                                        <div className="add-heros-skrollbox">
                                            <div className="hero-avatar-box added">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-avatar-box">
                                                <div className="hero-avatar-wrap">
                                                    <img
                                                        className="hero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/hero-all/tithero-5004/x2/ava/tithero-5004-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="cur2-barbarian.png" />
                                                </div>
                                                <div className="hero-dps-box">
                                                    dps
                                                    <div className="hero-dps">
                                                        1.5M
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="color-btn golg add unselected">
                                        <div className="color-btn-text">
                                            Add For
                                            <span className="f-gold">500</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>

                            <div className="m-popup angels-supheros-notadded">
                                <div className="title">Superheroes</div>
                                <div className="content">
                                    <div className="header-box">
                                        <div className="header-text-wrap">
                                            <div className="header-text">
                                                Click to attach Your first
                                                Superhero to the Angel!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="suphero-btn-card-add">
                                        <div className="color-btn add">
                                            <div className="color-btn-text">
                                                <div className="color-btn-text">
                                                    +
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>

                            <div className="m-popup angels-supheros-added">
                                <div className="title">Superheroes</div>
                                <div className="content">
                                    <div className="header-box">
                                        <div className="dps">
                                            <div className="value">2.32B</div>
                                            <div className="dps-title">
                                                DPS
                                                <div className="icon-dps"></div>
                                            </div>
                                        </div>
                                        <div className="trophy-res-box-all">
                                            <div className="trophy-res-box spirit">
                                                <div className="trophy-value">
                                                    1000
                                                </div>
                                                <div className="trophy-value-btn-add"></div>
                                            </div>
                                            <div className="trophy-res-box spirit2">
                                                <div className="trophy-value">
                                                    1000
                                                </div>
                                                <div className="trophy-value-btn-add"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-box-all">
                                        <div className="leftside-box-all">
                                            <div className="hero-left-box">
                                                <div className="filter-box">
                                                    <div className="btn-stars-wrap">
                                                        <div className="color-btn">
                                                            <div className="color-btn-text">
                                                                <img src="https://cdn.faptitans.com/s1/rc/star1.png" />
                                                            </div>
                                                        </div>
                                                        <div className="color-btn green">
                                                            <div className="color-btn-text">
                                                                <img src="https://cdn.faptitans.com/s1/rc/star1.png" />
                                                            </div>
                                                        </div>
                                                        <div className="color-btn">
                                                            <div className="color-btn-text">
                                                                <img src="https://cdn.faptitans.com/s1/rc/star1.png" />
                                                            </div>
                                                        </div>
                                                        <div className="color-btn">
                                                            <div className="color-btn-text">
                                                                <img src="https://cdn.faptitans.com/s1/rc/star1.png" />
                                                            </div>
                                                        </div>
                                                        <div className="color-btn">
                                                            <div className="color-btn-text">
                                                                <img src="https://cdn.faptitans.com/s1/rc/star1.png" />
                                                            </div>
                                                        </div>
                                                        <div className="color-btn">
                                                            <div className="color-btn-text">
                                                                <img src="star1-purple.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="filter-btn-wrap">
                                                        <div className="filter-btn-value">
                                                            <div className="color-btn-text"></div>
                                                        </div>
                                                        <div className="filter-btn">
                                                            <div className="btn-text">
                                                                Filter
                                                            </div>
                                                            <div className="filter-options-box">
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/cur-u.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/cur-r.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/cur-e.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/cur2-sword.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/cur2-quitar.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/cur2-cleric.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/cur2-druid.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/cur2-barbarian.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/cur2-ranger.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/cur2-wizard.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/ico-click.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/ico-sword.png" />
                                                                    </div>
                                                                </div>
                                                                <div className="color-btn">
                                                                    <div className="color-btn-text">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/ico-gold.png" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="suphero-all-box">
                                                    <div className="suphero-btn-card-add">
                                                        <div className="color-btn add">
                                                            <div className="color-btn-text">
                                                                <div className="color-btn-text">
                                                                    +
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <li className="suphero-card check">
                                                        <div className="hero-pic-box">
                                                            <div className="hero-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-01/x1/avatar/01sh-ava-5.jpg" />
                                                            </div>
                                                            <div className="herostar-box">
                                                                <div className="herostar lvl010"></div>
                                                            </div>
                                                        </div>
                                                        <div className="sh2-icon">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                        </div>
                                                        <div className="sh2-icon-forgirl">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur2-sword.png" />
                                                        </div>
                                                        <div className="v2-sh1-notif notif notif20"></div>
                                                    </li>
                                                    <li className="suphero-card">
                                                        <div className="hero-pic-box">
                                                            <div className="hero-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-02/x1/avatar/02sh-ava-5.jpg" />
                                                            </div>
                                                            <div className="herostar-box">
                                                                <div className="herostar lvl010"></div>
                                                            </div>
                                                        </div>
                                                        <div className="sh2-icon">
                                                            <img src="https://cdn.faptitans.com/s1/rc/icon-rare.png" />
                                                        </div>
                                                        <div className="sh2-icon-forgirl">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur2-quitar.png" />
                                                        </div>
                                                        <div className="v2-sh1-notif notif notif20"></div>
                                                    </li>
                                                    <li className="suphero-card">
                                                        <div className="hero-pic-box">
                                                            <div className="hero-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-03/x1/avatar/03sh-ava-5.jpg" />
                                                            </div>
                                                            <div className="herostar-box">
                                                                <div className="herostar lvl010"></div>
                                                            </div>
                                                        </div>
                                                        <div className="sh2-icon">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                        </div>
                                                        <div className="sh2-icon-forgirl">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur2-cleric.png" />
                                                        </div>
                                                        <div className="v2-sh1-notif notif notif20"></div>
                                                    </li>
                                                    <li className="suphero-card">
                                                        <div className="hero-pic-box">
                                                            <div className="hero-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-04/x1/avatar/04sh-ava-5.jpg" />
                                                            </div>
                                                            <div className="herostar-box">
                                                                <div className="herostar lvl010"></div>
                                                            </div>
                                                        </div>
                                                        <div className="sh2-icon">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur-u.png" />
                                                        </div>
                                                        <div className="sh2-icon-forgirl">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur2-druid.png" />
                                                        </div>
                                                        <div className="v2-sh1-notif notif notif20"></div>
                                                    </li>
                                                    <li className="suphero-card">
                                                        <div className="hero-pic-box">
                                                            <div className="hero-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-07/x1/avatar/07sh-ava-1.jpg" />
                                                            </div>
                                                            <div className="herostar-box">
                                                                <div className="herostar lvl02"></div>
                                                            </div>
                                                        </div>
                                                        <div className="sh2-icon">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                        </div>
                                                        <div className="sh2-icon-forgirl">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur2-barbarian.png" />
                                                        </div>
                                                        <div className="v2-sh1-notif notif notif20"></div>
                                                    </li>
                                                    <li className="suphero-card">
                                                        <div className="hero-pic-box">
                                                            <div className="hero-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-08/x1/avatar/08sh-ava-2.jpg" />
                                                            </div>
                                                            <div className="herostar-box">
                                                                <div className="herostar lvl04"></div>
                                                            </div>
                                                        </div>
                                                        <div className="sh2-icon">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur-u.png" />
                                                        </div>
                                                        <div className="sh2-icon-forgirl">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur2-ranger.png" />
                                                        </div>
                                                        <div className="v2-sh1-notif notif notif20"></div>
                                                    </li>
                                                    <li className="suphero-card">
                                                        <div className="hero-pic-box">
                                                            <div className="hero-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-09/x1/avatar/09sh-ava-2.jpg" />
                                                            </div>
                                                            <div className="herostar-box">
                                                                <div className="herostar lvl04"></div>
                                                            </div>
                                                        </div>
                                                        <div className="sh2-icon">
                                                            <img src="https://cdn.faptitans.com/s1/rc/icon-rare.png" />
                                                        </div>
                                                        <div className="sh2-icon-forgirl">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur2-wizard.png" />
                                                        </div>
                                                        <div className="v2-sh1-notif notif notif20"></div>
                                                    </li>
                                                    <li className="suphero-card">
                                                        <div className="hero-pic-box">
                                                            <div className="hero-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-10/x1/avatar/10sh-ava-1.jpg" />
                                                            </div>
                                                            <div className="herostar-box">
                                                                <div className="herostar lvl02"></div>
                                                            </div>
                                                        </div>
                                                        <div className="sh2-icon">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur-e.png" />
                                                        </div>
                                                        <div className="sh2-icon-forgirl">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                        </div>
                                                        <div className="v2-sh1-notif notif notif20"></div>
                                                    </li>
                                                    <li className="suphero-card">
                                                        <div className="hero-pic-box">
                                                            <div className="hero-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-13/x1/avatar/13sh-ava-1.jpg" />
                                                            </div>
                                                            <div className="herostar-box">
                                                                <div className="herostar lvl02"></div>
                                                            </div>
                                                        </div>
                                                        <div className="sh2-icon">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                        </div>
                                                        <div className="sh2-icon-forgirl">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur2-barbarian.png" />
                                                        </div>
                                                        <div className="v2-sh1-notif notif notif20"></div>
                                                    </li>
                                                    <li className="suphero-card">
                                                        <div className="hero-pic-box">
                                                            <div className="hero-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-09/x1/avatar/09sh-ava-2.jpg" />
                                                            </div>
                                                            <div className="herostar-box">
                                                                <div className="herostar lvl04"></div>
                                                            </div>
                                                        </div>
                                                        <div className="sh2-icon">
                                                            <img src="https://cdn.faptitans.com/s1/rc/icon-rare.png" />
                                                        </div>
                                                        <div className="sh2-icon-forgirl">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur2-wizard.png" />
                                                        </div>
                                                        <div className="v2-sh1-notif notif notif20"></div>
                                                    </li>
                                                    <li className="suphero-card">
                                                        <div className="hero-pic-box">
                                                            <div className="hero-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-10/x1/avatar/10sh-ava-1.jpg" />
                                                            </div>
                                                            <div className="herostar-box">
                                                                <div className="herostar lvl02"></div>
                                                            </div>
                                                        </div>
                                                        <div className="sh2-icon">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur-e.png" />
                                                        </div>
                                                        <div className="sh2-icon-forgirl">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                        </div>
                                                        <div className="v2-sh1-notif notif notif20"></div>
                                                    </li>
                                                    <li className="suphero-card">
                                                        <div className="hero-pic-box">
                                                            <div className="hero-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-13/x1/avatar/13sh-ava-1.jpg" />
                                                            </div>
                                                            <div className="herostar-box">
                                                                <div className="herostar lvl02"></div>
                                                            </div>
                                                        </div>
                                                        <div className="sh2-icon">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                        </div>
                                                        <div className="sh2-icon-forgirl">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur2-barbarian.png" />
                                                        </div>
                                                        <div className="v2-sh1-notif notif notif20"></div>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="suphero-rightside-box-all">
                                            <div className="suphero-right-box">
                                                <div className="lhero-box">
                                                    <div className="lhero-pic">
                                                        <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-01/x1/01sh-5.jpg" />
                                                        <img
                                                            className="star-up"
                                                            src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-01/x1/01sh-5.jpg"
                                                        />
                                                    </div>
                                                    <div className="topname-box">
                                                        <div className="lrare-box common"></div>
                                                        <div className="sh2-icon left">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                        </div>
                                                        <div className="sh2-icon-forgirl right">
                                                            <img src="https://cdn.faptitans.com/s1/rc/cur2-sword.png" />
                                                        </div>
                                                        <div className="lhero-name-box">
                                                            <div className="lhero-name">
                                                                Haruko Yasha
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-star-box gold">
                                                        <div className="big-herostar-box">
                                                            <div className="big-hero-star lvl010"></div>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-star-box-girl-count-box">
                                                        <div className="sh2-prgbar-all gold">
                                                            <div
                                                                className="sh2-prgbar"
                                                                style={{
                                                                    width: "36.6667%",
                                                                }}></div>
                                                            <div className="sh2-prgbar-text">
                                                                110/300
                                                            </div>
                                                        </div>
                                                        <div className="girl-bonus-box">
                                                            <div className="girl-bonus-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-01/x1/avatar/01sh-ava-5.jpg" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="arrow-box-all">
                                                        <div className="btn-scroll left"></div>
                                                        <div className="btn-scroll right"></div>
                                                    </div>
                                                </div>
                                                <div className="rstar-box">
                                                    <div className="rname-box">
                                                        girl effects
                                                    </div>
                                                    <div className="bonus-lvl-box">
                                                        <div className="lvlbox-name">
                                                            Aura of flame
                                                        </div>
                                                        <div className="bonus-lvl-box-name">
                                                            71-й уровень
                                                        </div>
                                                        <div className="bonus-lvl-box-bonus-box">
                                                            <div className="bonus-lvl-box-bonus">
                                                                <div className="bonus-lvl-box-bonus">
                                                                    DPS +17.5K%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bonus-lvl-box next">
                                                        <div className="lvlbox-name">
                                                            Hardened blades
                                                        </div>
                                                        <div className="bonus-lvl-box-name">
                                                            71-й уровень
                                                        </div>
                                                        <div className="bonus-lvl-box-bonus-box">
                                                            <div className="bonus-lvl-box-bonus">
                                                                <div className="bonus-lvl-box-bonus">
                                                                    +259.2% dps
                                                                    to
                                                                    <div className="ff-sh2-icon">
                                                                        <img src="https://cdn.faptitans.com/s1/rc/cur2-sword.png" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rbottom-box">
                                                        <div className="all-btn-box">
                                                            <div className="lvlup-btn undefined">
                                                                <div className="essence-text-box">
                                                                    <div className="essence-icon"></div>
                                                                    <div className="essence-text">
                                                                        256
                                                                    </div>
                                                                </div>
                                                                <div className="btn-text">
                                                                    level up
                                                                </div>
                                                            </div>
                                                            <div className="v2-sh2-notif notif notif201"></div>
                                                            <div className="lvlup-btn right">
                                                                <div className="essence-text-box">
                                                                    <div className="essence-icon"></div>
                                                                    <div className="essence-text">
                                                                        256
                                                                    </div>
                                                                </div>
                                                                <div className="btn-text">
                                                                    level up
                                                                </div>
                                                            </div>
                                                            <div className="xall-box">
                                                                <div className="xall-btn">
                                                                    x10
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rlevel-box upgrade">
                                                    <div className="rname-box">
                                                        star bonus
                                                    </div>
                                                    <div>
                                                        <div className="line-top-box"></div>
                                                        <div className="line-right-box"></div>
                                                        <div className="bonus-lvl-box undefined">
                                                            <div className="herostar-box">
                                                                <div className="herostar lvl010 ult"></div>
                                                            </div>
                                                            <div className="first-bonus-box">
                                                                <div className="box-name">
                                                                    Aura of
                                                                    flame
                                                                </div>
                                                                <div className="bonus-size">
                                                                    x45
                                                                </div>
                                                            </div>
                                                            <div className="second-bonus-box">
                                                                <div className="box-name">
                                                                    Hardened
                                                                    blades
                                                                </div>
                                                                <div className="bonus-size">
                                                                    x45
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="girl-bonus-box">
                                                            <div className="girl-bonus-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-01/x1/avatar/01sh-ava-5.jpg" />
                                                            </div>
                                                            <div className="girl-5star"></div>
                                                            <div className="sh2-prgbar-all">
                                                                <div
                                                                    className="sh2-prgbar"
                                                                    style={{
                                                                        width: "73.3333%",
                                                                    }}></div>
                                                                <div className="sh2-prgbar-text">
                                                                    110/150
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="girl-bonus-box next">
                                                            <div className="girl-bonus-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-02/x1/avatar/02sh-ava-5.jpg" />
                                                            </div>
                                                            <div className="girl-5star"></div>
                                                            <div className="sh2-prgbar-all">
                                                                <div
                                                                    className="sh2-prgbar"
                                                                    style={{
                                                                        width: "36.6667%",
                                                                    }}></div>
                                                                <div className="sh2-prgbar-text">
                                                                    55/150
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bonus-hero-pic-box-upgrade">
                                                            <div className="bonus-hero-pic">
                                                                <img src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-01/x2/avatar/01sh-ava-6.jpg" />
                                                            </div>
                                                        </div>
                                                        <div className="bonus-buy-box-all">
                                                            <div className="color-btn green disabled">
                                                                <div className="color-btn-text">
                                                                    <div>
                                                                        buy
                                                                        <span className="ff-but"></span>
                                                                        15
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dps-bonus-box-all">
                                                            <div className="dps-bonus-box-name-box">
                                                                <div className="dps-bonus-box-name">
                                                                    bonus
                                                                </div>
                                                            </div>
                                                            <div className="dps-bonus-box">
                                                                <div className="dps-bonus">
                                                                    <div>
                                                                        DPS
                                                                        +24.6K%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>

                            <div className="m-popup angels-supheros-add">
                                <div className="title">Superheroes</div>
                                <div className="content">
                                    <div className="trophy-value">
                                        1000
                                        <div className="trophy-value-btn-add angels">
                                            +
                                        </div>
                                    </div>
                                    <div className="header-box">
                                        <div className="header-text-wrap">
                                            <div className="header-text">
                                                Choose from the list and attach
                                                to the Angel
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-supheros-scrollbox-wrap">
                                        <div className="add-supheros-scrollbox">
                                            <div className="suphero-avatar-box added">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box selected">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                            <div className="suphero-avatar-box">
                                                <div className="suphero-avatar-wrap">
                                                    <img
                                                        className="suphero-avatar"
                                                        src="https://cdn.faptitans.com/s1/images/superhero_new/suphero-92/x2/92sh-1.jpg"
                                                    />
                                                </div>
                                                <div className="stars-box">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="sh2-icon">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl">
                                                    <img src="https://cdn.faptitans.com/s1/rc/cur2-gun.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="color-btn golg add unselected">
                                        <div className="color-btn-text">
                                            Add For
                                            <span className="f-gold">500</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>

                            <div className="m-popup angels-currency-shop">
                                <div className="title">SHOP</div>
                                <div className="content">
                                    <div className="keys-card-box">
                                        <div className="keys-card-imgs-box">
                                            <div className="currency-stand"></div>
                                            <div className="currency-icn"></div>
                                            <div className="currency-value">
                                                x100
                                            </div>
                                        </div>
                                        <div className="color-btn green bay">
                                            <div className="color-btn-text">
                                                <span className="f-gold">
                                                    3.90
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="keys-card-box">
                                        <div className="keys-card-imgs-box">
                                            <div className="currency-stand"></div>
                                            <div className="currency-icn"></div>
                                            <div className="currency-value">
                                                x100
                                            </div>
                                        </div>
                                        <div className="color-btn green bay">
                                            <div className="color-btn-text">
                                                <span className="f-gold">
                                                    3.90
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="keys-card-box">
                                        <div className="keys-card-imgs-box">
                                            <div className="currency-stand"></div>
                                            <div className="currency-icn"></div>
                                            <div className="currency-value">
                                                x100
                                            </div>
                                        </div>
                                        <div className="color-btn green bay">
                                            <div className="color-btn-text">
                                                <span className="f-gold">
                                                    3.90
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>

                            <div className="m-popup angels-info">
                                <div className="title">Angels Info</div>
                                <div className="content">
                                    <div className="text-box">
                                        <div className="text">
                                            <li>
                                                Angels are unique girls who are
                                                among the elite. They help our
                                                heroines fight monsters.
                                            </li>
                                            <br />
                                            <li>
                                                You can get Angel and her Stars
                                                by collecting Angel Soul Pieces
                                                from Angel Chests in the Dark
                                                Angel Garden. You will need
                                                Angel Spirit to open chests.
                                                Angel Spirit can be collected
                                                from various events in the game
                                                and at the Spirit Shop. The buff
                                                multiplier increases
                                                significantly when Angels gain
                                                new stars.
                                            </li>
                                            <br />
                                            <li>
                                                Each Angel has six Heroines
                                                attached to her. You can add
                                                more heroines to each Angel. You
                                                can buff each Heroine. Also,
                                                Superheroines can be attached to
                                                each Angel. Combine them in such
                                                a way as to get the most power.
                                            </li>
                                            <br />
                                            <li>
                                                You will need Angel Essence to
                                                buff Dark DPS. Angel Essence can
                                                be collected from Events and
                                                Angel Chests.
                                            </li>
                                            <br />
                                            <li>
                                                Each buff increases Angel's
                                                level required to unlock Angel's
                                                Erotic Album.
                                            </li>
                                        </div>
                                    </div>
                                    <div className="color-btn gold close">
                                        <div className="color-btn-text">
                                            Закрыть
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(V2MainScreen01Component);
