import { css } from "@emotion/react";

const V2ScreenCwMain2Styles = css`
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
          .tab-panel-box.cw-main2 {
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
            .cw-main-left-box-all {
              width: 310px;
              height: 460px;
              position: absolute;
              bottom: 10px;
              left: 10px;
              .cw-main-chat-top-btn-box-all {
                width: 310px;
                height: 30px;
                position: absolute;
                font-size: 0;
                .cw-main-chat-top-btn-box {
                  width: 310px;
                  height: 100%;
                  position: absolute;
                  .color-btn {
                    width: 67px;
                    height: 26px;
                    border-radius: 0;
                    //background: linear-gradient(0deg, #65779c 0%, #9caac8 100%);
                    box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25),
                      0 2px 4px 0 rgba(0, 0, 0, 0.55);
                    margin: 0 5px;
                    .color-btn-text {
                      top: 6px;
                      font-size: 12px;
                    }
                    &:active {
                      box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                        inset 0 2px 2px rgba(0, 0, 0, 0.2);
                      .color-btn-text {
                        top: 7px;
                      }
                    }
                  }
                }
                .color-btn.setup {
                  width: 26px;
                  height: 26px;
                  left: 280px;
                  .color-btn-img {
                    width: 26px;
                    height: 26px;
                    position: absolute;
                    top: -2px;
                    background-image: url(../img/cw-ic-setup.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                  &:active {
                    .color-btn-img {
                      top: -1px;
                    }
                  }
                }
              }
              .cw-main-chat-box {
                width: 310px;
                height: 425px;
                position: absolute;
                bottom: 0;
                background-color: #d8bb96;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                .cw-main-chat-box-scroll {
                  width: 300px;
                  height: 415px;
                  position: absolute;
                  top: 5px;
                  left: 5px;
                  font-size: 0;
                  overflow: hidden;
                  overflow-y: scroll;
                  &.no-scroll {
                    overflow-y: hidden;
                  }
                  &::-webkit-scrollbar-track {
                    background-color: #524544;
                  }
                  &::-webkit-scrollbar {
                    width: 8px;
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
                  .cw-main-chat {
                    width: 280px;
                    height: 110px;
                    position: relative;
                    display: inline-block;
                    background-color: #d8bb96;
                    margin: 4px;
                    .cw-girl-ava-box {
                      width: 64px;
                      height: 64px;
                      position: absolute;
                      top: 5px;
                      left: 5px;
                      background: linear-gradient(0deg, #fd644f, #f28e26);
                      border-radius: 8px;
                      .cw-girl-ava {
                        width: 60px;
                        height: 60px;
                        position: absolute;
                        top: 2px;
                        left: 2px;
                        overflow: hidden;
                        border-radius: 6px;
                        img {
                          width: 60px;
                        }
                      }
                      .cw-girl-num {
                        width: 30px;
                        height: 20px;
                        position: absolute;
                        bottom: -2px;
                        left: -2px;
                        background-color: #544746;
                        color: #d8bb96;
                        font-size: 12px;
                        font-weight: bold;
                        text-align: center;
                        line-height: 20px;
                        @include prefix(border-radius, 20px);
                      }
                    }
                    .cw-chat-name,
                    .cw-chat-time {
                      width: 190px;
                      height: auto;
                      position: absolute;
                      top: 5px;
                      left: 80px;
                      color: #544746;
                      font-size: 12px;
                      font-weight: bold;
                    }
                    .cw-chat-time {
                      top: 20px;
                      font-size: 10px;
                      font-style: italic;
                    }
                    .cw-chat-ballon-box {
                      width: 190px;
                      height: 70px;
                      position: absolute;
                      bottom: 5px;
                      left: 80px;
                      background-color: #fff;
                      border-radius: 10px;
                      &:before {
                        content: "";
                        position: absolute;
                        top: 14px;
                        left: -8px;
                        width: 0;
                        height: 0;
                        border-top: 10px solid transparent;
                        border-right: 8px solid #fff;
                        border-bottom: 10px solid transparent;
                      }
                      .cw-chat-ballon-text {
                        width: 180px;
                        height: auto;
                        position: absolute;
                        top: 8px;
                        left: 5px;
                        color: #544746;
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                      }
                      .color-btn {
                        width: 120px;
                        height: 30px;
                        position: absolute;
                        top: 32px;
                        left: 35px;
                        .color-btn-text {
                          top: 5px;
                        }
                      }
                      &:active {
                        .color-btn-text {
                          top: 6px;
                        }
                      }
                    }
                    &.bg {
                      background-color: #cbaa81;
                    }
                  }
                }
              }
            }

            .cw-main-chat-left-btn-box-all {
              width: 760px;
              height: 30px;
              left: 329px;
              position: absolute;
              font-size: 0;
              top: 41px;
              z-index: 1;
              .cw-main-chat-left-btn-box {
                width: 100%;
                height: 100%;
                position: absolute;

                .cw-search-box {
                  display: inline-block;
                  .cw-search-clan {
                    border: none;
                    height: 19px;
                    padding-bottom: 6px;
                  }
                }

                .color-btn {
                  width: 93px;
                  height: 26px;
                  border-radius: 0;
                  //background: linear-gradient(0deg, #65779c 0%, #9caac8 100%);
                  box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25),
                    0 2px 4px 0 rgba(0, 0, 0, 0.55);
                  margin: 0 5px;
                  .color-btn-text {
                    top: 6px;
                    font-size: 12px;
                  }
                  &:active {
                    box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                      inset 0 2px 2px rgba(0, 0, 0, 0.2);
                    .color-btn-text {
                      top: 7px;
                    }
                  }
                }
              }
            }

            .cw-main-right-box-all {
              width: 760px;
              height: 425px;
              position: absolute;
              bottom: 10px;
              right: 10px;
              background-color: #d8bb96;
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
              .cw-main-right-c-box {
                width: 740px;
                height: 440px;
                position: absolute;
                right: 10px;
                bottom: 10px;
                .cw-main-right-c-box-scroll-all {
                  width: 720px;
                  height: 350px;
                  position: absolute;
                  top: 35px;
                  left: 10px;
                  &.in-clan {
                    height: 400px;
                  }
                  background-color: #cbaa81;
                  .cw-main-right-c-box-scroll {
                    width: 710px;
                    height: 330px;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    font-size: 0;
                    &.in-clan {
                      height: 380px;
                    }
                    overflow: hidden;
                    overflow-y: scroll;
                    &.no-scroll {
                      overflow-y: hidden;
                    }
                    &::-webkit-scrollbar-track {
                      background-color: #524544;
                    }
                    &::-webkit-scrollbar {
                      width: 8px;
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
                    .cw-clan-box {
                      width: 550px;
                      height: 80px;
                      position: relative;
                      display: inline-block;
                      background-color: #f3d6b0;
                      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
                      margin: 4px 0;
                      .cw-clan-rait-box {
                        width: 70px;
                        height: 70px;
                        position: absolute;
                        top: 5px;
                        left: 5px;
                        border-right: 1px solid #cbaa81;
                        .cw-clan-rait {
                          width: 56px;
                          height: 56px;
                          position: absolute;
                          top: 7px;
                          left: 7px;
                          .cw-clan-rait-num {
                            width: 50px;
                            height: auto;
                            position: absolute;
                            top: 20px;
                            left: 3px;
                            color: #fff;
                            font-size: 14px;
                            font-weight: bold;
                            text-align: center;
                            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
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
                      .cw-clan-name-box {
                        width: 200px;
                        height: 70px;
                        position: absolute;
                        top: 5px;
                        left: 180px;
                        .cw-clan-name {
                          width: auto;
                          height: auto;
                          position: absolute;
                          top: 10px;
                          color: #544746;
                          font-size: 18px;
                          font-weight: bold;
                          max-height: 24px;
                          overflow: hidden;
                          .cw-your-clan {
                            color: #544746;
                            font-size: 12px;
                          }
                        }
                        .cw-clan-name-pic {
                          width: 22px;
                          height: 22px;
                          position: absolute;
                          bottom: 10px;
                          background-image: url(../img/v2-ic-people.png);
                          background-size: 100%;
                          background-repeat: no-repeat;

                          .cw-clan-name-pic-num {
                            width: auto;
                            height: auto;
                            position: absolute;
                            left: 30px;
                            color: #544746;
                            font-size: 16px;
                            font-weight: bold;
                          }
                        }
                      }
                      .cw-clan-lvl-box {
                        width: 110px;
                        height: 70px;
                        position: absolute;
                        top: 5px;
                        right: 0;
                        border-left: 1px solid #cbaa81;
                        .cw-clan-lvl {
                          width: 100px;
                          height: auto;
                          position: absolute;
                          top: 10px;
                          left: 5px;
                          color: #544746;
                          font-size: 18px;
                          font-weight: bold;
                          text-align: center;
                        }
                        .cw-clan-might {
                          text-align: center;
                          width: 70px;
                          height: auto;
                          position: absolute;
                          top: 40px;
                          left: 20px;
                          color: #544746;
                          font-size: 14px;
                          font-weight: bold;
                          background-color: #544746;
                          -webkit-border-radius: 20px;
                          -moz-border-radius: 20px;
                          -ms-border-radius: 20px;
                          -o-border-radius: 20px;
                          border-radius: 20px;
                          color: #d8bb96;
                        }
                      }
                      .cw-clan-accept-box {
                        width: 50px;
                        height: 50px;
                        position: absolute;
                        right: 120px;
                        top: 15px;
                        img {
                          width: 100%;
                          height: 100%;
                        }
                      }
                      .cw-clan-join-btn-box {
                        width: 130px;
                        height: 80px;
                        position: absolute;
                        top: 0;
                        right: -140px;
                        .color-btn {
                          width: 120px;
                          left: 5px;
                          top: 12px;
                          .color-btn-text {
                            top: 16px;
                          }
                          &:active {
                            .color-btn-text {
                              top: 17px;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                .color-btn.greate {
                  width: 180px;
                  height: 50px;
                  position: absolute;
                  top: 390px;
                  left: 280px;
                  .color-btn-text {
                    font-size: 14px;
                    top: 8px;
                  }
                  .f-diamond {
                    &:before {
                      content: "";
                      width: 30px;
                      height: 30px;
                      position: relative;
                      display: inline-block;
                      background-image: url(../img/ic-diamond.png);
                      background-size: 100%;
                      margin-right: 4px;
                      margin-left: 4px;
                      vertical-align: middle;
                    }
                  }
                  &:active {
                    .color-btn-text {
                      top: 9px;
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
          }
        }
      }
    }
  }

  .color-btn {
    width: 90px;
    height: 50px;
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
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
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
  }

  .popup-layer .m-popup.fortuna-main-round-rating.cw-clans {
    width: 800px;
    height: 580px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .color-btn.alliance {
      width: 180px;
      top: 505px;
      height: 50px;
    }

    .cw-clan-btn-box {
      width: 720px;
      height: 40px;
      position: absolute;
      top: 75px;
      left: 40px;
      font-size: 0;
      .color-btn {
        width: 120px;
        height: 40px;
        top: 0;
        border-radius: 0;
        background: linear-gradient(0deg, #65779c 0%, #9caac8 100%);
        box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25),
          0 2px 4px 0 rgba(0, 0, 0, 0.55);
        margin: 0 5px;
        .color-btn-text {
          top: 6px;
          font-size: 12px;
        }
        &:active {
          box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
            inset 0 2px 2px rgba(0, 0, 0, 0.2);
          .color-btn-text {
            top: 7px;
          }
        }
      }
    }

    .cw-main-right-c-box {
      width: 780px;
      //height: 370px;
      height: 425px;
      position: absolute;
      top: 120px;
      left: 10px;
      .cw-main-right-c-box-scroll-all {
        width: 760px;
        height: 405px;
        position: absolute;
        top: 10px;
        left: 10px;
        &.in-clan {
          height: 400px;
        }
        background-color: #cbaa81;
        .cw-main-right-c-box-scroll {
          width: 745px;
          height: 385px;
          position: absolute;
          top: 10px;
          left: 10px;
          font-size: 0;
          &.in-clan {
            height: 380px;
          }
          overflow: hidden;
          overflow-y: scroll;
          &.no-scroll {
            overflow-y: hidden;
          }
          &::-webkit-scrollbar-track {
            background-color: #524544;
          }
          &::-webkit-scrollbar {
            width: 8px;
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
          .cw-clan-box {
            width: 550px;
            height: 80px;
            position: relative;
            left: 20px;
            background-color: #f3d6b0;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
            margin: 4px 0;
            .cw-clan-rait-box {
              width: 70px;
              height: 70px;
              position: absolute;
              top: 5px;
              left: 5px;
              border-right: 1px solid #cbaa81;
              .cw-clan-rait {
                width: 56px;
                height: 56px;
                position: absolute;
                top: 7px;
                left: 7px;
                .cw-clan-rait-num {
                  width: 50px;
                  height: auto;
                  position: absolute;
                  top: 20px;
                  left: 3px;
                  color: #fff;
                  font-size: 14px;
                  font-weight: bold;
                  text-align: center;
                  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
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
            &.alliance {
              .cw-clan-rait-box {
                position: relative;
                float: left;
                .cw-clan-rait {
                  width: 70px;
                  height: 70px;
                  top: 0;
                  left: 0;
                  img {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                  }
                }
              }
              .cw-clan-logo-bg,
              .cw-clan-logo {
                width: 55px;
                height: 55px;
                top: 5px;
                left: 10px;
                float: left;
                position: relative;

                img {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 8px;
                  left: 0;
                }

                .cw-clan-logo {
                  top: 0;
                  left: 0;
                }
              }

              .cw-clan-name-box {
                position: relative;
                left: 20px;
                float: left;
              }
            }
            .cw-clan-name-box {
              width: 200px;
              height: 70px;
              position: absolute;
              top: 5px;
              left: 180px;
              .cw-clan-name {
                width: auto;
                height: auto;
                position: absolute;
                top: 10px;
                color: #544746;
                font-size: 18px;
                font-weight: bold;
                max-height: 24px;
                overflow: hidden;
                .cw-your-clan {
                  color: #544746;
                  font-size: 12px;
                }
              }
              .cw-clan-name-pic {
                width: 22px;
                height: 22px;
                position: absolute;
                bottom: 10px;
                background-image: url(../img/v2-ic-people.png);
                background-size: 100%;
                background-repeat: no-repeat;

                .cw-clan-name-pic-num {
                  width: auto;
                  height: auto;
                  position: absolute;
                  left: 30px;
                  color: #544746;
                  font-size: 16px;
                  font-weight: bold;
                }
              }
            }
            .cw-clan-lvl-box {
              width: 110px;
              height: 70px;
              position: absolute;
              top: 5px;
              right: 0;
              border-left: 1px solid #cbaa81;
              .cw-clan-lvl {
                width: 100px;
                height: auto;
                position: absolute;
                top: 10px;
                left: 5px;
                color: #544746;
                font-size: 18px;
                font-weight: bold;
                text-align: center;
              }
              .cw-clan-might {
                text-align: center;
                width: 70px;
                height: auto;
                position: absolute;
                top: 40px;
                left: 20px;
                color: #544746;
                font-size: 14px;
                font-weight: bold;
                background-color: #544746;
                -webkit-border-radius: 20px;
                -moz-border-radius: 20px;
                -ms-border-radius: 20px;
                -o-border-radius: 20px;
                border-radius: 20px;
                color: #d8bb96;
              }
            }
            .cw-clan-accept-box {
              width: 50px;
              height: 50px;
              position: absolute;
              right: 120px;
              top: 15px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .cw-clan-join-btn-box {
              width: 130px;
              height: 80px;
              position: absolute;
              top: 0;
              right: -140px;
              .color-btn {
                width: 120px;
                left: 5px;
                top: 12px;
                .color-btn-text {
                  top: 16px;
                }
                &:active {
                  .color-btn-text {
                    top: 17px;
                  }
                }
              }
            }
          }
        }
      }
      .color-btn.greate {
        width: 180px;
        height: 50px;
        position: absolute;
        top: 390px;
        left: 280px;
        .color-btn-text {
          font-size: 14px;
          top: 8px;
        }
        .f-diamond {
          &:before {
            content: "";
            width: 30px;
            height: 30px;
            position: relative;
            display: inline-block;
            background-image: url(../img/ic-diamond.png);
            background-size: 100%;
            margin-right: 4px;
            margin-left: 4px;
            vertical-align: middle;
          }
        }
        &:active {
          .color-btn-text {
            top: 9px;
          }
        }
      }
    }
  }
`;

export default V2ScreenCwMain2Styles;
