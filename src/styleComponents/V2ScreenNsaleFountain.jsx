import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenNsaleFountainStyles = css`
    .popup-layer .mn-popup.nsale-fountain {
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
            background: url(../img/v2-nsale-bg-fountain.jpg);
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
            .nm-pop-fon-rew-pop {
                width: 300px;
                height: 70px;
                position: absolute;
                top: 5px;
                left: 216px;
                background-color: rgba(0, 0, 0, 0.65);
                border-radius: 12px;
                .nsale-pr-box {
                    width: 60px;
                    height: 60px;
                    top: 5px;
                    left: 5px;
                    position: absolute;
                    .nsale-pr-box-pic-box {
                        width: 60px;
                        height: 60px;
                        &::before {
                            content: "";
                            width: 56px;
                            height: 56px;
                        }
                        .nsale-pr-box-pic {
                            width: 50px;
                            height: 50px;
                            position: absolute;
                            top: 5px;
                            left: 5px;
                            img {
                                width: 50px;
                            }
                        }
                        .nsale-pr-box-count {
                            height: 16px;
                            font-size: 14px;
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
                .nm-pop-fon-rew-pop-text {
                    width: 225px;
                    height: 70px;
                    position: absolute;
                    top: 0;
                    right: 5px;
                    line-height: 70px;
                    color: #fff;
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                }
            }
            .nm-pop-fon-coin-box {
                width: 90px;
                height: 104px;
                position: absolute;
                top: 70px;
                left: 46px;
                .nm-pop-fon-coin {
                    width: 90px;
                    height: 90px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.35);
                    border-radius: 100%;
                    img {
                        width: 80px;
                        height: 80px;
                        position: absolute;
                        top: 5px;
                        left: 5px;
                    }
                    cursor: pointer;
                }
                .nm-pop-fon-coin-count {
                    width: 40px;
                    height: 20px;
                    position: absolute;
                    bottom: 0;
                    left: 25px;
                    border-radius: 10px;
                    background: linear-gradient(0deg, #7cbc30 0%, #bbee7f 100%);
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                    text-transform: uppercase;
                    line-height: 20px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                }
                &.silver {
                    left: 596px;
                }
            }
            .nm-pop-fon-rew-box-all {
                width: 710px;
                height: 120px;
                position: absolute;
                bottom: 10px;
                left: 11px;
                background: linear-gradient(0deg, #9a9d9e 0%, #e2e6e7 100%);
                font-size: 0;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                .nm-pop-fon-rew-box-line {
                    width: 600px;
                    height: 8px;
                    position: absolute;
                    top: 46px;
                    left: 55px;
                    background-color: #8a8d8e;
                }
                .nsale-pr-box {
                    top: 10px;
                    margin: 0 15px;
                    .nm-pop-fon-rew-box-count {
                        width: 50px;
                        height: auto;
                        position: absolute;
                        top: 84px;
                        left: 15px;
                        color: #fff;
                        font-size: 18px;
                        font-weight: bold;
                        text-transform: uppercase;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    }
                    .nm-pop-fon-rew-box-check {
                        width: 60px;
                        height: 60px;
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        display: none;
                        background-image: url(../img/paycheck.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                    }
                    &.check {
                        .nm-pop-fon-rew-box-check {
                            display: block;
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

const V2ScreenNsaleFountain = styled.div`
    ${V2ScreenNsaleFountainStyles}
`;

export { V2ScreenNsaleFountainStyles, V2ScreenNsaleFountain };
