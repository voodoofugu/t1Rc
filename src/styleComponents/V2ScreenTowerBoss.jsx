import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .main .right-side {
        .bossbtn-box {
            width: 430px;
            height: 84px;
            position: absolute;
            top: 310px;
            left: 22px;
            background: linear-gradient(
                180deg,
                #8e7453 0%,
                #e3c7a3 50%,
                #8f7553 70%,
                #ae916a 85%,
                #8f7553 100%
            );
            border-radius: 6px;
            box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.2),
                inset 0 2px 4px rgba(255, 255, 255, 0.3),
                0 2px 4px 0 rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(0, 0, 0, 0.1);
            .type-box {
                width: 75px;
                height: 76px;
                position: absolute;
                top: 4px;
                left: 4px;
                .type-top {
                    width: 75px;
                    height: 26px;
                    position: absolute;
                    left: 3px;
                    background-color: #6b5a4c;
                    border-radius: 6px;
                    color: #fed700;
                    font-size: 16px;
                    font-weight: bold;
                    text-transform: uppercase;
                    line-height: 26px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
                        0 1px 1px rgba(255, 255, 255, 0.2);
                }
                .type-name {
                    width: 75px;
                    height: 50px;
                    position: absolute;
                    top: 26px;
                    left: 3px;
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-align: center;
                    line-height: 50px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
                }
            }
            .plas-all-box {
                width: 348px;
                height: 76px;
                position: absolute;
                top: 4px;
                left: 81px;
                font-size: 0px;
                .plas-all {
                    width: 110px;
                    height: 76px;
                    position: relative;
                    display: inline-block;
                    background-color: #6b5a4c;
                    border-radius: 6px;
                    margin: 0 2px 0 2px;
                    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
                        0 1px 1px rgba(255, 255, 255, 0.2);
                    .xp-icon,
                    .time-icon,
                    .dps-icon {
                        width: 24px;
                        height: 24px;
                        position: relative;
                        display: inline-block;
                        background-image: url(../img/xp-icon@2x.png);
                        background-size: 100%;
                        top: 6px;
                    }
                    .time-icon {
                        background-image: url(../img/time-icon@2x.png);
                    }
                    .dps-icon {
                        background-image: url(../img/dps-icon@2x.png);
                        margin: 0 2px 0 2px;
                    }
                    .plas {
                        width: 102px;
                        height: 32px;
                        position: absolute;
                        margin: 0 4px;
                        text-align: center;
                        color: #fed700;
                        font-size: 16px;
                        font-weight: bold;
                        top: -2px;
                        text-transform: uppercase;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                    }
                    .plas.dps {
                        line-height: 12px;
                        font-size: 12px;
                        top: -10px;
                    }
                    .btn-buy {
                        right: 3px;
                        width: 104px;
                    }
                    .used-already {
                        width: 110px;
                        height: 76px;
                        position: absolute;
                        display: none;
                        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
                        background: linear-gradient(
                            0deg,
                            #e9b039 0%,
                            #fffe9a 100%
                        );
                        border-radius: 6px;
                        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
                            0 1px 1px rgba(0, 0, 0, 0.4);
                        .us-al-text {
                            font-size: 16px;
                            font-weight: bold;
                            color: #524134;
                            text-transform: uppercase;
                            display: table-cell;
                            vertical-align: middle;
                        }
                    }
                    .color-btn.diamond {
                        width: 100px;
                        height: 40px;
                        position: absolute;
                        top: 34px;
                        left: 5px;
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
                    &.active {
                        .used-already {
                            display: table;
                        }
                        .plas,
                        .plas.dps {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    .color-btn {
        width: 90px;
        height: 40px;
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
        &.diamond {
            background: linear-gradient(0deg, #4b97bf 0%, #7ae2ff 100%);
        }
    }
`;

export { stylesFileName, pageStyles };
