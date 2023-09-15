import { styled, css } from "styled-components";

const V2ScreenCwMainStyles = css`
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
          .tab-panel-box.cw-main {
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
              .cw-main-right-a-box {
                width: 290px;
                height: 405px;
                position: absolute;
                top: 10px;
                left: 10px;
                background-color: #cbaa81;
                .cw-main-right-a-box-name {
                  width: 252px;
                  height: 36px;
                  position: absolute;
                  top: -5px;
                  left: 19px;
                  background-image: url(../img/wpck-ram.png);
                  background-size: 100%;
                  background-repeat: no-repeat;
                  color: #fff;
                  font-size: 16px;
                  font-weight: bold;
                  text-align: center;
                  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                  text-transform: uppercase;
                  line-height: 26px;
                }
                .cw-main-right-a-box-count {
                  width: 260px;
                  height: 80px;
                  position: absolute;
                  top: 50px;
                  left: 15px;
                  background-color: #d8bb96;
                  border-radius: 40px;
                  .cw-main-right-a-box-count-id-box,
                  .cw-main-right-a-box-count-people-box {
                    width: 50px;
                    height: 50px;
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    text-align: center;
                    .cw-main-right-a-box-count-id-text1,
                    .cw-main-right-a-box-count-id-text2 {
                      width: 100%;
                      height: auto;
                      position: absolute;
                      top: 4px;
                      color: #544746;
                      font-size: 16px;
                      font-weight: bold;
                    }
                    .cw-main-right-a-box-count-id-text2 {
                      top: 26px;
                      color: #fff;
                    }
                  }
                  .cw-main-right-a-box-count-people-box {
                    left: 196px;
                    .cw-main-right-a-box-count-id-text1 {
                      width: 22px;
                      height: 22px;
                      position: absolute;
                      left: 14px;
                      margin: 0 auto;
                      background-image: url(../img/v2-ic-people.png);
                      background-size: 100%;
                      background-repeat: no-repeat;
                    }
                  }
                }
                .cw-clan-logo-box {
                  width: 120px;
                  height: 120px;
                  position: absolute;
                  top: 35px;
                  left: 85px;
                  background: linear-gradient(0deg, #347ca1, #4db9d0 100%);
                  border-radius: 100%;
                  &:before {
                    content: "";
                    width: 116px;
                    height: 116px;
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    background-color: #fff;
                    border-radius: 100%;
                    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.15);
                  }
                  .cw-clan-bg {
                    width: 100%;
                    position: absolute;
                  }
                  .cw-clan-img {
                    width: 100px;
                    height: 100px;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    img {
                      width: 100px;
                    }
                  }
                }
                .cw-main-right-a-box-lvl-box {
                  width: 260px;
                  height: 40px;
                  position: absolute;
                  bottom: 226px;
                  left: 15px;
                  .cw-main-right-a-box-lvl-box-text {
                    width: 100%;
                    height: auto;
                    position: absolute;
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-align: center;
                  }
                  .cw-main-right-a-box-lvl-prg-box {
                    width: 260px;
                    height: 16px;
                    position: absolute;
                    bottom: 0;
                    background: linear-gradient(
                      180deg,
                      #3b302f 0%,
                      #584a49 100%
                    );
                    .cw-main-exp {
                      width: 100%;
                      text-align: center;
                      color: white;
                      font-size: 14px;
                      font-weight: bold;
                      z-index: 1;
                      position: absolute;
                    }
                    .cw-main-right-a-box-lvl-prg {
                      width: 25%;
                      height: 16px;
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      background: linear-gradient(
                        0deg,
                        #8cdd55 0%,
                        #43a700 50%,
                        #8cdd55 100%
                      );
                    }
                  }
                }
                .cw-main-right-a-box-edit-box {
                  width: 260px;
                  height: auto;
                  position: absolute;
                  bottom: 10px;
                  left: 15px;
                  font-size: 0;
                  text-align: center;
                  .color-btn {
                    width: 82px;
                    height: 40px;
                    margin: 0 2px;
                    .color-btn-img {
                      width: 26px;
                      height: 26px;
                      position: absolute;
                      top: 5px;
                      left: 28px;
                      background-size: 100%;
                      background-repeat: no-repeat;
                      &.ns {
                        background-image: url(../img/cw-ic-ns.png);
                      }
                      &.pap {
                        background-image: url(../img/cw-ic-pap.png);
                      }
                      &.rup {
                        background-image: url(../img/cw-ic-rup.png);
                      }
                    }
                    .color-btn-text {
                      width: 100%;
                      height: 26px;
                      position: absolute;
                      top: 7px !important;
                      left: 0;
                    }
                    &:active {
                      .color-btn-img {
                        top: 6px;
                      }
                    }
                    &.apps {
                      width: 120px;
                    }
                  }

                  .color-btn.cw-exit {
                    width: 120px;
                    //position: absolute;
                    //bottom: 10px; right: 10px;
                    background: linear-gradient(0deg, #dd8410 0%, #ffcf83 100%);
                    .color-btn-img {
                      width: 26px;
                      height: 26px;
                      position: absolute;
                      top: 5px;
                      left: 5px;
                      background-image: url(../img/cw-ic-exit.png);
                      background-size: 100%;
                      background-repeat: no-repeat;
                    }
                    &:active {
                      .color-btn-img {
                        top: 5px;
                      }
                    }
                    &.only {
                      width: 260px;
                      right: -2px;
                    }
                  }
                }
                .cw-main-right-a-box-text-box {
                  width: 260px;
                  height: 90px;
                  position: absolute;
                  bottom: 65px;
                  left: 15px;
                  display: table;
                  background-color: #fff;
                  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.35);
                  .cw-main-right-a-box-text {
                    width: 240px;
                    height: auto;
                    position: relative;
                    left: 0px;
                    display: table-cell;
                    color: #544746;
                    font-size: 14px;
                    text-align: center;
                    vertical-align: middle;
                  }
                  .cw-main-right-a-box-text-edit {
                    width: 26px;
                    height: 26px;
                    position: absolute;
                    right: 0;
                    background-image: url(../img/cw-ic-setup.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    cursor: pointer;
                  }
                }
                .color-btn.territory {
                  width: 260px;
                  position: absolute;
                  bottom: 10px;
                  left: 15px;
                  background: linear-gradient(0deg, #39b1e9 0%, #7cf4ff 100%);
                  .color-btn-text {
                    font-size: 20px;
                  }
                }
              }
              .cw-main-right-b-box {
                width: 440px;
                height: 440px;
                position: absolute;
                right: 10px;
                bottom: 10px;
                .cw-main-right-b-box-scroll-all {
                  width: 420px;
                  height: 405px;
                  position: absolute;
                  top: 35px;
                  left: 10px;
                  background-color: #cbaa81;
                  .cw-main-right-b-box-scroll {
                    width: 400px;
                    height: 385px;
                    position: absolute;
                    top: 10px;
                    left: 10px;
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
                    .cw-main-right-b-av {
                      width: 380px;
                      height: 80px;
                      position: relative;
                      display: inline-block;
                      background-color: #f3d6b0;
                      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
                      .cw-main-girl-ava {
                        width: 70px;
                        height: 70px;
                        position: absolute;
                        top: 5px;
                        left: 5px;
                        background: linear-gradient(
                          0deg,
                          #f28e26 0%,
                          #fd644f 100%
                        );
                        border-radius: 8px;
                        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
                        .cw-main-girl-ava-img {
                          width: 66px;
                          height: 66px;
                          position: absolute;
                          top: 2px;
                          left: 2px;
                          border-radius: 6px;
                          overflow: hidden;
                          img {
                            width: 66px;
                          }
                        }
                      }
                      .cw-girl-num-big {
                        width: 50px;
                        height: 20px;
                        position: absolute;
                        top: 30px;
                        left: 80px;
                        background-color: #544746;
                        color: #d8bb96;
                        font-size: 12px;
                        font-weight: bold;
                        text-align: center;
                        line-height: 20px;
                        @include prefix(border-radius, 20px);
                      }
                      .cw-main-right-b-name-box {
                        width: 144px;
                        height: 70px;
                        position: absolute;
                        top: 5px;
                        left: 135px;
                        border-left: 1px solid #cbaa81;
                        border-right: 1px solid #cbaa81;
                        .cw-main-right-b-name,
                        .cw-main-right-b-rank {
                          width: 130px;
                          height: auto;
                          position: absolute;
                          top: 5px;
                          left: 7px;
                          color: #544746;
                          font-size: 14px;
                          font-weight: bold;
                          .cw-your-acc {
                            color: #544746;
                            font-size: 10px;
                          }
                        }
                        .cw-main-right-b-rank {
                          font-size: 12px;
                          font-style: italic;
                          top: 50px;
                        }
                      }
                      .cw-main-right-b-at-box {
                        width: 90px;
                        height: 70px;
                        position: absolute;
                        top: 5px;
                        right: 5px;
                        .cw-main-right-b-at-pic {
                          width: 42px;
                          height: 42px;
                          position: absolute;
                          left: 24px;
                          top: 5px;
                          background-image: url(../img/v2-fw-icon-w3.png);
                          background-size: 100%;
                          background-repeat: no-repeat;
                        }
                        .cw-main-right-b-at-text {
                          width: 100%;
                          height: auto;
                          position: absolute;
                          bottom: 5px;
                          text-align: center;
                          color: #544746;
                          font-size: 10px;
                          font-weight: bold;
                          text-transform: uppercase;
                        }
                      }
                    }
                  }
                }
                .cw-main-right-b-btn-box {
                  width: 422px;
                  height: 50px;
                  position: absolute;
                  bottom: 0;
                  left: 6px;
                  font-size: 0;
                  .color-btn {
                    width: 120px;
                    margin: 0 4px;
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

  .choose-clan {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 60px;
    font-size: 36px;
    color: #a58e71;
  }

  .cw-user-info-icon {
    width: 26px;
    height: 26px;
    position: absolute;
    top: 2px;
    right: 5px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .cw-no-invites {
    padding: 15px 0;
    font-size: 16px;
    width: 100%;
    text-align: center;
    font-weight: bold;
  }

  .cw-main-clan-stats {
    position: absolute;
    width: 211px;
    height: 65px;
    top: 183px;
    left: 29px;
    .rating {
      position: absolute;
      top: 2px;
      left: 28px;
      width: 56px;
      height: 56px;
      .rating-scores {
        position: absolute;
        left: 0px;
        width: 56px;
        top: 20px;
        color: white;
        font-weight: bold;
        text-align: center;
        font-size: 14px;
      }
    }
    .might {
      position: absolute;
      width: 117px;
      height: 56px;
      top: 0;
      left: 100px;
      img {
        position: absolute;
        width: 56px;
        height: 56px;
        top: 0px;
        left: 0;
      }
      .might-scores {
        width: 50px;
        height: 20px;
        position: absolute;
        top: 21px;
        left: 52px;
        background-color: #544746;
        color: #d8bb96;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        line-height: 20px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        -ms-border-radius: 20px;
        -o-border-radius: 20px;
        border-radius: 20px;
      }
    }
  }

  .cw-clan-logo-box.clan-wars {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 110px;
    left: 35px;
    .cw-clan-bg {
      width: 100%;
      position: absolute;
      left: 0;
    }
    .cw-clan-img {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 10px;
      left: 10px;
      img {
        width: 100px;
      }
    }
  }

  .m-popup.fortuna-main-round-rating.cw-clans {
    .cw-main-right-box-all {
      width: 760px;
      height: 425px;
      position: absolute;
      top: 130px;
      left: 20px;
      background-color: #d8bb96;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);

      .cw-main-right-a-box {
        width: 290px;
        height: 405px;
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: #cbaa81;

        .cw-main-right-a-box-name {
          width: 252px;
          height: 36px;
          position: absolute;
          top: -5px;
          left: 19px;
          background-image: url(../img/wpck-ram.png);
          background-size: 100%;
          background-repeat: no-repeat;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
          text-transform: uppercase;
          line-height: 26px;
        }

        .cw-main-right-a-box-count {
          width: 260px;
          height: 80px;
          position: absolute;
          top: 50px;
          left: 15px;
          background-color: #d8bb96;
          border-radius: 40px;

          .cw-main-right-a-box-count-id-box,
          .cw-main-right-a-box-count-people-box {
            width: 50px;
            height: 50px;
            position: absolute;
            top: 15px;
            left: 15px;
            text-align: center;

            .cw-main-right-a-box-count-id-text1,
            .cw-main-right-a-box-count-id-text2 {
              width: 100%;
              height: auto;
              position: absolute;
              top: 4px;
              color: #544746;
              font-size: 16px;
              font-weight: bold;
            }

            .cw-main-right-a-box-count-id-text2 {
              top: 26px;
              color: #fff;
            }
          }

          .cw-main-right-a-box-count-people-box {
            left: 196px;

            .cw-main-right-a-box-count-id-text1 {
              width: 22px;
              height: 22px;
              position: absolute;
              left: 14px;
              margin: 0 auto;
              background-image: url(../img/v2-ic-people.png);
              background-size: 100%;
              background-repeat: no-repeat;
            }
          }
        }

        .cw-clan-logo-box {
          width: 120px;
          height: 120px;
          position: absolute;
          top: 35px;
          left: 85px;
          background: linear-gradient(0deg, #347ca1, #4db9d0 100%);
          border-radius: 100%;

          &:before {
            content: "";
            width: 116px;
            height: 116px;
            position: absolute;
            top: 2px;
            left: 2px;
            background-color: #fff;
            border-radius: 100%;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.15);
          }

          .cw-clan-bg {
            width: 100%;
            position: absolute;
            left: 0;
          }

          .cw-clan-img {
            width: 100px;
            height: 100px;
            position: absolute;
            top: 10px;
            left: 10px;

            img {
              width: 100px;
            }
          }
        }

        .cw-main-right-a-box-lvl-box {
          width: 260px;
          height: 40px;
          position: absolute;
          bottom: 226px;
          left: 15px;

          .cw-main-right-a-box-lvl-box-text {
            width: 100%;
            height: auto;
            position: absolute;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
          }

          .cw-main-right-a-box-lvl-prg-box {
            width: 260px;
            height: 16px;
            position: absolute;
            bottom: 0;
            background: linear-gradient(180deg, #3b302f 0%, #584a49 100%);

            .cw-main-exp {
              width: 100%;
              text-align: center;
              color: white;
              font-size: 14px;
              font-weight: bold;
              z-index: 1;
              position: absolute;
            }

            .cw-main-right-a-box-lvl-prg {
              width: 25%;
              height: 16px;
              position: absolute;
              top: 0px;
              left: 0px;
              background: linear-gradient(
                0deg,
                #8cdd55 0%,
                #43a700 50%,
                #8cdd55 100%
              );
            }
          }
        }

        .cw-main-right-a-box-edit-box {
          width: 260px;
          height: auto;
          position: absolute;
          bottom: 10px;
          left: 15px;
          font-size: 0;
          text-align: center;

          .color-btn {
            width: 82px;
            height: 40px;
            margin: 0 2px;

            .color-btn-img {
              width: 26px;
              height: 26px;
              position: absolute;
              top: 5px;
              left: 28px;
              background-size: 100%;
              background-repeat: no-repeat;

              &.ns {
                background-image: url(../img/cw-ic-ns.png);
              }

              &.pap {
                background-image: url(../img/cw-ic-pap.png);
              }

              &.rup {
                background-image: url(../img/cw-ic-rup.png);
              }
            }

            .color-btn-text {
              width: 100%;
              height: 26px;
              position: absolute;
              top: 7px !important;
              left: 0;
            }

            &:active {
              .color-btn-img {
                top: 6px;
              }
            }

            &.apps {
              width: 120px;
            }
          }

          .color-btn.cw-exit {
            width: 120px;
            //position: absolute;
            //bottom: 10px; right: 10px;
            background: linear-gradient(0deg, #dd8410 0%, #ffcf83 100%);

            .color-btn-img {
              width: 26px;
              height: 26px;
              position: absolute;
              top: 5px;
              left: 5px;
              background-image: url(../img/cw-ic-exit.png);
              background-size: 100%;
              background-repeat: no-repeat;
            }

            &:active {
              .color-btn-img {
                top: 5px;
              }
            }

            &.only {
              width: 260px;
              right: -2px;
            }
          }
        }

        .cw-main-right-a-box-text-box {
          width: 260px;
          height: 90px;
          position: absolute;
          bottom: 65px;
          left: 15px;
          display: table;
          background-color: #fff;
          box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.35);

          .cw-main-right-a-box-text {
            width: 240px;
            height: auto;
            position: relative;
            left: 0px;
            display: table-cell;
            color: #544746;
            font-size: 14px;
            text-align: center;
            vertical-align: middle;
          }

          .cw-main-right-a-box-text-edit {
            width: 26px;
            height: 26px;
            position: absolute;
            right: 0;
            background-image: url(../img/cw-ic-setup.png);
            background-size: 100%;
            background-repeat: no-repeat;
            cursor: pointer;
          }
        }

        .color-btn.territory {
          width: 260px;
          position: absolute;
          bottom: 10px;
          left: 15px;
          background: linear-gradient(0deg, #39b1e9 0%, #7cf4ff 100%);

          .color-btn-text {
            font-size: 20px;
          }
        }
      }

      .cw-main-right-b-box {
        width: 440px;
        height: 440px;
        position: absolute;
        right: 10px;
        bottom: 10px;

        .cw-main-right-b-box-scroll-all {
          width: 420px;
          height: 405px;
          position: absolute;
          top: 35px;
          left: 10px;
          background-color: #cbaa81;

          .cw-main-right-b-box-scroll {
            width: 400px;
            height: 385px;
            position: absolute;
            top: 10px;
            left: 10px;
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

            .cw-main-right-b-av {
              width: 380px;
              height: 80px;
              position: relative;
              display: inline-block;
              background-color: #f3d6b0;
              box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);

              .cw-main-girl-ava {
                width: 70px;
                height: 70px;
                position: absolute;
                top: 5px;
                left: 5px;
                background: linear-gradient(0deg, #f28e26 0%, #fd644f 100%);
                border-radius: 8px;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);

                .cw-main-girl-ava-img {
                  width: 66px;
                  height: 66px;
                  position: absolute;
                  top: 2px;
                  left: 2px;
                  border-radius: 6px;
                  overflow: hidden;

                  img {
                    width: 66px;
                  }
                }
              }

              .cw-girl-num-big {
                width: 50px;
                height: 20px;
                position: absolute;
                top: 30px;
                left: 80px;
                background-color: #544746;
                color: #d8bb96;
                font-size: 12px;
                font-weight: bold;
                text-align: center;
                line-height: 20px;
                border-radius: 20px;
              }

              .cw-main-right-b-name-box {
                width: 144px;
                height: 70px;
                position: absolute;
                top: 5px;
                left: 135px;
                border-left: 1px solid #cbaa81;
                border-right: 1px solid #cbaa81;

                .cw-main-right-b-name,
                .cw-main-right-b-rank {
                  width: 130px;
                  height: auto;
                  position: absolute;
                  top: 5px;
                  left: 7px;
                  color: #544746;
                  font-size: 14px;
                  font-weight: bold;

                  .cw-your-acc {
                    color: #544746;
                    font-size: 10px;
                  }
                }

                .cw-main-right-b-rank {
                  font-size: 12px;
                  font-style: italic;
                  top: 50px;
                }
              }

              .cw-main-right-b-at-box {
                width: 90px;
                height: 70px;
                position: absolute;
                top: 5px;
                right: 5px;

                .cw-main-right-b-at-pic {
                  width: 42px;
                  height: 42px;
                  position: absolute;
                  left: 24px;
                  top: 5px;
                  background-image: url(../img/v2-fw-icon-w3.png);
                  background-size: 100%;
                  background-repeat: no-repeat;
                }

                .cw-main-right-b-at-text {
                  width: 100%;
                  height: auto;
                  position: absolute;
                  bottom: 5px;
                  text-align: center;
                  color: #544746;
                  font-size: 10px;
                  font-weight: bold;
                  text-transform: uppercase;
                }
              }
            }
          }
        }

        .cw-main-right-b-btn-box {
          width: 422px;
          height: 50px;
          position: absolute;
          bottom: 0;
          left: 6px;
          font-size: 0;

          .color-btn {
            width: 120px;
            margin: 0 4px;

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
`;

const V2ScreenCwMain = styled.div`
  ${V2ScreenCwMainStyles}
`;

export { V2ScreenCwMainStyles, V2ScreenCwMain };
