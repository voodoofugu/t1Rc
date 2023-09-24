import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
  body .main.world1,
  body .main.world2,
  body .main.world3 {
    .popup-layer .m-popup.dark-btlpas {
      width: 906px;
      height: 536px;
      left: 147px;
      top: 52px;
      &:before {
        background-image: url(../img/images/back/new/07-Cemetery.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .btlpass-box-all {
        width: 866px;
        height: 362px;
        position: absolute;
        top: 70px;
        left: 20px;
        .btlpass-collect-box-all {
          width: 100%;
          height: 242px;
          position: absolute;
          top: 0;
          left: 0;
          .btlpass-collect-box {
            width: 158px;
            height: auto;
            line-height: 28px;
            padding: 10px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: #2d2f55;
            border-radius: 20px;
            filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.6));
            .color-btn.bay-res {
              width: 158px;
              height: 34px;
              z-index: 1;
              border-radius: 8px;
              background: linear-gradient(
                45deg,
                #e8c34e,
                #f1da7c,
                #cfa831,
                #fbf1d8
              );
              .color-btn-text {
                color: #4a3a08;
                text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
                margin-top: 0px;
              }
            }
            .btlpass-collect-box-text {
              width: 100%;
              height: 100%;
              color: #ffbd0c;
              font-size: 22px;
              font-weight: bold;
              text-transform: uppercase;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              margin-top: 6px;
              line-height: 25px;
              &:before {
                content: "";
                border: 10px solid transparent;
                border-top: 10px solid #2d2f55;
                border-left: 10px solid #2d2f55;
                position: absolute;
                bottom: -20px;
                left: 118px;
              }
              .btlpass-collect-value {
                color: #de9dff;
              }
              .ic-event {
                margin: -6px -6px -6px 0;
                &:before {
                  content: "";
                  width: 1em;
                  height: 1em;
                  position: relative;
                  display: inline-block;
                  margin: 0 0 0 4px;
                  top: 2px;
                  background-image: url(../img/ic-red-potion-40.png);
                  background-size: 100%;
                  transform: scale(1.4);
                }
              }
            }
          }
          .hero-box-title {
            position: absolute;
            top: 173px;
            left: 350px;
            line-height: 24px;
            width: fit-content;
            padding: 0 8px;
            font-size: 13px;
            font-weight: bold;
            color: #ffffff;
            text-transform: uppercase;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
            white-space: nowrap;
            background: #ae5ed7;
            filter: drop-shadow(0 1px 0 #8447a3) drop-shadow(0 1px 0 #8447a3)
              drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
            border-radius: 10px;
            z-index: 1;
            &:before,
            &:after {
              content: "";
              border: 9px solid transparent;
              border-top: 13px solid #ae5ed7;
              position: absolute;
              top: 1px;
            }
            &:before {
              transform: rotate(90deg);
              left: -16.9px;
            }
            &:after {
              transform: rotate(-90deg);
              right: -16.9px;
            }
          }
          .squad-holder {
            position: absolute;
            top: 0;
            left: 182px;
            width: 684px;
            display: flex;
            justify-content: center;
            background-size: 100% 50%, 100% 100%;
            background-position: 0 128px, 0 0px;
            background-repeat: no-repeat;
            .hero-box {
              width: 134px;
              height: 178px;
              display: inline-block;
              margin: 0 6px;
              &:first-of-type:after,
              &:last-child:after {
                content: "";
                position: absolute;
                top: 50%;
                width: 52px;
                height: 44px;
                background-image: url(../img/darkworld-angel-pop-btn-bg.png);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4))
                  brightness(1.3) hue-rotate(18deg);
                pointer-events: none;
              }
              &:first-of-type:after {
                left: 136px;
                transform: translateY(-50%);
              }
              &:last-child:after {
                right: 136px;
                transform: translateY(-50%) scaleX(-1);
              }
              // &:hover {
              //     filter: brightness(1.1);
              // }
              .hero-avatar-box {
                width: 100%;
                height: 100%;
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
                .hero-avatar-wrap {
                  width: calc(100% - 8px);
                  height: calc(100% - 8px);
                  position: absolute;
                  top: 4px;
                  left: 4px;
                  border-radius: 4px;
                  overflow: hidden;
                  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  .hero-avatar {
                    height: 190px;
                  }
                }
                .sh2-icon-forgirl {
                  width: 25px;
                  height: 32px;
                  position: absolute;
                  top: 0px;
                  left: 6px;
                  img {
                    width: 25px;
                  }
                }
              }
            }
          }

          .prgball-box {
            width: 678px;
            height: 28px;
            position: absolute;
            bottom: 3px;
            left: 185px;
            background-color: #0f1920;
            border-radius: 10px;
            box-shadow: 0 0 0 3px #0f1920,
              0 1px 3px 4px rgba(255, 255, 255, 0.2);
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
                  #8cdd55 0%,
                  #43a700 50%,
                  #8cdd55 100%
                );
                transition: width 0.3s;
              }
            }
            .prg-all-text {
              width: 100%;
              height: 100%;
              color: #fff;
              font-size: 16px;
              font-weight: bold;
              text-transform: uppercase;
              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
              line-height: 28px;
              position: relative;
              .ic-event {
                margin: 0 8px;
                &:before {
                  content: "";
                  width: 1em;
                  height: 1em;
                  position: relative;
                  display: inline-block;
                  top: 3px;
                  background-image: url(../img/ic-red-potion-40.png);
                  background-size: 100%;
                  transform: scale(1.8);
                }
              }
            }
          }
        }
        .btlpass-level-box-all {
          width: 100%;
          height: 194px;
          position: absolute;
          top: 250px;
          left: 0;
          background-color: rgba(18, 28, 36, 0.9);
          border-radius: 10px;
          box-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
          .btlpass-buy-box-all {
            width: 170px;
            height: 170px;
            position: absolute;
            top: 6px;
            left: 6px;
            .btlpass-girl {
              width: 170px;
              height: 278px;
              position: absolute;
              bottom: 0;
              background-image: url(../img/break-girl807.png),
                radial-gradient(
                  rgba(144, 229, 255, 0.8),
                  rgba(255, 255, 255, 0),
                  rgba(255, 255, 255, 0)
                );
              background-repeat: no-repeat;
              background-size: 272%, 130% 130%;
              background-position: center -62px, center 48px;
            }
            .store-button {
              top: unset;
              bottom: 0;
              line-height: 21px;
              width: 170px;
              height: 50px;
              position: absolute;
              .but-price-text {
                width: 170px;
                font-size: 16px;
                position: relative;
                top: 2px;
              }
              .but-price {
                position: relative;
                display: inline-block;
                font-size: 20px;
                top: 2px;
              }
              &:hover {
                box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.5),
                  inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                  inset 0 -3px 0 #c87725, 0 0 12px #ff0, 0 0 5px #ffc,
                  inset 0 0 10px #ffc, inset 0 0 3px #603806;
              }
              &:active {
                box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3),
                  inset 0 -12px 5px rgba(196, 116, 36, 0.59),
                  inset 0 -1px 0 #c87725, 0 0 12px #ff0, inset 0 0 10px #ffc,
                  inset 0 0 3px #603806;
                filter: brightness(1.2);
                .but-price-text {
                  line-height: 23px;
                }
              }
            }
          }
          .btlpass-sim-el-box {
            width: 100px;
            position: absolute;
            top: 6px;
            left: 182px;
            .btlpass-simple {
              width: 100%;
              height: 70px;
              position: relative;
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
              font-size: 16px;
              font-weight: bold;
              text-transform: uppercase;
              line-height: 70px;
              text-shadow: 0 1px 4px rgba(255, 255, 255, 1);
            }
            .btlpass-level {
              width: 100%;
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
              width: 100%;
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
              background: url(../img/completed-banner.png),
                linear-gradient(
                  0deg,
                  #f8b76c 0%,
                  #f78500 18%,
                  #f8b76c 60%,
                  #f9981f 85%,
                  #f8b76b 100%
                );
              background-position: right bottom, center;
              background-repeat: no-repeat;
              background-size: 116px auto, 100%;
              color: #3c3737;
              font-size: 16px;
              font-weight: bold;
              text-transform: uppercase;
              line-height: 70px;
              text-shadow: 0 1px 4px rgba(255, 255, 255, 1);
              background-blend-mode: screen;
            }
          }
          .btlpass-level-simple-box-scroll {
            width: 572px;
            height: 183px;
            position: absolute;
            top: 6px;
            left: 288px;
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
                    0 1px 2px 0 rgba(0, 0, 0, 0.55),
                    0 0 0 1px rgba(0, 0, 0, 0.1);
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

export { stylesFileName, pageStyles };
