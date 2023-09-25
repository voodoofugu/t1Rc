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
                &.wide.rating {
                    width: 1106px;
                    &:before {
                        content: "";
                        width: 1102px;
                    }
                    .heroes-list-all-box {
                        width: 522px;
                        .rating-topbtn-box {
                            width: 500px;
                            height: 80px;
                            position: absolute;
                            top: 10px;
                            left: 10px;
                            .rating-timer-box {
                                width: 150px;
                                height: 40px;
                                position: absolute;
                                left: 10px;
                                top: 20px;
                                background: linear-gradient(
                                    0deg,
                                    #9c0000 0%,
                                    #ff0000 100%
                                );
                                border-radius: 6px;
                                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.45);
                                .btn-text1 {
                                    display: none;
                                    width: 136px;
                                    text-align: center;
                                    font-size: 16px;
                                    font-weight: bold;
                                    color: #fff;
                                    position: relative;
                                    text-transform: uppercase;
                                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                                    top: 8px;
                                }
                                .rating-timer,
                                .rating-timer-text {
                                    width: 100%;
                                    height: 16px;
                                    position: absolute;
                                    top: 6px;
                                    text-align: center;
                                    font-size: 16px;
                                    text-transform: uppercase;
                                    color: #fff000;
                                    top: 4px;
                                    font-weight: bold;
                                    line-height: 16px;
                                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.45);
                                }
                                .rating-timer-text {
                                    height: 16px;
                                    top: 22px;
                                    font-size: 12px;
                                    text-transform: uppercase;
                                    color: #fff;
                                    line-height: 16px;
                                }
                                &.time-up {
                                    cursor: pointer;
                                    .btn-text1 {
                                        display: block;
                                    }
                                    .rating-timer,
                                    .rating-timer-text {
                                        display: none;
                                    }
                                }
                            }
                        }
                        .color-btn {
                            width: 150px;
                            position: absolute;
                            top: 20px;
                            right: 10px;
                        }
                    }
                    .all-heroes-box {
                        height: 396px;
                        .container-top {
                            width: 480px;
                            height: 375px;
                            position: absolute;
                            top: 10px;
                            left: 10px;
                            .rating-ped-box {
                                width: 480px;
                                height: 144px;
                                position: absolute;
                                top: 0;
                                left: 0;
                                .rating-ped-box-num {
                                    width: 114px;
                                    height: 24px;
                                    position: absolute;
                                    bottom: 0px;
                                    background: linear-gradient(
                                        180deg,
                                        #6d5e52 0%,
                                        #493d34 100%
                                    );
                                    .ped-box-num-text {
                                        width: 100%;
                                        height: 24px;
                                        color: #fff;
                                        line-height: 24px;
                                        font-size: 14px;
                                        text-align: center;
                                        text-shadow: 0 2px 4px
                                            rgba(0, 0, 0, 0.75);
                                        &.var2,
                                        &.var4 {
                                            background: linear-gradient(
                                                180deg,
                                                #4f4339 0%,
                                                #352c25 100%
                                            );
                                        }
                                    }
                                }
                                .ped-box {
                                    width: 114px;
                                    height: 144px;
                                    position: absolute;
                                    bottom: 0px;
                                    background-color: #786659;
                                    &.active {
                                        .ped-box-portrait {
                                            display: block;
                                        }
                                    }
                                    .ped-box-portrait {
                                        width: 66px;
                                        height: 66px;
                                        background-image: url(../img/gild-icon-66.png);
                                        position: absolute;
                                        margin-left: 22px;
                                        bottom: 62px;
                                        display: none;
                                    }
                                    .ped-box-prize {
                                        width: 100px;
                                        height: 100px;
                                        position: absolute;
                                        top: 8px;
                                        left: 7px;
                                        background-size: 100%;
                                        &.noreward {
                                            width: 100%;
                                            height: 100%;
                                            background-color: red;
                                            color: #fff;
                                            font-size: 18px;
                                        }
                                    }
                                    .ped-box-noreward {
                                        width: 114px;
                                        height: 60px;
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        color: #fff;
                                        font-size: 12px;
                                        font-weight: bold;
                                        text-align: center;
                                        text-transform: uppercase;
                                        line-height: 60px;
                                        text-shadow: 0 1px 2px
                                            rgba(0, 0, 0, 0.35);
                                    }
                                    &.rate1 {
                                        height: 84px;
                                        .ped-box-prize {
                                            width: 60px;
                                            height: 60px;
                                            left: 27px;
                                            top: 2px;
                                            background-image: url(../img/rating-sign-bronze@1x.png);
                                        }
                                    }
                                    &.rate2 {
                                        height: 104px;
                                        left: 122px;
                                        background-color: #67564a;
                                        .ped-box-prize {
                                            width: 70px;
                                            height: 70px;
                                            left: 22px;
                                            background-image: url(../img/icon-sunduk-200-1.png);
                                        }
                                    }
                                    &.rate3 {
                                        height: 124px;
                                        left: 244px;
                                        .ped-box-prize {
                                            width: 90px;
                                            height: 90px;
                                            left: 12px;
                                            background-image: url(../img/icon-sunduk-200-2.png);
                                        }
                                    }
                                    &.rate4 {
                                        height: 144px;
                                        left: 366px;
                                        background-color: #67564a;
                                        .ped-box-prize {
                                            background-image: url(../img/icon-sunduk-200-3.png);
                                        }
                                    }
                                }
                            }
                            .rating-scroll-name-box {
                                width: 470px;
                                height: 24px;
                                position: absolute;
                                top: 152px;
                                left: 0;
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
                                        width: 220px;
                                        left: 100px;
                                        background: linear-gradient(
                                            180deg,
                                            #4f4339 0%,
                                            #352c25 100%
                                        );
                                    }
                                    &.var3 {
                                        width: 150px;
                                        left: 320px;
                                    }
                                }
                            }
                            .rating-scroll-box {
                                width: 480px;
                                height: 200px;
                                position: absolute;
                                top: 176px;
                                left: 0;
                                .rating-scroll {
                                    display: block;
                                    position: absolute;
                                    left: 0px;
                                    top: 0px;
                                    bottom: 0px;
                                    right: 0px;
                                    overflow-y: scroll;
                                    padding-top: 5px;
                                    padding-bottom: 10px;
                                    &::-webkit-scrollbar-track {
                                        -webkit-box-shadow: inset 0 0 6px
                                            rgba(0, 0, 0, 0.5);
                                        border-radius: 10px;
                                        background-color: #7c665c;
                                    }
                                    &::-webkit-scrollbar {
                                        width: 10px;
                                    }
                                    &::-webkit-scrollbar-thumb {
                                        border-radius: 10px;
                                        -webkit-box-shadow: inset 0 0 3px
                                            #796b60;
                                        background: linear-gradient(
                                            to right,
                                            #fff,
                                            #f5de80,
                                            #f4b766,
                                            #b26d12
                                        );
                                    }
                                    .rating-card {
                                        width: 100%;
                                        height: 30px;
                                        background-color: #786659;
                                        color: #fff;
                                        text-shadow: 0 2px 4px
                                            rgba(0, 0, 0, 0.75);
                                        font-size: 16px;
                                        line-height: 30px;
                                        text-align: center;
                                        .number,
                                        .name,
                                        .points {
                                            width: 100px;
                                            height: 30px;
                                            position: absolute;
                                        }
                                        .name {
                                            width: 210px;
                                            background-color: #857163;
                                            margin-left: 100px;
                                            text-align: left;
                                            padding-left: 10px;
                                        }
                                        .points {
                                            width: 118px;
                                            margin-left: 320px;
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
                                        text-shadow: 0 2px 6px
                                            rgba(255, 255, 255, 0.75);
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
                                                    background-image: url(../img/diamond@1x.png);
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
                                                    background-image: url(../img/diamond@1x.png);
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
                    .btn-close-x {
                        display: block;
                    }
                    .rating-right-box {
                        width: 575px;
                        height: 505px;
                        position: absolute;
                        top: 5px;
                        right: 9px;
                        background-color: #b7a597;
                        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.35);
                    }
                }
            }
        }
    }

    .color-btn {
        width: 90px;
        height: 40px;
        position: relative;
        display: inline-block;
        border-radius: 6px;
        background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
        box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25),
            0 2px 4px 0 rgba(0, 0, 0, 0.55);
        cursor: pointer;
        .color-btn-text {
            top: 10px;
            position: relative;
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 14px;
        }
        &:active {
            box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                inset 0 2px 2px rgba(0, 0, 0, 0.2);
            .color-btn-text {
                top: 12px;
            }
        }
        &.blue {
            background: linear-gradient(0deg, #62a3e5 0%, #b4d7fa 100%);
        }
        &.green {
            background: linear-gradient(0deg, #7cbc30 0%, #baf279 100%);
        }
        &.orage {
            background: linear-gradient(0deg, #d67503 0%, #fdd2a0 100%);
        }
    }

    .btn-close-x {
        width: 30px;
        height: 30px;
        position: absolute;
        top: -6px;
        right: -6px;
        display: none;
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

    .ped-box-portrait {
        width: 66px;
        height: 66px;
        background-image: url(../img/gild-icon-66.png);
        position: absolute;
        &.place0 {
            display: none;
        }
        &.place1,
        &.place2,
        &.place3,
        &.place4 {
            bottom: 86px;
            left: 24px;
            transition-duration: 1s;
            transition-delay: 0.5s;
        }
        &.place2 {
            left: 146px;
        }
        &.place3 {
            left: 270px;
        }
        &.place4 {
            left: 392px;
        }
        .you-box {
            color: white;
            text-align: center;
            top: 50px;
            position: relative;
            width: 66px;
            height: 24px;
            line-height: 24px;
            font-size: 14px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
            text-transform: uppercase;
            border-radius: 30px;
            background-color: #857b65;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.65);
        }
    }
`;

export { stylesFileName, pageStyles };
