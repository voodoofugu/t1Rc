
import styled from "styled-components";

const V2ScreenCwGuildupgrade = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";


.popup-layer .m-popup.guildupgrade{
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
        .cw-clan-upgrade-holder {
            position: absolute;
            width: 520px;
            left: 70px;
            height: 350px;
            top: 10px;
        }
        .cw-clan-upgrade-ab-box-all{
            width: 230px; height: 160px; position: absolute; top: 0px; left: 10px; font-size: 0;
            background-color: #f3d6b0;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
            .cw-clan-order-ab-box{
                width: 210px; height: 150px; position: relative; display: inline-block;
                margin: 0 10px;
                .cw-clan-order-ab-text{
                    width: 100%; height: auto;
                    //position: absolute;
                    bottom: 5px;
                    color: #544746; font-size: 14px; font-weight: bold; text-transform: uppercase;
                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
                    .cw-clan-order-ab-text-rarity {
                        margin-right: 5px;
                        &.common {color: #8e8e8e;}
                        &.uncommon {color: #549c5c;}
                        &.rare {color: #567fb1;}
                        &.epic {color: #ce7f08;}
                    }
                    margin-bottom: 8px;
                }

            }
            &.right{
                left: 290px;
            }
        }
        .cw-clan-upgrade-ab-box-str{
            width: 20px; height: 62px; position: absolute; top: 50px; left: 258px;
            background-image: url(~imgPath/unipop-gold-arrow.png);
            background-size: 100%;
            background-repeat: no-repeat;
        }
        .cw-clan-order-don-box-all{
            width: 500px; height: 180px; position: absolute; bottom: 5px; left: 15px;
            .cw-clan-order-don-box{
                width: 220px; height: 45px; position: absolute; top: 5px; left: 140px;
                .cw-clan-order-don-text{
                    width: 100%; height: auto; position: absolute; text-align: center;
                    color: #544746; font-size: 16px; font-weight: bold; text-transform: uppercase;
                }
                .cw-clan-order-don{
                    width: 220px; height: 24px; position: absolute; bottom: 0;
                    background-color: #544746;
                    @include prefix(border-radius, 20px);
                    .cw-clan-order-don-num{
                        width: 100%; height: 24px; position: absolute; 
                        color: #ffcf4b; font-size: 16px; font-weight: bold; line-height: 24px;
                        &:before{
                            content: ""; width: 24px; height: 24px; position: relative; top: -2px; display: inline-block; vertical-align: middle;
                            background-image: url(~imgPath/v2-cw-clan-res.png);
                            background-size: 100%;
                            background-repeat: no-repeat;
                            margin: 0 4px;
                        }
                    }
                }
                &.gold{top: 58px;}
            }
            .cw-clan-order-btn-don-box{
                width: 650px; height: 50px; position: absolute; bottom: 5px; font-size: 0; left: -75px;
                .color-btn.donate{
                    width: 100px; top: 0; margin: 0 10px;
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

export default V2ScreenCwGuildupgrade;
