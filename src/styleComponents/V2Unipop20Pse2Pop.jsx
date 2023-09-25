import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .popup-layer .m-popup.unipop-pse2-pop {
        display: block;
        width: 900px;
        height: 600px;
        position: absolute;
        left: 150px;
        top: 20px;
        .color-box {
            background-image: url(../img/ts_confirm_bk-1.jpg);
            background-size: 100%;
            &:before {
                display: none;
            }
            &:after {
                display: none;
            }
        }
        .color-box-decor {
            width: 170px;
            height: 620px;
            position: absolute;
            top: -10px;
            left: -46px;
            background-image: url(../img/unipop-bg1.png);
            background-size: 100%;
            &:before {
                content: "";
                width: 168px;
                height: 86px;
                position: absolute;
                top: 540px;
                left: 190px;
                background-image: url(../img/unipop-bg2.png);
                background-size: 100%;
            }
            &:after {
                content: "";
                width: 200px;
                height: 540px;
                position: absolute;
                top: 90px;
                left: 800px;
                background-image: url(../img/unipop-bg3.png);
                background-size: 100%;
            }
        }
        .unipop-box-content-all {
            width: 850px;
            height: 500px;
            position: absolute;
            top: 74px;
            left: 24px;
            background: rgba(255, 238, 200, 0.8);
            box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.55);
            .unipop-box-left-box {
                width: 190px;
                height: 500px;
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(230, 181, 84, 0.7);
                box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.35);
                .unipop-scroll-box {
                    width: 185px;
                    height: 490px;
                    position: absolute;
                    top: 5px;
                    left: 5px;
                    font-size: 0;
                    overflow: hidden;
                    overflow-y: scroll;
                    transform: rotateY(180deg);
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
                            to left,
                            #fff,
                            #f5de80,
                            #f4b766,
                            #b26d12
                        );
                    }
                    .unipop-box {
                        width: 150px;
                        height: 80px;
                        position: relative;
                        display: inline-block;
                        margin: 2px 0 2px 0;
                        transform: rotateY(180deg);
                        top: 0;
                        left: 4px;
                        cursor: pointer;
                        border-radius: 10px;
                        background: linear-gradient(
                            180deg,
                            #8e7453 0%,
                            #e3c7a3 50%,
                            #8f7553 70%,
                            #ae916a 85%,
                            #8f7553 100%
                        );
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
                        &:before {
                            content: "";
                            width: 146px;
                            height: 76px;
                            position: absolute;
                            top: 2px;
                            left: 2px;
                            background: linear-gradient(
                                0deg,
                                #8e7453 0%,
                                #e3c7a3 100%
                            );
                            border-radius: 8px;
                        }
                        .text {
                            width: 100%;
                            height: 100%;
                            position: relative;
                            color: #fff;
                            font-size: 20px;
                        }
                        .unipop-gold-arrow {
                            width: 20px;
                            height: 62px;
                            position: absolute;
                            top: 9px;
                            left: 148px;
                            background-image: url(../img/unipop-gold-arrow.png);
                            background-size: 100%;
                            visibility: hidden;
                        }
                        .unipop-box-pic {
                            width: 140px;
                            height: 70px;
                            position: absolute;
                            top: 5px;
                            left: 5px;
                            border-radius: 6px;
                            overflow: hidden;
                            > img {
                                width: 140px;
                            }
                            div > img {
                                position: absolute;
                                width: 55px;
                                height: 55px;
                                left: 80px;
                                top: 7px;
                            }
                        }
                        &.select {
                            background: linear-gradient(
                                180deg,
                                #c68300 0%,
                                #f4dfb6 50%,
                                #c68200 70%,
                                #fad489 85%,
                                #c78302 100%
                            );
                            &:before {
                                content: "";
                                background: linear-gradient(
                                    0deg,
                                    #e9b039 0%,
                                    #fffe9a 100%
                                );
                            }
                            .unipop-gold-arrow {
                                visibility: visible;
                            }
                        }
                        &:active {
                            top: 1px;
                        }
                    }
                }
            }
            .unipop-box-right-box {
                width: 640px;
                height: 480px;
                position: absolute;
                top: 10px;
                left: 200px;
                .right-box-f {
                    width: 640px;
                    height: 480px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-image: url(../img/ts_confirm_bk-1.jpg);
                    background-size: 100%;
                    background-position-y: bottom;
                    border-radius: 10px;
                    .right-box-f-name-box {
                        width: 640px;
                        height: 50px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: linear-gradient(
                            180deg,
                            #c68300 0%,
                            #f4dfb6 50%,
                            #c68200 70%,
                            #fad489 85%,
                            #c78302 100%
                        );
                        border-radius: 10px 10px 0 0;
                        color: #3c3934;
                        font-weight: bold;
                        font-size: 26px;
                        line-height: 50px;
                        text-transform: uppercase;
                        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
                    }
                    .red-timer-box {
                        width: 110px;
                        height: 50px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-image: url(../img/timer-back-50.png);
                        background-size: 100%;
                        .time-text,
                        .time {
                            color: #fff000;
                            text-shadow: 0 1px 2px #680000;
                            font-size: 16px;
                            font-weight: bold;
                            position: relative;
                            top: 8px;
                        }
                        .time {
                            color: #fff;
                            font-size: 14px;
                            top: 5px;
                            font-weight: normal;
                        }
                    }
                    .pse2-reward-box-all {
                        width: 276px;
                        height: 276px;
                        position: absolute;
                        top: 90px;
                        left: 272px;
                        font-size: 0;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        align-content: center;
                        .pse2-reward {
                            width: 80px;
                            height: 80px;
                            position: relative;
                            display: inline-block;
                            margin: 5px;
                            border-radius: 10px;
                            box-shadow: inset 0 1px rgba(255, 255, 255, 0.6),
                                0 1px 4px 1px rgba(0, 0, 0, 0.4),
                                0 0 0 1px rgba(0, 0, 0, 0.2),
                                inset 0 0 0 2px #ff9b37;
                            background: url(../img/v2-trophy-bg.jpg), #7e6a5d;
                            background-size: 100%;
                            background-repeat: no-repeat;
                            background-blend-mode: soft-light;
                            overflow: hidden;
                            &:hover {
                                filter: brightness(1.1);
                            }
                            .pse2-pic {
                                width: 76px;
                                height: 76px;
                                position: absolute;
                                top: 2px;
                                left: 2px;
                                overflow: hidden;
                                border-radius: 8px;
                                filter: drop-shadow(
                                    0 2px 4px rgba(0, 0, 0, 0.6)
                                );
                                display: flex;
                                align-items: flex-start;
                                justify-content: center;
                                > img {
                                    width: 76px;
                                    height: auto;
                                    object-fit: cover;
                                }
                            }
                            .pse2-num {
                                width: 54px;
                                line-height: 22px;
                                position: relative;
                                top: 60px;
                                text-align: center;
                                margin: 0 auto;
                                color: #fff;
                                font-size: 14px;
                                font-weight: bold;
                                text-shadow: 0 1px 2px rgb(0, 0, 0),
                                    0 1px 4px rgba(0, 0, 0, 0.6);
                                background: linear-gradient(#805a31, #c18346);
                                border-radius: 10px 10px 0 0;
                                box-shadow: inset 0 1px 0 #dea569;
                                filter: drop-shadow(0 0 4px rgb(0, 0, 0));
                                &:before,
                                &:after {
                                    content: "";
                                    width: 8px;
                                    height: 100%;
                                    position: absolute;
                                    top: 0px;
                                    background: linear-gradient(
                                        #875c29,
                                        #d49548 94%
                                    );
                                    background: linear-gradient(
                                        #805a31,
                                        #c18346 94%
                                    );
                                    z-index: -1;
                                }
                                &:before {
                                    left: -2px;
                                    transform: skewX(-20deg);
                                    border-radius: 6.6px 0 0 0;
                                    box-shadow: inset 1px 1px 0 #dea569;
                                }
                                &:after {
                                    right: -2px;
                                    transform: skewX(20deg);
                                    border-radius: 0 6.6px 0 0;
                                    box-shadow: inset -1px 1px 0 #dea569;
                                }
                            }
                        }
                    }
                    .pse2-girl-left-box {
                        width: 170px;
                        height: 260px;
                        position: absolute;
                        top: 93px;
                        left: 100px;
                        border-radius: 10px;
                        background: linear-gradient(
                            180deg,
                            #8e7453,
                            #e3c7a3 50%,
                            #8f7553 70%,
                            #ae916a 85%,
                            #8f7553
                        );
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6),
                            inset 0 1px 1px rgba(255, 255, 255, 0.2),
                            0 0 0 1px rgba(0, 0, 0, 0.2);
                        margin: 5px 0;
                        &:before {
                            content: "NEW";
                            font-weight: bold;
                            font-size: 13px;
                            text-transform: uppercase;
                            position: absolute;
                            top: 8px;
                            right: 0;
                            color: #fffd9b;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6),
                                0 1px 4px rgba(0, 0, 0, 0.4);
                            text-align: center;
                            padding: 0 8px 0 16px;
                            line-height: 22px;
                            background: url(../img/banner-bg1.png);
                            background-size: auto 100%;
                            background-repeat: no-repeat;
                            filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.8));
                        }
                        &:hover {
                            filter: brightness(1.1);
                        }
                        .pse2-girl {
                            margin: 4px;
                            width: calc(100% - 8px);
                            height: calc(100% - 8px);
                            overflow: hidden;
                            display: flex;
                            justify-content: center;
                            align-items: flex-start;
                            border-radius: 6px;
                            > img {
                                width: auto;
                                height: 100%;
                            }
                        }
                        .info-box {
                            width: calc(100% - 8px);
                            height: 60px;
                            margin: auto;
                            position: absolute;
                            bottom: 4px;
                            left: 4px;
                            background: rgba(0, 0, 0, 0.4);
                            border-radius: 0 0 6px 6px;
                            color: #fff;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
                            .dps-extra {
                                left: 8px;
                                top: 18px;
                                width: 78px;
                                height: 26px;
                                font-size: 18px;
                                position: absolute;
                                margin-left: 26px;
                                .value {
                                    width: 66px;
                                    height: 22px;
                                    padding: 0 4px;
                                    top: 2px;
                                    right: 2px;
                                    font-size: 14px;
                                    line-height: 22px;
                                }
                                .dps-title {
                                    line-height: 20px;
                                    font-size: 15px;
                                    height: 42px;
                                    width: 34px;
                                    left: -26px;
                                    top: -9px;
                                    &:before {
                                        width: 26px;
                                        height: 20px;
                                        bottom: 4px;
                                        left: 4px;
                                        top: auto;
                                        line-height: 26px;
                                    }
                                    .icon-dps {
                                        width: 26px;
                                        height: 26px;
                                        left: 4px;
                                        top: 16px;
                                    }
                                }
                            }
                            .prize-promote-box {
                                width: 39px;
                                height: 48px;
                                position: absolute;
                                top: 8px;
                                left: unset;
                                right: 5px;
                                background-image: url(../img/wpck-promote.png);
                                background-size: 100%;
                                background-position: center;
                                background-repeat: no-repeat;
                                .prize-promote-text {
                                    top: 2px;
                                    font-size: 15px;
                                    left: -8px;
                                    color: #3a2423;
                                    font-weight: bold;
                                    text-shadow: 1px 0 2px #fff;
                                }
                            }
                        }
                    }
                    .pse2-girl-right-box {
                        width: 232px;
                        height: 430px;
                        position: absolute;
                        top: 82px;
                        right: -116px;
                        pointer-events: none;
                        .pse2-girl {
                            height: 100%;
                            > img {
                                height: 100%;
                                transform: scaleX(-1);
                            }
                        }
                        .pse2-girl-buble {
                            height: auto;
                            position: absolute;
                            right: -198px;
                            background-color: #fff;
                            border-radius: 20px;
                            border: 2px solid #000;
                            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.35);
                            color: #000;
                            font-size: 14px;
                            font-weight: bold;
                            text-transform: uppercase;
                            padding: 10px 20px;
                            width: fit-content;
                            top: 292px;
                            left: -4px;
                            transform: scale(0.9);
                            &:before,
                            &:after {
                                content: "";
                                position: absolute;
                                left: 10px;
                                top: -30px;
                                width: 18px;
                                height: 18px;
                                background-color: #fff;
                                border-radius: 20px;
                            }
                            &:before {
                                left: 26px;
                                top: -46px;
                                width: 10px;
                                height: 10px;
                            }
                        }
                        .pse2-reward-box-all {
                            width: 205px;
                            height: 180px;
                            position: absolute;
                            bottom: 5px;
                            left: 5px;
                            font-size: 0;
                            .pse2-reward {
                                width: 80px;
                                height: 80px;
                                position: relative;
                                display: inline-block;
                                background: linear-gradient(
                                    180deg,
                                    #c68300 0%,
                                    #f4dfb6 50%,
                                    #c68200 70%,
                                    #fad489 85%,
                                    #c78302 100%
                                );
                                border-radius: 6px;
                                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.55);
                                margin: 5px;
                                &:before {
                                    content: "";
                                    width: 76px;
                                    height: 76px;
                                    position: absolute;
                                    top: 2px;
                                    left: 2px;
                                    border-radius: 6px;
                                    background: linear-gradient(
                                        0deg,
                                        #e9b039 0%,
                                        #fffe9a 100%
                                    );
                                    box-shadow: inset 0 0 6px 0
                                        rgba(0, 0, 0, 0.55);
                                }
                                .pse2-pic {
                                    width: 70px;
                                    height: 70px;
                                    position: absolute;
                                    top: 5px;
                                    left: 5px;
                                }
                                .pse2-num {
                                    width: 60px;
                                    height: 20px;
                                    position: absolute;
                                    bottom: 2px;
                                    left: 10px;
                                    background: linear-gradient(
                                        0deg,
                                        #e9b039 0%,
                                        #fffe9a 100%
                                    );
                                    border-radius: 20px;
                                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.35);
                                    color: #000;
                                    font-size: 12px;
                                    font-weight: bold;
                                    text-align: center;
                                    line-height: 20px;
                                }
                            }
                        }
                    }
                    .store-button {
                        width: 180px;
                        height: 42px;
                        position: absolute;
                        text-align: center;
                        bottom: 40px;
                        top: initial;
                        left: 50%;
                        transform: translateX(-50%);
                        background: linear-gradient(
                            45deg,
                            #e8c34e,
                            #f1da7c,
                            #cfa831,
                            #fbf1d8
                        );
                        border-radius: 8px;
                        box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                            inset 0 -3px 0px #c87725, 0 0 3px #3d3737,
                            inset 0 0 3px #603806;
                        cursor: pointer;
                        text-transform: uppercase;
                        font-size: 20px;
                        font-weight: bold;
                        color: #4a3a08;
                        text-shadow: 0 1px 1px #fff;
                        line-height: 42px;
                        &:hover {
                            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2),
                                inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                                inset 0 -3px 0 #c87725, 0 0 12px #ff0,
                                0 0 5px #ffc, inset 0 0 10px #ffc,
                                inset 0 0 3px #603806;
                            filter: brightness(1.1);
                        }
                        &:active {
                            bottom: 39px;
                            top: initial;
                            line-height: 44px;
                            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2),
                                inset 0 -18px 5px rgba(200, 119, 37, 0.59),
                                inset 0 -1px 0 #c87725, 0 0 12px #ff0,
                                0 0 5px #ffc, inset 0 0 10px #ffc,
                                inset 0 0 3px #603806;
                        }
                        .but-price {
                            position: relative;
                            display: inline-block;
                            margin: 0 2px 0 2px;
                            font-size: 24px;
                            &.old {
                                color: #9f254f;
                                text-decoration: line-through;
                                font-size: 16px;
                                top: -2px;
                            }
                        }
                    }
                    .sale-banner {
                        top: 386px;
                        left: 388px;
                    }
                }
            }
        }
        &.squad-hero {
            .unipop-box-content-all {
                background: none;
                box-shadow: none;
                .unipop-box-right-box {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    .right-box-f {
                        background-image: none;
                    }
                }
            }
        }
    }
`;

export { stylesFileName, pageStyles };
