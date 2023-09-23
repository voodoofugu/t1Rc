import { css } from "@emotion/react";

const V2ScreenAlbumStyles = css`
  body .main {
    .left-side {
      width: 620px;
      height: 555px;
      position: absolute;
      left: 5px;
      bottom: 5px;
      .tabs-all-box {
        width: 500px;
        height: 40px;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 0;
        .tabs-all {
          width: 118px;
          height: 40px;
          position: relative;
          top: 0;
          left: 0;
          display: inline-block;
          margin: 0 2px 0 0;
          cursor: pointer;
          background-color: #9c8b7c;
          border-radius: 24px 24px 0 0;
          &:before {
            content: "";
            width: 110px;
            height: 36px;
            position: absolute;
            top: 4px;
            left: 4px;
            background-color: #544746;
            border-radius: 20px 20px 0 0;
            box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.15);
          }
          .tabs-name {
            width: 60px;
            height: 40px;
            position: absolute;
            right: 14px;
            color: #fff;
            font-weight: bold;
            font-size: 12px;
            line-height: 44px;
            text-align: center;
          }
          .tabs-pic {
            width: 50px;
            height: 32px;
            position: absolute;
            top: 5px;
            left: 5px;
            img {
              width: 50px;
            }
          }
          &.selected {
            &:before {
              content: "";
              background-color: #9c8b7c;
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
        &:before {
          content: "";
          width: 620px;
          height: 5px;
          position: absolute;
          top: 0;
          left: 0;
          background-color: #9c8b7c;
          z-index: 999;
        }
        &.wide {
          width: 1106px;
          .tab-panel-box.album {
            width: 1098px;
            height: 511px;
            position: absolute;
            top: 0;
            left: 0;
            background: #b7a597;
            border: solid 4px #9c8b7c;
            border-top: none;
            box-shadow: inset 0 0 7px #5f4f4e;
            .tab-panel-box-title {
              width: 300px;
              height: 24px;
              position: absolute;
              top: 10px;
              left: 399px;
              background: linear-gradient(
                0deg,
                #ffe199 0%,
                #f4c657 18%,
                #ffe199 60%,
                #f4c557 85%,
                #ffe199 100%
              );
              border-radius: 12px;
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
              color: #3c3737;
              font-size: 16px;
              font-weight: bold;
              text-transform: uppercase;
              line-height: 24px;
              text-align: center;
            }
            .album-left-side {
              width: 266px;
              height: 460px;
              position: absolute;
              bottom: 10px;
              left: 10px;
              .change-top-menu {
                width: 100%;
                height: 40px;
                position: absolute;
                top: 0;
                left: 0;
                .color-btn {
                  width: 260px;
                  position: absolute;
                  top: 0;
                  left: 3px;
                }
              }
              .change-main-tags-box-all {
                width: 262px;
                height: 410px;
                position: absolute;
                top: 46px;
                left: 2px;
                z-index: 999;
                .search-box-all {
                  width: 100%;
                  height: 40px;
                  position: absolute;
                  .search-box {
                    width: 263px;
                    height: 40px;
                    position: absolute;
                    background-color: #f0ece9;
                    border-radius: 6px;
                    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.45);
                    .search {
                      width: 213px;
                      height: 32px;
                      position: absolute;
                      top: 4px;
                      left: 4px;
                      font-size: 20px;
                      text-transform: capitalize;
                      border: none;
                      border-radius: 6px;
                      padding: 0 0 0 6px;
                      background-color: #f0ece9;
                      &::-webkit-input-placeholder {
                        color: #9d8a7c;
                      }
                      &:focus {
                        &::-webkit-input-placeholder {
                          color: transparent;
                        }
                      }
                    }
                    .sbutton {
                      width: 40px;
                      height: 40px;
                      position: absolute;
                      right: 0;
                      background: linear-gradient(
                        0deg,
                        #cec1b6 0%,
                        #f2e8e0 100%
                      );
                      border: none;
                      @include prefix(border-radius, 0 6px 6px 0);
                      cursor: pointer;
                      box-shadow: -2px 0 2px 0 rgba(0, 0, 0, 0.2);
                    }
                  }
                }
                .tags-box-all {
                  width: 100%;
                  height: 364px;
                  position: absolute;
                  top: 48px;
                  background-color: #8f7a6b;
                  border-radius: 6px 6px 0 0;
                  .box-all {
                    width: 100%;
                    position: relative;
                    .box-all-name {
                      width: 262px;
                      height: 34px;
                      position: relative;
                      background: linear-gradient(
                        180deg,
                        #585a5c 0%,
                        #d5d8da 50%,
                        #585a5b 70%,
                        #a1a4a6 85%,
                        #585a5b 100%
                      );
                      border-radius: 6px;
                      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.45);
                      font-size: 16px;
                      color: #fff;
                      position: relative;
                      text-align: center;
                      line-height: 34px;
                      text-transform: uppercase;
                      font-weight: bold;
                      cursor: pointer;
                      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);
                      &:before {
                        content: "";
                        display: inline-block;
                        width: 8px;
                        height: 8px;
                        position: absolute;
                        left: 14px;
                        top: 10px;
                        text-shadow: none;
                        font-size: 22px;
                        border: solid 2px rgba(0, 0, 0, 0.44);
                        border-top: none;
                        border-left: none;
                        transform: rotate(45deg);
                      }
                    }
                    &.opened .box-all-name {
                      color: #fff;
                      text-shadow: 0 1px 4px #000;
                    }
                    &.opened .box-all-name:before {
                      content: "";
                      transform: rotate(-135deg);
                      top: 14px;
                    }
                    &.opened .tags-scroll {
                      display: block;
                    }
                    &.collected-tags {
                      .box-all-name {
                        background: linear-gradient(
                          180deg,
                          #8e7453 0%,
                          #e3c7a3 50%,
                          #8f7553 70%,
                          #ae916a 85%,
                          #8f7553 100%
                        );
                      }
                    }
                    &.favorite-tags {
                      .box-all-name {
                        background: linear-gradient(
                          180deg,
                          #c68300 0%,
                          #f4dfb6 50%,
                          #c68200 70%,
                          #fad489 85%,
                          #c78302 100%
                        );
                      }
                    }
                  }
                  .tags-scroll {
                    width: 100%;
                    height: 248px;
                    left: 0px;
                    top: 0px;
                    bottom: 0px;
                    right: 0px;
                    overflow-y: scroll;
                    padding: 4px 0 10px 0;
                    font-size: 0px;
                    display: none;
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
                    .tags-line {
                      width: 252px;
                      height: 24px;
                      position: relative;
                      display: inline-block;
                      background-color: #826e5f;
                      cursor: pointer;
                      &:nth-of-type(2n) {
                        background-color: #8f7a6b;
                      }
                      .tags-name,
                      .tags-counter {
                        width: 220px;
                        height: 24px;
                        position: absolute;
                        margin-left: 4px;
                        font-size: 14px;
                        font-weight: bold;
                        text-transform: capitalize;
                        color: #fff;
                        line-height: 24px;
                      }
                      .tags-counter {
                        width: 70px;
                        margin-left: 178px;
                        text-align: right;
                        color: #d0c3ba;
                      }
                      .tags-check {
                        width: 24px;
                        height: 24px;
                        background-image: url(../img/check-box.png);
                        background-size: 100%;
                        position: absolute;
                        margin-left: 225px;
                        top: -1px;
                        display: none;
                      }
                      .tags-new {
                        width: 47px;
                        height: 24px;
                        background-image: url(../img/new-box.png);
                        background-size: 100%;
                        position: absolute;
                        margin-left: 156px;
                        top: -1px;
                        display: none;
                      }

                      &.color2 {
                        background-color: #8f7a6b;
                      }
                      &.selected {
                        background-color: #307ac7;
                        border: 2px solid;
                        width: 248px;
                      }
                      &.check {
                        .tags-counter {
                          display: none;
                        }
                        .tags-check {
                          display: block;
                        }
                        .tags-new {
                          display: none;
                        }
                      }
                      &.new {
                        .tags-counter {
                          display: none;
                        }
                        .tags-check {
                          display: none;
                        }
                        .tags-new {
                          display: block;
                        }
                      }
                    }
                  }
                }
                &.opened .tags-scroll {
                  display: block;
                }
              }
            }
            .change-main-right-side {
              width: 800px;
              height: 460px;
              position: absolute;
              bottom: 10px;
              right: 10px;
              background-color: red;
              .img-list {
                width: 780px;
                height: 440px;
                position: absolute;
                top: 0;
                left: 0;
                background-color: #8f7a6b;
                overflow: hidden;
                overflow-y: scroll;
                list-style: none;
                padding: 10px;
                &::-webkit-scrollbar-track {
                  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                  border-radius: 10px;
                  background-color: #7c665c;
                }
                &::-webkit-scrollbar {
                  width: 10px;
                  background-color: #9e8b7d;
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
                .img-box {
                  list-style: none;
                  margin: 0;
                  padding: 0;
                  display: inline-block;
                  width: 223px;
                  height: 297px;
                  background: #9e8b7d;
                  position: relative;
                  margin: 5px;
                  border-radius: 10px;
                  border: solid 3px #e4cf76;
                  box-shadow: inset 0 0 5px #c87725, 0 1px 3px #000,
                    inset 0 77px 7px #bfb6ad;
                  cursor: pointer;
                  &.blocked {
                    background-image: url(../img/zagluska.jpg);
                    background-size: 223px;
                    cursor: default;
                    box-shadow: none;
                  }
                  .im-text {
                    display: block;
                    background: #534a41;
                    position: absolute;
                    margin: 0 26px 0 24px;
                    top: calc(50% + 24px);
                    font-size: 12px;
                    color: #ccc;
                    padding: 10px 5px 5px 40px;
                    line-height: 12px;
                    box-shadow: inset 0 4px 0 #000, inset 0 24px 0 #5e564e;
                    min-height: 30px;
                    border-radius: 6px;
                    &:before {
                      content: "";
                      display: block;
                      width: 24px;
                      height: 24px;
                      background-image: url(../img/ic-lamp.png);
                      background-size: 24px;
                      position: absolute;
                      left: 6px;
                      top: 10px;
                    }
                  }

                  &.landscape {
                    width: 514px;
                  }
                  .fav-box {
                    display: inline-block;
                    width: 36px;
                    height: 32px;
                    position: absolute;
                    right: -3px;
                    top: -3px;
                    box-shadow: 0 3px 0px #c87725, inset 0 3px 2px #ffa,
                      0 3px 4px #000;
                    background: linear-gradient(
                      45deg,
                      #e8c34e,
                      #ffa,
                      #cfa831,
                      #fbf1d8
                    );
                    line-height: 28px;
                    color: #453e38;
                    font-size: 16px;
                    text-shadow: 0 0 1px #000, 0 2px 2px #fff;
                    border-radius: 4px;
                    @include prefix(border-bottom-left-radius, 20px);
                    cursor: pointer;
                    &:before {
                      content: "";
                      display: block;
                      width: 21px;
                      height: 21px;
                      background-image: url(../img/heartB.png);
                      background-size: 21px;
                      position: absolute;
                      right: 6px;
                      top: 6px;
                      opacity: 0.4;
                    }
                    &.fav:before {
                      background-image: url(../img/heart1.png);
                      background-size: 21px;
                      opacity: 1;
                    }
                  }
                  .price,
                  .price:before,
                  .price:after {
                    content: "";
                    display: inline-block;
                    width: 29px;
                    height: 29px;
                    background-image: url(../img/star1.png);
                    background-size: 29px;
                    position: absolute;
                    left: calc(50% - 16px);
                    top: 2px;
                  }
                  .price:before {
                    position: absolute;
                    top: 0;
                    left: -30px;
                  }
                  .price:after {
                    position: absolute;
                    top: 0;
                    left: 30px;
                  }
                  .price.p1 {
                    &:before,
                    &:after {
                      display: none;
                    }
                  }
                  .price.p2 {
                    left: calc(50%);
                    &:after {
                      display: none;
                    }
                  }
                  &.blocked .price {
                    top: calc(50% - 85px);
                  }
                  .img {
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                  }
                  .info {
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(0, 0, 0, 0.55);
                    font-size: 14px;
                    color: #fff;
                    line-height: 17px;
                    padding: 5px 10px;
                    @include prefix(border-bottom-left-radius, 8px);
                    @include prefix(border-bottom-right-radius, 8px);
                  }
                  .btn-fs {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    bottom: 3px;
                    right: 10px;
                    background: none;
                    background-image: url(../img/chahge-fullscr.png);
                    background-size: 100%;
                    cursor: pointer;
                  }
                  .prog {
                    display: block;
                    height: 18px;
                    background: #534a41;
                    position: absolute;
                    left: 5%;
                    right: 5%;
                    top: 50%;
                    @include prefix(border-radius, 5px "/" 15px);
                    box-shadow: inset 0 2px 10px #000;
                    border: solid 2px #534a41;
                    .prg {
                      display: block;
                      width: 33%;
                      height: 18px;
                      background: #d18d0e;
                      position: absolute;
                      @include prefix(border-radius, 3px "/" 15px);
                      box-shadow: inset 0 0 1px #000, inset 0 9px 0 #d8ac55,
                        inset 0 0 5px #6b420c;
                    }
                  }
                  .num {
                    display: none;
                  }
                  .text {
                    display: block;
                    background: #534a41;
                    position: absolute;
                    left: 5%;
                    right: 5%;
                    top: calc(50% + 9px);
                    font-size: 14px;
                    color: #ccc;
                    padding: 16px 5px 5px 40px;
                    line-height: 17px;
                    box-shadow: inset 0 30px 0 #5e564e;
                    min-height: 30px;
                    &:before {
                      content: "i";
                      display: block;
                      width: 28px;
                      height: 28px;
                      background: #097bd3;
                      border-radius: 100%;
                      position: absolute;
                      left: 6px;
                      top: 17px;
                      font-size: 26px;
                      color: #fff;
                      font-weight: normal;
                      font-family: serif;
                      text-align: center;
                      line-height: 28px;
                      text-shadow: 0 0 1px #fff, 0 0 1px #fff;
                      box-shadow: inset 0 0 5px #fff, 0 2px 1px #000;
                    }
                  }
                }
              }
              &.full_album .img-list {
                height: 491px;
                top: 10px;
              }
              .change-pic-box-all {
                width: 746px;
                height: 346px;
                position: absolute;
                top: 94px;
                margin-left: 6px;
                background-color: #7d6b5d;
                .change-pic-scroll {
                  width: 736px;
                  height: 330px;
                  position: absolute;
                  left: 4px;
                  top: 8px;
                  bottom: 0px;
                  right: 0px;
                  overflow-y: scroll;
                  font-size: 0px;
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
                  .change-pic-box {
                    width: 232px;
                    height: 176px;
                    position: relative;
                    display: inline-block;
                    background-color: #8f7a6b;
                    margin: 4px;
                    box-shadow: inset 0 0 0 4px #ecd4a6,
                      0 2px 4px 0 rgba(0, 0, 0, 0.35);
                    .change-pic {
                      width: 224px;
                      height: 168px;
                      position: absolute;
                      top: 4px;
                      margin-left: 4px;
                      overflow: hidden;
                      .pic {
                        width: 100%;
                      }
                    }
                    .change-pic-star-box {
                      width: 224px;
                      height: 40px;
                      position: absolute;
                      top: 132px;
                      margin-left: 4px;
                      background-color: rgba(255, 255, 255, 0.8);
                      .star1,
                      .star2,
                      .star3 {
                        width: 41px;
                        height: 39px;
                        position: relative;
                        margin: 0 auto;
                        background-image: url(../img/star1.png);
                        background-size: 100%;
                      }
                      .star2 {
                        width: 71px;
                        background-image: url(../img/star2.png);
                      }
                      .star3 {
                        width: 101px;
                        background-image: url(../img/star3.png);
                      }
                    }
                    .tags-new {
                      top: -2px;
                      margin-left: 182px;
                    }
                    .change-fav {
                      width: 36px;
                      height: 36px;
                      position: absolute;
                      background-color: #ecd4a6;
                      @include prefix(border-radius, 0 0 8px 0);
                      cursor: pointer;
                      box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25),
                        0 2px 4px 0 rgba(0, 0, 0, 0.5);
                      .fav-icon {
                        width: 26px;
                        height: 26px;
                        position: absolute;
                        top: 4px;
                        margin-left: 5px;
                        background-image: url(../img/heartB.png);
                        background-size: 100%;
                        opacity: 0.5;
                      }
                    }
                    &.new {
                      .tags-new {
                        display: block;
                      }
                    }
                    &.plus {
                      .change-pic {
                        display: none;
                      }
                      .change-pic-star-box {
                        display: none;
                      }
                      .tags-new {
                        display: none;
                      }
                      .change-plus {
                        width: 50px;
                        height: 50px;
                        position: absolute;
                        top: 63px;
                        margin-left: 91px;
                        background-image: url(../img/chahge-plus.png);
                        background-size: 100%;
                        cursor: pointer;
                        &:active {
                          top: 64px;
                        }
                      }
                      .change-fav {
                        display: none;
                      }
                    }
                    &.check {
                      .fav-icon {
                        background-image: url(../img/heart1.png);
                        opacity: 1;
                      }
                    }
                  }
                }
              }
            }
            .btn-close-x {
              width: 30px;
              height: 30px;
              position: absolute;
              top: -6px;
              right: -6px;
              background: linear-gradient(30deg, #876b56, #aa9383, #dfceba);
              border-radius: 7px;
              box-shadow: 0 0 7px #000;
              cursor: pointer;
              z-index: 999;
              &:before {
                content: "✖";
                font-size: 28px;
                font-weight: bold;
                color: #600;
                line-height: 30px;
                text-shadow: 0 0 2px #fff;
              }
              &:after {
                content: "";
                width: 24px;
                height: 7px;
                position: absolute;
                top: 3px;
                left: 3px;
                background: rgba(255, 255, 255, 0.25);
                border-radius: 5px;
              }
            }
            .trophy-res-box-all {
              width: 370px;
              height: 45px;
              position: absolute;
              top: -42px;
              right: 36px;
              background-color: #9c8b7c;
              border-radius: 10px 10px 0 0;
              .trophy-res-box {
                width: 170px;
                height: 36px;
                position: absolute;
                top: 4px;
                left: 10px;
                background: linear-gradient(
                  0deg,
                  #ffe199 0%,
                  #f4c657 18%,
                  #ffe199 60%,
                  #f4c557 85%,
                  #ffe199 100%
                );
                border-radius: 18px;
                box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.55),
                  0 2px 4px 0 rgba(0, 0, 0, 0.35);
                .trophy-value {
                  width: 100px;
                  height: 28px;
                  position: absolute;
                  top: 3px;
                  left: 38px;
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
                  font-size: 20px;
                  font-weight: bold;
                  line-height: 28px;
                  text-align: center;
                  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                }
                .trophy-value-btn-add {
                  width: 32px;
                  height: 36px;
                  position: absolute;
                  top: 0;
                  right: 0;
                  border-radius: 0 18px 18px 0;
                  cursor: pointer;
                  &:before {
                    content: "";
                    width: 6px;
                    height: 22px;
                    position: absolute;
                    top: 7px;
                    left: 12px;
                    background-color: #3c3737;
                  }
                  &:after {
                    content: "";
                    width: 22px;
                    height: 6px;
                    position: absolute;
                    top: 15px;
                    left: 4px;
                    background-color: #3c3737;
                  }
                }
                &.gems {
                  &:before {
                    content: "";
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    background-image: url(../img/trophy-bonus-gems.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                }
                &.mithril {
                  left: 190px;
                  &:before {
                    content: "";
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    background-image: url(../img/trophy-bonus-gems.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                }
              }
            }
          }
        }
        .container {
          .tab-panel {
          }
        }
      }
    }
  }
`;

export default V2ScreenAlbumStyles;
