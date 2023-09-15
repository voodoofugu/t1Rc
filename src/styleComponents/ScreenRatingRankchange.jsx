import { styled, css } from "styled-components";

const ScreenRatingRankchangeStyles = css`
    // Rank change
    .popup-layer .m-popup.rankchange {
        width: 530px;
        height: 448px;
        left: calc(50% - 250px);
        top: 80px;
        .color-box {
            background-image: url(../img/ts_confirm_bk-1.jpg);
            background-size: 100%;
            &:before {
                display: none;
            }
            &:after {
                display: none;
            }
        }
        .rating-ped-box {
            top: 120px;
            left: unset;
            margin-left: 40px;
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            overflow: hidden;
        }
        .getpoints-box {
            top: 340px;
        }
        .rank-arrow-up,
        .rank-arrow-down {
            width: 90px;
            height: 120px;
            position: absolute;
            top: 62px;
            margin-left: 48px;
            background-image: url(../img/arrow-green.png);
            background-size: 100%;
        }
        .rank-arrow-down {
            background-image: url(../img/arrow-red.png);
        }
        &.up {
            .rank-arrow-down {
                display: none;
            }
            .rank-arrow-up {
                animation: arrow-up 0.45s linear 0s 3;
            }
        }
        &.down {
            .rank-arrow-up {
                display: none;
            }
            .rank-arrow-down {
                animation: arrow-down 0.45s linear 0s 3;
            }
            .color-box {
                background-image: url(../img/ts_confirm_bk-2.jpg);
                background-size: 100%;
                &:before {
                    display: none;
                }
                &:after {
                    display: none;
                }
            }
        }
        @keyframes arrow-up {
            0% {
                transform: translate(0, 0px);
            }
            50% {
                transform: translate(0, 6px);
            }
            80% {
                transform: translate(0, -6px);
            }
            100% {
                transform: translate(0, 0px);
            }
        }
        @keyframes arrow-down {
            0% {
                transform: translate(0, 0px);
            }
            50% {
                transform: translate(0, 6px);
            }
            80% {
                transform: translate(0, -6px);
            }
            100% {
                transform: translate(0, 0px);
            }
        }
    }
`;

const ScreenRatingRankchange = styled.div`
    ${ScreenRatingRankchangeStyles}
`;

export { ScreenRatingRankchangeStyles, ScreenRatingRankchange };
