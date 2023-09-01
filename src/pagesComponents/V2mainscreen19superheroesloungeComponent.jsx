import React from "react";
import screenSuperhero from "../styles/screen-superhero.scss";

const V2MainScreen19SuperheroesLoungeComponent = () => {
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
                            <div className="value">202UD19</div>
                            <div className="value-bonus">
                                <span>+26.4M%</span>
                            </div>
                            <div className="resource-btn-add"></div>
                            <div className="resource-pic">
                                <img src="img/v2-res-gold.png" />
                            </div>
                            <div className="anim-in-p gold"></div>
                        </div>
                        <div className="resource-vip lvl0">
                            <div className="value-vip-diamond">23</div>
                            <div className="value-vip-ticket">3</div>
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
                                <div className="res-chest-btn-text">Купить</div>
                                <div className="res-chest-btn-count">0</div>
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
                                    src="rating-sign-gold@1x.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">68:49:25</div>
                                </div>
                            </li>
                            <li className="quest startpack wide">
                                <img
                                    className="icon"
                                    src="img/v2-ns-chest.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">2D 20:49</div>
                                </div>
                            </li>
                            <li
                                className="quest startpack open"
                                style={{ animationDelay: "450ms" }}>
                                <img
                                    className="icon"
                                    src="img/v2-ns-ball.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">68:49:25</div>
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
                                style={{ animationDelay: "600ms" }}>
                                <img
                                    className="icon"
                                    src="img/m-ico-gold.png"
                                />
                                <div className="timerbox">
                                    <div className="timer">18:22:05</div>
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
                                style={{ animationDelay: "750ms" }}>
                                <img
                                    className="icon"
                                    src="img/m-ico-quest.png"
                                />
                            </li>
                        </div>
                    </div>
                    <div className="opt-panel-box">
                        <div className="btn feedback"></div>
                        <div className="btn statistic"></div>
                        <div className="btn settings"></div>
                        <div className="btn ru"></div>
                    </div>
                </div>
                <div className="left-side false false">
                    <div className="left-panel wide false false">
                        <div className="container">
                            <div
                                className="tab-panel-box suphero"
                                style={{ visibility: "visible" }}>
                                <div className="tab-panel-box-title">
                                    superheroes lounge
                                </div>
                                <div className="content-box-all">
                                    <div className="leftside-box-all">
                                        <div className="hero-left-box">
                                            <div className="filter-box">
                                                <div className="btn-stars-wrap">
                                                    <div className="color-btn">
                                                        <div className="color-btn-text">
                                                            <img src="img/star1.png" />
                                                        </div>
                                                    </div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            <img src="img/star1.png" />
                                                        </div>
                                                    </div>
                                                    <div className="color-btn">
                                                        <div className="color-btn-text">
                                                            <img src="img/star1.png" />
                                                        </div>
                                                    </div>
                                                    <div className="color-btn">
                                                        <div className="color-btn-text">
                                                            <img src="img/star1.png" />
                                                        </div>
                                                    </div>
                                                    <div className="color-btn">
                                                        <div className="color-btn-text">
                                                            <img src="img/star1.png" />
                                                        </div>
                                                    </div>
                                                    <div className="color-btn">
                                                        <div className="color-btn-text">
                                                            <img src="img/star1-purple.png" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-btn-wrap">
                                                    <div className="filter-btn-value"></div>
                                                    <div className="filter-btn">
                                                        <div className="btn-text">
                                                            Filter
                                                        </div>
                                                        <div className="filter-options-box">
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/cur-c.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/cur-u.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/cur-r.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/cur-e.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/cur2-sword.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/cur2-quitar.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/cur2-cleric.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/cur2-druid.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/cur2-barbarian.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/cur2-ranger.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/cur2-wizard.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/cur2-gun.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/ico-click.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/ico-sword.png" />
                                                                </div>
                                                            </div>
                                                            <div className="color-btn">
                                                                <div className="color-btn-text">
                                                                    <img src="img/ico-gold.png" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="suphero-all-box">
                                                <li className="suphero-card check">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic">
                                                            <img src="img/images/superhero/suphero-01/x1/avatar/01sh-ava-5.jpg" />
                                                        </div>
                                                        <div className="herostar-box">
                                                            <div className="herostar lvl010"></div>
                                                        </div>
                                                    </div>
                                                    <div className="sh2-icon">
                                                        <img src="img/cur-c.png" />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="img/cur2-sword.png" />
                                                    </div>
                                                    <div className="v2-sh1-notif notif notif20"></div>
                                                </li>
                                                <li className="suphero-card">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic">
                                                            <img src="img/images/superhero/suphero-02/x1/avatar/02sh-ava-5.jpg" />
                                                        </div>
                                                        <div className="herostar-box">
                                                            <div className="herostar lvl010"></div>
                                                        </div>
                                                    </div>
                                                    <div className="sh2-icon">
                                                        <img src="img/icon-rare.png" />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="img/cur2-quitar.png" />
                                                    </div>
                                                    <div className="v2-sh1-notif notif notif20"></div>
                                                </li>
                                                <li className="suphero-card">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic">
                                                            <img src="img/images/superhero/suphero-03/x1/avatar/03sh-ava-5.jpg" />
                                                        </div>
                                                        <div className="herostar-box">
                                                            <div className="herostar lvl010"></div>
                                                        </div>
                                                    </div>
                                                    <div className="sh2-icon">
                                                        <img src="img/cur-c.png" />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="img/cur2-cleric.png" />
                                                    </div>
                                                    <div className="v2-sh1-notif notif notif20"></div>
                                                </li>
                                                <li className="suphero-card">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic">
                                                            <img src="img/images/superhero/suphero-04/x1/avatar/04sh-ava-5.jpg" />
                                                        </div>
                                                        <div className="herostar-box">
                                                            <div className="herostar lvl010"></div>
                                                        </div>
                                                    </div>
                                                    <div className="sh2-icon">
                                                        <img src="img/cur-u.png" />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="img/cur2-druid.png" />
                                                    </div>
                                                    <div className="v2-sh1-notif notif notif20"></div>
                                                </li>
                                                <li className="suphero-card">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic">
                                                            <img src="img/images/superhero/suphero-07/x1/avatar/07sh-ava-1.jpg" />
                                                        </div>
                                                        <div className="herostar-box">
                                                            <div className="herostar lvl02"></div>
                                                        </div>
                                                    </div>
                                                    <div className="sh2-icon">
                                                        <img src="img/cur-c.png" />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="img/cur2-barbarian.png" />
                                                    </div>
                                                    <div className="v2-sh1-notif notif notif20"></div>
                                                </li>
                                                <li className="suphero-card">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic">
                                                            <img src="img/images/superhero/suphero-08/x1/avatar/08sh-ava-2.jpg" />
                                                        </div>
                                                        <div className="herostar-box">
                                                            <div className="herostar lvl04"></div>
                                                        </div>
                                                    </div>
                                                    <div className="sh2-icon">
                                                        <img src="img/cur-u.png" />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="img/cur2-ranger.png" />
                                                    </div>
                                                    <div className="v2-sh1-notif notif notif20"></div>
                                                </li>
                                                <li className="suphero-card">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic">
                                                            <img src="img/images/superhero/suphero-09/x1/avatar/09sh-ava-2.jpg" />
                                                        </div>
                                                        <div className="herostar-box">
                                                            <div className="herostar lvl04"></div>
                                                        </div>
                                                    </div>
                                                    <div className="sh2-icon">
                                                        <img src="img/icon-rare.png" />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="img/cur2-wizard.png" />
                                                    </div>
                                                    <div className="v2-sh1-notif notif notif20"></div>
                                                </li>
                                                <li className="suphero-card">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic">
                                                            <img src="img/images/superhero/suphero-10/x1/avatar/10sh-ava-1.jpg" />
                                                        </div>
                                                        <div className="herostar-box">
                                                            <div className="herostar lvl02"></div>
                                                        </div>
                                                    </div>
                                                    <div className="sh2-icon">
                                                        <img src="img/cur-e.png" />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="img/cur2-gun.png" />
                                                    </div>
                                                    <div className="v2-sh1-notif notif notif20"></div>
                                                </li>
                                                <li className="suphero-card">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic">
                                                            <img src="img/images/superhero/suphero-13/x1/avatar/13sh-ava-1.jpg" />
                                                        </div>
                                                        <div className="herostar-box">
                                                            <div className="herostar lvl02"></div>
                                                        </div>
                                                    </div>
                                                    <div className="sh2-icon">
                                                        <img src="img/cur-c.png" />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="img/cur2-barbarian.png" />
                                                    </div>
                                                    <div className="v2-sh1-notif notif notif20"></div>
                                                </li>
                                                <li className="suphero-card">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic">
                                                            <img src="img/images/superhero/suphero-09/x1/avatar/09sh-ava-2.jpg" />
                                                        </div>
                                                        <div className="herostar-box">
                                                            <div className="herostar lvl04"></div>
                                                        </div>
                                                    </div>
                                                    <div className="sh2-icon">
                                                        <img src="img/icon-rare.png" />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="img/cur2-wizard.png" />
                                                    </div>
                                                    <div className="v2-sh1-notif notif notif20"></div>
                                                </li>
                                                <li className="suphero-card">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic">
                                                            <img src="img/images/superhero/suphero-10/x1/avatar/10sh-ava-1.jpg" />
                                                        </div>
                                                        <div className="herostar-box">
                                                            <div className="herostar lvl02"></div>
                                                        </div>
                                                    </div>
                                                    <div className="sh2-icon">
                                                        <img src="img/cur-e.png" />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="img/cur2-gun.png" />
                                                    </div>
                                                    <div className="v2-sh1-notif notif notif20"></div>
                                                </li>
                                                <li className="suphero-card">
                                                    <div className="hero-pic-box">
                                                        <div className="hero-pic">
                                                            <img src="img/images/superhero/suphero-13/x1/avatar/13sh-ava-1.jpg" />
                                                        </div>
                                                        <div className="herostar-box">
                                                            <div className="herostar lvl02"></div>
                                                        </div>
                                                    </div>
                                                    <div className="sh2-icon">
                                                        <img src="img/cur-c.png" />
                                                    </div>
                                                    <div className="sh2-icon-forgirl">
                                                        <img src="img/cur2-barbarian.png" />
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
                                                    <img src="img/images/superhero/suphero-01/x1/01sh-5.jpg" />
                                                    <img
                                                        className="star-up"
                                                        src="img/images/superhero/suphero-01/x1/01sh-5.jpg"
                                                    />
                                                </div>
                                                <div className="topname-box">
                                                    <div className="lrare-box common"></div>
                                                    <div className="sh2-icon left">
                                                        <img src="img/cur-c.png" />
                                                    </div>
                                                    <div className="sh2-icon-forgirl right">
                                                        <img src="img/cur2-sword.png" />
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
                                                            <img src="img/images/superhero/suphero-01/x1/avatar/01sh-ava-5.jpg" />
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
                                                                +259.2% dps to
                                                                <div className="ff-sh2-icon">
                                                                    <img src="img/cur2-sword.png" />
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
                                                                Aura of flame
                                                            </div>
                                                            <div className="bonus-size">
                                                                x45
                                                            </div>
                                                        </div>
                                                        <div className="second-bonus-box">
                                                            <div className="box-name">
                                                                Hardened blades
                                                            </div>
                                                            <div className="bonus-size">
                                                                x45
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="girl-bonus-box">
                                                        <div className="girl-bonus-pic">
                                                            <img src="img/images/superhero/suphero-01/x1/avatar/01sh-ava-5.jpg" />
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
                                                            <img src="img/images/superhero/suphero-02/x1/avatar/02sh-ava-5.jpg" />
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
                                                            <img src="img/images/superhero/suphero-01/x2/avatar/01sh-ava-6.jpg" />
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
                                                                    DPS +24.6K%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-close-x"></div>
                                    <div className="trophy-res-box-all">
                                        <div className="trophy-res-box essence">
                                            <div className="trophy-value">
                                                1000
                                            </div>
                                            <div className="trophy-value-btn-add"></div>
                                        </div>
                                        <div className="trophy-res-box chest">
                                            <div className="trophy-value">
                                                1000
                                            </div>
                                            <div className="trophy-value-btn-add"></div>
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
                <div></div>
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

export default React.memo(V2MainScreen19SuperheroesLoungeComponent);
