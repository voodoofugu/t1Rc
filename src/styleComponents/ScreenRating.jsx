import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
  body .main .left-side .left-panel .tab-panel.rating-panel {
    background: linear-gradient(0deg, #786358 0%, #584a49 100%);
    box-shadow: inset 0 4px 0 #9c8b7c, inset 0 0 6px rgba(0, 0, 0, 0.25);
  }

  .video-play {
    top: 45%;
    left: 45%;
    width: 60px;
    height: 60px;
    position: absolute;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    &:before {
      content: "";
      width: 0;
      height: 0;
      border-top: 15px solid transparent;
      border-left: 25px solid rgba(255, 255, 255, 0.55);
      border-bottom: 15px solid transparent;
      position: absolute;
      top: 15px;
      margin-left: -10px;
    }
  }

  .color-btn.jewerly,
  .color-btn.collection {
    margin: 0 4px;
    a {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      line-height: 28px;
    }
    width: 234px;
    height: 30px;
    position: relative;
    text-align: center;
    top: 8px;
    transition: ease-in-out 0.02s;
    &.blue {
      box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
        inset 0 2px 2px rgba(0, 0, 0, 0.2);
      pointer-events: none;
      transition: ease-in-out 0.02s;
      a {
        line-height: 30px;
        .color-btn-text {
          padding-top: 2px;
        }
      }
    }
  }
  .getpoints-box {
    width: 452px;
    height: 86px;
    position: absolute;
    top: 280px;
    margin-left: 40px;
    background-color: #a83918;
    border-radius: 10px;
    .getpoints-name {
      width: 452px;
      height: 30px;
      position: absolute;
      top: 6px;
      color: #fff000;
      text-transform: uppercase;
      text-shadow: 0 0 6px #000;
    }
    .getpoints-btn-box {
      width: 452px;
      height: 50px;
      position: absolute;
      top: 30px;
      .lvlup-btn {
        width: 140px;
        height: 40px;
        position: relative;
        display: inline-block;
        text-align: center;
        top: 4px;
        border-radius: 6px;
        background-color: #7cbc31;
        margin: 0 2px 0 2px;
        box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25),
          0 0 6px rgba(0, 0, 0, 0.65);
        cursor: pointer;
        .btn-text1 {
          width: 136px;
          text-align: center;
          font-size: 12px;
          font-weight: bold;
          color: #fff;
          position: relative;
          text-transform: uppercase;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
          display: inline-block;
          top: 8px;
        }
        &:hover {
          box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25),
            0 0 6px rgba(0, 0, 0, 0.65);
        }
        &:active {
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25),
            inset 0 -2px 0 rgba(0, 0, 0, 0.25), 0 0 6px rgba(0, 0, 0, 0.25);
          .btn-text1 {
            top: 9px;
          }
        }
      }
    }
  }
  .rating-ped-box {
    width: 452px;
    height: 212px;
    position: absolute;
    top: 60px;
    left: 10px;
    background-color: #8f7a6b;
    border-radius: 6px 6px 0 0;
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
      inset 0px 1px 1px rgba(0, 0, 0, 0.1);
    .rating-ped-box-num {
      width: 110px;
      height: 24px;
      position: absolute;
      bottom: 0px;
      background: linear-gradient(180deg, #6d5e52 0%, #493d34 100%);
      .ped-box-num-text {
        width: 110px;
        height: 24px;
        color: #fff;
        line-height: 24px;
        font-size: 14px;
        text-align: center;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
        &.var1,
        &.var2,
        &.var3,
        &.var4 {
          width: 110px;
          height: 24px;
          position: absolute;
          margin-left: 0px;
        }
        &.var2 {
          background: linear-gradient(180deg, #4f4339 0%, #352c25 100%);
        }
        &.var3 {
        }
        &.var4 {
          background: linear-gradient(180deg, #4f4339 0%, #352c25 100%);
          border-radius: 0px 0px 6px 0px;
        }
      }
    }
    .ped-box {
      width: 110px;
      height: 212px;
      position: absolute;
      bottom: 0px;
      background-color: #786659;
      &.active {
        .ped-box-portrait {
          display: block;
        }
      }
      // .ped-box-portrait {
      //     width: 66px;
      //     height: 66px;
      //     background-image: url(../img/v2-master-pic1.png);
      //     position: absolute;
      //     margin-left: 22px;
      //     bottom: 62px;
      //     display: none;
      // }
      .ped-box-prize {
        width: 110px;
        height: 110px;
        background-image: url(../img/icon-sunduk-200-3.png);
        position: absolute;
        top: 4px;
        margin-left: 1px;
        background-size: 100%;
      }
      .ped-box-noreward {
        width: 100%;
        height: 100%;
        text-align: center;
        color: #e3be4f;
        font-size: 16px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
        line-height: 60px;
      }
      &.rate1 {
        height: 84px;
      }
      &.rate2 {
        height: 104px;
        margin-left: 114px;
        background-color: #67564a;
        .ped-box-prize {
          width: 70px;
          height: 70px;
          margin-left: 22px;
          background-image: url(../img/icon-sunduk-200-1.png);
        }
      }
      &.rate3 {
        height: 124px;
        margin-left: 228px;
        .ped-box-prize {
          width: 90px;
          height: 90px;
          margin-left: 10px;
          background-image: url(../img/icon-sunduk-200-2.png);
        }
      }
      &.rate4 {
        height: 144px;
        margin-left: 342px;
        background-color: #67564a;
      }
    }
  }
  .btn-scroll {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 440px;
    cursor: pointer;
    background: linear-gradient(180deg, #fffa8b 0%, #f5e38b 47%, #ebce8b 100%);
    border-radius: 100%;
    box-shadow: inset 0px -6px 0px 0px rgba(0, 0, 0, 0.25),
      0 2px 8px 0 rgba(0, 0, 0, 0.75);
    &:after {
      content: "";
      width: 20px;
      height: 28px;
      background-image: url(../img/rating-arrow.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      position: absolute;
      top: 4px;
      left: 9px;
    }
    &:hover {
      filter: brightness(1.1);
    }
    &:active {
      top: 441px;
      box-shadow: inset 0px -3px 0px 0px rgba(0, 0, 0, 0.25),
        0 2px 8px 0 rgba(0, 0, 0, 0.75);
      filter: brightness(0.9);
      &:after {
        top: 5px;
      }
    }
    &.left {
      left: 112px;
    }
    &.right {
      right: 112px;
      transform: scale(-1, 1);
    }
  }
  .getpoints-box {
    width: 452px;
    height: 86px;
    position: absolute;
    top: 280px;
    margin-left: 40px;
    background-color: #a83918;
    border-radius: 10px;
    .getpoints-name {
      width: 452px;
      height: 30px;
      position: absolute;
      top: 6px;
      color: #fff000;
      text-transform: uppercase;
      text-shadow: 0 0 6px #000;
    }
    .getpoints-btn-box {
      width: 452px;
      height: 50px;
      position: absolute;
      top: 30px;
      .lvlup-btn {
        width: 140px;
        height: 40px;
        position: relative;
        display: inline-block;
        text-align: center;
        top: 4px;
        border-radius: 6px;
        background-color: #7cbc31;
        margin: 0 2px 0 2px;
        box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25),
          0 0 6px rgba(0, 0, 0, 0.65);
        cursor: pointer;
        .btn-text1 {
          width: 136px;
          text-align: center;
          font-size: 12px;
          font-weight: bold;
          color: #fff;
          position: relative;
          text-transform: uppercase;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
          display: inline-block;
          top: 0;
        }
        .btn-text1-wrap {
          display: table;
          height: 100%;
          width: 100%;
          .btn-text1 {
            display: table-cell;
            vertical-align: middle;
            top: 0;
          }
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
            top: 1px;
          }
        }
      }
    }
  }
  .rating-girl {
    width: 330px;
    height: 610px;
    position: absolute;
    top: 6px;
    margin-left: 6px;
    background-image: url(../img/rating-girl.png);
    background-size: 100%;
  }
  .ratingballon-box {
    width: 408px;
    height: 314px;
    position: absolute;
    top: 160px;
    margin-left: 350px;
    background-color: #ddd67a;
    border-radius: 20px;
    &:before {
      content: "";
      width: 400px;
      height: 305px;
      position: absolute;
      top: 4px;
      margin-left: -155px;
      background: linear-gradient(0deg, #f9f4ac 0%, #fefdec 100%);
      border-radius: 18px;
    }
    .ballon-check {
      width: 0;
      height: 0;
      position: absolute;
      top: 60px;
      margin-left: -46px;
      border-top: 22px solid transparent;
      border-right: 46px solid #ddd67a;
      border-bottom: 22px solid transparent;
      &:before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: -24px;
        margin-left: 8px;
        border-top: 24px solid transparent;
        border-right: 50px solid #fdfbe3;
        border-bottom: 24px solid transparent;
      }
    }
    .ratingballon-text {
      width: 360px;
      height: 70px;
      position: absolute;
      top: 20px;
      margin-left: 24px;
      color: #3c332c;
      font-size: 18px;
      text-align: center;
    }

    .color-btn {
      margin-left: 0 !important;
    }
  }
  .rating-price-box {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 130px;
    margin-left: 158px;
    border-radius: 10px;
    background: linear-gradient(
      0deg,
      #c1860f 0%,
      #fbe480 50%,
      #e0ad08 80%,
      #f0b40d 100%
    );
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.75),
      inset 0 0 10px 0 rgba(255, 255, 255, 0.75);
    .rating-price {
      width: 80px;
      height: 80px;
      position: absolute;
      top: 5px;
      margin-left: -40px;
    }
  }

  .cont-place {
    width: 170px;
    height: 24px;
    position: absolute;
    top: 276px;
    background: linear-gradient(0deg, #352c25 0%, #4f4339 100%);
    color: #ffffff;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 24px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
  .cont-name-box {
    width: 170px;
    height: 30px;
    position: absolute;
    .cont-name-text {
      width: 170px;
      height: 30px;
      color: #3f352d;
      line-height: 30px;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      text-shadow: 0 0 6px #ffffff, 0 0 8px #ffffff;
    }
  }
  .cont-sign {
    width: 106px;
    height: 106px;
    position: absolute;
    top: 40px;
    margin-left: 32px;
  }
  .cont-prize {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 170px;
    margin-left: 40px;
  }

  .rating-right-box .animations,
  .rating-rankgo,
  .rremander {
    .rating-slot-box {
      width: 236px;
      height: 248px;
      position: absolute;
      top: 160px;
      left: 10px;
      background: none;
      .rating-slot {
        width: 64px;
        height: 48px;
        position: absolute;
        background: linear-gradient(
          180deg,
          #c68300 0%,
          #f4dfb6 40%,
          #c68200 75%,
          #fad489 90%,
          #c78302 100%
        );
        border-radius: 8px;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4),
          0 2px 8px 0 rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(0, 0, 0, 0.2);
        &:before {
          content: "";
          width: 60px;
          height: 44px;
          position: absolute;
          border-radius: 6px;
          background: linear-gradient(180deg, #95877d 0%, #665c56 100%);
          top: 2px;
          left: 2px;
          box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
        }
        &.top-right {
          left: 172px;
        }
        &.bottom-left {
          top: 70px;
        }
        &.bottom-right {
          top: 70px;
          left: 172px;
        }
        &.bottom {
          top: 154px;
          left: 68px;
          width: 94px;
          height: 72px;
          &:before {
            content: "";
            width: 90px;
            height: 68px;
          }
        }
        .raritet {
          width: 24px;
          height: 30px;
          position: absolute;
          top: 0px;
          left: -4px;
          background-size: 100%;
          pointer-events: none;
          &.common {
            background-image: url(../img/icon-common.png);
          }
          &.epic {
            background-image: url(../img/icon-epic.png);
          }
          &.rare {
            background-image: url(../img/icon-rare.png);
          }
          &.legendary {
            background-image: url(../img/icon-legendary.png);
          }
        }
        .check {
          width: 30px;
          height: 30px;
          top: -10px;
          left: 40px;
          background-image: url(../img/paycheck.png);
          background-size: 100%;
          position: absolute;
          pointer-events: none;
        }
        .rating-video {
          width: 54px;
          height: 38px;
          position: absolute;
          top: 5px;
          left: 5px;
          cursor: pointer;
          &:hover {
            filter: brightness(1.1);
            .rating-video-play {
              transform: scale(1);
            }
          }
          &:active {
            filter: brightness(0.9);
            .rating-video-play {
              transform: scale(0.92);
            }
          }
          img {
            width: 54px;
            height: 38px;
            border-radius: 4px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
          }
          .rating-paychek {
            height: 60px;
            position: absolute;
            top: 0px;
            background-image: url(../img/paycheck.png);
            display: block;
            background-size: 60px;
            width: 60px;
            left: 11px;
          }
          .rating-video-play {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 4px;
            left: 12px;
            border-radius: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            transform: scale(0.94);
            &:before {
              content: "";
              width: 0;
              height: 0;
              border-top: 6px solid transparent;
              border-left: 12px solid rgba(255, 255, 255, 0.55);
              border-bottom: 6px solid transparent;
              position: absolute;
              top: 9px;
              left: 10px;
            }
          }
        }
        .rating-lock {
          width: 54px;
          height: 38px;
          position: absolute;
          top: 5px;
          left: 5px;
          display: block;
          text-align: center;
          img {
            width: 38px;
          }
          &.locked {
            display: none;
            filter: grayscale(100%);
          }
        }
        &.notreceived {
          .check {
            display: none;
          }
        }
        &.lock {
          .check {
            display: none;
          }
          .rating-lock {
            display: none;
            &.locked {
              display: block;
            }
          }
          .rating-video {
            display: none;
          }
          &:before {
            background: linear-gradient(180deg, #282523 0%, #665c56 100%);
          }
        }
        &.legendary {
          .rating-lock {
            width: 106px;
            height: 46px;
            position: absolute;
            top: 20px;
            left: -6px;
            background-image: url(../img/legendary-lock.png);
            background-size: 100%;
            img {
              display: none;
            }
          }
          .check {
            left: 69px;
          }
          .rating-video {
            width: 82px;
            height: 58px;
            top: 6px;
            left: 6px;
            display: block;
            img {
              width: 82px;
              height: 58px;
            }
            .rating-video-play {
              top: 15px;
              left: 25px;
            }
          }
        }
      }
    }
  }

  .rating-slot-box .rating-slot {
    .legend-video-icon img {
      width: 88px;
      top: 16px;
      left: 3px;
      position: relative;
      z-index: 1;
      filter: grayscale(100%);
      display: none;
    }
    &.lock {
      .legend-video-icon img {
        display: block;
      }
    }
    .rating-lock {
      z-index: 2;
    }
    .raritet {
      z-index: 2;
    }
  }

  .rremander .rating-slot-box .rating-slot.lock .rating-video {
    display: block;
  }

  .rating-card-girl-box {
    width: 256px;
    height: 418px;
    position: absolute;
    display: inline-block;
    left: 132px;
    border-radius: 10px;
    box-shadow: 0 2px 0 #a79046, 0 0 10px 6px rgba(0, 0, 0, 0.35);
    background: linear-gradient(
      -39.76deg,
      #ffdc6b 23.86%,
      #ffe991 38.56%,
      #cfa831 53.81%,
      #fcdc8e 78.45%
    );
    &:before {
      content: "";
      width: 244px;
      height: 406px;
      position: absolute;
      background: linear-gradient(180deg, #e3d9d2 0%, #b89f8f 100%);
      top: 6px;
      margin-left: 6px;
      border-radius: 6px;
    }
    &.card-none {
      z-index: 1;
      opacity: 0.97;
      transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1);
      filter: blur(1px);
    }

    &.card1 {
      z-index: 3;
      opacity: 0.97;
      transform: translate3d(-150px, -10px, 0) scale3d(0.8, 0.8, 1);
      filter: blur(1px);
      &.high {
        z-index: 6;
      }
    }

    &.card2 {
      z-index: 7;
      opacity: 1;
      transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    }

    &.card3 {
      z-index: 5;
      opacity: 0.97;
      transform: translate3d(150px, -10px, 0) scale3d(0.8, 0.8, 1);
      filter: blur(1px);
    }
    .rating-card-girl-name {
      width: 100%;
      height: 26px;
      background-color: #c97413;
      background: linear-gradient(
        -39.76deg,
        #ffdc6b 23.86%,
        #ffe991 38.56%,
        #cfa831 53.81%,
        #fcdc8e 78.45%
      );
      position: absolute;
      border-radius: 10px 10px 0 0;
      color: rgba(39, 28, 20, 0.9);
      text-shadow: 0 1px 1px rgba(255, 255, 255, 1);
      text-align: center;
      line-height: 26px;
      box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.5),
        0 1px 2px rgba(0, 0, 0, 0.4);
      z-index: 1;
      font-weight: 700;
    }
    .card-girl-box {
      width: 244px;
      height: 386px;
      position: absolute;
      top: 26px;
      margin-left: 6px;
      overflow: hidden;
      border-radius: 0 0 5px 5px;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
      img {
        margin-left: -15px;
        width: 260px;
      }
    }
    .rating-visual {
      width: 244px;
      height: 242px;
      position: absolute;
      top: 170px;
      margin-left: 6px;
      filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));
      .down {
        width: 244px;
        height: 110px;
        position: absolute;
        bottom: 0px;
        background: linear-gradient(180deg, #9b8777 0%, #493d34 100%);
        border-radius: 0 0 6px 6px;
      }
      .rating-str {
        width: 10px;
        height: 176px;
        background-color: rgba(251, 228, 180, 1);
        position: absolute;
        margin-left: 26px;
        &:before {
          content: "";
          width: 20px;
          height: 10px;
          background-color: rgba(251, 228, 180, 1);
          position: absolute;
          top: 176px;
          margin-left: 0px;
        }
        .rating-str-right {
          width: 0;
          height: 0;
          border-top: 14px solid transparent;
          border-left: 28px solid rgba(251, 228, 180, 1);
          border-bottom: 14px solid transparent;
          position: absolute;
          top: 167px;
          margin-left: 20px;
        }
        &.left {
          margin-left: 200px;
          transform: scale(-1, 1);
        }
      }
    }
  }

  .ped-box-portrait {
    width: 66px;
    height: 66px;
    background-image: url(../img/v2-master-pic1.png);
    position: absolute;
    &.place0 {
      display: none;
    }
    &.place1,
    &.place2,
    &.place3,
    &.place4 {
      bottom: 86px;
      //margin-left: 22px;
      transition-duration: 1s;
      transition-delay: 0.5s;
    }
    &.place2 {
      bottom: 106px;
      left: 136px;
    }
    &.place3 {
      bottom: 126px;
      left: 250px;
    }
    &.place4 {
      bottom: 146px;
      left: 364px;
    }

    .you-box {
      color: white;
      text-align: center;
      top: 49px;
      position: relative;
      width: 66px;
      height: 24px;
      line-height: 20px;
      font-size: 18px;
      border-radius: 30px;
      background-color: #857b65;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.65);
    }
  }

  .firefox,
  .ie,
  .edge {
    .tab-panel.rating-panel
      .rating-right-box
      .collection
      .rating-card-scroll-list-box {
      right: -9px;
    }
  }
`;

export { stylesFileName, pageStyles };
