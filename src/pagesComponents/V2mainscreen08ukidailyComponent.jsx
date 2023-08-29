import React from "react";
import questsAll from "../styles/quests_all.scss";
import questsUi from "../styles/quests-ui.scss";

const V2MainScreen08UkiDailyComponent = () => {
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
                        <div className="quest-box wrap closed">
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
                                <li className="quest marked">
                                    <img
                                        className="icon"
                                        src="rc/ic-quests.png"
                                    />
                                    <div className="quest-notif"></div>
                                </li>
                            </div>
                        </div>
                        <div className="quest-box wrap">
                            <div className="quest-title-btn">quests</div>
                            <div className="quest-wrap">
                                <li
                                    className="quest quest1"
                                    style={{ "animation-delay": "750ms" }}>
                                    <img
                                        className="icon"
                                        src="rc/m-ico-quest.png"
                                    />
                                </li>
                                <li
                                    className="quest quest2"
                                    style={{ "animation-delay": "750ms" }}>
                                    <img
                                        className="icon"
                                        src="rc/m-ico-quest-gift.png"
                                    />
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

                <div className="left-side false false">
                    <div className="left-panel false false">
                        <div className="quests-list-all-box">
                            <div className="hero-menu-box">
                                <div className="tabs-menu-btn quest-daily active">
                                    <a className="txt" href="#/quests/daily">
                                        <div className="color-btn-text">
                                            daily
                                        </div>
                                    </a>
                                </div>
                                <div className="tabs-menu-btn quest-main">
                                    <a className="txt" href="#/quests/quest">
                                        <div className="color-btn-text">
                                            main
                                        </div>
                                    </a>
                                    <div className="notif"></div>
                                </div>
                                <div className="tabs-menu-btn quest-story">
                                    <a className="txt" href="#/quests/story">
                                        <div className="color-btn-text">
                                            story
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="journal-parth-box-all">
                                {/* daily */}
                                <div className="daily-mission-box completed">
                                    <div className="daily-mission-name">
                                        mission clear:
                                    </div>
                                    <div className="daily-prgbar-all">
                                        <div
                                            className="daily-prgbar"
                                            style={{ width: "16.6667%" }}></div>
                                        <div className="daily-prgbar-text">
                                            1/6
                                        </div>
                                    </div>
                                    <div className="daily-reward">
                                        <div className="daily-reward-pic">
                                            <img src="diamond1.png" />
                                        </div>
                                        <div className="daily-reward-count">
                                            3
                                        </div>
                                        {/* <div className="color-btn green">
                                        <div className="color-btn-text">
                                            claim
                                        </div>
                                    </div> */}
                                    </div>
                                </div>
                                <div className="daily-mission-box-scroll">
                                    <div className="journal-parth-box">
                                        <div className="journal-parth-block">
                                            <div className="daily-parth-box completed">
                                                <div className="daily-parth-text">
                                                    Hunt 25 monsters.
                                                </div>
                                                <div className="daily-prgbar-all">
                                                    <div
                                                        className="daily-prgbar"
                                                        style={{
                                                            width: "100%",
                                                        }}></div>
                                                    <div className="daily-prgbar-text">
                                                        25/25
                                                    </div>
                                                </div>
                                                <div className="daily-parth-claim-box">
                                                    <div className="daily-reward">
                                                        <div className="daily-reward-pic">
                                                            <img src="gold.png" />
                                                        </div>
                                                        <div className="daily-reward-count">
                                                            23.1UD13
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-green">
                                                    completed!
                                                </div>
                                            </div>
                                            <div className="daily-parth-box available">
                                                <div className="daily-parth-text">
                                                    Use player ability 10 times.
                                                </div>
                                                <div className="daily-prgbar-all">
                                                    <div
                                                        className="daily-prgbar"
                                                        style={{
                                                            width: "100%",
                                                        }}></div>
                                                    <div className="daily-prgbar-text">
                                                        10/10
                                                    </div>
                                                </div>
                                                <div className="daily-parth-claim-box">
                                                    <div className="daily-reward">
                                                        <div className="daily-reward-pic">
                                                            <img src="change-ic-gem-master.png" />
                                                        </div>
                                                        <div className="daily-reward-count">
                                                            1 pack
                                                        </div>
                                                    </div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            claim
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-red">
                                                    available!
                                                </div>
                                            </div>
                                            <div className="daily-parth-box">
                                                <div className="daily-parth-text">
                                                    Pass through 15 locations.
                                                </div>
                                                <div className="daily-prgbar-all">
                                                    <div
                                                        className="daily-prgbar"
                                                        style={{
                                                            width: "80%",
                                                        }}></div>
                                                    <div className="daily-prgbar-text">
                                                        8/10
                                                    </div>
                                                </div>
                                                <div className="daily-parth-claim-box">
                                                    <div className="daily-reward">
                                                        <div className="daily-reward-pic">
                                                            <img src="top-arrow@2x.png" />
                                                        </div>
                                                        <div className="daily-reward-count">
                                                            1
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                            <div className="daily-parth-box">
                                                <div className="daily-parth-text">
                                                    Level up any superheroine
                                                    skill by 30 levels.
                                                </div>
                                                <div className="daily-prgbar-all">
                                                    <div
                                                        className="daily-prgbar"
                                                        style={{
                                                            width: "0%",
                                                        }}></div>
                                                    <div className="daily-prgbar-text">
                                                        0/30
                                                    </div>
                                                </div>
                                                <div className="daily-parth-claim-box">
                                                    <div className="daily-reward">
                                                        <div className="daily-reward-pic">
                                                            <img src="essence.png" />
                                                        </div>
                                                        <div className="daily-reward-count">
                                                            2 pack
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                            <div className="daily-parth-box completed">
                                                <div className="daily-parth-text">
                                                    Level up any trophy by 5
                                                    levels.
                                                </div>
                                                <div className="daily-prgbar-all">
                                                    <div
                                                        className="daily-prgbar"
                                                        style={{
                                                            width: "100%",
                                                        }}></div>
                                                    <div className="daily-prgbar-text">
                                                        5/5
                                                    </div>
                                                </div>
                                                <div className="daily-parth-claim-box">
                                                    <div className="daily-reward">
                                                        <div className="daily-reward-pic">
                                                            <img src="essence.png" />
                                                        </div>
                                                        <div className="daily-reward-count">
                                                            1 pack
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-green">
                                                    completed!
                                                </div>
                                            </div>
                                            <div className="daily-parth-box">
                                                <div className="daily-parth-text">
                                                    Level up any trophy by 10
                                                    levels.
                                                </div>
                                                <div className="daily-prgbar-all">
                                                    <div
                                                        className="daily-prgbar"
                                                        style={{
                                                            width: "0%",
                                                        }}></div>
                                                    <div className="daily-prgbar-text">
                                                        0/10
                                                    </div>
                                                </div>
                                                <div className="daily-parth-claim-box">
                                                    <div className="daily-reward">
                                                        <div className="daily-reward-pic">
                                                            <img src="gold.png" />
                                                        </div>
                                                        <div className="daily-reward-count">
                                                            23.1UD13
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="daily-mission-reset">
                                    daily mission reset:
                                    <span className="t">15:07:41</span> left
                                </div>

                                {/* main */}
                                <div className="journal-parth-header">
                                    <div className="quest-switch-section">
                                        <div className="section-name tutor">
                                            <div className="nameText">
                                                tutor
                                            </div>
                                        </div>
                                        <div className="section-name disabRight">
                                            <div className="nameText">
                                                underworld
                                            </div>
                                        </div>
                                        <div className="section-name disabRight darkWorld">
                                            <div className="nameText">
                                                darkworld
                                            </div>
                                        </div>
                                    </div>
                                    <div className="arrow left"></div>
                                    <div className="arrow right"></div>
                                </div>
                                <div className="journal-parth-box-scroll">
                                    <div className="journal-parth-box">
                                        <div className="journal-parth-block">
                                            <div className="journal-parth-name">
                                                parth 1
                                            </div>
                                            <div className="journal-parth">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>First battle</p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div
                                                            className="daily-prgbar"
                                                            style={{
                                                                width: "100%",
                                                            }}></div>
                                                        <div className="daily-prgbar-text">
                                                            1/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                            <div className="journal-parth">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>First money</p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div className="daily-prgbar"></div>
                                                        <div className="daily-prgbar-text">
                                                            1/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                            <div className="journal-parth">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>
                                                                First adventure
                                                            </p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div className="daily-prgbar"></div>
                                                        <div className="daily-prgbar-text">
                                                            1/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                        </div>
                                        <div className="journal-parth-block">
                                            <div className="journal-parth-name">
                                                parth 2
                                            </div>
                                            <div className="journal-parth available">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>First heroine</p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div
                                                            className="daily-prgbar"
                                                            style={{
                                                                width: "100%",
                                                            }}></div>
                                                        <div className="daily-prgbar-text">
                                                            10/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            claim
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-red">
                                                    available!
                                                </div>
                                            </div>
                                            <div className="journal-parth completed">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>Boss hunt</p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div
                                                            className="daily-prgbar"
                                                            style={{
                                                                width: "100%",
                                                            }}></div>
                                                        <div className="daily-prgbar-text">
                                                            10/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-green">
                                                    conpleted!
                                                </div>
                                            </div>
                                            <div className="journal-parth view">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>
                                                                The hunt begun
                                                            </p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div className="daily-prgbar"></div>
                                                        <div className="daily-prgbar-text">
                                                            1/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="journal-parth-box-scroll disabRight">
                                    <div className="journal-parth-box">
                                        <div className="journal-parth-block">
                                            <div className="journal-parth-name">
                                                parth 1
                                            </div>
                                            <div className="journal-parth">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>First battle</p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div
                                                            className="daily-prgbar"
                                                            style={{
                                                                width: "100%",
                                                            }}></div>
                                                        <div className="daily-prgbar-text">
                                                            1/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                            <div className="journal-parth">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>First money</p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div className="daily-prgbar"></div>
                                                        <div className="daily-prgbar-text">
                                                            1/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                            <div className="journal-parth">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>
                                                                First adventure
                                                            </p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div className="daily-prgbar"></div>
                                                        <div className="daily-prgbar-text">
                                                            1/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                        </div>
                                        <div className="journal-parth-block">
                                            <div className="journal-parth-name">
                                                parth 2
                                            </div>
                                            <div className="journal-parth available">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>First heroine</p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div
                                                            className="daily-prgbar"
                                                            style={{
                                                                width: "100%",
                                                            }}></div>
                                                        <div className="daily-prgbar-text">
                                                            10/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            claim
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-red">
                                                    available!
                                                </div>
                                            </div>
                                            <div className="journal-parth completed">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>Boss hunt</p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div
                                                            className="daily-prgbar"
                                                            style={{
                                                                width: "100%",
                                                            }}></div>
                                                        <div className="daily-prgbar-text">
                                                            10/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-green">
                                                    conpleted!
                                                </div>
                                            </div>
                                            <div className="journal-parth view">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>
                                                                The hunt begun
                                                            </p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div className="daily-prgbar"></div>
                                                        <div className="daily-prgbar-text">
                                                            1/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="journal-parth-box-scroll disabRight darkWorld">
                                    <div className="journal-parth-box">
                                        <div className="journal-parth-block">
                                            <div className="journal-parth-name">
                                                parth 1
                                            </div>
                                            <div className="journal-parth">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>First battle</p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div
                                                            className="daily-prgbar"
                                                            style={{
                                                                width: "100%",
                                                            }}></div>
                                                        <div className="daily-prgbar-text">
                                                            1/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                            <div className="journal-parth">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>First money</p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div className="daily-prgbar"></div>
                                                        <div className="daily-prgbar-text">
                                                            1/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                            <div className="journal-parth">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>
                                                                First adventure
                                                            </p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div className="daily-prgbar"></div>
                                                        <div className="daily-prgbar-text">
                                                            1/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                        </div>
                                        <div className="journal-parth-block">
                                            <div className="journal-parth-name">
                                                parth 2
                                            </div>
                                            <div className="journal-parth available">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>First heroine</p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div
                                                            className="daily-prgbar"
                                                            style={{
                                                                width: "100%",
                                                            }}></div>
                                                        <div className="daily-prgbar-text">
                                                            10/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            claim
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-red">
                                                    available!
                                                </div>
                                            </div>
                                            <div className="journal-parth completed">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>Boss hunt</p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div
                                                            className="daily-prgbar"
                                                            style={{
                                                                width: "100%",
                                                            }}></div>
                                                        <div className="daily-prgbar-text">
                                                            10/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-green">
                                                    conpleted!
                                                </div>
                                            </div>
                                            <div className="journal-parth view">
                                                <div className="journal-parth-wrap">
                                                    <div className="journal-parth-text-box">
                                                        <div className="journal-parth-title">
                                                            <p>
                                                                The hunt begun
                                                            </p>
                                                        </div>
                                                        <div className="journal-parth-text">
                                                            Kill 10 monsters
                                                        </div>
                                                    </div>
                                                    <div className="daily-prgbar-all">
                                                        <div className="daily-prgbar"></div>
                                                        <div className="daily-prgbar-text">
                                                            1/10
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        You are tired to fend
                                                        small orders and you
                                                        decide to create your
                                                        guild. To do this, you
                                                        have to hunt for
                                                        monsters near the city.
                                                    </div>
                                                </div>
                                                <div className="journal-reward">
                                                    <div className="journal-reward-pic-wrap">
                                                        <div className="journal-reward-pic story-icn">
                                                            <img src="story/t/p3-c1.jpg" />
                                                        </div>
                                                        <div className="journal-reward-pic">
                                                            <img src="change-ic-gold.png" />
                                                            <div className="journal-reward-value">
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-banner-gray">
                                                    in progress..
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* story */}
                                <div className="journal-parth-box-scroll story">
                                    <div className="journal-parth-box">
                                        <div className="journal-parth-block">
                                            <div className="journal-parth-name">
                                                Intro
                                            </div>
                                            <div className="journal-comics-box">
                                                <div className="journal-prw-comics-pic">
                                                    <img src="story/t/p1-c1.png" />
                                                </div>
                                                <div className="journal-prw-comics-lock"></div>
                                                <div className="journal-prw-comics-text-box">
                                                    <div className="journal-prw-comics-text">
                                                        First battle
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="journal-comics-box">
                                                <div className="journal-prw-comics-pic">
                                                    <img src="story/t/p1-c2.png" />
                                                </div>
                                                <div className="journal-prw-comics-lock"></div>
                                                <div className="journal-prw-comics-text-box">
                                                    <div className="journal-prw-comics-text">
                                                        First money
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="journal-comics-box">
                                                <div className="journal-prw-comics-pic">
                                                    <img src="story/t/p1-c3.png" />
                                                </div>
                                                <div className="journal-prw-comics-lock"></div>
                                                <div className="journal-prw-comics-text-box">
                                                    <div className="journal-prw-comics-text">
                                                        First adventure
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="journal-parth-block">
                                            <div className="journal-parth-name">
                                                Step by step
                                            </div>
                                            <div className="journal-comics-box">
                                                <div className="journal-prw-comics-pic">
                                                    <img src="story/t/p2-c1.png" />
                                                </div>
                                                <div className="journal-prw-comics-lock"></div>
                                                <div className="journal-prw-comics-text-box">
                                                    <div className="journal-prw-comics-text">
                                                        First heroine
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="journal-comics-box">
                                                <div className="journal-prw-comics-pic">
                                                    <img src="story/t/p2-c2.png" />
                                                </div>
                                                <div className="journal-prw-comics-lock"></div>
                                                <div className="journal-prw-comics-text-box">
                                                    <div className="journal-prw-comics-text">
                                                        Boss hunt
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="journal-parth-block">
                                            <div className="journal-parth-name">
                                                Superheroes
                                            </div>
                                            <div className="journal-comics-box active">
                                                <div className="journal-prw-comics-pic">
                                                    <img src="story/t/p3-c1.png" />
                                                </div>
                                                <div className="journal-prw-comics-lock"></div>
                                                <div className="journal-prw-comics-text-box">
                                                    <div className="journal-prw-comics-text">
                                                        The hunt begun
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="journal-comics-box">
                                                <div className="journal-prw-comics-pic">
                                                    <img src="story/t/p3-c2.png" />
                                                </div>
                                                <div className="journal-prw-comics-lock"></div>
                                                <div className="journal-prw-comics-text-box">
                                                    <div className="journal-prw-comics-text">
                                                        New assistants
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="journal-comics-box">
                                                <div className="journal-prw-comics-pic">
                                                    <img src="story/t/p3-c3.png" />
                                                </div>
                                                <div className="journal-prw-comics-lock"></div>
                                                <div className="journal-prw-comics-text-box">
                                                    <div className="journal-prw-comics-text">
                                                        Distant journey
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="journal-parth-block">
                                            <div className="journal-parth-name">
                                                Royal tournament
                                            </div>
                                            <div className="journal-comics-box">
                                                <div className="journal-prw-comics-pic">
                                                    <img src="story/t/p4-c1.png" />
                                                </div>
                                                <div className="journal-prw-comics-lock"></div>
                                                <div className="journal-prw-comics-text-box">
                                                    <div className="journal-prw-comics-text">
                                                        Royal tournament
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="journal-comics-box lock">
                                                <div className="journal-prw-comics-pic">
                                                    <img src="story/t/p4-c2.png" />
                                                </div>
                                                <div className="journal-prw-comics-lock"></div>
                                                <div className="journal-prw-comics-text-box">
                                                    <div className="journal-prw-comics-text">
                                                        Further and further
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills-all-box">
                            <div className="skills-all">
                                <div className="skills-pic">
                                    <img
                                        className="icon"
                                        src="rc/skill-icons/skill-icon01.png"
                                    />
                                    <div className="skills-pic-disabled"></div>
                                </div>
                                <div className="skills-pic">
                                    <img
                                        className="icon"
                                        src="rc/skill-icons/skill-icon02.png"
                                    />
                                    <div className="skills-pic-disabled"></div>
                                </div>
                                <div className="skills-pic">
                                    <img
                                        className="icon"
                                        src="rc/skill-icons/skill-icon03.png"
                                    />
                                    <div className="skills-pic-disabled"></div>
                                </div>
                                <div className="skills-pic">
                                    <img
                                        className="icon"
                                        src="rc/skill-icons/skill-icon04.png"
                                    />
                                    <div className="skills-pic-disabled"></div>
                                </div>
                                <div className="skills-pic">
                                    <img
                                        className="icon"
                                        src="rc/skill-icons/skill-icon05.png"
                                    />
                                    <div className="skills-pic-disabled"></div>
                                </div>
                                <div className="skills-pic">
                                    <img
                                        className="icon"
                                        src="rc/skill-icons/skill-icon06.png"
                                    />
                                    <div className="skills-pic-disabled"></div>
                                </div>
                                <div className="skills-pic">
                                    <img
                                        className="icon"
                                        src="rc/skill-icons/skill-icon07.png"
                                    />
                                    <div className="skills-pic-disabled"></div>
                                </div>
                            </div>
                        </div>
                        <div className="journal-rightside-box-all">
                            <div className="journal-parth-name">Intro</div>
                            <div className="journal-comics-view-box">
                                <div className="journal-comics-view">
                                    <div className="journal-comics">
                                        <img
                                            className="pic"
                                            src="rc/story/p1-c1.png"
                                        />
                                        <div
                                            className="journal-comics-ballon-box"
                                            style={{
                                                top: "0px",
                                                left: "80px",
                                                width: "170px",
                                                opacity: "1",
                                            }}>
                                            <div className="journal-comics-ballon-text">
                                                Damn it... we're out of gold
                                                again.
                                            </div>
                                        </div>
                                        <div
                                            className="journal-comics-ballon-box"
                                            style={{
                                                bottom: "15px",
                                                right: "20px",
                                                width: "230px",
                                                opacity: "1",
                                            }}>
                                            <div className="journal-comics-ballon-text">
                                                The best monster orders are
                                                taken by the Guilders
                                            </div>
                                        </div>
                                        <div className="trophy-bonus-pic-lup"></div>
                                    </div>
                                </div>
                                <div className="journal-comics-view-nav-box">
                                    <div className="journal-comics-view-nav"></div>
                                    <div className="journal-comics-view-nav right"></div>
                                    <div className="journal-comics-view-nav-count">
                                        1 / 3
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabs-all-box">
                        <a className="tabs-all heroes" href="#/">
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="tabs-name">Heroes</div>
                                <div className="tabs-pic">
                                    <img src="tab-01.png" />
                                </div>
                            </div>
                        </a>
                        <a className="tabs-all guild" href="#/guild">
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="tabs-name">Guild base</div>
                                <div className="tabs-pic">
                                    <img src="tab-08.png" />
                                </div>
                            </div>
                            <div className="v2-tab-notif notif notif20"></div>
                        </a>
                        <a className="tabs-all album" href="#/galery/pictures">
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="tabs-name">Gallery</div>
                                <div className="tabs-pic">
                                    <img src="tab-05.png" />
                                </div>
                            </div>
                        </a>
                        <a className="tabs-all rating" href="#/rating/jewerly">
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="tabs-name">Rating Tab</div>
                                <div className="tabs-pic">
                                    <img src="tab-02.png" />
                                </div>
                            </div>
                        </a>
                        <a
                            className="tabs-all squests selected"
                            href="#/quests/daily"
                            aria-current="page">
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="tabs-name">Quests</div>
                                <div className="tabs-pic">
                                    <img src="tab-10.png" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="popupWrapper" className="popup-layer">
                    <div className="screen-blend-55"></div>
                    <div id="popupContainer">
                        <div className="m-popup uki-story-popup">
                            <div className="title">New story picture!</div>
                            <div className="color-box">
                                <div className="journal-comics-view c10">
                                    <div className="journal-comics">
                                        <img
                                            className="pic"
                                            src="rc/story/p1-c1.png"
                                        />
                                        <div
                                            className="journal-comics-ballon-box"
                                            style={{
                                                top: "0px",
                                                left: "80px",
                                                width: "170px",
                                                opacity: "1",
                                            }}>
                                            <div className="journal-comics-ballon-text">
                                                Damn it... we're out of gold
                                                again.
                                            </div>
                                        </div>
                                        <div
                                            className="journal-comics-ballon-box"
                                            style={{
                                                bottom: "15px",
                                                right: "20px",
                                                width: "230px",
                                                opacity: "1",
                                            }}>
                                            <div className="journal-comics-ballon-text">
                                                The best monster orders are
                                                taken by the Guilders
                                            </div>
                                        </div>
                                        <div className="trophy-bonus-pic-lup"></div>
                                    </div>
                                </div>
                                <div className="uki-story-nav-box btn2">
                                    <div className="color-btn">
                                        <div className="color-btn-text">ок</div>
                                    </div>
                                    <div className="color-btn green">
                                        <div className="color-btn-text">
                                            next
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-close-x"></div>
                        </div>

                        <div className="quest-popup stage-1">
                            <div className="balloon">
                                <div>
                                    <div className="title">
                                        Выполните задание и получите награду!
                                    </div>
                                    <p className="text">
                                        Raise the attribute "strength" to 2 in
                                        Master House
                                    </p>
                                    <div className="progress">
                                        <div className="num">0/2</div>
                                        <div className="prg-box">
                                            <div
                                                className="prg"
                                                style={{ width: "0%" }}></div>
                                        </div>
                                    </div>
                                    <div className="rewards">
                                        <p className="t">Награда:</p>
                                        <p className="icon">
                                            <img
                                                className="img"
                                                src="rc/ms-stone-orange.png"
                                            />
                                        </p>
                                        <p className="n">10</p>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <div className="btn-simple-silver btn-close">
                                        <div className="txt">Закрыть</div>
                                    </div>
                                </div>
                            </div>
                            <div className="person"></div>
                        </div>

                        <div className="quest-popup stage-1">
                            <div className="balloon">
                                <div>
                                    <div className="title">
                                        Выполните задание и получите награду!
                                    </div>
                                    <p className="text">Hire 2 any heroines</p>
                                    <div className="progress">
                                        <div className="num">2/2</div>
                                        <div className="prg-box">
                                            <div
                                                className="prg"
                                                style={{ width: "100%" }}></div>
                                        </div>
                                    </div>
                                    <div className="rewards">
                                        <p className="t">Награда:</p>
                                        <p className="icon">
                                            <img
                                                className="img"
                                                src="rc/ico-click.png"
                                            />
                                        </p>
                                        <p className="n">8</p>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <div className="btn-simple-gold btn-get">
                                        <div className="txt">
                                            Получить награду!
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="person"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(V2MainScreen08UkiDailyComponent);
