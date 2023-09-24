import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
  .popup-layer .m-popup.store-main {
    width: 1028px;
    height: 550px;
    left: 86px;
    top: 45px;
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
    .store-menu-box {
      width: 118px;
      height: 450px;
      position: absolute;
      top: 75px;
      left: 20px;
      .menu-box-all {
        width: 118px;
        height: 90px;
        position: relative;
        background-image: url(../img/shop-menu1.png);
        background-size: 100%;
        cursor: pointer;
        &:active {
          top: 1px;
        }
        &.select {
          background-image: url(../img/shop-menu2.png);
        }
        .menu-pic {
          width: 80px;
          height: 60px;
          position: absolute;
          left: 19px;
        }
        .menu-text {
          width: 104px;
          height: 18px;
          position: absolute;
          top: 60px;
          left: 8px;
          text-align: center;
          font-size: 14px;
          text-transform: uppercase;
          font-weight: bold;
          line-height: 20px;
          color: #30261f;
          text-shadow: 0 0 6px #fff;
        }
      }
    }
    .store-content-right-box {
      width: 870px;
      height: 450px;
      position: absolute;
      top: 75px;
      left: 145px;
      .store-item-box-all {
        width: 700px;
        height: 450px;
        position: absolute;
        background: linear-gradient(180deg, #b9aba1 0%, #9e8b7d 100%);
        border-radius: 6px;
        box-shadow: 0 2px 2px 0 #5e544c;
        .store-item-box-scroll {
          width: 686px;
          height: 430px;
          position: absolute;
          overflow: hidden;
          overflow-y: scroll;
          top: 10px;
          margin-left: 10px;
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
              .color-btn.diamond {
                width: 120px;
                height: 40px;
                position: absolute;
                top: 125px;
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
              .item-box {
                width: 80px;
                height: 80px;
                position: absolute;
                top: 34px;
                left: 30px;
                background: linear-gradient(180deg, #949699 0%, #656769 100%);
                border-radius: 8px;
                box-shadow: inset 0 0 0 2px #cfd1d3, 0 2px 4px 0 #50463f;
                img {
                  width: 75px;
                  position: absolute;
                  top: 2px;
                  left: 2px;
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
                  &.shards {
                    background-image: url(../img/ic-abil-greenline.png);
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
      .store-sale-box {
        width: 150px;
        height: 450px;
        position: absolute;
        left: 710px;
        background: linear-gradient(
          180deg,
          #585a5c 0%,
          #d5d8da 50%,
          #585a5b 70%,
          #a1a4a6 85%,
          #585a5b 100%
        );
        border-radius: 10px;
        box-shadow: 0 2px 2px 0 #5e544c;
        &:before {
          content: "";
          width: 146px;
          height: 446px;
          position: absolute;
          top: 2px;
          left: 2px;
          background-image: url(../img/ts_confirm_bk-1.jpg);
          background-size: 412%;
          background-repeat: no-repeat;
          overflow: hidden;
          background-position: center;
          border-radius: 8px;
        }
        .store-sale-box-name {
          width: 150px;
          height: 36px;
          position: absolute;
          background: linear-gradient(
            180deg,
            #585a5c 0%,
            #d5d8da 50%,
            #585a5b 70%,
            #a1a4a6 85%,
            #585a5b 100%
          );
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.35);
          border-radius: 10px 10px 0 0;
          text-align: center;
          line-height: 36px;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: bold;
          color: #3b291b;
          text-shadow: 0 0 10px #fff;
        }
        .store-sale-all-box {
          width: 146px;
          height: 408px;
          position: absolute;
          top: 40px;
          left: 2px;
          .store-sale {
            width: 146px;
            height: 200px;
            position: relative;
            display: inline-block;
            .store-sale-name-box {
              width: 140px;
              height: 36px;
              position: absolute;
              top: 2px;
              left: 3px;
              display: table;
              .store-sale-name {
                width: 100%;
                height: 100%;
                position: relative;
                display: table-cell;
                vertical-align: middle;
                text-align: center;
                text-transform: uppercase;
                font-size: 14px;
                font-weight: bold;
                color: #3b291b;
              }
            }
            .store-sale-pic {
              width: 90px;
              height: 90px;
              position: absolute;
              top: 40px;
              left: 26px;
              background: linear-gradient(
                180deg,
                #585a5c 0%,
                #d5d8da 50%,
                #585a5b 70%,
                #a1a4a6 85%,
                #585a5b 100%
              );
              border-radius: 8px;
              box-shadow: 0 2px 6px 0 #3b291b;
              &:before {
                content: "";
                width: 86px;
                height: 86px;
                position: absolute;
                top: 2px;
                left: 2px;
                background: linear-gradient(180deg, #b59b87 0%, #7f6858 100%);
                border-radius: 6px;
                box-shadow: inset 0 0 10px 0 #3b291b;
              }
              img {
                position: absolute;
                top: 7px;
                left: 7px;
                width: 75px;
                height: 75px;
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
              .newtime {
                top: 54px;
                left: 42px;
                .newclocktime {
                  left: 22px;
                }
              }
              .rate {
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
                width: 98px;
                height: 22px;
                background-size: 98px 22px;
                text-align: center;
                &.shards {
                  background-image: url(../img/ic-abil-greenline.png);
                }
              }
            }
            .color-btn.diamond {
              width: 120px;
              height: 40px;
              position: absolute;
              top: 140px;
              left: 13px;
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
          }
        }
      }
    }
  }

  .shop-hint-box {
    position: absolute;
    top: 64px;
    z-index: 99999;
    border-radius: 8px;
    text-align: center;
    background: linear-gradient(
      0deg,
      rgba(125, 127, 129, 0.75) 0%,
      #d5d8da 100%
    );

    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
    border-radius: 8px;
    box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.75),
      0 2px 6px rgba(0, 0, 0, 0.75);
    .hint-name,
    .hint-about {
      width: 268px;
      height: 24px;
      position: relative;
      top: 4px;
      color: #30261f;
      font-size: 20px;
      font-weight: bold;
      padding: 6px;
      text-align: center;
      text-transform: uppercase;
      text-shadow: 0 0 4px #fff;
    }
    .hint-name {
      width: 90%;
      height: 30px;
      position: relative;
      top: 6px;
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      text-transform: uppercase;
      color: #383a40;
      &:before {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        top: 42px;
        left: 0px;
        background-color: #97999b;
      }
    }
    .hint-about {
      height: auto;
      position: relative;
      margin: 0 auto;
      padding: 14px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.75);
    }
    .hint-bonus {
      width: 220px;
      height: 40px;
      position: relative;
      top: -10px;
      background-color: #f6d458;
      margin: auto;
      border-radius: 8px;
      font-size: 20px;
      color: #30261f;
      font-weight: bold;
      line-height: 40px;
    }
  }

  .color-btn {
    width: 90px;
    height: 40px;
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
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
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
`;

export { stylesFileName, pageStyles };
