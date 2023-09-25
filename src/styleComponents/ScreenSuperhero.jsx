import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .main {
        .left-side {
            width: 620px;
            height: 555px;
            position: absolute;
            left: 5px;
            bottom: 5px;
            .tabs-all-box {
                width: 500px;
                height: 40px;
                position: absolute;
                top: 0;
                left: 0;
                font-size: 0;
                .tabs-all {
                    width: 118px;
                    height: 40px;
                    position: relative;
                    top: 0;
                    left: 0;
                    display: inline-block;
                    margin: 0 2px 0 0;
                    cursor: pointer;
                    background-color: #9c8b7c;
                    border-radius: 24px 24px 0 0;
                    &:before {
                        content: "";
                        width: 110px;
                        height: 36px;
                        position: absolute;
                        top: 4px;
                        left: 4px;
                        background-color: #544746;
                        border-radius: 20px 20px 0 0;
                        box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.15);
                    }
                    .tabs-name {
                        width: 60px;
                        height: 40px;
                        position: absolute;
                        right: 14px;
                        color: #fff;
                        font-weight: bold;
                        font-size: 12px;
                        line-height: 44px;
                        text-align: center;
                    }
                    .tabs-pic {
                        width: 50px;
                        height: 32px;
                        position: absolute;
                        top: 5px;
                        left: 5px;
                        > img {
                            width: 50px;
                        }
                    }
                    &.selected {
                        &:before {
                            content: "";
                            background-color: #9c8b7c;
                        }
                    }
                }
            }
            .left-panel {
                width: 620px;
                height: 515px;
                position: absolute;
                left: 0;
                top: 40px;
                &:before {
                    content: "";
                    width: 620px;
                    height: 5px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: #9c8b7c;
                    z-index: 999;
                }
                &.wide {
                    width: 1106px;
                    .tab-panel-box.suphero {
                        width: 1098px;
                        height: 511px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: #b7a597;
                        border-top: none;
                        box-shadow: inset 0 4px 0 #9c8b7c, inset 0 0 7px #5f4f4e;
                        border-radius: 10px 18px 18px 18px;
                        border: 4px solid #9c8b7c;
                        border-top: none;
                        .tab-panel-box-title {
                            width: 300px;
                            height: 24px;
                            position: absolute;
                            top: 10px;
                            left: 399px;
                            background: linear-gradient(
                                0deg,
                                #ffe199 0%,
                                #f4c657 18%,
                                #ffe199 60%,
                                #f4c557 85%,
                                #ffe199 100%
                            );
                            border-radius: 12px;
                            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                            color: #3c3737;
                            font-size: 16px;
                            font-weight: bold;
                            text-transform: uppercase;
                            line-height: 24px;
                            text-align: center;
                        }

                        .guildhall-res-box-all {
                            width: 370px;
                            height: 45px;
                            position: absolute;
                            top: -42px;
                            right: 36px;
                            background-color: #9c8b7c;
                            border-radius: 10px 10px 0 0;
                            .guildhall-res-box {
                                width: 170px;
                                height: 36px;
                                position: absolute;
                                top: 4px;
                                left: 10px;
                                background: linear-gradient(
                                    0deg,
                                    #ffe199 0%,
                                    #f4c657 18%,
                                    #ffe199 60%,
                                    #f4c557 85%,
                                    #ffe199 100%
                                );
                                border-radius: 18px;
                                box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.55),
                                    0 2px 4px 0 rgba(0, 0, 0, 0.35);
                                .guildhall-value {
                                    width: 100px;
                                    height: 28px;
                                    position: absolute;
                                    top: 3px;
                                    left: 38px;
                                    background: linear-gradient(
                                        90deg,
                                        #f4bf87 0%,
                                        #d38632 50%,
                                        #92581a 100%
                                    );
                                    box-shadow: inset 0 2px 4px
                                            rgba(0, 0, 0, 0.25),
                                        inset 0 14px 0 rgba(255, 255, 255, 0.15);
                                    border-radius: 6px;
                                    color: #fff;
                                    font-size: 20px;
                                    font-weight: bold;
                                    line-height: 28px;
                                    text-align: center;
                                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                                }
                                .guildhall-value-btn-add {
                                    width: 32px;
                                    height: 36px;
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                    border-radius: 0 18px 18px 0;
                                    cursor: pointer;
                                    &:before {
                                        content: "";
                                        width: 6px;
                                        height: 22px;
                                        position: absolute;
                                        top: 7px;
                                        left: 12px;
                                        background-color: #3c3737;
                                    }
                                    &:after {
                                        content: "";
                                        width: 22px;
                                        height: 6px;
                                        position: absolute;
                                        top: 15px;
                                        left: 4px;
                                        background-color: #3c3737;
                                    }
                                }
                                &.gems {
                                    &:before {
                                        content: "";
                                        width: 40px;
                                        height: 40px;
                                        position: absolute;
                                        top: -2px;
                                        left: -2px;
                                        background-image: url(../img/trophy-bonus-gems.png);
                                        background-size: 100%;
                                        background-repeat: no-repeat;
                                    }
                                }
                                &.mithril {
                                    left: 190px;
                                    &:before {
                                        content: "";
                                        width: 40px;
                                        height: 40px;
                                        position: absolute;
                                        top: -2px;
                                        left: -2px;
                                        background-image: url(../img/trophy-bonus-mithril.png);
                                        background-size: 100%;
                                        background-repeat: no-repeat;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .main .left-side .left-panel.wide .tab-panel-box.suphero,
    .main .m-popup.angels-supheros-added .content {
        .content-box-all {
            background: linear-gradient(180deg, #574b4a 0%, #544746 100%);
            box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.4);
            height: 470px;
            width: 100%;
            margin-top: 41px;
            border-radius: 0px 0px 16px 16px;
            .leftside-box-all {
                width: 360px;
                height: 449px;
                position: absolute;
                top: 52px;
                left: 10px;
                background: #766b60;
                border-radius: 10px;
                box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1),
                    0 1px 1px rgba(0, 0, 0, 0.4);
                .hero-left-box {
                    .filter-box {
                        background: #574b4a;
                        border-radius: 10px;
                        width: 340px;
                        height: 50px;
                        margin: 10px;
                        display: flex;
                        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4),
                            0 1px 1px rgba(255, 255, 255, 0.1);
                        position: relative;
                        z-index: 1;
                        .btn-stars-wrap {
                            display: flex;
                            margin: 5px 0 0 5px;
                            .color-btn {
                                width: 38px;
                                height: 40px;
                                margin-right: 4px;
                                > img {
                                    width: 28px;
                                    top: 6px;
                                    position: absolute;
                                }
                            }
                        }
                        .filter-btn-wrap {
                            position: absolute;
                            top: 4px;
                            right: 4px;
                            width: 78px;
                            height: 42px;
                            border-radius: 6px;
                            transition: ease-in-out 0.1s;
                            .filter-btn-value {
                                width: 100%;
                                height: 100%;
                                background: #443247;
                                border-radius: 8px;
                                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4),
                                    0 1px 1px rgba(255, 255, 255, 0.2);
                                > img {
                                    margin-right: 6px;
                                    position: absolute;
                                    top: 7px;
                                    right: 0;
                                    width: 28px;
                                    position: absolute;
                                }
                            }
                            .filter-btn {
                                position: absolute;
                                top: 2px;
                                left: 2px;
                                width: 74px;
                                height: 38px;
                                background: linear-gradient(
                                    0deg,
                                    #e9b039 0%,
                                    #fffe9a 100%
                                );
                                box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25),
                                    inset 0 2px 2px rgba(0, 0, 0, 0.1),
                                    0 2px 4px 0 rgba(0, 0, 0, 0.55);
                                border-radius: 6px;
                                &:hover {
                                    background: linear-gradient(
                                        0deg,
                                        #ffc64c 0%,
                                        #fffeb4 100%
                                    );
                                }
                                .btn-text {
                                    color: rgba(0, 0, 0, 0.7);
                                    text-shadow: 0 1px 1px
                                        rgba(255, 255, 255, 0.8);
                                    top: 1px;
                                    position: relative;
                                    text-align: center;
                                    font-weight: bold;
                                    text-transform: uppercase;
                                    font-size: 14px;
                                    height: 100%;
                                    flex: 1;
                                    display: flex;
                                    justify-content: center;
                                    flex-direction: row;
                                    align-items: center;
                                    margin-top: -2px;
                                    &:after {
                                        content: "";
                                        width: 4px;
                                        height: 4px;
                                        margin-left: 4px;
                                        font-size: 22px;
                                        border: 2px solid rgba(0, 0, 0, 0.7);
                                        border-top: none;
                                        border-left: none;
                                        transform: rotate(45deg);
                                        filter: drop-shadow(1px 1px 0 #fff);
                                    }
                                }
                                .filter-options-box {
                                    padding: 4px;
                                    width: 92px;
                                    display: flex;
                                    flex-wrap: wrap;
                                    flex-direction: row;
                                    justify-content: center;
                                    background: #4e2e38;
                                    border-radius: 10px;
                                    box-shadow: inset 0 0 0 1px #ffe070,
                                        0 0 6px 2px rgba(0, 0, 0, 0.6);
                                    transform: scaleY(-1);
                                    position: absolute;
                                    left: -15px;
                                    top: 36px;
                                    opacity: 0;
                                    visibility: hidden;
                                    transition: ease-in-out 0.1s;
                                    &:before {
                                        content: "";
                                        position: absolute;
                                        width: 100%;
                                        height: 114%;
                                        top: 0;
                                        left: 0;
                                    }
                                    &:after {
                                        content: "";
                                        border: 10px solid transparent;
                                        border-top: 10px solid #ffe070;
                                        border-radius: 2px;
                                        position: absolute;
                                        bottom: -19px;
                                        filter: drop-shadow(
                                            0 1px 2px rgba(0, 0, 0, 0.6)
                                        );
                                    }
                                    .color-btn {
                                        width: 38px;
                                        height: 40px;
                                        margin: 4px;
                                        transform: scaleY(-1);
                                        > img {
                                            width: 28px;
                                            top: 6px;
                                            position: absolute;
                                        }
                                    }
                                }
                            }
                            &:hover {
                                .filter-options-box {
                                    top: 46px;
                                    opacity: 1;
                                    visibility: visible;
                                    transition: ease-in-out 0.1s;
                                }
                            }
                        }
                    }
                    .suphero-all-box {
                        height: 370px;
                        margin-right: 10px;
                        margin-left: 5px;
                        font-size: 0;
                        left: 10px;
                        border-radius: 8px;
                        overflow-y: scroll;
                        overflow-x: hidden;
                        will-change: transform;
                        direction: ltr;
                        display: flex;
                        flex-wrap: wrap;
                        &::-webkit-scrollbar-track {
                            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                            border-radius: 10px;
                            background-color: #584c46;
                            -webkit-box-shadow: inset 0 0 3px 1px
                                rgba(0, 0, 0, 0.6);
                        }
                        &::-webkit-scrollbar {
                            width: 10px;
                        }
                        &::-webkit-scrollbar-thumb {
                            border-radius: 10px;
                            -webkit-box-shadow: inset 0 0 3px #796b60;
                            background: linear-gradient(
                                to right,
                                #fff,
                                #f5de80,
                                #f4b766,
                                #b26d12
                            );
                        }
                        .suphero-btn-card-add {
                            width: 100px;
                            height: 113px;
                            display: inline-block;
                            position: relative;
                            margin: 5px;
                            border-radius: 6px;
                            box-shadow: 0 2px 0 #a5865a,
                                0px 4px 4px 1px rgba(0, 0, 0, 0.35),
                                inset 0 0 0 4px #ffd18e;
                            background: linear-gradient(
                                155.68deg,
                                #d08746 6.11%,
                                #ffd8b0 53.31%,
                                #da7824 65.64%,
                                #ffcca3 81.23%,
                                #d08d46 97.65%
                            );
                            &:before {
                                content: "";
                                width: 84px;
                                height: 98px;
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%, -50%);
                                background: url(../img/cards-shirt.jpg),
                                    radial-gradient(
                                        66.3% 50% at 50% 50%,
                                        #bfa47b 0%,
                                        #5c5342 100%
                                    );
                                border-radius: 3px;
                                box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
                                background-size: cover;
                                background-blend-mode: soft-light;
                                background-position: center;
                            }
                            .color-btn.add {
                                width: 40px;
                                height: 40px;
                                background: linear-gradient(
                                    180deg,
                                    #ffe9c5 0%,
                                    #ffda97 15.63%,
                                    #ffe7bb 38.54%,
                                    #ffcb74 62.5%,
                                    #e0a137 100%
                                );
                                border: 2px solid #ffd18e;
                                border-radius: 9px;
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%, -50%);
                                .color-btn-text {
                                    color: #685127;
                                    font-size: 30px;
                                    text-shadow: 0 1px 2px #fff;
                                }
                            }
                        }
                        .suphero-card {
                            width: 100px;
                            height: 113px;
                            display: inline-block;
                            position: relative;
                            margin: 5px;
                            cursor: pointer;
                            &:active {
                                transform: scale(0.98);
                            }
                            &:hover {
                                filter: brightness(1.1);
                            }
                            &.check {
                                .hero-pic-box {
                                    background: linear-gradient(
                                        0deg,
                                        #7cbc30 0%,
                                        #baf279 100%
                                    );
                                    box-shadow: inset 0 1px 1px
                                            rgba(255, 255, 255, 0.8),
                                        0px 2px 0px #299d29,
                                        0px 2px 6px 1px #2eff12c7,
                                        0px 1px 6px 1px rgba(255, 255, 255, 0.8),
                                        0px 2px 0px 1px rgba(255, 255, 255, 0.8);
                                }
                                border-radius: 6px;
                            }
                            .hero-pic-box {
                                width: 100px;
                                height: 113px;
                                position: absolute;
                                top: 0px;
                                left: 0px;
                                background: linear-gradient(
                                    159.21deg,
                                    #9f7c47 1.39%,
                                    #f4c992 22.24%,
                                    #946f3f 62.95%,
                                    #efc48d 79.29%,
                                    #b38952 98.01%
                                );
                                border-radius: 6px;
                                box-shadow: 0 0 5px rgba(0, 0, 0, 0.6),
                                    0 2px 0 #8e7453;
                                .hero-pic {
                                    > img {
                                        width: 90px;
                                        height: 103px;
                                    }
                                    width: 90px;
                                    height: 103px;
                                    position: absolute;
                                    top: 5px;
                                    left: 5px;
                                    border-radius: 4px;
                                    overflow: hidden;
                                    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
                                }
                                .herostar-box {
                                    top: 87px;
                                    left: 4px;
                                    width: 92px;
                                    height: 22px;
                                    .herostar {
                                        top: 2px;
                                        left: 0px;
                                        width: 92px;
                                    }
                                }
                            }
                            .sh2-icon {
                                width: 25px;
                                height: 32px;
                                position: absolute;
                                top: -2px;
                                left: 4px;
                                > img {
                                    width: 25px;
                                }
                            }
                            .sh2-icon-forgirl {
                                width: 25px;
                                height: 32px;
                                position: absolute;
                                top: -2px;
                                left: 72px;
                                > img {
                                    width: 25px;
                                }
                            }
                            &.svlock {
                                .sh2-svlock {
                                    width: 108px;
                                    height: 47px;
                                    position: absolute;
                                    top: 40px;
                                    left: -4px;
                                    background-image: url(../img/legendary-lock-sv.png);
                                    background-size: 100%;
                                }
                            }
                            &.lock {
                                filter: grayscale(100%);
                            }
                        }
                    }
                }
            }
            .suphero-rightside-box-all {
                width: 707px;
                height: 449px;
                position: absolute;
                top: 52px;
                right: 10px;
                background: #3c3733;
                border-radius: 10px;
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4),
                    0 1px 1px rgba(255, 255, 255, 0.1);
                .suphero-right-box {
                    &.disabled {
                        .lhero-box,
                        .bonus-hero-pic-box,
                        .lvlup-btn {
                            filter: grayscale(100%);
                        }
                    }
                }
                .lhero-box {
                    width: 250px;
                    height: 430px;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: linear-gradient(
                        180deg,
                        #8e7453 0%,
                        #e3c7a3 50%,
                        #8f7553 70%,
                        #ae916a 85%,
                        #8f7553 100%
                    );
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
                    .lhero-pic {
                        width: 242px;
                        height: 360px;
                        position: absolute;
                        top: 25px;
                        left: 4px;
                        cursor: pointer;
                        &:hover {
                            filter: brightness(1.1);
                        }
                        &:active {
                            top: 26px;
                            transform: scale(0.99);
                        }
                        > img {
                            width: 242px;
                            &.star-up {
                                display: none;
                            }
                        }
                    }
                    .topname-box,
                    .bottom-star-box {
                        width: 250px;
                        height: 40px;
                        position: absolute;
                        //   background: linear-gradient(
                        //     180deg,
                        //     #a1a4a6 0%,
                        //     #d5d8da 91%,
                        //     #a1a4a6 92%,
                        //     #8d9092 100%
                        //   );
                        background: linear-gradient(
                            180deg,
                            #d4b354 0%,
                            #f3d88d 91%,
                            #c3a246 92%,
                            #b9993f 100%
                        );
                        border-radius: 10px 10px 0 0;
                        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4),
                            0 6px 6px rgba(0, 0, 0, 0.5);
                        .sh2-icon.left {
                            width: 38px;
                            height: 49px;
                            position: absolute;
                            top: -2px;
                            left: 6px;
                            > img {
                                width: 38px;
                            }
                        }
                        .sh2-icon-forgirl.right {
                            width: 38px;
                            height: 49px;
                            position: absolute;
                            top: -2px;
                            left: 206px;
                            > img {
                                width: 38px;
                            }
                        }
                        .lhero-name-box {
                            width: 166px;
                            height: 38px;
                            position: absolute;
                            left: 42px;
                            display: table;
                            .lhero-name {
                                display: table-cell;
                                vertical-align: middle;
                                color: #fff;
                                text-shadow: 0 1px 2px #000;
                                font-size: 14px;
                                font-weight: bold;
                                text-align: center;
                            }
                        }
                    }
                    .bottom-star-box {
                        height: 40px;
                        top: 389px;
                        box-shadow: 0 2px 6px #5c5046;
                        border-radius: 0 0 10px 10px;
                        &.gold {
                            background: linear-gradient(
                                180deg,
                                #d4b354 0%,
                                #f3d88d 88%,
                                #c3a246 89%,
                                #b9993f 100%
                            );
                        }
                    }
                    .big-herostar-box {
                        width: 200px;
                        height: 40px;
                        position: absolute;
                        top: -2px;
                        transform: scale(0.9);
                        margin-left: 26px;
                        left: 0;
                        &.sexped {
                            position: initial;
                        }
                        .big-hero-star {
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            background: url(../img/big-hero-star05-bg.png);
                            background-size: 100%;
                            &:before {
                                content: "";
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                left: 0;
                                top: 0;
                                background: url(../img/big-hero-star05.png);
                                background-size: 100%;
                            }
                            &.lvl00 {
                                &:before {
                                    content: "";
                                    width: 0px;
                                    background-repeat: no-repeat;
                                    background-size: 454%;
                                    background-image: url(../img/big-hero-star05.png);
                                }
                            }
                            &.lvl02 {
                                &:before {
                                    content: "";
                                    width: 44px;
                                    background-repeat: no-repeat;
                                    background-size: 454%;
                                    background-image: url(../img/big-hero-star05.png);
                                }
                            }
                            &.lvl04 {
                                &:before {
                                    content: "";
                                    width: 82px;
                                    background-repeat: no-repeat;
                                    background-size: 244%;
                                    background-image: url(../img/big-hero-star05.png);
                                }
                            }
                            &.lvl06 {
                                &:before {
                                    content: "";
                                    width: 120px;
                                    background-repeat: no-repeat;
                                    background-size: 167%;
                                    background-image: url(../img/big-hero-star05.png);
                                }
                            }
                            &.lvl08 {
                                &:before {
                                    content: "";
                                    width: 156px;
                                    background-repeat: no-repeat;
                                    background-size: 128%;
                                    background-image: url(../img/big-hero-star05.png);
                                }
                            }
                            &.lvl010 {
                                &:before {
                                    content: "";
                                    width: 200px;
                                    background-repeat: no-repeat;
                                    background-size: 100%;
                                    background-image: url(../img/big-hero-star05.png);
                                }
                            }
                            &.ult {
                                &:before {
                                    content: "";
                                    width: 200px;
                                    background-repeat: no-repeat;
                                    background-size: 100%;
                                    background: url(../img/big-hero-star05-purple.png);
                                }
                            }
                        }
                    }
                    .bottom-star-box-girl-count-box {
                        width: 250px;
                        height: 34px;
                        position: absolute;
                        top: 356px;
                        left: 0;
                        background: linear-gradient(
                            180deg,
                            #8e7453 0%,
                            #e3c7a3 50%,
                            #8f7553 70%,
                            #ae916a 85%,
                            #8f7553 100%
                        );
                        box-shadow: 0 2px 0 rgba(255, 255, 255, 0.2),
                            0 -2px 0 rgba(255, 255, 255, 0.2), 0 -4px 0 #bb9b40,
                            0 -10px 6px rgba(0, 0, 0, 0.5),
                            inset 0 -0.5px 0.5px rgba(0, 0, 0, 0.2),
                            inset 0 1px 0.5px rgba(0, 0, 0, 0.2);
                        .sh2-prgbar-all {
                            width: 202px;
                            height: 34px;
                            position: absolute;
                            top: 0;
                            left: 48px;
                            background: linear-gradient(
                                0deg,
                                #735657 0%,
                                #453434 100%
                            );
                            box-shadow: -1px 0 0 rgba(0, 0, 0, 0.1),
                                1px 0 0 rgba(0, 0, 0, 0.1);
                            .sh2-prgbar {
                                width: 85%;
                                height: 34px;
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
                            }
                            .sh2-prgbar-text {
                                width: 202px;
                                height: 34px;
                                position: relative;
                                text-align: center;
                                color: #fff;
                                font-weight: bold;
                                font-size: 20px;
                                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
                                line-height: 34px;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                            }
                            &.gold {
                                .sh2-prgbar {
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
                        .girl-bonus-box {
                            width: 40px;
                            height: 40px;
                            position: absolute;
                            top: -3px;
                            left: 4px;
                            display: block;
                            background: linear-gradient(
                                180deg,
                                #c68300 0%,
                                #f4dfb6 50%,
                                #c68200 70%,
                                #fad489 85%,
                                #c78302 100%
                            );
                            border-radius: 100%;
                            box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.4),
                                inset 0 1px 1px rgba(255, 255, 255, 0.5);
                            .girl-bonus-pic {
                                width: 34px;
                                height: 34px;
                                position: absolute;
                                top: 3px;
                                left: 3px;
                                overflow: hidden;
                                border-radius: 100%;
                                &:after {
                                    content: "";
                                    width: 100%;
                                    height: 100%;
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                    border-radius: 100%;
                                    box-shadow: inset 0 0 0 1px
                                        rgba(0, 0, 0, 0.2);
                                }
                                > img {
                                    width: 34px;
                                }
                            }
                        }
                    }
                    .arrow-box-all {
                        width: 250px;
                        height: 50px;
                        position: absolute;
                        top: 306px;
                        left: 0;
                        pointer-events: none;
                        .btn-scroll {
                            width: 40px;
                            height: 40px;
                            position: absolute;
                            top: 0px;
                            left: 10px;
                            margin-left: 0;
                            cursor: pointer;
                            background: linear-gradient(
                                180deg,
                                #fffa8b 0%,
                                #f5e38b 47%,
                                #ebce8b 100%
                            );
                            border-radius: 100%;
                            box-shadow: inset 0px -6px 0px 0px rgba(0, 0, 0, 0.25),
                                0 2px 8px 0 rgba(0, 0, 0, 0.75);
                            pointer-events: all;
                            &:hover {
                                filter: brightness(1.1);
                            }
                            &:after {
                                content: "";
                                width: 20px;
                                height: 28px;
                                background-image: url(../img/rating-arrow.png);
                                position: absolute;
                                top: 4px;
                                left: 9px;
                            }
                            &:active {
                                top: 1px;
                                box-shadow: inset 0px -4px 0px 0px rgba(0, 0, 0, 0.25),
                                    0 2px 8px 0 rgba(0, 0, 0, 0.75);
                                &:after {
                                    top: 5px;
                                }
                            }
                            &.right {
                                margin-left: 0;
                                left: 200px;
                                transform: scale(-1, 1);
                            }
                        }
                    }
                }
                .rstar-box,
                .rlevel-box {
                    width: 428px;
                    height: 210px;
                    position: absolute;
                    top: 10px;
                    left: 270px;
                    background-color: #7e6e62;
                    border-radius: 10px;
                    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
                        inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                        0 1px 1px rgba(0, 0, 0, 0.4);
                    .rname-box {
                        width: 100%;
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
                        height: 108px;
                        position: absolute;
                        top: 36px;
                        left: 8px;
                        background-color: #a69283;
                        background: linear-gradient(
                            180deg,
                            #ba9682 0%,
                            #e9bca3 50%,
                            #ba9682 100%
                        );
                        overflow: hidden;
                        border-radius: 6px;
                        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5),
                            inset 0 -2px 0px rgba(0, 0, 0, 0.2);
                        .lvlbox-name {
                            border-radius: 6px 6px 0 0;
                            width: 200px;
                            height: 26px;
                            position: absolute;
                            background-color: #8a7463;
                            background: rgba(0, 0, 0, 0.3);
                            text-transform: uppercase;
                            color: #fff;
                            font-size: 12px;
                            font-weight: bold;
                            text-align: center;
                            line-height: 26px;
                            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
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
                            width: 188px;
                            height: 36px;
                            position: absolute;
                            top: 62px;
                            left: 6px;
                            display: table;
                            background-color: #928072;
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
                                width: 188px;
                                height: 100%;
                                display: table-cell;
                                text-align: center;
                                vertical-align: middle;
                                color: #4d3e33;
                                text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);
                                font-weight: bold;
                                font-size: 14px;
                                font-weight: 700;
                                text-transform: uppercase;
                                .ff-sh2-icon {
                                    width: 25px;
                                    height: 32px;
                                    position: relative;
                                    top: 2px;
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
                            }
                        }
                    }
                    .rbottom-box {
                        width: 100%;
                        height: 53px;
                        position: absolute;
                        top: 150px;
                        border-radius: 0 0 10px 10px;
                        text-align: center;
                        .all-btn-box {
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            .lvlup-btn {
                                width: 120px;
                                height: 53px;
                                position: absolute;
                                left: 48px;
                                margin: 0;
                                &:hover {
                                    filter: brightness(1.1);
                                }
                                .essence-text-box {
                                    width: 114px;
                                    height: 24px;
                                    position: relative;
                                    top: 3px;
                                    left: 3px;
                                    margin: 0;
                                }
                                &:not(.disabled):active {
                                    box-shadow: inset 0 0 6px
                                            rgba(0, 0, 0, 0.25),
                                        inset 0 -2px 0 rgba(0, 0, 0, 0.25),
                                        0 0 0 1px rgba(0, 0, 0, 0.1);
                                    .essence-text-box {
                                        top: 4px;
                                    }
                                    .btn-text {
                                        top: 4px;
                                    }
                                }
                                &.right {
                                    left: 258px;
                                }
                            }
                            .xall-box {
                                width: auto;
                                height: auto;
                                position: absolute;
                                top: -151px;
                                left: 372px;
                                font-size: 0;
                                .xall-btn {
                                    width: 54px;
                                    height: 26px;
                                    position: relative;
                                    top: 3px;
                                    left: 0px;
                                    cursor: pointer;
                                    display: inline-block;
                                    background: linear-gradient(
                                        0deg,
                                        #7cbc30 0%,
                                        #bbee7f 100%
                                    );
                                    border-radius: 8px;
                                    box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.15),
                                        0 2px 1px rgba(0, 0, 0, 0.25);
                                    color: #fff;
                                    font-size: 14px;
                                    font-weight: bold;
                                    line-height: 24px;
                                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35),
                                        0 0 4px rgba(0, 0, 0, 0.4);
                                    &:active {
                                        padding-top: 1px;
                                        height: 25px;
                                        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15),
                                            0 2px 1px rgba(0, 0, 0, 0.25);
                                    }
                                    &:hover {
                                        filter: brightness(1.1);
                                    }
                                    &.max {
                                        text-transform: uppercase;
                                    }
                                }
                            }
                            .color-btn {
                                width: 250px;
                                height: 50px;
                            }
                        }
                    }
                }
                .rstar-box {
                    .bonus-lvl-box {
                        &.next {
                            left: 220px;
                            background: linear-gradient(
                                180deg,
                                #90a5b1 0%,
                                #a8cde1 49.48%,
                                #90a5b1 100%
                            );
                        }
                    }
                }
                .rlevel-box {
                    top: 230px;
                    height: 210px;
                    .bonus-lvl-box {
                        width: 120px;
                        height: 116px;
                        top: 60px;
                        left: 10px;
                        background: #a69283;
                        .herostar-box {
                            width: 120px;
                            height: 25px;
                            background-color: #705d4e;
                            box-shadow: inset 0 0.5px 0.5px 1px
                                    rgba(255, 255, 255, 0.1),
                                0 1px 1px rgba(255, 255, 255, 0.2);
                            border-radius: 6px 6px 0 0;
                            .herostar {
                                top: 3px;
                                left: 13px;
                            }
                        }
                        .first-bonus-box {
                            width: 120px;
                            height: 45px;
                            position: absolute;
                            top: 25px;
                            .box-name {
                                width: 100%;
                                height: auto;
                                position: absolute;
                                top: 4px;
                                color: #eae0d9;
                                font-size: 10px;
                                font-weight: bold;
                                text-transform: uppercase;
                                text-align: center;
                                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
                            }
                            .bonus-size {
                                width: 100%;
                                height: auto;
                                position: absolute;
                                top: 18px;
                                color: #4d3e33;
                                font-size: 20px;
                                font-weight: bold;
                                text-transform: uppercase;
                                text-align: center;
                                text-shadow: 0 0.5px 0.5px
                                    rgba(255, 255, 255, 0.4);
                            }
                        }
                        .second-bonus-box {
                            width: 120px;
                            height: 45px;
                            position: absolute;
                            top: 71px;
                            background-color: rgba(46, 43, 40, 0.2);
                            .box-name {
                                width: 100%;
                                height: auto;
                                position: absolute;
                                top: 4px;
                                color: #eae0d9;
                                font-size: 10px;
                                font-weight: bold;
                                text-transform: uppercase;
                                text-align: center;
                                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
                            }
                            .bonus-size {
                                width: 100%;
                                height: auto;
                                position: absolute;
                                top: 18px;
                                color: #4d3e33;
                                font-size: 20px;
                                font-weight: bold;
                                text-transform: uppercase;
                                text-align: center;
                                text-shadow: 0 0.5px 0.5px
                                    rgba(255, 255, 255, 0.4);
                            }
                        }
                        &.next {
                            left: 160px;
                        }
                    }
                    .bonus-hero-pic-box-all {
                        width: 130px;
                        height: 168px;
                        position: absolute;
                        top: 36px;
                        left: 291px;
                        background: linear-gradient(
                            90deg,
                            #996b1d 0%,
                            #e5ca72 50%,
                            #996b1d 100%
                        );
                        overflow: hidden;
                        border-radius: 6px;
                        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5),
                            inset 0 -2px 0px rgba(0, 0, 0, 0.2);
                        .bonus-hero-pic-box {
                            width: 110px;
                            height: 110px;
                            position: absolute;
                            top: 6px;
                            left: 10px;
                            background: linear-gradient(
                                0deg,
                                #867366 0%,
                                #cac0b9 100%
                            );
                            border-radius: 10px;
                            box-shadow: 0 0 6px #48382b;
                            .bonus-hero-pic {
                                > img {
                                    width: 114px;
                                    height: 114px;
                                }
                                width: 104px;
                                height: 104px;
                                position: absolute;
                                top: 3px;
                                left: 3px;
                                overflow: hidden;
                                border-radius: 8px;
                            }
                            .zlupa {
                                width: 30px;
                                height: 30px;
                                position: absolute;
                                top: 80px;
                                left: 80px;
                                background-image: url(../img/cursor-plus.png);
                                background-size: 100%;
                                cursor: pointer;
                            }
                            .herostar-box {
                                width: 110px;
                                border-radius: 10px 10px 0 0;
                                .herostar {
                                    top: 4px;
                                    left: 8px;
                                }
                            }
                        }
                        .bonus-box {
                            width: 100%;
                            height: 8px;
                            position: absolute;
                            top: 122px;
                            left: 0;
                            background-color: #705d4e;
                            color: #fff;
                            font-size: 12px;
                            font-weight: bold;
                            text-transform: uppercase;
                            text-align: center;
                            line-height: 20px;
                        }
                        .bonus-box-all {
                            width: 100%;
                            height: 38px;
                            position: absolute;
                            top: 130px;
                            left: 0;
                            background-color: #a69283;
                            box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2);
                            .box-name {
                                width: 100%;
                                height: auto;
                                position: absolute;
                                top: 2px;
                                color: #eae0d9;
                                font-size: 12px;
                                font-weight: bold;
                                text-transform: uppercase;
                                text-align: center;
                                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
                            }
                            .bonus-size {
                                width: 100%;
                                height: auto;
                                position: absolute;
                                top: 14px;
                                color: #4d3e33;
                                font-size: 20px;
                                font-weight: bold;
                                text-transform: uppercase;
                                text-align: center;
                                text-shadow: 0 0.5px 0.5px
                                    rgba(255, 255, 255, 0.4);
                            }
                        }
                    }
                    .rarrow {
                        width: 0;
                        height: 0;
                        position: absolute;
                        top: 100px;
                        left: 138px;
                        border-top: 20px solid transparent;
                        border-left: 16px solid #ffd153;
                        border-bottom: 20px solid transparent;
                        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));
                    }
                    .bonus-buy-box {
                        width: 326px;
                        height: 56px;
                        position: absolute;
                        top: 160px;
                        right: 7px;
                        display: none;
                        background-color: #705d4e;
                        text-align: center;
                        .color-btn {
                            width: 200px;
                            height: 50px;
                            position: relative;
                            top: 3px;
                            .f-diamond {
                                &:before {
                                    content: "";
                                    width: 30px;
                                    height: 30px;
                                    position: relative;
                                    display: inline-block;
                                    background-image: url(../img/diamond@1x.png);
                                    background-size: 100%;
                                    margin: 0 4px 0 4px;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                    .girl-bonus-box {
                        display: none;
                    }
                    .bonus-hero-pic-box-upgrade {
                        display: none;
                    }
                    .dps-bonus-box-all {
                        display: none;
                    }
                    .bonus-buy-box-all {
                        display: none;
                    }
                    .line-top-box,
                    .line-right-box {
                        display: none;
                    }
                    .congra-box-all {
                        display: none;
                    }
                    &.upgrade {
                        .bonus-hero-pic-box-all {
                            display: none;
                        }
                        .bonus-lvl-box.next {
                            display: none;
                        }
                        .rarrow {
                            display: none;
                        }
                        .bonus-lvl-box {
                            top: 40px;
                            left: 223px;
                        }
                        .bonus-buy-box {
                            display: block;
                        }
                        .line-top-box {
                            width: 5px;
                            height: 30px;
                            position: absolute;
                            top: 110px;
                            left: 39px;
                            display: block;
                            background-color: #ffcb39;
                        }
                        .line-right-box {
                            width: 80px;
                            height: 5px;
                            position: absolute;
                            top: 116px;
                            left: 39px;
                            display: block;
                            background-color: #ffcb39;
                        }
                        .bonus-lvl-box {
                            top: 36px;
                            left: 214px;
                            background: #a69283;
                        }
                        .girl-bonus-box {
                            width: 72px;
                            height: 72px;
                            position: absolute;
                            top: 36px;
                            left: 6px;
                            display: block;
                            background: linear-gradient(
                                180deg,
                                #c68300 0%,
                                #f4dfb6 50%,
                                #c68200 70%,
                                #fad489 85%,
                                #c78302 100%
                            );
                            border-radius: 100%;
                            box-shadow: 0 4px 2px rgba(0, 0, 0, 0.35);
                            box-shadow: 0 0 6px #48382b;
                            .girl-bonus-pic {
                                width: 66px;
                                height: 66px;
                                position: absolute;
                                top: 3px;
                                left: 3px;
                                overflow: hidden;
                                border-radius: 100%;
                                > img {
                                    width: 100%;
                                }
                            }
                            .girl-5star {
                                width: 80px;
                                height: 15px;
                                position: absolute;
                                top: 42px;
                                left: -3px;
                                background-image: url(../img/hero-star05.png);
                                background-size: 100%;
                            }
                            .sh2-prgbar-all {
                                width: 72px;
                                height: 18px;
                                position: absolute;
                                top: 56px;
                                left: 0px;
                                background: linear-gradient(
                                    0deg,
                                    #735657 0%,
                                    #453434 100%
                                );
                                overflow: hidden;
                                border-radius: 4px;
                                box-shadow: 0 0 0 1px #453434,
                                    0 1px 2px rgba(0, 0, 0, 0.4);
                                .sh2-prgbar {
                                    width: 90%;
                                    height: 100%;
                                    position: absolute;
                                    top: 0px;
                                    left: 0px;
                                    background: linear-gradient(
                                        0deg,
                                        #5eb0f2 0%,
                                        #4783b5 12%,
                                        #66c4ff 60%,
                                        #91d5ff 70%,
                                        #569fdb 100%
                                    );
                                }
                                .sh2-prgbar-text {
                                    width: 80px;
                                    height: 20px;
                                    position: relative;
                                    text-align: center;
                                    color: #fff;
                                    font-weight: bold;
                                    font-size: 14px;
                                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
                                    line-height: 18px;
                                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                                }
                            }
                            &.next {
                                top: 127px;
                            }
                        }
                        .bonus-hero-pic-box-upgrade {
                            width: 120px;
                            height: 116px;
                            position: absolute;
                            top: 36px;
                            left: 86px;
                            display: block;
                            background: linear-gradient(
                                0deg,
                                #867366 0%,
                                #cac0b9 100%
                            );
                            border-radius: 10px;
                            box-shadow: 0 0 6px #48382b;
                            .bonus-hero-pic {
                                > img {
                                    width: 114px;
                                    height: 114px;
                                }
                                width: 114px;
                                height: 110px;
                                position: absolute;
                                top: 3px;
                                left: 3px;
                                overflow: hidden;
                                border-radius: 8px;
                            }
                            .zlupa {
                                width: 30px;
                                height: 30px;
                                position: absolute;
                                top: 84px;
                                left: 88px;
                                background-image: url(../img/cursor-plus.png);
                                background-size: 100%;
                                cursor: pointer;
                            }
                            .herostar-box {
                                width: 110px;
                                border-radius: 10px 10px 0 0;
                                .herostar {
                                    top: 4px;
                                    left: 8px;
                                }
                            }
                        }
                        .dps-bonus-box-all {
                            width: 80px;
                            height: 116px;
                            position: absolute;
                            top: 36px;
                            left: 342px;
                            display: block;
                            background-color: #a69283;
                            overflow: hidden;
                            border-radius: 6px;
                            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5),
                                inset 0 -2px 0px rgba(0, 0, 0, 0.2);
                            .dps-bonus-box-name-box {
                                width: 80px;
                                height: 40px;
                                position: absolute;
                                top: 0;
                                left: 0;
                                background-color: #705d4e;
                                display: table;
                                box-shadow: inset 0 0.5px 0.5px 1px
                                        rgba(255, 255, 255, 0.1),
                                    0 1px 1px rgba(255, 255, 255, 0.2);
                                border-radius: 6px 6px 0 0;
                                .dps-bonus-box-name {
                                    width: 80px;
                                    height: 40px;
                                    position: relative;
                                    display: table-cell;
                                    vertical-align: middle;
                                    color: #fff;
                                    font-size: 12px;
                                    font-weight: bold;
                                    text-transform: uppercase;
                                    text-align: center;
                                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
                                }
                            }
                            .dps-bonus-box {
                                width: 80px;
                                height: 76px;
                                position: absolute;
                                top: 40px;
                                left: 0;
                                display: table;
                                .dps-bonus {
                                    width: 80px;
                                    height: auto;
                                    position: relative;
                                    display: table-cell;
                                    vertical-align: middle;
                                    font-size: 16px;
                                    font-weight: bold;
                                    text-transform: uppercase;
                                    text-align: center;
                                    color: #4d3e33;
                                    text-shadow: 0 0.5px 0.5px
                                        rgba(255, 255, 255, 0.4);
                                }
                            }
                        }
                        .bonus-buy-box-all {
                            width: 337px;
                            height: 47px;
                            position: absolute;
                            top: 158px;
                            left: 86px;
                            display: block;
                            background-color: #705d4e;
                            border-radius: 6px;
                            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
                                0 1px 1px rgba(255, 255, 255, 0.2);
                            .color-btn {
                                width: 162px;
                                height: 39px;
                                position: absolute;
                                top: 4px;
                                left: 50%;
                                transform: translateX(-50%);
                                .color-btn-text {
                                    top: 12px;
                                    color: #fff;
                                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                                    text-align: center;
                                    font-weight: bold;
                                    text-transform: uppercase;
                                    font-size: 18px;
                                    .ff-but {
                                        &:before {
                                            content: "";
                                            width: 35px;
                                            height: 25px;
                                            position: relative;
                                            display: inline-block;
                                            background-image: url(../img/80-topup.png);
                                            background-size: 100%;
                                            margin-left: 4px;
                                            margin-top: -10px;
                                            vertical-align: middle;
                                        }
                                    }
                                }
                                &:active {
                                    box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                                        inset 0 2px 2px rgba(0, 0, 0, 0.2);
                                    .color-btn-text {
                                        top: 13px;
                                    }
                                }
                            }
                        }
                    }
                }
                .rlevel-box.congra {
                    &:before,
                    &:after {
                        content: "";
                        position: absolute;
                        width: 80px;
                        height: 68px;
                        background-image: url(../img/darkworld-angel-pop-btn-bg.png);
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                        top: 84px;
                        filter: brightness(0.5) opacity(0.6)
                            drop-shadow(0 1px 0.5px rgba(255, 255, 255, 0.3));
                    }
                    &:before {
                        left: 40px;
                    }
                    &:after {
                        transform: scaleX(-1);
                        right: 40px;
                    }
                    .bonus-lvl-box {
                        left: 154px;
                        background: #ffc543;
                        background: linear-gradient(
                            -39.76deg,
                            #ffd445 23.86%,
                            #ffe16a 38.56%,
                            #f0bd24 53.81%,
                            #ffdb7e 78.45%
                        );
                        .herostar-box {
                            background-color: rgba(0, 0, 0, 0.1);
                        }
                        .box-name {
                            color: #4d3e33;
                            text-shadow: 0 0.5px 0.5px rgba(255, 255, 255, 0.4);
                        }
                    }
                }
            }
            .trophy-res-box-all {
                .trophy-res-box {
                    &.essence {
                        &:before {
                            content: "";
                            width: 32px;
                            height: 32px;
                            position: absolute;
                            top: 1px;
                            left: 3px;
                            background-image: url(../img/essence-80x80.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                    }
                    &.chest {
                        &:before {
                            content: "";
                            width: 32px;
                            height: 32px;
                            position: absolute;
                            top: 1px;
                            left: 3px;
                            background-image: url(../img/sh-icon-chest-128.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                    }
                }
            }
        }
    }

    .main {
        .m-popup.angels-supheros-added {
            width: 1118px;
            height: 598px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            .content {
                margin: 10px;
                margin-top: 61px;
                .header-box {
                    display: flex;
                    justify-content: space-between;
                    padding: 16px 10px;
                    .dps {
                        margin-left: 34px;
                        width: 126px;
                        height: 37px;
                        font-size: 18px;
                        font-weight: bold;
                        display: inline-block;
                        border-radius: 7px;
                        background: linear-gradient(
                            79.88deg,
                            #eecc60 15.85%,
                            #ffeea7 31.54%,
                            #cfa831 58.47%,
                            #fbf1d8 75.55%,
                            #eecc60 90.72%
                        );
                        box-shadow: inset 0 -1px 2px #452b05, 0 0 2px #472624,
                            0 0 3px #472624;
                        position: relative;
                        left: 102px;
                        .value {
                            width: 110px;
                            height: 30px;
                            position: absolute;
                            top: 3px;
                            right: 4px;
                            border-radius: 5px;
                            background-color: #5f4c36;
                            box-shadow: inset 0 11px 0px
                                    rgba(255, 255, 255, 0.08),
                                inset 0 2px 1px #3d3737;
                            text-align: left;
                            padding-left: 10px;
                            color: #fff493;
                            font-size: 18px;
                            line-height: 30px;
                            text-shadow: 0 1px 1px #000;
                            display: flex;
                            justify-content: space-evenly;
                            &:before {
                                content: "Total ";
                                font-size: 16px;
                                color: #99e6f9;
                            }
                        }
                        .dps-title {
                            border: none;
                            position: absolute;
                            background: linear-gradient(
                                45deg,
                                #e8c34e,
                                #ffa,
                                #cfa831,
                                #fbf1d8
                            );
                            line-height: 26px;
                            color: #3a2423;
                            font-size: 19px;
                            font-weight: 900;
                            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
                            height: 52px;
                            width: 44px;
                            left: -34px;
                            top: -9px;
                            border-radius: 60px;
                            border-top-left-radius: 20px;
                            border-top-right-radius: 20px;
                            padding-top: 1px;
                            text-align: center;
                            box-shadow: 0 2px 0px #c87725, 0 4px 0px #3d3737,
                                -1px 0 0px #3d3737, inset 0 2px 1px #ffa;
                            &:before {
                                content: "";
                                width: 36px;
                                height: 24px;
                                display: block;
                                position: absolute;
                                bottom: 4px;
                                left: 4px;
                                top: auto;
                                border-radius: 0 0 46px 46px;
                                line-height: 26px;
                                color: #ffa;
                                background: #5f4c36;
                                box-shadow: inset 0 2px 3px #000;
                                text-shadow: 0 2px 1px #000;
                            }
                            .icon-dps {
                                width: 38px;
                                height: 38px;
                                display: inline-block;
                                position: absolute;
                                left: 3px;
                                top: 21px;
                                background-image: url(../img/ico-sword.png);
                                background-size: cover;
                            }
                        }
                    }
                    .trophy-res-box-all {
                        display: flex;
                        justify-content: center;
                        width: 707px;
                        position: unset;
                        background: none;
                        box-shadow: none;
                        height: 36px;
                        .trophy-res-box {
                            position: relative;
                            top: 0;
                            margin: 0 8px;
                            &.spirit {
                                left: 0px;
                                &:before {
                                    content: "";
                                    width: 32px;
                                    height: 32px;
                                    position: absolute;
                                    top: 1px;
                                    left: 3px;
                                    background-image: url(../img/essence-80x80.png);
                                    background-size: 100%;
                                    background-repeat: no-repeat;
                                }
                            }
                            &.spirit2 {
                                left: 0px;
                                &:before {
                                    content: "";
                                    width: 32px;
                                    height: 32px;
                                    position: absolute;
                                    top: 1px;
                                    left: 3px;
                                    background-image: url(../img/sh-icon-chest-dark-32.png);
                                    background-size: 100%;
                                    background-repeat: no-repeat;
                                }
                            }
                        }
                    }
                }
                .content-box-all {
                    width: 100%;
                    height: 449px;
                    border-radius: 0 0 5px 5px;
                    position: relative;
                    margin: 0;
                    background: none;
                    box-shadow: none;
                    .leftside-box-all {
                        top: 0px;
                        .hero-left-box {
                            .filter-box {
                                .filter-btn-wrap {
                                    position: absolute;
                                    top: 4px;
                                    right: 4px;
                                    width: 78px;
                                    height: 42px;
                                    border-radius: 6px;
                                    transition: ease-in-out 0.1s;
                                }
                            }
                        }
                        .suphero-all-box {
                            &::-webkit-scrollbar-track {
                                background-color: #472d84;
                            }
                            .suphero-btn-card-add {
                                background: linear-gradient(
                                    155.68deg,
                                    #c146d0 6.11%,
                                    #edb0ff 53.31%,
                                    #b924da 65.64%,
                                    #f2a3ff 81.23%,
                                    #b646d0 97.65%
                                );
                                &:before {
                                    background: url(../img/cards-shirt.jpg),
                                        radial-gradient(
                                            66.3% 50% at 50% 50%,
                                            #b093ff 0%,
                                            #4d157a 100%
                                        );
                                    background-size: cover;
                                    background-position: center;
                                }
                                .color-btn.add {
                                    background: linear-gradient(
                                        180deg,
                                        #e1c5ff 0%,
                                        #c997ff 15.63%,
                                        #dcbbff 38.54%,
                                        #b274ff 62.5%,
                                        #8837e0 100%
                                    );
                                    .color-btn-text {
                                        color: #442768;
                                    }
                                }
                            }
                            .suphero-card {
                                &.check {
                                    .hero-pic-box {
                                        background: linear-gradient(
                                            0deg,
                                            #7cbc30 0%,
                                            #baf279 100%
                                        );
                                        box-shadow: inset 0 1px 1px
                                                rgba(255, 255, 255, 0.8),
                                            0px 2px 0px #299d29,
                                            0px 2px 6px 1px #2eff12c7,
                                            0px 1px 6px 1px
                                                rgba(255, 255, 255, 0.8),
                                            0px 2px 0px 1px
                                                rgba(255, 255, 255, 0.8);
                                    }
                                    border-radius: 6px;
                                }
                                .hero-pic-box {
                                    background: linear-gradient(
                                        155.68deg,
                                        #8e46d0 6.11%,
                                        #f1b0ff 53.31%,
                                        #8d24da 65.64%,
                                        #eea3ff 81.23%,
                                        #9a46d0 97.65%
                                    );
                                    box-shadow: 0px 2px 0px #79299d,
                                        0px 4px 4px 1px rgba(0, 0, 0, 0.35);
                                    .herostar-box {
                                        background-color: rgba(61, 53, 89, 0.5);
                                    }
                                }
                            }
                        }
                    }
                    .suphero-rightside-box-all {
                        top: 0;
                    }
                }
            }
        }
    }

    .main.world3 {
        .left-side .left-panel.wide .tab-panel-box.suphero,
        .m-popup.angels-supheros-added {
            .content {
                .header-box {
                    .dps {
                        .value {
                            background-color: #36385f;
                        }
                        .dps-title {
                            &:before {
                                background: #36385f;
                            }
                        }
                    }
                }
            }
            .content-box-all {
                background: linear-gradient(180deg, #43297b 0%, #6a4fd4 100%);
                .leftside-box-all {
                    background: linear-gradient(
                        180deg,
                        #5e49bf 0%,
                        #7f6de5 100%
                    );
                    .hero-left-box {
                        .filter-box {
                            background: #472d84;
                            .filter-btn-wrap {
                                .filter-btn-value {
                                    background: #311a42;
                                }
                                .filter-btn {
                                    .filter-options-box {
                                        background: #392e4e;
                                    }
                                }
                            }
                        }
                        .suphero-all-box {
                            &::-webkit-scrollbar-track {
                                background-color: #472d84;
                            }
                            .suphero-btn-card-add {
                                background: linear-gradient(
                                    155.68deg,
                                    #c146d0 6.11%,
                                    #edb0ff 53.31%,
                                    #b924da 65.64%,
                                    #f2a3ff 81.23%,
                                    #b646d0 97.65%
                                );
                                &:before {
                                    background: url(../img/cards-shirt.jpg),
                                        radial-gradient(
                                            66.3% 50% at 50% 50%,
                                            #b093ff 0%,
                                            #4d157a 100%
                                        );
                                    background-size: cover;
                                    background-position: center;
                                }
                                .color-btn.add {
                                    background: linear-gradient(
                                        180deg,
                                        #e1c5ff 0%,
                                        #c997ff 15.63%,
                                        #dcbbff 38.54%,
                                        #b274ff 62.5%,
                                        #8837e0 100%
                                    );
                                    .color-btn-text {
                                        color: #442768;
                                    }
                                }
                            }
                            .suphero-card {
                                .hero-pic-box {
                                    background: linear-gradient(
                                        155.68deg,
                                        #8e46d0 6.11%,
                                        #f1b0ff 53.31%,
                                        #8d24da 65.64%,
                                        #eea3ff 81.23%,
                                        #9a46d0 97.65%
                                    );
                                    box-shadow: 0px 2px 0px #79299d,
                                        0px 4px 4px 1px rgba(0, 0, 0, 0.35);
                                    .herostar-box {
                                        background-color: rgba(61, 53, 89, 0.5);
                                    }
                                }
                                &.check {
                                    .hero-pic-box {
                                        background: linear-gradient(
                                            0deg,
                                            #7cbc30 0%,
                                            #baf279 100%
                                        );
                                        box-shadow: inset 0 1px 1px
                                                rgba(255, 255, 255, 0.8),
                                            0px 2px 0px #299d29,
                                            0px 2px 6px 1px #2eff12c7,
                                            0px 1px 6px 1px
                                                rgba(255, 255, 255, 0.8),
                                            0px 2px 0px 1px
                                                rgba(255, 255, 255, 0.8);
                                    }
                                    border-radius: 6px;
                                }
                            }
                        }
                    }
                }
                .suphero-rightside-box-all {
                    background: linear-gradient(
                        180deg,
                        #3e1d73 0%,
                        #402276 100%
                    );
                    .lhero-box {
                        background: linear-gradient(
                            155.68deg,
                            #8e46d0 6.11%,
                            #f1b0ff 53.31%,
                            #8d24da 65.64%,
                            #eea3ff 81.23%,
                            #9a46d0 97.65%
                        );
                        .topname-box,
                        .bottom-star-box {
                            background: linear-gradient(
                                180deg,
                                #7b54d4 0%,
                                #aa8df3 88%,
                                #7046c3 89%,
                                #5f3fb9 100%
                            );
                        }
                        .bottom-star-box {
                            box-shadow: 0 2px 6px #5c5046;
                            &.gold {
                                background: linear-gradient(
                                    180deg,
                                    #7b54d4 0%,
                                    #aa8df3 88%,
                                    #7046c3 89%,
                                    #5f3fb9 100%
                                );
                            }
                        }
                        .bottom-star-box-girl-count-box {
                            box-shadow: 0 2px 0 rgba(255, 255, 255, 0.2),
                                0 -2px 0 rgba(255, 255, 255, 0.2),
                                0 -4px 0 #5f3fb9, 0 -10px 6px rgba(0, 0, 0, 0.5),
                                inset 0 -0.5px 0.5px rgba(0, 0, 0, 0.2),
                                inset 0 1px 0.5px rgba(0, 0, 0, 0.2);
                        }
                    }
                    .rstar-box,
                    .rlevel-box {
                        background-color: #6a627e;
                        .rname-box {
                            background-color: #5a4c65;
                        }
                    }
                    .rlevel-box {
                        .bonus-lvl-box {
                            background: #9e83a6;
                            .herostar-box {
                                background-color: #5e4e70;
                            }
                        }
                        .bonus-hero-pic-box-all {
                            .bonus-box {
                                background-color: #5e4e70;
                            }
                            .bonus-box-all {
                                background-color: #9e83a6;
                            }
                        }
                        &.upgrade {
                            .bonus-lvl-box {
                                background: #9e83a6;
                            }
                            .girl-bonus-box {
                                box-shadow: 0 0 6px #352b48;
                                .sh2-prgbar-all {
                                    background: linear-gradient(
                                        0deg,
                                        #5f5673 0%,
                                        #3a3445 100%
                                    );
                                    box-shadow: 0 0 0 1px #393445,
                                        0 1px 2px rgba(0, 0, 0, 0.4);
                                }
                            }
                            .bonus-hero-pic-box-upgrade {
                                background: linear-gradient(
                                    0deg,
                                    #706686 0%,
                                    #c0b9ca 100%
                                );
                                box-shadow: 0 0 6px #332b48;
                            }
                            .dps-bonus-box-all {
                                .dps-bonus-box-name-box {
                                    background-color: #5e4e70;
                                }
                                .dps-bonus-box {
                                    .dps-bonus {
                                        background: #9e83a6;
                                    }
                                }
                            }
                            .bonus-buy-box-all {
                                background-color: #5e4e70;
                            }
                        }
                    }
                    .rlevel-box.congra {
                        &:before,
                        &:after {
                            filter: brightness(0.5) hue-rotate(270deg)
                                opacity(0.6)
                                drop-shadow(
                                    0 1px 0.5px rgba(255, 255, 255, 0.3)
                                );
                        }
                    }
                }
            }
            .suphero-avatar-box {
                background: linear-gradient(
                    155.68deg,
                    #8e46d0 6.11%,
                    #f1b0ff 53.31%,
                    #8d24da 65.64%,
                    #eea3ff 81.23%,
                    #9a46d0 97.65%
                );
                box-shadow: 0px 2px 0px #79299d,
                    0px 4px 4px 1px rgba(0, 0, 0, 0.35);
                .suphero-avatar-wrap {
                    box-shadow: 0 0 0 1px #1b0a87;
                }
                .stars-box {
                    background: rgba(255, 255, 255, 0.6);
                }
            }
        }
    }

    .main.world3 .left-side .left-panel.wide .tab-panel-box.suphero {
        background: #ab97b7;
    }
    .main .m-popup.angels-supheros-added {
        &:before {
            background: linear-gradient(180deg, #574b4a 0%, #544746 100%);
        }
    }
    .main.world3 .m-popup.angels-supheros-added {
        .content-box-all {
            background: none;
        }
    }

    .herostar-box {
        width: 100px;
        height: 26px;
        background-color: rgba(89, 68, 53, 0.5);
        position: absolute;
        border-radius: 0 0 4px 4px;
        .herostar {
            width: 94px;
            height: 18px;
            position: absolute;
            background-image: url(../img/hero-star05-bg.png);
            background-size: 100%;
            &:before {
                content: "";
                width: 94px;
                height: 18px;
                position: absolute;
                left: 0;
                top: 0;
            }
            &.lvl00 {
                &:before {
                    content: "";
                    width: 0px;
                    background-repeat: no-repeat;
                    background-size: 470%;
                    background-image: url(../img/hero-star05.png);
                }
            }
            &.lvl02 {
                &:before {
                    content: "";
                    width: 20px;
                    background-repeat: no-repeat;
                    background-size: 470%;
                    background-image: url(../img/hero-star05.png);
                }
            }
            &.lvl04 {
                &:before {
                    content: "";
                    width: 38px;
                    background-repeat: no-repeat;
                    background-size: 248%;
                    background-image: url(../img/hero-star05.png);
                }
            }
            &.lvl06 {
                &:before {
                    content: "";
                    width: 56px;
                    background-repeat: no-repeat;
                    background-size: 168%;
                    background-image: url(../img/hero-star05.png);
                }
            }
            &.lvl08 {
                &:before {
                    content: "";
                    width: 72px;
                    background-repeat: no-repeat;
                    background-size: 131%;
                    background-image: url(../img/hero-star05.png);
                }
            }
            &.lvl010 {
                &:before {
                    content: "";
                    width: 94px;
                    background-repeat: no-repeat;
                    background-size: 100%;
                    background-image: url(../img/hero-star05.png);
                }
            }
            &.ult {
                &:before {
                    content: "";
                    width: 94px;
                    background-repeat: no-repeat;
                    background-size: 100%;
                    background-image: url(../img/big-hero-star05-purple.png);
                }
            }
        }
    }

    .lvlup-btn {
        width: 196px;
        height: 50px;
        border-radius: 6px;
        background-color: #dab443;
        margin: 0 4px 0 4px;
        box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25),
            0 0 6px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        .essence-text-box {
            margin-left: 3px;
            width: 190px;
            height: 24px;
            position: relative;
            top: 3px;
            background-color: #615144;
            border-radius: 4px;
            .essence-icon {
                width: 28px;
                height: 28px;
                position: relative;
                display: inline-block;
                background-image: url(../img/essence-80x80.png);
                background-size: 100%;
                top: -3px;
            }
            .essence-text {
                text-align: center;
                font-size: 16px;
                font-weight: bold;
                color: #fedf87;
                position: relative;
                text-transform: uppercase;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                display: inline-block;
                top: -11px;
            }
        }
        &.disabled {
            cursor: not-allowed;
            filter: grayscale(100%);
        }
        .btn-text {
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            color: #504338;
            position: relative;
            top: 3px;
            text-transform: uppercase;
            display: inline-block;
            text-shadow: 0 0.5px 0.5px rgba(255, 255, 255, 0.6);
        }
        &:hover {
            box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25),
                0 0 6px rgba(0, 0, 0, 0.25);
        }
        &:not(.disabled):active {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25),
                inset 0 -2px 0 rgba(0, 0, 0, 0.25), 0 0 6px rgba(0, 0, 0, 0.25);
            .essence-text-box {
                top: 4px;
            }
            .btn-text {
                top: 4px;
            }
        }
    }

    .whale-super-sale {
        width: 270px;
        height: 465px;
        position: relative;
        .lhero-box {
            width: 250px;
            height: 444px;
            position: absolute;
            top: 10px;
            left: 10px;
            background: linear-gradient(
                180deg,
                #8e7453 0%,
                #e3c7a3 50%,
                #8f7553 70%,
                #ae916a 85%,
                #8f7553 100%
            );
            border-radius: 10px;
            box-shadow: 0 0 6px #48382b;

            .lhero-pic {
                width: 242px;
                height: 360px;
                position: absolute;
                top: 20px;
                left: 4px;

                > img {
                    width: 242px;

                    &.star-up {
                        display: none;
                    }
                }
            }

            .topname-box,
            .bottom-star-box {
                width: 250px;
                height: 44px;
                position: absolute;
                //   background: linear-gradient(
                //     180deg,
                //     #a1a4a6 0%,
                //     #d5d8da 91%,
                //     #a1a4a6 92%,
                //     #8d9092 100%
                //   );
                background: linear-gradient(
                    180deg,
                    #d4b354 0%,
                    #f3d88d 91%,
                    #c3a246 92%,
                    #b9993f 100%
                );
                border-radius: 10px 10px 0 0;
                box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4),
                    0 6px 6px rgba(0, 0, 0, 0.5);

                .sh2-icon.left {
                    width: 38px;
                    height: 49px;
                    position: absolute;
                    top: -2px;
                    left: 6px;

                    > img {
                        width: 38px;
                    }
                }

                .sh2-icon-forgirl.right {
                    width: 38px;
                    height: 49px;
                    position: absolute;
                    top: -2px;
                    left: 206px;

                    > img {
                        width: 38px;
                    }
                }

                .lhero-name-box {
                    width: 166px;
                    height: 38px;
                    position: absolute;
                    left: 42px;
                    display: table;

                    .lhero-name {
                        display: table-cell;
                        vertical-align: middle;
                        color: #fff;
                        text-shadow: 0 1px 2px #000;
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                    }
                }
            }

            .bottom-star-box {
                height: 55px;
                top: 389px;
                box-shadow: 0 2px 6px #5c5046;
                border-radius: 0 0 10px 10px;

                &.gold {
                    background: linear-gradient(
                        180deg,
                        #d4b354 0%,
                        #f3d88d 85%,
                        #c3a246 86%,
                        #b9993f 100%
                    );
                }
            }

            .big-herostar-box {
                width: 200px;
                height: 40px;
                position: absolute;
                top: -2px;
                transform: scale(0.9);
                margin-left: 26px;
                left: 0;

                .big-hero-star {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background: url(../img/big-hero-star05-bg.png);
                    background-size: 100%;

                    &:before {
                        content: "";
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        background: url(../img/big-hero-star05.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                        background-position: center;
                    }

                    &.lvl00 {
                        &:before {
                            content: "";
                            width: 0px;
                            background-repeat: no-repeat;
                            background-size: 454%;
                            background-image: url(../img/big-hero-star05.png);
                        }
                    }

                    &.lvl02 {
                        &:before {
                            content: "";
                            width: 44px;
                            background-repeat: no-repeat;
                            background-size: 454%;
                            background-image: url(../img/big-hero-star05.png);
                        }
                    }

                    &.lvl04 {
                        &:before {
                            content: "";
                            width: 82px;
                            background-repeat: no-repeat;
                            background-size: 244%;
                            background-image: url(../img/big-hero-star05.png);
                        }
                    }

                    &.lvl06 {
                        &:before {
                            content: "";
                            width: 120px;
                            background-repeat: no-repeat;
                            background-size: 167%;
                            background-image: url(../img/big-hero-star05.png);
                        }
                    }

                    &.lvl08 {
                        &:before {
                            content: "";
                            width: 156px;
                            background-repeat: no-repeat;
                            background-size: 128%;
                            background-image: url(../img/big-hero-star05.png);
                        }
                    }

                    &.lvl010 {
                        &:before {
                            content: "";
                            width: 200px;
                            background-repeat: no-repeat;
                            background-size: 100%;
                            background-image: url(../img/big-hero-star05.png);
                        }
                    }

                    &.ult {
                        &:before {
                            content: "";
                            width: 200px;
                            background-repeat: no-repeat;
                            background-size: 100%;
                            background: url(../img/big-hero-star05-purple.png);
                        }
                    }
                }
            }

            .bottom-star-box-girl-count-box {
                width: 250px;
                height: 34px;
                position: absolute;
                top: 356px;
                left: 0;
                background: linear-gradient(
                    180deg,
                    #8e7453 0%,
                    #e3c7a3 50%,
                    #8f7553 70%,
                    #ae916a 85%,
                    #8f7553 100%
                );
                box-shadow: 0 2px 0 rgba(255, 255, 255, 0.2),
                    0 -2px 0 rgba(255, 255, 255, 0.2), 0 -4px 0 #bb9b40,
                    0 -10px 6px rgba(0, 0, 0, 0.5),
                    inset 0 -0.5px 0.5px rgba(0, 0, 0, 0.2),
                    inset 0 1px 0.5px rgba(0, 0, 0, 0.2);
                .sh2-prgbar-all {
                    width: 202px;
                    height: 34px;
                    position: absolute;
                    top: 0;
                    left: 48px;
                    background: linear-gradient(0deg, #735657 0%, #453434 100%);

                    .sh2-prgbar {
                        width: 85%;
                        height: 34px;
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
                    }

                    .sh2-prgbar-text {
                        width: 202px;
                        height: 34px;
                        position: relative;
                        text-align: center;
                        color: #fff;
                        font-weight: bold;
                        font-size: 20px;
                        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
                        line-height: 34px;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                    }

                    &.gold {
                        .sh2-prgbar {
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

                .girl-bonus-box {
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: -3px;
                    left: 4px;
                    display: block;
                    background: linear-gradient(
                        180deg,
                        #c68300 0%,
                        #f4dfb6 50%,
                        #c68200 70%,
                        #fad489 85%,
                        #c78302 100%
                    );
                    border-radius: 100%;
                    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.35);

                    .girl-bonus-pic {
                        width: 34px;
                        height: 34px;
                        position: absolute;
                        top: 3px;
                        left: 3px;
                        overflow: hidden;
                        border-radius: 100%;

                        > img {
                            width: 34px;
                        }
                    }
                }
            }

            .arrow-box-all {
                width: 250px;
                height: 50px;
                position: absolute;
                top: 306px;
                left: 0;
                .btn-scroll {
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: 0px;
                    left: 10px;
                    margin-left: 0;
                    cursor: pointer;
                    background: linear-gradient(
                        180deg,
                        #fffa8b 0%,
                        #f5e38b 47%,
                        #ebce8b 100%
                    );
                    border-radius: 100%;
                    box-shadow: inset 0px -6px 0px 0px rgba(0, 0, 0, 0.25),
                        0 2px 8px 0 rgba(0, 0, 0, 0.75);
                    &:hover {
                        filter: brightness(1.1);
                    }
                    &:after {
                        content: "";
                        width: 20px;
                        height: 28px;
                        background-image: url(../img/rating-arrow.png);
                        position: absolute;
                        top: 4px;
                        margin-left: 9px;
                    }

                    &:active {
                        top: 1px;
                    }

                    &.right {
                        margin-left: 0;
                        left: 200px;
                        transform: scale(-1, 1);
                    }
                }
            }
        }
    }

    .big-herostar-box {
        &.sexped {
            position: initial;
        }
    }

    .popup-layer .m-popup.chest-quest {
        width: 700px;
        height: 480px;
        left: 250px;
        top: 75px;
        &:before {
            content: "";
            background-color: #9e8b7c;
        }
        .qhero-box {
            width: 260px;
            height: 383px;
            position: absolute;
            top: 74px;
            margin-left: 24px;
            border-radius: 10px;
            box-shadow: 0 0 6px #614d3f;
            background: linear-gradient(
                0deg,
                #cd8811 0%,
                #f4c946 50%,
                #b96f06 70%,
                #e6b131 85%,
                #d39118 100%
            );
            &:before {
                content: "";
                width: 252px;
                height: 375px;
                position: absolute;
                top: 3px;
                margin-left: -126px;
                border-radius: 8px;
                background-image: url(../img/girl-djavol-all.jpg);
                background-size: 100%;
                box-shadow: inset 0 0 6px #5a472f;
            }
        }
        .qhero-ballon-box {
            width: 380px;
            height: 130px;
            position: absolute;
            top: 74px;
            margin-left: 296px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 6px #614d3f;
            display: table;
            &:before {
                content: "";
                width: 0;
                height: 0;
                position: absolute;
                top: 40px;
                margin-left: -22px;
                border-top: 22px solid transparent;
                border-right: 22px solid #fff;
                border-bottom: 22px solid transparent;
            }
            .qhero-ballon-text {
                position: relative;
                color: #625041;
                font-size: 18px;
                font-weight: bold;
                display: table-cell;
                vertical-align: middle;
            }
        }
        .qsun-all-box {
            width: 386px;
            height: 180px;
            position: absolute;
            top: 216px;
            left: 294px;
            .qsun-box {
                width: 120px;
                height: 176px;
                position: relative;
                display: inline-block;
                background-color: green;
                margin: 0 3px 0 3px;
                box-shadow: 0 0 6px #614d3f;
                background: linear-gradient(
                    180deg,
                    #d28814 0%,
                    #f3c844 93%,
                    #d7991f 94%,
                    #ba7107 100%
                );
                border-radius: 10px;
                .chest-box-all {
                    width: 100px;
                    height: 100px;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    border-radius: 8px;
                    background-color: #877261;
                    box-shadow: inset 0 0 20px #614d3f;
                    .chest-box {
                        width: 80px;
                        height: 80px;
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        > img {
                            width: 80px;
                        }
                    }
                }
                .sh2-5 {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    top: 80px;
                    left: 82px;
                    background: linear-gradient(
                        180deg,
                        #8e7453 0%,
                        #e3c7a3 50%,
                        #8f7553 70%,
                        #ae916a 85%,
                        #8f7553 100%
                    );
                    border-radius: 100%;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                    color: #fff;
                    font-size: 20px;
                    font-weight: bold;
                    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.75);
                }
                .btn-buy.green {
                    right: 7px;
                    bottom: 20px;
                    background: linear-gradient(
                        45deg,
                        #74b32a,
                        #8ad135,
                        #74b32a,
                        #8ad135
                    );
                    box-shadow: inset 0 -3px 0px #648d34, 0 0 3px #3d3737;
                    &.disabled {
                        filter: grayscale(100%);
                    }
                    &:not(.disabled):active {
                        box-shadow: inset 0 -2px 0px #648d34,
                            inset 0 3px 3px #537729, 0 0 5px #f4db91,
                            0 0 9px #f4db91, 0 0 11px #f4db91;
                    }
                }
                .end-banner {
                    display: none;
                }
                &.block {
                    .end-banner {
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        background: rgba(222, 222, 222, 0.55);
                        border-radius: 10px;
                        p {
                            margin: 0;
                            padding: 0;
                            display: block;
                            height: 30px;
                            position: absolute;
                            left: 20px;
                            right: 20px;
                            top: calc(50% - 25px);
                            border-radius: 10px;
                            border: solid 2px #500;
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: bold;
                            color: #500;
                            box-shadow: inset 0 0 10px #500, 0 0 10px #500;
                            text-shadow: 0 0 5px #fff;
                            transform: rotate(-5deg);
                        }
                    }
                }
            }
        }
        .uhave-prg-box {
            width: 380px;
            height: 56px;
            position: absolute;
            top: 402px;
            margin-left: 296px;
            background-color: #bba798;
            border-radius: 10px;
            .prg-keys-box {
                width: 360px;
                height: 40px;
                position: absolute;
                top: 8px;
                margin-left: 10px;
                background: linear-gradient(0deg, #735657 0%, #453434 100%);
                border-radius: 20px;
                box-shadow: inset 0 0 0 2px #decec1;
                .prg-keys {
                    width: 234px;
                    height: 32px;
                    position: absolute;
                    top: 4px;
                    margin-left: 122px;
                    .prg-all {
                        width: 100%;
                        height: 32px;
                        position: relative;
                        background: linear-gradient(
                            0deg,
                            #5eb0f2 0%,
                            #4783b5 12%,
                            #66c4ff 60%,
                            #91d5ff 70%,
                            #569fdb 100%
                        );
                        border-radius: 0 20px 20px 0;
                        box-shadow: inset 0 0 0 1px #44392f;
                    }
                }
                .keys-num {
                    width: 100px;
                    height: 30px;
                    position: absolute;
                    top: 5px;
                    margin-left: 8px;
                    font-size: 20px;
                    text-align: center;
                    font-weight: bold;
                    color: #f4e2b0;
                    line-height: 30px;
                }
                .keys-pic {
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: 0px;
                    margin-left: 104px;
                    border-radius: 100%;
                    background: linear-gradient(0deg, #594c43 0%, #2b2723 100%);
                    box-shadow: 0 0 0 2px #decec1;
                    &:before {
                        content: "";
                        width: 33px;
                        height: 33px;
                        position: absolute;
                        top: 4px;
                        margin-left: -16px;
                        background-image: url(../img/ico-keys.png);
                        background-size: 100%;
                    }
                }
            }
        }
        .best-bigtimer-box {
            top: -10px;
            margin-left: -5px;
            line-height: 25px;
        }
    }

    .popup-layer .m-popup.shero-check {
        width: 1000px;
        height: 620px;
        left: 12px;
        top: 10px;
        &:before {
            content: "";
            background-color: #fef6cc;
        }
        .shero-card-box {
            width: 230px;
            height: 450px;
            position: relative;
            display: inline-block;
            top: 62px;
            border-radius: 10px;
            margin: 10px 5px 10px 5px;
            box-shadow: 0 0 10px #332821;
            background: linear-gradient(
                180deg,
                #cd8811 0%,
                #f4c946 50%,
                #b96f06 70%,
                #e6b131 85%,
                #cd8811 100%
            );
            .topname-box {
                width: 230px;
                height: 48px;
                position: absolute;
                background: linear-gradient(
                    180deg,
                    #a1a4a6 0%,
                    #d5d8da 85%,
                    #a1a4a6 86%,
                    #8d9092 100%
                );
                border-radius: 10px 10px 0 0;
                box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
                .lrare-box {
                    width: 50px;
                    height: 64px;
                    position: absolute;
                    top: -4px;
                    margin-left: 6px;
                    &.uncommon {
                        background-image: url(../img/cur-u.png);
                        background-size: 100%;
                    }
                    &.common {
                        background-image: url(../img/cur-c.png);
                        background-size: 100%;
                    }
                    &.rare {
                        background-image: url(../img/cur-r.png);
                        background-size: 100%;
                    }
                    &.epic {
                        background-image: url(../img/cur-e.png);
                        background-size: 100%;
                    }
                }
                .lhero-name-box {
                    width: 162px;
                    height: 44px;
                    position: absolute;
                    margin-left: 62px;
                    display: table;
                    .lhero-name {
                        display: table-cell;
                        vertical-align: middle;
                        color: #fff;
                        text-shadow: 0 1px 8px #000;
                        font-size: 16px;
                        font-weight: bold;
                        text-align: center;
                    }
                }
            }
            .shero-pic {
                width: 222px;
                height: 331px;
                position: absolute;
                top: 38px;
                margin-left: 4px;
                > img {
                    width: 222px;
                    height: 331px;
                }
            }
            .acpass-bonus-box {
                width: 230px;
                height: 70px;
                position: absolute;
                top: 380px;
                .acbonus-box,
                .pcbonus-box {
                    width: 115px;
                    height: 70px;
                    position: absolute;
                    background-color: #f8b428;
                    border-radius: 0 0 0 10px;
                    box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.3);
                    .acbonus-text,
                    .acbonus-num,
                    .pcbonus-text,
                    .pcbonus-num {
                        width: 80px;
                        position: relative;
                        display: inline-block;
                        font-size: 13px;
                        color: #7d4b23;
                        text-transform: uppercase;
                        font-weight: bold;
                        top: 12px;
                        line-height: 15px;
                    }
                    .acbonus-num,
                    .pcbonus-num {
                        width: 110px;
                        font-size: 16px;
                        color: #68401f;
                    }
                    .price.gold,
                    .price.shards {
                        width: 110px;
                        font-size: 16px;
                        position: relative;
                        top: 12px;
                        color: #68401f;
                        font-weight: bold;
                    }
                }
                .pcbonus-box {
                    margin-left: 115px;
                    background-color: #eba30f;
                    border-radius: 0 0 10px 0;
                }
            }
            .star-bonus-box {
                width: 222px;
                height: 40px;
                position: absolute;
                top: 346px;
                margin-left: 4px;
                background: linear-gradient(
                    180deg,
                    #a1a4a6 0%,
                    #d5d8da 85%,
                    #a1a4a6 86%,
                    #8d9092 100%
                );
                box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
                .star-num {
                    color: #553e0d;
                    font-size: 22px;
                    font-weight: bold;
                    position: relative;
                    display: inline-block;
                    top: -13px;
                    line-height: 40px;
                }
                .star-pic {
                    width: 41px;
                    height: 39px;
                    position: relative;
                    display: inline-block;
                    background-image: url(../img/star1.png);
                    background-size: 100%;
                }
            }
        }
        .sun-buy-box {
            width: 980px;
            height: 80px;
            position: absolute;
            top: 530px;
            background-color: #ffea83;
            margin-left: 10px;
            border-radius: 0 0 4px 4px;
            .essebtn-box {
                width: 174px;
                height: 70px;
                background: linear-gradient(0deg, #4b2e16 0%, #754723 100%);
                border-radius: 12px;
                position: absolute;
                top: 6px;
                margin-left: 470px;
                box-shadow: inset 0 0 4px #907654;
                .essebtn {
                    width: 148px;
                    height: 38px;
                    display: inline-block;
                    background-color: red;
                    position: relative;
                    top: 16px;
                    border-radius: 6px;
                    background: linear-gradient(
                        28deg,
                        #e9c756 0%,
                        #edd474 33%,
                        #e2c359 78%,
                        #edd474 100%
                    );
                    box-shadow: inset 0 -4px 0 #c57b21;
                    cursor: pointer;
                    .coron-icon {
                        width: 30px;
                        height: 30px;
                        position: relative;
                        display: inline-block;
                        background-color: #3c3934;
                        border-radius: 100%;
                        top: 2px;
                        &:before {
                            content: "";
                            width: 32px;
                            height: 32px;
                            background-image: url(../img/ico-real.png);
                            background-size: 100%;
                            display: block;
                            position: absolute;
                            top: -1px;
                            margin-left: -1px;
                        }
                        &.diamond {
                            &:before {
                                background-image: url(../img/80-topup.png);
                                top: 2px;
                                height: 28px;
                            }
                        }
                    }
                    .coron-price {
                        display: inline-block;
                        line-height: 45px;
                        position: relative;
                        color: #3c3b38;
                        font-size: 20px;
                        font-weight: bold;
                        top: -5px;
                    }
                    &:hover {
                        box-shadow: inset 0 -4px 0 #c57b21, 0 0 5px #e8d0b2,
                            0 0 9px #e8d0b2, 0 0 11px #e8d0b2;
                    }
                    &:active {
                        box-shadow: inset 0 0 6px #975b10,
                            inset 0 -2px 0 #975b10, 0 0 5px #e8d0b2,
                            0 0 9px #e8d0b2, 0 0 11px #e8d0b2;
                        .coron-price {
                            top: -3px;
                        }
                        .coron-icon {
                            top: 4px;
                        }
                    }
                    &.disable {
                        cursor: not-allowed;
                        filter: grayscale(100%);
                        &:hover {
                            box-shadow: inset 0 -4px 0 #c57b21;
                        }
                        &:active {
                            .coron-price {
                                top: -5px;
                            }
                            .coron-icon {
                                top: 2px;
                            }
                        }
                    }
                }
            }
            .sun-box {
                width: 90px;
                height: 90px;
                position: absolute;
                top: -5px;
                margin-left: 370px;
                background-image: url(../img/sunduk-150.png);
                background-size: 100%;
                &.open {
                    background-image: url(../img/sunduk-150-open.png);
                    background-size: 100%;
                }
            }
            .sb-num-box {
                width: 32px;
                height: 32px;
                position: absolute;
                top: 44px;
                margin-left: 370px;
                background: linear-gradient(0deg, #780000 0%, #d10000 100%);
                border-radius: 12px;
                box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25),
                    0 0 8px 0 rgba(0, 0, 0, 0.85);
                .sb-num {
                    font-size: 18px;
                    font-weight: bold;
                    color: #fff;
                    line-height: 30px;
                    text-shadow: 0 0 8px rgba(0, 0, 0, 0.85);
                }
            }
        }
    }

    .popup-layer .m-popup.action-start {
        width: 800px;
        height: 546px;
        left: 200px;
        top: 44px;
        &:before {
            content: "";
            background-color: #9e8b7d;
        }
        .ashero-box {
            width: 268px;
            height: 448px;
            position: absolute;
            top: 74px;
            margin-left: 24px;
            border-radius: 10px;
            box-shadow: 0 0 6px #614d3f;
            background: linear-gradient(
                0deg,
                #cd8811 0%,
                #f4c946 50%,
                #b96f06 70%,
                #e6b131 85%,
                #d39118 100%
            );
            &:before {
                content: "";
                width: 260px;
                height: 440px;
                position: absolute;
                top: 3px;
                margin-left: -130px;
                border-radius: 8px;
                background-image: url(../img/girl-back-bn.jpg);
                background-size: 100%;
                box-shadow: inset 0 0 6px #5a472f;
            }
        }
        .ashero-ballon-box {
            width: 470px;
            height: 100px;
            position: absolute;
            top: 74px;
            margin-left: 306px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 6px #614d3f;
            display: table;
            &:before {
                content: "";
                width: 0;
                height: 0;
                position: absolute;
                top: 28px;
                margin-left: -22px;
                border-top: 22px solid transparent;
                border-right: 22px solid #fff;
                border-bottom: 22px solid transparent;
            }
            .qhero-ballon-text {
                position: relative;
                padding: 0 10px 0 10px;
                color: #625041;
                font-size: 18px;
                font-weight: bold;
                display: table-cell;
                vertical-align: middle;
            }
        }
        .ashero-all-box {
            width: 480px;
            height: 260px;
            position: absolute;
            top: 192px;
            margin-left: 306px;
            .ashero-card {
                width: 228px;
                height: 120px;
                display: inline-block;
                position: relative;
                background-color: #fac558;
                margin: 0 10px 10px 0;
                border-radius: 10px;
                box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
                .hero-pic-box {
                    width: 100px;
                    height: 113px;
                    position: absolute;
                    top: 4px;
                    margin-left: 4px;
                    background: linear-gradient(
                        0deg,
                        #8e7453 0%,
                        #e3c7a3 50%,
                        #8f7553 70%,
                        #ae916a 85%,
                        #8e7453 100%
                    );
                    border-radius: 6px;
                    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
                    .hero-pic {
                        width: 90px;
                        height: 103px;
                        position: absolute;
                        top: 5px;
                        margin-left: 5px;
                        border-radius: 4px;
                        overflow: hidden;
                    }
                }
                .sh2-icon {
                    top: -2px;
                    left: 4px;
                }
                .ashero-bonus-box {
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    top: 0;
                    left: 108px;
                    .acbonus-box {
                        width: 120px;
                        height: 41px;
                        position: absolute;
                        .lvlbox-name {
                            width: 120px;
                            height: 18px;
                            position: absolute;
                            top: 0;
                            text-transform: uppercase;
                            color: #fff;
                            font-size: 12px;
                            font-weight: bold;
                            text-align: center;
                            line-height: 18px;
                            background-color: #eba30f;
                        }
                        .bonus-lvl-box-bonus-box {
                            width: 100%;
                            height: 42px;
                            position: absolute;
                            top: 18px;
                            display: table;
                            background-color: #f8b428;
                            .bonus-lvl-box-bonus {
                                width: 100%;
                                height: 100%;
                                display: table-cell;
                                text-align: center;
                                vertical-align: middle;
                                color: #4d3e33;
                                font-weight: bold;
                                font-size: 10px;
                                text-transform: uppercase;
                                .ff-sh2-icon {
                                    width: 17px;
                                    height: 22px;
                                    position: relative;
                                    top: 0;
                                    left: 0;
                                    display: inline-block;
                                    vertical-align: middle;
                                    margin-left: 6px;
                                    > img {
                                        width: 17px;
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
                            }
                        }
                        &.second {
                            top: 60px;
                        }
                    }
                    .bn-price {
                        width: 120px;
                        top: 2px;
                    }
                }
            }
        }
        .getmore-btn {
            width: 264px;
            display: block;
            position: absolute;
            margin-left: 408px;
            top: 472px;
            .btn-text {
                top: 14px;
            }
            &:active {
                .btn-text {
                    top: 16px;
                }
            }
        }
    }

    .popup-layer .m-popup.fullsuphero {
        width: 375px;
        height: 586px;
        left: 412px;
        top: 25px;
        &:before {
            content: "";
            background-color: #fef6cc;
        }
        .supherofull {
            > img {
                width: 333px;
                height: 495px;
            }
            width: 333px;
            height: 495px;
            position: relative;
            display: inline-block;
            top: 70px;
        }
    }

    .popup-layer .m-popup.fullsuphero2 {
        width: 720px;
        height: 580px;
        left: 152px;
        top: 30px;
        &:before {
            content: "";
            background-color: #fef6cc;
        }
        .supherofull-box {
            width: 662px;
            height: 482px;
            position: relative;
            display: inline-block;
            top: 70px;
            .supheropic-box {
                width: 302px;
                height: 482px;
                position: absolute;
                background-color: #fedf87;
                .supheropic-box-name {
                    height: 43px;
                    color: #624b2c;
                    font-weight: bold;
                    font-size: 16px;
                    text-transform: uppercase;
                    line-height: 43px;
                }
                .supheropic {
                    width: 292px;
                    height: 434px;
                    position: absolute;
                    top: 43px;
                    left: 5px;
                    > img {
                        width: 292px;
                    }
                }
                &.next {
                    left: 360px;
                }
            }
            .rarrow {
                top: 210px;
                left: 325px;
                border-left: 16px solid #624b2c;
            }
        }
    }

    .popup-layer .m-popup.essence-buy {
        width: 1000px;
        height: 472px;
        left: 100px;
        top: 75px;
        &.big {
            height: 606px;
            top: 15px;
        }
        &:before {
            content: "";
            background-color: #b7a497;
        }
        .essence-card-box {
            width: 230px;
            height: 380px;
            position: relative;
            display: inline-block;
            top: 62px;

            &.bottom {
                width: 310px;
                height: 100px;
                &:before {
                    content: "";
                    width: 300px;
                    height: 94px;
                    position: absolute;
                    top: 3px;
                    margin-left: -150px;
                    border-radius: 8px;
                    background: linear-gradient(
                        0deg,
                        #af946f,
                        #dbbf9c 31%,
                        #8f7553
                    );
                    box-shadow: inset 0 0 6px #5a472f;
                }
                .essence-but-box {
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    top: -11px;
                    margin-left: 18px;
                }
                .essence-price {
                    width: 180px;
                    height: 40px;
                    position: absolute;
                    top: 5px;
                    margin-left: 125px;
                    font-size: 16px;
                    color: #50402a;
                    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
                    font-weight: 700;
                    line-height: 40px;
                }
            }

            &.double {
                width: 460px;
                &:before {
                    width: 448px;
                    margin-left: -224px;
                }
                .essence-but-box {
                    width: 200px;
                    height: 200px;
                    top: 0px;
                    margin-left: 130px;
                }
                .essence-price,
                .essence-bonus {
                    width: 430px;
                }
                .essebtn-box {
                    margin-left: 143px;
                }
            }

            border-radius: 10px;
            margin: 10px 5px 10px 5px;
            box-shadow: 0 0 10px #332821;
            background: linear-gradient(
                0deg,
                #8e7453 0%,
                #e3c7a3 50%,
                #8f7553 70%,
                #ae916a 85%,
                #8e7453 100%
            );
            &:before {
                content: "";
                width: 224px;
                height: 374px;
                position: absolute;
                top: 3px;
                margin-left: -112px;
                border-radius: 8px;
                background: linear-gradient(
                    0deg,
                    #af946f 0%,
                    #dbbf9c 31%,
                    #8f7553 100%
                );
                box-shadow: inset 0 0 6px #5a472f;
            }
            .essence-but-box {
                width: 120px;
                height: 120px;
                position: absolute;
                top: 30px;
                margin-left: 55px;
                background-image: url(../img/ic-krasn-butil@2x.png);
                background-size: 100%;
                &.lvl2 {
                    width: 180px;
                    height: 120px;
                    background-image: url(../img/best-essence.png);
                    background-size: 100%;
                    margin-left: 30px;
                }
                &.lvl3 {
                    width: 180px;
                    height: 120px;
                    background-image: url(../img/best-essence.png);
                    background-size: 100%;
                    margin-left: 30px;
                    &:before {
                        content: "";
                        width: 120px;
                        height: 120px;
                        position: absolute;
                        top: 30px;
                        margin-left: -56px;
                        background-image: url(../img/ic-krasn-butil@2x.png);
                        background-size: 100%;
                    }
                }
                &.lvl4 {
                    width: 180px;
                    height: 120px;
                    background-image: url(../img/best-essence.png);
                    background-size: 100%;
                    margin-left: 6px;
                    &:before {
                        content: "";
                        width: 180px;
                        height: 120px;
                        position: absolute;
                        top: 30px;
                        margin-left: -50px;
                        background-image: url(../img/best-essence.png);
                        background-size: 100%;
                    }
                }
            }
            .essence-price,
            .essence-bonus {
                width: 200px;
                height: 50px;
                position: absolute;
                top: 200px;
                margin-left: 15px;
                font-size: 40px;
                color: #50402a;
                text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
                font-weight: bold;
                line-height: 50px;
            }
            .essence-bonus {
                height: 32px;
                top: 246px;
                font-size: 18px;
                color: #b51212;
                text-shadow: 0 1px 2px #fff;
                line-height: 32px;
                text-transform: uppercase;
            }
            .essebtn-box {
                width: 174px;
                height: 56px;
                background: linear-gradient(0deg, #917858 0%, #c8ac88 100%);
                border-radius: 12px;
                position: absolute;
                top: 294px;
                margin-left: 28px;
                box-shadow: inset 0 0 4px #907654;
                .essebtn {
                    width: 148px;
                    height: 38px;
                    display: inline-block;
                    background-color: red;
                    position: relative;
                    top: 9px;
                    border-radius: 6px;
                    background: linear-gradient(
                        28deg,
                        #e9c756 0%,
                        #edd474 33%,
                        #e2c359 78%,
                        #edd474 100%
                    );
                    box-shadow: inset 0 -4px 0 #c57b21;
                    cursor: pointer;
                    .coron-icon {
                        width: 30px;
                        height: 30px;
                        position: relative;
                        display: inline-block;
                        background-color: #3c3934;
                        border-radius: 100%;
                        top: 2px;
                        &:before {
                            content: "";
                            width: 32px;
                            height: 32px;
                            background-image: url(../img/ico-real.png);
                            background-size: 100%;
                            display: block;
                            position: absolute;
                            top: -1px;
                            margin-left: -1px;
                        }
                        &.diamond {
                            &:before {
                                background-image: url(../img/80-topup.png);
                                top: 2px;
                                height: 28px;
                            }
                        }
                    }
                    .coron-price {
                        display: inline-block;
                        position: relative;
                        color: #3c3b38;
                        font-size: 20px;
                        font-weight: bold;
                        top: -5px;
                    }
                    &:hover {
                        box-shadow: inset 0 -4px 0 #c57b21, 0 0 5px #e8d0b2,
                            0 0 9px #e8d0b2, 0 0 11px #e8d0b2;
                    }
                    &:active {
                        box-shadow: inset 0 0 6px #975b10,
                            inset 0 -2px 0 #975b10, 0 0 5px #e8d0b2,
                            0 0 9px #e8d0b2, 0 0 11px #e8d0b2;
                        .coron-price {
                            top: -3px;
                        }
                        .coron-icon {
                            top: 4px;
                        }
                    }
                    &.disable {
                        cursor: not-allowed;
                        filter: grayscale(100%);
                        &:hover {
                            box-shadow: inset 0 -4px 0 #c57b21;
                        }
                        &:active {
                            .coron-price {
                                top: -5px;
                            }
                            .coron-icon {
                                top: 2px;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export { stylesFileName, pageStyles };
