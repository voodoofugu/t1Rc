import { css } from "@emotion/react";

const ShopDiamondbuyStyles = css`
  .popup-layer .m-popup.diamond-buy {
    width: 1000px;
    height: 470px;
    left: 100px;
    top: 75px;

    &:before {
      content: "";
      background-color: #b7a497;
    }

    .diamond-card-box {
      width: 960px;
      height: 380px;
      position: absolute;
      top: 70px;
      margin-left: 20px;
      font-size: 0px;

      .store-item-add-box {
        width: 184px;
        height: 380px;
        position: relative;
        display: inline-block;
        margin: 0 4px 0 4px;

        &:before {
          content: "";
          width: 176px;
          height: 372px;
          margin-left: -88px;
        }

        .store-item-point-bonus {
          width: 160px;
          top: 26px;
          margin-left: 12px;
        }

        .store-item-diamon {
          top: 70px;
          margin-left: 7px;
        }

        .store-prize-box {
          top: 200px;
          margin-left: 8px;
        }

        .store-button {
          width: 160px;
          top: 310px;
        }
      }
      .cor-button {
        top: 309px;
        right: 27px;
      }
    }

    .store-item-add-box {
      width: 204px;
      height: 320px;
      position: relative;
      display: inline-block;
      background: #c78302;
      border-radius: 8px;
      margin: 6px;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.65);

      &:before {
        content: "";
        width: 196px;
        height: 312px;
        position: absolute;
        top: 4px;
        margin-left: -98px;
        background: linear-gradient(
          0deg,
          #c68300 0%,
          #f4dfb6 40%,
          #c78302 65%,
          #fad489 85%,
          #c78302 100%
        );
        box-shadow: inset 0 0 20px 0 #f3dbab;
        border-radius: 6px;
      }

      .store-item-point-bonus {
        width: 170px;
        height: 40px;
        position: absolute;
        top: 20px;
        margin-left: 17px;
        background-color: #9b6a0c;
        border-radius: 6px;
        color: #fff;
        font-size: 16px;
        text-transform: uppercase;
        text-align: center;
        line-height: 40px;
        font-weight: bold;
      }

      .store-item-diamon {
        width: 170px;
        height: 110px;
        position: absolute;
        top: 52px;
        margin-left: 17px;
      }

      .store-prize-box {
        width: 170px;
        height: 80px;
        position: absolute;
        top: 170px;
        margin-left: 17px;
        color: #443307;
        font-size: 36px;
        text-align: center;
        font-weight: bold;
        text-shadow: 0 1px 2px #fff;

        .prize1 {
          width: 100%;
          height: 46px;
          position: relative;
        }

        .prize2 {
          width: 100%;
          height: 30px;
          position: relative;
          font-size: 20px;
          color: #c50000;
          text-decoration: line-through;
        }

        .free-prize {
          width: 100%;
          height: 30px;
          position: relative;
          font-size: 20px;
        }
      }

      .store-button {
        width: 170px;
        height: 42px;
        position: relative;
        text-align: center;
        top: 260px;
        background: linear-gradient(45deg, #e8c34e, #f1da7c, #cfa831, #fbf1d8);
        border-radius: 8px;
        box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
          inset 0 -3px 0px #c87725, 0 0 3px #3d3737, 0 0 7px #000,
          inset 0 0 3px #603806;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
        color: #4a3a08;
        text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
        line-height: 42px;
        margin: auto;

        &:active {
          top: 301px;
        }

        &:hover {
          box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
            inset 0 -3px 0 #c87725, 0 0 12px #ff0, 0 0 5px #ffc,
            inset 0 0 10px #ffc, inset 0 0 3px #603806;
        }
      }
    }
  }
`;

export default ShopDiamondbuyStyles;
