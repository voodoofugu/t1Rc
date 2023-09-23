import { css } from "@emotion/react";

const V2ScreenCwMain3Styles = css`
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
          .tab-panel-box.fw-main {
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
            .fw-main-bl-box {
              width: 1078px;
              height: 250px;
              position: absolute;
              top: 42px;
              left: 10px;
              .fw-main-bl {
                width: 350px;
                height: 250px;
                position: absolute;
                background-color: #9c8b7c;
                .fw-main-bl-name {
                  width: 160px;
                  height: 30px;
                  position: absolute;
                  top: 6px;
                  left: 95px;
                  background: linear-gradient(
                    0deg,
                    #3fbae7 0%,
                    #007aa7 50%,
                    #3fbae7 100%
                  );
                  border-radius: 20px;
                  color: #fff;
                  font-size: 12px;
                  font-weight: bold;
                  text-transform: uppercase;
                  line-height: 30px;
                  text-align: center;
                }
                .fw-main-bl-pic {
                  width: 150px;
                  height: 150px;
                  position: absolute;
                  top: 40px;
                  left: 100px;
                  img {
                    width: 150px;
                  }
                }
                .color-btn {
                  width: 160px;
                  height: 40px;
                  position: absolute;
                  bottom: 10px;
                  left: 95px;
                }
                &.fraction {
                  right: 0;
                }
                &.shop {
                  left: 364px;

                  .cw-map-name-box-all {
                    width: 344px;
                    height: 80px;
                    position: absolute;
                    top: 5px;
                    left: 3px;
                    .cw-map-name-box {
                      width: 344px;
                      height: 80px;
                      position: absolute;
                      top: 0;
                      left: 0;
                      background-image: url(../img/red-lenta.png);
                      background-size: 100%;
                      background-repeat: no-repeat;
                      text-align: center;
                      .cw-map-name,
                      .cw-map-date {
                        width: 250px;
                        height: auto;
                        position: relative;
                        top: 5px;
                        display: inline-block;
                        color: #ffc000;
                        font-size: 14px;
                        font-weight: bold;
                        text-transform: uppercase;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                      }
                      .cw-map-date {
                        color: #fff;
                        font-size: 16px;
                      }
                    }
                    .cw-map-time-box {
                      width: 190px;
                      height: 36px;
                      position: absolute;
                      bottom: 0;
                      left: 77px;
                      background-color: rgba(0, 0, 0, 0.75);
                      text-align: center;
                      border-radius: 0 0 20px 20px;
                      .cw-map-time1,
                      .cw-map-time2 {
                        width: 180px;
                        height: 10px;
                        position: absolute;
                        left: 5px;
                        top: 5px;
                        color: #ffc000;
                        font-size: 10px;
                        font-weight: bold;
                        text-transform: uppercase;
                      }
                      .cw-map-time2 {
                        top: 18px;
                      }
                    }
                  }
                  .fw-main-bl-pic {
                    top: 75px;
                  }
                  .color-btn.clans {
                    left: 10px;
                  }
                  .color-btn.shop {
                    left: auto;
                    right: 10px;
                  }
                }
              }
            }
            .fw-level-box-all {
              width: 1078px;
              height: 200px;
              position: absolute;
              bottom: 10px;
              right: 10px;
              background-color: #8f7c6e;
              text-align: center;
              .fw-sim-el-box {
                width: 100px;
                height: 190px;
                position: absolute;
                top: 5px;
                left: 5px;
                .fw-simple {
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
                .fw-level {
                  width: 100px;
                  height: 20px;
                  position: absolute;
                  top: 75px;
                  left: 0;
                  background-color: #b7a597;
                  color: #fff;
                  font-size: 14px;
                  font-weight: bold;
                  text-transform: uppercase;
                  line-height: 20px;
                }
                .fw-elite {
                  width: 100px;
                  height: 70px;
                  position: absolute;
                  top: 100px;
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
                }
              }
              .fw-level-simple-box-scroll {
                width: 962px;
                height: 186px;
                position: absolute;
                top: 5px;
                right: 5px;
                overflow: hidden;
                overflow-x: scroll;
                &::-webkit-scrollbar-track {
                  background-color: #524544;
                }
                &::-webkit-scrollbar {
                  height: 8px;
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
                }
                .fw-level-simple,
                .fw-level-elite {
                  width: 2000px;
                  height: 70px;
                  position: relative;
                  text-align: left;
                  background-color: #766457;
                  .fw-level-rew-box {
                    width: 60px;
                    height: 60px;
                    position: relative;
                    display: inline-block;
                    background: linear-gradient(0deg, #e9c44f 0%, #f7eec7 100%);
                    border-radius: 8px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    margin: 5px;
                    text-align: center;
                    .fw-level-rew-pic {
                      width: 46px;
                      height: 46px;
                      position: absolute;
                      top: 0;
                      left: 7px;
                      img {
                        width: 46px;
                      }
                    }
                    .fw-level-rew-num {
                      width: 60px;
                      height: 12px;
                      position: absolute;
                      bottom: 5px;
                      color: #3c3737;
                      font-size: 12px;
                      font-weight: bold;
                    }
                    .fw-level-rew-num-check {
                      width: 50px;
                      height: 50px;
                      position: absolute;
                      top: 5px;
                      left: 5px;
                      background-image: url(../img/paycheck.png);
                      background-size: 100%;
                      background-repeat: no-repeat;
                      visibility: hidden;
                    }
                    .fw-level-rew-good {
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
                      border-radius: 4px;
                      visibility: hidden;
                      box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25),
                        0 1px 2px 0 rgba(0, 0, 0, 0.55);
                      .color-btn-text {
                        font-size: 8px;
                        top: 2px;
                      }
                      &:active {
                        box-shadow: inset 0 -1px 0px rgba(0, 0, 0, 0.2),
                          inset 0 2px 2px rgba(0, 0, 0, 0.2);
                        .color-btn-text {
                          top: 3px;
                        }
                      }
                    }
                    .fw-level-rew-num-block {
                      width: 60px;
                      height: 60px;
                      position: absolute;
                      top: 0;
                      left: 0;
                      background-color: rgba(0, 0, 0, 0.65);
                      border-radius: 8px;
                      visibility: hidden;
                    }
                    &.collect {
                      .fw-level-rew-num {
                        visibility: hidden;
                      }
                      .color-btn.green {
                        visibility: visible;
                      }
                    }
                    &.check {
                      .fw-level-rew-num-check {
                        visibility: visible;
                      }
                    }
                    &.block {
                      .fw-level-rew-num-block {
                        visibility: visible;
                      }
                    }
                    &.empty {
                      background: #3d342d;
                      box-shadow: 0 0 0 rgba(0, 0, 0, 0.35);
                      .fw-level-rew-num {
                        visibility: hidden;
                      }
                      .color-btn.green {
                        visibility: hidden;
                      }
                      .fw-level-rew-num-check {
                        visibility: hidden;
                      }
                      .fw-level-rew-pic {
                        visibility: hidden;
                      }
                    }
                    &.girl {
                      .fw-level-rew-pic {
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
                      .fw-level-rew-num {
                        visibility: hidden;
                      }
                      .fw-level-rew-good {
                        visibility: visible;
                      }
                    }
                  }
                }
                .fw-level-level {
                  width: 2000px;
                  height: 20px;
                  position: relative;
                  top: 5px;
                  background: linear-gradient(0deg, #584a49 0%, #3b302f 100%);
                  .fw-level-level-prg {
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
                  .fw-level-level-num-box {
                    width: 100%;
                    height: 20px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    text-align: left;
                    .fw-level-level-num {
                      width: 70px;
                      height: 20px;
                      position: relative;
                      display: inline-block;
                      text-align: center;
                      color: #fff;
                      font-size: 16px;
                      font-weight: bold;
                      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
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
                .fw-level-elite {
                  top: 10px;
                }
              }
            }
            .btn-close-x {
              width: 30px;
              height: 30px;
              position: absolute;
              top: -6px;
              right: -6px;
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
            .fw-btlpass-buy-box-all {
              width: 170px;
              height: 200px;
              position: absolute;
              bottom: 10px;
              left: 10px;
              display: none;
              .fw-btlpass-girl {
                width: 170px;
                height: 200px;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url(../img/v2-fw-girl.png);
                background-repeat: no-repeat;
                background-size: 100%;
              }
              .fw-btlpass-info {
                width: 26px;
                height: 26px;
                position: absolute;
                top: 5px;
                left: 5px;
                background-image: url(../img/i-ico.png);
                background-repeat: no-repeat;
                background-size: 100%;
                cursor: pointer;
                &:active {
                  top: 6px;
                }
              }
              .color-btn {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 170px;
                height: 50px;
                .color-btn-text {
                  font-size: 16px;
                  line-height: 26px;
                }
              }
            }
            &.btlpass-buy-box {
              .fw-btlpass-buy-box-all {
                display: block;
              }
              .fw-level-box-all {
                width: 900px;
                .fw-level-simple-box-scroll {
                  width: 785px;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default V2ScreenCwMain3Styles;
