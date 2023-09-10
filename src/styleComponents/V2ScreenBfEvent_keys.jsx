
import styled from "styled-components";

const V2ScreenBfEvent_keys = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";

.popup-layer .m-popup.bf-event__buy-keys-pop{
    width: 1000px; height: 472px; left: 100px; top: 84px;
    &:before{
        content: ""; background-color: #b7a497;
    }
    .keys-card-box{
        width: 230px; height: 380px; position: relative; display: inline-block; top: 62px;
        @include prefix(border-radius, 10px); margin: 10px 5px 10px 5px; box-shadow: 0 0 10px #332821;
        background: linear-gradient(0deg, #8e7453 0%, #e3c7a3 50%, #8f7553 70%, #ae916a 85%, #8e7453 100%);
        &:before{
            content: ""; width: 224px; height: 374px; position: absolute; top: 3px; margin-left: -112px;
            @include prefix(border-radius, 8px);
            background: linear-gradient(0deg, #af946f 0%, #dbbf9c 31%, #8f7553 100%);
            box-shadow: inset 0 0 6px #5a472f;
        }
        .keys-but-box{
            width: 180px; height: 180px; position: absolute; top: 15px; left: 25px;
            img{
                width: 100%;
            }
        }
        .keys-price, .keys-bonus{
            width: 200px; height: 50px; position: absolute; top: 200px; margin-left: 15px;
            font-size: 40px; color: #50402a; text-shadow: 0 0 2px rgba(0, 0, 0, 0.5); font-weight: bold;
            line-height: 50px;
            text-transform: uppercase;
        }
        .keys-bonus{
            height: 32px; top: 246px; font-size: 18px; color: #b51212; 
            text-shadow: 0 1px 2px #fff; line-height: 32px; text-transform: uppercase;
        }
        .keybtn-box{
            width: 174px; height: 56px; background: linear-gradient(0deg, #917858 0%, #c8ac88 100%);
            @include prefix(border-radius, 12px); position: absolute; top: 294px; margin-left: 28px;
            box-shadow: inset 0 0 4px #907654;
            .keybtn{
                width: 148px; height: 38px; display: inline-block; background-color: red; position: relative; top: 9px;
                @include prefix(border-radius, 6px);
                background: linear-gradient(28deg, #e9c756 0%, #edd474 33%, #e2c359 78%, #edd474 100%);
                box-shadow: inset 0 -4px 0 #c57b21; cursor: pointer;
                .coron-icon{
                    width: 30px; height: 30px; position: relative; display: inline-block; background-color: #3c3934;
                    @include prefix(border-radius, 100%); top: 2px;
                    &:before{
                        content: ""; width: 28px; height: 21px; background-image: url(~imgPath/spinner-round-diamond.png); background-size: 100%;
                        display: block; position: absolute; top: 5px; left: 1px;
                    }
                    &.diamond{
                        &:before{
                            background-image: url(~imgPath/80-topup.png); top: 2px; height: 28px;
                        }
                    }

                }
                .coron-price{
                    display: inline-block; position: relative; color: #3c3b38; font-size: 20px; font-weight: bold; top: -5px;
                }
                &:hover{
                    box-shadow:
                        inset 0 -4px 0 #c57b21, 0 0 5px #e8d0b2, 0 0 9px #e8d0b2, 0 0 11px #e8d0b2;
                }
                &:active{
                    box-shadow:
                        inset 0 0 6px #975b10, inset 0 -2px 0 #975b10, 0 0 5px #e8d0b2, 0 0 9px #e8d0b2, 0 0 11px #e8d0b2;
                    .coron-price{top: -3px;}
                    .coron-icon{top: 4px;}
                }
                &.disable{
                    cursor: not-allowed; filter: grayscale(100%);
                    &:hover{box-shadow: inset 0 -4px 0 #c57b21;}
                    &:active{
                        .coron-price{top: -5px;}
                        .coron-icon{top: 2px;}
                    }
                }
            }
        }
    }
}
`;

export default V2ScreenBfEvent_keys;
