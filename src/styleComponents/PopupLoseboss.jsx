import { css } from "@emotion/react";

const PopupLosebossStyles = css`
  .popup-layer .m-popup.lose-boss {
    width: 700px;
    height: 459px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .title {
      color: #562e14;
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
    .lb-girl {
      width: 425px;
      height: 475px;
      background-image: url(../img/back-girl.png);
      position: absolute;
      top: -26px;
      margin-left: -94px;
      background-size: 100%;
    }
    .lb-content-box {
      width: 358px;
      height: 374px;
      position: absolute;
      top: 68px;
      margin-left: 320px;
      .lb-text-box {
        width: 358px;
        height: 134px;
        position: relative;
        display: table;
        .lb-text {
          font-size: 20px;
          color: #fff;
          text-transform: uppercase;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.65);
          font-weight: bold;
          display: table-cell;
          vertical-align: middle;
          padding: 0 20px 0 20px;
        }
      }
      .lb-pic {
        width: 300px;
        height: 120px;
        position: absolute;
        top: 140px;
        margin-left: 28px;
        background-image: url(../img/lb-pic.jpg);
        background-size: 100%;
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.65), inset 0 0 0 4px #fff;
        .boss-back-box {
          top: 32px;
          .btn-simple-gold {
            &:active,
            &:hover {
              box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                inset 0 -3px 0px #c87725, 0 0 3px #3d3737, 0 0 7px #000,
                inset 0 0 3px #603806;
              line-height: 42px;
              cursor: default;
            }
          }
        }
      }
      .lb-checkbox-box {
        width: 100%;
        height: 30px;
        position: absolute;
        top: 272px;
        .lb-checkbox {
          width: 28px;
          height: 28px;
          position: relative;
          top: 1px;
          display: inline-block;
          background-image: url(../img/check-off.png);
          background-size: 100%;
          cursor: pointer;
          &:hover {
            filter: brightness(1.1);
          }
          &.active {
            background-image: url(../img/check-on.png);
          }
        }
        .lb-checkbox-text {
          height: 30px;
          position: relative;
          display: inline-block;
          color: #ffdb99;
          font-size: 14px;
          top: -7px;
          text-shadow: 0 0 10px #000;
        }
      }
      .lbclose-btn {
        width: 200px;
        height: 50px;
        position: absolute;
        text-align: center;
        top: 316px;
        border-radius: 6px;
        background-color: #e3be4f;
        margin-left: 78px;
        box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25),
          0 0 6px rgba(0, 0, 0, 0.65);
        cursor: pointer;
        .btn-text {
          width: 200px;
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          color: #fff;
          position: relative;
          text-transform: uppercase;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
          display: inline-block;
          top: 12px;
        }
        &:hover {
          box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25),
            0 0 6px rgba(0, 0, 0, 0.65);
          filter: brightness(1.1);
        }
        &:active {
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25),
            inset 0 -2px 0 rgba(0, 0, 0, 0.25), 0 0 6px rgba(0, 0, 0, 0.25);
          .btn-text {
            top: 14px;
          }
        }
      }
    }
    .btn-simple-green.btn-ok {
      top: 380px;
    }
  }
`;

export default PopupLosebossStyles;
