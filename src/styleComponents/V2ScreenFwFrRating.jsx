import styled from "styled-components";

const V2ScreenFwFrRating = styled.div`
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
                        width: 1102px;
                    }
                    .tab-panel-box.fw-fr-rating {
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
                        .fw-left-side {
                            width: 340px;
                            height: 460px;
                            position: absolute;
                            top: 42px;
                            left: 10px;
                            background-color: #8f7c68;
                            .fw-left-box-name {
                                width: 252px;
                                height: 36px;
                                position: absolute;
                                top: 5px;
                                left: 44px;
                                background-image: url(../img/wpck-ram.png);
                                background-size: 100%;
                                background-repeat: no-repeat;
                                color: #fff;
                                font-size: 16px;
                                font-weight: bold;
                                text-align: center;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                                text-transform: uppercase;
                                line-height: 26px;
                            }
                            .fw-rating-ped-box-all {
                                width: 300px;
                                height: 390px;
                                position: absolute;
                                bottom: 20px;
                                left: 20px;
                                .fw-rating-ped-box-p1,
                                .fw-rating-ped-box-p2,
                                .fw-rating-ped-box-p3 {
                                    width: 100%;
                                    height: 145px;
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    background-color: #786659;
                                    .fw-rating-ped-pic {
                                        width: 100px;
                                        height: 100px;
                                        position: absolute;
                                        top: 22px;
                                        left: 25px;
                                        img {
                                            width: 100px;
                                        }
                                    }
                                    .fw-rating-ped-num-box {
                                        width: 180px;
                                        height: 100%;
                                        position: absolute;
                                        top: 0;
                                        right: 0;
                                        background: linear-gradient(
                                            180deg,
                                            #4f4339 0%,
                                            #352c25 100%
                                        );
                                        display: table;
                                        .fw-rating-ped-place-num {
                                            width: 100px;
                                            height: auto;
                                            position: absolute;
                                            top: 20px;
                                            left: 40px;
                                            color: #ffbe27;
                                            font-size: 16px;
                                            font-weight: bold;
                                            text-transform: uppercase;
                                            text-shadow: 0 1px 2px
                                                rgba(0, 0, 0, 0.35);
                                            text-align: center;
                                        }
                                        .fw-rating-ped-place-points {
                                            width: 100px;
                                            height: 20px;
                                            position: absolute;
                                            bottom: 20px;
                                            left: 40px;
                                            background-color: #786659;
                                            border-radius: 10px;
                                            color: #fff;
                                            font-size: 14px;
                                            font-weight: bold;
                                            line-height: 20px;
                                            text-transform: uppercase;
                                            text-shadow: 0 1px 2px
                                                rgba(0, 0, 0, 0.35);
                                            text-align: center;
                                        }
                                        .fw-rating-ped-place-name-box {
                                            width: 100px;
                                            height: 60px;
                                            position: absolute;
                                            top: 40px;
                                            left: 40px;
                                            display: table;
                                            .fw-rating-ped-place-name {
                                                width: 100%;
                                                height: 100%;
                                                position: relative;
                                                display: table-cell;
                                                color: #fff;
                                                font-size: 14px;
                                                font-weight: bold;
                                                text-shadow: 0 1px 2px
                                                    rgba(0, 0, 0, 0.35);
                                                text-align: center;
                                                vertical-align: middle;
                                            }
                                        }
                                        .fw-rating-ped-num {
                                            width: 100%;
                                            height: 100%;
                                            position: relative;
                                            display: table-cell;
                                            color: #fff;
                                            font-size: 16px;
                                            font-weight: bold;
                                            text-shadow: 0 1px 2px
                                                rgba(0, 0, 0, 0.35);
                                            vertical-align: middle;
                                            text-align: center;
                                        }
                                    }
                                }
                                .fw-rating-ped-box-p2 {
                                    height: 125px;
                                    top: 152px;
                                    .fw-rating-ped-pic {
                                        top: 12px;
                                        left: 25px;
                                    }
                                    .fw-rating-ped-num-box {
                                        .fw-rating-ped-place-num {
                                            top: 15px;
                                            color: #c0c0c0;
                                        }
                                        .fw-rating-ped-place-name-box {
                                            top: 30px;
                                        }
                                        .fw-rating-ped-place-points {
                                            bottom: 15px;
                                        }
                                    }
                                }
                                .fw-rating-ped-box-p3 {
                                    height: 105px;
                                    top: 285px;
                                    .fw-rating-ped-pic {
                                        top: 2px;
                                        left: 25px;
                                    }
                                    .fw-rating-ped-num-box {
                                        .fw-rating-ped-place-num {
                                            top: 5px;
                                            color: #d9bd99;
                                        }
                                        .fw-rating-ped-place-name-box {
                                            top: 20px;
                                        }
                                        .fw-rating-ped-place-points {
                                            bottom: 5px;
                                        }
                                    }
                                }
                                .fw-master-pic {
                                    width: 66px;
                                    height: 66px;
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    background-image: url(../img/v2-master-pic1.png);
                                    background-size: 100%;
                                    background-repeat: no-repeat;
                                }
                                &.check-p0,
                                &.check-p4 {
                                    .fw-master-pic {
                                        display: none;
                                    }
                                }
                                &.check-p1 {
                                    .fw-rating-ped-box-p1 {
                                        .fw-rating-ped-pic {
                                            left: 0;
                                        }
                                    }
                                    .fw-master-pic {
                                        top: 40px;
                                        left: 30px;
                                    }
                                }
                                &.check-p2 {
                                    .fw-rating-ped-box-p2 {
                                        .fw-rating-ped-pic {
                                            left: 0;
                                        }
                                    }
                                    .fw-master-pic {
                                        top: 182px;
                                        left: 30px;
                                    }
                                }
                                &.check-p3 {
                                    .fw-rating-ped-box-p3 {
                                        .fw-rating-ped-pic {
                                            left: 0;
                                        }
                                    }
                                    .fw-master-pic {
                                        top: 305px;
                                        left: 30px;
                                    }
                                }
                            }
                        }
                        .fw-right-side {
                            width: 730px;
                            height: 460px;
                            position: absolute;
                            top: 42px;
                            right: 10px;
                            .fw-rating-menu-btn-box {
                                width: 740px;
                                height: 50px;
                                position: absolute;
                                top: 0;
                                left: -5px;
                                .color-btn {
                                    width: 230px;
                                    height: 50px;
                                    margin: 0 7px;
                                    .color-btn-text {
                                        top: 14px;
                                    }
                                    &:active {
                                        .color-btn-text {
                                            top: 15px;
                                        }
                                    }
                                }
                            }
                            .fw-right-side-content-box {
                                width: 100%;
                                height: 400px;
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                background-color: #8f7c68;

                                &.cw {
                                    bottom: initial;
                                    top: 0;
                                    height: 430px;
                                    padding-top: 30px;
                                }

                                font-size: 0;
                                text-align: center;
                                .fw-flag-box {
                                    width: 190px;
                                    height: 360px;
                                    position: relative;
                                    display: inline-block;
                                    top: 20px;
                                    margin: 0 20px;
                                    background-image: url(../img/v2-fw-flag-bg.png);
                                    &.fr1 {
                                        background-image: url(../img/fr_bg1.png);
                                    }
                                    &.fr2 {
                                        background-image: url(../img/fr_bg2.png);
                                    }
                                    &.fr3 {
                                        background-image: url(../img/fr_bg3.png);
                                    }
                                    background-size: 100%;
                                    background-repeat: no-repeat;
                                    .fw-flag {
                                        width: 160px;
                                        height: 160px;
                                        position: absolute;
                                        top: 88px;
                                        left: 15px;
                                    }
                                    .color-btn {
                                        width: 160px;
                                        top: 315px;
                                    }
                                    .fw-flag-win {
                                        width: 60px;
                                        height: 60px;
                                        position: absolute;
                                        top: -10px;
                                        left: 65px;
                                        background: linear-gradient(
                                            180deg,
                                            #c68300 0%,
                                            #f4dfb6 50%,
                                            #c68200 70%,
                                            #fad489 85%,
                                            #c78302 100%
                                        );
                                        border-radius: 100%;
                                        box-shadow: 0 2px 4px
                                            rgba(0, 0, 0, 0.65);
                                        &:before {
                                            content: "";
                                            width: 54px;
                                            height: 54px;
                                            position: absolute;
                                            top: 3px;
                                            left: 3px;
                                            background: linear-gradient(
                                                0deg,
                                                #fff091 0%,
                                                #ffbe27 50%,
                                                #fff091 100%
                                            );
                                            border-radius: 100%;
                                        }
                                        .fw-flag-win-num {
                                            width: 100%;
                                            height: 100%;
                                            position: relative;
                                            line-height: 60px;
                                            color: #fff;
                                            font-size: 30px;
                                            font-weight: bold;
                                            text-shadow: 0 1px 2px
                                                rgba(0, 0, 0, 0.35);
                                        }
                                    }
                                    &.win2 {
                                        .fw-flag-win {
                                            background: linear-gradient(
                                                180deg,
                                                #585a5c 0%,
                                                #d5d8da 50%,
                                                #585a5b 70%,
                                                #a1a4a6 85%,
                                                #585a5b 100%
                                            );
                                            &:before {
                                                content: "";
                                                background: linear-gradient(
                                                    0deg,
                                                    #d3d3d3 0%,
                                                    #979797 50%,
                                                    #d3d3d3 100%
                                                );
                                            }
                                        }
                                        top: 30px;
                                    }
                                    &.win3 {
                                        .fw-flag-win {
                                            background: linear-gradient(
                                                180deg,
                                                #8e7453 0%,
                                                #e3c7a3 50%,
                                                #8f7553 70%,
                                                #ae916a 85%,
                                                #8f7553 100%
                                            );
                                            &:before {
                                                content: "";
                                                background: linear-gradient(
                                                    0deg,
                                                    #dfc3a0 0%,
                                                    #9b815f 50%,
                                                    #dfc3a0 100%
                                                );
                                            }
                                        }
                                        top: 40px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .fw-flag-name {
        font-size: 16px;
        font-weight: bold;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
        color: white;
        position: relative;
        top: 320px;
    }
`;

export default V2ScreenFwFrRating;
