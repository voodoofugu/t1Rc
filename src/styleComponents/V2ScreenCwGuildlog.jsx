
import styled from "styled-components";

const V2ScreenCwGuildlog = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";

.guildlog {
    width: 590px;
    height: 530px;
    left: 305px;
    top: 25px;
}
.cw-guildlog,
.guildlog {
    .title {
        color: #572f14;
    }
    .color-box {
        background: linear-gradient(
            136deg,
            #8e7453 0%,
            #e3c7a3 50%,
            #ae916a 85%,
            #8f7553 100%
        );
        &:before {
            display: none;
        }
        &:after {
            display: none;
        }
    }
    .cw-clan-log-box-all {
        width: 310px;
        height: 425px;
        position: absolute;
        top: 35px;
        background-color: #cbaa81;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
        .cw-main-right-b-box-scroll {
            width: 295px;
            height: 405px;
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 0;
            overflow: hidden;
            overflow-y: scroll;
            &::-webkit-scrollbar-track {
                background-color: #524544;
            }
            &::-webkit-scrollbar {
                width: 8px;
            }
            &::-webkit-scrollbar-thumb {
                @include background-resourcebg;
            }
            .cw-log-box {
                &.user-select {
                    @include prefix(user-select, text);
                }

                width: 280px;
                margin: 4px 0 15px 0;
                .cw-log-date {
                    width: 100%;
                    height: 20px;
                    top: 0;
                    left: 0;
                    background-color: #544746;
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                    text-align: center;
                }
                .cw-log-text {
                    width: 100%;
                    top: 22px;
                    color: #fff;
                    font-size: 14px;
                    font-weight: bold;
                    text-align: left;
                    margin-top: 2px;
                    .color-btn {
                        width: 86px;
                        height: 32px;
                        top: -2px;
                    }
                }
            }
        }
    }
}

.cw-clan-logo-bg,
.cw-clan-logo {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 5px;
    left: 92px;
    img {
        width: 70px;
    }
    .cw-clan-logo {
        top: 0;
        left: 0;
    }
}

.cw-new-chat-message {
    width: 175px;
    height: 30px;
    border: none;
    margin-right: 10px;
}

.m-popup.fortuna-main-round-rating.cw-clans {
    .cw-guildlog {
        //width: 590px; height: 530px; left: 305px; top: 25px;
        .title {
            color: #572f14;
        }
        //.color-box{
        //    background: linear-gradient(136deg, #8e7453 0%, #e3c7a3 50%, #ae916a 85%, #8f7553 100%);
        //    &:before{display: none};
        //    &:after{display: none};
        //}
        .cw-clan-log-box-all {
            width: 760px;
            height: 425px;
            position: absolute;
            top: 130px;
            left: 20px;
            background-color: #cbaa81;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
            .cw-main-right-b-box-scroll {
                width: 745px;
                height: 405px;
                position: absolute;
                top: 10px;
                left: 10px;
                font-size: 0;
                overflow: hidden;
                overflow-y: scroll;
                &::-webkit-scrollbar-track {
                    background-color: #524544;
                }
                &::-webkit-scrollbar {
                    width: 8px;
                }
                &::-webkit-scrollbar-thumb {
                    @include background-resourcebg;
                }
                .cw-log-box {
                    width: 730px;
                    margin: 4px 0 15px 0;
                    .cw-log-date {
                        width: 100%;
                        height: 20px;
                        top: 0;
                        left: 0;
                        background-color: #544746;
                        color: #fff;
                        font-size: 16px;
                        font-weight: bold;
                        text-align: center;
                    }
                    .cw-log-text {
                        width: 100%;
                        top: 22px;
                        color: #fff;
                        font-size: 14px;
                        font-weight: bold;
                        text-align: left;
                    }
                    .cw-new-chat-message {
                        width: 625px;
                        height: 30px;
                        border: none;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
}

`;

export default V2ScreenCwGuildlog;
