import { css } from "@emotion/react";

const ScreenFortunaRoundRatingStyles = css`
  .popup-layer .m-popup.fortuna-main-round-rating {
    width: 750px;
    height: 530px;
    left: 225px;
    top: 55px;
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
    .rating-main-box {
      width: 730px;
      height: 460px;
      top: 60px;
      left: 10px;
      position: absolute;
      background-color: #9c8c7a;

      .fw-right-side-content-box {
        width: 100%;
        height: 400px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #8f7c68;
        .fw-rating-ped-box-all {
          width: 128px;
          height: 390px;
          position: absolute;
          bottom: 5px;
          left: 5px;
          .fw-rating-ped-box-p1,
          .fw-rating-ped-box-p2,
          .fw-rating-ped-box-p3 {
            width: 100%;
            height: 145px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #786659;
            color: #fff;
            padding: 20px 2px 0;
            box-sizing: border-box;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);

            .place {
              font-weight: bold;
            }

            & > span {
              display: inline-block;
              position: relative;
              height: 18px;
              width: 26px;

              &:before {
                content: "";
                width: 26px;
                height: 26px;
                background-image: url(../img/trophy-bonus-diamond.png);
                background-size: 100%;
                position: absolute;
                top: 0px;
                left: 0px;
              }
            }
            //.fw-rating-ped-pic{
            //    width: 100px; height: 100px; position: absolute;     top: 10px;
            //    left: 14px;
            //    img{width: 100px;}
            //}
            .fw-rating-ped-num-box {
              width: 100%;
              height: 24px;
              position: absolute;
              bottom: 0;
              left: 0;
              background: linear-gradient(180deg, #4f4339 0%, #352c25 100%);
              display: table;
              .fw-rating-ped-num {
                width: 100%;
                height: 100%;
                position: relative;
                display: table-cell;
                color: #fff;
                font-size: 16px;
                font-weight: bold;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                vertical-align: middle;
                text-align: center;
              }
            }
          }
          .fw-rating-ped-box-p2 {
            height: 125px;
            top: 152px;
            padding: 30px 3px 0px;

            .fw-rating-ped-pic {
              top: 12px;
              left: 25px;
            }
          }
          .fw-rating-ped-box-p3 {
            height: 105px;
            top: 285px;
            .fw-rating-ped-pic {
              top: 2px;
              left: 25px;
            }
          }
          .fw-master-pic {
            width: 66px;
            height: 66px;
            position: absolute;
            top: 0;
            left: 0;
            background-image: url(../img/gild-icon-66.png);
            background-size: 100%;
            background-repeat: no-repeat;
          }
          &.check-p1 {
            .fw-rating-ped-box-p1 {
              .fw-rating-ped-pic {
                left: 0;
              }
            }
            .fw-master-pic {
              top: 40px;
              left: 100px;
            }
          }
          &.check-p2 {
            .fw-rating-ped-box-p2 {
              .fw-rating-ped-pic {
                left: 0;
              }
            }
            .fw-master-pic {
              top: 182px;
              left: 100px;
            }
          }
          &.check-p3 {
            .fw-rating-ped-box-p3 {
              .fw-rating-ped-pic {
                left: 0;
              }
            }
            .fw-master-pic {
              top: 305px;
              left: 100px;
            }
          }
        }
        .rating-scroll-name-box {
          width: 576px;
          height: 24px;
          position: absolute;
          top: 5px;
          right: 15px;
          color: #eed9cb;
          font-weight: bold;
          line-height: 24px;
          font-size: 14px;
          text-align: center;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
          background: linear-gradient(180deg, #6d5e52 0%, #493d34 100%);
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
          .rating-scroll-name {
            width: 100px;
            height: 24px;
            line-height: 24px;
            position: absolute;
            &.var1 {
              width: 100px;
            }
            &.var2 {
              width: 376px;
              left: 100px;
              background: linear-gradient(180deg, #4f4339 0%, #352c25 100%);
            }
            &.var3 {
              width: 100px;
              left: 476px;
            }
          }
        }
        .rating-scroll-box {
          width: 585px;
          height: 359px;
          position: absolute;
          top: 36px;
          right: 6px;

          .rating-scroll {
            display: block;
            position: absolute;
            left: 0px;
            top: 0px;
            bottom: 0px;
            right: 0px;
            overflow-y: scroll;
            padding-top: 0px;
            padding-right: 6px;
            &::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
              background-color: #473c3c;
            }
            &::-webkit-scrollbar {
              width: 3px;
              background-color: #9e8b7d;
            }
            &::-webkit-scrollbar-thumb {
              background: linear-gradient(
                0deg,
                #ffe199,
                #f4c657,
                #f4c657,
                #ffe199
              );
            }

            .rating-card {
              width: 100%;
              height: 30px;
              background-color: #786659;
              color: #fff;
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
              font-size: 16px;
              line-height: 30px;
              text-align: center;
              .number,
              .name,
              .points {
                width: 100px;
                height: 30px;
                position: absolute;
              }
              .name {
                width: 365px;
                background-color: #857163;
                margin-left: 100px;
                text-align: left;
                padding-left: 10px;
              }
              .points {
                width: 100px;
                margin-left: 475px;
              }
              &.color2 {
                background-color: #8f7a6b;
                .name {
                  background-color: #9b8777;
                }
              }
              &.active {
                background-color: #83ae55;
                .name {
                  background-color: #91b75e;
                }
              }
            }
            .rating-card-rank {
              width: 100%;
              height: 30px;
              font-weight: bold;
              font-size: 18px;
              color: #5c4e43;
              text-align: center;
              text-transform: uppercase;
              line-height: 30px;
              text-shadow: 0 2px 6px rgba(255, 255, 255, 0.75);
              &.bronze {
                background: linear-gradient(
                  180deg,
                  #8e7453 0%,
                  #e3c7a3 40%,
                  #8f7553 75%,
                  #ae916a 90%,
                  #8e7453 100%
                );
              }
              &.silver {
                background: linear-gradient(
                  180deg,
                  #585a5c 0%,
                  #d5d8da 40%,
                  #585a5b 75%,
                  #a1a4a6 90%,
                  #585a5b 100%
                );
              }
              &.gold {
                background: linear-gradient(
                  180deg,
                  #c68300 0%,
                  #f4dfb6 40%,
                  #c68200 75%,
                  #fad489 90%,
                  #c78302 100%
                );
              }
              &.top {
                height: 38px;
                line-height: 38px;
                color: #0c2b41;
                background: linear-gradient(
                  180deg,
                  #93a6bc 0%,
                  #f5f7f8 40%,
                  #617e9e 75%,
                  #e7ebf1 90%,
                  #5e7c9c 100%
                );
                .top-name-diamond {
                  position: relative;
                  height: 38px;
                  top: -6px;
                  &:before {
                    content: "";
                    width: 30px;
                    height: 30px;
                    background-image: url(../img/trophy-bonus-diamond.png);
                    background-size: 100%;
                    position: relative;
                    display: inline-block;
                    top: 8px;
                    margin: 0 10px 0 10px;
                  }
                  &:after {
                    content: "";
                    width: 30px;
                    height: 30px;
                    background-image: url(../img/trophy-bonus-diamond.png);
                    background-size: 100%;
                    position: relative;
                    display: inline-block;
                    top: 8px;
                    margin: 0 10px 0 10px;
                  }
                }
              }
            }
          }
        }
      }

      .color-btn {
        width: 220px;
        height: 40px;
        position: absolute;
        bottom: 10px;
        left: 243px;
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
      }
    }
  }
`;

export default ScreenFortunaRoundRatingStyles;
