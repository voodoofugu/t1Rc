
import styled from "styled-components";

const ScreenUnipopSubscription = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";

.popup-layer .m-popup.unipop-subscription {
    display: block;
    width: 900px;
    height: 600px;
    position: absolute;
    left: 62px;
    top: 20px;
    .title {
        background: linear-gradient(to right, #fad488, #dd9200, #fad488);
        color: #fff;
    }
    .color-box {
        background-image: url(~imgPath/ts_confirm_bk-1.jpg);
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
        background-image: url(~imgPath/unipop-bg1.png);
        background-size: 100%;
        &:before {
            content: "";
            width: 168px;
            height: 86px;
            position: absolute;
            top: 540px;
            left: 190px;
            background-image: url(~imgPath/unipop-bg2.png);
            background-size: 100%;
        }
        &:after {
            content: "";
            width: 200px;
            height: 540px;
            position: absolute;
            top: 90px;
            left: 800px;
            background-image: url(~imgPath/unipop-bg3.png);
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
                    @include prefix(border-radius, 10px);
                    @include background-bronze;
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
                        @include prefix(border-radius, 8px);
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
                        background-image: url(~imgPath/unipop-gold-arrow.png);
                        background-size: 100%;
                        visibility: hidden;
                    }
                    .unipop-box-pic {
                        width: 140px;
                        height: 70px;
                        position: absolute;
                        top: 5px;
                        left: 5px;
                        @include prefix(border-radius, 6px);
                        overflow: hidden;
                        img {
                            width: 140px;
                        }
                    }
                    &.select {
                        @include background-gold;
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
                background-image: url(~imgPath/ts_confirm_bk-1.jpg);
                background-size: 100%;
                background-position-y: bottom;
                @include prefix(border-radius, 10px);
                .right-box-f-name-box {
                    width: 640px;
                    height: 50px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    @include background-gold;
                    @include prefix(border-radius, 10px 10px 0 0);
                    color: #3c3934;
                    font-weight: bold;
                    font-size: 26px;
                    line-height: 50px;
                    text-transform: uppercase;
                    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
                }
                .sub-box-all {
                    width: 400px;
                    height: 426px;
                    position: absolute;
                    top: 52px;
                    right: 0;
                    .sub-box {
                        width: 186px;
                        height: 426px;
                        position: relative;
                        display: inline-block;
                        background-image: url(~imgPath/sub-bg-silver.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                        &.gold {
                            background-image: url(~imgPath/sub-bg-gold.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                        .sub-box-name-box {
                            width: 150px;
                            height: 80px;
                            position: absolute;
                            top: 20px;
                            left: 18px;
                            background: linear-gradient(
                                0deg,
                                #cbcdcf 0%,
                                #b5b9bd 18%,
                                #cbcdcf 60%,
                                #b5b9bd 85%,
                                #cbcdcf 100%
                            );
                            @include prefix(border-radius, 80%);
                            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
                            .sub-box-name-text {
                                width: 100%;
                                height: 60px;
                                position: relative;
                                top: 15px;
                                color: #303132;
                                font-size: 14px;
                                font-weight: bold;
                                text-transform: uppercase;
                            }
                        }
                        .sub-purhase-box {
                            width: 150px;
                            height: 76px;
                            position: absolute;
                            top: 110px;
                            left: 18px;
                            background-color: rgba(114, 116, 120, 0.5);
                            @include prefix(border-radius, 10px);
                            .sub-purhase-text {
                                width: 100%;
                                height: 26px;
                                position: relative;
                                top: 5px;
                                color: #303132;
                                font-size: 14px;
                                font-weight: bold;
                                text-transform: uppercase;
                            }
                            .sub-purhase {
                                width: 130px;
                                height: 20px;
                                position: absolute;
                                top: 25px;
                                left: 10px;
                                background-color: #5e6166;
                                @include prefix(border-radius, 50px);
                                .sub-purhase-pic {
                                    width: 20px;
                                    height: 20px;
                                    position: absolute;
                                    top: 0;
                                    left: 5px;
                                    background-image: url(~imgPath/trophy-bonus-diamond.png);
                                    background-size: 100%;
                                    background-repeat: no-repeat;
                                }
                                .sub-purhase-num {
                                    width: 100px;
                                    height: 20px;
                                    position: absolute;
                                    top: 0;
                                    right: 5px;
                                    color: #fff;
                                    font-size: 16px;
                                    font-weight: bold;
                                }
                                &.chest {
                                    top: 48px;
                                    .sub-purhase-pic {
                                        background-image: url(~imgPath/change-sun1.png);
                                    }
                                }
                            }
                            &.daily {
                                top: 192px;
                            }
                            &.total {
                                top: 274px;
                            }
                        }
                        .store-button {
                            width: 150px;
                            top: 362px;
                            &:active {
                                top: 363px;
                            }
                        }
                        &.gold {
                            .sub-box-name-box {
                                background: linear-gradient(
                                    0deg,
                                    #ffe199 0%,
                                    #f4c657 18%,
                                    #ffe199 60%,
                                    #f4c557 85%,
                                    #ffe199 100%
                                );
                                .sub-box-name-text {
                                    color: #763d00;
                                    top: 22px;
                                }
                            }
                            .sub-purhase-box {
                                background-color: rgba(234, 170, 20, 0.5);
                                .sub-purhase {
                                    background-color: #db9a01;
                                }
                            }
                        }
                    }
                }
                .sub-bg-girl {
                    width: 280px;
                    height: 430px;
                    position: absolute;
                    bottom: 0;
                    left: -30px;
                    background-image: url(~imgPath/sub-bg-girl.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
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
    @include prefix(border-radius, 6px);
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

.store-button {
    width: 170px;
    height: 42px;
    position: relative;
    text-align: center;
    top: 300px;
    background: linear-gradient(45deg, #e8c34e, #f1da7c, #cfa831, #fbf1d8);
    @include prefix(border-radius, 8px);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1),
        inset 0 -20px 5px rgba(200, 119, 37, 0.59), inset 0 -3px 0px #c87725,
        0 0 3px #3d3737, inset 0 0 3px #603806;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    color: #4a3a08;
    text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
    line-height: 42px;
    margin: auto;
    &:hover {
        filter: brightness(1.1);
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2),
            inset 0 -20px 5px rgba(200, 119, 37, 0.59), inset 0 -3px 0 #c87725,
            0 0 12px #ff0, 0 0 5px #ffc, inset 0 0 10px #ffc,
            inset 0 0 3px #603806;
    }
    &:active {
        top: 261px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2),
            inset 0 -18px 5px rgba(200, 119, 37, 0.59), inset 0 -1px 0 #c87725,
            0 0 12px #ff0, 0 0 5px #ffc, inset 0 0 10px #ffc,
            inset 0 0 3px #603806;
        .coron-price {
            line-height: 44px;
        }
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
    &.sale {
        width: 128px;
        height: 44px;
        top: 154px;
        &:active {
            top: 155px;
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
            }
        }
    }
}

`;

export default ScreenUnipopSubscription;
