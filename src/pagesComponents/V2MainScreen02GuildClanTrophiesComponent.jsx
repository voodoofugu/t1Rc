import React, { useEffect, useState } from "react";
// import v2ScreenMainDarkWorld from "../styles/v2-screen-main-dark-world.scss";
// import clanTrophies from "../styles/clan-trophies.scss";
// import screenSuperhero from "../styles/screen-superhero.scss";

const V2MainScreen02GuildClanTrophiesComponent = () => {
    // создаём такой же айди как у родителя здесь и так попадаем к нему
    const currentUrl = window.location.href;
    const fileNameWithoutExtension = currentUrl.split("/").pop().split(".")[0];
    const pageContainerId = `root-${fileNameWithoutExtension}`;
    const pageContainer = document.getElementById(pageContainerId);

    useEffect(() => {
        if (pageContainer && !pageContainer.classList.contains("noScripts")) {
            [...document.querySelectorAll(".m-popup")].map((i) => {
                i.style.display = "none";
            });

            const re = document.querySelector(".popup-layer");
            re.style.display = "none";
            const po = document.getElementById("popupAll");
            const cT = document.querySelector(".m-popup.clan-trophy");

            [...document.querySelectorAll(".btn-close-x")].map((i) => {
                i.addEventListener("click", () => {
                    po.classList.remove("popup-view");
                    setTimeout(function () {
                        re.style.display = "none";
                        cT.style.display = "none";
                    }, 104);
                });
            });

            [...document.querySelectorAll(".titans-garage-item-inner")].map(
                (i) => {
                    i.addEventListener("click", () => {
                        re.style.display = "block";
                        setTimeout(function () {
                            cT.style.display = "block";
                            po.classList.add("popup-view");
                        }, 100);
                    });
                }
            );
            return;
        }
        return () => {};
    }, []);
    return (
        <>
            <div className="main world1">
                <div className="main-bg"></div>
                <div className="cw-content">
                    <div className="cw-bg">
                        <div className="clan-trophies-title-big">
                            Clan Trophies
                        </div>
                        <div className="clan-trophies">
                            <div className="titans-garage-scroll-box">
                                <div className="titans-garage-row">
                                    <div className="titans-garage-item">
                                        <div
                                            className="titans-garage-item-inner"
                                            style={{
                                                backgroundImage:
                                                    "url('../img/images/back/clan/bg_01.jpg')",
                                            }}>
                                            <div className="titans-garage-item-image">
                                                <img
                                                    src="img/trophy/trophy/002_1.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="stars">
                                                <div className="star checked"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                            </div>
                                            <div className="ability">
                                                Night Witch
                                            </div>
                                            <div className="titan-progress gold">
                                                <div
                                                    className="titan-progress__bar"
                                                    style={{
                                                        width: "70%",
                                                    }}></div>
                                                <div className="titan-progress__text">
                                                    100/200
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="titans-garage-item">
                                        <div
                                            className="titans-garage-item-inner"
                                            style={{
                                                backgroundImage:
                                                    "url('../img/images/back/clan/bg_02.jpg')",
                                            }}>
                                            <div className="titans-garage-item-image">
                                                <img
                                                    src="img/trophy/trophy/003_1.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="stars">
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                            </div>
                                            <div className="ability">
                                                Forest Nymph
                                            </div>
                                            <div className="titan-progress gold">
                                                <div
                                                    className="titan-progress__bar"
                                                    style={{
                                                        width: "0px",
                                                    }}></div>
                                                <div className="titan-progress__text">
                                                    0/100
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="titans-garage-item">
                                        <div
                                            className="titans-garage-item-inner"
                                            style={{
                                                backgroundImage:
                                                    "url('../img/images/back/clan/bg_03.jpg')",
                                            }}>
                                            <div className="titans-garage-item-image">
                                                <img
                                                    src="img/trophy/trophy/004_1.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="stars">
                                                <div className="star checked"></div>
                                                <div className="star checked"></div>
                                                <div className="star checked"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                                <div className="star"></div>
                                            </div>
                                            <div className="ability">
                                                Earth Charmer
                                            </div>
                                            <div className="titan-progress gold">
                                                <div
                                                    className="titan-progress__bar"
                                                    style={{
                                                        width: "0px",
                                                    }}></div>
                                                <div className="titan-progress__text">
                                                    380/400
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="titans-garage-item locked">
                                        <div
                                            className="titans-garage-item-inner"
                                            style={{
                                                backgroundImage:
                                                    "url('../img/images/back/clan/bg_04.jpg')",
                                            }}>
                                            <div className="titans-garage-item-image">
                                                <img
                                                    src="img/trophy/trophy/006_1.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="stars"></div>
                                            <div className="ability">
                                                Heavenly Mage
                                            </div>
                                            <div className="titan-progress gold">
                                                <div
                                                    className="titan-progress__bar"
                                                    style={{
                                                        width: "0px",
                                                    }}></div>
                                                <div className="titan-progress__text">
                                                    0/100
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="titans-garage-item locked">
                                        <div
                                            className="titans-garage-item-inner"
                                            style={{
                                                backgroundImage:
                                                    "url('../img/images/back/clan/bg_07.jpg')",
                                            }}>
                                            <div className="titans-garage-item-image">
                                                <img
                                                    src="img/trophy/trophy/007_1.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="stars"></div>
                                            <div className="ability">
                                                Noble Keeper
                                            </div>
                                            <div className="titan-progress gold">
                                                <div
                                                    className="titan-progress__bar"
                                                    style={{
                                                        width: "0px",
                                                    }}></div>
                                                <div className="titan-progress__text">
                                                    0/100
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trophy-res-box-all">
                                <div className="trophy-res-box essence-green">
                                    <div className="trophy-value">1000</div>
                                </div>
                                <div className="trophy-res-box essence-blue">
                                    <div className="trophy-value">1000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="color-btn exit">
                        <div className="color-btn-text">Exit</div>
                    </div>
                </div>
                <div id="popupAll" className="popup-hiden">
                    <div id="popupWrapper" className="popup-layer show">
                        <div className="screen-blend-55"></div>
                        <div id="popupContainer" className="popup-in">
                            <div className="m-popup clan-trophy">
                                <div className="title">Earth Charmer</div>
                                <div className="color-box"></div>
                                <div
                                    className="popup-trophy-image"
                                    style={{
                                        backgroundImage:
                                            "url('../img/images/back/clan/bg_03.jpg')",
                                    }}>
                                    <img
                                        src="img/trophy/trophy/004_1.png"
                                        alt=""
                                    />
                                    <div className="popup-stars">
                                        <div className="star checked"></div>
                                        <div className="star checked"></div>
                                        <div className="star checked"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                    </div>
                                    <div className="popup-name">380/400</div>
                                </div>
                                <div className="popup-left">
                                    <div className="rstar-box">
                                        <div className="rname-box">Effects</div>
                                        <div className="bonus-lvl-box first">
                                            <div className="lvlbox-name">
                                                Underworld Loot
                                            </div>
                                            <div className="bonus-lvl-box-name">
                                                In 3 Districts
                                            </div>
                                            <div className="bonus-lvl-box-bonus-box">
                                                <div className="bonus-lvl-box-bonus">
                                                    <div className="bonus-lvl-box-bonus">
                                                        <img src="img/ic-blue-butil.png" />
                                                        600 to Loot
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bonus-lvl-box next">
                                            <div className="lvlbox-name">
                                                Underworld DPS
                                            </div>
                                            <div className="bonus-lvl-box-name">
                                                Level 0/10
                                            </div>
                                            <div className="bonus-lvl-box-bonus-box">
                                                <div className="bonus-lvl-box-bonus">
                                                    <div className="bonus-lvl-box-bonus">
                                                        +3%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rbottom-box">
                                            <div className="all-btn-box">
                                                <div className="lvlup-btn undefined disabled0">
                                                    <div className="essence-text-box">
                                                        <div className="essence-icon green"></div>
                                                        <div className="essence-text">
                                                            100/10K
                                                        </div>
                                                    </div>
                                                    <div className="btn-text">
                                                        level up
                                                    </div>
                                                </div>
                                                <div className="lvlup-btn right">
                                                    <div className="essence-text-box">
                                                        <div className="essence-icon green"></div>
                                                        <div className="essence-text">
                                                            100/10K
                                                        </div>
                                                    </div>
                                                    <div className="btn-text">
                                                        level up
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rstar-box howtoget">
                                        <div className="rname-box">
                                            How to get
                                        </div>
                                        <div className="bonus-lvl-box">
                                            <div className="lvlbox-name">
                                                Get in events
                                            </div>
                                            <div className="bonus-lvl-box-name">
                                                Wait for start
                                            </div>
                                            <div className="bonus-lvl-box-bonus-box">
                                                <div
                                                    className="color-btn get-button"
                                                    style={{
                                                        filter: "grayscale(1)",
                                                    }}>
                                                    <div className="color-btn-text">
                                                        Get in events
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="dialogWrapper" className="popup-layer">
                    <div className="screen-blend-55"></div>
                    <div id="dialogContainer"></div>
                </div>
                <div className="slider-layer"></div>
                <div className="tooltip-layer"></div>
            </div>
        </>
    );
};

export default React.memo(V2MainScreen02GuildClanTrophiesComponent);
