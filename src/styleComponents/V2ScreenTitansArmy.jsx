import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenTitansArmyStyles = css`
    .popup-layer .m-popup.at-army-setup {
        width: 970px;
        height: 620px;
        left: 115px;
        top: 10px;
        .title {
            color: #572f14;
        }
        .color-box {
            background: linear-gradient(0deg, #645143 0%, #8e8177 100%);
            &:before {
                display: none;
            }
            &:after {
                display: none;
            }
        }
        .at-filter-box-all {
            width: 920px;
            height: 40px;
            position: absolute;
            top: 70px;
            left: 26px;
            .at-filter-box {
                width: 640px;
                height: 40px;
                position: absolute;
                top: 0;
                left: 0;
                background-color: #54463c;
                .at-filter {
                    width: 90px;
                    height: 30px;
                    position: absolute;
                    top: 10px;
                    left: 0;
                    .at-filter-name {
                        width: 100%;
                        height: auto;
                        position: relative;
                        display: inline-block;
                        top: -4px;
                        color: #fff;
                        font-size: 12px;
                        font-weight: bold;
                        text-transform: uppercase;
                        .ic-filter {
                            width: 18px;
                            height: 18px;
                            position: relative;
                            display: inline-block;
                            background-image: url(../img/v2-ic-filter.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                            margin-right: 6px;
                            top: 5px;
                        }
                    }
                }
                .at-filter-btn-box {
                    width: 550px;
                    height: 26px;
                    position: absolute;
                    top: 7px;
                    right: 0;
                    font-size: 0;
                    .color-btn {
                        width: 170px;
                        height: 26px;
                        border-radius: 0;
                        background: linear-gradient(
                            0deg,
                            #65779c 0%,
                            #9caac8 100%
                        );
                        box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25),
                            0 2px 4px 0 rgba(0, 0, 0, 0.55);
                        margin: 0 5px;
                        .color-btn-text {
                            top: 6px;
                            font-size: 12px;
                        }
                        &:active {
                            box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                                inset 0 2px 2px rgba(0, 0, 0, 0.2);
                            .color-btn-text {
                                top: 7px;
                            }
                        }
                    }
                }
            }
            .at-filter-select-all {
                width: 260px;
                height: 26px;
                position: absolute;
                top: 4px;
                right: 10px;
                .color-btn {
                    width: 260px;
                    height: 26px;
                    border-radius: 20px;
                    box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25),
                        0 2px 4px 0 rgba(0, 0, 0, 0.55);
                    .color-btn-text {
                        top: 6px;
                        font-size: 12px;
                    }
                    &:active {
                        box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                            inset 0 2px 2px rgba(0, 0, 0, 0.2);
                        .color-btn-text {
                            top: 7px;
                        }
                    }
                }
            }
        }
        .at-girl-box {
            width: 920px;
            height: 220px;
            position: absolute;
            top: 120px;
            left: 26px;
            background-color: #6e5d52;
            .at-girl-box-scroll {
                width: 910px;
                height: 210px;
                position: absolute;
                top: 5px;
                left: 5px;
                overflow: hidden;
                overflow-y: scroll;
                font-size: 0;

                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                    background-color: #473c3c;
                }
                &::-webkit-scrollbar {
                    width: 5px;
                    background-color: #9e8b7d;
                }
                &::-webkit-scrollbar-thumb {
                    background: linear-gradient(
                        0deg,
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
                    border-radius: 6px;
                    background: linear-gradient(
                        180deg,
                        #8e7453 0%,
                        #e3c7a3 50%,
                        #8f7553 70%,
                        #ae916a 85%,
                        #8f7553 100%
                    );
                    margin: 7px;
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
                    .at-num {
                        width: 80px;
                        height: 24px;
                        position: absolute;
                        bottom: 4px;
                        left: 9px;
                        border-radius: 20px;
                        background: linear-gradient(
                            0deg,
                            #e9b039 0%,
                            #fffe9a 100%
                        );
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                        color: #000;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 24px;
                    }
                    .at-army-locked-box {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-color: rgba(0, 0, 0, 0.75);
                        border-radius: 6px;
                        display: none;
                        .at-army-locked {
                            width: 78px;
                            height: 91px;
                            position: relative;
                            display: table-cell;
                            color: #ffd200;
                            font-size: 12px;
                            font-weight: bold;
                            text-transform: uppercase;
                            padding: 10px;
                            vertical-align: middle;
                        }
                    }
                    &.select {
                        background: #7cee29;
                    }
                    &.locked {
                        .at-army-locked-box {
                            display: table;
                        }
                    }
                }
            }
        }
        .at-army-box-all {
            width: 920px;
            height: 255px;
            position: absolute;
            top: 340px;
            left: 26px;
            background-color: #6e5d52;

            .color-btn.arrange {
                position: absolute;
                left: 35px;
                top: 115px;
                width: 170px;
                height: 70px;
                background: linear-gradient(0deg, #47bfed, #74ecfc);

                .color-btn-text {
                    top: 23px;
                    font-size: 18px;
                }
                &:active {
                    .color-btn-text {
                        top: 24px;
                    }
                }
            }

            .stars {
                position: absolute;
                width: 350px;
                top: 13px;
                text-align: center;
                font-size: 0;

                .star {
                    display: inline-block;
                    background-image: url(../img/star1.png);
                    background-size: 100%;
                    width: 24px;
                    height: 23px;
                    filter: grayscale(1);

                    &.checked {
                        filter: grayscale(0);
                    }
                }
            }

            .team {
                font-size: 0;
                position: absolute;
                top: 56px;
                left: 240px;

                .t-slot {
                    $t_width: 98px;

                    background-color: rgba(0, 0, 0, 0.3);
                    border: 2px solid rgba(120, 120, 120, 0.3);
                    display: inline-block;
                    position: relative;
                    width: $t_width;
                    height: 158px;
                    box-sizing: border-box;
                    font-weight: bold;
                    color: #fff;
                    text-transform: uppercase;
                    text-align: center;

                    & + .t-slot {
                        margin-left: 14px;
                    }

                    &.active {
                        background-color: transparent;
                        border: none;
                    }

                    &:before {
                        content: "+";
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        color: #6e5d52;
                        font-size: 90px;
                        line-height: 150px;
                    }

                    .specialization {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 27px;
                        width: $t_width;
                        font-size: 14px;
                        line-height: 24px;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);

                        background: linear-gradient(
                            180deg,
                            #8e7453,
                            #ae916a,
                            #8f7553,
                            #e3c7a3 60%
                        );
                    }
                    .ava {
                        position: absolute;
                        top: 21px;
                        left: 0px;
                        width: $t_width;
                        height: 111px;
                        border-radius: 6px;

                        box-shadow: 0 0 4px #000;
                        background: linear-gradient(
                            0deg,
                            #8f7554,
                            #e1c5a2,
                            #8f7554
                        );

                        img {
                            position: absolute;
                            top: 4px;
                            left: 4px;
                            width: 90px;
                            height: 103px;
                            border-radius: 4px;
                        }
                    }
                    .stars {
                        position: absolute;
                        top: initial;
                        left: 0;
                        bottom: 0;
                        border-radius: 0 0 6px 6px;
                        width: $t_width;
                        background-color: rgba(0, 0, 0, 0.6);
                        padding: 4px 0px;

                        .star {
                            width: 18px;
                            height: 17px;
                        }
                    }
                    .pwr {
                        position: absolute;
                        height: 29px;
                        width: $t_width;
                        left: 0;
                        bottom: 0;
                        font-size: 12px;
                        line-height: 32px;
                        color: #544746;

                        background: linear-gradient(
                            0deg,
                            #fddd8e,
                            #f4c658,
                            #ffe198 60%
                        );
                    }

                    .color-btn.remove {
                        position: absolute;
                        top: 162px;
                        left: 0;
                        height: 30px;
                        width: 98px;

                        .color-btn-text {
                            top: 6px;
                            font-size: 12px;

                            &:active {
                                top: 7px;
                            }

                            span {
                                content: "";
                                width: 18px;
                                height: 13px;
                                position: relative;
                                display: inline-block;
                                background-image: url(../img/spinner-round-diamond.png);
                                background-size: 100%;
                                background-position: center;
                                margin: 0 2px 0 2px;
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }
            .at-army-box {
                width: 920px;
                height: 50px;
                position: absolute;
                top: 0;
                left: 0;
                background-color: #6e5d52;
                background: linear-gradient(180deg, #4f4339 0%, #352c25 100%);
                .at-army-text {
                    width: 100%;
                    height: auto;
                    position: relative;
                    display: inline-block;
                    top: 16px;
                    color: #f0e3a8;
                    font-weight: bold;
                    font-size: 14px;
                    text-transform: uppercase;
                }
            }
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
        &.diamond {
            background: linear-gradient(0deg, #4b97bf 0%, #7ae2ff 100%);
        }
    }
`;

const V2ScreenTitansArmy = styled.div`
    ${V2ScreenTitansArmyStyles}
`;

export { V2ScreenTitansArmyStyles, V2ScreenTitansArmy };
