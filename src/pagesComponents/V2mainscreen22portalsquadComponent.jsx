import React from "react";
import screenSuperhero from "../styles/screen-superhero.scss";

const V2MainScreen22PortalSquadComponent = () => {
    return (
        <>
            <div className="main lang-ru world1">
                <div className="btn-admin"></div>
                <div
                    className="main-bg"
                    style={{
                        backgroundImage:
                            "url('__675b/images/back/new/09-River.jpg')",
                    }}></div>
                <div className="header">
                    <div className="resource-panel">
                        <div className="avatar-box-all">
                            <div className="avatar-box-pic">
                                <img src="img/v2-master-pic1.png" />
                            </div>
                            <div className="avatar-box-name">Rank 1</div>
                        </div>
                        <div className="resource-gold">
                            <div className="value">100Q</div>
                            <div className="value-bonus">
                                <span>+30%</span>
                            </div>
                            <div className="resource-btn-add"></div>
                            <div className="resource-pic">
                                <img src="img/v2-res-gold.png" />
                            </div>
                            <div className="anim-in-p gold"></div>
                        </div>
                        <div className="resource-vip lvl0">
                            <div className="value-vip-diamond">
                                1003003000000
                            </div>
                            <div className="value-vip-ticket">0</div>
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
                                        src="img/v2-cw-bg01.png"
                                    />
                                    <img
                                        className="fg"
                                        src="img/v2-cw-p01.png"
                                    />
                                </div>
                                <div className="might-box-name">Clan</div>
                            </div>
                        </div>
                    </div>
                    <div className="shop-chest-box-all">
                        <div className="res-shop-btn">
                            <div className="res-shop-btn-text">shop</div>
                        </div>
                        <div>
                            <div className="res-chest-btn">
                                <div className="res-chest-btn-text">Купить</div>
                                <div className="res-chest-btn-count">0</div>
                            </div>
                            <div className="picmeh-ex-box">
                                <div className="color-btn green">
                                    <div className="color-btn-text">
                                        exclusive offer
                                    </div>
                                    <div className="color-btn-timer">
                                        21:34:55
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn signinout-btn in">
                        <div className="icon-reg"></div>
                        <div className="icon-reg2"></div>
                    </div>
                </div>
                <div className="quest-box-all quests">
                    <div className="quest-box-scroll">
                        <div className="quest-box">
                            <li className="quest quest-box">
                                <img className="icon" src="img/ic-quests.png" />
                                <div className="quest-notif notif notif10"></div>
                            </li>
                            <li
                                className="quest open"
                                style={{ animationDelay: "0ms" }}>
                                <img
                                    className="icon"
                                    src="img/change-sun3.png"
                                />
                            </li>
                            <li
                                className="quest angel-pop open"
                                style={{ animationDelay: "150ms" }}>
                                <img
                                    className="icon"
                                    src="img/picmeh-ic-angel-pop.png"
                                />
                            </li>
                            <li className="quest-fortune open">
                                <img
                                    className="icon"
                                    src="img/fapop-right-icon.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">00:00:00</div>
                                </div>
                            </li>
                            <li className="quest-fortune">
                                <img
                                    className="icon"
                                    src="img/ic-fortuna.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">SPIN!</div>
                                </div>
                            </li>
                            <li
                                className="quest startpack open"
                                style={{ animationDelay: "300ms" }}>
                                <img
                                    className="icon"
                                    src="img/rating-sign-gold@1x.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">146:36:30</div>
                                </div>
                            </li>
                            <li className="quest startpack wide">
                                <img
                                    className="icon"
                                    src="img/v2-ns-chest.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">6D 02:36</div>
                                </div>
                            </li>
                            <li className="quest startpack wide">
                                <img
                                    className="icon"
                                    src="img/v2-mn-pr-100-in.png"
                                />
                                0
                            </li>
                            <li
                                className="quest startpack open"
                                style={{ animationDelay: "450ms" }}>
                                <img
                                    className="icon"
                                    src="img/icn-dual-ball.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">00:00:00</div>
                                </div>
                            </li>
                            <li
                                className="quest startpack open"
                                style={{ animationDelay: "600ms" }}>
                                <img
                                    className="icon"
                                    src="img/ic-blackfriday.png"
                                />
                                <div
                                    className="timerbox"
                                    style={{ top: "46px" }}>
                                    <div className="timer">17D 23:36:30</div>
                                </div>
                            </li>
                            <li
                                className="quest startpack open"
                                style={{ animationDelay: "750ms" }}>
                                <img
                                    className="icon"
                                    src="img/v2-xmas-chest-red.png"
                                />
                                0
                            </li>
                            <li className="quest startpack wide">
                                <img
                                    className="icon"
                                    src="img/v2-mn-soul-sg-160.png"
                                />
                            </li>
                            <li
                                className="quest startpack open"
                                style={{ animationDelay: "900ms" }}>
                                <img
                                    className="icon"
                                    src="img/m-ico-gold.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">21:33:40</div>
                                </div>
                            </li>
                            <li className="quest-fortune picmeh-info info">
                                <img
                                    className="icon"
                                    src="img/picmeh-ic-diamond.png"
                                />
                            </li>
                            <li
                                className="quest startpack open"
                                style={{ animationDelay: "1050ms" }}>
                                <img
                                    className="icon"
                                    src="img/v2-fw-icon-fr0.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">75:36:30</div>
                                </div>
                            </li>
                            <li
                                className="quest startpack open"
                                style={{ animationDelay: "1200ms" }}>
                                <img className="icon" src="img/ic-bf.png" />
                                <div className="timerbox">
                                    <div className="timer">482:36:30</div>
                                </div>
                            </li>
                            <li
                                className="quest startpack open"
                                style={{ animationDelay: "1350ms" }}>
                                <img
                                    className="icon"
                                    src="img/zetta-icon-70.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">69:34:55</div>
                                </div>
                            </li>
                            <li
                                className="quest startpack open"
                                style={{ animationDelay: "1500ms" }}>
                                <img className="icon" src="img/sunduk-60.png" />
                                <div className="timerbox">
                                    <div className="timer">21:34:52</div>
                                </div>
                            </li>
                            <li
                                className="quest open"
                                style={{ animationDelay: "1650ms" }}>
                                <img
                                    className="icon"
                                    src="img/m-ico-quest.png"
                                />
                            </li>
                            <li
                                className="quest open"
                                style={{ animationDelay: "1800ms" }}>
                                <img
                                    className="icon"
                                    src="img/m-ico-quest.png"
                                />
                            </li>
                        </div>
                    </div>
                    <div className="opt-panel-box">
                        <div className="color-bg"></div>
                        <div className="btn feedback"></div>
                        <div className="btn statistic"></div>
                        <div className="btn settings"></div>
                        <div className="btn ru"></div>
                    </div>
                    <a
                        className="btn-discord"
                        href="https://discord.gg/7pjeXF3emj"
                        target="_blank"></a>
                </div>
                <div className="left-side false false">
                    <div className="left-panel wide false false">
                        <div className="tab-panel-box squads-panel">
                            <div className="tab-panel-box-title">
                                Hero Squads
                            </div>
                            <div className="leftside-box-all">
                                <div className="hero-left-box">
                                    <div className="suphero-all-box">
                                        <ul className="suphero-squad-heading premium">
                                            <div className="heading-text">
                                                Premium Squads
                                            </div>
                                        </ul>
                                        <div className="suphero-squad-wrap bronze-bg-fg">
                                            <ul className="suphero-squad-heading">
                                                <div className="heading-text">
                                                    Squad #48
                                                </div>
                                            </ul>
                                            <ul className="suphero-squad-window">
                                                <div className="hero-level-box">
                                                    Rank
                                                    <div className="hero-level">
                                                        bronze
                                                    </div>
                                                </div>
                                                <li className="suphero-specialization">
                                                    <img
                                                        className="specialization-icon cls"
                                                        src="img/cur2-wizard.png"
                                                    />
                                                    <img
                                                        className="specialization-icon elem"
                                                        src="img/elements/Water.png"
                                                    />
                                                </li>
                                                <li className="suphero-card lvl0">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-299/x1/ava/tithero-299-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            0/100
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl1">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-300/x1/ava/tithero-300-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            100/200
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl1">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-301/x1/ava/tithero-301-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            100/200
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl2">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-302/x1/ava/tithero-302-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            200/300
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl2">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-303/x1/ava/tithero-303-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            200/300
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl2">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-304/x1/ava/tithero-304-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            200/300
                                                        </div>
                                                        <div className="viplvl"></div>
                                                        <div className="color-btn gold squad-buy-hero">
                                                            <div className="color-btn-text">
                                                                Buy Hero
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="suphero-buttons">
                                                    <div className="suphero-buttons-info disable">
                                                        Album
                                                    </div>
                                                    <div className="suphero-buttons-dpc">
                                                        <div className="dpc-info">
                                                            0
                                                        </div>
                                                    </div>
                                                    <div className="suphero-buttons-dps">
                                                        <div className="dps-info">
                                                            0
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="suphero-squad-heading active">
                                            <div className="heading-text">
                                                Active Squads
                                            </div>
                                        </ul>
                                        <div className="suphero-squad-wrap silver-bg-fg">
                                            <ul className="suphero-squad-heading">
                                                <div className="heading-text">
                                                    Squad #46
                                                </div>
                                            </ul>
                                            <ul className="suphero-squad-window">
                                                <div className="hero-level-box">
                                                    Rank
                                                    <div className="hero-level">
                                                        silver
                                                    </div>
                                                </div>
                                                <li className="suphero-specialization">
                                                    <img
                                                        className="specialization-icon cls"
                                                        src="img/cur2-gun.png"
                                                    />
                                                    <img
                                                        className="specialization-icon elem"
                                                        src="img/elements/Fire.png"
                                                    />
                                                </li>
                                                <li className="suphero-card lvl3">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-286/x1/ava/tithero-286-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            300/400
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl3">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-287/x1/ava/tithero-287-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            300/400
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl3">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-288/x1/ava/tithero-288-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            300/400
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl4">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-289/x1/ava/tithero-289-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            400/500
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl4">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-290/x1/ava/tithero-290-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            400/500
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl4">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-291/x1/ava/tithero-291-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            400/500
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-buttons">
                                                    <div className="suphero-buttons-info">
                                                        Album
                                                    </div>
                                                    <div className="suphero-buttons-dpc">
                                                        <div className="dpc-info">
                                                            0
                                                        </div>
                                                    </div>
                                                    <div className="suphero-buttons-dps">
                                                        <div className="dps-info">
                                                            0
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="suphero-squad-heading inactive">
                                            <div className="heading-text">
                                                Inactive Squads - Promote Squads
                                            </div>
                                        </ul>
                                        <div className="suphero-squad-wrap gold-bg-fg">
                                            <ul className="suphero-squad-heading">
                                                <div className="heading-text">
                                                    Squad #45
                                                </div>
                                            </ul>
                                            <ul className="suphero-squad-window">
                                                <div className="hero-level-box">
                                                    Rank
                                                    <div className="hero-level">
                                                        gold
                                                    </div>
                                                </div>
                                                <li className="suphero-specialization">
                                                    <img
                                                        className="specialization-icon cls"
                                                        src="img/cur2-ranger.png"
                                                    />
                                                    <img
                                                        className="specialization-icon elem"
                                                        src="img/elements/Water.png"
                                                    />
                                                </li>
                                                <li className="suphero-card lvl5">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-280/x1/ava/tithero-280-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            500/600
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl5">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-281/x1/ava/tithero-281-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            500/600
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl5">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-282/x1/ava/tithero-282-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            500/600
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl6">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-283/x1/ava/tithero-283-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            600/700
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl6">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-284/x1/ava/tithero-284-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            600/700
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl6">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-285/x1/ava/tithero-285-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            600/700
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-buttons">
                                                    <div className="suphero-buttons-info">
                                                        Album
                                                    </div>
                                                    <div className="suphero-buttons-dpc">
                                                        <div className="dpc-info">
                                                            0
                                                        </div>
                                                    </div>
                                                    <div className="suphero-buttons-dps">
                                                        <div className="dps-info">
                                                            0
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="suphero-squad-wrap platinum-bg-fg">
                                            <ul className="suphero-squad-heading">
                                                <div className="heading-text">
                                                    Squad #43
                                                </div>
                                            </ul>
                                            <ul className="suphero-squad-window">
                                                <div className="hero-level-box">
                                                    Rank
                                                    <div className="hero-level">
                                                        platinum
                                                    </div>
                                                </div>
                                                <li className="suphero-specialization">
                                                    <img
                                                        className="specialization-icon cls"
                                                        src="img/cur2-sword.png"
                                                    />
                                                    <img
                                                        className="specialization-icon elem"
                                                        src="img/elements/Life.png"
                                                    />
                                                </li>
                                                <li className="suphero-card lvl7">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-269/x1/ava/tithero-269-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            700/800
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl7">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-270/x1/ava/tithero-270-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            700/800
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl7">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-271/x1/ava/tithero-271-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            700/800
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl8">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-272/x1/ava/tithero-272-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            800/900
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl8">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-273/x1/ava/tithero-273-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            800/900
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl8">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-274/x1/ava/tithero-274-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            800/900
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-buttons">
                                                    <div className="suphero-buttons-info">
                                                        Album
                                                    </div>
                                                    <div className="suphero-buttons-dpc">
                                                        <div className="dpc-info">
                                                            0
                                                        </div>
                                                    </div>
                                                    <div className="suphero-buttons-dps">
                                                        <div className="dps-info">
                                                            0
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="suphero-squad-wrap diamond-bg-fg">
                                            <ul className="suphero-squad-heading">
                                                <div className="heading-text">
                                                    Squad #42
                                                </div>
                                            </ul>
                                            <ul className="suphero-squad-window">
                                                <div className="hero-level-box">
                                                    Rank
                                                    <div className="hero-level">
                                                        diamond
                                                    </div>
                                                </div>
                                                <li className="suphero-specialization">
                                                    <img
                                                        className="specialization-icon cls"
                                                        src="img/cur2-barbarian.png"
                                                    />
                                                    <img
                                                        className="specialization-icon elem"
                                                        src="img/elements/Fire.png"
                                                    />
                                                </li>
                                                <li className="suphero-card lvl9">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-256/x1/ava/tithero-256-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            900/1000
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl9">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-263/x1/ava/tithero-263-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            900/1000
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl9">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-264/x1/ava/tithero-264-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            900/1000
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl10">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-265/x1/ava/tithero-265-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            max
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl10">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-266/x1/ava/tithero-266-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            max
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-card lvl10">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic undefined-card-flare disabled0">
                                                            <img src="img/images/hero-all/tithero-267/x1/ava/tithero-267-1-ava.jpg" />
                                                        </div>
                                                        <div className="hero-pic-gacha">
                                                            max
                                                        </div>
                                                        <div className="viplvl"></div>
                                                    </div>
                                                </li>
                                                <li className="suphero-buttons">
                                                    <div className="suphero-buttons-info">
                                                        Album
                                                    </div>
                                                    <div className="suphero-buttons-dpc">
                                                        <div className="dpc-info">
                                                            0
                                                        </div>
                                                    </div>
                                                    <div className="suphero-buttons-dps">
                                                        <div className="dps-info">
                                                            0
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rightside-box-all">
                                <div className="rightbox-wrap">
                                    <div className="character-information-box">
                                        <div className="character-information-header">
                                            <div className="avatar-box"></div>
                                            <div className="lvl-box">
                                                <div className="lvl-text">
                                                    99
                                                </div>
                                                <div className="lvl-text2">
                                                    LVL
                                                </div>
                                            </div>
                                        </div>
                                        <div className="character-information-damage">
                                            <div className="character-information-dpc character-information-damage-textbox">
                                                145
                                            </div>
                                            <div className="character-information-dps character-information-damage-textbox">
                                                0
                                            </div>
                                            <div className="character-information-killing character-information-damage-textbox">
                                                0
                                            </div>
                                        </div>
                                        <div className="shop-btn promote">
                                            <div className="shop-btn-text">
                                                Promote
                                            </div>
                                        </div>
                                        <div className="shop-btn under-shop">
                                            <div className="shop-btn-text">
                                                underworld shop
                                            </div>
                                        </div>
                                        <div className="world-map">
                                            <img src="img/v2-fw-icon-maps.png" />
                                            <div className="world-map-heading">
                                                Map
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-close-x"></div>
                            <div className="color-btn-info"></div>
                            <div className="trophy-res-box-all">
                                <div className="trophy-res-box orb">
                                    <div className="trophy-value">696969К</div>
                                    <div className="trophy-value-btn-add"></div>
                                </div>
                                {/* <div className="trophy-res-box chips">
                                <div className="trophy-value">696969К</div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="tabs-all-box">
                        <a className="tabs-all heroes" href="#/">
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="tabs-name">Heroes</div>
                                <div className="tabs-pic">
                                    <img src="img/tab-01.png" />
                                </div>
                            </div>
                        </a>
                        <a className="tabs-all rating" href="#/rating/jewerly">
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="tabs-name">Rating Tab</div>
                                <div className="tabs-pic">
                                    <img src="img/tab-02.png" />
                                </div>
                            </div>
                        </a>
                        <a className="tabs-all squests" href="#/quests/daily">
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="tabs-name">Quests</div>
                                <div className="tabs-pic">
                                    <img src="img/tab-10.png" />
                                </div>
                            </div>
                        </a>
                        <a className="tabs-all squads selected" href="#/squads">
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="tabs-name">Squads</div>
                                <div className="tabs-pic">
                                    <img src="img/2vip-s6.png" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="popupAll" className="dialog-emersion-enter">
                    <div id="popupWrapper" className="popup-layer">
                        <div className="screen-blend-55"></div>
                        <div id="popupContainer" className="popup-in">
                            <div className="m-popup fw-store">
                                <div className="title">underworld shop</div>
                                <div className="color-box"></div>
                                <div className="store-item-box-all">
                                    <div className="store-item-box-scroll">
                                        <div className="store-item-all">
                                            <div className="store-item-box">
                                                <div className="store-name">
                                                    Underworld chest
                                                </div>
                                                <div className="item-box">
                                                    <img src="img/v2-xmas-chest-purple.png" />
                                                </div>
                                                <div
                                                    className="color-btn diamond"
                                                    style={{
                                                        filter: "grayscale(1)",
                                                    }}>
                                                    <div className="color-btn-text">
                                                        <div>
                                                            buy
                                                            <span className="orb_res">
                                                                5000
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="store-item-box">
                                                <div className="store-name">
                                                    Underworld chest
                                                </div>
                                                <div className="item-box">
                                                    <img src="img/v2-xmas-chest-purple.png" />
                                                </div>
                                                <div
                                                    className="color-btn diamond"
                                                    style={{
                                                        filter: "grayscale(1)",
                                                    }}>
                                                    <div className="color-btn-text">
                                                        <div>
                                                            buy
                                                            <span className="orb_res">
                                                                5000
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="store-item-all">
                                            <div className="store-item-box">
                                                <div className="store-name">
                                                    Золото 100%
                                                </div>
                                                <div
                                                    className="item-box"
                                                    item="[object Object]"
                                                    top_offset="50">
                                                    <img src="img/ic-abil-gold.png" />
                                                    <div className="rate gold">
                                                        +100%
                                                    </div>
                                                </div>
                                                <div className="color-btn diamond">
                                                    <div className="color-btn-text">
                                                        <div>
                                                            buy
                                                            <span className="real">
                                                                $1000
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="store-item-box">
                                                <div className="store-name">
                                                    Золото 1K%
                                                </div>
                                                <div
                                                    className="item-box"
                                                    item="[object Object]"
                                                    top_offset="50">
                                                    <img src="img/ic-abil-gold.png" />
                                                    <div className="rate gold">
                                                        +1K%
                                                    </div>
                                                </div>
                                                <div
                                                    className="color-btn diamond"
                                                    style={{
                                                        filter: "grayscale(1)",
                                                    }}>
                                                    <div className="color-btn-text">
                                                        <div>
                                                            buy
                                                            <span className="real">
                                                                $7500
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="store-item-box">
                                                <div className="store-name">
                                                    Золото за 1ч
                                                </div>
                                                <div
                                                    className="item-box"
                                                    item="[object Object]"
                                                    top_offset="50">
                                                    <img src="img/ic-abil-gold.png" />
                                                    <div className="newtime t1h">
                                                        <div className="newclocktime">
                                                            1
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="color-btn diamond">
                                                    <div className="color-btn-text">
                                                        <div>
                                                            buy
                                                            <span className="real">
                                                                $500
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="store-item-box">
                                                <div className="store-name">
                                                    Золото за 6ч
                                                </div>
                                                <div
                                                    className="item-box"
                                                    item="[object Object]"
                                                    top_offset="50">
                                                    <img src="img/ic-abil-gold.png" />
                                                    <div className="newtime t1h">
                                                        <div className="newclocktime">
                                                            6
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="color-btn diamond">
                                                    <div className="color-btn-text">
                                                        <div>
                                                            buy
                                                            <span className="real">
                                                                $850
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="store-item-all">
                                            <div className="store-item-box">
                                                <div className="store-name">
                                                    50 Master Gems
                                                </div>
                                                <div
                                                    className="item-box"
                                                    item="[object Object]"
                                                    top_offset="50">
                                                    <img src="img/ms-stone-all.png" />
                                                </div>
                                                <div className="color-btn diamond">
                                                    <div className="color-btn-text">
                                                        <div>
                                                            buy
                                                            <span className="orb_res">
                                                                1500
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="store-item-box">
                                                <div className="store-name">
                                                    100 Master Gems
                                                </div>
                                                <div
                                                    className="item-box"
                                                    item="[object Object]"
                                                    top_offset="50">
                                                    <img src="img/ms-stone-all.png" />
                                                </div>
                                                <div className="color-btn diamond">
                                                    <div className="color-btn-text">
                                                        <div>
                                                            buy
                                                            <span className="orb_res">
                                                                2500
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="store-item-box">
                                                <div className="store-name">
                                                    400 Essence
                                                </div>
                                                <div
                                                    className="item-box"
                                                    item="[object Object]"
                                                    top_offset="50">
                                                    <img src="img/essence-80x80.png" />
                                                </div>
                                                <div className="color-btn diamond">
                                                    <div className="color-btn-text">
                                                        <div>
                                                            buy
                                                            <span className="orb_res">
                                                                1500
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="store-item-box">
                                                <div className="store-name">
                                                    1440 Essence
                                                </div>
                                                <div
                                                    className="item-box"
                                                    item="[object Object]"
                                                    top_offset="50">
                                                    <img src="img/essence-80x80.png" />
                                                </div>
                                                <div
                                                    className="color-btn diamond"
                                                    style={{
                                                        filter: "grayscale(1)",
                                                    }}>
                                                    <div className="color-btn-text">
                                                        <div>
                                                            buy
                                                            <span className="orb_res">
                                                                4000
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sexped-chaos-btn-shop">
                                    <div className="orb-icon"></div>
                                    <div className="sexped-chaos-count">
                                        3.54K
                                    </div>
                                </div>
                                <div className="fw-shop-girl sp"></div>
                                <div className="btn-close-x"></div>
                            </div>
                            <div className="m-popup bf-event__buy-keys-pop">
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
                                                <div className="keybtn">
                                                    Buy
                                                </div>
                                                <div className="quantity">
                                                    150
                                                </div>
                                            </div>
                                            <div className="keys-card-box">
                                                <div className="card-header">
                                                    Squad Offer
                                                </div>
                                                <div className="card-info-btn"></div>
                                                <div className="keys-but-box">
                                                    <img
                                                        src="images\superhero\suphero-506\x2\506sh-1.jpg"
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
                                                <div className="keybtn">
                                                    Buy
                                                </div>
                                                <div className="quantity">
                                                    150
                                                </div>
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
                                                <div className="keybtn">
                                                    Buy
                                                </div>
                                                <div className="quantity">
                                                    300
                                                </div>
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
                                                <div className="keybtn">
                                                    Buy
                                                </div>
                                                <div className="quantity">
                                                    600
                                                </div>
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
                                                <div className="keybtn">
                                                    Buy
                                                </div>
                                                <div className="quantity">
                                                    950
                                                </div>
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
                                            <div className="passed-levels">
                                                6969
                                            </div>
                                            <div className="equals">=</div>
                                            <div className="levels-essence-quantity">
                                                969
                                            </div>
                                        </div>
                                        <div className="reward-btn">
                                            Забрать
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>
                            <div className="m-popup essence-buy">
                                <div className="title">Buy Squad Tokens</div>
                                <div className="essence-card-box">
                                    <div
                                        className="essence-but-box"
                                        style={{
                                            backgroundImage: "url('https",
                                        }}></div>
                                    <div className="essence-price">
                                        <div>5K</div>
                                    </div>
                                    <div className="essence-bonus">
                                        Daily Limit: 0/3
                                    </div>
                                    <div
                                        className="color-btn diamonds"
                                        style={{
                                            position: "absolute",
                                            bottom: "20px",
                                            left: "40px",
                                            width: "150px",
                                        }}>
                                        <div className="color-btn-text">
                                            <div className="diamonds">
                                                <span className="f-diamonds">
                                                    100
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="essence-card-box">
                                    <div
                                        className="essence-but-box"
                                        style={{
                                            backgroundImage: "url('https",
                                        }}></div>
                                    <div className="essence-price">
                                        <div>20K</div>
                                    </div>
                                    <div className="essence-bonus">
                                        Daily Limit: 0/1
                                    </div>
                                    <div
                                        className="color-btn diamonds"
                                        style={{
                                            position: "absolute",
                                            bottom: "20px",
                                            left: "40px",
                                            width: "150px",
                                        }}>
                                        <div className="color-btn-text">
                                            <div className="diamonds">
                                                <span className="f-diamonds">
                                                    300
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="essence-card-box">
                                    <div
                                        className="essence-but-box"
                                        style={{
                                            backgroundImage: "url('https",
                                        }}></div>
                                    <div className="essence-price">
                                        <div>20K</div>
                                    </div>
                                    <div
                                        className="color-btn diamonds"
                                        style={{
                                            position: "absolute",
                                            bottom: "20px",
                                            left: "40px",
                                            width: "150px",
                                        }}>
                                        <div className="color-btn-text">
                                            <div className="diamonds">
                                                <span className="">$4.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="essence-card-box">
                                    <div
                                        className="essence-but-box"
                                        style={{
                                            backgroundImage: "url('https",
                                        }}></div>
                                    <div className="essence-price">
                                        <div>250K</div>
                                    </div>
                                    <div
                                        className="color-btn diamonds"
                                        style={{
                                            position: "absolute",
                                            bottom: "20px",
                                            left: "40px",
                                            width: "150px",
                                        }}>
                                        <div className="color-btn-text">
                                            <div className="diamonds">
                                                <span className="">$49.99</span>
                                            </div>
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

export default React.memo(V2MainScreen22PortalSquadComponent);
