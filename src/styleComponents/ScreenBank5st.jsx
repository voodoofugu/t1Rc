import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ScreenBank5stStyles = css`
    .left-side .left-panel .tab-panel.bank-panel {
        .bank-subwin.top-up {
            border-color: #fac022;
        }
        .bank-tabs-all {
            .bank-tab {
                &.top-up {
                    color: #ffb1fc;
                    &.selected {
                        background: #fac022;
                        color: #312231;
                    }
                }
            }
        }
    }
    .corona-box {
        height: 398px;
        position: relative;
    }
    .pack-box {
        width: 184px;
        height: 380px;
        position: relative;
        display: inline-block;
        margin: 9px 4px 9px 4px;
        border-radius: 10px;
        background: linear-gradient(
            0deg,
            #843e04 0%,
            #c99647 15%,
            #c99026 35%,
            #f7f7f7 50%,
            #e3b949 65%,
            #fdf992 80%,
            #b85a0d 100%
        );
        box-shadow: 0 2px 0 #000, 0 1px 10px #000;
        // border: 2px linear-gradient(0deg, #fff 0%, #000 100%);
        &:before {
            content: "";
            width: 178px;
            height: 374px;
            position: absolute;
            top: 3px;
            margin-left: -89px;
            background: linear-gradient(
                0deg,
                #cf8129 0%,
                #f5dca9 2%,
                #f5cf84 5%,
                #f5e7b8 16%,
                #f7d272 40%,
                #f7f1d2 45%,
                #f7cf77 46%,
                #f7eed0 47%,
                #f2f1d8 60%,
                #dda246 82%,
                #6a2c21 100%
            );
            border-radius: 7px;
            box-shadow: inset 0 0 4px 1px #5b3e19;
        }
        .cor-button {
            top: 318px;
            right: 27px;
            .cor-but-price,
            .cor-but-price-new {
                margin: 0 2px 0 2px;
                font-size: 18px;
                color: red;
                display: inline-block;
                text-decoration: line-through;
            }
            .cor-but-price-new {
                font-size: 22px;
                text-decoration: none;
                color: #4a3a08;
            }
        }
    }
    .corons {
        width: 170px;
        height: 170px;
        background-image: url(../img/cor-1.png);
        background-size: 170px;
        position: absolute;
        top: 44px;
        margin-left: 7px;
        &.lvl2 {
            background-image: url(../img/cor-2.png);
        }
        &.lvl3 {
            background-image: url(../img/cor-3.png);
        }
        &.lvl4 {
            background-image: url(../img/cor-4.png);
        }
        &.lvl5 {
            background-image: url(../img/cor-5.png);
        }
    }
    .cor-vip {
        width: 60px;
        height: 90px;
        background-image: url(../img/cor-vip-zn.png);
        background-size: 60px;
        position: absolute;
        top: -8px;
        margin-left: 120px;
        .vip-text,
        .vip-plus {
            position: relative;
            top: 6px;
            font-size: 22px;
            font-weight: bold;
            color: #2f1b02;
            text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
        }
        .vip-plus {
            top: 18px;
            font-size: 16px;
            color: #fdfa9d;
            text-shadow: 0 1px 2px #000;
        }
        &.upgrade {
            background-image: url(../img/cor-vip-zn-1.png);
            &:before {
                content: "";
                width: 40px;
                height: 50px;
                background-image: url(../img/cor-arrow-up.png);
                background-size: 40px;
                position: absolute;
                top: 3px;
                margin-left: -20px;
            }
            .vip-text,
            .vip-plus {
                position: relative;
                top: 55px;
                font-size: 22px;
                font-weight: bold;
                color: #2f1b02;
                text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
            }
            .vip-plus {
                top: 8px;
                font-size: 16px;
                color: #fdfa9d;
                text-shadow: 0 1px 2px #000;
            }
        }
    }
    .cor-timer {
        width: 80px;
        height: 80px;
        position: absolute;
        top: -2px;
        margin-left: 4px;
        background-image: url(../img/offer-bk-sm.png);
        background-size: 80px;
        .cor-percent {
            height: 24px;
            font-size: 20px;
            font-weight: bold;
            color: #fff000;
            text-shadow: 0 2px 4px #570000;
        }
        .cor-time,
        .cor-time-text {
            width: 60px;
            height: 18px;
            position: absolute;
            top: 26px;
            margin-left: 8px;
            background: #640706;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            color: #ffa;
            text-shadow: 0 2px 1px #300;
            line-height: 18px;
        }
        .cor-time-text {
            top: 42px;
            background: none;
            font-size: 10px;
            text-transform: uppercase;
        }
    }
    .cor-hot-box,
    .cor-choise-box {
        width: 90px;
        height: 90px;
        position: absolute;
        top: 140px;
        margin-left: 98px;
        background-image: url(../img/cor-hot-zn.png);
        background-size: 90px;
        text-transform: uppercase;
        .hot-text,
        .choice-text {
            width: 80px;
            margin: 5px;
            font-size: 20px;
            font-weight: bold;
            color: #fff000;
            text-shadow: 0 2px 4px #570000;
            top: 28px;
            position: relative;
        }
        .choice-text {
            font-size: 14px;
            text-shadow: 0 2px 4px #1d3111;
            top: 22px;
            line-height: 16px;
        }
    }
    .cor-choise-box {
        background-image: url(../img/cor-choice-zn.png);
        font-size: 14px;
        font-weight: bold;
        color: #fff000;
        text-shadow: 0 2px 1px #000;
        line-height: 18px;
    }
    .cor-price-box {
        width: 150px;
        height: 70px;
        position: absolute;
        top: 230px;
        margin-left: 17px;
        .cor-price,
        .cor-price-new {
            font-size: 36px;
            font-weight: bold;
            color: #4a3a08;
            text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
        }
        .cor-price-new {
            font-size: 18px;
            &.oldprice {
                text-decoration: line-through;
                color: red;
            }
        }
    }
    .cor-button {
        display: inline-block;
        min-width: 130px;
        height: 42px;
        border-radius: 9px;
        position: absolute;
        top: 257px;
        right: 37px;
        line-height: 42px;
        box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
            inset 0 -3px 0px #c87725, 0 0 3px #3d3737, 0 0 7px #000,
            inset 0 0 3px #603806;
        background: linear-gradient(45deg, #e8c34e, #f1da7c, #cfa831, #fbf1d8);
        color: #3c3934;
        cursor: pointer;
        text-align: center;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
        color: #4a3a08;
        text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
        &:hover {
            box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                inset 0 -3px 0px #c87725, 0 0 12px #ff0, 0 0 5px #ffc,
                inset 0 0 10px #ffc, inset 0 0 3px #603806;
        }
        &:active {
            box-shadow: inset 0 -19px 5px rgba(200, 119, 37, 0.59),
                inset 0 -2px 0px #c87725, inset 0 1px 1px #c87725, 0 0 10px #ff0,
                inset 0 0 10px #ffc, inset 0 0 3px #603806;
            line-height: 44px;
            .price-nutaku {
                top: 5px;
            }
            .price-nutaku-text {
                top: -3px;
            }
        }
    }

    /* Sale popup */
    .main .popup-layer .m-popup.sale25x {
        display: block;
        width: 720px;
        left: 152px;
        right: 152px;
        margin: auto;
        top: 35px;
        .title {
            color: #900;
        }
        .content.sale.sale25 {
            display: block;
            width: 700px;
            height: 438px;
            background: url(../img/girl_banner001.jpg);
            background-size: 100% 100%;
            .btn-simple-gold {
                top: 380px;
            }
        }
        .pack-box {
            position: absolute;
            right: 35px;
            bottom: 26px;
        }
        .store-item-add-box {
            margin-left: 420px;
            top: 0px;
        }
    }
    /* Sale banner */
    body .main .quests .quest .coronatext {
        display: block;
        width: 100%;
        text-align: center;
        position: absolute;
        top: 0px;
        // margin-left: 13px;
        font-size: 18px;
        font-weight: bold;
        color: #f20000;
        text-shadow: 0 0 2px #900, 0 0 2px #900, 0 0 2px #900, 0 0 4px #fff,
            0 0 4px #fff, 0 0 4px #fff, 0 0 7px #ff0, 0 1px 7px #ff0,
            0 0 7px #ff0, 0 1px 7px #ff0;
    }
`;

const ScreenBank5st = styled.div`
    ${ScreenBank5stStyles}
`;

export { ScreenBank5stStyles, ScreenBank5st };
