
import styled from "styled-components";

const V2ScreenCwGuildrename = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";


.popup-layer .m-popup.guildrename{
    width: 590px; height: 320px; left: 305px; top: 160px;
    .title{color: #572f14;}
    .color-box{
        background: linear-gradient(136deg, #8e7453 0%, #e3c7a3 50%, #ae916a 85%, #8f7553 100%);
        &:before{display: none};
        &:after{display: none};
    }
    .cw-clan-rename-box-all{
        width: 530px; height: 210px; position: absolute; top: 80px; left: 30px;
        background-color: #cbaa81;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
        .cw-clan-settings-name-box{
            width: 460px; height: 30px; position: absolute; top: 70px; left: 35px;
            .cw-clan-settings-name{
                width: 420px; height: 30px; position: absolute;
                background-color: #fff;
                color: #544746; font-size: 18px; font-weight: bold; line-height: 30px;
                box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.35);
            }
            .cw-clan-edit{
                width: 400px; height: 30px; position: absolute; left: 10px; text-transform: capitalize;
                border: none; background-color: rgba(255, 255, 255, 0.0);
                line-height: 30px; text-shadow: 0 0 10px rgba(0, 0, 0, 0.75); text-align: center; font-size: 18px; 
                color: #544746;
            }
            .cw-clan-settings-name-btn{
                width: 34px; height: 34px; position: absolute; top: -2px; right: 0; cursor: pointer;
                background-image: url(~imgPath/btn-edit-small.png); background-size: 100%;
                &:active{
                    top: -1px; 
                }
            }
        }
        .color-btn.rename{
            width: 180px; height: 50px; position: absolute; top: 130px; left: 175px;
            .color-btn-text{
                font-size: 14px; top: 8px;
            }
            .f-diamond{
                &:before{
                    content: ""; width: 30px; height: 30px; position: relative; display: inline-block;
                    background-image: url(~imgPath/ic-diamond.png); background-size: 100%; margin-right: 4px; margin-left: 4px;
                    vertical-align: middle;
                }
            }
            &:active{
                .color-btn-text{top: 9px;}
            }
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

export default V2ScreenCwGuildrename;
