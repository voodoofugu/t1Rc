import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { PopWpck1Styles } from "../styleComponents/PopWpck1";
import { PopWpck2Styles } from "../styleComponents/PopWpck2";
import { PopWpck3Styles } from "../styleComponents/PopWpck3";
import { PopWpck4Styles } from "../styleComponents/PopWpck4";
import { PopWpck5Styles } from "../styleComponents/PopWpck5";
import { PopWpckEndStyles } from "../styleComponents/PopWpckEnd";

const PopWpckAllStyles = css`
    .sh-wheelpack {
        &.whalesale {
            .lhero-box {
                top: 70px;
                left: 5px;
            }
            .prize-one-box-all {
                top: 70px;
                left: 10px;
            }
        }

        &.xxx {
            .lhero-box {
                left: 125px;
            }
        }

        .lhero-box {
            width: 230px;
            height: 390px;
            position: absolute;
            top: 0px;
            left: 0px;
            //left: 130px;
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

                img {
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

                    img {
                        width: 38px;
                    }
                }

                .sh2-icon-forgirl.right {
                    width: 38px;
                    height: 49px;
                    position: absolute;
                    top: 2px;
                    left: 186px;

                    img {
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

            .lhero-pieces {
                position: absolute;
                width: 100%;
                color: #fff;
                text-shadow: 0 1px 8px #000;
                font-size: 24px;
                font-weight: bold;
                text-align: center;
                bottom: 10px;
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
                    background: linear-gradient(0deg, #735657 0%, #453434 100%);
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

                        img {
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

                                img {
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
`;

const PopWpckAll = styled.div`
    ${PopWpck1Styles}
    ${PopWpck2Styles}
    ${PopWpck3Styles}
    ${PopWpck4Styles}
    ${PopWpck5Styles}
    ${PopWpckEndStyles}
    ${PopWpckAllStyles}
`;

export { PopWpckAllStyles, PopWpckAll };
