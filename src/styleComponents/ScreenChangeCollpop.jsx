import { styled, css } from "styled-components";

const ScreenChangeCollpopStyles = css`
  .popup-layer .m-popup.change-collpop {
    width: 876px;
    height: 548px;
    left: 162px;
    top: 46px;
    .title {
      color: #572f14;
    }
    .color-box {
      background: linear-gradient(
        136deg,
        #8e7453 0%,
        #e3c7a3 50%,
        #ae916a 85%,
        #8f7553 100%
      );
      box-shadow: inset 0 0 4px 2px rgba(0, 0, 0, 0.2);
      &:before {
        display: none;
      }
      &:after {
        display: none;
      }
    }
    .close-btn-box {
      width: 840px;
      height: 70px;
      position: absolute;
      top: 460px;
      margin-left: 18px;
      background-color: #b09573;
      border-radius: 6px;
      box-shadow: inset 0 1px 2px 0 rgba(#000, 0.45);
      .color-btn.close {
        width: 180px;
        height: 50px;
        top: 10px;
        .color-btn-text {
          top: 14px;
          font-size: 16px;
        }
        &:active {
          .color-btn-text {
            top: 15px;
          }
        }
      }
    }
    .collpop-cont {
      width: 840px;
      height: 304px;
      position: absolute;
      top: 68px;
      margin-left: 18px;
      .box-coll-all {
        width: 752px;
        height: 386px;
        position: absolute;
        margin-left: 44px;
        font-size: 0px;
        .box-coll {
          width: 150px;
          height: 100%;
          position: relative;
          display: inline-block;
          .openchest-in {
            width: 100px;
            height: 100px;
            position: relative;
            display: inline-block;
            background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
            margin: 4px;
            border-radius: 10px;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);
            &:before {
              content: "";
              width: 3px;
              height: 60px;
              position: absolute;
              top: 100px;
              background-color: #fefa95;
              box-shadow: 0 1px 2px 0 rgba(#000, 0.45);
            }
            .inchest-pic {
              width: 120px;
              height: 120px;
              top: -20px;
              left: -8px;
              position: absolute;
              margin: unset;
            }
            .openchest-in-count {
              width: 100%;
              height: 26px;
              position: absolute;
              top: 72px;
              text-align: center;
              color: #572f14;
              font-size: 18px;
              font-weight: bold;
              text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
            }
            .openchest-in-check {
              width: 84px;
              height: 84px;
              position: absolute;
              top: 8px;
              margin-left: 8px;
              background-image: url(../img/paycheck.png);
              background-size: 100%;
              display: none;
            }
            .openchest-bonus-pic {
              width: 90px;
              height: 90px;
              margin-left: 5px;
              overflow: hidden;
              top: 5px;
              border-radius: 8px;
              position: absolute;
              display: none;
            }
            .openchest-pic {
              height: 90px;
              width: auto;
            }
            &.check {
              .openchest-in-check {
                display: block;
              }
            }
            &.picture {
              .inchest-pic {
                display: none;
              }
              .openchest-in-count {
                display: none;
              }
              .openchest-bonus-pic {
                display: block;
              }
            }
          }

          .box-coll-name {
            width: 100%;
            height: 40px;
            position: relative;
            top: 222px;
            text-align: right;
            color: #5a4a3d;
            font-size: 18px;
            font-weight: bold;
            text-transform: uppercase;
            text-shadow: 0 0 6px #fff;
          }
          .change-chest {
            width: 120px;
            height: 120px;
            position: relative;
            top: -20px;
            margin: 0 auto;
            background-image: url(../img/change-sun1.png);
            background-size: 100%;
            &.open {
              background-image: url(../img/change-sun3.png);
            }
          }
          .change-line {
            width: 15px;
            height: 64px;
            position: absolute;
            top: 256px;
            margin-left: 142px;
            background-image: url(../img/change-line.png);
            background-size: 100%;
          }
        }
        .box-coll.five {
          .change-line {
            display: none;
          }
        }
        &.coll3 {
          .box-coll {
            width: 250px;
            .change-line {
              margin-left: 242px;
            }
          }
          .box-coll.three {
            .change-line {
              display: none;
            }
          }
          .box-coll.four {
            display: none;
          }
          .box-coll.five {
            display: none;
          }
        }
        &.coll4 {
          .box-coll {
            width: 188px;
            .change-line {
              margin-left: 180px;
            }
          }
          .box-coll.four {
            .change-line {
              display: none;
            }
          }
          .box-coll.five {
            display: none;
          }
        }
      }
    }
    .box-top {
      width: 100px;
      height: 250px;
      position: absolute;
      background-color: green;
    }
    .coll-prg-box-all {
      width: 840px;
      height: 74px;
      position: absolute;
      top: 250px;
      background: linear-gradient(
        180deg,
        #8e7453 0%,
        #e3c7a3 50%,
        #8f7553 70%,
        #ae916a 85%,
        #8f7553 100%
      );
      border-radius: 6px;
      box-shadow: inset 0 2px 4px 0 rgba(#000, 0.45);
      .col-prg-box-ff {
        width: 20px;
        height: 40px;
        position: absolute;
        top: 17px;
        margin-left: 800px;
        background-image: url(../img/change-prgbar-ff1.png);
        background-size: 100%;
        &:before {
          content: "";
          width: 20px;
          height: 40px;
          position: absolute;
          margin-left: -790px;
          transform: scaleX(-1);
          background-image: url(../img/change-prgbar-ff1.png);
          background-size: 100%;
        }
      }
      .col-prg-box {
        width: 760px;
        height: 44px;
        position: absolute;
        top: 15px;
        margin-left: 40px;
        background: linear-gradient(
          180deg,
          #8e7453 0%,
          #e3c7a3 50%,
          #8f7553 70%,
          #ae916a 85%,
          #8f7553 100%
        );
        border-radius: 6px;
        box-shadow: 0 2px 4px 0 rgba(#000, 0.45);
        &:before {
          content: "";
          width: 752px;
          height: 36px;
          position: absolute;
          top: 4px;
          margin-left: -376px;
          background: linear-gradient(0deg, #543f38 0%, #412d26 100%);
          border-radius: 4px;
        }
        .prg-box {
          width: 748px;
          height: 32px;
          position: absolute;
          top: 6px;
          margin-left: 6px;
        }
        .prgbar {
          width: 100%;
          height: 32px;
          position: relative;
          background: linear-gradient(0deg, #307ac7 0%, #82b4e8 100%);
          border-radius: 2px;
        }
      }
    }

    .addchest-box-all {
      width: 600px;
      height: 330px;
      position: absolute;
      top: 86px;
      margin-left: 30px;
      font-size: 0px;
      .addchest-box {
        width: 180px;
        height: 330px;
        position: relative;
        display: inline-block;
        margin: 0 10px 0 10px;
        background: linear-gradient(
          180deg,
          #8e7453 0%,
          #e3c7a3 50%,
          #8f7553 70%,
          #ae916a 85%,
          #8f7553 100%
        );
        border-radius: 10px;
        box-shadow: 0 0 4px 0 rgba(#000, 0.35);
        .chest-icon {
          width: 150px;
          height: 150px;
          position: absolute;
          top: 15px;
          margin-left: 15px;
          img {
            width: 150px;
            height: 150px;
          }
        }
        .value-text-box {
          width: 160px;
          height: 70px;
          position: absolute;
          top: 180px;
          margin-left: 10px;
          .value-text-main,
          .value-text-free {
            width: 100%;
            height: 40px;
            position: relative;
            text-transform: uppercase;
            font-size: 30px;
            font-weight: bold;
            color: #fff;
            text-shadow: 0 2px 2px rgba(#000, 0.5);
          }
          .value-text-free {
            font-size: 16px;
            color: #ffd455;
          }
        }
        .buy-btn {
          width: 160px;
          height: 50px;
          position: absolute;
          top: 266px;
          margin-left: 10px;
          background: linear-gradient(
            32deg,
            #d9b342 0%,
            #eac558 25%,
            #d9b342 50%,
            #eac558 75%,
            #d9b342 100%
          );
          border-radius: 10px;
          cursor: pointer;
          box-shadow: inset 0 -3px 0 0 rgba(#000, 0.25),
            0 2px 4px 0 rgba(#000, 0.45);
          &:active {
            top: 267px;
          }
          .text-box {
            width: 152px;
            height: 22px;
            position: absolute;
            top: 4px;
            margin-left: 4px;
            background-color: #615144;
            border-radius: 6px;
            .crown-icon {
              width: 26px;
              height: 26px;
              position: relative;
              display: inline-block;
              top: -2px;
              background-image: url(../img/ico-real.png);
              background-size: 100%;
              margin-right: 4px;
            }
            .crown-text {
              height: 26px;
              position: relative;
              color: #fedf87;
              display: inline-block;
              top: -9px;
              text-shadow: 0 1px 2px rgba(#000, 0.35);
              font-size: 18px;
              font-weight: bold;
            }
          }
          .btn-text {
            width: 100%;
            height: 20px;
            position: relative;
            top: 25px;
            color: #615144;
            font-size: 18px;
            font-weight: bold;
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;

const ScreenChangeCollpop = styled.div`
  ${ScreenChangeCollpopStyles}
`;

export { ScreenChangeCollpopStyles, ScreenChangeCollpop };
