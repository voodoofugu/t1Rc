import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenCwGuildrankStyles = css`
    .popup-layer .m-popup.guildrank {
        width: 590px;
        height: 580px;
        left: 305px;
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
        .cw-clan-box-all {
            width: 530px;
            height: 400px;
            position: absolute;
            top: 80px;
            left: 30px;
            background-color: #cbaa81;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
            .cw-clan-box-scroll {
                width: 510px;
                height: 380px;
                position: absolute;
                top: 10px;
                left: 10px;
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
                .cw-clan-box {
                    width: 490px;
                    height: 80px;
                    position: relative;
                    display: inline-block;
                    background-color: #f3d6b0;
                    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
                    margin: 4px 0;
                    .cw-clan-rait-box {
                        width: 70px;
                        height: 70px;
                        position: absolute;
                        top: 5px;
                        left: 5px;
                        border-right: 1px solid #cbaa81;
                        .cw-clan-rait {
                            width: 56px;
                            height: 56px;
                            position: absolute;
                            top: 7px;
                            left: 7px;
                            .cw-clan-rait-num {
                                width: 50px;
                                height: auto;
                                position: absolute;
                                top: 20px;
                                left: 3px;
                                color: #fff;
                                font-size: 14px;
                                font-weight: bold;
                                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
                            }
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
                    .cw-clan-name-box {
                        width: 200px;
                        height: 70px;
                        position: absolute;
                        top: 5px;
                        left: 180px;
                        .cw-clan-name {
                            max-height: 24px;
                            overflow: hidden;
                            width: auto;
                            height: auto;
                            position: absolute;
                            top: 10px;
                            color: #544746;
                            font-size: 18px;
                            font-weight: bold;
                        }
                        .cw-clan-name-pic {
                            width: 22px;
                            height: 22px;
                            position: absolute;
                            bottom: 10px;
                            background-image: url(../img/v2-ic-people.png);
                            background-size: 100%;
                            background-repeat: no-repeat;

                            .cw-clan-name-pic-num {
                                width: auto;
                                height: auto;
                                position: absolute;
                                left: 30px;
                                color: #544746;
                                font-size: 16px;
                                font-weight: bold;
                            }
                        }
                    }
                    .cw-clan-lvl-box {
                        width: 110px;
                        height: 70px;
                        position: absolute;
                        top: 5px;
                        right: 0;
                        border-left: 1px solid #cbaa81;
                        .cw-clan-lvl {
                            width: 100px;
                            height: auto;
                            position: absolute;
                            top: 10px;
                            left: 5px;
                            color: #544746;
                            font-size: 18px;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
        .color-btn.close {
            width: 180px;
            top: 498px;
            .color-btn-text {
                font-size: 16px;
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
`;

const V2ScreenCwGuildrank = styled.div`
    ${V2ScreenCwGuildrankStyles}
`;

export { V2ScreenCwGuildrankStyles, V2ScreenCwGuildrank };
