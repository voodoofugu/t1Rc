import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .main.rpg-poly {
        .main-bg {
            background-image: url(../img/rpg-poly/backgrounds/rpg-poly-jungle.jpg) !important;
        }

        .quest-item {
            width: 80px;
            height: 80px;
            background: linear-gradient(
                0deg,
                #ffe5a9 0%,
                #f4c657 18%,
                #ffe199 60%,
                #f1c150 85%,
                #ffd87b 100%
            );
            border-radius: 10px;
            box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            .quest-item-img {
                width: 56px;
                height: 56px;
                background-image: url(../img/pse-rares.png);
                background-size: cover;
                background-position: center;
            }
        }
        .quest-item_value {
            position: absolute;
            bottom: 0px;
            font-weight: 700;
            display: flex;
            justify-content: center;
            padding: 0 8px;
            background-image: linear-gradient(
                to right,
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0.5),
                rgba(255, 255, 255, 0.5),
                rgba(255, 255, 255, 0)
            );
            .item-needful_value {
                display: inline-block;
            }
            &:before {
                content: "-";
                margin-right: 4px;
            }
            &:after {
                content: "-";
                margin-left: 4px;
            }
        }
        .quest-reward.done,
        .quest-item.done {
            pointer-events: none;
            position: relative;
            background-image: linear-gradient(#baf279, #7cbc30);
            &:after {
                content: "";
                width: 35px;
                height: 35px;
                top: -4px;
                right: -4px;
                position: absolute;
                background-image: url(../img/paycheck.png);
                background-size: cover;
                filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 1));
            }
        }
        .quest-item.shop {
            &:hover {
                filter: brightness(110%);
            }
            &:after {
                content: "SHOP \27A7";
                background-image: linear-gradient(#fffe9a, #e9b039);
                font-weight: 700;
                font-size: 12px;
                display: flex;
                padding: 0 6px 1px 7px;
                top: -2px;
                right: -2px;
                position: absolute;
                border-radius: 10px 2px 10px 2px;
                box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.5);
            }
        }

        .popupWrapper {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 9999;
            .screen-blend-55 {
                display: block;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.55);
            }
            .m-popup {
                position: absolute;
                right: 25%;
                background: linear-gradient(
                    -22deg,
                    #fffbc7,
                    #b37a07,
                    #ffb229,
                    #fffbc7
                );
                box-shadow: 0 1px 10px #392d26, inset 0 1px 2px #fff, 0 0 10px #000,
                    0 0 15px #000;
                border-radius: 10px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 60px 0 10px 0;
                width: 304px;
                height: auto;
                &:before {
                    content: "";
                    background: #b7a497;
                    bottom: 10px;
                    display: block;
                    position: absolute;
                    left: 10px;
                    right: 10px;
                    top: 60px;
                    z-index: -1;
                    border-radius: 0 0 5px 5px;
                    box-shadow: 0 0 2px #fff, 0 0 5px #fff,
                        inset 0 0 5px rgba(0, 0, 0, 0.55);
                }
                .title {
                    display: inline-block;
                    width: auto;
                    height: 52px;
                    background: linear-gradient(
                        to right,
                        #ffe3ab,
                        #ffb229,
                        #fffbc7
                    );
                    position: absolute;
                    left: 0px;
                    right: 0px;
                    top: 0px;
                    border-radius: 10px;
                    box-shadow: 0 1px 10px #392d26, inset 0 2px 10px #fff,
                        inset 0 28px 5px rgba(255, 255, 0, 0.15);
                    border: solid 4px #ffb229;
                    line-height: 58px;
                    font-size: 22px;
                    font-weight: bold;
                    text-transform: uppercase;
                    color: #413753;
                    text-shadow: 0 0 1px #413753, 0 1px 1px #fff, 0 1px 10px #ffc;
                }
                .popup-wrap {
                    margin: 0px 10px;
                    position: relative;
                }
                .btn-close-x {
                    color: #413753;
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    border-radius: 10px;
                    position: absolute;
                    right: 11px;
                    top: 11px;
                    background: linear-gradient(
                        22deg,
                        #fffbc7,
                        #ffe3ab,
                        #ffb229,
                        #fffbc7
                    );
                    border: solid 4px #ffbe43;
                    cursor: pointer;
                    &:before {
                        content: "✖";
                        font-size: 22px;
                        font-weight: bold;
                        color: #757;
                        line-height: 30px;
                        text-shadow: 0 0 2px #757, 0 0 2px #757, 0 0 2px #757,
                            0 0 2px #757, 0 0 7px #fff, 0 0 7px #fff, 0 0 7px #fff;
                    }
                    &:after {
                        content: "";
                        display: block;
                        width: 24px;
                        height: 7px;
                        background: rgba(255, 255, 255, 0.25);
                        border-radius: 5px;
                        position: absolute;
                        left: 3px;
                        top: 3px;
                    }
                    &:hover {
                        filter: brightness(110%);
                    }
                }
            }
        }

        .rpg_poly-bottom-bar {
            position: absolute;
            right: 0px;
            bottom: 0px;
            width: 100%;
            height: 70px;
            background-image: linear-gradient(
                to right,
                rgba(104, 33, 33, 0),
                rgba(0, 0, 0, 0.4) 85%
            );
            display: flex;
            align-items: center;
            justify-content: center;
            .rpg_poly-bar_wrap {
                height: 62px;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 22px 0 22px;
                .bar_quest-chip_value {
                    display: flex;
                    align-items: center;
                    &:after {
                        content: "";
                        display: inline-block;
                        width: 22px;
                        height: 22px;
                        background-image: url(../img/rpg-poly/rpg_poly-dice-white@2x.png);
                        background-size: cover;
                        margin-left: 4px;
                    }
                }
                .questlist-popup-wrap {
                    height: 0px;
                    transition: ease-in-out 0.1s;
                    width: 320px;
                    position: absolute;
                    bottom: 40px;
                    left: 7px;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    .popupWrapper.questlist-popup {
                        height: 100%;
                        position: initial;
                        z-index: 0;
                        display: flex !important;
                        justify-content: center;
                        align-items: flex-end;
                        .m-popup {
                            height: auto;
                            width: 290px;
                            padding-bottom: 1px;
                            position: unset;
                            transform: translate(0px, -4px);
                            &:before {
                                border-radius: 0;
                                -webkit-border-radius: 0;
                                -moz-border-radius: 0;
                                -ms-border-radius: 0;
                                -o-border-radius: 0;
                            }
                            .popup-wrap {
                                padding: 0;
                                margin: 4px 14px 14px 14px;
                                height: auto;
                                max-height: 310px;
                                overflow-y: auto;
                                display: flex;
                                flex-direction: column-reverse;
                                &::-webkit-scrollbar-track {
                                    -webkit-box-shadow: inset 0 0 3px
                                        rgba(0, 0, 0, 0.6);
                                    border-radius: 4px;
                                }
                                &::-webkit-scrollbar {
                                    width: 3px;
                                    background-color: #9e8b7d;
                                }
                                &::-webkit-scrollbar-thumb {
                                    background: linear-gradient(
                                        0deg,
                                        #ffe199,
                                        #f4c657,
                                        #f4c657,
                                        #ffe199
                                    );
                                    border-radius: 4px;
                                }
                                .bar_quest {
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    padding: 3px;
                                    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
                                    &:hover {
                                        background: rgba(0, 0, 0, 0.08);
                                    }
                                }
                            }
                            .btn-close-x {
                                &:before {
                                    content: "↓";
                                    color: #413753;
                                }
                            }
                        }
                    }
                }
                .questlist-popup-wrap.activ {
                    height: 397px;
                    padding-top: 22px;
                    transition: ease-in-out 0.1s;
                }
                .bar_quest_wrap {
                    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.8));
                    .bar_quest {
                        width: 258px;
                        color: #4c3a25;
                        text-shadow: 0px 1px 2px #fff;
                        font-size: 15px;
                        font-weight: 700;
                        text-align: center;
                        text-transform: uppercase;
                        line-height: 30px;
                        background: linear-gradient(0deg, #e9b039, #fffe9a);
                        padding: 0 16px;
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                        display: flex;
                        justify-content: space-between;
                        .completion_value {
                            display: inline-block;
                        }
                    }
                    &:before {
                        content: "";
                        z-index: -1;
                        width: 36px;
                        height: 30px;
                        background-image: url(../img/portal-map-location-banner.png);
                        background-size: auto 100%;
                        position: absolute;
                        top: 10px;
                        left: -22px;
                    }
                    &:after {
                        content: "";
                        z-index: -1;
                        width: 36px;
                        height: 30px;
                        background-image: url(../img/portal-map-location-banner.png);
                        background-size: auto 100%;
                        position: absolute;
                        top: 10px;
                        right: -22px;
                        transform: scaleX(-1);
                    }
                }
                .rpg_poly-bar {
                    width: 290px;
                    height: 16px;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 2px;
                    display: inline-block;
                    background: linear-gradient(0deg, #e9b039, #fffe9a);
                    box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2),
                        0 2px 4px 0 rgba(0, 0, 0, 0.5),
                        0 0px 0px 2px rgba(0, 0, 0, 0.1);
                    &:before {
                        content: "";
                        width: 282px;
                        height: 8px;
                        position: absolute;
                        top: 4px;
                        left: 4px;
                        border-radius: 20px;
                        background: #a08740;
                        box-shadow: inset 0 0px 1px 2px rgba(0, 0, 0, 0.2),
                            inset 0 8px 8px 0px rgba(0, 0, 0, 0.2),
                            0 2px 0px 0 rgba(255, 255, 255, 0.4),
                            0 -2px 0px 0px rgba(0, 0, 0, 0.2);
                    }
                    .bar-scale {
                        width: 278px;
                        height: 4px;
                        border-radius: 20px;
                        top: 6px;
                        left: 6px;
                        position: absolute;
                        overflow: hidden;
                        .bar-scale-patf {
                            height: 4px;
                            position: absolute;
                            background: linear-gradient(0deg, #39b54a, #8cea3f);
                            top: 0px;
                            left: 0%;
                            box-shadow: 0 0px 1px 2px rgba(0, 0, 0, 0.2);
                        }
                    }
                }
                .quest-item.bar_quest-item {
                    position: absolute;
                    .quest-item-img {
                        background-image: url(../img/rpg-poly/rpg_poly-dice-white@2x.png);
                    }
                }
            }
            .dice-wrap {
                position: absolute;
                right: 0px;
                padding-right: 10px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                .dice-white {
                    display: inline-block;
                    position: relative;
                    bottom: 4px;
                    padding-right: 20px;
                    .dice-white-value {
                        color: #fff;
                    }
                    .dice-white-button {
                        background-image: linear-gradient(#fff, #cacaca);
                        &:hover:before {
                            box-shadow: 0 0 8px 5px #fff;
                        }
                        &:after {
                            content: "";
                            background-image: url(../img/rpg-poly/rpg_poly-dice-white@2x.png);
                        }
                    }
                }
                .dice-gold {
                    display: inline-block;
                    position: relative;
                    bottom: 4px;
                    .dice-gold-value {
                        color: #fffe9a;
                    }
                    .dice-gold-button {
                        background-image: linear-gradient(#fffe9a, #e9b039);
                        &:hover:before {
                            box-shadow: 0 0 8px 5px #fffc51;
                        }
                        &:after {
                            content: "";
                            background-image: url(../img/rpg-poly/rpg_poly-dice-gold@2x.png);
                        }
                    }
                }
                .dice-value {
                    margin-bottom: 4px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
                    padding-left: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .dice-button {
                    display: flex;
                    align-items: center;
                    text-transform: uppercase;
                    font-weight: 700;
                    line-height: 30px;
                    color: #262a2a;
                    padding: 0px 10px 4px 36px;
                    border-radius: 6px;
                    box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.3),
                        0 2px 2px rgba(0, 0, 0, 0.3);
                    cursor: pointer;
                    position: relative;
                    margin-left: 20px;
                    &:before {
                        content: "";
                        position: absolute;
                        left: -17px;
                        width: 40px;
                        height: 40px;
                        border-radius: 100%;
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        left: -24px;
                        width: 56px;
                        height: 56px;
                        background-size: cover;
                    }
                    &:hover {
                        box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.3),
                            0 1px 3px 1px rgba(0, 0, 0, 0.6);
                        filter: brightness(110%);
                    }
                    &:active {
                        line-height: 28px;
                        padding: 2px 10px 4px 36px;
                        box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.3),
                            inset 0 2px 2px rgba(0, 0, 0, 0.3),
                            0 1px 3px 0px rgba(0, 0, 0, 0.4);
                    }
                    &:hover:after {
                        left: -25px;
                        width: 58px;
                        height: 58px;
                    }
                }
            }
        }

        .rpg_poly-top-bar {
            position: absolute;
            top: 0;
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: rgba(0, 0, 0, 0.3);
            .parameters-wrap {
                margin-left: 10px;
                display: flex;
                align-items: center;
                .level-parameter {
                    width: 82px;
                    height: 82px;
                    margin-top: 14px;
                    background-image: url(../img/rpg-poly/rpg_poly-portal_icon@2x.png);
                    background-size: cover;
                    position: relative;
                    .level-value {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%) skew(0deg, -22deg);
                        padding: 0px 8px;
                        font-weight: 700;
                        font-size: 19px;
                        color: #fff;
                        text-shadow: 0 1px 4px black;
                        background: linear-gradient(
                            to right,
                            rgba(0, 0, 0, 0),
                            rgba(0, 0, 0, 0.6),
                            rgba(0, 0, 0, 0)
                        );
                    }
                }
            }
        }

        .parameters {
            display: flex;
            align-items: center;
            width: 120px;
            height: 34px;
            background: linear-gradient(
                -40deg,
                #f6dd71 0%,
                #f6dd71 24%,
                #fffe99 25%,
                #fffe99 34%,
                #f6dd71 35%,
                #f6dd71 44%,
                #fffe99 45%,
                #fffe99 64%,
                #f6dd71 65%
            );
            margin: 0 10px 0 20px;
            border-radius: 5px;
            position: relative;
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3),
                0 1px 3px 1px rgba(0, 0, 0, 0.5);
            &:before {
                content: "";
                position: absolute;
                right: 6px;
                width: 78px;
                height: 24px;
                background-color: #ce9227;
                border-radius: 3px;
                box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.1);
            }
            &:after {
                content: "";
                position: absolute;
                left: -20px;
                width: 56px;
                height: 56px;
                background-size: cover;
            }
            .parameters-value {
                color: #fff;
                position: absolute;
                right: 10px;
                width: 70px;
                text-align: right;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
            }
        }
        .currency-parameter:after {
            background-image: url(../img/rpg-poly/rpg_poly-token_icon@2x.png);
            left: -18px;
        }
        .strength-parameter:after {
            background-image: url(../img/rpg-poly/rpg_poly-strength_icon@2x.png);
        }
        .dexterity-parameter:after {
            background-image: url(../img/rpg-poly/rpg_poly-dexterity_icon@2x.png);
        }
        .intelligence-parameter:after {
            background-image: url(../img/rpg-poly/rpg_poly-intelligence_icon@2x.png);
        }

        .rpg_poly-button {
            text-transform: uppercase;
            font-weight: 700;
            color: #4e4900;
            padding: 11px 25px 15px 25px;
            border-radius: 6px;
            box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.3),
                0 2px 2px rgba(0, 0, 0, 0.4);
            background-image: linear-gradient(#fffe9a, #e9b039);
            cursor: pointer;
            position: relative;
            &:hover {
                box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.3),
                    0 1px 3px 1px rgba(0, 0, 0, 0.6);
                filter: brightness(110%);
            }
            &:active {
                padding: 13px 25px 13px 25px;
                box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.3),
                    inset 0 2px 2px rgba(0, 0, 0, 0.3),
                    0 1px 3px 0px rgba(0, 0, 0, 0.4);
            }
        }
        .exit-button {
            margin-right: 10px;
            position: relative;
            padding-right: 20px;
            a {
                .color-btn-text {
                    &:after {
                        content: "➜";
                        margin-left: 4px;
                    }
                }
            }
            &:active {
                padding: 13px 20px 13px 25px;
                a {
                    .color-btn-text {
                        &:after {
                            top: 15px;
                        }
                    }
                }
            }
        }
        .backpack-button,
        .shop-button,
        .offer-button,
        .rating-button {
            padding-left: 36px;
            position: relative;
            display: flex;
            align-items: center;
            margin-left: 25px;
            &:before {
                content: "";
                position: absolute;
                left: -40px;
                width: 72px;
                height: 72px;
                background-image: url(../img/rpg-poly/rpg_poly-backpack_icon@2x.png);
                background-size: cover;
            }
            &:active {
                padding: 13px 25px 13px 36px;
            }
        }

        .rating-button {
            &:before {
                background-image: url(../img/rpg-poly/rpg_poly-rating_icon@2x.png);
            }
        }

        .quest_info-button {
            width: 72px;
            height: 72px;
            background-image: url(../img/rpg-poly/rpg_poly-quest_icon@2x.png);
            background-size: cover;
            position: absolute;
            top: -6px;
            left: -70px;
            z-index: 1;
            cursor: pointer;
            &:hover {
                filter: brightness(110%);
            }
            &:active {
                top: -4px;
            }
        }

        .shop-button-wrap,
        .offer-button-wrap {
            width: 160px;
            height: 62px;
            position: absolute;
            top: 90px;
            left: 0px;
            background-image: linear-gradient(
                to left,
                rgba(104, 33, 33, 0),
                rgba(0, 0, 0, 0.3) 15%
            );
            padding-left: 14px;
            display: flex;
            align-items: center;
            .shop-button,
            .offer-button {
                color: #fff;
                text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
                background-image: linear-gradient(#baf279, #7cbc30);
                margin-left: 40px;
                padding-left: 44px;
                &:before {
                    background-image: url(../img/rpg-poly/rpg_poly-shop_icon@2x.png);
                    width: 72px;
                    height: 72px;
                }
            }
        }

        .offer-button-wrap {
            top: 164px;
            .offer-button {
                &:before {
                    background-image: url(../img/rpg-poly/rp-offer-token_icon2@2x.png);
                }
            }
        }

        .quest-popup-wrap {
            width: 346px;
            height: 380px;
            position: absolute;
            left: -41px;
            bottom: -36px;
            transform: scale(0.74);
            transition: ease-in-out 0.2s;
            .popupWrapper.quest-popup {
                .m-popup {
                    width: 304px;
                    top: 195px;
                    left: 166px;
                    .popup-wrap {
                        .quest-character_img {
                            width: 100%;
                            height: 92px;
                            background-image: url(../img/rpg-poly/rpg_poly-quest_character_img.jpg);
                            background-position: center;
                            background-size: cover;
                        }
                        .quest-main {
                            padding: 0 10px 10px 10px;
                            .quest-info-wrap {
                                padding: 10px;
                                background-color: rgba(0, 0, 0, 0.2);
                                border-radius: 4px;
                                height: 82px;
                                display: none;
                                .quest-info-text_block {
                                    height: 72px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    position: relative;
                                    background: linear-gradient(
                                        90deg,
                                        #ffe09900,
                                        #f4c65730,
                                        #f4c65730,
                                        #ffe09900
                                    );
                                    margin: 4px 0;
                                    &:before,
                                    &:after {
                                        content: "";
                                        width: 100%;
                                        height: 2px;
                                        position: absolute;
                                        background: linear-gradient(
                                            90deg,
                                            #ffe09910,
                                            #f4c657,
                                            #f4c657,
                                            #ffe09910
                                        );
                                    }
                                    &:before {
                                        top: -4px;
                                    }
                                    &:after {
                                        bottom: -4px;
                                    }
                                    .quest-info-text {
                                        color: #fff;
                                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
                                        text-overflow: ellipsis;
                                        overflow-y: auto;
                                        max-height: 72px;
                                        &::-webkit-scrollbar-track {
                                            -webkit-box-shadow: inset 0 0 3px
                                                rgba(0, 0, 0, 0.6);
                                            border-radius: 4px;
                                        }
                                        &::-webkit-scrollbar {
                                            width: 3px;
                                            background-color: #9e8b7d;
                                        }
                                        &::-webkit-scrollbar-thumb {
                                            background: linear-gradient(
                                                0deg,
                                                #ffe199,
                                                #f4c657,
                                                #f4c657,
                                                #ffe199
                                            );
                                            border-radius: 4px;
                                        }
                                    }
                                }
                            }
                            .quest_item-reward-wrap {
                                .quest_button-wrap {
                                    display: flex;
                                    position: relative;
                                    margin-top: 10px;
                                    &:before {
                                        content: "";
                                        position: absolute;
                                        bottom: 0;
                                        width: 50%;
                                        right: 0px;
                                        height: 3px;
                                        transition: ease-in-out 0.1s;
                                        background: linear-gradient(
                                            to right,
                                            rgba(254, 223, 148, 0),
                                            rgba(254, 223, 148, 1),
                                            rgb(255, 235, 188),
                                            rgba(254, 223, 148, 1),
                                            rgba(254, 223, 148, 0)
                                        );
                                    }
                                    .quest_button {
                                        width: 50%;
                                        text-transform: uppercase;
                                        font-weight: 700;
                                        font-size: 18px;
                                        color: #ffe199;
                                        cursor: pointer;
                                        text-shadow: 0 1px 3px rgba(0, 0, 0, 1);
                                        background-color: none;
                                        border-radius: 4px;
                                        line-height: 28px;
                                    }
                                }
                                .quest-item-wrap {
                                    .quest-item {
                                        cursor: pointer;
                                        &:active {
                                            transform: scale(0.97);
                                        }
                                    }
                                }
                            }
                            .quest_item-reward-wrap.item_activ {
                                .quest_button-wrap {
                                    .quest_reward-button {
                                        &:hover {
                                            filter: brightness(110%);
                                        }
                                    }
                                    .quest_item-button {
                                        background: linear-gradient(
                                            to right,
                                            rgba(0, 0, 0, 0),
                                            rgba(0, 0, 0, 0.2) 30%,
                                            rgba(0, 0, 0, 0.2) 70%,
                                            rgba(0, 0, 0, 0)
                                        );
                                    }
                                    &:before {
                                        left: 0;
                                    }
                                }
                                .quest-item-wrap {
                                    display: flex;
                                }
                                .quest-reward-wrap {
                                    display: none;
                                }
                            }
                            .quest_item-reward-wrap.reward_activ {
                                .quest_button-wrap {
                                    .quest_item-button {
                                        &:hover {
                                            filter: brightness(110%);
                                        }
                                    }
                                    .quest_reward-button {
                                        background: linear-gradient(
                                            to right,
                                            rgba(0, 0, 0, 0),
                                            rgba(0, 0, 0, 0.2) 30%,
                                            rgba(0, 0, 0, 0.2) 70%,
                                            rgba(0, 0, 0, 0)
                                        );
                                    }
                                    &:before {
                                        left: 50%;
                                    }
                                }
                                .quest-item-wrap {
                                    display: none;
                                }
                                .quest-reward-wrap {
                                    display: flex;
                                }
                            }

                            .quest-item-wrap,
                            .quest-reward-wrap {
                                margin-top: 4px;
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: space-evenly;
                                position: relative;
                                width: 284px;
                                left: -11px;
                                background: linear-gradient(
                                    to right,
                                    rgba(0, 0, 0, 0),
                                    rgba(0, 0, 0, 0.2) 20%,
                                    rgba(0, 0, 0, 0.2) 80%,
                                    rgba(0, 0, 0, 0)
                                );
                                .quest-item {
                                    margin: 4px 0;
                                }
                            }
                        }
                        .quest-done-wrap {
                            position: absolute;
                            width: 262px;
                            height: 52px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            bottom: -46px;
                            background-image: linear-gradient(
                                to right,
                                rgba(104, 33, 33, 0),
                                rgba(30, 30, 30, 0.7) 30%,
                                rgba(30, 30, 30, 0.7) 70%,
                                rgba(104, 33, 33, 0)
                            );
                            &:before,
                            &:after {
                                content: "";
                                width: 130px;
                                height: 40px;
                                position: absolute;
                                top: 6px;
                                background-image: url(../img/rpg-poly/rpg_branch_icon@2x.png);
                                background-size: cover;
                                background-position: center;
                            }
                            &:before {
                                left: -6px;
                                animation: branch1 2s infinite;
                            }
                            &:after {
                                right: -6px;
                                animation: branch2 2s infinite;
                            }
                            .flare {
                                z-index: 1;
                                pointer-events: none;
                                &:before {
                                    content: "";
                                    width: 20px;
                                    height: 20px;
                                    position: absolute;
                                    left: 60px;
                                    top: -2px;
                                    background-image: url(../img/rpg-poly/rpg_flare.png);
                                    background-size: cover;
                                    background-position: center;
                                    animation: flare 3s infinite;
                                }
                                &:after {
                                    content: "";
                                    width: 20px;
                                    height: 20px;
                                    position: absolute;
                                    right: 60px;
                                    bottom: 2px;
                                    background-image: url(../img/rpg-poly/rpg_flare.png);
                                    background-size: cover;
                                    background-position: center;
                                    animation: flare 3s 1.5s infinite;
                                }
                            }
                            .quest-done_button {
                                z-index: 1;
                                position: relative;
                                width: 80px;
                                font-size: 20px;
                                line-height: 16px;
                                color: #fff;
                                text-shadow: 0 2px 3px rgba(0, 0, 0, 0.8),
                                    0 -1px 3px rgba(0, 0, 0, 0.6);
                                border-radius: 10px;
                                background: linear-gradient(
                                    160deg,
                                    #aef161 20%,
                                    #97da46,
                                    #aef161 40%,
                                    #aef161 44%,
                                    #7bbb2d 70%,
                                    #aef161 90%
                                );
                                &:before {
                                    content: "";
                                    width: 122px;
                                    height: 30px;
                                    position: absolute;
                                    top: 4px;
                                    left: 4px;
                                    border-radius: 5px;
                                    background: rgba(32, 138, 0, 0.26);
                                    z-index: -1;
                                    box-shadow: inset 0 1px 2px 1px
                                        rgba(0, 0, 0, 0.16);
                                }
                                &:active {
                                    background: linear-gradient(
                                        160deg,
                                        #aef161 24%,
                                        #97da46,
                                        #aef161 44%,
                                        #aef161 48%,
                                        #7bbb2d 74%,
                                        #aef161 94%
                                    );
                                    &:before {
                                        height: 31px;
                                        top: 5px;
                                    }
                                }
                            }
                            @keyframes branch1 {
                                0% {
                                    transform: rotate(0deg);
                                }
                                50% {
                                    transform: rotate(10deg);
                                }
                                100% {
                                    transform: rotate(0deg);
                                }
                            }
                            @keyframes branch2 {
                                0% {
                                    transform: scaleX(-1) rotate(0deg);
                                }
                                50% {
                                    transform: scaleX(-1) rotate(10deg);
                                }
                                100% {
                                    transform: scaleX(-1) rotate(0deg);
                                }
                            }
                            @keyframes flare {
                                0% {
                                    opacity: 1;
                                }
                                50% {
                                    opacity: 0.2;
                                }
                                100% {
                                    opacity: 1;
                                }
                            }
                        }
                        .quest-done-wrap.disabled {
                            pointer-events: none;
                            filter: grayscale(80%);
                            &:before {
                                animation: none;
                            }
                            &:after {
                                transform: scaleX(-1);
                                animation: none;
                            }
                            .flare {
                                opacity: 0.5;
                                &:before {
                                    animation: none;
                                }
                                &:after {
                                    animation: none;
                                }
                            }
                        }
                    }

                    .btn-close-x.btn-open {
                        &:before {
                            content: "⤢";
                            color: #413753;
                        }
                    }
                    .notif {
                        width: 24px;
                        height: 24px;
                        position: absolute;
                        top: -6px;
                        left: -6px;
                        background-image: url(../img/picmeh-ic-info.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                        transform: scale(1.24);
                    }
                }
            }
        }
        .quest-popup-wrap.activ {
            width: 336px;
            height: 450px;
            left: 0px;
            bottom: 39px;
            transform: scale(1);
            transition: ease-in-out 0.2s;
            .popupWrapper.quest-popup {
                .m-popup {
                    top: 220px;
                    .popup-wrap {
                        .quest-character_img {
                            width: 100%;
                            height: 120px;
                        }
                        .quest-main {
                            padding: 10px;
                            .quest-info-wrap {
                                display: block;
                            }
                        }
                    }
                    .btn-close-x {
                        &:before {
                            content: "↙";
                        }
                    }
                }
            }
        }

        .backpack-popup .m-popup {
            width: 584px;
            .popup-wrap {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-content: flex-start;
                height: 454px;
                margin: 10px 18px;
                overflow-y: auto;
                padding: 0;
                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.6);
                    border-radius: 4px;
                }
                &::-webkit-scrollbar {
                    width: 3px;
                    background-color: #9e8b7d;
                    border-radius: 4px;
                }
                &::-webkit-scrollbar-thumb {
                    background: linear-gradient(
                        0deg,
                        #ffe199,
                        #f4c657,
                        #f4c657,
                        #ffe199
                    );
                    border-radius: 4px;
                }
                .quest-item-wrap {
                    width: 260px;
                    height: 80px;
                    background-color: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    margin: 4px 4px;
                    display: flex;
                    align-items: center;
                    position: relative;
                    .quest-item-name {
                        position: absolute;
                        left: 88px;
                        color: #fff;
                        text-shadow: 0 1px 3px rgba(0, 0, 0, 1);
                        width: 116px;
                        max-height: 56px;
                        text-align: left;
                        overflow: auto;
                        text-overflow: ellipsis;
                        word-wrap: break-word;
                        &::-webkit-scrollbar-track {
                            -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.6);
                            border-radius: 4px;
                        }
                        &::-webkit-scrollbar {
                            width: 3px;
                            background-color: #9e8b7d;
                            border-radius: 4px;
                        }
                        &::-webkit-scrollbar-thumb {
                            background: linear-gradient(
                                0deg,
                                #ffe199,
                                #f4c657,
                                #f4c657,
                                #ffe199
                            );
                            border-radius: 4px;
                        }
                    }
                    .quest-item.item-plus {
                        width: 50px;
                        height: 50px;
                        position: absolute;
                        right: 4px;
                        background: none;
                        box-shadow: none;
                        cursor: pointer;
                        .quest-item-img {
                            background-image: url(../img/n-vip-plus_green@2x.png);
                            transform: scale(0.96);
                        }
                        &:hover {
                            filter: brightness(110%);
                        }
                        &:active {
                            transform: scale(0.94);
                        }
                    }
                }
            }
        }

        .shop-popup .m-popup {
            width: 1000px;
            height: 474px;
            &:before {
                background: linear-gradient(0deg, #645143, #8e8177);
            }
            .popup-wrap {
                .currency-parameter {
                    position: absolute;
                    left: 56px;
                    top: 20px;
                }
                .shop-girl-wrap {
                    width: 354px;
                    height: 430px;
                    position: absolute;
                    top: 44px;
                    border-radius: 4px;
                    overflow: hidden;
                    .shop-girl {
                        left: -102px;
                        position: relative;
                        width: 474px;
                        height: 430px;
                        background-image: url(../img/rpg-poly/rpg_poly-shop_girl.png);
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                }
                .store-item-box-all {
                    color: #555;
                    width: 704px;
                    height: 450px;
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    background: linear-gradient(
                        -40deg,
                        #f6dd71 0%,
                        #f6dd71 24%,
                        #fffe99 25%,
                        #fffe99 34%,
                        #f6dd71 35%,
                        #f6dd71 44%,
                        #fffe99 45%,
                        #fffe99 64%,
                        #f6dd71 65%
                    );
                    border-radius: 6px;
                    box-shadow: 0 2px 2px 0 #5e544c;
                    .store-item-box-scroll {
                        color: #555;
                        width: 686px;
                        height: 430px;
                        position: absolute;
                        overflow: hidden;
                        overflow-y: scroll;
                        top: 10px;
                        margin-left: 10px;
                        &::-webkit-scrollbar-track {
                            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                            border-radius: 10px;
                            background-color: #7c665c;
                        }
                        &::-webkit-scrollbar {
                            width: 10px;
                        }
                        &::-webkit-scrollbar-thumb {
                            border-radius: 10px;
                            box-shadow: inset 0 0 3px #796b60;
                            background: linear-gradient(
                                to right,
                                #fff,
                                #f5de80,
                                #f4b766,
                                #b26d12
                            );
                        }
                        .store-item-all {
                            color: #555;
                            width: 668px;
                            height: 210px;
                            position: relative;
                            text-align: center;
                            background-image: url(../img/shop-pod.jpg);
                            background-size: 100%;
                            .store-item-box {
                                font-size: 15px;
                                color: #555;
                                text-align: center;
                                width: 140px;
                                height: 180px;
                                position: relative;
                                display: inline-block;
                                top: 14px;
                                border-radius: 6px;
                                background: linear-gradient(
                                    180deg,
                                    #8e7453,
                                    #e3c7a3 50%,
                                    #8f7553 70%,
                                    #ae916a 85%,
                                    #8f7553
                                );
                                margin: 0 4px 26px 4px;
                                box-shadow: 0 2px 6px 0 #413833;
                                z-index: 1;
                                transform: scale(0.942);
                                transition: ease-in-out 0.04s;
                                &:hover {
                                    transition: ease-in-out 0.04s;
                                    transform: scale(1);
                                    filter: brightness(110%);
                                    z-index: 1000;
                                }
                                &:before {
                                    content: "";
                                    width: 134px;
                                    height: 174px;
                                    position: absolute;
                                    top: 3px;
                                    margin-left: -67px;
                                    border-radius: 4px;
                                    background: linear-gradient(
                                        180deg,
                                        #b59b87,
                                        #7f6858
                                    );
                                    box-shadow: inset 0 0 20px 0 #50463f;
                                }
                                .store-name {
                                    width: 140px;
                                    height: 24px;
                                    position: absolute;
                                    top: 0;
                                    margin-left: 0;
                                    line-height: 24px;
                                    background: linear-gradient(
                                        180deg,
                                        #8e7453,
                                        #e3c7a3 40%,
                                        #e3c7a3 50%,
                                        #8f7553 80%,
                                        #ae916a 95%,
                                        #8f7553
                                    );
                                    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.35);
                                    border-radius: 8px 8px 0 0;
                                    text-shadow: 0 0 4px #fff;
                                    text-align: center;
                                    text-transform: uppercase;
                                    font-size: 12px;
                                    font-weight: 700;
                                    color: #3b291b;
                                }
                                .rpg_poly-chest {
                                    width: 110px;
                                    height: 110px;
                                    position: absolute;
                                    top: 22px;
                                    left: 15px;
                                    background-repeat: no-repeat;
                                    background-size: 120px;
                                    background-position: center;
                                }
                                .rpg_poly-chest.wooden-chest {
                                    background-image: url(../img/rpg-poly/chests/wooden-chest.png);
                                }
                                .rpg_poly-chest.silver-chest {
                                    background-image: url(../img/rpg-poly/chests/silver-chest.png);
                                }
                                .rpg_poly-chest.golden-chest {
                                    background-image: url(../img/rpg-poly/chests/golden-chest.png);
                                }
                                .quest-item {
                                    position: absolute;
                                    top: 35px;
                                    left: 30px;
                                    .quest-item_value {
                                        text-align: center;
                                        background-image: url(../img/ic-abil-redline.png);
                                        background-size: cover;
                                        font-size: 18px;
                                        color: #fff;
                                        line-height: 18px;
                                        text-shadow: 0 1px 3px #2f2f2f;
                                        width: 88px;
                                        height: 26px;
                                        position: absolute;
                                        top: 52px;
                                        left: -4px;
                                        line-height: 28px;
                                        padding: 0;
                                    }
                                }
                                .color-btn_shop {
                                    text-align: center;
                                    display: inline-block;
                                    border-radius: 6px;
                                    box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25),
                                        0 2px 4px 0 rgba(0, 0, 0, 0.55);
                                    cursor: pointer;
                                    background: linear-gradient(
                                        0deg,
                                        #4b97bf,
                                        #7ae2ff
                                    );
                                    width: 120px;
                                    height: 40px;
                                    position: absolute;
                                    top: 129px;
                                    left: 10px;
                                    .color-btn_shop-text {
                                        cursor: pointer;
                                        position: relative;
                                        color: #fff;
                                        text-shadow: 0 1px 3px rgba(0, 0, 0, 1);
                                        text-align: center;
                                        font-weight: 700;
                                        text-transform: uppercase;
                                        height: 100%;
                                        flex: 1;
                                        display: flex;
                                        justify-content: center;
                                        flex-direction: column;
                                        align-items: center;
                                        margin-top: -2px;
                                        font-size: 14px;
                                        div {
                                            .buy_value {
                                                &:before {
                                                    content: "";
                                                    width: 30px;
                                                    height: 30px;
                                                    position: relative;
                                                    display: inline-block;
                                                    background-image: url(../img/rpg-poly/rpg_poly-token_icon@2x.png);
                                                    background-size: cover;
                                                    margin-right: 4px;
                                                    margin-left: 4px;
                                                    vertical-align: middle;
                                                }
                                            }
                                        }
                                    }
                                    &:active {
                                        box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25),
                                            inset 0 2px 2px 0 rgba(0, 0, 0, 0.25),
                                            0 2px 4px 0 rgba(0, 0, 0, 0.55);
                                        .color-btn_shop-text {
                                            margin-top: 0px;
                                        }
                                    }
                                }
                            }
                            .store-item-box.chest.unactive {
                                opacity: 0.6 !important;
                            }
                            .store-item-all-name {
                                width: 270px;
                                height: 34px;
                                position: absolute;
                                top: 190px;
                                left: 199px;
                                background-image: url(../img/polka.png);
                                background-size: 100%;
                                z-index: 999;
                                line-height: 32px;
                                color: #632e09;
                                font-weight: bold;
                                font-size: 14px;
                                text-transform: uppercase;
                                text-shadow: 0 0 6px #fff8ab;
                            }
                        }
                    }
                }
            }
        }

        .popupWrapper.rating-popup {
            .m-popup {
                width: 750px;
                &:before {
                    background-color: #9c8c7a;
                }
                .popup-wrap {
                    height: 402px;
                    .fw-right-side-content-box {
                        width: 100%;
                        height: 400px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-color: #8f7c68;
                        .fw-rating-ped-box-all {
                            width: 128px;
                            height: 390px;
                            position: absolute;
                            bottom: 5px;
                            left: 5px;
                            .fw-rating-ped-box-p1,
                            .fw-rating-ped-box-p2,
                            .fw-rating-ped-box-p3 {
                                width: 100%;
                                height: 145px;
                                position: absolute;
                                top: 0;
                                left: 0;
                                background-color: #786659;
                                color: #fff;
                                padding: 20px 2px 0;
                                box-sizing: border-box;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);

                                .place {
                                    font-weight: bold;
                                }

                                & > span {
                                    display: inline-block;
                                    position: relative;
                                    height: 18px;
                                    width: 26px;

                                    &:before {
                                        content: "";
                                        width: 26px;
                                        height: 26px;
                                        background-image: url(../img/trophy-bonus-diamond.png);
                                        background-size: 100%;
                                        position: absolute;
                                        top: 0px;
                                        left: 0px;
                                    }
                                }
                                .fw-rating-ped-num-box {
                                    width: 100%;
                                    height: 24px;
                                    position: absolute;
                                    bottom: 0;
                                    left: 0;
                                    background: linear-gradient(
                                        180deg,
                                        #4f4339 0%,
                                        #352c25 100%
                                    );
                                    display: table;
                                    .fw-rating-ped-num {
                                        width: 100%;
                                        height: 100%;
                                        position: relative;
                                        display: table-cell;
                                        color: #fff;
                                        font-size: 16px;
                                        font-weight: bold;
                                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                                        vertical-align: middle;
                                        text-align: center;
                                    }
                                }
                            }
                            .fw-rating-ped-box-p2 {
                                height: 125px;
                                top: 152px;
                                padding: 30px 3px 0px;

                                .fw-rating-ped-pic {
                                    top: 12px;
                                    left: 25px;
                                }
                            }
                            .fw-rating-ped-box-p3 {
                                height: 105px;
                                top: 285px;
                                .fw-rating-ped-pic {
                                    top: 2px;
                                    left: 25px;
                                }
                            }
                            .fw-master-pic {
                                width: 66px;
                                height: 66px;
                                position: absolute;
                                top: 0;
                                left: 0;
                                background-image: url(../img/gild-icon-66.png);
                                background-size: 100%;
                                background-repeat: no-repeat;
                            }
                            &.check-p1 {
                                .fw-rating-ped-box-p1 {
                                    .fw-rating-ped-pic {
                                        left: 0;
                                    }
                                }
                                .fw-master-pic {
                                    top: 40px;
                                    left: 100px;
                                }
                            }
                            &.check-p2 {
                                .fw-rating-ped-box-p2 {
                                    .fw-rating-ped-pic {
                                        left: 0;
                                    }
                                }
                                .fw-master-pic {
                                    top: 182px;
                                    left: 100px;
                                }
                            }
                            &.check-p3 {
                                .fw-rating-ped-box-p3 {
                                    .fw-rating-ped-pic {
                                        left: 0;
                                    }
                                }
                                .fw-master-pic {
                                    top: 305px;
                                    left: 100px;
                                }
                            }
                        }
                        .rating-scroll-name-box {
                            width: 576px;
                            height: 24px;
                            position: absolute;
                            top: 5px;
                            right: 15px;
                            color: #eed9cb;
                            font-weight: bold;
                            line-height: 24px;
                            font-size: 14px;
                            text-align: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                            background: linear-gradient(
                                180deg,
                                #6d5e52 0%,
                                #493d34 100%
                            );
                            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
                            .rating-scroll-name {
                                width: 100px;
                                height: 24px;
                                line-height: 24px;
                                position: absolute;
                                &.var1 {
                                    width: 100px;
                                }
                                &.var2 {
                                    width: 376px;
                                    left: 100px;
                                    background: linear-gradient(
                                        180deg,
                                        #4f4339 0%,
                                        #352c25 100%
                                    );
                                }
                                &.var3 {
                                    width: 100px;
                                    left: 476px;
                                }
                            }
                        }
                        .rating-scroll-box {
                            width: 585px;
                            height: 359px;
                            position: absolute;
                            top: 36px;
                            right: 6px;

                            .rating-scroll {
                                display: block;
                                position: absolute;
                                left: 0px;
                                top: 0px;
                                bottom: 0px;
                                right: 0px;
                                overflow-y: scroll;
                                padding-top: 0px;
                                padding-right: 6px;
                                &::-webkit-scrollbar-track {
                                    -webkit-box-shadow: inset 0 0 6px
                                        rgba(0, 0, 0, 0.5);
                                    background-color: #473c3c;
                                    border-radius: 2px;
                                }
                                &::-webkit-scrollbar {
                                    width: 3px;
                                    background-color: #9e8b7d;
                                }
                                &::-webkit-scrollbar-thumb {
                                    border-radius: 2px;
                                    background: linear-gradient(
                                        0deg,
                                        #ffe199,
                                        #f4c657,
                                        #f4c657,
                                        #ffe199
                                    );
                                }

                                .rating-card {
                                    width: 100%;
                                    height: 30px;
                                    background-color: #786659;
                                    color: #fff;
                                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                                    font-size: 16px;
                                    line-height: 30px;
                                    text-align: center;
                                    position: relative;
                                    .number,
                                    .name,
                                    .points {
                                        width: 100px;
                                        height: 30px;
                                        position: absolute;
                                    }
                                    .name {
                                        width: 365px;
                                        background-color: #857163;
                                        margin-left: 100px;
                                        text-align: left;
                                        padding-left: 10px;
                                    }
                                    .points {
                                        width: 100px;
                                        margin-left: 475px;
                                    }
                                    &.color2 {
                                        background-color: #8f7a6b;
                                        .name {
                                            background-color: #9b8777;
                                        }
                                    }
                                    &.active {
                                        background-color: #83ae55;
                                        .name {
                                            background-color: #91b75e;
                                        }
                                    }
                                }
                                .rating-card-rank {
                                    width: 100%;
                                    height: 30px;
                                    font-weight: bold;
                                    font-size: 18px;
                                    color: #5c4e43;
                                    text-align: center;
                                    text-transform: uppercase;
                                    line-height: 30px;
                                    text-shadow: 0 2px 6px rgba(255, 255, 255, 0.75);
                                    &.bronze {
                                        background: linear-gradient(
                                            180deg,
                                            #8e7453 0%,
                                            #e3c7a3 40%,
                                            #8f7553 75%,
                                            #ae916a 90%,
                                            #8e7453 100%
                                        );
                                    }
                                    &.silver {
                                        background: linear-gradient(
                                            180deg,
                                            #585a5c 0%,
                                            #d5d8da 40%,
                                            #585a5b 75%,
                                            #a1a4a6 90%,
                                            #585a5b 100%
                                        );
                                    }
                                    &.gold {
                                        background: linear-gradient(
                                            180deg,
                                            #c68300 0%,
                                            #f4dfb6 40%,
                                            #c68200 75%,
                                            #fad489 90%,
                                            #c78302 100%
                                        );
                                    }
                                    &.top {
                                        height: 38px;
                                        line-height: 38px;
                                        color: #0c2b41;
                                        background: linear-gradient(
                                            180deg,
                                            #93a6bc 0%,
                                            #f5f7f8 40%,
                                            #617e9e 75%,
                                            #e7ebf1 90%,
                                            #5e7c9c 100%
                                        );
                                        .top-name-diamond {
                                            position: relative;
                                            height: 38px;
                                            top: -6px;
                                            &:before {
                                                content: "";
                                                width: 30px;
                                                height: 30px;
                                                background-image: url(../img/trophy-bonus-diamond.png);
                                                background-size: 100%;
                                                position: relative;
                                                display: inline-block;
                                                top: 8px;
                                                margin: 0 10px 0 10px;
                                            }
                                            &:after {
                                                content: "";
                                                width: 30px;
                                                height: 30px;
                                                background-image: url(../img/trophy-bonus-diamond.png);
                                                background-size: 100%;
                                                position: relative;
                                                display: inline-block;
                                                top: 8px;
                                                margin: 0 10px 0 10px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .popupWrapper.reward-popup {
            .m-popup {
                width: 400px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 90px 40px 10px 40px;
                .color-box {
                    position: absolute;
                    left: 10px;
                    right: 10px;
                    top: 60px;
                    bottom: 10px;
                    border-radius: 0 0 5px 5px;
                    overflow: hidden;
                    background-image: url(../img/ts_confirm_bk-1.jpg);
                    background-size: cover;
                    background-position: center;
                    &:before,
                    &:after {
                        content: "";
                        pointer-events: none;
                        position: absolute;
                        bottom: 0;
                        width: 140px;
                        height: 110px;
                        background-size: 180%;
                        background-position: top center;
                        z-index: 1;
                    }
                    &:before {
                        background-image: url(../img/break-girl310.png);
                        left: 0;
                    }
                    &:after {
                        background-image: url(../img/break-girl296.png);
                        right: 0;
                    }
                }
                .winner-box {
                    min-width: calc(100% - 100px);
                    max-height: 204px;
                    display: flex;
                    position: relative;
                    justify-content: center;
                    flex-wrap: wrap;
                    padding: 30px 50px;
                    background-color: hsla(0, 0%, 100%, 0.25);
                    border-radius: 8px;
                    overflow-y: auto;
                    &::-webkit-scrollbar-track {
                        -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.6);
                        border-radius: 4px;
                    }
                    &::-webkit-scrollbar {
                        width: 6px;
                        background-color: #9e8b7d;
                    }
                    &::-webkit-scrollbar-thumb {
                        background: linear-gradient(
                            90deg,
                            #c4a760,
                            #f4c657,
                            #ffe199,
                            #f4c657,
                            #c4a760
                        );
                        border-radius: 4px;
                    }
                }
                .quest-item {
                    &:nth-of-type(1n) {
                        margin: 6px;
                    }
                }
                .color-btn {
                    width: 180px;
                    height: 50px;
                    margin: 10px 0;
                    .color-btn-text {
                        font-weight: 700;
                        text-transform: uppercase;
                        font-size: 18px;
                    }
                }
            }
        }

        .notification-popup {
            position: absolute;
            top: 90px;
            right: 0;
            height: 104px;
            padding: 16px 0 0 16px;
            overflow: hidden;
            display: flex;
            z-index: 999999;
            .notif-pop-box {
                animation: notice 3s forwards;
                position: relative;
                right: -20px;
                width: auto;
                padding: 0 22px 0 11px;
                display: flex;
                align-items: center;
                background: linear-gradient(to right, #ffe3ab, #ffb229, #fffbc7);
                border-radius: 10px;
                box-shadow: 0 1px 10px #392d26, inset 0 1px 2px #fff, 0 0 10px #000,
                    0 0 15px #000;
                border: solid 4px #ffb229;
                &:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 88px;
                    right: 0;
                    bottom: 0;
                    background: #b7a497;
                    border-radius: 0 5px 5px 0;
                    box-shadow: 0 0 2px #fff, 0 0 5px #fff,
                        inset 0 0 5px rgba(0, 0, 0, 0.55);
                }
                .title {
                    margin-right: 20px;
                    font-weight: 700;
                    color: #413753;
                    text-shadow: 0 0 1px #413753, 0 1px 1px #fff, 0 1px 10px #ffc;
                    text-transform: uppercase;
                    font-size: 16px;
                    display: flex;
                }
                .popup-wrap {
                    display: flex;
                    .quest-item {
                        transform: scale(0.8);
                    }
                }
            }
            @keyframes notice {
                0% {
                    opacity: 0;
                    transform: translate(60px, 0);
                }
                10% {
                    opacity: 1;
                    transform: translate(0, 0);
                }
                90% {
                    opacity: 1;
                    transform: translate(0, 0);
                }
                100% {
                    opacity: 0;
                    transform: translate(60px, 0);
                }
            }
        }

        .chest-pop-up {
            animation: chest 0.4s forwards;
            z-index: 9999;
            display: none;
            position: absolute;
            background: linear-gradient(
                180deg,
                #8e7453,
                #e3c7a3 50%,
                #8f7553 70%,
                #ae916a 85%,
                #8f7553
            );
            box-shadow: 0 2px 6px 0 #413833;
            border-radius: 10px 0 0 10px;
            padding: 0 2px 0 0;
            pointer-events: none;
            &:before {
                content: "";
                position: absolute;
                height: 173px;
                width: calc(100% - 6px);
                top: 3px;
                left: 3px;
                background: linear-gradient(180deg, #b59b87, #7f6858);
                box-shadow: inset 0 0 20px 0 #50463f;
                border-radius: 6px 0 0 6px;
                z-index: -1;
            }
            .chest-pop-up_tit {
                margin-top: 3px;
                background: linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 0.2),
                    rgba(0, 0, 0, 0)
                );
                font-size: 18px;
                text-transform: uppercase;
                font-weight: 700;
                color: #ffe199;
                text-shadow: 0 1px 3px black;
            }
            .quest-item-wrap {
                height: 154px;
                display: flex;
                flex-direction: row-reverse;
                transform: scale(0.96);
                .quest-item-box2 {
                    margin-right: -4px;
                    .quest-item {
                        transform: scale(0.82);
                        margin-top: -4px;
                    }
                }
            }
        }
        .chest-pop-up.active {
            display: block;
        }
        @keyframes chest {
            0% {
                opacity: 0;
                transform: translate(-96%, -2.2%);
            }
            100% {
                opacity: 1;
                transform: translate(-100%, -2.2%);
            }
        }
    }
`;

export { stylesFileName, pageStyles };
