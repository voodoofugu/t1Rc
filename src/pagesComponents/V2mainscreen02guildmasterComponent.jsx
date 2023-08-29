import React from "react";
import notifications from "../styles/notifications.scss";
import screenInfoPop from "../styles/screen-info-pop.scss";

const V2MainScreen02GuildMasterComponent = () => {
    return (
        <>
            <div className="main lang-ru world1">
                <div
                    className="main-bg"
                    style="
                    background-image: url('https://cdn.faptitans.com/s1/__3bb5/images/back/new/02-Forest-2.jpg');
                "></div>
                <div className="header">
                    <div className="resource-panel">
                        <div className="avatar-box-all">
                            <div className="avatar-box-pic">
                                <img src="https://cdn.faptitans.com/s1/rc/v2-master-pic1.png" />
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
                                <img src="https://cdn.faptitans.com/s1/rc/v2-res-gold.png" />
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
                                        src="https://cdn.faptitans.com/s1/rc/v2-cw-bg34.png"
                                    />
                                    <img
                                        className="fg"
                                        src="https://cdn.faptitans.com/s1/rc/v2-cw-p03.png"
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
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/ic-quests.png"
                                />
                                <div className="quest-notif notif notif10"></div>
                            </li>
                            <li
                                className="quest open"
                                style="animation-delay: 0ms">
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/change-sun3.png"
                                />
                            </li>
                            <li
                                className="quest open"
                                style="animation-delay: 150ms">
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/ic-abil-reborn.png"
                                />
                            </li>
                            <li
                                className="quest angel-pop open"
                                style="animation-delay: 300ms">
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/picmeh-ic-angel-pop.png"
                                />
                            </li>
                            <li className="quest-fortune">
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/ic-fortuna.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">SPIN!</div>
                                </div>
                            </li>
                            <li
                                className="quest startpack open"
                                style="animation-delay: 450ms">
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/rating-sign-gold@1x.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">19:31:07</div>
                                </div>
                            </li>
                            <li className="quest startpack wide">
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/v2-ns-chest.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">19:31:07</div>
                                </div>
                            </li>
                            <li
                                className="quest startpack open"
                                style="animation-delay: 600ms">
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/v2-ns-ball.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">19:31:07</div>
                                </div>
                            </li>
                            <li className="quest startpack wide">
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/v2-mn-soul-sg-160.png"
                                />
                            </li>
                            <li
                                className="quest startpack open"
                                style="animation-delay: 750ms">
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/m-ico-gold.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">06:16:16</div>
                                </div>
                            </li>
                            <li className="quest-fortune picmeh-info info">
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/picmeh-ic-diamond.png"
                                />
                            </li>
                            <li
                                className="quest open"
                                style="animation-delay: 900ms">
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/m-ico-quest.png"
                                />
                            </li>
                            <li
                                className="quest open"
                                style="animation-delay: 1050ms">
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/m-ico-quest-gift.png"
                                />
                            </li>
                            <li
                                className="quest open"
                                style="animation-delay: 1200ms">
                                <img
                                    className="icon"
                                    src="https://cdn.faptitans.com/s1/rc/m-ico-quest-gift.png"
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
                            <div style="visibility: visible">
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
                                                        src="https://cdn.faptitans.com/s1/rc/p-master-a1.jpg"
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
                                                            maxlength="20"
                                                            value="adad"
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
                                                                    style="
                                                                    width: 42%;
                                                                "></div>
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
                                                                    style="
                                                                    width: 0%;
                                                                "></div>
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
                                                                    style="
                                                                    width: 57%;
                                                                "></div>
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
                                                                    style="
                                                                    width: 28%;
                                                                "></div>
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
                                                                <img src="rc/skill-icons/skill-icon01.png" />
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
                                                                <img src="rc/skill-icons/skill-icon02.png" />
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
                                                                <img src="rc/skill-icons/skill-icon03.png" />
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
                                                                <img src="rc/skill-icons/skill-icon04.png" />
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
                                                                <img src="rc/skill-icons/skill-icon05.png" />
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
                                                                <img src="rc/skill-icons/skill-icon06.png" />
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
                                                                <img src="rc/skill-icons/skill-icon07.png" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a1.jpg" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a2.jpg" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a3.jpg" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a4.jpg" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a5.jpg" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a6.jpg" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a7.jpg" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a8.jpg" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a9.jpg" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a10.jpg" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a11.jpg" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a12.jpg" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a13.jpg" />
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
                                                            <img src="https://cdn.faptitans.com/s1/rc/p-master-a14.jpg" />
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
                            <div style="width: 100%; height: 100%">
                                <div className="tabs-name">Heroes</div>
                                <div className="tabs-pic">
                                    <img src="https://cdn.faptitans.com/s1/rc/tab-01.png" />
                                </div>
                            </div>
                        </a>
                        <a className="tabs-all guild selected" href="#/guild">
                            <div style="width: 100%; height: 100%">
                                <div className="tabs-name">Guild base</div>
                                <div className="tabs-pic">
                                    <img src="https://cdn.faptitans.com/s1/rc/tab-08.png" />
                                </div>
                            </div>
                        </a>
                        <a className="tabs-all album" href="#/galery/pictures">
                            <div style="width: 100%; height: 100%">
                                <div className="tabs-name">Gallery</div>
                                <div className="tabs-pic">
                                    <img src="https://cdn.faptitans.com/s1/rc/tab-05.png" />
                                </div>
                            </div>
                        </a>
                        <a className="tabs-all rating" href="#/rating/jewerly">
                            <div style="width: 100%; height: 100%">
                                <div className="tabs-name">Rating Tab</div>
                                <div className="tabs-pic">
                                    <img src="https://cdn.faptitans.com/s1/rc/tab-02.png" />
                                </div>
                            </div>
                        </a>
                        <a className="tabs-all squests" href="#/quests/daily">
                            <div style="width: 100%; height: 100%">
                                <div className="tabs-name">Quests</div>
                                <div className="tabs-pic">
                                    <img src="https://cdn.faptitans.com/s1/rc/tab-10.png" />
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
