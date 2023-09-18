import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenPseShopStyles = css`
    .popup-layer .m-popup.pseshop {
        width: 910px;
        height: 590px;
        left: 145px;
        top: 25px;
        .title {
            color: #572f14;
        }
        .color-box {
            background: linear-gradient(
                136deg,
                #8e7453 0%,
                #e3c7a3 50%,
                #ae916a 85%,
                #8f7553 100%
            );
            &:before {
                display: none;
            }
            &:after {
                display: none;
            }
        }
        .pse-cf-left-box-all {
            width: 230px;
            height: 500px;
            position: absolute;
            top: 70px;
            left: 20px;
            .pse-cf-girl {
                width: 230px;
                height: 390px;
                position: absolute;
                background-color: royalblue;
            }
            .color-btn {
                width: 230px;
                position: absolute;
                top: 400px;
                left: 0;
            }
            .pse-count-res-box {
                width: 230px;
                height: 40px;
                position: absolute;
                bottom: 0;
                background-color: #cbaa81;
                border-radius: 10px;
                box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.35);
                .pse-count-res-text {
                    width: auto;
                    height: auto;
                    position: relative;
                    top: -2px;
                    color: #fff;
                    font-size: 24px;
                    font-weight: bold;
                    .ic-pse-keygirl {
                        width: 30px;
                        height: 30px;
                        position: relative;
                        display: inline-block;
                        margin-right: 5px;
                        top: 6px;
                        background-image: url(../img/pse-keygirl.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                    }
                }
            }
        }
        .pse-cf-right-box-all {
            width: 630px;
            height: 430px;
            position: absolute;
            top: 70px;
            left: 260px;
            background-color: #cbaa81;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
            .pse-cf-right-box-text {
                width: 100%;
                height: 26px;
                position: absolute;
                background-color: #8e7453;
                color: #fff;
                font-size: 16px;
                font-weight: bold;
                text-transform: uppercase;
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
                line-height: 26px;
                .info-btn {
                    width: 26px;
                    height: 26px;
                    position: absolute;
                    top: 0;
                    right: 5px;
                    background-image: url(../img/i-ico.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    cursor: pointer;
                    &:active {
                        top: 1px;
                    }
                }
            }
            .pse-cf-res-shop-box-all {
                width: 610px;
                height: 385px;
                position: absolute;
                bottom: 10px;
                left: 10px;
                font-size: 0;
                .pse-cf-res-shop-box {
                    width: 600px;
                    height: 88px;
                    position: relative;
                    display: inline-block;
                    margin: 4px 0;
                    background-color: #f3d6b0;
                    .pse-cf-res-box-left {
                        width: 420px;
                        height: 100%;
                        position: absolute;
                        font-size: 0;
                        .pse-cf-res {
                            width: 80px;
                            height: 80px;
                            position: relative;
                            display: inline-block;
                            top: 4px;
                            background: linear-gradient(
                                0deg,
                                #e9b039 0%,
                                #fffe9a 100%
                            );
                            border-radius: 10px;
                            margin: 0 5px;
                            &::before {
                                content: "";
                                width: 76px;
                                height: 76px;
                                position: absolute;
                                top: 2px;
                                left: 2px;
                                border-radius: 8px;
                                background: linear-gradient(
                                    0deg,
                                    #ffe199 0%,
                                    #f4c657 18%,
                                    #ffe199 60%,
                                    #f4c557 85%,
                                    #ffe199 100%
                                );
                                box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.35);
                            }
                            .pse-cf-res-pic {
                                width: 60px;
                                height: 60px;
                                position: absolute;
                                top: 10px;
                                left: 10px;
                                img {
                                    width: 60px;
                                }
                            }

                            .pse-cf-res-count {
                                width: 46px;
                                height: 20px;
                                position: absolute;
                                bottom: 0;
                                right: 0;
                                background: linear-gradient(
                                    0deg,
                                    #7cbc30 0%,
                                    #bbee7f 100%
                                );
                                border-radius: 8px;
                                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                                color: #fff;
                                font-size: 12px;
                                font-weight: bold;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                                line-height: 20px;
                            }
                            &.common {
                                background: linear-gradient(
                                    0deg,
                                    #707172 0%,
                                    #d4d4d4 50%,
                                    #afb1b3 100%
                                );
                                &::before {
                                    background: linear-gradient(
                                        0deg,
                                        #949292 0%,
                                        #6a6f70 18%,
                                        #949292 60%,
                                        #6a6f70 85%,
                                        #949292 100%
                                    );
                                }
                            }
                            &.uncommon {
                                background: linear-gradient(
                                    0deg,
                                    #707172 0%,
                                    #d4d4d4 50%,
                                    #afb1b3 100%
                                );
                                &::before {
                                    background: linear-gradient(
                                        0deg,
                                        #598a62 0%,
                                        #3e5c44 18%,
                                        #598a62 60%,
                                        #3e5c44 85%,
                                        #598a62 100%
                                    );
                                }
                            }
                            &.rare {
                                background: linear-gradient(
                                    0deg,
                                    #707172 0%,
                                    #d4d4d4 50%,
                                    #afb1b3 100%
                                );
                                &::before {
                                    background: linear-gradient(
                                        0deg,
                                        #5c6e88 0%,
                                        #3e4a5c 18%,
                                        #5c6e88 60%,
                                        #3e4a5c 85%,
                                        #5c6e88 100%
                                    );
                                }
                            }
                            &.epic {
                                background: linear-gradient(
                                    0deg,
                                    #707172 0%,
                                    #d4d4d4 50%,
                                    #afb1b3 100%
                                );
                                &::before {
                                    background: linear-gradient(
                                        0deg,
                                        #c57923 0%,
                                        #834f14 18%,
                                        #c57923 60%,
                                        #834f14 85%,
                                        #c57923 100%
                                    );
                                }
                            }
                        }
                    }
                    .pse-cf-res-shop-buy-box {
                        width: 170px;
                        height: 88px;
                        position: absolute;
                        right: 10px;
                        top: 0;
                        .pse-cf-res-shop-buy-text {
                            width: 170px;
                            height: 24px;
                            position: absolute;
                            top: 6px;
                            right: 0;
                            color: #544746;
                            font-size: 20px;
                            font-weight: bold;
                            text-transform: uppercase;
                            line-height: 24px;
                        }
                        .store-button {
                            width: 170px;
                            height: 42px;
                            position: absolute;
                            text-align: center;
                            bottom: 10px;
                            right: 0;
                            background: linear-gradient(
                                45deg,
                                #e8c34e,
                                #f1da7c,
                                #cfa831,
                                #fbf1d8
                            );
                            border-radius: 8px;
                            box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                                inset 0 -3px 0px #c87725, 0 1px 3px #3d3737,
                                inset 0 0 3px #603806;
                            cursor: pointer;
                            text-transform: uppercase;
                            font-size: 20px;
                            font-weight: bold;
                            color: #4a3a08;
                            text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
                            line-height: 42px;
                            margin: auto;
                            &:active {
                                bottom: 9px;
                            }
                            &:hover {
                                box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                                    inset 0 -3px 0 #c87725, 0 0 12px #ff0,
                                    0 0 5px #ffc, inset 0 0 10px #ffc,
                                    inset 0 0 3px #603806;
                            }
                            .but-price {
                                position: relative;
                                display: inline-block;
                                margin: 0 2px 0 2px;
                                font-size: 24px;
                            }
                        }
                    }
                    .pse-cf-res-box-complete {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        display: none;
                        background-color: rgba(0, 0, 0, 0.75);
                        .txt {
                            margin: 0;
                            padding: 0;
                            display: block;
                            height: 40px;
                            position: absolute;
                            left: 50px;
                            right: 50px;
                            top: 36px;
                            border-radius: 10px;
                            border: solid 4px #fff;
                            line-height: 50px;
                            font-size: 28px;
                            font-weight: bold;
                            color: #fff;
                            text-transform: uppercase;
                            line-height: 40px;
                            box-shadow: inset 0 0 10px #fff, 0 0 10px #fff;
                            text-shadow: 0 0 5px #fff;
                            transform: rotate(-5deg);
                        }
                    }
                    &.complete {
                        .pse-cf-res-box-complete {
                            display: block;
                        }
                    }
                }
            }
            .color-btn {
                width: 180px;
                top: 442px;
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
            top: 15px;
            position: relative;
            color: #fff;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 14px;
        }
        &:active {
            box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                inset 0 2px 2px rgba(0, 0, 0, 0.2);
            .color-btn-text {
                top: 16px;
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
        &.diamond {
            background: linear-gradient(0deg, #4b97bf 0%, #7ae2ff 100%);
        }
    }

    .cw-clan-logo-bg,
    .cw-clan-logo {
        width: 70px;
        height: 70px;
        position: absolute;
        top: 5px;
        left: 92px;
        img {
            width: 70px;
        }
        .cw-clan-logo {
            top: 0;
            left: 0;
        }
    }

    .pse-cf-res {
        width: 80px;
        height: 80px;
        position: relative;
        display: inline-block;
        background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
        border-radius: 10px;
        margin: 0 5px;
        &::before {
            content: "";
            width: 76px;
            height: 76px;
            position: absolute;
            top: 2px;
            left: 2px;
            border-radius: 8px;
            background: linear-gradient(
                0deg,
                #ffe199 0%,
                #f4c657 18%,
                #ffe199 60%,
                #f4c557 85%,
                #ffe199 100%
            );
        }
        .pse-cf-res-pic {
            width: 60px;
            height: 60px;
            position: absolute;
            top: 10px;
            left: 10px;
            img {
                width: 60px;
            }
        }
        .pse-cf-res-count {
            width: 46px;
            height: 20px;
            position: absolute;
            bottom: 0;
            right: 0;
            background: linear-gradient(0deg, #7cbc30 0%, #bbee7f 100%);
            border-radius: 8px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
            line-height: 20px;
        }
        &.common {
            background: linear-gradient(
                0deg,
                #707172 0%,
                #d4d4d4 50%,
                #afb1b3 100%
            );
            &::before {
                background: linear-gradient(
                    0deg,
                    #949292 0%,
                    #6a6f70 18%,
                    #949292 60%,
                    #6a6f70 85%,
                    #949292 100%
                );
            }
        }
        &.uncommon {
            background: linear-gradient(
                0deg,
                #707172 0%,
                #d4d4d4 50%,
                #afb1b3 100%
            );
            &::before {
                background: linear-gradient(
                    0deg,
                    #598a62 0%,
                    #3e5c44 18%,
                    #598a62 60%,
                    #3e5c44 85%,
                    #598a62 100%
                );
            }
        }
        &.rare {
            background: linear-gradient(
                0deg,
                #707172 0%,
                #d4d4d4 50%,
                #afb1b3 100%
            );
            &::before {
                background: linear-gradient(
                    0deg,
                    #5c6e88 0%,
                    #3e4a5c 18%,
                    #5c6e88 60%,
                    #3e4a5c 85%,
                    #5c6e88 100%
                );
            }
        }
        &.epic {
            background: linear-gradient(
                0deg,
                #707172 0%,
                #d4d4d4 50%,
                #afb1b3 100%
            );
            &::before {
                background: linear-gradient(
                    0deg,
                    #c57923 0%,
                    #834f14 18%,
                    #c57923 60%,
                    #834f14 85%,
                    #c57923 100%
                );
            }
        }
    }
`;

const V2ScreenPseShop = styled.div`
    ${V2ScreenPseShopStyles}
`;

export { V2ScreenPseShopStyles, V2ScreenPseShop };
