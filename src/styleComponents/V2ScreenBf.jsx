import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .popup-layer .m-popup.bf-pop {
        width: 1006px;
        height: 580px;
        left: 97px;
        top: 30px;
        background: linear-gradient(-22deg, #595959, #303030, #595959, #7a7a7a);
        box-shadow: 0 1px 10px #392d26, inset 0 1px 2px #505050, 0 0 10px #000,
            0 0 15px #000;
        &:before {
            content: "";
            box-shadow: 0 0 2px #fff, inset 0 0 5px rgba(0, 0, 0, 0.55);
        }
        .title {
            background: linear-gradient(to right, #595959, #303030, #595959);
            border: solid 4px #3e3e3e;
            box-shadow: 0 1px 10px #303030,
                inset 0 2px 10px rgba(189, 189, 189, 0.15),
                inset 0 28px 5px rgba(189, 189, 189, 0.15);
            color: #fff;
            text-shadow: 0 0 1px #413753, 0 1px 1px #fff, 0 1px 10px #ffffff;
        }
        .color-box {
            background: linear-gradient(0deg, #000000 0%, #282828 100%);
            &:before {
                display: none;
            }
            &:after {
                display: none;
            }
        }
        .btn-close-x {
            background: linear-gradient(
                22deg,
                #7a7a7a,
                #949494,
                #595959,
                #7a7a7a
            );
            border: solid 4px #3e3e3e;
            &:before {
                content: "✖";
                color: #000;
                text-shadow: 0 0 2px #808080, 0 0 2px #808080, 0 0 2px #808080,
                    0 0 2px #808080, 0 0 7px #fff, 0 0 7px #fff, 0 0 7px #fff;
            }
        }
        .v2-bf-sale {
            width: 200px;
            height: 400px;
            position: absolute;
            top: 80px;
            left: 20px;
            background-image: url(../img/v2-bf-sale.png);
            background-size: 100%;
            background-repeat: no-repeat;

            &.friday_hero2 {
                background-image: url(../img/v2-bf-sale.png);
            }
        }
        .bf-hero-box-all {
            width: 760px;
            height: 390px;
            position: absolute;
            top: 80px;
            right: 20px;
            .lhero-box {
                width: 230px;
                height: 390px;
                position: relative;
                display: inline-block;
                margin: 0 10px;
                background: linear-gradient(
                    0deg,
                    #8e7453 0%,
                    #e3c7a3 50%,
                    #8f7553 70%,
                    #ae916a 85%,
                    #8e7453 100%
                );
                border-radius: 10px;
                box-shadow: 0 0 6px #48382b;
                .lhero-pic {
                    width: 222px;
                    height: 360px;
                    position: absolute;
                    top: 55px;
                    left: 4px;
                    > img {
                        width: 222px;
                        background-size: 100%;
                        &.star-up {
                            display: none;
                        }
                    }
                }
                .topname-box {
                    width: 230px;
                    height: 55px;
                    position: absolute;
                    background: linear-gradient(
                        180deg,
                        #a1a4a6 0%,
                        #d5d8da 85%,
                        #a1a4a6 86%,
                        #8d9092 100%
                    );
                    border-radius: 10px 10px 0 0;
                    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
                    .sh2-icon.left {
                        width: 38px;
                        height: 49px;
                        position: absolute;
                        top: 2px;
                        left: 6px;
                        > img {
                            width: 38px;
                        }
                    }
                    .sh2-icon-forgirl.right {
                        width: 38px;
                        height: 49px;
                        position: absolute;
                        top: 2px;
                        left: 186px;
                        > img {
                            width: 38px;
                        }
                    }
                    .lhero-name-box {
                        width: 146px;
                        height: 47px;
                        position: absolute;
                        left: 42px;
                        display: table;
                        .lhero-name {
                            display: table-cell;
                            vertical-align: middle;
                            color: #fff;
                            text-shadow: 0 1px 8px #000;
                            font-size: 16px;
                            font-weight: bold;
                            text-align: center;
                        }
                    }
                }
                .bottom-star-box-girl-count-box {
                    width: 230px;
                    height: 34px;
                    position: absolute;
                    top: 354px;
                    left: 0;
                    background: linear-gradient(
                        180deg,
                        #8e7453 0%,
                        #e3c7a3 50%,
                        #8f7553 70%,
                        #ae916a 85%,
                        #8f7553 100%
                    );
                    .sh2-prgbar-all {
                        width: 182px;
                        height: 34px;
                        position: absolute;
                        top: 0;
                        left: 48px;
                        background: linear-gradient(
                            0deg,
                            #735657 0%,
                            #453434 100%
                        );
                        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
                        .sh2-prgbar {
                            width: 85%;
                            height: 34px;
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            background: linear-gradient(
                                180deg,
                                #585a5c 0%,
                                #d5d8da 50%,
                                #585a5b 70%,
                                #a1a4a6 85%,
                                #585a5b 100%
                            );
                        }
                        .sh2-prgbar-text {
                            width: 182px;
                            height: 34px;
                            position: relative;
                            text-align: center;
                            color: #fff;
                            font-weight: bold;
                            font-size: 20px;
                            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
                            line-height: 34px;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                        }
                        &.gold {
                            .sh2-prgbar {
                                background: linear-gradient(
                                    180deg,
                                    #c68300 0%,
                                    #f4dfb6 50%,
                                    #c68200 70%,
                                    #fad489 85%,
                                    #c78302 100%
                                );
                            }
                        }
                    }
                    .girl-bonus-box {
                        width: 40px;
                        height: 40px;
                        position: absolute;
                        top: -2px;
                        left: 5px;
                        display: block;
                        background: linear-gradient(
                            180deg,
                            #c68300 0%,
                            #f4dfb6 50%,
                            #c68200 70%,
                            #fad489 85%,
                            #c78302 100%
                        );
                        border-radius: 100%;
                        box-shadow: 0 4px 2px rgba(0, 0, 0, 0.35);
                        .girl-bonus-pic {
                            width: 34px;
                            height: 34px;
                            position: absolute;
                            top: 3px;
                            left: 3px;
                            overflow: hidden;
                            border-radius: 100%;
                            > img {
                                width: 34px;
                            }
                        }
                    }
                }
                .sv-sale-bonus-box-all {
                    width: 210px;
                    height: 60px;
                    position: absolute;
                    top: 288px;
                    left: 10px;
                    .acbonus-box {
                        width: 100px;
                        height: 41px;
                        position: absolute;
                        .lvlbox-name {
                            width: 100px;
                            height: 18px;
                            position: absolute;
                            top: 0;
                            text-transform: uppercase;
                            color: #fff;
                            font-size: 12px;
                            font-weight: bold;
                            text-align: center;
                            line-height: 18px;
                            background-color: #705d4e;
                        }
                        .bonus-lvl-box-bonus-box {
                            width: 100%;
                            height: 42px;
                            position: absolute;
                            top: 18px;
                            display: table;
                            background-color: #a69283;
                            .bonus-lvl-box-bonus {
                                width: 100%;
                                height: 100%;
                                display: table-cell;
                                text-align: center;
                                vertical-align: middle;
                                color: #4d3e33;
                                font-weight: bold;
                                font-size: 10px;
                                text-transform: uppercase;
                                .ff-sh2-icon {
                                    width: 17px;
                                    height: 22px;
                                    position: relative;
                                    top: 0;
                                    left: 0;
                                    display: inline-block;
                                    vertical-align: middle;
                                    margin-left: 6px;
                                    > img {
                                        width: 17px;
                                    }
                                    &.gold {
                                        width: 22px;
                                        height: 22px;
                                        position: relative;
                                        vertical-align: middle;
                                        display: inline-block;
                                        top: -3px;
                                        background-image: url(../img/ico-gold.png);
                                        background-size: 100%;
                                    }
                                }
                            }
                        }
                        &.second {
                            left: 110px;
                        }
                    }
                }
            }
        }
        .store-button {
            width: 220px;
            height: 50px;
            position: absolute;
            bottom: 30px;
            top: auto;
            line-height: inherit;
            left: 393px;
            background: linear-gradient(
                45deg,
                #e8c34e,
                #f1da7c,
                #cfa831,
                #fbf1d8
            );
            border-radius: 8px;
            margin: 0 10px 0 10px;
            box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                inset 0 -3px 0px #c87725, 0 0 3px #3d3737,
                0 2px 4px rgba(0, 0, 0, 0.35), inset 0 0 3px #603806;
            cursor: pointer;
            text-transform: uppercase;
            font-size: 20px;
            font-weight: bold;
            color: #4a3a08;
            text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
            &:active {
                bottom: 29px;
            }
            &:hover {
                box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                    inset 0 -3px 0 #c87725, 0 0 12px #ff0, 0 0 5px #ffc,
                    inset 0 0 10px #ffc, inset 0 0 3px #603806;
            }
            .but-price {
                position: relative;
                display: inline-block;
                font-size: 20px;
                top: 2px;
                &.old {
                    color: #ef0000;
                    font-size: 16px;
                    text-decoration: line-through;
                }
            }
            .but-price-text {
                width: 220px;
                font-size: 16px;
                position: relative;
                top: 2px;
            }
        }
    }
`;

export { stylesFileName, pageStyles };
