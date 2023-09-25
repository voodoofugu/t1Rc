import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .cw-content {
        width: 1200px;
        height: 640px;
        position: absolute;
        top: 0;
        left: 0;
        .cw-bg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-image: url(../img/cw-glade-bg.jpg);
            background-size: 100%;
            background-repeat: no-repeat;
        }
        .color-btn.exit {
            top: 10px;
            left: 10px;
            position: absolute;
        }
    }

    .clan-trophies-title-big {
        width: 300px;
        height: 40px;
        position: absolute;
        top: 10px;
        left: 450px;
        background: linear-gradient(
            0deg,
            #ffe199 0%,
            #f4c657 18%,
            #ffe199 60%,
            #f4c557 85%,
            #ffe199 100%
        );
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        -ms-border-radius: 12px;
        -o-border-radius: 12px;
        border-radius: 28px;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1),
            0 2px 2px 1px rgba(0, 0, 0, 0.2);
        color: #3c3737;
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 40px;
        text-align: center;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);
    }

    .main {
        .cw-content {
            width: 1200px;
            height: 640px;
            position: absolute;
            top: 0;
            left: 0;
            .cw-bg {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url(../img/cw-glade-bg.jpg);
                background-size: 100%;
                background-repeat: no-repeat;
            }
            .color-btn.exit {
                top: 10px;
                left: 10px;
                position: absolute;
            }
        }
        .clan-trophies {
            width: 1200px;
            height: 590px;
            position: absolute;
            top: 50px;
            left: 0;

            &:before {
                content: "";
                position: absolute;
                width: 1180px;
                height: 568px;
                top: 13px;
                left: 10px;
                background-color: rgba(82, 40, 0, 0.4);
                border-radius: 10px;
            }

            .titans-garage-scroll-box {
                overflow-x: scroll;
                overflow-y: hidden;
                position: absolute;
                width: 550px;
                height: 1160px;
                top: -283px;
                left: 325px;
                overflow-y: auto;
                overflow-x: hidden;
                transform: rotate(90deg) scaleY(-1);
                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                    background-color: #473c3c;
                    border-radius: 20px;
                }
                &::-webkit-scrollbar {
                    height: 8px;
                    width: 8px;
                    border-radius: 20px;
                }
                &::-webkit-scrollbar-thumb {
                    background: linear-gradient(
                        90deg,
                        #ffe199,
                        #f4c657,
                        #f4c657,
                        #ffe199
                    );
                    border-radius: 20px;
                }
            }

            .titans-garage-row {
                font-size: 0;
                white-space: nowrap;
                transform: rotate(-90deg) translateX(-42px) translateY(-36px)
                    scaleX(-1);
            }

            .titans-garage-item {
                display: inline-block;
                position: relative;
                width: 286px;
                height: 460px;
                margin: 0 6px;
                border-radius: 8px;
                &.active {
                    background: linear-gradient(
                        0deg,
                        #585c5d,
                        #d3d4d8 20%,
                        #d3d4d8 50%,
                        #565a5b,
                        #a0a4a5,
                        #5a5b5d
                    );
                }
                &.locked {
                    filter: grayscale(1);
                    &:after {
                        content: "";
                        width: 100px;
                        height: 100px;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        background-image: url(../img/v2-lock-ic.png);
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                }

                .titans-garage-item-inner {
                    cursor: pointer;
                    position: absolute;
                    top: 4px;
                    left: 4px;
                    width: 278px;
                    height: 525px;
                    background-size: cover;
                    background-position: center;
                    border-radius: 6px;
                    overflow: hidden;
                    box-shadow: inset 0 0 0 2px rgba(0, 255, 234, 0.8),
                        0 0 10px #000;
                    transition: ease-in-out 0.03s;
                    &:before {
                        content: "";
                        position: absolute;
                        left: 2px;
                        bottom: 2px;
                        width: 274px;
                        height: 88px;
                        background: rgba(0, 0, 0, 0.4);
                        border-radius: 0 0 5px 5px;
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        left: -20px;
                        top: -20px;
                        width: 100%;
                        height: 100%;
                        background-image: url(../img/darkworld-glow-cards.png);
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                        pointer-events: none;
                        opacity: 0;
                        transition: ease-in-out 0.1s;
                    }
                    &:hover {
                        transform: scale(1.01);
                        transition: ease-in-out 0.03s;
                        &:after {
                            opacity: 0.6;
                            left: 0px;
                            top: 0px;
                            transition: ease-in-out 0.1s;
                        }
                    }
                    &:active {
                        transform: scale(0.98);
                        filter: brightness(0.9);
                        transition: ease-in-out 0.03s;
                    }
                }

                .mech-stats {
                    width: 280px;
                    height: 40px;
                    position: absolute;
                    left: -1px;
                    bottom: 0px;
                    background: linear-gradient(0deg, #e9b13a, #fffd99);

                    .stat {
                        display: inline-block;
                        position: relative;
                        width: 140px;
                        height: 40px;
                        font-size: 14px;
                        padding: 12px 11px 0px 36px;
                        text-align: center;
                        box-sizing: border-box;
                        color: #544746;
                        font-weight: bold;

                        &:before {
                            content: "";
                            position: absolute;
                            top: 8px;
                            left: 8px;
                            width: 24px;
                            height: 24px;
                            background-repeat: no-repeat;
                            background-position: center;
                            background-size: contain;
                        }

                        & + .stat:after {
                            content: "";
                            position: absolute;
                            left: -1px;
                            top: 6px;
                            width: 1px;
                            height: 30px;
                            background-color: #5c4b46;
                        }

                        &.qq {
                            width: 104px;
                            font-size: 18px;
                            padding: 10px 11px 0 36px;
                            &:before {
                                background-image: url(../img/v2_at_gear.png);
                            }
                        }
                        &.atk:before {
                            background-image: url(../img/v2-fw-icon-sword.png);
                        }
                        &.hp:before {
                            background-image: url(../img/v2-fw-icon-shield.png);
                        }
                        &.pow:before {
                            background-image: url(../img/v2_at_manabomb.png);
                        }
                    }
                }
                .titans-garage-item-image {
                    width: 350px;
                    height: 350px;
                    position: absolute;
                    left: -36px;
                    top: 12px;
                }
                .ability {
                    position: absolute;
                    left: 0;
                    bottom: 56px;
                    width: 278px;
                    height: 26px;
                    color: #fff;
                    text-align: center;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 28px;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                }
                .titan-label {
                    position: absolute;
                    left: 0;
                    top: 422px;
                    width: 278px;
                    height: 30px;
                    background: linear-gradient(0deg, #f8b46b, #f98401);
                    color: #5c4b46;
                    font-size: 18px;
                    line-height: 30px;
                    text-align: center;
                    font-weight: bold;
                }
                .titan-progress {
                    width: calc(100% - 4px);
                    height: 26px;
                    position: absolute;
                    bottom: 2px;
                    left: 2px;
                    border-radius: 0 0 4px 4px;
                    overflow: hidden;
                    box-shadow: inset 0 6px 6px rgba(0, 0, 0, 0.6),
                        inset 0 -6px 6px rgba(0, 0, 0, 0.6);
                    .titan-progress__bar {
                        width: 0;
                        height: 26px;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        background: linear-gradient(
                            180deg,
                            #585a5c 0%,
                            #d5d8da 50%,
                            #585a5b 70%,
                            #a1a4a6 85%,
                            #585a5b 100%
                        );
                        transition: width 0.3s;
                    }
                    .titan-progress__text {
                        width: 100%;
                        height: 26px;
                        position: relative;
                        text-align: center;
                        color: #fff;
                        font-weight: bold;
                        font-size: 20px;
                        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
                        line-height: 26px;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                    }
                    &.gold {
                        .titan-progress__bar {
                            background: linear-gradient(
                                180deg,
                                #c68300 0%,
                                #f4dfb6 50%,
                                #c68200 70%,
                                #fad489 85%,
                                #c78302 100%
                            );
                        }
                    }
                }
                .event-to-unlock {
                    display: none;
                }

                &.locked {
                    pointer-events: none;
                    .titans-garage-item-inner > div {
                        filter: grayscale(1);
                    }

                    .titans-garage-item-inner > .event-to-unlock {
                        display: block;
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        background-color: rgba(0, 0, 0, 0.7);
                        font-size: 16px;
                        color: #fff;
                        white-space: normal;
                        filter: grayscale(0);

                        .text {
                            margin-top: 190px;
                            padding: 0 10px;
                        }

                        .color-btn {
                            position: absolute;
                            left: 79px;
                            top: 240px;
                            width: 120px;
                        }
                    }
                }
            }

            .stars {
                position: absolute;
                width: 278px;
                bottom: 30px;
                left: 0;
                text-align: center;
                font-size: 0;

                .star {
                    display: inline-block;
                    background-image: url(../img/star1.png);
                    background-size: 100%;
                    width: 24px;
                    height: 23px;
                    filter: grayscale(1);

                    &.checked {
                        filter: grayscale(0);
                    }
                }
            }

            .titan-screen {
                position: absolute;
                width: 350px;
                height: 350px;
                top: 44px;
                left: 0;

                > img {
                    width: 350px;
                    height: 350px;
                    margin: 0 auto;
                    display: block;
                }
            }

            .btn-close-x {
                width: 30px;
                height: 30px;
                position: absolute;
                top: -6px;
                right: -6px;
                background: linear-gradient(30deg, #876b56, #aa9383, #dfceba);
                border-radius: 7px;
                box-shadow: 0 0 7px #000;
                cursor: pointer;
                z-index: 999;
                &:before {
                    content: "✖";
                    font-size: 28px;
                    font-weight: bold;
                    color: #600;
                    line-height: 30px;
                    text-shadow: 0 0 2px #fff;
                }
                &:after {
                    content: "";
                    width: 24px;
                    height: 7px;
                    position: absolute;
                    top: 3px;
                    left: 3px;
                    background: rgba(255, 255, 255, 0.25);
                    border-radius: 5px;
                }
            }
        }
    }

    .popup-layer .m-popup.clan-trophy {
        width: 815px;
        height: 500px;
        left: 192.5px;
        top: 50px;

        .title {
            color: #572f14;
        }

        .color-box {
            background: linear-gradient(0deg, #645143 0%, #8e8177 100%);

            &:before {
                display: none;
            }

            &:after {
                display: none;
            }
        }

        .popup-trophy-image {
            position: absolute;
            background-size: cover;
            background-position: center;
            top: 60px;
            width: 340px;
            height: 430px;
            left: 10px;
            overflow: hidden;
            border-radius: 0 0 0 5px;
            overflow: hidden;
            box-shadow: inset 1px 2px 2px rgba(0, 0, 0, 0.4);
            &:before {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 56px;
                background: rgba(0, 0, 0, 0.4);
            }

            .popup-name {
                position: absolute;
                left: 0;
                bottom: 4px;
                width: 340px;
                height: 26px;
                //background: linear-gradient(0deg, #fab568 0%, #f88703 18%, #f8b365 60%, #f89820 85%, #f9b769 100%);
                color: #fff;
                text-align: center;
                font-weight: bold;
                font-size: 24px;
                line-height: 28px;
                text-transform: uppercase;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            }

            .popup-stars {
                position: absolute;
                width: 340px;
                bottom: 30px;
                left: 0;
                text-align: center;
                font-size: 0;

                .star {
                    display: inline-block;
                    background-image: url(../img/star1.png);
                    background-size: 100%;
                    width: 24px;
                    height: 23px;
                    filter: grayscale(1);

                    &.checked {
                        filter: grayscale(0);
                    }
                }
            }
        }

        .popup-left {
            width: 455px;
            position: absolute;
            top: 60px;
            left: 350px;
            height: 430px;

            .rstar-box,
            .rlevel-box {
                width: 434px;
                height: 220px;
                position: absolute;
                top: 10px;
                left: 10px;
                background-color: #7e6e62;
                border-radius: 10px;
                box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
                    inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                    0 1px 1px rgba(0, 0, 0, 0.4);
                &.howtoget {
                    top: 240px;
                    height: 180px;
                    .bonus-lvl-box {
                        width: 418px;
                        height: 130px;
                        background: #a69283;
                        .lvlbox-name {
                            width: 418px;
                        }
                        .bonus-lvl-box-bonus-box {
                            width: 100%;
                            height: 64px;
                            position: absolute;
                            top: 63px;
                            left: 0;
                            display: table;
                            background: rgba(0, 0, 0, 0.1);
                            box-shadow: none;
                            border-radius: 0;
                        }
                    }

                    .color-btn.get-button {
                        height: 50px;
                        top: 9px;
                        width: 200px;
                    }
                }

                .rname-box {
                    width: 434px;
                    height: 30px;
                    position: absolute;
                    background-color: #65574c;
                    border-radius: 10px 10px 0 0;
                    text-transform: uppercase;
                    font-size: 18px;
                    color: #fffe8c;
                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
                    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1),
                        0 1px 1px rgba(255, 255, 255, 0.1);
                    text-align: center;
                    font-weight: bold;
                    line-height: 30px;
                }
                .bonus-lvl-box {
                    width: 200px;
                    height: 110px;
                    position: absolute;
                    top: 40px;
                    left: 8px;
                    background: #a69283;
                    overflow: hidden;
                    border-radius: 6px;
                    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5),
                        inset 0 -2px 0px rgba(0, 0, 0, 0.2);
                    .lvlbox-name {
                        width: 200px;
                        height: 26px;
                        position: absolute;
                        background: rgba(0, 0, 0, 0.3);
                        text-transform: uppercase;
                        color: #fff;
                        font-size: 12px;
                        font-weight: bold;
                        text-align: center;
                        line-height: 26px;
                        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
                        border-radius: 5px 5px 0 0;
                        box-shadow: inset 0 0.5px 0.5px 1px
                                rgba(255, 255, 255, 0.1),
                            0 1px 1px rgba(255, 255, 255, 0.2);
                    }
                    .bonus-lvl-box-name {
                        width: 100%;
                        height: 36px;
                        position: absolute;
                        top: 26px;
                        left: 0;
                        color: #4d3e33;
                        font-size: 22px;
                        line-height: 36px;
                        font-weight: bold;
                        text-align: center;
                        text-shadow: 0 0.5px 0.5px rgba(255, 255, 255, 0.6);
                    }
                    .bonus-lvl-box-bonus-box {
                        width: 100%;
                        height: 36px;
                        position: absolute;
                        top: 63px;
                        display: table;
                        background: rgba(0, 0, 0, 0.1);
                        .bonus-lvl-box-bonus {
                            height: 100%;
                            display: table-cell;
                            text-align: center;
                            vertical-align: middle;
                            color: #4d3e33;
                            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);
                            font-weight: bold;
                            font-size: 16px;
                            font-weight: 700;
                            text-transform: uppercase;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            .ff-sh2-icon {
                                width: 25px;
                                height: 32px;
                                position: relative;
                                top: 0;
                                left: 0;
                                display: inline-block;
                                vertical-align: middle;
                                margin-left: 6px;
                                > img {
                                    width: 25px;
                                }
                                &.gold {
                                    width: 22px;
                                    height: 22px;
                                    position: relative;
                                    vertical-align: middle;
                                    display: inline-block;
                                    top: -3px;
                                    background-image: url(../img/ico-gold.png);
                                    background-size: 100%;
                                }
                            }
                            > img {
                                width: 25px;
                            }
                        }
                    }
                }
                .rbottom-box {
                    width: 434px;
                    height: 64px;
                    position: absolute;
                    bottom: 0px;
                    border-radius: 0 0 10px 10px;
                    text-align: center;
                    .all-btn-box {
                        width: 418px;
                        height: 60px;
                        position: absolute;
                        left: 8px;
                        .lvlup-btn {
                            width: 200px;
                            height: 50px;
                            position: absolute;
                            top: 4px;
                            left: 0;
                            margin: 0;
                            &:hover {
                                filter: brightness(1.1);
                            }
                            .essence-text-box {
                                width: 194px;
                                height: 22px;
                                position: relative;
                                top: 3px;
                                left: 3px;
                                margin: 0;
                                .essence-icon.green {
                                    width: 25px;
                                    height: 25px;
                                    background-image: url(../img/ic-green-butil.png);
                                }
                                .essence-text {
                                    line-height: 22px;
                                    top: -9px;
                                }
                            }
                            &:not(.disabled):active {
                                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25),
                                    inset 0 -2px 0 rgba(0, 0, 0, 0.25),
                                    0 0 6px rgba(0, 0, 0, 0.25);
                                .essence-text-box {
                                    top: 4px;
                                }
                                .btn-text {
                                    top: 4px;
                                }
                            }
                            &.right {
                                left: 217px;
                            }
                        }
                        .xall-box {
                            width: 166px;
                            height: 60px;
                            position: absolute;
                            top: 0;
                            left: 126px;
                            font-size: 0;
                            .xall-btn {
                                width: 50px;
                                height: 22px;
                                position: relative;
                                top: 3px;
                                left: 0px;
                                cursor: pointer;
                                display: inline-block;
                                margin: 2px;
                                background: linear-gradient(
                                    0deg,
                                    #7cbc30 0%,
                                    #bbee7f 100%
                                );
                                border-radius: 8px;
                                box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.15),
                                    0 2px 0 rgba(0, 0, 0, 0.25);
                                color: #fff;
                                font-size: 14px;
                                font-weight: bold;
                                line-height: 22px;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                                &:active {
                                    top: 4px;
                                }
                                &.max {
                                    text-transform: uppercase;
                                }
                                &.select {
                                    background: linear-gradient(
                                        0deg,
                                        #65779c 0%,
                                        #9caac8 100%
                                    );
                                }
                            }
                        }
                    }
                }
            }
            .rstar-box {
                .bonus-lvl-box {
                    background: linear-gradient(
                        180deg,
                        #ba9682 0%,
                        #e9bca3 50%,
                        #ba9682 100%
                    );
                    &.next {
                        left: 225px;
                        background: linear-gradient(
                            180deg,
                            #90a5b1 0%,
                            #a8cde1 49.48%,
                            #90a5b1 100%
                        );
                    }
                    .bonus-lvl-box-bonus-box {
                        width: 188px;
                        height: 36px;
                        position: absolute;
                        top: 63px;
                        left: 6px;
                        display: table;
                        background: linear-gradient(
                            39.76deg,
                            #ffdc6b 23.86%,
                            #ffe991 38.56%,
                            #cfa831 53.81%,
                            #fcdc8e 78.45%
                        );
                        box-shadow: 0px 3px 0px #c87725,
                            0px 5px 2px rgba(0, 0, 0, 0.25),
                            inset 0px 3px 1px #ffffaa;
                        border-radius: 4px;
                        .bonus-lvl-box-bonus {
                            height: 100%;
                            display: table-cell;
                            text-align: center;
                            vertical-align: middle;
                            color: #4d3e33;
                            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);
                            font-weight: bold;
                            font-size: 16px;
                            font-weight: 700;
                            text-transform: uppercase;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            .ff-sh2-icon {
                                width: 25px;
                                height: 32px;
                                position: relative;
                                top: 0;
                                left: 0;
                                display: inline-block;
                                vertical-align: middle;
                                margin-left: 6px;
                                > img {
                                    width: 25px;
                                }
                                &.gold {
                                    width: 22px;
                                    height: 22px;
                                    position: relative;
                                    vertical-align: middle;
                                    display: inline-block;
                                    top: -3px;
                                    background-image: url(../img/ico-gold.png);
                                    background-size: 100%;
                                }
                            }
                            > img {
                                width: 25px;
                            }
                        }
                    }
                }
            }
        }
    }

    .popup-layer {
        .m-popup.clan-trophy {
            .color-box {
                background: #443247;
                border-radius: 0 0 5px 5px;
            }
        }
    }

    .main.world1,
    .main.world2,
    .main.world3 {
        .clan-trophies {
            .trophy-res-box-all {
                height: 42px;
                top: -29px;
                background-color: rgba(82, 40, 0, 0.4);
                box-shadow: none;
                .trophy-res-box {
                    .trophy-value {
                        width: 120px;
                    }
                    &.essence-green {
                        &:before {
                            content: "";
                            width: 32px;
                            height: 32px;
                            position: absolute;
                            top: 1px;
                            left: 3px;
                            background-image: url(../img/ic-green-butil.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                    }
                    &.essence-blue {
                        left: 190px;
                        &:before {
                            content: "";
                            width: 32px;
                            height: 32px;
                            position: absolute;
                            top: 1px;
                            left: 3px;
                            background-image: url(../img/ic-blue-butil.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                    }
                }
            }
        }
    }

    .main.world3 {
        .cw-content {
            .cw-bg {
                background-image: url(../img/images/back/clan/bg_01.jpg);
            }
        }
        .clan-trophies {
            &:before {
                background-color: rgba(12, 0, 82, 0.7);
            }
            .titans-garage-scroll-box {
                &::-webkit-scrollbar-track {
                    background-color: #0c0022;
                }
            }
            .trophy-res-box-all {
                background-color: rgba(12, 0, 82, 0.7);
            }
        }
        .popup-layer {
            .m-popup.clan-trophy {
                .popup-left {
                    .rstar-box {
                        background-color: #6a627e;
                        .rname-box {
                            background-color: #5a4c65;
                            color: #fffe8c;
                        }
                        .bonus-lvl-box {
                            background: #9e83a6;
                            &.first {
                                background: linear-gradient(
                                    180deg,
                                    #ba9682 0%,
                                    #e9bca3 50%,
                                    #ba9682 100%
                                );
                                .bonus-lvl-box-bonus-box {
                                    background: linear-gradient(
                                        39.76deg,
                                        #ffdc6b 23.86%,
                                        #ffe991 38.56%,
                                        #cfa831 53.81%,
                                        #fcdc8e 78.45%
                                    );
                                    box-shadow: 0px 3px 0px #c87725,
                                        0px 5px 2px rgba(0, 0, 0, 0.25),
                                        inset 0px 3px 1px #ffffaa;
                                }
                            }
                            &.next {
                                background: linear-gradient(
                                    180deg,
                                    #90a5b1 0%,
                                    #a8cde1 49.48%,
                                    #90a5b1 100%
                                );
                                .bonus-lvl-box-bonus-box {
                                    background: linear-gradient(
                                        39.76deg,
                                        #ffdc6b 23.86%,
                                        #ffe991 38.56%,
                                        #cfa831 53.81%,
                                        #fcdc8e 78.45%
                                    );
                                    box-shadow: 0px 3px 0px #c87725,
                                        0px 5px 2px rgba(0, 0, 0, 0.25),
                                        inset 0px 3px 1px #ffffaa;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export { stylesFileName, pageStyles };
