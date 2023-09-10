
import styled from "styled-components";

const V2ScreenTitansGarage = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";

body .main{ 
    .left-side{
        width: 620px; height: 555px; position: absolute; left: 5px; bottom: 5px;
        .tabs-all-box{
            width: 500px; height: 40px; position: absolute; top: 0; left: 0; font-size: 0;
            .tabs-all{
                width: 118px; height: 40px; position: relative; top: 0; left: 0; display: inline-block;
                margin: 0 2px 0 0; cursor: pointer;
                background-color: #9c8b7c;
                @include prefix(border-radius, 24px 24px 0 0);
                &:before{
                    content: ""; width: 110px; height: 36px; position: absolute; top: 4px; left: 4px;
                    background-color: #544746;
                    @include prefix(border-radius, 20px 20px 0 0);
                    box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.15);
                }
                .tabs-name{
                    width: 60px; height: 40px; position: absolute; right: 14px;
                    color: #fff; font-weight: bold; font-size: 12px; line-height: 44px;
                    text-align: center;
                }
                .tabs-pic{
                    width: 50px; height: 32px; position: absolute; top: 5px; left: 5px;
                    img{width: 50px;}
                }
                &.selected{
                    &:before{
                        content: ""; background-color: #9c8b7c;
                    }
                }
            }
        }
        .left-panel{
            width: 620px; height: 515px; position: absolute; left: 0; top: 40px;
            &:before{
                content: ""; width: 620px; height: 5px; position: absolute; top: 0; left: 0;
                background-color: #9c8b7c; z-index: 999;
            }
            &.wide{
                width: 1106px;
                &:before{content: ""; width: 1102px;}
                .tab-panel-box.at-titans-garage{
                    width: 1098px; height: 511px; position: absolute; top: 0; left: 0;
                    border: solid 4px #9c8b7c; border-top: none;
                    background-color: #9c8b7c;
                    box-shadow: inset 0 0 7px #5f4f4e, inset 0 6px 7px #5f4f4e;

                    &:before{
                        content: "";
                        position: absolute;
                        width: 1080px;
                        height: 490px;
                        top: 13px;
                        left: 9px;
                        background-image: url(~imgPath/titans_bg.jpg);
                    }

                    .titans-garage-scroll-box{
                        overflow-x: scroll;
                        overflow-y: hidden;
                        position: absolute;
                        width: 1062px;
                        height: 472px;
                        top: 22px;
                        left: 18px;

                        &::-webkit-scrollbar-track {
                            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.5);
                            background-color: #473c3c;
                        }
                        &::-webkit-scrollbar {
                            height: 5px;
                            background-color: #9e8b7d;
                        }
                        &::-webkit-scrollbar-thumb {
                            background: linear-gradient(90deg, #ffe199, #f4c657, #f4c657, #ffe199);
                        }
                    }

                    .titans-garage-row{
                        font-size: 0;
                        white-space: nowrap;
                    }

                    .titans-garage-item{
                        display: inline-block;
                        position: relative;
                        width: 286px;
                        height: 460px;
                        @include prefix(border-radius, 8px);
                        background: linear-gradient(0deg, #585c5d, #d3d4d8 20%, #d3d4d8 50%, #565a5b, #a0a4a5, #5a5b5d);

                        &+.titans-garage-item{
                            margin-left: 14px;
                        }

                        .titans-garage-item-inner{
                            position: absolute;
                            top: 4px;
                            left: 4px;
                            width: 278px;
                            height: 452px;
                            background-image: url(~imgPath/titans_enemy_bg.jpg);
                            background-size: 100%;
                            @include prefix(border-radius, 6px);
                            overflow: hidden;
                        }

                        .mech-stats{
                            width: 280px;
                            height: 40px;
                            position: absolute;
                            left: -1px;
                            bottom: 30px;
                            background: linear-gradient(0deg, #e9b13a, #fffd99);

                            .stat{
                                display: inline-block;
                                position: relative;
                                width: 93px;
                                height: 40px;
                                font-size: 14px;
                                padding: 12px 11px 0px 36px;
                                text-align: center;
                                box-sizing: border-box;
                                color: #544746;
                                font-weight: bold;

                                &:before{
                                    content: "";
                                    position: absolute;
                                    top: 8px;
                                    left: 8px;
                                    width: 24px;
                                    height: 24px;
                                    background-repeat: no-repeat;
                                    background-position: center;
                                }

                                &+.stat:after{
                                    content: "";
                                    position: absolute;
                                    left: -1px;
                                    top: 6px;
                                    width: 1px;
                                    height: 30px;
                                    background-color: #5c4b46;
                                }

                                &.qq{
                                    width: 104px;
                                    font-size: 18px;
                                    padding: 10px 11px 0 36px;
                                    &:before{
                                        background-image: url(~imgPath/v2_at_gear.png);
                                    }
                                }
                                &.atk:before{background-image: url(~imgPath/v2_at_magicgun.png);}
                                &.hp:before{background-image: url(~imgPath/v2_at_magic_plate.png);}
                                &.pow:before{background-image: url(~imgPath/v2_at_manabomb.png);}
                            }
                        }
                        .titans-garage-item-image{
                            width: 350px;
                            height: 350px;
                            position: absolute;
                            left: -36px;
                            top: 12px;
                        }
                        .ability{
                            position: absolute;
                            left: 0;
                            top: 356px;
                            width: 278px;
                            height: 26px;
                            background: linear-gradient(0deg, #fab568 0%, #f88703 18%, #f8b365 60%, #f89820 85%, #f9b769 100%);
                            color: #fff;
                            text-align: center;
                            font-weight: bold;
                            font-size: 14px;
                            line-height: 28px;
                            text-transform: uppercase;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                        }
                        .titan-label{
                            position: absolute;
                            left: 0;
                            top: 422px;
                            width: 278px;
                            height: 30px;
                            background: linear-gradient(0deg, #f8b46b, #f98401);
                            color: #5c4b46;
                            font-size: 18px;
                            line-height: 30px;
                            text-align: center;
                            font-weight: bold;
                        }
                        .titan-progress{
                            width: 100%; height: 30px; position: absolute; bottom: 0; left: 0;
                            background: linear-gradient(0deg, #735657 0%, #453434 100%);
                            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
                            .titan-progress__bar{
                                width: 0; height: 30px; position: absolute; top: 0px; left: 0px;
                                @include background-silver;
                                transition: width .3s;
                            }
                            .titan-progress__text{
                                width: 100%; height: 30px; position: relative; text-align: center;
                                color: #fff; font-weight: bold; font-size: 20px; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
                                line-height: 30px; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
                            }
                            &.gold{
                                .titan-progress__bar{
                                    @include background-gold;
                                }
                            }
                        }
                        .event-to-unlock {
                            display: none;
                        }

                        &.locked{
                            .titans-garage-item-inner > div{
                                filter: grayscale(1);
                            }

                            .titans-garage-item-inner > .event-to-unlock{
                                display: block;
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 100%;
                                height: 100%;
                                text-align: center;
                                background-color: rgba(0,0,0,.7);
                                font-size: 16px;
                                color: #fff;
                                white-space: normal;
                                filter: grayscale(0);

                                .text{
                                    margin-top: 190px;
                                    padding: 0 10px;
                                }

                                .color-btn{
                                    position: absolute;
                                    left: 79px;
                                    top: 240px;
                                    width: 120px;
                                }
                            }
                        }
                    }


                    .stars{
                        position: absolute;
                        width: 278px;
                        top: 4px;
                        left: 0;
                        text-align: center;
                        font-size: 0;

                        .star{
                            display: inline-block;
                            background-image: url(~imgPath/./star1.png);
                            background-size: 100%;
                            width: 24px;
                            height: 23px;
                            filter: grayscale(1);

                            &.checked{
                                filter: grayscale(0);
                            }
                        }
                    }

                    .titan-screen{
                        position: absolute;
                        width: 350px;
                        height: 350px;
                        top: 44px;
                        left: 0;

                        img{
                            width: 350px;
                            height: 350px;
                            margin: 0 auto;
                            display: block;
                        }
                    }

                    .btn-close-x{
                        width: 30px; height: 30px; position: absolute; top: -6px; right: -6px;
                        background: linear-gradient(30deg, #876b56, #aa9383, #dfceba);
                        @include prefix(border-radius, 7px);
                        box-shadow: 0 0 7px #000;
                        cursor: pointer;
                        z-index: 999;
                        &:before {
                            content: "\2716"; font-size: 28px; font-weight: bold; color: #600;
                            line-height: 30px; text-shadow: 0 0 2px #fff;
                        }
                        &:after {
                            content: ""; width: 24px; height: 7px; position: absolute; top: 3px; left: 3px;
                            background: rgba(255, 255, 255, 0.25);
                            @include prefix(border-radius, 5px);
                        }
                    }
                    .trophy-res-box-all{
                        width: 370px; height: 45px; position: absolute; top: -42px; right: 36px;
                        background-color: #9c8b7c;
                        @include prefix(border-radius, 10px 10px 0 0);
                        .trophy-res-box{
                            width: 170px; height: 36px; position: absolute; top: 4px; left: 10px;
                            @include background-resourcebg;
                            @include prefix(border-radius, 18px);
                            box-shadow: inset 0 -2px 0 0 rgba(160, 79, 0, 0.55), 0 2px 4px 0 rgba(0, 0, 0, 0.35);
                            .trophy-value{
                                width: 100px; height: 28px; position: absolute; top: 3px; left: 38px;
                                background: linear-gradient(90deg, #f4bf87 0%, #d38632 50%, #92581a 100%);
                                box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25), inset 0 14px 0 rgba(255, 255, 255, 0.15);
                                @include prefix(border-radius, 6px);
                                color: #fff; font-size: 20px; font-weight: bold; line-height: 28px; text-align: center;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                            }
                            .trophy-value-btn-add{
                                width: 32px; height: 36px; position: absolute; top: 0; right: 0;
                                @include prefix(border-radius, 0 18px 18px 0);
                                cursor: pointer;
                                &:before{
                                    content: ""; width: 6px; height: 22px; position: absolute; top: 7px; left: 12px;
                                    background-color: #3c3737;
                                }
                                &:after{
                                    content: ""; width: 22px; height: 6px; position: absolute; top: 15px; left: 4px;
                                    background-color: #3c3737;
                                }
                            }
                            &.gems{
                                &:before{
                                    content: ""; width: 40px; height: 40px; position: absolute; top: -2px; left: -2px;
                                    background-image: url(~imgPath/trophy-bonus-gems.png);
                                    background-size: 100%; background-repeat: no-repeat;
                                }
                            }
                            &.mithril{
                                left: 190px;
                                &:before{
                                    content: ""; width: 40px; height: 40px; position: absolute; top: -2px; left: -2px;
                                    background-image: url(~imgPath/trophy-bonus-gems.png);
                                    background-size: 100%; background-repeat: no-repeat;
                                }
                            }
                        }
                    }
                    .essence-hero-box{
                        width: 240px; height: 45px; position: absolute; top: -42px; right: 36px; background-color: #9c8b7c;
                        @include prefix(border-radius, 10px 10px 0 0);
                        .essence-icon{
                            width: 40px; height: 40px; position: absolute; top: 2px; left: 10px;
                            background-image: url(~imgPath/trophy-bonus-box.png); background-size: 100%;
                        }
                        .essence-coll{
                            width: auto; height: auto; position: absolute; font-size: 20px; color: #fff; line-height: 42px;
                            font-weight: bold; left: 60px; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                        }
                        .essence-plus-btn{
                            width: 36px; height: 36px; position: absolute; top: 3px; right: 3px; display: block;
                            &:before{
                                content: ""; width: 6px; height: 22px; position: absolute; top: 4px; left: 15px;
                                background-color: #3c3737;
                            }
                            &:after{
                                content: ""; width: 22px; height: 6px; position: absolute; top: 12px; left: 7px;
                                background-color: #3c3737;
                            }
                            &:active {
                                &:before{
                                    top: 5px;
                                }
                                &:after{
                                    top: 13px;
                                }
                            }
                        }
                        .essence-plus-open-btn{
                            display: none;
                        }
                        &.open{
                            .essence-plus-btn{display: none;}
                            .essence-plus-open-btn{
                                position: absolute; top: 3px; right: 3px;
                                height: 36px;
                                line-height: 12px;
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
}

`;

export default V2ScreenTitansGarage;
