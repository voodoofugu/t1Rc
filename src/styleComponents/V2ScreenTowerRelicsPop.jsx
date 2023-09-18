import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenTowerRelicsPopStyles = css`
    .popup-layer .m-popup.tower-relics-pop {
        width: 660px;
        height: 505px;
        left: 270px;
        top: 66px;
        .title {
            color: #572f14;
        }
        .color-box {
            box-shadow: inset 0 0 8px 2px rgba(0, 0, 0, 0.3);
            background: linear-gradient(0deg, #645143 0%, #8e8177 100%);
            &:before {
                display: none;
            }
            &:after {
                display: none;
            }
        }
        .cardreward-box-all {
            width: 600px;
            height: 330px;
            position: absolute;
            top: 86px;
            margin-left: 30px;
            font-size: 0px;
            .cardreward-box {
                width: 180px;
                height: 310px;
                position: relative;
                display: inline-block;
                margin: 0 10px 0 10px;
                border-radius: 6px;
                background-color: #53443a;
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
                    0 1px 1px rgba(255, 255, 255, 0.2);
                transition: ease-in-out 0.04s;
                &:hover {
                    background-color: #5f4e42;
                    top: -1px;
                    .card-box-back {
                        filter: brightness(1.06);
                    }
                }
                .card-box-back {
                    width: 156px;
                    height: 230px;
                    position: absolute;
                    top: 10px;
                    left: 12px;
                    background-image: url(../img/v2-rb-card-bg.jpg);
                    background-size: 100%;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25),
                        0 0 0 1px rgba(0, 0, 0, 0.1);
                    border-radius: 6px;
                    .card-vis {
                        width: 100%;
                        height: 100%;
                        color: #fff;
                        font-size: 180px;
                        font-weight: bold;
                        text-shadow: 0 4px 5px rgba(0, 0, 0, 0.25);
                    }
                    .reward-pic {
                        width: 100px;
                        height: 100px;
                        position: absolute;
                        top: 30px;
                        left: 28px;
                        img {
                            width: 100px;
                        }
                        display: none;
                        &:after {
                            content: "";
                            width: 100px;
                            height: 100px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            background-image: url(../img/paycheck.png);
                            background-size: 100px;
                            background-position: center;
                            background-repeat: no-repeat;
                            pointer-events: none;
                            opacity: 0;
                            transition: ease-in-out 0.1s;
                        }
                    }
                    .tower-relics-text-box {
                        width: 148px;
                        height: 80px;
                        position: absolute;
                        bottom: 4px;
                        left: 4px;
                        display: table;
                        background-color: rgba(0, 0, 0, 0.35);
                        border-radius: 4px;
                        visibility: hidden;
                        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2),
                            0 1px 2px rgba(255, 255, 255, 0.6);
                        .tower-relics-text {
                            position: relative;
                            width: calc(100% - 12px);
                            top: 50%;
                            left: 6px;
                            transform: translateY(-50%);
                            text-align: center;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                            color: #fff;
                            font-size: 12px;
                            font-weight: bold;
                        }
                    }
                    .rb-card-light {
                        width: 156px;
                        height: 163px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-image: url(../img/rb-card-light.png);
                        background-size: 100%;
                        display: none;
                    }
                }
                .color-btn.purple {
                    width: 156px;
                    height: 50px;
                    position: absolute;
                    top: 250px;
                    left: 12px;
                    animation: pulse 1s infinite;
                    .color-btn-text {
                        font-size: 14px;
                        top: 10px;
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
                        animation: none;
                        .color-btn-text {
                            top: 11px;
                        }
                    }
                }
            }
            .color-btn {
                .color-btn-text {
                    flex-direction: row;
                }
            }
            &.choose {
                .cardreward-box {
                    transition: ease-in-out 0.04s;
                    .color-btn.purple {
                        transition: ease-in-out 0.1s;
                    }
                    &.gold {
                        .card-box-back {
                            background-image: url(../img/v2-rb-card-bg-gold.jpg);
                            .card-vis {
                                display: none;
                            }
                            .reward-pic {
                                display: block;
                            }
                            .tower-relics-text-box {
                                visibility: visible;
                            }
                            .rb-card-light {
                                display: block;
                                animation: light 1s infinite;
                                @keyframes light {
                                    0% {
                                        opacity: 0;
                                    }
                                    50% {
                                        opacity: 1;
                                    }
                                    100% {
                                        opacity: 0;
                                    }
                                }
                            }
                        }
                    }
                    &.silver {
                        .card-box-back {
                            background-image: url(../img/v2-rb-card-bg-silver.jpg);
                            .card-vis {
                                display: none;
                            }
                            .reward-pic {
                                display: block;
                            }
                            .tower-relics-text-box {
                                visibility: visible;
                            }
                            .rb-card-light {
                                display: block;
                                animation: light 1s infinite;
                                @keyframes light {
                                    0% {
                                        opacity: 0;
                                    }
                                    50% {
                                        opacity: 1;
                                    }
                                    100% {
                                        opacity: 0;
                                    }
                                }
                            }
                        }
                    }
                    &.bronze {
                        .card-box-back {
                            background-image: url(../img/v2-rb-card-bg-bronze.jpg);
                            .card-vis {
                                display: none;
                            }
                            .reward-pic {
                                display: block;
                            }
                            .tower-relics-text-box {
                                visibility: visible;
                            }
                            .rb-card-light {
                                display: block;
                                animation: light 1s infinite;
                                @keyframes light {
                                    0% {
                                        opacity: 0;
                                    }
                                    50% {
                                        opacity: 1;
                                    }
                                    100% {
                                        opacity: 0;
                                    }
                                }
                            }
                        }
                    }
                    &.collected {
                        background-color: #74a837;
                        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
                            0 1px 4px rgba(0, 0, 0, 0.4);
                        pointer-events: none;
                        transition: ease-in-out 0.1s;
                        .card-box-back {
                            .reward-pic {
                                &:after {
                                    background-size: 84px;
                                    opacity: 1;
                                    transition: ease-in-out 0.1s;
                                }
                            }
                        }
                        .color-btn.purple {
                            box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.25),
                                0 2px 4px 0 rgba(0, 0, 0, 0.55);
                            background: linear-gradient(
                                0deg,
                                #e9b039 0%,
                                #fffe9a 100%
                            );
                            animation: none;
                            transition: ease-in-out 0.1s;
                            .color-btn-text {
                                top: 15px;
                            }
                        }
                    }
                }
            }
        }
        .cardreward-text-box {
            width: 584px;
            height: 50px;
            position: absolute;
            top: 420px;
            left: 38px;
            background-color: #53443a;
            box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.25),
                inset 0 1px 1px rgba(0, 0, 0, 0.2),
                0 1px 1px rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            .cardreward-text {
                width: 100%;
                height: auto;
                position: relative;
                text-align: center;
                color: #fff;
                font-weight: bold;
                font-size: 18px;
                text-transform: uppercase;
                line-height: 50px;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
            }
        }
    }
`;

const V2ScreenTowerRelicsPop = styled.div`
    ${V2ScreenTowerRelicsPopStyles}
`;

export { V2ScreenTowerRelicsPopStyles, V2ScreenTowerRelicsPop };
