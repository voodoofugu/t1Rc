import { styled, css } from "styled-components";

const V2ScreenMineEventChestStyles = css`
    body .main {
        .mine-event-screen-chest {
            width: 100%;
            height: 100%;
            background-image: url(../img/v2-mn-bg-chest.jpg);
            background-size: 100%;
            position: absolute;
            top: 0;
            overflow: hidden;

            .mine-event-screen-head-box {
                width: 100%;
                height: 80px;
                position: absolute;
                .mine-event-screen-head {
                    width: 1184px;
                    height: 50px;
                    position: absolute;
                    top: 15px;
                    left: 8px;
                    .x-info-btn {
                        z-index: 1;
                        text-align: center;
                        width: 25px;
                        height: 25px;
                        position: absolute;
                        top: 10px;
                        right: 262px;
                        background: linear-gradient(
                            0deg,
                            #53c0ff 0%,
                            #2277bf 50%,
                            #b8d2e0 100%
                        );
                        font-style: italic;
                        font-family: "Times New Roman", Times, serif;
                        border-radius: 100%;
                        cursor: pointer;
                        border: 2px solid #fff;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                        color: #fff;
                        font-size: 24px;
                        font-weight: bold;
                        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
                        line-height: 25px;
                        &:hover {
                            filter: brightness(1.1);
                        }
                        &:active {
                            top: 11px;
                        }
                    }
                    .color-btn.goddess {
                        width: 130px;
                        height: 36px;
                        position: absolute;
                        left: 608px;
                        top: 8px;
                        line-height: 26px;
                        background: linear-gradient(
                            to top,
                            #f7d799,
                            #d8a33c,
                            #f7e8cb 50%,
                            #d8940f
                        );
                        box-shadow: inset 0 -4px 0 0 #d6912b,
                            inset 0 -6px 8px 0px #f7e6c9,
                            0 1px 2px rgba(0, 0, 0, 0.35);
                        z-index: 1;
                        .color-btn-icon {
                            width: 66px;
                            height: 66px;
                            position: absolute;
                            top: -16px;
                            left: -10px;
                            background-image: url(../img/earthworld-chest-points-chip-icon.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                            background-position: center;
                        }
                        .color-btn-text {
                            width: 94px;
                            position: absolute;
                            right: 0;
                            color: #3c3737;
                            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
                        }
                        &:active {
                            background: linear-gradient(
                                to top,
                                #f7d799,
                                #dbad53,
                                #f7e8cb 45%,
                                #d8aa4e
                            );
                            box-shadow: inset 0 -2px 0 0 #d6912b,
                                inset 0 -6px 8px 0px #f7e6c9,
                                0 1px 2px rgba(0, 0, 0, 0.35);
                            .color-btn-icon {
                                top: -15px;
                            }
                        }
                    }
                    .mn-ch-duh-count-box {
                        width: 125px;
                        height: 50px;
                        position: absolute;
                        top: 0;
                        right: 10px;
                        background: linear-gradient(
                            to top,
                            #41d355,
                            #039117 18%,
                            #41d355 60%,
                            #039117 85%,
                            #41d355 100%
                        );
                        border-radius: 12px;
                        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                        .mn-ch-duh-count-pic {
                            width: 40px;
                            height: 40px;
                            position: absolute;
                            top: 5px;
                            left: 10px;
                            background-image: url(../img/v2-mn-soul-sg-160.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                        .mn-ch-duh-count {
                            width: 90px;
                            height: 40px;
                            position: absolute;
                            top: 5px;
                            right: 5px;
                            line-height: 40px;
                            color: #fff;
                            font-size: 22px;
                            font-weight: bold;
                            text-align: center;
                        }
                    }
                    .color-btn.duhbuy {
                        &.duhbuy2 {
                            left: unset;
                            right: 145px;
                        }
                        &.bp {
                            left: 200px;
                            width: 110px;
                            line-height: 14px;
                        }
                        width: 100px;
                        height: 50px;
                        position: absolute;
                        left: 90px;
                        top: 0;
                        line-height: 26px;
                        background: linear-gradient(
                            to top,
                            #f7d799,
                            #d8a33c,
                            #f7e8cb 50%,
                            #d8940f
                        );
                        box-shadow: inset 0 -4px 0 0 #d6912b,
                            inset 0 -6px 8px 0px #f7e6c9,
                            0 1px 2px rgba(0, 0, 0, 0.35);
                        img {
                            width: 40px;
                            position: absolute;
                            top: 2px;
                            left: 5px;
                        }
                        .color-btn-text {
                            width: 60px;
                            position: absolute;
                            right: 5px;
                            color: #3c3737;
                            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
                        }
                        &:active {
                            background: linear-gradient(
                                to top,
                                #f7d799,
                                #dbad53,
                                #f7e8cb 45%,
                                #d8aa4e
                            );
                            box-shadow: inset 0 -2px 0 0 #d6912b,
                                inset 0 -4px 8px 0px #f7e6c9,
                                0 1px 2px rgba(0, 0, 0, 0.35);
                            img {
                                top: 3px;
                            }
                        }
                    }
                    .color-btn.exit {
                        width: 70px;
                        height: 50px;
                        position: absolute;
                        left: 10px;
                        top: 0;
                        line-height: 26px;
                        background: linear-gradient(
                            to top,
                            #f7d799,
                            #d8a33c,
                            #f7e8cb 50%,
                            #d8940f
                        );
                        box-shadow: inset 0 -4px 0 0 #d6912b,
                            inset 0 -6px 8px 0px #f7e6c9,
                            0 1px 2px rgba(0, 0, 0, 0.35);
                        .color-btn-text {
                            color: #3c3737;
                            text-shadow: none;
                            display: flex;
                            flex-direction: row;
                            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
                            &:before {
                                content: "";
                                width: 10px;
                                height: 14px;
                                background: url(../img/darkworld-back-arrow.png);
                                filter: drop-shadow(0 1px 2px black) invert(1);
                                opacity: 0.7;
                                background-size: cover;
                                background-position: left;
                                background-repeat: no-repeat;
                                margin-right: 4px;
                            }
                        }
                        &:active {
                            background: linear-gradient(
                                to top,
                                #f7d799,
                                #dbad53,
                                #f7e8cb 45%,
                                #d8aa4e
                            );
                            box-shadow: inset 0 -2px 0 0 #d6912b,
                                inset 0 -4px 8px 0px #f7e6c9,
                                0 1px 2px rgba(0, 0, 0, 0.35);
                        }
                    }
                    .mn-info-btn {
                        width: 26px;
                        height: 26px;
                        position: absolute;
                        top: 12px;
                        right: 190px;
                        background-image: url(../img/i-ico.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                        cursor: pointer;
                        &:active {
                            top: 13px;
                        }
                    }
                }
            }
            .mn-btn-box {
                padding: 5px 0;
                width: 130px;
                height: 100px;
                position: absolute;
                bottom: 50px;
                font-size: 0;
                background-color: rgba(0, 0, 0, 0.35);
                border-radius: 10px;
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
                    0 1px 1px rgba(255, 255, 255, 0.1);
                .x-info-btn {
                    z-index: 1;
                    text-align: center;
                    width: 25px;
                    height: 25px;
                    position: absolute;
                    top: -15px;
                    right: -15px;
                    background: linear-gradient(
                        0deg,
                        #53c0ff 0%,
                        #2277bf 50%,
                        #b8d2e0 100%
                    );
                    border-radius: 100%;
                    cursor: pointer;
                    border: 2px solid #fff;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                    color: #fff;
                    font-size: 22px;
                    font-weight: 700;
                    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
                    line-height: 25px;
                    &:hover {
                        filter: brightness(1.1);
                    }
                    &:active {
                        top: -14px;
                    }
                }
                .color-btn.green {
                    width: 110px;
                    position: relative;
                    margin: 5px 10px;
                    .color-btn-text {
                        .duh {
                            color: #222222;
                            text-shadow: 0 0 0;
                            font-size: 16px;
                            top: 0px;

                            .f-duh {
                                &:before {
                                    content: "";
                                    width: 18px;
                                    height: 18px;
                                    position: relative;
                                    display: inline-block;
                                    background-image: url(../img/v2-mn-soul-sg-160.png);
                                    background-size: 100%;
                                    margin: 0 4px 0 4px;
                                    vertical-align: middle;
                                    top: -2px;
                                }
                            }
                        }
                    }
                    .color-btn-text {
                        top: 0;
                    }
                    &:active {
                        box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                            inset 0 2px 2px rgba(0, 0, 0, 0.2);
                        .color-btn-text {
                            top: 1px;
                        }
                    }
                }
                &.silver {
                    left: 146px;
                }
                &.gold {
                    left: 535px;
                }
                &.bronze {
                    right: 146px;
                }
            }
            .mn-chest-box {
                width: 300px;
                height: 300px;
                position: absolute;
                transition: all 0.333s linear;
                &.chest-silver {
                    top: 105px;
                    left: 55px;
                    background-image: url(../img/v2-mn-chest-silver.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                }
                &.chest-gold {
                    top: 85px;
                    left: 448px;
                    background-image: url(../img/v2-mn-chest-gold.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                }
                &.chest-bronze {
                    top: 105px;
                    right: 65px;
                    background-image: url(../img/v2-mn-chest-bronze.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                }
                &.silver-open {
                    background-image: url(../img/v2-mn-chest-silver-open.png);
                }
                &.gold-open {
                    background-image: url(../img/v2-mn-chest-gold-open.png);
                }
                &.bronze-open {
                    background-image: url(../img/v2-mn-chest-bronze-open.png);
                }

                .hero-avatar-box {
                    animation: right-quest-open 0.15s ease 0s 1 forwards;
                    width: 188px;
                    height: 214px;
                    position: relative;
                    display: inline-block;
                    margin: 5px 0;
                    border-radius: 6px;
                    background: linear-gradient(
                        180deg,
                        #8e7453 0%,
                        #e3c7a3 50%,
                        #8f7553 70%,
                        #ae916a 85%,
                        #8f7553 100%
                    );
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    .hero-avatar {
                        width: 180px;
                        height: 206px;
                        position: absolute;
                        top: 4px;
                        left: 4px;
                        border-radius: 4px;
                        overflow: hidden;
                    }
                    .gd-box-goddess-name-box {
                        width: 252px;
                        height: 56px;
                        position: absolute;
                        top: 160px;
                        left: -32px;
                        background-image: url(../img/wpck-ram1.png);
                        background-size: 100%;
                        .gd-box-goddess-name {
                            width: 200px;
                            height: auto;
                            position: absolute;
                            top: 5px;
                            left: 26px;
                            color: #fff;
                            font-size: 18px;
                            text-align: center;
                            font-weight: bold;
                        }
                        .gd-box-goddess-lvl {
                            width: 200px;
                            height: auto;
                            position: absolute;
                            top: 26px;
                            left: 26px;
                            color: #fff000;
                            font-size: 14px;
                            text-align: center;
                            font-weight: bold;
                        }
                    }
                }

                &.opening {
                    animation-name: JumpX;
                    animation-iteration-count: 3;
                    animation-duration: 1s;
                }
            }
        }

        .pretty-holder {
            background-image: url(../img/facia-1.png);
            width: 400px;
            height: 96px;
            position: absolute;
            z-index: 0;
            top: 0px;
            left: 400px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: bottom;
            z-index: 1;
            filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6));
        }

        .gray-holder {
            background-color: rgba(0, 0, 0, 0.35);
            padding: 15px;
            border-radius: 10px;
            position: absolute;
            z-index: 0;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
                0 1px 1px rgba(255, 255, 255, 0.1);
            &.first {
                width: 280px;
                height: 40px;
                top: -10px;
                right: 0;
            }
            &.second {
                width: 350px;
                height: 40px;
                top: 83px;
                left: 410px;
                background-color: rgba(255, 255, 255, 0.66);
            }
            &.third {
                width: 290px;
                height: 40px;
                top: -10px;
                left: 0;
                &.short {
                    width: 60px;
                }
            }
        }

        .gacha-quest-prg {
            width: 148px;
            height: 34px;
            position: absolute;
            top: 25px;
            left: 456px;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 8px;
            z-index: 1;
            overflow: hidden;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
            .gacha-quest-prgbar {
                width: 80%;
                height: 34px;
                position: absolute;
                background: linear-gradient(
                    15deg,
                    #f25e5e,
                    #b54747 12%,
                    #ff6666 60%,
                    #ff9191 70%,
                    #db5656
                );
                box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.2),
                    inset 0 -4px 2px rgba(0, 0, 0, 0.1);
            }
            .gacha-quest-prg-text {
                width: 100%;
                height: 100%;
                position: absolute;
                color: #fff;
                font-weight: 700;
                font-size: 12px;
                line-height: 34px;
                text-align: center;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
            }

            .gacha-chest {
                position: absolute;
                top: -50px;
                right: -110px;
                width: 100px;
                height: 100px;
                z-index: 123;
                filter: drop-shadow(0px 0px 5px gold);
                &.open {
                    top: -45px;
                    animation-name: JumpX;
                    animation-iteration-count: infinite;
                    animation-duration: 1s;
                }
                img {
                    width: 100%;
                    height: 100%;
                    filter: hue-rotate(-50deg);
                }
            }
        }

        @keyframes JumpX {
            0% {
                transform: translate(0%, -0%) scale(1, 1);
            }
            10% {
                transform: translate(0%, -0%) scale(1.25, 0.75);
            }
            50% {
                transform: translate(0%, -20%) scale(1, 1);
            }
            55% {
                transform: translate(0%, -20%) rotate(15deg);
            }
            60% {
                transform: translate(0%, -20%) rotate(-15deg);
            }
            65% {
                transform: translate(0%, -20%) rotate(15deg);
            }
            70% {
                transform: translate(0%, -20%) rotate(-15deg);
            }
            90% {
                transform: translate(0%, -0%) scale(1.25, 0.75);
            }
            100% {
                transform: translate(0%, -0%) scale(1, 1);
            }
        }
    }

    body .main.world3 {
        .mine-event-screen-chest {
            background-image: url(../img/v2-mn-bg-darkworld-chest.jpg);
            .mine-event-screen-head-box {
                .mine-event-screen-head {
                    .x-info-btn {
                        background: linear-gradient(
                            180deg,
                            #6a4fd4,
                            #43297b,
                            #6a4fd4
                        );
                    }
                    .color-btn.goddess {
                        .color-btn-icon {
                            background-image: url(../img/darkworld-chest-points-chip-icon.png);
                        }
                    }
                }
            }
            .mn-btn-box {
                .x-info-btn {
                    background: linear-gradient(
                        180deg,
                        #6a4fd4,
                        #43297b,
                        #6a4fd4
                    );
                }
            }
        }
    }
`;

const V2ScreenMineEventChest = styled.div`
    ${V2ScreenMineEventChestStyles}
`;

export { V2ScreenMineEventChestStyles, V2ScreenMineEventChest };
