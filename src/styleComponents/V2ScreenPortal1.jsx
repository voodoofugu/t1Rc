import styled from "styled-components";

const V2ScreenPortal1 = styled.div`
  


// bronze
.suphero-squad-wrap.bronze-bg-fg {
    &:before {
        background-image: none;
    }
}
.suphero-squad-window.bronze-bg-fg {
    &:after {
        background-image: url(../img/bronze-squad-fg.png);
    }
}
.hero-pic-box.bronze-card-fg {
    &:after {
        background-image: url(../img/bronze-card-fg.png);
    }
}
.suphero-card.bronze-card-flare {
    &:after {
        background-image: url(../img/bronze-flare.png);
    }
    &:hover {
        background: #edcea9;
        border-radius: 6px;
    }
}
.bronze-color-bg {
    background: linear-gradient(
        8deg,
        #d6a85f 0%,
        #edcea9 25%,
        #d6a85f 50%,
        #edcea9 75%,
        #d6a85f 100%
    );
}
.bronze-color-button {
    background: linear-gradient(
        180deg,
        #edcea9 0%,
        #d6a85f 25%,
        #edcea9 50%,
        #d6a85f 75%,
        #edcea9 100%
    );
}
.suphero-buttons-info.bronze-color-button {
    &:active {
        background: linear-gradient(
            180deg,
            #edcea9 0%,
            #d6a85f 30%,
            #edcea9 55%,
            #d6a85f 85%,
            #edcea9 100%
        );
    }
}
.bronze-text-color {
    color: #4c3a25;
}
.bronze-text-color-damage {
    color: #edcea9;
    background-color: #8e7041;
}

// silver
.suphero-squad-wrap.silver-bg-fg {
    &:before {
        background-image: url(../img/silver-squad-bg.png);
    }
}
.suphero-squad-window.silver-bg-fg {
    &:after {
        background-image: url(../img/silver-squad-fg.png);
    }
}
.hero-pic-box.silver-card-fg {
    &:after {
        background-image: url(../img/silver-card-fg.png);
    }
}
.suphero-card.silver-card-flare {
    &:after {
        background-image: url(../img/silver-flare.png);
    }
    &:hover {
        background: #e6e6e6;
        border-radius: 6px;
    }
}
.silver-color-bg {
    background: linear-gradient(
        8deg,
        #b3b3b3 0%,
        #e6e6e6 25%,
        #b3b3b3 50%,
        #e6e6e6 75%,
        #b3b3b3 100%
    );
}
.silver-color-button {
    background: linear-gradient(
        180deg,
        #e6e6e6 0%,
        #b3b3b3 25%,
        #e6e6e6 50%,
        #b3b3b3 75%,
        #e6e6e6 100%
    );
}
.suphero-buttons-info.silver-color-button {
    &:active {
        background: linear-gradient(
            180deg,
            #e6e6e6 0%,
            #b3b3b3 30%,
            #e6e6e6 55%,
            #b3b3b3 80%,
            #e6e6e6 100%
        );
    }
}
.silver-text-color {
    color: #494949;
}
.silver-text-color-damage {
    color: #e6e6e6;
    background-color: #787878;
}

// gold
.suphero-squad-wrap.gold-bg-fg {
    &:before {
        background-image: url(../img/gold-squad-bg.png);
    }
}
.suphero-squad-window.gold-bg-fg {
    &:after {
        background-image: url(../img/gold-squad-fg.png);
    }
}
.hero-pic-box.gold-card-fg {
    &:after {
        background-image: url(../img/gold-card-fg.png);
    }
}
.suphero-card.gold-card-flare {
    &:after {
        background-image: url(../img/gold-flare.png);
    }
    &:hover {
        background: #f4e6be;
        border-radius: 6px;
    }
}
.gold-color-bg {
    background: linear-gradient(
        8deg,
        #eac959 0%,
        #f4e6be 25%,
        #eac959 50%,
        #f4e6be 75%,
        #eac959 100%
    );
}
.gold-color-button {
    background: linear-gradient(
        180deg,
        #f4e6be 0%,
        #eac959 25%,
        #f4e6be 50%,
        #eac959 75%,
        #f4e6be 100%
    );
}
.suphero-buttons-info.gold-color-button {
    &:active {
        background: linear-gradient(
            180deg,
            #f4e6be 0%,
            #eac959 30%,
            #f4e6be 55%,
            #eac959 80%,
            #f4e6be 100%
        );
    }
}
.gold-text-color {
    color: #4c3a25;
}
.gold-text-color-damage {
    color: #f4e6be;
    background-color: #9a853c;
}

// platinum
.suphero-squad-wrap.platinum-bg-fg {
    &:before {
        background-image: url(../img/platinum-squad-bg.png);
    }
}
.suphero-squad-window.platinum-bg-fg {
    &:after {
        background-image: url(../img/platinum-squad-fg.png);
    }
}
.hero-pic-box.platinum-card-fg {
    &:after {
        background-image: url(../img/platinum-card-fg.png);
    }
}
.suphero-card.platinum-card-flare {
    &:after {
        background-image: url(../img/platinum-flare.png);
    }
    &:hover {
        background: #e6e6e6;
        border-radius: 6px;
    }
}
.platinum-color-bg {
    background: linear-gradient(
        8deg,
        #ccccb6 0%,
        #e6e6e6 25%,
        #ccccb6 50%,
        #e6e6e6 75%,
        #ccccb6 100%
    );
}
.platinum-color-button {
    background: linear-gradient(
        180deg,
        #e6e6e6 0%,
        #ccccb6 25%,
        #e6e6e6 50%,
        #ccccb6 75%,
        #e6e6e6 100%
    );
}
.suphero-buttons-info.platinum-color-button {
    &:active {
        background: linear-gradient(
            180deg,
            #e6e6e6 0%,
            #ccccb6 30%,
            #e6e6e6 55%,
            #ccccb6 80%,
            #e6e6e6 100%
        );
    }
}
.platinum-text-color {
    color: #4c3a25;
}
.platinum-text-color-damage {
    color: #e6e6e6;
    background-color: #878779;
}

// diamond
.suphero-squad-wrap.diamond-bg-fg {
    &:before {
        background-image: url(../img/diamond-squad-bg.png);
    }
}
.suphero-squad-window.diamond-bg-fg {
    &:after {
        background-image: url(../img/diamond-squad-fg.png);
    }
}
.hero-pic-box.diamond-card-fg {
    &:after {
        background-image: url(../img/diamond-card-fg.png);
    }
}
.suphero-card.diamond-card-flare {
    &:after {
        background-image: url(../img/diamond-flare.png);
    }
    &:hover {
        background: #b3f2f5;
        border-radius: 6px;
    }
}
.diamond-color-bg {
    background: linear-gradient(
        8deg,
        #78a9c5 0%,
        #b3f2f5 25%,
        #78a9c5 50%,
        #b3f2f5 75%,
        #78a9c5 100%
    );
}
.diamond-color-button {
    background: linear-gradient(
        180deg,
        #b3f2f5 0%,
        #78a9c5 25%,
        #b3f2f5 50%,
        #78a9c5 75%,
        #b3f2f5 100%
    );
}
.suphero-buttons-info.diamond-color-button {
    &:active {
        background: linear-gradient(
            180deg,
            #b3f2f5 0%,
            #78a9c5 30%,
            #b3f2f5 55%,
            #78a9c5 80%,
            #b3f2f5 100%
        );
    }
}
.diamond-text-color {
    color: #4c3a25;
}
.diamond-text-color-damage {
    color: #b3f2f5;
    background-color: #507082;
}

body .main {
    .left-side {
        width: 620px;
        height: 555px;
        position: absolute;
        left: 5px;
        bottom: 5px;
        .tabs-all-box {
            width: 500px;
            height: 40px;
            position: absolute;
            top: 0;
            left: 0;
            font-size: 0;
            .tabs-all {
                width: 118px;
                height: 40px;
                position: relative;
                top: 0;
                left: 0;
                display: inline-block;
                margin: 0 2px 0 0;
                cursor: pointer;
                background-color: #9c8b7c;
                border-radius: 24px 24px 0 0;
                &:before {
                    content: "";
                    width: 110px;
                    height: 36px;
                    position: absolute;
                    top: 4px;
                    left: 4px;
                    background-color: #544746;
                    border-radius: 20px 20px 0 0;
                    box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.15);
                }
                .tabs-name {
                    width: 60px;
                    height: 40px;
                    position: absolute;
                    right: 14px;
                    color: #fff;
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 44px;
                    text-align: center;
                }
                .tabs-pic {
                    width: 50px;
                    height: 32px;
                    position: absolute;
                    top: 5px;
                    left: 5px;
                    img {
                        width: 50px;
                    }
                }
                &.selected {
                    &:before {
                        content: "";
                        background-color: #9c8b7c;
                    }
                }
            }
        }
        .left-panel {
            width: 620px;
            height: 515px;
            position: absolute;
            left: 0;
            top: 40px;
            &:before {
                content: "";
                width: 620px;
                height: 5px;
                position: absolute;
                top: 0;
                left: 0;
                background-color: #9c8b7c;
                z-index: 999;
            }
            &.wide {
                width: 1106px;
                &:before {
                    content: "";
                    width: 1102px;
                }
                .tab-panel-box.suphero {
                    width: 1098px;
                    height: 511px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: #b7a597;
                    border: solid 4px #9c8b7c;
                    border-top: none;
                    box-shadow: inset 0 0 7px #5f4f4e;
                    .tab-panel-box-title {
                        width: 300px;
                        height: 24px;
                        position: absolute;
                        top: 10px;
                        left: 399px;
                        background: linear-gradient(
		0deg, 
		#ffe199 0%, 
		#f4c657 18%, 
		#ffe199 60%, 
		#f4c557 85%, 
		#ffe199 100%);
                        border-radius: 12px;
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                        color: #3c3737;
                        font-size: 16px;
                        font-weight: bold;
                        text-transform: uppercase;
                        line-height: 24px;
                        text-align: center;
                    }
                    .leftside-box-all {
                        width: 843px;
                        height: 462px;
                        position: absolute;
                        top: 39px;
                        left: 10px;
                        background-color: #9e8b7d;
                        border-radius: 9px;
                        .suphero-all-box {
                            width: 833px;
                            height: 452px;
                            position: absolute;
                            top: 5px;
                            margin: 0;
                            font-size: 0;
                            transform: rotateY(180deg);
                            border-radius: 0px;
                            overflow: hidden;
                            overflow-y: scroll;
                            padding: 0;
                            left: 5px;
                            &::-webkit-scrollbar-track {
                                -webkit-box-shadow: inset 0 0 6px
                                    rgba(0, 0, 0, 0.5);
                                border-radius: 10px;
                                background-color: #7c665c;
                            }
                            &::-webkit-scrollbar {
                                width: 10px;
                                background-color: #9e8b7d;
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
                            .suphero-squad-wrap {
                                width: 798px;
                                margin: 10px 10px 20px 10px;
                                &:before {
                                    content: "";
                                    position: absolute;
                                    width: 820px;
                                    height: 184px;
                                    right: 4px;
                                    background-repeat: no-repeat;
                                }
                            }
                            .suphero-squad-heading {
                                width: 260px;
                                height: 34px;
                                margin: auto;
                                border-radius: 6px 6px 0 0;
                                padding: 0;
                                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5),
                                    0px 0px 0px 1.5px rgba(0, 0, 0, 0.1);
                                transform: rotateY(180deg);
                            }
                            .suphero-squad-heading:before {
                                content: "";
                                position: absolute;
                                box-shadow: inset 0px 0px 10px
                                    rgba(0, 0, 0, 0.5);
                                margin: 5px;
                                width: 250px;
                                height: 34px;
                                border-radius: 3px;
                            }
                            .heading-text {
                                font-size: 16px;
                                font-weight: bold;
                                padding: 7px;
                                text-transform: uppercase;
                                line-height: 24px;
                                text-align: center;
                                text-shadow: 0px 1px 2px #fff;
                            }
                            .suphero-squad-window {
                                border-radius: 6px;
                                transform: rotateY(180deg);
                                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5),
                                    0px 0px 0px 1.5px rgba(0, 0, 0, 0.1);
                                padding: 10px;
                                &:before {
                                    content: "";
                                    position: absolute;
                                    box-shadow: inset 0px 0px 10px
                                        rgba(0, 0, 0, 0.5);
                                    margin: 5px;
                                    width: calc(100% - 10px);
                                    height: calc(100% - 10px);
                                    left: 0px;
                                    top: 0px;
                                    border-radius: 3px;
                                }
                                &:after {
                                    content: "";
                                    position: absolute;
                                    width: 806px;
                                    height: 141px;
                                    left: -4px;
                                    top: -4px;
                                    background-repeat: no-repeat;
                                }
                            }
                            .suphero-specialization {
                                width: 38px;
                                height: 113px;
                                position: relative;
                                display: inline-block;
                                margin-right: 5px;
                            }
                            .specialization-icon {
                                width: 30px;
                                height: auto;
                                position: absolute;
                                padding-top: 7px;
                                margin: auto;
                                left: 0;
                                top: 0;
                                bottom: 0;
                                right: 0;
                            }
                            .suphero-card {
                                width: 100px;
                                height: 113px;
                                display: inline-block;
                                position: relative;
                                margin-right: 5px;
                                cursor: pointer;
                                z-index: 1;
                                &:active {
                                    border-radius: 6px;
                                    transform: scale(1.01) !important;
                                    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2),
                                        inset 0px 0px 0px 6px
                                            rgba(255, 255, 255, 0.3) !important;
                                    .hero-pic:after {
                                        box-shadow: inset 0px 0px 14px
                                                rgba(0, 0, 0, 0.6),
                                            inset 0px 0px 0px 1px
                                                rgba(0, 0, 0, 0.1) !important;
                                    }
                                }
                                &:hover {
                                    z-index: +1;
                                    transform: scale(1.02);
                                    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
                                }
                                &:after {
                                    content: "";
                                    position: absolute;
                                    z-index: 2;
                                    width: 110px;
                                    height: 123px;
                                    top: -5px;
                                    left: -5px;
                                    background-repeat: no-repeat;
                                }
                                .hero-pic-box {
                                    width: 100px;
                                    height: 113px;
                                    position: absolute;
                                    top: 0px;
                                    left: 0px;
                                    border-radius: 6px;
                                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5),
                                        0px 0px 0px 1.5px rgba(0, 0, 0, 0.1);
                                    .hero-pic-gacha {
                                        top: 0px;
                                        right: 0px;
                                        z-index: 2;
                                        font-size: 10px;
                                        font-weight: bold;
                                        text-transform: uppercase;
                                        line-height: 26px;
                                        text-align: center;
                                        text-shadow: 0px 1px 2px #fff;
                                        position: absolute;
                                        box-shadow: -2px 2px 2px
                                                rgba(0, 0, 0, 0.5),
                                            0px 0px 0px 1.5px rgba(0, 0, 0, 0.1);
                                        border-radius: 6px;
                                        width: 65px;
                                        height: 26px;
                                        &:before {
                                            content: "";
                                            position: absolute;
                                            box-shadow: inset 0px 0px 4px
                                                rgba(0, 0, 0, 0.5);
                                            margin: 5px;
                                            width: calc(100% - 10px);
                                            height: calc(100% - 10px);
                                            left: 0px;
                                            top: 0px;
                                            border-radius: 3px;
                                        }
                                    }
                                    .hero-pic {
                                        img {
                                            width: 90px;
                                            height: 103px;
                                        }
                                        width: 90px;
                                        height: 103px;
                                        position: absolute;
                                        top: 5px;
                                        left: 5px;
                                        border-radius: 4px;
                                        overflow: hidden;
                                        &:after {
                                            content: "";
                                            box-shadow: inset 0px 0px 10px
                                                    rgba(0, 0, 0, 0.5),
                                                inset 0px 0px 0px 1px
                                                    rgba(0, 0, 0, 0.1);
                                            border-radius: 4px;
                                            width: 90px;
                                            height: 103px;
                                            position: absolute;
                                            top: 0px;
                                            left: 0px;
                                        }
                                    }
                                    &:after {
                                        content: "";
                                        position: absolute;
                                        z-index: 1;
                                        width: 102px;
                                        height: 115px;
                                        top: -1px;
                                        left: -1px;
                                        background-repeat: no-repeat;
                                    }
                                }
                            }
                            .suphero-buttons {
                                width: 100px;
                                height: 113px;
                                display: inline-block;
                                position: relative;
                                z-index: 1;
                                margin-left: 5px;
                                .suphero-buttons-info {
                                    width: 100px;
                                    height: 28px;
                                    border-radius: 6px;
                                    position: absolute;
                                    top: 0px;
                                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5),
                                        0px 0px 0px 1.5px rgba(0, 0, 0, 0.1),
                                        inset 0px -4px 0px rgba(0, 0, 0, 0.25);
                                    font-size: 16px;
                                    font-weight: bold;
                                    padding-top: 2px;
                                    cursor: pointer;
                                    text-transform: uppercase;
                                    line-height: 24px;
                                    text-align: center;
                                    text-shadow: 0px 1px 2px #fff;
                                    &:active {
                                        box-shadow: 0px 0px 10px
                                                rgba(0, 0, 0, 0.5),
                                            0px 0px 0px 1.5px rgba(0, 0, 0, 0.1),
                                            inset 0px -1px 0px rgba(0, 0, 0, 0.4);
                                        line-height: 27px;
                                    }
                                }
                                .suphero-buttons-dpc {
                                    width: 100px;
                                    height: 28px;
                                    border-radius: 6px;
                                    position: absolute;
                                    bottom: calc(50% - 14px);
                                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5),
                                        0px 0px 0px 1.5px rgba(0, 0, 0, 0.1);
                                    &:before {
                                        content: "";
                                        width: 22px;
                                        height: 22px;
                                        position: absolute;
                                        background-image: url(../img/ico-click.png);
                                        background-repeat: no-repeat;
                                        background-size: 22px;
                                        top: 3px;
                                        left: 3px;
                                    }
                                    .dpc-info {
                                        width: 65px;
                                        height: 18px;
                                        float: right;
                                        margin-top: 4px;
                                        margin-right: 4px;
                                        font-size: 13px;
                                        font-weight: bold;
                                        padding-top: 2px;
                                        text-transform: uppercase;
                                        line-height: 16px;
                                        text-align: right;
                                        border-radius: 4px;
                                        padding-right: 4px;
                                        box-shadow: inset 0px 2px 1px
                                            rgba(0, 0, 0, 0.2);
                                        text-shadow: 0px 1px 2px #000;
                                    }
                                }
                                .suphero-buttons-dps {
                                    width: 100px;
                                    height: 28px;
                                    border-radius: 6px;
                                    position: absolute;
                                    bottom: 0px;
                                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5),
                                        0px 0px 0px 1.5px rgba(0, 0, 0, 0.1);
                                    &:before {
                                        content: "";
                                        width: 22px;
                                        height: 22px;
                                        position: absolute;
                                        background-image: url(../img/ico-sword.png);
                                        background-repeat: no-repeat;
                                        background-size: 22px;
                                        top: 3px;
                                        left: 3px;
                                    }
                                    .dps-info {
                                        width: 65px;
                                        height: 18px;
                                        float: right;
                                        margin-top: 4px;
                                        margin-right: 4px;
                                        font-size: 13px;
                                        font-weight: bold;
                                        padding-top: 2px;
                                        text-transform: uppercase;
                                        line-height: 16px;
                                        text-align: right;
                                        border-radius: 4px;
                                        padding-right: 4px;
                                        box-shadow: inset 0px 2px 1px
                                            rgba(0, 0, 0, 0.2);
                                        text-shadow: 0px 1px 2px #000;
                                    }
                                }
                            }
                        }
                    }
                    .rightside-box-all {
                        width: 216px;
                        height: 462px;
                        position: absolute;
                        top: 39px;
                        right: 10px;
                        .rightbox-wrap {
                            .gacha-box {
                                width: 216px;
                                height: 56px;
                                background: linear-gradient(
                                    0deg,
                                    #ffe199,
                                    #f4c657 18%,
                                    #ffe199 60%,
                                    #f4c557 85%,
                                    #ffe199
                                );
                                border-radius: 100px;
                                box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.5),
                                    0 2px 4px 0 rgba(0, 0, 0, 0.3);
                                margin-bottom: 10px;
                                &:before {
                                    content: "";
                                    width: 40px;
                                    height: 40px;
                                    position: absolute;
                                    top: 6px;
                                    left: 6px;
                                    background-image: url(../img/trophy-bonus-gems.png);
                                    background-size: 100%;
                                    background-repeat: no-repeat;
                                }
                                .gacha-value {
                                    width: 105px;
                                    height: 28px;
                                    position: absolute;
                                    top: 8px;
                                    right: 44px;
                                    background: linear-gradient(
                                        90deg,
                                        #f4bf87,
                                        #d38632 50%,
                                        #92581a
                                    );
                                    box-shadow: inset 0 2px 4px
                                            rgba(0, 0, 0, 0.3),
                                        inset 0px 10px 0px
                                            rgba(255, 255, 255, 0.12);
                                    border-radius: 10px;
                                    color: #fff;
                                    font-size: 20px;
                                    font-weight: 700;
                                    line-height: 28px;
                                    text-align: right;
                                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
                                    padding: 5px 10px 5px 5px;
                                }
                                .gacha-btn-add {
                                    width: 32px;
                                    height: 32px;
                                    position: absolute;
                                    top: 12px;
                                    right: 8px;
                                    cursor: pointer;
                                    &:before {
                                        content: "";
                                        width: 22px;
                                        height: 6px;
                                        position: absolute;
                                        top: 13px;
                                        left: 5px;
                                        background-color: #3c3737;
                                        border-radius: 2px;
                                        box-shadow: 0px 1.5px 0px
                                            rgba(255, 255, 255, 0.9);
                                    }
                                    &:after {
                                        content: "";
                                        width: 6px;
                                        height: 22px;
                                        position: absolute;
                                        top: 5px;
                                        left: 13px;
                                        background-color: #3c3737;
                                        border-radius: 2px;
                                        box-shadow: 0px 1.5px 0px
                                            rgba(255, 255, 255, 0.9);
                                    }
                                    &:active {
                                        transform: scale(0.94);
                                        &:before {
                                            box-shadow: 0px 0px 0px
                                                rgba(255, 255, 255, 0.9);
                                        }
                                        &:after {
                                            box-shadow: 0px 0px 0px
                                                rgba(255, 255, 255, 0.9);
                                        }
                                    }
                                }
                            }
                            .character-information-box {
                                width: 216px;
                                height: 154px;
                                margin-bottom: 10px;
                                border-radius: 9px;
                                background: #9e8b7d;
                                .character-information-header {
                                    width: 90px;
                                    height: 44px;
                                    position: absolute;
                                    left: 65px;
                                    margin-top: 8px;
                                    .avatar-box {
                                        width: 52px;
                                        height: 52px;
                                        background-image: url(../img/v2-master-pic1.png);
                                        background-size: 100%;
                                        background-repeat: no-repeat;
                                        margin-top: -4px;
                                        border-radius: 6px;
                                        position: absolute;
                                        margin-left: -16px;
                                    }
                                    .lvl-box {
                                        width: 84px;
                                        height: 44px;
                                        float: right;
                                        background: linear-gradient(
                                            0deg,
                                            #e9b039,
                                            #fffe9a
                                        );
                                        border-radius: 6px;
                                        box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2),
                                            0 2px 4px rgba(0, 0, 0, 0.5);
                                        .lvl-text {
                                            color: #4c3a25;
                                            text-shadow: 0px 1px 2px #fff;
                                            font-size: 13px;
                                            font-weight: 700;
                                            text-align: center;
                                            text-transform: uppercase;
                                            line-height: 13px;
                                            padding-left: 28px;
                                            padding-top: 4px;
                                        }
                                        .lvl-text2 {
                                            color: #4c3a25;
                                            text-shadow: 0px 1px 2px #fff;
                                            font-size: 20px;
                                            font-weight: 700;
                                            text-align: center;
                                            text-transform: uppercase;
                                            line-height: 20px;
                                            padding-left: 28px;
                                        }
                                    }
                                }
                                .character-information-damage {
                                    width: 216px;
                                    height: 86px;
                                    position: absolute;
                                    margin-top: 63px;
                                    .character-information-dpc {
                                        &:before {
                                            content: "";
                                            width: 22px;
                                            height: 22px;
                                            position: absolute;
                                            background-image: url(../img/ico-click.png);
                                            background-repeat: no-repeat;
                                            background-size: 22px;
                                            left: 12px;
                                        }
                                    }
                                    .character-information-dps {
                                        &:before {
                                            content: "";
                                            width: 22px;
                                            height: 22px;
                                            position: absolute;
                                            background-image: url(../img/ico-sword.png);
                                            background-repeat: no-repeat;
                                            background-size: 22px;
                                            left: 12px;
                                        }
                                    }
                                    .character-information-killing {
                                        &:before {
                                            content: "";
                                            width: 22px;
                                            height: 22px;
                                            position: absolute;
                                            background-image: url(../img/v2-fw-icon-w3.png);
                                            background-repeat: no-repeat;
                                            background-size: 22px;
                                            left: 12px;
                                        }
                                    }
                                    .character-information-damage-textbox {
                                        width: 192px;
                                        height: 20px;
                                        border-radius: 6px;
                                        font-size: 15px;
                                        font-weight: 700;
                                        line-height: 20px;
                                        text-align: right;
                                        padding: 2px 6px 2px 2px;
                                        float: right;
                                        margin-right: 8px;
                                        margin-bottom: 5px;
                                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                                        background: #b7a597;
                                        color: #4c3a25;
                                        text-shadow: 0px 1px 2px #fff;
                                    }
                                }
                            }
                            .special-offer-box {
                                width: 216px;
                                height: 100px;
                                background-image: url(../img/unipop-m-wsale227.jpg);
                                background-size: 100%;
                                background-repeat: no-repeat;
                                margin-bottom: 15px;
                                border-radius: 6px;
                            }
                            .togacha-box {
                                width: 190px;
                                height: 60px;
                                cursor: pointer;
                                background: linear-gradient(
                                    0deg,
                                    #d67503,
                                    #fdd2a0
                                );
                                float: right;
                                box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2),
                                    0 2px 4px rgba(0, 0, 0, 0.5),
                                    0 1px 0px 1px rgba(0, 0, 0, 0.2);
                                border-radius: 6px;
                                margin-bottom: 15px;
                                &:before {
                                    content: "";
                                    width: 80px;
                                    height: 80px;
                                    background-image: url(../img/change-sun2.png);
                                    background-size: 100%;
                                    background-repeat: no-repeat;
                                    position: absolute;
                                    margin: -10px 0 0 -35px;
                                }
                                &:active {
                                    background: linear-gradient(
                                        0deg,
                                        #d67503 0%,
                                        #fdd2a0 90%
                                    );
                                    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                                        0 1px 1px rgba(0, 0, 0, 0.5);
                                    .togacha-btn-text {
                                        line-height: 60px;
                                    }
                                }
                                .togacha-btn-text {
                                    color: #4c3a25;
                                    font-weight: 700;
                                    font-size: 18px;
                                    text-shadow: 0px 1px 2px #fff;
                                    text-transform: uppercase;
                                    line-height: 56px;
                                    float: right;
                                    margin-right: 32px;
                                }
                            }
                            .leftside-box-btn {
                                width: 216px;
                                height: 40px;
                                display: inline-block;
                                .tobattle {
                                    float: left;
                                }
                                .tomap {
                                    float: right;
                                }
                                .leftside-btn {
                                    width: 103px;
                                    height: 40px;
                                    background: linear-gradient(
                                        0deg,
                                        #e9b039,
                                        #fffe9a
                                    );
                                    box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.2),
                                        0 2px 4px 0 rgba(0, 0, 0, 0.5);
                                    color: #4c3a25;
                                    text-shadow: 0px 1px 2px #fff;
                                    font-size: 16px;
                                    cursor: pointer;
                                    font-weight: 700;
                                    text-align: center;
                                    text-transform: uppercase;
                                    border-radius: 6px;
                                    display: inline-block;
                                    line-height: 36px;
                                    &:active {
                                        box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.2),
                                            0 1px 1px 0 rgba(0, 0, 0, 0.5);
                                        line-height: 40px;
                                    }
                                }
                            }
                        }
                    }
                    .btn-close-x {
                        width: 30px;
                        height: 30px;
                        position: absolute;
                        top: -6px;
                        right: -6px;
                        background: linear-gradient(
                            30deg,
                            #876b56,
                            #aa9383,
                            #dfceba
                        );
                        border-radius: 7px;
                        border: 4px solid #ffbe43;
                        box-shadow: 0 0 7px #000;
                        cursor: pointer;
                        z-index: 999;
                        &:before {
                            content: "\2716";
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
                }
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

.herostar-box {
    width: 100px;
    height: 26px;
    background-color: rgba(89, 68, 53, 0.5);
    position: absolute;
    border-radius: 0 0 4px 4px;
    .herostar {
        width: 94px;
        height: 18px;
        position: absolute;
        background-image: url(../img/hero-star05-bg.png);
        background-size: 100%;
        &:before {
            content: "";
            width: 94px;
            height: 18px;
            position: absolute;
        }
        &.lvl00 {
            &:before {
                content: "";
                width: 0px;
                background-repeat: no-repeat;
                background-size: 470%;
                background-image: url(../img/hero-star05.png);
            }
        }
        &.lvl02 {
            &:before {
                content: "";
                width: 20px;
                background-repeat: no-repeat;
                background-size: 470%;
                background-image: url(../img/hero-star05.png);
            }
        }
        &.lvl04 {
            &:before {
                content: "";
                width: 40px;
                background-repeat: no-repeat;
                background-size: 235%;
                background-image: url(../img/hero-star05.png);
            }
        }
        &.lvl06 {
            &:before {
                content: "";
                width: 56px;
                background-repeat: no-repeat;
                background-size: 168%;
                background-image: url(../img/hero-star05.png);
            }
        }
        &.lvl08 {
            &:before {
                content: "";
                width: 72px;
                background-repeat: no-repeat;
                background-size: 131%;
                background-image: url(../img/hero-star05.png);
            }
        }
        &.lvl010 {
            &:before {
                content: "";
                width: 94px;
                background-repeat: no-repeat;
                background-size: 100%;
                background-image: url(../img/hero-star05.png);
            }
        }
        &.ult {
            &:before {
                content: "";
                width: 94px;
                background-repeat: no-repeat;
                background-size: 100%;
                background-image: url(../img/big-hero-star05-purple.png);
            }
        }
    }
}

.lvlup-btn {
    width: 196px;
    height: 50px;
    border-radius: 6px;
    background-color: #dab443;
    margin: 0 4px 0 4px;
    box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25), 0 0 6px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    .essence-text-box {
        width: 190px;
        height: 24px;
        position: relative;
        top: 3px;
        margin-left: 3px;
        background-color: #615144;
        border-radius: 4px;
        .essence-icon {
            width: 34px;
            height: 34px;
            position: relative;
            display: inline-block;
            background-image: url(../img/essence-80x80.png);
            background-size: 100%;
            top: -5px;
        }
        .essence-text {
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            color: #fedf87;
            position: relative;
            text-transform: uppercase;
            text-shadow: 0 1px 2px #614f19;
            display: inline-block;
            top: -16px;
        }
    }
    &.disabled {
        cursor: not-allowed;
        filter: grayscale(100%);
    }
    .btn-text {
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        color: #615144;
        position: relative;
        top: 3px;
        text-transform: uppercase;
        display: inline-block;
    }
    &:hover {
        box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25),
            0 0 6px rgba(0, 0, 0, 0.25);
    }
    &:not(.disabled):active {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25),
            inset 0 -2px 0 rgba(0, 0, 0, 0.25), 0 0 6px rgba(0, 0, 0, 0.25);
        .essence-text-box {
            top: 4px;
        }
        .btn-text {
            top: 4px;
        }
    }
}

`;

export default V2ScreenPortal1;
