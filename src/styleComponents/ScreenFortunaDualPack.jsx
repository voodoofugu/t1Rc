
import styled from "styled-components";

const ScreenFortunaDualPack = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";

body .main.world1,
body .main.world2,
body .main.world3 {
    .popup-layer {
        .m-popup.fortuna-main.uni-sale,
        .m-popup.fortuna-main.sv-sale {
            width: 970px;
            height: 600px;
            left: 115px;
            top: 20px;
            background: linear-gradient(
                -22deg,
                #aa2ea5 0%,
                #7c2e9f 50%,
                #aa2ea5 100%
            );

            &.bf {
                background: linear-gradient(
                    -22deg,
                    #595959,
                    #303030,
                    #595959,
                    #7a7a7a
                );
                box-shadow: 0 1px 10px #392d26, inset 0 1px 2px #505050,
                    0 0 10px #000, 0 0 15px #000;
                &:before {
                    content: "";
                    background-image: url(~imgPath/v2-bf-pop-bg.jpg);
                    background-size: 100%;
                }
            }

            &:before {
                content: "";
                background-image: url(~imgPath/sv-sale-bg4.jpg);
                background-size: 100%;
            }

            .title {
                &.bf {
                    background: linear-gradient(
                        to right,
                        #595959,
                        #303030,
                        #595959
                    );
                    border: solid 4px #3e3e3e;
                    box-shadow: 0 1px 10px #303030,
                        inset 0 2px 10px rgba(189, 189, 189, 0.15),
                        inset 0 28px 5px rgba(189, 189, 189, 0.15);
                    color: #fff;
                    text-shadow: 0 0 1px #413753, 0 1px 1px #fff,
                        0 1px 10px #ffffff;
                }

                background: linear-gradient(
                    90deg,
                    #aa2ea5 0%,
                    #7c2e9f 50%,
                    #aa2ea5 100%
                );
                border: solid 4px #be4dbc;
                color: #fff;
                box-shadow: 0 1px 10px #392d26,
                    inset 0 2px 10px rgba(255, 255, 255, 0.35),
                    inset 0 28px 5px rgba(236, 132, 189, 0.15);
            }
            .btn-close-x {
                background: linear-gradient(
                    22deg,
                    #aa2ea5,
                    #aa2ea5,
                    #7c2e9f,
                    #aa2ea5
                );
                border: solid 4px #be4dbc;

                &.bf {
                    background: linear-gradient(
                        22deg,
                        #7a7a7a,
                        #949494,
                        #595959,
                        #7a7a7a
                    );
                    border: solid 4px #3e3e3e;
                }
            }
            .sv-sale-pack-box {
                width: 270px;
                height: 512px;
                position: absolute;
                top: 70px;
                left: 18px;
                border-radius: 8px 8px 0 8px;
                background-color: rgba(248, 145, 255, 0.6);
                filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.6));
                &:before {
                    content: "";
                    width: 66px;
                    height: 10px;
                    position: absolute;
                    left: 270px;
                    top: 149px;
                    background-color: rgba(0, 0, 0, 0.6);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.4),
                        inset 33px 0 0 #76d13c;
                }
                &:after {
                    content: "";
                    width: 28px;
                    height: 28px;
                    position: absolute;
                    left: 286px;
                    top: 139px;
                    background: url(~imgPath/check-off.png);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.6));
                }
                &:hover {
                    background-color: rgba(248, 145, 255, 0.9);
                    .sv-reward-box-all {
                        background-color: rgba(248, 145, 255, 0.9);
                    }
                }

                &.bf {
                    background-color: rgba(59, 59, 59, 0.5);
                }

                .lhero-box {
                    top: 10px;
                    left: 10px;
                }
                .sv-sale-btn-box {
                    width: 250px;
                    height: 64px;
                    position: absolute;
                    top: 438px;
                    left: 10px;
                    background-color: rgba(102, 16, 104, 0.5);
                    border-radius: 4px;
                    &.bf {
                        background-color: rgba(67, 67, 67, 0.5);
                    }
                }
                .store-button {
                    width: 170px;
                    height: 42px;
                    position: relative;
                    text-align: center;
                    top: 11px;
                    background: linear-gradient(
                        45deg,
                        #e8c34e,
                        #f1da7c,
                        #cfa831,
                        #fbf1d8
                    );
                    @include prefix(border-radius, 8px);
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
                    &:hover {
                        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.5),
                            inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                            inset 0 -3px 0 #c87725, 0 0 12px #ff0, 0 0 5px #ffc,
                            inset 0 0 10px #ffc, inset 0 0 3px #603806;
                    }
                    &:active {
                        top: 12px;
                        line-height: 44px;
                        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3),
                            inset 0 -12px 5px rgba(200, 119, 37, 0.59),
                            inset 0 -1px 0 #c87725, 0 0 12px #ff0,
                            inset 0 0 10px #ffc, inset 0 0 3px #603806;
                        filter: brightness(1.2);
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
                    &.one,
                    &.two {
                        filter: grayscale(1);
                    }
                }
                .sv-reward-box-all {
                    width: 190px;
                    height: 196px;
                    position: absolute;
                    top: 316px;
                    left: 270px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    align-content: center;
                    background-color: rgba(248, 145, 255, 0.6);
                    border-radius: 0 8px 8px 0;
                    padding: 0 3px 0 0;
                    .sv-reward-box {
                        width: 84px;
                        height: 84px;
                        position: relative;
                        display: inline-block;
                        margin: 4px;
                        border-radius: 10px;
                        box-shadow: inset 0 1px rgba(255, 255, 255, 0.6),
                            0 1px 4px 1px rgba(0, 0, 0, 0.4),
                            inset 0 0 0 2px #ff9b37;
                        background: url(~imgPath/v2-trophy-bg.jpg);
                        background-size: 100%;
                        background-repeat: no-repeat;
                        &:before {
                            content: "";
                            width: calc(100% - 4px);
                            height: calc(100% - 4px);
                            position: absolute;
                            top: 2px;
                            left: 2px;
                            background: radial-gradient(
                                rgba(213, 187, 133, 0.5) 50%,
                                rgba(255, 255, 255, 0) 100%
                            );
                            box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.35);
                            border-radius: 8px;
                        }
                        .sv-reward-pic {
                            width: calc(100% - 4px);
                            height: calc(100% - 4px);
                            position: absolute;
                            top: 2px;
                            left: 2px;
                            overflow: hidden;
                            border-radius: 8px;
                            img {
                                width: 100%;
                            }
                        }
                        .sv-reward-count {
                            width: 54px;
                            line-height: 16px;
                            height: 16px;
                            position: relative;
                            top: 68px;
                            text-align: center;
                            margin: 0 auto;
                            color: #fff;
                            font-size: 12px;
                            font-weight: bold;
                            text-shadow: 0 1px 2px rgb(0, 0, 0),
                                0 1px 4px rgba(0, 0, 0, 0.6);
                            background: linear-gradient(#805a31, #c18346);
                            border-radius: 10px 10px 0 0;
                            box-shadow: inset 0 1px 0 #dea569;
                            filter: drop-shadow(0 0 4px rgb(0, 0, 0));
                            &:before,
                            &:after {
                                content: "";
                                width: 8px;
                                height: 100%;
                                position: absolute;
                                top: 0px;
                                background: linear-gradient(
                                    #875c29,
                                    #d49548 94%
                                );
                                background: linear-gradient(
                                    #805a31,
                                    #c18346 94%
                                );
                                z-index: -1;
                            }
                            &:before {
                                left: -2px;
                                transform: skewX(-20deg);
                                border-radius: 6.6px 0 0 0;
                                box-shadow: inset 1px 1px 0 #dea569;
                            }
                            &:after {
                                right: -2px;
                                transform: skewX(20deg);
                                border-radius: 0 6.6px 0 0;
                                box-shadow: inset -1px 1px 0 #dea569;
                            }
                        }
                    }
                }
                &.next {
                    left: unset;
                    right: 18px;
                    border-radius: 8px 8px 8px 0;
                    &:before {
                        left: unset;
                        right: 270px;
                        transform: scaleX(-1);
                    }
                    &:after {
                        left: unset;
                        right: 286px;
                    }
                    .sv-reward-box-all {
                        border-radius: 8px 0 0 8px;
                        left: unset;
                        right: 270px;
                        padding: 0 0 0 3px;
                    }
                }
                &.block {
                    .sh2-girl-lock {
                        display: block;
                    }
                }
                &.buy {
                    pointer-events: none;
                    background-color: rgba(48, 0, 51, 0.6);
                    filter: drop-shadow(0 1px 4px rgba(255, 255, 255, 0.6));
                    .lhero-box,
                    .sv-reward-box {
                        filter: brightness(0.8);
                    }
                    .sv-reward-box-all {
                        background-color: rgba(48, 0, 51, 0.6);
                    }
                    &:before {
                        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
                            inset 0 -1px 0 rgba(0, 0, 0, 0.4),
                            inset 66px 0 0 #76d13c;
                    }
                    &:after {
                        background: url(~imgPath/check-on.png);
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    .sv-sale-btn-box {
                        &:after {
                            content: "";
                            width: 68px;
                            height: 68px;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            background: url(~imgPath/paycheck.png);
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: cover;
                        }
                    }
                }
            }
            .sv-sale-uni-box-all {
                width: 388px;
                height: 300px;
                position: absolute;
                top: 60px;
                left: 285px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                align-content: center;
                padding: 0 6px;
                .sv-uni-all {
                    width: 400px;
                    height: 300px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-image: url(~imgPath/uni-bg-all.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    &.bf {
                        background-image: url(~imgPath/v2-bf-baloon2.png);
                        background-size: 300px 300px;
                        background-position: 50%;
                        background-repeat: no-repeat;
                    }
                }
                .sv-chain1 {
                    width: 400px;
                    height: 300px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-image: url(~imgPath/uni-h-chain-1.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    &.bf {
                        background-image: url(~imgPath/pt-h-chain-1.png);
                    }
                }
                .sv-chain2 {
                    width: 400px;
                    height: 300px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-image: url(~imgPath/uni-h-chain-2.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    &.bf {
                        background-image: url(~imgPath/pt-h-chain-2.png);
                    }
                }
                .sv-text {
                    position: absolute;
                    width: 338px;
                    top: 288px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #ffffff;
                    font-weight: 700;
                    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
                    text-transform: uppercase;
                    font-size: 15px;
                    padding: 6px 20px;
                    background: linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0),
                        rgba(66, 0, 117, 0.8),
                        rgba(66, 0, 117, 0.8),
                        rgba(0, 0, 0, 0)
                    );
                }
                .sv-reward-box {
                    width: 90px;
                    height: 90px;
                    margin: 4px;
                    position: relative;
                    display: inline-block;
                    border-radius: 10px;
                    box-shadow: inset 0 1px rgba(255, 255, 255, 0.6),
                        0 1px 4px 1px rgba(0, 0, 0, 0.4),
                        inset 0 0 0 2px #ff9b37, 0 0 0 1px #845a37,
                        0 2px 0 1px #845a37;
                    background: url(~imgPath/v2-trophy-bg.jpg), #845a37;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    z-index: 1;
                    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 1));
                    &:before {
                        content: "";
                        width: calc(100% - 4px);
                        height: calc(100% - 4px);
                        position: absolute;
                        top: 2px;
                        left: 2px;
                        background: radial-gradient(
                            rgba(213, 187, 133, 0.5) 50%,
                            rgba(255, 255, 255, 0) 100%
                        );
                        box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.35);
                        border-radius: 8px;
                    }
                    .sv-reward-pic {
                        width: calc(100% - 4px);
                        height: calc(100% - 4px);
                        position: absolute;
                        top: 2px;
                        left: 2px;
                        overflow: hidden;
                        border-radius: 8px;
                        img {
                            width: 100%;
                        }
                    }
                    .sv-reward-count {
                        width: 54px;
                        line-height: 18px;
                        height: 18px;
                        position: relative;
                        top: 72px;
                        text-align: center;
                        margin: 0 auto;
                        color: #fff;
                        font-size: 13px;
                        font-weight: bold;
                        text-shadow: 0 1px 2px rgb(0, 0, 0),
                            0 1px 4px rgba(0, 0, 0, 0.6);
                        background: linear-gradient(#805a31, #c18346);
                        border-radius: 10px 10px 0 0;
                        box-shadow: inset 0 1px 0 #dea569;
                        filter: drop-shadow(0 0 4px rgb(0, 0, 0));
                        &:before,
                        &:after {
                            content: "";
                            width: 8px;
                            height: 100%;
                            position: absolute;
                            top: 0px;
                            background: linear-gradient(#875c29, #d49548 94%);
                            background: linear-gradient(#805a31, #c18346 94%);
                            z-index: -1;
                        }
                        &:before {
                            left: -2px;
                            transform: skewX(-20deg);
                            border-radius: 6.6px 0 0 0;
                            box-shadow: inset 1px 1px 0 #dea569;
                        }
                        &:after {
                            right: -2px;
                            transform: skewX(20deg);
                            border-radius: 0 6.6px 0 0;
                            box-shadow: inset -1px 1px 0 #dea569;
                        }
                    }
                    .sv-reward-block {
                        width: 100px;
                        height: 43px;
                        position: absolute;
                        top: 30px;
                        left: -5px;
                        background-image: url(~imgPath/legendary-lock.png);
                        background-size: 100%;
                    }
                }
                &.one {
                    .sv-chain1 {
                        display: none;
                    }
                }
                &.two {
                    .sv-chain2 {
                        display: none;
                    }
                    .sv-reward-block {
                        display: none;
                    }
                }
            }
        }
    }

    .popup-layer .m-popup.fortuna-main.sv-sale {
        background: linear-gradient(
            -22deg,
            #f4266a 0%,
            #a70037 50%,
            #f4266a 100%
        );
        &:before {
            content: "";
            background-image: url(~imgPath/sv-sale-bg.jpg);
            background-size: 100%;
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
            box-shadow: 0 1px 10px #392d26, inset 0 2px 10px #fff,
                inset 0 28px 5px rgba(255, 255, 0, 0.15);
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
            background-color: rgba(255, 187, 206, 0.6);
            .sv-sale-btn-box {
                background-color: rgba(168, 36, 73, 0.65);
            }
            .sv-reward-box-all {
                background-color: rgba(255, 187, 206, 0.6);
            }
            &:hover {
                background-color: rgba(255, 187, 206, 0.9);
                .sv-reward-box-all {
                    background-color: rgba(255, 187, 206, 0.9);
                }
            }
        }
        .sv-sale-heart-box-all {
            width: 400px;
            height: 300px;
            position: absolute;
            top: 80px;
            left: 285px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            align-content: center;
            .sv-heart-left {
                width: 200px;
                height: 300px;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url(~imgPath/sv-h-bg1.png);
                background-size: 100%;
                &:before {
                    content: "";
                    width: 200px;
                    height: 300px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-image: url(~imgPath/sv-h-bg1-1.png);
                    background-size: 100%;
                }
            }
            .sv-heart-right {
                width: 200px;
                height: 300px;
                position: absolute;
                top: 0;
                left: 200px;
                background-image: url(~imgPath/sv-h-bg2.png);
                background-size: 100%;
                &:before {
                    content: "";
                    width: 200px;
                    height: 300px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-image: url(~imgPath/sv-h-bg2-1.png);
                    background-size: 100%;
                }
            }
            .sv-chain1 {
                width: 400px;
                height: 300px;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url(~imgPath/sv-h-chain-1.png);
                background-size: 100%;
            }
            .sv-chain2 {
                width: 400px;
                height: 300px;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url(~imgPath/sv-h-chain-2.png);
                background-size: 100%;
            }
            .sv-reward-box {
                width: 90px;
                height: 90px;
                position: relative;
                margin: 8px;
                @include background-gold;
                @include prefix(border-radius, 8px);
                box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
                &:before {
                    content: "";
                    width: 86px;
                    height: 86px;
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    background: radial-gradient(
                        rgba(213, 187, 133, 0.5) 50%,
                        rgba(255, 255, 255, 0) 100%
                    );
                    box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.35);
                    @include prefix(border-radius, 6px);
                }
                .sv-reward-pic {
                    width: 80px;
                    height: 80px;
                    position: absolute;
                    top: 5px;
                    left: 5px;
                    overflow: hidden;
                    @include prefix(border-radius, 6px);
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
                    @include prefix(border-radius, 10px);
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                    line-height: 24px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
                }
                .sv-reward-block {
                    width: 100px;
                    height: 43px;
                    position: absolute;
                    top: 30px;
                    left: -5px;
                    background-image: url(~imgPath/legendary-lock.png);
                    background-size: 100%;
                }
            }
            &.one {
                .sv-heart-left {
                    background-image: url(~imgPath/sv-h-bg1-g.png);
                    &:before {
                        content: "";
                        background-image: url(~imgPath/sv-h-bg1-1-g.png);
                    }
                }
                .sv-chain1 {
                    display: none;
                }
            }
            &.two {
                .sv-heart-right {
                    background-image: url(~imgPath/sv-h-bg2-g.png);
                    &:before {
                        content: "";
                        background-image: url(~imgPath/sv-h-bg2-1-g.png);
                    }
                }
                .sv-chain2 {
                    display: none;
                }
                .sv-reward-block {
                    display: none;
                }
            }
        }
    }
}

