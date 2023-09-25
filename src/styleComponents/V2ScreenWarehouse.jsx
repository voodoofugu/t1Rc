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
                    &:before {
                        content: "";
                        width: 1102px;
                    }
                    .tab-panel-box.warehouse {
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
                                .guildhall-building-pic-wirehouse {
                                    width: 272px;
                                    height: 148px;
                                    position: absolute;
                                    top: 86px;
                                    left: 50%;
                                    transform: translateX(-50%);
                                    background-image: url(../img/v2-guildmap-warehouse-b.png);
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
                                    > img {
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
                        .wirehouse-rightside-box {
                            width: 550px;
                            height: 462px;
                            position: absolute;
                            top: 39px;
                            right: 10px;
                            overflow: hidden;
                            border-radius: 10px;
                            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                            .wirehouse-rightside-box-bg {
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                top: 0;
                                left: 0;
                                background-image: url(../img/v2-warehouse-right-bg.jpg);
                                background-size: 100%;
                                background-repeat: no-repeat;
                                filter: sepia(0.5);
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

export { stylesFileName, pageStyles };
