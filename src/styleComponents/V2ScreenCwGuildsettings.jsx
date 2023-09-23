import { css } from "@emotion/react";

const V2ScreenCwGuildsettingsStyles = css`
  .popup-layer .m-popup.guildsettings {
    width: 590px;
    height: 590px;
    left: 305px;
    top: 25px;
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
    .cw-clan-settings-box-all {
      width: 530px;
      height: 430px;
      position: absolute;
      top: 80px;
      left: 30px;
      background-color: #cbaa81;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
      .cw-clan-settings-name-box {
        width: 460px;
        height: 30px;
        position: absolute;
        top: 50px;
        left: 35px;
        .cw-clan-settings-name {
          width: 460px;
          height: 30px;
          position: absolute;
          background-color: #fff;
          color: #544746;
          font-size: 18px;
          font-weight: bold;
          line-height: 30px;
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.35);
        }
        .cw-clan-edit {
          width: 440px;
          height: 30px;
          position: absolute;
          left: 10px;
          text-transform: capitalize;
          border: none;
          background-color: rgba(255, 255, 255, 0);
          line-height: 30px;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
          text-align: center;
          font-size: 18px;
          color: #544746;
        }
        .cw-clan-settings-name-btn {
          width: 34px;
          height: 34px;
          position: absolute;
          top: -2px;
          right: 0;
          cursor: pointer;
          background-image: url(../img/btn-edit-small.png);
          background-size: 100%;
          &:active {
            top: -1px;
          }
        }
      }
      .cw-clan-settings-clanlogo-box-all {
        width: 460px;
        height: 170px;
        position: absolute;
        top: 90px;
        left: 35px;
        background-color: #d8bb96;
        .cw-clan-logo-box {
          cursor: pointer;
          width: 104px;
          height: 104px;
          position: absolute;
          top: 10px;
          left: 178px;
          background: linear-gradient(0deg, #347ca1, #4db9d0 100%);
          border-radius: 100%;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
          &:before {
            content: "";
            width: 100px;
            height: 100px;
            position: absolute;
            top: 2px;
            left: 2px;
            background-color: #fff;
            border-radius: 100%;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.15);
          }
          .cw-clan-logo-bg,
          .cw-clan-logo {
            width: 80px;
            height: 80px;
            top: 12px;
            left: 12px;
            img {
              width: 80px;
            }
            .cw-clan-logo {
              top: 0;
              left: 0;
            }
          }
        }
        .color-btn.choose {
          width: 120px;
          height: 30px;
          top: 125px;
          .color-btn-text {
            top: 5px;
          }
          &:active {
            .color-btn-text {
              top: 6px;
            }
          }
        }
      }
      .cw-clan-settings-text-box {
        width: 460px;
        height: 100px;
        position: absolute;
        bottom: 10px;
        left: 35px;
        display: table;
        background-color: #fff;
        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.35);
        .cw-clan-settings-text {
          width: 440px;
          height: auto;
          position: relative;
          display: table-cell;
          vertical-align: middle;
          padding: 0 20px;
          color: #544746;
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
    .color-btn.disband {
      width: 180px;
      top: 525px;
      left: 95px;
      background: linear-gradient(0deg, #9a1f39 0%, #f6547a 100%);
      .color-btn-text {
        font-size: 16px;
        top: 12px;
      }
      &:active {
        box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
          inset 0 2px 2px rgba(0, 0, 0, 0.2);
        .color-btn-text {
          top: 13px;
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
    &.diamond {
      background: linear-gradient(0deg, #4b97bf 0%, #7ae2ff 100%);
    }
  }

  .cw-clan-settings-name-title {
    position: absolute;
    top: 15px;
    width: 100%;
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    /* color: #572f14; */
    font-weight: bold;
  }

  .cw-clan-settings-descr-title {
    position: absolute;
    top: 280px;
    width: 100%;
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
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

  .color-btn.greate {
    width: 180px;
    height: 40px;
    position: absolute;
    bottom: 25px;
    left: 105px;
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

  .cw-clan-descr {
    width: 100%;
    height: 85px;
    border: none;
  }
`;

export default V2ScreenCwGuildsettingsStyles;
