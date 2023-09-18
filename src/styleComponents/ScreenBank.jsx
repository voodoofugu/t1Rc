import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ScreenBankStyles = css`
    .item-sale-banner {
        &.sale {
            .btn-panel {
                height: 90px;
                bottom: -5px;
                width: 121px;
                border-left: solid 4px #ebd06d;
                border-right: solid 4px #ebd06d;
                .btn-box {
                    right: 8px;
                    bottom: 26px;
                }
                .sale-banner {
                    display: block;
                    width: 141px;
                    height: 30px;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    font-size: 18px;
                    font-weight: bold;
                    color: #ff9;
                    line-height: 26px;
                    text-shadow: 0 2px 0 #300;
                    .text {
                        text-transform: uppercase;
                        font-size: 18px;
                        margin: 0;
                        padding: 2px 10px 2px 10px;
                        margin-top: 0px;
                        margin-left: 117px;
                        background: radial-gradient(
                            ellipse at center,
                            #fff39c 0%,
                            #ffa600 100%
                        );
                        display: inline-block;
                        border-radius: 14px;
                        box-shadow: 0 2px 6px #392d26;
                        color: #dc0000;
                    }
                    .timer {
                        font-size: 14px;
                        width: 141px;
                        position: absolute;
                        top: 78px;
                        left: 0px;
                        .time {
                            &:before {
                                content: "";
                                display: inline-block;
                                width: 24px;
                                height: 24px;
                                position: relative;
                                top: 7px;
                                margin-right: 3px;
                                background-image: url(../img/time1.png);
                                background-size: 24px;
                            }
                        }
                    }
                }
            }
        }
    }

    .heroes-card-list {
        .heroes-card-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: block;
            // background: red;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            font-size: 0;

            .hero-card {
                display: inline-block;
                width: 120px;
                height: 120px;
                background: #ffa;
                margin: 8px 8px 0 8px;
                background: linear-gradient(90deg, #b37a07, #ffb229, #fffbc7);
                border-radius: 7px;
                box-shadow: 0 2px 0px #392d26, inset 0 1px 2px #fff,
                    inset 0 -15px 1px rgba(0, 0, 0, 0.11);
                position: relative;
                .a-box {
                    display: block;
                    position: absolute;
                    left: 5px;
                    right: 5px;
                    top: 5px;
                    bottom: 30px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    background: #ccc;
                    // background: linear-gradient(to bottom, #c12600, #6e0303);
                    box-shadow: 0 0 2px #fff, 0 0 5px #fff,
                        inset 0 2px 1px rgba(0, 0, 0, 0.55);
                    overflow: hidden;
                    .avatar {
                        width: 100%;
                        height: auto;
                        &.disabled {
                            filter: grayscale(100%);
                        }
                        // border-top-left-radius: 5px;
                        // border-top-right-radius: 5px;
                        // box-shadow: 0 0 2px #fff, 0 0 5px #fff, inset 0 2px 1px rgba(0, 0, 0, 0.55);
                    }
                    // &:after{
                    //     content: "";
                    //     display: block; width: 100%; height: 100%;
                    //     background: red;
                    //     position: absolute; left:0; top: 0;
                    // }
                }
                .name {
                    display: block;
                    // background: red;
                    position: absolute;
                    left: 4px;
                    right: 4px;
                    // width: 100px;
                    bottom: 4px;
                    height: 22px;
                    line-height: 22px;
                    font-size: 16px;
                    font-weight: bold;
                    color: #222;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .asc-lvl {
                    display: inline-block;
                    width: 50px;
                    height: 68px;
                    border-radius: 80px;
                    border-top-left-radius: 20px;
                    border-top-right-radius: 20px;
                    position: absolute;
                    left: -10px;
                    top: -2px;
                    box-shadow: 0 3px 0px #c87725, inset 0 3px 2px #ffa,
                        1px 2px 1px #000, 1px 5px 3px #000;
                    background: linear-gradient(
                        45deg,
                        #e8c34e,
                        #ffa,
                        #cfa831,
                        #fbf1d8
                    );
                    line-height: 28px;
                    color: #342b2b;
                    font-size: 16px;
                    text-shadow: 0 0 1px #000, 0 2px 2px #fff;
                    text-align: center;
                    &:before {
                        content: "";
                        display: block;
                        width: 36px;
                        height: 36px;
                        position: absolute;
                        left: 7px;
                        bottom: 7px;
                        background: #342b2b;
                        border-radius: 80px;
                        box-shadow: 0 0 5px #ffc, 0 0 10px #ffa;
                    }
                    &:after {
                        content: "";
                        display: block;
                        width: 34px;
                        height: 34px;
                        background-image: url(../img/arrow_up1.png);
                        background-size: 34px;
                        position: absolute;
                        left: 8px;
                        bottom: 8px;
                    }
                }

                &.disabled {
                    background: linear-gradient(90deg, #ccc, #eee, #ccc);
                    .asc-lvl {
                        background: linear-gradient(90deg, #ccc, #eee, #ccc);
                        box-shadow: 0 3px 0px #555, inset 0 3px 2px #fff,
                            1px 2px 1px #000, 1px 5px 3px #000;
                        &:before {
                            background: #333;
                            box-shadow: 0 0 5px #fff, 0 0 10px #fff;
                        }
                    }
                }
            }
        }
    }

    .btn-buy-real {
        .btn-buy-real {
            display: inline-block;
            min-width: 130px;
            height: 42px;
            border-radius: 9px;
            position: absolute;
            right: 2px;
            top: 2px;
            line-height: 42px;
            box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                inset 0 -3px 0px #c87725, 0 0 3px #3d3737, 0 0 7px #000,
                inset 0 0 3px #603806;
            background: linear-gradient(
                45deg,
                #e8c34e,
                #f1da7c,
                #cfa831,
                #fbf1d8
            );
            color: #3c3934;
            cursor: pointer;
            text-align: center;
            text-transform: uppercase;
            font-size: 20px;
            font-weight: bold;
            color: #4a3a08;
            text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
            &:hover {
                box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                    inset 0 -3px 0px #c87725, 0 0 12px #ff0, 0 0 5px #ffc,
                    inset 0 0 10px #ffc, inset 0 0 3px #603806;
            }
            &:active {
                box-shadow: inset 0 -19px 5px rgba(200, 119, 37, 0.59),
                    inset 0 -2px 0px #c87725, inset 0 1px 1px #c87725,
                    0 0 10px #ff0, inset 0 0 10px #ffc, inset 0 0 3px #603806;
                line-height: 44px;
            }

            // &:hover{
            //     // background: linear-gradient(45deg, #e8c34e, #f1da7c, #cfa831, #fbf1d8);
            //     box-shadow:
            //         inset 0 -20px 5px rgba(200, 119, 37, 0.59), inset 0 -3px 0px #c87725, 0 0 3px #3d3737, 0 0 7px #000, inset 0 0 3px #603806,
            //         0 0 5px #ff7c08, 0 0 9px #ffa516, 0 0 11px #ffc318, inset 0 0 12px #ff0, inset 0 0 15px #ff0;
            // }
            // &:active{
            //     // background: linear-gradient(45deg, #e8c34e, #f1da7c, #cfa831, #fbf1d8);
            //     box-shadow:
            //         inset 0 1px 1px #603806,
            //         inset 0 -19px 5px rgba(200, 119, 37, 0.59),
            //         inset 0 -2px 0px #c87725, 0 0 3px #3d3737, 0 0 7px #000,
            //         inset 0 1px 3px #603806,
            //         0 0 5px #ff7c08, 0 0 9px #ffa516, 0 0 11px #ffc318, inset 0 1px 12px #ff0, inset 0 1px 15px #ff0
            //         ;
            //     line-height: 44px;
            // }
        }
    }
    .item-complex-icon {
        .icon {
            display: inline-block;
            width: 75px;
            height: 75px;
            position: absolute;
            left: 11px;
            top: 11px;
            border: solid 2px #d1d3bf;
            background: linear-gradient(to bottom, #9c8374, #4a433f);
            box-shadow: inset 0 2px 6px #462f1d, 0 0 3px #fff, 0 0 5px #fff;
            .ice_gold {
                display: none;
            }
            &.reborn {
                .gold {
                    display: none;
                }
                .shards {
                    display: none;
                }
                .gems {
                    display: none;
                }
                .gold-shards {
                    display: none;
                }
                .newtime {
                    display: none;
                }
                .rate {
                    display: none;
                }
            }
            &.ice_gold {
                .gold {
                    display: none;
                }
                .shards {
                    display: none;
                }
                .gems {
                    display: none;
                }
                .gold-shards {
                    display: none;
                }
                .reborn {
                    display: none;
                }
                .ice_gold {
                    display: block;
                    img {
                        width: 75px;
                    }
                }
            }
            &.balancer {
                .reborn {
                    display: none;
                }
                .gold {
                    display: none;
                }
                .shards {
                    display: none;
                }
                .gold-shards {
                    display: none;
                }
                .newtime {
                    display: none;
                }
                .rate {
                    display: none;
                }
            }
            &.gold {
                .reborn {
                    display: none;
                }
                .shards {
                    display: none;
                }
                .gems {
                    display: none;
                }
                .gold-shards {
                    display: none;
                }
            }
            &.gold {
                .dark_gold {
                    display: none;
                }
            }
            &.shards {
                .reborn {
                    display: none;
                }
                .gold {
                    display: none;
                }
                .gems {
                    display: none;
                }
                .gold-shards {
                    display: none;
                }
            }
            &.gems {
                .reborn {
                    display: none;
                }
                .gold {
                    display: none;
                }
                .shards {
                    display: none;
                }
                .gold-shards {
                    display: none;
                }
            }
            &.gold-shards {
                .reborn {
                    display: none;
                }
                .gold {
                    display: none;
                }
                .shards {
                    display: none;
                }
                .gems {
                    display: none;
                }
            }
            &.crowns {
                .reborn {
                    display: none;
                }
                .gold {
                    display: none;
                }
                .shards {
                    display: none;
                }
                .gems {
                    display: none;
                }
                img {
                    width: 90%;
                    height: 90%;
                    margin-top: 7px;
                }
            }
            // .time{
            //     width: 55px; height: 40px; position: absolute; top: 44px; left: 30px;
            //     &.t1h{background-image: url(../img/ic-abil-time1h.png);}
            //     &.t6h{background-image: url(../img/ic-abil-time6h.png);}
            //     &.t24h{background-image: url(../img/ic-abil-time24h.png);}
            // }
            .rate {
                font-size: 18px;
                color: #fff;
                line-height: 18px;
                text-shadow: 0 1px 3px #2f2f2f;
                width: 87px;
                height: 22px;
                position: absolute;
                top: 50px;
                left: -6px;
                &.red {
                    background-image: url(../img/ic-abil-redline.png);
                }
                &.green {
                    background-image: url(../img/ic-abil-greenline.png);
                }
                &.blue {
                    background-image: url(../img/ic-abil-blueline.png);
                }
            }
            &.time {
                .rate {
                    display: none;
                }
            }
            &.rate {
                .newtime {
                    display: none;
                }
            }
        }
    }

    .left-side .left-panel .tab-panel.bank-panel {
        .bank-title {
            display: block;
            width: 100%;
            height: 35px;
            line-height: 35px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            color: #ffeb9a;
            text-shadow: 0 2px 0 #000, 0 1px 10px #000;
            // background: red;
            position: absolute;
            left: 5px;
            top: 5px;
            // font-size:
            &:before,
            &:after {
                content: "";
                display: inline-block;
                width: 10px;
                height: 10px;
                background: linear-gradient(
                    60deg,
                    #ffeb9a,
                    #f1da7c,
                    #cfa831,
                    #ffeb9a
                );
                position: relative;
                top: -1px;
                border-radius: 100%;
                box-shadow: 0 2px 0 #000, 0 1px 10px #000;
                // z-index: 2;
                margin: 0px 5px;
            }
        }
        .bank-subwin {
            display: block;
            position: absolute;
            left: 5px;
            right: 5px;
            top: 45px;
            bottom: 50px;
            background: #766459;
            border-radius: 10px;
            border: solid 5px #ffb432;
            box-shadow: 0 5px 10px #615048;
            text-align: center;
        }

        .bank-subwin.sale {
            border-color: #ffb432;
            .bs-pack-scroll {
                display: block;
                position: absolute;
                left: 0px;
                top: 0px;
                bottom: 0px;
                right: 0px;
                // background: red;
                overflow-y: scroll;
                padding-top: 5px;
                padding-bottom: 10px;
                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                    border-radius: 10px;
                    background-color: #7c665c;
                }
                &::-webkit-scrollbar {
                    width: 10px;
                    // background-color: #9e8b7d;
                }
                &::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 3px #796b60;
                    background: linear-gradient(
                        to right,
                        #fff,
                        #f5de80,
                        #f4b766,
                        #b26d12
                    );
                }

                .sale-offer {
                    display: inline-block;
                    width: 470px;
                    height: 170px;
                    background: linear-gradient(
                        -10deg,
                        #ffb652,
                        #ffed29,
                        #fffbc7
                    );
                    position: relative;
                    margin: 20px 7px 0 7px;
                    border-radius: 7px;
                    box-shadow: 0 2px 5px #392d26, inset 0 1px 2px #fff;
                    // background: red;
                    &:before {
                        content: "";
                        display: block;
                        background: #ccc;
                        position: absolute;
                        left: 4px;
                        right: 4px;
                        top: 4px;
                        bottom: 4px;
                        border-radius: 5px;
                        // background: linear-gradient(to right, #cf6767, #ffa029, #db5436);
                    }
                    .sale-off {
                        width: 72px;
                        height: 66px;
                        background-size: 72px;
                        .saletext {
                            width: 58px;
                            font-size: 22px;
                            line-height: 22px;
                            margin-left: 0px;
                            top: 5px;
                        }
                    }
                    .banner,
                    .sale-banner {
                        display: block;
                        position: absolute;
                        left: 4px;
                        right: 4px;
                        top: 4px;
                        bottom: 78px;
                        img {
                            width: 100%;
                            height: 100%;
                            border-top-left-radius: 5px;
                            border-top-right-radius: 5px;
                        }
                        .ban-back {
                            width: 462px;
                            height: 88px;
                            &.blue {
                                background: linear-gradient(
                                    to top,
                                    #a1d2ff 0%,
                                    #005eb0 80%,
                                    #207ce5 100%
                                );
                            }
                            &.madg {
                                background: linear-gradient(
                                    to top,
                                    #f0a3ff 0%,
                                    #b000a4 80%,
                                    #e322e3 100%
                                );
                            }
                            &.green {
                                background: linear-gradient(
                                    to top,
                                    #baffa3 0%,
                                    #23b000 80%,
                                    #20e320 100%
                                );
                            }
                            &.sea {
                                background: linear-gradient(
                                    to top,
                                    #a3f4ff 0%,
                                    #008db0 80%,
                                    #22d6e3 100%
                                );
                            }
                        }
                        .clock {
                            width: 110px;
                            height: 80px;
                            background-size: 110px;
                            position: absolute;
                            top: 6px;
                            margin-left: 10px;
                            &.t1h {
                                background-image: url(../img/ic-clock1.png);
                            }
                            &.t6h {
                                background-image: url(../img/ic-clock6.png);
                            }
                            &.t24h {
                                background-image: url(../img/ic-clock24.png);
                            }
                        }
                        &.clock {
                            .rate {
                                display: none;
                            }
                            .rate-text {
                                display: none;
                            }
                            .gold-shards {
                                display: none;
                            }
                        }
                        .reborn {
                            width: 75px;
                            height: 75px;
                            background-image: url(../img/ic-abil-reborn.png);
                            background-size: 75px;
                            position: absolute;
                            top: 6px;
                            margin-left: 24px;
                            .instant {
                                background-color: rgba(60, 57, 52, 0.9);
                                position: relative;
                                top: 5px;
                                padding: 4px;
                                left: 170px;
                                font-size: 30px;
                                color: #fff;
                                line-height: 20px;
                                border-radius: 14px;
                                &:before {
                                    content: "";
                                    display: inline-block;
                                    width: 26px;
                                    height: 26px;
                                    vertical-align: middle;
                                    position: relative;
                                    background-image: url(../img/reb-rub.png);
                                    background-size: 26px;
                                    margin-right: 5px;
                                }
                            }
                        }
                        .balancer {
                            width: 75px;
                            height: 75px;
                            background-image: url(../img/ic-abil-rubin@2x.png);
                            background-size: 75px;
                            position: absolute;
                            top: 6px;
                            margin-left: 24px;
                        }
                        .gold {
                            width: 75px;
                            height: 75px;
                            background-image: url(../img/ic-abil-gold.png);
                            background-size: 75px;
                            position: absolute;
                            top: 6px;
                            margin-left: 188px;
                            &:before {
                                content: "";
                                width: 75px;
                                height: 75px;
                                display: block;
                                background-image: url(../img/ic-abil-gold.png);
                                position: absolute;
                                top: 4px;
                                margin-left: 55px;
                            }
                            &:after {
                                content: "";
                                width: 75px;
                                height: 75px;
                                display: block;
                                background-image: url(../img/ic-abil-gold.png);
                                position: absolute;
                                top: 5px;
                                margin-left: -53px;
                            }
                        }
                        .ice_gold {
                            display: none;
                            width: 75px;
                            height: 75px;
                            background-image: url(../img/ic-ice_gold.png);
                            background-size: 75px;
                            position: absolute;
                            top: 6px;
                            margin-left: 188px;
                            &:before {
                                content: "";
                                width: 75px;
                                height: 75px;
                                display: block;
                                background-size: contain;
                                background-image: url(../img/ic-ice_gold.png);
                                position: absolute;
                                top: 4px;
                                margin-left: 55px;
                            }
                            &:after {
                                content: "";
                                width: 75px;
                                height: 75px;
                                display: block;
                                background-size: contain;
                                background-image: url(../img/ic-ice_gold.png);
                                position: absolute;
                                top: 5px;
                                margin-left: -53px;
                            }
                        }
                        .newtime {
                            width: 110px;
                            height: 80px;
                            background-size: 110px;
                            position: absolute;
                            top: 6px;
                            margin-left: -26px;
                            .newclocktime {
                                width: 20px;
                                height: 10px;
                                color: #fff;
                                position: absolute;
                                top: 56px;
                                margin-left: 44px;
                                font-size: 20px;
                                line-height: 10px;
                                font-weight: bold;
                            }
                        }
                        .gold-shards {
                            width: 75px;
                            height: 75px;
                            background-image: url(../img/ic-abil-gold-but.png);
                            background-size: 75px;
                            position: absolute;
                            top: 6px;
                            margin-left: 188px;
                        }
                        .gems {
                            width: 75px;
                            height: 75px;
                            background-image: url(../img/ic-abil-rubin.png);
                            background-size: 75px;
                            position: absolute;
                            top: 6px;
                            margin-left: 188px;
                        }
                        .shards {
                            width: 75px;
                            height: 75px;
                            background-image: url(../img/ic-abil-butil.png);
                            background-size: 75px;
                            position: absolute;
                            top: 6px;
                            margin-left: 188px;
                            &:before {
                                content: "";
                                width: 75px;
                                height: 75px;
                                display: block;
                                background-image: url(../img/ic-abil-butil.png);
                                position: absolute;
                                top: 4px;
                                margin-left: 55px;
                            }
                            &:after {
                                content: "";
                                width: 75px;
                                height: 75px;
                                display: block;
                                background-image: url(../img/ic-abil-butil.png);
                                position: absolute;
                                top: 5px;
                                margin-left: -53px;
                            }
                        }
                        &.gold {
                            .gold-shards {
                                display: none;
                            }
                            .shards {
                                display: none;
                            }
                            .gems {
                                display: none;
                            }
                            .reborn {
                                display: none;
                            }
                            .balancer {
                                display: none;
                            }
                        }
                        &.ice_gold {
                            .ice_gold {
                                display: block;
                            }
                            .gold-shards {
                                display: none;
                            }
                            .shards {
                                display: none;
                            }
                            .gems {
                                display: none;
                            }
                            .reborn {
                                display: none;
                            }
                            .balancer {
                                display: none;
                            }
                            .gold {
                                display: none;
                            }
                        }
                        &.gold-shards.rate {
                            .gold {
                                display: none;
                            }
                            .shards {
                                display: none;
                            }
                            .gems {
                                display: none;
                            }
                            .reborn {
                                display: none;
                            }
                            .balancer {
                                display: none;
                            }
                        }
                        &.gold-shards.clock {
                            .count1,
                            .count2 {
                                font-size: 22px;
                                display: inline-block;
                            }
                            .gold-shards {
                                display: none;
                            }
                            .gems {
                                display: none;
                            }
                            .reborn {
                                display: none;
                            }
                            .balancer {
                                display: none;
                            }
                            .gold,
                            .shards {
                                &:before {
                                    display: none;
                                }
                                &:after {
                                    display: none;
                                }
                                margin-left: 140px;
                            }
                            .shards {
                                margin-left: 240px;
                            }
                            &.old {
                                .counter {
                                    display: none;
                                }
                                .g-count {
                                    display: inline-block;
                                    text-decoration: none;
                                }
                                .g-count.oldprice,
                                .s-count.oldprice {
                                    text-decoration: line-through;
                                    color: red;
                                    font-size: 16px;
                                    position: relative;
                                }
                                .newprice {
                                    display: inline-block;
                                    text-decoration: none;
                                    color: #fff;
                                    font-size: 18px;
                                    margin: 0 4px 0 4px;
                                }
                            }
                        }
                        &.shards.clock {
                            .count2 {
                                display: none;
                            }
                            .g-count {
                                display: none;
                            }
                            .s-count {
                                display: none;
                            }
                        }
                        &.gold.clock {
                            .count2 {
                                display: none;
                            }
                            .g-count {
                                display: none;
                            }
                            .s-count {
                                display: none;
                            }
                        }
                        &.shards {
                            .gold {
                                display: none;
                            }
                            .gold-shards {
                                display: none;
                            }
                            .gems {
                                display: none;
                            }
                            .reborn {
                                display: none;
                            }
                            .balancer {
                                display: none;
                            }
                        }
                        &.gems {
                            .gold {
                                display: none;
                            }
                            .gold-shards {
                                display: none;
                            }
                            .shards {
                                display: none;
                            }
                            .reborn {
                                display: none;
                            }
                            .balancer {
                                display: none;
                            }
                        }
                        &.reborn {
                            .gold {
                                display: none;
                            }
                            .gold-shards {
                                display: none;
                            }
                            .shards {
                                display: none;
                            }
                            .gems {
                                display: none;
                            }
                            .clock {
                                display: none;
                            }
                            .counter {
                                display: none;
                            }
                            .rate {
                                display: none;
                            }
                            .balancer {
                                display: none;
                            }
                        }
                        &.balancer {
                            .gold {
                                display: none;
                            }
                            .gold-shards {
                                display: none;
                            }
                            .shards {
                                display: none;
                            }
                            .gems {
                                display: none;
                            }
                            .clock {
                                display: none;
                            }
                            .counter {
                                display: none;
                            }
                            .rate {
                                display: none;
                            }
                            .reborn {
                                display: none;
                            }
                        }
                        .rate {
                            width: 200px;
                            height: 34px;
                            background-color: #b9171d;
                            position: absolute;
                            top: 8px;
                            left: 130px;
                            border-radius: 14px;
                            font-size: 30px;
                            color: #fff;
                            text-shadow: 0 1px 3px #2f2f2f;
                            line-height: 34px;
                        }
                        &.rate {
                            .gold,
                            .gold-shards,
                            .shards,
                            .gems {
                                margin-left: 24px;
                                &:before {
                                    display: none;
                                }
                                &:after {
                                    display: none;
                                }
                            }
                            .clock {
                                display: none;
                            }
                            .newtime {
                                display: none;
                            }
                            .counter {
                                display: none;
                            }
                            .g-count {
                                display: none;
                            }
                            .s-count {
                                display: none;
                            }
                        }
                        .rate-text {
                            width: 200px;
                            height: 38px;
                            position: absolute;
                            top: 46px;
                            left: 130px;
                            font-size: 14px;
                            color: #fff;
                            text-shadow: 0 1px 3px #2f2f2f;
                        }
                        &.old {
                            .counter {
                                background-color: rgba(60, 57, 52, 0.9);
                                border-radius: 14px;
                                height: 38px;
                                top: 30px;
                            }
                            .count1 {
                                display: inline-block;
                                text-decoration: none;
                                background-color: rgba(0, 0, 0, 0);
                                font-size: 24px;
                                top: 0px;
                            }
                            .count1.oldprice {
                                text-decoration: line-through;
                                color: red;
                                font-size: 16px;
                                background-color: rgba(0, 0, 0, 0);
                                padding: 0px;
                                top: 0px;
                            }
                        }
                    }
                    .counter {
                        width: 200px;
                        height: 60px;
                        position: absolute;
                        top: 16px;
                        margin-left: 130px;
                    }
                    .count1,
                    .count2,
                    .g-count,
                    .s-count {
                        background-color: rgba(60, 57, 52, 0.9);
                        position: relative;
                        top: 12px;
                        padding: 8px;
                        font-size: 30px;
                        color: #fff;
                        line-height: 20px;
                        border-radius: 14px;
                    }
                    .sale-banner {
                        // background: red;
                        top: 92px;
                        bottom: 4px;
                        border-bottom-left-radius: 5px;
                        border-bottom-right-radius: 5px;
                        box-shadow: 0 1px 1px #fff;
                        background: linear-gradient(
                            to bottom,
                            #c12600,
                            #6e0303
                        );
                        .text {
                            display: block;
                            // width: 70%;
                            // background: red;
                            position: absolute;
                            left: 15px;
                            top: 10px;
                            right: 150px;
                            font-size: 16px;
                            color: #ffdf7f;
                            font-weight: bold;
                            line-height: 20px;
                            .title,
                            .txt {
                                margin: 0;
                                padding: 0;
                            }
                            .title {
                                font-size: 20px;
                                text-transform: uppercase;
                                text-shadow: 0 2px 0 #400;
                            }
                            .txt {
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                margin-top: 6px;
                            }
                        }
                        .btn-box {
                            display: block;
                            position: absolute;
                            right: 10px;
                            bottom: 10px;
                            background: red;
                            padding: 10px;
                            border-radius: 10px;
                            background: linear-gradient(
                                to top,
                                #c12600,
                                #6e0303
                            );
                        }
                        .btn-buy {
                            position: relative;
                            left: auto;
                            right: auto;
                            top: auto;
                            bottom: auto;
                            .txt {
                                display: inline-block;
                                // position: absolute; left: 10px;
                            }
                            .price-old {
                                display: inline-block;
                                font-size: 13px;
                                text-shadow: none;
                                color: #333;
                                margin-left: 10px;
                                height: 17px;
                                line-height: 17px;
                                // position: absolute; left: calc(50% + 10px);
                                &:after {
                                    content: "";
                                    display: block;
                                    width: calc(100% + 20px);
                                    height: 2px;
                                    background: rgba(255, 0, 0, 0.55);
                                    // background: rgba(0,0,0,0.33);
                                    position: relative;
                                    left: -10px;
                                    top: -10px;
                                }
                            }
                        }
                    }

                    .timer {
                        display: block;
                        width: 105px;
                        height: 105px;
                        position: absolute;
                        right: 21px;
                        top: -4px;
                        &:before {
                            content: "";
                            display: block;
                            width: 105px;
                            height: 105px;
                            background-image: url(../img/offer-bk2.png);
                            background-size: 105px 105px;
                            background-repeat: no-repeat;
                            // transform: rotate(-90deg);
                        }
                        &:after {
                            content: "";
                            display: block;
                            width: 38px;
                            height: 38px;
                            position: absolute;
                            left: calc(50% - 22px);
                            top: 2px;
                            background-image: url(../img/time1.png);
                            background-size: 38px;
                        }
                        .time,
                        .text {
                            display: block;
                            // width: 100%;
                            height: 18px;
                            line-height: 18px;
                            position: absolute;
                            left: 10px;
                            right: 14px;
                            top: 41px;
                            font-size: 14px;
                            font-weight: bold;
                            line-height: 20px;
                            color: #ffa;
                            text-shadow: 0 2px 1px #300;
                            line-height: 20px;
                        }
                        .text {
                            top: 57px;
                            font-size: 10px;
                            text-transform: uppercase;
                        }
                        .time {
                            background: #640706;
                            border-radius: 30px;
                        }
                    }
                    &.empty {
                        background: #615048;
                        box-shadow: 0 0 10px #9e8b7d;
                        &:before {
                            background: #766459;
                        }
                        .banner {
                            display: none;
                        }
                        .sale-banner {
                            display: none;
                        }
                        .timer {
                            display: none;
                        }
                    }
                }
            }
        }
        .bank-tabs-all {
            display: block;
            position: absolute;
            left: 20px;
            right: 20px;
            bottom: 10px;
            height: 40px;
            // background: red;
            text-align: center;
            .bank-tab {
                display: inline-block;
                // width: 157px;
                width: 188px;
                height: 40px;
                background: #766459;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                box-shadow: 0 2px 2px #555, inset 0 3px 3px rgba(0, 0, 0, 0.25);
                line-height: 40px;
                font-size: 20px;
                font-weight: bold;
                text-transform: uppercase;
                color: #333;
                text-shadow: 0 0 1px #333;
                cursor: pointer;
                position: relative;

                a {
                    width: 100%;
                    height: 100%;
                    display: block;
                }

                &.sale {
                    // background: #ffb432;
                    color: #ffb432;
                    &.selected {
                        background: #ffb432;
                        color: #500;
                    }
                }
                &.vip {
                    // background: #800;
                    color: #ffa;
                    text-shadow: 0 0 1px #f00;
                    font-size: 0;
                    line-height: 52px;
                    background: linear-gradient(to bottom, #500, #c00000);
                    top: -1px;
                    &.selected {
                        background: linear-gradient(
                            to bottom,
                            #580000,
                            #c00000
                        );
                        // box-shadow: none;
                        // background: #400000;
                        // top: -1px;
                    }
                }
                &.items {
                    color: #7dc2ff;
                    &.selected {
                        background: #7dc2ff;
                        color: #00396c;
                    }
                }
                &.heroes {
                    color: #00ea29;
                    &.selected {
                        background: #91e908;
                        color: #01460d;
                    }
                }
                &.resources {
                    color: #61e278;
                    &.selected {
                        background: #61e278;
                        color: #18401f;
                    }
                }
                &.crowns {
                    color: #ffb1fc;
                    &.selected {
                        background: #d6aaff;
                        color: #312231;
                    }
                }
                &.selected {
                    box-shadow: 0 2px 2px #555;
                    .banner {
                        top: -7px;
                    }
                }
                &.disabled {
                    .banner {
                        display: none;
                    }
                    background: #c4b6ad;
                    color: #9e8b7d;
                    text-shadow: none;
                }
                // &.has-banner{
                //     padding-right: 20px;
                //     width: calc(174px - 20px);
                // }
                .banner {
                    display: block;
                    width: 40px;
                    height: 45px;
                    // background: red;
                    position: absolute;
                    right: 0px;
                    top: 0px;
                    background-image: url(../img/offer-bk-sm.png);
                    background-size: 40px 45px;
                    .text {
                        font-size: 14px;
                        color: #ff9;
                        transform: rotate(-30deg);
                        text-shadow: 0 3px 0px #200, 0 2px 2px #200;
                    }

                    &.time {
                        background-image: url(../img/offer-bk-sm1.png);
                        background-size: 40px 45px;
                        &:after {
                            content: "";
                            display: block;
                            width: 32px;
                            height: 32px;
                            position: absolute;
                            left: 3px;
                            top: 5px;
                            background-image: url(../img/time1.png);
                            background-size: 32px;
                        }
                    }
                    &.vip {
                        display: block;
                        width: 108px;
                        height: 41px;
                        background-image: url(../img/offer-bk-vip.png);
                        background-size: 108px 41px;
                        position: absolute;
                        // right:11px;
                        left: calc(50% - 45px);
                        top: 2px;
                        font-size: 0;
                    }
                }
            }
        }

        .bank-subwin.items {
            // background:red;
            border-color: #7dc2ff;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            box-shadow: inset 0 5px 5px #4d433c;

            .bs-items-scroll {
                display: block;
                position: absolute;
                left: 0px;
                top: 0px;
                bottom: 0px;
                right: 0px;
                // background: red;
                overflow-y: scroll;
                padding-top: 5px;
                padding-bottom: 10px;

                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                    border-radius: 10px;
                    background-color: #7c665c;
                }
                &::-webkit-scrollbar {
                    width: 10px;
                    // background-color: #9e8b7d;
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 3px #796b60;
                    background: linear-gradient(
                        to right,
                        #fff,
                        #f5de80,
                        #f4b766,
                        #b26d12
                    );
                }

                .item {
                    display: inline-block;
                    width: 465px;
                    height: 100px;
                    // background: linear-gradient(-10deg, #ffb652, #ffed29, #fffbc7);
                    background: linear-gradient(
                        -10deg,
                        #b37a07,
                        #ffb229,
                        #fffbc7
                    );
                    position: relative;
                    margin: 10px 7px 0 7px;
                    border-radius: 9px;
                    box-shadow: 0 2px 5px #392d26, inset 0 1px 2px #fff;
                    // background: red;

                    &:before {
                        content: "";
                        display: block;
                        background: #ccc;
                        position: absolute;
                        left: 4px;
                        right: 4px;
                        top: 4px;
                        bottom: 4px;
                        border-radius: 6px;
                        background: linear-gradient(
                            to right,
                            #67a5cf,
                            #377795,
                            #244977,
                            #1e3450
                        );
                        box-shadow: 0 0 2px #fff, 0 0 5px #fff,
                            inset 0 2px 3px rgba(0, 0, 0, 0.55);
                    }
                    // &:nth-child(n):before{
                    //     background: linear-gradient(to right, #67a5cf, #377795, #244977, #1e3450);
                    // }
                    &:nth-child(4n-2):before {
                        background: linear-gradient(
                            to right,
                            #cc67cf,
                            #8f3795,
                            #772474,
                            #451e50
                        );
                    }
                    &:nth-child(4n-1):before {
                        background: linear-gradient(
                            to right,
                            #cf9167,
                            #955a37,
                            #773f24,
                            #50281e
                        );
                    }
                    &:nth-child(4n):before {
                        background: linear-gradient(
                            to right,
                            #6fcf67,
                            #277230,
                            #247727,
                            #35501e
                        );
                    }

                    @include item-complex-icon();

                    // .icon{
                    //     display: inline-block; width: 75px; height: 75px;
                    //     position: absolute; left: 11px; top: 11px; border: solid 2px #d1d3bf;
                    //     background: linear-gradient(to bottom, #9c8374, #4a433f);
                    //     box-shadow: inset 0 2px 6px #462f1d, 0 0 3px #fff, 0 0 5px #fff;
                    //     &.gold{
                    //         .shards{display: none;}
                    //         .gems{display: none;}
                    //         .gold-shards{display: none;}
                    //     }
                    //     &.shards{
                    //         .gold{display: none;}
                    //         .gems{display: none;}
                    //         .gold-shards{display: none;}
                    //     }
                    //     &.gems{
                    //         .gold{display: none;}
                    //         .shards{display: none;}
                    //         .gold-shards{display: none;}
                    //     }
                    //     &.gold-shards{
                    //         .gold{display: none;}
                    //         .shards{display: none;}
                    //         .gems{display: none;}
                    //     }
                    //     .time{
                    //         width: 55px; height: 40px; position: absolute; top: 44px; left: 30px;
                    //         &.t1h{background-image: url(../img/ic-abil-time1h.png);}
                    //         &.t6h{background-image: url(../img/ic-abil-time6h.png);}
                    //         &.t24h{background-image: url(../img/ic-abil-time24h.png);}
                    //     }
                    //     .rate{
                    //         font-size: 18px; color: #fff; line-height: 18px; text-shadow: 0 1px 3px #2f2f2f;
                    //         width: 87px; height: 22px; position: absolute; top: 50px; left: -6px;
                    //         &.red{background-image: url(../img/ic-abil-redline.png);}
                    //         &.green{background-image: url(../img/ic-abil-greenline.png);}
                    //         &.blue{background-image: url(../img/ic-abil-blueline.png);}
                    //     }
                    //     &.time{.rate{display: none};}
                    //     &.rate{.time{display: none};}
                    // }
                    .desc-box {
                        position: absolute;
                        width: 198px;
                        height: 86px;
                        top: 8px;
                        margin-left: 100px;
                        font-size: 18px;
                        font-weight: bold;
                        color: #ffc;
                        line-height: 18px;
                        text-shadow: 0 2px #000;
                        .desc-title {
                            width: 100%;
                            height: 40px;
                            text-align: center;
                        }
                        .desc-price {
                            width: 100%;
                        }
                        .price {
                            position: relative;
                            margin: 0 5px 0 5px;
                            font-size: 16px;
                            &.old {
                                text-decoration: line-through;
                                color: #000;
                                font-size: 14px;
                                text-shadow: none;
                                .pricenew {
                                    display: inline-block;
                                    color: #ffa;
                                    text-shadow: 0 2px 1px #000;
                                    font-size: 16px;
                                    margin: 4px;
                                }
                                .decs-text {
                                    display: none;
                                }
                            }
                            .pricenew {
                                display: none;
                            }
                        }
                        .decs-text {
                            width: 100%;
                            font-size: 12px;
                            line-height: 14px;
                            padding-top: 5px;
                        }
                        &.old {
                            .decs-text {
                                display: none;
                            }
                        }

                        &.with-reward {
                            .decs-text {
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                            }
                        }
                    }

                    // .title{
                    //     display: block; width: 190px; height: 92px ;
                    //     position: absolute; left: 100px; top: 4px;
                    //     // background: red;
                    //     .text{
                    //         margin:0; padding:5px; height: 82px;
                    //         display: table-cell;
                    //         // background: blue;
                    //         vertical-align: middle;
                    //         font-size: 17px; font-weight: bold;
                    //         color: #ffc;
                    //         line-height: 20px;
                    //         text-shadow: 0 2px #000;

                    //     }
                    // }

                    .btn-panel {
                        display: block;
                        width: 129px;
                        height: 50px;
                        position: absolute;
                        right: 15px;
                        bottom: 15px;
                        background: red;
                        border-radius: 7px;
                        padding: 10px;
                        background: linear-gradient(
                            to bottom,
                            #c12600,
                            #6e0303
                        );
                        box-shadow: 0 0 5px #500, inset 0 -2px 2px #500;

                        .btn-box {
                            display: block;
                            position: absolute;
                            right: 12px;
                            bottom: 7px;
                            // background: red;
                            padding: 10px;
                            border-radius: 7px;
                            background: linear-gradient(
                                to top,
                                #c12600,
                                #6e0303
                            );
                            .btn-buy {
                                position: relative;
                                left: auto;
                                right: auto;
                                top: auto;
                                bottom: auto;
                                .txt {
                                    display: inline-block;
                                    // position: absolute; left: 10px;
                                }
                                .price-old {
                                    display: inline-block;
                                    font-size: 13px;
                                    text-shadow: none;
                                    color: #333;
                                    margin-left: 10px;
                                    height: 17px;
                                    line-height: 17px;
                                    // position: absolute; left: calc(50% + 10px);
                                    &:after {
                                        content: "";
                                        display: block;
                                        width: calc(100% + 20px);
                                        height: 2px;
                                        background: rgba(255, 0, 0, 0.55);
                                        // background: rgba(0,0,0,0.33);
                                        position: relative;
                                        left: -10px;
                                        top: -10px;
                                    }
                                }
                            }
                        }
                        .sale-banner {
                            display: none;
                        }
                    }
                    &.empty {
                        background: #615048;
                        box-shadow: 0 0 10px #9e8b7d;
                        &:before {
                            background: #766459;
                            box-shadow: none;
                        }
                        .banner {
                            display: none;
                        }
                        .sale-banner {
                            display: none;
                        }
                        .timer {
                            display: none;
                        }
                    }
                    @include item-sale-banner();
                }
            }
        }

        .bank-subwin.vip {
            border-color: #580000;
            background: linear-gradient(to top, #580000, #c00000);

            .vip-progressor {
                display: block;
                width: 800px;
                height: 80px;
                // background: red;
                position: absolute;
                left: 10px;
                top: 10px;
                .vip-prg-box {
                    display: block;
                    height: 28px;
                    position: absolute;
                    left: 130px;
                    right: 130px;
                    top: 20px;
                    background: linear-gradient(
                        to right,
                        #bbbec0,
                        #f6dc70,
                        #e4b626
                    );
                    box-shadow: 0 1px 6px #333;
                    &:before {
                        content: "";
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 3px;
                        bottom: 3px;
                        background: #50505a;
                        box-shadow: inset 0 2px 5px #333, inset 0 2px 15px #333;
                    }
                    .vip-prg {
                        display: block;
                        background: linear-gradient(
                            177deg,
                            #bbbec0,
                            #f6dc70,
                            #e4b626
                        );
                        position: absolute;
                        left: 0;
                        top: 4px;
                        bottom: 4px;
                        box-shadow: inset 0 10px 2px rgba(255, 255, 122, 0.33),
                            0 0 3px #000, inset -3px 0px 3px #fff;
                        border-top-right-radius: 15px;
                        border-bottom-right-radius: 15px;
                        &:before,
                        &:after {
                            content: "";
                            position: absolute;
                            left: 2px;
                            right: 2px;
                            top: 8px;
                            bottom: 8px;
                            background: #ff9;
                            border-radius: 100%;
                            box-shadow: 0 0 5px #ff9;
                        }
                        &:after {
                            top: 5px;
                            bottom: 5px;
                            left: 48%;
                            right: 48%;
                            background: #ff9;
                            box-shadow: 0 0 7px #ff9, 0 0 10px #ff9;
                        }
                    }
                    &:after {
                        content: "";
                        display: block;
                        width: 50px;
                        height: 50px;
                        position: absolute;
                        left: calc(50% - 25px);
                        top: -30px;
                        background-image: url(../img/ico-real-big.png);
                        background-size: 50px;
                    }
                }
                .prg-num {
                    display: inline-block;
                    height: 19px;
                    background: linear-gradient(to top, #f2d35e, #fff);
                    border: solid #ffa 2px;
                    border-bottom-right-radius: 10px;
                    border-bottom-left-radius: 10px;
                    padding: 3px 20px;
                    margin-top: 46px;
                    line-height: 22px;
                    box-shadow: 0 1px 6px #333;
                    font-size: 16px;
                    font-weight: bold;
                    color: #322;
                    text-shadow: 0 2px 0px #ffa;
                }
                .vip-p-from,
                .vip-p-to {
                    display: block;
                    width: 169px;
                    height: 80px;
                    // background: blue;
                    position: absolute;
                    left: -10px;
                    top: 0px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .vip-p-to {
                    left: auto;
                    right: -10px;
                }
            }
            .vip-table {
                display: block;
                width: 800px;
                height: 296px;
                background: #b52e2e;
                position: absolute;
                left: 10px;
                top: 100px;
                border-radius: 10px;
                box-shadow: 0 0 4px #600, 0 0 14px #600;
                // overflow: hidden;
                // font-size: 16px;
                font-size: 0;
                color: #ffc;
                font-weight: bold;
                line-height: 18px;
                // #a90000
                text-align: left;
                p {
                    margin: 0;
                    padding: 0;
                    height: 30px;
                    line-height: 30px;
                }
                &.no-shards {
                    p {
                        height: 35px;
                        line-height: 35px;
                    }
                }
                .names {
                    font-size: 16px;
                    display: inline-block;
                    text-align: left;
                    position: relative;
                    width: 250px;
                    // background: #a90000;
                    // line-height: 20px;
                    p {
                        padding: 0px 25px;
                    }
                    p:nth-child(even) {
                        background: #a90000;
                    }
                    p.h {
                        height: 56px;
                        line-height: 56px;
                        text-align: center;
                        font-size: 18px;
                        text-shadow: 0 2px 0px #300;
                    }
                }
                .vip-row {
                    display: inline-block;
                    width: 55px;
                    text-align: center;
                    font-size: 16px;
                    color: #fff;
                    position: relative;
                    p:nth-child(even) {
                        background: #a90000;
                    }
                    p:nth-child(odd) {
                        // background: #bd3c3c;
                    }
                    p.h {
                        height: 56px;
                        line-height: 56px;
                        text-align: center;
                        font-family: times, Times new roman, serif;
                        font-size: 16px;
                        font-weight: bold;
                        // text-shadow: 0 2px 0px #300;

                        .vn {
                            display: block;
                            width: 55px;
                            height: 55px;
                            position: absolute;
                            left: 0px;
                            top: 1px;
                            // background: linear-gradient(to top, #f2d35e, #c89736, #ffffca);
                            // border-radius: 100%;
                            color: #400;
                            line-height: 57px;
                            text-shadow: 0 0 1px #000, 0 1px 1px #fff;
                            font-style: normal;
                            // box-shadow: inset 0 2px 0px #400;
                            // background: #d56b6b;
                            background-image: url(../img/vip-s1.png);
                            background-size: 55px;
                        }
                    }
                    &.selected {
                        // box-shadow: 0 0 3px #ffa, 0 0 3px #ffa;
                        &:after {
                            content: "";
                            display: block;
                            // width: 100%; height: 100%;
                            // background:red;
                            position: absolute;
                            left: -1px;
                            top: -3px;
                            right: -1px;
                            bottom: -3px;
                            border: solid 2px #ffa;
                            z-index: 1;
                            box-shadow: inset 0 0 1px #ff0, inset 0 0 3px #ff0,
                                inset 0 0 7px #500, 0 0 1px #ff0, 0 0 3px #ff0,
                                0 0 7px #500;
                        }
                        p.h:before,
                        p.h:after {
                            content: "";
                            display: block;
                            width: 51px;
                            height: 12px;
                            background: linear-gradient(
                                to top,
                                #f2d35e,
                                #c89736,
                                #ffffca
                            );
                            position: absolute;
                            left: 2px;
                            top: -5px;
                            z-index: 2;
                            box-shadow: 0 2px 2px #300;
                            border-bottom-left-radius: 10px;
                            border-bottom-right-radius: 10px;
                        }
                        p.h:after {
                            border-radius: 0;
                            border-top-left-radius: 10px;
                            border-top-right-radius: 10px;
                            top: 289px;
                            box-shadow: 0 2px 2px #300, 0 -1px 2px #300;
                        }
                    }
                }
                .vip-row:nth-child(even) {
                    p:nth-child(odd) {
                        background: #d04545;
                    }
                    p:nth-child(even) {
                        background: #bd3c3c;
                    }
                }
                .vip-row:nth-child(3) p.h .vn {
                    background-image: url(../img/vip-s2.png);
                    background-size: 55px;
                }
                .vip-row:nth-child(4) p.h .vn {
                    background-image: url(../img/vip-s3.png);
                    background-size: 55px;
                    color: #444;
                }
                .vip-row:nth-child(5) p.h .vn {
                    background-image: url(../img/vip-s4.png);
                    background-size: 55px;
                    color: #444;
                }
                .vip-row:nth-child(6) p.h .vn {
                    background-image: url(../img/vip-s5.png);
                    background-size: 55px;
                    color: #400;
                }
                .vip-row:nth-child(7) p.h .vn {
                    background-image: url(../img/vip-s6.png);
                    background-size: 55px;
                    color: #400;
                }
                .vip-row:nth-child(8) p.h .vn {
                    background-image: url(../img/vip-s7.png);
                    background-size: 55px;
                    color: #400;
                }
                .vip-row:nth-child(9) p.h .vn {
                    background-image: url(../img/vip-s8.png);
                    background-size: 55px;
                    color: #400;
                }
                .vip-row:nth-child(10) p.h .vn {
                    background-image: url(../img/vip-s9.png);
                    background-size: 55px;
                    color: #580349;
                }
                .vip-row:nth-child(11) p.h .vn {
                    background-image: url(../img/vip-s10.png);
                    background-size: 55px;
                    color: #580349;
                }
            }
            .next-free-gift {
                display: block;
                width: 150px;
                height: 265px;
                background: linear-gradient(-10deg, #b415bc, #ff3, #c648c1);
                position: absolute;
                right: 10px;
                top: 100px;
                border-radius: 10px;
                box-shadow: 0 0 3px #ff0, 0 0 4px #600, 0 0 14px #600,
                    inset 0 0 10px #500, inset 0 0 5px #ff0;
                border: solid 2px #ffa;
                &:before {
                    content: "";
                    display: block;
                    position: absolute;
                    left: 5px;
                    right: 5px;
                    bottom: 50px;
                    height: 20px;
                    border-radius: 100%;
                    background: rgba(0, 0, 0, 0.22);
                }
                .img {
                    width: 150px;
                    height: 150px;
                    margin-top: 65px;
                    position: relative;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .btn-box {
                    display: block;
                    position: absolute;
                    left: 10px;
                    right: 10px;
                    bottom: -29px;
                    background: linear-gradient(to top, #ff32ae, #df9883);
                    border-radius: 10px;
                    box-shadow: 0 0 10px #631047, inset 0 0 7px #ffc3fc;
                    .count {
                        display: inline-block;
                        width: auto;
                        min-width: 40px;
                        height: 28px;
                        position: relative;
                        top: -16px;
                        background: linear-gradient(-10deg, #600, #f00, #600);
                        border-radius: 20px;
                        padding: 0px 10px;
                        font-size: 18px;
                        font-weight: bold;
                        color: #ffa;
                        line-height: 28px;
                        border: solid 2px #ffc;
                        box-shadow: 0 0 3px #ff0, inset 0 0 2px #ff0,
                            inset 0 0 10px #000;
                        text-shadow: 0 2px 1px #300;
                        //margin-bottom: -20px;
                    }
                }
                .btn-buy {
                    display: inline-block;
                    position: relative;
                    left: auto;
                    top: auto;
                    bottom: auto;
                    right: auto;
                    margin: 10px;
                    margin-top: -10px;
                }
            }

            .flag-sale {
                content: "";
                display: block;
                width: 150px;
                height: 200px;
                background-image: url(../img/offer-bk4.png);
                background-size: 150px 200px;
                background-repeat: no-repeat;
                position: absolute;
                right: 10px;
                top: -15px;
                .text {
                    font-size: 20px;
                    font-weight: bold;
                    color: #ffe771;
                    text-shadow: 0 2px 0px #300;
                    display: block;
                    position: absolute;
                    left: 10px;
                    right: 20px;
                    top: 18px;
                    line-height: 23px;
                }
            }
        }

        .bank-subwin.heroes {
            // background: red;
            border-color: #91e908;
            .heroes-roll-4 {
                display: block;
                position: absolute;
                left: 10px;
                top: 7px;
                bottom: 38px;
                right: 200px;
                border-radius: 12px;
                // background: #67564b;
                background: linear-gradient(to left, #5f553b, #dab357, #906f57);
                box-shadow: 0 3px 0px #403d38;
                .title {
                    display: block;
                    height: 33px;
                    line-height: 28px;
                    // margin: 0px -5px;
                    margin: 0px 0px;
                    padding: 0px 5px;
                    font-size: 18px;
                    font-weight: bold;
                    color: #333;
                    text-shadow: 0 1px 0 #fff;
                    background: linear-gradient(
                        -45deg,
                        #877e64,
                        #ad905d,
                        #dab357,
                        #906f57
                    );
                    border-radius: 5px;
                    box-shadow: inset 0 15px 0 rgba(255, 255, 255, 0.15),
                        inset 0 -3px 0px #403d38, 0 0 1px #403d38,
                        inset 0 0 10px rgba(255, 255, 255, 0.33);

                    .title-text {
                        position: absolute;
                        left: 48%;
                    }
                }

                .timer {
                    // display: none;
                    display: block;
                    width: auto;
                    height: 40px;
                    background: linear-gradient(to left, #c12600, #6e0303);
                    position: absolute;
                    left: -18px;
                    top: -8px;
                    border: solid 3px #ffc627;
                    border-left: none;
                    border-right: none;
                    box-shadow: 0 0 3px #300, 4px 0 6px #300;
                    text-shadow: none;
                    font-size: 16px;
                    color: #fff;
                    line-height: 15px;

                    &:before,
                    &:after {
                        content: "";
                        border-top: solid 23px transparent;
                        border-left: solid 18px #ffc627;
                        border-bottom: solid 23px transparent;
                        position: absolute;
                        left: 100%;
                        top: -3px;
                    }
                    &:after {
                        content: "";
                        border-top: solid 20px transparent;
                        border-left: solid 15px #c12600;
                        border-bottom: solid 20px transparent;
                        position: absolute;
                        left: 100%;
                        top: 0px;
                        left: 100%;
                    }

                    .text {
                        display: inline-block;
                        width: auto;
                        max-width: 44%;
                        position: relative;
                        left: 0px;
                        top: 5px;
                        padding-right: 10px;
                        // background: green;
                        color: #ffa;
                        font-size: 14px;
                        font-weight: bold;
                        text-transform: uppercase;
                    }
                    .time {
                        display: inline-block;
                        width: auto;
                        height: 26px;
                        position: relative;
                        color: #ffa;
                        font-size: 18px;
                        font-weight: bold;
                        text-transform: uppercase;
                        line-height: 26px;
                        padding: 0px 15px 0px 42px;
                        text-shadow: 0 2px 0px #200;
                        background: #600;
                        border-radius: 20px;
                        // border: solid 2px #ffc627;
                        &:before {
                            content: "";
                            display: inline-block;
                            width: 44px;
                            height: 44px;
                            background-image: url(../img/time1.png);
                            background-size: 44px;
                            position: absolute;
                            left: -3px;
                            top: -9px;
                        }
                        box-shadow: inset 0 2px 0 #300, 0 0 4px #ff0,
                            0 0 10px #ff0;
                    }
                }
                line-height: 0px;
                font-size: 0;

                .hero-card {
                    display: inline-block;
                    width: 185px;
                    height: 313px;
                    position: relative;
                    float: left;
                    // background: red;
                    border-radius: 9px;
                    margin: 10px 0 0 7px;
                    background: linear-gradient(
                        15deg,
                        #b4a16a,
                        #7b653e,
                        #ddbe73,
                        #ad8c42
                    );
                    box-shadow: 0 0 7px #4d3706, inset 0 0 4px #ebc94f;
                    &:before {
                        content: "";
                        display: block;
                        position: absolute;
                        left: 5px;
                        top: 5px;
                        right: 5px;
                        bottom: 5px;
                        border-radius: 6px;
                        // background: #300;
                        background: linear-gradient(
                            to bottom,
                            #b4a16a,
                            #7b653e,
                            #ddbe73,
                            #ad8c42
                        );
                        box-shadow: inset 0 0 7px #4d3706, 0 0 2px #ebc94f;
                    }
                    .img {
                        width: 175px;
                        // height: 303px;
                        height: 260px;
                        // height: auto;
                        display: block;
                        position: absolute;
                        left: 5px;
                        top: 5px;
                        right: 5px;
                        bottom: 5px;
                        &.ascend {
                            display: none;
                        }
                    }

                    .btn-box {
                        display: block;
                        height: 45px;
                        position: absolute;
                        left: 5px;
                        right: 5px;
                        bottom: 5px;
                        // background: rgba(0,0,0,0.33);
                        background: #c0a85c;
                        border-bottom-left-radius: 3px;
                        border-bottom-right-radius: 3px;
                        text-align: center;
                        .btn-buy {
                            display: inline-block;
                            margin: 5px 0px;
                            position: relative;
                            left: auto;
                            top: auto;
                            right: auto;
                            bottom: auto;
                        }
                    }

                    .asc-lvl {
                        display: inline-block;
                        width: 50px;
                        height: 68px;
                        border-radius: 80px;
                        border-top-left-radius: 20px;
                        border-top-right-radius: 20px;
                        position: absolute;
                        right: -1px;
                        top: -2px;
                        box-shadow: 0 3px 0px #c87725, inset 0 3px 2px #ffa,
                            1px 2px 1px #000, 1px 5px 3px #000;
                        background: linear-gradient(
                            45deg,
                            #e8c34e,
                            #ffa,
                            #cfa831,
                            #fbf1d8
                        );
                        line-height: 28px;
                        color: #342b2b;
                        font-size: 16px;
                        text-shadow: 0 0 1px #000, 0 2px 2px #fff;
                        text-align: center;
                        &:before {
                            content: "";
                            display: block;
                            width: 36px;
                            height: 36px;
                            position: absolute;
                            left: 7px;
                            bottom: 7px;
                            background: #342b2b;
                            border-radius: 80px;
                            box-shadow: 0 0 5px #ffc, 0 0 10px #ffa;
                        }
                        &:after {
                            content: "";
                            display: block;
                            width: 34px;
                            height: 34px;
                            background-image: url(../img/arrow_up1.png);
                            background-size: 34px;
                            position: absolute;
                            left: 8px;
                            bottom: 8px;
                        }
                    }

                    &.blocked {
                        filter: grayscale(100%);
                        .text {
                            line-height: 18px;
                            font-size: 16px;
                            font-weight: bold;
                            color: #ddd;
                            text-transform: uppercase;
                            margin-top: 5px;
                            text-shadow: 0 1px 0px #000;
                            padding: 0px 10px;
                        }
                        .asc-lvl {
                            font-size: 0;
                            &:after {
                                height: 47px;
                                background-image: url(../img/lock-gold.png);
                                background-size: 34px;
                            }
                        }
                    }

                    &.ascented:before {
                        background-image: url(../img/card2.jpg);
                        background-size: 175px;
                    }

                    .btn-box-already {
                        display: block;
                        width: 185px;
                        height: 63px;
                        position: absolute;
                        bottom: 0;
                        left: 0px;
                        background-image: url(../img/asc-already.png);
                        background-size: 185px;
                        font-size: 15px;
                        font-weight: bold;
                        color: #4c3e12;
                        text-shadow: 0 0 1px #300, 0 1px 0px #fff;
                        text-transform: uppercase;
                        padding-top: 32px;
                        // line-height: 20px;
                        //
                    }
                }
            }

            .heroes-random-3 {
                display: block;
                width: 185px;
                height: 363px;
                position: absolute;
                right: 10px;
                top: 7px;
                // background: red;
                border-radius: 12px;
                background: linear-gradient(
                    to bottom,
                    #d29e25,
                    #ebce6d,
                    #d0a03a,
                    #e5dcbc,
                    #cead56,
                    #a07730
                );
                box-shadow: 0 0 7px #4d3706, inset 0 0 7px #ebc94f,
                    inset 0 0 3px #ebc94f;
                &:before {
                    content: "";
                    display: block;
                    width: 150px;
                    height: 180px;
                    position: absolute;
                    left: 18px;
                    top: 56px;
                    background-image: url(../img/3-rand-heroes.png);
                    background-size: 150px;
                }
                .text {
                    display: block;
                    height: 33px;
                    padding: 0px 10px;
                    // background: red;
                    position: absolute;
                    bottom: 100px;
                    left: 0px;
                    font-size: 17px;
                    font-weight: bold;
                    line-height: 20px;
                    color: #600;
                    text-align: center;
                    text-transform: uppercase;
                    text-shadow: 0 0 1px #400, 0 2px 0px #fff;
                }
                .btn-box {
                    display: block;
                    width: 129px;
                    height: 50px;
                    position: absolute;
                    left: 18px;
                    bottom: 15px;
                    background: red;
                    border-radius: 7px;
                    padding: 10px;
                    background: linear-gradient(to bottom, #c12600, #6e0303);
                    box-shadow: 0 0 5px #500, inset 0 -2px 2px #500;
                    &:before {
                        content: "";
                        display: block;
                        position: absolute;
                        left: 12px;
                        top: 7px;
                        right: 12px;
                        bottom: 7px;
                        padding: 10px;
                        border-radius: 7px;
                        background: linear-gradient(to top, #c12600, #6e0303);
                    }
                    .btn-buy {
                        display: inline-block;
                        position: relative;
                        left: auto;
                        right: auto;
                        top: 7px;
                        bottom: auto;
                    }
                }
                .btn-box-2 {
                    display: block;
                    width: 129px;
                    height: 40px;
                    position: absolute;
                    left: 18px;
                    top: 10px;
                    background: #ad873b;
                    border-radius: 7px;
                    padding: 10px;
                    box-shadow: 0 1px 3px #ffa, inset 0 0 3px #795510,
                        inset 0 0 10px #795510;
                    // &:before{
                    //     content: "";
                    //     display: block;
                    //     position: absolute;
                    //     left: 12px; top: 7px;
                    //     right: 12px;
                    //     bottom: 7px;
                    //     padding: 10px;
                    //     border-radius: 7px;
                    //     background: linear-gradient(to top, #c12600, #6e0303);
                    // }
                    .btn-buy {
                        display: inline-block;
                        position: relative;
                        left: auto;
                        right: auto;
                        top: 0px;
                        bottom: auto;
                        padding: 0;
                        padding-top: 3px;
                        line-height: 16px;
                        height: 38px;
                        font-weight: bold;
                        text-shadow: 0 0 1px #000, 0 1px 3px #ffa;
                    }
                }
            }

            .help-text {
                display: block;
                position: absolute;
                left: 10px;
                right: 10px;
                bottom: 3px;
                height: 30px;
                // background:red;
                line-height: 30px;
                color: #e9cc87;
            }
        }

        .bank-subwin.crowns {
            border-color: #d6aaff;
            // .payment-method{
            //     display: inline-block;
            //     width: 310px; height: 382px;
            //     background: #999;
            //     position: absolute; left: 10px; top: 10px;
            //     // margin: 12px 5px;
            //     // background: linear-gradient(15deg, #ffe7a1, #d29222, #a97b0b, #ffe14c);
            //     // box-shadow: 0 0 7px #4d3706, inset 0 0 4px #ebc94f;
            //     box-shadow: 0 3px 0px #4f433c, inset 0 0 4px #ccc;
            //     border-radius: 7px;
            //     .title{
            //         display: block;
            //         height: 33px;
            //         line-height: 30px;
            //         margin: 0px 0px;
            //         padding: 0px 5px;
            //         font-size: 18px;
            //         font-weight: bold;
            //         color: #fff;
            //         text-transform: uppercase;
            //         text-shadow: 0 1px 1px #000;
            //         background: linear-gradient(-45deg, #776b6f, #8a6189, #886289, #766c6b);
            //         border-radius: 5px;
            //         box-shadow: inset 0 15px 0 rgba(255, 255, 255, 0.15), inset 0 -3px 0px #403d38, 0 0 1px #403d38, inset 0 0 10px rgba(255, 255, 255, 0.33);
            //     }

            //     .p-method{
            //         display: block; margin:0; padding:0;
            //         width: 100%;
            //         // background: red;
            //         .f-line{
            //             display: block; width: calc(100% - 65px); height:50px;
            //             border-bottom: solid 1px #6b5e64;
            //             position: relative;
            //             line-height: 50px;
            //             font-size: 17px; font-weight: bold;
            //             color: #ffc;
            //             text-align: left;
            //             padding-left: 65px;
            //             text-shadow: 0 2px 1px #000, 0 0 7px #000;
            //             text-transform: uppercase;
            //             cursor: pointer;
            //             &.selected{
            //                 background: linear-gradient(-45deg, #776b6f, #8a6189, #886289, #766c6b);
            //             }
            //             &.selected:after{
            //                 // background: linear-gradient(-45deg, #776b6f, #8a6189, #886289, #766c6b);
            //                 // box-shadow: 0 0 3px #ffa, 0 0 6px #ffa;
            //                 content: "";
            //                 display: block; width: 100%; height: 100%;
            //                 border: solid 2px #ffa;
            //                 position: absolute; left:-2px; top: -2px;
            //                 border-radius: 5px;
            //                 box-shadow: 0 0 1px #ff0, 0 0 3px #000,
            //                     inset 0 0 1px #ff0, inset 0 0 5px #000;
            //             }

            //             .f-select{
            //                 display: block; width: 200px; height: 26px;
            //                 margin: 0; padding: 0;
            //                 border: solid 1px #d5abff;
            //                 border-radius: 5px;
            //                 font-size: 15px; font-weight: bold;
            //                 font-family: 'Roboto', sans-serif; color: #fff;
            //                 background: linear-gradient(-45deg, #776b6f, #8a6189, #886289, #766c6b);
            //                 background-color: #8a6189;
            //                 position: absolute; left: 20px; top: 17px;
            //                 // box-shadow: inset 0 0 4px #000;
            //             }
            //             .icon-flag{
            //                 display: block; width: 38px; height: 24px;
            //                 position: absolute; right: 30px; top: 17px;
            //                 background: #333;
            //                 border: solid 1px #d5abff;
            //                 border-radius: 5px;
            //                 box-shadow: inset 0 0 4px #000;
            //                 &.ru{
            //                     background-image: url(../img/flag-ru.jpg);
            //                     background-size: 38px;
            //                 }
            //             }
            //             .pm-r{
            //                 display: block; width: 22px; height: 22px;
            //                 position: absolute; left: 20px; top: 10px;
            //             }
            //         }
            //         .country{
            //             height: 60px;
            //         }

            //     }
            // }
        }
    }

    .main .left-side .left-panel .tab-panel.bank-panel .bank-subwin.top-up,
    .popup-layer .add-crowns-popup .res {
        .packs {
            display: inline-block;
            background: #999;
            // width: 645px; height: 382px;
            // position: absolute; right: 10px; top: 10px;
            height: 382px;
            position: relative;
            // min-width: 600px;
            top: 10px;
            // position: absolute; left:150px; right: 150px; top: 10px;
            box-shadow: 0 3px 0px #4f433c, inset 0 0 4px #ccc;
            border-radius: 7px;
            .title {
                display: block;
                height: 33px;
                line-height: 30px;
                margin: 0px 0px;
                padding: 0px 25px;
                font-size: 18px;
                font-weight: bold;
                color: #fff;
                text-transform: uppercase;
                text-shadow: 0 1px 1px #000;
                background: linear-gradient(
                    -45deg,
                    #776b6f,
                    #8a6189,
                    #886289,
                    #766c6b
                );
                border-radius: 5px;
                box-shadow: inset 0 15px 0 rgba(255, 255, 255, 0.15),
                    inset 0 -3px 0px #403d38, 0 0 1px #403d38,
                    inset 0 0 10px rgba(255, 255, 255, 0.33);
            }
            .pack-list {
                list-style: none;
                margin: 0;
                padding: 0;
                display: inline-block;
                // width:100%;
                // background: red;
                .pack-line {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: block;
                    margin: 10px 20px;
                    height: 46px;
                    // background: #4f433c;
                    background: linear-gradient(
                        -45deg,
                        #776b6f,
                        #8a6189,
                        #886289,
                        #766c6b
                    );
                    border-radius: 10px;
                    box-shadow: inset 0 3px 0px #664d5f,
                        inset 0 23px 0px rgba(255, 255, 255, 0.12);
                    position: relative;
                    width: 550px;
                    .cr-pack {
                        display: block;
                        width: 70px;
                        height: 42px;
                        line-height: 42px;
                        background: linear-gradient(
                            45deg,
                            #e8c34e,
                            #f1da7c,
                            #cfa831,
                            #fbf1d8
                        );
                        border-radius: 9px;
                        position: absolute;
                        left: 2px;
                        top: 2px;
                        box-shadow: inset 0 0 5px #ffc224,
                            inset 0 10px 2px #f7df80, inset 0 -8px 2px #d0a929,
                            0 0 3px #493a0a;
                        font-size: 20px;
                        font-weight: bold;
                        color: #4a3a08;
                        text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
                        padding-left: 40px;
                        &:before {
                            content: "";
                            display: block;
                            width: 36px;
                            height: 36px;
                            position: absolute;
                            left: 5px;
                            top: 3px;
                            border-radius: 38px;
                            background: #4a3a08;
                            box-shadow: inset 0 2px 1px #000, 0 0 4px #764905,
                                0 0 6px #764905;
                        }
                        &:after {
                            content: "";
                            display: block;
                            width: 43px;
                            height: 43px;
                            position: absolute;
                            left: 2px;
                            top: 2px;
                            background-image: url(../img/ico-real-big.png);
                            background-size: 43px;
                        }
                    }
                    .cr-pack-free {
                        display: block;
                        width: 120px;
                        height: 42px;
                        position: absolute;
                        left: 120px;
                        top: 2px;
                        // background: red;
                        line-height: 42px;
                        font-size: 20px;
                        font-weight: bold;
                        color: #ffa;
                        text-shadow: 0 0 1px #0d0a01, 0 2px 1px #000;
                    }
                    .cr-pack-vip {
                        display: block;
                        width: 150px;
                        height: 42px;
                        line-height: 27px;
                        // background: linear-gradient(45deg, #e8c34e, #f1da7c, #cfa831, #fbf1d8);
                        background: linear-gradient(
                            17deg,
                            #d6aaff,
                            #a192cb,
                            #bc60be,
                            #80a9b9
                        );
                        border-radius: 9px;
                        position: absolute;
                        left: 250px;
                        top: 2px;
                        box-shadow: inset 0 0 5px #cfd8ff,
                            inset 0 10px 2px rgba(219, 235, 255, 0.12),
                            inset 0 -8px 2px rgba(215, 60, 217, 0.15),
                            0 0 4px #400646;
                        font-size: 20px;
                        font-weight: bold;
                        color: #3d013d;
                        text-shadow: 0 0 1px #3d013d, 0 2px 1px #fff,
                            0 0 4px #fff, 0 0 15px #f563ff, 0 0 15px #fbff48;
                        // padding-left: 40px;
                        .points {
                            display: block;
                            line-height: 10px;
                            font-size: 12px;
                            text-transform: uppercase;
                        }
                    }
                    .banner {
                        display: none;
                    }

                    // .banner {
                    //     display: block;
                    //     width: 40px;
                    //     height: 45px;
                    //     position: absolute;
                    //     right: 145px;
                    //     top: -3px;
                    //     background-image: url(../img/offer-bk-sm.png);
                    //     background-size: 40px 45px;
                    //     .text {
                    //         font-size: 14px; font-weight: bold; color: #ff9;
                    //         transform: rotate(-30deg);
                    //         text-shadow: 0 3px 0px #200, 0 2px 2px #200;
                    //         position: relative; top: 11px;
                    //     }

                    //     &.hit{
                    //         background-image: url(../img/offer-bk-sm2.png);
                    //         background-size: 40px 45px;
                    //     }
                    //     &.time{
                    //         background-image: url(../img/offer-bk-sm1.png);
                    //         background-size: 40px 45px;
                    //         &:after {
                    //             content: "";
                    //             display: block;
                    //             width: 32px;
                    //             height: 32px;
                    //             position: absolute;
                    //             left: 3px;
                    //             top: 5px;
                    //             background-image: url(../img/time1.png);
                    //             background-size: 32px;
                    //         }
                    //         .text{
                    //             display: none;
                    //         }
                    //     }

                    // }

                    @include btn-buy-real();
                }
                .pack-line:nth-child(1) {
                    .cr-pack,
                    .cr-pack-free,
                    .cr-pack-vip {
                        font-size: 12px;
                    }
                }
                .pack-line:nth-child(2) {
                    .cr-pack,
                    .cr-pack-free,
                    .cr-pack-vip {
                        font-size: 14px;
                    }
                }
                .pack-line:nth-child(3) {
                    .cr-pack,
                    .cr-pack-free,
                    .cr-pack-vip {
                        font-size: 16px;
                    }
                }
                .pack-line:nth-child(4) {
                    .cr-pack,
                    .cr-pack-free,
                    .cr-pack-vip {
                        font-size: 18px;
                    }
                }
                .pack-line:nth-child(5) {
                    .cr-pack,
                    .cr-pack-free,
                    .cr-pack-vip {
                        font-size: 20px;
                    }
                }
                .pack-line:nth-child(6) {
                    .cr-pack,
                    .cr-pack-free,
                    .cr-pack-vip {
                        font-size: 22px;
                    }
                }
            }
        }

        .sale-banner {
            display: inline-block;
            width: 150px;
            height: 305px;
            // background: red;
            position: relative;
            margin: 10px;
            margin-left: 0px;
            float: right;
            border-radius: 7px;
            padding: 10px;
            background: linear-gradient(to bottom, #c12600, #6e0303);
            box-shadow: 0 0 5px #500, inset 0 -2px 2px #500;
            color: #ffa;
            .banner {
                display: block;
                width: 150px;
                height: 200px;
                background-image: url(../img/offer-bk4.png);
                background-size: 150px 200px;
                background-repeat: no-repeat;
                position: absolute;
                left: 13px;
                top: -5px;
                font-size: 15px;
                font-weight: bold;
                text-shadow: 0 2px 1px #300;
                line-height: 100%;
                h1,
                h2,
                h3 {
                    margin: 15px;
                    padding: 0;
                    margin-left: 10px;
                    margin-right: 20px;
                }
                h1 {
                    font-size: 200%;
                    line-height: 100%;
                }
                h2 {
                    font-size: 150%;
                    line-height: 100%;
                }
                h3 {
                    font-size: 120%;
                    line-height: 120%;
                }
            }
            .timer {
                display: block;
                width: 100px;
                height: 46px;
                position: absolute;
                left: calc(50% - 50px);
                bottom: 30px;
                font-size: 18px;
                font-weight: bold;
                .text {
                    display: block;
                    width: 100%;
                    position: absolute;
                    left: 0px;
                    top: -50px;
                }
                .time {
                    background: #640706;
                    border-radius: 30px;
                    position: absolute;
                    left: 0px;
                    right: 0;
                    bottom: 0;
                }
                &:after {
                    content: "";
                    display: block;
                    width: 46px;
                    height: 46px;
                    position: absolute;
                    left: calc(50% - 28px);
                    top: -30px;
                    background: #640706;
                    background-image: url(../img/time1.png);
                    background-size: 46px;
                    border-radius: 100%;
                    border: solid 5px #640706;
                    box-shadow: 0 0 7px #640706;
                }
            }
        }
    }

    .popup-layer {
        .ascend-3-random-popup {
            display: block;
            //width: 800px; height: 400px;
            position: absolute;
            left: 5px;
            right: 5px;
            top: 72px;
            bottom: 5px;
            background: #9e8b7d;
            border-radius: 10px;
            border: solid 4px #c4b6ad;
            // box-shadow: inset 0 0 7px #5F4F4E;
            // z-index:11;

            .btn-close-x {
                display: inline-block;
                width: 30px;
                height: 30px;
                border-radius: 7px;
                position: absolute;
                right: -6px;
                top: -6px;
                background: linear-gradient(30deg, #876b56, #aa9383, #dfceba);
                box-shadow: 0 0 7px #000;
                cursor: pointer;
                &:before {
                    content: "\2716";
                    font-size: 28px;
                    font-weight: bold;
                    color: #600;
                    line-height: 30px;
                    text-shadow: 0 0 2px #fff;
                }
                &:after {
                    content: "";
                    display: block;
                    width: 24px;
                    height: 7px;
                    background: rgba(255, 255, 255, 0.25);
                    border-radius: 5px;
                    position: absolute;
                    left: 3px;
                    top: 3px;
                }
            }

            & > .title {
                display: block;
                width: 100%;
                height: 35px;
                line-height: 35px;
                text-align: center;
                font-size: 20px;
                font-weight: bold;
                color: #ffeb9a;
                text-shadow: 0 2px 0 #000, 0 1px 10px #000;
                position: absolute;
                left: 5px;
                top: 5px;
                &:before,
                &:after {
                    content: "";
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    background: linear-gradient(
                        60deg,
                        #ffeb9a,
                        #f1da7c,
                        #cfa831,
                        #ffeb9a
                    );
                    position: relative;
                    top: -1px;
                    border-radius: 100%;
                    box-shadow: 0 2px 0 #000, 0 1px 10px #000;
                    margin: 0px 10px;
                }
            }

            .content {
                display: block;
                position: absolute;
                left: 10px;
                right: 10px;
                top: 45px;
                bottom: 100px;
                background: #766459;
                border-radius: 7px;
                // border: solid 5px #ffb432;
                // box-shadow: 0 5px 10px #615048;
                box-shadow: inset 0 3px 0px #615048, inset 2px 0 0 #615048;
                text-align: center;

                .scroll-box {
                    display: block;
                    position: absolute;
                    left: 3px;
                    right: 3px;
                    top: 5px;
                    bottom: 3px;
                    overflow: hidden;
                    overflow-y: scroll;

                    &::-webkit-scrollbar-track {
                        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                        border-radius: 10px;
                        background-color: #7c665c;
                        margin-right: 2px;
                    }
                    &::-webkit-scrollbar {
                        width: 10px;
                        background: none;
                    }

                    &::-webkit-scrollbar-thumb {
                        border-radius: 10px;
                        -webkit-box-shadow: inset 0 0 3px #796b60;
                        //background-color: #edd372;
                        background: linear-gradient(
                            to right,
                            #fff,
                            #f5de80,
                            #f4b766,
                            #b26d12
                        );
                    }

                    @include heroes-card-list();
                }
            }

            .process-box {
                display: block;
                width: 100%;
                height: 80px;
                // background: red;
                position: absolute;
                bottom: 10px;

                .btn-box {
                    display: inline-block;
                    width: auto;
                    height: 80px;
                    background: linear-gradient(
                        -10deg,
                        #b37a07,
                        #ffb229,
                        #fffbc7
                    );
                    position: relative;
                    // margin: 10px 7px 0 7px;
                    padding: 0px 50px;
                    border-radius: 9px;
                    box-shadow: 0 2px 5px #392d26, inset 0 1px 2px #fff;
                    &:before {
                        content: "";
                        display: block;
                        background: #ccc;
                        position: absolute;
                        left: 4px;
                        right: 4px;
                        top: 4px;
                        bottom: 4px;
                        border-radius: 6px;
                        background: linear-gradient(
                            to bottom,
                            #c12600,
                            #6e0303
                        );
                        box-shadow: 0 0 2px #fff, 0 0 5px #fff,
                            inset 0 2px 3px rgba(0, 0, 0, 0.55);
                    }

                    vertical-align: middle;
                    > .text {
                        display: inline-block;
                        position: relative;
                        left: auto;
                        right: auto;
                        top: auto;
                        bottom: auto;
                        width: 150px;
                        height: 40px;
                        line-height: 20px;
                        margin: 0px 10px;
                        font-size: 16px;
                        font-weight: bold;
                        text-transform: uppercase;
                        color: #ffd17f;
                        text-align: right;
                        top: 20px;
                        text-shadow: 0 2px 1px #300;
                        vertical-align: middle;
                    }
                    .btn-buy {
                        display: inline-block;
                        position: relative;
                        left: auto;
                        right: auto;
                        top: auto;
                        bottom: auto;
                        margin: 0px 10px;
                        top: 18px;
                        width: auto;
                        padding-left: 15px;
                        padding-right: 15px;
                        vertical-align: middle;
                    }
                    .sale-banner {
                        display: inline-block;
                        position: relative;
                        left: auto;
                        right: auto;
                        top: auto;
                        bottom: auto;
                        width: 70px;
                        height: 85px;
                        background-image: url(../img/offer-bk2.png);
                        background-size: 70px 85px;
                        background-repeat: no-repeat;
                        font-size: 22px;
                        font-weight: bold;
                        color: #ff9;
                        line-height: 22px;
                        text-shadow: 0 2px 0 #300;
                        vertical-align: top;
                        top: -3px;
                        .text {
                            padding: 0;
                            margin: 0;
                            margin-top: 10px;
                        }
                    }
                }
            }
        }

        .add-resources-popup,
        .add-crowns-popup {
            display: block;
            width: 50%;
            position: absolute;
            left: 25%;
            right: 25%;
            top: 50px;
            min-height: 200px;
            padding-top: 60px;
            padding-bottom: 10px;
            background: linear-gradient(
                -22deg,
                #fffbc7,
                #b37a07,
                #ffb229,
                #fffbc7
            );
            box-shadow: 0 1px 10px #392d26, inset 0 1px 2px #fff, 0 0 10px #000,
                0 0 15px #000;
            border-radius: 10px;
            // &:before{
            //     content: "";
            //     display: block;
            //     position: absolute; left: 10px; right: 10px; top: 60px; bottom: 10px;
            //     border-bottom-left-radius: 5px;
            //     border-bottom-right-radius: 5px;
            //     // background: linear-gradient(to bottom, #514d64, #856fab, #534a67);
            //     background: #dfc89e;
            //     box-shadow: 0 0 2px #fff, 0 0 5px #fff, inset 0 0 5px rgba(0, 0, 0, 0.55);
            // }
            .desc-box {
                display: block;
                position: absolute;
                width: 198px;
                height: 86px;
                top: 7px;
                margin-left: 100px;
                font-size: 17px;
                font-weight: bold;
                color: #3c2614;
                line-height: 20px;
                text-shadow: 0 2px #ffa;
                .desc-title {
                    width: 186px;
                    position: absolute;
                    padding: 5px;
                    text-align: center;
                }
                .desc-price {
                    width: 100%;
                    position: absolute;
                    top: 32px;
                }
                .price {
                    position: relative;
                    margin: 0 5px 0 5px;
                    &.old {
                        text-decoration: line-through;
                        color: #000;
                        font-size: 14px;
                        text-shadow: none;
                        .pricenew {
                            display: inline-block;
                            color: #ffa;
                            text-shadow: 0 2px 1px #000;
                            font-size: 18px;
                            margin: 4px;
                        }
                        .decs-text {
                            display: none;
                        }
                    }
                }
                .decs-text {
                    width: 178px;
                    height: 18px;
                    position: absolute;
                    top: 52px;
                    font-size: 14px;
                    padding: 10px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }

            > .title {
                display: inline-block;
                width: auto;
                height: 52px;
                background: linear-gradient(
                    to right,
                    #ffe3ab,
                    #ffb229,
                    #fffbc7
                );
                position: absolute;
                left: 0px;
                right: 0px;
                top: 0px;
                border-radius: 10px;
                box-shadow: 0 1px 10px #392d26, inset 0 2px 10px #fff,
                    inset 0 28px 5px rgba(255, 255, 0, 0.15);
                border: solid 4px #ffb229;
                line-height: 58px;
                font-size: 22px;
                font-weight: bold;
                text-transform: uppercase;
                color: #4e3707;
                text-shadow: 0 0 1px #4e3707, 0 1px 1px #fff, 0 1px 10px #ffc;
            }
            .btn-close-x {
                display: inline-block;
                width: 30px;
                height: 30px;
                border-radius: 10px;
                position: absolute;
                right: 11px;
                top: 11px;
                // background: linear-gradient(30deg, #876b56, #aa9383, #dfceba);
                background: linear-gradient(
                    22deg,
                    #fffbc7,
                    #ffe3ab,
                    #ffb229,
                    #fffbc7
                );
                // box-shadow: 0 0 7px #000;
                border: solid 4px #ffbe43;
                cursor: pointer;
                &:before {
                    content: "\2716";
                    font-size: 22px;
                    font-weight: bold;
                    color: #413753;
                    line-height: 30px;
                    text-shadow: 0 0 2px #413753, 0 0 2px #413753,
                        0 0 2px #413753, 0 0 2px #413753, 0 0 7px #fff,
                        0 0 7px #fff, 0 0 7px #fff;
                }
                &:after {
                    content: "";
                    display: block;
                    width: 24px;
                    height: 7px;
                    background: rgba(255, 255, 255, 0.25);
                    border-radius: 5px;
                    position: absolute;
                    left: 3px;
                    top: 3px;
                }
            }

            .res {
                display: inline-block;
                position: relative;
                width: calc(100% - 20px);
                left: 0px;
                padding-top: 7px;
                padding-bottom: 10px;

                // top: 60px;
                // top: 60px; bottom: 10px;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
                // background: linear-gradient(to bottom, #514d64, #856fab, #534a67);
                background: #dfc89e;
                box-shadow: 0 0 2px #fff, 0 0 5px #fff,
                    inset 0 0 5px rgba(0, 0, 0, 0.55);
                // &.gold{
                //     background: linear-gradient(15deg, #ffe7a1, #d29222, #a97b0b, #ffe14c);
                // }

                &.gold {
                    background: #ffad48;
                    .item {
                        background: linear-gradient(
                            to right,
                            #a73003,
                            #ffbc43,
                            #e14710,
                            #aa3506
                        );
                        .icon {
                            border: solid 2px #ffad48;
                            background: linear-gradient(
                                to bottom,
                                #ffd3b4,
                                #eb5700
                            );
                            box-shadow: inset 0 2px 6px #803a00, 0 0 3px #763d00,
                                0 0 5px #a85229;
                        }
                    }
                }

                &.gems {
                    background: #ff4f78;
                    .item {
                        background: linear-gradient(
                            to right,
                            #a7036e,
                            #ff8585,
                            #d16885,
                            #661a4c
                        );
                        .title > .text,
                        .desc-box {
                            color: #330933;
                            text-shadow: 0 1px 1px #e0fcff;
                        }
                        .icon {
                            border: solid 2px #ff88eb;
                            background: linear-gradient(
                                to bottom,
                                #ffddfe,
                                #b55aa5
                            );
                            box-shadow: inset 0 2px 6px #382836, 0 0 3px #ff83f4,
                                0 0 5px #ec1cc9;
                        }
                    }
                }

                &.shards {
                    background: #1f6bca;
                    .item {
                        background: linear-gradient(
                            to right,
                            #1e406a,
                            #85d8ff,
                            #6883d1,
                            #1a4766
                        );
                        box-shadow: inset 0 3px 6px #3c2614, 0 0 10px #8dfbff;
                        .title > .text,
                        .desc-box {
                            color: #123651;
                            text-shadow: 0 1px 1px #e0fcff;
                        }
                        .icon {
                            border: solid 2px #d1e2f6;
                            background: linear-gradient(
                                to bottom,
                                #84d7fe,
                                #41659c
                            );
                            box-shadow: inset 0 2px 6px #382836, 0 0 3px #b8e8fe,
                                0 0 5px #4dbff6;
                        }
                        // .desc-box{ color: red; }
                    }
                }

                &.gold {
                    background: #ffad48;
                    .item {
                        background: linear-gradient(
                            to right,
                            #a73003,
                            #ffbc43,
                            #e14710,
                            #aa3506
                        );
                        .icon {
                            border: solid 2px #ffad48;
                            background: linear-gradient(
                                to bottom,
                                #ffd3b4,
                                #eb5700
                            );
                            box-shadow: inset 0 2px 6px #803a00, 0 0 3px #763d00,
                                0 0 5px #a85229;
                        }
                    }
                }

                &.ice_gold {
                    background: #1f6bca;
                    .item {
                        background: linear-gradient(
                            272deg,
                            #195589 0%,
                            #1488bf 100%
                        );
                        .desc-box,
                        .desc-price,
                        .decs-text {
                            color: #ffc;
                            text-shadow: 0 2px #000;
                        }
                        .snplas-box {
                            width: 80px;
                            height: 24px;
                            position: absolute;
                            top: -9px;
                            margin-left: 25px;
                            background: linear-gradient(
                                0deg,
                                #889095 0%,
                                #d9e0e4 100%
                            );
                            border-radius: 6px;
                            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.55);
                            &:before {
                                content: "";
                                width: 24px;
                                height: 24px;
                                position: absolute;
                                top: 0;
                                margin-left: -36px;
                                background-image: url(../img/snez2017.png);
                                background-size: 100%;
                            }
                            .snplas-num {
                                width: 50px;
                                height: 24px;
                                position: absolute;
                                left: 28px;
                                font-size: 16px;
                                color: #0b2943;
                                line-height: 26px;
                                font-weight: bold;
                                text-shadow: 0 0 2px #fff;
                            }
                        }
                    }
                }

                // &.crowns{
                //     width: auto;
                // background: #ffad48;
                // .item{
                //     background: linear-gradient(to right, #a73003, #ffbc43, #e14710, #aa3506);
                //     box-shadow: inset 0 3px 6px #ffc, 0 0 10px #000;
                //     .title > .text{
                //         color: #500;
                //         text-shadow: 0 1px 1px #e0fcff;
                //     }
                //     .icon {
                //         border: solid 2px #ffad48;
                //         background: linear-gradient(to bottom, #ffd3b4, #eb5700);
                //         box-shadow: inset 0 2px 6px #803a00, 0 0 3px #763d00, 0 0 5px #a85229;
                //     }
                //     .btn-panel .btn-box{
                //         position: relative;
                //         right: auto;
                //         bottom: auto;
                //         background: none;
                //         .btn-buy-real{
                //             min-width: 125px;
                //         }
                //     }

                //     &.sale{
                //         .btn-panel .sale-banner{
                //             left: -10px;
                //         }
                //     }
                // }
                // }
                @include btn-buy-real();

                // .res-def{
                //     display: inline-block;
                //     // background: red;
                //     position: relative;
                //     // height: 140px;
                //     margin-top: 15px;
                //     margin-bottom: 10px;
                //     text-align: left;
                //     .img{
                //         display: inline-block; width: 77px; height: 77px;
                //         border-radius: 7px;
                //         background: linear-gradient(15deg, #ffe7a1, #d29222, #a97b0b, #ffe14c);
                //         box-shadow: 0 0 7px #4d3706, inset 0 0 4px #ebc94f;
                //         position: relative;
                //         float: left;
                //         margin-right: 10px;
                //         &:before{
                //             content: "";
                //             display: block;
                //             position: absolute;
                //             left: 3px;
                //             top: 3px;
                //             right: 3px;
                //             bottom: 3px;
                //             border-radius: 5px;
                //             background: linear-gradient(-10deg, #48220e, #734900, #aa7c0b, #ffe14c);
                //             box-shadow: inset 0 0 5px #4d3706, 0 0 2px #ebc94f;
                //         }
                //         &:after{
                //             content: "";
                //             display: block; width: 67px; height: 60px;
                //             position: absolute; left: 5px; top: 9px;
                //             background-image: url(../img/m-ico-gold.png);
                //             background-size: 67px;
                //         }
                //     }
                //     font-size: 18px; font-weight: bold; color: #fff;
                //     // text-transform: uppercase;
                //     text-shadow: 0 2px 1px #000;
                // }

                .item {
                    display: inline-block;
                    width: 465px;
                    height: 100px;
                    // background: linear-gradient(to right, #823e06, #cfa828, #b48813, #823e06);
                    background: linear-gradient(
                        to right,
                        #823e06,
                        #dfcf9d,
                        #823e06
                    );
                    position: relative;
                    margin: 10px 7px 0 7px;
                    border-radius: 9px;
                    //box-shadow: 0 2px 5px #392d26, inset 0 1px 2px #fff;
                    box-shadow: inset 0 3px 6px #3c2614, 0 0 10px #ffa;

                    @include item-complex-icon();
                    .title {
                        display: block;
                        width: 190px;
                        height: 92px;
                        position: absolute;
                        left: 100px;
                        top: 4px;
                        // background: red;
                        .text {
                            margin: 0;
                            padding: 5px;
                            height: 82px;
                            display: table-cell;
                            // background: blue;
                            vertical-align: middle;
                            font-size: 17px;
                            font-weight: bold;
                            color: #3c2614;
                            line-height: 20px;
                            text-shadow: 0 1px 1px #ffa;
                        }
                    }

                    .btn-panel {
                        display: block;
                        width: 129px;
                        height: 50px;
                        position: absolute;
                        right: 15px;
                        bottom: 13px;
                        background: red;
                        border-radius: 7px;
                        padding: 10px;
                        background: linear-gradient(
                            to bottom,
                            #c12600,
                            #6e0303
                        );
                        box-shadow: 0 0 5px #500, inset 0 -2px 2px #500;

                        .btn-box {
                            display: block;
                            position: absolute;
                            right: 12px;
                            bottom: 7px;
                            // background: red;
                            padding: 10px;
                            border-radius: 7px;
                            background: linear-gradient(
                                to top,
                                #c12600,
                                #6e0303
                            );
                            .btn-buy {
                                position: relative;
                                left: auto;
                                right: auto;
                                top: auto;
                                bottom: auto;
                                .txt {
                                    display: inline-block;
                                    // position: absolute; left: 10px;
                                }
                                .price-old {
                                    display: inline-block;
                                    font-size: 13px;
                                    text-shadow: none;
                                    color: #333;
                                    margin-left: 10px;
                                    height: 17px;
                                    line-height: 17px;
                                    // position: absolute; left: calc(50% + 10px);
                                    &:after {
                                        content: "";
                                        display: block;
                                        width: calc(100% + 20px);
                                        height: 2px;
                                        background: rgba(255, 0, 0, 0.55);
                                        // background: rgba(0,0,0,0.33);
                                        position: relative;
                                        left: -10px;
                                        top: -10px;
                                    }
                                }
                            }
                        }
                        .sale-banner {
                            display: none;
                        }
                    }

                    @include item-sale-banner();
                    // &.sale{
                    //     .title{
                    //         width: 130px;
                    //     }
                    //     // .btn-panel{
                    //     //     .sale-banner{
                    //     //         display: block;
                    //     //         width: 70px;
                    //     //         height: 70px;
                    //     //         background-image: url(../img/offer-bk2.png);
                    //     //         background-size: 70px 70px;
                    //     //         background-repeat: no-repeat;
                    //     //         position: absolute; left:-308px; top: -20px;
                    //     //         font-size: 18px; font-weight: bold;
                    //     //         color: #ff9;
                    //     //         line-height: 18px;
                    //     //         text-shadow: 0 2px 0 #300;
                    //     //         cursor: pointer;
                    //     //         .text{
                    //     //             font-size: 16px;
                    //     //             margin:0; padding:0;
                    //     //             margin-top: 3px;
                    //     //             margin-left: -5px;
                    //     //         }
                    //     //         .timer {
                    //     //             display: block;
                    //     //             width: 55px;
                    //     //             height: 46px;
                    //     //             position: absolute;
                    //     //             left: 7px;
                    //     //             bottom: 5px;
                    //     //             // background: blue;
                    //     //             .time {
                    //     //                 font-size: 12px;
                    //     //                 background: #640706;
                    //     //                 border-radius: 30px;
                    //     //                 position: absolute; left:0px; right:0;
                    //     //                 bottom:0;
                    //     //             }
                    //     //             &:after {
                    //     //                 content: "";
                    //     //                 display: block;
                    //     //                 width: 30px;
                    //     //                 height: 30px;
                    //     //                 position: absolute;
                    //     //                 left: calc(50% - 15px);
                    //     //                 top: 2px;
                    //     //                 background-image: url(../img/time1.png);
                    //     //                 background-size: 30px;
                    //     //             }
                    //     //         }

                    //     //     }
                    //     // }
                    // }
                }
                // &.gems{
                //     &.disabled{
                //         filter: grayscale(100%);
                //         &:before{
                //             background: linear-gradient(to bottom, #ccc, #333, #ccc);
                //             box-shadow: inset 0 0 50px #000;
                //         }
                //     }
                //     &:before{
                //         background: linear-gradient(-30deg, #701922, #b10400, #940e0d, #70191f);
                //     }
                //     .title{
                //         .img:before{
                //             background: linear-gradient(-10deg, #4c1e23, #d43e3d, #40090d);
                //         }
                //         .img:after{
                //             height: 67px; top: 5px;
                //             background-image: url(../img/m-ico-gems.png);
                //             background-size: 67px;
                //         }
                //     }
                // }

                // &.shards{
                //     &:before{
                //         background: linear-gradient(-30deg, #097695, #00bcab, #02aba8, #0078a1);
                //     }
                //     .title{
                //         .img:before{
                //             background: linear-gradient(-10deg, #0f2f3a, #00bcab, #45636d);
                //         }
                //         .img:after{
                //             height: 67px; top: 5px;
                //             background-image: url(../img/m-ico-shards.png);
                //             background-size: 67px;
                //         }
                //     }
                // }
            }
        }

        .add-crowns-popup {
            width: 986px;
            left: calc(50% - 493px);
            .res {
                padding: 0;
                .packs {
                    top: 0px;
                    padding: 0;
                    height: auto;
                    padding-top: 10px;
                    padding-bottom: 10px;
                }
            }
        }

        .m-popup.ascend-3-heroes-res .content {
            @include heroes-card-list();
            // heroes-card-list
            p.text.center {
                font-size: 20px;
                display: block;
                margin: auto;
            }
            .heroes-card-list {
                display: inline-block;
                position: relative;
                margin-top: 15px;
            }
        }
    }
    .main .popup-layer .m-popup.vip-sunduk .content {
        height: 130px;

        .sunduk {
            float: left;
            width: 150px;
            height: 150px;
            border-radius: 100%;
            background: #ec2363;
            box-shadow: 0 0 20px #ec2363, 0 0 35px #ec2363;
            position: relative;
            &:before {
                content: "";
                display: block;
                width: 60%;
                height: 30px;
                position: absolute;
                left: 20%;
                top: 10%;
                background: #ff3e7b;
                box-shadow: 0 0 20px #ff3e7b, 0 0 35px #ff3e7b;
                border-radius: 100%;
            }
            .pic {
                width: 150px;
                height: 150px;
                position: relative;
            }
        }
        .text {
            float: right;
            width: 60%;
            padding: 10% 0px;
        }
    }
    .sale-off {
        width: 114px;
        height: 107px;
        position: absolute;
        top: 4px;
        margin-left: 4px;
        background-image: url(../img/saleoff.png);
        background-size: 114px;
        .saletext {
            width: 80px;
            height: 60px;
            font-size: 28px;
            color: #ffdf7f;
            font-weight: bold;
            line-height: 30px;
            position: absolute;
            top: 10px;
            margin-left: 8px;
            text-shadow: 0 2px 0 #400;
        }
    }

    .lang-zh-cn .heroes-roll-4 {
        .timer .text:after {
            content: "";
            display: block;
        }
    }

    // Nutaku btn
    .price-nutaku {
        width: 1em;
        height: 1em;
        position: relative;
        display: inline-block;
        top: 3px;
        background: url(../img/ico-nutaku2.png);
        background-size: 100%;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.8));
    }
    .price-nutaku-text {
        position: relative;
        display: inline-block;
        top: -5px;
        color: #4a3a08;
        margin-left: 3px;
        .ss {
            color: red;
            text-decoration: line-through;
        }
    }

    body .main.world3 .popup-layer {
        .m-popup.add-resources-popup {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: auto;
            width: 600px;
            .res {
                background: none;
                box-shadow: none;
                .item {
                    box-shadow: inset 0 3px 6px #1f143c, 0 0 10px #aaf;
                    background: linear-gradient(
                        to right,
                        #10006c,
                        #4d289d,
                        #2f067d,
                        #1c0378
                    );
                    &:hover {
                        background: linear-gradient(
                            to right,
                            #15008d,
                            #5b30b8,
                            #390898,
                            #230592
                        );
                    }
                    .icon {
                        border: solid 2px #ffad48;
                        background: linear-gradient(
                            to bottom,
                            #ffd3b4,
                            #eb5700
                        );
                        box-shadow: inset 0 2px 6px #803a00, 0 0 3px #763d00,
                            0 0 5px #a85229;
                    }
                    .desc-box {
                        .desc-title {
                            color: #fff;
                            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
                            padding: 0 5px;
                        }
                        .desc-price {
                            background: linear-gradient(
                                155.68deg,
                                #ffe176 6.11%,
                                #ffe897 45.23%,
                                #e5c246 64.21%,
                                #ffdd9a 81.23%,
                                #bb7e22 97.65%
                            );
                            box-shadow: 0px 0px 3px 1px rgba(255, 229, 177, 0.4),
                                0px 4px 15px rgba(0, 0, 0, 0.7);
                            border-radius: 6px;
                            width: 152px;
                            height: 40px;
                            right: 26px;
                            top: 24px;
                            &:before {
                                content: "";
                                position: absolute;
                                left: 3px;
                                top: 3px;
                                width: calc(100% - 6px);
                                height: calc(100% - 6px);
                                background: #3e2b94;
                                box-shadow: inset 0px 15px 0px
                                    rgba(255, 255, 255, 0.08);
                                border-radius: 4px;
                            }
                            .price.dark_gold.glow {
                                color: #fc8eff;
                                text-shadow: 1px 1px 0px #660265,
                                    0px -0.5px 0.5px rgba(255, 255, 255, 1),
                                    0px 4px 2px rgba(0, 0, 0, 0.35);
                                box-shadow: none;
                                line-height: 34px;
                                padding: 3px 0;
                                &:before {
                                    background-image: url(../img/dark.png);
                                    top: -3px;
                                    margin-right: 3px;
                                }
                            }
                        }
                        .decs-text {
                            color: #c9c7ff;
                            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
                            top: 63px;
                            padding: 6px 10px;
                            cursor: help;
                        }
                    }
                    .btn-panel {
                        background: #4d3c9d;
                        border: 1px solid #6c53de;
                        box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.35);
                        .btn-box {
                            background: none;
                            bottom: 1px;
                            .btn-buy {
                                height: 24px;
                                padding-top: 26px;
                                &:hover {
                                    box-shadow: inset 0 -3px 0px #c87725,
                                        0 0 3px rgba(0, 0, 0, 0.4),
                                        0 0 6px rgba(255, 255, 255, 0.4);
                                    filter: brightness(1.1);
                                }
                                &:active {
                                    box-shadow: inset 0 -1px 0px #c87725,
                                        0 0 1px rgba(0, 0, 0, 0.4);
                                }
                                .price {
                                    line-height: 20px;
                                    height: 20px;
                                }
                                .txt {
                                    font-size: 17px;
                                }
                            }
                        }
                    }
                }
                &.dark_gold {
                    .item {
                        .icon {
                            > * {
                                display: none;
                            }
                            .dark_gold {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
`;

const ScreenBank = styled.div`
    ${ScreenBankStyles}
`;

export { ScreenBankStyles, ScreenBank };
