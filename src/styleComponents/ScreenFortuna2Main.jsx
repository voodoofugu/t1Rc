import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .main {
        width: 1200px;
        height: 640px;
        .header {
            height: 80px;
            .resource-panel {
                width: 550px;
                height: 80px;
                position: absolute;
                top: 0;
                left: 0;
                .avatar-box-all {
                    width: 70px;
                    height: 70px;
                    position: absolute;
                    top: 5px;
                    left: 10px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
                    border-radius: 10px;
                    background: linear-gradient(
                        0deg,
                        #f8b76c 0%,
                        #f78500 18%,
                        #f8b76c 60%,
                        #f9981f 85%,
                        #f8b76b 100%
                    );
                    .avatar-box-pic {
                        width: 64px;
                        height: 64px;
                        position: absolute;
                        top: 3px;
                        left: 3px;
                        border-radius: 8px;
                        overflow: hidden;
                        > img {
                            width: 64px;
                        }
                    }
                    .avatar-box-name {
                        width: 80px;
                        height: 20px;
                        position: absolute;
                        top: 56px;
                        left: -5px;
                        background-image: url(../img/wpck-ram1.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                        color: #fff;
                        font-weight: bold;
                        font-size: 10px;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                        text-align: center;
                    }
                }
                .resource-gold {
                    width: 190px;
                    height: 60px;
                    position: absolute;
                    top: 10px;
                    left: 114px;
                    box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.55),
                        0 2px 4px 0 rgba(0, 0, 0, 0.35);
                    border-radius: 30px;
                    background: linear-gradient(
                        0deg,
                        #ffe199 0%,
                        #f4c657 18%,
                        #ffe199 60%,
                        #f4c557 85%,
                        #ffe199 100%
                    );
                    .value {
                        width: 90px;
                        height: 28px;
                        position: absolute;
                        top: 3px;
                        left: 55px;
                        background: linear-gradient(
                            90deg,
                            #f4bf87 0%,
                            #d38632 50%,
                            #92581a 100%
                        );
                        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25),
                            inset 0 14px 0 rgba(255, 255, 255, 0.15);
                        border-radius: 6px;
                        color: #fff;
                        font-weight: bold;
                        font-size: 20px;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                        padding-left: 10px;
                        line-height: 28px;
                    }
                    .value-bonus {
                        width: 90px;
                        height: 22px;
                        position: absolute;
                        top: 33px;
                        left: 55px;
                        background: linear-gradient(
                            90deg,
                            #62b3ed 0%,
                            #3474a1 50%,
                            #475661 100%
                        );
                        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25),
                            inset 0 14px 0 rgba(255, 255, 255, 0.15);
                        border-radius: 6px;
                        color: #fff;
                        font-weight: bold;
                        font-size: 16px;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                        padding-left: 10px;
                        line-height: 22px;
                    }
                    .resource-btn-add {
                        width: 34px;
                        height: 60px;
                        position: absolute;
                        top: 0px;
                        left: 156px;
                        border-radius: 0 30px 30px 0;
                        cursor: pointer;
                        &:before {
                            content: "";
                            width: 6px;
                            height: 22px;
                            position: absolute;
                            top: 19px;
                            left: 12px;
                            background-color: #3c3737;
                        }
                        &:after {
                            content: "";
                            width: 22px;
                            height: 6px;
                            position: absolute;
                            top: 27px;
                            left: 4px;
                            background-color: #3c3737;
                        }
                    }
                    .resource-pic {
                        width: 70px;
                        height: 70px;
                        position: absolute;
                        top: -5px;
                        left: -20px;
                        > img {
                            width: 70px;
                        }
                    }
                }
                .resource-vip {
                    width: 190px;
                    height: 60px;
                    position: absolute;
                    top: 10px;
                    left: 336px;
                    box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.55),
                        0 2px 4px 0 rgba(0, 0, 0, 0.35);
                    border-radius: 30px;
                    background: linear-gradient(
                        0deg,
                        #ffe199 0%,
                        #f4c657 18%,
                        #ffe199 60%,
                        #f4c557 85%,
                        #ffe199 100%
                    );
                    .resource-btn-add {
                        width: 34px;
                        height: 60px;
                        position: absolute;
                        top: 0px;
                        left: 156px;
                        border-radius: 0 30px 30px 0;
                        cursor: pointer;
                        &:before {
                            content: "";
                            width: 6px;
                            height: 22px;
                            position: absolute;
                            top: 19px;
                            left: 12px;
                            background-color: #3c3737;
                        }
                        &:after {
                            content: "";
                            width: 22px;
                            height: 6px;
                            position: absolute;
                            top: 27px;
                            left: 4px;
                            background-color: #3c3737;
                        }
                    }
                    .value-vip-diamond,
                    .value-vip-ticket {
                        width: 90px;
                        height: 25px;
                        position: absolute;
                        top: 3px;
                        left: 55px;
                        background: linear-gradient(
                            90deg,
                            #f4bf87 0%,
                            #d38632 50%,
                            #92581a 100%
                        );
                        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25),
                            inset 0 14px 0 rgba(255, 255, 255, 0.15);
                        border-radius: 6px;
                        color: #fff;
                        font-weight: bold;
                        font-size: 20px;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                        padding-right: 10px;
                        line-height: 25px;
                        text-align: right;
                        &:before {
                            content: "";
                            width: 26px;
                            height: 26px;
                            position: absolute;
                            top: 0;
                            left: 2px;
                            background-image: url(../img/v2-res-diamond.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                    }
                    .value-vip-ticket {
                        top: 30px;
                        &:before {
                            content: "";
                            width: 26px;
                            height: 26px;
                            position: absolute;
                            top: 0;
                            left: 2px;
                            background-image: url(../img/v2-res-ticket.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                    }
                    .resource-pic-vip {
                        width: 68px;
                        height: 68px;
                        position: absolute;
                        top: -4px;
                        left: -20px;
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                        background: linear-gradient(
                            180deg,
                            #585a5c 0%,
                            #d5d8da 50%,
                            #585a5b 70%,
                            #a1a4a6 85%,
                            #585a5b 100%
                        );
                        border-radius: 100%;
                        &:before {
                            content: "";
                            width: 60px;
                            height: 60px;
                            position: absolute;
                            top: 4px;
                            left: 4px;
                            background-color: #484242;
                            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25);
                            border-radius: 100%;
                        }
                        .viplvl {
                            width: 56px;
                            height: 56px;
                            position: absolute;
                            top: 6px;
                            left: 6px;
                            color: #1e1010;
                            font-weight: bold;
                            font-size: 16px;
                            text-align: center;
                            line-height: 60px;
                            text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
                        }
                    }
                    &.lvl0 {
                        .viplvl {
                            background-image: url(../img/2vip-s3.png);
                            background-size: 100%;
                        }
                    }
                    &.lvl1 {
                        .viplvl {
                            background-image: url(../img/2vip-s1.png);
                            background-size: 100%;
                        }
                    }
                    &.lvl2 {
                        .viplvl {
                            background-image: url(../img/2vip-s2.png);
                            background-size: 100%;
                        }
                    }
                    &.lvl3 {
                        .viplvl {
                            background-image: url(../img/2vip-s3.png);
                            background-size: 100%;
                        }
                    }
                    &.lvl4 {
                        .viplvl {
                            background-image: url(../img/2vip-s4.png);
                            background-size: 100%;
                        }
                    }
                    &.lvl5 {
                        .viplvl {
                            background-image: url(../img/2vip-s5.png);
                            background-size: 100%;
                        }
                    }
                    &.lvl6 {
                        .viplvl {
                            background-image: url(../img/2vip-s6.png);
                            background-size: 100%;
                        }
                    }
                    &.lvl7 {
                        .viplvl {
                            background-image: url(../img/2vip-s7.png);
                            background-size: 100%;
                        }
                    }
                    &.lvl8 {
                        .viplvl {
                            background-image: url(../img/2vip-s8.png);
                            background-size: 100%;
                        }
                    }
                    &.lvl9 {
                        .viplvl {
                            background-image: url(../img/2vip-s9.png);
                            background-size: 100%;
                        }
                    }
                    &.lvl10 {
                        .viplvl {
                            background-image: url(../img/2vip-s10.png);
                            background-size: 100%;
                        }
                    }
                    .vip-diamond-text,
                    .vip-ticket-text {
                        width: 78px;
                        height: 20px;
                        position: absolute;
                        top: 16px;
                        margin-left: 128px;
                        color: #fff;
                        font-size: 16px;
                        font-weight: bold;
                        text-shadow: 0 2px 4px #000;
                    }
                    .vip-ticket-text {
                        top: 44px;
                    }
                }
            }
            .shop-chest-box-all {
                width: 380px;
                height: 80px;
                position: absolute;
                top: 0;
                right: 180px;
                .res-shop-btn {
                    width: 160px;
                    height: 60px;
                    position: absolute;
                    top: 10px;
                    left: 25px;
                    cursor: pointer;
                    background: linear-gradient(
                        0deg,
                        #41d355 0%,
                        #039117 18%,
                        #41d355 60%,
                        #0ca621 85%,
                        #41d355 100%
                    );
                    box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.35),
                        0 2px 4px rgba(0, 0, 0, 0.55);
                    border-radius: 6px;
                    &:active {
                        top: 11px;
                    }
                    .res-shop-btn-text {
                        width: 100px;
                        height: auto;
                        position: absolute;
                        top: 18px;
                        right: 5px;
                        color: #fff;
                        font-weight: bold;
                        font-size: 18px;
                        text-align: center;
                        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.55);
                        text-transform: uppercase;
                    }
                    &:before {
                        content: "";
                        width: 80px;
                        height: 80px;
                        position: absolute;
                        top: -10px;
                        left: -25px;
                        background-image: url(../img/v2-shop-icon.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                    }
                }
                .res-chest-btn {
                    width: 160px;
                    height: 60px;
                    position: absolute;
                    top: 10px;
                    left: 220px;
                    cursor: pointer;
                    background: linear-gradient(0deg, #d67503 0%, #fdd2a0 100%);
                    box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2),
                        0 2px 4px rgba(0, 0, 0, 0.55);
                    border-radius: 6px;
                    &:active {
                        top: 11px;
                    }
                    .res-chest-btn-text {
                        width: 100px;
                        height: auto;
                        position: absolute;
                        top: 8px;
                        right: 5px;
                        color: #fff;
                        font-weight: bold;
                        font-size: 18px;
                        text-align: center;
                        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.55);
                        text-transform: uppercase;
                    }
                    .res-chest-btn-count {
                        width: 100px;
                        height: auto;
                        position: absolute;
                        top: 28px;
                        right: 5px;
                        color: #2f2d2d;
                        font-weight: bold;
                        font-size: 18px;
                        text-align: center;
                        text-shadow: 0 0 10px rgba(255, 255, 255, 0.85);
                        text-transform: uppercase;
                    }
                    &:before {
                        content: "";
                        width: 80px;
                        height: 80px;
                        position: absolute;
                        top: -10px;
                        left: -25px;
                        background-image: url(../img/change-sun1.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                    }
                }
            }
            .singinout-btn {
                position: absolute;
                top: 0;
                right: 90px;
                width: 80px;
                height: 80px;
                cursor: pointer;
                .icon-reg {
                    width: 70px;
                    height: 70px;
                    position: relative;
                    top: 5px;
                    left: 5px;
                    transition-delay: 1s;
                    transition: opacity 0.3s ease-in-out;
                    background-image: url(../img/reg-ic-01.png);
                    background-size: 100%;
                }
            }
        }
        .quest-box-all {
            width: 84px;
            height: 640px;
            position: absolute;
            top: 0;
            right: 0;
            background: linear-gradient(0deg, #584a49 0%, #3b302f 100%);
            z-index: 99;
            .quest-box-all-text {
                width: 100%;
                height: auto;
                position: absolute;
                top: 6px;
                color: #2f2d2d;
                font-weight: bold;
                font-size: 16px;
                text-align: center;
                text-shadow: 0 0 10px rgba(255, 255, 255, 0.85);
                text-transform: uppercase;
            }
            .quest-box-scroll {
                width: 80px;
                height: 556px;
                position: absolute;
                top: 2px;
                left: 2px;
                overflow: hidden;
                overflow-y: scroll;
                &::-webkit-scrollbar-track {
                    background-color: #251f1e;
                }
                &::-webkit-scrollbar {
                    width: 4px;
                }
                &::-webkit-scrollbar-thumb {
                    background: linear-gradient(
                        0deg,
                        #ffe199 0%,
                        #f4c657 18%,
                        #ffe199 60%,
                        #f4c557 85%,
                        #ffe199 100%
                    );
                }
                .quest-box {
                    width: 70px;
                    height: auto;
                    position: absolute;
                    top: 0;
                    left: 2px;
                    text-align: center;
                    font-size: 0;
                    list-style-type: none;
                    .quest {
                        width: 70px;
                        height: 70px;
                        position: relative;
                        display: inline-block;
                        cursor: pointer;
                        margin: 2px 0;
                        .icon {
                            width: 100%;
                            height: 100%;
                            top: initial;
                        }
                        .timerbox {
                            position: absolute;
                            bottom: 0px;
                            width: 60px;
                            height: 20px;
                            background-color: rgba(106, 0, 4, 0.7);
                            border-radius: 10px;
                            padding: 0 5px;
                            top: initial;
                            margin: 0;
                        }
                        .timer {
                            color: #fff;
                            font-size: 14px;
                            line-height: 21px;
                        }

                        &.reg-ic .icon-reg,
                        &.reg-ic .icon-reg2 {
                            width: 70px;
                            height: 70px;
                            position: absolute;
                            top: 0;
                            margin-left: 0;
                            transition-delay: 1s;
                            transition: opacity 0.3s ease-in-out;
                            background-image: url(../img/reg-ic-01.png);
                            background-size: 100%;
                        }
                        &.reg-ic .icon-reg2 {
                            opacity: 0;
                            background-image: url(../img/reg-ic-01-1.png);
                        }
                    }
                    .quest-fortune {
                        width: 70px;
                        height: 70px;
                        position: relative;
                        cursor: pointer;
                        margin: 2px 0;
                    }
                }
            }

            .opt-panel-box {
                width: 80px;
                height: auto;
                position: absolute;
                top: 560px;
                left: 2px;
                text-align: center;
                font-size: 0;
                .btn {
                    display: inline-block;
                    width: 28px;
                    height: 28px;
                    position: relative;
                    margin: 4px;
                    border-radius: 8px;
                    background: linear-gradient(
                        30deg,
                        #3d302a,
                        #9a817c,
                        #e2dcdc
                    );
                    box-shadow: inset 0 0 5px #000, inset 0 0 7px #9a817c,
                        0 1px 3px rgba(0, 0, 0, 0.55);
                    cursor: pointer;
                    &:after {
                        content: "";
                        display: block;
                        width: 23px;
                        height: 23px;
                        position: absolute;
                        left: 3px;
                        top: 3px;
                    }
                    &.feedback:after {
                        background-image: url(../img/ob-ico-5.png);
                        background-size: 23px;
                    }
                    &.statistic:after {
                        background-image: url(../img/ob-ico-6.png);
                        background-size: 23px;
                    }
                    &.en:after {
                        background-image: url(../img/lang-icon/uk-us.png);
                        background-size: 23px;
                    }
                    &.de:after {
                        background-image: url(../img/lang-icon/germany.png);
                        background-size: 23px;
                    }
                    &.fr:after {
                        background-image: url(../img/lang-icon/france.png);
                        background-size: 23px;
                    }
                    &.ru:after {
                        background-image: url(../img/lang-icon/russia.png);
                        background-size: 23px;
                    }
                    &.ja:after {
                        background-image: url(../img/lang-icon/japan.png);
                        background-size: 23px;
                    }
                    &.cn:after {
                        background-image: url(../img/lang-icon/china.png);
                        background-size: 23px;
                    }
                    &:hover {
                        transform: scale3d(1.05, 1.05, 1);
                    }
                    &:active {
                        transform: scale3d(0.98, 0.98, 1);
                    }
                }
            }
        }
        .boss-drop-box {
            width: 80px;
            height: 270px;
            position: absolute;
            // top: 120px;
            // left: 635px;
            background-color: #998277;
            border-radius: 10px;
            .bd-name {
                width: 100%;
                height: auto;
                position: absolute;
                top: 5px;
                left: 0;
                color: #fff;
                font-size: 12px;
                font-weight: bold;
                text-transform: uppercase;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
            }
            .bd-drops {
                width: 70px;
                height: 70px;
                position: absolute;
                top: 36px;
                left: 5px;
                background-color: #5d4e4c;
                box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.25);
                border-radius: 8px;
                .bd-stone {
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    top: 5px;
                    left: 5px;
                    > img {
                        width: 60px;
                    }
                }
                .bd-check-box {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    top: 48px;
                    left: 48px;
                    .bd-check {
                        width: 24px;
                        height: 24px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-image: url(../img/check-box.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                        display: none;
                    }
                    &.check {
                        .bd-check {
                            display: block;
                        }
                    }
                }
                &.two {
                    top: 114px;
                }
                &.chest {
                    top: 192px;
                    .bd-check-box1,
                    .bd-check-box2,
                    .bd-check-box3 {
                        width: 24px;
                        height: 24px;
                        position: absolute;
                        top: 48px;
                        left: 48px;
                        .bd-check {
                            width: 24px;
                            height: 24px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            background-image: url(../img/check-box.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                            display: none;
                        }
                        &.check {
                            .bd-check {
                                display: block;
                            }
                        }
                    }
                    .bd-check-box2 {
                        left: 23px;
                    }
                    .bd-check-box3 {
                        left: -2px;
                    }
                    .end-banner {
                        display: none;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        background: rgba(0, 0, 0, 0.55);
                        border-radius: 8px;
                        p {
                            margin: -22px;
                            padding: 0;
                            display: block;
                            height: 30px;
                            position: absolute;
                            left: 20px;
                            right: 20px;
                            top: 40px;
                            border-radius: 8px;
                            border: solid 2px #ffd700;
                            line-height: 30px;
                            font-size: 8px;
                            font-weight: bold;
                            color: #ffd700;
                            transform: rotate(-10deg);
                            text-align: center;
                            text-transform: uppercase;
                        }
                    }
                    &.received {
                        .end-banner {
                            display: block;
                        }
                    }
                }
            }
        }
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
                        > img {
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
                .heroes-list-all-box {
                    width: 620px;
                    height: 510px;
                    position: absolute;
                    top: 5px;
                    left: 0;
                    background: linear-gradient(0deg, #897165 0%, #584a49 100%);
                    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25);
                    &:before {
                        content: "";
                        width: 5px;
                        height: 510px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-color: #9c8b7c;
                        z-index: 999;
                    }
                    &:after {
                        content: "";
                        width: 620px;
                        height: 5px;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        background-color: #9c8b7c;
                        z-index: 999;
                    }
                    .dps-dpc-panel-box {
                        width: 460px;
                        height: 95px;
                        position: absolute;
                        top: 5px;
                        left: 25px;
                        .dpc,
                        .dps {
                            width: 200px;
                            height: 66px;
                            font-size: 18px;
                            font-weight: bold;
                            display: inline-block;
                            border-radius: 7px;
                            background: linear-gradient(
                                45deg,
                                #e8c34e,
                                #f1da7c,
                                #cfa831,
                                #fbf1d8
                            );
                            box-shadow: inset 0 -1px 2px #452b05,
                                0 0 2px #472624, 0 0 3px #472624;
                            margin: 12px;
                            position: relative;
                            margin-left: 16px;
                            .mlt-prm {
                                width: 135px;
                                height: 22px;
                                display: block;
                                border-radius: 5px;
                                background: linear-gradient(
                                    to right,
                                    #73524d,
                                    #db4d29,
                                    #db4d29,
                                    #db4d29,
                                    #73524d
                                );
                                position: absolute;
                                right: 5px;
                                top: 5px;
                                color: #fdfcc3;
                                line-height: 22px;
                                box-shadow: inset 0 11px 0px
                                        rgba(255, 255, 0, 0.11),
                                    inset 0 2px 1px #3d3737;
                                text-align: left;
                                padding-left: 20px;
                                text-shadow: 0 2px #4f261e;
                                &:before {
                                    width: 10px;
                                    height: 20px;
                                    margin-right: 3px;
                                    display: inline-block;
                                }
                            }
                            .value {
                                width: 135px;
                                height: 30px;
                                display: block;
                                position: absolute;
                                top: 30px;
                                right: 5px;
                                border-radius: 5px;
                                background-color: #564a4a;
                                color: #99e6f9;
                                font-size: 26px;
                                line-height: 30px;
                                text-shadow: 0 2px #000;
                                box-shadow: inset 0 11px 0px
                                        rgba(255, 255, 255, 0.08),
                                    inset 0 2px 1px #3d3737;
                                text-align: left;
                                padding-left: 20px;
                            }
                            .title {
                                width: 60px;
                                height: 30px;
                                display: block;
                                position: absolute;
                                left: -10px;
                                top: -3px;
                                border-radius: 60px;
                                border-bottom-left-radius: 20px;
                                border-bottom-right-radius: 20px;
                                box-shadow: 0 3px 0px #c87725,
                                    inset 0 3px 1px #ffa, 0 5px 0px #3d3737,
                                    2px 0 0px #3d3737;
                                background: linear-gradient(
                                    45deg,
                                    #e8c34e,
                                    #ffa,
                                    #cfa831,
                                    #fbf1d8
                                );
                                padding-top: 37px;
                                text-align: center;
                                color: #3a2423;
                                font-size: 25px;
                                font-weight: 900;
                                text-shadow: 0 0 1px #3a2423, 0 0 1px #3a2423,
                                    0 0 1px #3a2423, 1px 0 1px #000,
                                    1px 0 1px #000, 1px 0 1px #000;
                                &:before {
                                    content: "";
                                    width: 52px;
                                    height: 33px;
                                    display: block;
                                    position: absolute;
                                    top: 4px;
                                    left: 4px;
                                    border-radius: 46px;
                                    border-bottom-left-radius: 0;
                                    border-bottom-right-radius: 0;
                                    line-height: 26px;
                                    color: #ffa;
                                    background: #544741;
                                    box-shadow: inset 0 2px 3px #000;
                                    text-shadow: 0 2px 1px #000;
                                }
                                .icon-dpc,
                                .icon-dps {
                                    width: 54px;
                                    height: 54px;
                                    display: inline-block;
                                    position: absolute;
                                    left: 3px;
                                    top: -10px;
                                    background-image: url(../img/ico-click.png);
                                    background-size: 54px;
                                }
                                .icon-dps {
                                    background-image: url(../img/ico-sword.png);
                                    background-size: 54px;
                                }
                            }
                        }
                        .dps {
                            .x2-dps {
                                position: absolute;
                                top: 45px;
                                left: 41px;
                                text-shadow: 1px 1px 3px #4f261e,
                                    -1px -1px 3px #4f261e;
                                color: #fdfcc3;
                            }
                            .value {
                                top: 5px;
                                right: auto;
                                left: 5px;
                                text-align: right;
                                width: 135px;
                                padding: 0;
                                padding-right: 20px;
                            }
                            .mlt-prm {
                                top: 38px;
                                left: 5px;
                                right: auto;
                                width: 135px;
                                text-align: right;
                                padding: 0;
                                padding-right: 20px;
                            }
                            .title {
                                height: 71px;
                                left: auto;
                                right: -10px;
                                top: -3px;
                                border-radius: 60px;
                                border-top-left-radius: 20px;
                                border-top-right-radius: 20px;
                                padding-top: 1px;
                                text-align: center;
                                box-shadow: 0 3px 0px #c87725, 0 5px 0px #3d3737,
                                    -1px 0 0px #3d3737, inset 0 3px 1px #ffa;
                                &:before {
                                    content: "";
                                    display: block;
                                    width: 52px;
                                    height: 37px;
                                    border-radius: 46px;
                                    border-top-left-radius: 0;
                                    border-top-right-radius: 0;
                                    top: auto;
                                    bottom: 5px;
                                }
                                .icon-dps {
                                    background-image: url(../img/ico-sword.png);
                                    background-size: 54px;
                                    top: 23px;
                                    left: 3px;
                                }
                            }
                        }
                    }
                    .all-heroes-box {
                        width: 500px;
                        height: 350px;
                        position: absolute;
                        top: 100px;
                        left: 10px;
                        background-color: #9c8b7c;
                        .all-heroes-box-scroll {
                            width: 490px;
                            height: 330px;
                            position: absolute;
                            top: 10px;
                            left: 5px;
                            overflow: hidden;
                            overflow-y: scroll;
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
                            .hero-card-box-all {
                                width: 480px;
                                font-size: 0;
                                .new-heroes-box {
                                    width: 100%;
                                    position: relative;
                                    display: inline-block;
                                    top: 10px;
                                    .new-heroes-title {
                                        width: 480px;
                                        height: 30px;
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        background: linear-gradient(
                                            0deg,
                                            #897165 0%,
                                            #584a49 100%
                                        );
                                        color: #fcfcc0;
                                        font-size: 14px;
                                        font-weight: bold;
                                        text-align: center;
                                        text-transform: uppercase;
                                        line-height: 30px;
                                        text-shadow: 0 1px 2px
                                            rgba(0, 0, 0, 0.35);
                                        &:before {
                                            content: "";
                                            width: 30px;
                                            height: 30px;
                                            position: absolute;
                                            top: 0;
                                            left: 6px;
                                            background-image: url(../img/lock-gold1.png);
                                            background-size: 100%;
                                            background-repeat: no-repeat;
                                        }
                                        &:after {
                                            content: "";
                                            width: 30px;
                                            height: 30px;
                                            position: absolute;
                                            top: 0;
                                            right: 6px;
                                            background-image: url(../img/lock-gold1.png);
                                            background-size: 100%;
                                            background-repeat: no-repeat;
                                        }
                                    }
                                    .new-heroes {
                                        width: 100%;
                                        height: auto;
                                        position: relative;
                                        display: inline-block;
                                        top: 36px;
                                    }
                                }
                                .hero-card {
                                    width: 230px;
                                    height: 130px;
                                    position: relative;
                                    display: inline-block;
                                    background-color: #5d5252;
                                    margin: 5px;
                                    border-radius: 10px;
                                    box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.15),
                                        0 2px 4px rgba(0, 0, 0, 0.35);
                                    .hero-avatar-box {
                                        width: 98px;
                                        height: 111px;
                                        position: absolute;
                                        top: 8px;
                                        left: 6px;
                                        border-radius: 6px;
                                        background: linear-gradient(
                                            180deg,
                                            #8e7453 0%,
                                            #e3c7a3 50%,
                                            #8f7553 70%,
                                            #ae916a 85%,
                                            #8f7553 100%
                                        );
                                        box-shadow: 0 1px 2px
                                            rgba(0, 0, 0, 0.35);
                                        .hero-avatar {
                                            width: 90px;
                                            height: 103px;
                                            position: absolute;
                                            top: 4px;
                                            left: 4px;
                                            border-radius: 4px;
                                            overflow: hidden;
                                        }
                                        .sh2-icon-forgirl {
                                            width: 25px;
                                            height: 32px;
                                            position: absolute;
                                            top: 0px;
                                            left: 2px;
                                            > img {
                                                width: 25px;
                                            }
                                        }
                                    }
                                    .hero-level-box,
                                    .hero-dps-box {
                                        width: 109px;
                                        height: 18px;
                                        position: absolute;
                                        top: 8px;
                                        right: 6px;
                                        background: linear-gradient(
                                            90deg,
                                            #92633b 0%,
                                            #d24b1f 50%,
                                            #93633b 100%
                                        );
                                        box-shadow: inset 0 10px 0
                                                rgba(255, 255, 255, 0.1),
                                            0 1px 1px rgba(0, 0, 0, 0.15);
                                        color: #fff;
                                        font-size: 12px;
                                        font-weight: bold;
                                        text-transform: uppercase;
                                        line-height: 18px;
                                        padding-left: 5px;
                                        .hero-level,
                                        .hero-dps {
                                            width: 50px;
                                            height: auto;
                                            position: absolute;
                                            right: 8px;
                                            top: 0;
                                            color: #fcfcc0;
                                            font-size: 14px;
                                            font-weight: bold;
                                            text-shadow: 0 1px 2px
                                                rgba(0, 0, 0, 0.35);
                                            line-height: 18px;
                                            text-align: right;
                                        }
                                    }
                                    .hero-dps-box {
                                        top: 27px;
                                        background: linear-gradient(
                                            90deg,
                                            #475660 0%,
                                            #3474a1 50%,
                                            #475661 100%
                                        );
                                    }
                                    .hero-name-box {
                                        width: 114px;
                                        height: 30px;
                                        position: absolute;
                                        top: 47px;
                                        right: 6px;
                                        display: table;
                                        .hero-name {
                                            color: #fff;
                                            font-size: 12px;
                                            font-weight: bold;
                                            text-align: center;
                                            display: table-cell;
                                            vertical-align: middle;
                                        }
                                    }
                                    .color-btn.green {
                                        width: 114px;
                                        position: absolute;
                                        top: 79px;
                                        right: 6px;
                                        .color-btn-text.gold {
                                            color: #222222;
                                            text-shadow: 0 0 0;
                                            font-size: 16px;
                                            top: 0px;
                                            .f-gold {
                                                &:before {
                                                    content: "";
                                                    width: 18px;
                                                    height: 18px;
                                                    position: relative;
                                                    display: inline-block;
                                                    background-image: url(../img/ico-gold.png);
                                                    background-size: 100%;
                                                    margin: 0 4px 0 4px;
                                                    vertical-align: middle;
                                                    top: -2px;
                                                }
                                            }
                                        }
                                        .color-btn-text {
                                            top: 0;
                                        }
                                        &:active {
                                            box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                                                inset 0 2px 2px
                                                    rgba(0, 0, 0, 0.2);
                                            .color-btn-text {
                                                top: 1px;
                                            }
                                        }
                                    }
                                    .hero-abil-icon {
                                        width: 50px;
                                        height: 50px;
                                        position: absolute;
                                        top: 74px;
                                        left: 28px;
                                        border-radius: 10px;
                                        overflow: hidden;
                                        border: 2px solid #fcd885;
                                        box-shadow: 0 2px 4px
                                            rgba(0, 0, 0, 0.55);
                                        > img {
                                            width: 50px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .x2-btn-all-box {
                        width: 500px;
                        height: 40px;
                        background-color: #6b5f55;
                        position: absolute;
                        bottom: 12px;
                        left: 10px;
                        background: linear-gradient(
                            0deg,
                            #897165 0%,
                            #584a49 100%
                        );
                        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25);
                        border-radius: 10px;
                        text-align: center;
                        .x2-btn {
                            width: 90px;
                            height: 26px;
                            position: relative;
                            display: inline-block;
                            background: linear-gradient(
                                0deg,
                                #62a3e5 0%,
                                #b4d7fa 100%
                            );
                            border-radius: 6px;
                            margin: 0 2px 0 2px;
                            top: 6px;
                            box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25),
                                0 2px 4px rgba(0, 0, 0, 0.55);
                            cursor: pointer;
                            .x2-btn-text {
                                color: #fff;
                                font-size: 16px;
                                font-weight: bold;
                                text-align: center;
                                position: relative;
                                top: 2px;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
                            }
                            &:active,
                            &.selected {
                                background: linear-gradient(
                                    0deg,
                                    #7cbc30 0%,
                                    #baf279 100%
                                );
                                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25),
                                    inset 0 -2px 0 rgba(0, 0, 0, 0.25),
                                    0 0 6px rgba(0, 0, 0, 0.25);
                                .x2-btn-text {
                                    top: 3px;
                                    color: #fff;
                                }
                            }
                            &.selected {
                                cursor: default;
                            }
                        }
                    }
                }
                .skills-all-box {
                    width: 90px;
                    height: 510px;
                    position: absolute;
                    top: 5px;
                    right: 10px;
                    background-color: #c4b6ad;
                    .skills-all {
                        width: 64px;
                        height: auto;
                        position: absolute;
                        top: 8px;
                        left: 13px;
                        font-size: 0;
                        .skills-pic {
                            width: 64px;
                            height: 64px;
                            position: relative;
                            display: inline-block;
                            cursor: pointer;
                            background: linear-gradient(
                                0deg,
                                #e9c44f 0%,
                                #f7eec7 100%
                            );
                            box-shadow: inset 0 -5px 0 rgba(160, 79, 0, 0.35),
                                0 2px 4px rgba(0, 0, 0, 0.55);
                            border-radius: 10px;
                            margin-bottom: 7px;
                            > img {
                                position: absolute;
                                top: 5px;
                                left: 6px;
                            }
                            &:active {
                                top: 1px;
                            }
                            .skills-pic-disabled {
                                width: 64px;
                                height: 64px;
                                position: absolute;
                                top: 0;
                                left: 0;
                                display: none;
                                background-color: rgba(0, 0, 0, 0.55);
                                border-radius: 10px;
                                &:before {
                                    content: "";
                                    width: 40px;
                                    height: 40px;
                                    position: absolute;
                                    top: 12px;
                                    left: 12px;
                                    background-image: url(../img/lock-gold1.png);
                                    background-size: 100%;
                                    background-repeat: no-repeat;
                                }
                            }
                            &.disabled {
                                .skills-pic-disabled {
                                    display: block;
                                }
                            }
                        }
                    }
                }
            }
        }
        .right-side {
            width: 474px;
            height: 530px;
            top: 100px;
            right: 93px;
            // background-color: red;
            .world-portal {
                position: absolute;
                top: 6px;
                right: 2px;
                cursor: pointer;
                z-index: 1;
                width: 100px;
                height: 100px;
                transform: scale(0.98);
                filter: brightness(100%);
                &:hover {
                    transform: scale(1);
                    filter: brightness(110%);
                }
                &:active {
                    transform: scale(0.98);
                    filter: brightness(100%);
                }
                > img {
                    width: 100%;
                    filter: drop-shadow(0 5px 3px rgba(0, 2, 100, 0.5));
                }
                .pretty-holder {
                    background-image: url(../img/facia-1.png);
                    width: 110px;
                    height: 30px;
                    position: absolute;
                    background-size: cover;
                    background-repeat: no-repeat;
                    filter: drop-shadow(0 5px 3px rgba(0, 2, 100, 0.5));
                }
                .pretty-holder.world {
                    z-index: 1;
                    line-height: 30px;
                    font-size: 13px;
                    color: #fff;
                    font-weight: 700;
                    text-transform: capitalize;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
                    bottom: 0px;
                    left: -5px;
                }
            }
            .monster {
                top: 0;
            }
            .monster-prg-box-all {
                width: 430px;
                height: 84px;
                position: absolute;
                bottom: 10px;
                left: 22px;
                .lvl-prg {
                    width: auto;
                    height: 24px;
                    position: absolute;
                    top: -40px;
                    right: -20px;
                    border-radius: 24px;
                    line-height: 24px;
                    padding: 0px 50px 0 15px;
                    color: #fff;
                    font-size: 18px;
                    font-weight: bold;
                    border: solid 3px #a88a7f;
                    background: #3d3634;
                    box-shadow: 0 2px 3px #40372e, 0 3px 3px #40372e;
                    &:before {
                        content: "";
                        width: 50px;
                        height: 50px;
                        position: absolute;
                        right: -5px;
                        bottom: 5px;
                        background-image: url(../img/scul.png);
                        background-size: 50px;
                    }
                }
                .name {
                    width: 100%;
                    height: auto;
                    position: absolute;
                    top: -34px;
                    left: 0;
                    color: #fff;
                    font-size: 22px;
                    font-weight: bold;
                    text-transform: capitalize;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                }
                .health {
                    width: 370px;
                    height: 46px;
                    position: absolute;
                    top: 3px;
                    right: 0;
                    background: linear-gradient(0deg, #584a49 0%, #3b302f 100%);
                    background: linear-gradient(
                        0deg,
                        #ffe199 0%,
                        #f4c657 18%,
                        #ffe199 60%,
                        #f4c557 85%,
                        #ffe199 100%
                    );
                    border-radius: 12px;
                    &:before {
                        content: "";
                        width: 367px;
                        height: 40px;
                        position: absolute;
                        top: 3px;
                        left: 0;
                        background: linear-gradient(
                            0deg,
                            #584a49 0%,
                            #3b302f 100%
                        );
                        border-radius: 10px;
                    }
                    .p100 {
                        width: 200px;
                        height: 36px;
                        position: absolute;
                        top: 5px;
                        right: 5px;
                        .prg {
                            width: 100%;
                            height: 36px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            background: linear-gradient(
                                90deg,
                                #f1540e 0%,
                                #fff837 100%
                            );
                            border-radius: 8px;
                            box-shadow: inset 0 18px 0 rgba(255, 255, 255, 0.15);
                        }
                    }
                    .num {
                        width: 150px;
                        height: 36px;
                        position: absolute;
                        top: 5px;
                        left: 10px;
                        background: linear-gradient(
                            90deg,
                            #475660 0%,
                            #3474a1 50%,
                            #475661 100%
                        );
                        &:before {
                            content: "";
                            width: 44px;
                            height: 44px;
                            position: absolute;
                            right: -30px;
                            top: -4px;
                            background-image: url(../img/heart1.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                        .from,
                        .to {
                            height: 36px;
                            top: 0;
                            left: 0;
                            display: inline-block;
                            position: relative;
                            color: #e8f1a6;
                            font-size: 18px;
                            line-height: 36px;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                        }
                        .to {
                            color: #bce4f3;
                            &:before {
                                content: "/";
                                display: inline-block;
                            }
                        }
                    }
                }
                .timer {
                    width: 370px;
                    height: 30px;
                    position: absolute;
                    top: 50px;
                    right: 0;
                    background: linear-gradient(0deg, #584a49 0%, #3b302f 100%);
                    background: linear-gradient(
                        0deg,
                        #ffe199 0%,
                        #f4c657 18%,
                        #ffe199 60%,
                        #f4c557 85%,
                        #ffe199 100%
                    );
                    border-radius: 12px;
                    &:before {
                        content: "";
                        width: 367px;
                        height: 24px;
                        position: absolute;
                        top: 3px;
                        left: 0;
                        background: linear-gradient(
                            0deg,
                            #584a49 0%,
                            #3b302f 100%
                        );
                        border-radius: 10px;
                    }
                    .p100 {
                        width: 200px;
                        height: 36px;
                        position: absolute;
                        top: 5px;
                        right: 5px;
                        .prg {
                            width: 100%;
                            height: 20px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            background: linear-gradient(
                                90deg,
                                #2c6db0 0%,
                                #69b6f0 100%
                            );
                            border-radius: 8px;
                            box-shadow: inset 0 10px 0 rgba(255, 255, 255, 0.15);
                        }
                    }
                    .time {
                        width: 155px;
                        height: 20px;
                        position: absolute;
                        top: 5px;
                        left: 10px;
                        background: linear-gradient(
                            90deg,
                            #475660 0%,
                            #3474a1 50%,
                            #475661 100%
                        );
                        &:before {
                            content: "";
                            width: 22px;
                            height: 22px;
                            position: absolute;
                            right: -14px;
                            top: -1px;
                            background-image: url(../img/clock2.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                        .txt {
                            height: 20px;
                            top: 0;
                            left: 0;
                            display: inline-block;
                            position: relative;
                            color: #e8f1a6;
                            font-size: 18px;
                            line-height: 20px;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                        }
                    }
                }
                .loc-list {
                    width: 80px;
                    height: 84px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.55);
                    border-radius: 10px;
                    overflow: hidden;
                    .loc-back {
                        width: 80px;
                        height: 84px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.55);
                        background: linear-gradient(
                            0deg,
                            #ffe199 0%,
                            #f4c657 18%,
                            #ffe199 60%,
                            #f4c557 85%,
                            #ffe199 100%
                        );
                        border-radius: 10px;
                        cursor: pointer;
                        display: none;
                        .lvl-prg-num,
                        .lvl-prg-text,
                        .lvl-prg-back {
                            width: 60px;
                            height: auto;
                            position: absolute;
                            top: 10px;
                            left: 10px;
                            color: #2f2d2d;
                            font-size: 18px;
                            font-weight: bold;
                            text-shadow: 0 0 10px rgba(255, 255, 255, 0.85);
                        }
                        .lvl-prg-text {
                            font-size: 30px;
                            top: 26px;
                        }
                        .lvl-prg-back {
                            font-size: 12px;
                            top: 64px;
                            text-transform: uppercase;
                        }
                    }
                    .locs {
                        width: 80px;
                        position: absolute;
                        padding-top: 22px;
                        background: linear-gradient(
                            0deg,
                            #ffe199 0%,
                            #f4c657 18%,
                            #ffe199 60%,
                            #f4c557 85%,
                            #ffe199 100%
                        );
                        cursor: pointer;
                        &:after {
                            content: "";
                            width: 0;
                            height: 0;
                            position: absolute;
                            top: 6px;
                            left: 30px;
                            border-left: 10px solid transparent;
                            border-bottom: 10px solid #2f2d2d;
                            border-right: 10px solid transparent;
                        }
                        .loc {
                            width: 56px;
                            height: 56px;
                            position: relative;
                            display: inline-block;
                            margin: 0 12px 10px 12px;
                            background: linear-gradient(
                                0deg,
                                #e9c44f 0%,
                                #f7eec7 100%
                            );
                            box-shadow: inset 0 -5px 0 rgba(160, 79, 0, 0.35),
                                0 2px 4px rgba(0, 0, 0, 0.55);
                            border-radius: 10px;
                            .loc-text,
                            .loc-text2 {
                                width: 56px;
                                height: auto;
                                position: absolute;
                                top: 2px;
                                left: 0;
                                text-align: center;
                                color: #2f2d2d;
                                font-size: 18px;
                                font-weight: bold;
                                text-shadow: 0 0 10px rgba(255, 255, 255, 0.85);
                            }
                            .loc-text2 {
                                font-size: 24px;
                                text-transform: uppercase;
                                top: 20px;
                            }
                        }
                    }
                    &.opened {
                        animation: "loc-list-anim-open 0.25s ease 0s 1 forwards";
                        .locs {
                            top: auto;
                            &:after {
                                content: "";
                                width: 0;
                                height: 0;
                                position: absolute;
                                top: 6px;
                                left: 30px;
                                border-left: 10px solid transparent;
                                border-top: 10px solid #2f2d2d;
                                border-bottom: 10px solid transparent;
                                border-right: 10px solid transparent;
                            }
                        }
                    }
                    &.back {
                        .loc-back {
                            display: block;
                        }
                        .locs {
                            display: none;
                        }
                    }
                    @keyframes loc-list-anim-open {
                        0% {
                            height: 90px;
                        }
                        100% {
                            height: 435px;
                        }
                    }
                }
            }
            .back-boss-box {
                width: 220px;
                height: 50px;
                position: absolute;
                top: 320px;
                left: 130px;
                .color-btn {
                    width: 220px;
                    height: 50px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    .color-btn-text {
                        top: 12px;
                        color: #2f2d2d;
                        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.75);
                        font-size: 18px;
                        font-weight: bold;
                        text-align: center;
                        text-transform: uppercase;
                    }
                    &:active {
                        .color-btn-text {
                            top: 13px;
                        }
                        &:before,
                        &:after {
                            content: "";
                            top: 6px;
                        }
                    }
                    &:before {
                        content: "";
                        width: 36px;
                        height: 36px;
                        position: absolute;
                        top: 5px;
                        left: 5px;
                        background-image: url(../img/cor-1.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                    }
                    &:after {
                        content: "";
                        width: 36px;
                        height: 36px;
                        position: absolute;
                        top: 5px;
                        right: 5px;
                        background-image: url(../img/cor-1.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                    }
                }
            }
        }
        .popup-layer {
            .popup-in {
                .m-popup {
                    top: 52px;
                    height: 530px;
                    &:before {
                        background: #840d0d;
                    }
                    .title {
                        color: #921b00;
                        &:before {
                            content: "";
                            display: block;
                            width: 38px;
                            height: 38px;
                            background-image: url(../img/login-icon-big.png);
                            background-size: 38px;
                            position: absolute;
                            left: 8px;
                            top: 8px;
                        }
                        .btn-title {
                            display: inline-block;
                            width: 180px;
                            cursor: pointer;
                            border-radius: 10px 10px 0 0;
                            border-radius: 10px;
                            line-height: 41px;
                            position: relative;
                            top: -2px;
                            // background: linear-gradient(#ffb229, #ffe3ab);
                            background: rgba(255, 255, 255, 0.3);
                            box-shadow: inset 0 1px 1px 1px
                                    rgba(255, 255, 255, 0.6),
                                0 1px 2px rgba(0, 0, 0, 0.4),
                                0 0 0 2px #ffb12998;
                        }
                    }
                    .color-box {
                        &:before {
                            background: linear-gradient(
                                to right,
                                #400,
                                #ff5f5f,
                                #400
                            );
                        }
                        &:after {
                            background: linear-gradient(
                                to bottom,
                                #400,
                                #ff5f5f,
                                #400
                            );
                        }
                    }
                    .content.sign-in1 {
                        .sign-in-form {
                            .block-a {
                                background: #efe0a1;
                                box-shadow: 0 0 15px #400;
                            }
                            .btn-simple-gold.btn-ok {
                                bottom: -224px;
                                margin-top: unset;
                            }
                        }
                    }
                    .content.sign-up2 {
                        margin-top: 70px;
                        margin-bottom: 20px;
                        .text-1 {
                            font-size: 20px;
                            font-weight: bold;
                            color: #ffc;
                            line-height: 22px;
                            text-shadow: 0 1px 2px #300, 0 1px 15px #300,
                                0 1px 20px #300;
                        }
                        .megapack-banner {
                            height: 164px;
                            background: linear-gradient(
                                to right,
                                #400,
                                #ff4c00,
                                #c00,
                                #400
                            );
                            margin-left: -25px;
                            margin-right: -25px;
                            border-radius: 20px;
                            border-top: solid 7px #ff7;
                            border-bottom: solid 7px #ff7;
                            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.33),
                                0 0 2px #400, inset 0 0 15px #600,
                                inset 0 0 25px #300;
                            margin-top: 10px;
                            text-align: center;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            .g1,
                            .g2,
                            .g3 {
                                width: 120px;
                                height: 40px;
                                border-radius: 100%;
                                position: relative;
                                background-color: #400;
                                margin: 0px 10px;
                                font-size: 30px;
                                font-weight: bold;
                                color: #ffa;
                                white-space: nowrap;
                                line-height: 35px;
                                padding-top: 80px;
                                text-shadow: 0 0 5px #500, 0 0 5px #500,
                                    0 0 5px #500, 0 0 5px #500, 0 0 3px #ff0;
                                border: solid 3px #d30;
                                box-shadow: 0 0 15px #300, 0 0 25px #900;
                                background-image: url(../img/ser-ban-3.jpg);
                                background-size: 120px;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                .num {
                                    font-size: 30px;
                                    font-weight: bold;
                                    white-space: nowrap;
                                    line-height: 35px;
                                    text-shadow: 0 0 5px #500, 0 0 5px #500,
                                        0 0 5px #500, 0 0 5px #500, 0 0 3px #ff0;
                                    display: block;
                                    height: 20px;
                                    color: #ff7;
                                }
                                .txt {
                                    font-weight: bold;
                                    color: #ffa;
                                    white-space: nowrap;
                                    text-shadow: 0 0 5px #500, 0 0 5px #500,
                                        0 0 5px #500, 0 0 5px #500, 0 0 3px #ff0;
                                    line-height: 42px;
                                    font-size: 18px;
                                    text-transform: uppercase;
                                    display: block;
                                }
                            }
                            .g2 {
                                width: 150px;
                                height: 75px;
                                .num {
                                    font-size: 40px;
                                    line-height: 52px;
                                }
                                .txt {
                                    font-size: 22px;
                                    line-height: 74px;
                                }
                            }
                        }
                        .sign-up-form {
                            display: block;
                            position: relative;
                            margin: 0;
                            margin-top: 15px;
                            .block-a {
                                display: block;
                                position: relative;
                                margin-left: 25px;
                                margin-right: 25px;
                                border-radius: 10px;
                                box-shadow: 0 0 15px #400;
                                background: #efe0a1;
                                padding: 10px 20px 10px 20px;
                                line-height: 22px;
                                font-size: 16px;
                                font-weight: bold;
                                color: #413530;
                                .tfield {
                                    display: block;
                                    font-size: 16px;
                                    text-align: left;
                                    .error {
                                        color: #900;
                                        float: right;
                                        display: none;
                                    }
                                    .itext {
                                        display: block;
                                        width: calc(100% - 20px);
                                        height: 30px;
                                        background: linear-gradient(
                                            to bottom,
                                            #6a5952,
                                            #c3afa7
                                        );
                                        border: none;
                                        border-radius: 7px;
                                        font-family: "Roboto", sans-serif;
                                        font-size: 16px;
                                        font-weight: bold;
                                        color: #413530;
                                        padding: 3px 10px;
                                        box-shadow: inset 0 2px 0px #413530,
                                            inset 0 19px 0px
                                                rgba(246, 224, 213, 0.14);
                                        text-align: center;
                                    }
                                    .verifyHelp {
                                        line-height: 22px;
                                        font-weight: bold;
                                        font-size: 16px;
                                        text-align: center;
                                        text-decoration: inherit;
                                        color: inherit;
                                        display: inline-block;
                                        padding: 3px 10px;
                                        background: #cfb150;
                                        border-radius: 20px;
                                    }
                                }
                                .tfield.check {
                                    padding-top: 15px;
                                }
                            }
                            .btn-simple-gold.btn-ok {
                                display: inline-block;
                                position: relative;
                                top: auto;
                                bottom: auto;
                                margin-top: 20px;
                                margin-bottom: 10px;
                            }
                        }
                    }
                }
                .m-popup.sign-in {
                    &:after {
                        content: "";
                        height: 280px;
                        width: 310px;
                        position: absolute;
                        left: 146px;
                        bottom: 10px;
                        background: url(../img/break-girl27.png);
                    }
                    .title {
                        .btn-title.sign-in {
                            background: rgba(0, 0, 0, 0.1);
                            box-shadow: inset 0 1px 2px 2px
                                    rgba(51, 35, 0, 0.24),
                                0 1px 2px rgba(255, 255, 255, 0.8);
                        }
                    }
                    .content.sign-up2 {
                        display: none;
                    }
                    .content {
                        z-index: +1;
                    }
                }
                .m-popup.registration {
                    .title {
                        .btn-title.registration {
                            background: rgba(0, 0, 0, 0.1);
                            box-shadow: inset 0 1px 2px 2px
                                    rgba(51, 35, 0, 0.24),
                                0 1px 2px rgba(255, 255, 255, 0.8);
                        }
                    }
                    .content.sign-in1 {
                        display: none;
                    }
                }
            }
        }
    }

    .btn {
        &:hover {
            filter: brightness(110%);
        }
        &:active {
            transform: scale(0.96);
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
    }
`;

export { stylesFileName, pageStyles };
