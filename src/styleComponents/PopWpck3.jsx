import styled from "@emotion/styled";
import { css } from "@emotion/react";

const PopWpck3Styles = css`
    .popup-layer .m-popup.wpck3 {
        width: 800px;
        height: 560px;
        top: 40px;
        left: 200px;
        margin: auto;
        .title {
            color: #98320d;
        }
        .color-box {
            background-image: url(../img/ts_confirm_bk-1.jpg);
            background-size: 100%;
            &:after,
            &:before {
                display: none;
            }
        }
        .content-all {
            width: 740px;
            height: 460px;
            position: absolute;
            top: 80px;
            margin-left: 30px;
            // background-color: red;
            .prize-one-box,
            .prize-two-box,
            .prize-three-box {
                width: 480px;
                height: 380px;
                position: absolute;
                background-color: rgba(255, 255, 255, 0.45);
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
                .girl-box {
                    width: 198px;
                    height: 290px;
                    position: absolute;
                    top: 4px;
                    margin-left: 10px;
                    background: linear-gradient(
                        180deg,
                        #c68300 0%,
                        #f4dfb6 50%,
                        #c68200 70%,
                        #fad489 85%,
                        #c78302 100%
                    );
                    border-radius: 10px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
                    .girl-prize {
                        width: 190px;
                        height: 282px;
                        position: absolute;
                        top: 4px;
                        margin-left: -95px;
                        border-radius: 8px;
                    }
                }
                .prize-name-box {
                    width: 252px;
                    height: 36px;
                    position: absolute;
                    top: 2px;
                    margin-left: -16px;
                    background-image: url(../img/wpck-ram.png);
                    background-size: 100%;
                    font-size: 16px;
                    color: #ffd200;
                    font-weight: bold;
                    text-transform: uppercase;
                    line-height: 26px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                    &.small {
                        font-size: 12px;
                        top: 270px;
                        color: #fff;
                    }
                }
                .prize-dps-box {
                    width: 150px;
                    height: 80px;
                    position: absolute;
                    top: 298px;
                    margin-left: 6px;
                    background-image: url(../img/wpck-dps.png);
                    background-size: 100%;
                    .prize-dps-text {
                        width: 70px;
                        height: 26px;
                        position: absolute;
                        top: 10px;
                        margin-left: 70px;
                        color: #a3e7fa;
                        font-size: 20px;
                        font-weight: bold;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                    }
                }
                .prize-promote-box {
                    width: 60px;
                    height: 80px;
                    position: absolute;
                    top: 298px;
                    margin-left: 154px;
                    background-image: url(../img/wpck-promote.png);
                    background-size: 100%;
                    .prize-promote-text {
                        width: 60px;
                        height: 20px;
                        position: absolute;
                        top: 8px;
                        margin-left: 0px;
                        color: #311400;
                        font-size: 18px;
                        font-weight: bold;
                        text-shadow: 0 0 4px #fff;
                    }
                }
                .unique-skill-box-all {
                    width: 220px;
                    height: 380px;
                    position: absolute;
                    margin-left: 260px;
                    .prize-name-box {
                        top: 2px;
                        margin-left: -16px;
                    }
                    .unique-skill-box {
                        width: 210px;
                        height: 340px;
                        position: absolute;
                        top: 40px;
                        font-size: 0px;
                        .unique-skill {
                            width: 210px;
                            height: 76px;
                            position: relative;
                            display: inline-block;
                            background: linear-gradient(
                                0deg,
                                #e9b039 0%,
                                #fffe9a 100%
                            );
                            margin-bottom: 8px;
                            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.35);
                            .skill-pic-box {
                                width: 60px;
                                height: 60px;
                                position: absolute;
                                top: 8px;
                                margin-left: 8px;
                                border-radius: 8px;
                                background-color: #4c4c4c;
                                .skill-pic {
                                    width: 56px;
                                    height: 56px;
                                    position: absolute;
                                    top: 2px;
                                    margin-left: -28px;
                                    border-radius: 6px;
                                }
                            }
                            .skill-text-box {
                                width: 120px;
                                height: 60px;
                                position: absolute;
                                top: 8px;
                                margin-left: 78px;
                                display: table;
                                .skill-text {
                                    width: 100%;
                                    height: 100%;
                                    position: relative;
                                    display: table-cell;
                                    vertical-align: middle;
                                    font-size: 16px;
                                    color: #572f14;
                                    font-weight: bold;
                                    text-transform: uppercase;
                                }
                            }
                        }
                    }
                }
            }
            .prize-two-box {
                margin-left: 260px;
                display: none;
            }
            .prize-three-box {
                width: 220px;
                margin-left: 520px;
                .box1 {
                    width: 220px;
                    height: 190px;
                    position: absolute;
                    .prize-name-box.small {
                        top: 2px;
                    }
                    .prize-box {
                        width: 120px;
                        height: 120px;
                        position: absolute;
                        top: 40px;
                        margin-left: 50px;
                        background: linear-gradient(
                            180deg,
                            #c68300 0%,
                            #f4dfb6 50%,
                            #c68200 70%,
                            #fad489 85%,
                            #c78302 100%
                        );
                        border-radius: 10px;
                        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
                        font-size: 0px;
                        .prize-item {
                            width: 120px;
                            text-align: center;
                            .prize-pic {
                                width: 110px;
                                position: relative;
                            }
                        }
                        .prize-text {
                            width: 120px;
                            color: #572f14;
                            font-size: 24px;
                            font-weight: bold;
                            text-shadow: 0 0 10px #fff;
                        }
                    }
                }
                .box2 {
                    width: 220px;
                    height: 190px;
                    position: absolute;
                    top: 190px;
                    .prize-name-box.small {
                        top: 20px;
                    }
                    .girl-avatar-box {
                        width: 100px;
                        height: 113px;
                        position: absolute;
                        top: 60px;
                        margin-left: 60px;
                        background: linear-gradient(
                            180deg,
                            #c68300 0%,
                            #f4dfb6 50%,
                            #c68200 70%,
                            #fad489 85%,
                            #c78302 100%
                        );
                        border-radius: 10px;
                        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
                        .girl-avatar {
                            width: 90px;
                            height: 103px;
                            position: absolute;
                            top: 5px;
                            margin-left: -45px;
                            border-radius: 8px;
                        }
                        .prize-promote-box {
                            width: 42px;
                            height: 56px;
                            top: 68px;
                            margin-left: -22px;
                            .prize-promote-text {
                                width: 42px;
                                top: 4px;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
            .buy-pack-all-box {
                width: 740px;
                height: 66px;
                position: absolute;
                top: 394px;
                background-color: #98320d;
                border-radius: 10px;
                .new-old-price-box {
                    width: 240px;
                    height: 66px;
                    position: absolute;
                    margin-left: 12px;
                    .old-price,
                    .new-price {
                        width: 240px;
                        height: 18px;
                        position: relative;
                        margin: auto;
                        top: 10px;
                        color: #ed997b;
                        font-size: 14px;
                        font-weight: bold;
                        text-transform: uppercase;
                        text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
                    }
                    .new-price {
                        color: #fff000;
                        font-size: 22px;
                    }
                }
                .buy-pack-btn {
                    width: 206px;
                    height: 50px;
                    position: relative;
                    margin: auto;
                    top: 8px;
                    background-color: #7cbc30;
                    cursor: pointer;
                    border-radius: 8px;
                    box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25),
                        0 2px 4px 0 rgba(0, 0, 0, 0.45);
                    font-size: 16px;
                    font-weight: bold;
                    color: #fff;
                    line-height: 50px;
                    text-transform: uppercase;
                    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.45);
                    &:active {
                        top: 9px;
                    }
                }
                .value-box {
                    width: 110px;
                    height: 110px;
                    position: absolute;
                    top: -20px;
                    margin-left: 674px;
                    background-image: url(../img/zvezda.png);
                    background-size: 100%;
                    .value-num,
                    .value-text {
                        width: 80px;
                        height: 30px;
                        position: relative;
                        top: 26px;
                        margin: auto;
                        color: #fff;
                        font-size: 28px;
                        font-weight: bold;
                        text-transform: uppercase;
                        text-shadow: 0 2px 2px rgba(0, 0, 0, 0.55);
                    }
                    .value-text {
                        font-size: 18px;
                    }
                }
            }
        }
        .wpck-timer-box {
            width: 184px;
            height: 84px;
            position: absolute;
            top: -10px;
            margin-left: -10px;
            background-image: url(../img/timer-back.png);
            background-size: 100%;
            .time-left,
            .time-sec {
                width: 150px;
                height: 26px;
                position: absolute;
                top: 18px;
                margin-left: 18px;
                color: #fff000;
                font-size: 16px;
                font-weight: bold;
                text-transform: uppercase;
            }
            .time-sec {
                top: 34px;
                color: #fff;
                font-size: 24px;
            }
        }
        .wpck-plus {
            top: 186px;
            margin-left: 480px;
        }
        .wpck-plus-text {
            top: 164px;
            margin-left: 580px;
        }
    }

    .prize-name-box {
        width: 252px;
        height: 36px;
        position: absolute;
        top: 2px;
        margin-left: -16px;
        background-image: url(../img/wpck-ram.png);
        background-size: 100%;
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 26px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
        &.small {
            font-size: 12px;
            top: 270px;
        }
    }
    .wpck-plus,
    .wpck-plus1,
    .wpck-plus2 {
        width: 40px;
        height: 8px;
        position: absolute;
        background-color: #3d94b3;
        &:before {
            content: "";
            width: 8px;
            height: 40px;
            position: absolute;
            top: -16px;
            margin-left: 0px;
            background-color: #3d94b3;
        }
    }
    .wpck-plus-text {
        width: 100px;
        position: absolute;
        color: #3d94b3;
        font-size: 38px;
        font-weight: bold;
        text-transform: uppercase;
    }
    .girl-avatar-box {
        width: 100px;
        height: 113px;
        position: absolute;
        top: 60px;
        margin-left: 60px;
        background: linear-gradient(
            180deg,
            #c68300 0%,
            #f4dfb6 50%,
            #c68200 70%,
            #fad489 85%,
            #c78302 100%
        );
        border-radius: 10px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
        .girl-avatar {
            width: 90px;
            height: 103px;
            position: absolute;
            top: 5px;
            margin-left: -45px;
            border-radius: 8px;
        }
        .prize-promote-box {
            width: 42px;
            height: 56px;
            top: 68px;
            margin-left: -22px;
            .prize-promote-text {
                width: 42px;
                top: 4px;
                font-size: 14px;
            }
        }
    }
    .prize-box {
        width: 120px;
        height: 120px;
        position: absolute;
        top: 40px;
        margin-left: 50px;
        background: linear-gradient(
            180deg,
            #c68300 0%,
            #f4dfb6 50%,
            #c68200 70%,
            #fad489 85%,
            #c78302 100%
        );
        border-radius: 10px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
        font-size: 0px;
        .prize-item {
            width: 120px;
            text-align: center;
            .prize-pic {
                width: 110px;
                position: relative;
            }
        }
        .prize-text {
            width: 120px;
            color: #572f14;
            font-size: 24px;
            font-weight: bold;
            text-shadow: 0 0 10px #fff;
        }
    }
`;

const PopWpck3 = styled.div`
    ${PopWpck3Styles}
`;

export { PopWpck3Styles, PopWpck3 };
