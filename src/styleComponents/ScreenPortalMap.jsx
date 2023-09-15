import { styled, css } from "styled-components";

const ScreenPortalMapStyles = css`
    body .main {
        .portal-map-box {
            position: absolute;
            width: 1200px;
            height: 640px;
            top: 0;
            left: 0;
            background: #fff;
            z-index: 1000;
            .locs-box {
                width: 100%;
                height: 100%;
                position: relative;
                overflow: hidden;
                .map-loc {
                    position: absolute;
                    stroke: #f5eab4;
                    stroke-width: 2px;
                    pointer-events: none;
                    svg {
                        pattern {
                            // stroke: #f5eab4;
                            // stroke-width: 2px;
                            // pointer-events: none;
                        }
                        .map-loc-bg {
                            // clip-path: url(portal-map-location1.svg);
                            pointer-events: none;
                        }
                        path {
                            cursor: pointer;
                            pointer-events: all;
                        }
                    }
                    &:hover {
                        filter: brightness(1.1);
                        z-index: 1;
                    }
                    &.loc1 {
                        width: 300.7776px;
                        height: 320px;
                        left: 0;
                        top: 0;
                        fill: url(#map-bg1);
                        svg {
                            .map-loc-bg {
                                transform: translate(0, 0);
                            }
                        }
                    }
                    &.loc2 {
                        width: 342.3878px;
                        height: 320px;
                        left: 215.0339px;
                        top: 0;
                        fill: url(#map-bg2);
                        svg {
                            .map-loc-bg {
                                transform: translate(-214px, 0);
                            }
                        }
                    }
                    &.loc3 {
                        width: 342.3878px;
                        height: 320px;
                        left: 471.678px;
                        top: 0;
                        fill: url(#map-bg3);
                        svg {
                            .map-loc-bg {
                                transform: translate(-472px, 0);
                            }
                        }
                    }
                    &.loc4 {
                        width: 342.3878px;
                        height: 728.322px;
                        left: 728px;
                        top: 0;
                        fill: url(#map-bg4);
                        svg {
                            .map-loc-bg {
                                transform: translate(-728px, 0);
                            }
                        }
                    }
                    &.loc5 {
                        width: 215.0339px;
                        height: 320px;
                        right: 0;
                        top: 0;
                        fill: url(#map-bg5);
                        svg {
                            .map-loc-bg {
                                transform: translate(-984px, 0);
                            }
                        }
                    }
                    &.loc6 {
                        width: 215.0339px;
                        height: 320px;
                        left: 0;
                        top: 320px;
                        fill: url(#map-bg6);
                        svg {
                            .map-loc-bg {
                                transform: translate(0px, -320px);
                            }
                        }
                    }
                    &.loc7 {
                        width: 342.3878px;
                        height: 320px;
                        left: 129.2902px;
                        top: 320px;
                        fill: url(#map-bg7);
                        svg {
                            .map-loc-bg {
                                transform: translate(-129px, -320px);
                            }
                        }
                    }
                    &.loc8 {
                        width: 342.3878px;
                        height: 320px;
                        left: 385.9342px;
                        top: 320px;
                        fill: url(#map-bg8);
                        svg {
                            .map-loc-bg {
                                transform: translate(-386px, -320px);
                            }
                        }
                    }
                    &.loc9 {
                        width: 342.3878px;
                        height: 320px;
                        left: 642.5783px;
                        top: 320px;
                        fill: url(#map-bg9);
                        svg {
                            .map-loc-bg {
                                transform: translate(-642px, -320px);
                            }
                        }
                    }
                    &.loc10 {
                        width: 300.7776px;
                        height: 320px;
                        right: 0;
                        top: 320px;
                        fill: url(#map-bg10);
                        svg {
                            .map-loc-bg {
                                transform: translate(-899px, -320px);
                            }
                        }
                    }
                }
            }
            .header-btn-wrap {
                position: absolute;
                top: 20px;
                left: 0px;
                width: 1200px;
                height: 40px;
                z-index: 3;
                .header-btn {
                    width: 140px;
                    height: 40px;
                    background: linear-gradient(0deg, #e9b039, #fffe9a);
                    box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.2),
                        0 2px 4px 0 rgba(0, 0, 0, 0.5),
                        0 0px 0px 2px rgba(0, 0, 0, 0.1);
                    color: #4c3a25;
                    text-shadow: 0px 1px 2px #fff;
                    font-size: 16px;
                    cursor: pointer;
                    font-weight: 700;
                    text-align: center;
                    text-transform: uppercase;
                    border-radius: 6px;
                    display: inline-block;
                    line-height: 36px;
                    transform: scale(0.968);
                    transition: ease-in-out 0.03s;
                    &:hover {
                        transform: scale(1);
                    }
                    &:active {
                        box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.2),
                            0 1px 1px 0 rgba(0, 0, 0, 0.5),
                            0 0px 0px 2px rgba(0, 0, 0, 0.1);
                        line-height: 40px;
                    }
                }
                .to-squads {
                    position: absolute;
                    left: 20px;
                    &:before {
                        content: "‹";
                        position: absolute;
                        width: 20px;
                        height: 40px;
                        top: -1.4px;
                        left: 6px;
                        color: #4c3a25;
                        text-shadow: 0px 1px 2px #fff;
                        font-size: 22px;
                        font-weight: 700;
                        text-align: center;
                        text-transform: uppercase;
                    }
                }
                .to-worlds {
                    position: absolute;
                    right: 20px;
                    &:before {
                        content: "›";
                        position: absolute;
                        width: 20px;
                        height: 40px;
                        top: -1.4px;
                        right: 6px;
                        color: #4c3a25;
                        text-shadow: 0px 1px 2px #fff;
                        font-size: 22px;
                        font-weight: 700;
                        text-align: center;
                        text-transform: uppercase;
                    }
                }
                .header-bar {
                    width: 530px;
                    height: 40px;
                    border-radius: 20px;
                    display: inline-block;
                    background: linear-gradient(0deg, #e9b039, #fffe9a);
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%, 0%);
                    box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2),
                        0 2px 4px 0 rgba(0, 0, 0, 0.5),
                        0 0px 0px 2px rgba(0, 0, 0, 0.1);
                    &:before {
                        content: "";
                        width: 516px;
                        height: 26px;
                        border-radius: 20px;
                        display: inline-block;
                        background: #a08740;
                        margin-top: 6px;
                        box-shadow: inset 0 0px 1px 2px rgba(0, 0, 0, 0.2),
                            inset 0 8px 8px 0px rgba(0, 0, 0, 0.2),
                            0 2px 0px 0 rgba(255, 255, 255, 0.4),
                            0 -2px 0px 0px rgba(0, 0, 0, 0.2);
                    }
                    &:after {
                        content: "";
                        width: 12px;
                        height: 40px;
                        top: 0px;
                        left: 50%;
                        transform: translate(-50%, 0%);
                        position: absolute;
                        background-image: url(../img/portal-map-bar-separator.png);
                        filter: drop-shadow(3px 0px 0px #6b5a2b)
                            drop-shadow(-3px 0px 0px #6b5a2b)
                            drop-shadow(2px 2px 0px rgba(255, 255, 255, 0.2))
                            drop-shadow(-2px 2px 0px rgba(255, 255, 255, 0.2));
                    }
                    .bar-scale {
                        width: 512px;
                        height: 22px;
                        border-radius: 20px;
                        top: 8px;
                        left: 50%;
                        transform: translate(-50%, 0%);
                        position: absolute;
                        overflow: hidden;
                        .bar-scale-patf {
                            height: 22px;
                            position: absolute;
                            background: linear-gradient(0deg, #39b54a, #8cea3f);
                            top: 0px;
                            left: 0%;
                            box-shadow: 0 0px 1px 2px rgba(0, 0, 0, 0.2);
                        }
                    }
                    .bar-chest {
                        width: 26px;
                        height: 26px;
                        background: #a08740;
                        position: absolute;
                        border-radius: 100%;
                        box-shadow: inset 0 0px 1px 1.5px rgba(0, 0, 0, 0.4);
                        top: 6px;
                        z-index: 1;
                        &:before {
                            content: "";
                            width: 22px;
                            height: 22px;
                            border-radius: 100%;
                            background: linear-gradient(0deg, #e9b039, #fffe9a);
                            position: absolute;
                            box-shadow: 0 2px 0px 0px rgba(0, 0, 0, 0.2);
                            top: 2px;
                            left: 2px;
                        }
                        &:after {
                            content: "";
                            width: 26px;
                            height: 26px;
                            position: absolute;
                            top: -1.6px;
                            left: 0px;
                            background-image: url(../img/portal-map-bar-chest.png);
                            background-size: 26px;
                            background-position: center;
                        }
                    }
                    .bar-chest-check {
                        &:after {
                            content: "";
                            width: 26px;
                            height: 26px;
                            position: absolute;
                            top: -1.6px;
                            left: 0px;
                            background-image: url(../img/portal-map-bar-chest-check.png);
                            background-size: 26px;
                            background-position: center;
                        }
                    }
                    .location1-bar-chest1 {
                        left: 7px;
                    }
                    .location1-bar-chest2 {
                        left: 125px;
                    }
                    .location2-bar-chest1 {
                        left: 267px;
                    }
                    .location2-bar-chest2 {
                        left: 375px;
                    }
                    .bar-character-pin-wrap {
                        width: 512px;
                        height: 22px;
                        border-radius: 20px;
                        z-index: 1;
                        top: 8px;
                        left: 50%;
                        transform: translate(-52.5%, 0%);
                        position: absolute;
                        .bar-character-pin {
                            width: 26px;
                            height: 26px;
                            border-radius: 100%;
                            background: #fffe9a;
                            position: absolute;
                            z-index: 1;
                            box-shadow: 0 2px 0px 0px rgba(0, 0, 0, 0.2),
                                0 0px 0px 2px rgba(0, 0, 0, 0.3);
                            top: -20px;
                            &:before {
                                content: "";
                                position: absolute;
                                width: 20px;
                                height: 11px;
                                background: rgba(0, 0, 0, 0.3);
                                clip-path: polygon(
                                    50% 25%,
                                    100% 0,
                                    50% 100%,
                                    0 0
                                );
                                top: 24px;
                                left: 50%;
                                transform: translate(-50%, 0);
                            }
                            &:after {
                                content: "";
                                position: absolute;
                                width: 18px;
                                height: 10px;
                                background: #fffe9a;
                                clip-path: polygon(
                                    50% 25%,
                                    100% 0,
                                    50% 100%,
                                    0 0
                                );
                                top: 22px;
                                left: 50%;
                                transform: translate(-50%, 0);
                            }
                            .character-pin-images {
                                width: 22px;
                                height: 22px;
                                position: absolute;
                                border-radius: 100%;
                                top: 2px;
                                left: 2px;
                                background-image: url(../img/v2-master-pic1.png);
                                background-size: 27px;
                                background-position: center;
                                z-index: 1;
                            }
                        }
                    }
                    .location-banner {
                        position: absolute;
                        width: 132px;
                        height: 26px;
                        background-image: url(../img/portal-map-location-banner.png);
                        background-repeat: no-repeat;
                        top: 32px;
                        z-index: 1;
                        filter: drop-shadow(0px 2px 5px RGBA(0, 0, 0, 0.5))
                            drop-shadow(2px 0px 1px RGBA(0, 0, 0, 0.5));
                    }
                    .location-banner-1 {
                        left: 131px;
                    }
                    .location-banner-2 {
                        right: 131px;
                        transform: scale(-1, 1);
                    }
                    .banner-name {
                        color: #4c3a25;
                        text-shadow: 0px 1px 2px #fff;
                        font-size: 13px;
                        font-weight: 700;
                        text-align: center;
                        text-transform: uppercase;
                        line-height: 26px;
                        position: absolute;
                        right: 12px;
                    }
                    .banner-name-2 {
                        transform: scale(-1, 1);
                    }
                }
            }
            .footer-btn-wrap {
                position: absolute;
                bottom: 20px;
                width: 180px;
                height: 40px;
                z-index: 3;
                left: 50%;
                transform: translate(-50%, 0%);
                .footer-btn {
                    width: 180px;
                    height: 40px;
                    background: linear-gradient(0deg, #e9b039, #fffe9a);
                    box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.2),
                        0 2px 4px 0 rgba(0, 0, 0, 0.5),
                        0 0px 0px 2px rgba(0, 0, 0, 0.1);
                    color: #4c3a25;
                    text-shadow: 0px 1px 2px #fff;
                    font-size: 16px;
                    cursor: pointer;
                    font-weight: 700;
                    text-align: center;
                    text-transform: uppercase;
                    border-radius: 6px;
                    display: inline-block;
                    line-height: 36px;
                    transform: scale(0.968);
                    transition: ease-in-out 0.03s;
                    &:before {
                        content: "";
                        position: absolute;
                        width: 40px;
                        height: 40px;
                        top: -3px;
                        left: 5px;
                        background-image: url(../img/trophy-bonus-dps.png);
                        background-repeat: no-repeat;
                        background-size: 30px;
                        background-position: center center;
                        transform: rotateY(180deg) rotate(45deg);
                        transition: ease-in-out 0.03s;
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        width: 40px;
                        height: 40px;
                        top: -3px;
                        right: 5px;
                        background-image: url(../img/trophy-bonus-dps.png);
                        background-repeat: no-repeat;
                        background-size: 30px;
                        background-position: center center;
                        transform: rotate(45deg);
                        transition: ease-in-out 0.03s;
                    }
                    &:hover {
                        transform: scale(1);
                        &:before {
                            left: -14px;
                        }
                        &:after {
                            right: -14px;
                        }
                    }
                    &:active {
                        box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.2),
                            0 1px 1px 0 rgba(0, 0, 0, 0.5),
                            0 0px 0px 2px rgba(0, 0, 0, 0.1);
                        line-height: 40px;
                        &:before {
                            top: -1px;
                            transform: scale(1) rotateY(180deg) rotate(45deg);
                        }
                        &:after {
                            top: -1px;
                            transform: scale(1) rotate(45deg);
                        }
                    }
                }
            }
            .chest-pop-up {
                position: absolute;
                width: 136px;
                height: 56px;
                background: #f4d072;
                box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0.4),
                    0 0px 0px 2px rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                transition: transform 0.4s, opacity 0.4s;
                z-index: 5;
                transform: translate(-40px, -50px);
                opacity: 0;
                visibility: hidden;
                &:before {
                    content: "";
                    position: absolute;
                    width: 22px;
                    height: 14px;
                    background: rgba(0, 0, 0, 0.3);
                    clip-path: polygon(50% 100%, 0 0, 100% 0);
                    top: 56px;
                    left: 50%;
                    transform: translate(-50%, 0);
                }
                &:after {
                    content: "";
                    position: absolute;
                    width: 16px;
                    height: 10px;
                    background: #f4d072;
                    clip-path: polygon(50% 100%, 0 0, 100% 0);
                    top: 55px;
                    left: 50%;
                    transform: translate(-50%, 0);
                }
                .pop-up-bg {
                    position: absolute;
                    width: 136px;
                    height: 50px;
                    background: rgba(255, 255, 255, 0.5);
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    box-shadow: inset 0 0px 1px 2px rgba(0, 0, 0, 0.2),
                        inset 0 8px 8px 0px rgba(0, 0, 0, 0.2);
                }
                .pop-up-girl {
                    display: inline-block;
                    width: 32px;
                    height: 36px;
                    margin-right: 5px;
                    margin-bottom: 5px;
                    background-size: 50px;
                    background-position: center top;
                    border-radius: 2px;
                    transform: translate(0, 10px);
                    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5),
                        0 0px 0px 2px rgba(0, 0, 0, 0.3);
                    &:last-child {
                        margin-right: 0px;
                    }
                }
                .girl-1 {
                    background-image: url(../img//images/hero-all/tithero-5007/x1/ava/tithero-5007-1-ava.jpg);
                }
                .girl-2 {
                    background-image: url(../img//images/hero-all/tithero-5010/x1/ava/tithero-5010-1-ava.jpg);
                }
                .girl-3 {
                    background-image: url(../img//images/hero-all/tithero-5009/x1/ava/tithero-5009-1-ava.jpg);
                }
            }
            .chest-pop-up-active {
                transition: transform 0.4s, opacity 0.4s;
                opacity: 1;
                visibility: visible;
                transform: translate(-40px, -60px);
            }
        }
    }
`;

const ScreenPortalMap = styled.div`
    ${ScreenPortalMapStyles}
`;

export { ScreenPortalMapStyles, ScreenPortalMap };
