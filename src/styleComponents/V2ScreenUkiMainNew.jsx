import { styled, css } from "styled-components";

const V2ScreenUkiMainNewStyles = css`
    body .main.world1,
    body .main.world2,
    body .main.world3 {
        .left-side {
            width: 620px;
            height: 555px;
            position: absolute;
            left: 5px;
            bottom: 5px;
            .tabs-all-box {
                width: 600px;
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
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                &.wide.journal-main {
                    width: 620px;
                    &:before {
                        content: "";
                        width: 100%;
                    }
                    .heroes-list-all-box {
                        width: 620px;
                        &:after {
                            content: "";
                            width: 100%;
                        }
                        &:before {
                            content: "";
                            width: 5px;
                            right: 0;
                        }
                    }
                    .btn-close-x {
                        display: block;
                    }
                    .journal-menu-box {
                        width: 500px;
                        height: 40px;
                        position: absolute;
                        top: 10px;
                        left: 12px;
                        font-size: 0;
                        text-align: center;
                        .color-btn {
                            width: 160px;
                            margin: 0 3px 0 3px;
                            .quest-notif {
                                top: -4px;
                                right: -4px;
                                width: 24px;
                                height: 24px;
                                position: absolute;
                                background-image: url(../img/picmeh-ic-info.png);
                                background-size: 100%;
                                background-repeat: no-repeat;
                            }
                        }
                    }
                    .journal-parth-box-all {
                        width: 500px;
                        height: 445px;
                        position: absolute;
                        top: 58px;
                        left: 12px;
                        background-color: #978474;
                        border-radius: 10px;
                        overflow: hidden;
                        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
                            inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                            0 1px 3px rgba(0, 0, 0, 0.2);
                        .journal-parth-header {
                            height: 106px;
                            background: #785f5f;
                            position: absolute;
                            width: 100%;
                            box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.3);
                            border-radius: 10px 10px 0 0;
                            box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                                inset 0px 1px 1px rgba(255, 255, 255, 0.1);
                            .journal-header-main-info {
                                background: #614c4c;
                                border-radius: 10px;
                                width: 340px;
                                margin: auto;
                                margin-top: 10px;
                                color: #fff;
                                font-size: 14px;
                                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
                                padding: 8px 28px;
                                text-align: center;
                                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                                    inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                            }
                            .daily-prgbar-all {
                                width: 390px;
                                height: 22px;
                                position: absolute;
                                top: 72px;
                                left: 50%;
                                transform: translateX(-50%);
                                background: linear-gradient(
                                    180deg,
                                    #44443d 0%,
                                    #706e66 63.91%,
                                    #58554d 100%
                                );
                                box-shadow: 0 0 0 1px #31302c, 0 0 0 2px #fddc8d,
                                    0 1px 3px 2px rgba(0, 0, 0, 0.2);
                                border-radius: 4px;
                                overflow: hidden;
                                .daily-prgbar {
                                    width: 10%;
                                    height: 22px;
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    background: linear-gradient(
                                        90deg,
                                        #a7fa53 0%,
                                        #00c64f 100%
                                    );
                                    box-shadow: inset 0px 7px 0px
                                        rgba(255, 255, 255, 0.2);
                                    border-radius: 2px;
                                }
                                .daily-prgbar-text {
                                    width: 100%;
                                    height: 22px;
                                    position: relative;
                                    text-align: center;
                                    color: #ffd33c;
                                    font-weight: bold;
                                    font-size: 12px;
                                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8),
                                        0 1px 4px rgba(0, 0, 0, 0.8),
                                        0 1px 4px rgba(0, 0, 0, 0.8);
                                    line-height: 22px;
                                    text-transform: uppercase;
                                    display: flex;
                                    justify-content: center;
                                    .daily-prgbar-value {
                                        margin-left: 3px;
                                    }
                                }
                            }
                        }
                        .journal-parth-box-scroll {
                            width: 480px;
                            height: 320px;
                            position: absolute;
                            top: 114px;
                            left: 10px;
                            overflow: hidden;
                            overflow-y: scroll;
                            font-size: 0;
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
                                -webkit-box-shadow: inset 0 0 3px #796b60;
                                background: linear-gradient(
                                    to right,
                                    #fff,
                                    #f5de80,
                                    #f4b766,
                                    #b26d12
                                );
                            }
                            .journal-parth-box {
                                width: 460px;
                                height: auto;
                                position: relative;
                                display: inline-block;
                                padding-left: 2px;
                                .journal-parth-name {
                                    width: 460px;
                                    height: 40px;
                                    position: relative;
                                    display: inline-block;
                                    text-align: center;
                                    line-height: 40px;
                                    color: #ffd700;
                                    font-size: 18px;
                                    font-weight: bold;
                                    text-transform: uppercase;
                                    margin: 2px 0 10px 0;
                                    background-color: #705d4e;
                                    border-radius: 10px;
                                    box-shadow: 0 1px 1px
                                            rgba(255, 255, 255, 0.1),
                                        inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                                }
                                .journal-parth {
                                    width: 460px;
                                    height: 102px;
                                    position: relative;
                                    display: inline-block;
                                    background-color: #b7a597;
                                    margin-bottom: 12px;
                                    border-radius: 3px;
                                    overflow: hidden;
                                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4),
                                        0 0 0 2px rgba(0, 0, 0, 0.1),
                                        inset 0 1px 1px rgba(255, 255, 255, 0.2),
                                        inset -24px 0 0 rgba(112, 112, 93, 0.5),
                                        inset -25px 0 2px rgba(255, 255, 255, 0.2),
                                        inset 0 44px 2px
                                            rgba(255, 255, 255, 0.1);
                                    opacity: 1;
                                    transition: ease-in-out 0.1s;
                                    &:hover {
                                        background-color: #c2aea0;
                                        .journal-parth-wrap {
                                            .text {
                                                background-color: #ad9c8f;
                                            }
                                        }
                                    }
                                    &:after {
                                        content: "";
                                        width: 10px;
                                        height: 10px;
                                        position: absolute;
                                        right: 6px;
                                        top: 44px;
                                        font-size: 22px;
                                        border: 2px solid rgba(0, 0, 0, 0.5);
                                        border-top: none;
                                        border-left: none;
                                        transform: rotate(45deg) scaleX(1);
                                        filter: drop-shadow(1px 1px 0 #fff);
                                        transition: ease-in-out 0.1s;
                                        pointer-events: none;
                                    }
                                    .journal-parth-wrap {
                                        cursor: pointer;
                                        height: 100%;
                                        .journal-parth-text-box {
                                            width: 330px;
                                            height: auto;
                                            position: relative;
                                            display: inline-block;
                                            .journal-parth-title {
                                                color: rgba(0, 0, 0, 0.7);
                                                font-size: 14px;
                                                text-transform: uppercase;
                                                font-weight: 700;
                                                padding-left: 20px;
                                                line-height: 24px;
                                                position: relative;
                                                left: -10px;
                                                transform: skewX(-30deg);
                                                background: rgba(
                                                    255,
                                                    251,
                                                    118,
                                                    0.3
                                                );
                                                box-shadow: inset 0 1px 1px
                                                        rgba(255, 255, 255, 0.4),
                                                    1px 1px 1px
                                                        rgba(0, 0, 0, 0.2);
                                                box-shadow: inset 0px 7px 0px
                                                        rgba(255, 255, 255, 0.2),
                                                    inset 0 1px 1px
                                                        rgba(255, 255, 255, 0.4),
                                                    1px 1px 1px 1px
                                                        rgba(0, 0, 0, 0.2);
                                                p {
                                                    transform: skewX(30deg);
                                                    margin: 0;
                                                    font-style: italic;
                                                    text-shadow: 0 1px 1px
                                                        rgba(255, 255, 255, 0.6);
                                                }
                                            }
                                            .journal-parth-text {
                                                height: 36px;
                                                color: rgb(255, 255, 255);
                                                font-size: 15px;
                                                text-align: center;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                padding: 2px 0 2px 0;
                                                background: radial-gradient(
                                                    rgba(0, 0, 0, 0.3),
                                                    rgba(0, 0, 0, 0),
                                                    rgba(0, 0, 0, 0)
                                                );
                                                background-size: 100% 70%;
                                                background-position: 0 28px;
                                                background-repeat: no-repeat;
                                                text-shadow: 0 1px 1px
                                                        rgba(0, 0, 0, 0.4),
                                                    0 1px 4px rgba(0, 0, 0, 0.8);
                                                &:before {
                                                    content: "";
                                                    position: absolute;
                                                    width: 100%;
                                                    height: 1px;
                                                    left: 0;
                                                    bottom: -1px;
                                                    background: linear-gradient(
                                                        90deg,
                                                        rgba(255, 255, 255, 0),
                                                        rgba(
                                                            255,
                                                            255,
                                                            255,
                                                            0.5
                                                        ),
                                                        rgba(255, 255, 255, 0)
                                                    );
                                                }
                                            }
                                        }
                                        .daily-prgbar-all {
                                            width: 315px;
                                            height: 18px;
                                            position: absolute;
                                            top: 74px;
                                            left: 9px;
                                            background: linear-gradient(
                                                180deg,
                                                #44443d 0%,
                                                #706e66 63.91%,
                                                #58554d 100%
                                            );
                                            box-shadow: 0 0 0 1px #31302c,
                                                0 0 0 2px #fddc8d,
                                                0 1px 3px 2px rgba(0, 0, 0, 0.2);
                                            border-radius: 4px;
                                            overflow: hidden;
                                            .daily-prgbar {
                                                width: 10%;
                                                height: 18px;
                                                position: absolute;
                                                top: 0;
                                                left: 0;
                                                background: linear-gradient(
                                                    90deg,
                                                    #a7fa53 0%,
                                                    #00c64f 100%
                                                );
                                                box-shadow: inset 0px 7px 0px
                                                    rgba(255, 255, 255, 0.2);
                                                border-radius: 2px;
                                            }
                                            .daily-prgbar-text {
                                                width: 100%;
                                                height: 10px;
                                                position: relative;
                                                text-align: center;
                                                color: #ffd33c;
                                                font-weight: bold;
                                                font-size: 12px;
                                                text-shadow: 0 1px 1px
                                                        rgba(0, 0, 0, 0.8),
                                                    0 1px 4px rgba(0, 0, 0, 0.8),
                                                    0 1px 4px rgba(0, 0, 0, 0.8);
                                                line-height: 18px;
                                                text-transform: uppercase;
                                            }
                                        }
                                        .text {
                                            height: 52px;
                                            color: rgb(255, 255, 255);
                                            font-size: 14px;
                                            text-align: center;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            position: absolute;
                                            top: 102px;
                                            background-color: #a39286;
                                            padding: 2px 8px 2px 8px;
                                            box-shadow: inset 0 1px 0
                                                    rgba(0, 0, 0, 0.2),
                                                0 -2px 0px rgba(0, 0, 0, 0.1),
                                                inset 0 3px 2px
                                                    rgba(0, 0, 0, 0.1),
                                                inset 0 -2px 0px rgba(0, 0, 0, 0.1);
                                            transition: ease-in-out 0.1s;
                                            text-shadow: 0 1px 1px
                                                    rgba(0, 0, 0, 0.4),
                                                0 1px 4px rgba(0, 0, 0, 0.8);
                                        }
                                    }
                                    .journal-reward {
                                        width: 92px;
                                        height: 80px;
                                        position: absolute;
                                        right: 34px;
                                        top: 11px;
                                        display: inline-block;
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
                                                rgba(255, 255, 255, 0.5),
                                            0 1px 2px 1px rgba(0, 0, 0, 0.4);
                                        .journal-reward-pic-wrap {
                                            width: 100%;
                                            display: flex;
                                            justify-content: center;
                                            position: absolute;
                                            top: 3px;
                                            .journal-reward-pic {
                                                width: 42px;
                                                height: 42px;
                                                margin: 0 2px;
                                                border-radius: 6px;
                                                position: relative;
                                                img {
                                                    width: 100%;
                                                    border-radius: 6px;
                                                }
                                                .journal-reward-value {
                                                    background: rgba(
                                                        80,
                                                        0,
                                                        48,
                                                        0.8
                                                    );
                                                    border: 1px solid #fddd8f;
                                                    box-shadow: 0px 1px 1px
                                                            rgba(0, 0, 0, 0.4),
                                                        inset 0px 1px 1px
                                                            rgba(
                                                                255,
                                                                255,
                                                                255,
                                                                0.2
                                                            );
                                                    border-radius: 4px;
                                                    font-size: 11px;
                                                    position: absolute;
                                                    top: 27px;
                                                    left: 50%;
                                                    transform: translateX(-50%);
                                                    color: #fff;
                                                    padding: 0 2px;
                                                    text-shadow: 0 1px 1px
                                                        rgba(0, 0, 0, 0.8);
                                                }
                                            }
                                            .story-icn {
                                                box-shadow: 0 0 0 1px
                                                    rgba(0, 0, 0, 0.2);
                                            }
                                        }
                                        .color-btn {
                                            width: 78px;
                                            height: 26px;
                                            position: absolute;
                                            left: 7px;
                                            bottom: 4px;
                                            box-shadow: inset 0 -3px 0 0 rgb(0, 0, 0, 0.25),
                                                0 2px 4px 0 rgb(0, 0, 0, 0.55);
                                            .color-btn-text {
                                                top: 3px;
                                            }
                                            &:active {
                                                box-shadow: inset 0 -1px 0 0 rgb(0, 0, 0, 0.25),
                                                    0 2px 4px 0
                                                        rgb(0, 0, 0, 0.55);
                                                .color-btn-text {
                                                    top: 5px;
                                                }
                                            }
                                        }
                                    }
                                    .journal-reward.disabled {
                                        filter: grayscale(90%);
                                        pointer-events: none;
                                        .color-btn {
                                            cursor: unset;
                                        }
                                    }
                                }
                                .journal-parth.view {
                                    height: 158px;
                                    transition: ease-in-out 0.1s;
                                    &:after {
                                        transform: rotate(135deg) scaleX(-1);
                                        filter: drop-shadow(-1px -1px 0 #fff);
                                        transition: ease-in-out 0.1s;
                                        margin-top: 4px;
                                    }
                                }
                                .journal-parth.remove {
                                    transform: translateX(-20px);
                                    opacity: 0;
                                    transition: ease-in-out 0.3s;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const V2ScreenUkiMainNew = styled.div`
    ${V2ScreenUkiMainNewStyles}
`;

export { V2ScreenUkiMainNewStyles, V2ScreenUkiMainNew };
