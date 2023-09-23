import { css } from "@emotion/react";

const PopWpckEndStyles = css`
  .popup-layer .popup.wpck-end {
    width: 890px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(../img/wavepck-end-bkg.jpg);
    background-size: 910px 620px;
    background-position: center;
    border-radius: 10px;
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.6);
    .title {
      width: 900px;
      height: 60px;
      position: relative;
      top: 2px;
      margin-left: 5px;
      color: #98320d;
      font-size: 26px;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 60px;
      text-shadow: 0 0 1px #413753, 0 1px 1px #fff, 0 1px 10px #ffc;
    }
    .content-all-box {
      width: 834px;
      height: 512px;
      position: absolute;
      top: 74px;
      margin-left: 38px;
      font-size: 0px;
      .yougot {
        width: 834px;
        height: 40px;
        position: absolute;
        background: linear-gradient(
          45deg,
          #fab259 0%,
          #fae754 50%,
          #fab259 100%
        );
        color: #98320d;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 40px;
        text-shadow: 0 1px 1px #fff, 0 1px 10px #ffc;
        border-radius: 10px;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2),
          inset 0 1px 2px rgba(255, 255, 255, 0.6),
          0 1px 4px 1px rgba(0, 0, 0, 0.2);
      }
      .yougot-box-all {
        width: 860px;
        height: 380px;
        position: absolute;
        top: 48px;
        margin-left: -13px;
        .yougot-box {
          width: 270px;
          height: 380px;
          position: relative;
          display: inline-block;
          background-color: rgba(250, 180, 90, 0.45);
          margin: 0 6px 0 6px;
          border-radius: 10px;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
          &:hover {
            filter: brightness(1.1);
          }
          &:before {
            content: "";
            width: 258px;
            height: 368px;
            position: absolute;
            top: 6px;
            margin-left: -129px;
            background-color: rgba(255, 255, 255, 0.35);
            border-radius: 6px;
          }
          .prize-name-box {
            top: 14px;
            margin-left: 9px;
          }
          .girl-box {
            top: 60px;
            margin-left: 36px;
          }
          .girl-avatar-box-all {
            width: 270px;
            height: 290px;
            position: absolute;
            top: 50px;
            &.amount-5 {
              .girl-avatar-box {
                top: 0;
                margin: 5px;
              }
            }
            &.amount-1,
            &.amount-2 {
              .girl-avatar-box {
                top: 90px;
              }
            }
          }
          .prize-box-gems {
            width: 80px;
            height: 80px;
            position: absolute;
            top: 157px;
            margin-left: 44px;
            background: linear-gradient(
              180deg,
              #c68300 0%,
              #f4dfb6 50%,
              #c68200 70%,
              #fad489 85%,
              #c78302 100%
            );
            border-radius: 10px;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
            font-size: 0px;
            &.second-prize {
              margin-left: 113px;
            }
            .prize-item {
              width: 80px;
              text-align: center;
              .prize-pic {
                width: 65px;
                height: 65px;
                position: relative;
              }
            }
            .prize-text {
              top: 53px;
              position: absolute;
              width: 80px;
              color: #572f14;
              font-size: 24px;
              font-weight: bold;
              text-shadow: 0 0 10px #fff;
            }
          }
          .item-box {
            width: 80px;
            height: 80px;
            position: absolute;
            top: 157px;
            margin-left: 143px;
            background: linear-gradient(180deg, #949699, #656769);
            border-radius: 8px;
            box-shadow: inset 0 0 0 2px #cfd1d3, 0 2px 4px 0 #50463f;
            .rate.gold {
              background-image: url(../img/ic-abil-redline.png);
              font-size: 18px;
              color: #fff;
              line-height: 18px;
              text-shadow: 0 1px 3px #2f2f2f;
              width: 87px;
              height: 22px;
              position: absolute;
              top: 50px;
              left: -4px;
            }
          }
        }
      }
      .ok-all-box {
        width: 838px;
        height: 70px;
        position: absolute;
        top: 438px;
      }
    }
  }

  .ok-all-btn {
    width: 270px;
    height: 50px;
    position: relative;
    text-align: center;
    top: 10px;
    margin: auto;
    border-radius: 6px;
    cursor: pointer;
    background-color: #7cbc31;
    box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25), 0 0 6px rgba(0, 0, 0, 0.65);
    .btn-text1 {
      width: 136px;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      position: relative;
      text-transform: uppercase;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
      display: inline-block;
      top: 13px;
    }
    &:hover {
      box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25),
        0 0 6px rgba(0, 0, 0, 0.65);
      filter: brightness(1.1);
    }
    &:active {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25),
        inset 0 -2px 0 rgba(0, 0, 0, 0.25), 0 0 6px rgba(0, 0, 0, 0.25);
      .btn-text1 {
        top: 14px;
      }
    }
    &.active {
      background-color: #56a2e2;
    }
  }

  .girl-box {
    width: 198px;
    height: 290px;
    position: absolute;
    background: linear-gradient(
      180deg,
      #c68300 0%,
      #f4dfb6 50%,
      #c68200 70%,
      #fad489 85%,
      #c78302 100%
    );
    border-radius: 10px;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4),
      0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.25);
    .girl-prize {
      width: 190px;
      height: 282px;
      position: absolute;
      top: 4px;
      margin-left: -95px;
      border-radius: 6px;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    }
  }

  .girl-avatar-box {
    width: 86px;
    height: 96px;
    position: relative;
    display: inline-block;
    margin: 10px;
    top: 32px;
    .girl-avatar {
      width: 78px;
      height: 88px;
      margin-left: -39px;
      top: 4px;
    }
    .prize-promote-box {
      width: 42px;
      height: 56px;
      top: 52px;
      margin-left: -10px;
      .prize-promote-text {
        width: 42px;
        top: 4px;
        font-size: 14px;
      }
    }
  }
  .prize-promote-box {
    width: 60px;
    height: 80px;
    position: absolute;
    top: 298px;
    margin-left: 154px;
    background-image: url(../img/wpck-promote.png);
    background-size: 100%;
    .prize-promote-text {
      width: 60px;
      height: 20px;
      position: absolute;
      top: 8px;
      margin-left: 0px;
      color: #311400;
      font-size: 18px;
      font-weight: bold;
      text-shadow: 0 0 4px #fff;
    }
  }
`;

export default PopWpckEndStyles;
