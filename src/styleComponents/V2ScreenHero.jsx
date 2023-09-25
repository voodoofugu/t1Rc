import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .popup-layer .m-popup.hero-popup {
        width: 1000px;
        height: 620px;
        left: 100px;
        top: 10px;
        &:before {
            background: linear-gradient(0deg, #625047 0%, #483b3b 100%);
        }
        .title {
            color: #572f14;
        }
        .color-box {
            background: url(../img/tabs-menu-bg.png),
                url(../img/tabs-menu-bg.png), url(../img/tabs-menu-bg.png);
            background-repeat: no-repeat;
            background-position: -102px 496px, 833px 473px, -17px 510px;
            background-size: 95% 58px, 100% 88px, 46% 40px;
            pointer-events: none;
            opacity: 0.6;
            filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.6));
            mix-blend-mode: luminosity;
            &:before {
                display: none;
            }
            &:after {
                display: none;
            }
        }
        .hero-left-side {
            width: 341px;
            height: 503px;
            position: absolute;
            left: 30px;
            top: 75px;
            border-radius: 10px;
            background: linear-gradient(
                180deg,
                #8e7453 0%,
                #e3c7a3 50%,
                #8f7553 70%,
                #ae916a 85%,
                #8f7553 100%
            );
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

            .hero-pieces-ram {
                width: 170px;
                height: 36px;
                position: absolute;
                top: -10px;
                left: 85px;
                background-image: url(../img/wpck-ram1.png);
                background-size: 100%;
                background-repeat: no-repeat;
                color: #fff;
                cursor: pointer;
                font-size: 18px;
                font-weight: bold;
                text-transform: uppercase;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                text-align: center;
                line-height: 32px;
                z-index: 1;
                &:hover {
                    filter: brightness(1.1);
                }
                &:active {
                    transform: scale(0.96);
                }
            }

            .hero-grade-pic {
                width: 68px;
                height: 68px;
                position: absolute;
                top: -10px;
                left: -14px;
                z-index: 1;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                background: linear-gradient(
                    180deg,
                    #585a5c 0%,
                    #d5d8da 50%,
                    #585a5b 70%,
                    #a1a4a6 85%,
                    #585a5b 100%
                );
                border-radius: 100%;
                &:hover {
                    filter: brightness(1.1);
                }
                &:before {
                    content: "";
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    top: 4px;
                    left: 4px;
                    background-color: #484242;
                    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 100%;
                }
                .viplvl {
                    width: 56px;
                    height: 56px;
                    position: absolute;
                    top: 6px;
                    left: 6px;
                    color: #1e1010;
                    font-weight: bold;
                    font-size: 16px;
                    text-align: center;
                    line-height: 60px;
                    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
                }
                &.lvl0 {
                    .viplvl {
                        background-image: url(../img/2vip-s3.png);
                        background-size: 100%;
                    }
                }
                &.lvl1 {
                    .viplvl {
                        background-image: url(../img/2vip-s1.png);
                        background-size: 100%;
                    }
                }
                &.lvl2 {
                    .viplvl {
                        background-image: url(../img/2vip-s2.png);
                        background-size: 100%;
                    }
                }
                &.lvl3 {
                    .viplvl {
                        background-image: url(../img/2vip-s3.png);
                        background-size: 100%;
                    }
                }
                &.lvl4 {
                    .viplvl {
                        background-image: url(../img/2vip-s4.png);
                        background-size: 100%;
                    }
                }
                &.lvl5 {
                    .viplvl {
                        background-image: url(../img/2vip-s5.png);
                        background-size: 100%;
                    }
                }
                &.lvl6 {
                    .viplvl {
                        background-image: url(../img/2vip-s6.png);
                        background-size: 100%;
                    }
                }
                &.lvl7 {
                    .viplvl {
                        background-image: url(../img/2vip-s7.png);
                        background-size: 100%;
                    }
                }
                &.lvl8 {
                    .viplvl {
                        background-image: url(../img/2vip-s8.png);
                        background-size: 100%;
                    }
                }
                &.lvl9 {
                    .viplvl {
                        background-image: url(../img/2vip-s9.png);
                        background-size: 100%;
                    }
                }
                &.lvl10 {
                    .viplvl {
                        background-image: url(../img/2vip-s10.png);
                        background-size: 100%;
                    }
                }
            }
            .hero-image {
                width: 333px;
                height: 495px;
                position: absolute;
                left: 4px;
                top: 4px;
                border-radius: 8px;
                overflow: hidden;
                > img {
                    width: 333px;
                }
            }
            .hero-info-box-all {
                width: 300px;
                height: 70px;
                position: absolute;
                top: 410px;
                left: 20px;
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
                background: linear-gradient(
                    0deg,
                    #ffe199 0%,
                    #f4c657 18%,
                    #ffe199 60%,
                    #f4c557 85%,
                    #ffe199 100%
                );
                text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);
                .hero-name {
                    width: fit-content;
                    padding: 0px 8px;
                    height: 28px;
                    position: relative;
                    top: -22px;
                    color: #3c3737;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 26px;
                    margin: auto;
                    background: #f7cc65;
                    filter: drop-shadow(0 -0.5px 0 #ffe6ac)
                        drop-shadow(0 -0.5px 0 #ffe6ac)
                        drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
                    border-radius: 10px;
                    &:before,
                    &:after {
                        content: "";
                        height: 0;
                        width: 0;
                        border: 12px solid transparent;
                        border-top: 14px solid #f7cc65;
                        position: absolute;
                        top: 1px;
                    }
                    &:before {
                        transform: rotate(90deg);
                        left: -21px;
                    }
                    &:after {
                        transform: rotate(-90deg);
                        right: -21px;
                    }
                }
                .hero-info-box {
                    width: 280px;
                    height: 53px;
                    position: relative;
                    top: -20px;
                    margin-left: 10px;
                    color: #3c3737;
                    display: grid;
                    align-items: center;
                    overflow: hidden;
                    overflow-y: auto;
                    &::-webkit-scrollbar-track {
                        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.7);
                        border-radius: 4px;
                    }
                    &::-webkit-scrollbar {
                        width: 4px;
                    }
                    &::-webkit-scrollbar-thumb {
                        border-radius: 4px;
                        background: rgba(0, 0, 0, 0.4);
                        -webkit-box-shadow: inset 0 -2px rgba(0, 0, 0, 0.1);
                    }
                    .hero-info {
                        position: relative;
                        display: table-cell;
                        vertical-align: middle;
                        font-weight: bold;
                        font-size: 15px;
                        color: #3c3737;
                    }
                }
                .hclass {
                    display: block;
                    height: 22px;
                    border-radius: 8px;
                    position: absolute;
                    left: 10%;
                    right: 10%;
                    top: -21px;
                    background: linear-gradient(
                        to right,
                        #5d5354,
                        #465c73,
                        #0077cb,
                        #556d85
                    );
                    font-size: 17px;
                    line-height: 22px;
                    box-shadow: 0 2px 0px #393229,
                        inset 0 11px 1px rgba(255, 255, 255, 0.15),
                        inset 0 1px 12px #336, inset 0 0 5px #ffc;
                }
            }
            .icon-t-shirt {
                width: 80px;
                height: 80px;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url(../img/icon-t-shirt.png);
                background-size: 100%;
            }
            .sh2-icon-forgirl.right {
                width: 38px;
                height: 49px;
                position: absolute;
                top: 0;
                left: 278px;
                > img {
                    width: 38px;
                }
                &:hover {
                    filter: brightness(1.1);
                }
            }
        }
        .hero-right-side {
            width: 574px;
            height: 390px;
            position: absolute;
            top: 202px;
            right: 30px;
            background: linear-gradient(#866f68, #6f5c56);
            border-radius: 10px;
            box-shadow: 0 0 0 2px #dd9542, 0 2px 4px 1px rgba(0, 0, 0, 0.4),
                inset 0 0 4px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            &:before,
            &:after {
                content: "";
                width: 20px;
                height: 20px;
                background: #dd9542;
                position: absolute;
                top: -11px;
                box-shadow: 0px 392px 0 #dd9542;
                border-radius: 14px;
            }
            &:before {
                left: -11px;
            }
            &:after {
                right: -11px;
            }
            .hero-buff {
                width: 210px;
                height: 80px;
                position: relative;
                top: 5px;
                display: inline-block;
                margin-left: 20px;
                .hero-buff-hero {
                    position: relative;
                    display: inline-block;
                    .hero-buff-image {
                        width: 55px;
                        height: 55px;
                        border-radius: 60px;
                        left: 75px;
                        top: 5px;
                        border: 3px solid rgb(243, 199, 88);
                        box-shadow: 0 0 1px #000;
                    }
                    .hero-buff-name {
                        color: white;
                        font-weight: bold;
                        font-size: 14px;
                    }
                }
            }
            .hero-abils {
                display: block;
                width: 100%;
                list-style: none;
                margin: 0;
                padding: 0;
                margin-top: 4px;
                font-size: 0;
                position: relative;
                .abil {
                    text-align: left;
                    display: inline-block;
                    width: 276px;
                    height: 72px;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    position: relative;
                    background: url(../img/smoke-bg.png),
                        linear-gradient(135deg, #8f5626, #ab7a1d);
                    background-position: left 0px;
                    background-repeat: no-repeat;
                    background-size: 154px 96px, 100%;
                    margin: 4px;
                    border-radius: 8px;
                    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4),
                        inset 0 0 0 2px #c87726,
                        inset 0 4px 10px rgba(0, 0, 0, 0.2),
                        0 1px 2px rgba(0, 0, 0, 0.2);
                    background-blend-mode: color-dodge;
                    &:hover {
                        filter: brightness(1.1);
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        top: 2px;
                        right: 2px;
                        width: 24px;
                        height: 24px;
                        background: url(../img/paycheck-arrow.png);
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        filter: contrast(0.5) brightness(1.4);
                    }
                    .icon {
                        display: inline-block;
                        width: 52px;
                        height: 52px;
                        position: relative;
                        left: 10px;
                        top: 10px;
                        background: linear-gradient(
                            to top,
                            #e9c44f,
                            #efd368,
                            #f7eec7
                        );
                        border-radius: 10px;
                        box-shadow: 0 -1px 1px #f7f1cd, 0 0 0 2px #c87726,
                            0 2px 6px rgba(0, 0, 0, 0.8),
                            0 0 8px rgba(0, 0, 0, 0.4);
                    }
                    .name,
                    .text {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        display: block;
                        position: absolute;
                        left: 70px;
                        top: 18px;
                        font-size: 16px;
                        color: #f3dac4;
                        max-width: 196px;
                        width: auto;
                        cursor: help;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                        &:hover {
                            color: #fff;
                        }
                    }
                    .text {
                        top: 40px;
                        font-size: 13px;
                        line-height: 12px;
                    }
                    .btn-buy {
                        bottom: 17px;
                        height: 20px;
                        right: 8px;
                        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);
                        .price {
                            background-color: #4f4b44;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                        }
                    }
                    &.locked {
                        background: url(../img/smoke-bg.png),
                            linear-gradient(135deg, #4a3e3c, #655150);
                        background-position: left 0px;
                        background-repeat: no-repeat;
                        background-size: 154px 96px, 100%;
                        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4),
                            inset 0 0 0 2px #c87726,
                            inset 0 4px 10px rgba(0, 0, 0, 0.2),
                            0 1px 2px rgba(0, 0, 0, 0.2);
                        background-blend-mode: color-burn;
                        .icon {
                            filter: brightness(0.6) grayscale(0.6);
                        }
                        &:after {
                            content: "";
                            display: block;
                            width: 36px;
                            height: 36px;
                            position: absolute;
                            left: 18px;
                            top: 18px;
                            background-image: url(../img/v2-lock-ic.png);
                            background-size: cover;
                            background-repeat: no-repeat;
                            filter: none;
                        }
                        .name,
                        .text {
                            max-width: 88px;
                            width: auto;
                        }
                        .btn-buy.disabled {
                            .price {
                                height: 31px;
                                line-height: 28px;
                            }
                        }
                    }
                }
            }
            .color-btn.gold {
                width: 120px;
                height: 44px;
                position: absolute;
                bottom: 14px;
                left: 50%;
                transform: translateX(-50%);
                &:before,
                &:after {
                    content: "";
                    position: absolute;
                    top: 0px;
                    width: 54px;
                    height: 46px;
                    background-image: url(../img/darkworld-angel-pop-btn-bg.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    pointer-events: none;
                    filter: brightness(0.2)
                        drop-shadow(0 1px 1px rgba(255, 255, 255, 0.2))
                        grayscale(0.6) opacity(0.3);
                }
                &:before {
                    left: -68px;
                }
                &:after {
                    transform: scaleX(-1);
                    right: -68px;
                }
                &:hover {
                    &:before,
                    &:after {
                        filter: brightness(0.18)
                            drop-shadow(0 1px 1px rgba(255, 255, 255, 0.3))
                            grayscale(0.6) opacity(0.3);
                    }
                }
                .color-btn-text {
                    .gold {
                        color: #222222;
                        text-shadow: 0 0 0;
                        font-size: 16px;
                        top: 0px;
                        text-transform: none;
                        .f-gold {
                            &:before {
                                content: "";
                                width: 18px;
                                height: 18px;
                                position: relative;
                                display: inline-block;
                                background-image: url(../img/ico-gold.png);
                                background-size: 100%;
                                margin: 0 4px 0 4px;
                                vertical-align: middle;
                                top: -2px;
                            }
                        }
                    }
                }
                .color-btn-text {
                    top: 0;
                }
                &:active {
                    box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                        inset 0 2px 2px rgba(0, 0, 0, 0.2);
                    .color-btn-text {
                        top: 1px;
                    }
                }
                &.disabled {
                    &:before,
                    &:after {
                        filter: brightness(0.2)
                            drop-shadow(0 1px 1px rgba(255, 255, 255, 0.4))
                            opacity(0.3);
                    }
                }
            }
        }

        .hero-params {
            display: inline-block;
            width: 574px;
            height: 80px;
            position: absolute;
            text-align: center;
            top: 75px;
            right: 30px;
            .lvl-box,
            .power-box {
                width: 222px;
                height: 36px;
                position: absolute;
                left: 0;
                top: 0;
                padding: 0 3px;
                border-radius: 8px;
                top: 0;
                left: 0;
                box-shadow: inset 3px 3px 1px #ffa, inset 0 0 0 3px #c87725,
                    0 5px 0px #3d3737, 2px 0 0px #3d3737;
                background: linear-gradient(
                    45deg,
                    #e8c34e,
                    #ffa,
                    #cfa831,
                    #fbf1d8
                );
                display: flex;
                align-items: center;
                .lvl {
                    line-height: 34px;
                    color: #3a2423;
                    font-size: 16px;
                    font-weight: 700;
                    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
                    z-index: 1;
                    display: flex;
                    width: 118px;
                    justify-content: space-around;
                    .text {
                        display: inline-block;
                        margin-left: 6px;
                    }
                    .num {
                        margin-left: 4px;
                    }
                }
                .color-btn {
                    width: 98px;
                    height: 30px;
                    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4),
                        inset 0 -3px 0 0 rgba(0, 0, 0, 0.25),
                        0 2px 4px 0 rgba(0, 0, 0, 0.55);
                    margin-left: 6px;
                    border-radius: 4px;
                    .color-btn-text {
                        top: 0;
                        .gold,
                        .pieces {
                            color: #ffffff;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                            font-size: 14px;
                            top: 0px;
                            text-transform: none;
                            .f-gold,
                            .f-pieces {
                                &:before {
                                    content: "";
                                    width: 18px;
                                    height: 18px;
                                    position: relative;
                                    display: inline-block;
                                    background-image: url(../img/ico-gold.png);
                                    background-size: 100%;
                                    margin: 0 4px 0 4px;
                                    vertical-align: middle;
                                    top: -1px;
                                }
                            }
                            .f-pieces {
                                &:before {
                                    background-image: url(../img/ic-girls-pieces.png);
                                    background-position: center -18px;
                                    background-repeat: no-repeat;
                                    background-size: 100%;
                                }
                            }
                        }
                        .color-btn-text1 {
                            display: none;
                        }
                    }
                    &:active {
                        box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                            inset 0 2px 2px rgba(0, 0, 0, 0.2);
                        .color-btn-text {
                            top: 1px;
                        }
                    }
                }
            }
            .power-box {
                top: 41px;
            }
            .dps-dpc-panel-box.hero {
                width: 220px;
                height: 95px;
                position: absolute;
                top: -8px;
                right: 98px;
                .dps {
                    width: 200px;
                    height: 66px;
                    font-size: 18px;
                    font-weight: bold;
                    display: inline-block;
                    border-radius: 7px;
                    background: linear-gradient(
                        45deg,
                        #e8c34e,
                        #f1da7c,
                        #cfa831,
                        #fbf1d8
                    );
                    box-shadow: inset 0 -1px 2px #452b05, 0 0 2px #472624,
                        0 0 3px #472624;
                    margin: 12px;
                    position: relative;
                    margin-left: 16px;
                    .mlt-prm {
                        width: 135px;
                        height: 22px;
                        display: block;
                        border-radius: 5px;
                        background: linear-gradient(
                            to right,
                            #73524d,
                            #db4d29,
                            #db4d29,
                            #db4d29,
                            #73524d
                        );
                        position: absolute;
                        right: 5px;
                        top: 5px;
                        color: #fdfcc3;
                        line-height: 22px;
                        box-shadow: inset 0 11px 0px rgba(255, 255, 0, 0.11),
                            inset 0 2px 1px #3d3737;
                        text-align: left;
                        padding-left: 20px;
                        text-shadow: 0 2px #4f261e;
                        &:before {
                            width: 10px;
                            height: 20px;
                            margin-right: 3px;
                            display: inline-block;
                        }
                    }
                    .value {
                        width: 135px;
                        height: 30px;
                        display: block;
                        position: absolute;
                        top: 30px;
                        right: 5px;
                        border-radius: 5px;
                        background-color: #564a4a;
                        color: #99e6f9;
                        font-size: 26px;
                        line-height: 30px;
                        text-shadow: 0 2px #000;
                        box-shadow: inset 0 11px 0px rgba(255, 255, 255, 0.08),
                            inset 0 2px 1px #3d3737;
                        text-align: left;
                        padding-left: 20px;
                    }
                    .dps-title {
                        width: 60px;
                        height: 30px;
                        display: block;
                        position: absolute;
                        left: -10px;
                        top: -3px;
                        border-radius: 60px;
                        border-bottom-left-radius: 20px;
                        border-bottom-right-radius: 20px;
                        box-shadow: 0 3px 0px #c87725, inset 0 3px 1px #ffa,
                            0 5px 0px #3d3737, 2px 0 0px #3d3737;
                        background: linear-gradient(
                            45deg,
                            #e8c34e,
                            #ffa,
                            #cfa831,
                            #fbf1d8
                        );
                        padding-top: 37px;
                        text-align: center;
                        color: #3a2423;
                        font-size: 25px;
                        font-weight: 900;
                        text-shadow: 0 2px 2px rgba(255, 255, 255, 0.8);
                        &:hover {
                            filter: brightness(1.1);
                        }
                        &:before {
                            content: "";
                            width: 52px;
                            height: 33px;
                            display: block;
                            position: absolute;
                            top: 4px;
                            left: 4px;
                            border-radius: 46px;
                            border-bottom-left-radius: 0;
                            border-bottom-right-radius: 0;
                            line-height: 26px;
                            color: #ffa;
                            background: #544741;
                            box-shadow: inset 0 2px 3px #000;
                            text-shadow: 0 2px 1px #000;
                        }
                        .icon-dps {
                            width: 54px;
                            height: 54px;
                            display: inline-block;
                            position: absolute;
                            left: 3px;
                            top: -10px;
                            background-image: url(../img/ico-click.png);
                            background-size: 54px;
                        }
                        .icon-dps {
                            background-image: url(../img/ico-sword.png);
                            background-size: 54px;
                        }
                    }
                }
                .dps {
                    .x2-dps {
                        position: absolute;
                        top: 45px;
                        left: 38px;
                        text-shadow: 1px 1px 3px #4f261e, -1px -1px 3px #4f261e;
                        color: #fdfcc3;
                    }
                    .value {
                        top: 5px;
                        right: auto;
                        left: 5px;
                        text-align: right;
                        width: 135px;
                        padding: 0;
                        padding-right: 20px;
                    }
                    .mlt-prm {
                        top: 38px;
                        left: 5px;
                        right: auto;
                        width: 135px;
                        text-align: right;
                        padding: 0;
                        padding-right: 20px;
                    }
                    .dps-title {
                        height: 71px;
                        left: auto;
                        right: -10px;
                        top: -3px;
                        border-radius: 60px;
                        border-top-left-radius: 20px;
                        border-top-right-radius: 20px;
                        padding-top: 1px;
                        text-align: center;
                        box-shadow: 0 3px 0px #c87725, 0 5px 0px #3d3737,
                            -1px 0 0px #3d3737, inset 0 3px 1px #ffa;
                        &:before {
                            content: "";
                            display: block;
                            width: 52px;
                            height: 37px;
                            border-radius: 46px;
                            border-top-left-radius: 0;
                            border-top-right-radius: 0;
                            top: auto;
                            bottom: 5px;
                        }
                        .icon-dps {
                            background-image: url(../img/ico-sword.png);
                            background-size: 54px;
                            top: 23px;
                            left: 3px;
                        }
                    }
                }
            }
            .asc-lvl {
                display: inline-block;
                width: 50px;
                height: 68px;
                border-radius: 80px;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                position: absolute;
                right: 0;
                top: 3px;
                box-shadow: 0 3px 0px #c87725, inset 0 3px 2px #ffa,
                    1px 2px 1px #000, 1px 5px 3px #000;
                background: linear-gradient(
                    45deg,
                    #e8c34e,
                    #ffa,
                    #cfa831,
                    #fbf1d8
                );
                line-height: 28px;
                color: #342b2b;
                font-size: 16px;
                text-shadow: 0 0 1px #000, 0 2px 2px #fff;
                text-align: center;
                &:before {
                    content: "";
                    display: block;
                    width: 36px;
                    height: 36px;
                    position: absolute;
                    left: 7px;
                    bottom: 7px;
                    background: #342b2b;
                    border-radius: 80px;
                    box-shadow: 0 0 5px #ffc, 0 0 10px #ffa;
                }
                &:after {
                    content: "";
                    display: block;
                    width: 34px;
                    height: 34px;
                    background-image: url(../img/arrow_up1.png);
                    background-size: 34px;
                    position: absolute;
                    left: 8px;
                    bottom: 8px;
                }
            }
        }

        .hero-nav {
            width: 324px;
            height: 32px;
            position: absolute;
            left: 38px;
            top: 562px;
            .prev,
            .next {
                display: inline-block;
                width: 140px;
                height: 32px;
                font-size: 16px;
                font-weight: bold;
                color: #4e4343;
                margin-left: 18px;
                text-align: center;
                line-height: 28px;
                text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
                position: relative;
                border-top-right-radius: 7px;
                border-bottom-right-radius: 7px;
                box-shadow: inset 0 -3px 0px #c87725, 0 0 3px #3d3737;
                background: linear-gradient(to top, #e9c44f, #efd368, #f7eec7);
                cursor: pointer;
                .arrow {
                    display: block;
                    width: 32px;
                    height: 32px;
                    position: absolute;
                    right: 100%;
                    top: 0px;
                    overflow: hidden;
                    &:before {
                        content: "";
                        display: block;
                        width: 25px;
                        height: 25px;
                        position: absolute;
                        left: 21px;
                        top: 3.2px;
                        transform: rotate(45deg);
                        background: linear-gradient(
                            -45deg,
                            #e9c44f,
                            #efd368,
                            #f7eec7
                        );
                        box-shadow: inset 0 -2px 0px #c87725;
                    }
                }
                &:hover {
                    filter: drop-shadow(0 2px 8px #c87726) brightness(1.1);
                }
                &:active {
                    line-height: 31px;
                    box-shadow: inset 0 -1px 0px #c87725,
                        inset -2px 2px 2px rgba(0, 0, 0, 0.4);
                    filter: drop-shadow(0 2px 8px #c87726) brightness(1.2);
                    .arrow:before {
                        box-shadow: inset 0 -1px 0px #c87725,
                            inset 1.5px 2px 2px rgba(0, 0, 0, 0.4);
                    }
                }
                &.disabled,
                &.disabled:active {
                    background: #897668;
                    cursor: not-allowed;
                    color: #584e46;
                    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.2);
                    line-height: 30px;
                    box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                        0 0 3px #3d3737;
                    .arrow:before {
                        background: #897668;
                        box-shadow: inset 0 -1px 0px rgba(0, 0, 0, 0.2);
                    }
                    &:hover {
                        filter: none;
                    }
                }
            }
            .next {
                float: right;
                margin-right: 18px;
                margin-left: 0;
                background: linear-gradient(to top, #e9c44f, #efd368, #f7eec7);
                border-radius: 0;
                border-top-left-radius: 7px;
                border-bottom-left-radius: 7px;
                .arrow {
                    right: auto;
                    left: 100%;
                    &:before {
                        left: -14px;
                        box-shadow: inset -2px 0px 0px #c87725;
                    }
                }
                &:active {
                    box-shadow: inset 0 -1px 0px #c87725,
                        inset 2px 2px 2px rgba(0, 0, 0, 0.4);
                    .arrow:before {
                        box-shadow: inset -1px 0px 0px #c87725,
                            inset 0px 1.5px 2px rgba(0, 0, 0, 0.4);
                    }
                }
                &.disabled {
                    .arrow:before {
                        box-shadow: inset -1px 0 0px rgba(0, 0, 0, 0.2);
                    }
                    &:hover {
                        filter: none;
                    }
                }
            }
        }
        .btn-inf {
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            position: absolute;
            left: 11px;
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
            box-shadow: 0 2px 2px rgba(255, 255, 255, 1);
            font-family: "Times New Roman", Times, serif;
            &:before {
                content: "i";
                font-size: 28px;
                font-weight: bold;
                color: #757;
                line-height: 30px;
                text-shadow: 0 0 7px #fff, 0 0 7px #fff, 0 0 7px #fff;
            }
            &:after {
                content: "";
                display: block;
                width: 20px;
                height: 14px;
                background: rgba(255, 255, 255, 0.25);
                border-radius: 100%;
                position: absolute;
                left: 5px;
                top: 3px;
            }
            &:hover {
                filter: brightness(1.1);
            }
            &:active {
                transform: scale(0.96);
            }
        }
    }

    .main.world3 .popup-layer .m-popup.hero-popup {
        .hero-right-side {
            background: linear-gradient(#736886, #5b566f);
        }
        .btn-inf {
            background: linear-gradient(
                22deg,
                #d7c7ff,
                #b4abff,
                #5429ff,
                #c8c7ff
            );
            border: solid 4px #512d9d;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(255, 255, 255, 0.4);
            &:before {
                color: #301891;
            }
        }
        .hero-params {
            .lvl-box {
                top: 18px;
                box-shadow: inset 3px 3px 1px #ffa, inset 0 0 0 3px #c87725,
                    0 5px 0px rgba(0, 0, 0, 0.2), 2px 0 0px rgba(0, 0, 0, 0.2);
            }
            .power-box {
                display: none;
            }
        }
    }

    .sh2-icon-forgirl.right {
        width: 38px;
        height: 49px;
        position: absolute;
        top: 0;
        left: 0;
        > img {
            width: 38px;
        }
    }
`;

export { stylesFileName, pageStyles };
