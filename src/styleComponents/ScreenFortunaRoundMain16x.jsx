import styled from "styled-components";

const ScreenFortunaRoundMain16x = styled.div`
    .popup-layer .m-popup.fortuna-main-round {
        width: 560px;
        height: 620px;
        left: 320px;
        top: 10px;
    }
    .popup-layer .m-popup.fortuna-main-round:before {
        content: "";
        background-color: #bb0148;
        background-image: url(~imgPath/spinner-round-bg.jpg);
        background-size: 100%;
    }
    .popup-layer .m-popup.fortuna-main-round .title {
        color: #572f14;
    }
    .popup-layer .m-popup.fortuna-main-round .fortuna-main-box {
        width: 532px;
        height: 540px;
        position: absolute;
        top: 65px;
        left: 14px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        > .color-btn.rating {
        position: absolute;
        top: 10px;
        left: 11px;
        width: 124px;
        height: 48px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        > .color-btn.rating
        .color-btn-text {
        top: 14px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        > .color-btn.rating:active
        .color-btn-text {
        top: 15px;
    }
    .popup-layer .m-popup.fortuna-main-round .fortuna-main-box .place {
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
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .place
        .place-text {
        position: relative;
        top: 3px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .place
        .place-text
        > div {
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
    .popup-layer .m-popup.fortuna-main-round .fortuna-main-box .push-timer {
        width: 206px;
        height: 24px;
        position: absolute;
        top: 10px;
        left: 157px;
        background: linear-gradient(0deg, #ffe199, #f4c557, #ffe199);
        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.75);
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 24px;
        color: #572f14;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
        border-radius: 6px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .push-timer
        .push-timer-time {
        color: #fff;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-all {
        position: absolute;
        top: 40px;
        left: 32px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
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
        box-shadow: inset 0 0 0 4px #d30a50, 0 0 0 5px #d30a50, 0 0 0 6px black,
            0 0 0 14px #7c0b2e;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel {
        position: absolute;
        bottom: 231px;
        left: 231px;
        height: 231px;
        width: 52px;
        transform: rotate(0deg);
        transform-origin: 0% 100%;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel:before {
        content: "";
        border-top: 200px solid rgba(0, 0, 0, 0.15);
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        height: 0;
        width: 10px;
        position: absolute;
        transform: rotate(11.25deg);
        left: -20px;
        top: 0;
        transition: all 0.3s;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.selected:before {
        border-top: 200px solid rgba(255, 255, 255, 0.4);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b1:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b3:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b5:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b7:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b9:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b13:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b17:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b19:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b22:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b24:before {
        border-top-color: #ffb100;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b2:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b6:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b18:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b23:before {
        border-top-color: #92ff92;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b4:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b10:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b21:before {
        border-top-color: #188fc3;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b8:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b12:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b16:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b20:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b25:before {
        border-top-color: #f32628;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b11:before {
        border-top-color: #ffff75;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b14:before {
        border-top-color: #00ba00;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b15:before {
        border-top-color: #8080ff;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel
        .fortuna-check-num {
        width: 24px;
        height: 13px;
        position: absolute;
        top: -5px;
        right: 0px;
        background: linear-gradient(0deg, #55c215 0%, #beff8f 100%);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.45);
        border-radius: 10px;
        color: #fff;
        font-size: 9px;
        font-weight: bold;
        line-height: 14px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel
        .fortuna-check-num.res-amount {
        background: linear-gradient(0deg, #f2cd1b 0%, #ffe6d3 100%);
        top: 40px;
        right: 0px;
        border-radius: 5px;
        width: 30px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b1 {
        transform: rotate(0deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b1
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b1
        .fortuna-good {
        transform: rotate(0deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b2 {
        transform: rotate(22.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b2
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b2
        .fortuna-good {
        transform: rotate(-22.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b3 {
        transform: rotate(45deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b3
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b3
        .fortuna-good {
        transform: rotate(-45deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b4 {
        transform: rotate(67.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b4
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b4
        .fortuna-good {
        transform: rotate(-67.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b5 {
        transform: rotate(90deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b5
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b5
        .fortuna-good {
        transform: rotate(-90deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b6 {
        transform: rotate(112.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b6
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b6
        .fortuna-good {
        transform: rotate(-112.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b7 {
        transform: rotate(135deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b7
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b7
        .fortuna-good {
        transform: rotate(-135deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b8 {
        transform: rotate(157.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b8
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b8
        .fortuna-good {
        transform: rotate(-157.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b9 {
        transform: rotate(180deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b9
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b9
        .fortuna-good {
        transform: rotate(-180deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b10 {
        transform: rotate(202.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b10
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b10
        .fortuna-good {
        transform: rotate(-202.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b11 {
        transform: rotate(225deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b11
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b11
        .fortuna-good {
        transform: rotate(-225deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b12 {
        transform: rotate(247.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b12
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b12
        .fortuna-good {
        transform: rotate(-247.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b13 {
        transform: rotate(270deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b13
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b13
        .fortuna-good {
        transform: rotate(-270deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b14 {
        transform: rotate(292.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b14
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b14
        .fortuna-good {
        transform: rotate(-292.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b15 {
        transform: rotate(315deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b15
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b15
        .fortuna-good {
        transform: rotate(-315deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b16 {
        transform: rotate(337.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b16
        .fortuna-prize,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.b16
        .fortuna-good {
        transform: rotate(-337.5deg);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel
        .fortuna-prize {
        width: 52px;
        height: 52px;
        position: absolute;
        cursor: pointer;
        top: 12px;
        left: 12px;
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
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel
        .fortuna-prize
        .prize-pic {
        width: 48px;
        height: auto;
        left: 2px;
        top: 2px;
        position: absolute;
        border-radius: 6px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel
        .fortuna-prize:before {
        content: "";
        position: absolute;
        width: 48px;
        height: 48px;
        background: #000;
        left: 2px;
        top: 2px;
        border-radius: 6px;
        background: linear-gradient(0deg, #7e7f80 0%, #dee0e3 100%);
        box-shadow: inset 0 0 6px 0 rgba(0, 0, 0, 0.55);
        transition: 300ms;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.selected:before {
        filter: brightness(1.2);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.selected
        .fortuna-prize:before {
        filter: sepia(100%);
        transition: 300ms;
        content: "";
        background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.selected
        .fortuna-good {
        transition: 300ms;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.cheked
        .fortuna-prize {
        box-shadow: 0 0 5px #ff0, 0 0 15px #ff0, inset 0 0 5px #ffa,
            inset 0 0 15px #ff0;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.promote
        .fortuna-promote {
        position: absolute;
        left: -5px;
        background-image: url(~imgPath/top-arrow.png);
        background-size: 100%;
        width: 40px;
        top: 40px;
        height: 40px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.good
        .fortuna-good {
        width: 90px;
        height: 90px;
        position: absolute;
        top: -5px;
        left: -5px;
        background-image: url(~imgPath/fortuna-good.png);
        background-size: 100%;
        transition: 300ms;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.check
        .fortuna-good {
        background-image: url(~imgPath/fortuna-good-gold.png);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.fortune_chance.cheked {
        border: solid 2px #bfa;
        box-shadow: 0 0 5px #00ff1f, 0 0 15px #00ff1f, inset 0 0 5px #aaffb8,
            inset 0 0 15px #00ff1f;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.fortune_chance.selected:before,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.fortune_chance.selected
        .fortuna-good {
        filter: sepia(100%) hue-rotate(50deg);
        transition: 300ms;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.pic-star1
        .fortuna-num,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.pic-star2
        .fortuna-num,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.pic-star3
        .fortuna-num {
        display: none;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.pic-star1
        .fortuna-pic-star,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.pic-star2
        .fortuna-pic-star,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.pic-star3
        .fortuna-pic-star {
        width: 20px;
        height: 18px;
        position: relative;
        top: 56px;
        margin: 0 auto;
        background-image: url(~imgPath/star1.png);
        background-size: 100%;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.pic-star2
        .fortuna-pic-star {
        width: 35px;
        background-image: url(~imgPath/star2.png);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.pic-star3
        .fortuna-pic-star {
        width: 50px;
        background-image: url(~imgPath/star3.png);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.doublespin
        .fortuna-ds-box-all {
        visibility: visible;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-box
        .fortuna-wheel.winner {
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
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-center {
        width: 317px;
        height: 316px;
        position: absolute;
        top: 73px;
        left: 73px;
        background-image: url(~imgPath/spinner-round-center.png);
        background-position: 50% 50%;
        border-radius: 50%;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-center
        .fortuna-btn-box {
        width: 200px;
        height: 125px;
        position: absolute;
        top: 95px;
        left: 58px;
        font-size: 0px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-center
        .fortuna-btn-box
        .btn-box {
        position: relative;
        display: inline-block;
        width: 124px;
        height: 56px;
        top: 0;
        margin: 0 40px;
        background: linear-gradient(180deg, #a3260a 0%, #750405 100%);
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        -ms-border-radius: 6px;
        -o-border-radius: 6px;
        border-radius: 6px;
        box-shadow: 0 2px 4px 0 #3f3732;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-center
        .fortuna-btn-box
        .btn-box
        .btn-buy {
        right: 8px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-center
        .fortuna-btn-box
        .color-btn {
        width: 185px;
        height: 55px;
        line-height: 35px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-center
        .fortuna-btn-box
        .color-btn
        .color-btn-text {
        font-size: 16px;
        color: #3a3b3a;
        text-shadow: none;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-center
        .fortuna-btn-box
        .color-btn.x10 {
        margin-top: 15px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-center
        .fortuna-btn-box
        .color-btn.tokens {
        display: inline-block;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-center
        .fortuna-btn-box
        .color-btn
        .ff-but:before {
        content: "";
        width: 40px;
        height: 40px;
        position: relative;
        display: inline-block;
        background-image: url(~imgPath/v2-f-e1.png);
        background-size: 100%;
        margin: 0 4px 0 4px;
        vertical-align: middle;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-wheel-center
        .fortuna-btn-box.get-tokens
        .color-btn.tokens {
        display: inline-block;
        margin-top: 32px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box {
        width: 400px;
        height: 480px;
        top: 10px;
        left: 530px;
        position: absolute;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .mission-box-all {
        width: 400px;
        height: 168px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 8px;
        box-shadow: inset 0px 0px 30px 0px rgba(0, 0, 0, 0.4),
            inset 0px 0px 3px 0px rgba(0, 0, 0, 0.6);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .mission-box-all
        .color-btn {
        width: 185px;
        height: 55px;
        line-height: 35px;
        top: 103px;
        left: 0;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .mission-box-all
        .color-btn
        .color-btn-text {
        font-size: 16px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .daily-mission-box {
        width: 384px;
        height: 86px;
        position: absolute;
        top: 8px;
        left: 8px;
        background-color: rgba(0, 0, 0, 0.28);
        border-radius: 6px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .daily-mission-box
        .daily-mission-name {
        width: 290px;
        height: auto;
        position: absolute;
        top: 8px;
        left: 8px;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 18px;
        text-align: center;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .daily-mission-box
        .daily-prgbar-all {
        width: 290px;
        height: 40px;
        position: absolute;
        top: 38px;
        left: 8px;
        background: linear-gradient(180deg, #332732 0%, #584457 100%);
        overflow: hidden;
        border-radius: 8px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .daily-mission-box
        .daily-prgbar-all
        .daily-prgbar {
        width: 10%;
        height: 40px;
        position: absolute;
        top: 0px;
        left: 0px;
        background: linear-gradient(
            0deg,
            #8cdd55 0%,
            #43a700 50%,
            #8cdd55 100%
        );
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .daily-mission-box
        .daily-prgbar-all
        .daily-prgbar-text {
        width: 100%;
        height: 40px;
        position: relative;
        text-align: center;
        color: #ffd33c;
        font-weight: bold;
        font-size: 24px;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
        line-height: 40px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
        text-transform: uppercase;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .daily-mission-box
        .daily-reward {
        width: 70px;
        height: 70px;
        position: absolute;
        top: 8px;
        right: 8px;
        border-radius: 10px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .daily-mission-box
        .daily-reward
        .daily-reward-pic {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 4px;
        left: 10px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .daily-mission-box
        .daily-reward
        .daily-reward-pic
        img {
        width: 50px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .daily-mission-box
        .daily-reward
        .daily-reward-count {
        width: 60px;
        height: auto;
        position: relative;
        top: 52px;
        text-align: center;
        margin: 0 auto;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box {
        width: 400px;
        height: 168px;
        position: absolute;
        top: 0px;
        left: 0px;
        box-shadow: inset 0px 0px 30px 0px rgba(0, 0, 0, 0.4),
            inset 0px 0px 3px 0px rgba(0, 0, 0, 0.6);
        border-radius: 10px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .rname-box,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
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
        background: linear-gradient(0deg, #ffe199, #f4c557, #ffe199);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-reward-box-all {
        width: 380px;
        height: 50px;
        position: absolute;
        top: 82px;
        left: 10px;
        font-size: 0px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all
        .fortuna-reward-box,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-reward-box-all
        .fortuna-reward-box {
        width: 50px;
        height: 50px;
        position: relative;
        display: inline-block;
        margin: 0 2px 0 2px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all
        .fortuna-reward-box
        .fortuna-reward-bg,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-reward-box-all
        .fortuna-reward-box
        .fortuna-reward-bg {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all
        .fortuna-reward-box
        .fortuna-reward-bg
        img,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-reward-box-all
        .fortuna-reward-box
        .fortuna-reward-bg
        img {
        width: 46px;
        height: 46px;
        position: absolute;
        top: 2px;
        left: 2px;
        border-radius: 9px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all
        .fortuna-reward-box
        .fortuna-reward-claim-btn,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-reward-box-all
        .fortuna-reward-box
        .fortuna-reward-claim-btn {
        width: 50px;
        height: 16px;
        position: absolute;
        top: 34px;
        left: 0px;
        background: linear-gradient(0deg, #7cbc30 0%, #bbee7f 100%);
        border-radius: 4px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.45);
        color: #fff;
        font-size: 10px;
        font-weight: bold;
        line-height: 17px;
        text-transform: uppercase;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all {
        width: 380px;
        top: 46px;
        left: 10px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all.second {
        top: 106px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all.second
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
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all.second
        .wf-jp-2-cloaker
        .color-btn {
        height: 30px;
        width: 100px;
        position: absolute;
        top: 28px;
        left: 145px;
        line-height: 6px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all.second
        .wf-jp-2-cloaker
        .color-btn
        .color-btn-text {
        font-size: 12px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all
        .fortuna-reward-box {
        width: 50px;
        height: 50px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all
        .fortuna-reward-box
        .fortuna-reward-bg {
        width: 50px;
        height: 50px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all
        .fortuna-reward-box
        .fortuna-reward-bg
        img {
        width: 46px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .fortuna-reward-box-all
        .fortuna-reward-box
        .fortuna-reward-claim-pts {
        width: 50px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box
        .rjackpot-box-collected-label {
        display: none;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box.collected
        .rjackpot-box-collected-label {
        left: 0;
        top: 0;
        position: absolute;
        display: block;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box.collected
        .rjackpot-box-collected-label
        .rjackpot-box-collected-label-text {
        left: 120px;
        top: 75px;
        width: 160px;
        height: 50px;
        position: absolute;
        background: linear-gradient(0deg, #7cbc30 0%, #bbee7f 100%);
        color: #fff;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 16px;
        line-height: 50px;
        border-radius: 10px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rjackpot-box.collected
        .rjackpot-box-collected-label:before {
        content: "";
        position: absolute;
        width: 400px;
        height: 168px;
        background: rgba(0, 0, 0, 0.4);
        left: 0;
        top: 0;
        border-radius: 10px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box {
        top: 188px;
        height: 145px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-prgbar-box
        .f2-prgbar-empty,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-prgbar-box
        .f2-prgbar-full {
        width: 272px;
        height: 36px;
        position: absolute;
        top: 42px;
        left: 118px;
        background-image: url(~imgPath/prg-bar-f3-empty.png);
        background-size: 272px 100%;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-prgbar-box
        .f2-prgbar-empty
        .f2-prgbar-full,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-prgbar-box
        .f2-prgbar-full
        .f2-prgbar-full {
        background-image: url(~imgPath/prg-bar-f3-full.png);
        top: 0;
        left: 0;
        transition: width 0.5s ease;
        background-position: center left;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-prgbar-box
        .f2-prgbar-empty
        .f2-prgbar-text,
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-prgbar-box
        .f2-prgbar-full
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
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-prgbar-box
        .fortuna-reward-txt {
        width: 272px;
        height: auto;
        position: relative;
        top: 12px;
        left: 14px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-reward-btn {
        position: absolute;
        width: 97px;
        height: 25px;
        line-height: 25px;
        top: 47px;
        left: 13px;
        color: #fff;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 16px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrevard-box
        .fortuna-reward-btn:active {
        line-height: 27px;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrules-box {
        width: 400px;
        height: 165px;
        top: 355px;
        left: 0px;
        position: absolute;
        border-radius: 10px;
        box-shadow: inset 0px 0px 30px 0px rgba(0, 0, 0, 0.4),
            inset 0px 0px 3px 0px rgba(0, 0, 0, 0.6);
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrules-box
        .rules-name {
        width: 100%;
        height: 20px;
        position: relative;
        top: 8px;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
        text-transform: uppercase;
    }
    .popup-layer
        .m-popup.fortuna-main-round
        .fortuna-main-box
        .fortuna-main-controls-box
        .rrules-box
        .rules-text {
        white-space: pre-wrap;
        line-height: 18px;
        width: 360px;
        height: 220px;
        position: relative;
        top: 13px;
        color: #e9e2dc;
        font-size: 14px;
        margin: 0 auto;
        text-align: left;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
    }
`;

export default ScreenFortunaRoundMain16x;
