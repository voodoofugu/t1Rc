
import styled from "styled-components";

const ScreenUnipopWavepack10 = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";

.popup-layer .m-popup.unipop-wavepack10{
    display: block; width: 900px; height: 600px; position: absolute; left: 62px; top: 20px;
    .title{
        background: linear-gradient(to right, #fad488, #dd9200, #fad488);
        color: #fff;
    }
    .color-box{
        background-image: url(~imgPath/ts_confirm_bk-1.jpg); background-size: 100%;
        &:before{display: none};
        &:after{display: none};
    }
    .color-box-decor{
        width: 170px; height: 620px; position: absolute; top: -10px; left: -46px;
        background-image: url(~imgPath/unipop-bg1.png); background-size: 100%;
        &:before{
            content: ""; width: 168px; height: 86px; position: absolute; top: 540px; left: 190px;
            background-image: url(~imgPath/unipop-bg2.png); background-size: 100%;
        }
        &:after{
            content: ""; width: 200px; height: 540px; position: absolute; top: 90px; left: 800px;
            background-image: url(~imgPath/unipop-bg3.png); background-size: 100%;
        }
    }
    .unipop-box-content-all{
        width: 850px; height: 500px; position: absolute; top: 74px; left: 24px;
        background: rgba(255, 238, 200, 0.8);
        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.55);
        .unipop-box-left-box{
            width: 190px; height: 500px; position: absolute; top: 0; left: 0;
            background: rgba(230, 181, 84, 0.7);
            box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.35);
            .unipop-scroll-box{
                width: 185px; height: 490px; position: absolute; top: 5px; left: 5px; font-size: 0;
                overflow: hidden; overflow-y: scroll; transform: rotateY(180deg);
                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); border-radius: 10px; background-color: #7c665c;
                }
                &::-webkit-scrollbar {width: 10px;}
                &::-webkit-scrollbar-thumb { 
                    border-radius: 10px; box-shadow: inset 0 0 3px #796b60;
                    background: linear-gradient(to left, #fff, #f5de80, #f4b766, #b26d12);
                }
                .unipop-box{
                    width: 150px; height: 80px; position: relative; display: inline-block; margin: 2px 0 2px 0;
                    transform: rotateY(180deg); top: 0; left: 4px; cursor: pointer;
                    @include prefix(border-radius, 10px);
                    @include background-bronze;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
                    &:before{ 
                        content: ""; width: 146px; height: 76px; position: absolute; top: 2px; left: 2px;
                        background: linear-gradient(0deg, #8e7453 0%, #e3c7a3 100%);
                        @include prefix(border-radius, 8px);
                    }
                    .text{
                        width: 100%; height: 100%; position: relative;
                        color: #fff; font-size: 20px;
                    }
                    .unipop-gold-arrow{
                        width: 20px; height: 62px; position: absolute; top: 9px; left: 148px;
                        background-image: url(~imgPath/unipop-gold-arrow.png); background-size: 100%;
                        visibility: hidden;
                    }
                    .unipop-box-pic{
                        width: 140px; height: 70px; position: absolute; top: 5px; left: 5px;
                        @include prefix(border-radius, 6px); overflow: hidden;
                        img{width: 140px;}
                    }
                    &.select{
                        @include background-gold;
                        &:before{
                            content: ""; background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
                        }
                        .unipop-gold-arrow{visibility: visible;}
                    }
                    &:active{top: 1px;}
                }
                
            }
        }
        .unipop-box-right-box{
            width: 640px; height: 480px; position: absolute; top: 10px; left: 200px;
            .right-box-f{
                width: 640px; height: 480px; position: absolute; top: 0; left: 0;
                background-image: url(~imgPath/ts_confirm_bk-1.jpg); background-size: 100%;
                background-position-y: bottom;
                @include prefix(border-radius, 10px);
                .right-box-f-name-box{
                    width: 640px; height: 50px; position: absolute; top: 0; left: 0;
                    @include background-gold; @include prefix(border-radius, 10px 10px 0 0);
                    color: #3c3934; font-weight: bold; font-size: 26px; line-height: 50px;
                    text-transform: uppercase;
                    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
                }
                .red-timer-box{
                    width: 110px; height: 50px; position: absolute; top: 0; left: 0;
                    background-image: url(~imgPath/timer-back-50.png); background-size: 100%;
                    .time-text, .time{
                        color: #fff000; text-shadow: 0 1px 2px #680000; font-size: 16px; font-weight: bold;
                        position: relative; top: 8px;
                    }
                    .time{
                        color: #fff; font-size: 14px; top: 5px; font-weight: normal;
                    }
                }
                .rew-box-all{
                    width: 350px; height: 330px; position: absolute; top: 60px; right: 20px; 
                    background-color: rgba(199, 90, 47, 0.5);
                    .rew-box{
                        width: 200px; height: auto; position: absolute; top: 130px; left: 75px;
                        .item-box{
                            width: 80px; height: 80px; position: relative; display: inline-block;
                            background: linear-gradient(180deg, #949699 0%, #656769 100%);
                            @include prefix(border-radius, 8px); margin: 8px;
                            box-shadow: inset 0 0 0 2px #cfd1d3, 0 2px 4px 0 #50463f;
                            img{width: 70px; position: absolute; top: 5px; left: 5px;}
                        }
                        .item-count{
                            width: 50px; height: 24px; position: absolute; top: 58px; left: 32px;
                            background: linear-gradient(0deg, #996b1d 0%, #e5ca72 50%, #996b1d 100%);
                            @include prefix(border-radius, 10px);
                            color: #fff; font-size: 16px; font-weight: bold;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
                            line-height: 24px;
                            box-shadow:  0 1px 2px rgba(0, 0, 0, 0.55);
                        }
                    }
                }
                .rew-girl-box{
                    width: 303px; height: 462px; position: absolute; top: 10px; left: 10px;
                    background-image: url(~imgPath/break-girl.png);
                    background-size: 100%;
                    background-repeat: no-repeat;
                    .rew-girl-ballon{
                        width: 420px; height: 50px; position: absolute; top: 60px; left: 240px;
                        background-color: #fff;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
                        @include prefix(border-radius, 50px);
                        z-index: 9999;
                        &:before{
                            content: ""; width: 26px; height: 26px; position: absolute; left: -28px; top: 32px;
                            background-color: #fff;
                            @include prefix(border-radius, 100%);
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
                        }
                        &:after{
                            content: ""; width: 16px; height: 16px; position: absolute; left: -48px; top: 60px;
                            background-color: #fff;
                            @include prefix(border-radius, 100%);
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
                        }
                        .rew-girl-ballon-text{
                            width: 100%; height: auto; position: relative;
                            color: #3c3934; font-size: 18px; font-weight: bold; text-transform: uppercase;
                            line-height: 50px;
                        }
                    }
                }
                .buy-pack-all-box{
                    width: 632px; height: 66px; position: absolute; top: 410px; left: 4px;
                    background-color: #98320d;
                    @include prefix(border-radius, 10px);
                    .new-old-price-box{
                        width: 190px; height: 66px; position: absolute; left: 10px;
                        .old-price, .new-price{
                            width: 100%; height: auto; position: relative; margin: auto; top: 14px;
                            color: #ed997b; font-size: 14px; font-weight: bold; text-transform: uppercase;
                            text-shadow: 0 2px 2px  rgba(0, 0, 0, 0.25);
                        }
                        .new-price{color: #fff000; font-size: 18px;}
                    }
                    .buy-pack-btn{
                        width: 206px; height: 50px; position: relative; margin: auto; top: 8px;
                        background-color: #7cbc30; cursor: pointer;
                        @include prefix(border-radius, 8px);
                        box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25), 0 2px 4px 0 rgba(0, 0, 0, 0.45);
                        font-size: 16px; font-weight: bold; color: #fff; line-height: 50px; text-transform: uppercase;
                        text-shadow: 0 2px 2px rgba(0, 0, 0, 0.45);
                        &:active{top: 9px;}
                    }
                    .value-box{
                        width: 110px; height: 110px; position: absolute; top: -20px; left: 540px;
                        background-image: url(~imgPath/zvezda.png); background-size: 100%;
                        .value-num, .value-text{
                            width: 80px; height: 30px; position: relative; top: 26px; margin: auto;
                            color: #fff; font-size: 28px; font-weight: bold; text-transform: uppercase;
                            text-shadow: 0 2px 2px rgba(0, 0, 0, 0.55);
                        }
                        .value-text{font-size: 18px;}
                    }
                }            
            }
        }
    }
}
.wpck-plus, .wpck-plus1, .wpck-plus2{
    width: 40px; height: 8px; position: absolute;
    background-color: #3d94b3;
    &:before{
        content: ""; width: 8px; height: 40px; position: absolute; top: -16px; left: 16px;
        background-color: #3d94b3;
    }
}
.wpck-plus-text{
    width: 100px; position: absolute;
    color: #3d94b3; font-size: 38px; font-weight: bold; text-transform: uppercase;
}



`;

export default ScreenUnipopWavepack10;
