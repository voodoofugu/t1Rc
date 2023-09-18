import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenTowerQuestStyles = css`
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
                    .tab-panel-box.tower-quest {
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
                        .map-box {
                            width: 1078px;
                            height: 462px;
                            position: absolute;
                            top: 39px;
                            left: 10px;
                            background-image: url(../img/trophy-quest-map-bg.jpg);
                            background-size: 100%;
                            background-repeat: no-repeat;
                            .map-box-left-all,
                            .map-box-right-all {
                                width: 534px;
                                height: 442px;
                                position: absolute;
                                top: 10px;
                                left: 5px;
                                // background-color: red;
                                .map-quest-box-all {
                                    width: 400px;
                                    height: 130px;
                                    position: absolute;
                                    top: 10px;
                                    left: 5px;
                                    font-size: 0;
                                    .map-quest-box {
                                        width: 90px;
                                        height: 130px;
                                        position: relative;
                                        display: inline-block;
                                        margin-right: 10px;
                                        background-color: rgba(
                                            255,
                                            233,
                                            204,
                                            0.5
                                        );
                                        border-radius: 3px;
                                        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
                                        text-shadow: 0 1px 2px
                                            rgba(0, 0, 0, 0.6);
                                        .map-quest-box-name {
                                            width: 100%;
                                            height: 30px;
                                            position: absolute;
                                            top: 0;
                                            left: 0;
                                            background-color: #705d4e;
                                            display: table;
                                            border-radius: 3px 3px 0 0;
                                            .map-quest-box-name-text {
                                                width: 100%;
                                                height: 100%;
                                                position: relative;
                                                display: table-cell;
                                                vertical-align: middle;
                                                text-align: center;
                                                color: #fff;
                                                font-size: 10px;
                                                font-weight: bold;
                                                text-transform: uppercase;
                                            }
                                        }
                                        .map-s {
                                            width: 90px;
                                            height: 64px;
                                            position: absolute;
                                            top: 35px;
                                            .s-pic-s1a,
                                            .s-pic-s1b {
                                                width: 90px;
                                                height: 64px;
                                                position: absolute;
                                                img {
                                                    width: 90px;
                                                }
                                            }
                                            .s-pic-3pic1,
                                            .s-pic-3pic2 {
                                                width: 90px;
                                                height: 64px;
                                                position: absolute;
                                                top: -15px;
                                                img {
                                                    width: 90px;
                                                }
                                                display: none;
                                            }
                                            .s-shop {
                                                width: 50px;
                                                height: 50px;
                                                position: absolute;
                                                top: 5px;
                                                left: 20px;
                                                display: none;
                                                img {
                                                    width: 50px;
                                                }
                                            }
                                            &.pic1 {
                                                top: 42px;
                                                .s-pic-3pic1 {
                                                    display: block;
                                                }
                                            }
                                            &.pic2 {
                                                top: 42px;
                                                .s-pic-3pic2 {
                                                    display: block;
                                                }
                                            }
                                            &.shop {
                                                .s-shop {
                                                    display: block;
                                                }
                                            }
                                            &.active {
                                                .s-active {
                                                    display: block;
                                                }
                                            }
                                        }
                                        .map-quest-prgbar-all {
                                            width: 90px;
                                            height: 26px;
                                            position: absolute;
                                            bottom: 0;
                                            left: 0;
                                            background: linear-gradient(
                                                180deg,
                                                #3b302f 0%,
                                                #584a49 100%
                                            );
                                            border-radius: 0 0 3px 3px;
                                            overflow: hidden;
                                            .map-quest-prgbar {
                                                width: 85%;
                                                height: 26px;
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                                background: linear-gradient(
                                                    180deg,
                                                    #3fbae7 0%,
                                                    #007aa7 50%,
                                                    #3fbae7 100%
                                                );
                                            }
                                            .map-quest-prgbar-text {
                                                width: 90px;
                                                height: 26px;
                                                position: relative;
                                                text-align: center;
                                                color: #fff;
                                                font-weight: bold;
                                                font-size: 16px;
                                                text-shadow: 0 1px 1px
                                                    rgba(0, 0, 0, 0.45);
                                                line-height: 26px;
                                                text-shadow: 0 1px 2px
                                                    rgba(0, 0, 0, 0.45);
                                                text-transform: uppercase;
                                            }
                                        }
                                        .s-claim2 {
                                            position: absolute;
                                            bottom: -7px;
                                            left: 0;
                                            display: none;
                                        }
                                        .s-check,
                                        .s-lock {
                                            width: 90px;
                                            height: 130px;
                                            position: absolute;
                                            top: 0;
                                            left: 0;
                                            background-color: rgba(
                                                185,
                                                164,
                                                137,
                                                0.4
                                            );
                                            background-image: url(../img/darkworld-glow-cards.png);
                                            background-repeat: no-repeat;
                                            background-size: cover;
                                            background-position: center;
                                            display: none;
                                            border-radius: 3px;
                                            &:before {
                                                content: "";
                                                width: 60px;
                                                height: 60px;
                                                position: absolute;
                                                top: 35px;
                                                left: 15px;
                                                background-image: url(../img/paycheck.png);
                                                background-size: 100%;
                                                background-repeat: no-repeat;
                                            }
                                        }
                                        .s-lock {
                                            background-color: rgba(
                                                0,
                                                0,
                                                0,
                                                0.7
                                            );
                                            background-blend-mode: darken;
                                            &:before {
                                                content: "";
                                                width: 40px;
                                                left: 25px;
                                                background-image: url(../img/tower-lock.png);
                                            }
                                        }
                                        &.check {
                                            .s-check {
                                                display: block;
                                            }
                                        }
                                        &.lock {
                                            .s-lock {
                                                display: block;
                                            }
                                        }
                                        &.claim {
                                            .s-claim2 {
                                                display: block;
                                            }
                                        }
                                        .map-s-line {
                                            width: 10px;
                                            height: 10px;
                                            position: absolute;
                                            top: 60px;
                                            left: 90px;
                                            background-color: #9f0000;
                                            &.green {
                                                background-color: #009f25;
                                            }
                                        }
                                    }
                                    &.two {
                                        top: 156px;
                                    }
                                    &.three {
                                        top: 302px;
                                    }
                                }
                            }
                            .map-box-right-all {
                                width: 534px;
                                height: 442px;
                                position: absolute;
                                top: 10px;
                                left: auto;
                                right: 5px;
                                .map-quest-box-all {
                                    left: auto;
                                    right: 5px;
                                    .map-quest-box {
                                        margin-left: 10px;
                                        margin-right: auto;
                                        .map-s-line {
                                            left: -10px;
                                        }
                                    }
                                }
                            }
                            .s-map-line-all-box {
                                width: 258px;
                                height: 302px;
                                position: absolute;
                                top: 80px;
                                left: 410px;
                                .s-map-line1,
                                .s-map-line2,
                                .s-map-line3,
                                .s-map-line4,
                                .s-map-line5,
                                .s-map-line6 {
                                    width: 10px;
                                    height: 151px;
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    background-color: #9f0000;
                                    &.green {
                                        background-color: #009f25;
                                    }
                                }
                                .s-map-line2 {
                                    top: 151px;
                                }
                                .s-map-line3 {
                                    left: 248px;
                                }
                                .s-map-line4 {
                                    top: 151px;
                                    left: 248px;
                                }
                                .s-map-line5 {
                                    width: 80px;
                                    height: 10px;
                                    top: 146px;
                                }
                                .s-map-line6 {
                                    width: 80px;
                                    height: 10px;
                                    top: 146px;
                                    left: 168px;
                                }
                            }
                            .s-girl-reward-box {
                                width: 220px;
                                height: 230px;
                                position: absolute;
                                top: 140px;
                                left: 429px;
                                background: url(../img/raidboss-girl-reward-bg.png);
                                background-size: 100%;
                                background-repeat: no-repeat;
                                .hero-avatar-box {
                                    width: 98px;
                                    height: 111px;
                                    position: absolute;
                                    top: 20px;
                                    left: 62px;
                                    border-radius: 6px;
                                    background: linear-gradient(
                                        180deg,
                                        #8e7453 0%,
                                        #e3c7a3 50%,
                                        #8f7553 70%,
                                        #ae916a 85%,
                                        #8f7553 100%
                                    );
                                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35),
                                        0 0 0 1px rgba(0, 0, 0, 0.2);
                                    .hero-avatar {
                                        width: 90px;
                                        height: 103px;
                                        position: absolute;
                                        top: 4px;
                                        left: 4px;
                                        border-radius: 4px;
                                        overflow: hidden;
                                        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
                                    }
                                }
                                .color-btn {
                                    width: 180px;
                                    height: 50px;
                                    top: 170px;
                                    left: 20px;
                                    .color-btn-text {
                                        top: 12px;
                                        font-size: 16px;
                                    }
                                    &:active {
                                        .color-btn-text {
                                            top: 13px;
                                        }
                                    }
                                }
                            }
                        }
                        .trophy-res-box-all {
                            width: 370px;
                            height: 45px;
                            position: absolute;
                            top: -42px;
                            right: 36px;
                            background-color: #9c8b7c;
                            border-radius: 10px 10px 0 0;
                            .trophy-res-box {
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
                                .trophy-value {
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
                                .trophy-value-btn-add {
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
                                        background-image: url(../img/trophy-bonus-gems.png);
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

    .maps-hint {
        width: 300px;
        height: 150px;
        position: absolute;
        top: 200px;
        left: 350px;
        z-index: 9999;
        background: linear-gradient(0deg, #7d7f81 0%, #d5d8da 100%);
        border-radius: 8px;
        box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.75),
            0 2px 6px rgba(0, 0, 0, 0.75);

        &.short {
            height: 100px;
        }
        .hint-pic-box-all {
            width: 60px;
            height: 80px;
            position: absolute;
            padding: 10px;
            .pic-box-name {
                width: 100%;
                height: 18px;
                position: relative;
                text-align: center;
                color: rgb(65, 46, 46);
                font-size: 12px;
                text-transform: uppercase;
                font-weight: bold;
            }
            .hint-pic {
                width: 60px;
                height: 60px;
                position: absolute;
                top: 26px;
                left: 10px;
                img {
                    width: 60px;
                    height: 60px;
                }
            }
            .hint-num {
                width: 100%;
                height: 26px;
                position: absolute;
                top: 66px;
                left: 0;
                color: #fff;
                font-size: 20px;
                font-weight: bold;
                text-align: center;
                line-height: 28px;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75),
                    0 1px 6px rgba(0, 0, 0, 0.85), 0 1px 8px rgba(0, 0, 0, 0.55);
            }
        }
        .hint-text-box {
            width: 210px;
            height: 80px;
            position: absolute;
            top: 0px;
            left: 70px;
            padding: 10px;
            display: table;
            .hint-text {
                text-align: center;
                font-size: 14px;
                display: table-cell;
                vertical-align: middle;
                color: #3f2c2c;
                text-shadow: 0 0 6px #fff, 0 0 10px #fff;
            }
        }
        .s-progressbar-box-all {
            width: 280px;
            height: 38px;
            position: absolute;
            top: 100px;
            left: 10px;
            background-color: #fff;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
            &:before {
                content: "";
                width: 276px;
                height: 34px;
                position: absolute;
                top: 2px;
                left: 2px;
                background-color: #765345;
                border-radius: 4px;
                box-shadow: inset 0 6px 10px rgba(0, 0, 0, 0.35);
            }
            .s-progressbar-box {
                width: 274px;
                height: 32px;
                position: absolute;
                top: 3px;
                left: 3px;
                .s-progressbar {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: linear-gradient(0deg, #e29300 0%, #ffe454 100%);
                    border-radius: 2px;
                    transition: width 0.5s ease;
                }
                .s-progress-num {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    color: #3f2c2c;
                    font-size: 14px;
                    font-weight: bold;
                    text-align: center;
                    line-height: 32px;
                    text-shadow: 0 0 6px #fff, 0 0 8px #fff;
                }
            }
        }
        &.noprogress {
            height: 100px;
            .s-progressbar-box-all {
                display: none;
            }
            .hint-text {
                text-align: center;
                font-size: 14px;
                display: table-cell;
                vertical-align: middle;
                color: #fff;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
            }
        }
    }
`;

const V2ScreenTowerQuest = styled.div`
    ${V2ScreenTowerQuestStyles}
`;

export { V2ScreenTowerQuestStyles, V2ScreenTowerQuest };
