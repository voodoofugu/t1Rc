import { styled, css } from "styled-components";

const ScreenFapopolyMainStyles = css`
  body .main .main-bg {
    background-image: url(../img/v2-fapop-bg-hw.jpg);
    background-size: 100%;
    &.easter {
      background-image: url(../img/fapop-bg-main-ph.jpg);
    }
  }

  body .main .fapop-content-all {
    width: 1200px;
    height: 640px;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: inset 0 62px 14px rgba(0, 0, 0, 0.4);
    .fp-portal {
      position: absolute;
      left: 500px;
      top: 210px;
      width: 280px;
      height: 230px;
      cursor: pointer;
      &.disabled {
        filter: grayscale(1);
      }
      &.enabled {
        animation-name: fp-portal-blink;
        animation-duration: 1s;
        animation-iteration-count: infinite;
      }
      .fp-portal-img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .fapop-exit-box {
      width: 350px;
      height: 50px;
      position: absolute;
      top: 10px;
      right: 10px;
      .fapop-exit-text-box {
        width: 230px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.55);
        display: table;
        &:before {
          content: "";
          width: 0;
          height: 0;
          position: absolute;
          top: 9px;
          left: 230px;
          border-top: 16px solid transparent;
          border-left: 12px solid rgba(0, 0, 0, 0.55);
          border-bottom: 16px solid transparent;
        }
        .fapop-exit-text {
          width: 100%;
          height: 100%;
          position: relative;
          display: table-cell;
          vertical-align: middle;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
        }
      }
      .color-btn {
        width: 100px;
        height: 50px;
        position: absolute;
        top: 0;
        right: 0;
        .color-btn-text {
          top: 12px;
          font-size: 18px;
        }
        &:active {
          .color-btn-text {
            top: 13px;
          }
        }
      }
    }

    .bfIcon {
      width: 100px;
      height: 85px;
      position: absolute;
      cursor: pointer;
      right: 10px;
      top: 70px;
      &:hover {
        filter: brightness(1.1);
      }
      &:active {
        transform: scale(0.96);
      }
      &.second {
        top: 165px;
      }

      .icon {
        width: 70px;
        height: 70px;
        margin-top: 5px;
        //filter: drop-shadow(2px 4px 6px black);
      }
    }

    .fapop-rating-tokens-box {
      width: 965px;
      height: 50px;
      position: absolute;
      top: 10px;
      left: 120px;
      .color-btn {
        &.fl {
          width: 153px;
          float: left;
          display: flex;
          &:active {
            .domik {
              margin: -2px 0 0 -2px;
            }
          }
          .domik {
            width: 52px;
            height: 52px;
            margin: -3px 0 0 -2px;
          }
          .color-btn-text {
            // display: inline-block !important;
          }
        }
        &.token {
          background: linear-gradient(0deg, #7c22bd 0%, #aa6ad8 100%);
        }
        &.fr {
          float: right;
        }
        width: 140px;
        height: 50px;
        position: relative;
        margin: 0 4px 0 4px;
        .color-btn-text {
          top: 12px;
          font-size: 18px;
        }
        &:active {
          .color-btn-text {
            top: 13px;
          }
        }
      }
    }
    .fapop-rewards-box-all {
      width: 100px;
      height: 620px;
      position: absolute;
      top: 10px;
      left: 10px;

      .fapop-rewards-text {
        width: 80px;
        height: 26px;
        position: absolute;
        top: 12px;
        left: 10px;
        color: #eace12;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
      }
      .fapop-rewards-box {
        width: 70px;
        height: 480px;
        position: absolute;
        top: 38px;
        left: 15px;
        .fapop-rewards {
          width: 70px;
          height: 70px;
          position: relative;
          display: inline-block;
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
          margin: 5px 0 5px 0;
          &:before {
            content: "";
            width: 84px;
            height: 5px;
            position: absolute;
            top: 74px;
            left: -7px;
            background: linear-gradient(
              90deg,
              #5248ad 0%,
              #9188e6 50%,
              #5248ad 100%
            );
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
          }
          .fapop-rew-pic {
            width: 54px;
            height: 54px;
            position: absolute;
            top: 2px;
            left: 8px;
            img {
              width: 54px;
            }
          }
          .fapop-rew-pts {
            width: 56px;
            height: auto;
            position: absolute;
            top: 52px;
            left: 7px;
            color: #000;
            font-size: 14px;
            font-weight: bold;
          }
          .fapop-rew-good {
            width: 76px;
            height: 76px;
            position: absolute;
            top: -3px;
            left: -3px;
            background-image: url(../img/fortuna-good.png);
            background-size: 100%;
            display: none;
          }
          .fapop-rew-claimed {
            width: 70px;
            height: 70px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.55);
            border-radius: 10px;
            &:before {
              content: "";
              width: 60px;
              height: 60px;
              position: absolute;
              top: 5px;
              left: 5px;
              background-image: url(../img/paycheck.png);
              background-size: 100%;
            }
          }
          &.girl {
            .fapop-rew-pic {
              width: 66px;
              height: 66px;
              left: 2px;
              overflow: hidden;
              border-radius: 8px;
              img {
                width: 66px;
              }
            }
            .fapop-rew-pts {
              display: none;
            }
          }
          &.good {
            .fapop-rew-good {
              display: block;
            }
          }
          &.claim {
            background: linear-gradient(0deg, #7cbc30 0%, #bbee7f 100%);
            cursor: pointer;
            &:hover {
              filter: brightness(1.1);
            }

            &:active {
              top: 1px;
              &:before {
                content: "";
                top: 73px;
              }
            }
            .fapop-rew-pts {
              color: #fff;
              text-transform: uppercase;
              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
            }
          }
          &.claimed {
            background: linear-gradient(0deg, #7cbc30 0%, #bbee7f 100%);
            .fapop-rew-pts {
              color: #fff;
              text-transform: uppercase;
              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
            }
          }
        }
        .fapop-pts-num {
          width: 50px;
          height: 26px;
          position: absolute;
          top: 20px;
          left: 56px;
          background: linear-gradient(0deg, #5248ad 0%, #9188e6 100%);
          border-radius: 10px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
          color: #fff;
          font-size: 12px;
          font-weight: bold;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
          line-height: 26px;
        }
      }
    }
    .fapop-times-around-box {
      width: 100px;
      height: 620px;
      position: absolute;
      top: 10px;
      left: 10px;
      background: linear-gradient(0deg, #483ea3 0%, #7e73d9 100%);
      border-radius: 14px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
      .fapop-times-around-prgbar,
      .fapop-times-around-prgbar-full {
        width: 94px;
        height: 584px;
        position: absolute;
        bottom: 4px;
        left: 3px;
        background-image: url(../img/fapop-prg-around-empty.png);
        background-size: 100% 584px;
        .fapop-times-around-prgbar-full {
          background-image: url(../img/fapop-prg-around-full.png);
          transition: height 0.5s ease;
          bottom: 0;
          left: 0;
          background-position: center bottom;
        }
        .fapop-times-around-prgbar-text {
          width: 94px;
          height: auto;
          position: relative;
          text-align: center;
          top: 555px;
          color: #fff;
          font-weight: bold;
          font-size: 14px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
        }
        .fapop-times-around-text {
          width: 94px;
          height: auto;
          position: absolute;
          top: 514px;
          left: 0;
          color: #fff;
          font-size: 13px;
          font-weight: bold;
          text-transform: uppercase;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
        }
      }
    }
    .fapop-prgbar-box-all {
      width: 500px;
      height: 74px;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      .fapop-prgbar-reward-box {
        width: 74px;
        height: 74px;
        position: absolute;
        top: 0;
        left: 0;
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
        .fapop-prgbar-reward-pic {
          width: 56px;
          height: 56px;
          position: absolute;
          top: 2px;
          left: 9px;
          img {
            width: 56px;
          }
        }
        .fapop-prgbar-reward-text {
          width: 56px;
          height: auto;
          position: absolute;
          top: 59px;
          left: 9px;
          color: #000;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
        }
        &.claim {
          background: linear-gradient(0deg, #7cbc30 0%, #bbee7f 100%);
          cursor: pointer;
          &:active {
            top: 1px;
          }
          .fapop-prgbar-reward-text {
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
          }
        }
      }
      .fapop-prgbar-box,
      .fapop-prgbar-full {
        width: 344px;
        height: 60px;
        position: absolute;
        bottom: -6px;
        left: 78px;
        background-image: url(../img/fapop-prg-empty.png);
        background-size: 344px 100%;
        .fapop-prgbar-full {
          background-image: url(../img/fapop-prg-full.png);
          transition: width 0.5s ease;
          top: 0;
          left: 0;
          background-position: center left;
        }
        .fapop-times-around-prgbar-text {
          width: 246px;
          height: 66px;
          position: relative;
          text-align: center;
          color: #fff;
          font-weight: bold;
          font-size: 20px;
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
          line-height: 66px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.85);
        }
        .fapop-prgbar-text {
          width: 300px;
          height: 60px;
          position: absolute;
          top: 0;
          left: 16px;
          line-height: 60px;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          text-align: left;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.85);
          .f-yellow-text {
            color: #ffd900;
          }
        }
        .fapop-prgbar-text-count {
          width: auto;
          height: 60px;
          position: absolute;
          top: 0;
          right: 16px;
          line-height: 60px;
          color: #fff;
          font-size: 26px;
          font-weight: bold;
          text-align: right;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.85);
          .f-yellow-text {
            color: #ffd900;
          }
        }
      }
      .fapop-noquest-box {
        width: 420px;
        height: 74px;
        position: absolute;
        top: 0;
        left: 0;
        display: table;
        background-color: rgba(0, 0, 0, 0.75);
        border-radius: 10px;
        visibility: hidden;
        .fapop-noquest-text {
          width: 100%;
          height: 100%;
          position: relative;
          display: table-cell;
          vertical-align: middle;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          padding: 0 20px;
        }
      }
      &.noquest {
        .fapop-prgbar-reward-box {
          display: none;
        }
        .fapop-prgbar-box,
        .fapop-prgbar-full {
          display: none;
        }
        .fapop-noquest-box {
          visibility: visible;
        }
      }
    }
    .fapop-info-btn {
      width: 28px;
      height: 28px;
      position: absolute;
      bottom: 206px;
      right: 10px;
      background: linear-gradient(0deg, #ffaf53 0%, #bf5c22 50%, #e0c3b8 100%);
      border-radius: 100%;
      cursor: pointer;
      border: 2px solid #ffdd7f;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      text-transform: uppercase;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
      line-height: 30px;
      z-index: 1;
      &:hover {
        filter: brightness(1.1);
      }
      &:active {
        bottom: 205px;
      }
    }
    .fapop-rolldice-box-all {
      width: 180px;
      height: 210px;
      position: absolute;
      bottom: 10px;
      right: 10px;
      .fapop-dice-1,
      .fapop-dice-2 {
        width: 90px;
        height: 90px;
        position: absolute;
        top: 0px;
        left: 14px;
        background-image: url(../img/fapop-dice1.png);
        background-size: 100%;
      }
      .fapop-dice-2 {
        left: 76px;
        background-image: url(../img/fapop-dice2.png);
      }
      .fapop-dice-end-1,
      .fapop-dice-end-2 {
        width: 90px;
        height: 90px;
        position: absolute;
        top: -8px;
        left: 8px;
        display: none;
      }
      .fapop-dice-end-2 {
        left: 82px;
      }
      .fapop-dice-end-rolled {
        width: 180px;
        height: 130px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #f89611;
        display: none;
        border-radius: 20px;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.35);
        .fapop-dice-rolled-text {
          width: 100%;
          height: 100%;
          position: relative;
          line-height: 130px;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          text-transform: uppercase;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
        }
      }
      &.anim-dice {
        .fapop-dice-1 {
          animation: anim-dice1 0.25s linear 0s infinite alternate;
        }
        .fapop-dice-2 {
          animation: anim-dice1 0.39s linear 0s infinite alternate;
        }
      }
      @keyframes anim-dice1 {
        0% {
          transform: translate(0, 0px) rotate(0deg);
        }
        25% {
          transform: translate(-10px, 0px) rotate(-200deg);
        }
        50% {
          transform: translate(0px, -30px) rotate(360deg);
        }
        75% {
          transform: translate(10px, 6px) rotate(-180deg);
        }
        100% {
          transform: translate(0, 0px) rotate(0deg);
        }
      }
      @keyframes anim-dice2 {
        0% {
          transform: translate(0, 0px) rotate(0deg);
        }
        25% {
          transform: translate(-10px, 0px) rotate(-200deg);
        }
        50% {
          transform: translate(0px, -30px) rotate(360deg);
        }
        75% {
          transform: translate(10px, 6px) rotate(-180deg);
        }
        100% {
          transform: translate(0, 0px) rotate(0deg);
        }
      }
      &.end-roll {
        .fapop-dice-1,
        .fapop-dice-2,
        .color-btn.green {
          display: none;
        }
        .fapop-dice-end-1,
        .fapop-dice-end-2 {
          display: block;
        }
        .fapop-dice-end-rolled {
          display: block;
        }
      }
      .color-btn.green {
        width: 180px;
        height: 60px;
        border-radius: 20px;
        position: absolute;
        bottom: 70px;
        left: 0;
        .color-btn-text {
          //top: 4px;
          top: -11px !important;
          font-size: 18px;
        }
        .token-count-box {
          width: 100px;
          height: 24px;
          position: absolute;
          top: 28px;
          left: 40px;
          background: linear-gradient(
            0deg,
            #f8b76c 0%,
            #f78500 18%,
            #f8b76c 59%,
            #f9981f 85%,
            #f8b76c 100%
          );
          border-radius: 20px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
          .token-count {
            width: 100%;
            height: 24px;
            position: relative;
            top: -3px;
            left: 0;
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            font-weight: bold;
            font-size: 14px;
            line-height: 24px;
            .f-token {
              width: 20px;
              height: 20px;
              position: relative;
              display: inline-block;
              top: 5px;
              background-image: url(../img/fapop-token-ic.png);
              background-size: 100%;
              margin-left: 4px;
            }
          }
        }
        &:active {
          .color-btn-text {
            top: -10px !important;
          }
          .token-count-box {
            top: 29px;
          }
        }
      }
      .color-btn.green.ten {
        bottom: 0px;
      }
    }
    .fapop-player {
      width: 100px;
      height: 150px;
      position: absolute;
      //top: 446px; left: 636px;
      background-image: url(../img/fapop-ic01.png);
      background-size: 100%;
      .fapop-player-name {
        width: 87px;
        height: 22px;
        position: absolute;
        top: 110px;
        left: 10px;
        background-image: url(../img/ic-abil-blueline.png);
        background-size: 100%;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
      }
    }
    .fapop-rewardx2 {
      width: 80px;
      height: 80px;
      position: absolute;
      top: 541px;
      right: 344px;
      background-image: url(../img/fapop-x2reward.png);
      background-size: 80%;
      background-position: 13px center;
      background-repeat: no-repeat;
      .fapop-rewardx2-text {
        width: 80px;
        height: auto;
        position: absolute;
        top: 66px;
        left: 0;
        background-color: #005bff;
        border-radius: 20px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
      }
    }
  }

  @keyframes fp-portal-blink {
    0% {
      filter: brightness(1);
      -webkit-filter: brightness(1);
    }
    50% {
      filter: brightness(1.5);
      -webkit-filter: brightness(1.5);
    }
    100% {
      filter: brightness(1);
      -webkit-filter: brightness(1);
    }
  }
`;

const ScreenFapopolyMain = styled.div`
  ${ScreenFapopolyMainStyles}
`;

export { ScreenFapopolyMainStyles, ScreenFapopolyMain };
