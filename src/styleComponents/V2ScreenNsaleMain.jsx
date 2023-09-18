import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenNsaleMainStyles = css`
    .popup-layer .mn-popup.nsale-main {
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
            .nsale-main-left-box {
                width: 160px;
                height: 340px;
                position: absolute;
                top: 0;
                left: 0;
                background: linear-gradient(0deg, #7cbc30 0%, #bbee7f 100%);
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                .nsale-gift-box {
                    width: 140px;
                    height: 140px;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: linear-gradient(
                        0deg,
                        #fff091 0%,
                        #ffbe27 50%,
                        #fff091 100%
                    );
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    border-radius: 10px;
                    .nsale-gift-box-pic {
                        width: 120px;
                        height: 120px;
                        position: absolute;
                        top: 10px;
                        left: 10px;
                    }
                }
                .color-btn {
                    width: 140px;
                    top: 160px;
                    .color-btn-text {
                        font-size: 14px;
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
                        background: linear-gradient(
                            0deg,
                            #e9b039 0%,
                            #fffe9a 100%
                        );
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
                            background: linear-gradient(
                                0deg,
                                #7cbc30 0%,
                                #bbee7f 100%
                            );
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
            }
            .nsale-main-r-top-box {
                width: 565px;
                height: 176px;
                position: absolute;
                top: 0;
                right: 0;
                font-size: 0;
                background-color: #cbaa81;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                .nsale-main-r-top-text1 {
                    width: 465px;
                    height: auto;
                    position: relative;
                    display: inline-block;
                    margin-top: 10px;
                    margin-bottom: 5px;
                    color: #544746;
                    font-size: 60px;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                .nsale-main-r-top-text2 {
                    width: 465px;
                    height: auto;
                    position: relative;
                    display: inline-block;
                    color: #fff;
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                }
            }
            .nsale-main-r-bottom-box {
                width: 500px;
                height: 154px;
                position: absolute;
                bottom: 0;
                right: 0;
                .nsale-main-r-bottom-posrew {
                    width: 500px;
                    height: 28px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: #f3d6b0;
                    border-radius: 8px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    color: #544746;
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                    line-height: 28px;
                }
                .nsale-pr-box-all {
                    width: 510px;
                    height: 106px;
                    position: absolute;
                    bottom: 8px;
                    left: -5px;
                    font-size: 0;
                    .nsale-pr-box {
                        top: 0;
                        margin: 0 2px;
                    }
                }
            }
            .nsale-plus {
                width: 40px;
                height: 40px;
                position: absolute;
                top: 245px;
                left: 177px;
                background-image: url(../img/v2-nsale-plus.png);
                background-size: 100%;
                background-repeat: no-repeat;
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

const V2ScreenNsaleMain = styled.div`
    ${V2ScreenNsaleMainStyles}
`;

export { V2ScreenNsaleMainStyles, V2ScreenNsaleMain };
