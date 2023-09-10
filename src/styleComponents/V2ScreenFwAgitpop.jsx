
import styled from "styled-components";

const V2ScreenFwAgitpop = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";


.popup-layer .m-popup.fw-agitpop{
    width: 980px; height: 550px; left: 110px; top: 45px;
    .title{color: #572f14;}
    .color-box{
        background: linear-gradient(0deg, #645143 0%, #8e8177 100%);
        &:before{display: none};
        &:after{display: none};
    }
    .fw-agit-girl{
        width: 303px; height: 462px; position: absolute; bottom: 20px; left: 0;
        background-image: url(~imgPath/break-girl20.png);
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .fw-agitpop-content-box{
        width: 680px; height: 440px; position: absolute; top: 80px; right: 30px;
        .fw-agitpop-map{
            width: 680px; height: 260px; position: absolute; top: 0; left: 0;
            background-image: url(~imgPath/v2-fw-map-bg-agit.jpg);
            background-size: 100%;
            background-repeat: no-repeat;
        }
        .fw-agitpop-reward-box{
            width: 690px; height: 80px; position: absolute; top: 278px; left: -5px;
            font-size: 0;
            .fw-agitpop-reward{
                width: 80px; height: 80px; position: relative; display: inline-block;
                @include background-gold;
                @include prefix(border-radius, 6px);
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.55);
                margin: 0 3px;
                &:before{
                    content: ""; width: 76px; height: 76px; position: absolute; top: 2px; left: 2px;
                    @include prefix(border-radius, 6px);
                    background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
                    box-shadow: inset 0 0 6px 0 rgba(0, 0, 0, 0.55);
                }
                .fw-reward-pic{
                    width: 70px; height: 70px; position: absolute; top: 5px; left: 5px;
                }
                .fw-reward-num{
                    width: 60px; height: 20px; position: absolute; bottom: 2px; left: 10px;
                    background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
                    @include prefix(border-radius, 20px);
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.35);
                    color: #000; font-size: 12px; font-weight: bold; text-align: center;
                    line-height: 20px;
                }
            }
        }
        .color-btn{
            width: 210px; position: absolute; bottom: 10px; left: 235px;
        }
    }
    .fw-agitpop-ballon{
        width: auto; height: auto; position: absolute;
        background-color: #fff;
        @include prefix(border-radius, 20px);
        border: 2px solid #000;
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.35);
        color: #000; font-size: 16px; font-weight: bold; text-transform: uppercase;
        padding: 16px 36px;
        &.b1{top: 90px; left: 140px;}
        &.b2{top: 70px; right: 80px;}
        &.b3{top: 280px; left: 130px;}
        &.b4{top: 290px; right: 40px;}
    }










}



.color-btn{
    width: 90px; height: 50px; position: relative; display: inline-block;
    @include prefix(border-radius, 6px);
    background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
    box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.25), 0 2px 4px 0 rgba(0,0,0,0.55);
    cursor: pointer;
    .color-btn-text{
        top: 15px; position: relative; color: #fff; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
        text-align: center; font-weight: bold; text-transform: uppercase; font-size: 14px;
    }
    &:active{
        box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.20), inset 0 2px 2px rgba(0, 0, 0, 0.20);
        .color-btn-text{top: 16px;}
    }
    &.blue{background: linear-gradient(0deg, #62a3e5 0%, #b4d7fa 100%);}
    &.green{background: linear-gradient(0deg, #7cbc30 0%, #BAF279 100%);}
    &.orage{background: linear-gradient(0deg, #d67503 0%, #fdd2a0 100%);}
    &.diamond{background: linear-gradient(0deg, #4b97bf 0%, #7AE2FF 100%); }
}
`;

export default V2ScreenFwAgitpop;
