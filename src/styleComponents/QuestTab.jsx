import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
  .journal-main {
    width: 620px;
    &:before {
      content: "";
      width: 100%;
    }
    .heroes-list-all-box {
      width: 620px;
      box-shadow: inset -5px 0 0 #9c8b7c;
      &:after {
        content: "";
        width: 100%;
      }
      &:before {
        content: "";
        width: 5px;
        right: 0;
      }
    }
    .btn-close-x {
      display: block;
    }
    .journal-menu-box {
      width: 500px;
      height: 40px;
      position: absolute;
      top: 10px;
      left: 12px;
      font-size: 0;
      text-align: center;
      .color-btn {
        width: 160px;
        margin: 0 3px 0 3px;
      }
    }
    .journal-parth-box-all {
      width: 500px;
      height: 440px;
      position: absolute;
      top: 58px;
      left: 12px;
      background-color: #9c8b7c;
      .journal-parth-box-scroll {
        width: 480px;
        height: 420px;
        position: absolute;
        top: 10px;
        left: 10px;
        overflow: hidden;
        overflow-y: scroll;
        font-size: 0;
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
          -webkit-box-shadow: inset 0 0 3px #796b60;
          background: linear-gradient(
            to right,
            #fff,
            #f5de80,
            #f4b766,
            #b26d12
          );
        }
        .journal-parth-box {
          width: 460px;
          height: auto;
          position: relative;
          display: inline-block;
          padding-left: 2px;
          .journal-parth-name {
            width: 460px;
            height: 40px;
            position: relative;
            display: inline-block;
            text-align: center;
            line-height: 40px;
            color: #ffd700;
            font-size: 18px;
            font-weight: bold;
            text-transform: uppercase;
            margin: 2px 0 10px 0;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 3px;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2),
              0 1px 1px rgba(255, 255, 255, 0.2);
          }
          .journal-parth {
            width: 460px;
            height: 102px;
            position: relative;
            display: inline-block;
            background-color: #b7a597;
            margin-bottom: 10px;
            border-radius: 3px;
            overflow: hidden;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2),
              0 0 0 2px rgba(0, 0, 0, 0.1),
              inset 0 1px 1px rgba(255, 255, 255, 0.2),
              inset -24px 0 0 rgba(255, 255, 255, 0.2);
            transition: ease-in-out 0.1s;
            &:hover {
              background-color: #c2aea0;
              .journal-parth-wrap {
                .text {
                  background-color: #ad9c8f;
                }
              }
            }
            &:after {
              content: "";
              width: 10px;
              height: 10px;
              position: absolute;
              right: 6px;
              top: 44px;
              font-size: 22px;
              border: 2px solid rgba(0, 0, 0, 0.44);
              border-top: none;
              border-left: none;
              transform: rotate(45deg) scaleX(1);
              filter: drop-shadow(1px 1px 0 #fff);
              transition: ease-in-out 0.1s;
              pointer-events: none;
            }
            .journal-parth-wrap {
              cursor: pointer;
              .journal-parth-text-box {
                width: 330px;
                height: 80px;
                position: relative;
                display: inline-block;
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8),
                  0 1px 4px rgba(0, 0, 0, 0.8);
                .journal-parth-title {
                  color: #fff;
                  font-size: 14px;
                  text-transform: uppercase;
                  font-weight: 700;
                  padding-left: 20px;
                  line-height: 24px;
                  position: relative;
                  left: -10px;
                  background: #ffd90050;
                  transform: skewX(-30deg);
                  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
                  p {
                    transform: skewX(30deg);
                    margin: 0;
                  }
                }
                .journal-parth-text {
                  height: 52px;
                  color: rgb(255, 255, 255);
                  font-size: 14px;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: linear-gradient(
                    90deg,
                    rgba(0, 0, 0, 0.1),
                    rgba(0, 0, 0, 0.2),
                    rgba(0, 0, 0, 0)
                  );
                  padding: 2px 0 2px 0;
                  &:before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    left: 0;
                    bottom: -1px;
                    background: linear-gradient(
                      90deg,
                      rgba(255, 255, 255, 0.2),
                      rgba(255, 255, 255, 0.4),
                      rgba(255, 255, 255, 0)
                    );
                  }
                }
              }
              .daily-prgbar-all {
                width: 314px;
                height: 10px;
                position: absolute;
                top: 86px;
                left: 8px;
                background: linear-gradient(180deg, #3b302f 0%, #584a49 100%);
                box-shadow: 0 0 0 1px #3b302f;
                border-radius: 10px;
                overflow: hidden;
                .daily-prgbar {
                  width: 10%;
                  height: 10px;
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  background: linear-gradient(
                    0deg,
                    #8cdd55 0%,
                    #43a700 50%,
                    #8cdd55 100%
                  );
                }
                .daily-prgbar-text {
                  width: 100%;
                  height: 10px;
                  position: relative;
                  text-align: center;
                  color: #ffd33c;
                  font-weight: bold;
                  font-size: 12px;
                  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8),
                    0 1px 4px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.8);
                  line-height: 10px;
                  text-transform: uppercase;
                }
              }
              .text {
                height: 52px;
                color: rgb(255, 255, 255);
                font-size: 14px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 22px 0 0 0;
                background-color: #a39286;
                padding: 2px 8px 2px 8px;
                box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2);
                transition: ease-in-out 0.1s;
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8),
                  0 1px 4px rgba(0, 0, 0, 0.8);
              }
            }
            .journal-reward {
              width: 60px;
              height: 60px;
              position: absolute;
              right: 46px;
              top: 10px;
              display: inline-block;
              background: linear-gradient(
                180deg,
                #c68300 0%,
                #f4dfb6 50%,
                #c68200 70%,
                #fad489 85%,
                #c78302 100%
              );
              border-radius: 10px;
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
              .journal-reward-pic {
                width: 56px;
                height: 56px;
                position: absolute;
                top: 2px;
                left: 2px;
                border-radius: 6px;
                img {
                  width: 56px;
                  border-radius: 6px;
                }
              }
              .color-btn {
                width: 78px;
                height: 26px;
                position: absolute;
                left: -10px;
                bottom: -20px;
                box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.25),
                  0 2px 4px 0 rgba(0, 0, 0, 0.55);
                .color-btn-text {
                  top: 2px;
                }
                &:active {
                  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.25),
                    0 2px 4px 0 rgba(0, 0, 0, 0.55);
                  .color-btn-text {
                    top: 4px;
                  }
                }
              }
            }
          }
          .journal-parth.view {
            height: 158px;
            transition: ease-in-out 0.1s;
            &:after {
              transform: rotate(135deg) scaleX(-1);
              filter: drop-shadow(-1px -1px 0 #fff);
              transition: ease-in-out 0.1s;
              margin-top: 4px;
            }
          }
        }
      }
    }
  }
`;

export { stylesFileName, pageStyles };
