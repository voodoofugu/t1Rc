import { styled, css } from "styled-components";

const V2ScreenNsaleShopStyles = css`
    .popup-layer .mn-popup.nsale-shop {
        width: 988px;
        height: 605px;
        position: absolute;
        left: 106px;
        top: 17px;
        .mn-pop-bg-all {
            width: 760px;
            height: 360px;
            position: absolute;
            top: 110px;
            left: 115px;
            background: linear-gradient(
                136deg,
                #8e7453 0%,
                #e3c7a3 50%,
                #ae916a 85%,
                #8f7553 100%
            );
            .mn-pop-bg {
                width: 988px;
                height: 605px;
                position: absolute;
                top: -110px;
                left: -115px;
                background-image: url(../img/v2-nsale-bg.png);
                background-size: 100%;
                background-repeat: no-repeat;
            }
        }
        .mn-pop-timer {
            width: 200px;
            height: 24px;
            position: absolute;
            top: 33px;
            left: 394px;
            font-size: 0;
            background: linear-gradient(0deg, #a00000 0%, #ff0000 100%);
            border-radius: 20px;
            .mn-pop-timer-text,
            .mn-pop-timer-time {
                width: auto;
                height: auto;
                position: relative;
                display: inline-block;
                margin: 0 2px;
                color: #ffe600;
                font-size: 16px;
                font-weight: bold;
                text-transform: uppercase;
                line-height: 24px;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
            }
            .mn-pop-timer-time {
                color: #fff;
            }
        }
        .mn-pop-title {
            width: 420px;
            height: 30px;
            position: absolute;
            top: 66px;
            left: 284px;
            color: #cbaa81;
            font-size: 18px;
            font-weight: bold;
            text-transform: uppercase;
            line-height: 30px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
        }
        .mn-pop-menu-box {
            width: 600px;
            height: 86px;
            position: absolute;
            bottom: 18px;
            left: 194px;
            font-size: 0;
            .mn-pop-menu {
                width: 118px;
                height: 90px;
                position: relative;
                display: inline-block;
                margin: 0 10px;
                background-image: url(../img/shop-menu1.png);
                background-size: 100%;
                background-repeat: no-repeat;
                cursor: pointer;
                &:active {
                    top: 1px;
                }
                .mn-pop-menu-pic {
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    top: 3px;
                    left: 29px;
                    img {
                        width: 60px;
                    }
                }
                .mn-pop-menu-text {
                    width: 100px;
                    height: 16px;
                    position: absolute;
                    bottom: 11px;
                    left: 9px;
                    color: #544746;
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                    line-height: 16px;
                }
                &.active {
                    background-image: url(../img/shop-menu2.png);
                }
            }
        }
        .mn-pop-btn-close-x {
            width: 56px;
            height: 56px;
            position: absolute;
            top: 46px;
            right: 28px;
            background-image: url(../img/v2-nsale-bg-btnclose.png);
            background-size: 100%;
            background-repeat: no-repeat;
            cursor: pointer;
        }
        .nm-pop-content {
            width: 732px;
            height: 340px;
            position: absolute;
            top: 120px;
            left: 128px;
            .nm-pop-offer-scroll-box {
                width: 722px;
                height: 330px;
                position: absolute;
                top: 5px;
                left: 5px;
                .nm-pop-offer-scroll {
                    width: 712px;
                    height: 310px;
                    position: absolute;
                    top: 5px;
                    left: 5px;
                    overflow: hidden;
                    overflow-y: scroll;
                    font-size: 0;
                    &::-webkit-scrollbar-track {
                        background-color: #524544;
                    }
                    &::-webkit-scrollbar {
                        width: 8px;
                    }
                    &::-webkit-scrollbar-thumb {
                        background: linear-gradient(
                            0deg,
                            #ffe199 0%,
                            #f4c657 18%,
                            #ffe199 60%,
                            #f4c557 85%,
                            #ffe199 100%
                        );
                    }
                    .nm-pop-offer-box-all {
                        width: 650px;
                        height: 100px;
                        position: relative;
                        display: inline-block;
                        background-color: #f3d6b0;
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                        margin: 5px 0;
                        .n-sale-box {
                            width: 400px;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            left: 10px;
                            .nsale-pr-box {
                                top: 10px;
                                margin: 0 10px;
                                .nsale-pr-box-count {
                                    font-size: 12px;
                                    line-height: 20px;
                                }
                            }
                        }
                    }
                    .nm-pop-offer-limit-text {
                        width: 170px;
                        height: 24px;
                        position: absolute;
                        top: 10px;
                        right: 35px;
                        color: #544746;
                        font-size: 20px;
                        font-weight: bold;
                        text-transform: uppercase;
                        line-height: 24px;
                    }
                    .store-button {
                        width: 170px;
                        height: 42px;
                        position: absolute;
                        text-align: center;
                        bottom: 15px;
                        right: 35px;
                        background: linear-gradient(
                            45deg,
                            #e8c34e,
                            #f1da7c,
                            #cfa831,
                            #fbf1d8
                        );
                        border-radius: 8px;
                        box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                            inset 0 -3px 0px #c87725, 0 1px 3px #3d3737,
                            inset 0 0 3px #603806;
                        cursor: pointer;
                        text-transform: uppercase;
                        font-size: 20px;
                        font-weight: bold;
                        color: #4a3a08;
                        text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
                        line-height: 42px;
                        margin: auto;
                        &:active {
                            bottom: 14px;
                        }
                        &:hover {
                            box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                                inset 0 -3px 0 #c87725, 0 0 12px #ff0,
                                0 0 5px #ffc, inset 0 0 10px #ffc,
                                inset 0 0 3px #603806;
                        }
                        .but-price {
                            position: relative;
                            display: inline-block;
                            margin: 0 2px 0 2px;
                            font-size: 24px;
                        }
                    }
                }
            }
        }
    }

    .color-btn {
        width: 90px;
        height: 50px;
        position: relative;
        display: inline-block;
        border-radius: 6px;
        background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
        box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25),
            0 2px 4px 0 rgba(0, 0, 0, 0.55);
        cursor: pointer;
        .color-btn-text {
            top: 15px;
            position: relative;
            color: #fff;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 16px;
        }
        &:active {
            box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                inset 0 2px 2px rgba(0, 0, 0, 0.2);
            .color-btn-text {
                top: 16px;
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

    .nsale-pr-box {
        width: 80px;
        height: 106px;
        position: relative;
        display: inline-block;
        top: 175px;
        .nsale-pr-box-pic-box {
            width: 80px;
            height: 80px;
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
            border-radius: 10px;
            &::before {
                content: "";
                width: 76px;
                height: 76px;
                position: absolute;
                top: 2px;
                left: 2px;
                border-radius: 8px;
                background: linear-gradient(
                    0deg,
                    #ffe199 0%,
                    #f4c657 18%,
                    #ffe199 60%,
                    #f4c557 85%,
                    #ffe199 100%
                );
            }
            .nsale-pr-box-pic {
                width: 60px;
                height: 60px;
                position: absolute;
                top: 10px;
                left: 10px;
                img {
                    width: 60px;
                }
            }
            .nsale-pr-box-count {
                width: 46px;
                height: 20px;
                position: absolute;
                bottom: 0;
                right: 0;
                background: linear-gradient(0deg, #7cbc30 0%, #bbee7f 100%);
                border-radius: 8px;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                color: #fff;
                font-size: 16px;
                font-weight: bold;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
            }
        }
        .nsale-pr-box-text {
            width: 100%;
            height: 20px;
            position: absolute;
            bottom: 0;
            left: 0;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
        }
    }
`;

const V2ScreenNsaleShop = styled.div`
    ${V2ScreenNsaleShopStyles}
`;

export { V2ScreenNsaleShopStyles, V2ScreenNsaleShop };
