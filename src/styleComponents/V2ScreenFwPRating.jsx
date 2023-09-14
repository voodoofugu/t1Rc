import styled from "styled-components";

const V2ScreenFwPRating = styled.div`
    body .main {
        .left-side {
            width: 620px;
            height: 555px;
            position: absolute;
            left: 5px;
            bottom: 5px;
            .tabs-all-box {
                width: 500px;
                height: 40px;
                position: absolute;
                top: 0;
                left: 0;
                font-size: 0;
                .tabs-all {
                    width: 118px;
                    height: 40px;
                    position: relative;
                    top: 0;
                    left: 0;
                    display: inline-block;
                    margin: 0 2px 0 0;
                    cursor: pointer;
                    background-color: #9c8b7c;
                    border-radius: 24px 24px 0 0;
                    &:before {
                        content: "";
                        width: 110px;
                        height: 36px;
                        position: absolute;
                        top: 4px;
                        left: 4px;
                        background-color: #544746;
                        border-radius: 20px 20px 0 0;
                        box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.15);
                    }
                    .tabs-name {
                        width: 60px;
                        height: 40px;
                        position: absolute;
                        right: 14px;
                        color: #fff;
                        font-weight: bold;
                        font-size: 12px;
                        line-height: 44px;
                        text-align: center;
                    }
                    .tabs-pic {
                        width: 50px;
                        height: 32px;
                        position: absolute;
                        top: 5px;
                        left: 5px;
                        img {
                            width: 50px;
                        }
                    }
                    &.selected {
                        &:before {
                            content: "";
                            background-color: #9c8b7c;
                        }
                    }
                }
            }
            .left-panel {
                width: 620px;
                height: 515px;
                position: absolute;
                left: 0;
                top: 40px;
                &:before {
                    content: "";
                    width: 620px;
                    height: 5px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: #9c8b7c;
                    z-index: 999;
                }
                &.wide {
                    width: 1106px;
                    &:before {
                        content: "";
                        width: 1102px;
                    }
                    .tab-panel-box.fw-p-rating {
                        width: 1098px;
                        height: 511px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: #b7a597;
                        border: solid 4px #9c8b7c;
                        border-top: none;
                        box-shadow: inset 0 0 7px #5f4f4e;
                        .tab-panel-box-title {
                            width: 300px;
                            height: 24px;
                            position: absolute;
                            top: 10px;
                            left: 399px;
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
                        .fw-left-side {
                            width: 340px;
                            height: 460px;
                            position: absolute;
                            top: 42px;
                            left: 10px;
                            .fw-left-box-name {
                                width: 252px;
                                height: 36px;
                                position: absolute;
                                top: 0;
                                left: 44px;
                                background-image: url(../img/wpck-ram.png);
                                background-size: 100%;
                                background-repeat: no-repeat;
                                color: #fff;
                                font-size: 16px;
                                font-weight: bold;
                                text-align: center;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                                text-transform: uppercase;
                                line-height: 26px;
                            }
                            .lhero-box {
                                width: 230px;
                                height: 390px;
                                position: absolute;
                                top: 50px;
                                left: 54px;
                                background: linear-gradient(
                                    0deg,
                                    #8e7453 0%,
                                    #e3c7a3 50%,
                                    #8f7553 70%,
                                    #ae916a 85%,
                                    #8e7453 100%
                                );
                                border-radius: 10px;
                                box-shadow: 0 4px 0 #bd9c42,
                                    0 2px 6px rgba(0, 0, 0, 0.8);
                                .lhero-pic {
                                    width: 222px;
                                    height: 330px;
                                    position: absolute;
                                    top: 42px;
                                    left: 4px;
                                    img {
                                        width: 222px;
                                        background-size: 100%;
                                    }
                                }
                                .topname-box {
                                    width: 100%;
                                    height: 48px;
                                    position: absolute;
                                    background: linear-gradient(
                                        180deg,
                                        #d4b354 0%,
                                        #f3d88d 91%,
                                        #c3a246 92%,
                                        #b9993f 100%
                                    );
                                    border-radius: 10px 10px 0 0;
                                    box-shadow: inset 0 1px 1px
                                            rgba(255, 255, 255, 0.4),
                                        0 6px 6px rgba(0, 0, 0, 0.5);
                                    .sh2-icon.left {
                                        width: 38px;
                                        height: 49px;
                                        position: absolute;
                                        top: -2px;
                                        left: 6px;
                                        img {
                                            width: 38px;
                                        }
                                    }
                                    .sh2-icon-forgirl.right {
                                        width: 38px;
                                        height: 49px;
                                        position: absolute;
                                        top: -2px;
                                        left: unset;
                                        right: 6px;
                                        img {
                                            width: 38px;
                                        }
                                    }
                                    .lhero-name-box {
                                        width: 134px;
                                        height: 38px;
                                        position: absolute;
                                        left: 48px;
                                        top: 3px;
                                        display: table;
                                        .lhero-name {
                                            display: table-cell;
                                            vertical-align: middle;
                                            color: #fff;
                                            text-shadow: 0 1px 2px #000;
                                            font-size: 14px;
                                            font-weight: bold;
                                            text-align: center;
                                        }
                                    }
                                }
                                .bottom-star-box-girl-count-box {
                                    width: 230px;
                                    height: 34px;
                                    position: absolute;
                                    top: 356px;
                                    left: 0;
                                    background: linear-gradient(
                                        180deg,
                                        #d4b354 0%,
                                        #f3d88d 100%
                                    );
                                    border-radius: 0 0 10px 10px;
                                    .sh2-prgbar-all {
                                        width: 178px;
                                        height: 26px;
                                        position: absolute;
                                        top: 4px;
                                        left: 48px;
                                        background: linear-gradient(
                                            0deg,
                                            #735657 0%,
                                            #453434 100%
                                        );
                                        box-shadow: 0 2px 2px
                                            rgba(0, 0, 0, 0.35);
                                        border-radius: 6px;
                                        overflow: hidden;
                                        box-shadow: 0 0 0 1px #453434,
                                            0 1px 1px 1px
                                                rgba(255, 255, 255, 0.4);
                                        .sh2-prgbar {
                                            width: 85%;
                                            height: 100%;
                                            position: absolute;
                                            top: 0;
                                            left: 0;
                                            background: linear-gradient(
                                                180deg,
                                                #585a5c 0%,
                                                #d5d8da 50%,
                                                #585a5b 70%,
                                                #a1a4a6 85%,
                                                #585a5b 100%
                                            );
                                        }
                                        .sh2-prgbar-text {
                                            width: 182px;
                                            height: 26px;
                                            position: relative;
                                            text-align: center;
                                            color: #fff;
                                            font-weight: bold;
                                            font-size: 20px;
                                            text-shadow: 0 1px 1px
                                                rgba(0, 0, 0, 0.45);
                                            line-height: 26px;
                                            text-shadow: 0 1px 2px
                                                    rgba(0, 0, 0, 0.45),
                                                0 1px 1px rgba(0, 0, 0, 0.2);
                                        }
                                        &.gold {
                                            .sh2-prgbar {
                                                background: linear-gradient(
                                                    180deg,
                                                    #c68300 0%,
                                                    #f4dfb6 50%,
                                                    #c68200 70%,
                                                    #fad489 85%,
                                                    #c78302 100%
                                                );
                                            }
                                        }
                                    }
                                    .girl-bonus-box {
                                        width: 40px;
                                        height: 40px;
                                        position: absolute;
                                        top: -3px;
                                        left: 4px;
                                        display: block;
                                        background: linear-gradient(
                                            180deg,
                                            #c68300 0%,
                                            #f4dfb6 50%,
                                            #c68200 70%,
                                            #fad489 85%,
                                            #c78302 100%
                                        );
                                        border-radius: 100%;
                                        box-shadow: 0 1px 2px 2px
                                                rgba(0, 0, 0, 0.4),
                                            inset 0 1px 1px
                                                rgba(255, 255, 255, 0.5);
                                        .girl-bonus-pic {
                                            width: 34px;
                                            height: 34px;
                                            position: absolute;
                                            top: 3px;
                                            left: 3px;
                                            overflow: hidden;
                                            border-radius: 100%;
                                            &:after {
                                                content: "";
                                                width: 100%;
                                                height: 100%;
                                                position: absolute;
                                                left: 0;
                                                top: 0;
                                                border-radius: 100%;
                                                box-shadow: inset 0 0 0 1px
                                                    rgba(0, 0, 0, 0.2);
                                            }
                                            img {
                                                width: 34px;
                                            }
                                        }
                                    }
                                }
                                .sv-sale-bonus-box-all {
                                    width: 210px;
                                    height: 60px;
                                    position: absolute;
                                    top: 288px;
                                    left: 10px;
                                    .acbonus-box {
                                        width: 100px;
                                        height: 60px;
                                        position: absolute;
                                        left: 1px;
                                        top: 0;
                                        background-color: #a69283;
                                        border-radius: 4px;
                                        box-shadow: 0 2px 0 #8b7b6e,
                                            0 1px 2px rgba(0, 0, 0, 0.2);
                                        .lvlbox-name {
                                            width: 100px;
                                            height: 18px;
                                            position: absolute;
                                            top: 0;
                                            text-transform: uppercase;
                                            color: #fff;
                                            font-size: 12px;
                                            font-weight: bold;
                                            text-align: center;
                                            text-shadow: 0 1px 2px
                                                rgba(0, 0, 0, 0.6);
                                            line-height: 18px;
                                            background-color: #705d4e;
                                            border-radius: 4px 4px 0 0;
                                            box-shadow: 0 1px 1px
                                                rgba(255, 255, 255, 0.2);
                                        }
                                        .bonus-lvl-box-bonus-box {
                                            width: 100%;
                                            height: 42px;
                                            position: absolute;
                                            top: 18px;
                                            display: table;
                                            border-radius: 0 0 4px 4px;
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
                                                text-shadow: 0 1px 1px
                                                    rgba(255, 255, 255, 0.4);
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
                                            left: unset;
                                            right: 2px;
                                        }
                                    }
                                }
                            }
                        }
                        .fw-right-side {
                            width: 730px;
                            height: 460px;
                            position: absolute;
                            top: 42px;
                            right: 10px;
                            .fw-rating-menu-btn-box {
                                width: 740px;
                                height: 50px;
                                position: absolute;
                                top: 0;
                                left: -5px;
                                .color-btn {
                                    width: 230px;
                                    height: 50px;
                                    margin: 0 7px;
                                    .color-btn-text {
                                        top: 14px;
                                    }
                                    &:active {
                                        .color-btn-text {
                                            top: 15px;
                                        }
                                    }
                                }
                            }
                            .fw-right-side-content-box {
                                width: 100%;
                                position: absolute;
                                bottom: 2px;
                                height: 400px;
                                left: 0;
                                background-color: #8f7c68;
                                .fw-rating-ped-box-all {
                                    width: 230px;
                                    height: 390px;
                                    position: absolute;
                                    left: 5px;
                                    bottom: 5px;
                                    .fw-rating-ped-box-p1,
                                    .fw-rating-ped-box-p2,
                                    .fw-rating-ped-box-p3 {
                                        width: 100%;
                                        height: 145px;
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        background-color: #786659;
                                        .fw-rating-ped-pic {
                                            width: 100px;
                                            height: 100px;
                                            position: absolute;
                                            top: 22px;
                                            left: 25px;
                                            img {
                                                width: 100px;
                                            }
                                        }
                                        .fw-rating-ped-num-box {
                                            width: 80px;
                                            height: 100%;
                                            position: absolute;
                                            top: 0;
                                            right: 0;
                                            background: linear-gradient(
                                                180deg,
                                                #4f4339 0%,
                                                #352c25 100%
                                            );
                                            display: table;
                                            .fw-rating-ped-num {
                                                width: 100%;
                                                height: 100%;
                                                position: relative;
                                                display: table-cell;
                                                color: #fff;
                                                font-size: 16px;
                                                font-weight: bold;
                                                text-shadow: 0 1px 2px
                                                    rgba(0, 0, 0, 0.35);
                                                vertical-align: middle;
                                                text-align: center;
                                            }
                                        }
                                    }
                                    .fw-rating-ped-box-p2 {
                                        height: 125px;
                                        top: 152px;
                                        .fw-rating-ped-pic {
                                            top: 12px;
                                            left: 25px;
                                        }
                                    }
                                    .fw-rating-ped-box-p3 {
                                        //height: 165px; top: 285px;
                                        height: 105px;
                                        top: 285px;
                                        //.fw-rating-ped-pic{top: 32px; left: 25px;}
                                        .fw-rating-ped-pic {
                                            top: 2px;
                                            left: 25px;
                                        }
                                    }
                                    .fw-master-pic {
                                        width: 66px;
                                        height: 66px;
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        background-image: url(../img/v2-master-pic1.png);
                                        background-size: 100%;
                                        background-repeat: no-repeat;
                                    }
                                    &.check-p0,
                                    &.check-p4 {
                                        .fw-master-pic {
                                            display: none;
                                        }
                                    }
                                    &.check-p1 {
                                        .fw-rating-ped-box-p1 {
                                            .fw-rating-ped-pic {
                                                left: 0;
                                            }
                                        }
                                        .fw-master-pic {
                                            top: 40px;
                                            left: 100px;
                                        }
                                    }
                                    &.check-p2 {
                                        .fw-rating-ped-box-p2 {
                                            .fw-rating-ped-pic {
                                                left: 0;
                                            }
                                        }
                                        .fw-master-pic {
                                            top: 182px;
                                            left: 100px;
                                        }
                                    }
                                    &.check-p3 {
                                        .fw-rating-ped-box-p3 {
                                            .fw-rating-ped-pic {
                                                left: 0;
                                            }
                                        }
                                        .fw-master-pic {
                                            top: 305px;
                                            left: 100px;
                                        }
                                    }
                                }
                                .rating-scroll-name-box {
                                    width: 470px;
                                    height: 24px;
                                    position: absolute;
                                    top: 5px;
                                    right: 15px;
                                    color: #eed9cb;
                                    font-weight: bold;
                                    line-height: 24px;
                                    font-size: 14px;
                                    text-align: center;
                                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                                    background: linear-gradient(
                                        180deg,
                                        #6d5e52 0%,
                                        #493d34 100%
                                    );
                                    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
                                    .rating-scroll-name {
                                        width: 100px;
                                        height: 24px;
                                        line-height: 24px;
                                        position: absolute;
                                        &.var1 {
                                            width: 100px;
                                        }
                                        &.var2 {
                                            width: 220px;
                                            left: 100px;
                                            background: linear-gradient(
                                                180deg,
                                                #4f4339 0%,
                                                #352c25 100%
                                            );
                                        }
                                        &.var3 {
                                            width: 150px;
                                            left: 320px;
                                        }
                                    }
                                }
                                .rating-scroll-box {
                                    width: 480px;
                                    height: 360px;
                                    position: absolute;
                                    top: 40px;
                                    right: 5px;
                                    .rating-scroll {
                                        display: block;
                                        position: absolute;
                                        left: 0px;
                                        top: 0px;
                                        bottom: 0px;
                                        right: 0px;
                                        overflow-y: scroll;
                                        padding-top: 5px;
                                        padding-bottom: 10px;
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
                                        .rating-card {
                                            width: 100%;
                                            height: 30px;
                                            background-color: #786659;
                                            color: #fff;
                                            text-shadow: 0 2px 4px
                                                rgba(0, 0, 0, 0.75);
                                            font-size: 16px;
                                            line-height: 30px;
                                            text-align: center;
                                            .number,
                                            .name,
                                            .points {
                                                width: 100px;
                                                height: 30px;
                                                position: absolute;
                                            }
                                            .faction {
                                                width: 30px;
                                                height: 30px;
                                                position: absolute;
                                            }
                                            .name {
                                                width: 210px;
                                                background-color: #857163;
                                                margin-left: 100px;
                                                text-align: left;
                                                padding-left: 10px;
                                            }
                                            .points {
                                                width: 118px;
                                                margin-left: 320px;
                                            }
                                            &.color2 {
                                                background-color: #8f7a6b;
                                                .name {
                                                    background-color: #9b8777;
                                                }
                                            }
                                            &.active {
                                                background-color: #83ae55;
                                                .name {
                                                    background-color: #91b75e;
                                                }
                                            }
                                        }
                                        .rating-card-rank {
                                            width: 100%;
                                            height: 30px;
                                            font-weight: bold;
                                            font-size: 18px;
                                            color: #5c4e43;
                                            text-align: center;
                                            text-transform: uppercase;
                                            line-height: 30px;
                                            text-shadow: 0 2px 6px
                                                rgba(255, 255, 255, 0.75);
                                            &.bronze {
                                                background: linear-gradient(
                                                    180deg,
                                                    #8e7453 0%,
                                                    #e3c7a3 40%,
                                                    #8f7553 75%,
                                                    #ae916a 90%,
                                                    #8e7453 100%
                                                );
                                            }
                                            &.silver {
                                                background: linear-gradient(
                                                    180deg,
                                                    #585a5c 0%,
                                                    #d5d8da 40%,
                                                    #585a5b 75%,
                                                    #a1a4a6 90%,
                                                    #585a5b 100%
                                                );
                                            }
                                            &.gold {
                                                background: linear-gradient(
                                                    180deg,
                                                    #c68300 0%,
                                                    #f4dfb6 40%,
                                                    #c68200 75%,
                                                    #fad489 90%,
                                                    #c78302 100%
                                                );
                                            }
                                            &.top {
                                                height: 38px;
                                                line-height: 38px;
                                                color: #0c2b41;
                                                background: linear-gradient(
                                                    180deg,
                                                    #93a6bc 0%,
                                                    #f5f7f8 40%,
                                                    #617e9e 75%,
                                                    #e7ebf1 90%,
                                                    #5e7c9c 100%
                                                );
                                                .top-name-diamond {
                                                    position: relative;
                                                    height: 38px;
                                                    top: -6px;
                                                    &:before {
                                                        content: "";
                                                        width: 30px;
                                                        height: 30px;
                                                        background-image: url(../img/diamond@1x.png);
                                                        background-size: 100%;
                                                        position: relative;
                                                        display: inline-block;
                                                        top: 8px;
                                                        margin: 0 10px 0 10px;
                                                    }
                                                    &:after {
                                                        content: "";
                                                        width: 30px;
                                                        height: 30px;
                                                        background-image: url(../img/diamond@1x.png);
                                                        background-size: 100%;
                                                        position: relative;
                                                        display: inline-block;
                                                        top: 8px;
                                                        margin: 0 10px 0 10px;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                .list-disabled-text {
                                    position: relative;
                                    top: 150px;
                                    left: 0px !important;
                                    width: auto;
                                    margin: 0 14px 0 246px;
                                    font-size: 22px;
                                    text-align: center;
                                    padding: 30px;
                                    font-weight: 700;
                                    color: #fff;
                                    text-shadow: 0 2px 0 #000, 0 1px 10px #000;
                                    background: linear-gradient(
                                        90deg,
                                        rgba(0, 0, 0, 0) 10%,
                                        rgba(48, 34, 16, 0.2),
                                        rgba(48, 34, 16, 0.2),
                                        rgba(0, 0, 0, 0) 90%
                                    );
                                    &:before,
                                    &:after {
                                        content: "";
                                        position: absolute;
                                        left: 0;
                                        width: 100%;
                                        height: 2px;
                                        background: linear-gradient(
                                            90deg,
                                            rgba(255, 255, 255, 0) 10%,
                                            rgba(255, 255, 255, 0.5),
                                            rgba(255, 255, 255, 0) 90%
                                        );
                                    }
                                    &:before {
                                        top: 0;
                                    }
                                    &:after {
                                        bottom: 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default V2ScreenFwPRating;
