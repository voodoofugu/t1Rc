import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ScreenRatingRewardStyles = css`
    .popup-layer .m-popup.rating-reward {
        width: 456px;
        height: 580px;
        margin-left: 30px;
        top: 24px;
        position: absolute;
        left: 12%;
        right: 11%;
        width: auto;
        &:before {
            content: "";
            background: linear-gradient(0deg, #938274 0%, #dbc2ad 100%);
        }
        .color-box {
            display: none;
        }
        .rating-reward-box {
            width: 388px;
            height: 388px;
            position: absolute;
            top: 74px;
            margin-left: 24px;
            background-color: #453a32;
            padding: 10px 5px 10px 15px;
            text-align: left;
            border-radius: 10px;
            .reward-place-box {
                width: 300px;
                height: 60px;
                position: absolute;
                top: 20px;
                margin-left: 80px;
                background-color: #8b7869;
                display: table;
                border-radius: 10px;
                box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
                .reward-place-text {
                    width: 100%;
                    height: auto;
                    position: relative;
                    display: table-cell;
                    vertical-align: middle;
                    text-align: center;
                    padding: 10px;
                    font-size: 18px;
                    color: #fff;
                    text-shadow: 0 0 6px #000;
                }
            }

            .reward-chest-box {
                text-align: center;
                width: 200px;
                height: 200px;
                position: absolute;
                top: 140px;
                margin-left: 133px;
                background: linear-gradient(
                    180deg,
                    #c68300 0%,
                    #f4dfb6 50%,
                    #c68200 70%,
                    #fad489 85%,
                    #c78302 100%
                );
                border-radius: 10px;
                box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.85);
                animation: chest-box 0.35s linear 0s;
                &.no-text {
                    top: 110px;
                }
                &:before {
                    content: "";
                    width: 196px;
                    height: 196px;
                    position: absolute;
                    top: 2px;
                    margin-left: -98px;
                    background: linear-gradient(0deg, #938274 0%, #dbc2ad 100%);
                    border-radius: 8px;
                    box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, 0.5);
                }
                .reward-chest {
                    width: 140px;
                    height: 140px;
                    position: absolute;
                    top: 30px;
                    margin-left: 30px;
                    &.silver {
                        background-image: url(../img/icon-sunduk-200-1.png);
                        background-size: 100%;
                    }
                    &.gold {
                        background-image: url(../img/icon-sunduk-200-2.png);
                        background-size: 100%;
                    }
                    &.top {
                        background-image: url(../img/icon-sunduk-200-3.png);
                        background-size: 100%;
                    }
                    img {
                        top: -27px;
                        left: -28px;
                        position: relative;
                    }
                }
            }

            &.open {
                .reward-box {
                    display: inline-block;
                    animation: reward-box-open 0.35s linear 0s;
                    .newtime {
                        z-index: 1;
                        width: 65px;
                        background-size: 65px;
                        top: 49px;
                        left: 37px;
                        .newclocktime {
                            top: 29px;
                            margin-left: 23px;
                        }
                    }
                    .promote {
                        position: absolute;
                        z-index: 1;
                        top: 49px;
                        background-image: url(../img/arrow_up1.png);
                        height: 45px;
                        width: 45px;
                        background-size: 45px;
                        left: 52px;
                    }
                }
                .reward-chest-box {
                    display: none;
                }
            }
            .reward-box {
                width: 90px;
                height: 90px;
                position: relative;
                display: none;
                text-align: center;
                cursor: pointer;
                background: linear-gradient(180deg, #7b6d62 0%, #a18e80 100%);
                border-radius: 6px;
                margin: 2px;
                backface-visibility: hidden;
                transition: transform 0.3s;
                &:before {
                    content: "";
                    width: 86px;
                    height: 86px;
                    position: absolute;
                    top: 2px;
                    margin-left: -43px;
                    background: linear-gradient(0deg, #7b6d62 0%, #a18e80 100%);
                    border-radius: 4px;
                }
                &:after {
                    content: "?";
                    width: 70px;
                    height: 70px;
                    position: absolute;
                    top: 10px;
                    margin-left: -35px;
                    border-radius: 100%;
                    background: linear-gradient(
                        180deg,
                        #7b6d62 0%,
                        #a18e80 100%
                    );
                    font-size: 60px;
                    font-weight: bold;
                    color: #8f7e71;
                    text-shadow: 0 0 10px #2e2721;
                }
                &.empty {
                    .prize-box,
                    .rank-reward-num,
                    .newtime,
                    .promote {
                        display: none;
                    }
                }
                &.prize {
                    background: linear-gradient(
                        180deg,
                        #c68300 0%,
                        #f4dfb6 50%,
                        #c68200 70%,
                        #fad489 85%,
                        #c78302 100%
                    );
                    animation: reward-box-prize 0.4s linear 0s;
                    &:before {
                        content: "";
                        background: linear-gradient(
                            0deg,
                            #ffc131 0%,
                            #ffde21 100%
                        );
                        box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
                    }
                    &:after {
                        display: none;
                    }
                    .prize-box {
                        overflow: hidden;
                        width: 80px;
                        height: 80px;
                        position: absolute;
                        top: 5px;
                        margin-left: 5px;
                        img {
                            width: 80px;
                        }
                        &.video img {
                            height: 90px;
                            position: relative;
                            width: auto;
                            right: 30px;
                        }
                    }
                    .rank-reward-num {
                        background: linear-gradient(
                            0deg,
                            #858585 0%,
                            #ffffff 100%
                        );
                        padding: 2px;
                        color: #42372f;
                        position: absolute;
                        top: 68px;
                        font-size: 12px;
                        font-weight: bold;
                        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
                        border-radius: 6px;
                        width: auto;
                        right: 0px;
                        margin-left: 0;
                    }
                }
            }
        }
        .color-btn.collect,
        .color-btn.ok {
            width: 206px;
            top: 500px;
            left: 0;
        }
        .reward-place-box {
            left: 21%;
        }
        .reward-chest-box {
            left: 21%;
        }

        .rating-reward-box {
            left: 5%;
            right: 5%;
            margin-left: 0;
            width: auto;
            overflow-y: scroll;

            &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
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
        }
        @keyframes chest-box {
            0% {
                transform: scale(0.1);
                opacity: 0;
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }
        @keyframes chest-box {
            0% {
                transform: scale(0.1);
                opacity: 0;
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }
        @keyframes reward-box-prize {
            0% {
                transform: scale(0.1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scalex(1);
            }
        }
        @keyframes reward-box-open {
            0% {
                transform: scale(0.1);
                opacity: 0;
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }
    }
`;

const ScreenRatingReward = styled.div`
    ${ScreenRatingRewardStyles}
`;

export { ScreenRatingRewardStyles, ScreenRatingReward };
