import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ScreenFortunaRoundRewardsStyles = css`
    .popup-layer .m-popup.fortuna-main-round-rewards {
        width: 750px;
        height: 490px;
        left: 225px;
        top: 75px;
        &:before {
            content: "";
            background: linear-gradient(
                136deg,
                #8e7453 0%,
                #e3c7a3 50%,
                #ae916a 85%,
                #8f7553 100%
            );
        }
        .title {
            color: #572f14;
        }
        .rewards-main-box {
            width: 710px;
            height: 410px;
            position: absolute;
            top: 70px;
            left: 20px;

            .rrevard-box {
                width: 350px;
                height: 110px;
                position: absolute;
                top: 0px;
                left: 0px;
                background-color: #7e6e62;
                border-radius: 10px;
                .rname-box {
                    width: 350px;
                    height: 34px;
                    position: absolute;
                    background-color: #ffcb39;
                    border-radius: 10px 10px 0 0;
                    text-transform: uppercase;
                    font-size: 20px;
                    color: #645244;
                    text-align: center;
                    font-weight: bold;
                    line-height: 34px;
                }

                .fortuna-reward-box-all {
                    width: 330px;
                    top: 46px;
                    left: 10px;
                    height: 58px;
                    position: absolute;
                    font-size: 0px;
                    .fortuna-reward-box {
                        width: 50px;
                        height: 50px;
                        position: relative;
                        display: inline-block;
                        margin: 0 2px 0 2px;
                        .fortuna-reward-bg {
                            width: 50px;
                            height: 50px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            background: linear-gradient(
                                180deg,
                                #c68300 0%,
                                #f4dfb6 50%,
                                #c68200 70%,
                                #fad489 85%,
                                #c78302 100%
                            );
                            border-radius: 10px;
                            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
                            img {
                                width: 45px;
                                position: absolute;
                                top: 2px;
                                left: 2px;
                            }
                        }
                        .fortuna-reward-claim-btn {
                            width: 50px;
                            height: 16px;
                            position: absolute;
                            top: 34px;
                            left: 0px;
                            background: linear-gradient(
                                0deg,
                                #7cbc30 0%,
                                #bbee7f 100%
                            );
                            border-radius: 4px;
                            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.45);
                            color: #fff;
                            font-size: 10px;
                            font-weight: bold;
                            line-height: 17px;
                            text-transform: uppercase;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                        }
                    }
                }
                &.r2 {
                    top: 0;
                    left: 360px;
                }
                &.r3 {
                    top: 120px;
                    left: 0;
                }
                &.r4 {
                    top: 120px;
                    left: 360px;
                }
                &.r5 {
                    top: 240px;
                    left: 0;
                }
                &.r6 {
                    top: 240px;
                    left: 360px;
                }
                .rrevard-box-collected-label {
                    display: none;
                }
                &.collected {
                    .rrevard-box-collected-label {
                        left: 0;
                        top: 0;
                        position: absolute;
                        display: block;

                        .rrevard-box-collected-label-text {
                            left: 100px;
                            top: 30px;
                            width: 160px;
                            height: 50px;
                            position: absolute;
                            transform: rotate(-22deg);
                            background: linear-gradient(
                                0deg,
                                #7cbc30 0%,
                                #bbee7f 100%
                            );
                            color: #fff;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                            text-align: center;
                            font-weight: bold;
                            text-transform: uppercase;
                            font-size: 16px;
                            line-height: 50px;
                            border-radius: 10px;
                        }

                        &:before {
                            content: "";
                            position: absolute;
                            width: 350px;
                            height: 110px;
                            background: rgba(0, 0, 0, 0.4);
                            left: 0;
                            top: 0;
                            border-radius: 10px;
                        }
                    }
                }
            }
            .color-btn {
                width: 220px;
                height: 40px;
                position: absolute;
                bottom: 10px;
                left: 243px;
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
            }
        }
    }
`;

const ScreenFortunaRoundRewards = styled.div`
    ${ScreenFortunaRoundRewardsStyles}
`;

export { ScreenFortunaRoundRewardsStyles, ScreenFortunaRoundRewards };
