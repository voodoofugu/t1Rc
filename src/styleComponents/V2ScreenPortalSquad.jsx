import { styled, css } from "styled-components";

const V2ScreenPortalSquadStyles = css`
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
          .tab-panel-box.squads-panel {
            width: 1098px;
            height: 511px;
            position: absolute;
            top: 0;
            left: 0;
            background: #5e554e;
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
                #ffe199 100%
              );
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
              width: 1098px;
              height: 472px;
              position: absolute;
              top: 39px;
              left: 0;
              background: url(../img/hero_bg@2x.png), #725858;
              background-size: cover;
              background-position: -138px center;
              border-radius: 0 0 14px 14px;
              .suphero-all-box {
                width: 1088px;
                height: 454px;
                position: absolute;
                top: 5px;
                margin: 0;
                font-size: 0;
                border-radius: 0px;
                overflow: hidden;
                overflow-y: scroll;
                padding: 8px 0 0 0;
                left: 5px;
                display: flex;
                flex-wrap: wrap;
                &::-webkit-scrollbar-track {
                  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                  border-radius: 10px;
                  background-color: #342d2a;
                }
                &::-webkit-scrollbar {
                  width: 10px;
                  border-radius: 10px;
                }
                &::-webkit-scrollbar-thumb {
                  border-radius: 10px;
                  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.4);
                  background: linear-gradient(
                    to right,
                    #fff,
                    #f5de80,
                    #f4b766,
                    #b26d12
                  );
                }
                > .suphero-squad-heading {
                  width: 798px;
                  margin: 14px 10px 0 10px;
                  position: relative;
                  padding: 0;
                  border-radius: 6px;
                  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.4));
                  &:before,
                  &:after {
                    content: "";
                    position: absolute;
                    top: 0px;
                    width: 44px;
                    height: 38px;
                    background-image: url(../img/darkworld-angel-pop-btn-bg.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    filter: brightness(0.77) grayscale(0.3);
                  }
                  &:before {
                    left: 194px;
                  }
                  &:after {
                    right: 194px;
                    transform: scaleX(-1);
                  }
                  .heading-text {
                    background-color: #705d4e;
                    margin: auto;
                    width: 300px;
                    border-radius: 6px;
                    line-height: 38px;
                    font-size: 14px;
                    font-weight: 700;
                    color: #fff;
                    text-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.4),
                      0 1px 2px rgba(0, 0, 0, 0.6), 0 1px 4px rgba(0, 0, 0, 0.2);
                    text-transform: uppercase;
                    display: flex;
                    justify-content: center;
                  }
                  &:first-child {
                    margin-top: 0;
                  }
                  &.premium {
                    &:before,
                    &:after {
                      filter: brightness(1.03) grayscale(1);
                    }
                    .heading-text {
                      background: linear-gradient(
                          325deg,
                          rgba(255, 255, 255, 0) 0%,
                          rgba(255, 255, 255, 0) 26%,
                          rgba(255, 255, 255, 0.1) 26%,
                          rgba(255, 255, 255, 0.1) 48%,
                          rgba(255, 255, 255, 0) 48%,
                          rgba(255, 255, 255, 0) 60%,
                          rgba(255, 255, 255, 0.1) 60%,
                          rgba(255, 255, 255, 0.1) 70%,
                          rgba(255, 255, 255, 0) 70%,
                          rgba(255, 255, 255, 0) 100%
                        ),
                        #7e7e7e;
                    }
                  }
                  &.active {
                    &:before,
                    &:after {
                      filter: brightness(0.84) hue-rotate(130deg);
                    }
                    .heading-text {
                      background-color: #4e705c;
                    }
                  }
                }
                .suphero-squad-wrap {
                  width: 798px;
                  margin: 10px 10px 0 10px;
                  position: relative;
                  &:before,
                  &:after,
                  .suphero-squad-window:before,
                  .suphero-squad-window:after {
                    content: "";
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    left: -5px;
                    top: 34px;
                    background-image: url(../img/squad-corners.png);
                    background-size: 20px auto;
                    background-repeat: no-repeat;
                    z-index: 2;
                    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.6));
                    pointer-events: none;
                  }
                  &:after {
                    left: unset;
                    right: -5px;
                    transform: scaleX(-1);
                  }
                  .suphero-squad-heading {
                    display: inline-block;
                    width: 164px;
                    height: 38px;
                    padding: 0 14px;
                    // overflow: hidden;
                    position: relative;
                    left: 50%;
                    top: 4px;
                    transform: translateX(-50%);
                    transition: ease-in-out 0.1s;
                    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.4));
                    .heading-text {
                      background: linear-gradient(#875c29, #d49548);
                      background: linear-gradient(#805a31, #c18346);
                      border-radius: 10px 10px 0 0;
                      line-height: 38px;
                      font-size: 14px;
                      color: #fff;
                      text-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.4),
                        0 1px 2px rgba(0, 0, 0, 0.6),
                        0 1px 4px rgba(0, 0, 0, 0.2);
                      text-transform: uppercase;
                      font-weight: 100;
                      box-shadow: inset 0 1px 0 #dea569;
                      display: flex;
                      justify-content: center;
                      position: relative;
                      &:before {
                        content: "";
                        width: 32px;
                        height: 32px;
                        display: inline-block;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        margin-top: 3px;
                        transform: translateX(-6px);
                        background-image: url(../img/ic-ore-squad.png);
                        background-position: 0 0;
                        background-repeat: no-repeat;
                        background-size: 32px auto;
                      }
                      &:after {
                        content: "";
                        width: 818px;
                        height: 60px;
                        position: absolute;
                        left: 50%;
                        top: -12px;
                        transform: translateX(-50%);
                        background-image: url(../img/suphero-squad-frame-all@x2.png);
                        background-position: 0 0;
                        background-repeat: no-repeat;
                        background-size: 100% auto;
                        z-index: 1;
                        pointer-events: none;
                      }
                    }
                    &:before,
                    &:after {
                      content: "";
                      width: 14px;
                      height: 100%;
                      position: absolute;
                      top: 0px;
                      background: linear-gradient(#875c29, #d49548 94%);
                      background: linear-gradient(#805a31, #c18346 94%);
                    }
                    &:before {
                      left: 8px;
                      transform: skewX(-20deg);
                      border-radius: 6.6px 0 0 0;
                      box-shadow: inset 1px 1px 0 #dea569;
                    }
                    &:after {
                      right: 8px;
                      transform: skewX(20deg);
                      border-radius: 0 6.6px 0 0;
                      box-shadow: inset -1px 1px 0 #dea569;
                    }
                  }
                  .suphero-squad-window {
                    position: relative;
                    padding: 10px;
                    border-radius: 10px;
                    background: linear-gradient(135deg, #584b48, #8c706f);
                    background-position: 0;
                    background-repeat: no-repeat;
                    background-size: 100%;
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
                      inset 0 0 0 2px #ff9b37,
                      inset 0 0 2px 2px rgba(0, 0, 0, 0.2),
                      inset 0 70px 24px rgba(255, 212, 110, 0.2),
                      0 1px 4px rgba(0, 0, 0, 0.6);
                    &:before {
                      left: -5px;
                      bottom: -4px;
                      top: unset;
                      transform: scaleY(-1);
                    }
                    &:after {
                      right: -5px;
                      bottom: -4px;
                      top: unset;
                      left: unset;
                      transform: scale(-1, -1);
                    }
                    .hero-level-box {
                      width: 88px;
                      top: 2px;
                      position: absolute;
                      right: 16px;
                      line-height: 14px;
                      height: 16px;
                      z-index: 1;
                      padding: unset;
                      border-radius: 0 0 10px 10px;
                      font-size: 12px;
                      text-shadow: 0.5px 0 0 rgba(0, 0, 0, 0.8),
                        0 1px 2px rgba(255, 255, 255, 0.6),
                        1px 1px 2px rgba(255, 255, 255, 0.6);
                      text-transform: uppercase;
                      font-weight: 700;
                      display: flex;
                      justify-content: space-between;
                      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6));
                      &:before,
                      &:after {
                        content: "";
                        width: 14px;
                        height: 100%;
                        position: absolute;
                        top: 0px;
                        z-index: -1;
                      }
                      &:before {
                        left: -6px;
                        transform: skewX(20deg);
                        border-radius: 0 0 0 6.6px;
                      }
                      &:after {
                        right: -6px;
                        transform: skewX(-20deg);
                        border-radius: 0 0 6.6px 0;
                      }
                      .hero-level {
                        line-height: inherit;
                        right: 0;
                        font-style: italic;
                        padding-right: 2px;
                        width: fit-content;
                        overflow: unset;
                        font-size: 12px;
                        color: inherit;
                        text-shadow: inherit;
                        text-transform: lowercase;
                      }
                    }
                    .suphero-specialization {
                      width: 38px;
                      height: 113px;
                      position: relative;
                      display: inline-block;
                      margin-right: 5px;
                      z-index: 1;
                      &:before {
                        content: "";
                        width: 52px;
                        height: 48px;
                        position: absolute;
                        left: -8px;
                        top: 73px;
                        background-image: url(../img/specialization-elems-bg.png);
                        background-position: -10px 0px;
                        background-repeat: no-repeat;
                        background-size: 59px auto;
                        border-radius: 0 0 0 16px;
                        filter: drop-shadow(2px -2px 2px rgba(0, 0, 0, 0.2));
                      }
                      .specialization-icon {
                        width: 36px;
                        height: auto;
                        position: absolute;
                        left: -4px;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        img {
                          width: 100%;
                        }
                        &.cls {
                          left: -6px;
                          top: -8px;
                          &:hover {
                            filter: brightness(1.1);
                          }
                        }
                        &.elem {
                          top: 86px;
                          left: -9px;
                          filter: drop-shadow(0 0 2px rgba(0, 0, 0, 1));
                          &:hover {
                            filter: drop-shadow(0 0 2px rgba(0, 0, 0, 1))
                              brightness(1.1);
                          }
                        }
                        &:hover {
                          cursor: help;
                        }
                      }
                    }
                    .suphero-card {
                      width: 100px;
                      height: 113px;
                      display: inline-block;
                      position: relative;
                      margin-right: 5px;
                      cursor: pointer;
                      z-index: 1;
                      &:before,
                      &:after,
                      .hero-pic-box:before,
                      .hero-pic-box:after {
                        content: "";
                        position: absolute;
                        width: 16px;
                        height: 16px;
                        left: -4px;
                        top: -3px;
                        background-size: 16px auto;
                        background-repeat: no-repeat;
                        z-index: 1;
                        filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.6));
                      }
                      &:after {
                        left: unset;
                        right: -4px;
                        transform: scaleX(-1);
                      }
                      &:active {
                        border-radius: 6px;
                        transform: scale(1.01) !important;
                        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2),
                          inset 0px 0px 0px 6px rgba(255, 255, 255, 0.3) !important;
                        .hero-pic:after {
                          box-shadow: inset 0px 0px 14px rgba(0, 0, 0, 0.6),
                            inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1) !important;
                        }
                        .hero-pic-box {
                          .color-btn.squad-buy-hero {
                            box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.25),
                              0 2px 4px 0 rgba(0, 0, 0, 0.55);
                            .color-btn-text {
                              line-height: 33px;
                            }
                          }
                        }
                      }
                      &:hover {
                        z-index: +1;
                        transform: scale(1.02);
                        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
                        .hero-pic-box {
                          .hero-pic {
                            filter: brightness(1.1);
                          }
                        }
                      }
                      .hero-pic-box {
                        width: 100px;
                        height: 113px;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5),
                          0px 0px 0px 1.5px rgba(0, 0, 0, 0.1),
                          inset 0 1px 0 rgba(255, 255, 255, 0.6);
                        background: #ff9b37;
                        border-radius: 6px;
                        &:before {
                          left: -4px;
                          bottom: -3px;
                          top: unset;
                          transform: scaleY(-1);
                        }
                        &:after {
                          right: -4px;
                          bottom: -3px;
                          top: unset;
                          left: unset;
                          transform: scale(-1, -1);
                        }
                        .hero-pic-gacha {
                          top: 2px;
                          right: 2px;
                          font-size: 10px;
                          font-weight: bold;
                          text-transform: uppercase;
                          line-height: 18px;
                          text-align: center;
                          text-shadow: 0px 1px 2px #000000;
                          position: absolute;
                          width: 52px;
                          padding-left: 10px;
                          overflow: hidden;
                          border-radius: 0 4px 0 0;
                          color: #fff;
                          filter: drop-shadow(
                            -1px 1px 1px rgba(255, 255, 255, 0.7)
                          );
                          &:before {
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            left: 0px;
                            top: 0px;
                            background: rgba(0, 0, 0, 0.6);
                            border-radius: 4px;
                            margin-left: 10px;
                            transform: skewX(10deg);
                            z-index: -1;
                          }
                        }
                        .hero-pic {
                          width: 96px;
                          height: 109px;
                          position: absolute;
                          top: 2px;
                          left: 2px;
                          @include prefix(border-radius, 4px);
                          overflow: hidden;
                          img {
                            width: 100%;
                            height: auto;
                          }
                          &:after {
                            content: "";
                            box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5),
                              inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
                            border-radius: 4px;
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: 0px;
                            left: 0px;
                          }
                        }
                        .color-btn.squad-buy-hero {
                          position: absolute;
                          bottom: 6px;
                          left: 6px;
                          width: 88px;
                          height: 30px;
                          z-index: 2;
                          .color-btn-text {
                            width: 100%;
                            display: inline-block;
                            line-height: 30px;
                          }
                        }
                      }
                      .viplvl {
                        width: 38px;
                        height: 38px;
                        position: absolute;
                        top: -7px;
                        left: -7px;
                        color: rgba(0, 0, 0, 0.8);
                        font-weight: 700;
                        font-size: 16px;
                        text-align: center;
                        line-height: 39px;
                        text-shadow: 0 1px 0 hsla(0deg, 0%, 100%, 0.35);
                        background-repeat: no-repeat;
                        background-position: center;
                        filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.8));
                        z-index: 1;
                      }
                      &.lvl0 {
                        .hero-pic-box {
                          background: #ad8367;
                        }
                        .viplvl {
                          background-image: url(../img/2vip-s1.png);
                          background-size: 100%;
                          filter: brightness(0.9) grayscale(0.5);
                          &:before {
                            content: "N";
                          }
                        }
                      }
                      &.lvl1 {
                        &:before,
                        &:after,
                        .hero-pic-box:before,
                        .hero-pic-box:after {
                          background-image: url(../img/squad-corners.png);
                          background-position: 0 0;
                        }
                        .hero-pic-box {
                          background: #ff9b37;
                        }
                        .viplvl {
                          background-image: url(../img/2vip-s1.png);
                          background-size: 100%;
                          &:before {
                            content: "I";
                          }
                        }
                      }
                      &.lvl2 {
                        &:before,
                        &:after,
                        .hero-pic-box:before,
                        .hero-pic-box:after {
                          background-image: url(../img/squad-corners.png);
                          background-position: 0 0px;
                        }
                        .hero-pic-box {
                          background: #ff9b37;
                        }
                        .viplvl {
                          background-image: url(../img/2vip-s2.png);
                          background-size: 100%;
                          &:before {
                            content: "II";
                          }
                        }
                      }
                      &.lvl3 {
                        &:before,
                        &:after,
                        .hero-pic-box:before,
                        .hero-pic-box:after {
                          background-image: url(../img/squad-corners.png);
                          background-position: 0 -16px;
                        }
                        .hero-pic-box {
                          background: #b0b0b0;
                        }
                        .viplvl {
                          background-image: url(../img/2vip-s3.png);
                          background-size: 100%;
                          &:before {
                            content: "III";
                          }
                        }
                      }
                      &.lvl4 {
                        &:before,
                        &:after,
                        .hero-pic-box:before,
                        .hero-pic-box:after {
                          background-image: url(../img/squad-corners.png);
                          background-position: 0 -16px;
                        }
                        .hero-pic-box {
                          background: #b0b0b0;
                        }
                        .viplvl {
                          background-image: url(../img/2vip-s4.png);
                          background-size: 100%;
                          &:before {
                            content: "IV";
                          }
                        }
                      }
                      &.lvl5 {
                        &:before,
                        &:after,
                        .hero-pic-box:before,
                        .hero-pic-box:after {
                          background-image: url(../img/squad-corners.png);
                          background-position: 0 -32px;
                        }
                        .hero-pic-box {
                          background: #ffe437;
                        }
                        .viplvl {
                          background-image: url(../img/2vip-s5.png);
                          background-size: 100%;
                          &:before {
                            content: "V";
                          }
                        }
                      }
                      &.lvl6 {
                        &:before,
                        &:after,
                        .hero-pic-box:before,
                        .hero-pic-box:after {
                          background-image: url(../img/squad-corners.png);
                          background-position: 0 -32px;
                        }
                        .hero-pic-box {
                          background: #ffe437;
                        }
                        .viplvl {
                          background-image: url(../img/2vip-s6.png);
                          background-size: 100%;
                          &:before {
                            content: "VI";
                          }
                        }
                      }
                      &.lvl7 {
                        &:before,
                        &:after,
                        .hero-pic-box:before,
                        .hero-pic-box:after {
                          background-image: url(../img/squad-corners.png);
                          background-position: 0 -48px;
                        }
                        .hero-pic-box {
                          background: #bdbdae;
                        }
                        .viplvl {
                          background-image: url(../img/3vip-s7.png);
                          background-size: 100%;
                          &:before {
                            content: "VII";
                          }
                        }
                      }
                      &.lvl8 {
                        &:before,
                        &:after,
                        .hero-pic-box:before,
                        .hero-pic-box:after {
                          background-image: url(../img/squad-corners.png);
                          background-position: 0 -48px;
                        }
                        .hero-pic-box {
                          background: #bdbdae;
                        }
                        .viplvl {
                          background-image: url(../img/3vip-s8.png);
                          background-size: 100%;
                          &:before {
                            content: "VIII";
                          }
                        }
                      }
                      &.lvl9 {
                        &:before,
                        &:after,
                        .hero-pic-box:before,
                        .hero-pic-box:after {
                          background-image: url(../img/squad-corners.png);
                          background-position: 0 -64px;
                        }
                        .hero-pic-box {
                          background: #78a9c5;
                        }
                        .viplvl {
                          background-image: url(../img/3vip-s9.png);
                          background-size: 100%;
                          &:before {
                            content: "IX";
                          }
                        }
                      }
                      &.lvl10 {
                        &:before,
                        &:after,
                        .hero-pic-box:before,
                        .hero-pic-box:after {
                          background-image: url(../img/squad-corners.png);
                          background-position: 0 -64px;
                        }
                        .hero-pic-box {
                          background: #78a9c5;
                          .hero-pic-gacha {
                            text-align: left;
                            width: 40px;
                            padding-left: 14px;
                            &::before {
                              margin-left: 5px;
                            }
                            &:after {
                              content: "";
                              position: absolute;
                              width: 20px;
                              height: 18px;
                              background: url(../img/paycheck-arrow.png);
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                              filter: contrast(0.8);
                            }
                          }
                        }
                        .viplvl {
                          background-image: url(../img/3vip-s10.png);
                          background-size: 100%;
                          &:before {
                            content: "X";
                          }
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
                        height: 34px;
                        border-radius: 6px;
                        position: absolute;
                        bottom: 0px;
                        font-size: 16px;
                        font-weight: bold;
                        text-transform: uppercase;
                        line-height: 30px;
                        text-align: center;
                        cursor: pointer;
                        text-shadow: 0px 1px 2px #fff;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5),
                          0px 0px 0px 1.5px rgba(0, 0, 0, 0.1),
                          inset 0px -4px 0px rgba(0, 0, 0, 0.25);
                        background: linear-gradient(
                          0deg,
                          #e9b039 0%,
                          #fffe9a 100%
                        );
                        color: #4c3a25;
                        &:active {
                          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5),
                            0px 0px 0px 1.5px rgba(0, 0, 0, 0.1),
                            inset 0px -1px 0px rgba(0, 0, 0, 0.4);
                          line-height: 33px;
                        }
                        &:hover {
                          filter: brightness(1.1);
                        }
                        &.disable {
                          filter: grayscale(1);
                          cursor: not-allowed;
                        }
                      }
                      .suphero-buttons-dpc,
                      .suphero-buttons-dps {
                        width: 100px;
                        height: 26px;
                        border-radius: 6px;
                        position: absolute;
                        top: 14px;
                        box-shadow: 1px 0px 2px rgba(255, 255, 255, 0.2),
                          inset 0 1px 2px rgba(0, 0, 0, 0.2);
                        background: #614c4b;
                        &:before {
                          content: "";
                          width: 22px;
                          height: 22px;
                          position: absolute;
                          background-image: url(../img/ico-click.png);
                          background-repeat: no-repeat;
                          background-size: 22px;
                          top: 2px;
                          left: 2px;
                        }
                        .dpc-info,
                        .dps-info {
                          width: 68px;
                          line-height: 26px;
                          position: absolute;
                          top: 0;
                          right: 4px;
                          font-size: 13px;
                          font-weight: bold;
                          text-align: right;
                          text-shadow: 0px 1px 2px #000;
                          color: #fff;
                        }
                      }
                      .suphero-buttons-dps {
                        top: 46px;
                        &:before {
                          background-image: url(../img/ico-sword.png);
                        }
                      }
                    }
                  }

                  &.bronze-bg-fg {
                    &:before,
                    &:after,
                    .suphero-squad-window:before,
                    .suphero-squad-window:after {
                      background-position: 0 0;
                    }
                    .suphero-squad-heading {
                      .heading-text {
                        background: linear-gradient(#c18346, #805a31);
                        box-shadow: inset 0 1px 0 #dea569;
                        &:before {
                          background-position: 0 0;
                        }
                        &:after {
                          background-position: 0 0px;
                        }
                      }
                      &:before,
                      &:after {
                        background: linear-gradient(#c18346, #805a31 94%);
                      }
                      &:before {
                        box-shadow: inset 1px 1px 0 #dea569;
                      }
                      &:after {
                        box-shadow: inset -1px 1px 0 #dea569;
                      }
                    }
                    .suphero-squad-window {
                      background: linear-gradient(135deg, #584b48, #8c706f);
                      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
                        inset 0 0 0 2px #ff9b37,
                        inset 0 0 2px 2px rgba(0, 0, 0, 0.2),
                        inset 0 70px 24px rgba(255, 212, 110, 0.2),
                        0 1px 4px rgba(0, 0, 0, 0.6);
                      .hero-level-box {
                        background: linear-gradient(180deg, #c18346, #805a31);
                        box-shadow: inset 0 -1px 0 #dea569;
                        color: #352b23;
                        &:before {
                          box-shadow: inset 1px -1px 0 #dea569;
                          background: linear-gradient(
                            180deg,
                            #c18346,
                            #805a31 94%
                          );
                        }
                        &:after {
                          box-shadow: inset -1px -1px 0 #dea569;
                          background: linear-gradient(
                            180deg,
                            #c18346,
                            #805a31 94%
                          );
                        }
                      }
                      .suphero-specialization {
                        &:before {
                          background-image: url(../img/specialization-elems-bg.png);
                          background-position: -10px 0px;
                        }
                      }
                    }
                  }
                  &.silver-bg-fg {
                    &:before,
                    &:after,
                    .suphero-squad-window:before,
                    .suphero-squad-window:after {
                      background-position: 0 -20px;
                    }
                    .suphero-squad-heading {
                      .heading-text {
                        background: linear-gradient(#c2c2c2, #787878);
                        box-shadow: inset 0 1px 0 #dedede;
                        &:before {
                          background-position: 0 -32px;
                        }
                        &:after {
                          background-position: 0 -60px;
                        }
                      }
                      &:before,
                      &:after {
                        background: linear-gradient(#c2c2c2, #787878 94%);
                      }
                      &:before {
                        box-shadow: inset 1px 1px 0 #dedede;
                      }
                      &:after {
                        box-shadow: inset -1px 1px 0 #dedede;
                      }
                    }
                    .suphero-squad-window {
                      background: linear-gradient(135deg, #584b48, #8c706f);
                      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
                        inset 0 0 0 2px #b0b0b0,
                        inset 0 0 2px 2px rgba(0, 0, 0, 0.2),
                        inset 0 70px 24px rgba(255, 255, 255, 0.2),
                        0 1px 4px rgba(0, 0, 0, 0.6);
                      .hero-level-box {
                        background: linear-gradient(180deg, #c2c2c2, #787878);
                        box-shadow: inset 0 -1px 0 #dedede;
                        color: #383838;
                        &:before {
                          box-shadow: inset 1px -1px 0 #dedede;
                          background: linear-gradient(
                            180deg,
                            #c2c2c2,
                            #787878 94%
                          );
                        }
                        &:after {
                          box-shadow: inset -1px -1px 0 #dedede;
                          background: linear-gradient(
                            180deg,
                            #c2c2c2,
                            #787878 94%
                          );
                        }
                      }
                      .suphero-specialization {
                        &:before {
                          background-image: url(../img/specialization-elems-bg.png);
                          background-position: -10px -59px;
                        }
                      }
                    }
                  }
                  &.gold-bg-fg {
                    &:before,
                    &:after,
                    .suphero-squad-window:before,
                    .suphero-squad-window:after {
                      background-position: 0 -40px;
                    }
                    .suphero-squad-heading {
                      .heading-text {
                        background: linear-gradient(#f4c657, #a18b34);
                        box-shadow: inset 0 1px 0 #ffe199;
                        &:before {
                          background-position: 0 -64px;
                        }
                        &:after {
                          background-position: 0 -120px;
                        }
                      }
                      &:before,
                      &:after {
                        background: linear-gradient(#f4c657, #a18b34 94%);
                      }
                      &:before {
                        box-shadow: inset 1px 1px 0 #ffe199;
                      }
                      &:after {
                        box-shadow: inset -1px 1px 0 #ffe199;
                      }
                    }
                    .suphero-squad-window {
                      background: linear-gradient(135deg, #584b48, #8c706f);
                      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
                        inset 0 0 0 2px #ffe437,
                        inset 0 0 2px 2px rgba(0, 0, 0, 0.2),
                        inset 0 70px 24px rgba(255, 248, 110, 0.2),
                        0 1px 4px rgba(0, 0, 0, 0.6);
                      .hero-level-box {
                        background: linear-gradient(180deg, #f4c657, #a18b34);
                        box-shadow: inset 0 -1px 0 #ffe199;
                        color: #353323;
                        &:before {
                          box-shadow: inset 1px -1px 0 #ffe199;
                          background: linear-gradient(
                            180deg,
                            #f4c657,
                            #a18b34 94%
                          );
                        }
                        &:after {
                          box-shadow: inset -1px -1px 0 #ffe199;
                          background: linear-gradient(
                            180deg,
                            #f4c657,
                            #a18b34 94%
                          );
                        }
                      }
                      .suphero-specialization {
                        &:before {
                          background-image: url(../img/specialization-elems-bg.png);
                          background-position: -10px -118px;
                        }
                      }
                    }
                  }
                  &.platinum-bg-fg {
                    &:before,
                    &:after,
                    .suphero-squad-window:before,
                    .suphero-squad-window:after {
                      background-position: 0 -60px;
                    }
                    .suphero-squad-heading {
                      .heading-text {
                        background: linear-gradient(#e1e1d6, #87877e);
                        box-shadow: inset 0 1px 0 #f4f4e9;
                        &:before {
                          background-position: 0 -96px;
                        }
                        &:after {
                          background-position: 0 -180px;
                        }
                      }
                      &:before,
                      &:after {
                        background: linear-gradient(#e1e1d6, #87877e 94%);
                      }
                      &:before {
                        box-shadow: inset 1px 1px 0 #f4f4e9;
                      }
                      &:after {
                        box-shadow: inset -1px 1px 0 #f4f4e9;
                      }
                    }
                    .suphero-squad-window {
                      background: linear-gradient(135deg, #584b48, #8c706f);
                      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
                        inset 0 0 0 2px #bdbdae,
                        inset 0 0 2px 2px rgba(0, 0, 0, 0.2),
                        inset 0 70px 24px rgba(235, 234, 214, 0.2),
                        0 1px 4px rgba(0, 0, 0, 0.6);
                      .hero-level-box {
                        background: linear-gradient(180deg, #e1e1d6, #87877e);
                        box-shadow: inset 0 -1px 0 #f4f4e9;
                        color: #353323;
                        &:before {
                          box-shadow: inset 1px -1px 0 #f4f4e9;
                          background: linear-gradient(
                            180deg,
                            #e1e1d6,
                            #87877e 94%
                          );
                        }
                        &:after {
                          box-shadow: inset -1px -1px 0 #f4f4e9;
                          background: linear-gradient(
                            180deg,
                            #e1e1d6,
                            #87877e 94%
                          );
                        }
                      }
                      .suphero-specialization {
                        &:before {
                          background-image: url(../img/specialization-elems-bg.png);
                          background-position: -10px -177px;
                        }
                      }
                    }
                  }
                  &.diamond-bg-fg {
                    &:before,
                    &:after,
                    .suphero-squad-window:before,
                    .suphero-squad-window:after {
                      background-position: 0 -80px;
                    }
                    .suphero-squad-heading {
                      .heading-text {
                        background: linear-gradient(#b3f2f5, #5581c6);
                        box-shadow: inset 0 1px 0 #b3f2f5;
                        &:before {
                          background-position: 0 -128px;
                        }
                        &:after {
                          background-position: 0 -240px;
                        }
                      }
                      &:before,
                      &:after {
                        background: linear-gradient(#b3f2f5, #5581c6 94%);
                      }
                      &:before {
                        box-shadow: inset 1px 1px 0 #b3f2f5;
                      }
                      &:after {
                        box-shadow: inset -1px 1px 0 #b3f2f5;
                      }
                    }
                    .suphero-squad-window {
                      background: linear-gradient(135deg, #584b48, #8c706f);
                      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
                        inset 0 0 0 2px #78a9c5,
                        inset 0 0 2px 2px rgba(0, 0, 0, 0.2),
                        inset 0 70px 24px rgba(172, 223, 255, 0.2),
                        0 1px 4px rgba(0, 0, 0, 0.6);
                      .hero-level-box {
                        background: linear-gradient(180deg, #b3f2f5, #5581c6);
                        box-shadow: inset 0 -1px 0 #b3f2f5;
                        color: #1c2f3b;
                        &:before {
                          box-shadow: inset 1px -1px 0 #b3f2f5;
                          background: linear-gradient(
                            180deg,
                            #b3f2f5,
                            #5581c6 94%
                          );
                        }
                        &:after {
                          box-shadow: inset -1px -1px 0 #b3f2f5;
                          background: linear-gradient(
                            180deg,
                            #b3f2f5,
                            #5581c6 94%
                          );
                        }
                      }
                      .suphero-specialization {
                        &:before {
                          background-image: url(../img/specialization-elems-bg.png);
                          background-position: -10px -236px;
                        }
                      }
                    }
                  }
                }
              }
            }
            .rightside-box-all {
              width: auto;
              height: 452px;
              position: absolute;
              top: 39px;
              right: 40px;
              border-radius: 0 0 14px 0;
              padding: 10px 0;
              display: flex;
              align-items: center;
              pointer-events: none;
              .rightbox-wrap {
                display: flex;
                flex-direction: column;
                align-items: center;
                > * {
                  pointer-events: all;
                }
                .character-information-box {
                  width: 196px;
                  height: auto;
                  padding: 10px;
                  position: relative;
                  background: linear-gradient(#866f68, #6f5c56);
                  border-radius: 10px;
                  box-shadow: 0 0 0 2px #dd9542,
                    0 2px 4px 1px rgba(0, 0, 0, 0.4),
                    inset 0 0 4px rgba(0, 0, 0, 0.2);
                  overflow: hidden;
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  &:before {
                    content: "";
                    width: 20px;
                    height: 20px;
                    background: #dd9542;
                    position: absolute;
                    top: -11px;
                    box-shadow: 0px 378px 0 #dd9542, 218px 0 0 #dd9542,
                      218px 378px 0 #dd9542;
                    border-radius: 14px;
                    left: -11px;
                    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.4));
                  }
                  .character-information-header {
                    width: 90px;
                    height: 44px;
                    margin-left: 14px;
                    position: relative;
                    background: linear-gradient(0deg, #e9b039, #fffe9a);
                    border-radius: 6px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                    &.offer {
                      width: 100%;
                      height: 44px;
                      position: absolute;
                      left: 0;
                      margin-top: 8px;
                      color: white;
                      text-transform: uppercase;
                      text-align: center;
                      font-size: 16px;
                      font-weight: bold;
                      text-shadow: 0 1px 2px rgb(0, 0, 0);
                      .t {
                        font-size: 24px;
                      }
                    }
                    .avatar-box {
                      width: 52px;
                      height: 52px;
                      background-image: url(../img/v2-master-pic1.png);
                      background-size: 100%;
                      background-repeat: no-repeat;
                      position: absolute;
                      top: -4px;
                      left: -16px;
                      border-radius: 6px;
                    }
                    .lvl-box {
                      width: 60px;
                      height: 100%;
                      position: absolute;
                      right: 0;
                      top: 0;
                      .lvl-text {
                        color: #4c3a25;
                        text-shadow: 0px 1px 2px #fff;
                        font-size: 13px;
                        font-weight: 700;
                        text-align: center;
                        text-transform: uppercase;
                        line-height: 13px;
                        padding-top: 6px;
                      }
                      .lvl-text2 {
                        color: #4c3a25;
                        text-shadow: 0px 1px 2px #fff;
                        font-size: 16px;
                        font-weight: 700;
                        text-align: center;
                        text-transform: uppercase;
                        line-height: 24px;
                      }
                    }
                  }
                  .character-information-damage {
                    padding-top: 5px;
                    .character-information-damage-textbox {
                      width: 188px;
                      height: 20px;
                      border-radius: 6px;
                      font-size: 15px;
                      font-weight: 700;
                      line-height: 20px;
                      text-align: right;
                      padding: 2px 6px 2px 2px;
                      margin-top: 5px;
                      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                      background: #b7a597;
                      color: #4c3a25;
                      text-shadow: 0px 1px 2px #fff;
                      position: relative;
                      &:before {
                        content: "";
                        width: 22px;
                        height: 22px;
                        position: absolute;
                        background-repeat: no-repeat;
                        background-size: 22px;
                        left: 6px;
                      }
                      &:hover {
                        filter: brightness(1.1);
                        cursor: help;
                      }
                      &.character-information-dpc {
                        &:before {
                          background-image: url(../img/ico-click.png);
                        }
                      }
                      &.character-information-dps {
                        &:before {
                          background-image: url(../img/ico-sword.png);
                        }
                      }
                      &.character-information-killing {
                        &:before {
                          background-image: url(../img/v2-fw-icon-w3.png);
                        }
                      }
                    }
                  }
                  .shop-btn {
                    width: 196px;
                    height: 60px;
                    cursor: pointer;
                    background: linear-gradient(0deg, #d67503, #fdd2a0);
                    box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2),
                      0 2px 4px rgba(0, 0, 0, 0.5),
                      0 1px 0px 1px rgba(0, 0, 0, 0.2);
                    border-radius: 6px;
                    margin-top: 10px;
                    position: relative;
                    &:before {
                      content: "";
                      width: 80px;
                      height: 56px;
                      background-image: url(../img/change-sun2.png);
                      background-size: 100%;
                      background-repeat: no-repeat;
                      background-position: center 2px;
                      position: absolute;
                      left: -2px;
                      top: 0;
                      pointer-events: none;
                    }
                    &:active {
                      background: linear-gradient(
                        0deg,
                        #d67503 0%,
                        #fdd2a0 90%
                      );
                      box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                        0 1px 1px rgba(0, 0, 0, 0.5);
                      &:before {
                        top: 2px;
                        height: 57px;
                      }
                      .shop-btn-text {
                        top: 6px;
                      }
                    }
                    &:hover {
                      filter: brightness(1.1);
                    }
                    .shop-btn-text {
                      color: #4c3a25;
                      font-weight: 700;
                      font-size: 18px;
                      text-shadow: 0px 1px 2px #fff;
                      text-transform: uppercase;
                      line-height: 24px;
                      width: 118px;
                      height: 48px;
                      position: absolute;
                      top: 4px;
                      right: 6px;
                      text-align: center;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    }
                    &.promote {
                      &:before {
                        background-image: url(../img/change-sun2.png);
                        background-size: 96%;
                      }
                    }
                    &.under-shop {
                      &:before {
                        background-image: url(../img/v2-xmas-chest-purple.png);
                        background-size: 88%;
                        background-position: center 0px;
                      }
                    }
                  }
                  .world-map {
                    cursor: pointer;
                    z-index: 101;
                    width: 70px;
                    height: 70px;
                    filter: brightness(100%);
                    position: relative;
                    margin-top: 10px;
                    top: 0;
                    &:hover {
                      filter: brightness(110%);
                    }
                    &:active {
                      transform: scale(0.96);
                      filter: brightness(100%);
                    }
                    img {
                      width: 80px;
                      filter: drop-shadow(0 5px 3px rgba(0, 0, 0, 0.5));
                      position: absolute;
                      left: -5px;
                      top: -5px;
                    }
                    .world-map-heading {
                      color: #fff;
                      text-transform: capitalize;
                      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7),
                        0 1px 5px rgba(0, 0, 0, 1);
                      top: 0;
                      left: 0;
                      width: 100%;
                      line-height: 70px;
                      position: absolute;
                      font-size: 14px;
                      font-weight: 700;
                      text-align: center;
                      text-transform: uppercase;
                    }
                  }
                }
              }
            }
            .color-btn-info {
              width: 26px;
              height: 26px;
              position: absolute;
              top: 9px;
              right: 10px;
              background: linear-gradient(
                0deg,
                #ffe199 0%,
                #ecaa0a 18%,
                #ffe199 60%,
                #f4c557 85%,
                #ffe199 100%
              );
              border-radius: 100%;
              cursor: pointer;
              box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2),
                0px 1px 3px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 0, 0, 0.1);
              font-size: 26px;
              line-height: 24px;
              font-weight: 700;
              font-family: "Times New Roman", Times, serif;
              text-shadow: 0 1px 4px rgba(255, 255, 255, 0.6);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #544c3c;
              &:after {
                content: "";
                display: block;
                border-radius: 100%;
                position: absolute;
                background: linear-gradient(
                  rgba(255, 255, 255, 0.4),
                  rgba(255, 255, 255, 0)
                );
                height: 12px;
                width: 16px;
                box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
                left: 5px;
                top: 3px;
              }
              &:hover {
                filter: brightness(1.1);
              }
              &:active {
                transform: scale(0.96);
              }
            }
            .trophy-res-box-all {
              width: 190px;
              .trophy-res-box {
                &.orb {
                  &:before {
                    content: "";
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    background-image: url(../img/v2-f-e1.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                }
                &.chips {
                  left: 190px;
                  &:before {
                    content: "";
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    background-image: url(../img/v2-icon-chaos.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                  .trophy-value {
                    width: 120px;
                  }
                }
              }
            }
          }
        }
      }
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

  body
    .main.world2
    .left-side
    .left-panel
    .heroes-list-all-box
    .all-heroes-box
    .all-heroes-box-scroll {
    padding: 5px 0;
    top: 5px;
    height: 333px;
    .hero-card-box-all {
      display: flex;
      flex-wrap: wrap;
      .hero-card.starterpack {
        display: none;
      }
      .hero-card-wrap {
        position: relative;
        margin: 6px 5px;
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 0;
        }
        &:before,
        &:after,
        .hero-card:before,
        .hero-card:after {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          left: -5px;
          top: -4px;
          background-size: 20px auto;
          background-repeat: no-repeat;
          z-index: 2;
          filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.6));
          pointer-events: none;
        }
        &:after {
          left: unset;
          right: -5px;
          transform: scaleX(-1);
        }
        .hero-card {
          width: 470px;
          margin: 0px;
          cursor: default;
          height: 132px;
          background-image: linear-gradient(
              325deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0) 26%,
              rgba(255, 255, 255, 0.1) 26%,
              rgba(255, 255, 255, 0.1) 48%,
              rgba(255, 255, 255, 0) 48%,
              rgba(255, 255, 255, 0) 60%,
              rgba(255, 255, 255, 0.1) 60%,
              rgba(255, 255, 255, 0.1) 70%,
              rgba(255, 255, 255, 0) 70%,
              rgba(255, 255, 255, 0) 100%
            ),
            linear-gradient(0deg, #584b48, #8c706f);
          background-repeat: no-repeat;
          background-position: 0;
          background-size: cover;
          transform: scale(1);
          &:before {
            left: -5px;
            bottom: -4px;
            top: unset;
            transform: scaleY(-1);
          }
          &:after {
            right: -5px;
            bottom: -4px;
            top: unset;
            left: unset;
            transform: scale(-1, -1);
          }
          &:hover {
            background-image: linear-gradient(
                325deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0) 26%,
                rgba(255, 255, 255, 0.1) 26%,
                rgba(255, 255, 255, 0.1) 48%,
                rgba(255, 255, 255, 0) 48%,
                rgba(255, 255, 255, 0) 60%,
                rgba(255, 255, 255, 0.1) 60%,
                rgba(255, 255, 255, 0.1) 70%,
                rgba(255, 255, 255, 0) 70%,
                rgba(255, 255, 255, 0) 100%
              ),
              linear-gradient(0deg, #655653, #9b7d7c);
          }
          .squad-info-buttons {
            width: calc(100% - 4px);
            height: 40px;
            display: flex;
            position: absolute;
            z-index: 1;
            left: 2px;
            top: 2px;
            align-items: center;
            background: rgba(0, 0, 0, 0.3);
            box-shadow: 0 1px 2px rgba(255, 255, 255, 0.2);
            border-radius: 8px 8px 0 0;
            overflow: hidden;
            backdrop-filter: blur(4px);
            .suphero-buttons-info {
              width: 110px;
              height: 28px;
              line-height: 28px;
              font-size: 14px;
              font-weight: bold;
              text-transform: uppercase;
              text-align: center;
              color: #fff;
              text-shadow: 0px 1px 2px #000000;
              background: url(../img/banner-squad-bg.png);
              background-size: auto 140px;
              background-repeat: no-repeat;
              background-position: right 0;
              filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.8));
              padding-right: 16px;
              display: inline-block;
              display: flex;
              justify-content: center;
              position: relative;
              box-shadow: none;
              border-radius: 0;
              padding: 0 20px 0 0;
              &:before {
                content: "";
                width: 32px;
                height: 32px;
                margin-top: -2px;
                background-position: 0 0;
                background-repeat: no-repeat;
                background-size: 32px auto;
                transform: scale(0.8);
              }
            }
            .suphero-buttons-dpc {
              width: 100px;
              height: 28px;
              border-radius: 6px;
              position: relative;
              box-shadow: 1px 0px 2px rgba(255, 255, 255, 0.2),
                inset 0 1px 2px rgba(0, 0, 0, 0.2);
              background: rgba(0, 0, 0, 0.3);
              display: inline-block;
              margin-left: 5px;
              bottom: unset;
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
                text-shadow: 0px 1px 2px #000;
                color: #fff;
                box-shadow: none;
              }
            }
            .suphero-buttons-dps {
              width: 100px;
              height: 28px;
              border-radius: 6px;
              position: relative;
              box-shadow: 1px 0px 2px rgba(255, 255, 255, 0.2),
                inset 0 1px 2px rgba(0, 0, 0, 0.2);
              background: rgba(0, 0, 0, 0.3);
              display: inline-block;
              margin-left: 5px;
              bottom: unset;
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
                text-shadow: 0px 1px 2px #000;
                color: #fff;
                box-shadow: none;
              }
            }
          }
          .hero-level-box {
            width: 92px;
            top: 116px;
            right: 50%;
            transform: translateX(+50%);
            line-height: 18px;
            height: 16px;
            border-radius: 0 8px 0 8px;
            z-index: 1;
            padding: unset;
            border-radius: 10px 10px 0 0;
            font-size: 12px;
            text-shadow: 0.5px 0 0 rgba(0, 0, 0, 0.8),
              0 1px 2px rgba(255, 255, 255, 0.6),
              1px 1px 2px rgba(255, 255, 255, 0.6);
            text-transform: uppercase;
            font-weight: 700;
            &:before,
            &:after {
              content: "";
              width: 14px;
              height: 100%;
              position: absolute;
              top: 0px;
              z-index: -1;
            }
            &:before {
              left: -6px;
              transform: skewX(-20deg);
              border-radius: 6.6px 0 0 0;
            }
            &:after {
              right: -6px;
              transform: skewX(20deg);
              border-radius: 0 6.6px 0 0;
            }
            .hero-level {
              line-height: 16px;
              right: 0;
              font-style: italic;
              padding-right: 2px;
              width: fit-content;
              overflow: unset;
              font-size: 12px;
              color: inherit;
              text-shadow: inherit;
            }
          }
          .specialization-icon {
            width: 92px;
            position: absolute;
            top: 2px;
            right: 2px;
            height: 40px;
            z-index: 1;
            &:before {
              content: "";
              width: 52px;
              height: 48px;
              position: absolute;
              right: 0;
              top: 0;
              background-image: url(../img/specialization-elems-bg.png);
              background-position: -10px 0px;
              background-repeat: no-repeat;
              background-size: 59px auto;
              border-radius: 0 0 0 16px;
              filter: drop-shadow(2px -2px 2px rgba(0, 0, 0, 0.2));
              transform: scale(-1, -1);
            }
            img {
              width: 100%;
              height: auto;
            }
            .cls {
              width: 35px;
              height: auto;
              position: absolute;
              left: 0;
              top: 0;
              z-index: 1;
            }
            .elem {
              width: 34px;
              height: auto;
              position: absolute;
              right: 0px;
              top: 1px;
              z-index: 1;
              filter: drop-shadow(0 0 2px rgba(0, 0, 0, 1));
            }
          }
          .squad-card-heroes {
            position: absolute;
            top: 42px;
            left: 2px;
            width: 466px;
            display: flex;
            justify-content: center;
            .squad-card-hero-wrap {
              display: inline-block;
              width: 46px;
              height: 46px;
              position: relative;
              margin: 14px;
              &:before {
                content: "";
                width: 160%;
                height: 160%;
                position: absolute;
                left: calc(50% + 2px);
                top: 50%;
                transform: translate(-50%, -50%);
                background: url(../img/2vip-s2@2x.png);
                background-size: 100%;
                background-position: center;
                filter: drop-shadow(2px -2px 2px rgba(0, 0, 0, 0.2));
              }
              .squad-card-hero {
                display: inline-block;
                width: 100%;
                height: 100%;
                margin-right: 5px;
                margin-bottom: 10px;
                border-radius: 100%;
                overflow: hidden;
                position: relative;
                .squad-card-hero-img {
                  width: 100%;
                  height: auto;
                }
              }
              &.lvl0 {
                &:before {
                  background-image: url(../img/2vip-s1@2x.png);
                  filter: brightness(0.9) grayscale(0.5);
                }
              }
              &.lvl1 {
                &:before {
                  background-image: url(../img/2vip-s1@2x.png);
                }
              }
              &.lvl2 {
                &:before {
                  background-image: url(../img/2vip-s2@2x.png);
                }
              }
              &.lvl3 {
                &:before {
                  background-image: url(../img/2vip-s3@2x.png);
                }
              }
              &.lvl4 {
                &:before {
                  background-image: url(../img/2vip-s4@2x.png);
                }
              }
              &.lvl5 {
                &:before {
                  background-image: url(../img/2vip-s5@2x.png);
                }
              }
              &.lvl6 {
                &:before {
                  background-image: url(../img/2vip-s6@2x.png);
                }
              }
              &.lvl7 {
                &:before {
                  background-image: url(../img/3vip-s7@2x.png);
                }
              }
              &.lvl8 {
                &:before {
                  background-image: url(../img/3vip-s8@2x.png);
                }
              }
              &.lvl9 {
                &:before {
                  background-image: url(../img/3vip-s9@2x.png);
                }
              }
              &.lvl10 {
                &:before {
                  background-image: url(../img/3vip-s10@2x.png);
                }
              }
            }
          }
        }
        &.bronze-color-bg {
          &:before,
          &:after,
          .hero-card:before,
          .hero-card:after {
            background-image: url(../img/squad-corners.png);
            background-position: 0 0;
          }
          .hero-card {
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
              inset 0 0 0 2px #ff9b37, inset 0 0 2px 2px rgba(0, 0, 0, 0.2),
              inset 0 70px 24px rgba(255, 212, 110, 0.2),
              0 1px 4px rgba(0, 0, 0, 0.6);
            .squad-info-buttons {
              .suphero-buttons-info {
                background-position: right 0;
                &:before {
                  background-image: url(../img/ic-ore-squad.png);
                  background-position: 0 0;
                }
              }
            }
            .hero-level-box {
              background: linear-gradient(#805a31, #c18346);
              box-shadow: inset 0 1px 0 #dea569;
              color: #352b23;
              &:before {
                box-shadow: inset 1px 1px 0 #dea569;
                background: linear-gradient(#805a31, #c18346 94%);
              }
              &:after {
                box-shadow: inset -1px 1px 0 #dea569;
                background: linear-gradient(#805a31, #c18346 94%);
              }
            }
            .specialization-icon {
              &:before {
                background-position: -10px 0px;
              }
            }
          }
        }
        &.silver-color-bg {
          &:before,
          &:after,
          .hero-card:before,
          .hero-card:after {
            background-image: url(../img/squad-corners.png);
            background-position: 0 -20px;
          }
          .hero-card {
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
              inset 0 0 0 2px #b0b0b0, inset 0 0 2px 2px rgba(0, 0, 0, 0.2),
              inset 0 70px 24px rgba(255, 255, 255, 0.2),
              0 1px 4px rgba(0, 0, 0, 0.6);
            .squad-info-buttons {
              .suphero-buttons-info {
                background-position: right -28px;
                &:before {
                  background-image: url(../img/ic-ore-squad.png);
                  background-position: 0 -32px;
                }
              }
            }
            .hero-level-box {
              background: linear-gradient(0deg, #c2c2c2, #787878);
              box-shadow: inset 0 1px 0 #dedede;
              color: #383838;
              &:before {
                box-shadow: inset 1px 1px 0 #dedede;
                background: linear-gradient(0deg, #c2c2c2, #787878 94%);
              }
              &:after {
                box-shadow: inset -1px 1px 0 #dedede;
                background: linear-gradient(0deg, #c2c2c2, #787878 94%);
              }
            }
            .specialization-icon {
              &:before {
                background-position: -10px -59px;
              }
            }
          }
        }
        &.gold-color-bg {
          &:before,
          &:after,
          .hero-card:before,
          .hero-card:after {
            background-image: url(../img/squad-corners.png);
            background-position: 0 -40px;
          }
          .hero-card {
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
              inset 0 0 0 2px #ffe437, inset 0 0 2px 2px rgba(0, 0, 0, 0.2),
              inset 0 70px 24px rgba(255, 248, 110, 0.2),
              0 1px 4px rgba(0, 0, 0, 0.6);
            .squad-info-buttons {
              .suphero-buttons-info {
                background-position: right -56px;
                &:before {
                  background-image: url(../img/ic-ore-squad.png);
                  background-position: 0 -64px;
                }
              }
            }
            .hero-level-box {
              background: linear-gradient(0deg, #f4c657, #a18b34);
              box-shadow: inset 0 1px 0 #ffe199;
              color: #353323;
              &:before {
                box-shadow: inset 1px 1px 0 #ffe199;
                background: linear-gradient(0deg, #f4c657, #a18b34 94%);
              }
              &:after {
                box-shadow: inset -1px 1px 0 #ffe199;
                background: linear-gradient(0deg, #f4c657, #a18b34 94%);
              }
            }
            .specialization-icon {
              &:before {
                background-position: -10px -118px;
              }
            }
          }
        }
        &.platinum-color-bg {
          &:before,
          &:after,
          .hero-card:before,
          .hero-card:after {
            background-image: url(../img/squad-corners.png);
            background-position: 0 -60px;
          }
          .hero-card {
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
              inset 0 0 0 2px #bdbdae, inset 0 0 2px 2px rgba(0, 0, 0, 0.2),
              inset 0 70px 24px rgba(235, 234, 214, 0.2),
              0 1px 4px rgba(0, 0, 0, 0.6);
            .squad-info-buttons {
              .suphero-buttons-info {
                background-position: right -84px;
                &:before {
                  background-image: url(../img/ic-ore-squad.png);
                  background-position: 0 -96px;
                }
              }
            }
            .hero-level-box {
              background: linear-gradient(0deg, #e1e1d6, #87877e);
              box-shadow: inset 0 1px 0 #f4f4e9;
              color: #353323;
              &:before {
                box-shadow: inset 1px 1px 0 #f4f4e9;
                background: linear-gradient(0deg, #e1e1d6, #87877e 94%);
              }
              &:after {
                box-shadow: inset -1px 1px 0 #f4f4e9;
                background: linear-gradient(0deg, #e1e1d6, #87877e 94%);
              }
            }
            .specialization-icon {
              &:before {
                background-position: -10px -177px;
              }
            }
          }
        }
        &.diamond-color-bg {
          &:before,
          &:after,
          .hero-card:before,
          .hero-card:after {
            background-image: url(../img/squad-corners.png);
            background-position: 0 -80px;
          }
          .hero-card {
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
              inset 0 0 0 2px #78a9c5, inset 0 0 2px 2px rgba(0, 0, 0, 0.2),
              inset 0 70px 24px rgba(172, 223, 255, 0.2),
              0 1px 4px rgba(0, 0, 0, 0.6);
            .squad-info-buttons {
              .suphero-buttons-info {
                background-position: right -112px;
                &:before {
                  background-image: url(../img/ic-ore-squad.png);
                  background-position: 0 -128px;
                }
              }
            }
            .hero-level-box {
              background: linear-gradient(0deg, #b3f2f5, #5581c6);
              box-shadow: inset 0 1px 0 #b3f2f5;
              color: #1c2f3b;
              &:before {
                box-shadow: inset 1px 1px 0 #b3f2f5;
                background: linear-gradient(0deg, #b3f2f5, #5581c6 94%);
              }
              &:after {
                box-shadow: inset -1px 1px 0 #b3f2f5;
                background: linear-gradient(0deg, #b3f2f5, #5581c6 94%);
              }
            }
            .specialization-icon {
              &:before {
                background-position: -10px -236px;
              }
            }
          }
        }
      }
    }
  }
`;

const V2ScreenPortalSquad = styled.div`
  ${V2ScreenPortalSquadStyles}
`;

export { V2ScreenPortalSquadStyles, V2ScreenPortalSquad };
