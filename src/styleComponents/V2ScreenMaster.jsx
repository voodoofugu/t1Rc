import { styled, css } from "styled-components";

const V2ScreenMasterStyles = css`
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
                        width: 1106px;
                    }
                    .tab-panel-box.master {
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
                        .leftside-box-all {
                            width: 290px;
                            height: 462px;
                            position: absolute;
                            top: 39px;
                            left: 10px;
                            background: linear-gradient(
                                180deg,
                                #c68300 0%,
                                #f4dfb6 50%,
                                #c68200 70%,
                                #fad489 85%,
                                #c78302 100%
                            );
                            border-radius: 10px;
                            box-shadow: 0 0 6px #48382b;
                            .master-box {
                                width: 280px;
                                height: 410px;
                                position: absolute;
                                top: 5px;
                                left: 5px;
                                background-color: red;
                                border-radius: 6px;
                                overflow: hidden;
                                img {
                                    width: 280px;
                                }
                            }
                            .master-name-box-all {
                                width: 290px;
                                height: 54px;
                                position: absolute;
                                bottom: 0;
                                background: linear-gradient(
                                    180deg,
                                    #d4b354 0%,
                                    #f3d88d 85%,
                                    #c3a246 86%,
                                    #b9993f 100%
                                );
                                border-radius: 0 0 10px 10px;
                                .master-name-box {
                                    width: 240px;
                                    height: 34px;
                                    position: absolute;
                                    top: 6px;
                                    left: 25px;
                                    background-color: #c6a855;
                                    border-radius: 6px;
                                    box-shadow: inset 0 0 12px
                                        rgba(0, 0, 0, 0.2);
                                    .master-name {
                                        width: 195px;
                                        height: 34px;
                                        position: absolute;
                                        left: 10px;
                                        text-transform: capitalize;
                                        line-height: 34px;
                                        text-shadow: 0 0 10px
                                            rgba(0, 0, 0, 0.75);
                                        text-align: center;
                                        font-size: 18px;
                                        color: #fff;
                                    }
                                    .btn-edit-small,
                                    .btn-enter-small {
                                        width: 34px;
                                        height: 34px;
                                        position: absolute;
                                        top: -4px;
                                        right: -39px;
                                        cursor: pointer;
                                        background-image: url(../img/btn-edit-small.png);
                                        background-size: 100%;
                                        &:active {
                                            top: -3px;
                                        }
                                    }
                                    .btn-enter-small {
                                        background-image: url(../img/btn-enter-small.png);
                                    }
                                    .btn-enter-small {
                                        display: none;
                                    }
                                    .master-name-edit {
                                        display: none;
                                    }
                                    &.edit {
                                        .master-name {
                                            display: none;
                                        }
                                        .btn-edit-small {
                                            display: none;
                                        }
                                        .btn-enter-small {
                                            display: block;
                                            top: 1px;
                                            left: 205px;
                                            &:active {
                                                top: 2px;
                                            }
                                        }
                                        .master-name-edit {
                                            display: block;
                                            width: 195px;
                                            height: 32px;
                                            position: absolute;
                                            left: 10px;
                                            text-transform: capitalize;
                                            border: none;
                                            background-color: rgba(
                                                255,
                                                255,
                                                255,
                                                0
                                            );
                                            line-height: 34px;
                                            text-shadow: 0 0 10px
                                                rgba(0, 0, 0, 0.75);
                                            text-align: center;
                                            color: #fff;
                                            font-size: 18px;
                                        }
                                    }
                                }
                            }
                        }
                        .rightside-box-all {
                            width: 770px;
                            height: 462px;
                            position: absolute;
                            top: 39px;
                            right: 10px;
                            .master-tab-box {
                                width: 770px;
                                height: 30px;
                                position: absolute;
                                top: 0;
                                left: 0;
                                &:before {
                                    content: "";
                                    width: 770px;
                                    height: 10px;
                                    position: absolute;
                                    top: 30px;
                                    background-color: #9c8b7c;
                                }
                                .mtab-btn {
                                    width: 380px;
                                    height: 30px;
                                    position: absolute;
                                    text-align: center;
                                    border-radius: 10px 10px 0 0;
                                    background-color: #8f7a6b;
                                    box-shadow: inset 0 -4px 2px rgba(0, 0, 0, 0.1);
                                    cursor: pointer;
                                    a {
                                        width: 100%;
                                        height: 100%;
                                        display: block;
                                    }
                                    .btn-text {
                                        color: #fff;
                                        font-size: 18px;
                                        font-weight: bold;
                                        line-height: 30px;
                                        text-transform: uppercase;
                                        text-shadow: 0 1px 2px
                                            rgba(0, 0, 0, 0.65);
                                    }
                                    &.active {
                                        background-color: #9c8b7c;
                                        box-shadow: none;
                                    }
                                    &.abil {
                                        right: 0;
                                    }
                                }
                            }
                            .stats-box-all {
                                width: 770px;
                                height: 422px;
                                position: absolute;
                                top: 40px;
                                left: 0;
                                text-align: center;
                                background-color: #9c8b7c;
                                .stats-box {
                                    width: 180px;
                                    height: 410px;
                                    position: relative;
                                    display: inline-block;
                                    background-color: #8f7a6b;
                                    margin: 0 2px 0 2px;
                                    .st-ic-box-all {
                                        width: 100%;
                                        height: 36px;
                                        position: absolute;
                                        background-color: #786659;
                                        .st-icon {
                                            width: 30px;
                                            height: 30px;
                                            position: relative;
                                            display: inline-block;
                                            background-image: url(../img/ms-hand.png);
                                            background-size: 100%;
                                            top: 3px;
                                            &.char {
                                                background-image: url(../img/ms-lips.png);
                                            }
                                            &.int {
                                                background-image: url(../img/ms-lamp.png);
                                            }
                                            &.lck {
                                                background-image: url(../img/ms-podk.png);
                                            }
                                        }
                                        .st-text {
                                            position: relative;
                                            display: inline-block;
                                            color: #fff;
                                            text-shadow: 0 1px 2px
                                                rgba(0, 0, 0, 0.65);
                                            font-size: 20px;
                                            font-weight: bold;
                                            top: -5px;
                                            margin-left: 4px;
                                        }
                                    }
                                    .stone-box-all {
                                        width: 120px;
                                        height: 120px;
                                        position: absolute;
                                        top: 41px;
                                        left: 30px;
                                        background: linear-gradient(
                                            180deg,
                                            #585a5c 0%,
                                            #d5d8da 50%,
                                            #585a5b 70%,
                                            #a1a4a6 85%,
                                            #585a5b 100%
                                        );
                                        border-radius: 10px;
                                        box-shadow: 0 2px 4px
                                            rgba(0, 0, 0, 0.35);
                                        .stone {
                                            width: 100px;
                                            height: 100px;
                                            position: absolute;
                                            top: 6px;
                                            left: 10px;
                                            background-image: url(../img/ms-stone-orange.png);
                                            &.char {
                                                background-image: url(../img/ms-stone-blue.png);
                                            }
                                            &.int {
                                                background-image: url(../img/ms-stone-green.png);
                                            }
                                            &.lck {
                                                background-image: url(../img/ms-stone-pink.png);
                                            }
                                            &.all {
                                                background-image: url(../img/ms-stone-all.png);
                                            }
                                        }

                                        .energy {
                                            width: 100px;
                                            height: 100px;
                                            position: absolute;
                                            top: 6px;
                                            left: 10px;
                                            background-image: url(../img/v2-icon-energy.png);
                                        }
                                        .stone-stat {
                                            width: 100%;
                                            height: 28px;
                                            position: absolute;
                                            top: 92px;
                                            background-color: rgba(
                                                0,
                                                0,
                                                0,
                                                0.25
                                            );
                                            @include prefix(
                                                border-radius,
                                                0 0 10px 10px
                                            );
                                            line-height: 28px;
                                            color: #fff;
                                            text-shadow: 0 1px 2px
                                                rgba(0, 0, 0, 0.65);
                                            font-size: 18px;
                                            font-weight: bold;
                                        }
                                    }
                                    .st-bonus-box {
                                        width: 100%;
                                        height: 60px;
                                        position: absolute;
                                        top: 166px;
                                        .st-bonus-name {
                                            width: 100%;
                                            height: 26px;
                                            position: absolute;
                                            background-color: #786659;
                                            color: #d5c4b9;
                                            text-shadow: 0 1px 2px
                                                rgba(0, 0, 0, 0.65);
                                            text-transform: uppercase;
                                            font-size: 14px;
                                            font-weight: bold;
                                            line-height: 26px;
                                        }
                                        .st-bonus {
                                            width: 100%;
                                            height: 34px;
                                            position: absolute;
                                            top: 26px;
                                            text-transform: uppercase;
                                            color: #fff;
                                            text-shadow: 0 1px 2px
                                                rgba(0, 0, 0, 0.65);
                                            font-size: 20px;
                                            font-weight: bold;
                                            line-height: 34px;
                                            &.animation {
                                                animation: st-bonus-anim 0.55s
                                                    ease-in 10ms;
                                            }
                                            @keyframes st-bonus-anim {
                                                0% {
                                                    transform: scale3d(1, 1, 1);
                                                }
                                                50% {
                                                    transform: scale3d(
                                                        1.1,
                                                        1.1,
                                                        1.1
                                                    );
                                                    color: yellow;
                                                    text-shadow: 0 0 50px yellow;
                                                }
                                                100% {
                                                    transform: scale3d(1, 1, 1);
                                                }
                                            }
                                        }
                                        .bn-price {
                                            width: 100%;
                                            top: 32px;
                                            color: #fff;
                                            text-shadow: 0 1px 2px
                                                rgba(0, 0, 0, 0.65);
                                            &.animation {
                                                animation: st-bonus-anim 0.55s
                                                    ease-in 10ms;
                                            }
                                            @keyframes st-bonus-anim {
                                                0% {
                                                    transform: scale3d(1, 1, 1);
                                                }
                                                50% {
                                                    transform: scale3d(
                                                        1.2,
                                                        1.2,
                                                        1.2
                                                    );
                                                    color: yellow;
                                                    text-shadow: 0 0 50px yellow;
                                                }
                                                100% {
                                                    transform: scale3d(1, 1, 1);
                                                }
                                            }
                                        }
                                    }
                                    .st-prgbar-box-all {
                                        width: 100%;
                                        height: 32px;
                                        position: absolute;
                                        top: 226px;
                                        background-color: #786659;
                                        .st-prgbar-box {
                                            width: 140px;
                                            height: 24px;
                                            position: absolute;
                                            top: 4px;
                                            left: 20px;
                                            background: linear-gradient(
                                                0deg,
                                                #735657 0%,
                                                #453434 100%
                                            );
                                            box-shadow: inset 0 0 0 2px #432910,
                                                0 0 6px 0 rgba(0, 0, 0, 0.35);
                                            border-radius: 4px;
                                            .st-prgbar {
                                                width: 136px;
                                                height: 20px;
                                                position: absolute;
                                                top: 2px;
                                                margin-left: 2px;
                                                .st-prgbar-all {
                                                    width: 80%;
                                                    height: 20px;
                                                    position: relative;
                                                    @include prefix(
                                                        border-radius,
                                                        4px
                                                    );
                                                    background: linear-gradient(
                                                        0deg,
                                                        #5eb0f2 0%,
                                                        #4783b5 12%,
                                                        #66c4ff 60%,
                                                        #91d5ff 70%,
                                                        #569fdb 100%
                                                    );
                                                }
                                            }
                                            .st-prgbar-text {
                                                width: 100%;
                                                height: 100%;
                                                position: relative;
                                                text-align: center;
                                                line-height: 24px;
                                                color: #fff;
                                                font-size: 14px;
                                                font-weight: bold;
                                                text-shadow: 0 1px 2px
                                                    rgba(0, 0, 0, 0.65);
                                            }
                                        }
                                    }
                                    .ms-lvlup-btn-box-all {
                                        width: 100%;
                                        height: 147px;
                                        position: absolute;
                                        top: 263px;
                                        .color-btn {
                                            width: 150px;
                                            height: 40px;
                                            margin: 5px 0 5px 0;
                                            .color-btn-text {
                                                top: 3px;
                                                font-size: 16px;
                                            }
                                            .color-btn-text2 {
                                                width: 150px;
                                                margin: 0 auto;
                                                color: #fff;
                                                font-size: 10px;
                                                font-weight: bold;
                                                text-transform: uppercase;
                                                text-shadow: 0 1px 2px
                                                    rgba(0, 0, 0, 0.75);
                                            }
                                            &:active {
                                                .color-btn-text {
                                                    top: 4px;
                                                }
                                                .color-btn-text2 {
                                                    top: 21px;
                                                }
                                            }
                                            &.block {
                                                background: linear-gradient(
                                                    0deg,
                                                    #747474 0%,
                                                    #d4d4d4 100%
                                                );
                                            }
                                            &.red {
                                                background: linear-gradient(
                                                    0deg,
                                                    #880000 0%,
                                                    #ff9a9a 100%
                                                );
                                            }
                                        }
                                        .color-btn.vip {
                                            .color-btn-text {
                                                top: 8px;
                                                font-size: 16px;
                                            }
                                            &:active {
                                                .color-btn-text {
                                                    top: 9px;
                                                }
                                            }
                                        }
                                        .color-btn.vipall {
                                            display: none;
                                        }
                                        &.vipall {
                                            .color-btn,
                                            .color-btn.block {
                                                display: none;
                                            }
                                            .color-btn.vipall {
                                                display: inline-block;
                                            }
                                            .color-btn.max-lvl {
                                                display: inline-block;
                                                background-color: #bf2500;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        .guild-res-box-all {
                            width: 370px;
                            height: 45px;
                            position: absolute;
                            top: -42px;
                            right: 36px;
                            background-color: #9c8b7c;
                            border-radius: 10px 10px 0 0;
                            .guild-res-box {
                                width: 170px;
                                height: 36px;
                                position: absolute;
                                top: 4px;
                                left: 10px;
                                background: linear-gradient(
                                    0deg,
                                    #ffe199 0%,
                                    #f4c657 18%,
                                    #ffe199 60%,
                                    #f4c557 85%,
                                    #ffe199 100%
                                );
                                border-radius: 18px;
                                box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.55),
                                    0 2px 4px 0 rgba(0, 0, 0, 0.35);
                                .guild-value {
                                    width: 100px;
                                    height: 28px;
                                    position: absolute;
                                    top: 3px;
                                    left: 38px;
                                    background: linear-gradient(
                                        90deg,
                                        #f4bf87 0%,
                                        #d38632 50%,
                                        #92581a 100%
                                    );
                                    box-shadow: inset 0 2px 4px
                                            rgba(0, 0, 0, 0.25),
                                        inset 0 14px 0 rgba(255, 255, 255, 0.15);
                                    border-radius: 6px;
                                    color: #fff;
                                    font-size: 20px;
                                    font-weight: bold;
                                    line-height: 28px;
                                    text-align: center;
                                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                                }
                                .guild-value-btn-add {
                                    width: 32px;
                                    height: 36px;
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                    border-radius: 0 18px 18px 0;
                                    cursor: pointer;
                                    &:before {
                                        content: "";
                                        width: 6px;
                                        height: 22px;
                                        position: absolute;
                                        top: 7px;
                                        left: 12px;
                                        background-color: #3c3737;
                                    }
                                    &:after {
                                        content: "";
                                        width: 22px;
                                        height: 6px;
                                        position: absolute;
                                        top: 15px;
                                        left: 4px;
                                        background-color: #3c3737;
                                    }
                                }
                                &.gems {
                                    &:before {
                                        content: "";
                                        width: 40px;
                                        height: 40px;
                                        position: absolute;
                                        top: -2px;
                                        left: -2px;
                                        background-image: url(../img/trophy-bonus-gems.png);
                                        background-size: 100%;
                                        background-repeat: no-repeat;
                                    }
                                }
                                &.mithril {
                                    left: 190px;
                                    &:before {
                                        content: "";
                                        width: 40px;
                                        height: 40px;
                                        position: absolute;
                                        top: -2px;
                                        left: -2px;
                                        background-image: url(../img/trophy-bonus-mithril.png);
                                        background-size: 100%;
                                        background-repeat: no-repeat;
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

const V2ScreenMaster = styled.div`
    ${V2ScreenMasterStyles}
`;

export { V2ScreenMasterStyles, V2ScreenMaster };
