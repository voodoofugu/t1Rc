import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .popup-layer .m-popup.store-diamonds {
        width: 1028px;
        height: 550px;
        left: 86px;
        top: 45px;
        .title {
            color: #572f14;
        }
        .color-box {
            background: linear-gradient(0deg, #645143 0%, #8e8177 100%);
            &:before {
                display: none;
            }
            &:after {
                display: none;
            }
        }
        .store-menu-box {
            width: 118px;
            height: 450px;
            position: absolute;
            top: 75px;
            left: 20px;
            .menu-box-all {
                width: 118px;
                height: 90px;
                position: relative;
                background-image: url(../img/shop-menu1.png);
                background-size: 100%;
                cursor: pointer;
                &:active {
                    top: 1px;
                }
                &.select {
                    background-image: url(../img/shop-menu2.png);
                }
                .menu-pic {
                    width: 80px;
                    height: 60px;
                    position: absolute;
                    left: 19px;
                }
                .menu-text {
                    width: 104px;
                    height: 18px;
                    position: absolute;
                    top: 60px;
                    left: 8px;
                    text-align: center;
                    font-size: 14px;
                    text-transform: uppercase;
                    font-weight: bold;
                    line-height: 20px;
                    color: #30261f;
                    text-shadow: 0 0 6px #fff;
                }
            }
        }
        .store-content-right-box {
            width: 870px;
            height: 450px;
            position: absolute;
            top: 75px;
            left: 145px;
            .store-item-box-all {
                width: 700px;
                height: 450px;
                position: absolute;
                background: linear-gradient(180deg, #b9aba1 0%, #9e8b7d 100%);
                border-radius: 6px;
                box-shadow: 0 2px 2px 0 #5e544c;
                .store-item-box-scroll {
                    width: 686px;
                    height: 430px;
                    position: absolute;
                    overflow: hidden;
                    overflow-y: scroll;
                    top: 10px;
                    margin-left: 10px;
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
                        box-shadow: inset 0 0 3px #796b60;
                        background: linear-gradient(
                            to right,
                            #fff,
                            #f5de80,
                            #f4b766,
                            #b26d12
                        );
                    }
                    .store-item-add {
                        width: 668px;
                        height: 348px;
                        position: relative;
                        font-size: 0;
                        background-image: url(../img/shop-pod2.jpg);
                        background-size: 100%;
                        text-align: center;
                        &.main-shelf {
                            z-index: 1;
                        }
                        .store-item-add-box {
                            width: 204px;
                            height: 320px;
                            position: relative;
                            display: inline-block;
                            background: #c78302;
                            border-radius: 8px;
                            margin: 6px;
                            margin-top: 11px;
                            margin-bottom: 24px;
                            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.65);
                            &:before {
                                content: "";
                                width: 196px;
                                height: 312px;
                                position: absolute;
                                top: 4px;
                                margin-left: -98px;
                                background: linear-gradient(
                                    0deg,
                                    #c68300 0%,
                                    #f4dfb6 40%,
                                    #c78302 65%,
                                    #fad489 85%,
                                    #c78302 100%
                                );
                                box-shadow: inset 0 0 20px 0 #f3dbab;
                                border-radius: 6px;
                            }
                            .store-item-point-bonus {
                                width: 170px;
                                height: 40px;
                                position: absolute;
                                top: 20px;
                                margin-left: 20px;
                                background-color: #9b6a0c;
                                border-radius: 6px;
                                color: #fff;
                                font-size: 16px;
                                text-transform: uppercase;
                                text-align: center;
                                line-height: 40px;
                                font-weight: bold;
                            }
                            .store-item-diamon {
                                width: 170px;
                                height: 110px;
                                position: absolute;
                                top: 52px;
                                margin-left: 20px;
                            }
                            .store-prize-box {
                                width: 170px;
                                height: 80px;
                                position: absolute;
                                top: 170px;
                                margin-left: 20px;
                                color: #443307;
                                font-size: 36px;
                                text-align: center;
                                font-weight: bold;
                                text-shadow: 0 1px 2px #fff;
                                .prize1 {
                                    width: 100%;
                                    height: 46px;
                                    position: relative;
                                }
                                .prize2 {
                                    width: 100%;
                                    height: 30px;
                                    position: relative;
                                    font-size: 20px;
                                    color: #c50000;
                                    text-decoration: line-through;
                                }
                                .free-prize {
                                    width: 100%;
                                    height: 30px;
                                    position: relative;
                                    font-size: 20px;
                                }
                            }
                            .store-button {
                                width: 170px;
                                height: 42px;
                                position: relative;
                                text-align: center;
                                top: 260px;
                                background: linear-gradient(
                                    45deg,
                                    #e8c34e,
                                    #f1da7c,
                                    #cfa831,
                                    #fbf1d8
                                );
                                border-radius: 8px;
                                box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                                    inset 0 -3px 0px #c87725, 0 0 3px #3d3737,
                                    0 0 7px #000, inset 0 0 3px #603806;
                                cursor: pointer;
                                text-transform: uppercase;
                                font-size: 20px;
                                font-weight: bold;
                                color: #4a3a08;
                                text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
                                line-height: 42px;
                                margin: auto;
                                &:active {
                                    top: 261px;
                                }
                                &:hover {
                                    box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                                        inset 0 -3px 0 #c87725, 0 0 12px #ff0,
                                        0 0 5px #ffc, inset 0 0 10px #ffc,
                                        inset 0 0 3px #603806;
                                }
                            }
                            .x2-first-buy {
                                width: 50px;
                                height: 50px;
                                position: absolute;
                                top: 166px;
                                right: -5px;
                                background: linear-gradient(
                                    0deg,
                                    #2585d4,
                                    #69d5f0
                                );
                                border-radius: 100%;
                                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
                                .x2-first-buy-text {
                                    width: 40px;
                                    height: auto;
                                    position: absolute;
                                    top: 3px;
                                    left: 5px;
                                    color: #fff;
                                    font-size: 12px;
                                    font-weight: bold;
                                    text-transform: uppercase;
                                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
                                }
                            }
                        }
                    }
                }
            }
            .store-sale-box {
                width: 150px;
                height: 450px;
                position: absolute;
                left: 710px;
                background: linear-gradient(
                    180deg,
                    #585a5c 0%,
                    #d5d8da 50%,
                    #585a5b 70%,
                    #a1a4a6 85%,
                    #585a5b 100%
                );
                border-radius: 10px;
                box-shadow: 0 2px 2px 0 #5e544c;
                &:before {
                    content: "";
                    width: 146px;
                    height: 446px;
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    background-image: url(../img/ts_confirm_bk-1.jpg);
                    background-size: 412%;
                    background-repeat: no-repeat;
                    overflow: hidden;
                    background-position: center;
                    border-radius: 8px;
                }
                .store-sale-box-name {
                    width: 150px;
                    height: 36px;
                    position: absolute;
                    background: linear-gradient(
                        180deg,
                        #585a5c 0%,
                        #d5d8da 50%,
                        #585a5b 70%,
                        #a1a4a6 85%,
                        #585a5b 100%
                    );
                    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.35);
                    border-radius: 10px 10px 0 0;
                    text-align: center;
                    line-height: 36px;
                    text-transform: uppercase;
                    font-size: 16px;
                    font-weight: bold;
                    color: #3b291b;
                    text-shadow: 0 0 10px #fff;
                }
                .store-sale-all-box {
                    width: 146px;
                    height: 408px;
                    position: absolute;
                    top: 40px;
                    left: 2px;
                    .store-sale {
                        width: 146px;
                        height: 204px;
                        position: relative;
                        display: inline-block;
                        .store-item-point-bonus-vip {
                            width: 120px;
                            height: 20px;
                            position: absolute;
                            top: 2px;
                            left: 13px;
                            text-align: center;
                            text-align: center;
                            text-transform: uppercase;
                            line-height: 20px;
                            font-size: 12px;
                            font-weight: bold;
                            color: #fff;
                            background-color: #443307;
                            border-radius: 6px;
                        }
                        .store-sale-pic-vip {
                            width: 120px;
                            height: 120px;
                            position: absolute;
                            top: 26px;
                            left: 13px;
                            background: linear-gradient(
                                180deg,
                                #c68300 0%,
                                #f4dfb6 50%,
                                #c68200 70%,
                                #fad489 85%,
                                #c78302 100%
                            );
                            border-radius: 8px;
                            box-shadow: 0 2px 6px 0 #3b291b;
                            &:before {
                                content: "";
                                width: 116px;
                                height: 116px;
                                position: absolute;
                                top: 2px;
                                left: 2px;
                                background: linear-gradient(
                                    180deg,
                                    #c68300 0%,
                                    #f4dfb6 50%,
                                    #c78302 70%,
                                    #fad489 85%,
                                    #c78302 100%
                                );
                                border-radius: 6px;
                                box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.35);
                            }
                            > img {
                                position: absolute;
                                top: 2px;
                                left: 5px;
                                width: 110px;
                            }
                            .store-timer-box {
                                width: 50px;
                                height: 50px;
                                position: absolute;
                                top: -2px;
                                left: -4px;
                                background-image: url(../img/offer-bk-sm.png);
                                background-size: 100%;
                                .store-timer-text {
                                    width: 44px;
                                    height: 30px;
                                    position: absolute;
                                    top: 2px;
                                    left: 2px;
                                    text-align: center;
                                    text-transform: uppercase;
                                    font-size: 14px;
                                    font-weight: bold;
                                    color: #ffcc00;
                                    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
                                }
                            }
                            .store-prize-box {
                                width: 120px;
                                height: 40px;
                                position: absolute;
                                top: 82px;
                                color: #443307;
                                font-size: 18px;
                                text-align: center;
                                font-weight: bold;
                                text-shadow: 0 1px 2px #fff;
                                .prize1 {
                                    width: 100%;
                                    height: 18px;
                                    position: relative;
                                    top: -10px;
                                    font-size: 25px;
                                }
                                .prize2 {
                                    width: 100%;
                                    height: 16px;
                                    position: relative;
                                    font-size: 14px;
                                    color: #c50000;
                                    text-decoration: line-through;
                                }
                                .free-prize {
                                    width: 100%;
                                    height: 16px;
                                    position: relative;
                                    font-size: 14px;
                                }
                            }
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
        &.diamond {
            background: linear-gradient(0deg, #4b97bf 0%, #7ae2ff 100%);
        }
    }

    .store-button {
        width: 170px;
        height: 42px;
        position: relative;
        text-align: center;
        top: 300px;
        background: linear-gradient(45deg, #e8c34e, #f1da7c, #cfa831, #fbf1d8);
        border-radius: 8px;
        box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
            inset 0 -3px 0px #c87725, 0 0 3px #3d3737, 0 0 7px #000,
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
            top: 261px;
        }
        &:hover {
            box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                inset 0 -3px 0 #c87725, 0 0 12px #ff0, 0 0 5px #ffc,
                inset 0 0 10px #ffc, inset 0 0 3px #603806;
        }
        .but-price {
            position: relative;
            display: inline-block;
            margin: 0 2px 0 2px;
            font-size: 24px;
            &.old {
                color: #ef0000;
                text-decoration: line-through;
                font-size: 16px;
                top: -2px;
            }
        }
        &.sale {
            width: 128px;
            height: 44px;
            top: 154px;
            &:active {
                top: 155px;
            }
            .but-price {
                position: relative;
                display: inline-block;
                margin: 0 2px 0 2px;
                font-size: 24px;
                &.old {
                    color: #ef0000;
                    text-decoration: line-through;
                    font-size: 16px;
                }
            }
        }
    }
`;

export { stylesFileName, pageStyles };
