import { css } from "@emotion/react";
import path from "path-browserify";

const styleFileName = path.basename(import.meta.url).replace(".jsx", "");

const ScreenFortunaRoundMainStyles = css`
    .${styleFileName} {
        .popup-layer .m-popup.fortuna-main-round {
            width: 968px;
            height: 620px;
            left: 116px;
            top: 10px;
            &:before {
                content: "";
                background-color: #bb0148;
                background-image: url(../img/spinner-round-bg.jpg);
                background-size: 100%;
            }
            .title {
                color: #572f14;
            }
            .fortuna-main-box {
                width: 940px;
                height: 540px;
                position: absolute;
                top: 65px;
                left: 14px;

                & > .color-btn.rating {
                    position: absolute;
                    top: 10px;
                    left: 11px;
                    width: 124px;
                    height: 48px;
                    .color-btn-text {
                        top: 14px;
                    }
                    &:active {
                        .color-btn-text {
                            top: 15px;
                        }
                    }
                }

                .place {
                    position: absolute;
                    width: 124px;
                    height: 48px;
                    right: 430px;
                    top: 10px;
                    background: #ffcb39;
                    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
                    border-radius: 6px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                    text-align: center;
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 14px;
                    color: #fff;
                    background: linear-gradient(
                        0deg,
                        #ffe199 0%,
                        #f4c657 18%,
                        #ffe199 60%,
                        #f4c557 85%,
                        #ffe199 100%
                    );

                    .place-text {
                        position: relative;
                        top: 3px;
                        & > div {
                            width: 116px;
                            position: absolute;
                            top: 20px;
                            left: 4px;
                            background: linear-gradient(
                                90deg,
                                #ffb1cc 0%,
                                #c14570 50%,
                                #751935 100%
                            );
                            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25),
                                inset 0 11px 0 rgba(255, 255, 255, 0.15);
                            border-radius: 4px;
                            color: #fff;
                            font-weight: bold;
                            font-size: 13px;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                            text-align: center;
                            padding: 3px;
                            box-sizing: border-box;
                        }
                    }
                }

                .push-timer {
                    width: 206px;
                    height: 24px;
                    position: absolute;
                    top: 10px;
                    left: 157px;
                    background: linear-gradient(
                        0deg,
                        #ffe199,
                        #f4c557,
                        #ffe199
                    );
                    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.75);
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                    line-height: 24px;
                    color: #572f14;
                    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
                    border-radius: 6px;

                    .push-timer-time {
                        color: #fff;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                    }
                }

                .fortuna-wheel-all {
                    position: absolute;
                    top: 55px;
                    left: 32px;
                }

                .fortuna-wheel-box {
                    width: 462px;
                    height: 462px;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    font-size: 0px;
                    background: #fff;
                    background-size: 200%;
                    background-position: 50% 0px;
                    border-radius: 50%;
                    overflow: hidden;
                    box-shadow: inset 0 0 0 4px #d30a50, 0 0 0 5px #d30a50,
                        0 0 0 6px black, 0 0 0 14px #7c0b2e;
                    .fortuna-wheel {
                        position: absolute;
                        bottom: 231px;
                        left: 231px;
                        height: 231px;
                        width: 52px;
                        transform: rotate(0deg);
                        transform-origin: 0% 100%;
                        &:before {
                            content: "";
                            border-top: 200px solid rgba(0, 0, 0, 0.15);
                            border-left: 25px solid transparent;
                            border-right: 25px solid transparent;
                            height: 0;
                            width: 6px;
                            position: absolute;
                            transform: rotate(7.2deg);
                            left: -10px;
                            top: 0;
                            transition: all 0.3s;
                        }
                        &.selected:before {
                            border-top: 200px solid rgba(255, 255, 255, 0.4);
                        }

                        &.b1:before,
                        &.b3:before,
                        &.b5:before,
                        &.b7:before,
                        &.b9:before,
                        &.b13:before,
                        &.b17:before,
                        &.b19:before,
                        &.b22:before,
                        &.b24:before {
                            border-top-color: #ffb100;
                        }

                        &.b2:before,
                        &.b6:before,
                        &.b18:before,
                        &.b23:before {
                            border-top-color: #92ff92;
                        }

                        &.b4:before,
                        &.b10:before,
                        &.b21:before {
                            border-top-color: #188fc3;
                        }

                        &.b8:before,
                        &.b12:before,
                        &.b16:before,
                        &.b20:before,
                        &.b25:before {
                            border-top-color: #f32628;
                        }
                        &.b11:before {
                            border-top-color: #ffff75;
                        }
                        &.b14:before {
                            border-top-color: #00ba00;
                        }
                        &.b15:before {
                            border-top-color: #8080ff;
                        }

                        &.b1 {
                            transform: rotate(0deg);
                            &.fortuna-prize,
                            &.fortuna-good {
                                transform: rotate(0deg);
                            }
                        }
                        &.b2 {
                            transform: rotate(14.4deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-14.4deg);
                            }
                        }
                        &.b3 {
                            transform: rotate(28.8deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-28.8deg);
                            }
                        }
                        &.b4 {
                            transform: rotate(43.2deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-43.2deg);
                            }
                        }
                        &.b5 {
                            transform: rotate(57.6deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-57.6deg);
                            }
                        }
                        &.b6 {
                            transform: rotate(72deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-72deg);
                            }
                        }
                        &.b7 {
                            transform: rotate(86.4deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-86.4deg);
                            }
                        }
                        &.b8 {
                            transform: rotate(100.8deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-100.8deg);
                            }
                        }
                        &.b9 {
                            transform: rotate(115.2deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-115.2deg);
                            }
                        }
                        &.b10 {
                            transform: rotate(129.6deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-129.6deg);
                            }
                        }
                        &.b11 {
                            transform: rotate(144deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-144deg);
                            }
                        }
                        &.b12 {
                            transform: rotate(158.4deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-158.4deg);
                            }
                        }
                        &.b13 {
                            transform: rotate(172.8deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-172.8deg);
                            }
                        }
                        &.b14 {
                            transform: rotate(187.2deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-187.2deg);
                            }
                        }
                        &.b15 {
                            transform: rotate(201.6deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-201.6deg);
                            }
                        }
                        &.b16 {
                            transform: rotate(216deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-216deg);
                            }
                        }
                        &.b17 {
                            transform: rotate(230.4deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-230.4deg);
                            }
                        }
                        &.b18 {
                            transform: rotate(244.8deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-244.8deg);
                            }
                        }
                        &.b19 {
                            transform: rotate(259.2deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-259.2deg);
                            }
                        }
                        &.b20 {
                            transform: rotate(273.6deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-273.6deg);
                            }
                        }
                        &.b21 {
                            transform: rotate(288deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-288deg);
                            }
                        }
                        &.b22 {
                            transform: rotate(302.4deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-302.4deg);
                            }
                        }
                        &.b23 {
                            transform: rotate(316.8deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-316.8deg);
                            }
                        }
                        &.b24 {
                            transform: rotate(331.2deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-331.2deg);
                            }
                        }
                        &.b25 {
                            transform: rotate(345.6deg);
                            .fortuna-prize,
                            .fortuna-good {
                                transform: rotate(-345.6deg);
                            }
                        }

                        .fortuna-check-num {
                            width: 24px;
                            height: 13px;
                            position: absolute;
                            top: -5px;
                            left: 12px;
                            background: linear-gradient(
                                0deg,
                                #55c215 0%,
                                #beff8f 100%
                            );
                            box-shadow: 0 2px 2px 0 rgba(#000, 0.45);
                            border-radius: 10px;
                            color: #fff;
                            font-size: 9px;
                            font-weight: bold;
                            line-height: 14px;
                            text-shadow: 0 1px 2px rgba(#000, 0.45);
                            &.res-amount {
                                background: linear-gradient(
                                    0deg,
                                    #f2cd1b 0%,
                                    #ffe6d3 100%
                                );
                                top: 27px;
                                left: 6px;
                                border-radius: 5px;
                                width: 30px;
                            }
                        }
                        .fortuna-prize {
                            width: 36px;
                            height: 37px;
                            position: absolute;
                            cursor: pointer;
                            top: 12px;
                            left: 9px;
                            background: linear-gradient(
                                180deg,
                                #585a5c 0%,
                                #d5d8da 50%,
                                #585a5b 70%,
                                #a1a4a6 85%,
                                #585a5b 100%
                            );
                            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.45);
                            border-radius: 6px;
                            transition: all 0.3s;
                            .prize-pic {
                                width: 32px;
                                height: auto;
                                left: 2px;
                                top: 2px;
                                position: absolute;
                                border-radius: 6px;
                            }
                            &:before {
                                content: "";
                                position: absolute;
                                width: 32px;
                                height: 32px;
                                background: #000;
                                left: 2px;
                                top: 2px;
                                border-radius: 6px;
                                background: linear-gradient(
                                    0deg,
                                    #7e7f80 0%,
                                    #dee0e3 100%
                                );
                                box-shadow: inset 0 0 6px 0 rgba(0, 0, 0, 0.55);
                                transition: 300ms;
                            }
                        }
                        &.selected {
                            &:before {
                                filter: brightness(1.2);
                            }
                            .fortuna-prize {
                                &:before {
                                    filter: sepia(100%);
                                    transition: 300ms;
                                    content: "";
                                    background: linear-gradient(
                                        0deg,
                                        #e9b039 0%,
                                        #fffe9a 100%
                                    );
                                }
                            }
                            .fortuna-good {
                                transition: 300ms;
                            }
                        }
                        &.cheked {
                            .fortuna-prize {
                                box-shadow: 0 0 5px #ff0, 0 0 15px #ff0,
                                    inset 0 0 5px #ffa, inset 0 0 15px #ff0;
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
                        &.promote {
                            .fortuna-promote {
                                position: absolute;
                                left: -5px;
                                background-image: url(../img/top-arrow.png);
                                background-size: 100%;
                                width: 40px;
                                top: 40px;
                                height: 40px;
                            }
                        }
                        &.good {
                            .fortuna-good {
                                width: 90px;
                                height: 90px;
                                position: absolute;
                                top: -5px;
                                left: -5px;
                                background-image: url(../img/fortuna-good.png);
                                background-size: 100%;
                                transition: 300ms;
                            }
                        }
                        &.check {
                            .fortuna-good {
                                background-image: url(../img/fortuna-good-gold.png);
                            }
                        }
                        &.fortune_chance {
                            &.cheked {
                                border: solid 2px #bfa;
                                box-shadow: 0 0 5px #00ff1f, 0 0 15px #00ff1f,
                                    inset 0 0 5px #aaffb8,
                                    inset 0 0 15px #00ff1f;
                            }
                            &.selected {
                                &:before,
                                .fortuna-good {
                                    filter: sepia(100%) hue-rotate(50deg);
                                    transition: 300ms;
                                }
                            }
                        }
                        &.pic-star1,
                        &.pic-star2,
                        &.pic-star3 {
                            .fortuna-num {
                                display: none;
                            }
                            .fortuna-pic-star {
                                width: 20px;
                                height: 18px;
                                position: relative;
                                top: 56px;
                                margin: 0 auto;
                                background-image: url(../img/star1.png);
                                background-size: 100%;
                            }
                        }
                        &.pic-star2 {
                            .fortuna-pic-star {
                                width: 35px;
                                background-image: url(../img/star2.png);
                            }
                        }
                        &.pic-star3 {
                            .fortuna-pic-star {
                                width: 50px;
                                background-image: url(../img/star3.png);
                            }
                        }
                        &.doublespin {
                            .fortuna-ds-box-all {
                                visibility: visible;
                            }
                        }
                        &.winner {
                            animation: round-spinner-win 3s infinite;
                        }

                        @keyframes round-spinner-win {
                            0% {
                                filter: brightness(1);
                            }
                            25% {
                                filter: brightness(1.2);
                            }
                            50% {
                                filter: brightness(1);
                            }
                            75% {
                                filter: brightness(1.2);
                            }
                            100% {
                                filter: brightness(1);
                            }
                        }
                    }
                }

                .fortuna-wheel-center {
                    width: 317px;
                    height: 316px;
                    position: absolute;
                    top: 73px;
                    left: 73px;
                    background-image: url(../img/spinner-round-center.png);
                    background-position: 50% 50%;
                    border-radius: 50%;

                    .fortuna-btn-box {
                        width: 200px;
                        height: 125px;
                        position: absolute;
                        top: 95px;
                        left: 58px;
                        font-size: 0px;
                        .btn-box {
                            position: relative;
                            display: inline-block;
                            width: 124px;
                            height: 56px;
                            top: 0;
                            margin: 0 40px;
                            background: linear-gradient(
                                180deg,
                                #a3260a 0%,
                                #750405 100%
                            );
                            -webkit-border-radius: 6px;
                            -moz-border-radius: 6px;
                            -ms-border-radius: 6px;
                            -o-border-radius: 6px;
                            border-radius: 6px;
                            box-shadow: 0 2px 4px 0 #3f3732;
                            .btn-buy {
                                right: 8px;
                            }
                        }
                        .color-btn {
                            width: 185px;
                            height: 55px;
                            line-height: 35px;
                            .color-btn-text {
                                font-size: 16px;
                                color: #3a3b3a;
                                text-shadow: none;
                            }
                            &.x10 {
                                margin-top: 15px;
                            }
                            .ff-but {
                                &:before {
                                    content: "";
                                    width: 28px;
                                    height: 21px;
                                    position: relative;
                                    display: inline-block;
                                    background-image: url(../img/spinner-round-diamond.png);
                                    background-size: 100%;
                                    margin: 0 4px 0 4px;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                }

                .fortuna-main-controls-box {
                    width: 400px;
                    height: 480px;
                    top: 10px;
                    left: 530px;
                    position: absolute;

                    .rjackpot-box,
                    .rrevard-box {
                        width: 400px;
                        height: 168px;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        background-color: #7e627c;
                        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
                        border-radius: 10px;
                        .rname-box {
                            width: 400px;
                            height: 34px;
                            position: absolute;
                            border-radius: 10px 10px 0 0;
                            text-transform: uppercase;
                            font-size: 20px;
                            color: #645244;
                            text-align: center;
                            font-weight: bold;
                            line-height: 34px;
                            background: linear-gradient(
                                0deg,
                                #ffe199,
                                #f4c557,
                                #ffe199
                            );
                        }

                        .fortuna-reward-box-all {
                            width: 272px;
                            height: 50px;
                            position: absolute;
                            top: 82px;
                            left: 118px;
                            font-size: 0px;
                            .fortuna-reward-box {
                                width: 50px;
                                height: 50px;
                                position: relative;
                                display: inline-block;
                                margin: 0 2px 0 2px;
                                .fortuna-reward-bg {
                                    width: 50px;
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
                                    border-radius: 10px;
                                    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
                                    img {
                                        width: 46px;
                                        height: 46px;
                                        position: absolute;
                                        top: 2px;
                                        left: 2px;
                                        border-radius: 9px;
                                    }
                                }
                                .fortuna-reward-claim-btn {
                                    width: 50px;
                                    height: 16px;
                                    position: absolute;
                                    top: 34px;
                                    left: 0px;
                                    background: linear-gradient(
                                        0deg,
                                        #7cbc30 0%,
                                        #bbee7f 100%
                                    );
                                    border-radius: 4px;
                                    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.45);
                                    color: #fff;
                                    font-size: 10px;
                                    font-weight: bold;
                                    line-height: 17px;
                                    text-transform: uppercase;
                                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                                }
                            }
                        }
                    }
                    .rjackpot-box {
                        .fortuna-reward-box-all {
                            width: 380px;
                            top: 46px;
                            left: 10px;

                            &.second {
                                top: 106px;
                                .wf-jp-2-cloaker {
                                    position: absolute;
                                    top: -5px;
                                    left: -5px;
                                    right: 0;
                                    width: 390px;
                                    height: 62px;
                                    background: rgba(0, 0, 0, 0.66);
                                    color: white;
                                    font-size: 14px;
                                    text-transform: uppercase;
                                    line-height: 30px;
                                    border-radius: 6px;

                                    .color-btn {
                                        height: 30px;
                                        width: 100px;
                                        position: absolute;
                                        top: 28px;
                                        left: 145px;
                                        line-height: 6px;

                                        .color-btn-text {
                                            font-size: 12px;
                                        }
                                    }
                                }
                            }

                            .fortuna-reward-box {
                                width: 50px;
                                height: 50px;

                                .fortuna-reward-bg {
                                    width: 50px;
                                    height: 50px;

                                    img {
                                        width: 46px;
                                    }
                                }
                                .fortuna-reward-claim-pts {
                                    width: 50px;
                                }
                            }
                        }
                        .rjackpot-box-collected-label {
                            display: none;
                        }
                        &.collected {
                            .rjackpot-box-collected-label {
                                left: 0;
                                top: 0;
                                position: absolute;
                                display: block;

                                .rjackpot-box-collected-label-text {
                                    left: 120px;
                                    top: 75px;
                                    width: 160px;
                                    height: 50px;
                                    position: absolute;
                                    transform: rotate(-22deg);
                                    background: linear-gradient(
                                        0deg,
                                        #7cbc30 0%,
                                        #bbee7f 100%
                                    );
                                    color: #fff;
                                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                                    text-align: center;
                                    font-weight: bold;
                                    text-transform: uppercase;
                                    font-size: 16px;
                                    line-height: 50px;
                                    border-radius: 10px;
                                }

                                &:before {
                                    content: "";
                                    position: absolute;
                                    width: 400px;
                                    height: 168px;
                                    background: rgba(0, 0, 0, 0.4);
                                    left: 0;
                                    top: 0;
                                    border-radius: 10px;
                                }
                            }
                        }
                    }
                    .rrevard-box {
                        top: 188px;
                        height: 145px;

                        .fortuna-prgbar-box {
                            .f2-prgbar-empty,
                            .f2-prgbar-full {
                                width: 272px;
                                height: 36px;
                                position: absolute;
                                top: 42px;
                                left: 118px;
                                background-image: url(../img/prg-bar-f3-empty.png);
                                background-size: 272px 100%;
                                .f2-prgbar-full {
                                    background-image: url(../img/prg-bar-f3-full.png);
                                    top: 0;
                                    left: 0;
                                    transition: width 0.5s ease;
                                    background-position: center left;
                                }
                                .f2-prgbar-text {
                                    width: 272px;
                                    height: 36px;
                                    position: relative;
                                    text-align: center;
                                    color: #fff;
                                    font-weight: bold;
                                    font-size: 20px;
                                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
                                    line-height: 36px;
                                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                                }
                            }
                            .fortuna-reward-txt {
                                width: 272px;
                                height: auto;
                                position: relative;
                                top: 12px;
                                left: 14px;
                                color: #fff;
                                font-size: 20px;
                                text-transform: uppercase;
                                text-shadow: 0 1px 2px rgba(#000, 0.45);
                            }
                        }
                        .fortuna-reward-btn {
                            position: absolute;
                            width: 97px;
                            height: 85px;
                            line-height: 85px;
                            top: 47px;
                            left: 13px;
                            color: #fff;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                            text-align: center;
                            font-weight: bold;
                            text-transform: uppercase;
                            font-size: 16px;

                            &:active {
                                line-height: 87px;
                            }
                        }
                    }
                    .rrules-box {
                        width: 400px;
                        height: 165px;
                        top: 355px;
                        left: 0px;
                        position: absolute;
                        background-image: url(../img/fortuna-prg-bg2.png);
                        background-position: 50% 50%;
                        border-radius: 10px;
                        box-shadow: inset 0px 0px 30px 0px rgba(0, 0, 0, 0.4),
                            inset 0px 0px 3px 0px rgba(0, 0, 0, 0.6);

                        .rules-name {
                            width: 100%;
                            height: 20px;
                            position: relative;
                            top: 8px;
                            color: #fff;
                            font-size: 20px;
                            font-weight: bold;
                            text-shadow: 0 1px 2px rgba(#000, 0.45);
                            text-transform: uppercase;
                        }
                        .rules-text {
                            white-space: pre-wrap;
                            line-height: 18px;
                            width: 360px;
                            height: 220px;
                            position: relative;
                            top: 20px;
                            color: #e9e2dc;
                            font-size: 14px;
                            margin: 0 auto;
                            text-align: left;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                        }
                    }
                }
            }
        }
    }
`;

export { styleFileName, ScreenFortunaRoundMainStyles };
