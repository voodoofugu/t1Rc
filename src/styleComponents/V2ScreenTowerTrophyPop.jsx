import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenTowerTrophyPopStyles = css`
    .popup-layer .m-popup.tower-trophy-pop {
        width: 460px;
        height: 600px;
        left: 370px;
        top: 20px;
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
        .tower-trophy-bg-all {
            width: 440px;
            height: 530px;
            position: absolute;
            bottom: 10px;
            left: 10px;
            background-image: url(../img/v2-trophy-pop-bg.jpg);
            background-size: 100%;
            background-repeat: no-repeat;
            &:before {
                content: "";
                width: 260px;
                height: 260px;
                position: absolute;
                top: 125px;
                left: 90px;
                border-radius: 100%;
                background: radial-gradient(
                    ellipse at center,
                    rgba(252, 255, 194, 1) 0%,
                    rgba(255, 255, 255, 0) 70%,
                    rgba(255, 255, 255, 0) 100%
                );
            }
            .tower-trophy-pic {
                width: 200px;
                height: 200px;
                position: absolute;
                top: 150px;
                left: 120px;
            }
            .tower-trophy-prgbar-empty {
                width: 280px;
                height: 86px;
                position: absolute;
                bottom: 5px;
                left: 80px;
                background-image: url(../img/v2-trophy-pop-bg1.jpg);
                background-size: 100%;
                background-repeat: no-repeat;
                .tower-trophy-prgbar-full {
                    width: 280px;
                    height: 86px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    background-image: url(../img/v2-trophy-pop-bg2.jpg);
                    transition: width 0.5s ease;
                    background-position: center left;
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
        &.purple {
            background: linear-gradient(0deg, #aa5eca 0%, #d992f7 100%);
        }
    }

    .btn-close-x {
        width: 30px;
        height: 30px;
        position: absolute;
        top: -6px;
        right: -6px;
        display: none;
        background: linear-gradient(30deg, #876b56, #aa9383, #dfceba);
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
`;

const V2ScreenTowerTrophyPop = styled.div`
    ${V2ScreenTowerTrophyPopStyles}
`;

export { V2ScreenTowerTrophyPopStyles, V2ScreenTowerTrophyPop };
