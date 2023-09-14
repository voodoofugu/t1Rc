import styled from "styled-components";

const ScreenUnipopEvents = styled.div`
    .popup-layer .m-popup.unipop-hw2019 {
        display: block;
        width: 900px;
        height: 600px;
        position: absolute;
        left: 150px;
        top: 20px;
        .title {
            background: linear-gradient(to right, #fad488, #dd9200, #fad488);
            color: #fff;
        }
        .color-box {
            background-image: url(../img/ts_confirm_bk-1.jpg);
            background-size: 100%;
            &:before {
                display: none;
            }
            &:after {
                display: none;
            }
        }
        .color-box-decor {
            width: 170px;
            height: 620px;
            position: absolute;
            top: -10px;
            left: -46px;
            background-image: url(../img/unipop-bg1.png);
            background-size: 100%;
            &:before {
                content: "";
                width: 168px;
                height: 86px;
                position: absolute;
                top: 540px;
                left: 190px;
                background-image: url(../img/unipop-bg2.png);
                background-size: 100%;
            }
            &:after {
                content: "";
                width: 200px;
                height: 540px;
                position: absolute;
                top: 90px;
                left: 800px;
                background-image: url(../img/unipop-bg3.png);
                background-size: 100%;
            }
        }
        .unipop-box-content-all {
            width: 850px;
            height: 500px;
            position: absolute;
            top: 74px;
            left: 24px;
            background: rgba(255, 238, 200, 0.8);
            box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.55);
            .unipop-box-left-box {
                width: 190px;
                height: 500px;
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(230, 181, 84, 0.7);
                box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.35);
                .unipop-scroll-box {
                    width: 185px;
                    height: 490px;
                    position: absolute;
                    top: 5px;
                    left: 5px;
                    font-size: 0;
                    overflow: hidden;
                    overflow-y: scroll;
                    transform: rotateY(180deg);
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
                            to left,
                            #fff,
                            #f5de80,
                            #f4b766,
                            #b26d12
                        );
                    }
                    .unipop-box {
                        width: 150px;
                        height: 80px;
                        position: relative;
                        display: inline-block;
                        margin: 2px 0 2px 0;
                        transform: rotateY(180deg);
                        top: 0;
                        left: 4px;
                        cursor: pointer;
                        border-radius: 10px;
                        background: linear-gradient(
                            180deg,
                            #8e7453 0%,
                            #e3c7a3 50%,
                            #8f7553 70%,
                            #ae916a 85%,
                            #8f7553 100%
                        );
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
                        &:before {
                            content: "";
                            width: 146px;
                            height: 76px;
                            position: absolute;
                            top: 2px;
                            left: 2px;
                            background: linear-gradient(
                                0deg,
                                #8e7453 0%,
                                #e3c7a3 100%
                            );
                            border-radius: 8px;
                        }
                        .text {
                            width: 100%;
                            height: 100%;
                            position: relative;
                            color: #fff;
                            font-size: 20px;
                        }
                        .unipop-gold-arrow {
                            width: 20px;
                            height: 62px;
                            position: absolute;
                            top: 9px;
                            left: 148px;
                            background-image: url(../img/unipop-gold-arrow.png);
                            background-size: 100%;
                            visibility: hidden;
                        }
                        .unipop-box-pic {
                            width: 140px;
                            height: 70px;
                            position: absolute;
                            top: 5px;
                            left: 5px;
                            border-radius: 6px;
                            overflow: hidden;
                            img {
                                width: 140px;
                            }
                        }
                        &.select {
                            background: linear-gradient(
                                180deg,
                                #c68300 0%,
                                #f4dfb6 50%,
                                #c68200 70%,
                                #fad489 85%,
                                #c78302 100%
                            );
                            &:before {
                                content: "";
                                background: linear-gradient(
                                    0deg,
                                    #e9b039 0%,
                                    #fffe9a 100%
                                );
                            }
                            .unipop-gold-arrow {
                                visibility: visible;
                            }
                        }
                        &:active {
                            top: 1px;
                        }
                    }
                }
            }
            .unipop-box-right-box {
                width: 640px;
                height: 480px;
                position: absolute;
                top: 10px;
                left: 200px;
                .right-box-f {
                    width: 640px;
                    height: 480px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-image: url(../img/pop-bg-hw.jpg);
                    background-size: 128%;
                    background-position-y: bottom;
                    background-repeat: no-repeat;
                    border-radius: 10px;
                    .right-box-f-name-box {
                        width: 640px;
                        height: 50px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: linear-gradient(
                            180deg,
                            #c68300 0%,
                            #f4dfb6 50%,
                            #c68200 70%,
                            #fad489 85%,
                            #c78302 100%
                        );
                        border-radius: 10px 10px 0 0;
                        color: #3c3934;
                        font-weight: bold;
                        font-size: 26px;
                        line-height: 50px;
                        text-transform: uppercase;
                        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
                    }
                    .red-timer-box {
                        width: 110px;
                        height: 50px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-image: url(../img/timer-back-50.png);
                        background-size: 100%;
                        .time-text,
                        .time {
                            color: #fff000;
                            text-shadow: 0 1px 2px #680000;
                            font-size: 12px;
                            font-weight: bold;
                            position: relative;
                            top: 8px;
                            text-transform: uppercase;
                        }
                        .time {
                            color: #fff;
                            font-size: 16px;
                            top: 5px;
                            font-weight: bold;
                        }
                    }
                    .right-box-f-break-girl1 {
                        width: 200px;
                        height: 420px;
                        position: absolute;
                        bottom: 5px;
                        left: 5px;
                        background-image: url(../img/break-girl15-hw.png);
                        background-size: 100%;
                    }
                    .color-btn.red.orgy {
                        position: absolute;
                        bottom: 90px;
                        left: 220px;
                        width: 200px;
                        height: 60px;
                    }
                    .event-btlpass-collect-box-all {
                        width: 615px;
                        height: 350px;
                        position: absolute;
                        top: 60px;
                        left: 15px;
                        background-color: #1d2c38e0;
                        display: table;
                        border-radius: 20px;
                        .event-btlpass-collect-box-text {
                            width: calc(100% - 20px);
                            vertical-align: middle;
                            padding: 10px;
                            color: #ffbd0c;
                            font-size: 16px;
                            font-weight: bold;
                            text-transform: uppercase;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                        }
                        .event-squad-wrap {
                            color: white;
                            margin-top: 15px;
                            display: flex;
                            justify-content: center;
                            .event-squad-suphero,
                            .event-squad-hero {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: center;
                                width: 60%;
                                .event-hero-box {
                                    width: 98px;
                                    height: 111px;
                                    display: inline-block;
                                    position: relative;
                                    margin: 4px;
                                    .hero-avatar-box {
                                        width: 98px;
                                        height: 111px;
                                        display: inline-block;
                                        position: relative;
                                        top: 0;
                                        left: 0;
                                        border-radius: 6px;
                                        background: linear-gradient(
                                            180deg,
                                            #8e7453 0%,
                                            #e3c7a3 50%,
                                            #8f7553 70%,
                                            #ae916a 85%,
                                            #8f7553 100%
                                        );
                                        box-shadow: inset 0 1px 1px
                                                rgba(255, 255, 255, 0.2),
                                            0 2px 0 #6d5a40,
                                            0 1px 4px rgba(0, 0, 0, 0.8);
                                        &:hover {
                                            filter: brightness(1.1);
                                        }
                                        .hero-avatar {
                                            width: 90px;
                                            height: 103px;
                                            position: absolute;
                                            top: 4px;
                                            left: 4px;
                                            border-radius: 4px;
                                            overflow: hidden;
                                            box-shadow: 0 0 0 1px
                                                rgba(0, 0, 0, 0.2);
                                        }

                                        .sh2-icon-forgirl {
                                            width: 25px;
                                            height: 32px;
                                            position: absolute;
                                            top: 0px;
                                            left: 2px;

                                            img {
                                                width: 25px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .event-btlpass-collect-box-angel {
                        display: none;
                    }
                    &.angel {
                        .event-btlpass-collect-box-all {
                            width: 404px;
                            height: 350px;
                            position: absolute;
                            top: 60px;
                            right: 15px;
                        }
                        .event-btlpass-collect-box-angel {
                            width: 196px;
                            height: 350px;
                            position: absolute;
                            top: 60px;
                            right: 15px;
                            background-color: #1d2c38e0;
                            display: table;
                            border-radius: 20px;
                            &:after {
                                content: "+";
                                color: #ffbd0c;
                                font-size: 55px;
                                font-weight: bold;
                                position: absolute;
                                left: -20px;
                                top: 140px;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                            }
                            .angel-title {
                                width: 192px;
                                height: 28px;
                                line-height: 24px;
                                background-image: url(../img/darkworld-angels-title-bg-brown.png);
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-position: center;
                                margin: auto;
                                margin-top: 14px;
                                text-align: center;
                                color: #fff;
                                font-weight: 700;
                                font-size: 14px;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
                            }
                            .angel-avatar-box {
                                width: 154px;
                                height: 224px;
                                background: linear-gradient(
                                    159.21deg,
                                    #9f7c47 1.39%,
                                    #e9be88 35.56%,
                                    #946f3f 70.08%,
                                    #cca36f 84.6%,
                                    #b38952 98.01%
                                );
                                margin: auto;
                                margin-top: 30px;
                                box-shadow: 0px 2px 0px #673d06,
                                    0px 4px 10px rgba(0, 0, 0, 0.4);
                                border-radius: 6px;
                                position: relative;
                                &:hover {
                                    filter: brightness(1.1);
                                }
                                .img-wrap {
                                    width: calc(100% - 8px);
                                    height: calc(100% - 8px);
                                    position: absolute;
                                    left: 4px;
                                    top: 4px;
                                    border-radius: 4px;
                                    box-shadow: 0 0 0 1px #734407,
                                        0px 0px 3px rgba(0, 0, 0, 0.4);
                                    overflow: hidden;
                                    display: flex;
                                    justify-content: center;
                                    img {
                                        width: auto;
                                        height: 180%;
                                    }
                                }
                            }
                        }
                    }
                    .event-pop-master-box-all {
                        width: 420px;
                        height: 274px;
                        position: absolute;
                        top: 128px;
                        right: 5px;
                        .event-pop-master-box {
                            width: 180px;
                            height: 274px;
                            position: relative;
                            display: inline-block;
                            border-radius: 10px;
                            background: linear-gradient(
                                180deg,
                                #c68300 0%,
                                #f4dfb6 50%,
                                #c68200 70%,
                                #fad489 85%,
                                #c78302 100%
                            );
                            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
                            margin: 0 10px 0 10px;
                            .event-pop-master-pic {
                                width: 172px;
                                height: 266px;
                                position: absolute;
                                top: 4px;
                                left: 4px;
                                border-radius: 8px;
                            }
                        }
                    }
                    .buy-pack-all-box {
                        width: 632px;
                        height: 62px;
                        position: absolute;
                        top: 414px;
                        left: 4px;
                        border-radius: 10px;
                        display: flex;
                        justify-content: space-evenly;
                        align-items: center;
                        .color-btn {
                            width: 180px;
                            height: 46px;
                            position: relative;
                            display: inline-block;
                            border-radius: 6px;
                            margin: 0 5px 0 5px;
                            background: linear-gradient(
                                0deg,
                                #e9b039 0%,
                                #fffe9a 100%
                            );
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
                                font-size: 16px;
                            }
                            &:active {
                                box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                                    inset 0 2px 2px rgba(0, 0, 0, 0.2);
                                .color-btn-text {
                                    top: 12px;
                                }
                            }
                            &.blue {
                                background: linear-gradient(
                                    0deg,
                                    #62a3e5 0%,
                                    #b4d7fa 100%
                                );
                            }
                            &.green {
                                background: linear-gradient(
                                    0deg,
                                    #7cbc30 0%,
                                    #baf279 100%
                                );
                            }
                            &.active {
                                box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                                    inset 0 2px 2px rgba(0, 0, 0, 0.2);
                                .color-btn-text {
                                    top: 12px;
                                }
                            }
                        }
                        .event-pass {
                            display: flex;
                            align-items: center;
                            &:active {
                                &:before {
                                    margin-top: 2px;
                                }
                            }
                            &:before {
                                content: "";
                                width: 20px;
                                height: 20px;
                                background: url(../img/darkworld-back-arrow.png);
                                background-size: 100%;
                                background-position: center;
                                background-repeat: no-repeat;
                                margin-left: 14px;
                            }
                            .color-btn-text {
                                margin-right: 14px;
                            }
                        }
                        .dark-tower {
                            display: flex;
                            align-items: center;
                            &:active {
                                &:after {
                                    margin-top: 2px;
                                }
                            }
                            &:after {
                                content: "";
                                width: 20px;
                                height: 20px;
                                background: url(../img/darkworld-back-arrow.png);
                                background-size: 100%;
                                background-position: center;
                                background-repeat: no-repeat;
                                margin-right: 14px;
                                transform: scaleX(-1);
                            }
                            .color-btn-text {
                                margin-left: 14px;
                            }
                        }
                    }
                    .right-box-f-screen-box {
                        width: 426px;
                        height: 335px;
                        position: absolute;
                        top: 62px;
                        left: 210px;
                    }
                    .girl-buble {
                        width: 260px;
                        height: 260px;
                        position: absolute;
                        top: 158px;
                        left: 108px;
                        background-image: url(../img/unipop-buble.png);
                        background-size: 100%;
                        .girl-buble-text-box {
                            width: 170px;
                            height: 60px;
                            position: absolute;
                            top: 50px;
                            left: 45px;
                            display: table;
                            .girl-buble-text {
                                width: 100%;
                                height: auto;
                                position: relative;
                                display: table-cell;
                                vertical-align: middle;
                                color: #000;
                                font-size: 18px;
                                font-weight: bold;
                                text-transform: uppercase;
                            }
                        }
                        .girl-buble-box {
                            width: 170px;
                            height: 110px;
                            position: absolute;
                            top: 110px;
                            left: 45px;
                            .girl-avatar-box {
                                width: 86px;
                                height: 96px;
                                position: absolute;
                                top: 0;
                                left: 0;
                                background: linear-gradient(
                                    180deg,
                                    #c68300 0%,
                                    #f4dfb6 50%,
                                    #c68200 70%,
                                    #fad489 85%,
                                    #c78302 100%
                                );
                                border-radius: 10px;
                                box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
                                .girl-avatar {
                                    width: 78px;
                                    height: 88px;
                                    position: absolute;
                                    top: 4px;
                                    left: 4px;
                                    border-radius: 8px;
                                }
                                .prize-promote-box {
                                    width: 42px;
                                    height: 56px;
                                    top: 46px;
                                    left: -10px;
                                    .prize-promote-text {
                                        width: 42px;
                                        top: 4px;
                                        font-size: 14px;
                                    }
                                }
                                &.one {
                                    top: 10px;
                                    transform: rotate(-15deg);
                                }
                                &.two {
                                    left: 47px;
                                }
                                &.three {
                                    top: 10px;
                                    left: 88px;
                                    transform: rotate(15deg);
                                }
                            }
                        }
                    }
                }
                .right-box-f.hw {
                    background-image: url(../img/pop-bg-hw.jpg);
                    .event-btlpass-collect-box-all,
                    .event-btlpass-collect-box-angel {
                        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
                    }
                }
                .right-box-f.bf {
                    background-image: url(../img/v2-bf-pop-bg.jpg);
                    .event-btlpass-collect-box-all,
                    .event-btlpass-collect-box-angel {
                        background-color: rgba(76, 65, 56, 0.9);
                        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
                            0 1px 2px rgba(0, 0, 0, 0.3);
                    }
                }
                .right-box-f.ny {
                    background-image: url(../img/pop-bg-xmas.jpg);
                    .event-btlpass-collect-box-all,
                    .event-btlpass-collect-box-angel {
                        background-color: rgba(40, 140, 190, 0.6);
                        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
                        .event-btlpass-collect-box-text {
                            border-radius: 20px 20px 0 0;
                            background-color: #1d3963;
                            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
                                0 1px 2px rgba(255, 255, 255, 0.2);
                        }
                    }
                    .event-btlpass-collect-box-all {
                        &:before,
                        &:after {
                            content: "";
                            position: absolute;
                            width: 100px;
                            height: 100px;
                            bottom: 0;
                        }
                        &:before {
                            left: 0;
                            background-image: url(../img/unipop-xmas-bg.png);
                            background-position: left;
                            background-repeat: no-repeat;
                            background-size: cover;
                            border-radius: 0 0 0 20px;
                        }
                        &:after {
                            right: 0;
                            background-image: url(../img/unipop-xmas-bg.png);
                            background-position: right;
                            background-repeat: no-repeat;
                            background-size: cover;
                            border-radius: 0 0 20px 0;
                        }
                    }
                }
                .right-box-f.sv {
                    background-image: url(../img/sv-sale-bg.jpg);
                    .event-btlpass-collect-box-all {
                        background-color: rgba(190, 52, 52, 0.88);
                        box-shadow: 0 2px 4px rgba(255, 255, 255, 0.6);
                        .event-btlpass-collect-box-text {
                            border-radius: 20px 20px 0 0;
                            background-color: #830000;
                            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
                                0 1px 2px rgba(255, 255, 255, 0.2);
                        }
                    }
                }
                .right-box-f.text-only {
                    .event-btlpass-collect-box-all {
                        .event-btlpass-collect-box-text {
                            display: flex;
                            align-items: center;
                            border-radius: 20px;
                            height: calc(100% - 20px);
                            flex-wrap: wrap;
                            justify-content: center;
                            align-content: center;
                        }
                        .event-squad-wrap {
                            display: none;
                        }
                    }
                }
            }
        }
    }
`;

export default ScreenUnipopEvents;
