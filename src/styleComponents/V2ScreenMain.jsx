import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
  .color-btn,
  .btn-close-x {
    &:hover {
      filter: brightness(110%);
    }
  }
  .btn-close-x {
    &:active {
      transform: scale(0.96);
    }
  }

  .m-popup.bonus-25,
  .m-popup.bonus-33,
  .m-popup.bonus-50,
  .m-popup.bonus-70,
  .m-popup.bonus-x2,
  .m-popup.bonus-x3 {
    &:after {
      content: "";
      position: absolute;
      left: -10px;
      top: -4px;
      width: 154px;
      height: 48px;
      padding-top: 22px;
      background: url(../img/timer-back.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      font-size: 19px;
      font-weight: 700;
      text-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
      color: #fffbc7;
    }
  }
  .m-popup.bonus-25 {
    &:after {
      content: "Discount 25%";
    }
  }
  .m-popup.bonus-33 {
    &:after {
      content: "Discount 33%";
    }
  }
  .m-popup.bonus-50 {
    &:after {
      content: "Discount 50%";
    }
  }
  .m-popup.bonus-70 {
    &:after {
      content: "Discount 70%";
    }
  }
  .m-popup.bonus-x2 {
    &:after {
      content: "Bonus x2";
    }
  }
  .m-popup.bonus-x3 {
    &:after {
      content: "Bonus x3";
    }
  }

  body .main.world1,
  body .main.world2,
  body .main.world3 {
    width: 1200px;
    height: 640px;

    .trophy-res-box-all,
    .guildhall-res-box-all {
      width: 370px;
      height: 40px;
      position: absolute;
      top: -42px;
      right: 36px;
      background: #9c8b7c;
      border-radius: 10px 10px 0 0;
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 2px 0 #9c8b7c,
        0 0 0 1px rgba(0, 0, 0, 0.4);
      > div:nth-of-type(2) {
        left: 190px;
      }
      .trophy-res-box,
      .guildhall-res-box {
        width: 170px;
        height: 36px;
        position: absolute;
        top: 5px;
        left: 10px;
        background: linear-gradient(
          0deg,
          #ffe199,
          #f4c657 18%,
          #ffe199 60%,
          #f4c557 85%,
          #ffe199
        );
        border-radius: 18px;
        box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.55),
          0 2px 4px 0 rgba(0, 0, 0, 0.35);
        .trophy-value,
        .guildhall-value {
          width: 100px;
          height: 28px;
          position: absolute;
          top: 3px;
          left: 38px;
          background: linear-gradient(90deg, #f4bf87, #d38632 50%, #92581a);
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25),
            inset 0 14px 0 rgba(255, 255, 255, 0.15);
          border-radius: 6px;
          color: #fff;
          font-size: 20px;
          font-weight: bold;
          line-height: 28px;
          text-align: center;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
        }
        .trophy-value-btn-add,
        .guildhall-value-btn-add {
          width: 32px;
          height: 36px;
          position: absolute;
          top: 0;
          right: 0;
          border-radius: 0 18px 18px 0;
          cursor: pointer;
          filter: drop-shadow(0 1px 0.5px rgba(255, 255, 255, 0.795));
          &:hover {
            &:before {
              background-color: #383434;
            }
            &:after {
              background-color: #383434;
            }
          }
          &:active {
            &:before {
              width: 4px;
              height: 20px;
              top: 8px;
              left: 13px;
            }
            &:after {
              width: 20px;
              height: 4px;
              top: 16px;
              left: 5px;
            }
          }
          &:before {
            content: "";
            width: 6px;
            height: 22px;
            position: absolute;
            top: 7px;
            left: 12px;
            background-color: #4e4848;
            border-radius: 2px;
          }
          &:after {
            content: "";
            width: 22px;
            height: 6px;
            position: absolute;
            top: 15px;
            left: 4px;
            background-color: #4e4848;
            border-radius: 2px;
          }
        }
      }
    }
    .header {
      height: 80px;
      .resource-panel {
        width: 550px;
        height: 80px;
        position: absolute;
        top: 0;
        left: 0;
        .might-box-all {
          cursor: pointer;
          width: 70px;
          height: 70px;
          position: absolute;
          top: 5px;
          left: 95px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
          border-radius: 10px;
          background: linear-gradient(
            0deg,
            #f8b76c 0%,
            #f78500 18%,
            #f8b76c 60%,
            #f9981f 85%,
            #f8b76b 100%
          );
          &:hover {
            filter: brightness(110%);
          }
          &:active {
            transform: scale(0.98);
          }
          .might-box-pic {
            width: 64px;
            height: 64px;
            position: absolute;
            top: 3px;
            left: 3px;
            border-radius: 8px;
            overflow: hidden;
            img {
              width: 64px;
              position: absolute;
            }
          }
          .might-box-name {
            width: 80px;
            height: 20px;
            position: absolute;
            top: 56px;
            left: -5px;
            background-image: url(../img/wpck-ram1.png);
            background-size: 100%;
            background-repeat: no-repeat;
            color: #fff;
            font-weight: bold;
            font-size: 10px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
            text-align: center;
          }
        }
        .avatar-box-all {
          cursor: pointer;
          width: 70px;
          height: 70px;
          position: absolute;
          top: 5px;
          left: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
          border-radius: 10px;
          background: linear-gradient(
            0deg,
            #f8b76c 0%,
            #f78500 18%,
            #f8b76c 60%,
            #f9981f 85%,
            #f8b76b 100%
          );
          &:hover {
            filter: brightness(110%);
          }
          &:active {
            transform: scale(0.98);
          }
          .avatar-box-pic {
            width: 64px;
            height: 64px;
            position: absolute;
            top: 3px;
            left: 3px;
            border-radius: 8px;
            overflow: hidden;
            img {
              width: 64px;
            }
          }
          .avatar-box-name {
            width: 80px;
            height: 20px;
            position: absolute;
            top: 56px;
            left: -5px;
            background-image: url(../img/wpck-ram1.png);
            background-size: 100%;
            background-repeat: no-repeat;
            color: #fff;
            font-weight: bold;
            font-size: 10px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
            text-align: center;
          }
        }
        .resource-gold {
          width: 190px;
          height: 60px;
          position: absolute;
          top: 10px;
          left: 190px;
          box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.55),
            0 2px 4px 0 rgba(0, 0, 0, 0.35);
          border-radius: 30px;
          background: linear-gradient(
            0deg,
            #ffe199 0%,
            #f4c657 18%,
            #ffe199 60%,
            #f4c557 85%,
            #ffe199 100%
          );
          .value {
            width: 90px;
            height: 28px;
            position: absolute;
            top: 3px;
            left: 55px;
            background: linear-gradient(
              90deg,
              #f4bf87 0%,
              #d38632 50%,
              #92581a 100%
            );
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25),
              inset 0 14px 0 rgba(255, 255, 255, 0.15);
            border-radius: 6px;
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            padding-left: 10px;
            line-height: 28px;
          }
          .value-bonus {
            width: 90px;
            height: 22px;
            position: absolute;
            top: 33px;
            left: 55px;
            background: linear-gradient(
              90deg,
              #62b3ed 0%,
              #3474a1 50%,
              #475661 100%
            );
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25),
              inset 0 14px 0 rgba(255, 255, 255, 0.15);
            border-radius: 6px;
            color: #fff;
            font-weight: bold;
            font-size: 16px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            padding-left: 10px;
            line-height: 22px;
          }
          .resource-btn-add {
            width: 34px;
            height: 60px;
            position: absolute;
            top: 0px;
            left: 156px;
            border-radius: 0 30px 30px 0;
            cursor: pointer;
            filter: drop-shadow(0 1px 0.5px rgba(255, 255, 255, 0.795));
            &:hover {
              &:before {
                background-color: #3c3737;
              }
              &:after {
                background-color: #3c3737;
              }
            }
            &:active {
              &:before {
                width: 4px;
                height: 20px;
                top: 20px;
                left: 13px;
              }
              &:after {
                width: 20px;
                height: 4px;
                top: 28px;
                left: 5px;
              }
            }
            &:before {
              content: "";
              width: 6px;
              height: 22px;
              position: absolute;
              top: 19px;
              left: 12px;
              background-color: #4e4848;
              border-radius: 2px;
            }
            &:after {
              content: "";
              width: 22px;
              height: 6px;
              position: absolute;
              top: 27px;
              left: 4px;
              background-color: #4e4848;
              border-radius: 2px;
            }
          }
          .resource-pic {
            width: 70px;
            height: 70px;
            position: absolute;
            top: -5px;
            left: -20px;
            img {
              width: 70px;
            }
          }
        }
        .resource-vip {
          width: 190px;
          height: 60px;
          position: absolute;
          top: 10px;
          left: 410px;
          box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.55),
            0 2px 4px 0 rgba(0, 0, 0, 0.35);
          border-radius: 30px;
          background: linear-gradient(
            0deg,
            #ffe199 0%,
            #f4c657 18%,
            #ffe199 60%,
            #f4c557 85%,
            #ffe199 100%
          );
          .resource-btn-add {
            width: 34px;
            height: 60px;
            position: absolute;
            top: 0px;
            left: 156px;
            border-radius: 0 30px 30px 0;
            cursor: pointer;
            filter: drop-shadow(0 1px 0.5px rgba(255, 255, 255, 0.795));
            &:hover {
              &:before {
                background-color: #3c3737;
              }
              &:after {
                background-color: #3c3737;
              }
            }
            &:active {
              &:before {
                width: 4px;
                height: 20px;
                top: 20px;
                left: 13px;
              }
              &:after {
                width: 20px;
                height: 4px;
                top: 28px;
                left: 5px;
              }
            }
            &:before {
              content: "";
              width: 6px;
              height: 22px;
              position: absolute;
              top: 19px;
              left: 12px;
              background-color: #4e4848;
              border-radius: 2px;
            }
            &:after {
              content: "";
              width: 22px;
              height: 6px;
              position: absolute;
              top: 27px;
              left: 4px;
              background-color: #4e4848;
              border-radius: 2px;
            }
          }
          .value-vip-diamond,
          .value-vip-ticket {
            width: 90px;
            height: 25px;
            position: absolute;
            top: 3px;
            left: 55px;
            background: linear-gradient(
              90deg,
              #f4bf87 0%,
              #d38632 50%,
              #92581a 100%
            );
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25),
              inset 0 14px 0 rgba(255, 255, 255, 0.15);
            border-radius: 6px;
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            padding-right: 10px;
            line-height: 25px;
            text-align: right;
            &:before {
              content: "";
              width: 26px;
              height: 26px;
              position: absolute;
              top: 0;
              left: 2px;
              background-image: url(../img/v2-res-diamond.png);
              background-size: 100%;
              background-repeat: no-repeat;
            }
          }
          .value-vip-ticket {
            top: 30px;
            &:before {
              content: "";
              width: 26px;
              height: 26px;
              position: absolute;
              top: 0;
              left: 2px;
              background-image: url(../img/v2-res-ticket.png);
              background-size: 100%;
              background-repeat: no-repeat;
            }
          }
          .resource-pic-vip {
            width: 68px;
            height: 68px;
            position: absolute;
            top: -4px;
            left: -20px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            background: linear-gradient(
              180deg,
              #585a5c 0%,
              #d5d8da 50%,
              #585a5b 70%,
              #a1a4a6 85%,
              #585a5b 100%
            );
            border-radius: 100%;
            &:before {
              content: "";
              width: 60px;
              height: 60px;
              position: absolute;
              top: 4px;
              left: 4px;
              background-color: #484242;
              box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25);
              border-radius: 100%;
            }
            .viplvl {
              width: 56px;
              height: 56px;
              position: absolute;
              top: 6px;
              left: 6px;
              color: #1e1010;
              font-weight: bold;
              font-size: 16px;
              text-align: center;
              line-height: 60px;
              text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
            }
          }
          &.lvl0 {
            .viplvl {
              background-image: url(../img/2vip-s3.png);
              background-size: 100%;
            }
          }
          &.lvl1 {
            .viplvl {
              background-image: url(../img/2vip-s1.png);
              background-size: 100%;
            }
          }
          &.lvl2 {
            .viplvl {
              background-image: url(../img/2vip-s2.png);
              background-size: 100%;
            }
          }
          &.lvl3 {
            .viplvl {
              background-image: url(../img/2vip-s3.png);
              background-size: 100%;
            }
          }
          &.lvl4 {
            .viplvl {
              background-image: url(../img/2vip-s4.png);
              background-size: 100%;
            }
          }
          &.lvl5 {
            .viplvl {
              background-image: url(../img/2vip-s5.png);
              background-size: 100%;
            }
          }
          &.lvl6 {
            .viplvl {
              background-image: url(../img/2vip-s6.png);
              background-size: 100%;
            }
          }
          &.lvl7 {
            .viplvl {
              background-image: url(../img/2vip-s7.png);
              background-size: 100%;
            }
          }
          &.lvl8 {
            .viplvl {
              background-image: url(../img/2vip-s8.png);
              background-size: 100%;
            }
          }
          &.lvl9 {
            .viplvl {
              background-image: url(../img/2vip-s9.png);
              background-size: 100%;
            }
          }
          &.lvl10 {
            .viplvl {
              background-image: url(../img/2vip-s10.png);
              background-size: 100%;
            }
          }
          .vip-diamond-text,
          .vip-ticket-text {
            width: 78px;
            height: 20px;
            position: absolute;
            top: 16px;
            margin-left: 128px;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            text-shadow: 0 2px 4px #000;
          }
          .vip-ticket-text {
            top: 44px;
          }
        }
      }
      .shop-chest-box-all {
        width: 380px;
        height: 80px;
        position: absolute;
        top: 0;
        right: 180px;
        .res-shop-btn {
          width: 160px;
          height: 60px;
          position: absolute;
          top: 10px;
          left: 25px;
          cursor: pointer;
          background: linear-gradient(0deg, #039117 0%, #41d355 100%);
          box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.35),
            0 2px 4px rgba(0, 0, 0, 0.55);
          border-radius: 6px;
          &:hover {
            filter: brightness(110%);
          }
          &:active {
            top: 11px;
          }
          .res-shop-btn-text {
            width: 100px;
            height: auto;
            position: absolute;
            top: 18px;
            right: 5px;
            color: #fff;
            font-weight: bold;
            font-size: 18px;
            text-align: center;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
            text-transform: uppercase;
          }
          &:before {
            content: "";
            width: 80px;
            height: 80px;
            position: absolute;
            top: -10px;
            left: -25px;
            background-image: url(../img/rpg-poly/rpg_poly-shop_icon@2x.png);
            background-size: 100%;
            background-repeat: no-repeat;
            // transform: scaleX(-1);
          }
        }
        .res-chest-btn {
          width: 160px;
          height: 60px;
          position: absolute;
          top: 10px;
          left: 220px;
          cursor: pointer;
          background: linear-gradient(0deg, #d67503 0%, #fdd2a0 100%);
          box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.55);
          border-radius: 6px;
          &:hover {
            filter: brightness(110%);
          }
          &:active {
            top: 11px;
          }
          .res-chest-btn-text {
            width: auto;
            height: auto;
            position: absolute;
            top: 17px;
            right: 11px;
            color: #fff;
            font-weight: bold;
            font-size: 18px;
            text-align: center;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.55);
            text-transform: uppercase;
          }
          &:before {
            content: "";
            width: 80px;
            height: 62px;
            position: absolute;
            top: -6px;
            left: 1px;
            background-image: url(../img/ic-chests-all.png);
            background-size: 100%;
            background-repeat: no-repeat;
          }
        }
      }
      .signinout-btn {
        position: absolute;
        top: 0;
        right: 90px;
        width: 80px;
        height: 80px;
        cursor: pointer;
        &:hover {
          filter: brightness(110%);
        }
        &:active {
          transform: scale(0.96);
        }
        .icon-reg {
          width: 70px;
          height: 70px;
          position: relative;
          top: 2px;
          left: 3px;
          transition-delay: 1s;
          transition: opacity 0.3s ease-in-out;
          background-image: url(../img/reg-ic-01.png);
          background-size: 100%;
        }
      }
      .signinout-btn.in {
        .icon-reg {
          background-image: url(../img/reg-ic-02.png);
        }
      }
      .signinout-btn.out {
        .icon-reg {
          background-image: url(../img/reg-ic-03.png);
        }
      }
    }
    .quest-box-all {
      width: 84px;
      height: 640px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 999;
      background: linear-gradient(
          290deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 21%,
          rgba(255, 255, 255, 0.06) 26%,
          rgba(255, 255, 255, 0.06) 43%,
          rgba(255, 255, 255, 0) 48%,
          rgba(255, 255, 255, 0) 55%,
          rgba(255, 255, 255, 0.06) 60%,
          rgba(255, 255, 255, 0.06) 65%,
          rgba(255, 255, 255, 0) 70%,
          rgba(255, 255, 255, 0) 100%
        ),
        rgba(88, 74, 73, 0.8);
      backdrop-filter: blur(10px);
      box-shadow: -1px 0 1px rgba(0, 0, 0, 0.6),
        inset 3px 0 0 rgba(0, 0, 0, 0.3), inset -3px 0 0 rgba(0, 0, 0, 0.3);
      overflow: hidden;
      &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: url(../img/quest-box-bg.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 84px 640px;
        pointer-events: none;
      }
      .quest-box-all-text {
        width: 100%;
        height: auto;
        position: absolute;
        top: 6px;
        color: #2f2d2d;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.85);
        text-transform: uppercase;
      }
      .quest-box-scroll {
        width: 86px;
        height: 550px;
        position: absolute;
        top: 1px;
        left: 3px;
        overflow: hidden;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        scrollbar-width: thin;
        scrollbar-color: #e58f05 #2f2828;
        &::-webkit-scrollbar {
          width: 8px;
        }
        &::-webkit-scrollbar-thumb {
          background: linear-gradient(
            0deg,
            #ffe199 0%,
            #f4c657 18%,
            #ffe199 60%,
            #f4c557 85%,
            #ffe199 100%
          );
        }
        .quest-box {
          width: 78px;
          height: auto;
          position: relative;
          top: 0;
          left: 0;
          text-align: center;
          font-size: 0;
          list-style-type: none;
          &.wrap {
            margin: 12px 0;
            background: #352a29;
            &:before,
            &:after {
              content: "";
              position: absolute;
              left: 50%;
              border: 22px solid transparent;
              transform: translateX(-50%);
              z-index: -2;
              pointer-events: none;
            }
            &:before {
              border-bottom: 10px solid #352a29;
              top: -31px;
            }
            &:after {
              border-top: 10px solid #352a29;
              bottom: -31px;
            }
            .quest-wrap {
              overflow: hidden;
              height: fit-content;
              max-height: 1000px;
              transition: max-height ease-in-out 0.1s;
              &:before {
                content: "";
                width: 48px;
                height: 48px;
                position: absolute;
                left: 50%;
                top: -16px;
                transform: translateX(-50%);
                background-image: url(../img/tab-menu-icn-bg.png);
                background-size: auto 100%;
                background-repeat: no-repeat;
                background-position: -386px 0;
              }
            }
            &.closed {
              &:hover {
                .quest-title-btn {
                  + .quest-wrap {
                    &:before {
                      filter: grayscale(0.6);
                      animation: none;
                    }
                  }
                }
              }
              .quest-title-btn {
                filter: grayscale(0.6);
                &:after {
                  transform: rotate(45deg) scaleX(1);
                  top: -3px;
                  filter: drop-shadow(1px 1px 0.5px #fff);
                }
                &:hover {
                  filter: brightness(1.2);
                  + .quest-wrap {
                    &:before {
                      filter: grayscale(0);
                      animation: fire 0.6s steps(9) infinite;
                      @keyframes fire {
                        0% {
                          background-position-x: 0px;
                        }
                        100% {
                          background-position-x: -432px;
                        }
                      }
                    }
                  }
                }
              }
              .quest-wrap {
                margin-top: 0;
                max-height: 0;
                &:before {
                  filter: grayscale(0.6);
                }
              }
            }
          }
          .quest-title-btn {
            color: rgba(0, 0, 0, 0.8);
            font-size: 12px;
            text-transform: uppercase;
            background: rgba(255, 158, 0, 0.7);
            font-weight: 700;
            text-shadow: 0 1px 2px rgba(255, 255, 255, 1);
            margin: 2px;
            position: relative;
            cursor: pointer;
            line-height: 20px;
            height: 22px;
            border-radius: 12px;
            box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8),
              0 1px 2px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 0, 0, 0.1),
              inset 0 -2px 0 rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(10px);
            z-index: 1;
            &:active {
              box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8),
                0 1px 2px rgba(0, 0, 0, 0.8);
              padding-bottom: 0;
              line-height: 22px;
              &:before {
                top: -31px;
              }
              &:after {
                bottom: -31px;
              }
            }
            &:hover {
              filter: brightness(1.2);
              + .quest-wrap {
                &:before {
                  filter: grayscale(0);
                  animation: fire 0.6s steps(9) infinite;
                  @keyframes fire {
                    0% {
                      background-position-x: 0px;
                    }
                    100% {
                      background-position-x: -432px;
                    }
                  }
                }
              }
            }
            &:after {
              content: "";
              width: 4px;
              height: 4px;
              font-size: 22px;
              border: 1.6px solid rgba(0, 0, 0, 0.8);
              border-top: none;
              border-left: none;
              transition: ease-in-out 0.1s;
              display: inline-block;
              position: relative;
              left: 4px;
              transform: rotate(135deg) scaleX(-1);
              top: -1px;
              filter: drop-shadow(-1px -1px 0.5px #fff);
            }
          }
        }
        .quest-fortune,
        .quest {
          width: 68px;
          height: 70px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          margin: 2px 5px;
          min-height: 68px;
          &:hover {
            filter: brightness(1.1);
            z-index: 2;
            width: 70px;
            margin: 2px 4px;
          }
          &:active {
            transform: scale(0.96);
          }
          .icon {
            width: 100%;
            height: auto;
            top: initial;
            position: absolute;
            z-index: 1;
          }
          .timerbox {
            position: absolute;
            width: 64px;
            height: fit-content;
            background-color: rgba(106, 0, 4, 0.7);
            border-radius: 10px;
            padding: 0 5px;
            top: 45px;
            left: unset;
            margin: 0;
            z-index: 1;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4),
              0 1px 1px rgba(255, 255, 255, 0.14);
          }
          .timer {
            color: #fff;
            font-size: 12px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6),
              0 1px 4px rgba(0, 0, 0, 0.4);
            line-height: 15px;
            padding: 2px 0 1px 0;
          }

          &.reg-ic .icon-reg,
          &.reg-ic .icon-reg2 {
            width: 70px;
            height: 70px;
            position: absolute;
            top: 0;
            margin-left: 0;
            transition-delay: 1s;
            transition: opacity 0.3s ease-in-out;
            background-image: url(../img/reg-ic-01.png);
            background-size: 100%;
          }
          &.reg-ic .icon-reg2 {
            opacity: 0;
            background-image: url(../img/reg-ic-01-1.png);
          }
          &.default-hero {
            img {
              display: none;
            }
            &:after {
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              background-image: url(../img/images/hero-all/tithero-370/icons/ic-hero.png);
              background-size: 100%;
              background-repeat: no-repeat;
            }
          }
          .notif {
            position: absolute;
            top: -2px;
            right: -2px;
            width: 24px;
            height: 24px;
            position: absolute;
            background-image: url(../img/picmeh-ic-info.png);
            background-size: 100%;
            background-repeat: no-repeat;
            z-index: 2;
          }
        }
        .quest.marked {
          &:before,
          &:after {
            content: "";
            position: absolute;
            background-image: url(../img/map-station-lockflare.png);
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: center;
            animation: 8s linear 0s normal none infinite running lockflare;
            transition: ease-in-out 0.1s;
          }
          &:before {
            animation: 8s linear 0s normal none infinite running lockflare;
            width: 90px;
            height: 90px;
            left: -10px;
            top: -10px;
          }
          &:after {
            animation: 7s linear 0s normal none infinite running lockflare;
            width: 70px;
            height: 70px;
            left: 0px;
            top: 0px;
          }
          @keyframes lockflare {
            0% {
              transform: rotate(0deg);
              opacity: 0.6;
            }
            25% {
              transform: rotate(90deg);
              opacity: 0.4;
            }
            50% {
              transform: rotate(180deg);
              opacity: 0.6;
            }
            75% {
              transform: rotate(270deg);
              opacity: 0.4;
            }
            100% {
              transform: rotate(360deg);
              opacity: 0.6;
            }
          }
        }
      }
      .opt-panel-box {
        position: absolute;
        bottom: 50px;
        left: 10px;
        height: 30px;
        width: 64px;
        border-radius: 20px;
        background: linear-gradient(#10d8a6, #08a886);
        box-shadow: inset 0 0 0 2px #eecc60,
          inset 0 0 1px 3px rgba(0, 0, 0, 0.2),
          inset 0 14px 1px rgba(255, 255, 255, 0.2), 0 1px 0 #8b7426,
          0 1px 2px 1px rgba(0, 0, 0, 0.6);
        &:hover {
          background: linear-gradient(#13f0b9, #0ac59d);
          box-shadow: inset 0 0 0 2px #fddd75,
            inset 0 0 1px 3px rgba(0, 0, 0, 0.2),
            inset 0 14px 1px rgba(255, 255, 255, 0.2), 0 1px 0 #8b7426,
            0 1px 2px 1px rgba(0, 0, 0, 0.6);
          .btn {
            opacity: 1;
            visibility: visible;
            transition: ease-in-out 0.1s;
          }
          .color-bg {
            bottom: 44px;
            opacity: 1;
            visibility: visible;
          }
          .btn.feedback {
            top: -86px;
            left: 0px;
          }
          .btn.statistic {
            top: -86px;
            right: 0px;
          }
          .btn.settings {
            top: -50px;
            left: 0px;
          }
          .btn.ru {
            top: -50px;
            right: 0;
          }
        }
        &:before {
          content: "";
          width: 28px;
          height: 28px;
          position: absolute;
          top: 1px;
          left: 50%;
          transform: translateX(-50%);
          background-image: url(../img/setting-icn.png);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          opacity: 0.6;
          filter: drop-shadow(0 1px 0.5px rgba(255, 255, 255, 0.4));
        }
        .color-bg {
          position: absolute;
          width: 78px;
          height: 79px;
          left: -7px;
          bottom: 28px;
          z-index: 1;
          background: #6e5d5c;
          background: linear-gradient(
              325deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0) 26%,
              rgba(255, 255, 255, 0.06) 26%,
              rgba(255, 255, 255, 0.06) 48%,
              rgba(255, 255, 255, 0) 48%,
              rgba(255, 255, 255, 0) 60%,
              rgba(255, 255, 255, 0.06) 60%,
              rgba(255, 255, 255, 0.06) 70%,
              rgba(255, 255, 255, 0) 70%,
              rgba(255, 255, 255, 0) 100%
            ),
            #6e5d5c;
          border-radius: 8px;
          filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.8));
          transition: ease-in-out 0.1s;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
            inset 0.5px 0 0.5px rgba(255, 255, 255, 0.1),
            inset -0.5px 0 0.5px rgba(255, 255, 255, 0.1), 0 2px 0 #4d4140;
          opacity: 0;
          visibility: hidden;
          &:before {
            content: "";
            border: 10px solid transparent;
            border-top: 10px solid #6e5d5c;
            border-radius: 2px;
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            filter: drop-shadow(0 2px 0 #4d4140);
          }
          &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 110px;
            top: 0;
            left: 0;
          }
        }
        .btn {
          display: inline-block;
          opacity: 0;
          visibility: hidden;
          width: 28px;
          height: 28px;
          position: absolute;
          border-radius: 8px;
          background: linear-gradient(30deg, #3d302a, #9a817c, #e2dcdc);
          box-shadow: inset 0 0 5px #000, inset 0 0 7px #9a817c,
            0 1px 3px rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: ease-in-out 0.1s;
          z-index: 1;
          &:after {
            content: "";
            display: block;
            width: 23px;
            height: 23px;
            position: absolute;
            left: 3px;
            top: 3px;
          }
          &.feedback {
            top: -70px;
            left: 0px;
          }
          &.statistic {
            top: -70px;
            right: 0px;
          }
          &.settings {
            top: -34px;
            left: 0px;
          }
          &.ru {
            top: -34px;
            right: 0;
          }
          &.feedback:after {
            background-image: url(../img/ob-ico-5.png);
            background-size: 23px;
          }
          &.settings:after {
            background-image: url(../img/ob-ico-2.png);
            background-size: 23px;
          }
          &.statistic:after {
            background-image: url(../img/ob-ico-6.png);
            background-size: 23px;
          }
          &.en:after {
            background-image: url(../img/lang-icon/uk-us.png);
            background-size: 23px;
          }
          &.de:after {
            background-image: url(../img/lang-icon/germany.png);
            background-size: 23px;
          }
          &.fr:after {
            background-image: url(../img/lang-icon/france.png);
            background-size: 23px;
          }
          &.ru:after {
            background-image: url(../img/lang-icon/russia.png);
            background-size: 23px;
          }
          &.ja:after {
            background-image: url(../img/lang-icon/japan.png);
            background-size: 23px;
          }
          &.cn:after {
            background-image: url(../img/lang-icon/china.png);
            background-size: 23px;
          }
          &:hover {
            transform: scale3d(1.05, 1.05, 1);
          }
          &:active {
            transform: scale3d(0.98, 0.98, 1);
          }
        }
      }
      .btn-discord {
        position: absolute;
        bottom: 10px;
        left: 10px;
        height: 30px;
        width: 64px;
        border-radius: 20px;
        cursor: pointer;
        background: linear-gradient(#6d79ff, #4752ce);
        box-shadow: inset 0 0 0 2px #eecc60,
          inset 0 0 1px 3px rgba(0, 0, 0, 0.2),
          inset 0 14px 1px rgba(255, 255, 255, 0.1), 0 1px 0 #8b7426,
          0 1px 2px 1px rgba(0, 0, 0, 0.6);
        &:hover {
          background: linear-gradient(#7b86ff, #535fe4);
          box-shadow: inset 0 0 0 2px #ffde71,
            inset 0 0 1px 3px rgba(0, 0, 0, 0.2),
            inset 0 14px 1px rgba(255, 255, 255, 0.1), 0 1px 0 #8b7426,
            0 1px 2px 1px rgba(0, 0, 0, 0.6);
        }
        &:active {
          margin-top: 1px;
          transform: scale(0.966);
          box-shadow: inset 0 0 0 2px #eecc60,
            inset 0 0 1px 3px rgba(0, 0, 0, 0.2),
            inset 0 14px 1px rgba(255, 255, 255, 0.1),
            0 1px 2px 1px rgba(0, 0, 0, 0.6);
        }
        &:before {
          content: "";
          width: 30px;
          height: 28px;
          position: absolute;
          top: 1px;
          left: 50%;
          transform: translateX(-50%);
          background-image: url(../img/discord-icn.png);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          opacity: 0.6;
          filter: drop-shadow(0 1px 0.5px rgba(255, 255, 255, 0.4));
        }
      }
    }
    .boss-drop-box {
      width: 80px;
      height: 270px;
      position: absolute;
      top: 20px;
      background-color: #998277;
      z-index: 1;
      border-radius: 10px;
      .bd-name {
        width: 100%;
        height: auto;
        position: absolute;
        top: 5px;
        left: 0;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
        text-align: center;
      }
      .bd-drops {
        width: 70px;
        height: 70px;
        position: absolute;
        top: 36px;
        left: 5px;
        background-color: #5d4e4c;
        box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        .bd-stone {
          width: 60px;
          height: 60px;
          position: absolute;
          top: 5px;
          left: 5px;
          img {
            width: 60px;
          }
        }
        .bd-check-box {
          width: 24px;
          height: 24px;
          position: absolute;
          top: 48px;
          left: 48px;
          .bd-check {
            width: 24px;
            height: 24px;
            position: absolute;
            top: 0;
            left: 0;
            background-image: url(../img/check-box.png);
            background-size: 100%;
            background-repeat: no-repeat;
            display: none;
          }
          &.check {
            .bd-check {
              display: block;
            }
          }
        }
        &.two {
          top: 114px;
        }
        &.chest {
          top: 192px;
          .bd-check-box1,
          .bd-check-box2,
          .bd-check-box3 {
            width: 24px;
            height: 24px;
            position: absolute;
            top: 48px;
            left: 48px;
            .bd-check {
              width: 24px;
              height: 24px;
              position: absolute;
              top: 0;
              left: 0;
              background-image: url(../img/check-box.png);
              background-size: 100%;
              background-repeat: no-repeat;
              display: none;
            }
            &.check {
              .bd-check {
                display: block;
              }
            }
          }
          .bd-check-box2 {
            left: 23px;
          }
          .bd-check-box3 {
            left: -2px;
          }
          .end-banner {
            display: none;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.55);
            border-radius: 8px;
            p {
              margin: -22px;
              padding: 0;
              display: block;
              height: 30px;
              position: absolute;
              left: 20px;
              right: 20px;
              top: 40px;
              border-radius: 8px;
              border: solid 2px #ffd700;
              line-height: 30px;
              font-size: 8px;
              font-weight: bold;
              color: #ffd700;
              transform: rotate(-10deg);
              text-align: center;
              text-transform: uppercase;
            }
          }
          &.received {
            .end-banner {
              display: block;
            }
          }
        }
      }
    }
    .left-side {
      width: 620px;
      height: 555px;
      position: absolute;
      left: 5px;
      bottom: 5px;
      &.cb,
      &.at {
        width: 100px;
      }
      .tabs-all-box {
        width: 100%;
        height: 40px;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 0;
        .tabs-all {
          width: 62px;
          height: 38px;
          position: relative;
          top: 0;
          left: 0;
          display: inline-block;
          margin: 0 2px 0 0;
          cursor: pointer;
          background-color: #9c8b7c;
          border-radius: 24px 24px 0 0;
          transition: ease-in-out 0.2s;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 2px 0 #9c8b7c,
            0 0 0 1px rgba(0, 0, 0, 0.4);
          &:before {
            content: "";
            width: 54px;
            height: 36px;
            position: absolute;
            top: 4px;
            left: 4px;
            background-color: #544746;
            border-radius: 20px 20px 4px 4px;
            box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.16),
              inset 0 4px 6px rgba(0, 0, 0, 0.15),
              inset 0 0 2px 1px rgba(0, 0, 0, 0.1);
            transition: ease-in-out 0.2s;
          }
          .tabs-name {
            width: 0;
            height: 40px;
            position: absolute;
            left: 45px;
            color: #fff;
            font-weight: bold;
            font-size: 12px;
            line-height: 44px;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            transition: ease-in-out 0.2s;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
          }
          .tabs-pic {
            width: 50px;
            height: 32px;
            position: absolute;
            top: 5px;
            left: 5px;
            img {
              width: auto;
              height: 32px;
            }
          }
          &:hover {
            width: 118px;
            transition: width ease-in-out 0.2s;
            z-index: 1;
            &:before {
              width: 110px;
              background-color: #6b5a59;
              transition: width ease-in-out 0.2s;
            }
            .tabs-name {
              width: 60px;
              transition: ease-in-out 0.2s;
            }
          }
          &:active {
            transform: scale(0.98) translateY(0.5px);
          }
          &.selected {
            width: 118px;
            transition: width ease-in-out 0.2s;
            &:before {
              content: "";
              width: 110px;
              background-color: #8b7c6e;
              transition: width ease-in-out 0.2s;
              box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.08),
                inset 0 4px 6px rgba(0, 0, 0, 0.15),
                inset 0 0 2px 1px rgba(0, 0, 0, 0.1);
            }
            .tabs-name {
              width: 60px;
              transition: ease-in-out 0.2s;
            }
            &:hover {
              &:before {
                background-color: #807264;
              }
            }
          }
          &.squads {
            .tabs-pic {
              img {
                padding: 0 9px;
              }
            }
          }
        }
      }
      .left-panel {
        width: 620px;
        height: 515px;
        position: absolute;
        left: 0;
        top: 40px;
        border-radius: 0 18px 18px 18px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4), 0 0 2px rgba(0, 0, 0, 0.2);
        &:before {
          content: "";
          width: 0 !important;
          height: 0;
          position: absolute;
          top: -8px;
          left: -8px;
          border: 8px solid transparent;
          border-bottom: 8px solid #9c8b7c;
          background: none;
          transform: rotate(-45deg);
          z-index: 999;
        }
        .tab-panel-box-title {
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
        }
        &.cb,
        &.at {
          width: 100px;
          &:before {
            height: 0px;
            width: 0px;
          }
        }

        .heroes-list-all-box {
          width: 620px;
          height: 515px;
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(0deg, #786358 0%, #584a49 100%);
          box-shadow: inset 0 0 0 4px #9c8b7c, inset 0 0 6px rgba(0, 0, 0, 0.25);
          border-radius: 10px 18px 18px 18px;
          .dps-dpc-panel-box {
            width: 500px;
            height: 95px;
            position: absolute;
            top: 10px;
            left: 12px;
            text-align: center;
            .dpc,
            .dps {
              width: 200px;
              height: 66px;
              font-size: 18px;
              font-weight: bold;
              display: inline-block;
              border-radius: 7px;
              background: linear-gradient(
                45deg,
                #e8c34e,
                #f1da7c,
                #cfa831,
                #fbf1d8
              );
              box-shadow: inset 0 -1px 2px #452b05, 0 0 2px #472624,
                0 0 3px #472624;
              margin: 12px;
              position: relative;
              margin-left: 16px;
              .mlt-prm {
                width: 135px;
                height: 22px;
                display: block;
                border-radius: 5px;
                background: linear-gradient(
                  to right,
                  #73524d,
                  #db4d29,
                  #db4d29,
                  #db4d29,
                  #73524d
                );
                position: absolute;
                right: 5px;
                top: 5px;
                color: #fdfcc3;
                line-height: 22px;
                box-shadow: inset 0 11px 0px rgba(255, 255, 0, 0.11),
                  inset 0 2px 1px #3d3737;
                text-align: left;
                padding-left: 20px;
                text-shadow: 0 2px #4f261e;
                &:before {
                  width: 10px;
                  height: 20px;
                  margin-right: 3px;
                  display: inline-block;
                }
              }
              .value {
                width: 135px;
                height: 30px;
                display: block;
                position: absolute;
                top: 30px;
                right: 5px;
                border-radius: 5px;
                background-color: #564a4a;
                color: #99e6f9;
                font-size: 26px;
                line-height: 30px;
                text-shadow: 0 2px #000;
                box-shadow: inset 0 11px 0px rgba(255, 255, 255, 0.08),
                  inset 0 2px 1px #3d3737;
                text-align: left;
                padding-left: 20px;
              }
              .title {
                width: 60px;
                height: 30px;
                display: block;
                position: absolute;
                left: -10px;
                top: -3px;
                border-radius: 60px;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
                box-shadow: 0 3px 0px #c87725, inset 0 3px 1px #ffa,
                  0 5px 0px #3d3737, 2px 0 0px #3d3737;
                background: linear-gradient(
                  45deg,
                  #e8c34e,
                  #ffa,
                  #cfa831,
                  #fbf1d8
                );
                padding-top: 37px;
                text-align: center;
                color: #3a2423;
                font-size: 25px;
                font-weight: 900;
                text-shadow: 0 0 1px #3a2423, 0 0 1px #3a2423, 0 0 1px #3a2423,
                  1px 0 1px #000, 1px 0 1px #000, 1px 0 1px #000;
                &:before {
                  content: "";
                  width: 52px;
                  height: 33px;
                  display: block;
                  position: absolute;
                  top: 4px;
                  left: 4px;
                  border-radius: 46px;
                  border-bottom-left-radius: 0;
                  border-bottom-right-radius: 0;
                  line-height: 26px;
                  color: #ffa;
                  background: #544741;
                  box-shadow: inset 0 2px 3px #000;
                  text-shadow: 0 2px 1px #000;
                }
                .icon-dpc,
                .icon-dps {
                  width: 54px;
                  height: 54px;
                  display: inline-block;
                  position: absolute;
                  left: 3px;
                  top: -10px;
                  background-image: url(../img/ico-click.png);
                  background-size: 54px;
                }
                .icon-dps {
                  background-image: url(../img/ico-sword.png);
                  background-size: 54px;
                }
              }
            }
            .dpc {
              .x2-dps {
                position: absolute;
                top: -10px;
                left: -20px;
                z-index: 1;
                text-shadow: 1px 1px 3px #4f261e, -1px -1px 3px #4f261e;
                color: #fdfcc3;
              }
            }
            .dps {
              .x2-dps {
                position: absolute;
                top: 45px;
                left: 41px;
                text-shadow: 1px 1px 3px #4f261e, -1px -1px 3px #4f261e;
                color: #fdfcc3;
              }
              .value {
                top: 5px;
                right: auto;
                left: 5px;
                text-align: right;
                width: 135px;
                padding: 0;
                padding-right: 20px;
              }
              .mlt-prm {
                top: 38px;
                left: 5px;
                right: auto;
                width: 135px;
                text-align: right;
                padding: 0;
                padding-right: 20px;
              }
              .title {
                height: 71px;
                left: auto;
                right: -10px;
                top: -3px;
                border-radius: 60px;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                padding-top: 1px;
                text-align: center;
                box-shadow: 0 3px 0px #c87725, 0 5px 0px #3d3737,
                  -1px 0 0px #3d3737, inset 0 3px 1px #ffa;
                &:before {
                  content: "";
                  display: block;
                  width: 52px;
                  height: 37px;
                  border-radius: 46px;
                  border-top-left-radius: 0;
                  border-top-right-radius: 0;
                  top: auto;
                  bottom: 5px;
                }
                .icon-dps {
                  background-image: url(../img/ico-sword.png);
                  background-size: 54px;
                  top: 23px;
                  left: 3px;
                }
              }
            }
          }
          .all-heroes-box {
            width: 502px;
            height: 358px;
            position: absolute;
            top: 105px;
            left: 14px;
            border-radius: 10px 10px 0 0;
            overflow: hidden;
            background: linear-gradient(#866f68, #6f5c56);
            box-shadow: 0 0 0 2px #dd9542, 0 2px 4px 1px rgba(0, 0, 0, 0.4),
              inset 0 0 4px rgba(0, 0, 0, 0.2);
            &:before {
              content: "";
              width: 20px;
              height: 20px;
              background: #dd9542;
              position: absolute;
              top: -11px;
              left: -10px;
              box-shadow: 502px 0 0 #dd9542;
              border-radius: 14px;
              z-index: 1;
              pointer-events: none;
              filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2));
            }
            .all-heroes-box-scroll {
              width: 492px;
              height: 344px;
              position: absolute;
              top: 7px;
              left: 5px;
              overflow: hidden;
              overflow-y: scroll;
              scrollbar-width: thin;
              scrollbar-color: #f4b766 #584941;
              &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                border-radius: 10px;
                background-color: #584941;
              }
              &::-webkit-scrollbar {
                width: 10px;
              }
              &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 3px #796b60;
                background: linear-gradient(
                  to right,
                  #fff,
                  #f5de80,
                  #f4b766,
                  #b26d12
                );
              }
              .hero-card-box-all {
                width: 480px;
                font-size: 0;
                .hero-card {
                  width: 230px;
                  height: 124px;
                  position: relative;
                  display: inline-block;
                  margin: 5px;
                  border-radius: 10px;
                  cursor: pointer;
                  overflow: hidden;
                  background: linear-gradient(135deg, #584b48, #7d6463);
                  background-position: 0;
                  background-size: 100%;
                  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
                    inset 0 0 0 2px #ff9b37,
                    inset 0 0 3px 2px rgba(0, 0, 0, 0.6),
                    inset 0 44px 24px rgba(255, 212, 110, 0.2),
                    0 1px 4px rgba(0, 0, 0, 0.6);
                  transform: scale(0.9826);
                  transition: transform 0.05s ease-in-out;
                  &:hover {
                    background: linear-gradient(135deg, #675854, #8c706f);
                    transform: scale(1);
                    .hero-avatar-box {
                      .hero-avatar {
                        transform: scale(1);
                      }
                    }
                  }
                  &.starterpack {
                    cursor: unset;
                    .hero-dps-box {
                      border-radius: 0 0 6px 6px;
                    }
                    .hero-power-box {
                      display: none;
                    }
                    .hero-name-box {
                      top: 42px;
                    }
                  }
                  &.disabled {
                    .hero-avatar-box {
                      &:after {
                        background: url(../img/map-station-lock2.png),
                          url(../img/map-station-lock1.png), rgba(0, 0, 0, 0.4);
                        background-repeat: no-repeat;
                        background-size: 100px 100px, 100px auto, 100%;
                        background-position: center 36px, center 38px, center;
                        transition: ease-in-out 0.08s;
                      }
                    }
                    &:hover {
                      .hero-avatar-box {
                        &:after {
                          background: url(../img/map-station-lock2.png),
                            url(../img/map-station-lock1.png),
                            rgba(0, 0, 0, 0.4);
                          background-repeat: no-repeat;
                          background-size: 100px 100px, 100px auto, 100%;
                          background-position: center 36px, center 28px, center;
                        }
                      }
                    }
                  }
                  &.bronzeCard {
                    background: linear-gradient(0deg, #815945, #b77c65);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
                      inset 0 0 0 2px #e58b32,
                      inset 0 0 3px 2px rgba(0, 0, 0, 0.6),
                      inset 0 44px 24px rgba(255, 212, 110, 0.2),
                      0 1px 4px rgba(0, 0, 0, 0.6);
                    .hero-avatar-box {
                      background: linear-gradient(
                        180deg,
                        #ff9b37 0%,
                        #fff0e2 50%,
                        #ff9b37 70%,
                        #ffb872 85%,
                        #ff9b37 100%
                      );
                    }
                    &:before,
                    &:after {
                      content: "";
                      width: 100%;
                      height: 20px;
                      position: absolute;
                      left: 0;
                      bottom: 0;
                      pointer-events: none;
                      background-image: url(../img/suphero-squad-frame-all@x2.png),
                        url(../img/suphero-squad-frame-all@x2.png);
                      background-repeat: no-repeat;
                      border-radius: 0 0 10px 10px;
                      background-position: -415px -7px, -54px -7px;
                      background-size: 700px auto;
                      filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.8));
                      z-index: -1;
                    }
                    &:after {
                      top: 0;
                      bottom: unset;
                      transform: scaleY(-1);
                    }
                  }
                  &.silverCard {
                    background: linear-gradient(0deg, #777777, #7d7d7d);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
                      inset 0 0 0 2px #bbbbbb,
                      inset 0 0 3px 2px rgba(0, 0, 0, 0.6),
                      inset 0 44px 24px rgba(255, 212, 110, 0.2),
                      0 1px 4px rgba(0, 0, 0, 0.6);
                    .hero-avatar-box {
                      background: linear-gradient(
                        180deg,
                        #bbbbbb 0%,
                        #f0f0f0 50%,
                        #bbbbbb 70%,
                        #e2e2e2 85%,
                        #bbbbbb 100%
                      );
                    }
                    &:before,
                    &:after {
                      content: "";
                      width: 100%;
                      height: 20px;
                      position: absolute;
                      left: 0;
                      bottom: 0;
                      pointer-events: none;
                      background-image: url(../img/suphero-squad-frame-all@x2.png),
                        url(../img/suphero-squad-frame-all@x2.png);
                      background-repeat: no-repeat;
                      border-radius: 0 0 10px 10px;
                      background-position: -429px -58px, -41px -58px;
                      background-size: 700px auto;
                      filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.8));
                      z-index: -1;
                    }
                    &:after {
                      top: 0;
                      bottom: unset;
                      transform: scaleY(-1);
                    }
                  }
                  &.goldCard {
                    background: linear-gradient(0deg, #7b6f4c, #b2a067);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
                      inset 0 0 0 2px #ffd147,
                      inset 0 0 3px 2px rgba(0, 0, 0, 0.6),
                      inset 0 44px 24px rgba(255, 212, 110, 0.2),
                      0 1px 4px rgba(0, 0, 0, 0.6);
                    .hero-avatar-box {
                      background: linear-gradient(
                        180deg,
                        #ffd147 0%,
                        #fffae2 50%,
                        #ffd147 70%,
                        #ffe072 85%,
                        #ffd147 100%
                      );
                    }
                    &:before,
                    &:after {
                      content: "";
                      width: 100%;
                      height: 20px;
                      position: absolute;
                      left: 0;
                      bottom: 0;
                      pointer-events: none;
                      background-image: url(../img/suphero-squad-frame-all@x2.png),
                        url(../img/suphero-squad-frame-all@x2.png);
                      background-repeat: no-repeat;
                      border-radius: 0 0 10px 10px;
                      background-position: -425px -102px, -45px -102px;
                      background-size: 700px auto;
                      filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.8));
                      z-index: -1;
                    }
                    &:after {
                      top: 0;
                      bottom: unset;
                      transform: scaleY(-1);
                    }
                  }
                  &.highlight {
                    background: linear-gradient(135deg, #ffba5c, #a7761b);
                  }
                  .hero-avatar-box {
                    width: 98px;
                    height: 111px;
                    position: absolute;
                    top: 6px;
                    left: 6px;
                    border-radius: 6px;
                    background: linear-gradient(
                      180deg,
                      #8e7453 0%,
                      #e3c7a3 50%,
                      #8f7553 70%,
                      #ae916a 85%,
                      #8f7553 100%
                    );
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8),
                      inset 0 1px 1px rgba(255, 255, 255, 0.2);
                    .hero-avatar {
                      width: 90px;
                      height: 103px;
                      position: absolute;
                      top: 4px;
                      left: 4px;
                      border-radius: 3px;
                      overflow: hidden;
                      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
                      transform: scale(1.0177);
                    }
                    &:after {
                      content: "";
                      position: absolute;
                      top: 3px;
                      left: 3px;
                      width: 92px;
                      height: 105px;
                      border-radius: 4px;
                      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2);
                    }
                    .sh2-icon-forgirl {
                      width: 25px;
                      height: 32px;
                      position: absolute;
                      top: 2px;
                      left: 3px;
                      z-index: 1;
                      img {
                        width: 26px;
                      }
                    }
                  }
                  .hero-level-box,
                  .hero-dps-box,
                  .hero-power-box {
                    width: 109px;
                    height: 16px;
                    position: absolute;
                    top: 6px;
                    right: 6px;
                    background: linear-gradient(
                      90deg,
                      #92633b 0%,
                      #d24b1f 50%,
                      #93633b 100%
                    );
                    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
                      inset 0 10px 0 rgba(255, 255, 255, 0.1),
                      0 1px 1px rgba(0, 0, 0, 0.15),
                      0 0 0 1px rgba(0, 0, 0, 0.2),
                      1px 0px 4px rgba(0, 0, 0, 0.2);
                    color: #fff;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    line-height: 16px;
                    padding-left: 5px;
                    border-radius: 6px 6px 0 0;
                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
                    z-index: 1;
                    .hero-level,
                    .hero-dps,
                    .hero-power {
                      width: 64px;
                      height: auto;
                      position: absolute;
                      right: 5px;
                      top: 0;
                      color: #ffffff;
                      font-size: 12px;
                      font-weight: bold;
                      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                      line-height: 16px;
                      text-align: right;
                      text-transform: none;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
                    }
                    .hero-dps {
                      width: 76px;
                    }
                    .hero-dps {
                      width: 58px;
                    }
                  }
                  .hero-dps-box {
                    border-radius: 0;
                    top: 23px;
                    background: linear-gradient(
                      90deg,
                      #475660 0%,
                      #3474a1 50%,
                      #475661 100%
                    );
                  }
                  .hero-power-box {
                    border-radius: 0 0 6px 6px;
                    top: 40px;
                    background: linear-gradient(
                      90deg,
                      #a27f0e 0%,
                      #ccc016 50%,
                      #976c10 100%
                    );
                  }
                  .hero-name-box {
                    width: 114px;
                    height: 30px;
                    position: absolute;
                    top: 56px;
                    right: 6px;
                    display: table;
                    .hero-name {
                      color: #fff;
                      font-size: 12px;
                      font-weight: bold;
                      text-align: center;
                      display: table-cell;
                      vertical-align: middle;
                      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
                    }
                  }
                  .color-btn.green {
                    width: 114px;
                    height: 30px;
                    position: absolute;
                    top: 86px;
                    right: 6px;
                    box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.25),
                      0 2px 4px 0 rgba(0, 0, 0, 0.55);
                    .color-btn-text {
                      flex-direction: row;
                      .gold {
                        text-transform: none;
                        color: #ffffff;
                        text-shadow: 0 0 0;
                        font-size: 13px;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75),
                          0 1px 1px rgba(0, 0, 0, 0.4);
                        .f-gold {
                          top: 1px;
                          position: relative;
                          &:before {
                            content: "";
                            width: 18px;
                            height: 18px;
                            position: relative;
                            display: inline-block;
                            background-image: url(../img/ico-gold.png);
                            background-size: 100%;
                            margin: 0 4px 0 4px;
                            vertical-align: middle;
                            top: -2px;
                          }
                        }
                      }
                      .color-btn-text,
                      .color-btn-text1 {
                        flex: none;
                        margin-top: 0;
                        margin-left: 6px;
                        color: rgba(0, 0, 0, 0.58);
                        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
                        font-size: 13px;
                        .btn-text {
                          background: #ff2727;
                          padding: 0 4px 1px 4px;
                          border-radius: 6px 0;
                          box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 0.4),
                            inset -1px -1px 1px rgba(0, 0, 0, 0.2),
                            0 1px 4px rgba(0, 0, 0, 0.8),
                            0 1px 2px rgba(0, 0, 0, 0.4);
                          position: absolute;
                          right: 0;
                          top: -8px;
                          font-size: 11px;
                          color: #fff;
                          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
                          transform: skewX(340deg);
                        }
                      }
                    }
                    .color-btn-text {
                      top: 0;
                    }
                    &:active {
                      box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
                        inset 0 2px 2px rgba(0, 0, 0, 0.2);
                      .color-btn-text {
                        top: 1px;
                      }
                    }
                    &:hover {
                      filter: brightness(110%);
                      -webkit-filter: brightness(110%);
                    }
                    &:hover.disabled {
                      filter: grayscale(100%);
                      cursor: no-drop;
                    }
                  }
                  .btn-buy {
                    width: 114px;
                    height: 20px;
                    right: 6px;
                    padding-top: 20px;
                  }
                  .hero-abil-icon,
                  .hero-pieces-icon {
                    width: 50px;
                    height: 50px;
                    position: absolute;
                    top: 66px;
                    left: 28px;
                    border-radius: 10px;
                    overflow: hidden;
                    border: 2px solid #fcd885;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.55);
                    cursor: pointer;
                    background: url(../img/v2-trophy-bg.jpg);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    &:after {
                      content: "";
                      position: absolute;
                      width: 50px;
                      height: 50px;
                      left: 0;
                      top: 0;
                      border-radius: 10px;
                      pointer-events: none;
                      box-shadow: inset 0 2px 2px rgba(255, 255, 255, 0.3),
                        inset 0 -2px 2px rgba(0, 0, 0, 0.3);
                    }
                    &:active {
                      transform: scale(0.96);
                    }
                    &:hover {
                      filter: brightness(110%);
                      -webkit-filter: brightness(110%);
                    }
                    img {
                      width: 50px;
                    }
                  }
                  .hero-pieces-icon {
                    &:before {
                      content: "";
                      position: absolute;
                      width: 44px;
                      height: 44px;
                      left: 3px;
                      top: 3px;
                      background-image: url(../img/ic-girls-pieces.png);
                      background-position: center -44px;
                      background-repeat: no-repeat;
                      background-size: 100%;
                    }
                  }
                  .btn-close-x {
                    zoom: 0.75;
                    top: 0px;
                    right: 0px;
                    border-radius: 12px;
                    border: 3px solid #ffbe43;
                  }
                }
              }
            }
          }
          .x2-btn-all-box {
            width: 502px;
            height: 40px;
            background-color: #6b5f55;
            position: absolute;
            bottom: 14px;
            left: 14px;
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25);
            border-radius: 0 0 10px 10px;
            text-align: center;
            display: flex;
            justify-content: center;
            overflow: hidden;
            background: linear-gradient(0deg, #52433d 0%, #473c3c 100%);
            box-shadow: 2px 2px 0 #dd9542, -2px 2px 0 #dd9542,
              0 4px 2px 1px rgba(0, 0, 0, 0.2), inset 0 0 4px rgba(0, 0, 0, 0.2);
            &:before {
              content: "";
              width: 20px;
              height: 20px;
              background: #dd9542;
              position: absolute;
              bottom: -11px;
              left: -10px;
              box-shadow: 502px 0 0 #dd9542;
              border-radius: 14px;
              z-index: 1;
              pointer-events: none;
              filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2));
            }
            .x2-btn {
              width: auto;
              height: 26px;
              position: relative;
              display: inline-block;
              margin: 0 4px;
              top: 7px;
              cursor: pointer;
              background: #6f5c5600;
              padding: 0;
              border-radius: 0 0 8px 8px;
              box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0),
                0 0 6px rgba(0, 0, 0, 0);
              transition: ease-in-out 0.1s;
              &:hover {
                filter: brightness(110%);
              }
              .x2-btn-text {
                color: #fff;
                font-size: 15px;
                line-height: 21px;
                font-weight: bold;
                text-align: center;
                position: relative;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                width: 56px;
                height: 26px;
                background: linear-gradient(0deg, #62a3e5 0%, #b4d7fa 100%);
                border-radius: 6px;
                box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25),
                  0 2px 4px rgba(0, 0, 0, 0.55);
                cursor: pointer;
              }
              &:active,
              &.selected {
                pointer-events: none;
                .x2-btn-text {
                  line-height: 23px;
                  color: #fff;
                  background: linear-gradient(0deg, #7cbc30 0%, #baf279 100%);
                  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25),
                    inset 0 -2px 0 rgba(0, 0, 0, 0.25),
                    0 0 6px rgba(0, 0, 0, 0.25);
                }
              }
              &.selected {
                background: #6f5c56;
                padding: 5px 8px 8px 8px;
                top: 0px;
                box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.2),
                  0 0 6px rgba(0, 0, 0, 0.6);
              }

              &.wide {
                width: 160px;
                .x2-btn-text {
                  width: auto;
                }
              }
            }
          }
        }
        .tab-panel-box {
          border-radius: 10px 18px 18px 18px;
          box-shadow: inset 0 4px 0 #9c8b7c, inset 0 0 7px rgba(0, 0, 0, 0.1) !important;
        }

        .womens-btns-screen {
          width: 1106px;
          height: 515px;
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(180deg, #786866 0%, #705e5d 100%);
          box-shadow: inset 0 0 0 4px #9c8b7c,
            inset 0px 0px 16px rgba(0, 0, 0, 0.6);
          border-radius: 10px 18px 18px 18px;
          .womens-btns-content {
            display: flex;
            height: 474px;
            justify-content: center;
            padding: 20px;
            .women-btn-wrap {
              display: flex;
              flex-direction: column;
              align-items: center;
              height: auto;
              margin: 0 10px;
              .title {
                width: 302px;
                height: 42px;
                line-height: 36px;
                background-image: url(../img/darkworld-angels-title-bg-lilac.png);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                margin-top: 18px;
                text-align: center;
                color: #fff;
                font-weight: 700;
                font-size: 20px;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
              }
              .women-btn-box {
                width: 241px;
                height: 350px;
                background: linear-gradient(
                  159.21deg,
                  #9f7c47 1.39%,
                  #e9be88 35.56%,
                  #946f3f 70.08%,
                  #cca36f 84.6%,
                  #b38952 98.01%
                );
                margin-top: 16px;
                transition: ease-in-out 0.1s;
                box-shadow: 0px 2px 0px #673d06, 0px 4px 10px rgba(0, 0, 0, 0.4);
                border-radius: 14px;
                position: relative;
                cursor: pointer;
                &:hover {
                  transform: scale(1.03);
                  z-index: 1;
                  transition: ease-in-out 0.1s;
                  .img-wrap {
                    &:after {
                      opacity: 0.6;
                      left: 0px;
                      top: 0px;
                      transition: ease-in-out 0.1s;
                    }
                  }
                }
                &:active {
                  transform: scale(1.01);
                  transition: ease-in-out 0.01s;
                }
                .img-wrap {
                  width: 227px;
                  height: 336px;
                  position: absolute;
                  left: 7px;
                  top: 7px;
                  border-radius: 9px;
                  box-shadow: 0 0 0 1px #734407, 0px 0px 3px rgba(0, 0, 0, 0.4);
                  overflow: hidden;
                  display: flex;
                  justify-content: center;
                  &:after {
                    content: "";
                    position: absolute;
                    left: -10px;
                    top: -10px;
                    width: 100%;
                    height: 100%;
                    background-image: url(../img/darkworld-glow-cards.png);
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    opacity: 0;
                    transition: ease-in-out 0.1s;
                  }
                  img {
                    width: auto;
                    height: 104%;
                  }
                }
              }
              &.heros {
                .title {
                  background-image: url(../img/darkworld-angels-title-bg-lilac.png);
                }
                .women-btn-box {
                  background: linear-gradient(
                    155.68deg,
                    #5c63bf 6.11%,
                    #8799fc 53.31%,
                    #414095 65.64%,
                    #8799fc 81.23%,
                    #717ddb 97.65%
                  );
                  box-shadow: 0px 2px 0px #294a9d,
                    0px 4px 10px rgba(0, 0, 0, 0.4);
                  &:hover {
                    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.8),
                      0px 2px 0px #294a9d, 0 0 0 2px rgba(0, 0, 0, 0.2),
                      0px 1px 5px 3px #00ccffcc, 0px 1px 11px #ffffffb8;
                  }
                }
              }
              &.supheros {
                .title {
                  background-image: url(../img/darkworld-angels-title-bg-lilac2.png);
                }
                .women-btn-box {
                  background: linear-gradient(
                    155.68deg,
                    #d976ff 6.11%,
                    #e097ff 45.23%,
                    #b446e5 64.21%,
                    #df9aff 81.23%,
                    #8a22bb 97.65%
                  );
                  box-shadow: 0px 2px 0px #690896,
                    0px 4px 10px rgba(0, 0, 0, 0.4);
                  &:hover {
                    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.8),
                      0px 2px 0px #690896, 0 0 0 2px rgba(0, 0, 0, 0.2),
                      0px 1px 5px 3px #00ccffcc, 0px 1px 11px #ffffffb8;
                  }
                  .img-wrap {
                    img {
                      height: 124%;
                      margin-top: -70px;
                    }
                  }
                }
              }
              &.angels {
                .title {
                  background-image: url(../img/darkworld-angels-title-bg-brown.png);
                }
                .women-btn-box {
                  &:hover {
                    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.8),
                      0px 2px 0px #673d06, 0 0 0 2px rgba(0, 0, 0, 0.2),
                      0px 1px 5px 3px #00ccffcc, 0px 1px 11px #ffffffb8;
                  }
                }
              }
            }
          }
        }

        .skills-all-box {
          width: 90px;
          height: 507px;
          position: absolute;
          top: 4px;
          right: 4px;
          background-color: #c4b6ad;
          border-radius: 0px 14px 14px 0;
          box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.2),
            inset 2px 0 0 rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.2);
          .skills-all {
            width: 64px;
            height: auto;
            position: absolute;
            top: 8px;
            left: 14px;
            font-size: 0;
            .skills-pic {
              width: 64px;
              height: 64px;
              position: relative;
              display: inline-block;
              cursor: pointer;
              background: linear-gradient(0deg, #e9c44f 0%, #f7eec7 100%);
              box-shadow: inset 0 -5px 0 rgba(160, 79, 0, 0.35),
                0 2px 4px rgba(0, 0, 0, 0.55), 0 0 0 2px rgba(0, 0, 0, 0.1),
                inset 0 1px 1px rgba(255, 255, 255, 0.06);
              border-radius: 10px;
              margin-bottom: 7px;
              img {
                position: absolute;
                top: 5px;
                left: 6px;
              }
              &:active {
                box-shadow: inset 0 -2px 0 rgba(160, 79, 0, 0.35),
                  0 2px 4px rgba(0, 0, 0, 0.55), 0 0 0 2px rgba(0, 0, 0, 0.1),
                  inset 0 1px 1px rgba(255, 255, 255, 0.06);
                img {
                  top: 7px;
                }
              }
              &.idle {
                img {
                  margin-top: 2px;
                }
                box-shadow: inset 0 3px 0px #222, inset 0 0 6px #333;
                background: linear-gradient(to top, #ccc, #777, #333);
                .timer {
                  display: block;
                  width: calc(100% + 6px);
                  height: 18px;
                  background: #f0d571;
                  position: absolute;
                  bottom: -2px;
                  left: -3px;
                  text-align: center;
                  font-size: 15px;
                  font-weight: bold;
                  color: #000;
                  line-height: 18px;
                  border-radius: 0 0 6px 6px;
                  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.6),
                    0 1px 4px rgba(0, 0, 0, 0.4);
                  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
                }
                cursor: default;
                &:active {
                  img {
                    top: 5px;
                  }
                }
              }
              &.in-progress {
                img {
                  margin-top: 2px;
                }
                box-shadow: inset 0 3px 0px #541414, inset 0 0 6px #2c0a0a;
                background: linear-gradient(to top, #a12929, #c86151, #6b1f1f);
                .timer {
                  display: block;
                  height: 20px;
                  line-height: 20px;
                  background: rgba(44, 0, 0, 0.4);
                  border-radius: 11px;
                  position: absolute;
                  bottom: 0px;
                  left: 0px;
                  right: 0px;
                  text-align: center;
                  font-size: 13px;
                  font-weight: bold;
                  color: #ffa;
                  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
                    0 1px 1px rgba(255, 255, 255, 0.2);
                  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                }
                cursor: default;
                &:active {
                  img {
                    top: 5px;
                  }
                }
              }
              .skills-pic-disabled {
                width: 64px;
                height: 64px;
                position: absolute;
                top: 0;
                left: 0;
                display: none;
                background-color: rgba(0, 0, 0, 0.5);
                border-radius: 10px;
                box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.3);
                &:before {
                  content: "";
                  width: 40px;
                  height: 40px;
                  position: absolute;
                  top: 8px;
                  left: 12px;
                  background-image: url(../img/lock-gold1.png);
                  background-size: 100%;
                  background-repeat: no-repeat;
                }
              }
              &.disabled {
                cursor: default;
                &:active {
                  box-shadow: inset 0 -5px 0 rgba(160, 79, 0, 0.35),
                    0 2px 4px rgba(0, 0, 0, 0.55), 0 0 0 2px rgba(0, 0, 0, 0.2),
                    inset 0 1px 1px rgba(255, 255, 255, 0.06);
                  img {
                    top: 5px;
                  }
                }
                .skills-pic-disabled {
                  display: block;
                }
              }
              &:hover {
                filter: brightness(1.2);
              }
            }
          }
        }

        &.wide {
          width: 1106px;
          .quests-list-all-box,
          .heroes-list-all-box {
            width: 1106px;
          }
        }
      }
    }
    .right-side {
      width: 474px;
      height: 530px;
      top: 100px;
      right: 93px;
      .darkness-progress-bar-wrap {
        width: 166px;
        height: 38px;
        background: linear-gradient(
          180deg,
          #ffe199 0%,
          #f4c557 15.62%,
          #ffe199 41.15%,
          #f4c657 81.25%,
          #ffe199 100%
        );
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        position: absolute;
        left: 0;
        top: -20px;
        &:before {
          content: "";
          position: absolute;
          width: 160px;
          height: 32px;
          left: 3px;
          top: 3px;
          background: linear-gradient(
            180deg,
            #444a4f 0%,
            #62666a 50%,
            #444a4f 100%
          );
          border-radius: 8px;
        }
        .progress {
          position: absolute;
          width: 160px;
          height: 32px;
          left: 3px;
          top: 3px;
          border-radius: 8px;
          overflow: hidden;
          .fulfilled {
            height: 100%;
            background: linear-gradient(270deg, #001344 0%, #1a48bd 100%);
            border-radius: 8px;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25),
              inset 0 15px 0 rgba(255, 255, 255, 0.1);
          }
        }
        .value {
          position: absolute;
          display: flex;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.75);
          line-height: 20px;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0)
          );
          padding: 0 14px;
          .from {
            color: #e8f1a6;
          }
          .to {
            color: #bce4f3;
            &:before {
              content: "/";
            }
          }
        }
      }
      .darkOil-progress-bar-wrap {
        width: 180px;
        height: 40px;
        position: absolute;
        left: 12px;
        top: -20px;
        z-index: 1;
        &:hover {
          filter: brightness(1.1);
          cursor: help;
        }
        &:after {
          content: "";
          width: 50px;
          height: 50px;
          position: absolute;
          left: -8px;
          top: -8px;
          background-image: url(../img/ic-black-butil-160.png);
          background-size: 100%;
          background-repeat: no-repeat;
        }
        .progress-box {
          position: absolute;
          width: 164px;
          height: 24px;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background: #aaafc6;
          border-radius: 20px;
          box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 1px rgba(255, 255, 255, 0.6),
            0 1px 4px 1px rgba(0, 0, 0, 0.4);
          &:before {
            content: "";
            background: #3d357e;
            position: absolute;
            width: 156px;
            height: 16px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 20px;
            box-shadow: 0 0 0 1px #3d357e, inset 0 -4px 4px rgba(0, 0, 0, 0.2);
          }
          &:after {
            content: "";
            position: absolute;
            top: 4px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(0deg, #9f2b9700 0%, #ff57ebd2 100%);
            border-radius: 10px 10px 6px 6px;
            width: 150px;
            height: 8px;
          }
          .progress {
            position: absolute;
            width: 156px;
            height: 16px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 20px;
            overflow: hidden;
            .fulfilled {
              height: 100%;
              background: linear-gradient(270deg, #9f2b98 0%, #ce3dbc 100%);
              box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1),
                inset 0 -12px 4px rgba(0, 0, 0, 0.1);
              z-index: 1;
            }
          }
          .value {
            position: absolute;
            display: flex;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.6);
            line-height: 20px;
            color: #fff;
            z-index: 1;
            white-space: nowrap;
          }
        }
      }
      .world-portal {
        position: absolute;
        right: 0px;
        cursor: pointer;
        z-index: 101;
        width: 100px;
        height: 100px;
        filter: brightness(100%);
        &:hover {
          filter: brightness(110%);
        }
        &:active {
          transform: scale(0.98);
          filter: brightness(100%);
        }
        img {
          width: 100%;
          filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.4));
        }
        .title {
          position: absolute;
          line-height: 14px;
          font-size: 12px;
          color: #fff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
          bottom: 18px;
          left: 0px;
          width: 100px;
        }
      }
      .world-portal.underworld {
        top: 6px;
      }
      .world-portal.darkworld {
        top: 112px;
      }
      .world-map {
        position: absolute;
        top: 112px;
        right: 2px;
        cursor: pointer;
        z-index: 101;
        width: 100px;
        height: 100px;
        filter: brightness(100%);
        &:hover {
          filter: brightness(110%);
        }
        &:active {
          transform: scale(0.98);
          filter: brightness(100%);
        }
        img {
          width: 90px;
          filter: drop-shadow(0 5px 3px rgba(0, 2, 100, 0.5));
          position: relative;
          left: 2.5px;
          top: 2.5px;
        }
        .world-map-heading {
          color: #fff;
          text-transform: capitalize;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7), 0 1px 5px rgba(0, 0, 0, 1);
          top: 0;
          left: 0;
          width: 100%;
          line-height: 100px;
          position: absolute;
          font-size: 15px;
        }
      }
      .buster-box {
        position: absolute;
        right: 0px;
        top: 242px;
        width: 100px;
        z-index: 101;
        .buster-btn {
          margin: auto;
          margin-bottom: 24px;
          width: 42px;
          height: 42px;
          cursor: pointer;
          transform: rotate(45deg);
          border-radius: 6px;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.6),
            inset 0 0 0 2px #e8c65c, inset 2px 2px 4px #25253d,
            1px 1px 4px rgba(0, 0, 0, 0.6);
          background: radial-gradient(circle at center, #8d8c8a, #373e56 80%);
          .buster-icn {
            width: 42px;
            height: 42px;
            transform: rotate(-45deg);
          }
          &:hover {
            filter: brightness(1.1);
          }
          &:active {
            transform: rotate(45deg) scale(0.96);
          }
        }
        .buster-btn.active {
          &:before {
            content: "";
            position: absolute;
            left: 2px;
            top: 2px;
            background: url(../img/paycheck-arrow.png);
            background-size: 90%;
            background-repeat: no-repeat;
            background-position: center;
            width: 100%;
            height: 100%;
            z-index: 1;
            transform: rotate(-45deg);
          }
          .buster-icn {
            filter: brightness(0.7);
          }
          .timerbox {
            position: absolute;
            left: 27px;
            top: 10px;
            width: 52px;
            transform: rotate(-45deg) translateX(-50%);
            border-radius: 4px;
            line-height: 16px;
            background: rgba(0, 0, 0, 0.6);
            z-index: 1;
            .timer {
              font-size: 12px;
              color: #fff;
              text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
            }
          }
        }
        .buster-btn.buster-gold {
          .buster-icn {
            background: url(../img/change-ic-gold.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
        }
        .buster-btn {
          &:after {
            position: absolute;
            right: -10px;
            bottom: 28px;
            color: rgb(255, 243, 175);
            font-size: 13px;
            font-weight: 700;
            text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4),
              0 1px 1px rgba(0, 0, 0, 0.4);
            width: 24px;
            height: 24px;
            line-height: 24px;
            border-radius: 100%;
            background: #462604;
            transform: rotate(-45deg);
            box-shadow: inset 0 0 0 2px rgb(255, 243, 175),
              inset 2px 2px 4px #25253d, 1px 1px 4px rgba(0, 0, 0, 0.6);
          }
        }
        .buster-btn.x2 {
          &:after {
            content: "x2";
          }
        }
        .buster-btn.x4 {
          &:after {
            content: "x4";
          }
        }
        .buster-btn.x8 {
          &:after {
            content: "x8";
          }
        }
      }
      &.cb {
        right: 354px;
      }
      &.at {
        left: 0px;
        right: 0px;
        width: 1116px;
      }
      .monster {
        top: 0;
      }
      .monster-prg-box-all {
        width: 430px;
        height: 84px;
        position: absolute;
        bottom: 10px;
        left: 22px;
        z-index: 101;
        .lvl-prg {
          width: auto;
          height: 24px;
          position: absolute;
          top: -40px;
          right: -20px;
          border-radius: 24px;
          line-height: 24px;
          padding: 0px 50px 0 15px;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          border: solid 3px #a88a7f;
          background: #3d3634;
          box-shadow: 0 2px 3px #40372e, 0 3px 3px #40372e;
          &:before {
            content: "";
            width: 50px;
            height: 50px;
            position: absolute;
            right: -5px;
            bottom: 5px;
            background-image: url(../img/scul.png);
            background-size: 50px;
          }
        }
        .name {
          width: 100%;
          height: auto;
          position: absolute;
          top: -34px;
          left: 0;
          color: #fff;
          font-size: 22px;
          font-weight: bold;
          text-transform: capitalize;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
        }
        .health {
          width: 370px;
          height: 46px;
          position: absolute;
          top: 3px;
          right: 0;
          background: linear-gradient(0deg, #584a49 0%, #3b302f 100%);
          background: linear-gradient(
            0deg,
            #ffe199 0%,
            #f4c657 18%,
            #ffe199 60%,
            #f4c557 85%,
            #ffe199 100%
          );
          border-radius: 12px;
          &:before {
            content: "";
            width: 367px;
            height: 40px;
            position: absolute;
            top: 3px;
            left: 0;
            background: linear-gradient(0deg, #584a49 0%, #3b302f 100%);
            border-radius: 10px;
          }
          .p100 {
            width: 200px;
            height: 36px;
            position: absolute;
            top: 5px;
            right: 5px;
            .prg {
              width: 100%;
              height: 36px;
              position: absolute;
              top: 0;
              left: 0;
              background: linear-gradient(270deg, #ff0000 0%, #b10000 100%);
              border-radius: 8px;
              box-shadow: inset 0 18px 0 rgba(255, 255, 255, 0.15);
              transition: width 0.3s;
            }
          }
          .num {
            width: 150px;
            height: 36px;
            position: absolute;
            top: 5px;
            left: 10px;
            background: linear-gradient(
              270deg,
              #193351 0%,
              #205d88 51.04%,
              #162d47 100%
            );
            &:before {
              content: "";
              width: 44px;
              height: 44px;
              position: absolute;
              right: -25px;
              top: -4px;
              background-image: url(../img/heart1.png);
              background-size: 100%;
              background-repeat: no-repeat;
            }
            .from,
            .to {
              height: 36px;
              top: 0;
              left: 0;
              display: inline-block;
              position: relative;
              color: #e8f1a6;
              font-size: 16px;
              line-height: 36px;
              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            }
            .to {
              color: #bce4f3;
              &:before {
                content: "/";
                display: inline-block;
              }
            }
          }
        }
        .timer {
          width: 370px;
          height: 30px;
          position: absolute;
          top: 50px;
          right: 0;
          background: linear-gradient(0deg, #584a49 0%, #3b302f 100%);
          background: linear-gradient(
            0deg,
            #ffe199 0%,
            #f4c657 18%,
            #ffe199 60%,
            #f4c557 85%,
            #ffe199 100%
          );
          border-radius: 12px;
          &:before {
            content: "";
            width: 367px;
            height: 24px;
            position: absolute;
            top: 3px;
            left: 0;
            background: linear-gradient(0deg, #584a49 0%, #3b302f 100%);
            border-radius: 10px;
          }
          .p100 {
            width: 200px;
            height: 36px;
            position: absolute;
            top: 5px;
            right: 5px;
            .prg {
              width: 100%;
              height: 20px;
              position: absolute;
              top: 0;
              left: 0;
              background: linear-gradient(270deg, #146db1 0%, #05498e 100%);
              border-radius: 8px;
              box-shadow: inset 0 10px 0 rgba(255, 255, 255, 0.15);
              transition: width 0.3s;
            }
          }
          .time {
            width: 150px;
            height: 20px;
            position: absolute;
            top: 5px;
            left: 10px;
            background: linear-gradient(
              270deg,
              #193351 0%,
              #205d88 51.04%,
              #162d47 100%
            );
            &:before {
              content: "";
              width: 22px;
              height: 22px;
              position: absolute;
              right: -14px;
              top: -1px;
              background-image: url(../img/clock2.png);
              background-size: 100%;
              background-repeat: no-repeat;
            }
            .txt {
              height: 20px;
              top: 0;
              left: 0;
              display: inline-block;
              position: relative;
              color: #e8f1a6;
              font-size: 18px;
              line-height: 20px;
              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
            }
          }
        }
        .loc-list {
          width: 80px;
          height: 84px;
          position: absolute;
          bottom: 0;
          left: 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.55);
          border-radius: 10px;
          overflow: hidden;
          transition: ease-in-out 0.1s;
          .loc-back {
            width: 80px;
            height: 84px;
            position: absolute;
            top: 0;
            left: 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.55);
            background: linear-gradient(
              0deg,
              #ffe199 0%,
              #f4c657 18%,
              #ffe199 60%,
              #f4c557 85%,
              #ffe199 100%
            );
            border-radius: 10px;
            cursor: pointer;
            display: none;
            &:hover {
              box-shadow: inset 0 0 8px #fff, inset 0 0 12px #fff;
            }
            .lvl-prg-num,
            .lvl-prg-text,
            .lvl-prg-back {
              width: 60px;
              height: auto;
              position: absolute;
              top: 10px;
              left: 10px;
              color: #2f2d2d;
              font-size: 18px;
              font-weight: bold;
              text-shadow: 0 0 10px rgba(255, 255, 255, 0.85);
            }
            .lvl-prg-text {
              font-size: 30px;
              top: 26px;
            }
            .lvl-prg-back {
              font-size: 12px;
              top: 64px;
              text-transform: uppercase;
            }
          }
          .locs {
            width: 80px;
            position: absolute;
            padding-top: 22px;
            background: linear-gradient(
              0deg,
              #ffe199 0%,
              #f4c657 18%,
              #ffe199 60%,
              #f4c557 85%,
              #ffe199 100%
            );
            cursor: pointer;
            &.world {
              padding-top: 14px;
              &:after {
                content: none;
              }
            }
            &:after {
              content: "";
              width: 0;
              height: 0;
              position: absolute;
              top: 6px;
              left: 30px;
              border-left: 10px solid transparent;
              border-bottom: 10px solid #2f2d2d;
              border-right: 10px solid transparent;
            }
            &:hover {
              box-shadow: inset 0 0 8px #fff, inset 0 0 12px #fff;
              &:after {
                filter: drop-shadow(0 1px 1px #fff);
                -webkit-filter: drop-shadow(0 1px 1px #fff);
              }
            }
            .loc {
              width: 56px;
              height: 56px;
              position: relative;
              display: inline-block;
              margin: 0 12px 10px 12px;
              background: linear-gradient(0deg, #e9c44f 0%, #f7eec7 100%);
              box-shadow: inset 0 -5px 0 rgba(160, 79, 0, 0.35),
                0 2px 4px rgba(0, 0, 0, 0.55);
              border-radius: 10px;
              pointer-events: none;
              .loc-text,
              .loc-text2 {
                width: 56px;
                height: auto;
                position: absolute;
                top: 2px;
                left: 0;
                text-align: center;
                color: #2f2d2d;
                font-size: 18px;
                font-weight: bold;
                text-shadow: 0 0 10px rgba(255, 255, 255, 0.85);
              }
              .loc-text2 {
                font-size: 24px;
                text-transform: uppercase;
                top: 20px;
              }
              &:active {
                box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.35),
                  0 2px 4px rgba(0, 0, 0, 0.55);
                .loc-text {
                  top: 4px;
                }
                .loc-text2 {
                  top: 22px;
                }
              }
              &:hover {
                filter: brightness(110%);
                -webkit-filter: brightness(110%);
              }
            }
          }
          &.opened {
            height: 435px;
            transition: ease-in-out 0.1s;
            .locs {
              top: auto;
              &:after {
                content: "";
                width: 0;
                height: 0;
                position: absolute;
                top: 6px;
                left: 30px;
                border-left: 10px solid transparent;
                border-top: 10px solid #2f2d2d;
                border-bottom: 10px solid transparent;
                border-right: 10px solid transparent;
              }
              .loc {
                pointer-events: all;
              }
            }
          }
          &.back {
            .loc-back {
              display: block;
            }
            .locs {
              display: none;
            }
          }
        }
        &.r_b {
          z-index: 1;
        }
      }

      .monster-prg-box-all.sp {
        .lvl-prg {
          right: -10px;
        }

        .health {
          right: 30px;
          &:before {
            content: "";
            width: 364px;
            left: 3px;
          }
        }
        .num {
          left: 5px;
          border-radius: 10px;
        }
        .from,
        .to {
          font-size: 18px;
        }
        .timer {
          right: 30px;
          &:before {
            content: "";
            width: 364px;
            left: 3px;
          }
        }
        .time {
          left: 5px;
          border-radius: 10px;
        }
        .loc-list {
          display: none;
        }
      }

      .back-boss-box {
        width: 220px;
        height: 50px;
        position: absolute;
        top: 320px;
        left: 130px;
        z-index: 101;
        .color-btn {
          width: 220px;
          height: 50px;
          position: absolute;
          top: 0;
          left: 0;
          .color-btn-text {
            top: 12px;
            color: #2f2d2d;
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.75);
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
          }
          &:active {
            .color-btn-text {
              top: 13px;
            }
            &:before,
            &:after {
              content: "";
              top: 6px;
            }
          }
          &:hover {
            filter: brightness(110%);
          }
          &:before {
            content: "";
            width: 36px;
            height: 36px;
            position: absolute;
            top: 5px;
            left: 5px;
            background-image: url(../img/cor-1.png);
            background-size: 100%;
            background-repeat: no-repeat;
          }
          &:after {
            content: "";
            width: 36px;
            height: 36px;
            position: absolute;
            top: 5px;
            right: 5px;
            background-image: url(../img/cor-1.png);
            background-size: 100%;
            background-repeat: no-repeat;
          }
        }
      }
    }
    .popup-layer {
      .m-popup {
        .color-box {
          border-radius: 0 0 5px 5px;
        }
      }

      .m-popup.busters {
        width: 340px;
        height: 468px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: auto;
        > .title {
          font-size: 18px;
        }
        &:before {
          background: linear-gradient(0deg, #a77d68, #8b6958);
        }
        .content {
          margin: 60px 10px 30px 10px;
          position: relative;
          top: 0;
          bottom: 0;
          .buster-imgs-box {
            position: relative;
            width: 168px;
            height: 172px;
            display: flex;
            justify-content: center;
            margin: auto;
            .buster-stand {
              position: absolute;
              width: 168px;
              height: 176px;
              background-image: url(../img/darkworld-currency-stand.png);
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            }
            .buster-icn {
              position: absolute;
              top: 15px;
              width: 122px;
              height: 122px;
              background-size: 96%;
              background-repeat: no-repeat;
              background-position: center;
            }
            .buster-value {
              position: absolute;
              right: -4px;
              top: 38px;
              font-size: 34px;
              font-weight: 700;
              color: #ffe88f;
              text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25),
                0px 1px 2px rgba(0, 0, 0, 0.4);
            }
          }
          .title {
            position: unset;
            margin: auto;
            margin-top: 10px;
            transform: none;
            padding: 0 20px;
            font-size: 18px;
            box-shadow: none;
            border: none;
            left: 50%;
            top: 10px;
            background: linear-gradient(
              90deg,
              #213faa 0%,
              #3e6ad6 50%,
              #213faa 100%
            );
            border-radius: unset;
            line-height: 36px;
            width: fit-content;
            height: auto;
            color: #fff;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
            filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.6))
              hue-rotate(160deg) brightness(1.2);
            white-space: nowrap;
            text-transform: inherit;
            &:before,
            &:after {
              content: "";
              position: absolute;
              top: 0;
              display: block;
              height: 100%;
              width: 17px;
              background-image: url(../img/darkworld-angels-title-bg-blue.png);
              background-repeat: no-repeat;
              filter: brightness(0.58) saturate(1.9);
              background-size: auto 52px;
            }
            &:before {
              left: -16px;
              background-position: left;
            }
            &:after {
              right: -16px;
              background-position: right;
            }
            .dps-value {
              display: inline-block;
            }
          }
          .text-description {
            background: rgba(0, 0, 0, 0.3);
            padding: 20px 36px;
            margin-top: 14px;
            color: #fff;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
          }
          .time-of-action {
            color: #99e6f9;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
            font-size: 13px;
            border-radius: 6px;
            background: #564337;
            box-shadow: inset 0 0 0 2px #e8c65c,
              inset 0px 10px 0px rgba(255, 255, 255, 0.08),
              inset 0px 2px 1px #25253d;
            width: 304px;
            margin: auto;
            line-height: 32px;
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 48px;
            left: 50%;
            transform: translateX(-50%);
            justify-content: center;
            .buster-name {
              color: #ffe88f;
              margin-left: 4px;
            }
            .time {
              margin-left: 4px;
              background: #500000;
              border: 1px solid rgba(157, 249, 255, 0.4);
              box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4),
                inset 0px 1px 1px rgba(255, 255, 255, 0.2);
              border-radius: 3px;
              padding: 1px 2px;
              color: #fff;
              line-height: 16px;
            }
          }
          .color-btn.bay {
            background: linear-gradient(
              180deg,
              #ffd585 0%,
              #ffc56f 15.62%,
              #ffd89d 27.6%,
              #f1a635 53.12%,
              #ac3e00 100%
            );
            width: 94px;
            height: 44px;
            margin-top: 18px;
            .color-btn-text {
              .f-gold {
                font-size: 20px;
                &:before {
                  content: "";
                  width: 26px;
                  height: 26px;
                  margin-right: 4px;
                  display: inline-block;
                  background-image: url(../img/v2-res-diamond.png);
                  background-size: cover;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
      .m-popup.busters.gold-coins {
        .content {
          .buster-imgs-box {
            .buster-icn {
              background-image: url(../img/change-ic-gold.png);
            }
          }
        }
      }

      .m-popup.add-resources-popup {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .popup-layer {
    .m-popup.pop-in,
    .m-popup.pop-reg {
      &.m-popup {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: auto;
        &:before {
          background: linear-gradient(0deg, #625047 0%, #483b3b 100%);
        }
        .title {
          color: #921b00;
          &:before {
            content: "";
            display: block;
            width: 38px;
            height: 38px;
            background-image: url(../img/login-icon-big.png);
            background-size: 38px;
            position: absolute;
            left: 8px;
            top: 8px;
          }
        }
        .content {
          z-index: 1;
        }
        .btn-close-x {
          &:before {
            color: #921b00;
            text-shadow: 0 0 2px #921b00, 0 0 2px #921b00, 0 0 2px #921b00,
              0 0 2px #921b00, 0 0 7px #fff, 0 0 7px #fff, 0 0 7px #fff;
          }
        }
        .color-box {
          background: url(../img/tabs-menu-bg.png),
            linear-gradient(
              320deg,
              rgba(255, 255, 255, 0.04) 0%,
              rgba(255, 255, 255, 0) 25%,
              rgba(255, 255, 255, 0.04) 26%,
              rgba(255, 255, 255, 0.04) 47%,
              rgba(255, 255, 255, 0) 48%,
              rgba(255, 255, 255, 0) 60%,
              rgba(255, 255, 255, 0.04) 61%,
              rgba(255, 255, 255, 0.04) 70%,
              rgba(255, 255, 255, 0) 71%,
              rgba(255, 255, 255, 0.04) 100%
            ),
            linear-gradient(0deg, #6e554f 0%, #564040 100%);
          background-position: center bottom, center, center;
          background-repeat: no-repeat;
          background-size: 100% 20%, 100%, 100%;
          box-shadow: inset 0 0 4px 1px rgba(0, 0, 0, 0.2);
          &:before {
            display: none;
          }
          &:after {
            display: none;
          }
        }
      }
      &:after {
        content: "";
        height: 270px;
        width: 280px;
        position: absolute;
        left: calc(50% - 296px);
        top: calc(50% + 185px);
        transform: translate(-50%, -50%);
        background: url(../img/rating-girl.png);
        pointer-events: none;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }

    .m-popup.pop-in {
      .content.sign-in1,
      .content.sign-in2 {
        .text1 {
          text-transform: initial;
          font-size: 18px;
          font-weight: bold;
          color: #ffc;
          line-height: 22px;
          margin-bottom: 13px;
          text-shadow: 0 1px 2px #300, 0 1px 15px #300, 0 1px 20px #300;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0),
            rgba(82, 0, 0, 0.6),
            rgba(0, 0, 0, 0)
          );
          padding: 8px 0 !important;
          position: relative;
          z-index: 1;
          &:before,
          &:after {
            content: "";
            width: 100%;
            height: 2px;
            position: absolute;
            left: 0;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0),
              rgba(255, 238, 0, 0.6),
              rgba(255, 255, 255, 0)
            );
          }
          &:before {
            top: 0;
          }
          &:after {
            bottom: 0;
          }
        }
        .sign-in-form {
          .block-a {
            background: #efe0a1;
            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
            box-shadow: 0 0 0 3px #dd9542, 0 2px 6px 4px rgba(0, 0, 0, 0.3),
              0 0 0 4px rgba(0, 0, 0, 0.2);
            .tfield.password {
              .note {
                transform: translateY(4px);
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
          .btn-simple-gold.btn-ok {
            margin-top: 14px;
          }
          .alt-step {
            background: linear-gradient(to right, #ffe3ab, #ffb229, #fffbc7);
            margin-top: -9px;
            padding: 8px 10px 10px 10px;
            transform: translateY(30px);
            border-radius: 10px 10px 0 0;
            box-shadow: 0 -2px 0 2px #ffb229;
            display: flex;
            justify-content: center;
            align-items: center;
            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
            filter: drop-shadow(0 -2px 4px rgba(0, 0, 0, 0.4));
            &:before,
            &:after {
              content: "";
              position: absolute;
              width: 12px;
              height: 100%;
              border-radius: 10px 10px 0 0;
              top: 0;
              z-index: -1;
            }
            &:before {
              background: #ffe3ab;
              left: -6px;
              transform: skewX(-12deg);
              border-left: 4px solid #ffb229;
            }
            &:after {
              background: #fffbc7;
              right: -6px;
              transform: skewX(12deg);
              border-right: 4px solid #ffb229;
            }
            .go {
              padding: 6px 10px 6px 10px;
              margin-left: 8px;
              background: linear-gradient(0deg, #7cbc30 0%, #baf279 100%);
              box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25),
                0 2px 4px 0 rgba(0, 0, 0, 0.55), 0 0 0 2px rgba(0, 0, 0, 0.2);
              &:hover {
                filter: brightness(110%);
              }
              &:active {
                padding: 7px 10px 5px 10px;
                box-shadow: inset 0 0px 0 0 rgba(0, 0, 0, 0.25),
                  0 2px 4px 0 rgba(0, 0, 0, 0.55), 0 0 0 2px rgba(0, 0, 0, 0.2);
              }
              &:after {
                content: "";
                width: 6px;
                height: 6px;
                display: inline-block;
                margin-left: 4px;
                transform: rotate(45deg);
                border-top: 2px solid #413530;
                border-right: 2px solid #413530;
                margin-bottom: 2px;
                filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 1));
              }
            }
          }
        }
      }
      .content.sign-in1.error .err-msg1 {
        display: block;
        background: #efe0a1;
        max-width: 188px;
        padding: 4px 6px;
        margin: auto;
        margin-bottom: 15px;
        border-radius: 8px;
        box-shadow: 0 0 15px #400;
        &:after {
          content: "!";
          display: inline-block;
        }
      }
    }

    .m-popup.pop-reg {
      &:after {
        bottom: -60px;
      }
      .content.sign-up2,
      .content.sign-up1 {
        margin-top: 70px;
        margin-bottom: 20px;
        .text-1 {
          text-transform: initial;
          font-size: 18px;
          font-weight: bold;
          color: #ffc;
          line-height: 22px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6),
            0 1px 15px rgba(0, 0, 0, 0.6), 0 1px 20px rgba(0, 0, 0, 0.4);
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0),
            rgba(255, 255, 255, 0.3),
            rgba(0, 0, 0, 0)
          );
          padding: 8px 0;
          position: relative;
          z-index: 1;
          &:before,
          &:after {
            content: "";
            width: 100%;
            height: 2px;
            position: absolute;
            left: 0;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0),
              rgba(255, 238, 0, 0.6),
              rgba(255, 255, 255, 0)
            );
          }
          &:before {
            top: 0;
          }
          &:after {
            bottom: 0;
          }
        }
        .megapack-banner {
          height: 146px;
          background: linear-gradient(to right, #400, #ff4c00, #c00, #400);
          margin-left: -25px;
          margin-right: -25px;
          border-radius: 20px;
          border-top: solid 7px #ff7;
          border-bottom: solid 7px #ff7;
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.33), 0 0 2px #400;
          margin-top: 12px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          .g1,
          .g2,
          .g3 {
            width: 120px;
            height: 40px;
            border-radius: 100%;
            position: relative;
            background-color: #400;
            margin: 0px 10px;
            font-size: 30px;
            font-weight: bold;
            color: #ffa;
            white-space: nowrap;
            line-height: 35px;
            padding-top: 80px;
            text-shadow: 0 0 5px #500, 0 0 5px #500, 0 0 5px #500, 0 0 5px #500,
              0 0 3px #ff0;
            border: solid 3px #d30;
            box-shadow: 0 0 15px #300, 0 0 25px #900;
            background-image: url(../img/ser-ban-3.jpg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            top: unset;
            .num {
              font-size: 30px;
              font-weight: bold;
              white-space: nowrap;
              line-height: 35px;
              text-shadow: 0 0 5px #500, 0 0 5px #500, 0 0 5px #500,
                0 0 5px #500, 0 0 3px #ff0;
              display: block;
              height: 20px;
              color: #ff7;
            }
            .txt {
              font-weight: bold;
              color: #ffa;
              white-space: nowrap;
              text-shadow: 0 0 5px #500, 0 0 5px #500, 0 0 5px #500,
                0 0 5px #500, 0 0 3px #ff0;
              line-height: 42px;
              font-size: 18px;
              text-transform: uppercase;
              display: block;
            }
          }
          .g2 {
            width: 150px;
            height: 75px;
            background-image: url(../img/ser-ban-4.jpg);
            .num {
              font-size: 40px;
              line-height: 52px;
            }
            .txt {
              font-size: 22px;
              line-height: 74px;
            }
          }
          .g3 {
            background-image: url(../img/ser-ban-2.jpg);
          }
        }
        .sign-up-form {
          display: block;
          position: relative;
          margin: 0;
          margin-top: 15px;
          .block-a {
            display: block;
            position: relative;
            margin: 0 45px;
            border-radius: 10px;
            box-shadow: 0 0 0 3px #dd9542, 0 2px 6px 4px rgba(0, 0, 0, 0.3),
              0 0 0 4px rgba(0, 0, 0, 0.2);
            background: #efe0a1;
            padding: 10px 20px 10px 20px;
            line-height: 22px;
            font-size: 16px;
            font-weight: bold;
            color: #413530;
            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
            .tfield {
              display: block;
              font-size: 16px;
              text-align: left;
              .error {
                color: #900;
                display: inline-block;
                background: #fff;
                border-radius: 4px;
                padding: 0 6px;
                line-height: 24px;
                position: absolute;
                width: max-content;
                margin: -5px 0 0 10px;
                filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6));
                pointer-events: none;
                &:before {
                  content: "";
                  border: 10px solid transparent;
                  border-right: 10px solid #fff;
                  border-radius: 2px;
                  position: absolute;
                  bottom: 2px;
                  left: -16px;
                }
              }
              .itext {
                display: block;
                width: calc(100% - 20px);
                height: 30px;
                background: linear-gradient(to bottom, #6a5952, #c3afa7);
                border: none;
                border-radius: 7px;
                font-family: "Roboto", sans-serif;
                font-size: 16px;
                font-weight: bold;
                color: #413530;
                padding: 3px 10px;
                box-shadow: inset 0 2px 0px #413530,
                  inset 0 19px 0px rgba(246, 224, 213, 0.14);
                text-align: center;
              }
              .verifyHelp {
                line-height: 22px;
                font-weight: bold;
                font-size: 16px;
                text-align: center;
                text-decoration: inherit;
                color: inherit;
                display: inline-block;
                padding: 3px 10px;
                background: #cfb150;
                border-radius: 20px;
                margin-left: 8px;
              }
            }
            .tfield.check {
              padding-top: 15px;
              display: flex;
              justify-content: center;
              align-items: center;
              .verifyHelp {
                padding: 6px 10px 6px 10px;
                background: linear-gradient(0deg, #7cbc30 0%, #baf279 100%);
                box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25),
                  0 2px 4px 0 rgba(0, 0, 0, 0.55), 0 0 0 2px rgba(0, 0, 0, 0.2);
                &:hover {
                  filter: brightness(110%);
                }
                &:active {
                  padding: 7px 10px 5px 10px;
                  box-shadow: inset 0 0px 0 0 rgba(0, 0, 0, 0.25),
                    0 2px 4px 0 rgba(0, 0, 0, 0.55),
                    0 0 0 2px rgba(0, 0, 0, 0.2);
                }
              }
            }
            .tfield.captcha {
              width: 158px;
              display: inline-block;
              vertical-align: top;
              margin-top: 5px;
              padding-top: 7px;
            }
            .captcha-wrap {
              width: 204px;
              height: 66px;
              position: relative;
              display: inline-block;
              margin: 5px 5px 0 0;
              vertical-align: top;
              border-radius: 8px;
              box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
              overflow: hidden;
              cursor: pointer;
              img {
                width: 100%;
                height: 100%;
              }
              &:before {
                content: "";
                width: 18px;
                height: 18px;
                background-image: url(../img/ic-refresh.svg);
                position: absolute;
                right: 6px;
                bottom: 6px;
                opacity: 0.6;
                filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 1));
              }
              &:hover {
                filter: brightness(1.1);
              }
              &:active {
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
              }
            }
          }
          .btn-simple-gold.btn-ok {
            display: inline-block;
            position: relative;
            top: auto;
            bottom: auto;
            margin-top: 20px;
            margin-bottom: 10px;
          }
        }
      }
      .content.sign-up1 {
        .sign-up-form {
          .block-a .tfield .icheck {
            cursor: pointer;
          }
        }
      }
    }

    .m-popup.angel-chests-info {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 760px;
      height: 584px;
      &:before {
        background: linear-gradient(#564141, #9c8b7c);
      }
      .title {
        color: #3c3934;
      }
      .content {
        margin: 30px;
        margin-top: 80px;
        .header-box {
          .header-text-wrap {
            width: auto;
            line-height: 36px;
            font-size: 18px;
            font-weight: bold;
            display: inline-block;
            border-radius: 7px;
            background: linear-gradient(
              79.88deg,
              #eecc60 15.85%,
              #ffeea7 31.54%,
              #cfa831 58.47%,
              #fbf1d8 75.55%,
              #eecc60 90.72%
            );
            box-shadow: inset 0 -1px 2px #452b05, 0 0 2px #472624,
              0 0 3px #472624;
            position: relative;
            padding: 0 20px;
            &:before {
              content: "";
              position: absolute;
              width: calc(100% - 6px);
              height: calc(100% - 7px);
              left: 3px;
              top: 3px;
              background: #614e4e;
              box-shadow: inset 0px 7px 0px rgba(255, 255, 255, 0.08),
                inset 0px 2px 1px #32323d;
              border-radius: 5px;
            }
            .header-text {
              color: #fff;
              position: relative;
              text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
              font-weight: 100;
              div {
                display: inline-block;
                color: #ffdb97;
                font-weight: 700;
              }
            }
          }
        }
        .angels-skrollbox-wrap {
          background: linear-gradient(180deg, #353535, #6b6a68);
          box-shadow: 0px 1px 2px rgba(255, 255, 255, 0.25),
            inset 0px 1px 6px rgba(0, 0, 0, 0.35);
          border-radius: 5px;
          width: 564px;
          margin: auto;
          margin-top: 16px;
          padding: 20px;
          .angels-skrollbox {
            overflow-y: scroll;
            overflow-x: hidden;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row-reverse;
            height: 272px;
            padding: 0 73px;
            transform: scaleX(-1);
            &::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
              border-radius: 8px;
            }
            &::-webkit-scrollbar {
              width: 10px;
            }
            &::-webkit-scrollbar-thumb {
              border-radius: 8px;
              box-shadow: inset 0 0 3px rgba(0, 0, 0, 0);
              background: linear-gradient(
                to right,
                #fff,
                #f5de80,
                #f4b766,
                #b26d12
              );
            }
            .angel-avatar-box {
              width: 120px;
              height: 120px;
              position: relative;
              border-radius: 6px;
              background: linear-gradient(
                155.88deg,
                #eecc60 15.85%,
                #ffeea7 31.54%,
                #cfa831 58.47%,
                #fbf1d8 75.55%,
                #eecc60 90.72%
              );
              box-shadow: 0px 2px 0px #9d8829,
                0px 4px 4px 1px rgba(0, 0, 0, 0.35);
              margin: 8px;
              transform: scaleX(-1);
              &:hover {
                filter: brightness(1.1);
              }
              .angel-avatar-wrap {
                position: absolute;
                top: 5px;
                left: 5px;
                width: 110px;
                height: 110px;
                border-radius: 4px;
                overflow: hidden;
                display: flex;
                justify-content: center;
                box-shadow: 0 0 0 1px #87700a;
                .angel-avatar {
                  width: auto;
                  height: 128px;
                }
              }
              .angel-card-progress-bar-wrap {
                width: 90px;
                height: 20px;
                background: linear-gradient(
                  180deg,
                  #ffe199 0%,
                  #f4c557 15.62%,
                  #ffe199 41.15%,
                  #f4c657 81.25%,
                  #ffe199 100%
                );
                background: linear-gradient(
                  180deg,
                  #444a4f 0%,
                  #62666a 50%,
                  #444a4f 100%
                );
                box-shadow: inset 0 0 0 1px #c19863,
                  0 2px 4px rgba(0, 0, 0, 0.3);
                border-radius: 5px;
                position: absolute;
                left: 15px;
                top: 90px;
                color: #fff;
                .progress {
                  position: absolute;
                  width: 86px;
                  height: 16px;
                  left: 2px;
                  top: 2px;
                  border-radius: 3px;
                  overflow: hidden;
                  .fulfilled {
                    height: 100%;
                    background: linear-gradient(
                      90deg,
                      #a7fa53 0%,
                      #00c64f 100%
                    );
                    border-radius: 3px;
                    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25),
                      inset 0 10px 0 rgba(255, 255, 255, 0.3);
                  }
                }
                .value {
                  position: absolute;
                  display: flex;
                  left: 50%;
                  top: calc(50% - 1px);
                  transform: translate(-50%, -50%);
                  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6),
                    0 0px 4px rgba(0, 0, 0, 0.8);
                  line-height: 16px;
                  white-space: nowrap;
                  margin-top: 1px;
                  .from {
                    margin-left: 4px;
                  }
                  .to {
                    &:before {
                      content: "/";
                    }
                  }
                }
              }
            }
          }
        }
        .chest-points-box {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 14px;
          .drop-angels-info {
            width: 40px;
            height: 40px;
            display: inline-block;
            border-radius: 7px;
            background: linear-gradient(
              79.88deg,
              #eecc60 15.85%,
              #ffeea7 31.54%,
              #cfa831 58.47%,
              #fbf1d8 75.55%,
              #eecc60 90.72%
            );
            box-shadow: inset 0 -1px 2px #452b05, 0 0 2px #472624,
              0 0 3px #472624;
            position: absolute;
            left: 250px;
            &:hover {
              background: linear-gradient(
                79.88deg,
                #f1db90 15.85%,
                #fff5cf 31.54%,
                #d3b866 58.47%,
                #fffcf6 75.55%,
                #e9d490 90.72%
              );
              &:before {
                background: #6e5a5a;
              }
              .info-text-box {
                transition: ease-in-out 0.2s;
                visibility: visible;
                opacity: 1;
                bottom: 50px;
              }
            }
            &:before {
              content: "";
              position: absolute;
              width: calc(100% - 6px);
              height: calc(100% - 7px);
              left: 3px;
              top: 3px;
              background: #614e4e;
              box-shadow: inset 0px 7px 0px rgba(255, 255, 255, 0.08),
                inset 0px 2px 1px #282841;
              border-radius: 5px;
            }
            .info-icn {
              color: #fff;
              position: relative;
              line-height: 40px;
              font-size: 28px;
              font-weight: 700;
              font-style: italic;
              font-family: "Times New Roman", Times, serif;
              text-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
            }
            .info-text-box {
              transition: ease-in-out 0.2s;
              visibility: hidden;
              opacity: 0;
              position: absolute;
              right: -36px;
              bottom: 26px;
              background: #51423b;
              border: 2px solid #eecc60;
              border-radius: 10px;
              width: 336px;
              height: auto;
              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
              pointer-events: none;
              filter: drop-shadow(0 2px 8px #000);
              &:before {
                content: "";
                border: 10px solid transparent;
                border-top: 10px solid #eecc60;
                border-radius: 2px;
                position: absolute;
                bottom: -20px;
                right: 44px;
              }
              .info-header {
                color: #cef5ff;
                background: #3b2922;
                line-height: 42px;
                font-size: 17px;
                border-radius: 10px 10px 0 0;
              }
              .text-content {
                padding: 14px 0;
                .text {
                  font-size: 16px;
                  color: #fff;
                  line-height: 21px;
                  .text-selected {
                    display: inline-block;
                    color: #d6ff7d;
                    font-weight: 700;
                    text-align: left;
                    width: 40px;
                  }
                  .selected2 {
                    text-align: center;
                    width: 22px;
                  }
                }
              }
            }
          }
          .chest-points-icn {
            width: 98px;
            height: 98px;
            margin-top: 4px;
            background-image: url(../img/earthworld-chest-points-chip-icon.png);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .chest-points-value {
            position: absolute;
            right: 150px;
            color: #ffdb97;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
            background: #534339;
            border-radius: 5px;
            padding: 10px 14px;
            font-weight: 700;
            filter: drop-shadow(0 3px 0 rgba(0, 0, 0, 0.2));
            &:before {
              content: "";
              width: 12px;
              height: 12px;
              background: #534339;
              border-radius: 2px;
              transform: rotate(45deg);
              position: absolute;
              top: 13px;
              left: -5px;
            }
            .chest-points-text {
              font-weight: 100;
              display: inline-block;
              color: #fff;
            }
          }
        }
      }
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
      top: 0 !important;
      position: relative;
      color: #fff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 14px;
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: -2px;
    }
    &:active {
      box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
        inset 0 2px 2px rgba(0, 0, 0, 0.2);
      .color-btn-text {
        top: 1px !important;
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
    &.diamonds,
    &.diamond {
      background: linear-gradient(0deg, #4b97bf 0%, #7ae2ff 100%);
      .f-diamond,
      .f-diamonds {
        &:before {
          content: "";
          width: 20px;
          height: 20px;
          position: relative;
          display: inline-block;
          background-image: url(../img/ic-diamond.png);
          background-size: 100%;
          margin-right: 4px;
          margin-left: 4px;
          vertical-align: middle;
        }
      }
    }
    &.wheel_res {
      //background: linear-gradient(0deg, #4b97bf 0%, #7ae2ff 100%);
      .f-wheel_res {
        &:before {
          content: "";
          width: 20px;
          height: 20px;
          position: relative;
          display: inline-block;
          background-image: url(../img/v2-f-e1.png);
          background-size: 100%;
          margin-right: 4px;
          margin-left: 4px;
          vertical-align: middle;
        }
      }
    }
    &.tickets {
      background: linear-gradient(0deg, #4b97bf 0%, #7ae2ff 100%);
    }
    &.mithril {
      background: linear-gradient(0deg, #4b97bf 0%, #7ae2ff 100%);
    }
    &.active {
      box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2),
        inset 0 2px 2px rgba(0, 0, 0, 0.2);
      .color-btn-text {
        top: 12px;
      }
    }
    &.disabled {
      filter: grayscale(100%);
      cursor: no-drop;
    }
    &.purple {
      background: linear-gradient(0deg, #a11095 0%, #ea9eff 100%);
      animation: pulse 2s infinite;
      @keyframes pulse {
        0% {
          box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25),
            0 2px 4px 0 rgba(0, 0, 0, 0.55), 0 0 0 0 rgba(255, 67, 208, 0.8);
        }
        70% {
          box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25),
            0 2px 4px 0 rgba(0, 0, 0, 0.55), 0 0 0 10px rgba(255, 67, 208, 0);
        }
        100% {
          box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25),
            0 2px 4px 0 rgba(0, 0, 0, 0.55), 0 0 0 0 rgba(255, 67, 208, 0);
        }
      }
    }
    &.red {
      background: linear-gradient(0deg, #a11010 0%, #ff9e9e 100%);
      animation: pulse_red 2s infinite;
      @keyframes pulse_red {
        0% {
          box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25),
            0 2px 4px 0 rgba(0, 0, 0, 0.55), 0 0 0 0 rgba(161, 16, 16, 0.8);
        }
        70% {
          box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25),
            0 2px 4px 0 rgba(0, 0, 0, 0.55), 0 0 0 10px rgba(161, 16, 16, 0);
        }
        100% {
          box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25),
            0 2px 4px 0 rgba(0, 0, 0, 0.55), 0 0 0 0 rgba(161, 16, 16, 0);
        }
      }
    }
  }

  .world-unlock-district {
    position: absolute;
    top: 170px;
    right: 185px;
    z-index: 102;
    cursor: pointer;
  }
`;

export { stylesFileName, pageStyles };
