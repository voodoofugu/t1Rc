import { css } from "@emotion/react";

const QuestTabDailyStyles = css`
  body .main {
    .left-side {
      width: 620px;
      height: 555px;
      position: absolute;
      left: 5px;
      bottom: 5px;
      .tabs-all-box {
        width: 600px;
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
        .quests-list-all-box {
          width: 620px;
          height: 515px;
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(0deg, #786358, #584a49);
          box-shadow: inset 0 0 0 4px #9c8b7c, inset 0 0 6px rgba(0, 0, 0, 0.25) !important;
          border-radius: 10px 18px 18px 18px;
          .journal-menu-box {
            width: 500px;
            height: 40px;
            position: absolute;
            top: 10px;
            left: 12px;
            font-size: 0;
            text-align: center;
            display: flex;
            .color-btn {
              width: 160px;
              margin: 0 3px 0 3px;
              // &.blue {
              //   box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
              //     inset 0 2px 2px rgba(0, 0, 0, 0.2);
              //   pointer-events: none;
              //   a {
              //     .color-btn-text {
              //       padding-top: 2px;
              //     }
              //   }
              // }
            }
          }
          .journal-parth-box-all {
            width: 500px;
            height: 445px;
            position: absolute;
            top: 58px;
            left: 12px;
            background-color: #9c8b7c;
            border-radius: 10px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
            box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
              inset 0 -2px 0px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.2);
            .content-disable {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              background: none;
            }
            .daily-mission-box {
              width: 480px;
              height: 90px;
              position: absolute;
              top: 10px;
              left: 10px;
              background-color: #705d4e;
              border-radius: 8px;
              box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                inset 0px 1px 1px rgba(0, 0, 0, 0.1);
              .daily-mission-name {
                width: 200px;
                height: auto;
                position: absolute;
                top: 10px;
                left: 95px;
                color: #fff;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 18px;
                text-align: center;
              }
              .daily-prgbar-all {
                width: 380px;
                height: 40px;
                position: absolute;
                bottom: 10px;
                left: 10px;
                background: linear-gradient(180deg, #3b302f 0%, #584a49 100%);
                border-radius: 6px;
                overflow: hidden;
                box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
                .daily-prgbar {
                  width: 10%;
                  height: 40px;
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
                .daily-prgbar-text {
                  width: 380px;
                  height: 40px;
                  position: relative;
                  text-align: center;
                  color: #ffd33c;
                  font-weight: bold;
                  font-size: 24px;
                  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
                  line-height: 40px;
                  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                  text-transform: uppercase;
                }
              }
              .daily-reward {
                width: 70px;
                height: 70px;
                position: absolute;
                top: 10px;
                right: 10px;
                background: linear-gradient(
                  180deg,
                  #c68300 0%,
                  #f4dfb6 50%,
                  #c68200 70%,
                  #fad489 85%,
                  #c78302 100%
                );
                border-radius: 10px;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                .daily-reward-pic {
                  width: 50px;
                  height: 50px;
                  position: absolute;
                  top: 4px;
                  left: 10px;
                  img {
                    width: 50px;
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                  }
                }
                .daily-reward-count {
                  width: 60px;
                  height: auto;
                  position: relative;
                  top: 52px;
                  text-align: center;
                  margin: 0 auto;
                  color: #fff;
                  font-size: 14px;
                  font-weight: bold;
                  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                }
                &.active {
                  cursor: pointer;
                  &:hover {
                    background: linear-gradient(
                      180deg,
                      #e19600 0%,
                      #f6e4c1 50%,
                      #dc8f00 70%,
                      #fbd995 85%,
                      #dc9003 100%
                    );
                  }
                  &:active {
                    transform: scale(0.98);
                  }
                  &:before {
                    content: "";
                    position: absolute;
                    background-image: url(../img/map-station-lockflare.png);
                    background-repeat: no-repeat;
                    background-size: 100%;
                    background-position: center;
                    transition: ease-in-out 0.1s;
                    animation: 8s linear 0s normal none infinite running
                      lockflare;
                    width: 90px;
                    height: 90px;
                    left: -10px;
                    top: -10px;
                    pointer-events: none;
                  }
                }
                .end-banner {
                  &:before {
                    content: "";
                    width: 50px;
                    height: 50px;
                    position: absolute;
                    top: 6px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-image: url(../img/paycheck.png);
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                  }
                  .txt {
                    color: #ffec62;
                    font-size: 12px;
                    font-weight: 700;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6),
                      0 0 4px rgba(0, 0, 0, 0.4);
                    position: absolute;
                    left: 50%;
                    top: 38px;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(
                      90deg,
                      rgba(0, 0, 0, 0) 10%,
                      rgba(83, 51, 10, 0.7),
                      rgba(83, 51, 10, 0.7),
                      rgba(0, 0, 0, 0) 90%
                    );
                    padding: 2px 6px 3px 6px;
                    line-height: 20px;
                    z-index: 1;
                    &:before,
                    &:after {
                      content: "";
                      position: absolute;
                      width: 100%;
                      height: 2px;
                      left: 0;
                      background: linear-gradient(
                        90deg,
                        rgba(255, 255, 255, 0) 10%,
                        #afe48d,
                        rgba(255, 255, 255, 0) 90%
                      );
                    }
                    &:before {
                      top: 0;
                    }
                    &:after {
                      bottom: 0;
                    }
                  }
                }
              }
            }
            .daily-mission-box-scroll {
              width: 480px;
              height: 276px;
              position: absolute;
              top: 110px;
              left: 10px;
              overflow: hidden;
              overflow-y: scroll;
              font-size: 0;
              &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                border-radius: 10px;
                background-color: #7c665c;
              }
              &::-webkit-scrollbar {
                width: 10px;
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
              .daily-parth-box {
                width: 460px;
                height: 90px;
                position: relative;
                display: inline-block;
                background-color: #817264;
                margin-bottom: 8px;
                overflow: hidden;
                border-radius: 4px;
                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                  inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                transition: ease-in-out 0.06s;
                &:hover {
                  background-color: #796a5d;
                  transition: ease-in-out 0.06s;
                  .daily-parth-claim-box {
                    background-color: #665547;
                    transition: ease-in-out 0.06s;
                  }
                }
                .daily-parth-text {
                  width: 220px;
                  height: auto;
                  position: absolute;
                  top: 10px;
                  left: 10px;
                  color: #f5da6d;
                  font-weight: bold;
                  text-transform: uppercase;
                  font-size: 14px;
                  text-align: center;
                }
                .daily-prgbar-all {
                  width: 220px;
                  height: 20px;
                  position: absolute;
                  bottom: 10px;
                  left: 10px;
                  border-radius: 4px;
                  overflow: hidden;
                  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
                  background: linear-gradient(180deg, #3b302f 0%, #584a49 100%);
                  .daily-prgbar {
                    width: 80%;
                    height: 20px;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    background: linear-gradient(
                      0deg,
                      #3fbae7 0%,
                      #007aa7 50%,
                      #3fbae7 100%
                    );
                  }
                  .daily-prgbar-text {
                    width: 220px;
                    height: 20px;
                    position: relative;
                    text-align: center;
                    color: #fff;
                    font-weight: bold;
                    font-size: 14px;
                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
                    line-height: 20px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                    text-transform: uppercase;
                  }
                }
                .daily-parth-claim-box {
                  width: 220px;
                  height: 90px;
                  position: absolute;
                  top: 0;
                  right: 0;
                  background-color: #705d4e;
                  box-shadow: inset 0px 0 4px 1px rgba(0, 0, 0, 0.2);
                  .daily-reward {
                    width: 70px;
                    height: 70px;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: linear-gradient(
                      180deg,
                      #c68300 0%,
                      #f4dfb6 50%,
                      #c68200 70%,
                      #fad489 85%,
                      #c78302 100%
                    );
                    border-radius: 10px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    .daily-reward-pic {
                      width: 50px;
                      height: 50px;
                      position: absolute;
                      top: 4px;
                      left: 10px;
                      img {
                        width: 50px;
                      }
                    }
                    .daily-reward-count {
                      width: 60px;
                      height: auto;
                      position: relative;
                      top: 52px;
                      text-align: center;
                      margin: 0 auto;
                      color: #fff;
                      font-size: 14px;
                      font-weight: bold;
                      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    }
                  }
                  .color-btn {
                    width: 120px;
                    position: absolute;
                    top: 25px;
                    right: 10px;
                    .color-btn-text {
                      color: #3e342d;
                      text-shadow: 0 0 0;
                    }
                  }
                  .end-banner {
                    width: 90px;
                    height: 90px;
                    position: absolute;
                    left: 50%;
                    top: 0;
                    transform: translateX(-50%);
                    &:before {
                      content: "";
                      width: 90px;
                      height: 90px;
                      background: radial-gradient(
                        rgba(0, 0, 0, 1),
                        rgba(0, 0, 0, 0),
                        rgba(0, 0, 0, 0)
                      );
                      background-size: 150% 65%;
                      background-position: center 42px;
                      background-repeat: no-repeat;
                      z-index: 1;
                    }
                    &:after {
                      content: "";
                      width: 90px;
                      height: 90px;
                      position: absolute;
                      top: 0;
                      left: 0;
                      background-image: url(../img/paycheck.png);
                      background-size: 84px;
                      background-position: center;
                      background-repeat: no-repeat;
                    }
                    .txt {
                      color: #ffec62;
                      font-size: 16px;
                      font-weight: 700;
                      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6),
                        0 0 4px rgba(0, 0, 0, 0.4);
                      position: absolute;
                      left: 50%;
                      top: 52px;
                      transform: translate(-50%, -50%);
                      background: linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0) 10%,
                        #264220,
                        rgba(0, 0, 0, 0) 90%
                      );
                      padding: 4px 20px;
                      line-height: 20px;
                      z-index: 1;
                      &:before,
                      &:after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 2px;
                        left: 0;
                        background: linear-gradient(
                          90deg,
                          rgba(255, 255, 255, 0) 10%,
                          #afe48d,
                          rgba(255, 255, 255, 0) 90%
                        );
                      }
                      &:before {
                        top: 0;
                      }
                      &:after {
                        bottom: 0;
                      }
                    }
                  }
                }
                &.finished {
                  .daily-parth-claim-box {
                    .end-banner {
                      display: block;
                    }
                  }
                }
              }
            }
            .daily-mission-reset {
              width: 480px;
              height: 40px;
              position: absolute;
              bottom: 10px;
              left: 10px;
              background-color: #705d4e;
              border-radius: 8px;
              color: #fff;
              font-weight: bold;
              font-size: 18px;
              text-transform: uppercase;
              text-align: center;
              line-height: 40px;
              box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                inset 0px 1px 1px rgba(0, 0, 0, 0.1);
            }
          }
        }
      }
    }
  }
`;

export default QuestTabDailyStyles;
