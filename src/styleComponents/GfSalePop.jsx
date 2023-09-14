import styled from "styled-components";

const GfSalePop = styled.div`
    .popup-layer .m-popup.gf-sale {
        width: 970px;
        height: 530px;
        left: 27px;
        top: 55px;
        background: linear-gradient(
            -22deg,
            #f4266a 0%,
            #a70037 50%,
            #f4266a 100%
        );
        &:before {
            content: "";
            background: linear-gradient(0deg, #a70037 0%, #f4266a 100%);
        }
        .title {
            background: linear-gradient(
                90deg,
                #f4266a 0%,
                #a70037 50%,
                #f4266a 100%
            );
            border: solid 4px #ea0259;
            color: #fff;
        }
        .btn-close-x {
            background: linear-gradient(
                22deg,
                #ffa3c2,
                #ffa3c2,
                #f4266a,
                #ffa3c2
            );
            border: solid 4px #ffa3c2;
        }
        .sv-sale-pack-box {
            width: 270px;
            height: 440px;
            position: absolute;
            top: 70px;
            left: 18px;
            .lhero-box {
                width: 250px;
                height: 420px;
                position: absolute;
                top: 10px;
                left: 10px;
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
                    width: 242px;
                    height: 360px;
                    background-color: red;
                    position: absolute;
                    top: 55px;
                    left: 4px;
                    img {
                        width: 242px;
                        height: 360px;
                        position: absolute;
                        left: 0;
                    }
                }
                .topname-box {
                    width: 250px;
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
                        left: 206px;
                        img {
                            width: 38px;
                        }
                    }
                    .lhero-name-box {
                        width: 166px;
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
                .sv-sale-bonus-box-all {
                    width: 230px;
                    height: 60px;
                    position: absolute;
                    top: 348px;
                    left: 10px;
                    .acbonus-box {
                        width: 110px;
                        height: 41px;
                        position: absolute;
                        .lvlbox-name {
                            width: 110px;
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
                            left: 120px;
                        }
                    }
                }
            }
            &.next {
                left: 680px;
            }
        }
        .gf-ballon-box {
            width: 380px;
            height: 150px;
            position: absolute;
            top: 80px;
            left: 250px;
            background-image: url(../img/gf-ballon.png);
            background-size: 100%;
            background-repeat: no-repeat;
            .gf-ballon-text {
                width: 240px;
                height: auto;
                position: absolute;
                top: 40px;
                right: 22px;
                color: #000;
                font-size: 18px;
                font-weight: bold;
                text-transform: uppercase;
            }
        }
        .sv-sale-btn-box {
            width: 250px;
            height: 66px;
            position: absolute;
            bottom: 32px;
            left: 360px;
            background-color: rgba(156, 21, 60, 0.65);
            .store-button {
                width: 170px;
                height: 42px;
                position: relative;
                text-align: center;
                top: 12px;
                background: linear-gradient(
                    45deg,
                    #e8c34e,
                    #f1da7c,
                    #cfa831,
                    #fbf1d8
                );
                border-radius: 8px;
                box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                    inset 0 -3px 0px #c87725, 0 0 3px #3d3737, 0 0 4px #000,
                    inset 0 0 3px #603806;
                cursor: pointer;
                text-transform: uppercase;
                font-size: 20px;
                font-weight: bold;
                color: #4a3a08;
                text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
                line-height: 42px;
                margin: auto;
                &:active {
                    top: 13px;
                }
                &:hover {
                    box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                        inset 0 -3px 0 #c87725, 0 0 12px #ff0, 0 0 5px #ffc,
                        inset 0 0 10px #ffc, inset 0 0 3px #603806;
                }
                .but-price {
                    position: relative;
                    display: inline-block;
                    margin: 0 2px 0 2px;
                    font-size: 24px;
                    &.old {
                        color: #ef0000;
                        text-decoration: line-through;
                        font-size: 16px;
                        top: -2px;
                    }
                }
            }
        }
        .gf-twice-box {
            width: 150px;
            height: 50px;
            position: absolute;
            bottom: 122px;
            left: 410px;
            background: linear-gradient(0deg, #f30000 0%, #ff6600 100%);
            border-radius: 20px;
            .gf-twice-text {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
                text-transform: uppercase;
                line-height: 50px;
            }
        }
        .sv-reward-box-all {
            width: 396px;
            height: 100px;
            position: absolute;
            top: 240px;
            left: 286px;
            font-size: 0;
            .sv-reward-box {
                width: 90px;
                height: 90px;
                position: absolute;
                top: 0;
                left: 152px;
                background: linear-gradient(
                    180deg,
                    #c68300 0%,
                    #f4dfb6 50%,
                    #c68200 70%,
                    #fad489 85%,
                    #c78302 100%
                );
                border-radius: 8px;
                box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
                &:before {
                    content: "";
                    width: 86px;
                    height: 86px;
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    background: linear-gradient(0deg, #7e7f80 0%, #dee0e3 100%);
                    box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.35);
                    filter: sepia(100%);
                    border-radius: 6px;
                }
                .sv-reward-pic {
                    width: 80px;
                    height: 80px;
                    position: absolute;
                    top: 5px;
                    left: 5px;
                    overflow: hidden;
                    border-radius: 6px;
                    img {
                        width: 80px;
                    }
                }
                .sv-reward-count {
                    width: 40px;
                    height: 24px;
                    position: absolute;
                    top: 65px;
                    left: 49px;
                    background: linear-gradient(
                        0deg,
                        #996b1d 0%,
                        #e5ca72 50%,
                        #996b1d 100%
                    );
                    border-radius: 10px;
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                    line-height: 24px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
                }
            }
            .sv-reward-box.plus {
                display: none;
            }
            .gf-plus {
                width: 7px;
                height: 40px;
                position: absolute;
                bottom: 35px;
                left: 196px;
                background-color: #fff;
                display: none;
                &:before {
                    content: "";
                    width: 40px;
                    height: 7px;
                    position: absolute;
                    top: 16px;
                    left: -16px;
                    background-color: #fff;
                }
            }
            &.gf-plus {
                .gf-plus {
                    display: block;
                }
                .sv-reward-box.plus {
                    display: block;
                    left: 250px;
                }
                .sv-reward-box {
                    left: 60px;
                }
            }
        }
    }

    .color-btn {
        width: 90px;
        height: 40px;
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
        &.active {
            box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                inset 0 2px 2px rgba(0, 0, 0, 0.2);
            .color-btn-text {
                top: 12px;
            }
        }
    }

    .wpck-timer-box {
        width: 184px;
        height: 84px;
        position: absolute;
        top: -10px;
        margin-left: -10px;
        background-image: url(../img/timer-back.png);
        background-size: 100%;
        .time-left,
        .time-sec {
            width: 150px;
            height: 26px;
            position: absolute;
            top: 18px;
            margin-left: 18px;
            color: #fff000;
            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
        }
        .time-sec {
            top: 34px;
            color: #fff;
            font-size: 24px;
        }
    }
`;

export default GfSalePop;
