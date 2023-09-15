import { styled, css } from "styled-components";

const ScreenFapopolyRatingStyles = css`
    .popup-layer .m-popup.fapop-rating {
        width: 960px;
        height: 600px;
        left: 120px;
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
        .fapop-rating-content {
            width: 920px;
            height: 510px;
            position: absolute;
            top: 70px;
            left: 20px;
            .fapop-rating-box-all {
                width: 600px;
                height: 510px;
                position: absolute;
                top: 0;
                right: 0;
                background: rgba(103, 83, 57, 0.5);
                .fapop-rating-box {
                    width: 440px;
                    height: 490px;
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    .rating-scroll-name-box {
                        width: 100%;
                        height: 24px;
                        position: absolute;
                        top: 0;
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
                        box-shadow: 0 4px 4px rgba(158, 77, 77, 0.45);
                        .rating-scroll-name {
                            height: 24px;
                            line-height: 24px;
                            position: absolute;
                            &.var1 {
                                width: 80px;
                            }
                            &.var2 {
                                width: 250px;
                                left: 80px;
                                background: linear-gradient(
                                    180deg,
                                    #4f4339 0%,
                                    #352c25 100%
                                );
                            }
                            &.var3 {
                                width: 110px;
                                left: 330px;
                            }
                        }
                    }
                    .list-disabled-text {
                        font-size: 24px;
                        text-align: center;
                        padding: 30px;
                        font-weight: bold;
                        color: #fff;
                        text-shadow: 0 2px 0 #000, 0 1px 10px #000;
                        position: absolute;
                        top: 20px;
                    }
                    .rating-scroll-box {
                        width: 100%;
                        height: 464px;
                        position: absolute;
                        top: 25px;
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
                                -webkit-box-shadow: inset 0 0 3px #796b60;
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
                                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                                font-size: 16px;
                                line-height: 30px;
                                text-align: center;
                                .number,
                                .name,
                                .points {
                                    width: 80px;
                                    height: 30px;
                                    position: absolute;
                                }
                                .name {
                                    width: 240px;
                                    left: 80px;
                                    background-color: #857163;
                                    text-align: left;
                                    padding-left: 10px;
                                }
                                .points {
                                    width: 100px;
                                    left: 330px;
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
                                text-shadow: 0 2px 6px rgba(255, 255, 255, 0.75);
                                &.bronze {
                                    background: linear-gradient(
                                        180deg,
                                        #8e7453 0%,
                                        #e3c7a3 50%,
                                        #8f7553 70%,
                                        #ae916a 85%,
                                        #8f7553 100%
                                    );
                                }
                                &.silver {
                                    background: linear-gradient(
                                        180deg,
                                        #585a5c 0%,
                                        #d5d8da 50%,
                                        #585a5b 70%,
                                        #a1a4a6 85%,
                                        #585a5b 100%
                                    );
                                }
                                &.gold {
                                    background: linear-gradient(
                                        180deg,
                                        #c68300 0%,
                                        #f4dfb6 50%,
                                        #c68200 70%,
                                        #fad489 85%,
                                        #c78302 100%
                                    );
                                }
                                &.top {
                                    height: 38px;
                                    line-height: 38px;
                                    color: #0c2b41;
                                    @include background-top;
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
                }
                .rating-ped-box {
                    width: 130px;
                    height: 490px;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    border-radius: 6px 6px 0 0;
                    .rating-ped-box-num {
                        width: 110px;
                        height: 24px;
                        position: absolute;
                        bottom: 0px;
                        background: linear-gradient(
                            180deg,
                            #6d5e52 0%,
                            #493d34 100%
                        );
                        .ped-box-num-text {
                            width: 110px;
                            height: 24px;
                            color: #fff;
                            line-height: 24px;
                            font-size: 14px;
                            text-align: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                            &.var1,
                            &.var2,
                            &.var3,
                            &.var4 {
                                width: 110px;
                                height: 24px;
                                position: absolute;
                                left: 0px;
                            }
                            &.var2 {
                                background: linear-gradient(
                                    180deg,
                                    #4f4339 0%,
                                    #352c25 100%
                                );
                            }
                            &.var3 {
                            }
                            &.var4 {
                                background: linear-gradient(
                                    180deg,
                                    #4f4339 0%,
                                    #352c25 100%
                                );
                                border-radius: 0px 0px 6px 0px;
                            }
                        }
                    }

                    .ped-box {
                        width: 110px;
                        height: 212px;
                        position: absolute;
                        top: 0px;
                        left: 10px;
                        background-color: #786659;
                        &.active {
                            .ped-box-portrait {
                                display: block;
                            }
                        }

                        .ped-box-prize {
                            width: 110px;
                            height: 110px;
                            position: absolute;
                            top: 4px;
                            left: 1px;
                            background-image: url(../img/icon-sunduk-200-3.png);
                            background-size: 100%;
                        }
                        .ped-box-noreward {
                            width: 100%;
                            height: 100%;
                            text-align: center;
                            color: #e3be4f;
                            font-size: 16px;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                            line-height: 60px;
                        }
                        &.rate1 {
                            height: 84px;
                            top: 405px;
                            margin-left: 0px;
                        }
                        &.rate2 {
                            height: 104px;
                            top: 290px;
                            background-color: #67564a;
                            margin-left: 0px;
                            .ped-box-prize {
                                margin-left: 0px;
                                width: 70px;
                                height: 70px;
                                left: 22px;
                                background-image: url(../img/icon-sunduk-200-1.png);
                            }
                        }
                        &.rate3 {
                            height: 124px;
                            top: 155px;
                            margin-left: 0px;
                            .ped-box-prize {
                                margin-left: 0px;
                                width: 90px;
                                height: 90px;
                                left: 10px;
                                background-image: url(../img/icon-sunduk-200-2.png);
                            }
                        }
                        &.rate4 {
                            height: 144px;
                            background-color: #67564a;
                            margin-left: 0px;
                            .ped-box-prize {
                                margin-left: 0px;
                                background-image: url(../img/icon-sunduk-200-3.png);
                            }
                        }
                        .ped-box-portrait {
                            width: 66px;
                            height: 66px;
                            position: absolute;
                            left: 64px;
                            top: -5px;
                            background-image: url(../img/v2-master-pic1.png);
                            display: none;
                        }
                    }
                }
            }
            .fapop-topreward-box-all {
                width: 300px;
                height: 510px;
                position: absolute;
                top: 0;
                left: 10px;
                .cardnameback {
                    height: 50px;
                    background-image: url(../img/noobpackback-line.png);
                    min-width: 230px;
                    position: relative;
                    top: 0;
                    display: inline-block;
                    margin: auto;
                    &:before {
                        content: "";
                        width: 38px;
                        height: 50px;
                        position: absolute;
                        right: -38px;
                        display: block;
                        background-image: url(../img/noobpackback-l.png);
                        transform: scale(-1, 1);
                        top: 0px;
                    }
                    &:after {
                        content: "";
                        width: 38px;
                        height: 50px;
                        position: absolute;
                        margin-left: -38px;
                        display: block;
                        background-image: url(../img/noobpackback-l.png);
                        top: 0px;
                    }
                    .card-text {
                        font-size: 18px;
                        color: #fff;
                        text-shadow: 0 0 6px #000;
                        position: relative;
                        height: 34px;
                        display: inline-block;
                        z-index: 10;
                        line-height: 34px;
                        text-transform: uppercase;
                    }
                }
                .lhero-box {
                    width: 230px;
                    height: 390px;
                    position: absolute;
                    top: 48px;
                    left: 35px;
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
                        width: 222px;
                        height: 360px;
                        position: absolute;
                        top: 55px;
                        left: 4px;
                        img {
                            width: 222px;
                            background-size: 100%;
                            &.star-up {
                                display: none;
                            }
                        }
                    }
                    .topname-box {
                        width: 230px;
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
                            left: 186px;
                            img {
                                width: 38px;
                            }
                        }
                        .lhero-name-box {
                            width: 146px;
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
                    .bottom-star-box-girl-count-box {
                        display: none;
                        width: 230px;
                        height: 34px;
                        position: absolute;
                        top: 354px;
                        left: 0;
                        background: linear-gradient(
                            180deg,
                            #8e7453 0%,
                            #e3c7a3 50%,
                            #8f7553 70%,
                            #ae916a 85%,
                            #8f7553 100%
                        );
                        .sh2-prgbar-all {
                            width: 182px;
                            height: 34px;
                            position: absolute;
                            top: 0;
                            left: 48px;
                            background: linear-gradient(
                                0deg,
                                #735657 0%,
                                #453434 100%
                            );
                            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
                            .sh2-prgbar {
                                width: 85%;
                                height: 34px;
                                position: absolute;
                                top: 0px;
                                left: 0px;
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
                                height: 34px;
                                position: relative;
                                text-align: center;
                                color: #fff;
                                font-weight: bold;
                                font-size: 20px;
                                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
                                line-height: 34px;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
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
                            top: -2px;
                            left: 5px;
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
                            box-shadow: 0 4px 2px rgba(0, 0, 0, 0.35);
                            .girl-bonus-pic {
                                width: 34px;
                                height: 34px;
                                position: absolute;
                                top: 3px;
                                left: 3px;
                                overflow: hidden;
                                border-radius: 100%;
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
                            height: 41px;
                            position: absolute;
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
                                left: 110px;
                            }
                        }
                    }
                }
            }
        }
        .color-btn {
            width: 180px;
            height: 50px;
            top: 524px;
            left: 90px;
            position: absolute;
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
`;

const ScreenFapopolyRating = styled.div`
    ${ScreenFapopolyRatingStyles}
`;

export { ScreenFapopolyRatingStyles, ScreenFapopolyRating };
