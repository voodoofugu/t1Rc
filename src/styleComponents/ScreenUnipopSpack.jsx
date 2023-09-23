import { css } from "@emotion/react";

const ScreenUnipopSpackStyles = css`
  .popup-layer .m-popup.unipop-starterpack {
    display: block;
    width: 900px;
    height: 600px;
    position: absolute;
    left: 150px;
    top: 20px;
    .title {
      background: linear-gradient(to right, #fad488, #dd9200, #fad488);
      color: #3c3934;
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
    }
    .color-box {
      background-image: url(../img/ts_confirm_bk-1.jpg);
      background-size: 100%;
      border-radius: 0 0 5px 5px;
      box-shadow: inset 0 0 4px 2px rgba(0, 0, 0, 0.4);
      &:before {
        display: none;
      }
      &:after {
        display: none;
      }
    }
    .color-box-decor {
      width: 170px;
      height: 620px;
      position: absolute;
      top: -10px;
      left: -46px;
      background-image: url(../img/unipop-bg1.png);
      background-size: 100%;
      &:before {
        content: "";
        width: 168px;
        height: 86px;
        position: absolute;
        top: 540px;
        left: 190px;
        background-image: url(../img/unipop-bg2.png);
        background-size: 100%;
      }
      &:after {
        content: "";
        width: 200px;
        height: 540px;
        position: absolute;
        top: 90px;
        left: 800px;
        background-image: url(../img/unipop-bg3.png);
        background-size: 100%;
      }
    }
    .unipop-box-content-all {
      width: 850px;
      height: 500px;
      position: absolute;
      top: 74px;
      left: 24px;
      border-radius: 2px;
      background: rgba(255, 238, 200, 0.8);
      box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.4),
        0 2px 4px rgba(0, 0, 0, 0.4);
      .unipop-box-left-box {
        width: 190px;
        height: 500px;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(230, 181, 84, 0.7);
        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.35);
        .unipop-scroll-box {
          width: 185px;
          height: 490px;
          position: absolute;
          top: 5px;
          left: 5px;
          font-size: 0;
          overflow: hidden;
          overflow-y: scroll;
          transform: rotateY(180deg);
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
              to left,
              #b26d12 2%,
              #f4b766 4%,
              #fff,
              #f5de80,
              #f4b766,
              #b26d12
            );
          }
          .unipop-box {
            width: 150px;
            height: 80px;
            position: relative;
            display: inline-block;
            margin: 2px 0 2px 0;
            transform: rotateY(180deg);
            top: 0;
            left: 4px;
            cursor: pointer;
            border-radius: 10px;
            background: linear-gradient(
              180deg,
              #8e7453 0%,
              #e3c7a3 50%,
              #8f7553 70%,
              #ae916a 85%,
              #8f7553 100%
            );
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
            &:before {
              content: "";
              width: 146px;
              height: 76px;
              position: absolute;
              top: 2px;
              left: 2px;
              background: linear-gradient(0deg, #8e7453 0%, #e3c7a3 100%);
              border-radius: 8px;
            }
            .text {
              width: 100%;
              height: 100%;
              position: relative;
              color: #fff;
              font-size: 20px;
            }
            .unipop-gold-arrow {
              width: 20px;
              height: 62px;
              position: absolute;
              top: 9px;
              left: 148px;
              background-image: url(../img/unipop-gold-arrow.png);
              background-size: 100%;
              visibility: hidden;
            }
            .unipop-box-pic {
              width: 140px;
              height: 70px;
              position: absolute;
              top: 5px;
              left: 5px;
              border-radius: 6px;
              overflow: hidden;
              img {
                width: 140px;
              }
            }
            &.select {
              background: linear-gradient(
                180deg,
                #c68300 0%,
                #f4dfb6 50%,
                #c68200 70%,
                #fad489 85%,
                #c78302 100%
              );
              &:before {
                content: "";
                background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
              }
              .unipop-gold-arrow {
                visibility: visible;
              }
            }
            &:active {
              top: 1px;
            }
          }
        }
      }
      .unipop-box-right-box {
        width: 640px;
        height: 480px;
        position: absolute;
        top: 10px;
        left: 200px;
        .right-box-f {
          width: 640px;
          height: 480px;
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(
            180deg,
            #8e7453 0%,
            #e3c7a3 50%,
            #8f7553 70%,
            #ae916a 85%,
            #8f7553 100%
          );
          background-size: 100%;
          background-position-y: bottom;
          border-radius: 14px;
          .right-box-f-name-box {
            width: 640px;
            height: 43px;
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(180deg, #c78302, #f4dfb6, #c68300);
            border-radius: 10px 10px 0 0;
            color: #3c3934;
            font-weight: bold;
            font-size: 24px;
            line-height: 43px;
            text-transform: uppercase;
            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
          }
          .red-timer-box {
            width: 110px;
            height: 50px;
            position: absolute;
            top: -2px;
            left: -6px;
            background-image: url(../img/timer-back-50.png);
            background-size: 100%;
            .time-text,
            .time {
              color: #fff000;
              text-shadow: 0 1px 2px #680000;
              font-size: 16px;
              font-weight: bold;
              position: relative;
              top: 8px;
            }
            .time {
              color: #fff;
              font-size: 14px;
              top: 5px;
              font-weight: normal;
            }
          }
          .noobpack-box,
          .kingpack-box {
            width: 220px;
            height: 416px;
            background: linear-gradient(
              0deg,
              #968b87 0%,
              #c2b6b1 54%,
              #e3dad7 56%,
              #bdada8 100%
            );
            position: absolute;
            top: 55px;
            left: 10px;
            border-radius: 10px;
            box-shadow: 0 1px 12px #000;
            transform: scale(0.98);
            transition: ease-in-out 0.1s;
            &:hover {
              transform: scale(1);
              transition: ease-in-out 0.1s;
              box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.4),
                0 1px 10px rgb(255, 243, 211), 0 1px 12px #000;
              &:before {
                box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.6);
              }
            }
            &:before {
              content: "";
              width: 214px;
              height: 410px;
              display: block;
              position: absolute;
              top: 3px;
              left: 3px;
              background: linear-gradient(
                -45deg,
                #e3dad7 0%,
                #d8c9c3 26%,
                #e3dad7 26%,
                #e3dad7 48%,
                #d6c8c2 48%,
                #d6c8c2 60%,
                #e3dad7 60%,
                #e3dad7 70%,
                #d4c3be 70%,
                #e3dad7 100%
              );
              border-radius: 8px;
            }
            .cardnameback {
              height: 50px;
              min-width: 102px;
              background-image: url(../img/noobpackback-line.png);
              max-width: 200px;
              position: relative;
              top: -11px;
              display: inline-block;
              margin: auto;
              z-index: 1;
              &:before {
                content: "";
                width: 38px;
                height: 50px;
                position: absolute;
                right: -38px;
                display: block;
                background-image: url(../img/noobpackback-l.png);
                transform: scale(-1, 1);
                top: 0px;
              }
              &:after {
                content: "";
                width: 38px;
                height: 50px;
                position: absolute;
                left: -38px;
                display: block;
                background-image: url(../img/noobpackback-l.png);
                top: 0px;
              }
              .card-text {
                font-size: 18px;
                color: #fff;
                text-shadow: 0 0 6px #000;
                position: relative;
                height: 33px;
                display: inline-block;
                z-index: 10;
                line-height: 34px;
                text-transform: uppercase;
                background: linear-gradient(
                  90deg,
                  transparent,
                  rgba(3, 235, 245, 0.7),
                  rgba(3, 235, 245, 0.7),
                  transparent
                );
              }
            }
            .moredps-box {
              top: 54px;
              left: 118px;
            }
            .moregold-box {
              display: block;
              width: 100px;
              height: 240px;
              position: absolute;
              &.noob,
              &.noob2 {
                width: 100px;
                height: 144px;
                left: 8px;
                top: 176px;
                .pack-pack {
                  background-color: #e2c283;
                  //box-shadow: 0 0 20px #ffecbd, 0 0 40px #ffecbd, 0 0 60px #ffecbd;
                  img {
                    width: 100px;
                  }
                  .rate-text {
                    width: 100px;
                    height: 26px;
                    top: 52px;
                    line-height: 26px;
                    font-size: 20px;
                  }
                  .more-text {
                    width: 100px;
                    height: 60px;
                    font-size: 16px;
                    line-height: 16px;
                    top: 98px;
                    left: 50%;
                    transform: translate(-50%);
                  }
                }
              }
              &.noob2 {
                left: 112px;
              }
              .pack-pack {
                width: 90px;
                height: 90px;
                background-color: #f9c035;
                position: relative;
                display: inline-block;
                border-radius: 100%;
                //box-shadow: 0 0 20px #ffe59f, 0 0 40px #ffe59f, 0 0 60px #ffe59f;
                img {
                  width: 100px;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                }
                .rate-text {
                  width: 100px;
                  height: 25px;
                  background: linear-gradient(
                    90deg,
                    #a80000 0%,
                    #db0000 10%,
                    #db0000 90%,
                    #a80000 100%
                  );
                  border-radius: 4px;
                  position: absolute;
                  top: 56px;
                  left: -5px;
                  color: #fff;
                  font-size: 18px;
                  font-weight: bolder;
                  text-shadow: 0 0 8px #480000;
                  line-height: 26px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.45);
                  text-transform: uppercase;

                  &.small-text {
                    font-size: 10px;
                  }
                }
                .more-text {
                  width: 110px;
                  height: 80px;
                  font-weight: bolder;
                  color: #61490d;
                  text-shadow: 0 0 4px #fff, 0 0 8px #fff;
                  position: absolute;
                  top: 146px;
                  font-size: 20px;
                  text-transform: uppercase;
                  line-height: 22px;
                  left: 10px;
                }
              }
            }
            .buy-box {
              display: block;
              width: 210px;
              height: 60px;
              position: absolute;
              top: 351px;
              left: 5px;
              background-color: rgba(168, 168, 168, 0.75);
              border-radius: 0 0 6px 6px;
              .buy-text-box {
                position: absolute;
                top: -22px;
                left: 50%;
                transform: translate(-50%);

                //display: inline-block;
                height: 46px;
                width: 190px;
                color: #4d3a10;
                font-weight: bold;
                //padding: 4px;
                .moregold-oldprice {
                  font-size: 16px;
                  color: #5a4915;
                  text-shadow: 0 1px 0px #fff;

                  span.ss {
                    text-decoration: line-through;
                  }
                }
                .moregold-newprice {
                  font-size: 19px;
                  font-weight: bold;
                  color: #fff;
                  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.5),
                    0 0 4px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.5);
                  margin-top: 2px;
                  height: 33px;
                }
              }
              .color-btn {
                position: absolute;
                bottom: 7px;
                left: 50%;
                transform: translate(-50%);
                width: 168px;
                line-height: 20px;
                height: 46px;

                .color-btn-text {
                  font-size: 20px;
                }
              }
            }
            .card-box {
              width: 142px;
              height: 270px;
              position: relative;
              display: inline-block;
              top: 4px;
              border-radius: 6px;
              box-shadow: 0 0 6px #855e00, 0 0 10px #855e00;
              background: linear-gradient(
                0deg,
                #be8f19 0%,
                #af8617 25%,
                #fcf8ed 50%,
                #e3ae20 83%,
                #775b11 100%
              );
              &:first-of-type {
                z-index: 1;
              }
              .card {
                width: 136px;
                height: 264px;
                position: absolute;
                top: 3px;
                left: 3px;
                border-radius: 4px;
                overflow: hidden;
                .card-img {
                  width: auto;
                  height: 100%;
                  position: absolute;
                  //left: -30px;
                  left: 50%;
                  transform: translate(-50%);
                }
              }
              .card-name {
                width: 150px;
                height: 40px;
                box-sizing: border-box;
                padding-top: 2px;
                background: linear-gradient(
                  90deg,
                  #3293aa 0%,
                  #02819e 6%,
                  #02d0e1 50%,
                  #02819e 94%,
                  #3293aa 100%
                );
                border-radius: 6px;
                position: absolute;
                bottom: 2px;
                left: 50%;
                transform: translate(-50%);
                //top: 246px;
                //left: -5px;
                font-weight: bold;
                color: #fff;
                font-size: 16px;
                text-shadow: 0 0 6px rgba(0, 0, 0, 0.45),
                  0 4px 6px rgba(0, 0, 0, 0.45), 0 1px 1px rgba(0, 0, 0, 0.6);
                line-height: 16px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.45),
                  0 0 0 2px rgba(0, 0, 0, 0.2),
                  inset 0 1px 1px rgba(255, 255, 255, 0.4);
                span.cn {
                  font-size: 12px;
                }
              }
              .cardnameback {
                top: -15px;
              }

              &.mini {
                position: absolute;
                width: 94px;
                height: 180px;
                top: 20px;
                .card {
                  width: 88px;
                  height: 174px;
                }

                .card-name {
                  width: 100px;
                  height: 30px;
                  font-size: 12px;
                  line-height: 12px;
                  span.cn {
                    font-size: 8px;
                  }
                }

                & + .mini {
                  right: 20px;
                }
              }
            }
            .card-box.ava {
              width: 94px;
              height: 94px;
              border-radius: 100%;
              .card {
                width: 88px;
                height: 88px;
                border-radius: 100%;
                overflow: hidden;
                .card-img {
                  width: 100%;
                  height: auto;
                }
              }
              .card-name {
                bottom: -8px;
              }
            }
          }
          .noobpack-box {
            .card-box.mini {
              left: 14px;
              top: 50px;
            }
          }
          .kingpack-box {
            width: 394px;
            left: 238px;
            background: linear-gradient(
              180deg,
              #c4a600 0%,
              #e5b427 20%,
              #e3dad7 40%,
              #bf8e17 100%
            );
            &:before {
              content: "";
              width: 388px;
              background: #ffc73e;
              background: linear-gradient(
                -45deg,
                #fff5c7 0%,
                #ffe883 26%,
                #fff2b6 26%,
                #fff2b6 48%,
                #ffe676 48%,
                #ffe676 60%,
                #fff5c7 60%,
                #fff5c7 70%,
                #ffe883 70%,
                #fff5c7 100%
              );
              // box-shadow: inset 0 0 80px #ffe59f,
              //     inset 0 0 100px #ffe59f;
            }
            .moregold-box {
              transform: scale(0.7);
              &.king {
                top: 172px;
                left: -2px;
                width: 110px;
                .pack-pack {
                  .rate-text {
                    left: -5px;
                  }
                  .more-text {
                    left: 0;
                  }
                }
              }
              &.two {
                top: 244px;
                left: -2px;
              }
              &.noob {
                display: none;
              }
            }
            .buy-box {
              width: 384px;
              left: 5px;
              background-color: rgba(242, 184, 44, 0.75);
              .btn-box {
                width: 384px;
              }
            }
            .moredps-box {
              top: 228px;
              left: 86px;
              transform: scale(0.7);
            }
            .morediamond-box {
              top: 228px;
              left: 160px;
              transform: scale(0.7);
            }
            .card-box1 {
              left: 20px;
            }
            .card-box2 {
              left: 126px;
              position: absolute;
              transform: scale(0.718);
              top: -28px;
            }
            .card-box3 {
              left: 278px;
            }
            .card-box.mini.ava {
              top: 220px;
              left: 276px;
              &:before {
                content: "+";
                position: absolute;
                color: #fffc93;
                font-size: 80px;
                font-weight: 700;
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4),
                  0 2px 2px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2),
                  0 0 10px rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.4);
                z-index: 1;
                left: -26px;
              }
              .cardnameback {
                top: 72px;
                transform: scale(0.8);
                .card-text {
                  font-size: 16px;
                }
              }
            }
          }
          .or-box {
            width: 50px;
            height: 30px;
            position: absolute;
            top: 244px;
            left: 208px;
            line-height: 30px;
            font-size: 18px;
            color: #fff;
            text-shadow: 0 0 6px #000;
            box-shadow: 0 4px 6px rgba(255, 255, 255, 0.45),
              0 0 6px 2px rgba(255, 255, 255, 0.45),
              0 0 1px 1px rgba(255, 255, 255, 0.8);
            border-radius: 8px;
            background: linear-gradient(
              90deg,
              #0191b2 0%,
              #00a0ac 50%,
              #0191b2 100%
            );
          }
          .sale-box {
            width: 110px;
            height: 110px;
            position: absolute;
            top: -31px;
            right: -32px;
            background-image: url(../img/zvezda.png);
            background-size: 100%;
            display: table;
            transform: scale(0.78) rotate(16deg);
            .sale-text {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-weight: bold;
              font-size: 30px;
              line-height: 30px;
              color: #fff000;
              text-shadow: 0 0 10px #541800;
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }

  .moredps-box,
  .morediamond-box {
    position: relative;
    width: 90px;
    height: 90px;
    position: absolute;
    background: #c2b08b;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4),
      0 1px 2px rgba(255, 255, 255, 0.4);
    &:before {
      content: "";
      width: 75px;
      height: 75px;
      display: block;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
      margin: 2px 0 0 -2px;
    }
    .value-text {
      position: absolute;
      font-size: 28px;
      font-weight: 700;
      color: #fff;
      left: 12px;
      top: 54px;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4), 0 2px 2px rgba(0, 0, 0, 0.2),
        0 2px 10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.4),
        0 0 10px rgba(0, 0, 0, 0.4);
    }
  }
  .moredps-box {
    &:before {
      background-image: url(../img/ic-abil-dps2.png);
    }
  }
  .morediamond-box {
    &:before {
      background-image: url(../img/diamond5.png);
      background-size: 120%;
    }
  }

  .color-btn {
    width: 90px;
    height: 50px;
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
    p {
      display: inline-block;
      margin: 0;
    }
    &:active {
      box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
        inset 0 2px 2px rgba(0, 0, 0, 0.2);
      .color-btn-text {
        top: 12px;
      }
    }
    &.green {
      background: linear-gradient(0deg, #7cbc30 0%, #baf279 100%);
    }
  }
`;

export default ScreenUnipopSpackStyles;
