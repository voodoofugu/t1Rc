import { styled, css } from "styled-components";

const ScreenFortuna2MainMAINStyles = css`
  .popup-layer .m-popup.fortuna-main-2 {
    width: 888px;
    height: 600px;
    left: 72px;
    top: 20px;
    &:before {
      content: "";
      background: linear-gradient(
        136deg,
        #8e7453 0%,
        #e3c7a3 50%,
        #ae916a 85%,
        #8f7553 100%
      );
    }
    .title {
      color: #572f14;
    }
    .end-banner {
      display: inline-block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(222, 222, 222, 0.55);
      border-radius: 10px;
      p {
        margin: 0;
        padding: 0;
        display: block;
        height: 30px;
        position: absolute;
        left: 20px;
        right: 20px;
        top: calc(50% - 15px);
        border-radius: 10px;
        border: solid 2px #500;
        line-height: 30px;
        font-size: 18px;
        font-weight: bold;
        color: #500;
        box-shadow: inset 0 0 10px #500, 0 0 10px #500;
        text-shadow: 0 0 5px #fff;
        transform: rotate(-10deg);
      }
    }
    .fortuna-main-box {
      width: 860px;
      height: 520px;
      position: absolute;
      top: 65px;
      left: 14px;
      .fortuna-wheel-box {
        width: 852px;
        height: 512px;
        position: absolute;
        top: 4px;
        left: 4px;
        font-size: 0px;
        .fortuna-wheel {
          width: 80px;
          height: 80px;
          position: absolute;
          cursor: pointer;
          background: linear-gradient(
            180deg,
            #585a5c 0%,
            #d5d8da 50%,
            #585a5b 70%,
            #a1a4a6 85%,
            #585a5b 100%
          );
          border-radius: 6px;
          box-shadow: 0 1px 2px 0 rgba(#000, 0.45);
          &:before {
            content: "";
            width: 76px;
            height: 76px;
            position: absolute;
            top: 2px;
            left: 2px;
            background: linear-gradient(0deg, #7e7f80 0%, #dee0e3 100%);
            border-radius: 6px;
            box-shadow: inset 0 0 6px 0 rgba(#000, 0.55);
            transition: 300ms;
          }
          .fortuna-prize {
            width: 60px;
            height: 60px;
            position: absolute;
            top: 3px;
            left: 10px;
            .prize-pic {
              position: absolute;
              width: 80px;
              left: -11px;
              height: 80px;
              top: -3px;
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
              background: linear-gradient(
                0deg,
                #f2cd1b 0%,
                #ffe6d3 100%
              );
              top: 61px;
              left: 37px;
              border-radius: 5px;
              width: 40px;
            }
          }
          .fortuna-ds-box-all {
            width: 80px;
            height: 80px;
            position: absolute;
            top: 0;
            left: 0;
            visibility: hidden;
            border-radius: 6px;
            background: linear-gradient(
              0deg,
              #996b1d 0%,
              #e5ca72 50%,
              #996b1d 100%
            );
            .fortuna-ds-box {
              width: 74px;
              height: 74px;
              position: absolute;
              top: 3px;
              left: 3px;
              display: table;
              .fortuna-ds-text {
                width: 100%;
                height: auto;
                position: relative;
                display: table-cell;
                vertical-align: middle;
                color: #fff;
                font-size: 12px;
                font-weight: bold;
                text-shadow: 0 1px 2px rgba(#000, 0.45);
                text-transform: uppercase;
              }
            }
          }
          &.b1 {
            top: 0px;
            left: 0px;
          }
          &.b2 {
            top: 0px;
            left: 84px;
          }
          &.b3 {
            top: 0px;
            left: 170px;
          }
          &.b4 {
            top: 0px;
            left: 256px;
          }
          &.b5 {
            top: 0px;
            left: 342px;
          }
          &.b6 {
            top: 0px;
            left: 428px;
          }
          &.b7 {
            top: 0px;
            left: 514px;
          }
          &.b8 {
            top: 0px;
            left: 600px;
          }
          &.b9 {
            top: 0px;
            left: 686px;
          }
          &.b10 {
            top: 0px;
            left: 772px;
          }
          &.b11 {
            top: 84px;
            left: 772px;
          }
          &.b12 {
            top: 170px;
            left: 772px;
          }
          &.b13 {
            top: 256px;
            left: 772px;
          }
          &.b14 {
            top: 342px;
            left: 772px;
          }
          &.b15 {
            top: 428px;
            left: 772px;
          }
          &.b16 {
            top: 428px;
            left: 686px;
          }
          &.b17 {
            top: 428px;
            left: 600px;
          }
          &.b18 {
            top: 428px;
            left: 514px;
          }
          &.b19 {
            top: 428px;
            left: 428px;
          }
          &.b20 {
            top: 428px;
            left: 342px;
          }
          &.b21 {
            top: 428px;
            left: 256px;
          }
          &.b22 {
            top: 428px;
            left: 170px;
          }
          &.b23 {
            top: 428px;
            left: 84px;
          }
          &.b24 {
            top: 428px;
            left: 0px;
          }
          &.b25 {
            top: 342px;
            left: 0px;
          }
          &.b26 {
            top: 256px;
            left: 0px;
          }
          &.b27 {
            top: 170px;
            left: 0px;
          }
          &.b28 {
            top: 84px;
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
              box-shadow: 0 0 5px #00ff1f, 0 0 15px #00ff1f,
                inset 0 0 5px #aaffb8, inset 0 0 15px #00ff1f;
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
          &.doublespin {
            .fortuna-ds-box-all {
              visibility: visible;
            }
          }
        }
      }

      .fortuna-main-center-box {
        width: 682px;
        height: 338px;
        position: absolute;
        top: 89px;
        margin-left: 89px;
        background-color: rgba(#786659, 0.75);
        border-radius: 8px;
        box-shadow: inset 0 0 6px 0 rgba(#000, 0.35);
        .fortuna-prgbar-box {
          width: 660px;
          height: 330px;
          position: absolute;
          top: 4px;
          left: 12px;
          background-image: url(../img/fortuna-prg-bg2.png);
          background-size: 100%;
          .f2-prgbar-empty,
          .f2-prgbar-full {
            width: 350px;
            height: 50px;
            position: absolute;
            top: 42px;
            left: 14px;
            background-image: url(../img/prg-bar-f1-empty.jpg);
            background-size: 350px 100%;
            .f2-prgbar-full {
              background-image: url(../img/prg-bar-f1-full.jpg);
              top: 0;
              left: 0;
              transition: width 0.5s ease;
              background-position: center left;
            }
            .f2-prgbar-text {
              width: 350px;
              height: 50px;
              position: relative;
              text-align: center;
              color: #fff;
              font-weight: bold;
              font-size: 20px;
              text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
              line-height: 50px;
              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
            }
          }
          .fortuna-reward-txt {
            width: 350px;
            height: auto;
            position: relative;
            top: 12px;
            left: 14px;
            color: #fff;
            font-size: 20px;
            text-transform: uppercase;
            text-shadow: 0 1px 2px rgba(#000, 0.45);
          }
        }
        .fortuna-reward-box-all {
          width: 354px;
          height: 80px;
          position: absolute;
          top: 100px;
          left: 25px;
          font-size: 0px;
          .fortuna-reward-box {
            width: 55px;
            height: 80px;
            position: relative;
            display: inline-block;
            margin: 0 2px 0 2px;
            .fortuna-reward-bg {
              width: 55px;
              height: 55px;
              position: absolute;
              top: 0;
              left: 0;
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
              img {
                width: 50px;
                position: absolute;
                top: 2px;
                left: 2px;
              }
            }
            .fortuna-reward-claim-pts {
              width: 55px;
              height: 20px;
              position: absolute;
              top: 60px;
              left: 0;
              background: linear-gradient(
                0deg,
                #e9b039 0%,
                #fffe9a 100%
              );
              box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
              color: #000;
              font-size: 14px;
              font-weight: bold;
              line-height: 22px;
            }
            .fortuna-check-num {
              width: 30px;
              height: 16px;
              position: absolute;
              top: -2px;
              left: 50px;
              background: linear-gradient(
                0deg,
                #55c215 0%,
                #beff8f 100%
              );
              box-shadow: 0 2px 2px 0 rgba(#000, 0.45);
              border-radius: 10px;
              color: #fff;
              font-size: 14px;
              font-weight: bold;
              line-height: 18px;
              text-shadow: 0 1px 2px rgba(#000, 0.45);
              &.res-amount {
                background: linear-gradient(
                  0deg,
                  #f2cd1b 0%,
                  #ffe6d3 100%
                );
                border-radius: 5px;
                top: 39px;
                width: 55px;
                left: 0px;
              }
            }
            .fortuna-reward-claim-btn {
              width: 50px;
              height: 22px;
              position: relative;
              top: 56px;
              left: 0px;
              cursor: pointer;
              display: inline-block;
              margin: 2px;
              visibility: hidden;
              background: linear-gradient(
                0deg,
                #7cbc30 0%,
                #bbee7f 100%
              );
              border-radius: 8px;
              box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.15),
                0 2px 0 rgba(0, 0, 0, 0.25);
              color: #000;
              font-size: 12px;
              font-weight: bold;
              line-height: 22px;
              text-transform: uppercase;
              &:active {
                top: 57px;
              }
            }
            .fortuna-promote {
              position: absolute;
              background-image: url(../img/top-arrow.png);
              background-size: 100%;
              width: 40px;
              height: 40px;
              left: -10px;
              top: 14px;
            }
            .fortuna-reward-claim {
              width: 55px;
              height: 80px;
              position: absolute;
              top: 0px;
              left: 0;
              background-color: rgba(0, 0, 0, 0.75);
              display: none;
              .fortuna-reward-claim-text {
                width: 100%;
                height: auto;
                position: absolute;
                top: 0;
                left: 0;
                text-transform: uppercase;
                color: #fff;
                font-size: 8px;
                font-weight: bold;
                line-height: 80px;
              }
            }
            &.claim-btn {
              .fortuna-reward-claim-btn {
                visibility: visible;
              }
              .fortuna-reward-claim-pts {
                visibility: hidden;
              }
            }
            &.claim {
              .fortuna-reward-claim {
                display: block;
              }
            }
          }
        }
        .fortuna-rules {
          width: 280px;
          height: 308px;
          position: absolute;
          top: 15px;
          left: 382px;
          background-color: rgba(100, 50, 10, 0.35);
          .rules-name {
            width: 100%;
            height: 20px;
            position: relative;
            top: 8px;
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            text-shadow: 0 1px 2px rgba(#000, 0.45);
            text-transform: uppercase;
          }
          .rules-text {
            white-space: pre-wrap;
            line-height: 21px;
            width: 260px;
            height: 220px;
            position: relative;
            top: 20px;
            color: #e9e2dc;
            font-size: 20px;
            margin: 0 auto;
            text-align: left;
          }
        }
        .fortuna-btn-box {
          width: 220px;
          height: 120px;
          position: absolute;
          top: 186px;
          left: 90px;
          font-size: 0px;
          .btn-box {
            position: relative;
            display: inline-block;
            width: 124px;
            height: 56px;
            top: 0;
            margin: 0 40px;
            background: linear-gradient(
              180deg,
              #a3260a 0%,
              #750405 100%
            );
            -webkit-border-radius: 6px;
            -moz-border-radius: 6px;
            -ms-border-radius: 6px;
            -o-border-radius: 6px;
            border-radius: 6px;
            box-shadow: 0 2px 4px 0 #3f3732;
            .btn-buy {
              right: 8px;
            }
          }
          .color-btn {
            width: 210px;
            height: 50px;
            margin: 8px;
            .color-btn-text {
              font-size: 16px;
              &:active {
                .color-btn-text {
                  top: 11px;
                }
              }
            }
            .f-diamond,
            .ff-but {
              &:before {
                content: "";
                width: 30px;
                height: 30px;
                position: relative;
                display: inline-block;
                background-image: url(../img/diamond@1x.png);
                background-size: 100%;
                margin: 0 4px 0 4px;
                vertical-align: middle;
              }
            }
            .f-heart {
              &:before {
                content: "";
                width: 28px;
                height: 28px;
                position: relative;
                display: inline-block;
                background-image: url(../img/heart1.png);
                background-size: 100%;
                margin: 0 4px 0 4px;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
    &.ny2019 {
      background: linear-gradient(
        -22deg,
        #c7dfff,
        #2677d4,
        #56a2f8,
        #c7dfff
      );
      &:before {
        content: "";
        background: #5e8db4;
      }
      .title {
        color: #fff;
        background: linear-gradient(
          to right,
          #c7dfff,
          #56a2f8,
          #c7dfff
        );
        border: solid 4px #408ce2;
        box-shadow: 0 1px 10px #392d26, inset 0 2px 10px #fff,
          inset 0 28px 5px rgba(184, 220, 255, 0.95);
      }
      .btn-close-x {
        background: linear-gradient(
          -22deg,
          #c7dfff,
          #2677d4,
          #56a2f8,
          #c7dfff
        );
        border: solid 4px #408ce2;
        &:before {
          content: "\2716";
          color: #10498a;
          text-shadow: 0 0 2px #56a2f8, 0 0 2px #56a2f8, 0 0 2px #56a2f8,
            0 0 2px #56a2f8, 0 0 7px #fff, 0 0 7px #fff, 0 0 7px #fff;
        }
      }
      .fortuna-wheel-box .fortuna-wheel.good .fortuna-good {
        background-image: url(../img/fortuna-good-ny2019.png);
      }
      .fortuna-main-center-box {
        background-color: rgba(61, 104, 140, 0.75);
        .fortuna-prgbar-box {
          background-image: url(../img/fortuna-prg-bg-ny2019.png);
          .fortuna-prgbar-empty {
            background-image: url(../img/fortuna-prgbar-empty.png);
            .fortuna-prgbar-full {
              background-image: url(../img/fortuna-prg-full-ny2019.png);
            }
          }
          .fortuna-lucky-txt {
            color: #092f63;
            text-shadow: 0 0 6px #c7dfff, 0 0 8px #c7dfff;
          }
        }
        .fortuna-rules {
          background-color: rgba(61, 104, 140, 0.35);
          color: #fff;
          .rules-name,
          .rules-text {
            color: #fff;
          }
        }
      }
    }
    &.sv {
      background: linear-gradient(
        -22deg,
        #f4266a 0%,
        #a70037 50%,
        #f4266a 100%
      );
      &:before {
        content: "";
        background-image: url(../img/sv-sale-bg.jpg);
        background-size: 100%;
      }
      .title {
        background: linear-gradient(
          90deg,
          #f4266a 0%,
          #a70037 50%,
          #f4266a 100%
        );
        border: solid 4px #ea0259;
        color: #fff;
      }
      .btn-close-x {
        background: linear-gradient(
          22deg,
          #ffa3c2,
          #ffa3c2,
          #f4266a,
          #ffa3c2
        );
        border: solid 4px #ffa3c2;
      }
      .fortuna-main-center-box {
        background-color: rgba(168, 36, 73, 0.5);
        .fortuna-prgbar-box {
          background-image: none;
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
  
  body .main .quests {
    .quest {
      display: block;
    }
    .quest-fortune {
      width: 80px;
      height: 64px;
      position: relative;
      margin-bottom: 10px;
      margin-left: 0px;
      cursor: pointer;
      .timerbox {
        position: absolute;
        top: 36px;
        left: 5px;
        width: 60px;
        height: 20px;
        background-color: rgba(106, 0, 4, 0.9);
        border-radius: 10px;
        padding: 0px 5px;
      }
      .timer {
        color: #fff;
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
`;

const ScreenFortuna2MainMAIN = styled.div`
    ${ScreenFortuna2MainMAINStyles}
`;

export { ScreenFortuna2MainMAINStyles, ScreenFortuna2MainMAIN };
