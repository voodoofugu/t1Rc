import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .main .popup-layer .m-popup.chests-shop {
        width: 824px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: auto;
        &:before {
            background: linear-gradient(0deg, #8f5c40 0%, #713319 112.47%);
        }
        .title {
            color: #5e2e18;
        }
        .content {
            margin: 10px;
            margin-top: 60px;
            .content-header {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 60px;
                background: rgba(0, 0, 0, 0.2);
                .trophy-res-box {
                    width: 170px;
                    height: 36px;
                    position: relative;
                    margin: 0 10px;
                    background: linear-gradient(
                        0deg,
                        #ffe199,
                        #f4c657 18%,
                        #ffe199 60%,
                        #f4c557 85%,
                        #ffe199
                    );
                    border-radius: 18px;
                    box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.55),
                        0 2px 4px 0 rgba(0, 0, 0, 0.35);
                    &:before,
                    &:after {
                        content: "";
                        width: 32px;
                        height: 32px;
                        position: absolute;
                        top: 1px;
                        left: 3px;
                    }
                    .trophy-value {
                        width: 98px;
                        height: 28px;
                        position: absolute;
                        top: 3px;
                        left: 36px;
                        background: linear-gradient(
                            90deg,
                            #f4bf87,
                            #d38632 50%,
                            #92581a
                        );
                        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25),
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
                        filter: drop-shadow(
                            0 1px 0.5px rgba(255, 255, 255, 0.795)
                        );
                        &:before {
                            content: "";
                            width: 6px;
                            height: 22px;
                            position: absolute;
                            top: 7px;
                            left: 12px;
                            background-color: #3c3737;
                            border-radius: 2px;
                        }
                        &:after {
                            content: "";
                            width: 22px;
                            height: 6px;
                            position: absolute;
                            top: 15px;
                            left: 4px;
                            background-color: #3c3737;
                            border-radius: 2px;
                        }
                        &:hover {
                            &:before {
                                background-color: #4f4646;
                            }
                            &:after {
                                background-color: #4f4646;
                            }
                        }
                        &:active {
                            &:before {
                                width: 4px;
                                height: 20px;
                                top: 8px;
                                left: 13px;
                            }
                            &:after {
                                width: 20px;
                                height: 4px;
                                top: 16px;
                                left: 5px;
                            }
                        }
                    }
                    &.diamonds {
                        &:before {
                            background-image: url(../img/v2-res-diamond.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                    }
                    &.oil {
                        &:before {
                            background-image: url(../img/ic-black-butil-40.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                    }
                    &.spirit {
                        &:before {
                            background-image: url(../img/v2-mn-soul-sg-160.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                    }
                }
                .color-btn.info {
                    text-align: center;
                    width: 25px;
                    height: 25px;
                    position: absolute;
                    top: 15px;
                    right: 17px;
                    background: linear-gradient(
                        0deg,
                        #ffbc2c 0%,
                        #ac7c14 50%,
                        #ffe3ae 100%
                    );
                    font-style: italic;
                    font-family: "Times New Roman", Times, serif;
                    border-radius: 100%;
                    cursor: pointer;
                    border: 2px solid #fff;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.75),
                        inset 0 0 6px rgba(0, 0, 0, 0.2);
                    color: #fff;
                    font-size: 24px;
                    font-weight: bold;
                    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
                    line-height: 25px;
                    &:active {
                        transform: scale(0.94);
                    }
                }
            }
            .item-box {
                padding: 22px 0;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                .store-item-box {
                    width: 170px;
                    height: 196px;
                    position: relative;
                    display: inline-block;
                    border-radius: 6px;
                    background: linear-gradient(
                        180deg,
                        #8e7453,
                        #e3c7a3 50%,
                        #8f7553 70%,
                        #ae916a 85%,
                        #8f7553
                    );
                    margin: 10px;
                    box-shadow: 0 2px 0 #543c1e, 0 3px 6px 0 rgba(0, 0, 0, 0.8);
                    transform: translateY(0px) scale(0.99);
                    transition: ease-in-out 0.05s;
                    &:hover {
                        transform: translateY(-2px) scale(1);
                        transition: ease-in-out 0.05s;
                        box-shadow: 0 2px 0 #543c1e,
                            0 3px 6px 0 rgba(0, 0, 0, 0.8);
                    }
                    &:before {
                        content: "";
                        width: 162px;
                        height: 188px;
                        position: absolute;
                        top: 4px;
                        left: 4px;
                        border-radius: 4px;
                        background: linear-gradient(180deg, #b59b87, #7f6858);
                        box-shadow: inset 0 0 20px 0 #50463f;
                    }
                    .store-name {
                        width: 100%;
                        height: 24px;
                        position: absolute;
                        top: 0;
                        margin-left: 0;
                        line-height: 24px;
                        background: linear-gradient(
                            180deg,
                            #8e7453,
                            #e3c7a3 50%,
                            #8f7553 70%,
                            #ae916a 85%,
                            #8f7553
                        );
                        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.35);
                        border-radius: 6px 6px 0 0;
                        text-shadow: 0 0 4px #fff;
                        text-align: center;
                        text-transform: uppercase;
                        font-size: 14px;
                        font-weight: 700;
                        color: #3b291b;
                    }
                    .item {
                        width: 90px;
                        height: 90px;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        top: 32px;
                        background: linear-gradient(
                            138.45deg,
                            #ae8430 5.67%,
                            #ffee96 24.29%,
                            #f0cf4e 35.56%,
                            #dfb03c 68.89%,
                            #ffe261 82.61%,
                            #dcba4c 87.51%,
                            #ae8430 99.76%
                        );
                        border-radius: 8px;
                        box-shadow: 0 2px 4px 0 #50463f;
                        &:before {
                            content: "";
                            width: calc(100% - 3px);
                            height: calc(100% - 3px);
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            background: linear-gradient(
                                180deg,
                                #aa9d9b 0%,
                                #4b3e3b 100%
                            );
                            border-radius: 7px;
                        }
                        > img {
                            width: 87px;
                            position: absolute;
                            top: 2px;
                            left: 2px;
                        }
                        .reward-value {
                            position: absolute;
                            left: 50%;
                            bottom: -10px;
                            width: 62px;
                            height: 22px;
                            transform: translateX(-50%);
                            background: linear-gradient(
                                138.45deg,
                                #ae8430 5.67%,
                                #ffee96 24.29%,
                                #f0cf4e 35.56%,
                                #dfb03c 68.89%,
                                #ffe261 82.61%,
                                #dcba4c 87.51%,
                                #ae8430 99.76%
                            );
                            border-radius: 6px;
                            box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
                                inset 0 -2px rgba(60, 36, 0, 0.4),
                                0 2px 4px 0 #50463f,
                                0 0 0 1px rgba(0, 0, 0, 0.2);
                            color: #4a3a08;
                            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 20px;
                        }
                    }
                    .chest-currency {
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        right: 7px;
                        top: 27px;
                        background-image: url(../img/v2-res-diamond.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                        background-position: center;
                        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));
                    }
                    .color-btn {
                        position: absolute;
                        top: 142px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 144px;
                    }
                }
                .store-item-box.orange {
                    background: linear-gradient(
                        180deg,
                        #bf6e24 2.05%,
                        #ffd6b1 38.31%,
                        #bf6e24 79.69%,
                        #ca772a 99.39%
                    );
                    .store-name {
                        background: linear-gradient(
                            180deg,
                            #bf6e24 2.05%,
                            #ffd6b1 38.31%,
                            #bf6e24 79.69%,
                            #ca772a 99.39%
                        );
                    }
                }
                .store-item-box.blue {
                    background: linear-gradient(
                        180deg,
                        #4e6981 2.05%,
                        #bedaf5 38.31%,
                        #4b5e7b 79.69%,
                        #8191a9 99.39%
                    );
                    .store-name {
                        background: linear-gradient(
                            180deg,
                            #4e6981 2.05%,
                            #bedaf5 38.31%,
                            #4b5e7b 79.69%,
                            #8191a9 99.39%
                        );
                    }
                    .chest-currency {
                        background-image: url(../img/ic-black-butil-40.png);
                    }
                }
                .store-item-box.gold {
                    background: linear-gradient(
                        180deg,
                        #bb9540 2.05%,
                        #fdeb8f 38.31%,
                        #b99137 79.69%,
                        #e2b640 99.39%
                    );
                    .store-name {
                        background: linear-gradient(
                            180deg,
                            #bb9540 2.05%,
                            #fdeb8f 38.31%,
                            #b99137 79.69%,
                            #e2b640 99.39%
                        );
                    }
                    .item {
                        > img {
                            width: 98px;
                            top: 5px;
                            left: -8px;
                        }
                    }
                    .chest-currency {
                        background-image: url(../img/v2-mn-soul-sg-160.png);
                    }
                }
            }
        }
    }

    .main.world3 .popup-layer .m-popup.chests-shop {
        &:before {
            background: linear-gradient(180deg, #4b3a67 0%, #7b5da2 100%);
        }
        .title {
            color: #fff;
        }
        .content {
            .content-header {
                background: linear-gradient(180deg, #351b5f 0%, #442768 100%);
                .trophy-res-box {
                    background: linear-gradient(
                        180deg,
                        #a7deff 0%,
                        #63c5ff 25%,
                        #a6ddff 50.52%,
                        #66c6ff 75%,
                        #a5ddff 100%
                    );
                    box-shadow: inset 0 -2px 0 0 rgba(0, 74, 160, 0.55),
                        0 2px 4px 0 rgba(0, 0, 0, 0.35);
                    .trophy-value {
                        background: linear-gradient(
                            270deg,
                            #054188 0%,
                            #116bbe 50%,
                            #3c89e3 100%
                        );
                    }
                    .trophy-value-btn-add {
                        &:before {
                            background-color: #553e7c;
                        }
                        &:after {
                            background-color: #553e7c;
                        }
                        &:hover {
                            &:before {
                                background-color: #6d4f9f;
                            }
                            &:after {
                                background-color: #6d4f9f;
                            }
                        }
                    }
                }
                .color-btn.info {
                    background: linear-gradient(
                        180deg,
                        #6a4fd4,
                        #43297b,
                        #6a4fd4
                    );
                }
            }
            .item-box {
                .store-item-box {
                    background: linear-gradient(
                        180deg,
                        #8e7453,
                        #e3c7a3 50%,
                        #8f7553 70%,
                        #ae916a 85%,
                        #8f7553
                    );
                    box-shadow: 0 2px 0 #543c1e, 0 3px 6px 0 rgba(0, 0, 0, 0.8);
                    &:hover {
                        box-shadow: 0 2px 0 #543c1e,
                            0 3px 6px 0 rgba(0, 0, 0, 0.8);
                    }
                    &:before {
                        background: linear-gradient(180deg, #b59b87, #7f6858);
                        box-shadow: inset 0 0 20px 0 #50463f;
                    }
                    .store-name {
                        background: linear-gradient(
                            180deg,
                            #8e7453,
                            #e3c7a3 50%,
                            #8f7553 70%,
                            #ae916a 85%,
                            #8f7553
                        );
                        color: #3b291b;
                    }
                    .item {
                        background: linear-gradient(
                            138.45deg,
                            #ae8430 5.67%,
                            #ffee96 24.29%,
                            #f0cf4e 35.56%,
                            #dfb03c 68.89%,
                            #ffe261 82.61%,
                            #dcba4c 87.51%,
                            #ae8430 99.76%
                        );
                        box-shadow: 0 2px 4px 0 #50463f;
                        &:before {
                            background: linear-gradient(
                                180deg,
                                #aa9d9b 0%,
                                #4b3e3b 100%
                            );
                        }
                    }
                }
                .store-item-box.orange {
                    background: linear-gradient(
                        180deg,
                        #bf6e24 2.05%,
                        #ffd6b1 38.31%,
                        #bf6e24 79.69%,
                        #ca772a 99.39%
                    );
                    .store-name {
                        background: linear-gradient(
                            180deg,
                            #bf6e24 2.05%,
                            #ffd6b1 38.31%,
                            #bf6e24 79.69%,
                            #ca772a 99.39%
                        );
                    }
                }
                .store-item-box.blue {
                    background: linear-gradient(
                        180deg,
                        #4e6981 2.05%,
                        #bedaf5 38.31%,
                        #4b5e7b 79.69%,
                        #8191a9 99.39%
                    );
                    .store-name {
                        background: linear-gradient(
                            180deg,
                            #4e6981 2.05%,
                            #bedaf5 38.31%,
                            #4b5e7b 79.69%,
                            #8191a9 99.39%
                        );
                    }
                }
                .store-item-box.gold {
                    background: linear-gradient(
                        180deg,
                        #bb9540 2.05%,
                        #fdeb8f 38.31%,
                        #b99137 79.69%,
                        #e2b640 99.39%
                    );
                    .store-name {
                        background: linear-gradient(
                            180deg,
                            #bb9540 2.05%,
                            #fdeb8f 38.31%,
                            #b99137 79.69%,
                            #e2b640 99.39%
                        );
                    }
                }
            }
        }
    }
`;

export { stylesFileName, pageStyles };
