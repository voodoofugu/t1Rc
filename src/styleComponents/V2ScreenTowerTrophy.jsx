import { styled, css } from "styled-components";

const V2ScreenTowerTrophyStyles = css`
    body .main {
        .left-side {
            .left-panel {
                &.trophy {
                    .tower-rightside-box-all {
                        width: 580px;
                        height: 507px;
                        position: absolute;
                        top: 4px;
                        right: 4px;
                        background-color: #b7a597;
                        border-radius: 0px 14px 14px 0;
                        box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.2),
                            inset 2px 0 0 rgba(0, 0, 0, 0.2),
                            0 0 4px rgba(0, 0, 0, 0.2), 4px 0 0 #9c8b7c,
                            0 4px 0 #9c8b7c, 4px 4px 0 #9c8b7c, 0 -4px 0#9c8b7c,
                            4px -4px 0 #9c8b7c;
                        .right-side {
                            top: -25px;
                            right: -9px;
                            .skills-wrap {
                                left: -17px;
                                top: 21px;
                                position: absolute;
                            }
                            .monster {
                                top: 1px;
                                right: 0;
                            }
                        }
                        .tower-right-wrap {
                            position: absolute;
                            z-index: 2;
                            width: 580px;
                            height: 507px;
                            background-color: rgb(183, 165, 151);
                            border-radius: 0px 14px 14px 0;
                            box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.2),
                                inset 2px 0 0 rgba(0, 0, 0, 0.2),
                                0 0 4px rgba(0, 0, 0, 0.2), 4px 0 0 #9c8b7c,
                                0 4px 0 #9c8b7c, 4px 4px 0 #9c8b7c,
                                0 -4px 0#9c8b7c, 4px -4px 0 #9c8b7c;
                            .tab-panel-box-title {
                                width: 300px;
                                height: 24px;
                                position: absolute;
                                top: 10px;
                                left: 50%;
                                transform: translateX(-50%);
                                background: linear-gradient(
                                    0deg,
                                    #ffe199 0%,
                                    #f4c657 18%,
                                    #ffe199 60%,
                                    #f4c557 85%,
                                    #ffe199 100%
                                );
                                border-radius: 12px;
                                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                                color: #3c3737;
                                font-size: 16px;
                                font-weight: bold;
                                text-transform: uppercase;
                                line-height: 24px;
                                text-align: center;
                            }
                            .tower-prg-box-all {
                                width: 562px;
                                height: 50px;
                                position: absolute;
                                top: 44px;
                                left: 10px;
                                background-color: #8f7c6e;
                                border-radius: 10px;
                                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                                    inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                                .buy-relics {
                                    position: absolute;
                                    left: 310px;
                                    top: -5px;
                                    cursor: pointer;
                                }
                                .tower-prgbar-all {
                                    width: 300px;
                                    height: 40px;
                                    position: absolute;
                                    top: 5px;
                                    left: 5px;
                                    background: linear-gradient(
                                        180deg,
                                        #3b302f 0%,
                                        #584a49 100%
                                    );
                                    .tower-prgbar {
                                        width: 85%;
                                        height: 40px;
                                        position: absolute;
                                        top: 0px;
                                        left: 0px;
                                        background: linear-gradient(
                                            0deg,
                                            #8cdd55 0%,
                                            #43a700 50%,
                                            #8cdd55 100%
                                        );
                                    }
                                    .tower-prgbar-text {
                                        width: 300px;
                                        height: 40px;
                                        position: relative;
                                        text-align: center;
                                        color: #ffd33c;
                                        font-weight: bold;
                                        font-size: 16px;
                                        text-shadow: 0 1px 1px
                                            rgba(0, 0, 0, 0.45);
                                        line-height: 40px;
                                        text-shadow: 0 1px 2px
                                            rgba(0, 0, 0, 0.45);
                                        text-transform: uppercase;
                                        span {
                                            color: #fff;
                                            margin-left: 10px;
                                            font-size: 18px;
                                        }
                                    }
                                }
                                .cards-res-box {
                                    width: 170px;
                                    height: 36px;
                                    position: absolute;
                                    top: 7px;
                                    left: 206px;
                                    background: linear-gradient(
                                        0deg,
                                        #ffe199 0%,
                                        #f4c657 18%,
                                        #ffe199 60%,
                                        #f4c557 85%,
                                        #ffe199 100%
                                    );
                                    border-radius: 18px;
                                    box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.55),
                                        0 2px 4px 0 rgba(0, 0, 0, 0.35);
                                    &:before {
                                        content: "";
                                        width: 40px;
                                        height: 40px;
                                        position: absolute;
                                        top: -2px;
                                        left: -2px;
                                        background-image: url(../img/gold-ticket.png);
                                        background-size: 100%;
                                        background-repeat: no-repeat;
                                    }
                                    .cards-value {
                                        width: 100px;
                                        height: 28px;
                                        position: absolute;
                                        top: 3px;
                                        left: 38px;
                                        background: linear-gradient(
                                            90deg,
                                            #f4bf87 0%,
                                            #d38632 50%,
                                            #92581a 100%
                                        );
                                        box-shadow: inset 0 2px 4px
                                                rgba(0, 0, 0, 0.25),
                                            inset 0 14px 0
                                                rgba(255, 255, 255, 0.15);
                                        border-radius: 6px;
                                        color: #fff;
                                        font-size: 20px;
                                        font-weight: bold;
                                        line-height: 28px;
                                        text-align: center;
                                        text-shadow: 0 1px 2px
                                            rgba(0, 0, 0, 0.75);
                                    }
                                    .cards-value-btn-add {
                                        width: 32px;
                                        height: 36px;
                                        position: absolute;
                                        top: 0;
                                        right: 0;
                                        @include prefix(
                                            border-radius,
                                            0 18px 18px 0
                                        );
                                        cursor: pointer;
                                        filter: drop-shadow(
                                            0 1px 0.5px
                                                rgba(255, 255, 255, 0.795)
                                        );
                                        &:before {
                                            content: "";
                                            width: 6px;
                                            height: 22px;
                                            position: absolute;
                                            top: 7px;
                                            left: 12px;
                                            background-color: #4f4646;
                                            border-radius: 2px;
                                        }
                                        &:after {
                                            content: "";
                                            width: 22px;
                                            height: 6px;
                                            position: absolute;
                                            top: 15px;
                                            left: 4px;
                                            background-color: #4f4646;
                                            border-radius: 2px;
                                        }
                                        &:hover {
                                            &:before {
                                                background-color: #3c3737;
                                            }
                                            &:after {
                                                background-color: #3c3737;
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
                                    &.relicset {
                                        left: 6px;
                                        &:before {
                                            content: "";
                                            width: 40px;
                                            height: 40px;
                                            position: absolute;
                                            top: -2px;
                                            left: -2px;
                                            background-image: url(../img/card-ic-koloda.png);
                                            background-size: 100%;
                                            background-repeat: no-repeat;
                                        }
                                    }
                                }
                                .relics-pop-event-btn {
                                    width: 70px;
                                    height: 70px;
                                    position: absolute;
                                    top: -10px;
                                    left: 5px;
                                    cursor: pointer;
                                    background-image: url(../img/offer-bk-sm1.png);
                                    background-size: 100%;
                                    background-repeat: no-repeat;
                                    .relics-pop-event-btn-text {
                                        width: 100%;
                                        height: auto;
                                        position: relative;
                                        top: 24px;
                                        text-align: center;
                                        color: #fff;
                                        font-weight: bold;
                                        font-size: 14px;
                                        text-transform: uppercase;
                                        text-shadow: 0 1px 2px
                                            rgba(0, 0, 0, 0.35);
                                    }
                                    &:active {
                                        top: -9px;
                                    }
                                }
                            }
                            .tower-box-all {
                                width: 440px;
                                height: 395px;
                                position: absolute;
                                bottom: 8px;
                                left: 132px;
                                background-color: #8f7c6e;
                                border-radius: 0 10px 10px 0;
                                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                                    inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                                .tower-trophy-box-scroll {
                                    width: 430px;
                                    height: 385px;
                                    position: absolute;
                                    top: 5px;
                                    left: 5px;
                                    overflow: hidden;
                                    overflow-y: scroll;
                                    font-size: 0;
                                    &::-webkit-scrollbar-track {
                                        -webkit-box-shadow: inset 0 0 6px
                                            rgba(0, 0, 0, 0.5);
                                        border-radius: 10px;
                                        background-color: #7c665c;
                                    }
                                    &::-webkit-scrollbar {
                                        width: 10px;
                                    }
                                    &::-webkit-scrollbar-thumb {
                                        border-radius: 10px;
                                        -webkit-box-shadow: inset 0 0 3px
                                            #796b60;
                                        background: linear-gradient(
                                            to right,
                                            #fff,
                                            #f5de80,
                                            #f4b766,
                                            #b26d12
                                        );
                                    }
                                    .tower-trophy-box {
                                        width: 410px;
                                        height: 200px;
                                        position: relative;
                                        display: inline-block;
                                        background-color: #7e6e62;
                                        margin: 0 6px 6px 0;
                                        border-radius: 10px;
                                        box-shadow: 0 1px 1px
                                                rgba(255, 255, 255, 0.1),
                                            inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                                        .trophy-bonus-pic-box {
                                            width: 120px;
                                            height: 190px;
                                            position: absolute;
                                            top: 5px;
                                            left: 5px;
                                            background-color: #705d4e;
                                            text-align: center;
                                            border-radius: 6px;
                                            box-shadow: 0 1px 1px
                                                    rgba(255, 255, 255, 0.1),
                                                inset 0px 1px 1px
                                                    rgba(0, 0, 0, 0.1);
                                            .trophy-bonus-pic {
                                                width: 90px;
                                                height: 90px;
                                                position: absolute;
                                                top: 15px;
                                                left: 15px;
                                                background-image: url(../img/v2-trophy-bg.jpg);
                                                background-size: 100%;
                                                background-repeat: no-repeat;
                                                @include prefix(
                                                    border-radius,
                                                    10px
                                                );
                                                box-shadow: 0 1px 4px
                                                        rgba(0, 0, 0, 0.6),
                                                    inset 0 0 2px 1px
                                                        rgba(255, 255, 255, 0.4);
                                                img {
                                                    width: 90px;
                                                }
                                            }
                                            .trophy-bonus-lvl {
                                                width: 100%;
                                                height: auto;
                                                position: absolute;
                                                top: 110px;
                                                left: 0;
                                                color: #fff;
                                                font-size: 12px;
                                                font-weight: bold;
                                            }
                                            .trophy-bonus-name-box {
                                                width: 100px;
                                                height: 70px;
                                                position: absolute;
                                                top: 120px;
                                                left: 10px;
                                                display: table;
                                                .trophy-bonus-name {
                                                    width: 100%;
                                                    height: auto;
                                                    position: relative;
                                                    display: table-cell;
                                                    color: #ffd33c;
                                                    font-size: 12px;
                                                    font-weight: bold;
                                                    text-transform: capitalize;
                                                    vertical-align: middle;
                                                }
                                            }
                                        }
                                        .trophy-bonus-about-box {
                                            width: 270px;
                                            height: 72px;
                                            position: absolute;
                                            top: 5px;
                                            left: 132px;
                                            background-color: #705d4e;
                                            border-radius: 6px;
                                            box-shadow: 0 1px 1px
                                                    rgba(255, 255, 255, 0.1),
                                                inset 0px 1px 1px
                                                    rgba(0, 0, 0, 0.1);
                                            .trophy-bonus-about-name {
                                                width: 100%;
                                                height: 20px;
                                                position: absolute;
                                                top: 0;
                                                left: 0;
                                                background-color: #5f4e41;
                                                color: #fff;
                                                font-size: 12px;
                                                font-weight: bold;
                                                text-transform: uppercase;
                                                text-align: center;
                                                line-height: 20px;
                                                border-radius: 6px 6px 0 0;
                                                box-shadow: 0 1px 1px
                                                        rgba(255, 255, 255, 0.1),
                                                    inset 0px 1px 1px
                                                        rgba(0, 0, 0, 0.1);
                                            }
                                            .trophy-bonus-about-text-box {
                                                width: 100%;
                                                height: 52px;
                                                position: absolute;
                                                top: 20px;
                                                left: 0;
                                                display: table;
                                                .trophy-bonus-about-text {
                                                    width: 100%;
                                                    height: 52px;
                                                    position: relative;
                                                    top: 0;
                                                    left: 0;
                                                    padding: 0 5px 0 5px;
                                                    color: #ffd33c;
                                                    font-size: 12px;
                                                    font-weight: bold;
                                                    text-align: center;
                                                    vertical-align: middle;
                                                    display: table-cell;
                                                }
                                            }
                                        }
                                        .cards-res-box {
                                            width: 170px;
                                            height: 36px;
                                            position: absolute;
                                            top: 88px;
                                            right: 60px;
                                            background: linear-gradient(
                                                0deg,
                                                #ffe199 0%,
                                                #f4c657 18%,
                                                #ffe199 60%,
                                                #f4c557 85%,
                                                #ffe199 100%
                                            );
                                            border-radius: 18px;
                                            box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.55),
                                                0 2px 4px 0 rgba(0, 0, 0, 0.35);
                                            &:before {
                                                content: "";
                                                width: 40px;
                                                height: 40px;
                                                position: absolute;
                                                top: -2px;
                                                left: -2px;
                                                background-image: url(../img/gold-ticket.png);
                                                background-size: 100%;
                                                background-repeat: no-repeat;
                                            }
                                            .cards-value {
                                                width: 100px;
                                                height: 28px;
                                                position: absolute;
                                                top: 3px;
                                                left: 38px;
                                                background: linear-gradient(
                                                    90deg,
                                                    #f4bf87 0%,
                                                    #d38632 50%,
                                                    #92581a 100%
                                                );
                                                box-shadow: inset 0 2px 4px
                                                        rgba(0, 0, 0, 0.25),
                                                    inset 0 14px 0
                                                        rgba(
                                                            255,
                                                            255,
                                                            255,
                                                            0.15
                                                        );
                                                border-radius: 6px;
                                                color: #fff;
                                                font-size: 20px;
                                                font-weight: bold;
                                                line-height: 28px;
                                                text-align: center;
                                                text-shadow: 0 1px 2px
                                                    rgba(0, 0, 0, 0.75);
                                            }
                                            .cards-value-btn-add {
                                                width: 32px;
                                                height: 36px;
                                                position: absolute;
                                                top: 0;
                                                right: 0;
                                                @include prefix(
                                                    border-radius,
                                                    0 18px 18px 0
                                                );
                                                cursor: pointer;
                                                filter: drop-shadow(
                                                    0 1px 0.5px
                                                        rgba(
                                                            255,
                                                            255,
                                                            255,
                                                            0.795
                                                        )
                                                );
                                                &:before {
                                                    content: "";
                                                    width: 6px;
                                                    height: 22px;
                                                    position: absolute;
                                                    top: 7px;
                                                    left: 12px;
                                                    background-color: #4f4646;
                                                    border-radius: 2px;
                                                }
                                                &:after {
                                                    content: "";
                                                    width: 22px;
                                                    height: 6px;
                                                    position: absolute;
                                                    top: 15px;
                                                    left: 4px;
                                                    background-color: #4f4646;
                                                    border-radius: 2px;
                                                }
                                                &:hover {
                                                    &:before {
                                                        background-color: #3c3737;
                                                    }
                                                    &:after {
                                                        background-color: #3c3737;
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
                                        }
                                        .trophy-lvlup-box {
                                            width: 270px;
                                            height: 60px;
                                            position: absolute;
                                            bottom: 6px;
                                            right: 8px;
                                            background-color: #705d4e;
                                            border-radius: 6px;
                                            box-shadow: 0 1px 1px
                                                    rgba(255, 255, 255, 0.1),
                                                inset 0px 1px 1px
                                                    rgba(0, 0, 0, 0.1);
                                            .color-btn.green,
                                            .color-btn.blue {
                                                width: 260px;
                                                height: 50px;
                                                position: absolute;
                                                top: 5px;
                                                left: 5px;
                                                .color-btn-text {
                                                    font-size: 18px;
                                                    top: 12px;
                                                }
                                                &:active {
                                                    .color-btn-text {
                                                        top: 13px;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            .tower-btn-box-all {
                                width: 122px;
                                height: 395px;
                                position: absolute;
                                bottom: 8px;
                                left: 10px;
                                background-color: #8f7c6e;
                                border-radius: 10px 0 0 10px;
                                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                                    inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                                .color-btn {
                                    width: 100px;
                                    height: 60px;
                                    top: 7px;
                                    margin: 8px 11px;
                                    .color-btn-text {
                                        top: 20px;
                                    }
                                    &:active {
                                        .color-btn-text {
                                            top: 21px;
                                        }
                                    }
                                    &.select {
                                        background: linear-gradient(
                                            0deg,
                                            #7cbc30 0%,
                                            #baf279 100%
                                        );
                                        box-shadow: inset 0 0 0 0
                                                rgba(0, 0, 0, 0.25),
                                            0 2px 4px 0 rgba(0, 0, 0, 0.55);
                                    }
                                }
                            }
                        }
                    }
                }
                .tab-loading-wrapper {
                    height: 511px;
                }
            }
        }
    }
`;

const V2ScreenTowerTrophy = styled.div`
    ${V2ScreenTowerTrophyStyles}
`;

export { V2ScreenTowerTrophyStyles, V2ScreenTowerTrophy };
