import { styled, css } from "styled-components";

const V2ScreenCwMapWarpopStyles = css`
    body .main{
        .cw-warpop-box-all{
            width: 330px; height: 580px; position: absolute; top: 10px; right: 10px;
            background: linear-gradient(180deg, #a38e81 0%, #eeded2 100%);
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.75);
            &:before{
                content: ""; width: 322px; height: 572px; position: absolute; top: 4px; left: 4px;
                background: linear-gradient(0deg, #a38e81 0%, #eeded2 100%);
            }
            .cw-warpop-box-leader-box{
                width: 300px; height: 100px; position: absolute; left: -300px; top: 240px;
                background: linear-gradient(90deg, #3fbae7 0%, #007aa7 98%, #3fbae7 100%);
                border-radius: 20px 0 0 20px;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.75);
                .cw-warpop-box-leader-text{
                    width: 100%; height: 26px; position: relative; top: 10px;
                    color: #fff; font-weight: bold; font-size: 18px;
                    text-transform: uppercase;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
                }
                .color-btn.green{
                    width: 220px; height: 50px; top: 12px;
                    .color-btn-text{
                        top: 6px; font-size: 16px;
                    }
                    .color-btn-text2{
                        top: 8px; position: relative; color: #fff; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
                        text-align: center; font-weight: bold; text-transform: uppercase; font-size: 10px;
                    }
                    &:active{
                        .color-btn-text{top: 8px;}
                        .color-btn-text2{top: 10px;}
                    }
                }
            }
            .cw-warpop-box-pic{
                width: 310px; height: 210px; position: absolute; top: 10px; left: 10px;
                overflow: hidden;
                border-radius: 15px;
            }
            .cw-warpop-box-name{
                width: 250px; height: 30px; position: absolute; top: -5px; left: 40px;
                background: linear-gradient(180deg, #4f4339 0%, #352c25 100%);
                color: #fff; line-height: 30px; font-weight: bold; text-align: center;
                text-transform: uppercase;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
            }
            .cw-warpop-effect-box-all{
                width: 310px; height: 86px; position: absolute; top: 225px; left: 10px;
                background-color: #6e5d52;
                .cw-warpop-effect-box{
                    width: 155px; height: 86px; position: absolute; top: 0; left: 0;
                    background-color: #54463c;
                    .cw-warpop-effect-name{
                        width: 155px; height: 26px; position: absolute; top: 0; left: 0;
                        background: linear-gradient(180deg, #4f4339 0%, #352c25 100%);
                        color: #fff; font-size: 12px; font-weight: bold;
                        text-transform: uppercase; text-align: center; line-height: 26px;
                    }
                    .cw-warpop-effect-text-box{
                        width: 145px; height: 50px; position: absolute; top: 26px; left: 0;
                        display: table; padding: 5px;
                        .cw-warpop-effect-text{
                            width: 100%; height: 100%; position: relative; display: table-cell;
                            vertical-align: middle;
                            color: #f0e3a8; font-size: 14px; font-weight: bold;
                            text-transform: uppercase; text-align: center;
                        }
                    }
                }
                .cw-warpop-income-box{
                    width: 155px; height: 86px; position: absolute; top: 0; left: 155px;
                    .cw-warpop-income-name{
                        width: 155px; height: 26px; position: absolute; top: 0; left: 0;
                        background: linear-gradient(180deg, #4f4339 0%, #352c25 100%);
                        color: #fff; font-size: 12px; font-weight: bold;
                        text-transform: uppercase; text-align: center; line-height: 26px;
                    }
                    .cw-warpop-income-text{
                        width: 155px;
                        height: auto;
                        position: relative;
                        margin-top: 5px;
                        top: 50%;
                        transform: translate(0, -50%);
                        vertical-align: middle;
                        color: #f0e3a8;
                        font-size: 14px;
                        line-height: 12px;
                        font-weight: bold;
                        text-transform: uppercase; text-align: center;
                        
                        .ic-contrip{
                            width: 26px; height: 26px; position: relative; display: inline-block;
                            background-image: url(../img/ic-contrip.png);
                            background-repeat: no-repeat;
                            background-size: 100%;
                            margin-right: 5px; top: 6px;
                        }
                    }
                }
            }
            .cw-warpop-at-def-box-all{
                width: 310px; height: 190px; position: absolute; top: 316px; left: 10px;
                background-color: #6e5d52;
                .cw-warpop-def-box{
                    width: 80px; height: 126px; position: absolute; top: 0; left: 0;
                    background-color: #54463c;
                    .cw-warpop-def-name{
                        width: 100%; height: 26px; position: absolute; top: 0; left: 0;
                        background: linear-gradient(180deg, #4f4339 0%, #352c25 100%);
                        color: #fff; font-size: 12px; font-weight: bold;
                        text-transform: uppercase; text-align: center; line-height: 26px;
                    }
                    .cw-warpop-def-pic{
                        width: 80px; height: 80px; position: absolute; top: 26px; left: 0;
                    }
                    .cw-warpop-def-num{
                        width: 80px; height: 20px; position: absolute; bottom: 0; left: 0;
                        color: #f0e3a8; font-size: 12px; font-weight: bold;
                        text-align: center; line-height: 20px;
                    }
                }
                .cw-warpop-at-box-all{
                    width: 230px; height: 126px; position: absolute; top: 0; right: 0;
                font-size: 0;
                    .cw-warpop-at-name{
                        width: 100%; height: 26px; position: absolute; top: 0; left: 0;
                        background: linear-gradient(180deg, #4f4339 0%, #352c25 100%);
                        color: #fff; font-size: 12px; font-weight: bold;
                        text-transform: uppercase; text-align: center; line-height: 26px;
                    }
                    .cw-warpop-at-box{
                        width: 76px; height: 100px; position: relative; display: inline-block; top: 26px;
                        .cw-warpop-at-pic{
                            width: 80px; height: 80px; position: absolute; top: 2px; left: 0;
                        }
                        .cw-warpop-at-num{
                            width: 80px; height: 20px; position: absolute; bottom: 0; left: 0;
                            color: #f0e3a8; font-size: 12px; font-weight: bold;
                            text-align: center; line-height: 20px;
                        }
                    }
                }
                .cw-warpop-army-power-box{
                    width: 290px; height: 50px; position: absolute; bottom: 5px; left: 10px;
                    background-color: #836f61;
                    border-radius: 30px;
                    .cw-warpop-army-power-text{
                        width: 290px; height: 26px; position: absolute; top: 5px; left: 0;
                        color: #fff; font-size: 14px; font-weight: bold; text-transform: uppercase;
                    }
                    .cw-warpop-army-power-num{
                        width: 290px; height: 26px; position: absolute; bottom: 5px; left: 0;
                        color: #a8f0ae; font-size: 26px; font-weight: bold; text-transform: uppercase;
                    }
                }
                .cw-warpop-gr-con-power-box{
                    width: 300px; height: 50px; position: absolute; bottom: 5px; left: 5px;
                    font-size: 0; display: none;
                    .cw-warpop-gr-box{
                        width: 140px; height: 50px; position: relative; display: inline-block;
                        background-color: #836f61;
                        border-radius: 30px;
                        margin: 0 5px;
                        .cw-warpop-army-power-text{
                            width: 120px; height: 30px; position: absolute; top: 5px; left: 10px;
                            color: #fff; font-weight: bold; text-transform: uppercase;
                            font-size: 10px;
                        }
                        .cw-warpop-army-power-num{
                            width: 120px; height: auto; position: absolute; bottom: 0; left: 10px;
                            color: #a8f0ae; font-weight: bold; 
                            font-size: 18px;
                        }
                    }
                }
                &.defence{
                    .cw-warpop-gr-con-power-box{display: block;}
                    .cw-warpop-army-power-box{display: none;}
                }
            }
            .color-btn.green,
            .color-btn.blue{
                width: 152px; height: 50px; top: 514px;
                .color-btn-text{
                font-size: 16px; top: 14px;
                }
                &:active{
                    .color-btn-text{top: 16px;}
                }
            }
            .cw-warpop-close{
                width: 30px; height: 30px; position: absolute; top: -5px; right: -5px;
                background: linear-gradient(180deg, #8cdd55 0%, #43a700 50%, #8cdd55 100%);
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.65);
                cursor: pointer; z-index: 999;
                &:before {
                    content: "\2716"; font-size: 26px; color: #fff;
                    line-height: 30px; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.65);
                }
                &:after {
                    content: ""; width: 24px; height: 7px; position: absolute; top: 3px; left: 3px;
                    background: rgba(255, 255, 255, 0.25);
                    border-radius: 5px;
                }
            }
            &.left{
                right: 860px;
                .cw-warpop-box-leader-box{
                    left: 330px;
                    background: linear-gradient(-90deg, #3fbae7 0%, #007aa7 98%, #3fbae7 100%);
                    border-radius: 0 20px 20px 0;
                }
            }
        }
    }
`;

const V2ScreenCwMapWarpop = styled.div`
  ${V2ScreenCwMapWarpopStyles}
`;

export { V2ScreenCwMapWarpopStyles, V2ScreenCwMapWarpop };
