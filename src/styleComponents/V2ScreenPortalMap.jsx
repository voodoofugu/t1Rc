
import styled from "styled-components";

const V2ScreenPortalMap = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";

body .main {
    background-image: url(~imgPath/images/back/new/12-Undersea-world.jpg);
    .portal-map-box {
        position: absolute;
        width: 1200px;
        height: 640px;
        top: 0;
        left: 0;
        .btn-close-x {
            display: inline-block;
            width: 36px;
            height: 24px;
            position: absolute;
            top: 9px;
            left: 9px;
            background: linear-gradient(
                0deg,
                #ffe199 0%,
                #ecaa0a 18%,
                #ffe199 60%,
                #f4c557 85%,
                #ffe199 100%
            );
            box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2),
                0px 1px 3px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(0, 0, 0, 0.05);
            border-radius: 7px;
            z-index: 3;
            cursor: pointer;
            border: none;
            &:before {
                content: "";
                width: 100%;
                height: 100%;
                background: url(~imgPath/darkworld-back-arrow.png);
                background-size: 70%;
                background-position: center;
                background-repeat: no-repeat;
                display: block;
                filter: invert(1) opacity(0.66) drop-shadow(0px 0px 2px #fff);
            }
            &:after {
                content: "";
                background: rgba(255, 255, 255, 0.4);
                height: 8px;
                width: 25px;
                box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
                position: absolute;
                left: 5px;
                top: 3px;
                border-radius: 4px;
            }
        }
        .color-btn-info {
            width: 26px;
            height: 26px;
            position: absolute;
            top: 9px;
            right: 9px;
            background: linear-gradient(
                0deg,
                #ffe199 0%,
                #ecaa0a 18%,
                #ffe199 60%,
                #f4c557 85%,
                #ffe199 100%
            );
            border-radius: 100%;
            cursor: pointer;
            box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2),
                0px 1px 3px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 0, 0, 0.1);
            font-size: 26px;
            line-height: 24px;
            font-weight: 700;
            font-family: "Times New Roman", Times, serif;
            text-shadow: 0 1px 4px rgba(255, 255, 255, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #544c3c;
            z-index: 3;
            &:after {
                content: "";
                display: block;
                border-radius: 100%;
                position: absolute;
                background: linear-gradient(
                    rgba(255, 255, 255, 0.4),
                    rgba(255, 255, 255, 0)
                );
                height: 12px;
                width: 16px;
                box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
                left: 5px;
                top: 3px;
            }
            &:hover {
                filter: brightness(1.1);
            }
            &:active {
                transform: scale(0.96);
            }
        }
        .title-wrap {
            width: 226px;
            height: 36px;
            padding: 0 14px;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            transition: ease-in-out 0.1s;
            filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.8));
            z-index: 3;
            .header-title {
                background: linear-gradient(#fffe9a, #e9b039);
                border-radius: 0 0 10px 10px;
                line-height: 34px;
                height: 100%;
                font-size: 16px;
                color: rgba(0, 0, 0, 0.8);
                text-shadow: 0 1px 0.5px rgba(255, 255, 255, 0.4),
                    0 1px 2px rgba(255, 255, 255, 0.6),
                    0 1px 4px rgba(255, 255, 255, 0.2);
                text-transform: uppercase;
                font-weight: 700;
                box-shadow: inset 0 -4px 0 #ce9e37;
                display: flex;
                justify-content: center;
                position: relative;
                &:after {
                    content: "";
                    width: 1200px;
                    height: 46px;
                    position: absolute;
                    left: 50%;
                    top: 0px;
                    transform: translateX(-50%);
                    background-image: url(~imgPath/suphero-squad-frame-all@x2.png);
                    background-position: 0px -556px;
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    z-index: 1;
                    pointer-events: none;
                }
            }
            &:before,
            &:after {
                content: "";
                width: 14px;
                height: 100%;
                position: absolute;
                top: 0px;
                background: linear-gradient(#fffe9a, #e9b039 94%);
                z-index: -1;
            }
            &:before {
                left: 8px;
                transform: skewX(20deg);
                border-radius: 0 0 0 6.6px;
                box-shadow: inset 2px -4px 0 #ce9e37;
            }
            &:after {
                right: 8px;
                transform: skewX(-20deg);
                border-radius: 0 0 6.6px 0;
                box-shadow: inset -2px -4px 0 #ce9e37;
            }
        }
        .arrow {
            width: 40px;
            height: 68px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 3;
            cursor: pointer;
            background-image: url(~imgPath/suphero-squad-frame-all@x2.png),
                url(~imgPath/suphero-squad-frame-all@x2.png);
            background-position: -636px -858px;
            background-repeat: no-repeat;
            background-size: 1637px auto;
            filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.4))
                drop-shadow(0 0 6px rgba(0, 0, 0, 0.8));
            &:hover {
                filter: brightness(1.3) drop-shadow(0 0 6px rgba(0, 0, 0, 0.8));
            }
            &:active {
                transform: translateY(-50%) scale(0.92);
            }
            &.left {
                left: 6px;
            }
            &.right {
                right: 6px;
                background-position: -962px -858px;
            }
            &.unactive {
                cursor: not-allowed;
                filter: brightness(1.1) grayscale(0.8)
                    drop-shadow(0 0 2px rgba(0, 0, 0, 0.8));
            }
        }
        .progres-bar {
            width: 526px;
            height: 36px;
            border-radius: 20px;
            display: inline-block;
            background: linear-gradient(0deg, #6d5b2c, #ab8f45);
            position: absolute;
            left: 50%;
            bottom: 5px;
            transform: translate(-50%, 0%);
            box-shadow: inset 0 1px 0 1px #fffe9a, inset 0 -1px 0 1px #b88c2d,
                inset 0 5px 0 #cac371, inset 0 0 0 5px #d2d07e,
                inset 0 0 0 7px rgba(0, 0, 0, 0.2),
                0 2px 4px 0 rgba(0, 0, 0, 0.5), 0 0px 0px 2px rgba(0, 0, 0, 0.1);
            z-index: 3;
            cursor: help;
            &:before,
            &:after {
                content: "";
                width: 291px;
                height: 48px;
                position: absolute;
                top: -6px;
                background-image: url(~imgPath/suphero-squad-frame-all@x2.png);
                background-position: left -244px;
                background-repeat: no-repeat;
                background-size: 668px auto;
                pointer-events: none;
            }
            &:before {
                right: -28px;
                background-position: right -244px;
                z-index: 1;
            }
            &:after {
                left: -28px;
            }
            .bar-scale {
                width: 512px;
                height: 22px;
                border-radius: 20px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                overflow: hidden;
                &:before,
                &:after {
                    content: "";
                    position: absolute;
                    top: -5px;
                    left: calc(10% - 4px);
                    width: 8px;
                    height: 8px;
                    transform: rotate(-45deg);
                    z-index: 1;
                    background: #77632f;
                    box-shadow: 36.5px 36.5px 0 #77632f, 72.5px 72.5px 0 #77632f,
                        109px 109px 0 #77632f, 145px 145px 0 #77632f,
                        181px 181px 0 #77632f, 217.5px 217.5px 0 #77632f,
                        253.5px 253.5px 0 #77632f, 290px 290px 0 #77632f;
                    filter: drop-shadow(
                        0.5px 0.5px 0.5px rgba(255, 255, 255, 0.4)
                    );
                }
                &:after {
                    top: unset;
                    bottom: -5px;
                    background: #5a4b24;
                    transform: rotate(45deg) scaleY(-1);
                    box-shadow: 36.5px 36.5px 0 #5a4b24, 72.5px 72.5px 0 #5a4b24,
                        109px 109px 0 #5a4b24, 145px 145px 0 #5a4b24,
                        181px 181px 0 #5a4b24, 217.5px 217.5px 0 #5a4b24,
                        253.5px 253.5px 0 #5a4b24, 290px 290px 0 #5a4b24;
                }
                .bar-scale-patf {
                    height: 22px;
                    position: absolute;
                    background: linear-gradient(0deg, #39b54a, #8cea3f);
                    top: 0px;
                    left: 0%;
                    box-shadow: 0 0px 1px 2px rgba(0, 0, 0, 0.2);
                }
            }
            .bar-value,
            .bar-text {
                width: inherit;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #fff;
                line-height: 22px;
                font-size: 18px;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6),
                    0 1px 4px rgba(0, 0, 0, 0.6);
                opacity: 1;
                transition: ease-in-out 0.1s;
            }
            .bar-text {
                opacity: 0;
                transform: translate(-50%, -100%);
            }
            &:hover {
                .bar-text {
                    opacity: 1;
                    transform: translate(-50%, -50%);
                }
                .bar-value {
                    opacity: 0;
                    transform: translate(-50%, 0%);
                }
            }
        }
        .dungTreas-btn {
            position: absolute;
            right: 2px;
            bottom: 16px;
            width: 80px;
            height: 80px;
            z-index: 3;
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
            text-transform: uppercase;
            font-size: 13px;
            filter: drop-shadow(0 1px 6px rgba(0, 0, 0, 0.6));
            cursor: pointer;
            &:hover {
                &:before {
                    filter: brightness(1.2);
                }
            }
            &:active {
                &:before,
                &:after {
                    transform: scale(0.96);
                }
            }
            &.active {
                .timer {
                    display: none;
                }
                .claim-inf {
                    display: block;
                }
                &:after {
                    opacity: 0.8;
                    animation: fire 0.6s steps(9) infinite;
                }
            }
            &:before {
                content: "";
                display: block;
                width: 100%;
                height: 100%;
                background: url(~imgPath/dungTreas-ic.png);
                background-position: center;
                background-repeat: no-repeat;
                background-size: 100%;
            }
            &:after {
                content: "";
                width: 48px;
                height: 48px;
                position: absolute;
                left: 16px;
                top: 14px;
                background-image: url(~imgPath/tab-menu-icn-bg.png);
                background-size: auto 100%;
                background-repeat: no-repeat;
                background-position: -386px 0;
                opacity: 0;
            }
            .dungTreas-lvl {
                position: absolute;
                top: -9px;
                right: 8px;
                width: 46px;
                line-height: 19px;
                padding-left: 20px;
                background: linear-gradient(
                    90deg,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0)
                );
                z-index: -1;
            }
            .timer {
                position: absolute;
                width: 64px;
                line-height: 19px;
                border-radius: 4px;
                top: 70px;
                left: 50%;
                transform: translateX(-50%);
                padding: 0 8px;
                background: linear-gradient(
                    90deg,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0)
                );
            }
            .claim-inf {
                position: absolute;
                width: fit-content;
                line-height: 19px;
                padding: 0 6px;
                top: 70px;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(#fffe9a, #e9b039);
                color: #735233;
                text-shadow: 0 1px 0.5px rgb(255, 255, 255),
                    0 1px 2px rgba(255, 255, 255, 0.6),
                    0 1px 4px rgba(255, 255, 255, 0.2);
                border-radius: 4px;
                box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
                font-weight: 700;
                display: none;
                &:before {
                    content: "";
                    position: absolute;
                    width: 14px;
                    height: 5px;
                    background: #fffdc0;
                    clip-path: polygon(50% 100%, 0 0, 100% 0);
                    top: -4px;
                    left: 50%;
                    transform: translate(-50%, 0) scaleY(-1);
                }
            }
            .dungTreas-inf-ic {
                z-index: 1;
                text-align: center;
                width: 20px;
                height: 20px;
                position: absolute;
                top: -10px;
                left: 6px;
                background: linear-gradient(
                    0deg,
                    #53c0ff 0%,
                    #2252e0 50%,
                    #b8d2e0 100%
                );
                font-style: italic;
                font-family: "Times New Roman", Times, serif;
                text-transform: lowercase;
                border-radius: 100%;
                cursor: help;
                box-shadow: inset 0 0 0 1px #fff,
                    inset 0 0 4px rgba(0, 0, 0, 0.6),
                    0 2px 4px rgba(0, 0, 0, 0.75);
                color: #fff;
                font-size: 18px;
                font-weight: bold;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
                line-height: 20px;
                &:before {
                    content: "i";
                    position: relative;
                    left: -0.2px;
                }
                &:hover {
                    .dungTreas-inf-box {
                        right: 34px;
                        visibility: visible;
                        opacity: 1;
                    }
                }
                .dungTreas-inf-box {
                    font-family: "Roboto", sans-serif;
                    font-style: normal;
                    text-transform: initial;
                    font-size: 14px;
                    transition: ease-in-out 0.1s;
                    visibility: hidden;
                    opacity: 0;
                    position: absolute;
                    right: 14px;
                    bottom: -76px;
                    background: #55422c;
                    border: 2px solid #eecc60;
                    border-radius: 10px;
                    width: 204px;
                    height: auto;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 1);
                    pointer-events: none;
                    filter: drop-shadow(0 1px 0 #b58a2c)
                        drop-shadow(0 2px 0 #b58a2c)
                        drop-shadow(0 1px 3px rgba(0, 0, 0, 0.6))
                        drop-shadow(0 0 1px rgba(0, 0, 0, 0.2));
                    color: #fff;
                    z-index: 1;
                    &:before {
                        content: "";
                        border: 10px solid transparent;
                        border-left: 10px solid #eecc60;
                        border-radius: 2px;
                        position: absolute;
                        right: -20px;
                        bottom: 74px;
                    }
                    .dungTreas-tit {
                        text-transform: uppercase;
                        background: rgba(0, 0, 0, 0.2);
                        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1),
                            0 1px 1px rgba(255, 255, 255, 0.1);
                        padding-top: 2px;
                        border-radius: 8px 8px 0 0;
                        font-weight: 100;
                    }
                    .dungTreas-cont {
                        padding: 6px;
                    }
                    .dungTreas-text {
                        font-size: 12px;
                        font-weight: 100;
                        text-align: left;
                        line-height: 14px;
                        p {
                            display: inline-block;
                            margin: 0;
                            color: #ffe06b;
                        }
                    }
                    .mark {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        .prize-pic {
                            display: block;
                            width: 32px;
                            height: 32px;
                            margin-right: 6px;
                        }
                    }
                }
            }
        }
    }
    .chest-pop-up {
        position: absolute;
        top: 0;
        margin-top: 64px;
        width: 156px;
        height: 58px;
        padding: 4px;
        background: #f2c912;
        filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.8));
        border-radius: 5px;
        transition: transform 0s, opacity 0.1s, margin 0.1s, margin-left 0s,
            margin-right 0s;
        z-index: 5;
        transform: translateY(-34px);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        &:hover {
            margin-top: 74px;
            opacity: 1;
            visibility: visible;
        }
        &:before,
        &:after {
            content: "";
            width: 17px;
            height: 50px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-image: url(~imgPath/suphero-squad-frame-all@x2.png);
            background-position: left -525px;
            background-repeat: no-repeat;
            background-size: 890px auto;
            pointer-events: none;
            z-index: -2;
        }
        &:before {
            right: -16px;
            background-position: right -525px;
        }
        &:after {
            left: -16px;
        }
        .pop-up-bg {
            position: absolute;
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            background: #8b8b8b;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: inset 0 0px 1px 2px rgba(0, 0, 0, 0.2),
                inset 0 8px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            &:before {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 86px;
            }
            &:after {
                content: "";
                position: absolute;
                width: 16px;
                height: 10px;
                background: #f2c912;
                clip-path: polygon(50% 100%, 0 0, 100% 0);
                top: -11px;
                left: 50%;
                transform: scaleY(-1) translateX(-50%);
            }
        }
        .chests-scroll-box {
            transform: rotate(-90deg) scaleX(-1);
            position: relative;
            left: 0px;
            top: -48px;
            width: 56px;
            height: 153px;
            overflow-x: hidden;
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: #f2c912 #7c665c;
            &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                border-radius: 4px;
                background-color: #7c665c;
            }
            &::-webkit-scrollbar {
                width: 3px;
                border-radius: 4px;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background: #f2c912;
            }
            .chests-scroll {
                padding: 3px;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                gap: 8px;
                .pop-up-girl {
                    transform: rotate(-90deg) scaleX(-1);
                    width: 44px;
                    height: 44px;
                    border-radius: 4px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 -1px rgba(255, 255, 255, 0.6),
                        0 0 0 1px #ff9b37, 0 1px 4px 2px rgba(0, 0, 0, 0.4),
                        0 0 0 2px rgba(0, 0, 0, 0.2);
                    background: url(~imgPath/v2-trophy-bg.jpg), #7e6a5d;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-blend-mode: soft-light;
                    img {
                        width: 100%;
                        height: auto;
                    }
                    .value {
                        width: 32px;
                        line-height: 11px;
                        padding-top: 1px;
                        position: absolute;
                        bottom: 0px;
                        left: 50%;
                        transform: translateX(-50%);
                        text-align: center;
                        margin: 0 auto;
                        color: #fff;
                        font-size: 10px;
                        font-weight: bold;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 1),
                            0 1px 4px rgba(0, 0, 0, 0.6);
                        background: linear-gradient(#805a31, #c18346);
                        border-radius: 10px 10px 0 0;
                        box-shadow: inset 0 1px 0 #dea569;
                        filter: drop-shadow(0 0 4px rgba(0, 0, 0, 1));
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
                    &:hover {
                        filter: brightness(1.1);
                    }
                }
            }
        }
        &.active {
            opacity: 1;
            visibility: visible;
            margin-top: 74px;
        }
        &.left {
            margin-left: 52px;
            .pop-up-bg {
                &:after {
                    left: 20px;
                    transform: scaleY(-1);
                }
            }
        }
        &.right {
            margin-left: -52px;
            .pop-up-bg {
                &:after {
                    left: unset;
                    right: 20px;
                    transform: scaleY(-1);
                }
            }
        }
    }
}

