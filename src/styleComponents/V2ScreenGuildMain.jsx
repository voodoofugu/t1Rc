import { css } from "@emotion/react";

const V2ScreenGuildMainStyles = css`
  .v2-guildmap-name {
    transform: scale(0.88);
  }
  .v2-guildmap-info-box {
    width: 170px;
    height: 110px;
    position: absolute;
    left: 390px;
    bottom: 328px;
    z-index: 99999;
    opacity: 0.88;
    cursor: pointer;
    .v2-guildmap-name {
      width: 170px;
      height: 36px;
      position: absolute;
      bottom: 16px;
      left: 0;
      background-image: url(../img/wpck-ram1.png);
      background-size: 100%;
      background-repeat: no-repeat;
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
      text-align: center;
      line-height: 32px;
    }
    .v2-guildmap-lvl {
      width: 80px;
      height: 30px;
      position: absolute;
      bottom: 0px;
      left: 45px;
      background: linear-gradient(
        0deg,
        #ffe199 0%,
        #f4c657 18%,
        #ffe199 60%,
        #f4c557 85%,
        #ffe199 100%
      );
      border-radius: 10px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
      color: #323232;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      text-shadow: 0 0 4px #fff0ae;
      text-align: center;
      line-height: 38px;
    }
    .v2-guildmap-notif {
      width: 24px;
      height: 24px;
      position: absolute;
      bottom: 32px;
      left: 0px;
      background-image: url(../img/picmeh-ic-info.png);
      background-size: 100%;
      background-repeat: no-repeat;
    }
    .v2-guildmap-block {
      width: 40px;
      height: 60px;
      position: absolute;
      top: 0;
      left: 65px;
      background-image: url(../img/tower-lock.png);
      background-size: 100%;
      background-repeat: no-repeat;
      display: none;
    }

    &:hover {
      filter: brightness(1.1) contrast(1.1);
      opacity: 1;
    }

    &.wheel {
      left: 390px;
      top: 328px;
      &:hover + .v2-guildmap-fortune {
        filter: brightness(1.1) contrast(1.1);
      }
    }
    &.shrine {
      left: 604px;
      top: 379px;
      &:hover + .v2-guildmap-shrine {
        filter: brightness(1.1) contrast(1.1);
      }
    }
    &.trophies {
      left: 109px;
      top: 367px;
      &:hover + .v2-guildmap-trophy {
        filter: brightness(1.1) contrast(1.1);
      }
    }
    &.hall {
      left: 430px;
      top: 57px;
      height: 210px;
      width: 210px;
      &:hover + .v2-guildmap-guild-hall {
        filter: brightness(1.1) contrast(1.1);
      }
    }
    &.super {
      left: 42px;
      top: 83px;
      height: 210px;
      width: 210px;
      &:hover + .v2-guildmap-suphero {
        filter: brightness(1.1) contrast(1.1);
      }
    }
    &.wars {
      left: 242px;
      top: 188px;
      height: 182px;
      width: 172px;
      &:hover + .v2-guildmap-alley3 {
        filter: brightness(1.1) contrast(1.1);
      }
    }
    &.tower {
      left: 810px;
      top: 81px;
      &:hover + .v2-guildmap-darktower {
        filter: brightness(1.1) contrast(1.1);
      }
    }
    &.master {
      left: 637px;
      top: 162px;
      &:hover + .v2-guildmap-master {
        filter: brightness(1.1) contrast(1.1);
      }
    }
    &.clans {
      left: 937px;
      top: 162px;
      //left: 515px;
      //top: 230px;
      &:hover + .v2-guildmap-gate {
        filter: brightness(1.1) contrast(1.1);
      }
    }
    &.gate {
      //left: 937px; top: 162px;
      left: 515px;
      top: 230px;
      &:hover + .v2-guildmap-alley1 {
        filter: brightness(1.1) contrast(1.1);
      }
    }
    &.warehouse {
      left: 757px;
      top: 258px;
      &:hover + .v2-guildmap-warehouse {
        filter: brightness(1.1) contrast(1.1);
      }
    }
    &.mine {
      left: 910px;
      top: 341px;
      &:hover + .v2-guildmap-mine {
        filter: brightness(1.1) contrast(1.1);
      }
    }
    &.wild {
      left: 932px;
      top: 38px;
      &:hover + .v2-guildmap-wilderness {
        filter: brightness(1.1) contrast(1.1);
      }
      cursor: default;
    }
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
          width: 0;
          height: 0;
          position: absolute;
          top: -8px;
          left: -8px;
          border: 8px solid transparent;
          border-bottom: 8px solid #9c8b7c;
          background: none;
          transform: rotate(-45deg);
          z-index: 999;
        }
        &.wide {
          width: 1106px;
          &:before {
            content: "";
            // width: 1102px;
          }
          .tab-panel-box.guild-main {
            width: 1098px;
            height: 511px;
            position: absolute;
            top: 0;
            left: 0;
            border: solid 4px #9c8b7c;
            border-top: none;
            box-shadow: inset 0 0 7px #5f4f4e;
            background-color: #9c8b7c;
            box-shadow: inset 0 0 0 5px #9c8b7c,
              inset 0 0 6px rgba(0, 0, 0, 0.25);
            border-radius: 10px 18px 18px 18px;

            .guild-map-box-all {
              width: 1098px;
              height: 506px;
              position: absolute;
              top: 5px;
              left: 0;
              background-image: url(../img/v2-guild-bg.jpg);
              background-size: 100%;
              background-repeat: no-repeat;
              overflow: hidden;
              border-radius: 6px 14px 14px 14px;
              .guild-map-bg-people {
                width: 1106px;
                height: 511px;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url(../img/v2-guild-bg-people.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 9999;
              }
              .v2-guildmap-fortune {
                width: 220px;
                height: 170px;
                position: absolute;
                top: 285px;
                left: 368px;
                background-image: url(../img/v2-guildmap-alley3.png);
                //background-image: url(../img/v2-guildmap-fortune.png);
                //background-size: 100%; background-repeat: no-repeat;
                z-index: 1000;
                &:hover {
                  filter: brightness(1.1) contrast(1.1);
                }

                &.block {
                  filter: grayscale(1);
                  .v2-guildmap-block {
                    display: block;
                  }
                }
              }
              .v2-guildmap-shrine {
                width: 234px;
                height: 178px;
                position: absolute;
                top: 316px;
                left: 574px;
                background-image: url(../img/v2-guildmap-shrine.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
                &:hover {
                  filter: brightness(1.1) contrast(1.1);
                }
                .v2-guildmap-info-box {
                  width: 170px;
                  height: 110px;
                  position: absolute;
                  left: 32px;
                  bottom: 10px;
                  .v2-guildmap-name {
                    width: 170px;
                    height: 36px;
                    position: absolute;
                    bottom: 16px;
                    left: 0;
                    background-image: url(../img/wpck-ram1.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    color: #fff;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    text-align: center;
                    line-height: 32px;
                  }
                  .v2-guildmap-lvl {
                    width: 80px;
                    height: 30px;
                    position: absolute;
                    bottom: 0px;
                    left: 45px;
                    background: linear-gradient(
                      0deg,
                      #ffe199 0%,
                      #f4c657 18%,
                      #ffe199 60%,
                      #f4c557 85%,
                      #ffe199 100%
                    );
                    border-radius: 10px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    color: #323232;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 0 4px #fff0ae;
                    text-align: center;
                    line-height: 38px;
                  }
                  .v2-guildmap-notif {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    bottom: 32px;
                    left: 0px;
                    background-image: url(../img/picmeh-ic-info.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                  .v2-guildmap-block {
                    width: 40px;
                    height: 60px;
                    position: absolute;
                    top: 0;
                    left: 65px;
                    background-image: url(../img/tower-lock.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    display: none;
                  }
                }
                &.block {
                  filter: grayscale(1);
                  .v2-guildmap-block {
                    display: block;
                  }
                }
                &.notif {
                  .v2-guildmap-notif {
                    display: block;
                  }
                }
              }
              .v2-guildmap-trophy {
                width: 272px;
                height: 131px;
                position: absolute;
                top: 354px;
                left: 62px;
                background-image: url(../img/v2-guildmap-trophy-a.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
                &:hover {
                  filter: brightness(1.1) contrast(1.1);
                }
                &.upgrade {
                  width: 272px;
                  height: 199px;
                  position: absolute;
                  top: 286px;
                  left: 62px;
                  background-image: url(../img/v2-guildmap-trophy-b.png);
                }
                .v2-guildmap-info-box {
                  width: 170px;
                  height: 110px;
                  position: absolute;
                  left: 51px;
                  bottom: 10px;
                  .v2-guildmap-name {
                    width: 170px;
                    height: 36px;
                    position: absolute;
                    bottom: 16px;
                    left: 0;
                    background-image: url(../img/wpck-ram1.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    color: #fff;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    text-align: center;
                    line-height: 32px;
                  }
                  .v2-guildmap-lvl {
                    width: 80px;
                    height: 30px;
                    position: absolute;
                    bottom: 0px;
                    left: 45px;
                    background: linear-gradient(
                      0deg,
                      #ffe199 0%,
                      #f4c657 18%,
                      #ffe199 60%,
                      #f4c557 85%,
                      #ffe199 100%
                    );
                    border-radius: 10px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    color: #323232;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 0 4px #fff0ae;
                    text-align: center;
                    line-height: 38px;
                  }
                  .v2-guildmap-notif {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    bottom: 32px;
                    left: 0px;
                    background-image: url(../img/picmeh-ic-info.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                  .v2-guildmap-block {
                    width: 40px;
                    height: 60px;
                    position: absolute;
                    top: 0;
                    left: 65px;
                    background-image: url(../img/tower-lock.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    display: none;
                  }
                }
              }
              .v2-guildmap-gate {
                width: 154px;
                height: 132px;
                position: absolute;
                top: 201px;
                right: 0;
                background-image: url(../img/v2-guildmap-gate.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
                &:hover {
                  filter: brightness(1.1) contrast(1.1);
                }
                .v2-guildmap-info-box {
                  width: 170px;
                  height: 110px;
                  position: absolute;
                  left: -15px;
                  bottom: 60px;
                  .v2-guildmap-name {
                    width: 170px;
                    height: 36px;
                    position: absolute;
                    bottom: 16px;
                    left: 0;
                    background-image: url(../img/wpck-ram1.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    color: #fff;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    text-align: center;
                    line-height: 32px;
                  }
                  .v2-guildmap-lvl {
                    width: 80px;
                    height: 30px;
                    position: absolute;
                    bottom: 0px;
                    left: 45px;
                    background: linear-gradient(
                      0deg,
                      #ffe199 0%,
                      #f4c657 18%,
                      #ffe199 60%,
                      #f4c557 85%,
                      #ffe199 100%
                    );
                    border-radius: 10px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    color: #323232;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 0 4px #fff0ae;
                    text-align: center;
                    line-height: 38px;
                  }
                  .v2-guildmap-notif {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    bottom: 32px;
                    left: 0px;
                    background-image: url(../img/picmeh-ic-info.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                  .v2-guildmap-block {
                    width: 40px;
                    height: 60px;
                    position: absolute;
                    top: 0;
                    left: 65px;
                    background-image: url(../img/tower-lock.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    display: none;
                  }
                }
                &.block {
                  filter: grayscale(1);
                  .v2-guildmap-block {
                    display: block;
                  }
                }
                &.notif {
                  .v2-guildmap-notif {
                    display: block;
                  }
                }
              }
              .v2-guildmap-darktower {
                width: 145px;
                height: 267px;
                position: absolute;
                top: 0;
                left: 815px;
                background-image: url(../img/v2-guildmap-darktower.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
                &:hover {
                  filter: brightness(1.1) contrast(1.1);
                }
                .v2-guildmap-info-box {
                  width: 170px;
                  height: 110px;
                  position: absolute;
                  left: -12px;
                  bottom: 80px;
                  .v2-guildmap-name {
                    width: 170px;
                    height: 36px;
                    position: absolute;
                    bottom: 16px;
                    left: 0;
                    background-image: url(../img/wpck-ram1.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    color: #fff;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    text-align: center;
                    line-height: 32px;
                  }
                  .v2-guildmap-lvl {
                    width: 80px;
                    height: 30px;
                    position: absolute;
                    bottom: 0px;
                    left: 45px;
                    background: linear-gradient(
                      0deg,
                      #ffe199 0%,
                      #f4c657 18%,
                      #ffe199 60%,
                      #f4c557 85%,
                      #ffe199 100%
                    );
                    border-radius: 10px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    color: #323232;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 0 4px #fff0ae;
                    text-align: center;
                    line-height: 38px;
                  }
                  .v2-guildmap-notif {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    bottom: 32px;
                    left: 0px;
                    background-image: url(../img/picmeh-ic-info.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                  .v2-guildmap-block {
                    width: 40px;
                    height: 60px;
                    position: absolute;
                    top: 0;
                    left: 65px;
                    background-image: url(../img/tower-lock.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    display: none;
                  }
                }
                &.block {
                  filter: grayscale(1);
                  .v2-guildmap-block {
                    display: block;
                  }
                }
                &.notif {
                  .v2-guildmap-notif {
                    display: block;
                  }
                }
              }
              .v2-guildmap-master {
                width: 210px;
                height: 220px;
                position: absolute;
                top: 74px;
                left: 614px;
                background-image: url(../img/v2-guildmap-master-a.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
                &:hover {
                  filter: brightness(1.1) contrast(1.1);
                }
                &.upgrade {
                  background-image: url(../img/v2-guildmap-master-b.png);
                }
                .v2-guildmap-info-box {
                  width: 170px;
                  height: 110px;
                  position: absolute;
                  left: 8px;
                  bottom: 10px;
                  .v2-guildmap-name {
                    width: 170px;
                    height: 36px;
                    position: absolute;
                    bottom: 16px;
                    left: 0;
                    background-image: url(../img/wpck-ram1.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    color: #fff;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    text-align: center;
                    line-height: 32px;
                  }
                  .v2-guildmap-lvl {
                    width: 80px;
                    height: 30px;
                    position: absolute;
                    bottom: 0px;
                    left: 45px;
                    background: linear-gradient(
                      0deg,
                      #ffe199 0%,
                      #f4c657 18%,
                      #ffe199 60%,
                      #f4c557 85%,
                      #ffe199 100%
                    );
                    border-radius: 10px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    color: #323232;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 0 4px #fff0ae;
                    text-align: center;
                    line-height: 38px;
                  }
                  .v2-guildmap-notif {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    bottom: 32px;
                    left: 0px;
                    background-image: url(../img/picmeh-ic-info.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                  .v2-guildmap-block {
                    width: 40px;
                    height: 60px;
                    position: absolute;
                    top: 0;
                    left: 65px;
                    background-image: url(../img/tower-lock.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    display: none;
                  }
                }
                &.block {
                  filter: grayscale(1);
                  .v2-guildmap-block {
                    display: block;
                  }
                }
                &.notif {
                  .v2-guildmap-notif {
                    display: block;
                  }
                }
              }
              .v2-guildmap-guild-hall {
                width: 394px;
                height: 185px;
                position: absolute;
                top: 104px;
                left: 358px;
                background-image: url(../img/v2-guildmap-guild-hall-a.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
                &:hover {
                  filter: brightness(1.1) contrast(1.1);
                }
                &.upgrade {
                  width: 363px;
                  height: 289px;
                  position: absolute;
                  top: 0;
                  left: 358px;
                  background-image: url(../img/v2-guildmap-guild-hall-b.png);
                }
                .v2-guildmap-info-box {
                  width: 170px;
                  height: 110px;
                  position: absolute;
                  left: 60px;
                  bottom: 25px;
                  .v2-guildmap-name {
                    width: 170px;
                    height: 36px;
                    position: absolute;
                    bottom: 16px;
                    left: 0;
                    background-image: url(../img/wpck-ram1.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    color: #fff;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    text-align: center;
                    line-height: 32px;
                  }
                  .v2-guildmap-lvl {
                    width: 80px;
                    height: 30px;
                    position: absolute;
                    bottom: 0px;
                    left: 45px;
                    background: linear-gradient(
                      0deg,
                      #ffe199 0%,
                      #f4c657 18%,
                      #ffe199 60%,
                      #f4c557 85%,
                      #ffe199 100%
                    );
                    border-radius: 10px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    color: #323232;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 0 4px #fff0ae;
                    text-align: center;
                    line-height: 38px;
                  }
                  .v2-guildmap-notif {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    bottom: 32px;
                    left: 0px;
                    background-image: url(../img/picmeh-ic-info.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                  .v2-guildmap-block {
                    width: 40px;
                    height: 60px;
                    position: absolute;
                    top: 0;
                    left: 65px;
                    background-image: url(../img/tower-lock.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    display: none;
                  }
                }
                &.block {
                  filter: grayscale(1);
                  .v2-guildmap-block {
                    display: block;
                  }
                }
                &.notif {
                  .v2-guildmap-notif {
                    display: block;
                  }
                }
              }
              .v2-guildmap-suphero {
                width: 342px;
                height: 161px;
                position: absolute;
                top: 158px;
                left: -12px;
                background-image: url(../img/v2-guildmap-suphero-a.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
                &:hover {
                  filter: brightness(1.1) contrast(1.1);
                }
                &.upgrade {
                  width: 343px;
                  height: 308px;
                  position: absolute;
                  top: 11px;
                  left: -13px;
                  background-image: url(../img/v2-guildmap-suphero-b.png);
                }
                .v2-guildmap-info-box {
                  width: 170px;
                  height: 110px;
                  position: absolute;
                  left: 60px;
                  bottom: 30px;
                  .v2-guildmap-name {
                    width: 170px;
                    height: 36px;
                    position: absolute;
                    bottom: 16px;
                    left: 0;
                    background-image: url(../img/wpck-ram1.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    color: #fff;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    text-align: center;
                    line-height: 32px;
                  }
                  .v2-guildmap-lvl {
                    width: 80px;
                    height: 30px;
                    position: absolute;
                    bottom: 0px;
                    left: 45px;
                    background: linear-gradient(
                      0deg,
                      #ffe199 0%,
                      #f4c657 18%,
                      #ffe199 60%,
                      #f4c557 85%,
                      #ffe199 100%
                    );
                    border-radius: 10px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    color: #323232;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 0 4px #fff0ae;
                    text-align: center;
                    line-height: 38px;
                  }
                  .v2-guildmap-notif {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    bottom: 32px;
                    left: 0px;
                    background-image: url(../img/picmeh-ic-info.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                  .v2-guildmap-block {
                    width: 40px;
                    height: 60px;
                    position: absolute;
                    top: 0;
                    left: 65px;
                    background-image: url(../img/tower-lock.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    display: none;
                  }
                }
                &.block {
                  filter: grayscale(1);
                  .v2-guildmap-block {
                    display: block;
                  }
                }
                &.notif {
                  .v2-guildmap-notif {
                    display: block;
                  }
                }
              }
              .v2-guildmap-warehouse {
                width: 272px;
                height: 108px;
                position: absolute;
                bottom: 132px;
                right: 75px;
                background-image: url(../img/v2-guildmap-warehouse-a.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
                &:hover {
                  filter: brightness(1.1) contrast(1.1);
                }
                &.upgrade {
                  width: 272px;
                  height: 129px;
                  position: absolute;
                  bottom: 131px;
                  right: 75px;
                  background-image: url(../img/v2-guildmap-warehouse-b.png);
                }
                .v2-guildmap-info-box {
                  width: 170px;
                  height: 110px;
                  position: absolute;
                  left: 20px;
                  bottom: 20px;
                  .v2-guildmap-name {
                    width: 170px;
                    height: 36px;
                    position: absolute;
                    bottom: 16px;
                    left: 0;
                    background-image: url(../img/wpck-ram1.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    color: #fff;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    text-align: center;
                    line-height: 32px;
                  }
                  .v2-guildmap-lvl {
                    width: 80px;
                    height: 30px;
                    position: absolute;
                    bottom: 0px;
                    left: 45px;
                    background: linear-gradient(
                      0deg,
                      #ffe199 0%,
                      #f4c657 18%,
                      #ffe199 60%,
                      #f4c557 85%,
                      #ffe199 100%
                    );
                    border-radius: 10px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    color: #323232;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 0 4px #fff0ae;
                    text-align: center;
                    line-height: 38px;
                  }
                  .v2-guildmap-notif {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    bottom: 32px;
                    left: 0px;
                    background-image: url(../img/picmeh-ic-info.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                  .v2-guildmap-block {
                    width: 40px;
                    height: 60px;
                    position: absolute;
                    top: 0;
                    left: 65px;
                    background-image: url(../img/tower-lock.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    display: none;
                  }
                }
                &.block {
                  filter: grayscale(1);
                  .v2-guildmap-block {
                    display: block;
                  }
                }
                &.notif {
                  .v2-guildmap-notif {
                    display: block;
                  }
                }
              }
              .v2-guildmap-mine {
                width: 129px;
                height: 111px;
                position: absolute;
                bottom: 91px;
                right: 18px;
                background-image: url(../img/v2-guildmap-mine-a.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
                &:hover {
                  filter: brightness(1.1) contrast(1.1);
                }
                &.upgrade {
                  width: 226px;
                  height: 170px;
                  position: absolute;
                  bottom: 58px;
                  right: 18px;
                  background-image: url(../img/v2-guildmap-mine-b.png);
                }
                .v2-guildmap-info-box {
                  width: 170px;
                  height: 110px;
                  position: absolute;
                  left: 26px;
                  bottom: 20px;
                  .v2-guildmap-name {
                    width: 170px;
                    height: 36px;
                    position: absolute;
                    bottom: 16px;
                    left: 0;
                    background-image: url(../img/wpck-ram1.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    color: #fff;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    text-align: center;
                    line-height: 32px;
                  }
                  .v2-guildmap-lvl {
                    width: 80px;
                    height: 30px;
                    position: absolute;
                    bottom: 0px;
                    left: 45px;
                    background: linear-gradient(
                      0deg,
                      #ffe199 0%,
                      #f4c657 18%,
                      #ffe199 60%,
                      #f4c557 85%,
                      #ffe199 100%
                    );
                    border-radius: 10px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    color: #323232;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 0 4px #fff0ae;
                    text-align: center;
                    line-height: 38px;
                  }
                  .v2-guildmap-notif {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    bottom: 32px;
                    left: 0px;
                    background-image: url(../img/picmeh-ic-info.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                  .v2-guildmap-block {
                    width: 40px;
                    height: 60px;
                    position: absolute;
                    top: 0;
                    left: 65px;
                    background-image: url(../img/tower-lock.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    display: none;
                  }
                }
                &.block {
                  filter: grayscale(1);
                  .v2-guildmap-block {
                    display: block;
                  }
                }
                &.notif {
                  .v2-guildmap-notif {
                    display: block;
                  }
                }
              }
              .v2-guildmap-wilderness {
                width: 120px;
                height: 160px;
                position: absolute;
                top: 10px;
                right: 10px;
                // background-image: url(../img/v2-guildmap-mine-a.png);
                // background-size: 100%; background-repeat: no-repeat;
                z-index: 999;
                &:hover {
                  filter: brightness(1.1) contrast(1.1);
                }
                &.upgrade {
                  width: 226px;
                  height: 170px;
                  position: absolute;
                  bottom: 58px;
                  right: 18px;
                  background-image: url(../img/v2-guildmap-mine-b.png);
                }
                .v2-guildmap-info-box {
                  width: 170px;
                  height: 110px;
                  position: absolute;
                  left: -25px;
                  bottom: 20px;
                  .v2-guildmap-name {
                    width: 170px;
                    height: 36px;
                    position: absolute;
                    bottom: 16px;
                    left: 0;
                    background-image: url(../img/wpck-ram1.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    color: #fff;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    text-align: center;
                    line-height: 32px;
                  }
                  .v2-guildmap-lvl {
                    width: 80px;
                    height: 30px;
                    position: absolute;
                    bottom: 0px;
                    left: 45px;
                    background: linear-gradient(
                      0deg,
                      #ffe199 0%,
                      #f4c657 18%,
                      #ffe199 60%,
                      #f4c557 85%,
                      #ffe199 100%
                    );
                    border-radius: 10px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    color: #323232;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-shadow: 0 0 4px #fff0ae;
                    text-align: center;
                    line-height: 38px;
                  }
                  .v2-guildmap-notif {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    bottom: 32px;
                    left: 0px;
                    background-image: url(../img/picmeh-ic-info.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                  .v2-guildmap-block {
                    width: 40px;
                    height: 60px;
                    position: absolute;
                    top: 0;
                    left: 65px;
                    background-image: url(../img/tower-lock.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    display: none;
                  }
                }
                &.block {
                  filter: grayscale(1);
                  .v2-guildmap-block {
                    display: block;
                  }
                }
                &.notif {
                  .v2-guildmap-notif {
                    display: block;
                  }
                }
              }
              .v2-guildmap-alley1 {
                width: 232px;
                height: 141px;
                position: absolute;
                top: 244px;
                left: 470px;
                //background-image: url(../img/v2-guildmap-alley1.png);
                background-image: url(../img/v2-guildmap-mn.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
                &.block {
                  filter: grayscale(1);
                  .v2-guildmap-block {
                    display: block;
                  }
                }
              }
              .v2-guildmap-alley2 {
                width: 289px;
                height: 157px;
                position: absolute;
                bottom: -55px;
                left: -108px;
                background-image: url(../img/v2-guildmap-alley2.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
              }
              .v2-guildmap-alley3 {
                width: 224px;
                height: 158px;
                position: absolute;
                bottom: 168px;
                left: 230px;
                background-image: url(../img/v2-guildmap-fire-girl.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
                &.block {
                  filter: grayscale(1);
                  .v2-guildmap-block {
                    display: block;
                  }
                }
              }
              .v2-guildmap-alley4 {
                width: 329px;
                height: 131px;
                position: absolute;
                bottom: 92px;
                left: 24px;
                background-image: url(../img/v2-guildmap-alley4.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
              }
              .v2-guildmap-alley5 {
                width: 253px;
                height: 118px;
                position: absolute;
                bottom: 180px;
                right: 90px;
                background-image: url(../img/v2-guildmap-alley5.png);
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: 999;
              }
              .v2-guildmap-alley6-light-box {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 999;
                .v2-guildmap-alley6-light {
                  width: 13px;
                  height: 41px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  background-image: url(../img/v2-guildmap-alley6-light.png);
                  background-size: 100%;
                  background-repeat: no-repeat;
                  &.l01 {
                    top: 168px;
                    left: 316px;
                  }
                  &.l02 {
                    top: 346px;
                    left: 334px;
                  }
                  &.l03 {
                    top: 208px;
                    left: 600px;
                  }
                  &.l04 {
                    top: 290px;
                    left: 660px;
                  }
                  &.l05 {
                    top: 292px;
                    left: 750px;
                  }
                  &.l06 {
                    top: 380px;
                    left: 848px;
                  }
                  &.l07 {
                    top: 314px;
                    left: 1065px;
                  }
                  &.l08 {
                    top: 52px;
                    left: 786px;
                  }
                }
              }
            }

            .trophy-res-box-all {
              .trophy-res-box {
                &.gems {
                  &:before {
                    content: "";
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    background-image: url(../img/trophy-bonus-gems.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                }
                &.mithril {
                  left: 190px;
                  &:before {
                    content: "";
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    background-image: url(../img/trophy-bonus-mithril.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  body .main.world3 {
    .left-side {
      .left-panel {
        &.wide {
          .tab-panel-box.guild-main {
            border: solid 4px #8c76a9;
            border-top: none;
            background-color: #8c76a9;
            box-shadow: inset 0 0 0 5px #8c76a9,
              inset 0 0 6px rgba(0, 0, 0, 0.25);
            .guild-map-box-all {
              filter: hue-rotate(48deg);
              .v2-guildmap-info-box {
                .v2-guildmap-notif {
                  filter: hue-rotate(-48deg);
                }
              }
              &:before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-image: url(../img/v2-guild-darkworld-roofs-bg.png);
                z-index: 999;
                pointer-events: none;
              }
              &:after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-image: url(../img/v2-guild-darkworld-bg.png);
                z-index: 999;
                pointer-events: none;
              }
            }
            .btn-close-x {
              border: solid 4px #512d9d;
              background: linear-gradient(204deg, #c8a7ff, #9258ef, #6438b1);
              &:before {
                color: #43297b;
                text-shadow: 0 0 7px #fff, 0 0 7px #fff;
              }
            }
            .trophy-res-box-all {
              .trophy-res-box {
                &.gems {
                  &:before {
                    content: "";
                    width: 32px;
                    height: 32px;
                    position: absolute;
                    top: 1px;
                    left: 3px;
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                }
                &.mithril {
                  left: 190px;
                  &:before {
                    content: "";
                    width: 32px;
                    height: 32px;
                    position: absolute;
                    top: 1px;
                    left: 3px;
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default V2ScreenGuildMainStyles;
