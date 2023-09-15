import { styled, css } from "styled-components";

const ScreenChangeAddchestStyles = css`
    .popup-layer .m-popup.change-addchest {
        height: 510px;
        width: 860px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
        .addchest-box-all {
            width: 800px;
            height: 330px;
            position: absolute;
            top: 86px;
            margin-left: 30px;
            font-size: 0px;
            .addchest-box {
                width: 180px;
                height: 330px;
                position: relative;
                display: inline-block;
                margin: 0 10px 0 10px;
                background: linear-gradient(
                    180deg,
                    #8e7453 0%,
                    #e3c7a3 50%,
                    #8f7553 70%,
                    #ae916a 85%,
                    #8f7553 100%
                );
                border-radius: 10px;
                box-shadow: 0 0 4px 0 rgba(#000, 0.35);
                .chest-icon {
                    width: 150px;
                    height: 150px;
                    position: absolute;
                    top: 15px;
                    margin-left: 15px;
                    img {
                        width: 150px;
                        height: 150px;
                    }
                }
                .value-text-box {
                    width: 160px;
                    height: 70px;
                    position: absolute;
                    top: 180px;
                    margin-left: 10px;
                    .value-text-main,
                    .value-text-free {
                        width: 100%;
                        height: 40px;
                        position: relative;
                        text-transform: uppercase;
                        font-size: 30px;
                        font-weight: bold;
                        color: #fff;
                        text-shadow: 0 2px 2px rgba(#000, 0.5);
                    }
                    .value-text-free {
                        font-size: 16px;
                        color: #ffd455;
                    }
                }
                .buy-btn {
                    width: 160px;
                    height: 50px;
                    position: absolute;
                    top: 266px;
                    margin-left: 10px;
                    background: linear-gradient(
                        32deg,
                        #d9b342 0%,
                        #eac558 25%,
                        #d9b342 50%,
                        #eac558 75%,
                        #d9b342 100%
                    );
                    border-radius: 10px;
                    cursor: pointer;
                    box-shadow: inset 0 -3px 0 0 rgba(#000, 0.25),
                        0 2px 4px 0 rgba(#000, 0.45);
                    &:hover {
                        filter: brightness(1.1);
                    }
                    &:active {
                        top: 267px;
                    }
                    .text-box {
                        width: 152px;
                        height: 22px;
                        position: absolute;
                        top: 4px;
                        margin-left: 4px;
                        background-color: #615144;
                        border-radius: 6px;
                        .crown-icon {
                            width: 26px;
                            height: 23px;
                            position: relative;
                            display: inline-block;
                            background-image: url(../img/80-topup.png);
                            background-size: 100%;
                            margin-right: 4px;
                        }
                        .crown-text {
                            height: 22px;
                            position: relative;
                            color: #fedf87;
                            display: inline-block;
                            top: -6px;
                            text-shadow: 0 1px 2px rgba(#000, 0.35);
                            font-size: 18px;
                            font-weight: bold;
                        }
                    }
                    .btn-text {
                        width: 100%;
                        height: 20px;
                        position: relative;
                        top: 25px;
                        color: #615144;
                        font-size: 18px;
                        font-weight: bold;
                        text-transform: uppercase;
                    }
                }
            }
        }
        .openchest-close-box {
            width: 800px;
            position: absolute;
            left: 30px;
            top: 434px;
            .openchest-btn-close {
                width: 180px;
                height: 50px;
                position: relative;
                top: 0;
                margin: 0 14px 0 14px;
                display: inline-block;
                border-radius: 6px;
                background-color: #e3be4f;
                box-shadow: inset 0 -4px 0 #9c8336, 0 1px 8px #3b3129;
                cursor: pointer;
                &:hover {
                    filter: brightness(1.1);
                }
                .btn-text {
                    text-align: center;
                    font-size: 16px;
                    font-weight: bold;
                    color: #fff;
                    position: relative;
                    text-transform: uppercase;
                    top: 14px;
                    text-shadow: 0 1px 2px #614f19;
                }
                &:active {
                    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25),
                        inset 0 -2px 0 rgba(0, 0, 0, 0.25);
                    .btn-text {
                        top: 16px;
                    }
                }
            }
        }
    }
`;

const ScreenChangeAddchest = styled.div`
    ${ScreenChangeAddchestStyles}
`;

export { ScreenChangeAddchestStyles, ScreenChangeAddchest };
