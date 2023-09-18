import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ScreenRatingRankinfStyles = css`
    // Pop Rank Information Ranks
    .popup-layer .m-popup.rankinf-rank {
        width: 700px;
        height: 480px;
        left: calc(50% - 346px);
        top: 74px;
        &:before {
            content: "";
            background: linear-gradient(0deg, #938274 0%, #dbc2ad 100%);
        }
        .color-box {
            display: none;
        }
        .rankinf-topbtn-box {
            width: 680px;
            height: 60px;
            position: absolute;
            top: 68px;
            margin-left: 10px;

            .color-btn {
                width: 206px;
                height: 50px;
                margin: 0 6px;
                font-size: 16px;
            }
        }
        .rank-cont-box {
            width: 648px;
            height: 330px;
            position: absolute;
            top: 130px;
            margin-left: 26px;
            background-color: #786659;
            border-radius: 6px;
            .rank-container {
                width: 150px;
                height: 308px;
                position: relative;
                display: inline-block;
                background-color: #5e4f44;
                margin: 0 2px 0 2px;
                top: 12px;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
                .cont-name-box,
                .cont-name-text,
                .cont-place {
                    width: 150px;
                }
                &.bronze {
                    height: 204px;
                    .cont-name-box {
                        background: linear-gradient(
                            180deg,
                            #8e7453 0%,
                            #e3c7a3 50%,
                            #8f7553 70%,
                            #ae916a 85%,
                            #8f7553 100%
                        );
                    }
                    .cont-sign {
                        width: 100px;
                        height: 100px;
                        top: 52px;
                        margin-left: 26px;
                        background-image: url(../img/rating-sign-bronze@1x.png);
                        background-size: 100%;
                    }
                    .cont-place {
                        top: 180px;
                    }
                }
                &.silver {
                    height: 238px;
                    .cont-name-box {
                        background: linear-gradient(
                            180deg,
                            #585a5c 0%,
                            #d5d8da 50%,
                            #585a5b 70%,
                            #a1a4a6 85%,
                            #585a5b 100%
                        );
                    }
                    .cont-sign {
                        width: 120px;
                        height: 120px;
                        top: 30px;
                        margin-left: 16px;
                        background-image: url(../img/rating-sign-silver@1x.png);
                        background-size: 100%;
                    }
                    .cont-prize {
                        width: 70px;
                        height: 70px;
                        top: 146px;
                        margin-left: 40px;
                        background-image: url(../img/icon-sunduk-200-1.png);
                        background-size: 100%;
                    }
                    .cont-place {
                        top: 214px;
                    }
                }
                &.gold {
                    height: 274px;
                    .cont-name-box {
                        background: linear-gradient(
                            180deg,
                            #c68300 0%,
                            #f4dfb6 50%,
                            #c68200 70%,
                            #fad489 85%,
                            #c78302 100%
                        );
                    }
                    .cont-sign {
                        width: 130px;
                        height: 130px;
                        top: 30px;
                        margin-left: 10px;
                        background-image: url(../img/rating-sign-gold@1x.png);
                        background-size: 100%;
                    }
                    .cont-prize {
                        width: 100px;
                        height: 100px;
                        top: 152px;
                        margin-left: 26px;
                        background-image: url(../img/icon-sunduk-200-2.png);
                        background-size: 100%;
                    }
                    .cont-place {
                        top: 250px;
                    }
                }
                &.top {
                    .cont-name-box {
                        @include background-top;
                    }
                    .cont-sign {
                        width: 146px;
                        height: 146px;
                        top: 30px;
                        margin-left: 2px;
                        background-image: url(../img/rating-sign-top@1x.png);
                        background-size: 100%;
                    }
                    .cont-prize {
                        width: 112px;
                        height: 112px;
                        top: 172px;
                        margin-left: 20px;
                        background-image: url(../img/icon-sunduk-200-3.png);
                        background-size: 100%;
                    }
                    .cont-place {
                        top: 284px;
                    }
                }
            }
        }
        .rankinf-text {
            width: 308px;
            height: 70px;
            position: absolute;
            top: 136px;
            margin-left: 38px;
            text-align: left;
            color: #fee6aa;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
            font-size: 14px;
        }
    }

    // Pop Rank Information Prizes
    .popup-layer .m-popup.rankinf-prizes {
        width: 700px;
        height: 500px;
        left: calc(50% - 346px);
        top: 74px;
        &:before {
            content: "";
            background: linear-gradient(0deg, #938274 0%, #dbc2ad 100%);
        }
        .color-box {
            display: none;
        }
        .rankinf-topbtn-box {
            width: 680px;
            height: 60px;
            position: absolute;
            top: 68px;
            margin-left: 10px;

            .color-btn {
                width: 206px;
                height: 50px;
                margin: 0 6px;
                font-size: 16px;
            }
        }
        .rank-cont-box {
            width: 648px;
            height: 350px;
            position: absolute;
            top: 130px;
            margin-left: 26px;
            background-color: #786659;
            border-radius: 6px;
            .rank-cont-box-scroll {
                // width: 100%; height: 330px; position: absolute; background-color: red;
                position: absolute;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                overflow-y: scroll;
                padding: 6px 0 10px 0;
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
                    box-shadow: inset 0 0 3px #796b60;
                    background: linear-gradient(
                        to right,
                        #fff,
                        #f5de80,
                        #f4b766,
                        #b26d12
                    );
                }
                .rank-container {
                    width: 150px;
                    height: 204px;
                    position: relative;
                    display: inline-block;
                    background: linear-gradient(0deg, #786659 0%, #594c42 100%);
                    margin: 0 2px 0 2px;
                    top: 12px;
                    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
                    .cont-name-box,
                    .cont-name-text,
                    .cont-place {
                        width: 150px;
                    }
                    .cont-place {
                        top: 180px;
                    }
                    &.bronze {
                        .cont-name-box {
                            background: linear-gradient(
                                180deg,
                                #8e7453 0%,
                                #e3c7a3 50%,
                                #8f7553 70%,
                                #ae916a 85%,
                                #8f7553 100%
                            );
                        }
                        .cont-sign {
                            width: 100px;
                            height: 100px;
                            top: 56px;
                            margin-left: 26px;
                            background-image: url(../img/rating-sign-bronze@1x.png);
                            background-size: 100%;
                        }
                    }
                    &.silver {
                        .cont-name-box {
                            background: linear-gradient(
                                180deg,
                                #585a5c 0%,
                                #d5d8da 50%,
                                #585a5b 70%,
                                #a1a4a6 85%,
                                #585a5b 100%
                            );
                        }
                        .cont-sign {
                            width: 120px;
                            height: 120px;
                            top: 46px;
                            margin-left: 16px;
                            background-image: url(../img/rating-sign-silver@1x.png);
                            background-size: 100%;
                        }
                    }
                    &.gold {
                        .cont-name-box {
                            background: linear-gradient(
                                180deg,
                                #c68300 0%,
                                #f4dfb6 50%,
                                #c68200 70%,
                                #fad489 85%,
                                #c78302 100%
                            );
                        }
                        .cont-sign {
                            width: 130px;
                            height: 130px;
                            top: 42px;
                            margin-left: 10px;
                            background-image: url(../img/rating-sign-gold@1x.png);
                            background-size: 100%;
                        }
                    }
                    &.top {
                        .cont-name-box {
                            @include background-top;
                        }
                        .cont-sign {
                            width: 146px;
                            height: 146px;
                            top: 30px;
                            margin-left: 2px;
                            background-image: url(../img/rating-sign-top@1x.png);
                            background-size: 100%;
                        }
                    }
                    .no-reward-text-box {
                        width: 100%;
                        height: 100px;
                        position: absolute;
                        top: 204px;
                        background-color: #594c42;
                        .no-reward-text {
                            color: #e3be4f;
                            font-size: 16px;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                            text-transform: uppercase;
                            top: 40px;
                            position: relative;
                        }
                    }
                    .rank-reward-box {
                        padding-top: 6px;
                        position: absolute;
                        top: 204px;
                        background-color: #594c42;
                        .rank-reward-all-box {
                            width: 44px;
                            height: 44px;
                            position: relative;
                            display: inline-block;
                            background: linear-gradient(
                                180deg,
                                #c68300 0%,
                                #f4dfb6 50%,
                                #c68200 70%,
                                #fad489 85%,
                                #c78302 100%
                            );
                            border-radius: 6px;
                            margin: 1px;
                            box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
                            &:before {
                                content: "";
                                width: 40px;
                                height: 40px;
                                position: absolute;
                                top: 2px;
                                margin-left: -20px;
                                background: linear-gradient(
                                    0deg,
                                    #938274 0%,
                                    #dbc2ad 100%
                                );
                                border-radius: 4px;
                                box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
                            }
                            .rank-reward-all {
                                width: 38px;
                                height: 38px;
                                position: absolute;
                                top: 3px;
                                margin-left: 3px;
                                .rank-reward-pic {
                                    width: 38px;
                                }
                                .newtime {
                                    width: 45px;
                                    background-size: 45px;
                                    z-index: 1;
                                    height: 32px;
                                    top: 19px;
                                    left: 8px;
                                    .newclocktime {
                                        top: 20px;
                                        margin-left: 14px;
                                    }
                                }
                            }
                            .rank-reward-num {
                                width: 20px;
                                background: linear-gradient(
                                    0deg,
                                    #858585 0%,
                                    #ffffff 100%
                                );
                                padding: 2px;
                                color: #42372f;
                                position: absolute;
                                top: 26px;
                                margin-left: 20px;
                                font-size: 12px;
                                font-weight: bold;
                                box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
                                border-radius: 6px;
                            }
                        }
                    }
                }
            }
        }
    }

    // Pop Rank Information Rules
    .popup-layer .m-popup.rankinf-rules {
        width: 700px;
        height: 480px;
        left: calc(50% - 346px);
        top: 74px;
        &:before {
            content: "";
            background: linear-gradient(0deg, #938274 0%, #dbc2ad 100%);
        }
        .color-box {
            display: none;
        }
        .rankinf-topbtn-box {
            width: 680px;
            height: 60px;
            position: absolute;
            top: 68px;
            margin-left: 10px;

            .color-btn {
                width: 206px;
                height: 50px;
                margin: 0 6px;
                font-size: 16px;
            }
        }
        .rank-cont-box {
            width: 648px;
            height: 330px;
            position: absolute;
            top: 130px;
            margin-left: 26px;
            background-color: #786659;
            border-radius: 6px;
            .rank-cont-box-scroll {
                // width: 100%; height: 330px; position: absolute; background-color: red;
                position: absolute;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                overflow-y: scroll;
                padding: 6px 0 10px 0;
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
                    box-shadow: inset 0 0 3px #796b60;
                    background: linear-gradient(
                        to right,
                        #fff,
                        #f5de80,
                        #f4b766,
                        #b26d12
                    );
                }
                .rank-rules-box1,
                .rank-rules-box2 {
                    width: 620px;
                    position: relative;
                    top: 10px;
                    padding-left: 10px;
                    color: #e2d6cd;
                    font-size: 14px;
                    text-align: left;
                    line-height: 22px;
                }
                .rank-rules-box2 {
                    padding-top: 10px;
                    .rank-rules-box2-name {
                        color: #ffffff;
                        font-size: 16px;
                        font-weight: bold;
                        text-align: center;
                        padding-bottom: 8px;
                    }
                    .rank-rules-box2-scroll-name-box,
                    .rank-rules-box2-scroll-all {
                        width: 100%;
                        height: 26px;
                        background-color: #9e8b7c;
                        position: relative;
                        display: inline-block;
                        font-size: 18px;
                        font-weight: bold;
                        line-height: 26px;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                        .scroll-name1,
                        .scroll-name2 {
                            width: 480px;
                            margin-left: 10px;
                            position: relative;
                            display: inline-block;
                        }
                        .scroll-name2 {
                            width: 115px;
                            color: #e3be4f;
                            text-align: right;
                            margin-right: 10px;
                            margin-left: 0px;
                        }
                    }
                    .rank-rules-box2-scroll-all {
                        .scroll-color1 {
                            background-color: #5d4e43;
                        }
                        .scroll-color2 {
                            background-color: #69584c;
                        }
                        .scroll-name1,
                        .scroll-name2 {
                            font-size: 14px;
                            text-shadow: 0 0 0;
                            font-weight: normal;
                        }
                    }
                }
            }
        }
    }
`;

const ScreenRatingRankinf = styled.div`
    ${ScreenRatingRankinfStyles}
`;

export { ScreenRatingRankinfStyles, ScreenRatingRankinf };
