
import styled from "styled-components";

const ScreenInfoPop = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";

body .main .popup-layer {
    .m-popup.info-pop {
        height: unset;
        width: 760px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        &:before {
            background: linear-gradient(#564141, #9c8b7c);
            background: url(~imgPath/tabs-menu-bg.png),
                linear-gradient(180deg, #353535, #6b6a68);
            background-position: center bottom, 0;
            background-repeat: no-repeat;
            background-size: 103% auto, 100%;
            background-blend-mode: luminosity;
        }
        &:after {
            content: "";
            width: 330px;
            height: 303px;
            position: absolute;
            right: -173px;
            top: 50%;
            transform: translateY(17px);
            background-image: url(~imgPath/break-girl634.png);
            background-repeat: no-repeat;
            background-position: top center;
            background-size: 100%;
            pointer-events: none;
        }
        .title {
            color: #3c3934;
        }
        .content {
            margin: 30px;
            margin-top: 80px;
            .text-box {
                border-radius: 5px;
                padding: 20px;
                height: 284px;
                overflow: auto;
                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                    border-radius: 10px;
                    background-color: #48413e;
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
                .text {
                    color: #fff;
                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
                    font-size: 16px;
                    text-align: left;
                    height: inherit;
                    display: table-cell;
                    vertical-align: middle;
                }
            }
            .color-btn.close {
                margin-top: 20px;
                width: 180px;
                height: 50px;
                .color-btn-text {
                    font-size: 18px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75),
                        0 1px 4px rgba(0, 0, 0, 0.4);
                }
            }
        }
    }
}

body .main.world3 .popup-layer {
    .m-popup.info-pop {
        height: 530px;
        width: 760px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        &:after {
            content: "";
            width: 330px;
            height: 303px;
            position: absolute;
            right: -173px;
            bottom: -55px;
            background-image: url(~imgPath/break-girl634.png);
            background-repeat: no-repeat;
            background-position: top center;
            background-size: 100%;
        }
        .content {
            margin: 30px;
            margin-top: 80px;
            .text-box {
                background: linear-gradient(180deg, #2a235a, #473b93);
                box-shadow: 0px 1px 2px rgba(255, 255, 255, 0.25),
                    inset 0px 1px 6px rgba(0, 0, 0, 0.35);
                border-radius: 5px;
                padding: 30px;
                .text {
                    color: #fff;
                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
                    font-size: 16px;
                    text-align: left;
                }
            }
            .color-btn.close {
                margin-top: 20px;
                width: 180px;
                height: 50px;
                .color-btn-text {
                    font-size: 18px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75),
                        0 1px 4px rgba(0, 0, 0, 0.4);
                }
            }
        }
    }
}

`;

export default ScreenInfoPop;
