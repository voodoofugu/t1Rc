import { css } from "@emotion/react";

const V2ScreenFwStoreStyles = css`
  .popup-layer .m-popup.fw-store {
    width: 1000px;
    height: 550px;
    left: 100px;
    top: 45px;

    &.rush {
      width: 740px;
      left: 230px;
      .store-item-box-all {
        left: 20px;
        right: initial;
      }
    }

    .title {
      color: #572f14;
    }
    .color-box {
      background: linear-gradient(0deg, #645143 0%, #8e8177 100%);
      &:before {
        display: none;
      }
      &:after {
        display: none;
      }
    }
    .fw-shop-girl {
      width: 320px;
      height: 450px;
      position: absolute;
      bottom: 10px;
      left: -48px;
      background-image: url(../img/break-girl-fw.png);
      background-size: 100%;
      background-repeat: no-repeat;
    }
    .fw-shop-girl.sp {
      width: 340px;
      height: 450px;
      position: absolute;
      bottom: 10px;
      left: -15px;
      background-image: url(../img/break-girl826.png);
      background-size: 132%;
      background-position: -68px -28px;
      background-repeat: no-repeat;
    }

    .fw-main-bl-name {
      width: 160px;
      height: 30px;
      position: absolute;
      top: 75px;
      left: 72px;
      background: linear-gradient(0deg, #3fbae7 0%, #007aa7 50%, #3fbae7 100%);
      border-radius: 20px;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 30px;
      text-align: center;
      z-index: 1;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    }
    .f-contrib {
      &:before {
        content: "";
        width: 30px;
        height: 30px;
        position: relative;
        display: inline-block;
        background-image: url(../img/ic-contrip.png);
        background-size: 100%;
        margin-right: 4px;
        margin-left: 4px;
        vertical-align: middle;
      }
      &.cw {
        &:before {
          background-image: url(../img/ic-contrip-red.png);
        }
      }
      &.poly {
        &:before {
          background-image: url(../img/poly-chip-icon.png);
        }
      }
      &.spirit3 {
        &:before {
          background-image: url(../img/crow-70.png);
          top: -2px;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));
        }
      }
    }

    .store-item-box-all {
      width: 700px;
      height: 450px;
      position: absolute;
      top: 75px;
      right: 20px;
      background: linear-gradient(180deg, #b9aba1 0%, #9e8b7d 100%);
      border-radius: 6px;
      box-shadow: 0 2px 2px 0 #5e544c;
      .store-item-box-scroll {
        width: 684px;
        height: 420px;
        position: absolute;
        overflow: hidden;
        overflow-y: scroll;
        top: 14px;
        margin-left: 10px;
        scrollbar-width: thin;
        scrollbar-color: #f4b766 #584941;
        &::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          background-color: #7c665c;
        }
        &::-webkit-scrollbar {
          width: 10px;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          box-shadow: inset 0 0 3px #796b60;
          background: linear-gradient(
            to right,
            #fff,
            #f5de80,
            #f4b766,
            #b26d12
          );
        }
        .store-item-all {
          width: 668px;
          height: 210px;
          position: relative;
          text-align: center;
          background-image: url(../img/shop-pod.jpg);
          background-size: 100%;
          &.blured {
            filter: blur(5px);
          }
          .store-item-all-name {
            width: 270px;
            height: 34px;
            position: absolute;
            top: 190px;
            left: 199px;

            background-image: url(../img/polka.png);
            background-size: 100%;
            z-index: 999;
            line-height: 32px;
            color: #632e09;
            font-weight: bold;
            font-size: 14px;
            text-transform: uppercase;
            text-shadow: 0 0 6px #fff8ab;
          }
          .store-item-box {
            width: 140px;
            height: 180px;
            position: relative;
            display: inline-block;
            top: 14px;
            border-radius: 6px;
            background: linear-gradient(
              180deg,
              #8e7453 0%,
              #e3c7a3 50%,
              #8f7553 70%,
              #ae916a 85%,
              #8f7553 100%
            );
            margin: 0 7px 26px 2px;
            box-shadow: 0 2px 6px 0 #413833;
            z-index: 1;
            transform: scale(0.9857);
            transition: max-height ease-in-out 0.2s;
            &:before {
              content: "";
              width: 134px;
              height: 174px;
              position: absolute;
              top: 3px;
              margin-left: -67px;
              border-radius: 4px;
              background: linear-gradient(180deg, #b59b87 0%, #7f6858 100%);
              box-shadow: inset 0 0 20px 0 #50463f;
            }
            &:hover {
              box-shadow: inset 0 0 20px 2px rgba(255, 255, 255, 0.4),
                0 2px 6px 0 #413833;
              transform: scale(1);
              .store-name,
              .item-box {
                filter: brightness(1.1);
              }
            }
            .store-item-buys-left {
              z-index: 1;
              width: 40px;
              height: 40px;
              position: absolute;
              right: 0px;
              top: 15px;
              background-image: url(../img/zvezda.png);
              background-size: 100%;
              color: white;
              font-size: 16px;
              text-align: center;
              line-height: 40px;
              font-weight: bold;
            }
            .item-box {
              width: 80px;
              height: 80px;
              position: absolute;
              top: 38px;
              left: 30px;
              border-radius: 10px;
              box-shadow: inset 0 1px rgba(255, 255, 255, 0.6),
                0 1px 4px 1px rgba(0, 0, 0, 0.4), inset 0 0 0 2px #ff9b37;
              background: url(../img/v2-trophy-bg.jpg);
              background-size: 100%;
              background-repeat: no-repeat;
              .img-wrap {
                width: calc(100% - 4px);
                height: calc(100% - 4px);
                position: absolute;
                top: 2px;
                left: 2px;
                overflow: hidden;
                border-radius: 8px;
                img {
                  width: 100%;
                }
              }
              .store-quant {
                width: 54px;
                height: 18px;
                color: coral;
                position: absolute;
                top: -14px;
                left: -30px;
                background-color: rgb(255, 255, 255);
                font-size: 14px;
                line-height: 18px;
                font-weight: bold;
                font-size: 15px;
                text-transform: uppercase;
                color: #fffd9b;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6),
                  0 1px 4px rgba(0, 0, 0, 0.4);
                text-align: center;
                padding: 0 0 0 6px;
                background: url(../img/banner-bg1.png);
                background-size: auto 100%;
                background-repeat: no-repeat;
                filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.8));
                transform: scaleX(-1);
                .quantity {
                  transform: scaleX(-1);
                }
              }
              .store-timer-box {
                width: 50px;
                height: 50px;
                position: absolute;
                top: -2px;
                left: -4px;
                background-image: url(../img/offer-bk-sm.png);
                background-size: 100%;
                .store-timer-text {
                  width: 44px;
                  height: 30px;
                  position: absolute;
                  top: 2px;
                  left: 2px;
                  text-align: center;
                  text-transform: uppercase;
                  font-size: 14px;
                  font-weight: bold;
                  color: #ffcc00;
                  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
                }
              }
              .rate {
                width: 44px;
                line-height: 16px;
                height: 16px;
                position: relative;
                top: 62px;
                text-align: center;
                margin: 0 auto;
                color: #fff;
                font-size: 12px;
                font-weight: bold;
                text-shadow: 0 1px 2px rgb(0, 0, 0),
                  0 1px 4px rgba(0, 0, 0, 0.6);
                background: linear-gradient(#805a31, #c18346);
                border-radius: 10px 10px 0 0;
                box-shadow: inset 0 1px 0 #dea569;
                filter: drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.6));
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
            .color-btn.diamond {
              width: 120px;
              height: 40px;
              position: absolute;
              top: 130px;
              left: 10px;
              .color-btn-text {
                font-size: 14px;
                top: 5px;
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
                  top: 6px;
                }
              }
            }
            .color-btn {
              .color-btn-text {
                span {
                  margin-left: 4px;
                }
              }
            }
            .i-ico {
              width: 26px;
              height: 26px;
              position: absolute;
              top: 26px;
              margin-left: 111px;
              background-image: url(../img/i-ico.png);
              background-size: 100%;
            }
            .store-name {
              width: 140px;
              height: 24px;
              position: absolute;
              top: 0px;
              margin-left: 0px;
              line-height: 24px;
              background: linear-gradient(
                180deg,
                #8e7453 0%,
                #e3c7a3 50%,
                #8f7553 70%,
                #ae916a 85%,
                #8f7553 100%
              );
              box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.35);
              border-radius: 8px 8px 0 0;
              text-shadow: 0 0 4px #fff;
              text-align: center;
              text-transform: uppercase;
              font-size: 12px;
              font-weight: bold;
              color: #3b291b;
            }
          }
        }
      }
    }
  }

  .merc-one-box-all-rel {
    position: relative;
    left: 0;
    width: 225px;
    height: 310px;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0 1px 2px rgba(243, 204, 204, 0.25);
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
      //text-transform: uppercase;
      line-height: 26px;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
      &.small {
        font-size: 12px;
        top: 270px;
        color: #fff;
        display: flex;
        justify-content: center;
      }
    }
    .fw-mer-star-box {
      .fw-mer-star {
        width: 16px;
        height: 16px;
        position: relative;
        display: inline-block;
        top: 3px;
        background-image: url(../img/star48.png);
        background-size: 100%;
        background-repeat: no-repeat;
      }
    }
  }

  .sexped-chaos-btn-shop {
    width: 140px;
    height: 50px;
    position: absolute;
    top: 75px;
    left: 74px;
    background: linear-gradient(
      0deg,
      #ffe199,
      #f4c657 18%,
      #ffe199 60%,
      #f4c557 85%,
      #ffe199
    );
    border-radius: 6px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
    .sexped-chaos-icon,
    .orb-icon,
    .ore-icon {
      width: 56px;
      height: 56px;
      position: absolute;
      top: -4px;
      left: -4px;
      background-image: url(../img/v2-icon-chaos.png);
      background-size: 100%;
      background-repeat: no-repeat;
    }
    .orb-icon {
      background-image: url(../img/v2-f-e1.png);
    }
    .ore-icon {
      background-image: url(../img/v2-icon-sexped-ore.png);
    }
    .sexped-chaos-count {
      width: 84px;
      height: 26px;
      position: absolute;
      top: 12px;
      right: 5px;
      color: #3c3737;
      font-size: 20px;
      font-weight: bold;
      line-height: 26px;
    }
  }
`;

export default V2ScreenFwStoreStyles;
