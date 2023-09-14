import styled from "styled-components";

const V2ScreenUkiStoryPop = styled.div`
    .popup-layer .m-popup.uki-story-popup {
        width: 705px;
        height: 620px;
        left: 248px;
        top: 10px;
        .title {
            color: #572f14;
        }
        .color-box {
            background-color: #9c8b7c;
            &:before {
                display: none;
            }
            &:after {
                display: none;
            }
            .journal-comics-view {
                width: 664px;
                height: 460px;
                position: relative;
                top: 10px;
                left: 10px;
                .journal-comics1,
                .journal-comics2,
                .journal-comics3,
                .journal-comics4,
                .journal-comics5,
                .journal-comics6,
                .journal-comics7,
                .journal-comics8,
                .journal-comics9,
                .journal-comics10,
                .journal-comics11,
                .journal-comics12,
                .journal-comics13,
                .journal-comics14,
                .journal-comics15,
                .journal-comics16,
                .journal-comics17,
                .journal-comics18,
                .journal-comics19,
                .journal-comics20 {
                    width: 664px;
                    height: 460px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: none;
                    .journal-comics-ballon-box {
                        width: 100px;
                        height: 90px;
                        position: absolute;
                        background-color: #fff;
                        border: 2px solid #000;
                        display: table;
                        .journal-comics-ballon-text {
                            width: 100%;
                            height: 100%;
                            display: table-cell;
                            vertical-align: middle;
                            color: #000;
                            font-size: 14px;
                            font-weight: bold;
                            text-transform: uppercase;
                            text-align: center;
                            font-style: italic;
                            line-height: 16px;
                            padding: 10px;
                        }
                    }
                }
                .journal-comics2 {
                    .journal-comics-ballon-box {
                        &.b1 {
                            width: 240px;
                            height: auto;
                            top: 10px;
                            left: 20px;
                        }
                        &.b2 {
                            width: 100px;
                            height: auto;
                            bottom: 10px;
                            left: 20px;
                        }
                        &.b3 {
                            width: 320px;
                            height: auto;
                            bottom: 10px;
                            right: 20px;
                        }
                    }
                }
                .journal-comics3 {
                    .journal-comics-ballon-box {
                        &.b1 {
                            width: 380px;
                            height: auto;
                            top: 10px;
                            right: 20px;
                        }
                        &.b2 {
                            width: 100px;
                            height: auto;
                            bottom: 10px;
                            left: 20px;
                        }
                    }
                }
                .journal-comics4 {
                    .journal-comics-ballon-box {
                        &.b1 {
                            width: 290px;
                            height: auto;
                            top: 10px;
                            left: 20px;
                        }
                        &.b2 {
                            width: 100px;
                            height: auto;
                            bottom: 10px;
                            right: 100px;
                        }
                    }
                }
                .journal-comics5 {
                    .journal-comics-ballon-box {
                        &.b1 {
                            width: 100px;
                            height: auto;
                            top: 120px;
                            left: 20px;
                        }
                        &.b2 {
                            width: 100px;
                            height: auto;
                            bottom: 80px;
                            right: 20px;
                        }
                    }
                }
                .journal-comics6 {
                    .journal-comics-ballon-box {
                        &.b1 {
                            width: 300px;
                            height: auto;
                            top: 50px;
                            left: 100px;
                        }
                        &.b2 {
                            width: 100px;
                            height: auto;
                            bottom: 50px;
                            right: 100px;
                        }
                    }
                }
                .journal-comics7 {
                    .journal-comics-ballon-box {
                        &.b1 {
                            width: 300px;
                            height: auto;
                            bottom: 50px;
                            left: 20px;
                        }
                        &.b2 {
                            width: 100px;
                            height: auto;
                            top: 50px;
                            right: 80px;
                        }
                    }
                }
                .journal-comics8 {
                    .journal-comics-ballon-box {
                        &.b1 {
                            width: 300px;
                            height: auto;
                            bottom: 20px;
                            left: 20px;
                        }
                        &.b2 {
                            width: 300px;
                            height: auto;
                            top: 40px;
                            right: 20px;
                        }
                    }
                }
                .journal-comics9 {
                    .journal-comics-ballon-box {
                        &.b1 {
                            width: 300px;
                            height: auto;
                            bottom: 20px;
                            left: 20px;
                        }
                    }
                }
                .journal-comics {
                    img {
                        &:hover {
                            cursor: pointer;
                            filter: drop-shadow(0 1px 6px rgba(0, 0, 0, 0.6));
                            ~ .trophy-bonus-pic-lup {
                                filter: brightness(1);
                                transform: scale(1);
                            }
                        }
                        &:active {
                            ~ .trophy-bonus-pic-lup {
                                transform: scale(0.9333);
                            }
                        }
                    }
                    .journal-comics-ballon-box {
                        width: 100px;
                        height: 90px;
                        position: absolute;
                        background-color: #fff;
                        border: 2px solid #000;
                        display: table;
                        .journal-comics-ballon-text {
                            width: 100%;
                            height: 100%;
                            display: table-cell;
                            vertical-align: middle;
                            color: #000;
                            font-size: 14px;
                            font-weight: bold;
                            text-transform: uppercase;
                            text-align: center;
                            font-style: italic;
                            line-height: 16px;
                            padding: 10px;
                        }
                    }
                    .trophy-bonus-pic-lup {
                        width: 30px;
                        height: 30px;
                        position: absolute;
                        right: 5px;
                        top: 5px;
                        background-image: url(../img/trophy-bonus-dpc.png);
                        background-size: 100%;
                        background-repeat: no-repeat;
                        pointer-events: none;
                        filter: brightness(0.9);
                        transform: scale(0.9333);
                    }
                }

                &.c1 {
                    .journal-comics1 {
                        display: block;
                    }
                }
                &.c2 {
                    .journal-comics2 {
                        display: block;
                    }
                }
                &.c3 {
                    .journal-comics3 {
                        display: block;
                    }
                }
                &.c4 {
                    .journal-comics4 {
                        display: block;
                    }
                }
                &.c5 {
                    .journal-comics5 {
                        display: block;
                    }
                }
                &.c6 {
                    .journal-comics6 {
                        display: block;
                    }
                }
                &.c7 {
                    .journal-comics7 {
                        display: block;
                    }
                }
                &.c8 {
                    .journal-comics8 {
                        display: block;
                    }
                }
                &.c9 {
                    .journal-comics9 {
                        display: block;
                    }
                }
                &.c10 {
                    .journal-comics10 {
                        display: block;
                    }
                }
                &.c12 {
                    .journal-comics12 {
                        display: block;
                    }
                }
                &.c13 {
                    .journal-comics13 {
                        display: block;
                    }
                }
                &.c14 {
                    .journal-comics14 {
                        display: block;
                    }
                }
                &.c15 {
                    .journal-comics15 {
                        display: block;
                    }
                }
                &.c16 {
                    .journal-comics16 {
                        display: block;
                    }
                }
                &.c17 {
                    .journal-comics17 {
                        display: block;
                    }
                }
                &.c18 {
                    .journal-comics18 {
                        display: block;
                    }
                }
                &.c19 {
                    .journal-comics19 {
                        display: block;
                    }
                }
                &.c20 {
                    .journal-comics20 {
                        display: block;
                    }
                }
            }
            .uki-story-nav-box {
                width: 100%;
                height: 70px;
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: #9c8b7c;
                .color-btn {
                    width: 120px;
                    margin: 0 10px 0 10px;
                    top: 10px;
                }
                .color-btn.green {
                    display: none;
                }
                &.btn2 {
                    .color-btn.green {
                        display: inline-block;
                    }
                }
            }
        }
    }
`;

export default V2ScreenUkiStoryPop;
