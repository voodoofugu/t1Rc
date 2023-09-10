
import styled from "styled-components";

const V2ScreenCwGuildorder = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";


.popup-layer .m-popup.guildorder{
    width: 730px; height: 570px; left: 235px; top: 25px;
    .title{color: #572f14;}
    .color-box{
        background: linear-gradient(136deg, #8e7453 0%, #e3c7a3 50%, #ae916a 85%, #8f7553 100%);
        &:before{display: none};
        &:after{display: none};
    }
    .cw-clan-order-box-all{
        width: 670px;
        height: 360px;
        position: absolute;
        top: 120px;
        left: 30px;
        background-color: #cbaa81;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
        .cw-clan-order-btn-box{
            width: 520px;
            height: 40px;
            position: absolute;
            top: -50px;
            left: 75px;
            font-size: 0;
            .color-btn{
                width: 250px; height: 40px; top: 0;
                @include prefix(border-radius, 0);
                background: linear-gradient(0deg, #65779c 0%, #9caac8 100%);
                box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.25), 0 2px 4px 0 rgba(0,0,0,0.55);
                margin: 0 5px;
                .color-btn-text{
                    top: 6px; font-size: 12px;
                }
                &:active{
                    box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.20), inset 0 2px 2px rgba(0, 0, 0, 0.20);
                    .color-btn-text{top: 7px;}
                }
            }
        }
        .cw-clan-order-ab-box-all{
            width: 650px;
            height: 160px;
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 0;
            background-color: #f3d6b0;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
            .cw-clan-order-ab-box{
                width: 140px; height: 150px; position: relative; display: inline-block;
                cursor:pointer;
                margin: 0 10px;
                .cw-clan-order-ab-pic{
                    width: 120px; height: 120px; position: absolute; top: 5px; left: 10px;
                    img{width: 120px;}
                }
                .cw-clan-order-ab-prg-box{
                    width: 140px; height: 16px; position: absolute; bottom: 5px;
                    background-color: #544746;
                    .cw-clan-order-ab-prg{
                        width: 100%; height: 100%; position: absolute;
                        background: linear-gradient(0deg, #17a52b 0%, #74f886 100%);
                    }
                    .cw-clan-order-ab-prg-text{
                        width: 100%; height: 16px; position: absolute;
                        color: #fff; font-size: 14px; font-weight: bold; line-height: 16px;
                        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
                    }
                }
            }
        }
        .cw-clan-order-rew-box-all{
            width: 580px;
            height: 190px;
            position: absolute;
            bottom: 0px;
            left: 45px;
            .cw-clan-order-rew-text{
                width: 100%; height: auto; position: absolute; top: 10px;
                color: #544746; font-size: 18px; font-weight: bold; text-transform: uppercase;
            }
            .cw-clan-order-rew-box{
                width: 100%; height: 80px; position: absolute; top: 40px; font-size: 0;
                .cw-clan-order-rew{
                    width: 80px; height: 80px; position: relative; display: inline-block;
                    background: linear-gradient(180deg, #c68300 0%, #f4dfb6 50%, #c68200 70%, #fad489 85%, #c78302 100%);
                    @include prefix(border-radius, 8px);
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                    margin: 0 5px;
                    &:before{
                        content: ""; width: 76px; height: 76px; position: absolute; top: 2px; left: 2px;
                        background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
                        @include prefix(border-radius, 6px);
                    }
                    .cw-clan-order-rew-img{
                        width: 70px; height: 70px; position: absolute; top: 5px; left: 5px;
                        img{width: 70px;}
                    }
                    .cw-clan-order-rew-amount {
                        width: 50px;
                        height: 24px;
                        position: absolute;
                        top: 55px;
                        left: 30px;
                        background: linear-gradient(0deg, #996b1d 0%, #e5ca72 50%, #996b1d 100%);
                        -webkit-border-radius: 10px;
                        -moz-border-radius: 10px;
                        -ms-border-radius: 10px;
                        -o-border-radius: 10px;
                        border-radius: 10px;
                        color: #fff;
                        font-size: 14px;
                        font-weight: bold;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
                        line-height: 24px;
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
                    }
                }
            }
            .color-btn.working{
                width: 180px; top: 130px;
                .color-btn-text{
                    font-size: 16px; top: 12px;
                }
                &:active{
                    box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.20), inset 0 2px 2px rgba(0, 0, 0, 0.20);
                    .color-btn-text{top: 13px;}
                }
            }
        }
    }
    .color-btn{
        width: 180px; top: 495px;
        .color-btn-text{
            font-size: 16px; top: 12px;
        }
        &:active{
            box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.20), inset 0 2px 2px rgba(0, 0, 0, 0.20);
            .color-btn-text{top: 13px;}
        }
    }
}



.color-btn{
    width: 90px; height: 50px; position: relative; display: inline-block;
    @include prefix(border-radius, 6px);
    background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
    box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25), 0 2px 4px 0 rgba(0,0,0,0.55);
    cursor: pointer;
    .color-btn-text{
        top: 10px; position: relative; color: #fff; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
        text-align: center; font-weight: bold; text-transform: uppercase; font-size: 14px;
    }
    &:active{
        box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.20), inset 0 2px 2px rgba(0, 0, 0, 0.20);
        .color-btn-text{top: 12px;}
    }
    &.blue{background: linear-gradient(0deg, #62a3e5 0%, #b4d7fa 100%);}
    &.green{background: linear-gradient(0deg, #7cbc30 0%, #BAF279 100%);}
    &.orage{background: linear-gradient(0deg, #d67503 0%, #fdd2a0 100%);}
    &.diamond{background: linear-gradient(0deg, #4b97bf 0%, #7AE2FF 100%); }
}


.cw-clan-logo-bg, .cw-clan-logo{
    width: 70px; height: 70px; position: absolute; top: 5px; left: 92px;
    img{width: 70px;}
    .cw-clan-logo{
        top: 0; left: 0;
    }
}
`;

export default V2ScreenCwGuildorder;
