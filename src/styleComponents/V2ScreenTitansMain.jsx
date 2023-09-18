import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenTitansMainStyles = css`
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
                    .tab-panel-box.at-titans-main {
                        width: 1098px;
                        height: 511px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        border: solid 4px #9c8b7c;
                        border-top: none;
                        background-color: #9c8b7c;
                        box-shadow: inset 0 0 7px #5f4f4e,
                            inset 0 6px 7px #5f4f4e;

                        &:before {
                            content: "";
                            position: absolute;
                            width: 1080px;
                            height: 490px;
                            top: 13px;
                            left: 9px;
                            background-image: url(../img/titans_bg.jpg);
                        }

                        .titans-left,
                        .titans-center,
                        .titans-right,
                        .titans-stats {
                            position: absolute;
                            top: 23px;
                            left: 19px;
                            width: 350px;
                            height: 432px;
                        }

                        .titans-left {
                            top: 63px;
                        }

                        .titans-center {
                            top: 63px;
                            left: 389px;
                            width: 389px;

                            .color-btn {
                                position: absolute;
                                left: 110px;
                                top: 24px;
                                width: 170px;
                                background: linear-gradient(
                                    0deg,
                                    #47bfed,
                                    #74ecfc
                                );

                                .color-btn-text {
                                    font-size: 16px;
                                    top: 9px;
                                }

                                &:active {
                                    .color-btn-text {
                                        top: 10px;
                                    }
                                }
                            }
                        }

                        .titans-right {
                            left: 790px;
                            width: 290px;
                            height: 472px;
                            background: linear-gradient(
                                0deg,
                                #ffe199 0%,
                                #f4c657 18%,
                                #ffe199 60%,
                                #f4c557 85%,
                                #ffe199 100%
                            );

                            &:before {
                                content: "";
                                position: absolute;
                                width: 286px;
                                height: 468px;
                                top: 2px;
                                left: 2px;
                                background-image: url(../img/titans_enemy_bg.jpg);
                            }

                            .boss {
                                position: absolute;
                                left: 2px;
                                top: 2px;
                                width: 286px;
                                height: 468px;
                                overflow: hidden;

                                .boss-wrapper {
                                    position: absolute;
                                    left: -32px;
                                    top: 59px;
                                    width: 350px;
                                    height: 350px;
                                    text-align: center;
                                }
                            }
                            .boss-timer {
                                position: absolute;
                                left: 51px;
                                top: 0;
                                width: 190px;
                                height: 40px;
                                background-color: rgba(0, 0, 0, 0.3);
                                color: #fff;
                                text-align: center;
                                text-transform: uppercase;
                                font-weight: bold;
                                font-size: 12px;
                                line-height: 24px;

                                .time {
                                    color: #ffb70a;
                                    font-size: 16px;
                                    text-transform: initial;
                                    line-height: 10px;
                                }
                            }
                            .boss-name {
                                position: absolute;
                                left: 2px;
                                top: 364px;
                                width: 286px;
                                height: 60px;
                                text-align: center;
                                font-size: 20px;
                                line-height: 26px;
                                font-weight: bold;
                                color: #fff;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75),
                                    0 1px 6px rgba(0, 0, 0, 1);

                                .lvl {
                                    font-size: 18px;
                                }
                            }
                            .color-btn {
                                position: absolute;
                                top: 286px;
                                left: 56px;
                                width: 180px;
                                height: 60px;
                                border-radius: 30px;
                                .color-btn-text {
                                    font-size: 24px;
                                    line-height: 20px;

                                    .attempts {
                                        font-size: 12px;
                                    }
                                }
                            }
                            .hp-bar-bg {
                                position: absolute;
                                top: 425px;
                                left: 17px;
                                width: 260px;
                                height: 36px;
                                border-radius: 6px;
                                background: linear-gradient(
                                    0deg,
                                    #cbcbcb,
                                    #979797 18%,
                                    #d3d3d3,
                                    #d3d3d3 74%,
                                    #989898,
                                    #d3d3d2
                                );
                                padding: 4px;
                                box-sizing: border-box;

                                &:before {
                                    content: "";
                                    background-color: #232e45;
                                    position: absolute;
                                    top: 2px;
                                    left: 2px;
                                    width: 256px;
                                    height: 32px;
                                    border-radius: 4px;
                                    box-shadow: inset 0 2px 8px 0 #000;
                                }

                                .hp-bar {
                                    width: 85%;
                                    height: 28px;
                                    border-radius: 3px;
                                    position: relative;
                                    background: linear-gradient(
                                        90deg,
                                        #007aa7,
                                        #3fbae7
                                    );
                                    box-shadow: inset 0 14px 0 0
                                        rgba(255, 255, 255, 0.1);
                                }

                                .hp-text {
                                    position: absolute;
                                    top: 2px;
                                    left: 2px;
                                    width: 256px;
                                    height: 32px;
                                    text-align: center;
                                    color: #fff;
                                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                                    font-weight: bold;
                                    font-size: 18px;
                                    line-height: 32px;
                                }
                            }
                        }

                        .titans-stats {
                            width: 760px;
                            height: 40px;

                            .color-btn {
                                position: absolute;
                                width: 170px;
                                top: 0;

                                .color-btn-text {
                                    top: 9px;
                                }

                                &:active {
                                    .color-btn-text {
                                        top: 10px;
                                    }
                                }

                                &.leaderbord {
                                    left: 0;
                                }
                                &.upgrade {
                                    left: 180px;
                                }

                                .color-btn-text {
                                    font-size: 16px;
                                }
                            }

                            .titan-characteristics {
                                position: absolute;
                                top: 0;
                                left: 370px;
                                width: 389px;
                                height: 40px;

                                .q-counter,
                                .mech-stats {
                                    position: absolute;
                                    top: 0;
                                    font-size: 0;

                                    .stat {
                                        display: inline-block;
                                        position: relative;
                                        width: 93px;
                                        height: 40px;
                                        font-size: 14px;
                                        padding: 12px 11px 0px 36px;
                                        text-align: center;
                                        box-sizing: border-box;
                                        color: #544746;
                                        font-weight: bold;

                                        &:before {
                                            content: "";
                                            position: absolute;
                                            top: 8px;
                                            left: 8px;
                                            width: 24px;
                                            height: 24px;
                                            background-repeat: no-repeat;
                                            background-position: center;
                                        }

                                        & + .stat:after {
                                            content: "";
                                            position: absolute;
                                            left: -1px;
                                            top: 6px;
                                            width: 1px;
                                            height: 30px;
                                            background-color: #5c4b46;
                                        }

                                        &.qq {
                                            width: 104px;
                                            font-size: 18px;
                                            padding: 10px 11px 0 36px;
                                            &:before {
                                                background-image: url(../img/v2_at_gear.png);
                                            }
                                        }
                                        &.atk:before {
                                            background-image: url(../img/v2_at_magicgun.png);
                                        }
                                        &.hp:before {
                                            background-image: url(../img/v2_at_magic_plate.png);
                                        }
                                        &.pow:before {
                                            background-image: url(../img/v2_at_manabomb.png);
                                        }
                                    }
                                }
                                .q-counter {
                                    left: 0;
                                    width: 104px;
                                    height: 40px;
                                    background: linear-gradient(
                                        0deg,
                                        #ffe199 0%,
                                        #f4c657 18%,
                                        #ffe199 60%,
                                        #f4c557 85%,
                                        #ffe199 100%
                                    );
                                }
                                .mech-stats {
                                    right: 0;
                                    width: 280px;
                                    height: 40px;
                                    background: linear-gradient(
                                        0deg,
                                        #e9b13a,
                                        #fffd99
                                    );
                                }
                            }
                        }

                        .stars {
                            position: absolute;
                            width: 350px;
                            top: 13px;
                            text-align: center;
                            font-size: 0;

                            .star {
                                display: inline-block;
                                background-image: url(../img/star1.png);
                                background-size: 100%;
                                width: 24px;
                                height: 23px;
                                filter: grayscale(1);

                                &.checked {
                                    filter: grayscale(0);
                                }
                            }
                        }

                        .titan-screen {
                            position: absolute;
                            width: 350px;
                            height: 350px;
                            top: 44px;
                            left: 0;

                            img {
                                width: 350px;
                                height: 350px;
                                margin: 0 auto;
                                display: block;
                            }
                        }

                        .titan-label {
                            background: linear-gradient(
                                0deg,
                                #e9b039 0%,
                                #fffe9a 100%
                            );
                            border-radius: 15px;
                            width: 210px;
                            height: 30px;
                            color: #5c4b46;
                            font-size: 18px;
                            line-height: 30px;
                            text-align: center;
                            position: absolute;
                            font-weight: bold;
                            top: 402px;
                            left: 70px;
                        }

                        .team {
                            font-size: 0;
                            position: absolute;
                            top: 86px;
                            left: 5px;

                            .t-slot {
                                $t_width: 98px;

                                background-color: rgba(0, 0, 0, 0.3);
                                border: 2px solid rgba(120, 120, 120, 0.3);
                                display: inline-block;
                                position: relative;
                                width: $t_width;
                                height: 158px;
                                box-sizing: border-box;
                                font-weight: bold;
                                color: #fff;
                                text-transform: uppercase;
                                text-align: center;
                                margin-right: 41px;
                                box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);

                                &.active {
                                    background-color: transparent;
                                    border: none;
                                }

                                &:nth-of-type(3n) {
                                    margin-right: 0;
                                }

                                &:nth-of-type(n + 4) {
                                    margin-top: 30px;
                                }

                                &:before {
                                    content: "";
                                    background-image: url(../img/v2-lock-ic-2.png);
                                    width: 30px;
                                    height: 44px;
                                    position: absolute;
                                    top: 54px;
                                    left: 32px;
                                }

                                .specialization {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    height: 27px;
                                    width: $t_width;
                                    font-size: 14px;
                                    line-height: 24px;
                                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);

                                    background: linear-gradient(
                                        180deg,
                                        #8e7453,
                                        #ae916a,
                                        #8f7553,
                                        #e3c7a3 60%
                                    );
                                }
                                .ava {
                                    position: absolute;
                                    top: 21px;
                                    left: 0px;
                                    width: $t_width;
                                    height: 111px;
                                    border-radius: 6px;

                                    box-shadow: 0 0 4px #000;
                                    background: linear-gradient(
                                        0deg,
                                        #8f7554,
                                        #e1c5a2,
                                        #8f7554
                                    );

                                    img {
                                        position: absolute;
                                        top: 4px;
                                        left: 4px;
                                        width: 90px;
                                        height: 103px;
                                        border-radius: 4px;
                                    }
                                }
                                .stars {
                                    position: absolute;
                                    top: initial;
                                    left: 0;
                                    bottom: 0;
                                    border-radius: 0 0 6px 6px;
                                    width: $t_width;
                                    background-color: rgba(0, 0, 0, 0.6);
                                    padding: 4px 0px;

                                    .star {
                                        width: 18px;
                                        height: 17px;
                                    }
                                }
                                .pwr {
                                    position: absolute;
                                    height: 29px;
                                    width: $t_width;
                                    left: 0;
                                    bottom: 0;
                                    font-size: 12px;
                                    line-height: 32px;
                                    color: #544746;

                                    background: linear-gradient(
                                        0deg,
                                        #fddd8e,
                                        #f4c658,
                                        #ffe198 60%
                                    );
                                }
                            }
                        }

                        .btn-close-x {
                            width: 30px;
                            height: 30px;
                            position: absolute;
                            top: -6px;
                            right: -6px;
                            background: linear-gradient(
                                30deg,
                                #876b56,
                                #aa9383,
                                #dfceba
                            );
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
                        .trophy-res-box-all {
                            width: 370px;
                            height: 45px;
                            position: absolute;
                            top: -42px;
                            right: 36px;
                            background-color: #9c8b7c;
                            border-radius: 10px 10px 0 0;
                            .trophy-res-box {
                                width: 170px;
                                height: 36px;
                                position: absolute;
                                top: 4px;
                                left: 10px;
                                background: linear-gradient(
                                    0deg,
                                    #ffe199 0%,
                                    #f4c657 18%,
                                    #ffe199 60%,
                                    #f4c557 85%,
                                    #ffe199 100%
                                );
                                border-radius: 18px;
                                box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.55),
                                    0 2px 4px 0 rgba(0, 0, 0, 0.35);
                                .trophy-value {
                                    width: 100px;
                                    height: 28px;
                                    position: absolute;
                                    top: 3px;
                                    left: 38px;
                                    background: linear-gradient(
                                        90deg,
                                        #f4bf87 0%,
                                        #d38632 50%,
                                        #92581a 100%
                                    );
                                    box-shadow: inset 0 2px 4px
                                            rgba(0, 0, 0, 0.25),
                                        inset 0 14px 0 rgba(255, 255, 255, 0.15);
                                    border-radius: 6px;
                                    color: #fff;
                                    font-size: 20px;
                                    font-weight: bold;
                                    line-height: 28px;
                                    text-align: center;
                                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                                }
                                .trophy-value-btn-add {
                                    width: 32px;
                                    height: 36px;
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                    border-radius: 0 18px 18px 0;
                                    cursor: pointer;
                                    &:before {
                                        content: "";
                                        width: 6px;
                                        height: 22px;
                                        position: absolute;
                                        top: 7px;
                                        left: 12px;
                                        background-color: #3c3737;
                                    }
                                    &:after {
                                        content: "";
                                        width: 22px;
                                        height: 6px;
                                        position: absolute;
                                        top: 15px;
                                        left: 4px;
                                        background-color: #3c3737;
                                    }
                                }
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
                                        background-image: url(../img/trophy-bonus-gems.png);
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

const V2ScreenTitansMain = styled.div`
    ${V2ScreenTitansMainStyles}
`;

export { V2ScreenTitansMainStyles, V2ScreenTitansMain };
