import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import v2ScreenMainDarkWorld from "../styles/v2-screen-main-dark-world.scss";
import v2ScreenTower from "../styles/v2-screen-tower.scss";
import v2ScreenTowerBoss from "../styles/v2-screen-tower-boss.scss";
import v2ScreenTowerTop from "../styles/v2-screen-tower-top.scss";
import v2ScreenTowerRelics from "../styles/v2-screen-tower-relics.scss";
import v2ScreenTowerQuest from "../styles/v2-screen-tower-quest.scss";
import v2ScreenTowerTrophy from "../styles/v2-screen-tower-trophy.scss";
import v2ScreenTowerRelicsPop from "../styles/v2-screen-tower-relics-pop.scss";
import v2ScreenTowerTrophyPop from "../styles/v2-screen-tower-trophy-pop.scss";

const V2MainScreen02GuildTowerComponent = () => {
    useEffect(() => {
        // кнопка перехода в тёмный мир
        let btn = document.createElement("div");
        let btnText = document.createElement("div");
        btn.className = "color-btn green world-btn";
        btnText.className = "color-btn-text";
        btnText.innerHTML = "To Darkworld";
        btn.append(btnText);
        document.body.append(btn);
        const main = document.querySelector(".main");
        const reG = document.querySelector(
            ".resource-panel > div:nth-child(2)"
        );
        const reI = document.querySelector(".resource-pic > img");
        const vvT = document.querySelector(".value-vip-ticket");
        btn.addEventListener("click", () => {
            if (main.classList.contains("world1")) {
                main.classList.remove("world1");
                main.classList.add("world3");
                btnText.innerHTML = "To Earthworld";

                reG.classList.remove("resource-gold");
                reG.classList.add("resource-dark_gold");
                reI.src = "rc/v2-res-dark.png";
                vvT.style.display = "none";
            } else {
                main.classList.remove("world3");
                main.classList.add("world1");
                btnText.innerHTML = "To Darkworld";

                reG.classList.remove("resource-dark_gold");
                reG.classList.add("resource-gold");
                reI.src = "rc/v2-res-gold.png";
                vvT.style.display = "block";
            }
        });

        // попапы
        [...document.querySelectorAll(".popup-layer, .m-popup")].map((i) => {
            i.style.display = "none";
        });
        const po = document.getElementById("popupWrapper");
        const re = document.querySelector(".popup-layer");
        const trP = document.querySelector(".m-popup.tower-relics-pop");
        const ttP = document.querySelector(".m-popup.tower-trophy-pop");

        // закрываем все попапы при клике на затемнение
        [
            ...document.querySelectorAll(
                ".m-popup, .ratingpop-box, .quest-popup, .popup, .reborn-popup"
            ),
        ].map((i) => {
            i.style.display = "none";
            const blS = document.querySelector(".screen-blend-55");
            blS.addEventListener("click", () => {
                po.classList.remove("dialog-emersion-enter");
                po.classList.add("dialog-emersion-exit");
                setTimeout(function () {
                    re.style.display = "none";
                    i.style.display = "none";
                    po.classList.remove("dialog-emersion-exit");
                }, 100);
            });
        });
        // закрываем все попапы при клике на x
        [...document.querySelectorAll(".m-popup .btn-close-x")].map((i) => {
            i.addEventListener("click", () => {
                po.classList.remove("dialog-emersion-enter");
                po.classList.add("dialog-emersion-exit");
                setTimeout(function () {
                    re.style.display = "none";
                    i.closest(
                        ".m-popup, .ratingpop-box, .quest-popup, .popup"
                    ).style.display = "none";
                    po.classList.remove("dialog-emersion-exit");
                }, 100);
            });
        });

        const tprB = document.querySelector(".quest.trophy-pop");
        tprB.addEventListener("click", () => {
            re.style.display = "block";
            setTimeout(function () {
                trP.style.display = "block";
                po.classList.add("dialog-emersion-enter");
            }, 100);
        });

        const tttB = document.querySelector(".quest.tower-trophy-pop");
        tttB.addEventListener("click", () => {
            re.style.display = "block";
            setTimeout(function () {
                ttP.style.display = "block";
                po.classList.add("dialog-emersion-enter");
            }, 100);
        });

        // переключалки контента
        const lP = document.querySelector(".left-panel");
        const lpD = document.querySelector(".left-panel > div:nth-child(1)");
        const tB1 = document.querySelector(
            ".tower-btn-box-all > a:nth-child(1)"
        );
        const tB2 = document.querySelector(
            ".tower-btn-box-all > a:nth-child(2)"
        );
        const tB3 = document.querySelector(
            ".tower-btn-box-all > a:nth-child(3)"
        );
        const tB4 = document.querySelector(
            ".tower-btn-box-all > a:nth-child(4)"
        );
        const tB5 = document.querySelector(
            ".tower-btn-box-all > a:nth-child(5)"
        );
        const tB = document.querySelectorAll(".tower-btn-box-all > a");
        const twF = document.querySelector(".tower-wall.a1 > .color-btn");

        const atB = document.querySelector(".all-tower-box");
        //   atB.style.display = "none";
        const raB = document.querySelector(".raidboss-animation-box");
        raB.style.display = "none";
        const trB = document.querySelector(".tower-relics-box-scroll");
        trB.style.display = "none";
        const tpB = document.querySelector(".tab-panel-box.tower-quest");
        tpB.style.display = "none";
        const ttB = document.querySelector(".tower-trophy-box-scroll");
        ttB.style.display = "none";

        tB.forEach((item) => {
            item.addEventListener("click", (e) => {
                tB.forEach((el) => {
                    el.classList.remove("select");
                });
                item.classList.add("select");
                if (tB1.classList.contains("select")) {
                    lP.className = "left-panel tower wide";
                    atB.style.display = "block";
                    raB.style.display = "none";
                    trB.style.display = "none";
                    tpB.style.display = "none";
                    ttB.style.display = "none";

                    ahb[0].style.display = "block";
                    ahb[1].style.display = "none";

                    x2B.style.display = "flex";
                }
                if (tB2.classList.contains("select")) {
                    lP.className = "left-panel top wide";
                    raB.style.display = "block";
                    atB.style.display = "none";
                    trB.style.display = "none";
                    tpB.style.display = "none";
                    ttB.style.display = "none";

                    ahb[0].style.display = "none";
                    ahb[1].style.display = "block";

                    x2B.style.display = "none";
                }
                if (tB3.classList.contains("select")) {
                    lP.className = "left-panel relics wide";
                    trB.style.display = "block";
                    raB.style.display = "none";
                    atB.style.display = "none";
                    tpB.style.display = "none";
                    ttB.style.display = "none";

                    ahb[0].style.display = "block";
                    ahb[1].style.display = "none";

                    x2B.style.display = "flex";
                }
                if (tB4.classList.contains("select")) {
                    lP.className = "left-panel wide";
                    lpD.style.display = "none";
                    tpB.style.display = "block";
                    atB.style.display = "block";
                    trB.style.display = "none";
                    raB.style.display = "none";
                    ttB.style.display = "none";
                    const btX = document.querySelector(
                        ".tower-quest > .btn-close-x"
                    );
                    btX.addEventListener("click", () => {
                        lP.className = "left-panel tower wide";
                        lpD.style.display = "block";
                        tpB.style.display = "none";
                        tB4.classList.remove("select");
                        tB1.classList.add("select");
                    });

                    ahb[0].style.display = "block";
                    ahb[1].style.display = "none";

                    x2B.style.display = "flex";
                }
                if (tB5.classList.contains("select")) {
                    lP.className = "left-panel trophy wide";
                    ttB.style.display = "block";
                    tpB.style.display = "none";
                    trB.style.display = "none";
                    raB.style.display = "none";
                    atB.style.display = "none";

                    ahb[0].style.display = "block";
                    ahb[1].style.display = "none";

                    x2B.style.display = "flex";
                }
            });
        });

        twF.addEventListener("click", () => {
            lP.className = "left-panel tower wide fight";
            const tR = document.querySelector(".tower-right-wrap");
            tR.style.display = "none";
        });

        // кнопки покупки в попапк реликвий
        [...document.querySelectorAll(".color-btn.purple")].map((i) => {
            i.addEventListener("click", () => {
                i.closest(".cardreward-box").classList.add("collected");
            });
        });

        const ahb = document.querySelectorAll(".all-heroes-box");
        ahb[1].style.display = "none";
        const x2B = document.querySelector(".x2-btn-all-box");

        return () => {};
    }, []);
    const css = `
        .world-btn {
            position: absolute;
            top: 660px;
            left: 50%;
            transform: translateX(-50%);
            font-family: "Roboto", sans-serif;
            width: 140px;
        }
    `;
    return (
        <HelmetProvider>
            <Helmet>
                <style>{css}</style>
            </Helmet>
            <div className="main world1">
                <div
                    className="main-bg"
                    style={{
                        backgroundImage:
                            "url('img/images/back/new/02-Forest-2.jpg')",
                    }}></div>
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
                    <div className="quest-box-scroll">
                        <div className="quest-box">
                            <div className="quest">
                                <img
                                    className="icon"
                                    src="img/rating-sign-gold@1x.png"
                                />
                            </div>
                            <div
                                className="quest"
                                style={{ transform: "translateY(-12px)" }}>
                                <div className="timerbox">
                                    <div className="timer">Popups</div>
                                </div>
                            </div>
                            <div className="quest trophy-pop">
                                <img
                                    className="icon"
                                    src="img/v2-relics-stone.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">Trophy</div>
                                </div>
                            </div>
                            <div className="quest tower-trophy-pop">
                                <img
                                    className="icon"
                                    src="img/trophy/v2-trophy-dragon-head-c.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">Relics</div>
                                </div>
                            </div>
                            <div className="quest tower-mag-box">
                                <img
                                    className="icon"
                                    src="img/v2-ns-chest.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-side"></div>
                <div className="left-side false false">
                    <div className="left-panel tower wide false">
                        <div style={{ visibility: "visible" }}>
                            <div>
                                <div className="container">
                                    <div
                                        className="heroes-list-all-box"
                                        style={{ visibility: "visible" }}>
                                        <div className="dps-dpc-panel-box">
                                            <div className="dpc">
                                                <div className="value">100</div>
                                                <div className="mlt-prm"></div>
                                                <div className="title">
                                                    DPC
                                                    <div className="icon-dpc"></div>
                                                </div>
                                            </div>
                                            <div className="dps">
                                                <div className="value">2</div>
                                                <div className="mlt-prm">
                                                    <span>
                                                        +20%<span> idle</span>
                                                    </span>
                                                </div>
                                                <div className="title">
                                                    DPS
                                                    <div className="icon-dps"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dps-dpc-panel-d1"></div>
                                                <div className="dps-dpc-panel-d2"></div>
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
                                                        <div
                                                            className="hero-avatar-box"
                                                            style={{
                                                                backgroundImage:
                                                                    "url('img/ts_confirm_bk-1-ny.jpg')",
                                                                backgroundSize:
                                                                    "cover",
                                                                backgroundPosition:
                                                                    "center center",
                                                            }}>
                                                            <img
                                                                className="hero-avatar"
                                                                src="img/ic-tickets-xmas-1.png"
                                                            />
                                                        </div>
                                                        <div className="hero-level-box">
                                                            Осталось
                                                        </div>
                                                        <div className="hero-dps-box">
                                                            <div className="st-time">
                                                                00:00:00
                                                            </div>
                                                        </div>
                                                        <div className="hero-name-box">
                                                            <div className="hero-name">
                                                                Black Friday
                                                            </div>
                                                        </div>
                                                        <div className="btn-buy starterpack">
                                                            <div className="txt">
                                                                Event
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hero-card">
                                                        <div className="hero-avatar-box special">
                                                            <img
                                                                className="hero-avatar"
                                                                src="img/images/hero-all/tithero-328/x2/ava/tithero-328-3-ava.jpg"
                                                            />
                                                            <div className="sh2-icon-forgirl">
                                                                <img src="img/cur2-gun.png" />
                                                            </div>
                                                        </div>
                                                        <div className="hero-level-box">
                                                            level
                                                            <div className="hero-level">
                                                                1
                                                            </div>
                                                        </div>
                                                        <div className="hero-dps-box">
                                                            dps
                                                            <div className="hero-dps">
                                                                1.32KD3
                                                            </div>
                                                        </div>
                                                        <div className="hero-name-box">
                                                            <div className="hero-name">
                                                                Tokuda Arisu
                                                            </div>
                                                        </div>
                                                        <div className="color-btn green disabled">
                                                            <div className="color-btn-text">
                                                                <div className="gold">
                                                                    <span className="f-gold">
                                                                        743ND3
                                                                    </span>
                                                                </div>
                                                                <div className="color-btn-text1">
                                                                    Lvl Up
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hero-card">
                                                        <div className="hero-avatar-box">
                                                            <img
                                                                className="hero-avatar"
                                                                src="img/images/hero-all/tithero-336/x2/ava/tithero-336-1-ava.jpg"
                                                            />
                                                            <div className="sh2-icon-forgirl">
                                                                <img src="img/cur2-druid.png" />
                                                            </div>
                                                        </div>
                                                        <div className="hero-level-box">
                                                            level
                                                            <div className="hero-level">
                                                                1
                                                            </div>
                                                        </div>
                                                        <div className="hero-dps-box">
                                                            dps
                                                            <div className="hero-dps">
                                                                1.23s
                                                            </div>
                                                        </div>
                                                        <div className="hero-name-box">
                                                            <div className="hero-name">
                                                                Takayama Bunko
                                                            </div>
                                                        </div>
                                                        <div className="color-btn green">
                                                            <div className="color-btn-text">
                                                                <div className="gold">
                                                                    <span className="f-gold">
                                                                        2.15O
                                                                    </span>
                                                                </div>
                                                                <div className="color-btn-text1">
                                                                    Lvl Up
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hero-card">
                                                        <div className="hero-avatar-box">
                                                            <img
                                                                className="hero-avatar"
                                                                src="img/images/hero-all/tithero-335/x2/ava/tithero-335-1-ava.jpg"
                                                            />
                                                            <div className="sh2-icon-forgirl">
                                                                <img src="img/cur2-sword.png" />
                                                            </div>
                                                        </div>
                                                        <div className="hero-level-box">
                                                            level
                                                            <div className="hero-level">
                                                                1
                                                            </div>
                                                        </div>
                                                        <div className="hero-dps-box">
                                                            dps
                                                            <div className="hero-dps">
                                                                2.8s
                                                            </div>
                                                        </div>
                                                        <div className="hero-name-box">
                                                            <div className="hero-name">
                                                                Miyasaki Keiko
                                                            </div>
                                                        </div>
                                                        <div className="color-btn green">
                                                            <div className="color-btn-text">
                                                                <div className="gold">
                                                                    <span className="f-gold">
                                                                        1.29O
                                                                    </span>
                                                                </div>
                                                                <div className="color-btn-text1">
                                                                    Lvl Up
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hero-card">
                                                        <div className="hero-avatar-box">
                                                            <img
                                                                className="hero-avatar"
                                                                src="img/images/hero-all/tithero-334/x2/ava/tithero-334-1-ava.jpg"
                                                            />
                                                            <div className="sh2-icon-forgirl">
                                                                <img src="img/cur2-wizard.png" />
                                                            </div>
                                                        </div>
                                                        <div className="hero-level-box">
                                                            level
                                                            <div className="hero-level">
                                                                1
                                                            </div>
                                                        </div>
                                                        <div className="hero-dps-box">
                                                            dps
                                                            <div className="hero-dps">
                                                                950Q
                                                            </div>
                                                        </div>
                                                        <div className="hero-name-box">
                                                            <div className="hero-name">
                                                                Konya Suzume
                                                            </div>
                                                        </div>
                                                        <div className="color-btn green">
                                                            <div className="color-btn-text">
                                                                <div className="gold">
                                                                    <span className="f-gold">
                                                                        861S
                                                                    </span>
                                                                </div>
                                                                <div className="color-btn-text1">
                                                                    Lvl Up
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hero-card">
                                                        <div className="hero-avatar-box">
                                                            <img
                                                                className="hero-avatar"
                                                                src="img/images/hero-all/tithero-323/x2/ava/tithero-323-1-ava.jpg"
                                                            />
                                                            <div className="sh2-icon-forgirl">
                                                                <img src="img/cur2-gun.png" />
                                                            </div>
                                                        </div>
                                                        <div className="hero-level-box">
                                                            level
                                                            <div className="hero-level">
                                                                1
                                                            </div>
                                                        </div>
                                                        <div className="hero-dps-box">
                                                            dps
                                                            <div className="hero-dps">
                                                                245Q
                                                            </div>
                                                        </div>
                                                        <div className="hero-name-box">
                                                            <div className="hero-name">
                                                                Teruya Fumiko
                                                            </div>
                                                        </div>
                                                        <div className="color-btn green">
                                                            <div className="color-btn-text">
                                                                <div className="gold">
                                                                    <span className="f-gold">
                                                                        430S
                                                                    </span>
                                                                </div>
                                                                <div className="color-btn-text1">
                                                                    Lvl Up
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hero-card">
                                                        <div className="hero-avatar-box">
                                                            <img
                                                                className="hero-avatar"
                                                                src="img/images/hero-all/tithero-325/x2/ava/tithero-325-1-ava.jpg"
                                                            />
                                                            <div className="sh2-icon-forgirl">
                                                                <img src="img/cur2-wizard.png" />
                                                            </div>
                                                        </div>
                                                        <div className="hero-level-box">
                                                            level
                                                            <div className="hero-level">
                                                                1
                                                            </div>
                                                        </div>
                                                        <div className="hero-dps-box">
                                                            dps
                                                            <div className="hero-dps">
                                                                1.05s
                                                            </div>
                                                        </div>
                                                        <div className="hero-name-box">
                                                            <div className="hero-name">
                                                                Enomoto Runa
                                                            </div>
                                                        </div>
                                                        <div className="color-btn green">
                                                            <div className="color-btn-text">
                                                                <div className="gold">
                                                                    <span className="f-gold">
                                                                        895S
                                                                    </span>
                                                                </div>
                                                                <div className="color-btn-text1">
                                                                    Lvl Up
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hero-card">
                                                        <div className="hero-avatar-box">
                                                            <img
                                                                className="hero-avatar"
                                                                src="img/images/hero-all/tithero-324/x2/ava/tithero-324-1-ava.jpg"
                                                            />
                                                            <div className="sh2-icon-forgirl">
                                                                <img src="img/cur2-barbarian.png" />
                                                            </div>
                                                        </div>
                                                        <div className="hero-level-box">
                                                            level
                                                            <div className="hero-level">
                                                                1
                                                            </div>
                                                        </div>
                                                        <div className="hero-dps-box">
                                                            dps
                                                            <div className="hero-dps">
                                                                741Q
                                                            </div>
                                                        </div>
                                                        <div className="hero-name-box">
                                                            <div className="hero-name">
                                                                Ogata Wayoko
                                                            </div>
                                                        </div>
                                                        <div className="color-btn green">
                                                            <div className="color-btn-text">
                                                                <div className="gold">
                                                                    <span className="f-gold">
                                                                        186S
                                                                    </span>
                                                                </div>
                                                                <div className="color-btn-text1">
                                                                    Lvl Up
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="all-heroes-box">
                                            <div className="container-top">
                                                <div className="rating-ped-box">
                                                    <div className="ped-box rate1 undefined">
                                                        <div className="ped-box-prize"></div>
                                                        <div className="rating-ped-box-num">
                                                            <div className="ped-box-num-text var1">
                                                                51-100
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ped-box rate2 undefined">
                                                        <div className="ped-box-prize"></div>
                                                        <div className="rating-ped-box-num">
                                                            <div className="ped-box-num-text var2">
                                                                21-50
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ped-box rate3 undefined">
                                                        <div className="ped-box-prize"></div>
                                                        <div className="rating-ped-box-num">
                                                            <div className="ped-box-num-text var3">
                                                                4-20
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ped-box rate4 undefined">
                                                        <div className="ped-box-prize"></div>
                                                        <div className="rating-ped-box-num">
                                                            <div className="ped-box-num-text var4">
                                                                1-3
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ped-box-portrait place2">
                                                        <div className="you-box">
                                                            ты
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="rating-scroll-name-box">
                                                        <div className="rating-scroll-name var1">
                                                            Место
                                                        </div>
                                                        <div className="rating-scroll-name var2">
                                                            Имя
                                                        </div>
                                                        <div className="rating-scroll-name var3">
                                                            Очки
                                                        </div>
                                                    </div>
                                                    <div className="rating-scroll-box">
                                                        <div className="rating-scroll">
                                                            <div>
                                                                <div className="rating-card-rank top">
                                                                    <div className="top-name-diamond">
                                                                        top
                                                                    </div>
                                                                </div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        1
                                                                    </div>
                                                                    <div className="name">
                                                                        cthulhujoker
                                                                    </div>
                                                                    <div className="points">
                                                                        425
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        2
                                                                    </div>
                                                                    <div className="name">
                                                                        arys
                                                                    </div>
                                                                    <div className="points">
                                                                        265
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        3
                                                                    </div>
                                                                    <div className="name">
                                                                        Ninjagaiden
                                                                    </div>
                                                                    <div className="points">
                                                                        220
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card-rank gold">
                                                                    <div className="">
                                                                        gold
                                                                        rank
                                                                    </div>
                                                                </div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        4
                                                                    </div>
                                                                    <div className="name">
                                                                        galaser
                                                                    </div>
                                                                    <div className="points">
                                                                        174
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        5
                                                                    </div>
                                                                    <div className="name">
                                                                        Galdard
                                                                    </div>
                                                                    <div className="points">
                                                                        145
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        6
                                                                    </div>
                                                                    <div className="name">
                                                                        0verl0rd99
                                                                    </div>
                                                                    <div className="points">
                                                                        136
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        7
                                                                    </div>
                                                                    <div className="name">
                                                                        andrei1991c
                                                                    </div>
                                                                    <div className="points">
                                                                        125
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        8
                                                                    </div>
                                                                    <div className="name">
                                                                        Paddy7766
                                                                    </div>
                                                                    <div className="points">
                                                                        117
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        9
                                                                    </div>
                                                                    <div className="name">
                                                                        Alex007ander
                                                                    </div>
                                                                    <div className="points">
                                                                        105
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        10
                                                                    </div>
                                                                    <div className="name">
                                                                        TheMaleRei
                                                                    </div>
                                                                    <div className="points">
                                                                        80
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        11
                                                                    </div>
                                                                    <div className="name">
                                                                        WaTdaFuq
                                                                    </div>
                                                                    <div className="points">
                                                                        75
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        12
                                                                    </div>
                                                                    <div className="name">
                                                                        Dragah
                                                                    </div>
                                                                    <div className="points">
                                                                        65
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        13
                                                                    </div>
                                                                    <div className="name">
                                                                        Andrew85994
                                                                    </div>
                                                                    <div className="points">
                                                                        65
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        14
                                                                    </div>
                                                                    <div className="name">
                                                                        Frik32
                                                                    </div>
                                                                    <div className="points">
                                                                        65
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        15
                                                                    </div>
                                                                    <div className="name">
                                                                        guest198808738
                                                                    </div>
                                                                    <div className="points">
                                                                        55
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        16
                                                                    </div>
                                                                    <div className="name">
                                                                        ericq
                                                                    </div>
                                                                    <div className="points">
                                                                        50
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        17
                                                                    </div>
                                                                    <div className="name">
                                                                        guest234399384
                                                                    </div>
                                                                    <div className="points">
                                                                        39
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        18
                                                                    </div>
                                                                    <div className="name">
                                                                        WildIce
                                                                    </div>
                                                                    <div className="points">
                                                                        35
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        19
                                                                    </div>
                                                                    <div className="name">
                                                                        tadetiany
                                                                    </div>
                                                                    <div className="points">
                                                                        35
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        20
                                                                    </div>
                                                                    <div className="name">
                                                                        nananafufufu
                                                                    </div>
                                                                    <div className="points">
                                                                        34
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card-rank silver">
                                                                    <div className="">
                                                                        silver
                                                                        rank
                                                                    </div>
                                                                </div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        21
                                                                    </div>
                                                                    <div className="name">
                                                                        xtra
                                                                    </div>
                                                                    <div className="points">
                                                                        31
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        22
                                                                    </div>
                                                                    <div className="name">
                                                                        Rastin
                                                                    </div>
                                                                    <div className="points">
                                                                        31
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        23
                                                                    </div>
                                                                    <div className="name">
                                                                        guest244499668
                                                                    </div>
                                                                    <div className="points">
                                                                        30
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        24
                                                                    </div>
                                                                    <div className="name">
                                                                        lexx🍀777
                                                                    </div>
                                                                    <div className="points">
                                                                        30
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        25
                                                                    </div>
                                                                    <div className="name">
                                                                        FrankZ98
                                                                    </div>
                                                                    <div className="points">
                                                                        28
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        26
                                                                    </div>
                                                                    <div className="name">
                                                                        Eggieman
                                                                    </div>
                                                                    <div className="points">
                                                                        27
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        27
                                                                    </div>
                                                                    <div className="name">
                                                                        guest243912461
                                                                    </div>
                                                                    <div className="points">
                                                                        25
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        28
                                                                    </div>
                                                                    <div className="name">
                                                                        guest245147322
                                                                    </div>
                                                                    <div className="points">
                                                                        23
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        29
                                                                    </div>
                                                                    <div className="name">
                                                                        cheche63
                                                                    </div>
                                                                    <div className="points">
                                                                        23
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        30
                                                                    </div>
                                                                    <div className="name">
                                                                        Crowshou
                                                                    </div>
                                                                    <div className="points">
                                                                        20
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        31
                                                                    </div>
                                                                    <div className="name">
                                                                        Anatolijj
                                                                    </div>
                                                                    <div className="points">
                                                                        20
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        32
                                                                    </div>
                                                                    <div className="name">
                                                                        astonvip
                                                                    </div>
                                                                    <div className="points">
                                                                        20
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        33
                                                                    </div>
                                                                    <div className="name">
                                                                        armkrs
                                                                    </div>
                                                                    <div className="points">
                                                                        16
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        34
                                                                    </div>
                                                                    <div className="name">
                                                                        Krossi
                                                                    </div>
                                                                    <div className="points">
                                                                        15
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        35
                                                                    </div>
                                                                    <div className="name">
                                                                        DaHeLLGoD
                                                                    </div>
                                                                    <div className="points">
                                                                        15
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        36
                                                                    </div>
                                                                    <div className="name">
                                                                        Reaktor35
                                                                    </div>
                                                                    <div className="points">
                                                                        15
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        37
                                                                    </div>
                                                                    <div className="name">
                                                                        zak-30
                                                                    </div>
                                                                    <div className="points">
                                                                        15
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        38
                                                                    </div>
                                                                    <div className="name">
                                                                        Pupok
                                                                        clan RUS
                                                                    </div>
                                                                    <div className="points">
                                                                        15
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        39
                                                                    </div>
                                                                    <div className="name">
                                                                        Monark273
                                                                    </div>
                                                                    <div className="points">
                                                                        14
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        40
                                                                    </div>
                                                                    <div className="name">
                                                                        DOkA38
                                                                    </div>
                                                                    <div className="points">
                                                                        12
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        41
                                                                    </div>
                                                                    <div className="name">
                                                                        8286283ud8i
                                                                    </div>
                                                                    <div className="points">
                                                                        10
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        42
                                                                    </div>
                                                                    <div className="name">
                                                                        SIVA8823
                                                                    </div>
                                                                    <div className="points">
                                                                        10
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        43
                                                                    </div>
                                                                    <div className="name">
                                                                        NuclearSpam
                                                                    </div>
                                                                    <div className="points">
                                                                        10
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        44
                                                                    </div>
                                                                    <div className="name">
                                                                        guest240205771
                                                                    </div>
                                                                    <div className="points">
                                                                        10
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        45
                                                                    </div>
                                                                    <div className="name">
                                                                        thefinalfate4
                                                                    </div>
                                                                    <div className="points">
                                                                        10
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        46
                                                                    </div>
                                                                    <div className="name">
                                                                        Virginator
                                                                    </div>
                                                                    <div className="points">
                                                                        10
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        47
                                                                    </div>
                                                                    <div className="name">
                                                                        gaogaigarneo
                                                                    </div>
                                                                    <div className="points">
                                                                        10
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        48
                                                                    </div>
                                                                    <div className="name">
                                                                        sst_b
                                                                    </div>
                                                                    <div className="points">
                                                                        10
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        49
                                                                    </div>
                                                                    <div className="name">
                                                                        ZerOx4C
                                                                    </div>
                                                                    <div className="points">
                                                                        10
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        50
                                                                    </div>
                                                                    <div className="name">
                                                                        Vitaseg
                                                                    </div>
                                                                    <div className="points">
                                                                        10
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card-rank bronze">
                                                                    <div className="">
                                                                        bronze
                                                                        rank
                                                                    </div>
                                                                </div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        51
                                                                    </div>
                                                                    <div className="name">
                                                                        Leopard627
                                                                    </div>
                                                                    <div className="points">
                                                                        10
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        52
                                                                    </div>
                                                                    <div className="name">
                                                                        godpussy
                                                                    </div>
                                                                    <div className="points">
                                                                        10
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        53
                                                                    </div>
                                                                    <div className="name">
                                                                        ultje
                                                                    </div>
                                                                    <div className="points">
                                                                        7
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        54
                                                                    </div>
                                                                    <div className="name">
                                                                        nora_cat
                                                                    </div>
                                                                    <div className="points">
                                                                        7
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        55
                                                                    </div>
                                                                    <div className="name">
                                                                        Frutitos
                                                                    </div>
                                                                    <div className="points">
                                                                        6
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        56
                                                                    </div>
                                                                    <div className="name">
                                                                        guest245059840
                                                                    </div>
                                                                    <div className="points">
                                                                        5
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        57
                                                                    </div>
                                                                    <div className="name">
                                                                        Nightrythums
                                                                    </div>
                                                                    <div className="points">
                                                                        5
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        58
                                                                    </div>
                                                                    <div className="name">
                                                                        torrent
                                                                    </div>
                                                                    <div className="points">
                                                                        5
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card color2 ">
                                                                    <div className="number">
                                                                        59
                                                                    </div>
                                                                    <div className="name">
                                                                        guest244987472
                                                                    </div>
                                                                    <div className="points">
                                                                        3
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="rating-card  ">
                                                                    <div className="number">
                                                                        60
                                                                    </div>
                                                                    <div className="name">
                                                                        jojohron
                                                                    </div>
                                                                    <div className="points">
                                                                        3
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="x2-btn-all-box">
                                            <div className="x2-btn selected">
                                                <div className="x2-btn-text">
                                                    x1
                                                </div>
                                            </div>
                                            <div className="x2-btn">
                                                <div className="x2-btn-text">
                                                    x10
                                                </div>
                                            </div>
                                            <div className="x2-btn">
                                                <div className="x2-btn-text">
                                                    x25
                                                </div>
                                            </div>
                                            <div className="x2-btn">
                                                <div className="x2-btn-text">
                                                    x100
                                                </div>
                                            </div>
                                            <div className="x2-btn">
                                                <div className="x2-btn-text">
                                                    x200
                                                </div>
                                            </div>
                                            <div className="x2-btn">
                                                <div className="x2-btn-text">
                                                    x500
                                                </div>
                                            </div>
                                            <div className="x2-btn">
                                                <div className="x2-btn-text">
                                                    x1000
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-loading-wrapper border"></div>
                                </div>
                                <div className="tower-rightside-box-all">
                                    <div className="right-side">
                                        <div className="skills-wrap">
                                            <div className="skills-all-box">
                                                <div className="skills-all">
                                                    <div className="skills-pic disabled">
                                                        <img
                                                            className="icon"
                                                            src="img/skill-icons/skill-icon01.png"
                                                        />
                                                        <div className="skills-pic-disabled"></div>
                                                    </div>
                                                    <div className="skills-pic disabled">
                                                        <img
                                                            className="icon"
                                                            src="img/skill-icons/skill-icon02.png"
                                                        />
                                                        <div className="skills-pic-disabled"></div>
                                                    </div>
                                                    <div className="skills-pic disabled">
                                                        <img
                                                            className="icon"
                                                            src="img/skill-icons/skill-icon03.png"
                                                        />
                                                        <div className="skills-pic-disabled"></div>
                                                    </div>
                                                    <div className="skills-pic disabled">
                                                        <img
                                                            className="icon"
                                                            src="img/skill-icons/skill-icon04.png"
                                                        />
                                                        <div className="skills-pic-disabled"></div>
                                                    </div>
                                                    <div className="skills-pic disabled">
                                                        <img
                                                            className="icon"
                                                            src="img/skill-icons/skill-icon05.png"
                                                        />
                                                        <div className="skills-pic-disabled"></div>
                                                    </div>
                                                    <div className="skills-pic disabled">
                                                        <img
                                                            className="icon"
                                                            src="img/skill-icons/skill-icon06.png"
                                                        />
                                                        <div className="skills-pic-disabled"></div>
                                                    </div>
                                                    <div className="skills-pic disabled">
                                                        <img
                                                            className="icon"
                                                            src="img/skill-icons/skill-icon07.png"
                                                        />
                                                        <div className="skills-pic-disabled"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="monster">
                                            <canvas
                                                width="491"
                                                height="540"
                                                style={{
                                                    touchAction: "none",
                                                    width: "491px",
                                                    height: "540px",
                                                    cursor: "inherit",
                                                }}></canvas>
                                        </div>
                                        <div className="monster-prg-box-all r_b">
                                            <div className="name">
                                                Шалунишка Орк
                                            </div>
                                            <div className="health">
                                                <div className="p100">
                                                    <div
                                                        className="prg"
                                                        style={{
                                                            width: "98%",
                                                        }}></div>
                                                </div>
                                                <div className="num pulse">
                                                    <div className="from">
                                                        4.6K
                                                    </div>
                                                    <div className="to">
                                                        4.66K
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timer">
                                                <div className="p100">
                                                    <div
                                                        className="prg"
                                                        style={{
                                                            width: "0.276667%",
                                                        }}></div>
                                                </div>
                                                <div className="time run">
                                                    <div className="txt">
                                                        0:0
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="boss-lvl boss">
                                                <div className="label">LVL</div>
                                                <div className="icon"></div>
                                                <div className="text">1</div>
                                            </div>
                                            <div className="loc-list">
                                                <div className="locs">
                                                    <div className="loc">
                                                        <div className="loc-text">
                                                            1
                                                        </div>
                                                        <div className="loc-text2">
                                                            lvl
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bossbtn-box">
                                            <div className="type-box">
                                                <div className="type-top">
                                                    type
                                                </div>
                                                <div className="type-name">
                                                    FAST
                                                </div>
                                            </div>
                                            <div className="plas-all-box">
                                                <div className="plas-all">
                                                    <div className="plas">
                                                        -50%
                                                        <span className="xp-icon"></span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <div className="price diamonds">
                                                            1
                                                        </div>
                                                        <div className="txt">
                                                            use
                                                        </div>
                                                    </div>
                                                    <div className="used-already">
                                                        <div className="us-al-text">
                                                            used already
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="plas-all">
                                                    <div className="plas">
                                                        +15
                                                        <span className="time-icon"></span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <div className="price diamonds">
                                                            1
                                                        </div>
                                                        <div className="txt">
                                                            use
                                                        </div>
                                                    </div>
                                                    <div className="used-already">
                                                        <div className="us-al-text">
                                                            used already
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="plas-all">
                                                    <div className="plas dps">
                                                        +100%
                                                        <span className="dps-icon"></span>
                                                        <span className="dpc-icon"></span>
                                                        for this run
                                                    </div>
                                                    <div className="btn-buy">
                                                        <div className="price diamonds">
                                                            1
                                                        </div>
                                                        <div className="txt">
                                                            use
                                                        </div>
                                                    </div>
                                                    <div className="used-already">
                                                        <div className="us-al-text">
                                                            used already
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tower-right-wrap">
                                        <div className="tab-panel-box-title">
                                            dark tower
                                        </div>
                                        <div className="tower-prg-box-all">
                                            <div className="cards-res-box relicset">
                                                <div
                                                    className="cards-value"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}>
                                                    0
                                                </div>
                                                <div className="cards-value-btn-add"></div>
                                            </div>
                                            <div className="color-btn gblue rb-koi">
                                                <img
                                                    className="domik"
                                                    src="img/v2-ns-chest.png"
                                                />
                                                <div className="color-btn-text">
                                                    Magic Boxes
                                                </div>
                                                0
                                            </div>
                                            <div className="cards-res-box cards">
                                                <div className="cards-value">
                                                    0
                                                </div>
                                                <div className="cards-value-btn-add"></div>
                                            </div>
                                        </div>
                                        <div className="tower-btn-box-all">
                                            <a
                                                className="color-btn select"
                                                aria-current="page"
                                                element="div"
                                                href="#/raid-bosses/tower">
                                                <div className="color-btn-text">
                                                    tower
                                                </div>
                                            </a>
                                            <a
                                                className="color-btn"
                                                element="div"
                                                href="#/raid-bosses/top">
                                                <div className="color-btn-text">
                                                    топ
                                                </div>
                                            </a>
                                            <a
                                                className="color-btn"
                                                element="div"
                                                href="#/raid-bosses/relics">
                                                <div className="color-btn-text">
                                                    relics
                                                </div>
                                            </a>
                                            <a
                                                className="color-btn"
                                                element="div"
                                                href="#/raid-bosses/quest">
                                                <div className="color-btn-text">
                                                    quest
                                                </div>
                                            </a>
                                            <a
                                                className="color-btn"
                                                element="div"
                                                href="#/raid-bosses/trophies">
                                                <div className="color-btn-text">
                                                    trophies
                                                </div>
                                            </a>
                                        </div>
                                        <div className="tower-box-all xmas">
                                            <div className="all-tower-box">
                                                <div className="all-tower-bg"></div>
                                                <div className="all-tower-scroll">
                                                    <div className="tower-wall a1">
                                                        <div className="tower-lock-bg"></div>
                                                        <div className="tower-lock"></div>
                                                        <div className="color-btn orange">
                                                            <div className="color-btn-text">
                                                                go
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="tower-chest-box">
                                                                <div className="tower-chest"></div>
                                                            </div>
                                                        </div>
                                                        <div className="tower-completed"></div>
                                                        <div className="tower-counter">
                                                            1
                                                        </div>
                                                    </div>
                                                    <div className="tower-wall a2 lock">
                                                        <div className="tower-lock-bg"></div>
                                                        <div className="tower-lock"></div>
                                                        <div className="color-btn orange">
                                                            <div className="color-btn-text">
                                                                go
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="tower-chest-box">
                                                                <div className="tower-chest"></div>
                                                            </div>
                                                        </div>
                                                        <div className="tower-completed"></div>
                                                        <div className="tower-counter">
                                                            2
                                                        </div>
                                                    </div>
                                                    <div className="tower-wall a3 lock">
                                                        <div className="tower-lock-bg"></div>
                                                        <div className="tower-lock"></div>
                                                        <div className="color-btn orange">
                                                            <div className="color-btn-text">
                                                                go
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="tower-chest-box">
                                                                <div className="tower-chest"></div>
                                                            </div>
                                                        </div>
                                                        <div className="tower-completed"></div>
                                                        <div className="tower-counter">
                                                            3
                                                        </div>
                                                    </div>
                                                    <div className="tower-wall a4 lock">
                                                        <div className="tower-lock-bg"></div>
                                                        <div className="tower-lock"></div>
                                                        <div className="color-btn orange">
                                                            <div className="color-btn-text">
                                                                go
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="tower-chest-box">
                                                                <div className="tower-chest"></div>
                                                            </div>
                                                        </div>
                                                        <div className="tower-completed"></div>
                                                        <div className="tower-counter">
                                                            4
                                                        </div>
                                                    </div>
                                                    <div className="tower-wall a5 lock chest">
                                                        <div className="tower-lock-bg"></div>
                                                        <div className="tower-lock"></div>
                                                        <div className="color-btn orange">
                                                            <div className="color-btn-text">
                                                                go
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="tower-chest-box">
                                                                <div className="tower-chest"></div>
                                                            </div>
                                                        </div>
                                                        <div className="tower-completed"></div>
                                                        <div className="tower-counter">
                                                            5
                                                        </div>
                                                    </div>
                                                    <div className="tower-wall a6 lock">
                                                        <div className="tower-lock-bg"></div>
                                                        <div className="tower-lock"></div>
                                                        <div className="color-btn orange">
                                                            <div className="color-btn-text">
                                                                go
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="tower-chest-box">
                                                                <div className="tower-chest"></div>
                                                            </div>
                                                        </div>
                                                        <div className="tower-completed"></div>
                                                        <div className="tower-counter">
                                                            6
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="raidboss-animation-box">
                                                <div className="raidboss-animation-name-box">
                                                    <div className="raidboss-animation-name">
                                                        Get the girl and claim
                                                        TOP 3 places in rating
                                                        to get their INTERACTIVE
                                                        animations
                                                    </div>
                                                </div>
                                                <div className="raidboss-animation-scroll-box">
                                                    <div className="raidboss-animation-scroll">
                                                        <div className="raidboss-animation-f-box girl-lock">
                                                            <div className="rb-rignt-box">
                                                                <div className="rb-rating-slot lock">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                    <div className="rb-lock"></div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rb-left-box">
                                                                <div className="rb-left-box-name">
                                                                    madoka kaido
                                                                </div>
                                                                <div className="rb-girl-slot">
                                                                    <div className="rb-girl-avatar">
                                                                        <img src="img/hero0093-ava.jpg" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rb-girl-lock">
                                                                <div className="rb-girl-lock-text">
                                                                    Wait for the
                                                                    next tower
                                                                    event to get
                                                                    her
                                                                </div>
                                                            </div>
                                                            <div className="rb-slot-lock">
                                                                <div className="rb-slot-lock-text">
                                                                    coming
                                                                    soon...
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="raidboss-animation-f-box slot-lock">
                                                            <div className="rb-rignt-box">
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rb-left-box">
                                                                <div className="rb-left-box-name">
                                                                    madoka kaido
                                                                </div>
                                                                <div className="rb-girl-slot">
                                                                    <div className="rb-girl-avatar">
                                                                        <img src="img/hero0093-ava.jpg" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rb-girl-lock">
                                                                <div className="rb-girl-lock-text">
                                                                    Wait for the
                                                                    next tower
                                                                    event to get
                                                                    her
                                                                </div>
                                                            </div>
                                                            <div className="rb-slot-lock">
                                                                <div className="rb-slot-lock-text">
                                                                    coming
                                                                    soon...
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="raidboss-animation-f-box">
                                                            <div className="rb-rignt-box">
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="rb-rating-slot">
                                                                    <div className="rb-rating-video">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                        <div className="rating-video-play"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rb-left-box">
                                                                <div className="rb-left-box-name">
                                                                    madoka kaido
                                                                </div>
                                                                <div className="rb-girl-slot">
                                                                    <div className="rb-girl-avatar">
                                                                        <img src="img/hero0093-ava.jpg" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rb-girl-lock">
                                                                <div className="rb-girl-lock-text">
                                                                    Wait for the
                                                                    next tower
                                                                    event to get
                                                                    her
                                                                </div>
                                                            </div>
                                                            <div className="rb-slot-lock">
                                                                <div className="rb-slot-lock-text">
                                                                    coming
                                                                    soon...
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tower-relics-box-scroll">
                                                <div className="vanish-text">
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            Buy Relics
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="vanish-text">
                                                    All relict will next Dark
                                                    Tower event!
                                                </div>
                                                <div className="tower-relics-box gold">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-relics-box bronze">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-relics-box silver">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-relics-box silver">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-relics-box gold">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-relics-box bronze">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-relics-box silver">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-relics-box gold">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-relics-box bronze">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-relics-box silver">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-relics-box silver">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-relics-box gold">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-relics-box bronze">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-relics-box silver">
                                                    <div className="tower-relics-pic">
                                                        <img src="img/change-sun1.png" />
                                                    </div>
                                                    <div className="tower-relics-text-box">
                                                        <div className="tower-relics-text">
                                                            Lyca's normal
                                                            attacks and "rapid
                                                            arrows" ability are
                                                            able to hit 3
                                                            enemies at once
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tower-trophy-box-scroll">
                                                <div className="tower-trophy-box">
                                                    <div className="trophy-bonus-pic-box">
                                                        <div className="trophy-bonus-pic">
                                                            <img src="img/change-ic-gem-master.png" />
                                                        </div>
                                                        <div className="trophy-bonus-lvl">
                                                            Level 6969K
                                                        </div>
                                                        <div className="trophy-bonus-name-box">
                                                            <div className="trophy-bonus-name">
                                                                Ancient of
                                                                Moderation
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="trophy-bonus-about-box">
                                                        <div className="trophy-bonus-about-name">
                                                            бонус
                                                        </div>
                                                        <div className="trophy-bonus-about-text-box">
                                                            <div className="trophy-bonus-about-text">
                                                                +400% of DPS in
                                                                tower divided by
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cards-res-box cards">
                                                        <div className="cards-value">
                                                            696969К
                                                        </div>
                                                        <div className="cards-value-btn-add"></div>
                                                    </div>
                                                    <div className="trophy-lvlup-box">
                                                        <div className="color-btn green">
                                                            <div className="color-btn-text">
                                                                unlock
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-trophy-box">
                                                    <div className="trophy-bonus-pic-box">
                                                        <div className="trophy-bonus-pic">
                                                            <img src="img/change-ic-gem-master.png" />
                                                        </div>
                                                        <div className="trophy-bonus-lvl">
                                                            Level 6969K
                                                        </div>
                                                        <div className="trophy-bonus-name-box">
                                                            <div className="trophy-bonus-name">
                                                                Ancient of
                                                                Moderation
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="trophy-bonus-about-box">
                                                        <div className="trophy-bonus-about-name">
                                                            бонус
                                                        </div>
                                                        <div className="trophy-bonus-about-text-box">
                                                            <div className="trophy-bonus-about-text">
                                                                +400% of DPS in
                                                                tower divided by
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cards-res-box cards">
                                                        <div className="cards-value">
                                                            696969К
                                                        </div>
                                                        <div className="cards-value-btn-add"></div>
                                                    </div>
                                                    <div className="trophy-lvlup-box">
                                                        <div className="color-btn green">
                                                            <div className="color-btn-text">
                                                                unlock
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tower-trophy-box">
                                                    <div className="trophy-bonus-pic-box">
                                                        <div className="trophy-bonus-pic">
                                                            <img src="img/change-ic-gem-master.png" />
                                                        </div>
                                                        <div className="trophy-bonus-lvl">
                                                            Level 6969K
                                                        </div>
                                                        <div className="trophy-bonus-name-box">
                                                            <div className="trophy-bonus-name">
                                                                Ancient of
                                                                Moderation
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="trophy-bonus-about-box">
                                                        <div className="trophy-bonus-about-name">
                                                            бонус
                                                        </div>
                                                        <div className="trophy-bonus-about-text-box">
                                                            <div className="trophy-bonus-about-text">
                                                                +400% of DPS in
                                                                tower divided by
                                                                1000
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cards-res-box cards">
                                                        <div className="cards-value">
                                                            696969К
                                                        </div>
                                                        <div className="cards-value-btn-add"></div>
                                                    </div>
                                                    <div className="trophy-lvlup-box">
                                                        <div className="color-btn green">
                                                            <div className="color-btn-text">
                                                                unlock
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
                        <div className="tab-panel-box tower-quest">
                            <div className="tab-panel-box-title">
                                trophy quests chain
                            </div>
                            <div className="map-box">
                                <div className="map-box-left-all">
                                    <div className="map-quest-box-all one">
                                        <div className="map-quest-box">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-claim2">
                                                <div className="color-btn green">
                                                    <div className="color-btn-text">
                                                        claim
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s pic2">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s1-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3leo.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s1-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s pic1">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s2-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s2-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                    </div>
                                    <div className="map-quest-box-all two">
                                        <div className="map-quest-box check">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s pic1 pic2">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3leo.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box lock">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box lock">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                    </div>
                                    <div className="map-quest-box-all three">
                                        <div className="map-quest-box check">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s pic1 pic2">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3leo.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box lock">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box lock">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="map-box-right-all">
                                    <div className="map-quest-box-all one">
                                        <div className="map-quest-box">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s pic2">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s1-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3leo.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s1-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s pic1">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s2-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s2-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box lock">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line"></div>
                                        </div>
                                    </div>
                                    <div className="map-quest-box-all two">
                                        <div className="map-quest-box check">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s pic1 pic2">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3leo.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box lock">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box lock">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                    </div>
                                    <div className="map-quest-box-all three">
                                        <div className="map-quest-box check">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s pic1 pic2">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3leo.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box lock">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                        <div className="map-quest-box lock">
                                            <div className="map-quest-box-name">
                                                <div className="map-quest-box-name-text">
                                                    Go through location
                                                </div>
                                            </div>
                                            <div className="map-s shop">
                                                <div className="s-pic-s1a">
                                                    <img src="img/raidboss-map-s3-a.png" />
                                                </div>
                                                <div className="s-pic-3pic1">
                                                    <img src="img/raidboss-map-3tower.png" />
                                                </div>
                                                <div className="s-pic-3pic2">
                                                    <img src="img/raidboss-map-3sun.png" />
                                                </div>
                                                <div className="s-pic-s1b">
                                                    <img src="img/raidboss-map-s3-b.png" />
                                                </div>
                                                <div className="s-shop">
                                                    <img src="img/ic-abil-rubin.png" />
                                                </div>
                                            </div>
                                            <div className="map-quest-prgbar-all">
                                                <div className="map-quest-prgbar"></div>
                                                <div className="map-quest-prgbar-text">
                                                    1/3
                                                </div>
                                            </div>
                                            <div className="s-check"></div>
                                            <div className="s-lock"></div>
                                            <div className="map-s-line green"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="s-map-line-all-box">
                                    <div className="s-map-line1 green"></div>
                                    <div className="s-map-line2 green"></div>
                                    <div className="s-map-line3"></div>
                                    <div className="s-map-line4"></div>
                                    <div className="s-map-line5"></div>
                                    <div className="s-map-line6"></div>
                                </div>
                                <div className="s-girl-reward-box">
                                    <div className="hero-avatar-box">
                                        <img
                                            className="hero-avatar"
                                            src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                                        />
                                    </div>
                                    <div className="color-btn green">
                                        <div className="color-btn-text">
                                            claim
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="btn-close-x"></div>
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
                        <a className="tabs-all guild selected" href="#/guild">
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="tabs-name">Guild base</div>
                                <div className="tabs-pic">
                                    <img src="img/tab-08.png" />
                                </div>
                            </div>
                        </a>
                        <a
                            className="tabs-all album disable"
                            href="#/galery/pictures">
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="tabs-name">Gallery</div>
                                <div className="tabs-pic">
                                    <img src="img/tab-05.png" />
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
                    </div>
                </div>
                <div id="popupWrapper" className="popup-layer">
                    <div className="screen-blend-55"></div>
                    <div id="popupContainer">
                        <div className="m-popup tower-relics-pop">
                            <div className="title">choose a relic</div>
                            <div className="color-box"></div>
                            <div className="cardreward-box-all choose">
                                <div className="cardreward-box gold collected">
                                    <div className="card-box-back">
                                        <div className="card-vis">?</div>
                                        <div className="reward-pic">
                                            <img src="img/skill-icons/skill-icon01x2.png" />
                                        </div>
                                        <div className="tower-relics-text-box">
                                            <div className="tower-relics-text">
                                                Lyca's normal attacks and "rapid
                                                arrows" ability are able to hit
                                                3 enemies at once
                                            </div>
                                        </div>
                                        <div className="rb-card-light"></div>
                                    </div>
                                    <div className="color-btn purple">
                                        <div className="color-btn-text">
                                            collected
                                        </div>
                                    </div>
                                </div>
                                <div className="cardreward-box silver">
                                    <div className="card-box-back">
                                        <div className="card-vis">?</div>
                                        <div className="reward-pic">
                                            <img src="img/skill-icons/skill-icon01x2.png" />
                                        </div>
                                        <div className="tower-relics-text-box">
                                            <div className="tower-relics-text">
                                                Lyca's normal attacks and "rapid
                                                arrows" ability are able to hit
                                                3 enemies at once
                                            </div>
                                        </div>
                                        <div className="rb-card-light"></div>
                                    </div>
                                    <div className="color-btn purple">
                                        <div className="color-btn-text">
                                            buy this
                                            <span className="f-diamond"></span>
                                            99
                                        </div>
                                    </div>
                                </div>
                                <div className="cardreward-box bronze">
                                    <div className="card-box-back">
                                        <div className="card-vis">?</div>
                                        <div className="reward-pic">
                                            <img src="img/skill-icons/skill-icon01x2.png" />
                                        </div>
                                        <div className="tower-relics-text-box">
                                            <div className="tower-relics-text">
                                                Lyca's normal attacks and "rapid
                                                arrows" ability are able to hit
                                                3 enemies at once
                                            </div>
                                        </div>
                                        <div className="rb-card-light"></div>
                                    </div>
                                    <div className="color-btn purple">
                                        <div className="color-btn-text">
                                            buy this
                                            <span className="f-diamond"></span>
                                            99
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardreward-text-box">
                                <div className="cardreward-text">
                                    You can buy additional cards
                                </div>
                            </div>

                            <div className="btn-close-x"></div>
                        </div>
                        <div className="m-popup tower-trophy-pop">
                            <div className="title">trophy</div>
                            <div className="color-box"></div>
                            <div className="tower-trophy-bg-all">
                                <div className="tower-trophy-pic">
                                    <img src="img/trophy/v2-trophy-dragon-head-c.png" />
                                </div>
                                <div className="tower-trophy-prgbar-empty">
                                    <div
                                        className="tower-trophy-prgbar-full"
                                        style={{ width: "80%" }}></div>
                                </div>
                            </div>
                            <div className="btn-close-x"></div>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default React.memo(V2MainScreen02GuildTowerComponent);
