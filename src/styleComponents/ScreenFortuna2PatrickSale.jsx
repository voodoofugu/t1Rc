import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
  .popup-layer .m-popup.fortuna-main.patrick-sale {
    width: 970px;
    height: 600px;
    left: 27px;
    top: 20px;
    background: linear-gradient(-22deg, #70c03a 0%, #348200 50%, #70c03a 100%);
    &:before {
      content: "";
      background-image: url(../img/sv-sale-bg2.jpg);
      background-size: 100%;
    }
    .title {
      background: linear-gradient(90deg, #70c03a 0%, #348200 50%, #70c03a 100%);
      border: solid 4px #4cdb05;
      color: #fff;
      box-shadow: 0 1px 10px #392d26, inset 0 2px 10px rgba(255, 255, 255, 0.35),
        inset 0 28px 5px rgba(255, 255, 0, 0.15);
    }
    .btn-close-x {
      background: linear-gradient(22deg, #70c03a, #70c03a, #348200, #70c03a);
      border: solid 4px #4cdb05;
    }
    .sv-sale-pack-box {
      width: 460px;
      height: 512px;
      position: absolute;
      top: 70px;
      left: 18px;
      border-radius: 8px;
      background-color: rgba(92, 168, 36, 0.35);

      .lhero-box {
        width: 250px;
        height: 420px;
        position: absolute;
        top: 10px;
        left: 10px;
        background: linear-gradient(
          0deg,
          #8e7453 0%,
          #e3c7a3 50%,
          #8f7553 70%,
          #ae916a 85%,
          #8e7453 100%
        );
        border-radius: 10px;
        box-shadow: 0 0 6px #48382b;
        .lhero-pic {
          width: 242px;
          height: 360px;
          background-color: red;
          position: absolute;
          top: 55px;
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
          height: 55px;
          position: absolute;
          background: linear-gradient(
            180deg,
            #a1a4a6 0%,
            #d5d8da 85%,
            #a1a4a6 86%,
            #8d9092 100%
          );
          border-radius: 10px 10px 0 0;
          box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
          .sh2-icon.left {
            width: 38px;
            height: 49px;
            position: absolute;
            top: 2px;
            left: 6px;
            img {
              width: 38px;
            }
          }
          .sh2-icon-forgirl.right {
            width: 38px;
            height: 49px;
            position: absolute;
            top: 2px;
            left: 206px;
            img {
              width: 38px;
            }
          }
          .lhero-name-box {
            width: 166px;
            height: 47px;
            position: absolute;
            left: 42px;
            display: table;
            .lhero-name {
              display: table-cell;
              vertical-align: middle;
              color: #fff;
              text-shadow: 0 1px 8px #000;
              font-size: 16px;
              font-weight: bold;
              text-align: center;
            }
          }
        }
        .bottom-star-box-girl-count-box {
          width: 250px;
          height: 34px;
          position: absolute;
          top: 382px;
          left: 0;
          background: linear-gradient(
            180deg,
            #8e7453 0%,
            #e3c7a3 50%,
            #8f7553 70%,
            #ae916a 85%,
            #8f7553 100%
          );
          .sh2-prgbar-all {
            width: 202px;
            height: 34px;
            position: absolute;
            top: 0;
            left: 48px;
            background: linear-gradient(0deg, #735657 0%, #453434 100%);
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
            .sh2-prgbar {
              width: 85%;
              height: 34px;
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
              width: 202px;
              height: 34px;
              position: relative;
              text-align: center;
              color: #fff;
              font-weight: bold;
              font-size: 20px;
              text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
              line-height: 34px;
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
            top: -2px;
            left: 5px;
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
            box-shadow: 0 4px 2px rgba(0, 0, 0, 0.35);
            .girl-bonus-pic {
              width: 34px;
              height: 34px;
              position: absolute;
              top: 3px;
              left: 3px;
              overflow: hidden;
              border-radius: 100%;
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
            height: 41px;
            position: absolute;
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
              line-height: 18px;
              background-color: #705d4e;
            }
            .bonus-lvl-box-bonus-box {
              width: 100%;
              height: 42px;
              position: absolute;
              top: 18px;
              display: table;
              background-color: #a69283;
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
              left: 120px;
            }
          }
        }
      }
      .sh2-girl-lock {
        width: 250px;
        height: 494px;
        position: absolute;
        top: 0;
        left: 200px;
        display: none;
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
      .sv-sale-btn-box {
        width: 250px;
        height: 66px;
        position: absolute;
        top: 438px;
        left: 10px;
        background-color: rgba(16, 89, 4, 0.55);
      }
      .store-button {
        width: 170px;
        height: 42px;
        position: relative;
        text-align: center;
        top: 12px;
        background: linear-gradient(45deg, #e8c34e, #f1da7c, #cfa831, #fbf1d8);
        border-radius: 8px;
        box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
          inset 0 -3px 0px #c87725, 0 0 3px #3d3737, 0 0 4px #000,
          inset 0 0 3px #603806;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
        color: #4a3a08;
        text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
        line-height: 42px;
        margin: auto;
        &:active {
          top: 13px;
        }
        &:hover {
          box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
            inset 0 -3px 0 #c87725, 0 0 12px #ff0, 0 0 5px #ffc,
            inset 0 0 10px #ffc, inset 0 0 3px #603806;
        }
        .but-price {
          position: relative;
          display: inline-block;
          margin: 0 2px 0 2px;
          font-size: 24px;
          &.old {
            color: #ef0000;
            text-decoration: line-through;
            font-size: 16px;
            top: -2px;
          }
        }
        &.one,
        &.two {
          filter: grayscale(100%);
          cursor: no-drop;
        }
      }
      .sv-reward-box-all {
        width: 150px;
        height: 190px;
        position: absolute;
        top: 316px;
        left: 286px;
        .sv-reward-box {
          width: 90px;
          height: 90px;
          position: relative;
          display: inline-block;
          background: linear-gradient(
            180deg,
            #c68300 0%,
            #f4dfb6 50%,
            #c68200 70%,
            #fad489 85%,
            #c78302 100%
          );
          border-radius: 8px;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
          &:before {
            content: "";
            width: 86px;
            height: 86px;
            position: absolute;
            top: 2px;
            left: 2px;
            background: linear-gradient(0deg, #7e7f80 0%, #dee0e3 100%);
            box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.35);
            filter: sepia(100%);
            border-radius: 6px;
          }
          .sv-reward-pic {
            width: 80px;
            height: 80px;
            position: absolute;
            top: 5px;
            left: 5px;
            overflow: hidden;
            border-radius: 6px;
            img {
              width: 80px;
            }
          }
          .sv-reward-count {
            width: 40px;
            height: 24px;
            position: absolute;
            top: 65px;
            left: 49px;
            background: linear-gradient(
              0deg,
              #996b1d 0%,
              #e5ca72 50%,
              #996b1d 100%
            );
            border-radius: 10px;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            line-height: 24px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
          }
        }
      }
      &.next {
        left: 492px;
        .lhero-box {
          left: 200px;
        }
        .sv-sale-btn-box {
          left: 200px;
        }
        .sv-reward-box-all {
          width: 190px;
          left: 5px;
        }
      }
      &.block {
        .sh2-girl-lock {
          display: block;
          top: 10px;
        }
      }
    }
    .sv-sale-heart-box-all {
      width: 400px;
      height: 300px;
      position: absolute;
      top: 80px;
      left: 285px;
      .sv-heart-left {
        width: 200px;
        height: 300px;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(../img/pt-h-bg1.png);
        background-size: 100%;
        &:before {
          content: "";
          width: 200px;
          height: 300px;
          position: absolute;
          top: 0;
          left: 0;
          background-image: url(../img/pt-h-bg1-1.png);
          background-size: 100%;
        }
      }
      .sv-heart-right {
        width: 200px;
        height: 300px;
        position: absolute;
        top: 0;
        left: 200px;
        background-image: url(../img/pt-h-bg2.png);
        background-size: 100%;
        &:before {
          content: "";
          width: 200px;
          height: 300px;
          position: absolute;
          top: 0;
          left: 0;
          background-image: url(../img/pt-h-bg2-1.png);
          background-size: 100%;
        }
      }
      .sv-chain1 {
        width: 400px;
        height: 300px;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(../img/pt-h-chain-1.png);
        background-size: 100%;
      }
      .sv-chain2 {
        width: 400px;
        height: 300px;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(../img/pt-h-chain-2.png);
        background-size: 100%;
      }
      .sv-reward-box {
        width: 90px;
        height: 90px;
        position: absolute;
        top: 100px;
        left: 155px;
        background: linear-gradient(
          180deg,
          #c68300 0%,
          #f4dfb6 50%,
          #c68200 70%,
          #fad489 85%,
          #c78302 100%
        );
        border-radius: 8px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
        &:before {
          content: "";
          width: 86px;
          height: 86px;
          position: absolute;
          top: 2px;
          left: 2px;
          background: linear-gradient(0deg, #7e7f80 0%, #dee0e3 100%);
          box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.35);
          filter: sepia(100%);
          border-radius: 6px;
        }
        .sv-reward-pic {
          width: 80px;
          height: 80px;
          position: absolute;
          top: 5px;
          left: 5px;
          overflow: hidden;
          border-radius: 6px;
          img {
            width: 80px;
          }
        }
        .sv-reward-count {
          width: 40px;
          height: 24px;
          position: absolute;
          top: 65px;
          left: 49px;
          background: linear-gradient(
            0deg,
            #996b1d 0%,
            #e5ca72 50%,
            #996b1d 100%
          );
          border-radius: 10px;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
          line-height: 24px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
        }
        .sv-reward-block {
          width: 100px;
          height: 43px;
          position: absolute;
          top: 30px;
          left: -5px;
          background-image: url(../img/legendary-lock.png);
          background-size: 100%;
        }
      }
      &.one {
        .sv-heart-left {
          background-image: url(../img/pt-h-bg1-g.png);
          &:before {
            content: "";
            background-image: url(../img/pt-h-bg1-1-g.png);
          }
        }
        .sv-chain1 {
          display: none;
        }
      }
      &.two {
        .sv-heart-right {
          background-image: url(../img/pt-h-bg2-g.png);
          &:before {
            content: "";
            background-image: url(../img/pt-h-bg2-1-g.png);
          }
        }
        .sv-chain2 {
          display: none;
        }
        .sv-reward-block {
          display: none;
        }
      }
    }
  }

  .wpck-timer-box {
    width: 184px;
    height: 84px;
    position: absolute;
    top: -10px;
    margin-left: -10px;
    background-image: url(../img/timer-back.png);
    background-size: 100%;
    .time-left,
    .time-sec {
      width: 150px;
      height: 26px;
      position: absolute;
      top: 18px;
      margin-left: 18px;
      color: #fff000;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
    }
    .time-sec {
      top: 34px;
      color: #fff;
      font-size: 24px;
    }
  }
`;

export { stylesFileName, pageStyles };
