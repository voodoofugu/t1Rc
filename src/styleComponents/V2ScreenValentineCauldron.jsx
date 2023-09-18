import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenValentineCauldronStyles = css`
    .popup-layer .m-popup.valentine-cauldron {
        width: 816px;
        height: 604px;
        left: 192px;
        top: 18px;
        background: linear-gradient(0deg, #dc4ead 0%, #e42aa7 100%);

        .btn-close-x {
            background: linear-gradient(
                22deg,
                #d6c7ff,
                #dc4ead,
                #e42aa7,
                #e4c7ff
            );
            border: solid 4px #dc4ead;
            cursor: pointer;
            box-shadow: 0 0 7px #000;
        }

        .title {
            color: #fff;
            border: solid 4px #d973b0;
            background: linear-gradient(to right, #dc4ead, #b71164, #dc4ead);
            box-shadow: 0 1px 10px #562643, inset 0 2px 10px #fff;
            text-shadow: 0 0 1px #533744, 0 1px 1px #000, 0 1px 10px #ffccfb;
        }
        .color-box {
            background: linear-gradient(
                #301b33 0%,
                #854571 50%,
                #452441 85%,
                #381d31 100%
            );
            &:before {
                display: none;
            }
            &:after {
                display: none;
            }
        }
        .valentine-cauldron-item {
            width: 80px;
            height: 80px;
            position: relative;
            display: inline-block;
            background: linear-gradient(
                180deg,
                #c68300 0%,
                #f4dfb6 50%,
                #c68200 70%,
                #fad489 85%,
                #c78302 100%
            );
            border-radius: 8px;
            margin: 5px;
            background-color: #fffe9a;
            box-shadow: inset 0px -50px 50px -25px #e9b13a,
                0px 1px 3px -1px rgba(0, 0, 0, 0.4);
            background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);

            &:before {
                content: "";
                width: 76px;
                height: 76px;
                position: absolute;
                top: 2px;
                left: 2px;
                background: linear-gradient(
                    0deg,
                    #fede92 0%,
                    #f4c558 18%,
                    #ffe098 60%,
                    #f5c85d 85%,
                    #fddd90 100%
                );
                border-radius: 6px;
            }
            .valentine-cauldron-res-pic {
                width: 70px;
                height: 70px;
                position: absolute;
                top: 5px;
                left: 5px;

                img {
                    width: 70px;
                    height: 70px;
                }
            }
            .valentine-cauldron-res-count {
                position: absolute;
                bottom: 0;
                right: 0;
                text-align: center;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 14px;
                color: #fff;
                padding: 4px 7px;
                border-radius: 10px;
                border-radius: 10px;
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
                background: linear-gradient(0deg, #7dbd32 0%, #bbee7f 100%);
                box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.4);
            }
        }
        .valentine-cauldron-left-box-all {
            width: 190px;
            height: 440px;
            position: absolute;
            top: 72px;
            left: 20px;
            background-color: #e42aa7;
            background: linear-gradient(0deg, #bd2a8d 0%, #d973d1 100%);
            border-radius: 10px;

            .valentine-cauldron-items-label {
                color: #fff;
                text-transform: uppercase;
                font-weight: 900;
                font-size: 14px;
                position: absolute;
                left: 0;
                top: 18px;
                padding: 0 10px;
            }
            .valentine-cauldron-items {
                width: 190px;
                height: 374px;
                position: absolute;
                left: 0;
                top: 66px;
                font-size: 0;
            }
        }
        .valentine-cauldron-right-box-all {
            width: 576px;
            height: 440px;
            position: absolute;
            top: 72px;
            left: 220px;
            background-image: url(../img/v2-fapop-vl1.jpg);
            background-size: auto 100%;
            background-position: 100%;
            border-radius: 10px;

            .valentine-cauldron-boiler-all {
                width: 220px;
                height: 155px;
                position: absolute;
                top: 162px;
                left: 30px;

                &:before {
                    content: "";
                    display: block;
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    left: 50%;
                    top: 20px;
                    margin-left: -20px;
                    background-image: url(../img/v2-nsale-plus.png);
                    background-size: 100%;
                }

                .valentine-cauldron-item {
                    margin: 0;
                    position: absolute;
                    top: 0;

                    &.first-item {
                        left: 0;
                    }
                    &.second-item {
                        right: 0;
                    }
                }

                .color-btn {
                    top: 94px;
                    left: 0;
                    position: absolute;
                    width: 220px;
                    height: 60px;

                    //background: linear-gradient(0deg, #39b1e9 0%, #7cf4ff 100%);
                    background: linear-gradient(0deg, #bf3091 0%, #f6547a 100%);

                    .color-btn-text {
                        top: 18px;
                        font-size: 18px;
                    }

                    &:active {
                        .color-btn-text {
                            top: 19px;
                        }
                    }
                }
            }
            .valentine-cauldron-girl-right-box {
                width: 278px;
                height: 428px;
                position: absolute;
                top: 5px;
                right: 7px;
                border-radius: 8px;

                box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
                background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);

                & > img,
                .valentine-cauldron-girl-right-box-bg {
                    position: absolute;
                    top: 4px;
                    left: 4px;
                    border-radius: 6px;
                    width: 270px;
                    height: 420px;
                }

                .valentine-cauldron-girl-right-box-bg {
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
        .valentine-cauldron-buttons-box-all {
            width: 770px;
            height: 52px;
            position: absolute;
            top: 526px;
            left: 20px;
            text-align: center;

            .color-btn {
                width: 180px;
                height: 50px;

                & + .color-btn {
                    margin-left: 5px;
                }

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
    }
`;

const V2ScreenValentineCauldron = styled.div`
    ${V2ScreenValentineCauldronStyles}
`;

export { V2ScreenValentineCauldronStyles, V2ScreenValentineCauldron };
