import { css } from "@emotion/react";

const ScreenFortunaWinpopStyles = css`
  // winpop1
  .popup-layer .m-popup.fortuna-winpop1,
  .popup-layer .m-popup.fortuna-winpop2,
  .popup-layer .m-popup.fortuna-winpop3 {
    width: fit-content;
    height: fit-content;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 60px 10px 10px 10px;
    &:before {
      background: url(../img/ts_confirm_bk-1.jpg);
      background-size: cover;
      filter: brightness(0.6) hue-rotate(330deg) drop-shadow(0 1px 1px #fff)
        drop-shadow(0 0 5px #fff);
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.55);
    }
    &:after {
      content: "";
      width: 350px;
      height: 70px;
      position: absolute;
      left: 50%;
      top: -70px;
      transform: translateX(-50%);
      background-image: url(../img/congratulation-bg.png);
      background-position: center top;
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .title {
      color: #8f0000;
    }
    .color-box {
      overflow: unset;
      &:before {
        width: 66px;
        height: 100%;
        position: absolute;
        left: -70px;
        top: unset;
        bottom: 0;
        background-image: url(../img/unipop-bg1.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% auto;
      }
      &:after {
        width: 66px;
        height: 100%;
        position: absolute;
        left: unset;
        right: -70px;
        top: unset;
        bottom: 0;
        background-image: url(../img/unipop-bg3.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% auto;
        transform: rotate(-6deg);
      }
    }
    .info-box {
      position: relative;
      width: 300px;
      margin: 20px auto;
      padding: 10px 14px;
      font-size: 18px;
      color: #fff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      background: #c26b31;
      border-radius: 10px;
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
        0 2px 6px rgba(0, 0, 0, 0.4);
    }
    .winner-box {
      width: 500px;
      min-width: 400px;
      height: 300px;
      max-width: 396px;
      width: max-content;
      min-height: 80px;
      height: min-content;
      position: relative;
      margin: 20px 40px 0px 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      padding: 5px;
      max-height: 184px;
      overflow: hidden;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: #f4b766 #584941;
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        background-color: #584941;
      }
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 3px #796b60;
        background: linear-gradient(to right, #fff, #f5de80, #f4b766, #b26d12);
      }
      &.b1 {
        top: 0px;
        left: 0px;
      }
      .fortuna-wheel {
        width: 80px;
        height: 80px;
        position: relative;
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.6),
          0 1px 4px 1px rgba(0, 0, 0, 0.4), inset 0 0 0 2px #ff9b37;
        background: url(../img/v2-trophy-bg.jpg);
        background-size: 100%;
        background-repeat: no-repeat;
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
        .fortuna-prize {
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          position: absolute;
          top: 2px;
          left: 2px;
          border-radius: 8px;
          overflow: hidden;
          .prize-pic {
            position: absolute;
            width: 100%;
            height: auto;
            left: 0;
            top: 0;
          }
        }
        .fortuna-num {
          width: 60px;
          height: 14px;
          position: absolute;
          top: 60px;
          left: 10px;
          font-size: 14px;
          color: #2e1f08;
          font-weight: bold;
          text-shadow: 0 0 8px #fff, 0 0 10px #fff;
        }
        .fortuna-check-num {
          width: 30px;
          height: 16px;
          position: absolute;
          top: -2px;
          left: 50px;
          background: linear-gradient(0deg, #55c215 0%, #beff8f 100%);
          box-shadow: 0 2px 2px 0 rgba(#000, 0.45);
          border-radius: 10px;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          line-height: 18px;
          text-shadow: 0 1px 2px rgba(#000, 0.45);
          &.res-amount {
            width: 54px;
            height: unset;
            line-height: 18px;
            position: relative;
            top: 59px;
            left: unset;
            text-align: center;
            margin: 0 auto;
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            text-shadow: 0 1px 2px rgb(0, 0, 0), 0 1px 4px rgba(0, 0, 0, 0.6);
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
        }
        &.b1 {
          top: 0px;
          left: 0px;
        }
        &.b2 {
          top: 0px;
          left: 120px;
        }
        &.b3 {
          top: 0px;
          left: 0px;
        }
        &.b4 {
          top: 0px;
          left: 0px;
        }
        &.b5 {
          top: 0px;
          left: 0px;
        }
        &.b6 {
          top: 0px;
          left: 0px;
        }
        &.b7 {
          top: 0px;
          left: 0px;
        }
        &.b8 {
          top: 0px;
          left: 0px;
        }
        &.b9 {
          top: 0px;
          left: 0px;
        }
        &.b10 {
          top: 0px;
          left: 0px;
        }

        &.girl {
          .fortuna-check-num {
            display: none;
          }
          .fortuna-prize {
            width: 70px;
            height: 70px;
            position: absolute;
            top: 5px;
            left: 5px;
            overflow: hidden;
            border-radius: 6px;
            .prize-pic {
              width: 70px;
              height: auto;
              left: 0;
            }
          }
        }
        &.selected {
          &:before {
            filter: sepia(100%);
            transition: 300ms;
            // content: ""; background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
          }
          .fortuna-good {
            filter: sepia(100%);
            transition: 300ms;
          }
        }
        &.cheked {
          border: solid 2px #ffa;
          box-shadow: 0 0 5px #ff0, 0 0 15px #ff0, inset 0 0 5px #ffa,
            inset 0 0 15px #ff0;
        }
        &.promote {
          .fortuna-promote {
            position: absolute;
            left: -5px;
            background-image: url(../img/top-arrow.png);
            background-size: 100%;
            width: 40px;
            top: 40px;
            height: 40px;
          }
        }
        &.good {
          .fortuna-good {
            width: 90px;
            height: 90px;
            position: absolute;
            top: -5px;
            left: -5px;
            background-image: url(../img/fortuna-good.png);
            background-size: 100%;
            transition: 300ms;
          }
        }
        &.check {
          .fortuna-good {
            background-image: url(../img/fortuna-good-gold.png);
          }
        }
        &.fortune_chance {
          &.cheked {
            border: solid 2px #bfa;
            box-shadow: 0 0 5px #00ff1f, 0 0 15px #00ff1f, inset 0 0 5px #aaffb8,
              inset 0 0 15px #00ff1f;
          }
          &.selected {
            &:before,
            .fortuna-good {
              filter: sepia(100%) hue-rotate(50deg);
              transition: 300ms;
            }
          }
        }
        &.pic-star1,
        &.pic-star2,
        &.pic-star3 {
          .fortuna-num {
            display: none;
          }
          .fortuna-pic-star {
            width: 20px;
            height: 18px;
            position: relative;
            top: 56px;
            margin: 0 auto;
            background-image: url(../img/star1.png);
            background-size: 100%;
          }
        }
        &.pic-star2 {
          .fortuna-pic-star {
            width: 35px;
            background-image: url(../img/star2.png);
          }
        }
        &.pic-star3 {
          .fortuna-pic-star {
            width: 50px;
            background-image: url(../img/star3.png);
          }
        }
        &.special {
          margin: 0 140px;
          .fortuna-prize {
            z-index: 1;
          }
          &:after {
            content: "";
            position: absolute;
            background-image: url(../img/map-station-lockflare.png);
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: center;
            transition: ease-in-out 0.1s;
            animation: 8s linear 0s normal none infinite running lockflare;
            width: 130px;
            height: 130px;
            left: -25px;
            top: -25px;
            pointer-events: none;
            mix-blend-mode: plus-lighter;
          }
        }
      }
    }
    .color-btn {
      width: 180px;
      height: 50px;
      margin: 20px 0;
      .color-btn-text {
        font-size: 18px;
      }
    }
  }

  // winpop2
  .popup-layer .m-popup.fortuna-winpop2 {
    .winner-box {
      max-width: 400px;
      max-height: 190px;
      padding: 5px;
      overflow: hidden;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: #f4b766 #584941;
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        background-color: #584941;
      }
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 3px #796b60;
        background: linear-gradient(to right, #fff, #f5de80, #f4b766, #b26d12);
      }
    }
  }

  // winpop3
  .popup-layer .m-popup.fortuna-winpop3 {
    .winner-box {
      max-width: 396px;
    }
  }

  body .main.world3 .popup-layer .m-popup.fortuna-winpop1,
  body .main.world3 .popup-layer .m-popup.fortuna-winpop2,
  body .main.world3 .popup-layer .m-popup.fortuna-winpop3 {
    &:before {
      background: url(../img/ts_confirm_bk-1.jpg);
      background-size: cover;
      filter: brightness(0.6) hue-rotate(240deg) drop-shadow(0 1px 1px #fff)
        drop-shadow(0 0 5px #fff);
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.55);
    }
  }

  .hero-hint-box {
    position: absolute;
    top: 64px;
    background: linear-gradient(180deg, #dbc2ac 0%, #978577 100%);
    box-shadow: inset 0 0 0 3px #4c3e33, 0 4px 10px 0 rgba(0, 0, 0, 0.75);
    z-index: 99999;
    border-radius: 8px;
    text-align: center;
  }

  .hint-winner-box,
  .popup-layer .m-popup.fortuna-winpop3 .winner-box {
    .prize-one-box {
      width: 480px;
      height: 380px;
      position: absolute;
      background-color: rgba(255, 255, 255, 0.45);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
      left: 46px;
      .girl-box {
        width: 198px;
        height: 290px;
        position: absolute;
        top: 4px;
        margin-left: 10px;
        background: linear-gradient(
          180deg,
          #c68300 0%,
          #f4dfb6 50%,
          #c68200 70%,
          #fad489 85%,
          #c78302 100%
        );
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        .girl-prize {
          width: 190px;
          height: 282px;
          position: absolute;
          top: 4px;
          margin-left: -95px;
          border-radius: 8px;
        }
      }
      .prize-name-box {
        width: 252px;
        height: 36px;
        position: absolute;
        top: 2px;
        margin-left: -16px;
        background-image: url(../img/wpck-ram.png);
        background-size: 100%;
        font-size: 16px;
        color: #ffd200;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 26px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
        &.small {
          font-size: 12px;
          top: 270px;
          color: #fff;
        }
      }
      .prize-dps-box {
        width: 150px;
        height: 80px;
        position: absolute;
        top: 298px;
        margin-left: 6px;
        background-image: url(../img/wpck-dps.png);
        background-size: 100%;
        .prize-dps-text {
          width: 70px;
          height: 26px;
          position: absolute;
          top: 10px;
          margin-left: 70px;
          color: #a3e7fa;
          font-size: 20px;
          font-weight: bold;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
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
      .unique-skill-box-all {
        width: 220px;
        height: 380px;
        position: absolute;
        margin-left: 260px;
        .prize-name-box {
          top: 2px;
          margin-left: -16px;
        }
        .unique-skill-box {
          width: 210px;
          height: 340px;
          position: absolute;
          top: 40px;
          font-size: 0px;
          .unique-skill {
            width: 210px;
            height: 76px;
            position: relative;
            display: inline-block;
            background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
            margin-bottom: 8px;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.35);
            .skill-pic-box {
              width: 60px;
              height: 60px;
              position: absolute;
              top: 8px;
              margin-left: 8px;
              border-radius: 8px;
              background-color: #4c4c4c;
              .skill-pic {
                width: 56px;
                height: 56px;
                position: absolute;
                top: 2px;
                margin-left: -28px;
                border-radius: 6px;
              }
            }
            .skill-text-box {
              width: 120px;
              height: 60px;
              position: absolute;
              top: 8px;
              margin-left: 78px;
              display: table;
              .skill-text {
                width: 100%;
                height: 100%;
                position: relative;
                display: table-cell;
                vertical-align: middle;
                font-size: 11px;
                color: #572f14;
                font-weight: bold;
                text-transform: uppercase;
              }
            }
          }
        }
      }
    }
  }

  .sh-wheel {
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

export default ScreenFortunaWinpopStyles;
