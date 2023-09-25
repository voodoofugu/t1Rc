import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .main {
        .left-side {
            .left-panel {
                &.wide {
                    .tab-panel-box.goddess-room {
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
                            box-shadow: 0 1px 2p x rgba(0, 0, 0, 0.35);
                            color: #3c3737;
                            font-size: 16px;
                            font-weight: bold;
                            text-transform: uppercase;
                            line-height: 24px;
                            text-align: center;
                        }

                        .cw-trophy-skill-icon {
                            width: 100px;
                            height: 100px;
                            position: relative;
                            background-color: #fffe9a;
                            box-shadow: inset 0px -50px 50px -25px #e9b13a,
                                0px 1px 3px -1px rgba(0, 0, 0, 0.4);
                            border-radius: 12px;

                            &:before {
                                content: "";
                                width: 96px;
                                height: 96px;
                                position: absolute;
                                left: 2px;
                                top: 2px;
                                background: linear-gradient(
                                    0deg,
                                    #fede92 0%,
                                    #f4c558 18%,
                                    #ffe098 60%,
                                    #f5c85d 85%,
                                    #fddd90 100%
                                );
                                border-radius: 10px;
                            }

                            > img {
                                width: 90px;
                                height: 90px;
                                position: absolute;
                                left: 5px;
                                top: 5px;
                                border-radius: 8px;
                            }

                            .cw-trophy-skills {
                                position: absolute;
                                bottom: 0;
                                right: 0;
                                text-align: center;
                                font-weight: bold;
                                text-transform: uppercase;
                                font-size: 14px;
                                color: #fff;
                                padding: 4px 7px;
                                border-radius: 10px;
                                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
                                background: linear-gradient(
                                    0deg,
                                    #7dbd32 0%,
                                    #bbee7f 100%
                                );
                                box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.4);
                            }

                            .cw-trophy-learn {
                                position: absolute;
                                top: 105px;
                                left: 0;
                                height: 30px;
                                width: 100px;
                                .color-btn-text {
                                    top: 5px;
                                    font-size: 12px;
                                    .ff-but {
                                        content: "";
                                        width: 15px;
                                        height: 15px;
                                        position: relative;
                                        display: inline-block;
                                        background-image: url(../img/clan_points2.png);
                                        background-size: 100%;
                                        background-position: center;
                                        margin: 0 2px 0 2px;
                                        vertical-align: middle;
                                    }
                                }
                            }
                        }

                        .gd-left-box-all {
                            width: 130px;
                            height: 460px;
                            position: absolute;
                            top: 40px;
                            left: 10px;
                            background-color: #736362;
                            border-radius: 12px;
                            .gd-left-box-scroll-box {
                                overflow-y: scroll;
                                position: absolute;
                                top: 8px;
                                left: 8px;
                                width: 114px;
                                height: 440px;
                                font-size: 0;

                                &::-webkit-scrollbar-track {
                                    -webkit-box-shadow: inset 0 0 6px
                                        rgba(0, 0, 0, 0.5);
                                    background-color: #473c3c;
                                }
                                &::-webkit-scrollbar {
                                    width: 5px;
                                    background-color: #9e8b7d;
                                }
                                &::-webkit-scrollbar-thumb {
                                    background: linear-gradient(
                                        180deg,
                                        #ffe199,
                                        #f4c657,
                                        #f4c657,
                                        #ffe199
                                    );
                                }
                                .hero-avatar-box {
                                    width: 98px;
                                    height: 111px;
                                    position: relative;
                                    display: inline-block;
                                    margin: 5px 0;
                                    border-radius: 6px;
                                    background: linear-gradient(
                                        180deg,
                                        #8e7453 0%,
                                        #e3c7a3 50%,
                                        #8f7553 70%,
                                        #ae916a 85%,
                                        #8f7553 100%
                                    );
                                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                                    .hero-avatar {
                                        width: 90px;
                                        height: 103px;
                                        position: absolute;
                                        top: 4px;
                                        left: 4px;
                                        border-radius: 4px;
                                        overflow: hidden;
                                    }
                                }
                            }
                        }
                        .gd-box-goddess {
                            .x-info-btn {
                                z-index: 1;
                                text-align: center;
                                width: 25px;
                                height: 25px;
                                position: absolute;
                                top: 10px;
                                left: 10px;
                                background: linear-gradient(
                                    0deg,
                                    #53c0ff 0%,
                                    #2277bf 50%,
                                    #b8d2e0 100%
                                );
                                //background: linear-gradient(0deg, #58372a 0%, #42291e 50%, #9f8978 100%);;
                                border-radius: 100%;
                                cursor: pointer;
                                border: 2px solid #fff;
                                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                                color: #fff;
                                font-size: 20px;
                                font-weight: bold;
                                text-transform: uppercase;
                                text-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
                                line-height: 25px;
                                &:active {
                                    top: 11px;
                                }
                            }

                            width: 510px;
                            height: 460px;
                            position: absolute;
                            top: 40px;
                            left: 150px;
                            background-color: red;
                            border-radius: 12px;
                            overflow: hidden;
                            .gd-box-goddess-pic {
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                top: 0;
                                left: 0;
                                .b-fs {
                                    display: inline-block;
                                    width: 35px;
                                    height: 35px;
                                    position: absolute;
                                    top: 5px;
                                    right: 5px;
                                    background: none;
                                    background-image: url(../img/chahge-fullscr.png);
                                    background-size: 100%;
                                    cursor: pointer;
                                }
                                > img {
                                    width: 100%;
                                }
                                img.pic-lock {
                                    width: initial;
                                    position: absolute;
                                    top: 150px;
                                    left: 205px;
                                }
                            }
                            .gd-box-goddess-name-box {
                                width: 252px;
                                height: 56px;
                                position: absolute;
                                top: 10px;
                                left: 129px;
                                background-image: url(../img/wpck-ram1.png);
                                background-size: 100%;
                                .gd-box-goddess-name {
                                    width: 200px;
                                    height: auto;
                                    position: absolute;
                                    top: 5px;
                                    left: 26px;
                                    color: #fff;
                                    font-size: 18px;
                                    text-align: center;
                                    font-weight: bold;
                                }
                                .gd-box-goddess-lvl {
                                    width: 200px;
                                    height: auto;
                                    position: absolute;
                                    top: 26px;
                                    left: 26px;
                                    color: #fff000;
                                    font-size: 14px;
                                    text-align: center;
                                    font-weight: bold;
                                }
                            }
                            .gd-box-goddess-bottom-box {
                                text-align: center;
                                width: 510px;
                                height: 100px;
                                &.tall {
                                    height: 150px;
                                }
                                position: absolute;
                                bottom: 0px;
                                background-color: rgba(0, 0, 0, 0.35);
                                .get-goddess {
                                    top: -175px;
                                    width: 180px;
                                    height: 60px;
                                }
                                .info-block {
                                    position: absolute;
                                    width: 30%;
                                    left: 15%;
                                    bottom: 66px;
                                    font-size: 16px;
                                    font-weight: bold;
                                    color: white;
                                    height: 36px;
                                    &.next {
                                        left: initial;
                                        right: 15%;
                                    }
                                    &.centered {
                                        width: 70%;
                                    }
                                }
                                .gd-arrow-box-all {
                                    width: 510px;
                                    height: 50px;
                                    position: absolute;
                                    bottom: 43px;
                                    left: 0;
                                    .gd-btn-scroll {
                                        width: 40px;
                                        height: 40px;
                                        position: absolute;
                                        top: 0px;
                                        left: 20px;
                                        cursor: pointer;
                                        background: linear-gradient(
                                            180deg,
                                            #fffa8b 0%,
                                            #f5e38b 47%,
                                            #ebce8b 100%
                                        );
                                        border-radius: 100%;
                                        box-shadow: inset 0px -6px 0px 0px rgba(0, 0, 0, 0.25),
                                            0 2px 8px 0 rgba(0, 0, 0, 0.75);
                                        &:after {
                                            content: "";
                                            width: 20px;
                                            height: 28px;
                                            background-image: url(../img/rating-arrow.png);
                                            position: absolute;
                                            top: 4px;
                                            //margin-left: 9px;
                                            left: 10px;
                                        }
                                        &:active {
                                            top: 1px;
                                        }
                                        &.right {
                                            left: 450px;
                                            transform: scale(-1, 1);
                                        }
                                    }
                                }
                                .gd-prgbar-box {
                                    width: 210px;
                                    height: 30px;
                                    position: absolute;
                                    bottom: 10px;
                                    left: 150px;
                                    background: linear-gradient(
                                        0deg,
                                        #735657 0%,
                                        #453434 100%
                                    );
                                    .gd-prgbar {
                                        width: 210px;
                                        height: 30px;
                                        position: absolute;
                                        .gd-prgbar-all {
                                            width: 80%;
                                            height: 30px;
                                            position: relative;
                                            background: linear-gradient(
                                                0deg,
                                                #41d355 0%,
                                                #039117 18%,
                                                #41d355 60%,
                                                #0ca621 85%,
                                                #41d355 100%
                                            );
                                            transition: width 0.5s ease;
                                        }
                                    }
                                    .gd-prgbar-text {
                                        width: 100%;
                                        height: 100%;
                                        position: relative;
                                        text-align: center;
                                        line-height: 30px;
                                        color: #fff;
                                        font-size: 14px;
                                        font-weight: bold;
                                        text-shadow: 0 1px 2px
                                            rgba(0, 0, 0, 0.65);
                                    }
                                }
                                .gd-star-box {
                                    width: 400px;
                                    height: 40px;
                                    position: absolute;
                                    top: 10px;
                                    left: 56px;
                                    background-image: url(../img/gd-star-40-bg-1.png);
                                    background-size: 100%;
                                    &:before {
                                        content: "";
                                        width: 400px;
                                        height: 40px;
                                        position: absolute;
                                        background-image: url(../img/gd-star-40-1.png);
                                        background-size: 100%;
                                        left: 0;
                                    }
                                    &.lvl00 {
                                        &:before {
                                            content: "";
                                            width: 0px;
                                            background-repeat: no-repeat;
                                            background-size: 2 * 470%;
                                        }
                                    }
                                    &.lvl01 {
                                        &:before {
                                            content: "";
                                            width: 43px;
                                            background-repeat: no-repeat;
                                            background-size: 2 * 470%;
                                        }
                                    }
                                    &.lvl02 {
                                        &:before {
                                            content: "";
                                            width: 82px;
                                            background-repeat: no-repeat;
                                            background-size: 2 * 245%;
                                        }
                                    }
                                    &.lvl03 {
                                        &:before {
                                            content: "";
                                            width: 119px;
                                            background-repeat: no-repeat;
                                            background-size: 2 * 168%;
                                        }
                                    }
                                    &.lvl04 {
                                        &:before {
                                            content: "";
                                            width: 156px;
                                            background-repeat: no-repeat;
                                            background-size: 2 * 128%;
                                        }
                                    }
                                    &.lvl05 {
                                        &:before {
                                            content: "";
                                            width: 200px;
                                            background-repeat: no-repeat;
                                            background-size: 2 * 100%;
                                        }
                                    }
                                    &.lvl06 {
                                        &:before {
                                            content: "";
                                            width: 240px;
                                            background-repeat: no-repeat;
                                            background-size: 167%;
                                        }
                                    }
                                    &.lvl07 {
                                        &:before {
                                            content: "";
                                            width: 280px;
                                            background-repeat: no-repeat;
                                            background-size: 143%;
                                        }
                                    }
                                    &.lvl08 {
                                        &:before {
                                            content: "";
                                            width: 320px;
                                            background-repeat: no-repeat;
                                            background-size: 125%;
                                        }
                                    }
                                    &.lvl09 {
                                        &:before {
                                            content: "";
                                            width: 360px;
                                            background-repeat: no-repeat;
                                            background-size: 111%;
                                        }
                                    }
                                    &.lvl010,
                                    &.lvl10 {
                                        &:before {
                                            content: "";
                                            width: 400px;
                                            background-repeat: no-repeat;
                                            background-size: 100%;
                                        }
                                    }
                                }
                            }
                        }
                        .gd-right-box-all {
                            width: 420px;
                            height: 460px;
                            position: absolute;
                            top: 40px;
                            right: 10px;
                            background-color: #736362;
                            border-radius: 12px;
                            .gd-attr-box-all {
                                width: 400px;
                                height: 270px;
                                position: absolute;
                                top: 10px;
                                left: 10px;
                                overflow: hidden;
                                overflow-y: scroll;
                                ::-webkit-scrollbar-track {
                                    -webkit-box-shadow: inset 0 0 6px
                                        rgba(0, 0, 0, 0.5);
                                    background-color: #473c3c;
                                }
                                &::-webkit-scrollbar {
                                    width: 5px;
                                    background-color: #9e8b7d;
                                }
                                &::-webkit-scrollbar-thumb {
                                    background: linear-gradient(
                                        180deg,
                                        #ffe199,
                                        #f4c657,
                                        #f4c657,
                                        #ffe199
                                    );
                                }
                                .gd-attr-name-box {
                                    width: 252px;
                                    height: 36px;
                                    position: absolute;
                                    top: 5px;
                                    left: 74px;
                                    background-image: url(../img/wpck-ram.png);
                                    background-size: 100%;
                                    .gd-attr-name {
                                        width: 100%;
                                        height: auto;
                                        position: relative;
                                        text-align: center;
                                        line-height: 28px;
                                        font-size: 14px;
                                        font-weight: bold;
                                        text-transform: uppercase;
                                        color: #fff;
                                    }
                                }
                                .gd-attr-box {
                                    width: 400px;
                                    height: 270px;
                                    position: absolute;
                                    bottom: 0;
                                    font-size: 0;
                                    .gd-attr-girl-box {
                                        width: 120px;
                                        height: 330px;
                                        position: relative;
                                        display: inline-block;
                                        margin: 0 6px;
                                        background-color: #5d5252;
                                        border-radius: 10px;
                                        box-shadow: inset 0px -4px 0px 0px rgba(0, 0, 0, 0.15),
                                            0 2px 4px 0px rgba(0, 0, 0, 0.55);
                                        .hero-avatar-box {
                                            width: 98px;
                                            height: 111px;
                                            position: absolute;
                                            top: 8px;
                                            left: 11px;
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
                                            .gd-hero-name {
                                                width: 100%;
                                                height: 26px;
                                                position: absolute;
                                                bottom: 0;
                                                background-color: rgba(
                                                    0,
                                                    0,
                                                    0,
                                                    0.35
                                                );
                                                @include prefix(
                                                    border-radius,
                                                    0 0 6px 6px
                                                );
                                                color: #fff;
                                                font-size: 12px;
                                                text-align: center;
                                                line-height: 26px;
                                                font-weight: bold;
                                            }
                                        }
                                        .gd-lvl-pds-box-all {
                                            width: 98px;
                                            height: 40px;
                                            position: absolute;
                                            top: 124px;
                                            left: 11px;
                                            .hero-level-box,
                                            .hero-dps-box {
                                                width: 93px;
                                                height: 18px;
                                                position: absolute;
                                                top: 0;
                                                left: 0;
                                                background: linear-gradient(
                                                    90deg,
                                                    #92633b 0%,
                                                    #d24b1f 50%,
                                                    #93633b 100%
                                                );
                                                box-shadow: inset 0 10px 0
                                                        rgba(255, 255, 255, 0.1),
                                                    0 1px 1px
                                                        rgba(0, 0, 0, 0.25);
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
                                                    text-transform: initial;
                                                }
                                            }
                                            .hero-dps-box {
                                                &.cw {
                                                    top: 40px;
                                                }
                                                &.pos {
                                                    top: 60px;
                                                }
                                                top: 20px;
                                                background: linear-gradient(
                                                    90deg,
                                                    #475660 0%,
                                                    #3474a1 50%,
                                                    #475661 100%
                                                );
                                            }
                                        }
                                        .color-btn.green {
                                            width: 110px;
                                            position: absolute;
                                            bottom: 85px;
                                            right: 5px;
                                            height: 35px;
                                            &.cw {
                                                bottom: 45px;
                                            }
                                            &.pos {
                                                bottom: 5px;
                                            }
                                            .color-btn-text {
                                                .gold {
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
                                                            background-image: url(../img/ic-yellow-butil.png);
                                                            background-size: 100%;
                                                            margin: 0 4px 0 4px;
                                                            vertical-align: middle;
                                                            top: -2px;
                                                        }
                                                    }
                                                    .f-green {
                                                        &:before {
                                                            content: "";
                                                            width: 18px;
                                                            height: 18px;
                                                            position: relative;
                                                            display: inline-block;
                                                            background-image: url(../img/ic-green-butil.png);
                                                            background-size: 100%;
                                                            margin: 0 4px 0 4px;
                                                            vertical-align: middle;
                                                            top: -2px;
                                                        }
                                                    }
                                                    .f-blue {
                                                        &:before {
                                                            content: "";
                                                            width: 18px;
                                                            height: 18px;
                                                            position: relative;
                                                            display: inline-block;
                                                            background-image: url(../img/ic-blue-butil.png);
                                                            background-size: 100%;
                                                            margin: 0 4px 0 4px;
                                                            vertical-align: middle;
                                                            top: -2px;
                                                        }
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
                                    }
                                }
                            }
                            .gd-nl-box-all {
                                width: 400px;
                                height: 160px;
                                position: absolute;
                                bottom: 10px;
                                right: 10px;
                                background: linear-gradient(
                                    0deg,
                                    #996b1d 0%,
                                    #e5ca72 50%,
                                    #996b1d 100%
                                );
                                border-radius: 8px;
                                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                                .gd-star-box {
                                    width: 200px;
                                    height: 40px;
                                    position: absolute;
                                    top: 10px;
                                    left: 100px;
                                    background-image: url(../img/gd-star-40-bg.png);
                                    background-size: 100%;
                                    &:before {
                                        content: "";
                                        width: 200px;
                                        height: 40px;
                                        position: absolute;
                                        background-image: url(../img/gd-star-40.png);
                                        background-size: 100%;
                                    }
                                    &.lvl00 {
                                        &:before {
                                            content: "";
                                            width: 0px;
                                            background-repeat: no-repeat;
                                            background-size: 470%;
                                        }
                                    }
                                    &.lvl01 {
                                        &:before {
                                            content: "";
                                            width: 43px;
                                            background-repeat: no-repeat;
                                            background-size: 470%;
                                        }
                                    }
                                    &.lvl02 {
                                        &:before {
                                            content: "";
                                            width: 82px;
                                            background-repeat: no-repeat;
                                            background-size: 245%;
                                        }
                                    }
                                    &.lvl03 {
                                        &:before {
                                            content: "";
                                            width: 119px;
                                            background-repeat: no-repeat;
                                            background-size: 168%;
                                        }
                                    }
                                    &.lvl04 {
                                        &:before {
                                            content: "";
                                            width: 156px;
                                            background-repeat: no-repeat;
                                            background-size: 128%;
                                        }
                                    }
                                    &.lvl05 {
                                        &:before {
                                            content: "";
                                            width: 200px;
                                            background-repeat: no-repeat;
                                            background-size: 100%;
                                        }
                                    }
                                }
                                .gd-nl-box {
                                    width: 380px;
                                    height: 84px;
                                    position: absolute;
                                    bottom: 10px;
                                    left: 10px;
                                    .gd-nl-nn {
                                        width: 100px;
                                        height: auto;
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        color: #000;
                                        font-size: 14px;
                                        font-weight: bold;
                                        text-transform: uppercase;
                                        &.max {
                                            top: 30px;
                                        }
                                        &.power {
                                            top: 60px;
                                        }
                                        &.num {
                                            left: 120px;
                                            color: #fff;
                                        }
                                        &.next {
                                            left: 220px;
                                            color: #fff;
                                        }
                                        &.up {
                                            left: 300px;
                                            color: #fffd68;
                                            font-size: 16px;
                                        }
                                        .f-up {
                                            &:before {
                                                content: "";
                                                width: 18px;
                                                height: 24px;
                                                position: relative;
                                                display: inline-block;
                                                background-image: url(../img/arrow-green.png);
                                                background-size: 100%;
                                                margin: 0 4px 0 4px;
                                                vertical-align: middle;
                                                top: -4px;
                                            }
                                        }
                                    }
                                    .gd-str-next {
                                        width: 20px;
                                        height: 62px;
                                        position: absolute;
                                        top: 9px;
                                        left: 184px;
                                        background-image: url(../img/unipop-gold-arrow.png);
                                        background-size: 100%;
                                    }
                                }
                                &.girl {
                                    background: linear-gradient(
                                        0deg,
                                        #ffe199 0%,
                                        #f4c657 18%,
                                        #ffe199 60%,
                                        #f4c657 85%,
                                        #ffe199 100%
                                    );
                                    .gd-star-box {
                                        display: none;
                                    }
                                    .gd-nl-box {
                                        display: none;
                                    }
                                    .gd-girl-box-all {
                                        width: 384px;
                                        height: 104px;
                                        position: absolute;
                                        top: 10px;
                                        left: 8px;
                                        font-size: 0;
                                        .hero-avatar-box {
                                            width: 90px;
                                            height: 103px;
                                            position: relative;
                                            display: inline-block;
                                            margin: 0 3px;
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
                                                width: 81px;
                                                height: 95px;
                                                position: absolute;
                                                top: 4px;
                                                left: 4px;
                                                border-radius: 4px;
                                                overflow: hidden;
                                            }
                                            .gd-av-bg-black {
                                                width: 90px;
                                                height: 103px;
                                                position: absolute;
                                                display: none;
                                                background-color: rgba(
                                                    0,
                                                    0,
                                                    0,
                                                    0.55
                                                );
                                                border-radius: 6px;
                                                .gd-av-block {
                                                    width: 30px;
                                                    height: 45px;
                                                    position: absolute;
                                                    top: 30px;
                                                    left: 30px;
                                                    background-image: url(../img/tower-lock.png);
                                                    background-size: 100%;
                                                }
                                            }
                                            &.block {
                                                .gd-av-bg-black {
                                                    display: block;
                                                }
                                            }
                                        }
                                    }
                                    .gd-girl-prg-bal-all {
                                        width: 380px;
                                        height: 30px;
                                        position: absolute;
                                        bottom: 10px;
                                        left: 10px;
                                        background: linear-gradient(
                                            0deg,
                                            #735657 0%,
                                            #453434 100%
                                        );
                                        .gd-girl-prg {
                                            width: 50%;
                                            height: 30px;
                                            position: absolute;
                                            background: linear-gradient(
                                                0deg,
                                                #5eb0f2,
                                                #4783b5 12%,
                                                #66c4ff 60%,
                                                #91d5ff 70%,
                                                #569fdb
                                            );
                                        }
                                        .gd-girl-prg-rd {
                                            width: 10px;
                                            height: 40px;
                                            position: absolute;
                                            top: -6px;
                                            left: 88px;
                                            background-image: url(../img/change-line.png);
                                            background-size: 100%;
                                            .gd-girl-prg-rd-txt {
                                                width: 40px;
                                                height: auto;
                                                position: absolute;
                                                top: 12px;
                                                left: -40px;
                                                color: #fff;
                                                font-size: 14px;
                                                font-weight: bold;
                                                text-align: right;
                                                text-shadow: 0 1px 2px
                                                    rgba(0, 0, 0, 0.35);
                                            }
                                            &.p2 {
                                                left: 185px;
                                            }
                                            &.p3 {
                                                left: 280px;
                                            }
                                            &.p4 {
                                                left: 375px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        .btn-close-x {
                            width: 30px;
                            height: 30px;
                            position: absolute;
                            top: -6px;
                            right: -6px;
                            background: linear-gradient(
                                30deg,
                                #876b56,
                                #aa9383,
                                #dfceba
                            );
                            border-radius: 7px;
                            box-shadow: 0 0 7px #000;
                            cursor: pointer;
                            z-index: 999;
                            &:before {
                                content: "✖";
                                font-size: 28px;
                                font-weight: bold;
                                color: #600;
                                line-height: 30px;
                                text-shadow: 0 0 2px #fff;
                            }
                            &:after {
                                content: "";
                                width: 24px;
                                height: 7px;
                                position: absolute;
                                top: 3px;
                                left: 3px;
                                background: rgba(255, 255, 255, 0.25);
                                border-radius: 5px;
                            }
                        }

                        .trophy-res-box-all {
                            .trophy-res-box {
                                &.spirit {
                                    &:before {
                                        content: "";
                                        width: 40px;
                                        height: 40px;
                                        position: absolute;
                                        top: -2px;
                                        left: -2px;
                                        background-image: url(../img/v2-mn-soul-sg-160.png);
                                        background-size: 100%;
                                        background-repeat: no-repeat;
                                    }
                                }
                                &.spirit2 {
                                    left: 190px;
                                    &:before {
                                        content: "";
                                        width: 40px;
                                        height: 40px;
                                        position: absolute;
                                        top: -2px;
                                        left: -2px;
                                        background-image: url(../img/ic-yellow-butil.png);
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

export { stylesFileName, pageStyles };
