import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenMineStyles = css`
    body .main {
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
                        img {
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
                    &:before {
                        content: "";
                        width: 1102px;
                    }
                    .tab-panel-box.mine {
                        width: 1098px;
                        height: 511px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: #b7a597;
                        border: solid 4px #9c8b7c;
                        border-top: none;
                        box-shadow: inset 0 0 7px #5f4f4e;
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
                        .leftside-box-all {
                            width: 516px;
                            height: 462px;
                            position: absolute;
                            top: 39px;
                            left: 10px;
                            border-radius: 10px;
                            overflow: hidden;
                            background: rgba(0, 0, 0, 0.14);
                            box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2),
                                inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                            .guildhall-leftside-title-box {
                                width: 100%;
                                height: 36px;
                                position: absolute;
                                top: 0;
                                left: 0;
                                background: linear-gradient(
                                    0deg,
                                    #584a49 0%,
                                    #897165 100%
                                );
                                border-radius: 10px 10px 0 0;
                                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                                    inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                                .guildhall-leftside-title-name {
                                    width: 100%;
                                    height: 36px;
                                    position: relative;
                                    top: 0;
                                    left: 0;
                                    text-align: center;
                                    color: #fff;
                                    font-weight: bold;
                                    font-size: 18px;
                                    line-height: 36px;
                                    span {
                                        color: #ffd33c;
                                        margin-left: 10px;
                                    }
                                }
                            }
                            .guildhall-leftside-building {
                                width: 100%;
                                height: 290px;
                                position: absolute;
                                top: 36px;
                                left: 0;
                                background-image: url(../img/v2-guild-building-bg.png);
                                background-size: 90%;
                                background-repeat: no-repeat;
                                background-position: center;
                                .guildhall-building-pic-mine {
                                    width: 224px;
                                    height: 194px;
                                    position: absolute;
                                    top: 44px;
                                    left: 50%;
                                    transform: translateX(-50%);
                                    background-image: url(../img/v2-guildmap-mine-b.png);
                                    background-size: contain;
                                    background-repeat: no-repeat;
                                    background-position: center;
                                }
                            }
                            .guildhall-lvlup-box {
                                width: 180px;
                                height: 130px;
                                position: absolute;
                                bottom: 6px;
                                left: 6px;
                                .guildhall-lvlup-count-box {
                                    width: 180px;
                                    height: 36px;
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
                                    border-radius: 10px;
                                    box-shadow: inset 0 1px 1px
                                            rgba(255, 255, 255, 0.2),
                                        0 1px 2px rgba(0, 0, 0, 0.35),
                                        0 0 0 1px rgba(0, 0, 0, 0.1);
                                    .guildhall-lvlup-count {
                                        width: 130px;
                                        height: 28px;
                                        position: absolute;
                                        top: 4px;
                                        right: 4px;
                                        background: linear-gradient(
                                            180deg,
                                            #584a49 0%,
                                            #897165 100%
                                        );
                                        border-radius: 6px;
                                        box-shadow: inset 0 1px 4px
                                            rgba(0, 0, 0, 0.35);
                                        color: #fff;
                                        font-size: 18px;
                                        font-weight: bold;
                                        text-align: center;
                                        line-height: 28px;
                                    }
                                    &:after {
                                        content: "";
                                        width: 40px;
                                        height: 40px;
                                        position: absolute;
                                        top: -1px;
                                        left: 2px;
                                        background-image: url(../img/trophy-bonus-gems.png);
                                        background-size: 100%;
                                        background-repeat: no-repeat;
                                    }
                                    &.two {
                                        top: 39px;
                                        &:after {
                                            content: "";
                                            background-image: url(../img/trophy-bonus-mithril.png);
                                        }
                                    }
                                }
                                .color-btn.green {
                                    width: 180px;
                                    height: 50px;
                                    position: absolute;
                                    top: 80px;
                                    left: 0;
                                    .color-btn-text {
                                        font-size: 18px;
                                        top: 12px;
                                    }
                                    &:active {
                                        .color-btn-text {
                                            top: 13px;
                                        }
                                    }
                                }
                            }
                            .guildhall-nownext-box {
                                width: 140px;
                                height: 130px;
                                position: absolute;
                                bottom: 5px;
                                left: 195px;
                                background-color: #887668;
                                border-radius: 6px;
                                overflow: hidden;
                                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2),
                                    inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                                .guildhall-nownext-name {
                                    width: 100%;
                                    height: 30px;
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    background-color: #705d4e;
                                    color: #fff;
                                    font-size: 11px;
                                    font-weight: bold;
                                    text-align: center;
                                    line-height: 30px;
                                    text-transform: uppercase;
                                    border-radius: 6px 6px 0 0;
                                    box-shadow: 0 1px 1px
                                            rgba(255, 255, 255, 0.1),
                                        inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                                }
                                .guildhall-nownext-pic {
                                    width: 60px;
                                    height: 60px;
                                    position: absolute;
                                    top: 36px;
                                    left: 40px;
                                    img {
                                        width: 60px;
                                    }
                                }
                                .guildhall-nownext-count {
                                    width: 100%;
                                    height: auto;
                                    position: absolute;
                                    top: 102px;
                                    left: 0;
                                    color: #fff;
                                    font-size: 16px;
                                    font-weight: bold;
                                    text-align: center;
                                }
                                &.next {
                                    left: 370px;
                                }
                            }
                            .str-right {
                                width: 0;
                                height: 0;
                                position: absolute;
                                bottom: 30px;
                                left: 343px;
                                border-top: 30px solid transparent;
                                border-right: 0px;
                                border-left: 20px solid #fae192;
                                border-bottom: 30px solid transparent;
                                filter: drop-shadow(
                                    0 1px 1px rgba(0, 0, 0, 0.4)
                                );
                            }
                        }
                        .mine-rightside-box-all {
                            width: 550px;
                            height: 462px;
                            position: absolute;
                            top: 39px;
                            right: 10px;
                            .mine-prg-box-all {
                                width: 550px;
                                height: 50px;
                                position: absolute;
                                top: 0;
                                left: 0;
                                background-color: #8f7c6e;
                                border-radius: 10px;
                                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2),
                                    inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                                .mine-prgbar-all {
                                    width: 402px;
                                    height: 38px;
                                    position: absolute;
                                    top: 6px;
                                    left: 6px;
                                    background: linear-gradient(
                                        180deg,
                                        #3b302f 0%,
                                        #584a49 100%
                                    );
                                    overflow: hidden;
                                    border-radius: 6px;
                                    box-shadow: 0 0 0 1px #3b302f,
                                        0 1px 2px 1px rgba(255, 255, 255, 0.2);
                                    .mine-prgbar {
                                        width: 25%;
                                        height: 38px;
                                        position: absolute;
                                        top: 0px;
                                        left: 0px;
                                        background: linear-gradient(
                                            0deg,
                                            #8cdd55 0%,
                                            #43a700 50%,
                                            #8cdd55 100%
                                        );
                                    }
                                    .mine-prgbar-text {
                                        width: 400px;
                                        height: 38px;
                                        position: relative;
                                        text-align: center;
                                        color: #ffd33c;
                                        font-weight: bold;
                                        font-size: 16px;
                                        text-shadow: 0 1px 1px
                                            rgba(0, 0, 0, 0.45);
                                        line-height: 38px;
                                        text-shadow: 0 1px 2px
                                            rgba(0, 0, 0, 0.45);
                                        text-transform: uppercase;
                                        span {
                                            color: #fff;
                                            margin-left: 10px;
                                            font-size: 18px;
                                        }
                                    }
                                }
                                .mine-res-box {
                                    width: 120px;
                                    height: 36px;
                                    position: absolute;
                                    top: 7px;
                                    right: 6px;
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
                                    .mine-value {
                                        width: 80px;
                                        height: 36px;
                                        position: absolute;
                                        top: 0;
                                        left: 38px;
                                        color: #fff;
                                        font-size: 20px;
                                        font-weight: bold;
                                        line-height: 36px;
                                        text-align: center;
                                        text-shadow: 0 1px 2px
                                            rgba(0, 0, 0, 0.75);
                                    }
                                }
                            }
                            .mine-workers-name {
                                width: 100%;
                                height: 36px;
                                position: absolute;
                                top: 55px;
                                left: 0;
                                background: linear-gradient(
                                    0deg,
                                    #584a49 0%,
                                    #897165 100%
                                );
                                color: #ffd33c;
                                text-align: center;
                                font-weight: bold;
                                font-size: 18px;
                                line-height: 36px;
                                text-transform: uppercase;
                                border-radius: 10px 10px 0 0;
                                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2),
                                    inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                                z-index: 1;
                            }
                            .mine-worker-box-all {
                                width: 100%;
                                height: 371px;
                                position: absolute;
                                top: 91px;
                                left: 0;
                                border-radius: 0 0 10px 10px;
                                background: rgba(0, 0, 0, 0.14);
                                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2),
                                    inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                .mine-worker-box {
                                    width: 130px;
                                    height: 360px;
                                    position: relative;
                                    display: inline-block;
                                    background-color: #857366;
                                    margin: 3px;
                                    border-radius: 6px;
                                    box-shadow: 0 1px 1px
                                            rgba(255, 255, 255, 0.2),
                                        inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                                    overflow: hidden;
                                    .mine-worker-pic {
                                        width: 120px;
                                        height: 305px;
                                        position: absolute;
                                        top: 5px;
                                        left: 5px;
                                        overflow: hidden;
                                        border-radius: 3px;
                                        img {
                                            height: 305px;
                                        }
                                    }
                                    .mine-res-timer-box {
                                        width: 120px;
                                        height: 40px;
                                        position: absolute;
                                        bottom: 5px;
                                        left: 5px;
                                        background: linear-gradient(
                                            0deg,
                                            #ffe199 0%,
                                            #f4c657 18%,
                                            #ffe199 60%,
                                            #f4c557 85%,
                                            #ffe199 100%
                                        );
                                        border-radius: 3px;
                                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                                        text-shadow: 0 1px 1px
                                            rgba(255, 255, 255, 0.8);
                                        .mine-res-timer-name,
                                        .mine-res-timer {
                                            width: 100%;
                                            height: auto;
                                            top: 4px;
                                            display: inline-block;
                                            text-align: center;
                                            color: #3c3737;
                                            font-size: 10px;
                                            font-weight: bold;
                                            text-transform: uppercase;
                                        }
                                        .mine-res-timer {
                                            font-size: 16px;
                                        }
                                    }
                                    .mine-buy-plus {
                                        width: 50px;
                                        height: 10px;
                                        position: absolute;
                                        top: 150px;
                                        left: 40px;
                                        background-color: #fedf87;
                                        display: none;
                                        border-radius: 2px;
                                        filter: drop-shadow(
                                            0 1px 2px rgba(0, 0, 0, 0.4)
                                        );
                                        &:before {
                                            content: "";
                                            width: 10px;
                                            height: 50px;
                                            position: absolute;
                                            top: -20px;
                                            left: 20px;
                                            background-color: #fedf87;
                                            border-radius: 2px;
                                        }
                                    }
                                    .color-btn.diamond {
                                        width: 120px;
                                        height: 40px;
                                        position: absolute;
                                        top: 200px;
                                        left: 5px;
                                        display: none;
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
                                    .color-btn.mithril {
                                        width: 120px;
                                        height: 40px;
                                        position: absolute;
                                        top: 200px;
                                        left: 5px;
                                        display: none;
                                        .color-btn-text {
                                            font-size: 14px;
                                            top: 5px;
                                        }
                                        .f-mithril {
                                            &:before {
                                                content: "";
                                                width: 30px;
                                                height: 30px;
                                                position: relative;
                                                display: inline-block;
                                                background-image: url(../img/trophy-bonus-mithril.png);
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
                                    &.buy {
                                        background-color: #6f5c56;
                                        .mine-worker-pic {
                                            display: none;
                                        }
                                        .mine-buy-plus {
                                            display: block;
                                        }
                                        .color-btn.diamond {
                                            display: block;
                                        }
                                        .color-btn.mithril {
                                            display: block;
                                        }
                                    }
                                    &:nth-of-type(1),
                                    &:nth-of-type(2),
                                    &:nth-of-type(3),
                                    &:nth-of-type(4) {
                                        &.buy {
                                            &:before {
                                                content: "";
                                                width: 120px;
                                                height: 305px;
                                                position: absolute;
                                                top: 5px;
                                                left: 5px;
                                                overflow: hidden;
                                                border-radius: 3px;
                                                background-image: url(../img/darkworld-glow-cards.png),
                                                    url(../img/images/back/06-Cave.jpg);
                                                background-position: center 0px,
                                                    0% center;
                                                background-size: 280px 345px,
                                                    cover;
                                                background-repeat: no-repeat;
                                                filter: blur(2px) grayscale(0.5)
                                                    opacity(0.7) brightness(0.7)
                                                    sepia(0.4) saturate(0.9);
                                                transition: ease-in-out 0.14s;
                                            }
                                        }
                                    }
                                    &:nth-of-type(2) {
                                        &.buy {
                                            &:before {
                                                background-position: center 0px,
                                                    31% center;
                                            }
                                        }
                                    }
                                    &:nth-of-type(3) {
                                        &.buy {
                                            &:before {
                                                background-position: center 0px,
                                                    70% center;
                                            }
                                        }
                                    }
                                    &:nth-of-type(4) {
                                        &.buy {
                                            &:before {
                                                background-position: center 0px,
                                                    100% center;
                                            }
                                        }
                                    }
                                    &:hover {
                                        &:nth-of-type(1),
                                        &:nth-of-type(2),
                                        &:nth-of-type(3),
                                        &:nth-of-type(4) {
                                            &.buy {
                                                &:before {
                                                    background-position: center -20px,
                                                        0% center;
                                                    filter: blur(0px)
                                                        grayscale(0.2)
                                                        opacity(0.9)
                                                        brightness(0.8) sepia(0)
                                                        saturate(0.9);
                                                    transition: ease-in-out
                                                        0.14s;
                                                }
                                            }
                                        }
                                        &:nth-of-type(2) {
                                            &.buy {
                                                &:before {
                                                    background-position: center -20px,
                                                        31% center;
                                                }
                                            }
                                        }
                                        &:nth-of-type(3) {
                                            &.buy {
                                                &:before {
                                                    background-position: center -20px,
                                                        70% center;
                                                }
                                            }
                                        }
                                        &:nth-of-type(4) {
                                            &.buy {
                                                &:before {
                                                    background-position: center -20px,
                                                        100% center;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        .guildhall-res-box-all {
                            .guildhall-res-box {
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
`;

const V2ScreenMine = styled.div`
    ${V2ScreenMineStyles}
`;

export { V2ScreenMineStyles, V2ScreenMine };
