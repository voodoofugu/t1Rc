import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
    .tooltip-container {
        text-align: left;
        position: absolute;
    }
    .achiev {
        .achiev {
            display: inline-block;
            width: 60px;
            height: 60px;
            position: relative;
            margin: 5px;
            .icon {
                display: inline-block;
                . > img {
                    width: 50px;
                    height: 50px;
                    padding: 5px;
                    border-radius: 8px;
                }
            }
            .descr {
                display: none;
            }

            &:after {
                content: "";
                display: block;
                width: 23px;
                height: 23px;
                background: linear-gradient(
                    to bottom,
                    #e4d7cf,
                    #a57351,
                    #5f4c3a
                );
                border-radius: 100%;
                position: absolute;
                left: -6px;
                bottom: -6px;
                line-height: 23px;
                box-shadow: 0 0 3px rgba(0, 0, 0, 0.66), inset 0 0 6px #e4d7cf;
                font-family: Helvetica, sans-serif;
                font-size: 13px;
                font-weight: 900;
                color: #1e150d;
                text-shadow: 0 1px 3px #fff;
                text-align: center;
                display: none;
            }

            &.avail {
                cursor: pointer;
                .icon . > img {
                    filter: "none";
                }
                &:after {
                    display: block;
                }
            }
            &.empty {
                background-image: url(../img/iconach/ic-ach-r-empty.png);
                background-size: 60px;
                border-radius: 5px;
            }
            &.lvl-none {
                background-image: url(../img/iconach/ic-ach-r-none.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    display: none;
                }
            }
            &.lvl01 {
                background-image: url(../img/iconach/ic-ach-r-01.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    content: "I";
                    color: #0e2a36;
                    background: linear-gradient(
                        45deg,
                        #b0fff9,
                        #008bab,
                        #05405d
                    );
                }
            }
            &.lvl02 {
                background-image: url(../img/iconach/ic-ach-r-02.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    content: "II";
                    color: #55052f;
                    background: linear-gradient(
                        45deg,
                        #fbc2e0,
                        #d44d94,
                        #86055e
                    );
                }
            }
            &.lvl03 {
                background-image: url(../img/iconach/ic-ach-r-03.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    content: "III";
                    color: #313200;
                    background: linear-gradient(
                        45deg,
                        #ecdf83,
                        #e6b834,
                        #846100
                    );
                }
            }
            &.lvl04 {
                background-image: url(../img/iconach/ic-ach-r-04.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    content: "IV";
                    color: #002a0d;
                    background: linear-gradient(
                        45deg,
                        #96c865,
                        #00af32,
                        #044e1b
                    );
                }
            }
            &.lvl05 {
                background-image: url(../img/iconach/ic-ach-r-05.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    content: "V";
                    color: #33123a;
                    background: linear-gradient(
                        45deg,
                        #f8b4fd,
                        #8c46cc,
                        #59226b
                    );
                }
            }
            &.lvl06 {
                background-image: url(../img/iconach/ic-ach-r-06.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    content: "VI";
                    color: #440101;
                    background: linear-gradient(
                        45deg,
                        #fdb4b4,
                        #ff3e45,
                        #9e0001
                    );
                }
            }
            &.lvl07 {
                background-image: url(../img/iconach/ic-ach-r-07.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    content: "VII";
                    color: #57001e;
                    background: linear-gradient(
                        45deg,
                        #ff95c7,
                        #ff0084,
                        #d3004a
                    );
                }
            }
            &.lvl08 {
                background-image: url(../img/iconach/ic-ach-r-08.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    content: "VIII";
                    color: #1f1f1f;
                    background: linear-gradient(
                        45deg,
                        #ffffff,
                        #808080,
                        #272727
                    );
                }
            }
            &.lvl09 {
                background-image: url(../img/iconach/ic-ach-r-09.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    content: "IX";
                    color: #422400;
                    background: linear-gradient(
                        45deg,
                        #ffd187,
                        #fb8f3b,
                        #7b3c0b
                    );
                }
            }
            &.lvl10 {
                background-image: url(../img/iconach/ic-ach-r-10.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    content: "X";
                    color: #050505;
                    background: linear-gradient(
                        45deg,
                        #ececec,
                        #9c9c9c,
                        #1b1b1b
                    );
                }
            }
            &.lvl11 {
                background-image: url(../img/iconach/ic-ach-r-11.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    content: "XI";
                    color: #4f3302;
                    background: linear-gradient(
                        45deg,
                        #ffe690,
                        #eaaf44,
                        #6f4a04
                    );
                }
            }
            &.lvl12 {
                background-image: url(../img/iconach/ic-ach-r-12.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    content: "XII";
                    color: #001642;
                    background: linear-gradient(
                        45deg,
                        #beeaf9,
                        #b8aae0,
                        #3108ad
                    );
                }
            }
            &.lvl13 {
                background-image: url(../img/iconach/ic-ach-r-12.png);
                background-size: 60px;
                border-radius: 5px;
                &:after {
                    content: "XII";
                    color: #001642;
                    background: linear-gradient(
                        45deg,
                        #beeaf9,
                        #b8aae0,
                        #3108ad
                    );
                }

                .icon:after {
                    content: "";
                    background-image: url(../img/iconach/ic-lent.png);
                    background-size: 54px;
                    display: block;
                    position: absolute;
                    bottom: -7px;
                    left: 9px;
                    width: 54px;
                    height: 21px;
                }
            }
        }
    }

    .achiev-hint {
        display: block;
        width: 200px;
        position: absolute;
        left: calc(50% - -1px - 10px);
        top: 117px;
        border-radius: 10px;
        box-shadow: 0 0 10px #000;
        padding: 10px;
        background: linear-gradient(
            0deg,
            rgba(125, 127, 129, 0.75) 0%,
            #d5d8dade 100%
        );
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        -ms-border-radius: 8px;
        -o-border-radius: 8px;
        border-radius: 8px;
        box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.75),
            0 2px 6px rgba(0, 0, 0, 0.75);
        color: #fff;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(6px);
        &.hide {
            background: none;
            box-shadow: none;
        }
        .title {
            display: inline-block;
            width: 127px;
            position: relative;
            top: 8px;
            margin-bottom: 10px;
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
        }
        .txt {
            text-shadow: none;
        }
        .descr {
            display: inline-block;
            width: 200px;
            font-weight: normal;
            text-align: center;
            color: #fff;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.85);
        }
        .spec {
            color: red;
            font-weight: 800;
        }
        .rewards {
            display: block;
            width: 200px;
            position: relative;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            color: #600;
            .title {
                display: block;
                float: none;
                padding: 0;
                width: 100%;
                background: #a52b00;
                margin: auto;
                margin-bottom: 10px;
                border-radius: 20px;
                color: #ffa;
            }
        }

        @include achiev();
    }

    .left-side .left-panel .tab-panel.achiev-panel {
        .achiev-title {
            display: block;
            // width: 275px;
            width: 100%;
            height: 35px;
            line-height: 35px;
            // text-align: left;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            color: #ffeb9a;
            text-shadow: 0 2px 0 #000, 0 1px 10px #000;
            position: absolute;
            left: 5px;
            top: 5px;
            &:before,
            &:after {
                content: "";
                display: inline-block;
                width: 10px;
                height: 10px;
                background: linear-gradient(
                    60deg,
                    #ffeb9a,
                    #f1da7c,
                    #cfa831,
                    #ffeb9a
                );
                position: relative;
                top: -1px;
                border-radius: 100%;
                box-shadow: 0 2px 0 #000, 0 1px 10px #000;
                margin: 0px 5px;
            }
        }

        .left-tab-side {
            display: block;
            position: absolute;
            left: 0px;
            right: 0px;
            top: 40px;
            height: 471px;
            overflow: hidden;
            overflow-y: scroll;
            border-radius: 5px;
            box-shadow: inset 0 3px 0px #615048;
            background-color: #756b61;

            &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                border-radius: 10px;
                background-color: #7c665c;
            }
            &::-webkit-scrollbar {
                width: 10px;
                background-color: #9e8b7d;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 3px #796b60;
                //background-color: #edd372;
                background: linear-gradient(
                    to right,
                    #fff,
                    #f5de80,
                    #f4b766,
                    #b26d12
                );
            }

            .achiev-list {
                display: block;
                width: 100%;
                padding: 7px;
            }
        }

        .left-tab-side .achiev-list {
            @include achiev();
        }
    }
    .content-disable {
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, #786358, #584a49);
        box-shadow: inset 0 4px 0 #9c8b7c, inset 0 0 6px rgba(0, 0, 0, 0.25);
        border-radius: 6px 14px 14px 14px;
        .text-close {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            width: 50%;
            margin: auto;
            font-size: 24px;
            text-align: center;
            padding: 30px;
            font-weight: bold;
            color: #fff;
            text-shadow: 0 2px 0 #000, 0 1px 10px #000;
        }
    }
`;

export { stylesFileName, pageStyles };
