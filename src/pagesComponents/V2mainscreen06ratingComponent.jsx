import React, { useEffect } from "react";
import screenRatingMaintab from "../styles/screen-rating-maintab.scss";
import screenRatingMaintabColl from "../styles/screen-rating-maintab-coll.scss";
import screenRating from "../styles/screen-rating.scss";

const V2MainScreen06RatingComponent = () => {
    useEffect(() => {
        const jB = document.querySelector(".color-btn.jewerly");
        const cB = document.querySelector(".color-btn.collection");
        const jW = document.querySelector(".animations");
        const cW = document.querySelector(".rating-card-list-box.collection");
        cW.style.display = "none";

        cB.addEventListener("click", () => {
            jB.classList.remove("blue");
            jW.style.display = "none";
            cB.classList.add("blue");
            cW.style.display = "block";
        });
        jB.addEventListener("click", () => {
            cB.classList.remove("blue");
            cW.style.display = "none";
            jB.classList.add("blue");
            jW.style.display = "block";
        });

        return () => {};
    }, []);
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

                <div className="right-side"></div>
                <div className="left-side false false">
                    <div className="left-panel wide false false">
                        <div className="container">
                            <div
                                className="tab-panel rating-panel"
                                style={{ visibility: "visible" }}>
                                <div>
                                    <div className="rating-left-box">
                                        <div className="rating-topbtn-box">
                                            <div className="rating-timer-box">
                                                <div className="rating-timer">
                                                    20:06:42
                                                </div>
                                                <div className="rating-timer-text">
                                                    до конца рейтинга
                                                </div>
                                            </div>
                                            <div className="color-btn info">
                                                <div className="color-btn-text">
                                                    информация
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rating-ped-box">
                                            <div className="ped-box rate1 undefined">
                                                <div className="ped-box-noreward">
                                                    нет награды
                                                </div>
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
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                1
                                                            </div>
                                                            <div className="name">
                                                                joepie
                                                            </div>
                                                            <div className="points">
                                                                12071
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                2
                                                            </div>
                                                            <div className="name">
                                                                icesweeyss
                                                            </div>
                                                            <div className="points">
                                                                9961
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                3
                                                            </div>
                                                            <div className="name">
                                                                Morgot
                                                            </div>
                                                            <div className="points">
                                                                1549
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card-rank gold">
                                                            <div className="">
                                                                gold rank
                                                            </div>
                                                        </div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                4
                                                            </div>
                                                            <div className="name">
                                                                mambouw
                                                            </div>
                                                            <div className="points">
                                                                1273
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                5
                                                            </div>
                                                            <div className="name">
                                                                Oh-My-Lord
                                                            </div>
                                                            <div className="points">
                                                                945
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                6
                                                            </div>
                                                            <div className="name">
                                                                luisgarcia
                                                            </div>
                                                            <div className="points">
                                                                800
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                7
                                                            </div>
                                                            <div className="name">
                                                                Okultist
                                                            </div>
                                                            <div className="points">
                                                                800
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                8
                                                            </div>
                                                            <div className="name">
                                                                lily9111110
                                                            </div>
                                                            <div className="points">
                                                                428
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                9
                                                            </div>
                                                            <div className="name">
                                                                alberthofer
                                                            </div>
                                                            <div className="points">
                                                                354
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                10
                                                            </div>
                                                            <div className="name">
                                                                Boomberjang
                                                            </div>
                                                            <div className="points">
                                                                203
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                11
                                                            </div>
                                                            <div className="name">
                                                                T-Kuri
                                                            </div>
                                                            <div className="points">
                                                                200
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                12
                                                            </div>
                                                            <div className="name">
                                                                dendroit1578
                                                            </div>
                                                            <div className="points">
                                                                198
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                13
                                                            </div>
                                                            <div className="name">
                                                                guestsss
                                                            </div>
                                                            <div className="points">
                                                                175
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                14
                                                            </div>
                                                            <div className="name">
                                                                ghostgo
                                                            </div>
                                                            <div className="points">
                                                                162
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                15
                                                            </div>
                                                            <div className="name">
                                                                lorddoubtful
                                                            </div>
                                                            <div className="points">
                                                                157
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                16
                                                            </div>
                                                            <div className="name">
                                                                eko19
                                                            </div>
                                                            <div className="points">
                                                                120
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                17
                                                            </div>
                                                            <div className="name">
                                                                rocko23
                                                            </div>
                                                            <div className="points">
                                                                80
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                18
                                                            </div>
                                                            <div className="name">
                                                                THE_LONG_ONE
                                                            </div>
                                                            <div className="points">
                                                                52
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                19
                                                            </div>
                                                            <div className="name">
                                                                rythm
                                                            </div>
                                                            <div className="points">
                                                                45
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                20
                                                            </div>
                                                            <div className="name">
                                                                chill4gill
                                                            </div>
                                                            <div className="points">
                                                                40
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card-rank silver">
                                                            <div className="">
                                                                silver rank
                                                            </div>
                                                        </div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                21
                                                            </div>
                                                            <div className="name">
                                                                andrey53
                                                            </div>
                                                            <div className="points">
                                                                40
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                22
                                                            </div>
                                                            <div className="name">
                                                                Pluxasy1367
                                                            </div>
                                                            <div className="points">
                                                                25
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                23
                                                            </div>
                                                            <div className="name">
                                                                DesKro
                                                            </div>
                                                            <div className="points">
                                                                23
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                24
                                                            </div>
                                                            <div className="name">
                                                                testuuG
                                                            </div>
                                                            <div className="points">
                                                                20
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                25
                                                            </div>
                                                            <div className="name">
                                                                TheSimpson
                                                            </div>
                                                            <div className="points">
                                                                20
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                26
                                                            </div>
                                                            <div className="name">
                                                                Littlethenr4ssan
                                                            </div>
                                                            <div className="points">
                                                                18
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                27
                                                            </div>
                                                            <div className="name">
                                                                dave2703
                                                            </div>
                                                            <div className="points">
                                                                15
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                28
                                                            </div>
                                                            <div className="name">
                                                                nitrofisch
                                                            </div>
                                                            <div className="points">
                                                                15
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                29
                                                            </div>
                                                            <div className="name">
                                                                nerondosgonz
                                                            </div>
                                                            <div className="points">
                                                                15
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                30
                                                            </div>
                                                            <div className="name">
                                                                BarbroMary
                                                            </div>
                                                            <div className="points">
                                                                14
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                31
                                                            </div>
                                                            <div className="name">
                                                                toxc
                                                            </div>
                                                            <div className="points">
                                                                5
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                32
                                                            </div>
                                                            <div className="name">
                                                                Asta1988
                                                            </div>
                                                            <div className="points">
                                                                5
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2 active">
                                                            <div className="number">
                                                                33
                                                            </div>
                                                            <div className="name">
                                                                Voodoofugu
                                                            </div>
                                                            <div className="points">
                                                                5
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                34
                                                            </div>
                                                            <div className="name">
                                                                Giga Chad
                                                            </div>
                                                            <div className="points">
                                                                3
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                35
                                                            </div>
                                                            <div className="name">
                                                                Arrowhead
                                                            </div>
                                                            <div className="points">
                                                                3
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card">
                                                            <div className="number">
                                                                36
                                                            </div>
                                                            <div className="name">
                                                                skududu99
                                                            </div>
                                                            <div className="points">
                                                                1
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="rating-card color2">
                                                            <div className="number">
                                                                37
                                                            </div>
                                                            <div className="name">
                                                                JT69
                                                            </div>
                                                            <div className="points">
                                                                1
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rating-right-box">
                                        <div className="rating-right-topbtn-box">
                                            <div className="color-btn jewerly blue">
                                                <a
                                                    className=""
                                                    href="#/rating/jewerly">
                                                    <div className="color-btn-text">
                                                        jewelry
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="color-btn collection">
                                                <a
                                                    className=""
                                                    href="#/rating/collection">
                                                    <div className="color-btn-text">
                                                        анимации
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="animations">
                                            <div className="rating-card-list-box podium">
                                                <div className="rating-card-girl-box card2 high">
                                                    <div className="rating-card-girl-name">
                                                        Мадока Кайто
                                                    </div>
                                                    <div className="card-girl-box">
                                                        <img src="img/images/hero-all/tithero-05/x1/tithero-05-1.jpg" />
                                                    </div>
                                                    <div className="rating-visual">
                                                        <div className="rating-str">
                                                            <div className="rating-str-right"></div>
                                                        </div>
                                                        <div className="rating-str left">
                                                            <div className="rating-str-right"></div>
                                                        </div>
                                                    </div>
                                                    <div className="rating-slot-box">
                                                        <div>
                                                            <div className="rating-slot bottom-left">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-1_1.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-neck-red@1x.png" />
                                                                </div>
                                                                <div className="raritet epic"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot top-right">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-1_2.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-red@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-1_3.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-red@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom-right lock">
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-bras-red@1x.png" />
                                                                </div>
                                                                <div className="raritet rare"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom lock legendary">
                                                                <div>
                                                                    <div className="rating-lock locked"></div>
                                                                    <div className="legend-video-icon">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                    </div>
                                                                </div>
                                                                <div className="raritet legendary"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rating-card-girl-box card3 high">
                                                    <div className="rating-card-girl-name">
                                                        Акэми Имма
                                                    </div>
                                                    <div className="card-girl-box">
                                                        <img src="img/images/hero-all/tithero-13/x1/tithero-13-1.jpg" />
                                                    </div>
                                                    <div className="rating-visual">
                                                        <div className="rating-str">
                                                            <div className="rating-str-right"></div>
                                                        </div>
                                                        <div className="rating-str left">
                                                            <div className="rating-str-right"></div>
                                                        </div>
                                                    </div>
                                                    <div className="rating-slot-box">
                                                        <div>
                                                            <div className="rating-slot bottom-left">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-2_1.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-neck-green@1x.png" />
                                                                </div>
                                                                <div className="raritet epic"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot top-right">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-2_2.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-green@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-2_3.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-green@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom-right">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-2_4.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-bras-green@1x.png" />
                                                                </div>
                                                                <div className="raritet rare"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom legendary">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-2_Full.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="rating-lock locked"></div>
                                                                    <div className="legend-video-icon">
                                                                        <img src="img/rating-video-thumbnails/Sc-2_Full.jpg" />
                                                                    </div>
                                                                </div>
                                                                <div className="raritet legendary"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rating-card-girl-box card-none">
                                                    <div className="rating-card-girl-name">
                                                        Амая Карасу
                                                    </div>
                                                    <div className="card-girl-box">
                                                        <img src="img/images/hero-all/tithero-25/x1/tithero-25-1.jpg" />
                                                    </div>
                                                    <div className="rating-visual">
                                                        <div className="rating-str">
                                                            <div className="rating-str-right"></div>
                                                        </div>
                                                        <div className="rating-str left">
                                                            <div className="rating-str-right"></div>
                                                        </div>
                                                    </div>
                                                    <div className="rating-slot-box">
                                                        <div>
                                                            <div className="rating-slot bottom-left">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-3_1.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-neck-blue@1x.png" />
                                                                </div>
                                                                <div className="raritet epic"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot top-right">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-3_2.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-blue@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-3_3.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-blue@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom-right lock">
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-bras-blue@1x.png" />
                                                                </div>
                                                                <div className="raritet rare"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom lock legendary">
                                                                <div>
                                                                    <div className="rating-lock locked"></div>
                                                                    <div className="legend-video-icon">
                                                                        <img src="img/rating-video-thumbnails/Sc-3_Full.jpg" />
                                                                    </div>
                                                                </div>
                                                                <div className="raritet legendary"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rating-card-girl-box card1 high">
                                                    <div className="rating-card-girl-name">
                                                        Цубаса Акума
                                                    </div>
                                                    <div className="card-girl-box">
                                                        <img src="img/images/superhero/suphero-04/x1/04sh-2.jpg" />
                                                    </div>
                                                    <div className="rating-visual">
                                                        <div className="rating-str">
                                                            <div className="rating-str-right"></div>
                                                        </div>
                                                        <div className="rating-str left">
                                                            <div className="rating-str-right"></div>
                                                        </div>
                                                    </div>
                                                    <div className="rating-slot-box">
                                                        <div>
                                                            <div className="rating-slot bottom-left">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-4_1.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-neck-red@1x.png" />
                                                                </div>
                                                                <div className="raritet epic"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot top-right">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-4_2.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-red@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-4_3.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-red@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom-right lock">
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-bras-red@1x.png" />
                                                                </div>
                                                                <div className="raritet rare"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom lock legendary">
                                                                <div>
                                                                    <div className="rating-lock locked"></div>
                                                                    <div className="legend-video-icon">
                                                                        <img src="img/rating-video-thumbnails/Sc-4_Full.jpg" />
                                                                    </div>
                                                                </div>
                                                                <div className="raritet legendary"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="btn-scroll left"></div>
                                                <div className="btn-scroll right"></div>
                                            </div>
                                        </div>
                                        <div className="rating-card-list-box collection">
                                            <div className="rating-card-scroll-list-box">
                                                <div className="scroll-card-box silver">
                                                    <div className="top-name-card-box">
                                                        <div className="top-name-card">
                                                            Мадока Кайто
                                                        </div>
                                                        <div className="top-name-card scenes">
                                                            сцены
                                                        </div>
                                                    </div>
                                                    <div className="girl-card-box">
                                                        <img
                                                            className="girl-card"
                                                            src="img/images/hero-all/tithero-05/x1/tithero-05-1.jpg"
                                                        />
                                                    </div>
                                                    <div className="girl-bonus-fullset">
                                                        Бонус за полный набор
                                                    </div>
                                                    <div className="girl-bonus-fullset-all bn-price">
                                                        DPS +300%
                                                    </div>
                                                    <div className="rating-slot-box">
                                                        <div>
                                                            <div className="rating-slot bottom-left">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-1_1.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-neck-red@1x.png" />
                                                                </div>
                                                                <div className="raritet epic"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot top-right">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-1_2.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-red@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-1_3.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-red@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom-right lock">
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-bras-red@1x.png" />
                                                                </div>
                                                                <div className="raritet rare"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom lock legendary">
                                                                <div>
                                                                    <div className="rating-lock locked"></div>
                                                                    <div className="legend-video-icon">
                                                                        <img src="img/rating-video-thumbnails/Sc-1_Full.jpg" />
                                                                    </div>
                                                                </div>
                                                                <div className="raritet legendary"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-paychek"></div>
                                                    </div>
                                                </div>
                                                <div className="scroll-card-box gold">
                                                    <div className="top-name-card-box">
                                                        <div className="top-name-card">
                                                            Акэми Имма
                                                        </div>
                                                        <div className="top-name-card scenes">
                                                            сцены
                                                        </div>
                                                    </div>
                                                    <div className="girl-card-box">
                                                        <img
                                                            className="girl-card"
                                                            src="img/images/hero-all/tithero-13/x1/tithero-13-1.jpg"
                                                        />
                                                    </div>
                                                    <div className="girl-bonus-fullset">
                                                        Бонус за полный набор
                                                    </div>
                                                    <div className="girl-bonus-fullset-all bn-price">
                                                        DPC +300%
                                                    </div>
                                                    <div className="rating-slot-box">
                                                        <div>
                                                            <div className="rating-slot bottom-left">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-2_1.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-neck-green@1x.png" />
                                                                </div>
                                                                <div className="raritet epic"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot top-right">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-2_2.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-green@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-2_3.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-green@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom-right">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-2_4.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-bras-green@1x.png" />
                                                                </div>
                                                                <div className="raritet rare"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom legendary">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-2_Full.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="rating-lock locked"></div>
                                                                    <div className="legend-video-icon">
                                                                        <img src="img/rating-video-thumbnails/Sc-2_Full.jpg" />
                                                                    </div>
                                                                </div>
                                                                <div className="raritet legendary"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-paychek"></div>
                                                    </div>
                                                </div>
                                                <div className="scroll-card-box silver">
                                                    <div className="top-name-card-box">
                                                        <div className="top-name-card">
                                                            Амая Карасу
                                                        </div>
                                                        <div className="top-name-card scenes">
                                                            сцены
                                                        </div>
                                                    </div>
                                                    <div className="girl-card-box">
                                                        <img
                                                            className="girl-card"
                                                            src="img/images/hero-all/tithero-25/x1/tithero-25-1.jpg"
                                                        />
                                                    </div>
                                                    <div className="girl-bonus-fullset">
                                                        Бонус за полный набор
                                                    </div>
                                                    <div className="girl-bonus-fullset-all bn-price">
                                                        +300%
                                                        <div className="bn-icon gold"></div>
                                                    </div>
                                                    <div className="rating-slot-box">
                                                        <div>
                                                            <div className="rating-slot bottom-left">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-3_1.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-neck-blue@1x.png" />
                                                                </div>
                                                                <div className="raritet epic"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot top-right">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-3_2.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-blue@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-3_3.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-blue@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom-right lock">
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-bras-blue@1x.png" />
                                                                </div>
                                                                <div className="raritet rare"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom lock legendary">
                                                                <div>
                                                                    <div className="rating-lock locked"></div>
                                                                    <div className="legend-video-icon">
                                                                        <img src="img/rating-video-thumbnails/Sc-3_Full.jpg" />
                                                                    </div>
                                                                </div>
                                                                <div className="raritet legendary"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-paychek"></div>
                                                    </div>
                                                </div>
                                                <div className="scroll-card-box silver">
                                                    <div className="top-name-card-box">
                                                        <div className="top-name-card">
                                                            Цубаса Акума
                                                        </div>
                                                        <div className="top-name-card scenes">
                                                            сцены
                                                        </div>
                                                    </div>
                                                    <div className="girl-card-box">
                                                        <img
                                                            className="girl-card"
                                                            src="img/images/superhero/suphero-04/x1/04sh-2.jpg"
                                                        />
                                                    </div>
                                                    <div className="girl-bonus-fullset">
                                                        Бонус за полный набор
                                                    </div>
                                                    <div className="girl-bonus-fullset-all bn-price">
                                                        DPS +500%
                                                    </div>
                                                    <div className="rating-slot-box">
                                                        <div>
                                                            <div className="rating-slot bottom-left">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-4_1.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-neck-red@1x.png" />
                                                                </div>
                                                                <div className="raritet epic"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot top-right">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-4_2.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-red@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot">
                                                                <div className="rating-video">
                                                                    <img src="img/rating-video-thumbnails/Sc-4_3.jpg" />
                                                                    <div className="rating-video-play"></div>
                                                                </div>
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-ring-red@1x.png" />
                                                                </div>
                                                                <div className="raritet common"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom-right lock">
                                                                <div className="rating-lock locked">
                                                                    <img src="img/rating-bras-red@1x.png" />
                                                                </div>
                                                                <div className="raritet rare"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                            <div className="rating-slot bottom lock legendary">
                                                                <div>
                                                                    <div className="rating-lock locked"></div>
                                                                    <div className="legend-video-icon">
                                                                        <img src="img/rating-video-thumbnails/Sc-4_Full.jpg" />
                                                                    </div>
                                                                </div>
                                                                <div className="raritet legendary"></div>
                                                                <div className="check"></div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-paychek"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
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
                        <a className="tabs-all guild" href="#/guild">
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="tabs-name">Guild base</div>
                                <div className="tabs-pic">
                                    <img src="img/tab-08.png" />
                                </div>
                            </div>
                            <div className="v2-tab-notif notif notif20"></div>
                        </a>
                        <a className="tabs-all album" href="#/galery/pictures">
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="tabs-name">Gallery</div>
                                <div className="tabs-pic">
                                    <img src="img/tab-05.png" />
                                </div>
                            </div>
                        </a>
                        <a
                            className="tabs-all rating selected"
                            href="#/rating/jewerly"
                            aria-current="page">
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
            </div>
        </>
    );
};

export default React.memo(V2MainScreen06RatingComponent);
