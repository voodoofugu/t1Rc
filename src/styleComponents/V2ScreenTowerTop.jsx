import { css } from "@emotion/react";
import foundFileName from "../scripts/forBild/foundFileName.js";
const stylesFileName = foundFileName();

const pageStyles = css`
  body .main.world1,
  body .main.world2,
  body .main.world3 {
    .left-side {
      .left-panel {
        &.top {
          .all-heroes-box {
            height: 396px;
            border-radius: 10px;
            &:before {
              box-shadow: 502px 0 0 #dd9542, 0 398px 0 #dd9542,
                502px 398px 0 #dd9542;
            }
            .container-top {
              width: 480px;
              height: 375px;
              position: absolute;
              top: 10px;
              left: 10px;
              .rating-ped-box {
                width: 480px;
                height: 144px;
                position: absolute;
                top: 0;
                left: 0;
                .rating-ped-box-num {
                  width: 114px;
                  height: 24px;
                  position: absolute;
                  bottom: 0px;
                  background: linear-gradient(180deg, #6d5e52 0%, #493d34 100%);
                  border-radius: 0 0 6px 6px;
                  overflow: hidden;
                  .ped-box-num-text {
                    width: 100%;
                    height: 24px;
                    color: #fff;
                    line-height: 24px;
                    font-size: 14px;
                    text-align: center;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                    &.var2,
                    &.var4 {
                      background: linear-gradient(
                        180deg,
                        #4f4339 0%,
                        #352c25 100%
                      );
                    }
                  }
                }
                .ped-box {
                  width: 114px;
                  height: 144px;
                  position: absolute;
                  bottom: 0px;
                  background-color: #67564a;
                  border-radius: 6px;
                  &.active {
                    .ped-box-portrait {
                      display: block;
                    }
                  }
                  .ped-box-portrait {
                    width: 66px;
                    height: 66px;
                    background-image: url(../img/gild-icon-66.png);
                    position: absolute;
                    margin-left: 22px;
                    bottom: 62px;
                    display: none;
                  }
                  .ped-box-prize {
                    width: 100px;
                    height: 100px;
                    position: absolute;
                    top: 8px;
                    left: 7px;
                    background-size: 100%;
                  }
                  &.rate1 {
                    height: 84px;
                    .ped-box-prize {
                      width: 60px;
                      height: 60px;
                      left: 27px;
                      top: 2px;
                      background-image: url(../img/rating-sign-bronze@1x.png);
                    }
                  }
                  &.rate2 {
                    height: 104px;
                    left: 122px;
                    background-color: #67564a;
                    margin-left: 0;
                    .ped-box-prize {
                      width: 70px;
                      height: 70px;
                      left: 22px;
                      background-image: url(../img/rating-sign-silver@1x.png);
                      margin-left: 0;
                    }
                  }
                  &.rate3 {
                    height: 124px;
                    left: 244px;
                    margin-left: 0;
                    .ped-box-prize {
                      width: 90px;
                      height: 90px;
                      left: 12px;
                      background-image: url(../img/rating-sign-gold@1x.png);
                      margin-left: 0;
                    }
                  }
                  &.rate4 {
                    height: 144px;
                    left: 366px;
                    background-color: #67564a;
                    margin-left: 0;
                    .ped-box-prize {
                      background-image: url(../img/rating-sign-top@1x.png);
                      margin-left: 0;
                    }
                  }
                }
              }
              .rating-scroll-name-box {
                width: 480px;
                height: 24px;
                position: absolute;
                top: 152px;
                left: 0;
                color: #eed9cb;
                font-weight: bold;
                line-height: 24px;
                font-size: 14px;
                text-align: center;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
                background: linear-gradient(180deg, #6d5e52 0%, #493d34 100%);
                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                  inset 0px 1px 1px rgba(0, 0, 0, 0.1),
                  0 4px 4px rgba(0, 0, 0, 0.15), inset -10px 0 0 #352c25;
                border-radius: 6px 6px 0 0;
                overflow: hidden;
                .rating-scroll-name {
                  width: 100px;
                  height: 24px;
                  line-height: 24px;
                  position: absolute;
                  &.var1 {
                    width: 100px;
                  }
                  &.var2 {
                    width: 220px;
                    left: 100px;
                    background: linear-gradient(
                      180deg,
                      #4f4339 0%,
                      #352c25 100%
                    );
                  }
                  &.var3 {
                    width: 150px;
                    left: 320px;
                  }
                }
              }
              .list-disabled-text {
                position: absolute;
                left: 50%;
                top: 244px;
                transform: translateX(-50%);
                color: #fff;
                font-size: 20px;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                text-align: center;
                width: 270px;
                background: linear-gradient(
                  90deg,
                  rgba(0, 0, 0, 0) 10%,
                  rgba(0, 0, 0, 0.1),
                  rgba(0, 0, 0, 0.1),
                  rgba(0, 0, 0, 0) 90%
                );
                padding: 10px 0;
                &:before,
                &:after {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 2px;
                  background: linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0) 10%,
                    rgba(255, 255, 255, 0.5),
                    rgba(255, 255, 255, 0) 90%
                  );
                  left: 0;
                }
                &:before {
                  top: 0;
                }
                &:after {
                  bottom: 0;
                }
              }
              .rating-scroll-box {
                width: 480px;
                height: 200px;
                position: absolute;
                top: 176px;
                left: 0;
                border-radius: 0 0 6px 6px;
                box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
                .rating-scroll {
                  display: block;
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  bottom: 0px;
                  right: 0px;
                  overflow-y: scroll;
                  border-radius: 0 0 6px 6px;
                  &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                    border-radius: 0 0 6px 0;
                    background-color: #7c665c;
                  }
                  &::-webkit-scrollbar {
                    width: 10px;
                  }
                  &::-webkit-scrollbar-thumb {
                    border-radius: 6px;
                    -webkit-box-shadow: inset 0 0 3px #796b60;
                    background: linear-gradient(
                      to right,
                      #fff,
                      #f5de80,
                      #f4b766,
                      #b26d12
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
                    &:hover {
                      filter: brightness(1.05);
                    }
                    .number,
                    .name,
                    .points {
                      width: 100px;
                      height: 30px;
                      position: absolute;
                    }
                    .name {
                      width: 210px;
                      background-color: #857163;
                      margin-left: 100px;
                      text-align: left;
                      padding-left: 10px;
                    }
                    .points {
                      width: 118px;
                      margin-left: 320px;
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
                          background-image: url(../img/diamond@1x.png);
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
                          background-image: url(../img/diamond@1x.png);
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
          }
          .tower-rightside-box-all {
            width: 580px;
            height: 507px;
            position: absolute;
            top: 4px;
            right: 4px;
            background-color: #b7a597;
            border-radius: 0px 14px 14px 0;
            box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.2),
              inset 2px 0 0 rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.2),
              4px 0 0 #9c8b7c, 0 4px 0 #9c8b7c, 4px 4px 0 #9c8b7c,
              0 -4px 0#9c8b7c, 4px -4px 0 #9c8b7c;
            .right-side {
              top: -25px;
              right: -9px;
              .skills-wrap {
                left: -17px;
                top: 21px;
                position: absolute;
              }
              .monster {
                top: 1px;
                right: 0;
              }
            }
            .tower-right-wrap {
              position: absolute;
              z-index: 2;
              width: 580px;
              height: 507px;
              background-color: rgb(183, 165, 151);
              border-radius: 0px 14px 14px 0;
              box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.2),
                inset 2px 0 0 rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.2),
                4px 0 0 #9c8b7c, 0 4px 0 #9c8b7c, 4px 4px 0 #9c8b7c,
                0 -4px 0#9c8b7c, 4px -4px 0 #9c8b7c;
              .tab-panel-box-title {
                width: 300px;
                height: 24px;
                position: absolute;
                top: 10px;
                left: 50%;
                transform: translateX(-50%);
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
              .tower-prg-box-all {
                width: 562px;
                height: 50px;
                position: absolute;
                top: 44px;
                left: 10px;
                background-color: #8f7c6e;
                border-radius: 10px;
                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                  inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                .buy-relics {
                  position: absolute;
                  left: 310px;
                  top: -5px;
                  cursor: pointer;
                }
                .tower-prgbar-all {
                  width: 300px;
                  height: 40px;
                  position: absolute;
                  top: 5px;
                  left: 5px;
                  background: linear-gradient(180deg, #3b302f 0%, #584a49 100%);
                  .tower-prgbar {
                    width: 85%;
                    height: 40px;
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
                  .tower-prgbar-text {
                    width: 300px;
                    height: 40px;
                    position: relative;
                    text-align: center;
                    color: #ffd33c;
                    font-weight: bold;
                    font-size: 16px;
                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
                    line-height: 40px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                    text-transform: uppercase;
                    span {
                      color: #fff;
                      margin-left: 10px;
                      font-size: 18px;
                    }
                  }
                }
                .cards-res-box {
                  width: 170px;
                  height: 36px;
                  position: absolute;
                  top: 7px;
                  left: 206px;
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
                  &:before {
                    content: "";
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    background-image: url(../img/gold-ticket.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                  }
                  .cards-value {
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
                  .cards-value-btn-add {
                    width: 32px;
                    height: 36px;
                    position: absolute;
                    top: 0;
                    right: 0;
                    @include prefix(border-radius, 0 18px 18px 0);
                    cursor: pointer;
                    filter: drop-shadow(0 1px 0.5px rgba(255, 255, 255, 0.795));
                    &:before {
                      content: "";
                      width: 6px;
                      height: 22px;
                      position: absolute;
                      top: 7px;
                      left: 12px;
                      background-color: #4f4646;
                      border-radius: 2px;
                    }
                    &:after {
                      content: "";
                      width: 22px;
                      height: 6px;
                      position: absolute;
                      top: 15px;
                      left: 4px;
                      background-color: #4f4646;
                      border-radius: 2px;
                    }
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
                  }
                  &.relicset {
                    left: 6px;
                    &:before {
                      content: "";
                      width: 40px;
                      height: 40px;
                      position: absolute;
                      top: -2px;
                      left: -2px;
                      background-image: url(../img/card-ic-koloda.png);
                      background-size: 100%;
                      background-repeat: no-repeat;
                    }
                  }
                }
                .relics-pop-event-btn {
                  width: 70px;
                  height: 70px;
                  position: absolute;
                  top: -10px;
                  left: 5px;
                  cursor: pointer;
                  background-image: url(../img/offer-bk-sm1.png);
                  background-size: 100%;
                  background-repeat: no-repeat;
                  .relics-pop-event-btn-text {
                    width: 100%;
                    height: auto;
                    position: relative;
                    top: 24px;
                    text-align: center;
                    color: #fff;
                    font-weight: bold;
                    font-size: 14px;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                  }
                  &:active {
                    top: -9px;
                  }
                }
              }
              .tower-box-all {
                width: 440px;
                height: 395px;
                position: absolute;
                bottom: 8px;
                left: 132px;
                background-color: #8f7c6e;
                border-radius: 0 10px 10px 0;
                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                  inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                .raidboss-animation-box {
                  width: 430px;
                  height: 395px;
                  position: absolute;
                  top: 0;
                  left: 5px;
                  .raidboss-animation-name-box {
                    width: 430px;
                    height: 40px;
                    position: absolute;
                    top: 5px;
                    left: 0;
                    display: table;
                    background-color: #705d4e;
                    border-radius: 8px;
                    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                      inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                    .raidboss-animation-name {
                      width: 430px;
                      height: 40px;
                      position: relative;
                      top: 0;
                      left: 0;
                      display: table-cell;
                      vertical-align: middle;
                      color: #ffd700;
                      font-size: 12px;
                      font-weight: bold;
                      text-transform: uppercase;
                      text-align: center;
                    }
                  }
                  .raidboss-animation-scroll-box {
                    width: 430px;
                    height: 338px;
                    position: absolute;
                    top: 50px;
                    left: 0;
                    font-size: 0;
                    .raidboss-animation-scroll {
                      width: 100%;
                      height: 338px;
                      position: absolute;
                      top: 0;
                      left: 0;
                      overflow-y: scroll;
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
                      .raidboss-animation-f-box {
                        width: 414px;
                        height: 164px;
                        position: relative;
                        display: inline-block;
                        margin-bottom: 10px;
                        background-color: #705d4e;
                        box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                          inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                        border-radius: 6px;
                        overflow: hidden;
                        .rb-rignt-box {
                          width: auto;
                          height: 159px;
                          position: absolute;
                          top: 2px;
                          left: 118px;
                          padding: 1px;
                          display: flex;
                          flex-wrap: wrap;
                          align-items: center;
                          .rb-rating-slot {
                            width: 94px;
                            height: 72px;
                            position: relative;
                            display: inline-block;
                            margin: 2px;
                            background: linear-gradient(
                              180deg,
                              #c68300 0%,
                              #f4dfb6 50%,
                              #c68200 70%,
                              #fad489 85%,
                              #c78302 100%
                            );
                            @include prefix(border-radius, 10px);
                            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.55);
                            cursor: pointer;
                            &:hover {
                              filter: brightness(1.1);
                              transition: ease-in-out 0.04s;
                              .rb-rating-video {
                                .rating-video-play {
                                  transform: scale(1.06);
                                  transition: ease-in-out 0.04s;
                                }
                              }
                            }
                            &:active {
                              transform: scale(0.98);
                              .rb-rating-video {
                                .rating-video-play {
                                  transform: scale(0.94);
                                }
                              }
                            }
                            &:before {
                              content: "";
                              width: 90px;
                              height: 68px;
                              position: absolute;
                              @include prefix(border-radius, 8px);
                              background: linear-gradient(
                                180deg,
                                #95877d 0%,
                                #665c56 100%
                              );
                              top: 2px;
                              left: 2px;
                            }
                            .rb-rating-video {
                              width: 84px;
                              height: 62px;
                              position: absolute;
                              top: 5px;
                              left: 5px;
                              border-radius: 6px;
                              overflow: hidden;
                              transition: ease-in-out 0.04s;
                              img {
                                width: 84px;
                                height: 62px;
                              }
                              .rating-video-play {
                                width: 30px;
                                height: 30px;
                                position: absolute;
                                top: 16px;
                                left: 27px;
                                @include prefix(border-radius, 100%);
                                background-color: rgba(0, 0, 0, 0.7);
                                cursor: pointer;
                                transition: ease-in-out 0.04s;
                                &:before {
                                  content: "";
                                  width: 0;
                                  height: 0;
                                  border-top: 6px solid transparent;
                                  border-left: 12px solid
                                    rgba(255, 255, 255, 0.55);
                                  border-bottom: 6px solid transparent;
                                  position: absolute;
                                  top: 9px;
                                  margin-left: 10px;
                                  transition: ease-in-out 0.04s;
                                }
                              }
                            }
                            .rb-lock {
                              width: 102px;
                              height: 44px;
                              position: absolute;
                              top: 20px;
                              left: -4px;
                              background-image: url(../img/legendary-lock.png);
                              background-size: 100%;
                              display: none;
                            }
                            &.lock {
                              filter: grayscale(100%);
                              pointer-events: none;
                              .rb-lock {
                                display: block;
                              }
                            }
                          }
                        }
                        .rb-left-box {
                          width: 115px;
                          height: 160px;
                          position: absolute;
                          top: 2px;
                          left: 2px;
                          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                          border-radius: 4px;
                          background: linear-gradient(
                            180deg,
                            #66533b 0%,
                            #cfb695 50%,
                            #7c6548 70%,
                            #9b805e 85%,
                            #7c6548 100%
                          );
                          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                          .rb-left-box-name {
                            width: 100%;
                            height: 30px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            background: linear-gradient(
                              0deg,
                              #65554a 0%,
                              #8f7a6b 100%
                            );
                            color: #fff;
                            font-size: 12px;
                            font-weight: bold;
                            text-transform: uppercase;
                            text-align: center;
                            line-height: 30px;
                            box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1),
                              0 1px 1px rgba(255, 255, 255, 0.1);
                            border-radius: 4px 4px 0 0;
                          }
                          .rb-girl-slot {
                            width: 100px;
                            height: 113px;
                            position: absolute;
                            top: 37px;
                            left: 7px;
                            background: linear-gradient(
                              180deg,
                              #8e7453 0%,
                              #e3c7a3 50%,
                              #8f7553 70%,
                              #ae916a 85%,
                              #8f7553 100%
                            );
                            border-radius: 6px;
                            box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2),
                              0 2px 4px rgba(0, 0, 0, 0.55),
                              0 0 0 1px rgba(0, 0, 0, 0.1);
                            .rb-girl-avatar {
                              width: 90px;
                              height: 103px;
                              position: absolute;
                              top: 5px;
                              left: 5px;
                              @include prefix(border-radius, 4px);
                              overflow: hidden;
                              box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
                              img {
                                width: 90px;
                                height: 103px;
                              }
                            }
                          }
                        }
                        &.girl-lock {
                          .rb-girl-lock {
                            width: 115px;
                            height: 160px;
                            position: absolute;
                            top: 2px;
                            left: 2px;
                            background-color: rgba(0, 0, 0, 0.65);
                            display: table;
                            border-radius: 4px;
                            .rb-girl-lock-text {
                              width: 100%;
                              height: 100%;
                              position: relative;
                              display: table-cell;
                              vertical-align: middle;
                              color: #ffd700;
                              font-size: 14px;
                              font-weight: bold;
                              text-transform: uppercase;
                              text-align: center;
                            }
                          }
                        }
                        &.slot-lock {
                          .rb-slot-lock {
                            width: 294px;
                            height: 81px;
                            position: absolute;
                            top: 82px;
                            left: 119px;
                            background-color: rgba(0, 0, 0, 0.65);
                            border-radius: 0 0 5px 5px;
                          }
                          .rb-slot-lock-text {
                            width: 100%;
                            height: auto;
                            position: relative;
                            line-height: 83px;
                            color: #ffd700;
                            font-size: 16px;
                            font-weight: bold;
                            text-transform: uppercase;
                            text-align: center;
                          }
                        }
                      }
                    }
                  }
                }
              }
              .tower-btn-box-all {
                width: 122px;
                height: 395px;
                position: absolute;
                bottom: 8px;
                left: 10px;
                background-color: #8f7c6e;
                border-radius: 10px 0 0 10px;
                box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
                  inset 0px 1px 1px rgba(0, 0, 0, 0.1);
                .color-btn {
                  width: 100px;
                  height: 60px;
                  top: 7px;
                  margin: 8px 11px;
                  .color-btn-text {
                    top: 20px;
                  }
                  &:active {
                    .color-btn-text {
                      top: 21px;
                    }
                  }
                  &.select {
                    background: linear-gradient(0deg, #7cbc30 0%, #baf279 100%);
                    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.25),
                      0 2px 4px 0 rgba(0, 0, 0, 0.55);
                  }
                }
              }
            }
          }
          .tab-loading-wrapper {
            height: 511px;
          }
        }
      }
    }
  }

  .ped-box-portrait {
    width: 66px;
    height: 66px;
    background-image: url(../img/gild-icon-66.png);
    position: absolute;
    margin-left: 0;
    &.place0 {
      display: none;
      margin-left: 0;
    }
    &.place1,
    &.place2,
    &.place3,
    &.place4 {
      top: 30px;
      left: 24px;
      transition-duration: 1s;
      transition-delay: 0.5s;
      margin-left: 0;
    }
    &.place2 {
      top: 20px;
      left: 146px;
      margin-left: 0;
    }
    &.place3 {
      top: 10px;
      left: 270px;
      margin-left: 0;
    }
    &.place4 {
      top: 0px;
      left: 392px;
      margin-left: 0;
    }
    .you-box {
      color: white;
      text-align: center;
      top: 50px;
      position: relative;
      width: 66px;
      height: 24px;
      line-height: 24px;
      font-size: 14px;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
      text-transform: uppercase;
      border-radius: 30px;
      background-color: #857b65;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.65);
    }
  }
`;

export { stylesFileName, pageStyles };
