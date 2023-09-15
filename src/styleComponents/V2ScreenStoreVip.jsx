import { styled, css } from "styled-components";

const V2ScreenStoreVipStyles = css`
    .popup-layer .m-popup.store-vip {
        width: 1028px;
        height: 550px;
        left: 86px;
        top: 45px;
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
        .store-menu-box {
            width: 118px;
            height: 450px;
            position: absolute;
            top: 75px;
            left: 20px;
            .menu-box-all {
                width: 118px;
                height: 90px;
                position: relative;
                background-image: url(../img/shop-menu1.png);
                background-size: 100%;
                cursor: pointer;
                &:active {
                    top: 1px;
                }
                &.select {
                    background-image: url(../img/shop-menu2.png);
                }
                .menu-pic {
                    width: 80px;
                    height: 60px;
                    position: absolute;
                    left: 19px;
                }
                .menu-text {
                    width: 104px;
                    height: 18px;
                    position: absolute;
                    top: 60px;
                    left: 8px;
                    text-align: center;
                    font-size: 14px;
                    text-transform: uppercase;
                    font-weight: bold;
                    line-height: 20px;
                    color: #30261f;
                    text-shadow: 0 0 6px #fff;
                }
            }
        }
        .vip-right-box-all {
            width: 865px;
            height: 450px;
            position: absolute;
            top: 75px;
            left: 145px;
            .vip-red-box {
                width: 860px;
                height: 120px;
                position: absolute;
                border-radius: 8px;
                overflow: hidden;
                background-image: url(../img/store-vip-bg.jpg);
                background-size: 100%;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
                .vip-name {
                    width: 400px;
                    height: 40px;
                    position: absolute;
                    top: 12px;
                    left: 60px;
                    color: #fff;
                    font-size: 30px;
                    font-weight: bold;
                    text-align: left;
                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
                }
                .vip-about {
                    width: 400px;
                    height: 80px;
                    position: absolute;
                    top: 50px;
                    left: 60px;
                    color: #ffd200;
                    text-align: left;
                }
                .str-left,
                .str-right {
                    width: 0;
                    height: 0;
                    position: absolute;
                    top: 30px;
                    left: 20px;
                    cursor: pointer;
                    border-top: 30px solid transparent;
                    border-right: 20px solid #fae192;
                    border-bottom: 30px solid transparent;
                    &:active {
                        top: 31px;
                    }
                }
                .str-right {
                    left: 820px;
                    border-top: 30px solid transparent;
                    border-right: 0px;
                    border-left: 20px solid #fae192;
                    border-bottom: 30px solid transparent;
                }
            }
            .vip-bottom-box {
                width: 860px;
                height: 320px;
                position: absolute;
                top: 128px;
                border-radius: 8px;
                background: linear-gradient(180deg, #b8a598 0%, #9e8b7d 100%);
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
                .vip-bonus-box {
                    width: 850px;
                    height: 196px;
                    position: absolute;
                    top: 8px;
                    left: 5px;
                    text-align: center;
                    font-size: 0px;
                    .no-bonus-text,
                    .next-vip-text {
                        font-size: 24px;
                        position: relative;
                        top: 0;
                        text-transform: uppercase;
                        color: #fff;
                        text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
                    }
                    .next-vip-text {
                        top: 7px;
                        color: #b81111;
                    }
                    .vip-bonus {
                        width: 164px;
                        height: 90px;
                        position: relative;
                        display: inline-block;
                        border-radius: 8px;
                        margin: 2px;
                        background: linear-gradient(
                            180deg,
                            #8e7453 0%,
                            #e3c7a3 50%,
                            #8f7553 70%,
                            #ae916a 85%,
                            #8f7553 100%
                        );
                        box-shadow: 0 2px 6px 0 #5a4e48;
                        &:before {
                            content: "";
                            width: 160px;
                            height: 86px;
                            position: absolute;
                            top: 2px;
                            left: 4px;
                            background: linear-gradient(
                                180deg,
                                #b59b87 0%,
                                #7f6858 100%
                            );
                            border-radius: 6px;
                            box-shadow: inset 0 0 20px 0 #50463f;
                        }
                        .item-box {
                            width: 70px;
                            height: 70px;
                            position: absolute;
                            top: 10px;
                            left: 10px;
                            background: linear-gradient(
                                180deg,
                                #949699 0%,
                                #656769 100%
                            );
                            border-radius: 8px;
                            box-shadow: inset 0 0 0 2px #cfd1d3,
                                0 2px 4px 0 #50463f;
                            img {
                                width: 65px;
                                height: 65px;
                                position: absolute;
                                top: 2px;
                                left: 2px;
                            }
                        }
                        .item-name,
                        .item-bonus {
                            width: 76px;
                            height: 40px;
                            position: absolute;
                            top: 10px;
                            left: 84px;
                            color: #3b291b;
                            font-size: 14px;
                            text-align: center;
                            line-height: 14px;
                            font-weight: bold;
                            text-shadow: 0 0 10px #fff;
                        }
                        .item-bonus {
                            height: 26px;
                            top: 56px;
                            color: #fff;
                            font-size: 18px;
                            line-height: 26px;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                        }
                    }
                    &.no-bonus {
                        .vip-bonus {
                            top: 20px;
                            filter: grayscale(100%);
                        }
                    }
                }
                .vip-progress-box {
                    width: 850px;
                    height: 110px;
                    position: absolute;
                    top: 206px;
                    left: 5px;
                    background: linear-gradient(
                        180deg,
                        #e5ddc8 0%,
                        #cac2ad 100%
                    );
                    border-radius: 6px;
                    .vip-lvl,
                    .vip-lvl-next {
                        width: 169px;
                        height: 80px;
                        position: absolute;
                        top: 18px;
                        left: 10px;
                        &.lvl0 {
                            background-image: url(../img/vip-p0_0.png);
                            background-size: 100%;
                        }
                        &.lvl1 {
                            background-image: url(../img/vip-p1_0.png);
                            background-size: 100%;
                        }
                        &.lvl2 {
                            background-image: url(../img/vip-p2_0.png);
                            background-size: 100%;
                        }
                        &.lvl3 {
                            background-image: url(../img/vip-p3_0.png);
                            background-size: 100%;
                        }
                        &.lvl4 {
                            background-image: url(../img/vip-p4_0.png);
                            background-size: 100%;
                        }
                        &.lvl5 {
                            background-image: url(../img/vip-p5_0.png);
                            background-size: 100%;
                        }
                        &.lvl6 {
                            background-image: url(../img/vip-p6_0.png);
                            background-size: 100%;
                        }
                        &.lvl7 {
                            background-image: url(../img/vip-p7_0.png);
                            background-size: 100%;
                        }
                        &.lvl8 {
                            background-image: url(../img/vip-p8_0.png);
                            background-size: 100%;
                        }
                        &.lvl9 {
                            background-image: url(../img/vip-p9_0.png);
                            background-size: 100%;
                        }
                        &.lvl10 {
                            background-image: url(../img/vip-p10_0.png);
                            background-size: 100%;
                        }
                    }
                    .vip-lvl-next {
                        left: 546px;
                    }
                    .prgball-box {
                        width: 350px;
                        height: 60px;
                        position: absolute;
                        top: 25px;
                        margin-left: 186px;
                        background: linear-gradient(
                            180deg,
                            #c68300 0%,
                            #f4dfb6 50%,
                            #c68200 70%,
                            #fad489 85%,
                            #c78302 100%
                        );
                        border-radius: 60px;
                        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
                        .prgall-prom {
                            width: 342px;
                            height: 52px;
                            position: absolute;
                            top: 4px;
                            margin-left: 4px;
                            border-radius: 60px;
                            background: linear-gradient(
                                0deg,
                                #735657 0%,
                                #453434 100%
                            );
                            .prg-all-bar {
                                width: 60%;
                                height: 52px;
                                position: relative;
                                background: linear-gradient(
                                    0deg,
                                    #5eb0f2 0%,
                                    #4783b5 12%,
                                    #66c4ff 60%,
                                    #91d5ff 70%,
                                    #569fdb 100%
                                );
                                border-radius: 60px;
                            }
                        }
                        .prg-all-text {
                            width: 100%;
                            height: 100%;
                            position: relative;
                            text-align: center;
                            line-height: 60px;
                            color: #fff;
                            font-size: 20px;
                            font-weight: bold;
                            text-transform: uppercase;
                            text-shadow: 0 0 6px rgba(0, 0, 0, 0.75);
                        }
                    }
                    .vip-sund-box {
                        width: 140px;
                        height: 124px;
                        position: absolute;
                        top: -8px;
                        left: 718px;
                        background: linear-gradient(
                            0deg,
                            #fd3daf 0%,
                            #f4e864 56%,
                            #e28c87 100%
                        );
                        border-radius: 6px;
                        border: 1px solid #f8f2bd;
                        box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.35),
                            0 2px 4px 0 rgba(0, 0, 0, 0.75);
                        &:before {
                            content: "";
                            width: 110px;
                            height: 110px;
                            position: absolute;
                            top: 2px;
                            left: 15px;
                            background-image: url(../img/sunduk.png);
                            background-size: 100%;
                        }
                        .vip-btn-box {
                            width: 120px;
                            height: 60px;
                            position: absolute;
                            top: 72px;
                            left: 10px;
                            background: linear-gradient(
                                0deg,
                                #fd3daf 0%,
                                #e28c87 100%
                            );
                            border-radius: 6px;
                            box-shadow: inset 0 0 10px 0
                                    rgba(255, 255, 255, 0.55),
                                0 2px 4px 0 rgba(0, 0, 0, 0.45);
                            .vip-sund-text {
                                width: 60px;
                                height: 26px;
                                position: absolute;
                                top: -16px;
                                left: 30px;
                                background: linear-gradient(
                                    0deg,
                                    #560000 0%,
                                    #ff0000 50%,
                                    #560000 100%
                                );
                                border-radius: 60px;
                                border: 2px solid #f8f2bd;
                                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.45);
                                text-align: center;
                                line-height: 26px;
                                font-size: 16px;
                                color: #e6e8b0;
                                text-shadow: 0 2px 2px rgba(0, 0, 0, 0.45);
                                font-weight: bold;
                            }
                            .btn-buy {
                                right: 7px;
                                bottom: 5px;
                            }
                        }
                    }
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
        &.orage {
            background: linear-gradient(0deg, #d67503 0%, #fdd2a0 100%);
        }
        &.diamond {
            background: linear-gradient(0deg, #4b97bf 0%, #7ae2ff 100%);
        }
    }

    .spin-btn {
        width: 160px;
        height: 50px;
        position: relative;
        top: 338px;
        text-align: center;
        display: block;
        margin: auto;
        border-radius: 6px;
        background-color: #7cbc31;
        box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25),
            0 1px 8px rgba(0, 0, 0, 0.55);
        cursor: pointer;
        .crow-text-box {
            width: 154px;
            height: 24px;
            position: absolute;
            top: 3px;
            margin-left: 3px;
            background-color: #5b8a24;
            border-radius: 4px;
            .crow-icon {
                width: 34px;
                height: 34px;
                position: relative;
                display: inline-block;
                background-image: url(../img/ico-real.png);
                background-size: 100%;
                top: -5px;
                &.diamond {
                    background-image: url(../img/80-topup.png);
                    height: 30px;
                    margin-top: 3px;
                }
            }
            .crow-text {
                font-size: 16px;
                font-weight: bold;
                color: #d2f2ad;
                position: relative;
                text-transform: uppercase;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
                display: inline-block;
                top: -16px;
            }
        }
        &.disable {
            filter: grayscale(100%);
            cursor: not-allowed;
        }
        &:not(.disable):hover {
            box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25), 0 0 5px #c9ef9c,
                0 0 9px #c9ef9c, 0 0 11px #c9ef9c;
        }
        .btn-text {
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            position: relative;
            top: 27px;
            text-transform: uppercase;
            display: inline-block;
        }
        &:not(.disable):active {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25),
                inset 0 -2px 0 rgba(0, 0, 0, 0.25), 0 0 6px rgba(0, 0, 0, 0.25),
                0 0 5px #c9ef9c, 0 0 9px #c9ef9c, 0 0 11px #c9ef9c;
            .crow-text-box {
                top: 4px;
            }
            .btn-text {
                top: 28px;
            }
        }
    }
`;

const V2ScreenStoreVip = styled.div`
    ${V2ScreenStoreVipStyles}
`;

export { V2ScreenStoreVipStyles, V2ScreenStoreVip };
