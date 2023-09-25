import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
     {
        .main.world1,
        .main.world2,
        .main.world3 {
            .popup-layer .m-popup.xmas-pop2 {
                .xmas-box-all {
                    .xmas-collect-box-all {
                        height: 120px;
                        .xmas-collect-box {
                            .prgball-box {
                                bottom: 30px;
                            }
                        }
                    }
                    .store-item-all {
                        width: 650px;
                        height: 212px;
                        position: absolute;
                        text-align: center;
                        top: 130px;
                        background-image: url(../img/shop-pod.jpg);
                        background-size: 100%;
                        background-position-y: 8px;
                        font-size: 0;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
                        &.blured {
                            filter: blur(5px);
                        }
                        .store-item-all-name {
                            width: 270px;
                            height: 34px;
                            position: absolute;
                            top: 195px;
                            left: 50%;
                            transform: translateX(-50%);
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
                        .store-item-box {
                            width: 140px;
                            height: 176px;
                            position: relative;
                            display: inline-block;
                            top: 18px;
                            border-radius: 6px;
                            background: linear-gradient(
                                180deg,
                                #8e7453 0%,
                                #e3c7a3 50%,
                                #8f7553 70%,
                                #ae916a 85%,
                                #8f7553 100%
                            );
                            margin: 0 5px;
                            box-shadow: 0 2px 6px 0 #413833;
                            z-index: 1;
                            &:before {
                                content: "";
                                width: 134px;
                                height: 170px;
                                position: absolute;
                                top: 3px;
                                margin-left: -67px;
                                border-radius: 4px;
                                background: linear-gradient(
                                    180deg,
                                    #b59b87 0%,
                                    #7f6858 100%
                                );
                                box-shadow: inset 0 0 20px 0 #50463f;
                            }
                            .color-btn.diamond {
                                width: 120px;
                                height: 40px;
                                position: absolute;
                                top: 125px;
                                left: 10px;
                                .color-btn-text {
                                    font-size: 14px;
                                    top: 5px;
                                }
                                .f-diamond {
                                    &:before {
                                        content: "";
                                        width: 30px;
                                        height: 30px;
                                        position: relative;
                                        display: inline-block;
                                        background-image: url(../img/ic-diamond.png);
                                        background-size: 100%;
                                        margin-right: 4px;
                                        margin-left: 4px;
                                        vertical-align: middle;
                                    }
                                }
                                &:active {
                                    .color-btn-text {
                                        top: 6px;
                                    }
                                }
                            }
                            .item-box {
                                width: 80px;
                                height: 80px;
                                position: absolute;
                                top: 34px;
                                left: 30px;
                                background: linear-gradient(
                                    180deg,
                                    #949699 0%,
                                    #656769 100%
                                );
                                border-radius: 8px;
                                box-shadow: inset 0 0 0 2px #cfd1d3,
                                    0 2px 4px 0 #50463f;
                                > img {
                                    width: 75px;
                                    position: absolute;
                                    top: 2px;
                                    left: 2px;
                                }
                                .store-timer-box {
                                    width: 50px;
                                    height: 50px;
                                    position: absolute;
                                    top: -2px;
                                    left: -4px;
                                    background-image: url(../img/offer-bk-sm.png);
                                    background-size: 100%;
                                    .store-timer-text {
                                        width: 44px;
                                        height: 30px;
                                        position: absolute;
                                        top: 2px;
                                        left: 2px;
                                        text-align: center;
                                        text-transform: uppercase;
                                        font-size: 14px;
                                        font-weight: bold;
                                        color: #ffcc00;
                                        text-shadow: 0 2px 2px
                                            rgba(0, 0, 0, 0.35);
                                    }
                                }
                                .rate {
                                    background-image: url(../img/ic-abil-redline.png);
                                    font-size: 18px;
                                    color: #fff;
                                    line-height: 18px;
                                    text-shadow: 0 1px 3px #2f2f2f;
                                    width: 87px;
                                    height: 22px;
                                    position: absolute;
                                    top: 50px;
                                    left: -4px;
                                    &.shards {
                                        background-image: url(../img/ic-abil-greenline.png);
                                    }
                                }
                            }

                            .i-ico {
                                width: 26px;
                                height: 26px;
                                position: absolute;
                                top: 26px;
                                margin-left: 111px;
                                background-image: url(../img/i-ico.png);
                                background-size: 100%;
                            }
                            .store-name {
                                width: 140px;
                                height: 24px;
                                position: absolute;
                                top: 0px;
                                margin-left: 0px;
                                line-height: 24px;
                                background: linear-gradient(
                                    180deg,
                                    #8e7453 0%,
                                    #e3c7a3 50%,
                                    #8f7553 70%,
                                    #ae916a 85%,
                                    #8f7553 100%
                                );
                                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.35);
                                border-radius: 8px 8px 0 0;
                                text-shadow: 0 0 4px #fff;
                                text-align: center;
                                text-transform: uppercase;
                                font-size: 12px;
                                font-weight: bold;
                                color: #3b291b;
                            }
                        }
                    }
                }
                .xmas-btn-box {
                    .color-btn {
                        .color-btn-text {
                            flex-direction: row;
                            &:before {
                                content: "";
                                width: 20px;
                                height: 20px;
                                background: url(../img/darkworld-back-arrow.png);
                                background-size: 100%;
                                background-position: center;
                                background-repeat: no-repeat;
                                margin-left: 10px;
                                transform: translateX(-10px);
                                filter: drop-shadow(
                                    0 2px 2px rgba(0, 0, 0, 0.2)
                                );
                            }
                        }
                    }
                }
            }
        }
    }
`;

export { stylesFileName, pageStyles };
