import { styled, css } from "styled-components";

const V2ScreenEventsBtlpassStyles = css`
  .popup-layer .m-popup.events-btlpass-pop {
    width: 906px;
    height: 536px;
    left: 147px;
    top: 52px;
    .title {
      color: #572f14;
    }
    .btlpass-girl {
      width: 240px;
      height: 500px;
      position: absolute;
      bottom: -14px;
      left: -28px;
      pointer-events: none;
    }
    .btlpass-box-all {
      width: 650px;
      height: 362px;
      position: absolute;
      top: 70px;
      right: 20px;
      .btlpass-collect-box-all {
        width: 650px;
        height: 225px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(29, 44, 56, 0.9);
        border-radius: 20px;
        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
        .bp-info-btn {
          width: 28px;
          height: 28px;
          position: absolute;
          top: 4px;
          right: 4px;
          background: linear-gradient(
            0deg,
            #ffaf53 0%,
            #bf5c22 50%,
            #e0c3b8 100%
          );
          border-radius: 100%;
          cursor: pointer;
          border: 2px solid #ffdd7f;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
          color: #fff;
          font-size: 24px;
          font-weight: bold;
          text-transform: uppercase;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
          line-height: 30px;
          z-index: 1;
          &:hover {
            filter: brightness(1.1);
          }
          &:active {
            top: 5px;
          }
        }
        .btlpass-collect-box {
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: #2d4355;
          border-radius: 20px 20px 0 0;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.6);
          .btlpass-collect-box-text {
            width: 100%;
            height: 100%;
            color: #ffbd0c;
            font-size: 28px;
            font-weight: bold;
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            .ic-event {
              margin: 0px 8px;
              &:before {
                content: "";
                width: 1em;
                height: 1em;
                position: relative;
                display: inline-block;
                top: 4px;
                background-image: url(../img/ic-pumpkins.png);
                background-size: 100%;
                transform: scale(1.4);
              }
              &.hw:before {
                background-image: url(../img/ic-pumpkins.png);
              }
              &.bf:before {
                background-image: url(../img/poly-chip-icon.png);
              }
            }
          }
        }

        .squad-holder {
          position: absolute;
          display: table;
          top: 50px;
          left: 25px;
          width: 600px;
          display: flex;
          justify-content: center;
          .hero-box {
            width: 98px;
            height: 111px;
            display: inline-block;
            margin: 0 6px;
            &:hover {
              filter: brightness(1.1);
            }
            .hero-avatar-box {
              width: 98px;
              height: 111px;
              display: inline-block;
              position: relative;
              border-radius: 6px;
              background: linear-gradient(
                180deg,
                #8e7453 0%,
                #e3c7a3 50%,
                #8f7553 70%,
                #ae916a 85%,
                #8f7553 100%
              );
              box-shadow: 0 2px 0 #5e4d36, 0 2px 4px rgba(0, 0, 0, 0.6),
                inset 0 1px 1px rgba(255, 255, 255, 0.2);
              .hero-avatar {
                width: 90px;
                height: 103px;
                position: absolute;
                top: 4px;
                left: 4px;
                border-radius: 4px;
                overflow: hidden;
                box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
              }

              .sh2-icon-forgirl {
                width: 25px;
                height: 32px;
                position: absolute;
                top: 0px;
                left: 2px;

                img {
                  width: 25px;
                }
              }
            }
          }
        }

        .prgball-box {
          width: 620px;
          height: 38px;
          position: absolute;
          bottom: 15px;
          left: 15px;
          background-color: #0f1920;
          border-radius: 10px;
          box-shadow: 0 0 0 3px #0f1920, 0 1px 3px 2px rgba(255, 255, 255, 0.2);
          overflow: hidden;
          .prgall-prom {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            .prg-all-bar {
              width: 40%;
              height: 100%;
              position: relative;
              background: linear-gradient(
                0deg,
                #5eb0f2 0%,
                #4783b5 12%,
                #66c4ff 60%,
                #91d5ff 70%,
                #569fdb 100%
              );
              transition: width 0.3s;
            }
          }
          .prg-all-text {
            width: 100%;
            height: 100%;
            text-align: center;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            line-height: 38px;
            position: relative;
            .ic-event {
              margin: 0px 8px;
              &:before {
                content: "";
                width: 1em;
                height: 1em;
                position: relative;
                display: inline-block;
                top: 2px;
                background-image: url(../img/ic-pumpkins.png);
                background-size: 100%;
                transform: scale(1.8);
              }
              &.hw:before {
                background-image: url(../img/ic-pumpkins.png);
              }
              &.bf:before {
                background-image: url(../img/poly-chip-icon.png);
              }
            }
          }
        }
      }
      .btlpass-level-box-all {
        width: 650px;
        height: 127px;
        position: absolute;
        bottom: 0px;
        left: 0;
        background-color: rgba(29, 44, 56, 0.9);
        border-radius: 10px;
        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
        .btlpass-sim-el-box {
          width: 100px;
          height: 100px;
          position: absolute;
          top: 9px;
          left: 5px;
          .btlpass-simple {
            width: 100px;
            height: 70px;
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(
              0deg,
              #ffe199 0%,
              #f4c657 18%,
              #ffe199 60%,
              #f4c557 85%,
              #ffe199 100%
            );
            color: #3c3737;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            line-height: 70px;
          }
          .btlpass-level {
            width: 100px;
            height: 20px;
            position: relative;
            top: 5px;
            left: 0;
            background-color: #304352;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            line-height: 20px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
          }
          .btlpass-elite {
            width: 100px;
            height: 70px;
            position: relative;
            top: 10px;
            left: 0;
            background: linear-gradient(
              0deg,
              #f8b76c 0%,
              #f78500 18%,
              #f8b76c 60%,
              #f9981f 85%,
              #f8b76b 100%
            );
            color: #3c3737;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            line-height: 70px;
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);
          }
        }
        .btlpass-level-simple-box-scroll {
          width: 535px;
          height: 113px;
          position: absolute;
          top: 9px;
          right: 5px;
          overflow: hidden;
          overflow-x: scroll;
          &::-webkit-scrollbar-track {
            background-color: #0f1920;
            border-radius: 10px;
          }
          &::-webkit-scrollbar {
            height: 8px;
            border-radius: 10px;
          }
          &::-webkit-scrollbar-thumb {
            background: linear-gradient(
              0deg,
              #ffe199 0%,
              #f4c657 18%,
              #ffe199 60%,
              #f4c557 85%,
              #ffe199 100%
            );
            border-radius: 10px;
          }
          .btlpass-level-simple,
          .btlpass-level-elite {
            width: 3500px !important;
            height: 70px;
            position: relative;
            text-align: left;
            background-color: #344858;
            display: flex;
            .btlpass-level-rew-box {
              width: 60px;
              height: 60px;
              position: relative;
              display: inline-block;
              background: linear-gradient(0deg, #e9c44f 0%, #f7eec7 100%);
              border-radius: 8px;
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
              margin: 5px;
              text-align: center;

              border-radius: 10px;
              box-shadow: inset 0 1px rgba(255, 255, 255, 0.6),
                0 1px 4px 1px rgba(0, 0, 0, 0.4), inset 0 0 0 2px #ff9b37;
              background: url(../img/v2-trophy-bg.jpg);
              background-size: 100%;
              background-repeat: no-repeat;
              overflow: hidden;
              &:before {
                content: "";
                width: calc(100% - 4px);
                height: calc(100% - 4px);
                position: absolute;
                top: 2px;
                left: 2px;
                background: radial-gradient(
                  rgba(213, 187, 133, 0.5) 50%,
                  rgba(255, 255, 255, 0) 100%
                );
                box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.35);
                border-radius: 8px;
              }
              .btlpass-level-rew-pic {
                width: 46px;
                height: 46px;
                position: absolute;
                top: 0;
                left: 7px;
                transition: ease-in-out 0.1s;
                img {
                  width: 46px;
                }
              }
              .btlpass-level-rew-num {
                width: 42px;
                line-height: 16px;
                position: relative;
                top: 44px;
                text-align: center;
                margin: 0 auto;
                color: #fff;
                font-size: 12px;
                font-weight: bold;
                text-shadow: 0 1px 2px rgb(0, 0, 0),
                  0 1px 4px rgba(0, 0, 0, 0.6);
                background: linear-gradient(#805a31, #c18346);
                border-radius: 10px 10px 0 0;
                box-shadow: inset 0 1px 0 #dea569;
                filter: drop-shadow(0 0 4px rgb(0, 0, 0));
                &:before,
                &:after {
                  content: "";
                  width: 8px;
                  height: 100%;
                  position: absolute;
                  top: 0px;
                  background: linear-gradient(#875c29, #d49548 94%);
                  background: linear-gradient(#805a31, #c18346 94%);
                  z-index: -1;
                }
                &:before {
                  left: -2px;
                  transform: skewX(-20deg);
                  border-radius: 6.6px 0 0 0;
                  box-shadow: inset 1px 1px 0 #dea569;
                }
                &:after {
                  right: -2px;
                  transform: skewX(20deg);
                  border-radius: 0 6.6px 0 0;
                  box-shadow: inset -1px 1px 0 #dea569;
                }
              }
              .btlpass-level-rew-num-check {
                width: 50px;
                height: 50px;
                position: absolute;
                top: 5px;
                left: 5px;
                background-image: url(../img/paycheck.png);
                background-size: 100%;
                background-repeat: no-repeat;
                visibility: hidden;
                filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.8));
              }
              .btlpass-level-rew-good {
                width: 64px;
                height: 64px;
                position: absolute;
                top: -2px;
                left: -2px;
                background-image: url(../img/fortuna-good.png);
                background-size: 100%;
                visibility: hidden;
              }
              .color-btn.green {
                width: 54px;
                height: 16px;
                position: absolute;
                bottom: 3px;
                left: 3px;
                border-radius: 6px;
                visibility: hidden;
                box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25),
                  0 1px 2px 0 rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(0, 0, 0, 0.1);
                .color-btn-text {
                  font-size: 9px;
                  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8),
                    0 1px 4px rgba(0, 0, 0, 0.8);
                }
                &:active {
                  box-shadow: inset 0 -1px 0px rgba(0, 0, 0, 0.2),
                    inset 0 2px 2px rgba(0, 0, 0, 0.2),
                    0 0 0 1px rgba(0, 0, 0, 0.1);
                  .color-btn-text {
                    top: 3px;
                  }
                }
              }
              .btlpass-level-rew-num-block {
                width: 60px;
                height: 60px;
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(0, 0, 0, 0.6);
                background-size: 50%;
                background-repeat: no-repeat;
                background-position: 15px;
                visibility: hidden;
                filter: blur(4px);
              }
              &.collect {
                &:hover {
                  .btlpass-level-rew-pic {
                    transform: scale(1.1);
                    filter: brightness(1.1);
                  }
                }
                .btlpass-level-rew-num {
                  visibility: hidden;
                }
                .color-btn.green {
                  visibility: visible;
                }
              }
              &.check {
                .btlpass-level-rew-num-check {
                  visibility: visible;
                }
              }
              &.block {
                &:after {
                  content: "";
                  width: 14px;
                  height: 20px;
                  position: absolute;
                  top: 3px;
                  right: 3px;
                  background: url(../img/tower-lock.png);
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: cover;
                  pointer-events: none;
                }
                .btlpass-level-rew-num-block {
                  visibility: visible;
                }
              }
              &.empty {
                background: #0f1920;
                box-shadow: 0 0 0 rgba(0, 0, 0, 0.35);
                .btlpass-level-rew-num {
                  visibility: hidden;
                }
                .color-btn.green {
                  visibility: hidden;
                }
                .btlpass-level-rew-num-check {
                  visibility: hidden;
                }
                .btlpass-level-rew-pic {
                  visibility: hidden;
                }
              }
              &.girl {
                .btlpass-level-rew-pic {
                  width: 58px;
                  height: 58px;
                  position: absolute;
                  top: 1px;
                  left: 1px;
                  img {
                    width: 58px;
                  }
                  border-radius: 6px;
                  overflow: hidden;
                }
                .btlpass-level-rew-num {
                  visibility: hidden;
                }
                .btlpass-level-rew-good {
                  visibility: visible;
                }
              }
            }
          }
          .btlpass-level-level {
            width: 3500px;
            height: 20px;
            position: relative;
            top: 5px;
            background: linear-gradient(0deg, #344858 0%, #1d2c38 100%);
            .btlpass-level-level-prg {
              width: 10%;
              height: 100%;
              position: relative;
              background: linear-gradient(
                0deg,
                #8cdd55 0%,
                #43a700 50%,
                #8cdd55 100%
              );
              transition: width 0.3s;
              text-align: left;
              font-size: 0;
            }
            .btlpass-level-level-num-box {
              width: 100%;
              height: 20px;
              position: absolute;
              top: 0;
              left: 0;
              text-align: left;
              display: flex;
              .btlpass-level-level-num {
                width: 70px;
                height: 20px;
                position: relative;
                display: inline-block;
                text-align: center;
                color: #fff;
                font-size: 16px;
                font-weight: bold;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                &:before {
                  content: "";
                  width: 2px;
                  height: 20px;
                  position: absolute;
                  right: 0;
                  top: 0;
                  background-color: #8f7c6e;
                }
              }
            }
          }
          .btlpass-level-elite {
            top: 10px;
          }
        }
      }
    }
    .btlpass-btn-box {
      width: 650px;
      height: 94px;
      position: absolute;
      bottom: 10px;
      right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .color-btn {
        width: 180px;
        height: 50px;
        position: unset;
        margin: 0 10px;
        .color-btn-text {
          top: 12px;
          position: relative;
          color: #fff;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
          text-align: center;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 16px;
        }
        &:active {
          .color-btn-text {
            top: 13px;
          }
        }
      }
      .store-button-bp {
        width: 180px;
        height: 50px;
        position: absolute;
        top: 25px;
        right: 260px;
        background: linear-gradient(45deg, #e8c34e, #f1da7c, #cfa831, #fbf1d8);
        border-radius: 8px;
        margin: 0 10px 0 10px;
        box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
          inset 0 -3px 0px #c87725, 0 0 3px #3d3737,
          0 2px 4px rgba(0, 0, 0, 0.35), inset 0 0 3px #603806;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
        color: #4a3a08;
        text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
        &:active {
          top: 26px;
        }
        &:hover {
          box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
            inset 0 -3px 0 #c87725, 0 0 12px #ff0, 0 0 5px #ffc,
            inset 0 0 10px #ffc, inset 0 0 3px #603806;
        }
        .but-price {
          position: relative;
          display: inline-block;
          font-size: 20px;
          top: 5px;
        }
        .but-price-text {
          width: 180px;
          font-size: 12px;
          position: relative;
          top: 5px;
        }
      }
    }
  }

  .popup-layer .m-popup.events-btlpass-pop.hw {
    &:before {
      background: url(../img/pop-bg-hw.jpg);
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
    .btlpass-box-all {
      .btlpass-collect-box-all {
        background-color: rgba(29, 44, 56, 0.9);
        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
        .bp-info-btn {
          background: linear-gradient(
            0deg,
            #ffaf53 0%,
            #bf5c22 50%,
            #e0c3b8 100%
          );
          border: 2px solid #ffdd7f;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
          color: #fff;
        }
        .btlpass-collect-box {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
          background-color: #2d4355;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.6);
          .btlpass-collect-box-text {
            .ic-event {
              &:before {
                background-image: url(../img/ic-pumpkins.png);
              }
            }
          }
        }

        .prgball-box {
          background-color: #0f1920;
          box-shadow: 0 0 0 3px #0f1920, 0 1px 3px 2px rgba(255, 255, 255, 0.2);
          .prgall-prom {
            .prg-all-bar {
              background: linear-gradient(
                0deg,
                #5eb0f2 0%,
                #4783b5 12%,
                #66c4ff 60%,
                #91d5ff 70%,
                #569fdb 100%
              );
            }
          }
          .prg-all-text {
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            .ic-event {
              &:before {
                background-image: url(../img/ic-pumpkins.png);
              }
            }
          }
        }
      }
      .btlpass-level-box-all {
        background-color: rgba(29, 44, 56, 0.9);
        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
        .btlpass-sim-el-box {
          .btlpass-level {
            background-color: #304352;
          }
        }
        .btlpass-level-simple-box-scroll {
          .btlpass-level-simple,
          .btlpass-level-elite {
            background-color: #344858;
          }
        }
      }
    }
  }

  .popup-layer .m-popup.events-btlpass-pop.bf {
    &:before {
      background: url(../img/girl-stand@2x.png), url(../img/v2-bf-pop-bg.jpg);
      background-size: 354px 160px, 100%;
      background-position: -60px 350px, center;
      background-repeat: no-repeat;
    }
    .btlpass-box-all {
      .btlpass-collect-box-all {
        background-color: rgba(76, 65, 56, 0.9);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        .btlpass-collect-box {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
          background-color: #664936;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.6);
          .btlpass-collect-box-text {
            .ic-event {
              &:before {
                background-image: url(../img/ic-tickets-bf.png);
              }
            }
          }
        }

        .prgball-box {
          background-color: #302317;
          box-shadow: 0 0 0 3px #20170f, 0 1px 3px 2px rgba(255, 255, 255, 0.2);
          .prgall-prom {
            .prg-all-bar {
              background: linear-gradient(
                0deg,
                #5ef265 0%,
                #47b548 12%,
                #6bff66 60%,
                #9bff91 70%,
                #59db56 100%
              );
            }
          }
          .prg-all-text {
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            .ic-event {
              &:before {
                background-image: url(../img/ic-tickets-bf.png);
              }
            }
          }
        }
      }
      .btlpass-level-box-all {
        background-color: rgba(76, 65, 56, 0.9);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        .btlpass-sim-el-box {
          .btlpass-level {
            background-color: #685747;
          }
        }
        .btlpass-level-simple-box-scroll {
          .btlpass-level-level {
            background: linear-gradient(0deg, #685747 0%, #38291d 100%);
          }
          .btlpass-level-simple,
          .btlpass-level-elite {
            background-color: #685747;
          }
        }
      }
    }
    .btlpass-girl {
      width: 350px;
      height: 500px;
      position: absolute;
      bottom: -6px;
      left: -50px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .popup-layer .m-popup.events-btlpass-pop.xmas {
    &:before {
      background: url(../img/girl-stand@2x.png), url(../img/pop-bg-xmas.jpg);
      background-size: 354px 160px, 100%;
      background-position: -60px 350px, center;
      background-repeat: no-repeat;
    }
    .btlpass-box-all {
      .btlpass-collect-box-all {
        background-color: rgba(40, 140, 190, 0.8);
        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
        .bp-info-btn {
          background: linear-gradient(
            0deg,
            #53ceff 0%,
            #2293bf 50%,
            #b8d7e0 100%
          );
          border: 2px solid #7fe5ff;
        }
        .btlpass-collect-box {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
          background-color: #1d3963;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
            0 1px 2px rgba(255, 255, 255, 0.2);
          .btlpass-collect-box-text {
            color: #3ce2ff;
            .ic-event {
              &:before {
                background-image: url(../img/ic-tickets-xmas.png);
              }
            }
          }
        }

        .prgball-box {
          background-color: #1c365f;
          box-shadow: 0 0 0 3px #0b2844, 0 1px 3px 2px rgba(255, 255, 255, 0.2);
          .prgall-prom {
            .prg-all-bar {
              background: linear-gradient(
                0deg,
                #5ef265 0%,
                #47b548 12%,
                #6bff66 60%,
                #9bff91 70%,
                #59db56 100%
              );
            }
          }
          .prg-all-text {
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            .ic-event {
              &:before {
                background-image: url(../img/ic-tickets-xmas.png);
              }
            }
          }
        }
      }
      .btlpass-level-box-all {
        background-color: rgba(40, 140, 190, 0.8);
        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
        .btlpass-sim-el-box {
          .btlpass-level {
            background-color: #476368;
          }
        }
        .btlpass-level-simple-box-scroll {
          &::-webkit-scrollbar-track {
            background-color: #0f334d;
          }
          .btlpass-level-level {
            background: linear-gradient(0deg, #475f68 0%, #1d3038 100%);
          }
          .btlpass-level-simple,
          .btlpass-level-elite {
            background-color: #476368;
          }
        }
      }
    }
    .btlpass-girl {
      width: 350px;
      height: 500px;
      position: absolute;
      bottom: 30px;
      left: -44px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .popup-layer .m-popup.events-btlpass-pop.vl {
    &:before {
      background: url(../img/girl-stand@2x.png), url(../img/v2-vl-pop-bg.jpg);
      background-size: 354px 160px, 100%;
      background-position: -60px 350px, center;
      background-repeat: no-repeat;
    }
    .btlpass-box-all {
      .btlpass-collect-box-all {
        background-color: rgba(190, 40, 122, 0.8);
        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
        .bp-info-btn {
          background: linear-gradient(
            0deg,
            #ff53a7 0%,
            #bf226f 50%,
            #e0b8c5 100%
          );
          border: 2px solid #7fe5ff;
        }
        .btlpass-collect-box {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
          background-color: #1d3963;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
            0 1px 2px rgba(255, 255, 255, 0.2);
          .btlpass-collect-box-text {
            color: #ffdeec;
            .ic-event {
              &:before {
                background-image: url(../img/ic-tickets-vl.png);
              }
            }
          }
        }

        .prgball-box {
          background-color: #1c365f;
          box-shadow: 0 0 0 3px #0b2844, 0 1px 3px 2px rgba(255, 255, 255, 0.2);
          .prgall-prom {
            .prg-all-bar {
              background: linear-gradient(
                0deg,
                #5ef265 0%,
                #47b548 12%,
                #6bff66 60%,
                #9bff91 70%,
                #59db56 100%
              );
            }
          }
          .prg-all-text {
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            .ic-event {
              &:before {
                background-image: url(../img/ic-tickets-vl.png);
              }
            }
          }
        }
      }
      .btlpass-level-box-all {
        background-color: rgba(190, 40, 122, 0.8);
        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
        .btlpass-sim-el-box {
          .btlpass-level {
            background-color: #476368;
          }
        }
        .btlpass-level-simple-box-scroll {
          &::-webkit-scrollbar-track {
            background-color: #0f334d;
          }
          .btlpass-level-level {
            background: linear-gradient(0deg, #475f68 0%, #1d3038 100%);
          }
          .btlpass-level-simple,
          .btlpass-level-elite {
            background-color: #476368;
          }
        }
      }
    }
    .btlpass-girl {
      width: 350px;
      height: 500px;
      position: absolute;
      bottom: 30px;
      left: -44px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .popup-layer .m-popup.events-btlpass-pop.rpg {
    &:before {
      background: url(../img/ts_confirm_bk-1.jpg);
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .popup-layer .m-popup.events-btlpass-pop.spring {
    &:before {
      background: url(../img/girl-stand@2x.png), url(../img/march-pop-bg.jpg);
      background-size: 354px 160px, 100%;
      background-position: -60px 350px, center;
      background-repeat: no-repeat;
    }
    .btlpass-box-all {
      .btlpass-collect-box-all {
        background-color: rgba(190, 40, 122, 0.8);
        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
        .bp-info-btn {
          background: linear-gradient(
            0deg,
            #ff53a7 0%,
            #bf226f 50%,
            #e0b8c5 100%
          );
          border: 2px solid #7fe5ff;
        }
        .btlpass-collect-box {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
          background-color: #1d3963;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
            0 1px 2px rgba(255, 255, 255, 0.2);
          .btlpass-collect-box-text {
            color: #ffdeec;
            .ic-event {
              &:before {
                background-image: url(../img/ic-march-flower-pink.png);
              }
            }
          }
        }

        .prgball-box {
          background-color: #1c365f;
          box-shadow: 0 0 0 3px #0b2844, 0 1px 3px 2px rgba(255, 255, 255, 0.2);
          .prgall-prom {
            .prg-all-bar {
              background: linear-gradient(
                0deg,
                #5ef265 0%,
                #47b548 12%,
                #6bff66 60%,
                #9bff91 70%,
                #59db56 100%
              );
            }
          }
          .prg-all-text {
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            .ic-event {
              &:before {
                background-image: url(../img/ic-march-flower-pink.png);
              }
            }
          }
        }
      }
      .btlpass-level-box-all {
        background-color: rgba(190, 40, 122, 0.8);
        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
        .btlpass-sim-el-box {
          .btlpass-level {
            background-color: #476368;
          }
        }
        .btlpass-level-simple-box-scroll {
          &::-webkit-scrollbar-track {
            background-color: #0f334d;
          }
          .btlpass-level-level {
            background: linear-gradient(0deg, #475f68 0%, #1d3038 100%);
          }
          .btlpass-level-simple,
          .btlpass-level-elite {
            background-color: #476368;
          }
        }
      }
    }
    .btlpass-girl {
      width: 410px;
      height: auto;
      position: absolute;
      bottom: -18px;
      left: -108px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .popup-layer .m-popup.events-btlpass-pop.autumn {
    &:before {
      background: url(../img/girl-stand@2x.png), url(../img/march-pop-bg.jpg);
      background-size: 354px 160px, 100%;
      background-position: -60px 350px, center;
      background-repeat: no-repeat;
    }
    .btlpass-box-all {
      .btlpass-collect-box-all {
        background-color: rgba(190, 40, 122, 0.8);
        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
        .bp-info-btn {
          background: linear-gradient(
            0deg,
            #ff53a7 0%,
            #bf226f 50%,
            #e0b8c5 100%
          );
          border: 2px solid #7fe5ff;
        }
        .btlpass-collect-box {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
          background-color: #1d3963;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
            0 1px 2px rgba(255, 255, 255, 0.2);
          .btlpass-collect-box-text {
            color: #ffdeec;
            .ic-event {
              &:before {
                background-image: url(../img/ic-march-flower-pink.png);
              }
            }
          }
        }

        .prgball-box {
          background-color: #1c365f;
          box-shadow: 0 0 0 3px #0b2844, 0 1px 3px 2px rgba(255, 255, 255, 0.2);
          .prgall-prom {
            .prg-all-bar {
              background: linear-gradient(
                0deg,
                #5ef265 0%,
                #47b548 12%,
                #6bff66 60%,
                #9bff91 70%,
                #59db56 100%
              );
            }
          }
          .prg-all-text {
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            .ic-event {
              &:before {
                background-image: url(../img/ic-march-flower-pink.png);
              }
            }
          }
        }
      }
      .btlpass-level-box-all {
        background-color: rgba(190, 40, 122, 0.8);
        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
        .btlpass-sim-el-box {
          .btlpass-level {
            background-color: #476368;
          }
        }
        .btlpass-level-simple-box-scroll {
          &::-webkit-scrollbar-track {
            background-color: #0f334d;
          }
          .btlpass-level-level {
            background: linear-gradient(0deg, #475f68 0%, #1d3038 100%);
          }
          .btlpass-level-simple,
          .btlpass-level-elite {
            background-color: #476368;
          }
        }
      }
    }
    .btlpass-girl {
      width: 410px;
      height: auto;
      position: absolute;
      bottom: -18px;
      left: -108px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .popup-layer .m-popup.events-btlpass-pop.spring.darkBlue {
    .btlpass-box-all {
      .btlpass-collect-box-all {
        .btlpass-collect-box {
          .btlpass-collect-box-text {
            .ic-event {
              &:before {
                background-image: url(../img/ic-march-flower-dark-blue.png);
                filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.4));
              }
            }
          }
        }
        .prgball-box {
          .prg-all-text {
            .ic-event {
              &:before {
                background-image: url(../img/ic-march-flower-dark-blue.png);
                filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.4));
              }
            }
          }
        }
      }
    }
  }

  .sh-fpbp {
    .lhero-box {
      width: 250px;
      height: 420px;
      position: absolute;
      top: 10px;
      left: -140px;
      background: linear-gradient(
        0deg,
        #8e7453 0%,
        #e3c7a3 50%,
        #8f7553 70%,
        #ae916a 85%,
        #8e7453 100%
      );
      border-radius: 10px;
      box-shadow: 0 4px 0 #bd9c42, 0 2px 6px rgba(0, 0, 0, 0.8);
      .lhero-pic {
        width: 242px;
        height: 360px;
        background-color: red;
        position: absolute;
        top: 38px;
        left: 4px;
        img {
          width: 242px;
          height: 360px;
          position: absolute;
          left: 0;
        }
      }
      .topname-box {
        width: 250px;
        height: 48px;
        position: absolute;
        background: linear-gradient(
          180deg,
          #d4b354 0%,
          #f3d88d 91%,
          #c3a246 92%,
          #b9993f 100%
        );
        border-radius: 10px 10px 0 0;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4),
          0 6px 6px rgba(0, 0, 0, 0.5);
        .sh2-icon.left {
          width: 38px;
          height: 49px;
          position: absolute;
          top: -2px;
          left: 6px;
          img {
            width: 38px;
          }
        }
        .sh2-icon-forgirl.right {
          width: 38px;
          height: 49px;
          position: absolute;
          top: -2px;
          left: 206px;
          img {
            width: 38px;
          }
        }
        .lhero-name-box {
          width: 166px;
          height: 44px;
          position: absolute;
          left: 42px;
          display: table;
          .lhero-name {
            display: table-cell;
            vertical-align: middle;
            color: #fff;
            text-shadow: 0 1px 4px #000;
            font-size: 15px;
            font-weight: bold;
            text-align: center;
          }
        }
      }
      .bottom-star-box-girl-count-box {
        width: 250px;
        height: 34px;
        position: absolute;
        top: 386px;
        left: 0;
        background: linear-gradient(180deg, #d4b354 0%, #f3d88d 100%);
        border-radius: 0 0 10px 10px;
        .sh2-prgbar-all {
          width: 197px;
          height: 26px;
          position: absolute;
          top: 4px;
          left: 48px;
          background: linear-gradient(0deg, #735657 0%, #453434 100%);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 0 0 1px #453434, 0 1px 1px 1px rgba(255, 255, 255, 0.4);
          .sh2-prgbar {
            width: 85%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            background: linear-gradient(
              180deg,
              #585a5c 0%,
              #d5d8da 50%,
              #585a5b 70%,
              #a1a4a6 85%,
              #585a5b 100%
            );
          }
          .sh2-prgbar-text {
            width: 100%;
            height: 100%;
            position: relative;
            text-align: center;
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
            line-height: 26px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
          }
          &.gold {
            .sh2-prgbar {
              background: linear-gradient(
                180deg,
                #c68300 0%,
                #f4dfb6 50%,
                #c68200 70%,
                #fad489 85%,
                #c78302 100%
              );
            }
          }
        }
        .girl-bonus-box {
          width: 40px;
          height: 40px;
          position: absolute;
          top: -3px;
          left: 4px;
          display: block;
          background: linear-gradient(
            180deg,
            #c68300 0%,
            #f4dfb6 50%,
            #c68200 70%,
            #fad489 85%,
            #c78302 100%
          );
          border-radius: 100%;
          box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.5);
          .girl-bonus-pic {
            width: 34px;
            height: 34px;
            position: absolute;
            top: 3px;
            left: 3px;
            overflow: hidden;
            border-radius: 100%;
            &:after {
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              border-radius: 100%;
              box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
            }
            img {
              width: 34px;
            }
          }
        }
      }
      .sv-sale-bonus-box-all {
        width: 230px;
        height: 60px;
        position: absolute;
        top: 318px;
        left: 10px;
        .acbonus-box {
          width: 110px;
          height: 100%;
          position: absolute;
          left: 1px;
          background-color: #a69283;
          border-radius: 4px;
          box-shadow: 0 2px 0 #8b7b6e, 0 1px 2px rgba(0, 0, 0, 0.2);
          .lvlbox-name {
            width: 110px;
            height: 18px;
            position: absolute;
            top: 0;
            text-transform: uppercase;
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            text-align: center;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
            line-height: 18px;
            background-color: #705d4e;
            border-radius: 4px 4px 0 0;
            box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
          }
          .bonus-lvl-box-bonus-box {
            width: 100%;
            height: 42px;
            position: absolute;
            top: 18px;
            display: table;
            .bonus-lvl-box-bonus {
              width: 100%;
              height: 100%;
              display: table-cell;
              text-align: center;
              vertical-align: middle;
              color: #4d3e33;
              font-weight: bold;
              font-size: 10px;
              text-transform: uppercase;
              text-shadow: 0 1px 1px rgba(255, 255, 255, 0.4);
              .ff-sh2-icon {
                width: 17px;
                height: 22px;
                position: relative;
                top: 0;
                left: 0;
                display: inline-block;
                vertical-align: middle;
                margin-left: 6px;
                img {
                  width: 17px;
                }
                &.gold {
                  width: 22px;
                  height: 22px;
                  position: relative;
                  vertical-align: middle;
                  display: inline-block;
                  top: -3px;
                  background-image: url(../img/ico-gold.png);
                  background-size: 100%;
                }
              }
            }
          }
          &.second {
            left: unset;
            right: 1px;
          }
        }
      }
      .sh2-girl-lock {
        width: 250px;
        height: 494px;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        z-index: 999;
        background: rgba(0, 0, 0, 0.65);
        .sh2-girl-lock-text {
          width: 250px;
          height: 494px;
          position: relative;
          top: 0;
          left: 0;
          line-height: 494px;
          color: #ffd700;
          font-size: 14px;
          font-weight: bold;
          text-transform: uppercase;
          text-align: center;
        }
      }
    }
  }
`;

const V2ScreenEventsBtlpass = styled.div`
  ${V2ScreenEventsBtlpassStyles}
`;

export { V2ScreenEventsBtlpassStyles, V2ScreenEventsBtlpass };