.wpck-timer-box {
    width: 184px;
    height: 84px;
    position: absolute;
    top: -10px;
    margin-left: -10px;
    background-image: url(~imgPath/timer-back.png);
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

body .main.world1,
body .main.world2,
body .main.world3 {
    .popup-layer .m-popup.fortuna-main {
        .title {
            line-height: 58px;
            font-size: 22px;
            left: 0px;
            right: 0px;
            top: 0px;
            width: unset;
            transform: none;
            border-radius: 10px;
            height: 52px;
            text-shadow: 0 0 1px #413753, 0 1px 1px #fff,
                0 1px 10px rgba(0, 0, 0, 0.4);
            &:before,
            &:after {
                content: none;
            }
        }
        .btn-close-x {
            box-shadow: 0 0 7px #000;
        }
        .sv-sale-pack-box {
            .lhero-box {
                width: 250px;
                height: 420px;
                position: absolute;
                top: 10px;
                left: -140px;
                background: linear-gradient(
                    0deg,
                    #8e7453 0%,
                    #e3c7a3 50%,
                    #8f7553 70%,
                    #ae916a 85%,
                    #8e7453 100%
                );
                @include prefix(border-radius, 10px);
                box-shadow: 0 4px 0 #bd9c42, 0 2px 6px rgba(0, 0, 0, 0.8);
                &:after {
                    content: "exclusive";
                    font-weight: bold;
                    font-size: 15px;
                    text-transform: uppercase;
                    position: absolute;
                    top: 44px;
                    right: 0;
                    color: #fffd9b;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6),
                        0 1px 4px rgba(0, 0, 0, 0.4);
                    text-align: center;
                    padding: 0 8px 0 16px;
                    line-height: 22px;
                    background: url(~imgPath/banner-bg1.png);
                    background-size: auto 100%;
                    background-repeat: no-repeat;
                    filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.8));
                }
                .lhero-pic {
                    width: 242px;
                    height: 360px;
                    background-color: red;
                    position: absolute;
                    top: 38px;
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
                    height: 48px;
                    position: absolute;
                    background: linear-gradient(
                        180deg,
                        #d4b354 0%,
                        #f3d88d 91%,
                        #c3a246 92%,
                        #b9993f 100%
                    );
                    @include prefix(border-radius, 10px 10px 0 0);
                    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4),
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
                        left: 206px;
                        img {
                            width: 38px;
                        }
                    }
                    .lhero-name-box {
                        width: 166px;
                        height: 44px;
                        position: absolute;
                        left: 42px;
                        display: table;
                        .lhero-name {
                            display: table-cell;
                            vertical-align: middle;
                            color: #fff;
                            text-shadow: 0 1px 4px #000;
                            font-size: 15px;
                            font-weight: bold;
                            text-align: center;
                        }
                    }
                }
                .bottom-star-box-girl-count-box {
                    width: 250px;
                    height: 34px;
                    position: absolute;
                    top: 386px;
                    left: 0;
                    background: linear-gradient(
                        180deg,
                        #d4b354 0%,
                        #f3d88d 100%
                    );
                    border-radius: 0 0 10px 10px;
                    .sh2-prgbar-all {
                        width: 197px;
                        height: 26px;
                        position: absolute;
                        top: 4px;
                        left: 48px;
                        background: linear-gradient(
                            0deg,
                            #735657 0%,
                            #453434 100%
                        );
                        border-radius: 6px;
                        overflow: hidden;
                        box-shadow: 0 0 0 1px #453434,
                            0 1px 1px 1px rgba(255, 255, 255, 0.4);
                        .sh2-prgbar {
                            width: 85%;
                            height: 100%;
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            @include background-silver;
                        }
                        .sh2-prgbar-text {
                            height: 100%;
                            position: relative;
                            text-align: center;
                            color: #fff;
                            font-weight: bold;
                            font-size: 20px;
                            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
                            line-height: 26px;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                            display: inline-block;
                        }
                        &.gold {
                            .sh2-prgbar {
                                @include background-gold;
                            }
                        }
                        .bonus {
                            color: #ffe000;
                            margin-left: 10px;
                            padding: 0 4px 0 3px;
                            background: #ff63ec;
                            border-radius: 4px;
                            font-weight: 700;
                            position: relative;
                            top: -2px;
                            filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6));
                            display: inline-block;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                            &:before {
                                content: "";
                                border: 8px solid transparent;
                                border-right: 8px solid #ff63ec;
                                border-radius: 2px;
                                position: absolute;
                                top: 1px;
                                left: -15px;
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
                        @include background-gold;
                        @include prefix(border-radius, 100%);
                        box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.4),
                            inset 0 1px 1px rgba(255, 255, 255, 0.5);
                        .girl-bonus-pic {
                            width: 34px;
                            height: 34px;
                            position: absolute;
                            top: 3px;
                            left: 3px;
                            overflow: hidden;
                            @include prefix(border-radius, 100%);
                            &:after {
                                content: "";
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                left: 0;
                                top: 0;
                                border-radius: 100%;
                                box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
                            }
                            img {
                                width: 34px;
                            }
                        }
                    }
                }
                .sv-sale-bonus-box-all {
                    width: 230px;
                    height: 60px;
                    position: absolute;
                    top: 318px;
                    left: 10px;
                    .acbonus-box {
                        width: 110px;
                        height: 100%;
                        position: absolute;
                        left: 1px;
                        border-radius: 4px;
                        box-shadow: 0 2px 0 #8b7b6e,
                            0 0 0 1px rgba(0, 0, 0, 0.1),
                            0 1px 4px rgba(0, 0, 0, 0.6);
                        background: linear-gradient(
                            325deg,
                            #c5c5c5 0%,
                            #b6b6b6 26%,
                            #c5c5c5 26%,
                            #c5c5c5 48%,
                            #b6b6b6 48%,
                            #b6b6b6 60%,
                            #c5c5c5 60%,
                            #c5c5c5 70%,
                            #b6b6b6 70%,
                            #c5c5c5 100%
                        );
                        overflow: hidden;
                        &:before,
                        &:after {
                            content: "";
                            width: 10px;
                            height: 10px;
                            transform: rotate(45deg);
                            position: absolute;
                            top: 25px;
                            background: #747474;
                            box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.2),
                                1px 1px 1px rgba(255, 255, 255, 0.4);
                            z-index: 2;
                        }
                        &:before {
                            left: -6px;
                        }
                        &:after {
                            right: -6px;
                        }
                        .lvlbox-name {
                            width: 110px;
                            height: 30px;
                            position: absolute;
                            top: 0;
                            text-transform: uppercase;
                            color: #fff;
                            font-size: 12px;
                            font-weight: bold;
                            text-align: center;
                            line-height: 12px;
                            border-radius: 4px 4px 0 0;
                            background: #8d8d8d;
                            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6),
                                0 1px 4px rgba(0, 0, 0, 0.8);
                            box-shadow: inset 0 0.5px 0.5px 1px
                                    rgba(255, 255, 255, 0.1),
                                0 1px 1px rgba(255, 255, 255, 0.2);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        .bonus-lvl-box-bonus-box {
                            width: 100%;
                            height: 30px;
                            position: absolute;
                            top: 30px;
                            display: table;
                            .bonus-lvl-box-bonus {
                                width: 100%;
                                height: 100%;
                                display: table-cell;
                                text-align: center;
                                vertical-align: middle;
                                color: #4d3e33;
                                font-weight: bold;
                                font-size: 11px;
                                text-transform: uppercase;
                                text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6),
                                    0 1px 4px rgba(255, 255, 255, 0.8);
                                .ff-sh2-icon {
                                    width: 17px;
                                    height: 22px;
                                    position: relative;
                                    top: 0;
                                    left: 0;
                                    display: inline-block;
                                    vertical-align: middle;
                                    margin-left: 2px;
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
                                        background-image: url(~imgPath/ico-gold.png);
                                        background-size: 100%;
                                    }
                                }
                            }
                        }
                        &.second {
                            left: unset;
                            right: 1px;
                        }
                    }
                }
                .sh2-girl-lock {
                    width: 250px;
                    height: 494px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: none;
                    z-index: 999;
                    background: rgba(0, 0, 0, 0.65);
                    .sh2-girl-lock-text {
                        width: 250px;
                        height: 494px;
                        position: relative;
                        top: 0;
                        left: 0;
                        line-height: 494px;
                        color: #ffd700;
                        font-size: 14px;
                        font-weight: bold;
                        text-transform: uppercase;
                        text-align: center;
                    }
                }
            }
        }
    }
}

.unique {
    width: fit-content;
    white-space: nowrap;
    padding: 0 4px;
    line-height: 20px;
    position: absolute;
    left: 50%;
    top: -4px;
    transform: translateX(-50%);
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    position: absolute;
    top: -6px;
    right: 0;
    color: #fffd9b;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6), 0 1px 4px rgba(0, 0, 0, 0.4);
    text-align: center;
    background: url(~imgPath/banner-bg1.png);
    background-position: center 0;
    background-size: auto 100%;
    background-repeat: no-repeat;
    filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.8));
    &:before,
    &:after {
        content: "";
        position: absolute;
        top: 0;
        width: 14px;
        height: 100%;
        background: url(~imgPath/banner-bg1.png);
        background-position: 0 0;
        background-size: auto 100%;
        background-repeat: no-repeat;
    }
    &:before {
        left: -12px;
    }
    &:after {
        right: -12px;
        transform: scaleX(-1);
    }
}

`;

export default ScreenFortunaDualPack;
