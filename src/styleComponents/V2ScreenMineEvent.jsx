import { styled, css } from "styled-components";

const V2ScreenMineEventStyles = css`
  .rush-explosion-1 {
    width: 70px;
    height: 70px;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(../img/explosion/expl_01_70.png);
    animation: expl_playX 0.25s steps(4) 4, expl_playY 1s steps(4) 1;
    z-index: 123;
  }
  .rush-explosion-2 {
    width: 70px;
    height: 70px;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(../img/explosion/splash_70.png);
    animation: expl_playX 0.25s steps(4) 4, expl_playY 1s steps(2) 1;
    z-index: 123;
  }

  .mine-event-screen {
    width: 100%;
    height: 100%;
    background-image: url(../img/v2-mn-bg.jpg);
    background-size: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    .mine-event-screen__head {
      position: absolute;
      top: 15px;
      left: 14px;
      right: 14px;
      height: 50px;
    }

    .mine-quest-all {
      background-color: rgba(96, 75, 66, 0.8);
      border-radius: 8px;
      position: absolute;
      left: 165px;
      top: 0;
      height: 50px;
      box-sizing: border-box;
      width: 200px;
      .mine-quest-text {
        width: 190px;
        height: 20px;
        position: absolute;
        top: 5px;
        left: 5px;
        color: #fff;
        font-weight: bold;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
      }
      .mine-quest-prg {
        width: 190px;
        height: 16px;
        position: absolute;
        bottom: 5px;
        left: 5px;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 6px;
        overflow: hidden;
        .mine-quest-prgbar {
          width: 80%;
          height: 16px;
          position: absolute;
          background: linear-gradient(
            0deg,
            #5eb0f2,
            #4783b5 12%,
            #66c4ff 60%,
            #91d5ff 70%,
            #569fdb
          );
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }
        .mine-quest-prg-text {
          width: 100%;
          height: 100%;
          position: absolute;
          color: #fff;
          font-weight: bold;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }
      }
      &.q2 {
        left: 380px;
      }
      &.q3 {
        left: 595px;
      }
    }

    .key-count {
      background-color: rgba(40, 31, 32, 0.8);
      border-radius: 8px;
      position: absolute;
      left: 0;
      top: 0;
      height: 50px;
      line-height: 52px;
      box-sizing: border-box;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
      padding: 0 8px 0 50px;
      min-width: 100px;

      &:before {
        content: "";
        width: 40px;
        height: 40px;
        position: absolute;
        left: 9px;
        top: 50%;
        margin-top: -20px;
        background-image: url(../img/v2-mn-key.png);
      }
    }

    .score-count {
      background-color: rgba(96, 75, 66, 0.8);
      border-radius: 8px;
      position: absolute;
      right: 225px;
      top: 0;
      height: 50px;
      line-height: 52px;
      box-sizing: border-box;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
      padding: 0 8px 0 50px;
      min-width: 135px;

      &:before {
        content: "";
        width: 40px;
        height: 40px;
        position: absolute;
        left: 9px;
        top: 50%;
        margin-top: -20px;
        background-image: url(../img/v2-ic-rating.png);
        background-size: contain;
      }

      &.spirit3 {
        right: 75px;
        cursor: pointer;
        background: linear-gradient(0deg, #7cbc30, #baf279);
        box-shadow: inset 0 22px 4px rgba(255, 255, 255, 0.07),
          inset 0 -4px 0 rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.6);
        line-height: 46px;
        &:hover {
          filter: brightness(1.1);
        }
        &:before {
          background: rgba(0, 0, 0, 0.3);
          background-image: url(../img/crow-70.png);
          border-radius: 6px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          top: 23px;
          left: 3px;
          box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.1);
        }
        &:active {
          line-height: 48px;
          box-shadow: inset 0 25px 4px rgba(255, 255, 255, 0.07),
            inset 0 -2px 0 rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.6);
          &:before {
            top: 24px;
          }
        }
      }
      &.spirit-count {
        right: 225px;
        &:before {
          background-image: url(../img/v2-mn-soul-sg-160.png);
        }
      }

      &.gold-count {
        right: 225px;
        &:before {
          width: 60px;
          height: 60px;
          left: 0px;
          margin-top: -40px;
          background-image: url(../img/v2-mn-chest-gold-open.png);
        }
      }
      &.silver-count {
        right: 225px;
        &:before {
          width: 60px;
          height: 60px;
          left: 0px;
          margin-top: -40px;
          background-image: url(../img/v2-mn-chest-silver-open.png);
        }
      }
      &.bronze-count {
        right: 225px;
        &:before {
          width: 60px;
          height: 60px;
          left: 0px;
          margin-top: -40px;
          background-image: url(../img/v2-mn-chest-bronze-open.png);
        }
      }

      &.floor-count {
        right: 400px;
        &:before {
          background-image: url(../img/v2-mn-ic-rating.png);
        }
      }
    }

    .next-count {
      background-color: rgba(96, 75, 66, 0.8);
      border-radius: 8px;
      position: absolute;
      //left: 110px;
      left: 0px;
      top: 0;
      height: 50px;
      line-height: 52px;
      box-sizing: border-box;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
      padding: 0 8px 0 50px;
      min-width: 150px;

      &:before {
        content: "";
        width: 40px;
        height: 40px;
        position: absolute;
        left: 9px;
        top: 50%;
        margin-top: -20px;
        background-image: url(../img/v2-mn-pr-100-in.png);
        background-size: contain;
      }
    }

    .x2-timer {
      background-image: url(../img/wpck-ram1.png);
      background-size: 100%;
      background-repeat: no-repeat;
      width: 250px;
      height: 50px;
      line-height: 46px;
      position: absolute;
      left: 50%;
      top: 1px;
      margin-left: -125px;
      box-sizing: border-box;
      padding: 0 22px 0 120px;
      font-size: 24px;
      font-weight: bold;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
      color: #fff;

      &:before {
        content: "";
        width: 100px;
        height: 56px;
        background-image: url(../img/v2-mn-timer-x2-pic.png);
        position: absolute;
        left: 20px;
        top: -5px;
      }
    }
    .exit {
      position: absolute;
      right: 0;
      top: 0;
      height: 50px;
      width: 60px;
      line-height: 28px;
      background: linear-gradient(
        to top,
        #f7d799,
        #d8a33c,
        #f7e8cb 50%,
        #d8940f
      );
      box-shadow: inset 0 -4px 0 0 #d6912b, inset 0 -6px 8px 0px #f7e6c9;
      &:hover {
        filter: brightness(1.1);
      }

      .color-btn-text {
        color: #3c3737;
        text-shadow: none;
      }

      &:active {
        background: linear-gradient(
          to top,
          #f7d799,
          #dbad53,
          #f7e8cb 45%,
          #d8aa4e
        );
        box-shadow: inset 0 -2px 0 0 #d6912b, inset 0 -4px 8px 0px #f7e6c9;
      }
    }

    .mine-event-screen__resources {
      position: absolute;
      left: 16px;
      top: 110px;
      width: 120px;
    }

    .resource {
      position: relative;
      cursor: pointer;

      img {
        display: block;
        &:hover {
          filter: brightness(1.2);
        }
        &:active {
          transform: scale(0.97);
        }
      }

      & + .resource {
        margin-top: 10px;
      }
    }
    .resource__count {
      position: absolute;
      top: 0;
      left: 0;
      min-width: 57px;
      background: linear-gradient(to top, #87d94f, #43a700, #8cdd55);
      color: #fff;
      height: 20px;
      padding: 0 8px;
      font-weight: bold;
      font-size: 14px;
      text-align: center;
      line-height: 20px;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
      border-radius: 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
      box-sizing: border-box;
      &.cell {
        top: initial;
        bottom: 0;
        min-width: 70px;
      }
      &.not-enough {
        background: linear-gradient(to top, #d94f4f, #a70000, #dd5555);
      }
    }

    .mine-event-screen__wrapper {
      width: 1030px;
      height: 510px;
      position: absolute;
      left: 155px;
      bottom: 20px;
      background-image: url(../img/v2-mn-bg1.jpg);
      background-repeat: repeat-x;
      padding-left: 165px;
      box-sizing: border-box;
      box-shadow: inset 0 0 12px #000;
      border-radius: 6px;

      .x-info-btn {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 10px;
        left: 10px;
        //background: linear-gradient(
        //                0deg,
        //                #53c0ff 0%,
        //                #2277bf 50%,
        //                #b8d2e0 100%
        //);
        background: linear-gradient(
          0deg,
          #58372a 0%,
          #42291e 50%,
          #9f8978 100%
        );
        border-radius: 100%;
        cursor: pointer;
        border: 2px solid #926857;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
        line-height: 25px;
        &:hover {
          filter: brightness(1.1);
        }
        &:active {
          top: 11px;
        }
      }

      .click-next-floor {
        height: 510px;
        width: 170px;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
      }

      .click-next-floor-2 {
        height: 510px;
        width: 170px;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        z-index: 1;
      }

      &:before {
        content: "";
        height: 510px;
        width: 170px;
        background-image: url(../img/v2-mn-ent.png);
        position: absolute;
        top: 0;
        left: 0;
        filter: grayscale(1);
      }
      &:after {
        content: "";
        height: 510px;
        width: 170px;
        background-image: url(../img/v2-mn-ent.png);
        position: absolute;
        transform: scale(-1, 1);
        top: 0;
        right: 0;
        filter: grayscale(1);
      }
      &.next-floor {
        &:before {
          filter: grayscale(0);
          animation-name: mine-portal-blink;
          animation-duration: 1s;
          animation-iteration-count: infinite;
        }
        &:after {
          filter: grayscale(0);
          animation-name: mine-portal-blink;
          animation-duration: 1s;
          animation-iteration-count: infinite;
        }
      }
    }
    .next-count,
    .mine-quest-all,
    .score-count {
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.6);
    }
    .mine {
      height: 510px;
      width: 700px;
      padding-top: 10px;
      box-sizing: border-box;
      position: relative;
    }
    .mine__row {
      font-size: 0;
      text-align: left;
    }

    .mine-cell {
      width: 70px;
      height: 70px;
      background-size: 100%;
      background-repeat: no-repeat;
      display: inline-block;
      position: relative;
      &:hover {
        filter: brightness(1.1);
      }

      &:before {
        content: "";
        display: block;
        width: 70px;
        height: 70px;
      }

      //type
      &.gr {
        background-image: url(../img/v2-mn-fr1.png);
        cursor: pointer;
        &:active {
          transform: scale(0.96);
        }
      }
      &.st {
        background-image: url(../img/v2-mn-fr2.png);
        cursor: pointer;

        &.cracked {
          background-image: url(../img/v2-mn-fr3.png);
        }
        &.solid {
          background-image: url(../img/v2-mn-fr4.png);
        }
        &:active {
          transform: scale(0.96);
        }
      }
      //type

      //content
      .reward {
        width: 70px;
        height: 70px;
        background-size: 100%;
        background-repeat: no-repeat;
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 30;

        .reward-img {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
      }

      .content {
        width: 70px;
        height: 70px;
        background-size: 100%;
        background-repeat: no-repeat;
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;

        &.chest {
          background-image: url(../img/v2-mn-pr-100-in.png);
        }

        &.chest_closed {
          background-image: url(../img/sh-icon-chest-128-cl.png);
        }

        &.boom {
          background-image: url(../img/v2-mn-fr1-boom-nobg.png);
        }

        &.meteor {
          background-image: url(../img/v2-mn-ruf-meteor.png);

          &.big {
            background-image: url(../img/v2-mn-ruf-meteor-big.png);
          }
        }

        &.gold {
          background-image: url(../img/v2-mn-ruf-gold.png);

          &.big {
            background-image: url(../img/v2-mn-ruf-gold-big.png);
          }
        }

        &.silver {
          background-image: url(../img/v2-mn-rud-silver.png);

          &.big {
            background-image: url(../img/v2-mn-rud-silver-big.png);
          }
        }

        &.platina {
          background-image: url(../img/v2-mn-rud-platina.png);

          &.big {
            background-image: url(../img/v2-mn-rud-platina-big.png);
          }
        }

        &.iron {
          background-image: url(../img/v2-mn-rud-iron.png);

          &.big {
            background-image: url(../img/v2-mn-rud-iron-big.png);
          }
        }

        &.copper {
          background-image: url(../img/v2-mn-rud-copper.png);

          &.big {
            background-image: url(../img/v2-mn-rud-copper-big.png);
          }
        }
      }
      //content
    }

    .position {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;

      transition: left 0.5s;

      .value {
        position: absolute;
        min-width: 112px;
        bottom: 100%;
        left: 50%;
        transform: translate(-50%);
        white-space: nowrap;
        font-size: 18px;
        line-height: 28px;
        color: #000;
        font-weight: bold;
        text-align: center;
        box-sizing: border-box;
      }

      &.player {
        //&:before{
        //    content: "";
        //    display: block;
        //    position: absolute;
        //    top: 0;
        //    left: -2px;
        //    height: 100%;
        //    width: 3px;
        //    background: linear-gradient(to top, #ffef8f, #ffbe27, #ffef8f);
        //}

        .value {
          padding: 0 32px;
          border-radius: 4px;
          background: linear-gradient(#ffc02c, #fff090, #ffc02c);
          margin-bottom: -4px;
          z-index: 0;

          &:before {
            content: "";
            z-index: -1;
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            background: linear-gradient(#ebc660 25%, #ffbe27, #ebc660 75%);
            box-shadow: inset 0 0 5px #6f4300;
            border-radius: 3px;
          }
        }
      }
      &.enemy {
        top: 45px;
        &:before {
          content: "";
          width: 14px;
          height: 14px;
          position: absolute;
          bottom: 100%;
          left: -7px;
          margin-bottom: -1px;
          background: linear-gradient(
            45deg,
            #d3d3d3,
            #9a9a9a,
            #d3d3d3,
            #9a9a9a,
            #d3d3d3
          );
          transform: rotate(-45deg);
        }

        .value {
          line-height: 26px;
          font-size: 16px;
          background: linear-gradient(
            to top,
            #d3d3d3,
            #9a9a9a,
            #d3d3d3,
            #9a9a9a,
            #d3d3d3
          );
          border-radius: 10px;
          padding: 0 10px;
          transform: none;
          margin-left: -17px;
          margin-bottom: 4px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        &.left {
          .value {
            transform: translate(-100%);
            margin-left: 17px;
          }
        }
      }
    }
  }

  @keyframes mine-portal-blink {
    0% {
      filter: brightness(1);
      -webkit-filter: brightness(1);
    }
    50% {
      filter: brightness(2.5);
      -webkit-filter: brightness(2.5);
    }
    100% {
      filter: brightness(1);
      -webkit-filter: brightness(1);
    }
  }
  @keyframes expl_playX {
    from {
      background-position-x: 0px;
    }
    to {
      background-position-x: -280px;
    }
  }
  @keyframes expl_playY {
    from {
      background-position-y: 0px;
    }
    to {
      background-position-y: -280px;
    }
  }
  @keyframes spl_playX {
    from {
      background-position-x: 0px;
    }
    to {
      background-position-x: -280px;
    }
  }
  @keyframes spl_playY {
    from {
      background-position-y: 0px;
    }
    to {
      background-position-y: -140px;
    }
  }
`;

const V2ScreenMineEvent = styled.div`
  ${V2ScreenMineEventStyles}
`;

export { V2ScreenMineEventStyles, V2ScreenMineEvent };
