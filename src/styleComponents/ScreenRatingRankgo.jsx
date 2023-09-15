import { styled, css } from "styled-components";

const ScreenRatingRankgoStyles = css`
    .popup-layer .m-popup.rating-rankgo {
        width: 548px;
        height: 550px;
        left: 326px;
        margin-left: 0px;
        top: 36px;
        position: absolute;
        .video-box {
            width: 77px;
            height: 77px;
            left: 253px;
            top: 233px;
            z-index: 0;
            position: absolute;
            &.top-right {
                left: 422px;
            }
            &.bottom-left {
                left: 253px;
                top: 307px;
            }
            &.bottom-right {
                left: 422px;
                top: 307px;
            }
            &.full-size {
                z-index: 5;
                width: 1000px;
                height: 579px;
                left: -245px;
                top: -18px;
                .video-play {
                    z-index: 6;
                }
            }
            .video-play {
                z-index: 6;
                top: 48%;
            }
            .btn-close-x {
                &.full-size {
                    right: -225px;
                    top: -30px;
                    z-index: 6;
                }
            }
            .color-box {
                background-image: url(../img/ts_confirm_bk-1.jpg);
                background-size: 124%;
                &:before {
                    display: none;
                }
                &:after {
                    display: none;
                }
            }
            .rating-pr-line {
                width: 100px;
                height: 30px;
                position: absolute;
                top: 286px;
                margin-left: 150px;
                background-color: #2cc019;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.85);
            }
            .rating-pr-box {
                width: 150px;
                height: 150px;
                position: absolute;
                top: 230px;
                margin-left: 30px;
                background-color: #2cc019;
                border-radius: 10px;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.85);
                .rating-pr-all-box {
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    top: 15px;
                    margin-left: 15px;
                    background: linear-gradient(
                        180deg,
                        #585a5c 0%,
                        #d5d8da 50%,
                        #585a5b 70%,
                        #a1a4a6 85%,
                        #585a5b 100%
                    );
                    border-radius: 10px;
                    box-shadow: 0 0 8px 0 #ffee2b;
                    .rating-pr {
                        width: 100px;
                        height: 100px;
                        position: absolute;
                        top: 10px;
                        margin-left: -50px;
                    }
                }
            }
            .girl-green-box {
                width: 290px;
                height: 450px;
                top: 74px;
                margin-left: 230px;
                position: absolute;
                background-color: #2cc019;
                border-radius: 10px;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.85);
                .rating-card-girl-box {
                    margin-left: -115px;
                    top: 20px;
                    position: absolute;
                    &:before {
                        content: "";
                        margin-left: -122px;
                    }
                    .rating-slot {
                        &:before {
                            content: "";
                            margin-left: -30px;
                        }
                        &.legendary {
                            &:before {
                                content: "";
                                margin-left: -45px;
                            }
                        }
                        .rating-video-play {
                            &:before {
                                content: "";
                                margin-left: -4px;
                            }
                        }
                    }
                    .rating-str {
                        &:before {
                            content: "";
                            margin-left: -5px;
                        }
                    }
                }
            }
            &.start {
                .rating-pr-box {
                    animation: green-box1 0.45s linear 0s;
                }
                .rating-pr-line {
                    animation: green-box2 0.45s linear 0.45s;
                }
                .girl-green-box {
                    animation: green-box3 0.35s linear 0.7s;
                }
            }
        }

        @keyframes green-box1 {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(0.95);
                background-color: #fff;
                box-shadow: 0 0 20px 0 #fff;
            }
            100% {
                transform: scale(1);
            }
        }
        @keyframes green-box3 {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(0.98);
                background-color: #fff;
                box-shadow: 0 0 20px 0 #fff;
            }
            100% {
                transform: scale(1);
            }
        }
        @keyframes green-box2 {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(0.95);
                background-color: #fff;
                box-shadow: 0 0 20px 0 #fff;
            }
            100% {
                transform: scale(1);
            }
        }
    }
`;

const ScreenRatingRankgo = styled.div`
    ${ScreenRatingRankgoStyles}
`;

export { ScreenRatingRankgoStyles, ScreenRatingRankgo };
