import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .popup-layer .m-popup.fapop-rules {
        width: 510px;
        height: 600px;
        left: 345px;
        top: 20px;
        &:before {
            content: "";
            background: linear-gradient(
                136deg,
                #8e7453 0%,
                #e3c7a3 50%,
                #ae916a 85%,
                #8f7553 100%
            );
        }
        .title {
            color: #572f14;
        }
        .fapop-rules-content {
            width: 430px;
            height: 420px;
            position: absolute;
            top: 80px;
            left: 40px;
            background: rgba(103, 83, 57, 0.5);
            .fapop-rules-box {
                width: 360px;
                height: 280px;
                position: absolute;
                top: 10px;
                left: 35px;
                display: table;
                .fapop-rules-text {
                    width: 340px;
                    height: auto;
                    position: relative;
                    display: table-cell;
                    vertical-align: middle;
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                    text-align: left;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                }
            }

            .fapop-rules-points-box-all {
                width: 360px;
                height: 110px;
                position: absolute;
                bottom: 15px;
                left: 35px;
                font-size: 0;
                .fapop-rules-points-text {
                    width: 100%;
                    height: auto;
                    position: relative;
                    color: #ffde00;
                    font-size: 18px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                }
                .fapop-rules-points-box {
                    width: 90px;
                    height: 90px;
                    position: relative;
                    display: inline-block;
                    top: 0;
                    .fapop-rules-points {
                        width: 90px;
                        height: 50px;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        &.gray {
                            background-image: url(../img/fapop-rules-gray.png);
                            background-size: 100%;
                        }
                        &.green {
                            background-image: url(../img/fapop-rules-green.png);
                            background-size: 100%;
                        }
                        &.blue {
                            background-image: url(../img/fapop-rules-blue.png);
                            background-size: 100%;
                        }
                        &.yellow {
                            background-image: url(../img/fapop-rules-yellow.png);
                            background-size: 100%;
                        }
                        .fapop-rules-points-count {
                            width: 100%;
                            height: 20px;
                            position: relative;
                            text-align: center;
                            top: -36px;
                            color: #fff;
                            font-size: 30px;
                            font-weight: bold;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                        }
                    }
                }
            }
        }
        .color-btn {
            width: 180px;
            height: 50px;
            top: 518px;
            .color-btn-text {
                top: 12px;
                font-size: 18px;
            }
            &:active {
                .color-btn-text {
                    top: 13px;
                }
            }
        }
    }

    .popup-layer .m-popup.fapop-rules.btlpass-info {
        width: 550px;
        height: 430px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        &:before {
            content: "";
            background: linear-gradient(
                136deg,
                #8e7453 0%,
                #e3c7a3 50%,
                #ae916a 85%,
                #8f7553 100%
            );
        }
        &:after {
            content: "";
            width: 260px;
            height: 344px;
            position: absolute;
            right: -104px;
            bottom: -105px;
            background-image: url(../img/break-girl2.png);
            background-repeat: no-repeat;
            background-position: top center;
            background-size: 100%;
            pointer-events: none;
        }
        .title {
            color: #572f14;
        }
        .fapop-rules-content {
            height: 269px;
            width: calc(100% - 44px);
            position: absolute;
            top: 72px;
            left: 22px;
            background: rgba(103, 83, 57, 0.5);
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2),
                0 1px 2px rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            .fapop-rules-box {
                width: calc(100% - 40px);
                height: calc(100% - 40px);
                position: absolute;
                top: 20px;
                left: 20px;
                display: table;
                .fapop-rules-text {
                    width: 340px;
                    height: auto;
                    position: relative;
                    display: table-cell;
                    vertical-align: middle;
                    color: #fff;
                    font-size: 17px;
                    font-weight: bold;
                    text-align: left;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                    line-height: 22px;
                    div {
                        padding: 6px 0;
                    }
                }
            }
        }
        .color-btn {
            width: 180px;
            height: 50px;
            top: 354px;
        }
    }

     {
        .main.world1,
        .main.world2,
        .main.world3 {
            .popup-layer .m-popup.fapop-rules.btlpass-info.xmas-pop1 {
                width: 550px;
                height: 430px;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                &:before {
                    background-image: url(../img/pop-bg-xmas.jpg);
                    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6);
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                .fapop-rules-content {
                    background: rgba(64, 57, 103, 0.6);
                }
            }
        }
    }
`;

export { stylesFileName, pageStyles };
