import { css } from "@emotion/react";

const ScreenChangeOpenchestStyles = css`
  .popup-layer .m-popup.openchest {
    width: 880px;
    height: 490px;
    left: 160px;
    top: 75px;
    &:before {
      content: "";
      background: linear-gradient(0deg, #635042 0%, #8e8076 100%);
    }
    .title {
      color: #572f14;
    }
    .openchest-left-box,
    .openchest-right-box {
      width: 600px;
      height: 400px;
      position: absolute;
      top: 70px;
      margin-left: 20px;
      background-color: #6f5d50;
      border-radius: 10px;
      .openchest-timer-box {
        width: 570px;
        height: 50px;
        position: absolute;
        top: 8px;
        margin-left: 15px;
        background: linear-gradient(
          90deg,
          #347ca1 0%,
          #4ebbd2 50%,
          #347ca1 100%
        );
        border-radius: 6px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
        color: #fff;
        font-size: 22px;
        font-weight: bold;
        text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
        line-height: 50px;
        text-transform: uppercase;
        .openchest-timer {
          color: #b90e0e;
          position: relative;
          display: inline-block;
          margin: 0 8px 0 8px;
        }
      }
      .openchest-bonus-box-all {
        width: 578px;
        height: 246px;
        position: absolute;
        top: 66px;
        margin-left: 11px;
        font-size: 0px;
        .openchest-bonus-box {
          width: 180px;
          height: 246px;
          position: relative;
          display: inline-block;
          margin: 0 6px 0 6px;
          &.btnnone {
            .openchest-bonus-btn {
              display: none;
            }
          }
          &.free {
            .openchest-bonus-btn-none {
              display: none;
            }
            .openchest-bonus-btn.ticket,
            .openchest-bonus-btn.diamond {
              display: none;
            }
          }
          &.payments {
            .openchest-bonus-btn-none {
              display: none;
            }
            .openchest-bonus-btn.free {
              display: none;
            }
          }

          .openchest-bonus {
            width: 180px;
            height: 180px;
            position: absolute;
            top: 6px;
            background: linear-gradient(
              180deg,
              #c68300 0%,
              #f4dfb6 50%,
              #c68200 70%,
              #fad489 85%,
              #c78302 100%
            );
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
            .openchest-bonus-pic {
              width: 120px;
              height: 120px;
              position: absolute;
              top: 10px;
              margin-left: 30px;
              img {
                width: 100%;
              }
            }
            .openchest-starbox {
              width: 160px;
              height: 40px;
              position: absolute;
              top: 114px;
              background-color: rgba(255, 255, 255, 0.8);
              .star1,
              .star2,
              .star3 {
                width: 41px;
                height: 39px;
                position: relative;
                display: inline-block;
                background-image: url(../img/star1.png);
                background-size: 100%;
              }
              .star2 {
                width: 71px;
                background-image: url(../img/star2.png);
              }
              .star3 {
                width: 101px;
                background-image: url(../img/star3.png);
              }
            }
            .openchest-bonus-count {
              width: auto;
              height: 30px;
              position: relative;
              top: 124px;
              left: 50%;
              transform: translateX(-50%);
              color: #572f14;
              font-size: 36px;
              font-weight: bold;
              text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
              text-align: center;
            }
          }
          .openchest-bonus-btn-none {
            width: 180px;
            height: 40px;
            position: absolute;
            top: 200px;
            background-color: #645143;
            border-radius: 6px;
          }
          .openchest-bonus {
            &.picture {
              .openchest-bonus-pic {
                width: 160px;
                height: 160px;
                margin-left: 10px;
                overflow: hidden;
                border-radius: 10px;
              }
              .openchest-pic {
                height: 160px;
                width: auto;
              }
              .openchest-bonus-count {
                display: none;
              }
            }
            &.chest {
              .openchest-bonus-pic {
                width: 150px;
                height: 150px;
                margin-left: 15px;
                top: 15px;
                .openchest-pic-chest {
                  width: 150px;
                  height: 150px;
                  position: absolute;
                  background-image: url(../img/change-sun1.png);
                  background-size: 100%;
                }
              }
            }
            &.open {
              .openchest-pic-chest {
                animation: anim-change-chest 0.35s linear 10ms forwards;
                background-image: url(../img/change-sun1.png);
                background-size: 100%;
              }
            }
            &.close {
              .openchest-pic-chest {
                animation: anim-close-chest 0.45s linear 1s forwards;
                background-image: url(../img/change-sun3.png);
                background-size: 100%;
              }
            }
            @keyframes anim-change-chest {
              0% {
                background-image: url(../img/change-sun1.png);
              }
              50% {
                background-image: url(../img/change-sun2.png);
              }
              100% {
                background-image: url(../img/change-sun3.png);
              }
            }
            @keyframes anim-close-chest {
              0% {
                transform: scale(1);
                opacity: 1;
              }
              50% {
                transform: scale(0.75);
                opacity: 0.5;
              }
              100% {
                transform: scale(0.5);
                opacity: 0;
              }
            }
          }

          .openchest-bonus-btn {
            width: 180px;
            height: 40px;
            position: absolute;
            top: 200px;
            border-radius: 6px;
            background-color: #7cbc30;
            box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.3), 0 1px 8px #3b3129;
            cursor: pointer;
            &:hover {
              filter: brightness(1.1);
            }
            .btn-text {
              text-align: center;
              font-size: 16px;
              font-weight: bold;
              color: #fff;
              position: relative;
              text-transform: uppercase;
              top: 10px;
              text-shadow: 0 1px 2px #614f19;
            }
            &:active {
              box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25),
                inset 0 -2px 0 rgba(0, 0, 0, 0.25);
              .btn-text {
                top: 11px;
              }
            }
            &.ticket,
            &.diamond {
              width: 86px;
              .btn-text {
                font-size: 20px;
                top: -6px;
                position: relative;
                display: inline-block;
              }
              &:active {
                .btn-text {
                  top: -5px;
                }
                .ic-ticket,
                .ic-diamond {
                  top: 3px;
                }
              }
              .ic-ticket,
              .ic-diamond {
                width: 30px;
                height: 30px;
                top: 2px;
                margin: 0 0 0 2px;
                position: relative;
                display: inline-block;
                background-image: url(../img/ico-ticket.png);
                background-size: 100%;
              }
              .ic-diamond {
                background-image: url(../img/v2-res-diamond.png);
              }
            }
            &.diamond {
              margin-left: 94px;
              background: linear-gradient(0deg, #4b97bf 0%, #7ae2ff 100%);
            }
            &.free {
              background-color: #7cbc30;
            }
          }
        }
      }
      .openchest-close-box {
        width: 570px;
        height: 70px;
        position: absolute;
        top: 320px;
        margin-left: 15px;
        background-color: #645143;
        border-radius: 6px;
        .openchest-btn-close {
          width: 180px;
          height: 50px;
          position: relative;
          top: 10px;
          margin: 0 14px 0 14px;
          display: inline-block;
          border-radius: 6px;
          background-color: #e3be4f;
          box-shadow: inset 0 -4px 0 #9c8336, 0 1px 8px #3b3129;
          cursor: pointer;
          &:hover {
            filter: brightness(1.1);
          }
          .btn-text {
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            position: relative;
            text-transform: uppercase;
            top: 14px;
            text-shadow: 0 1px 2px #614f19;
          }
          &:active {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25),
              inset 0 -2px 0 rgba(0, 0, 0, 0.25);
            .btn-text {
              top: 16px;
            }
          }
        }
      }
    }
    .openchest-right-box {
      width: 230px;
      margin-left: 630px;
      .openchest-name-box {
        width: 256px;
        height: 36px;
        position: absolute;
        top: 210px;
        margin-left: -13px;
        background-image: url(../img/wpck-ram.png);
        background-size: 100%;
        .openchest-name {
          width: 240px;
          height: 36px;
          position: relative;
          margin: 0 auto;
          color: #fff;
          font-weight: bold;
          font-size: 16px;
          text-transform: uppercase;
          line-height: 28px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        }
        &.big {
          height: 56px;
          background-image: url(../img/wpck-ram1.png);
          top: 10px;
          .openchest-name {
            line-height: 16px;
            top: 8px;
          }
        }
      }
      .openchest-guaranted-box {
        width: 230px;
        height: 106px;
        position: absolute;
        top: 80px;
        left: 0px;
        font-size: 0px;
        .openchest-in {
          width: 100px;
          height: 100px;
          .openchest-bonus-pic {
            width: 80px;
            height: 80px;
            top: 10px;
            left: 10px;
          }
          .openchest-pic {
            height: 80px;
          }
        }
      }
      .openchest-in-all-box {
        width: 230px;
        height: 150px;
        position: absolute;
        top: 245px;
        left: 0px;
        font-size: 0px;
        .openchest-in {
          width: 70px;
          height: 70px;
          position: relative;
          display: inline-block;
          background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
          margin: 2px;
          border-radius: 10px;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);
          .inchest-pic {
            width: 80px;
            height: 80px;
            position: absolute;
            top: 0px;
            margin-left: -40px;
          }
          .openchest-in-count {
            width: 100%;
            height: 26px;
            position: absolute;
            top: 72px;
            text-align: center;
            color: #572f14;
            font-size: 18px;
            font-weight: bold;
            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
          }
          .openchest-in-check {
            width: 70px;
            height: 70px;
            position: absolute;
            background-image: url(../img/paycheck.png);
            background-size: 100%;
            display: none;
          }
          .openchest-bonus-pic {
            width: 60px;
            height: 60px;
            left: 5px;
            overflow: hidden;
            top: 5px;
            border-radius: 8px;
            position: absolute;
            display: none;
          }
          .openchest-pic {
            height: 60px;
          }
          &.check {
            .openchest-in-check {
              display: block;
            }
          }
          &.picture {
            .inchest-pic {
              display: none;
            }
            .openchest-in-count {
              display: none;
            }
            .openchest-bonus-pic {
              display: block;
            }
          }
        }
      }
      .openchest-btn-info.left {
        width: 86px;
        height: 40px;
        position: absolute;
        top: 335px;
        margin-left: 72px;
        cursor: pointer;
        display: none;
        background-image: url(../img/info-btn-left.png);
        background-size: 100%;
        &:hover {
          filter: brightness(1.1);
        }
        &:active {
          top: 336px;
        }
      }
      .openchest-info {
        width: 190px;
        height: 240px;
        position: relative;
        top: 50px;
        left: 20px;
        color: #fff;
        font-size: 14px;
        text-align: left;
        display: none;
      }
      &.info {
        .openchest-in-all-box {
          display: none;
        }
        .openchest-btn-info.left {
          display: block;
        }
        .openchest-btn-info.right {
          display: none;
        }
        .openchest-info {
          display: block;
        }
        .openchest-guaranted-box {
          display: none;
        }
        .openchest-name-box {
          display: none;
        }
      }
    }
    .openchest-btn-back {
      width: 86px;
      height: 40px;
      position: absolute;
      top: 15px;
      left: 0;
      background-image: url(../img/back-btn.png);
      background-size: 100%;
      cursor: pointer;
      &:hover {
        filter: brightness(1.1);
      }
      &:active {
        margin-top: 1px;
      }
      &:before {
        position: absolute;
        top: 0;
        left: 32px;
        content: "BACK";
        color: #395f12;
        font-size: 16px;
        font-weight: 700;
        line-height: 36px;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
      }
    }
  }

  .openchest-btn-info {
    width: 86px;
    height: 40px;
    position: absolute;
    top: 15px;
    margin-left: 485px;
    cursor: pointer;
    &:hover {
      filter: brightness(1.1);
    }
    &:active {
      top: 16px;
    }
    &.right {
      background-image: url(../img/info-btn-right.png);
      background-size: 100%;
    }
    &.left {
      background-image: url(../img/info-btn-left.png);
      background-size: 100%;
    }
  }

  .openchest-in {
    width: 70px;
    height: 70px;
    position: relative;
    display: inline-block;
    background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
    margin: 2px;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);
    .inchest-pic {
      width: 80px;
      height: 80px;
      position: absolute;
      top: 0px;
      margin-left: -40px;
    }
    .openchest-in-count {
      width: 100%;
      height: 26px;
      position: absolute;
      top: 72px;
      text-align: center;
      color: #572f14;
      font-size: 18px;
      font-weight: bold;
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
    }
    .openchest-in-check {
      width: 70px;
      height: 70px;
      position: absolute;
      background-image: url(../img/paycheck.png);
      background-size: 100%;
      display: none;
    }
    .openchest-bonus-pic {
      width: 60px;
      height: 60px;
      left: 5px;
      overflow: hidden;
      top: 5px;
      border-radius: 8px;
      position: absolute;
      display: none;
    }
    .openchest-pic {
      height: 60px;
    }
    &.check {
      .openchest-in-check {
        display: block;
      }
    }
    &.picture {
      .inchest-pic {
        display: none;
      }
      .openchest-in-count {
        display: none;
      }
      .openchest-bonus-pic {
        display: block;
      }
    }
  }
`;

export default ScreenChangeOpenchestStyles;
