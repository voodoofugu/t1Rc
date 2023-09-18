import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenSexpedQuesteventStyles = css`
    .popup-layer .m-popup.sexped-questevent {
        width: 906px;
        height: 580px;
        left: 147px;
        top: 30px;
        .title {
            color: #494040;
        }
        .color-box {
            background-image: url(../img/spinner-round-bg.jpg);
            background-size: 100%;
            background-repeat: no-repeat;
            &:before {
                display: none;
            }
            &:after {
                display: none;
            }
        }
        .xmas-daily-prg-box-all {
            width: 866px;
            height: 130px;
            position: absolute;
            top: 70px;
            left: 20px;
            .xmas-prg-bar-box {
                width: 866px;
                height: 30px;
                position: absolute;
                bottom: 0;
                left: 0;
                .xmas-prg-name-pic {
                    width: 150px;
                    height: 30px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: linear-gradient(
                        0deg,
                        #e48fbf 0%,
                        #a7005d 50%,
                        #e48fb8 100%
                    );
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                    text-transform: uppercase;
                    line-height: 30px;
                    &:before {
                        content: "";
                        width: 26px;
                        height: 26px;
                        position: absolute;
                        top: 2px;
                        left: 20px;
                        background-image: url(../img/ic-dildo-purple.png);
                        background-size: 100%;
                    }
                }
                .xmas-prg-bar {
                    width: 670px;
                    height: 30px;
                    position: absolute;
                    top: 0;
                    left: 154px;
                    background-color: #4c0021;
                    .xmas-prg {
                        width: 80%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: linear-gradient(
                            0deg,
                            #5eb0f2 0%,
                            #4783b5 12%,
                            #66c4ff 60%,
                            #91d5ff 70%,
                            #569fdb 100%
                        );
                        transition: width 0.3s;
                    }
                }
            }
            .xmas-prg-girl {
                width: 184px;
                height: 230px;
                position: absolute;
                left: -8px;
                bottom: 0;
                background-image: url(../img/break-girl-mas-event-pass-03.png);
                background-position: center -8px;
                background-repeat: no-repeat;
                background-size: 166%;
            }
            .xmas-reward-chest-box {
                width: 80px;
                height: 80px;
                position: absolute;
                top: 0;
                right: 470px;
                background: linear-gradient(0deg, #e9c44f 0%, #f7eec7 100%);
                border-radius: 8px;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                text-align: center;
                .xmas-level-rew-pic {
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    img {
                        width: 60px;
                    }
                }
                .xmas-level-rew-num {
                    width: 60px;
                    height: 12px;
                    position: absolute;
                    bottom: 5px;
                    color: #3c3737;
                    font-size: 12px;
                    font-weight: bold;
                }
                .xmas-level-rew-num-check {
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background-image: url(../img/paycheck.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    visibility: hidden;
                }
                .xmas-level-rew-good {
                    width: 64px;
                    height: 64px;
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    background-image: url(../img/fortuna-good.png);
                    background-size: 100%;
                    visibility: hidden;
                }
                .color-btn.green {
                    width: 74px;
                    height: 16px;
                    position: absolute;
                    bottom: 3px;
                    left: 3px;
                    border-radius: 4px;
                    visibility: hidden;
                    box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25),
                        0 1px 2px 0 rgba(0, 0, 0, 0.55);
                    .color-btn-text {
                        font-size: 8px;
                        top: 2px;
                    }
                    &:active {
                        box-shadow: inset 0 -1px 0px rgba(0, 0, 0, 0.2),
                            inset 0 2px 2px rgba(0, 0, 0, 0.2);
                        .color-btn-text {
                            top: 3px;
                        }
                    }
                }
                &.collect {
                    .xmas-level-rew-num {
                        visibility: hidden;
                    }
                    .color-btn.green {
                        visibility: visible;
                    }
                }
                &.check {
                    .xmas-level-rew-num-check {
                        visibility: visible;
                    }
                }
                &.v2 {
                    right: 200px;
                }
                &.v3 {
                    right: 0px;
                }
                .xmas-prg-bar-num-line {
                    width: 4px;
                    height: 50px;
                    position: absolute;
                    bottom: -50px;
                    right: 38px;
                    background-color: #ff006f;
                    .xmas-prg-bar-num {
                        width: 40px;
                        height: 22px;
                        position: absolute;
                        bottom: 20px;
                        right: -18px;
                        background: linear-gradient(
                            0deg,
                            #e9c44f 0%,
                            #f7eec7 100%
                        );
                        border-radius: 10px;
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                        color: #3c3737;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 22px;
                    }
                }
            }
        }
        .xmas-daily-box-all {
            width: 866px;
            height: 280px;
            position: absolute;
            bottom: 90px;
            left: 20px;
            .xmas-daily-box {
                width: 100%;
                height: 280px;
                position: absolute;
                font-size: 0;
                .daily-parth-box {
                    width: 426px;
                    height: 90px;
                    position: relative;
                    display: inline-block;
                    background-color: #4c0021;
                    margin-bottom: 5px;
                    .daily-parth-text {
                        width: 185px;
                        height: auto;
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        color: #f5da6d;
                        font-weight: bold;
                        text-transform: uppercase;
                        font-size: 14px;
                        text-align: center;
                    }
                    .daily-prgbar-all {
                        width: 185px;
                        height: 20px;
                        position: absolute;
                        bottom: 10px;
                        left: 10px;
                        background-color: #b52274;
                        .daily-prgbar {
                            width: 80%;
                            height: 20px;
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            background: linear-gradient(
                                0deg,
                                #3fbae7 0%,
                                #007aa7 50%,
                                #3fbae7 100%
                            );
                        }
                        .daily-prgbar-text {
                            width: 185px;
                            height: 20px;
                            position: relative;
                            text-align: center;
                            color: #fff;
                            font-weight: bold;
                            font-size: 14px;
                            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
                            line-height: 20px;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                            text-transform: uppercase;
                        }
                    }
                    .daily-parth-claim-box {
                        width: 220px;
                        height: 90px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        background-color: #810038;
                        .daily-reward {
                            width: 70px;
                            height: 70px;
                            position: absolute;
                            top: 10px;
                            left: 10px;
                            background: linear-gradient(
                                180deg,
                                #c68300 0%,
                                #f4dfb6 50%,
                                #c68200 70%,
                                #fad489 85%,
                                #c78302 100%
                            );
                            border-radius: 10px;
                            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                            .daily-reward-pic {
                                width: 50px;
                                height: 50px;
                                position: absolute;
                                top: 4px;
                                left: 10px;
                                img {
                                    width: 50px;
                                }
                            }
                            .daily-reward-count {
                                width: 60px;
                                height: auto;
                                position: relative;
                                top: 52px;
                                text-align: center;
                                margin: 0 auto;
                                color: #fff;
                                font-size: 14px;
                                font-weight: bold;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                            }
                        }
                        .color-btn {
                            width: 120px;
                            height: 40px;
                            position: absolute;
                            top: 25px;
                            right: 10px;
                            .color-btn-text {
                                color: #3e342d;
                                text-shadow: 0 0 0;
                            }
                        }
                    }
                }
                &.right {
                    right: 0px;
                }
            }
        }
        .xmas-btn-box {
            width: 886px;
            height: 68px;
            position: absolute;
            bottom: 10px;
            right: 20px;
            font-size: 0;
            .color-btn {
                width: 180px;
                margin: 0 8px;
                .color-btn-text {
                    top: 12px;
                    position: relative;
                    color: #fff;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                    text-align: center;
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 16px;
                }
                &:active {
                    .color-btn-text {
                        top: 13px;
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
            top: 10px;
            position: relative;
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 14px;
        }
        &:active {
            box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                inset 0 2px 2px rgba(0, 0, 0, 0.2);
            .color-btn-text {
                top: 12px;
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
        &.purple {
            background: linear-gradient(0deg, #aa5eca 0%, #d992f7 100%);
        }
    }
`;

const V2ScreenSexpedQuestevent = styled.div`
    ${V2ScreenSexpedQuesteventStyles}
`;

export { V2ScreenSexpedQuesteventStyles, V2ScreenSexpedQuestevent };