.map-locs-wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;

    .loc-box {
        position: absolute;
        pointer-events: none;
        &:hover {
            z-index: 1;
            filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3))
                drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
        }
        .map-bg {
            position: absolute;
            cursor: pointer;
            pointer-events: all;
            background-repeat: no-repeat;
            background-size: 1200px 640px;
            height: 320px;
            filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
            &:before {
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                transition: background-position ease-in-out 0.4s;
                background: linear-gradient(
                        342deg,
                        rgba(255, 255, 255, 0) 0%,
                        rgba(255, 255, 255, 0) 26%,
                        rgba(255, 255, 255, 0.2) 26%,
                        rgba(255, 255, 255, 0.2) 48%,
                        rgba(255, 255, 255, 0) 48%,
                        rgba(255, 255, 255, 0) 60%,
                        rgba(255, 255, 255, 0.2) 60%,
                        rgba(255, 255, 255, 0.2) 70%,
                        rgba(255, 255, 255, 0) 70%,
                        rgba(255, 255, 255, 0) 100%
                    ),
                    rgba(255, 255, 255, 0);
                background-position: 0 -310px;
                background-repeat: no-repeat;
                opacity: 0;
                pointer-events: none;
            }
            &:after {
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                pointer-events: none;
                backdrop-filter: blur(0px);
                transition: ease-in-out 0.2s 0s;
                background: rgba(255, 255, 255, 0);
            }
            svg {
                width: 100%;
                height: 100%;
                fill: rgba(0, 0, 0, 0);
                pointer-events: none;
            }
            .svg-frame {
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
                pointer-events: none;
                transition: ease-in-out 0.1s;
            }
            &:hover {
                z-index: 1;
                &:before {
                    background-position: 0 310px;
                    animation: opa 0.25s 1;
                }
                &:after {
                    background: rgba(255, 255, 255, 0.2);
                    mix-blend-mode: overlay;
                    transition: ease-in-out 0.1s 0.1s;
                }
                .svg-frame {
                    stroke: #ffffff;
                    stroke-dasharray: 0;
                }
            }
            .station-wrap {
                width: 84px;
                height: 120px;
                position: absolute;
                filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
                .station {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background-image: url(~imgPath/map-station.png);
                    background-repeat: no-repeat;
                    background-size: 90px;
                    background-position: center -9px;
                    &:after {
                        content: "";
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        background-repeat: no-repeat;
                        background-image: url(~imgPath/map-station-spritesheet.png);
                        background-size: 4956px 120px;
                        z-index: 1;
                        left: 0;
                        top: -21px;
                        visibility: hidden;
                        opacity: 0;
                        transition: ease-in-out 0.4s;
                    }
                }
                .station-lvl-box {
                    visibility: hidden;
                    width: 100%;
                    height: 30px;
                    position: absolute;
                    top: 67px;
                    left: 0;
                    z-index: 2;
                    opacity: 0;
                    transition: ease-in-out 0s;
                    text-align: center;
                    text-transform: uppercase;
                    font-size: 13px;
                    .lvl-box-text1 {
                        color: #4c3a25;
                        text-shadow: 0px 1px 2px #fff;
                        font-weight: 700;
                        padding-top: 8px;
                        display: inline-block;
                    }
                    .lvl-box-text2 {
                        color: #4c3a25;
                        text-shadow: 0px 1px 2px #fff;
                        font-weight: 700;
                        padding-top: 8px;
                        display: inline-block;
                    }
                }
                &:after {
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 40px;
                    transform: translateX(-50%) scaleY(0.8);
                    font-size: 18px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 0.8);
                    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
                }
            }
            .chest-wrap {
                &:before {
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background-image: url(~imgPath/map-station-lock1.png);
                    background-repeat: no-repeat;
                    background-position: center 84px;
                    background-size: 180px auto;
                    z-index: 1;
                    transition: ease-in-out 0.1s;
                    visibility: hidden;
                    opacity: 0;
                    pointer-events: none;
                }
                &:after {
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    pointer-events: none;
                    background-image: url(~imgPath/map-station-lock2.png),
                        url(~imgPath/map-station-lock1.png);
                    background-repeat: no-repeat;
                    background-size: 180px 180px, 180px auto;
                    background-position: center 88px, center 86px;
                    z-index: 1;
                    visibility: hidden;
                    opacity: 0;
                    transition: ease-in-out 0.1s;
                }
                .chest {
                    position: absolute;
                    background-image: url(~imgPath/sh-sq-map-chests.png);
                    width: 78px;
                    height: 78px;
                    pointer-events: auto;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    .chest-notif {
                        position: absolute;
                        top: -6px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: auto;
                        min-width: 50px;
                        padding: 0 6px;
                        line-height: 22px;
                        font-size: 15px;
                        white-space: nowrap;
                        background: linear-gradient(#fffe9a, #e9b039);
                        color: #735233;
                        text-transform: uppercase;
                        font-weight: 700;
                        text-shadow: 0 1px 0.5px rgba(255, 255, 255, 1),
                            0 1px 2px rgba(255, 255, 255, 0.6),
                            0 1px 4px rgba(255, 255, 255, 0.2);
                        border-radius: 6px;
                        z-index: 2;
                        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
                        filter: drop-shadow(0 1px 0 #b58a2c)
                            drop-shadow(0 2px 0 #b58a2c)
                            drop-shadow(0 1px 3px rgba(0, 0, 0, 0.6))
                            drop-shadow(0 0 1px rgba(0, 0, 0, 0.2));
                        transition: ease-in-out 0.1s;
                        pointer-events: none;
                        opacity: 0;
                        visibility: hidden;
                        &:before {
                            content: "";
                            position: absolute;
                            width: 16px;
                            height: 6px;
                            background: #e9b039;
                            clip-path: polygon(50% 100%, 0 0, 100% 0);
                            bottom: -6px;
                            left: 50%;
                            transform: translate(-50%, 0);
                        }
                    }
                    &.closed {
                        background-position: 0 0;
                        cursor: help;
                        &:hover {
                            filter: brightness(1.1);
                            .chest-notif {
                                opacity: 1;
                                visibility: visible;
                                top: -18px;
                            }
                        }
                    }
                    &.ready {
                        background-position: 0 -78px;
                        cursor: pointer;
                        &:hover {
                            filter: brightness(1.1);
                        }
                        &:before {
                            content: "";
                            width: 58px;
                            height: 78px;
                            position: absolute;
                            left: 10px;
                            top: -16px;
                            background-image: url(~imgPath/spritesheet.png);
                            background-repeat: no-repeat;
                            background-size: 1740px 78px;
                            animation: hero 2s steps(29) infinite;
                            mix-blend-mode: multiply;
                            pointer-events: none;
                        }
                        &:after {
                            content: "";
                            width: 80px;
                            height: 40px;
                            position: absolute;
                            left: 50%;
                            top: 30px;
                            transform: translateX(-50%);
                            border-radius: 100%;
                            background: radial-gradient(
                                rgba(0, 0, 0, 0) 20%,
                                rgb(255, 242, 96) 50%,
                                rgba(0, 0, 0, 0) 80%
                            );
                            pointer-events: none;
                            mix-blend-mode: multiply;
                            animation: 0.6s cubic-bezier(0.76, 0.01, 0.31, 0.99)
                                infinite running pulsation;
                        }
                        .chest-notif {
                            opacity: 1;
                            visibility: visible;
                            top: -18px;
                            animation: 0.6s cubic-bezier(0.76, 0.01, 0.31, 0.99)
                                infinite running moveDown;
                        }
                    }
                    &.open {
                        background-position: 0 -156px;
                        cursor: default;
                        filter: brightness(1.1) grayscale(0.6);
                        pointer-events: none;
                        .chest-notif {
                            display: none;
                        }
                    }
                    &.chest-1 {
                        transform: scaleX(1);
                    }
                    &.chest-2 {
                        transform: scaleX(-1);
                        > * {
                            transform: translateX(-50%) scaleX(-1);
                        }
                    }
                }
            }
            &.map-location1 {
                width: 215.03px;
                left: 0;
                top: 320px;
                clip-path: url(#clipping-1);
                .station-wrap {
                    &:after {
                        content: "1";
                    }
                }
                .chest-wrap {
                    &:before {
                        margin-left: -85px;
                    }
                    &:after {
                        left: -20px;
                    }
                }
            }
            &.map-location2 {
                width: 300.77px;
                left: 0;
                top: 0;
                clip-path: url(#clipping-2);
                .station-wrap {
                    &:after {
                        content: "2";
                    }
                }
                .chest-wrap {
                    &:before {
                        margin-left: -40px;
                    }
                    &:after {
                        left: -20px;
                    }
                }
            }
            &.map-location3 {
                width: 345px;
                left: 214px;
                top: 0;
                clip-path: url(#clipping-3);
                .station-wrap {
                    &:after {
                        content: "3";
                    }
                }
            }
            &.map-location4 {
                width: 345px;
                left: 128px;
                top: 320px;
                clip-path: url(#clipping-3);
                .station-wrap {
                    &:after {
                        content: "4";
                    }
                }
            }
            &.map-location5 {
                width: 345px;
                left: 384.5px;
                top: 320px;
                clip-path: url(#clipping-3);
                .station-wrap {
                    &:after {
                        content: "5";
                    }
                }
            }
            &.map-location6 {
                width: 345px;
                left: 471px;
                top: 0;
                clip-path: url(#clipping-3);
                .station-wrap {
                    &:after {
                        content: "6";
                    }
                }
            }
            &.map-location7 {
                width: 345px;
                left: 728px;
                top: 0;
                clip-path: url(#clipping-3);
                .station-wrap {
                    &:after {
                        content: "7";
                    }
                }
            }
            &.map-location8 {
                width: 345px;
                left: 642px;
                top: 320px;
                clip-path: url(#clipping-3);
                .station-wrap {
                    &:after {
                        content: "8";
                    }
                }
            }
            &.map-location9 {
                width: 301px;
                left: 899px;
                top: 320px;
                clip-path: url(#clipping-4);
                .station-wrap {
                    &:after {
                        content: "9";
                    }
                }
                .chest-wrap {
                    &:after {
                        left: 20px;
                    }
                }
            }
            &.map-location10 {
                width: 215px;
                left: 985px;
                top: 0;
                clip-path: url(#clipping-5);
                .station-wrap {
                    &:after {
                        content: "10";
                    }
                }
                .chest-wrap {
                    &:before {
                        margin-left: -42px;
                    }
                    &:after {
                        left: 20px;
                    }
                }
            }
        }

        &.lock {
            .map-bg {
                cursor: unset;
                &:after {
                    background: rgba(0, 0, 0, 0.4);
                    -webkit-backdrop-filter: blur(10px);
                    backdrop-filter: blur(10px);
                }
                .chest-wrap {
                    .chest {
                        pointer-events: none;
                    }
                }
                .chest-wrap {
                    &:before {
                        background-image: url(~imgPath/map-station-lock1.png);
                        background-repeat: no-repeat;
                        background-position: center 102px;
                        background-size: 150px auto;
                    }
                    &:after {
                        background: url(~imgPath/v2-lock-ic.png);
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: 120px 120px;
                        mix-blend-mode: difference;
                        filter: brightness(0.2)
                            drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8));
                    }
                }
                &:hover {
                    &:after {
                        background: rgba(0, 0, 0, 0.3);
                        mix-blend-mode: unset;
                    }
                    .chest-wrap {
                        &:after {
                            background-size: 100px 100px;
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
            }
        }

        &.foropen {
            .map-bg {
                &:after {
                    background: rgba(0, 0, 0, 0.4);
                    -webkit-backdrop-filter: blur(10px);
                    backdrop-filter: blur(10px);
                    mix-blend-mode: unset;
                }
                &:hover {
                    &:after {
                        background: rgba(0, 0, 0, 0.3);
                        mix-blend-mode: unset;
                    }
                    .chest-wrap {
                        &:after {
                            transform: rotate(15deg);
                            background-position: center 104px, center 90px;
                        }
                    }
                }
                .chest-wrap {
                    &:before {
                        content: "";
                        width: 120px;
                        height: 120px;
                        position: absolute;
                        background-image: url(~imgPath/map-station-lockflare.png);
                        background-repeat: no-repeat;
                        background-size: 100%;
                        background-position: center;
                        left: 112px;
                        top: 112px;
                        animation: 8s linear 0s normal none infinite running
                            lockflare;
                        transition: ease-in-out 0.1s;
                        visibility: visible;
                    }
                    &:after {
                        visibility: visible;
                        opacity: 1;
                        background-image: url(~imgPath/map-station-lock2.png),
                            url(~imgPath/map-station-lock1.png);
                        background-repeat: no-repeat;
                        background-size: 150px 150px, 150px auto;
                        background-position: center 104px, center 102px;
                        mix-blend-mode: unset;
                        filter: none;
                    }
                    .chest {
                        pointer-events: none;
                    }
                }
            }
        }

        &.active {
            z-index: 2;
            .map-bg {
                cursor: unset;
                &:after {
                    background: rgba(255, 255, 255, 0.4);
                    mix-blend-mode: overlay;
                    transition: ease-in-out 0.4s 0s;
                }
                &:hover {
                    &:after {
                        background: rgba(255, 255, 255, 0.3);
                    }
                }
                .station-wrap {
                    z-index: 1;
                    .station {
                        &:after {
                            animation: hero 2s steps(58) infinite;
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                    .station-lvl-box {
                        visibility: visible;
                        opacity: 1;
                        transition: ease-in-out 0.4s;
                    }
                }
                .chest-wrap {
                    &:before,
                    &:after {
                        transition: ease-in-out 0.4s;
                    }
                    .chest {
                        z-index: 1;
                    }
                }
                .svg-frame {
                    stroke: #ffffff;
                    stroke-width: 4px;
                    stroke-dasharray: 0;
                }
            }
        }
    }

    .inf-btn {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        position: absolute;
        z-index: 2;
        background: url(~imgPath/gate-icn.png),
            linear-gradient(0deg, #836932, #62441d);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 28px, 100%;
        box-shadow: inset 0 0 0 2px #fff;
        filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.6));
        cursor: help;
        .inf-text {
            opacity: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
            width: auto;
            min-width: 50px;
            padding: 0 6px;
            line-height: 22px;
            font-size: 15px;
            white-space: nowrap;
            background: linear-gradient(#fffe9a, #e9b039);
            color: #735233;
            text-transform: uppercase;
            font-weight: 700;
            text-shadow: 0 1px 0.5px rgb(255, 255, 255),
                0 1px 2px rgba(255, 255, 255, 0.6),
                0 1px 4px rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            z-index: 2;
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
            filter: drop-shadow(0 1px 0 #b58a2c) drop-shadow(0 2px 0 #b58a2c)
                drop-shadow(0 1px 3px rgba(0, 0, 0, 0.6))
                drop-shadow(0 0 1px rgba(0, 0, 0, 0.2));
            transition: ease-in-out 0.1s;
            pointer-events: none;
            &:before {
                content: "";
                position: absolute;
                width: 16px;
                height: 7px;
                clip-path: polygon(50% 100%, 0 0, 100% 0);
                background: #e9b039;
            }
        }
        &:hover {
            background: url(~imgPath/gate-icn.png),
                linear-gradient(0deg, #937638, #724f22);
            background-position: center;
            background-repeat: no-repeat;
            background-size: 28px, 100%;
            .inf-text {
                opacity: 1;
            }
        }
        &.step0 {
            display: none;
        }
        &.step1 {
            left: 82px;
            top: 300px;
            .inf-text {
                transform: translate(-50%, -100%);
                &:before {
                    bottom: -6px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
            &:hover {
                .inf-text {
                    left: 50%;
                    top: -36px;
                    transform: translateX(-50%);
                }
            }
        }
        &.step2 {
            left: 238px;
            top: 140px;
            .inf-text {
                transform: translate(0%, -50%);
                &:before {
                    top: 50%;
                    left: -10px;
                    transform: translateY(-50%) rotate(90deg);
                    background: linear-gradient(90deg, #fffe9a, #e9b039);
                }
            }
            &:hover {
                .inf-text {
                    left: 50px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
        &.step3 {
            left: 324px;
            top: 300px;
            .inf-text {
                transform: translate(-50%, 0%);
                &:before {
                    top: -6px;
                    left: 50%;
                    transform: translateX(-50%) rotate(180deg);
                    background: #fffe9a;
                }
            }
            &:hover {
                .inf-text {
                    left: 50%;
                    top: 50px;
                    transform: translateX(-50%);
                }
            }
        }
        &.step4 {
            left: 408px;
            top: 460px;
            .inf-text {
                transform: translate(0%, -50%);
                &:before {
                    top: 50%;
                    left: -10px;
                    transform: translateY(-50%) rotate(90deg);
                    background: linear-gradient(90deg, #fffe9a, #e9b039);
                }
            }
            &:hover {
                .inf-text {
                    left: 50px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
        &.step5 {
            left: 576px;
            top: 300px;
            .inf-text {
                transform: translate(-50%, -100%);
                &:before {
                    bottom: -6px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
            &:hover {
                .inf-text {
                    left: 50%;
                    top: -36px;
                    transform: translateX(-50%);
                }
            }
        }
        &.step6 {
            left: 752px;
            top: 140px;
            .inf-text {
                transform: translate(0%, -50%);
                &:before {
                    top: 50%;
                    left: -10px;
                    transform: translateY(-50%) rotate(90deg);
                    background: linear-gradient(90deg, #fffe9a, #e9b039);
                }
            }
            &:hover {
                .inf-text {
                    left: 50px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
        &.step7 {
            left: 832px;
            top: 300px;
            .inf-text {
                transform: translate(-50%, 0%);
                &:before {
                    top: -6px;
                    left: 50%;
                    transform: translateX(-50%) rotate(180deg);
                    background: #fffe9a;
                }
            }
            &:hover {
                .inf-text {
                    left: 50%;
                    top: 50px;
                    transform: translateX(-50%);
                }
            }
        }
        &.step8 {
            left: 922px;
            top: 460px;
            .inf-text {
                transform: translate(0%, -50%);
                &:before {
                    top: 50%;
                    left: -10px;
                    transform: translateY(-50%) rotate(90deg);
                    background: linear-gradient(90deg, #fffe9a, #e9b039);
                }
            }
            &:hover {
                .inf-text {
                    left: 50px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
        &.step9 {
            left: 1078px;
            top: 300px;
            .inf-text {
                transform: translate(-50%, -100%);
                &:before {
                    bottom: -6px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
            &:hover {
                .inf-text {
                    left: 50%;
                    top: -36px;
                    transform: translateX(-50%);
                }
            }
        }
    }

    &.map-01 {
        .loc-box {
            .map-bg {
                background: url(~imgPath/portal-map-location-01.jpg);
                &.map-location1 {
                    background-position: 0 -320px;
                    .station-wrap {
                        top: 88px;
                        left: 34px;
                    }
                    .chest-1 {
                        top: 180px;
                        left: 6px;
                    }
                    .chest-2 {
                        top: 30px;
                        left: 110px;
                    }
                }
                &.map-location2 {
                    background-position: 0 0;
                    .station-wrap {
                        top: 166px;
                        left: 140px;
                    }
                    .chest-1 {
                        top: 206px;
                        left: 20px;
                    }
                    .chest-2 {
                        top: 76px;
                        left: 184px;
                    }
                }
                &.map-location3 {
                    background-position: -213px 0;
                    .station-wrap {
                        top: 140px;
                        left: 100px;
                    }
                    .chest-1 {
                        top: 62px;
                        left: 86px;
                    }
                    .chest-2 {
                        top: 238px;
                        left: 112px;
                    }
                }
                &.map-location4 {
                    background-position: -127px -320px;
                    .station-wrap {
                        top: 112px;
                        left: 142px;
                    }
                    .chest-1 {
                        top: 30px;
                        left: 102px;
                    }
                    .chest-2 {
                        top: 180px;
                        left: 62px;
                    }
                }
                &.map-location5 {
                    background-position: -384px -320px;
                    .station-wrap {
                        top: 156px;
                        left: 78px;
                    }
                    .chest-1 {
                        top: 82px;
                        left: 78px;
                    }
                    .chest-2 {
                        top: 30px;
                        left: 238px;
                    }
                }
                &.map-location6 {
                    background-position: -470px 0;
                    .station-wrap {
                        top: 122px;
                        left: 134px;
                    }
                    .chest-1 {
                        top: 246px;
                        left: 96px;
                    }
                    .chest-2 {
                        top: 58px;
                        left: 236px;
                    }
                }
                &.map-location7 {
                    background-position: -727px 0;
                    .station-wrap {
                        top: 144px;
                        left: 104px;
                    }
                    .chest-1 {
                        top: 98px;
                        left: 74px;
                    }
                    .chest-2 {
                        top: 220px;
                        left: 168px;
                    }
                }
                &.map-location8 {
                    background-position: -641px -320px;
                    .station-wrap {
                        top: 110px;
                        left: 128px;
                    }
                    .chest-1 {
                        top: 30px;
                        left: 100px;
                    }
                    .chest-2 {
                        top: 180px;
                        left: 196px;
                    }
                }
                &.map-location9 {
                    background-position: -898px -320px;
                    .station-wrap {
                        top: 212px;
                        left: 128px;
                    }
                    .chest-1 {
                        top: 180px;
                        left: 60px;
                    }
                    .chest-2 {
                        top: 30px;
                        left: 124px;
                    }
                }
                &.map-location10 {
                    background-position: -985px 0;
                    .station-wrap {
                        top: 138px;
                        left: 38px;
                    }
                    .chest-1 {
                        top: 242px;
                        left: 76px;
                    }
                    .chest-2 {
                        top: 134px;
                        left: 120px;
                    }
                }
            }
        }
    }
    &.map-02 {
        .loc-box {
            .map-bg {
                background: url(~imgPath/portal-map-location-02.jpg);
                &.map-location1 {
                    background-position: 0 -320px;
                    .station-wrap {
                        top: 66px;
                        left: 404px;
                    }
                    .chest-1 {
                        top: 180px;
                        left: 60px;
                    }
                    .chest-2 {
                        top: 30px;
                        left: 98px;
                    }
                }
                &.map-location2 {
                    background-position: 0 0;
                    .station-wrap {
                        top: 128px;
                        left: 24px;
                    }
                    .chest-1 {
                        top: 212px;
                        left: 8px;
                    }
                    .chest-2 {
                        top: 52px;
                        left: 170px;
                    }
                }
                &.map-location3 {
                    background-position: -213px 0;
                    .station-wrap {
                        top: 36px;
                        left: 102px;
                    }
                    .chest-1 {
                        top: 228px;
                        left: 42px;
                    }
                    .chest-2 {
                        top: 60px;
                        left: 224px;
                    }
                }
                &.map-location4 {
                    background-position: -127px -320px;
                    .station-wrap {
                        top: 78px;
                        left: 152px;
                    }
                    .chest-1 {
                        top: 30px;
                        left: 94px;
                    }
                    .chest-2 {
                        top: 180px;
                        left: 124px;
                    }
                }
                &.map-location5 {
                    background-position: -384px -320px;
                    .station-wrap {
                        top: 170px;
                        left: 148px;
                    }
                    .chest-1 {
                        top: 180px;
                        left: 42px;
                    }
                    .chest-2 {
                        top: 30px;
                        left: 238px;
                    }
                }
                &.map-location6 {
                    background-position: -470px 0;
                    .station-wrap {
                        top: 216px;
                        left: 134px;
                    }
                    .chest-1 {
                        top: 244px;
                        left: 32px;
                    }
                    .chest-2 {
                        top: 64px;
                        left: 172px;
                    }
                }
                &.map-location7 {
                    background-position: -727px 0;
                    .station-wrap {
                        top: 120px;
                        left: 134px;
                    }
                    .chest-1 {
                        top: 238px;
                        left: 30px;
                    }
                    .chest-2 {
                        top: 96px;
                        left: 204px;
                    }
                }
                &.map-location8 {
                    background-position: -641px -320px;
                    .station-wrap {
                        top: 94px;
                        left: 206px;
                    }
                    .chest-1 {
                        top: 38px;
                        left: 90px;
                    }
                    .chest-2 {
                        top: 180px;
                        left: 40px;
                    }
                }
                &.map-location9 {
                    background-position: -898px -320px;
                    .station-wrap {
                        top: 218px;
                        left: 32px;
                    }
                    .chest-1 {
                        top: 162px;
                        left: 136px;
                    }
                    .chest-2 {
                        top: 36px;
                        left: 88px;
                    }
                }
                &.map-location10 {
                    background-position: -985px 0;
                    .station-wrap {
                        top: 80px;
                        left: 86px;
                    }
                    .chest-1 {
                        top: 242px;
                        left: 32px;
                    }
                    .chest-2 {
                        top: 180px;
                        left: 136px;
                    }
                }
            }
        }
    }
}

@keyframes lockflare {
    0% {
        transform: rotate(0deg);
        opacity: 0.1;
    }
    25% {
        transform: rotate(90deg);
        opacity: 0.3;
    }
    50% {
        transform: rotate(180deg);
        opacity: 0.1;
    }
    75% {
        transform: rotate(270deg);
        opacity: 0.3;
    }
    100% {
        transform: rotate(360deg);
        opacity: 0.1;
    }
}
@keyframes hero {
    0% {
        background-position-x: left;
    }
    100% {
        background-position-x: right;
    }
}
@keyframes opa {
    0% {
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    60% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes pulsation {
    0% {
        opacity: 0;
        transform: translateX(-50%) scale(0);
    }
    50% {
        opacity: 1;
        transform: translateX(-50%) scale(0.5);
    }
    100% {
        opacity: 0;
        transform: translateX(-50%) scale(1.4);
    }
}

@keyframes moveDown {
    0% {
        margin-top: 0px;
    }
    50% {
        margin-top: -6px;
    }
    100% {
        margin-top: 0px;
    }
}

`;

export default V2ScreenPortalMap;
