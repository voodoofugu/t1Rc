import { css } from "@emotion/react";

const ScreenRatingFullcollStyles = css`
  .popup-layer .m-popup.fullcoll {
    width: 740px;
    height: 484px;
    margin-left: -120px;
    top: 66px;
    position: absolute;
    &:before {
      content: "";
      background: linear-gradient(0deg, #938274 0%, #dbc2ad 100%);
    }
    .color-box {
      display: none;
    }
    .rating-girl {
      height: 480px;
      width: 260px;
      left: 20px;
      background: none;
      top: 75px;
      img {
        width: 100%;
      }
    }
    .fullcollright-box {
      width: 414px;
      height: 390px;
      position: absolute;
      top: 72px;
      margin-left: 300px;
      // background-color: red;
      .fullcolltop-text-box {
        width: 100%;
        height: 30px;
        margin: auto 0;
        text-align: center;
        line-height: 30px;
        color: #453930;
        font-size: 18px;
        font-weight: bold;
        text-shadow: 0 0 10px #fff;
        // background-color: green;
      }
      .fullcolltop-video-box {
        width: 100%;
        height: 200px;
        position: absolute;
        top: 46px;
        background-color: #9f8c7e;
        border-radius: 10px;
        .rating-lock {
          display: none;
          width: 367px;
          height: 162px;
          position: absolute;
          top: 30px;
          margin-left: -23px;
          background-image: url(../img/legendary-lock-2.png);
          background-size: 100%;
        }
        &.locked {
          .rating-lock {
            display: block;
          }
          img {
            filter: grayscale(100%);
          }
        }
        .full-video {
          width: 320px;
          height: 180px;
          position: absolute;
          top: 10px;
          margin-left: 10px;
          display: none;
          margin-left: 48px;
          box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
          &.vzuh {
            .bdiz {
              width: 300px;
              height: 300px;
              position: absolute;
              margin-left: 22px;
              top: -45px;
              background-image: url(../img/bdiz.png);
              background-size: 100%;
              opacity: 0;
              z-index: 1;
              animation: vzuhbdiz ease-in 1s;
              animation-iteration-count: 1;
              transform-origin: 50% 50%;
            }
          }
          @keyframes vzuhbdiz {
            0% {
              opacity: 0;
              transform: scaleX(1) scaleY(1);
            }
            20% {
              opacity: 0.5;
              transform: scaleX(1.7) scaleY(1.7);
            }
            50% {
              opacity: 1;
              transform: scaleX(2.5) scaleY(2.5);
            }
            70% {
              opacity: 1;
              transform: scaleX(1.8) scaleY(1.8);
            }
            85% {
              transform: scaleX(1.5) scaleY(1.5);
            }
            100% {
              opacity: 0;
              transform: scaleX(1) scaleY(1);
            }
          }
          img {
            width: 320px;
            height: 180px;
            background-size: 100%;
          }
          .rating-video-play {
            width: 60px;
            height: 60px;
            position: absolute;
            top: 62px;
            margin-left: 130px;
            border-radius: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            cursor: pointer;
            &:before {
              content: "";
              width: 0;
              height: 0;
              border-top: 12px solid transparent;
              border-left: 20px solid rgba(255, 255, 255, 0.55);
              border-bottom: 12px solid transparent;
              position: absolute;
              top: 18px;
              margin-left: -6px;
            }
          }
        }
        .rating-slot {
          width: 88px;
          height: 60px;
          position: absolute;
          margin-left: 20px;
          top: 10px;
          &:before {
            content: "";
            width: 84px;
            height: 54px;
            position: absolute;
            top: 3px;
            margin-left: -42px;
          }
          &.top-right {
            margin-left: 308px;
            top: 10px;
          }
          &.bottom-right {
            margin-left: 308px;
            top: 130px;
          }
          &.bottom-left {
            margin-left: 20px;
            top: 130px;
          }
          &.legendary {
            top: 44px;
            margin-left: 140px;
            width: 138px;
            height: 108px;
            &:before {
              content: "";
              width: 134px;
              height: 102px;
              top: 3px;
              margin-left: -67px;
            }
            .rating-video {
              img {
                width: 126px;
                height: 95px;
              }
              .rating-video-play {
                top: 32px;
                margin-left: 47px;
                &:before {
                  content: "";
                  top: 10px;
                  margin-left: -4px;
                }
              }
            }
            .rating-lock.locked {
              display: block;
              width: 150px;
              height: 66px;
              top: 32px;
            }
            .rating-paychek {
              width: 84px;
              height: 84px;
              top: 12px;
              margin-left: 26px;
            }
          }
          .rating-video {
            img {
              width: 78px;
              height: 50px;
            }
            .rating-video-play {
              top: 10px;
              margin-left: 23px;
              &:before {
                content: "";
                top: 10px;
                margin-left: -4px;
              }
            }
          }
          .rating-paychek {
            width: 50px;
            height: 50px;
            position: absolute;
            top: 6px;
            margin-left: 18px;
            background-image: url(../img/paycheck.png);
            background-size: 100%;
            display: block;
          }
        }
        &.video {
          .rating-paychek {
            animation: arrow-up 0.45s linear 0s;
          }
          @keyframes arrow-up {
            0% {
              transform: scale(0);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
        }
        &.video-box {
          .rating-slot {
            display: none;
          }
          .full-video {
            display: block;
          }
        }
      }
      .fullcolltop-bonus-text,
      .fullcolltop-bonus-all {
        width: 100%;
        height: 26px;
        position: absolute;
        top: 256px;
        background-color: #4a3e35;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        line-height: 26px;
        text-transform: uppercase;
      }
      .fullcolltop-bonus-all {
        height: 40px;
        top: 282px;
        background: linear-gradient(
          180deg,
          #c68300 0%,
          #f4dfb6 50%,
          #c68200 70%,
          #fad489 85%,
          #c78302 100%
        );
        border-radius: 0 0 10px 10px;
        font-weight: bold;
        text-align: center;
        line-height: 40px;
        text-shadow: 0 0 10px #000;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
      }
      .color-btn {
        top: 336px;
        margin-left: 132px;
      }
    }
  }
`;

export default ScreenRatingFullcollStyles;
