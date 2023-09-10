
import styled from "styled-components";

const ScreenRatingMaintab = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";

.tab-panel.rating-panel {
    .rating-left-box {
        width: 472px;
        height: 507px;
        position: absolute;
        top: 4px;
        left: 0px;
        background-color: rgb(183, 165, 151);
        border-radius: 6px 0 0 14px;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
            0 1px 3px rgba(0, 0, 0, 0.4), inset -2px 0 0 rgba(0, 0, 0, 0.2);
        .rating-topbtn-box {
            width: 452px;
            height: 40px;
            position: absolute;
            top: 10px;
            left: 10px;
            .color-btn {
                width: 136px;
                &.info {
                    position: absolute;
                    right: 0;
                }
            }
            .rating-timer-box {
                width: 146px;
                height: 40px;
                position: absolute;
                top: 0;
                background: linear-gradient(0deg, #b90000 0%, #ff2020 100%);
                @include prefix(border-radius, 6px);
                box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.2),
                    inset 0 0 0 2px rgba(255, 255, 255, 0.4),
                    0 1px 4px 0 rgba(0, 0, 0, 0.45),
                    0 0 0 1px rgba(0, 0, 0, 0.1);
                .btn-text1 {
                    display: none;
                    width: 136px;
                    text-align: center;
                    font-size: 16px;
                    font-weight: bold;
                    color: #fff;
                    position: relative;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                    top: 8px;
                }
                .rating-timer,
                .rating-timer-text {
                    width: 100%;
                    height: 16px;
                    position: absolute;
                    text-align: center;
                    font-size: 16px;
                    text-transform: uppercase;
                    color: #fff000;
                    top: 4px;
                    font-weight: bold;
                    line-height: 16px;
                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.45);
                }
                .rating-timer-text {
                    height: 16px;
                    top: 20px;
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #fff;
                    line-height: 16px;
                }
                &.time-up {
                    cursor: pointer;
                    .btn-text1 {
                        display: block;
                    }
                    .rating-timer,
                    .rating-timer-text {
                        display: none;
                    }
                }
            }
        }
        .rating-scroll-name-box {
            width: 452px;
            height: 24px;
            position: absolute;
            top: 275px;
            left: 10px;
            color: #eed9cb;
            font-weight: bold;
            line-height: 24px;
            font-size: 14px;
            text-align: center;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
            background: linear-gradient(180deg, #6d5e52 0%, #493d34 100%);
            box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                inset 0px 1px 1px rgba(0, 0, 0, 0.1),
                0 4px 4px rgba(0, 0, 0, 0.15), inset -10px 0 0 #352c25;
            .rating-scroll-name {
                width: 100px;
                height: 24px;
                line-height: 24px;
                position: absolute;
                &.var1 {
                    width: 100px;
                }
                &.var2 {
                    width: 220px;
                    margin-left: 100px;
                    background: linear-gradient(
                        180deg,
                        #4f4339 0%,
                        #352c25 100%
                    );
                }
                &.var3 {
                    width: 122px;
                    margin-left: 320px;
                }
            }
        }
        .list-disabled-text {
            font-size: 24px;
            text-align: center;
            padding: 30px;
            font-weight: bold;
            color: #fff;
            text-shadow: 0 2px 0 #000, 0 1px 10px #000;
            position: absolute;
            top: 338px;
        }
        .rating-scroll-box {
            width: 452px;
            height: 198px;
            position: absolute;
            top: 299px;
            left: 10px;
            border-radius: 0 0 6px 6px;
            overflow: hidden;
            box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                inset 0px 1px 1px rgba(0, 0, 0, 0.1);
            .rating-scroll {
                display: block;
                position: absolute;
                left: 0px;
                top: 0px;
                bottom: 0px;
                right: 0px;
                overflow-y: scroll;

                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
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
                .rating-card {
                    width: 100%;
                    height: 30px;
                    background-color: #786659;
                    color: #fff;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                    font-size: 16px;
                    line-height: 30px;
                    text-align: center;
                    &:hover {
                        filter: brightness(1.05);
                    }
                    .number,
                    .name,
                    .points {
                        width: 100px;
                        height: 30px;
                        position: absolute;
                    }
                    .name {
                        width: 210px;
                        background-color: #857163;
                        margin-left: 100px;
                        text-align: left;
                        padding-left: 10px;
                    }
                    .points {
                        width: 118px;
                        margin-left: 320px;
                    }
                    &.color2 {
                        background-color: #8f7a6b;
                        .name {
                            background-color: #9b8777;
                        }
                    }
                    &.active {
                        background-color: #83ae55;
                        .name {
                            background-color: #91b75e;
                        }
                    }
                }
                .rating-card-rank {
                    width: 100%;
                    height: 30px;
                    font-weight: bold;
                    font-size: 18px;
                    color: #5c4e43;
                    text-align: center;
                    text-transform: uppercase;
                    line-height: 30px;
                    text-shadow: 0 2px 6px rgba(255, 255, 255, 0.75);
                    &.bronze {
                        background: linear-gradient(
                            180deg,
                            #8e7453 0%,
                            #e3c7a3 40%,
                            #8f7553 75%,
                            #ae916a 90%,
                            #8e7453 100%
                        );
                    }
                    &.silver {
                        background: linear-gradient(
                            180deg,
                            #585a5c 0%,
                            #d5d8da 40%,
                            #585a5b 75%,
                            #a1a4a6 90%,
                            #585a5b 100%
                        );
                    }
                    &.gold {
                        background: linear-gradient(
                            180deg,
                            #c68300 0%,
                            #f4dfb6 40%,
                            #c68200 75%,
                            #fad489 90%,
                            #c78302 100%
                        );
                    }
                    &.top {
                        height: 38px;
                        line-height: 38px;
                        color: #0c2b41;
                        background: linear-gradient(
                            180deg,
                            #93a6bc 0%,
                            #f5f7f8 40%,
                            #617e9e 75%,
                            #e7ebf1 90%,
                            #5e7c9c 100%
                        );
                        .top-name-diamond {
                            position: relative;
                            height: 38px;
                            top: -6px;
                            &:before {
                                content: "";
                                width: 30px;
                                height: 30px;
                                background-image: url(~imgPath/diamond@1x.png);
                                background-size: 100%;
                                position: relative;
                                display: inline-block;
                                top: 8px;
                                margin: 0 10px 0 10px;
                            }
                            &:after {
                                content: "";
                                width: 30px;
                                height: 30px;
                                background-image: url(~imgPath/diamond@1x.png);
                                background-size: 100%;
                                position: relative;
                                display: inline-block;
                                top: 8px;
                                margin: 0 10px 0 10px;
                            }
                        }
                    }
                }
            }
        }
    }

    .rating-right-box {
        width: 626px;
        height: 507px;
        position: absolute;
        top: 4px;
        right: 0px;
        border-radius: 0 14px 14px 0;
        overflow: hidden;
        background-image: url(~imgPath/hero_bg@2x.png);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        .rating-right-topbtn-box {
            width: 100%;
            height: 40px;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
        }
        .rating-card-list-box {
            width: 520px;
            height: 455px;
            position: absolute;
            top: 46px;
            left: 54px;
            &.podium {
                &:before {
                    content: "";
                    width: 625px;
                    height: 160px;
                    position: absolute;
                    bottom: -6px;
                    left: -52px;
                    background-image: url(~imgPath/girl-stand@2x.png);
                    background-size: 100%;
                    background-position: center -56px;
                    background-repeat: no-repeat;
                }
            }
        }
    }
}

`;

export default ScreenRatingMaintab;
