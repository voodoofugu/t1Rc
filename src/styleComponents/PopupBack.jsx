import { styled, css } from "styled-components";

const PopupBackStyles = css`
    .popup-layer {
        .back-popup {
            display: block;
            width: 725px;
            height: 480px;
            position: absolute;
            left: 100px;
            bottom: 0px;
            // background: red;
            .person-girl {
                display: block;
                width: 425px;
                height: 475px;
                background-image: url(../img/back-girl.png);
                background-size: 425px;
                position: absolute;
                bottom: 0px;
                left: -145px;
            }
            .balloon-back {
                display: block;
                width: 580px;
                height: 400px;
                background: linear-gradient(
                    0deg,
                    #0d6251 0%,
                    #08bc97 6%,
                    #08bc97 11%,
                    #8defdb 18%,
                    #08be99 60%,
                    #08bb96 74%,
                    #8defdb 92%,
                    #8eefdb 100%
                );
                position: absolute;
                right: 0px;
                top: -60px;
                border-radius: 12px;
                box-shadow: 0 0 25px #000, inset 0 0 1px #9ffffe,
                    inset 0 0 50px #9ffffe, inset 0 0 75px #9ffffe;
                &:before {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 60px;
                    margin: auto;
                    background: #40b49d;
                    position: absolute;
                    top: 0px;
                    border-radius: 12px 12px 0 0;
                    opacity: 0.8;
                }
                .title-box,
                .back-text {
                    display: block;
                    width: 350px;
                    height: 60px;
                    line-height: 60px;
                    position: absolute;
                    margin-left: 220px;
                    font-size: 28px;
                    font-weight: bold;
                    color: #005747;
                    text-shadow: 0 1px 3px #fff, 0 0 20px #acf3e8,
                        0 0 20px #acf3e8, 0 0 20px #acf3e8, 0 0 20px #acf3e8,
                        0 0 20px #acf3e8, 0 0 20px #acf3e8;
                    text-transform: uppercase;
                }
                .back-text {
                    font-size: 14px;
                    line-height: 16px;
                    top: 80px;
                    text-shadow: 0 1px 4px #fff;
                    height: 40px;
                }
                .rewards-box {
                    width: 350px;
                    height: 210px;
                    position: absolute;
                    top: 120px;
                    margin-left: 220px;
                    .rew-pres {
                        width: 150px;
                        height: 100%;
                        position: relative;
                        display: inline-block;
                        &:before {
                            content: "";
                            display: block;
                            width: 130px;
                            height: 130px;
                            border-radius: 100%;
                            background-color: #0c8c74;
                            position: absolute;
                            top: 10px;
                            margin-left: 10px;
                        }
                        .gold-icon,
                        .shards-icon,
                        .diamonds-icon {
                            width: 130px;
                            height: 130px;
                            background-image: url(../img/ic-abil-gold@2x.png);
                            background-size: 130px;
                            position: absolute;
                            top: 10px;
                            margin-left: 10px;
                        }
                        .shards-icon {
                            background-image: url(../img/ic-abil-butil@2x.png);
                        }
                        .diamonds-icon {
                            background-image: url(../img/diamond6@2x.png);
                            height: 101px;
                            top: 18px;
                            margin-left: 9px;
                        }
                        .gold-bonus,
                        .shards-bonus,
                        .diamonds-bonus {
                            width: 130px;
                            position: absolute;
                            top: 150px;
                            margin-left: 10px;
                            color: #0e5648;
                            font-size: 32px;
                            font-weight: bold;
                            text-shadow: 0 1px 3px #fff, 0 0 20px #acf3e8,
                                0 0 20px #acf3e8, 0 0 20px #acf3e8,
                                0 0 20px #acf3e8, 0 0 20px #acf3e8,
                                0 0 20px #acf3e8;
                        }
                        &.gold {
                            .shards-icon {
                                display: none;
                            }
                            .shards-bonus {
                                display: none;
                            }
                        }
                        &.shards {
                            .gold-icon {
                                display: none;
                            }
                            .gold-bonus {
                                display: none;
                            }
                        }
                    }
                }
                .btn-box-back {
                    display: block;
                    width: 350px;
                    height: 70px;
                    position: absolute;
                    bottom: 15px;
                    left: 220px;
                    .btn-get {
                        &.disable {
                            filter: grayscale(100%);
                        }
                        position: relative;
                        top: 12px;
                        margin: 0px 10px;
                        min-width: 160px;
                        height: 50px;
                        line-height: 50px;
                    }
                }
            }
            &.heroplus {
                .person-girl {
                    display: none;
                }
                .heroplus-box {
                    width: 220px;
                    height: 360px;
                    position: absolute;
                    top: -40px;
                    margin-left: 130px;
                    border-radius: 12px;
                    background: linear-gradient(
                        0deg,
                        #843e04 0%,
                        #c99647 15%,
                        #c99026 35%,
                        #f7f7f7 50%,
                        #e3b949 65%,
                        #fdf992 80%,
                        #b85a0d 100%
                    );
                    &:before {
                        content: "";
                        width: 220px;
                        height: 60px;
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        background: linear-gradient(
                            0deg,
                            #843e04 0%,
                            #c99647 15%,
                            #c99026 35%,
                            #e3b949 45%,
                            #fdf992 80%,
                            #b85a0d 100%
                        );
                        border-radius: 0 0 12px 12px;
                    }
                    .herobox {
                        width: 214px;
                        height: 297px;
                        position: absolute;
                        top: 3px;
                        margin-left: 3px;
                        border-radius: 10px 10px 0 0;
                        overflow: hidden;
                        img {
                            width: 100%;
                        }
                    }
                    .btn-buy {
                        bottom: 13px;
                        left: 60px;
                    }
                }
                .back-ballon {
                    display: block;
                    width: 204px;
                    height: 140px;
                    position: absolute;
                    top: -80px;
                    margin-left: 8px;
                    background-image: url(../img/back-ballon.png);
                    background-size: 204px;
                    .ballon-text {
                        color: #4b4843;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 14px;
                        padding-top: 18px;
                    }
                }
            }
        }
    }
`;

const PopupBack = styled.div`
    ${PopupBackStyles}
`;

export { PopupBackStyles, PopupBack };
