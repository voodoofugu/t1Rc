import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .popup-layer .m-popup.cw-army-setup {
        width: 1152px;
        height: 620px;
        left: 24px;
        top: 10px;
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

        .left-side {
            width: 510px;
            height: 532px;
            position: absolute;
            left: 20px;
            top: 70px;
        }
        .right-side {
            width: 590px;
            height: 532px;
            position: absolute;
            right: 20px;
            top: 70px;
        }

        .cw-as-mercenaries-head {
            width: 100%;
            height: 26px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #6e5d52;
            background: linear-gradient(180deg, #4f4339 0%, #352c25 100%);
            color: #fff;
            font-weight: bold;
            font-size: 16px;
            line-height: 26px;
            text-align: center;
            text-transform: uppercase;

            &.equip {
                top: 303px;
            }
            &.allied {
                top: 0;
            }
            &.enemies {
                top: 212px;
            }
        }
        .cw-mer-box-all {
            text-align: left;
        }
        .cw-mer-box {
            width: 150px;
            height: 199px;
            position: relative;
            display: inline-block;
            background: linear-gradient(
                180deg,
                #8e7453 0%,
                #e3c7a3 50%,
                #8f7553 70%,
                #ae916a 85%,
                #8f7553 100%
            );
            border-radius: 6px;
            margin: 5px;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);

            .cw-mer-pic {
                position: absolute;
                top: 4px;
                left: 4px;
                bottom: 4px;
                right: 4px;
                overflow: hidden;
                border-radius: 4px;

                > img {
                    width: 100%;
                }
            }
            .cw-mer-count {
                width: 40px;
                height: 20px;
                line-height: 20px;
                position: absolute;
                top: 4px;
                right: 4px;
                background: linear-gradient(
                    0deg,
                    #3fbae7 0%,
                    #007aa7 50%,
                    #3fbae7 100%
                );
                color: #fff;
                font-weight: bold;
                font-size: 14px;
                text-align: center;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                border-radius: 3px;
            }
            .cw-mer-descr {
                position: absolute;
                bottom: 56px;
                left: 0;
                width: 100%;
                font-size: 10px;
                color: #fff;
                font-weight: bold;
                text-align: center;
                line-height: 12px;
                padding: 0 8px;
                box-sizing: border-box;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
            }
            .cw-mer-num {
                width: 80px;
                height: 24px;
                position: absolute;
                bottom: 28px;
                left: 35px;
                border-radius: 8px;
                background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                color: #000;
                font-weight: bold;
                font-size: 14px;
                line-height: 24px;
                text-align: center;
            }
            .cw-mer-star-box {
                width: 102px;
                height: 26px;
                position: absolute;
                bottom: 0px;
                left: 23px;
                background-color: rgba(0, 0, 0, 0.5);
                border-radius: 6px 6px 0 0;
                .cw-mer-stars {
                    position: absolute;
                    display: block;
                    width: 90px;
                    height: 18px;
                    top: 4px;
                    left: 6px;

                    &:before,
                    &:after {
                        content: "";
                        display: block;
                        width: 100%;
                        height: 18px;
                        background-image: url(../img/star48.png);
                        background-size: 18px;
                        background-repeat: repeat-x;
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                    &:before {
                        filter: grayscale(1) brightness(0.2);
                    }
                    &.star0:after {
                        width: 0;
                    }
                    &.star1:after {
                        width: 20%;
                    }
                    &.star2:after {
                        width: 40%;
                    }
                    &.star3:after {
                        width: 60%;
                    }
                    &.star4:after {
                        width: 80%;
                    }
                    &.star5:after {
                        width: 100%;
                    }
                }
            }

            .color-btn {
                position: absolute;
                top: 78px;
                left: 12px;
                width: 130px;
                height: 50px;
                line-height: 28px;

                .color-btn-text {
                    font-size: 16px;
                }
            }

            &.empty {
                background: #4b3e3d;
            }

            &.plus:after {
                content: "+";
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                color: #6e5d52;
                font-size: 90px;
                text-align: center;
                line-height: 138px;
            }
        }

        .cw-mer-box-all.mini {
            .cw-mer-box {
                width: 105px;
                height: 140px;

                .cw-mer-count {
                    width: 28px;
                    height: 14px;
                    top: 3px;
                    right: 3px;
                    font-size: 10px;
                    line-height: 14px;
                }

                .cw-mer-star-box {
                    left: 16px;
                    width: 71px;
                    height: 19px;
                    border-radius: 4px 4px 0 0;

                    .cw-mer-stars {
                        width: 61px;
                        height: 12px;
                        top: 3px;
                        left: 5px;

                        &:before,
                        &:after {
                            background-size: 12px;
                        }
                    }
                }
                .cw-mer-descr {
                    font-size: 8px;
                    bottom: 39px;
                    line-height: 9px;
                }
                .cw-mer-num {
                    bottom: 20px;
                    left: 24px;
                    width: 56px;
                    height: 17px;
                    font-size: 10px;
                    line-height: 17px;
                }
            }
        }

        .cw-as-girl-box {
            width: 100%;
            height: 300px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #6e5d52;
        }

        .cw-as-girl-box-scroll {
            width: 500px;
            height: 285px;
            position: absolute;
            top: 5px;
            left: 3px;
            overflow: hidden;
            overflow-y: scroll;
            font-size: 0;

            &::-webkit-scrollbar-track {
                background-color: #524544;
            }
            &::-webkit-scrollbar {
                width: 8px;
            }
            &::-webkit-scrollbar-thumb {
                background: linear-gradient(
                    0deg,
                    #ffe199 0%,
                    #f4c657 18%,
                    #ffe199 60%,
                    #f4c557 85%,
                    #ffe199 100%
                );
            }
        }

        .cw-as-mercenaries-equip-all {
            width: 100%;
            height: 200px;
            position: absolute;
            top: 332px;
            left: 0px;
            background-color: #6e5d52;

            .cw-mer-box-all {
                width: 484px;
                height: 140px;
                position: absolute;
                top: 53px;
                left: 14px;

                .cw-mer-box {
                    margin: 0;

                    &:before {
                        content: "";
                        position: absolute;
                        top: -50px;
                        left: 50%;
                        width: 38px;
                        height: 38px;
                        margin-left: -20px;
                        background-image: url(../img/v2-cw-pop-blue.png);
                        background-size: 100%;
                    }

                    &.empty:before {
                        background-image: url(../img/v2-cw-pop-orange.png);
                    }

                    & + .cw-mer-box {
                        margin-left: 15px;
                    }
                }
            }
        }

        .cw-as-mercenaries-allied-all,
        .cw-as-mercenaries-enemies-all {
            width: 100%;
            height: 180px;
            position: absolute;
            top: 29px;
            left: 0px;
            background-color: #6e5d52;

            .cw-mer-box {
                margin: 5px 4px;
            }

            .cw-as-girl-box-scroll {
                width: 580px;
                height: 170px;
            }
        }
        .cw-as-mercenaries-enemies-all {
            top: 241px;
            left: 0px;
        }

        .cw-as-mercenaries-summary {
            width: 100%;
            height: 100px;
            position: absolute;
            top: 432px;
            left: 0px;
            background-color: #4b3e3d;
            font-size: 0;

            .cw-as-merc-sum-head {
                color: #fff;
                font-weight: bold;
                font-size: 16px;
                line-height: 26px;
                text-align: center;
                text-transform: uppercase;
            }

            .cw-as-merc-sum-top {
                background-color: #5b4c4b;
            }

            .cw-as-merc-sum-detail {
                display: inline-block;
                width: 50%;
                font-weight: bold;
                font-size: 12px;
                text-align: center;
                color: #f1cb5b;
                text-transform: uppercase;

                .cw-as-merc-sum-top {
                    line-height: 16px;
                }
                .cw-as-merc-sum-text {
                    font-size: 10px;
                    line-height: 12px;
                    padding: 4px;
                }

                & + .cw-as-merc-sum-detail {
                    color: #f7911a;
                }
            }
        }
    }
`;

export { stylesFileName, pageStyles };
