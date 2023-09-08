import React, { useEffect } from "react";
import notifications from "../styles/notifications.scss";
import screenMasterHouse from "../styles/screen-master-house.scss";
import screenInfoPop from "../styles/screen-info-pop.scss";

const V2MainScreen02GuildMasterComponent = () => {
    // создаём такой же айди как у родителя здесь и так попадаем к нему
    const currentUrl = window.location.href;
    const fileNameWithoutExtension = currentUrl.split("/").pop().split(".")[0];
    const pageContainerId = `root-${fileNameWithoutExtension}`;
    const pageContainer = document.getElementById(pageContainerId);

    useEffect(() => {
        if (pageContainer && !pageContainer.classList.contains("noScripts")) {
            // все попапы
            const po = document.getElementById("popupAll");
            const re = document.querySelector(".popup-layer");
            const pInf = document.querySelector(".m-popup.info-pop");

            // закрытие попапов
            [
                ...document.querySelectorAll(
                    ".m-popup, .ratingpop-box, .quest-popup, .popup, .reborn-popup"
                ),
            ].map((i) => {
                i.style.display = "none";
                // закрываем все попапы при клике на затемнение
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
            [
                ...document.querySelectorAll(
                    ".btn-close-x, .btn-close, .lbclose-btn, .ok-all-box, .openchest-btn-close, .color-btn.close, .ratingballon-box > div.color-btn, .error-popup > .btn-simple-gold, .btlpass-btn-box > div:nth-child(1), .fortuna-winpop2 > div.color-btn, .btlpass-info > div.color-btn"
                ),
            ].map((i) => {
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

            const bInf = document.querySelector(".color-btn-info");
            bInf.addEventListener("click", () => {
                re.style.display = "block";
                setTimeout(function () {
                    pInf.style.display = "block";
                    po.classList.add("dialog-emersion-enter");
                }, 100);
            });

            // окна
            const stB = document.querySelector(".stats-box-all");
            const abB = document.querySelector(".abils-box-all");
            const skB = document.querySelector(".skin-box-all");
            abB.style.display = "none";
            skB.style.display = "none";
            // переключалка
            const tabAll = document.querySelectorAll(".tabs-menu-btn");
            tabAll.forEach((item) => {
                item.addEventListener("click", (e) => {
                    // меню
                    tabAll.forEach((el) => {
                        el.classList.remove("active");
                    });
                    item.classList.add("active");
                    // окна
                    if (tabAll.item(0).classList.contains("active")) {
                        stB.style.display = "flex";
                        abB.style.display = "none";
                        skB.style.display = "none";
                    }
                    if (tabAll.item(1).classList.contains("active")) {
                        stB.style.display = "none";
                        abB.style.display = "flex";
                        skB.style.display = "none";
                    }
                    if (tabAll.item(2).classList.contains("active")) {
                        stB.style.display = "none";
                        abB.style.display = "none";
                        skB.style.display = "flex";
                    }
                });
            });

            const nameBox = document.querySelector(".master-name-box");
            const nameEdit = document.querySelector(".master-name-edit");
            const btnEdit = document.querySelector(".btn-edit-small");
            const btnEnter = document.querySelector(".btn-enter-small");
            btnEdit.addEventListener("click", (e) => {
                nameBox.classList.add("edit");
                nameEdit.style.display = "block";
            });
            btnEnter.addEventListener("click", (e) => {
                nameBox.classList.remove("edit");
                nameEdit.style.display = "none";
            });

            // скин боксы
            const skinB = document.querySelectorAll(".master-skin-box-all");
            skinB.forEach((item) => {
                // переключалка
                if (!item.classList.contains("lock")) {
                    item.addEventListener("click", (e) => {
                        skinB.forEach((el) => {
                            el.classList.remove("active");
                        });
                        item.classList.add("active");
                    });
                }
            });
            return;
        }

        return () => {};
    }, []);
    return (
        <>
            <div className="main lang-ru world1">
                <div
                    className="main-bg"
                    style={{ backgroundImage: "url('https" }}></div>
                <div className="header">
                    <div className="resource-panel">
                        <div className="avatar-box-all">
                            <div className="avatar-box-pic">
                                <img src="img/v2-master-pic1.png" />
                            </div>
                            <div className="avatar-box-name">Rank 27</div>
                        </div>
                        <div className="resource-gold">
                            <div className="value">6.57BD22</div>
                            <div className="value-bonus">
                                <span>+29.9M%</span>
                            </div>
                            <div className="resource-btn-add"></div>
                            <div className="resource-pic">
                                <img src="img/v2-res-gold.png" />
                            </div>
                            <div className="anim-in-p gold"></div>
                        </div>
                        <div className="resource-vip lvl0">
                            <div className="value-vip-diamond">21</div>
                            <div className="value-vip-ticket">2</div>
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
                                        src="img/v2-cw-bg34.png"
                                    />
                                    <img
                                        className="fg"
                                        src="img/v2-cw-p03.png"
                                    />
                                </div>
                                <div className="might-box-name">Valhalla</div>
                            </div>
                        </div>
                    </div>
                    <div className="shop-chest-box-all">
                        <div className="res-shop-btn">
                            <div className="res-shop-btn-text">shop</div>
                        </div>
                        <div>
                            <div className="res-chest-btn">
                                <div className="res-chest-btn-text">
                                    Открыть
                                </div>
                                <div className="res-chest-btn-count">15</div>
                                <div className="v2-bosschest-notif notif"></div>
                            </div>
                        </div>
                    </div>
                    <div className="btn signinout-btn out">
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
                                className="quest open"
                                style={{ animationDelay: "150ms" }}>
                                <img
                                    className="icon"
                                    src="img/ic-abil-reborn.png"
                                />
                            </li>
                            <li
                                className="quest angel-pop open"
                                style={{ animationDelay: "300ms" }}>
                                <img
                                    className="icon"
                                    src="img/picmeh-ic-angel-pop.png"
                                />
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
                                style={{ animationDelay: "450ms" }}>
                                <img
                                    className="icon"
                                    src="rating-sign-gold@1x.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">19:31:07</div>
                                </div>
                            </li>
                            <li className="quest startpack wide">
                                <img
                                    className="icon"
                                    src="img/v2-ns-chest.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">19:31:07</div>
                                </div>
                            </li>
                            <li
                                className="quest startpack open"
                                style={{ animationDelay: "600ms" }}>
                                <img
                                    className="icon"
                                    src="img/v2-ns-ball.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">19:31:07</div>
                                </div>
                            </li>
                            <li className="quest startpack wide">
                                <img
                                    className="icon"
                                    src="img/v2-mn-soul-sg-160.png"
                                />
                            </li>
                            <li
                                className="quest startpack open"
                                style={{ animationDelay: "750ms" }}>
                                <img
                                    className="icon"
                                    src="img/m-ico-gold.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">06:16:16</div>
                                </div>
                            </li>
                            <li className="quest-fortune picmeh-info info">
                                <img
                                    className="icon"
                                    src="img/picmeh-ic-diamond.png"
                                />
                            </li>
                            <li
                                className="quest open"
                                style={{ animationDelay: "900ms" }}>
                                <img
                                    className="icon"
                                    src="img/m-ico-quest.png"
                                />
                            </li>
                            <li
                                className="quest open"
                                style={{ animationDelay: "1050ms" }}>
                                <img
                                    className="icon"
                                    src="img/m-ico-quest-gift.png"
                                />
                            </li>
                            <li
                                className="quest open"
                                style={{ animationDelay: "1200ms" }}>
                                <img
                                    className="icon"
                                    src="img/m-ico-quest-gift.png"
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
                        <div className="container">
                            <div style={{ visibility: "visible" }}>
                                <div className="tab-panel-box master">
                                    <div className="tab-panel-box-title">
                                        master house
                                    </div>
                                    <div className="btn-close-x"></div>
                                    <div className="color-btn-info"></div>
                                    <div>
                                        <div className="leftside-box-all">
                                            <div>
                                                <div className="master-box">
                                                    <img
                                                        src="img/p-master-a1.jpg"
                                                        className="master-hero"
                                                    />
                                                </div>
                                                <div className="master-name-box-all">
                                                    <div className="master-name-box">
                                                        <div className="master-name">
                                                            adad
                                                        </div>
                                                        <input
                                                            className="master-name-edit"
                                                            id="bob"
                                                            type="text"
                                                            name="name"
                                                            maxLength="20"
                                                        />
                                                        <div className="btn-edit-small"></div>
                                                        <div className="btn-enter-small"></div>
                                                    </div>
                                                    <div className="master-bonus-box-all">
                                                        <div className="master-bonus-text">
                                                            bonus
                                                        </div>
                                                        <div className="master-bonus-num">
                                                            +100% gold
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rightside-box-all">
                                            <div className="hero-menu-box">
                                                <div className="tabs-menu-btn stats active">
                                                    <a
                                                        className="txt"
                                                        href="#/master-guild/stats">
                                                        <div className="color-btn-text">
                                                            параметры
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="tabs-menu-btn abil">
                                                    <a
                                                        className="txt"
                                                        href="#/master-guild/abilities">
                                                        <div className="color-btn-text">
                                                            способности
                                                        </div>
                                                    </a>
                                                    <div className="notif"></div>
                                                </div>
                                                <div className="tabs-menu-btn skin">
                                                    <a
                                                        className="txt"
                                                        href="#/master-guild/skins">
                                                        <div className="color-btn-text">
                                                            skins
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="stats-box-all">
                                                <div className="stats-box">
                                                    <div className="st-ic-box-all">
                                                        <div className="st-icon str"></div>
                                                        <div className="st-text">
                                                            8500
                                                        </div>
                                                    </div>
                                                    <div className="stone-box-all">
                                                        <div className="stone str"></div>
                                                        <div className="stone-stat">
                                                            525K/1710
                                                        </div>
                                                    </div>
                                                    <div className="st-bonus-box">
                                                        <div className="st-bonus-name">
                                                            бонус к DPC
                                                        </div>
                                                        <div className="st-bonus">
                                                            + 777928%
                                                        </div>
                                                    </div>
                                                    <div className="st-prgbar-box-all">
                                                        <div className="st-prgbar-box">
                                                            <div className="st-prgbar">
                                                                <div
                                                                    className="st-prgbar-all"
                                                                    style={{
                                                                        width: "42%",
                                                                    }}></div>
                                                            </div>
                                                            <div className="st-prgbar-text">
                                                                42 %
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ms-lvlup-btn-box-all">
                                                        <div className="color-btn">
                                                            <div className="color-btn-text">
                                                                пов. ур.
                                                                <div className="color-btn-text2">
                                                                    56% шанс
                                                                </div>
                                                            </div>
                                                            <div className="v2-master-notif notif notif20"></div>
                                                        </div>
                                                        <div className="color-btn vipall red">
                                                            <div className="color-btn-text">
                                                                пов. ур. vip
                                                                <div className="color-btn-text2">
                                                                    100% шанс
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="color-btn max-lvl">
                                                            <div className="color-btn-text">
                                                                max lvl up
                                                                <div className="color-btn-text2"></div>
                                                            </div>
                                                        </div>
                                                        <div className="color-btn block">
                                                            <div className="color-btn-text">
                                                                пов. ур. vip 5
                                                                <div className="color-btn-text2">
                                                                    100% шанс
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stats-box">
                                                    <div className="st-ic-box-all">
                                                        <div className="st-icon char"></div>
                                                        <div className="st-text">
                                                            8338
                                                        </div>
                                                    </div>
                                                    <div className="stone-box-all">
                                                        <div className="stone char"></div>
                                                        <div className="stone-stat">
                                                            354K/1676
                                                        </div>
                                                    </div>
                                                    <div className="st-bonus-box">
                                                        <div className="st-bonus-name">
                                                            бонус к DPS
                                                        </div>
                                                        <div className="st-bonus">
                                                            + 758975%
                                                        </div>
                                                    </div>
                                                    <div className="st-prgbar-box-all">
                                                        <div className="st-prgbar-box">
                                                            <div className="st-prgbar">
                                                                <div
                                                                    className="st-prgbar-all"
                                                                    style={{
                                                                        width: "0%",
                                                                    }}></div>
                                                            </div>
                                                            <div className="st-prgbar-text">
                                                                0 %
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ms-lvlup-btn-box-all">
                                                        <div className="color-btn">
                                                            <div className="color-btn-text">
                                                                пов. ур.
                                                                <div className="color-btn-text2">
                                                                    14% шанс
                                                                </div>
                                                            </div>
                                                            <div className="v2-master-notif notif notif20"></div>
                                                        </div>
                                                        <div className="color-btn vipall red">
                                                            <div className="color-btn-text">
                                                                пов. ур. vip
                                                                <div className="color-btn-text2">
                                                                    100% шанс
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="color-btn max-lvl">
                                                            <div className="color-btn-text">
                                                                max lvl up
                                                                <div className="color-btn-text2"></div>
                                                            </div>
                                                        </div>
                                                        <div className="color-btn block">
                                                            <div className="color-btn-text">
                                                                пов. ур. vip 5
                                                                <div className="color-btn-text2">
                                                                    100% шанс
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stats-box">
                                                    <div className="st-ic-box-all">
                                                        <div className="st-icon int"></div>
                                                        <div className="st-text">
                                                            8133
                                                        </div>
                                                    </div>
                                                    <div className="stone-box-all">
                                                        <div className="stone int"></div>
                                                        <div className="stone-stat">
                                                            542K/1636
                                                        </div>
                                                    </div>
                                                    <div className="st-bonus-box">
                                                        <div className="st-bonus-name">
                                                            способности
                                                        </div>
                                                        <div className="st-bonus">
                                                            + 32533%
                                                        </div>
                                                    </div>
                                                    <div className="st-prgbar-box-all">
                                                        <div className="st-prgbar-box">
                                                            <div className="st-prgbar">
                                                                <div
                                                                    className="st-prgbar-all"
                                                                    style={{
                                                                        width: "57%",
                                                                    }}></div>
                                                            </div>
                                                            <div className="st-prgbar-text">
                                                                57 %
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ms-lvlup-btn-box-all">
                                                        <div className="color-btn">
                                                            <div className="color-btn-text">
                                                                пов. ур.
                                                                <div className="color-btn-text2">
                                                                    71% шанс
                                                                </div>
                                                            </div>
                                                            <div className="v2-master-notif notif notif20"></div>
                                                        </div>
                                                        <div className="color-btn vipall red">
                                                            <div className="color-btn-text">
                                                                пов. ур. vip
                                                                <div className="color-btn-text2">
                                                                    100% шанс
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="color-btn max-lvl">
                                                            <div className="color-btn-text">
                                                                max lvl up
                                                                <div className="color-btn-text2"></div>
                                                            </div>
                                                        </div>
                                                        <div className="color-btn block">
                                                            <div className="color-btn-text">
                                                                пов. ур. vip 5
                                                                <div className="color-btn-text2">
                                                                    100% шанс
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stats-box">
                                                    <div className="st-ic-box-all">
                                                        <div className="st-icon lck"></div>
                                                        <div className="st-text">
                                                            8282
                                                        </div>
                                                    </div>
                                                    <div className="stone-box-all">
                                                        <div className="stone lck"></div>
                                                        <div className="stone-stat">
                                                            482K/1666
                                                        </div>
                                                    </div>
                                                    <div className="st-bonus-box">
                                                        <div className="st-bonus-name">
                                                            шанс выпадения
                                                        </div>
                                                        <div>
                                                            <div className="bn-price">
                                                                + 752357%
                                                                <div className="bn-icon gold"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="st-prgbar-box-all">
                                                        <div className="st-prgbar-box">
                                                            <div className="st-prgbar">
                                                                <div
                                                                    className="st-prgbar-all"
                                                                    style={{
                                                                        width: "28%",
                                                                    }}></div>
                                                            </div>
                                                            <div className="st-prgbar-text">
                                                                28 %
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ms-lvlup-btn-box-all">
                                                        <div className="color-btn">
                                                            <div className="color-btn-text">
                                                                пов. ур.
                                                                <div className="color-btn-text2">
                                                                    42% шанс
                                                                </div>
                                                            </div>
                                                            <div className="v2-master-notif notif notif20"></div>
                                                        </div>
                                                        <div className="color-btn vipall red">
                                                            <div className="color-btn-text">
                                                                пов. ур. vip
                                                                <div className="color-btn-text2">
                                                                    100% шанс
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="color-btn max-lvl">
                                                            <div className="color-btn-text">
                                                                max lvl up
                                                                <div className="color-btn-text2"></div>
                                                            </div>
                                                        </div>
                                                        <div className="color-btn block">
                                                            <div className="color-btn-text">
                                                                пов. ур. vip 5
                                                                <div className="color-btn-text2">
                                                                    100% шанс
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="abils-box-all">
                                                <div className="abil-box-scroll">
                                                    <div className="abil-card-box">
                                                        <div className="abil-box">
                                                            <div className="skills-pic">
                                                                <img src="img/skill-icons/skill-icon01.png" />
                                                            </div>
                                                        </div>
                                                        <div className="skills-ef cd check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    перезарядка
                                                                    -25%
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef pwr check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x2
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef dur check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    длительность
                                                                    x2
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef new check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x4
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                    </div>
                                                    <div className="abil-card-box">
                                                        <div className="abil-box">
                                                            <div className="skills-pic">
                                                                <img src="img/skill-icons/skill-icon02.png" />
                                                            </div>
                                                        </div>
                                                        <div className="skills-ef cd check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    перезарядка
                                                                    -25%
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef pwr check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x2
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef dur check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    длительность
                                                                    x2
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef new check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x4
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                    </div>
                                                    <div className="abil-card-box">
                                                        <div className="abil-box">
                                                            <div className="skills-pic">
                                                                <img src="img/skill-icons/skill-icon03.png" />
                                                            </div>
                                                        </div>
                                                        <div className="skills-ef cd check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    перезарядка
                                                                    -25%
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef pwr check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x2
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef dur check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    длительность
                                                                    x2
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef new check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x4
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                    </div>
                                                    <div className="abil-card-box">
                                                        <div className="abil-box">
                                                            <div className="skills-pic">
                                                                <img src="img/skill-icons/skill-icon04.png" />
                                                            </div>
                                                        </div>
                                                        <div className="skills-ef cd check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    перезарядка
                                                                    -25%
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef pwr check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x2
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef dur check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    длительность
                                                                    x2
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef new">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x4
                                                                </div>
                                                            </div>
                                                            <div className="color-btn diamonds">
                                                                <div className="color-btn-text">
                                                                    <div className="diamonds">
                                                                        <span className="f-diamonds">
                                                                            70
                                                                        </span>
                                                                    </div>
                                                                    <div className="color-btn-text1">
                                                                        Купить
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="abil-card-box">
                                                        <div className="abil-box">
                                                            <div className="skills-pic">
                                                                <img src="img/skill-icons/skill-icon05.png" />
                                                            </div>
                                                        </div>
                                                        <div className="skills-ef cd check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    перезарядка
                                                                    -25%
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef pwr check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x2
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef dur check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    длительность
                                                                    x2
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef new">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x4
                                                                </div>
                                                            </div>
                                                            <div className="color-btn diamonds">
                                                                <div className="color-btn-text">
                                                                    <div className="diamonds">
                                                                        <span className="f-diamonds">
                                                                            100
                                                                        </span>
                                                                    </div>
                                                                    <div className="color-btn-text1">
                                                                        Купить
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="abil-card-box">
                                                        <div className="abil-box">
                                                            <div className="skills-pic">
                                                                <img src="img/skill-icons/skill-icon06.png" />
                                                            </div>
                                                        </div>
                                                        <div className="skills-ef cd check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    перезарядка
                                                                    -25%
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef pwr check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x2
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef dur check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x4
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef new">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x6
                                                                </div>
                                                            </div>
                                                            <div className="color-btn diamonds">
                                                                <div className="color-btn-text">
                                                                    <div className="diamonds">
                                                                        <span className="f-diamonds">
                                                                            140
                                                                        </span>
                                                                    </div>
                                                                    <div className="color-btn-text1">
                                                                        Купить
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="abil-card-box">
                                                        <div className="abil-box">
                                                            <div className="skills-pic">
                                                                <img src="img/skill-icons/skill-icon07.png" />
                                                            </div>
                                                        </div>
                                                        <div className="skills-ef cd check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    перезарядка
                                                                    -25%
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef pwr check">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x4
                                                                </div>
                                                            </div>
                                                            <div className="pay-check"></div>
                                                        </div>
                                                        <div className="skills-ef dur">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    x2 раз(а)
                                                                </div>
                                                            </div>
                                                            <div className="color-btn diamonds">
                                                                <div className="color-btn-text">
                                                                    <div className="diamonds">
                                                                        <span className="f-diamonds">
                                                                            100
                                                                        </span>
                                                                    </div>
                                                                    <div className="color-btn-text1">
                                                                        Купить
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="skills-ef new">
                                                            <div className="ef-name-box">
                                                                <div className="ef-name">
                                                                    эффект x6
                                                                </div>
                                                            </div>
                                                            <div className="color-btn diamonds disabled">
                                                                <div className="color-btn-text">
                                                                    <div className="diamonds">
                                                                        <span className="f-diamonds">
                                                                            195
                                                                        </span>
                                                                    </div>
                                                                    <div className="color-btn-text1">
                                                                        закрыто
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skin-box-all">
                                                <div className="skin-box-scroll">
                                                    <div className="master-skin-box-all active">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a1.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    Master
                                                                    <span>
                                                                        Rank 30
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text on">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +390% gold
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +39% gold
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="master-skin-box-all">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a2.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    Dark Emperor
                                                                    <span>
                                                                        Rank 1
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +1K% DPS
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text on">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +100% DPS
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="master-skin-box-all lock">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a3.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    Bloody
                                                                    Emperor
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +1000% DPC
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +100% DPC
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="master-skin-lock">
                                                            <div className="master-skin-lock-text-box">
                                                                <div className="master-skin-lock-text">
                                                                    You could
                                                                    get it in
                                                                    Events
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="master-skin-box-all lock">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a4.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    War Leader
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    DPC +10% of
                                                                    DPS
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    DPC +1% of
                                                                    DPS
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="master-skin-lock">
                                                            <div className="master-skin-lock-text-box">
                                                                <div className="master-skin-lock-text">
                                                                    Get in
                                                                    Events
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="master-skin-box-all lock">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a5.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    X-Mas Elf
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +15K% of DPC
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +1.5K% of
                                                                    DPC
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="master-skin-lock">
                                                            <div className="master-skin-lock-text-box">
                                                                <div className="master-skin-lock-text">
                                                                    Get in
                                                                    Events
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="master-skin-box-all lock">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a6.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    Son of Santa
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +15K% of DPS
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +1.5K% of
                                                                    DPS
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="master-skin-lock">
                                                            <div className="master-skin-lock-text-box">
                                                                <div className="master-skin-lock-text">
                                                                    Get it in
                                                                    XMas Battle
                                                                    Pass
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="master-skin-box-all lock">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a7.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    Cupid
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +10% FW army
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +1% FW army
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="master-skin-lock">
                                                            <div className="master-skin-lock-text-box">
                                                                <div className="master-skin-lock-text">
                                                                    Get in
                                                                    Events
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="master-skin-box-all lock">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a8.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    Amourous
                                                                    gunner
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +20K% of DPS
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +2K% of DPS
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="master-skin-lock">
                                                            <div className="master-skin-lock-text-box">
                                                                <div className="master-skin-lock-text">
                                                                    Get in
                                                                    Events
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="master-skin-box-all lock">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a9.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    Money Lord
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +25K% gold
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +2.5K% gold
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="master-skin-lock">
                                                            <div className="master-skin-lock-text-box">
                                                                <div className="master-skin-lock-text">
                                                                    Get in VIP
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="master-skin-box-all lock">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a10.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    Shogun
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +25% FW army
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +2.5% FW
                                                                    army
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="master-skin-lock">
                                                            <div className="master-skin-lock-text-box">
                                                                <div className="master-skin-lock-text">
                                                                    Get in
                                                                    Events
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="master-skin-box-all lock">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a11.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    Clan Leader
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +25% CW army
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +2.5% CW
                                                                    army
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="master-skin-lock">
                                                            <div className="master-skin-lock-text-box">
                                                                <div className="master-skin-lock-text">
                                                                    Get in
                                                                    Events
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="master-skin-box-all lock">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a12.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    Ghost
                                                                    Warrior
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +50K% DPC
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +5K% DPC
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="master-skin-lock">
                                                            <div className="master-skin-lock-text-box">
                                                                <div className="master-skin-lock-text">
                                                                    Get in
                                                                    Events
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="master-skin-box-all lock">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a13.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    Pumpkin
                                                                    Knight
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +50K% DPS
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +5K% DPS
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="master-skin-lock">
                                                            <div className="master-skin-lock-text-box">
                                                                <div className="master-skin-lock-text">
                                                                    Get in
                                                                    Events
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="master-skin-box-all lock">
                                                        <div className="master-box">
                                                            <img src="img/p-master-a14.jpg" />
                                                        </div>
                                                        <div className="master-name-box-all">
                                                            <div className="master-name-box">
                                                                <div className="master-name">
                                                                    Gift Master
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all">
                                                                <div className="master-bonus-text">
                                                                    активный
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +25K% DPC
                                                                </div>
                                                            </div>
                                                            <div className="master-bonus-box-all passive">
                                                                <div className="master-bonus-text">
                                                                    passive
                                                                </div>
                                                                <div className="master-bonus-num">
                                                                    +2.5K% DPC
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="master-skin-lock">
                                                            <div className="master-skin-lock-text-box">
                                                                <div className="master-skin-lock-text">
                                                                    Get in
                                                                    Events
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
                            <div className="tab-loading-wrapper border"></div>
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
                        <a className="tabs-all album" href="#/galery/pictures">
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
                <div id="popupAll" className="dialog-emersion-enter">
                    <div id="popupWrapper" className="popup-layer">
                        <div className="screen-blend-55"></div>
                        <div id="popupContainer" className="popup-in">
                            <div className="m-popup info-pop">
                                <div className="title">Info</div>
                                <div className="btn-close-x"></div>
                                <div className="content">
                                    <div className="text-box">
                                        <div className="text">
                                            <div>
                                                Here you can raise your
                                                character's stats, upgrade your
                                                abilities, and get an
                                                interesting look from events.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="color-btn close">
                                        <div className="color-btn-text">
                                            закрыть
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(V2MainScreen02GuildMasterComponent);
