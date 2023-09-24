import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
  .popup-layer {
    .quest-popup {
      display: block;
      width: 800px;
      height: 600px;
      position: absolute;
      left: 100px;
      bottom: 0px;
      pointer-events: none !important;
      .person {
        display: block;
        width: 323px;
        height: 482px;
        background-image: url(../img/tutor-hero2@1.png);
        background-size: 323px;
        position: absolute;
        bottom: 0;
        left: 30px;
        pointer-events: none;
      }

      &.nutaku {
        .person {
          width: 317px;
          height: 481px;
          background-image: url(../img/quest-hero@1x.png);
          background-size: 323px;
        }
      }

      .balloon {
        display: block;
        width: 580px;
        height: 340px;
        background: linear-gradient(to top, #0171a3, #22d6ee);
        position: absolute;
        right: 0px;
        top: 88px;
        border-radius: 50px;
        box-shadow: 0 0 25px #000, inset 0 0 1px #22d6ee, inset 0 0 50px #22d6ee,
          inset 0 0 75px #22d6ee;
        pointer-events: all;
        &:before {
          content: "";
          display: block;
          width: 98%;
          height: 5px;
          margin: auto;
          background: #abfdff;
          position: relative;
          top: 37px;
          box-shadow: 0 0 3px #abfdff, 0 0 10px #abfdff, 0 0 15px #abfdff;
          opacity: 0.5;
        }
        .title {
          display: block;
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: 22px;
          font-weight: bold;
          color: #02374e;
          text-shadow: 0 1px 3px #fff, 0 0 20px #abfdff, 0 0 20px #abfdff,
            0 0 20px #abfdff, 0 0 20px #abfdff, 0 0 20px #abfdff,
            0 0 20px #abfdff;
          margin-top: 15px;
          text-transform: uppercase;
          position: relative;
          &.no-quests {
            margin-top: 115px;
          }
        }
        .text {
          display: block;
          width: 85%;
          margin: auto;
          font-size: 17px;
          font-weight: bold;
          color: #02374e;
          line-height: 20px;
          text-shadow: 0 1px 4px #fff;
          position: relative;
          margin-top: 30px;
        }
        .progress,
        .progress .prg-box,
        .progress .prg-box .prg {
          display: block;
          margin: auto;
          height: 24px;
          border-radius: 100px;
          position: absolute;
          top: 150px;
          left: 85px;
          right: 85px;
          background: rgba(0, 0, 0, 0.25);
          box-shadow: 0 0px 3px #30d5ea;
          .num {
            display: inline-block;
            width: auto;
            height: 24px;
            line-height: 24px;
            font-size: 16px;
            color: white;
            font-weight: bold;
            text-shadow: 0 0 4px #02374e;
            width: 25%;
          }
          .prg-box {
            height: 20px;
            width: 75%;
            left: 2px;
            top: 2px;
            box-shadow: none;
            margin: 0px;
            .prg {
              height: 20px;
              background: linear-gradient(to bottom, #f63, #ff0, #f63);
              left: 0px;
              top: 0px;
              box-shadow: none;
              margin: 0px;
              box-shadow: inset 0 0 2px #fff, 0 0 3px #000;
            }
          }
        }
        .rewards {
          display: block;
          width: 100%;
          height: 35px;
          position: absolute;
          top: 205px;
          left: 0;
          line-height: 35px;
          font-size: 22px;
          font-weight: bold;
          color: #06436e;
          .t,
          .n {
            margin: 0;
            padding: 0;
            display: block;
            width: 40%;
            height: 35px;
            background: linear-gradient(to right, #fff, transparent);
            text-align: right;
            text-shadow: 0 1px 2px #fff;
            position: absolute;
            left: 0px;
            top: 0px;
          }
          .n {
            background: linear-gradient(to left, #fff, transparent);
            left: auto;
            right: 0;
            text-align: left;
            text-shadow: 0 0 2px #01233b, 0 0 3px #01233b, 0 1px 10px #fff,
              0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff;
          }
          .icon {
            display: block;
            width: 80px;
            height: 80px;
            background: rgba(0, 0, 0, 0.25);
            border-radius: 100%;
            position: absolute;
            left: calc(50% - 40px);
            top: -45px;
            img {
              display: block;
              width: 70px;
              height: 70px;
              position: absolute;
              left: 5px;
              top: 5px;
            }
          }
        }
        .btn-box {
          display: block;
          width: 100%;
          height: 50px;
          position: absolute;
          bottom: 0;
          left: 0;
          border-bottom-left-radius: 50px;
          border-bottom-right-radius: 50px;
          background: rgba(0, 0, 0, 0.25);
          .btn-get,
          .btn-close {
            &.disable {
              filter: grayscale(100%);
            }
            position: relative;
            top: -20px;
            margin: 0px 10px;
          }
        }
      }
    }
  }
`;

export { stylesFileName, pageStyles };
