import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenNsaleStupenStyles = css`
    .popup-layer .mn-popup.nsale-stupen {
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
            background: url(../img/v2-nsale-bg-stupen.jpg);
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
            .nm-pop-stupen-buble-box {
                width: 124px;
                height: 150px;
                position: absolute;
                .nm-pop-stupen-buble {
                    width: 124px;
                    height: 124px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-image: url(../img/v2-nsale-ball.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    img {
                        width: 100px;
                        position: absolute;
                        top: 12px;
                        left: 12px;
                    }
                    cursor: pointer;
                }
                &.one {
                    left: 50px;
                    bottom: 20px;
                }
                &.two {
                    left: 177px;
                    top: 20px;
                }
                &.three {
                    left: 304px;
                    bottom: 20px;
                }
                &.four {
                    right: 177px;
                    top: 20px;
                }
                &.five {
                    right: 50px;
                    bottom: 20px;
                }
                .nm-pop-stupen-name {
                    width: 96px;
                    height: 24px;
                    position: absolute;
                    bottom: 0;
                    left: 14px;
                    background: linear-gradient(0deg, #7cbc30 0%, #bbee7f 100%);
                    border-radius: 6px;
                    color: #fff;
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    line-height: 24px;
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

const V2ScreenNsaleStupen = styled.div`
    ${V2ScreenNsaleStupenStyles}
`;

export { V2ScreenNsaleStupenStyles, V2ScreenNsaleStupen };
