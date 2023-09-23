import { css } from "@emotion/react";

const ScreenRatingRemanderStyles = css`
  .popup-layer .m-popup.rremander {
    width: 858px;
    height: 600px;
    margin-left: -171px;
    top: 20px;
    position: absolute;
    &:before {
      content: "";
      background: linear-gradient(0deg, #938274 0%, #dbc2ad 100%);
    }
    .color-box {
      display: none;
    }
    .rating-girl {
      background: none;
      width: 355px;
      top: 77px;
      left: 9px;
    }
    .ratingright-box {
      width: 452px;
      height: 510px;
      position: absolute;
      top: 72px;
      margin-left: 377px;
      // background-color: red;
      .rating-text-box {
        width: 400px;
        height: 70px;
        position: relative;
        display: table;
        margin: 0 auto;
        // background-color: green;
        .rating-text {
          color: #453930;
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          display: table-cell;
          vertical-align: middle;
          text-shadow: 0 0 6px #ffffff;
        }
        &.bottom {
          top: 206px;
        }
      }
      .rating-slot-box {
        width: 452px;
        height: 200px;
        position: absolute;
        top: 92px;
        margin-left: 0px;
        background-color: #9f8c7e;
        border-radius: 10px;
        .rating-slot {
          width: 88px;
          height: 60px;
          position: absolute;
          margin-left: 6px;
          top: 10px;
          &:before {
            content: "";
            width: 84px;
            height: 54px;
            position: absolute;
            top: 3px;
          }
          &.top-right {
            margin-left: 182px;
          }
          &.bottom-right {
            margin-left: 182px;
            top: 124px;
          }
          &.bottom-left {
            margin-left: 6px;
            top: 124px;
          }
          &.legendary {
            top: 40px;
            margin-left: 86px;
            width: 138px;
            height: 108px;
            &:before {
              content: "";
              width: 134px;
              height: 102px;
              top: 3px;
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
          }
          &.notreceived {
            .notreceived {
              width: 92px;
              height: 65px;
              position: absolute;
              top: -2px;
              margin-left: -2px;
              background-color: rgba(0, 0, 0, 0.5);
              border-radius: 6px;
              display: none;
              .notreceived-text {
                width: 86px;
                position: relative;
                text-align: center;
                color: #fff;
                font-size: 12px;
                text-transform: uppercase;
                font-weight: bold;
                display: table-cell;
                vertical-align: middle;
              }
            }
            &.legendary .notreceived {
              width: 141px;
              height: 112px;
            }
            &.lock .notreceived {
              display: table;
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
        }
      }
      .getpoints-box {
        top: 350px;
        margin-left: 0px;
      }
      .color-btn {
        top: 456px;
        margin-left: 150px;
      }
    }
  }
`;

export default ScreenRatingRemanderStyles;
