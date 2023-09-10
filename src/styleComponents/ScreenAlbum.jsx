
import styled from "styled-components";

const ScreenAlbum = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";

.left-side .left-panel .tab-panel.album-panel {
    .album-title {
        display: block;
        width: 275px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #ffeb9a;
        text-shadow: 0 2px 0 #000, 0 2px 7px #000;

        // background: red;
        position: absolute;
        left: 5px;
        top: 5px;
        // font-size:
        &:before,
        &:after {
            content: "";
            display: inline-block;
            width: 10px;
            height: 10px;
            background: linear-gradient(
                60deg,
                #ffeb9a,
                #f1da7c,
                #cfa831,
                #ffeb9a
            );
            position: relative;
            top: -1px;
            @include prefix(border-radius, 100%);
            box-shadow: 0 2px 0 #000, 0 1px 10px #000;
            // z-index: 2;
            margin: 0px 5px;
        }
    }

    .str-nav {
        border-top: 30px solid transparent;
        border-right: 0px;
        border-left: 20px solid #ff0000;
        border-bottom: 30px solid transparent;
        position: absolute;
        top: 446px;
        cursor: pointer;
        &.right {
            margin-left: 952px;
            border-right: 0px;
            border-left: 30px solid #ff0000;
            &:hover {
                border-left: 30px solid #ff9900;
            }
        }
        &.left {
            margin-left: 297px;
            border-left: 0px;
            border-right: 30px solid #ff0000;
            &:hover {
                border-right: 30px solid #ff9900;
            }
        }
        &:active {
            top: 448px;
        }
    }

    .search-box {
        display: block;
        width: 275px;
        height: 35px;
        // background: red;
        position: absolute;
        left: 5px;
        top: 45px;
        margin: 0;
        padding: 0;
        // background: linear-gradient(10deg, #503e1c, #d19501, #503e1c);
        // background: #efd368;
        // background: linear-gradient(to top, #e9c44f, #efd368, #f7eec7);
        // box-shadow: inset 0 5px 5px #f7eec7, 0 3px 0px #3d3737, inset 0 0 3px #c87726;
        background: linear-gradient(45deg, #e8c34e, #f1da7c, #cfa831, #fbf1d8);
        box-shadow: 0 3px 0px #c87725, 0 0 3px #3d3737;

        @include prefix(border-radius, 6px);
        // @include prefix(border-top-right-radius, 20px);
        // @include prefix(border-bottom-right-radius, 20px);

        .s {
            text-transform: capitalize;
            display: block;
            width: 220px;
            height: 24px;
            line-height: 24px;
            background: #534a41;
            border: none;
            @include prefix(border-radius, 5px);
            position: absolute;
            left: 10px;
            top: 6px;
            padding: 0px 5px;
            font-size: 14px;
            font-weight: bold;
            color: #9a8e82;
            box-shadow: inset 0 1px 1px #000, inset 0 11px 1px #635c54,
                1px 1px 3px #fff, 0 0 2px #c87725, -1px -1px 2px #c87725;
            // 0 0 2px #c87725,
            // 0 0 5px #fff;
        }
        .sb {
            display: block;
            width: 35px;
            height: 35px;
            line-height: 35px;
            position: absolute;
            right: 0;
            top: 1px;
            border: none;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            color: #453e38;
            background: none;
        }
        .sx {
            display: block;
            width: 18px;
            height: 18px;
            line-height: 17px;
            position: absolute;
            right: 38px;
            top: 9px;
            @include prefix(border-radius, 3px);

            // box-shadow: 0 3px 0px #c87725, 0 0 3px #3d3737;
            box-shadow: 0 0 3px #000;
            // background: linear-gradient(45deg, #e8c34e, #f1da7c, #cfa831, #fbf1d8);
            background: #f1da7c;
            border: none;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            color: #453e38;
            margin: 0;
            padding: 0;
            // &:before{
            //     content: "";
            //     width: 0;
            //     height: 0;
            //     border-top: 8px solid transparent;
            //     // border-right: 8px solid #f1da7c;
            //     border-right: 8px solid red;
            //     border-bottom: 8px solid transparent;
            //     position: absolute; right: 100%; top: 0;
            // }

            // background: none;
        }
        // &:before{
        //     content: "\01F50D";
        //     font-size: 20px;
        // }
    }
    .imgs-all {
        display: block;
        width: 275px;
        height: 420px;
        // background: blue;
        position: absolute;
        left: 5px;
        top: 86px;
        list-style: none;
        margin: 0;
        padding: 0;

        .imgs {
            list-style: none;
            margin: 0;
            padding: 0;

            display: block;
            width: 100%;
            // height: 40px;
            // box-shadow:
            //     inset 0 20px 0 rgba(255,255,255,0.15),
            //     0 2px 1px #000,
            //     inset 0 0 2px #000,
            //     inset 0 0 10px rgba(255,255,255,0.33),
            //     ;
            position: relative;
            // background: #625252;
            font-size: 16px;
            font-weight: bold;

            .title {
                background: linear-gradient(10deg, #095488, #007ace, #095488);
                @include prefix(border-radius, 5px);

                line-height: 40px;
                width: 100%;
                height: 40px;
                display: block;
                text-align: center;
                text-transform: uppercase;
                cursor: pointer;
                box-shadow: inset 0 20px 0 rgba(255, 255, 255, 0.15),
                    inset 0 -3px 0px #403d38, 0 0 1px #403d38,
                    // 0 2px 1px rgba(0,0,0,0.33),
                    // inset 0 0 5px #000,
                    // // inset 0 0 5px #000,
                    inset 0 0 10px rgba(255, 255, 255, 0.33);
                position: relative;
                z-index: 1;

                font-size: 18px;
                font-weight: bold;
                color: #483f3f;
                text-shadow: 0 1px 1px #fff;
                // text-shadow: 0 2px 0px #000;

                .num {
                    display: inline-block;
                }

                &:before {
                    content: "";
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    // background: red;
                    position: absolute;
                    left: 14px;
                    top: 14px;
                    // color: #000;
                    text-shadow: none;
                    font-size: 22px;
                    border: solid 2px rgba(0, 0, 0, 0.44);
                    border-top: none;
                    border-left: none;
                    @include prefix(transform, rotate(45deg));
                }
            }

            &.opened .title {
                color: #fff;
                text-shadow: 0 2px 0px #000;
            }
            &.opened .title:before {
                content: "";
                @include prefix(transform, rotate(-135deg));
                top: 17px;
            }

            &.tags .title {
                background: linear-gradient(10deg, #503e1c, #d19501, #503e1c);
            }
            &.artists .title {
                background: linear-gradient(10deg, #c6573d, #de4d24, #c6573d);
            }
            &.anime .title {
                background: linear-gradient(10deg, #585825, #4a9200, #585825);
            }
            &.fav-tags .title {
                // background: linear-gradient(10deg, #0f5b67, #1fa2a7, #0f5b67);
                background: linear-gradient(10deg, #600, #f00, #600);

                // color: #fff;
                text-shadow: 0 2px 0px #440;

                width: 269px;
                height: 38px;
                @include prefix(border-radius, 7px);
                margin-top: 2px;

                border: solid 3px #900;
                box-shadow: inset 0 20px 0 rgba(255, 255, 255, 0.15),
                    inset 0 0 5px #dd7600, inset 0 0 5px #dd7600,
                    inset 0 0 5px #dd7600, inset 0 0 7px #dd7600,
                    inset 0 0 7px #dd7600, inset 0 0 7px #dd7600, 0 0 10px #200,
                    0 3px 0px #403d38;
                color: #ecd06f;
                // box-shadow:
                //     inset 0 0 4px #600, inset 0 0 4px #600, inset 0 0 4px #600,
                //     inset 0 0 8px #dd7600, inset 0 0 8px #dd7600, inset 0 0 8px #dd7600,
                //     inset 0 0 8px #dd7600, inset 0 0 8px #dd7600, inset 0 0 8px #dd7600,
                //     inset 0 0 8px #dd7600, inset 0 0 8px #dd7600, inset 0 0 8px #dd7600,
                //     inset 0 0 8px #dd7600, inset 0 0 8px #dd7600, inset 0 0 8px #dd7600;

                // &:after{
                //     content: "";
                //     display: inline-block; width: 28px; height: 28px;
                //     background-image: url(~imgPath/heart1.png);
                //     background-size: 28px;
                //     // position: absolute; right: 7px; top: 2px;
                //     vertical-align: text-bottom;
                //     position: relative; top: 2px;

                // }

                .num {
                    display: inline-block;
                    width: 42px;
                    height: 47px;
                    @include prefix(border-radius, 80px);
                    @include prefix(border-top-left-radius, 20px);
                    @include prefix(border-top-right-radius, 20px);
                    position: absolute;
                    right: 9px;
                    top: -6px;
                    box-shadow: 0 3px 0px #c87725, inset 0 3px 2px #ffa,
                        1px 2px 1px #000, 1px 5px 3px #000;
                    // 0 3px 3px #3d3737,
                    // 0 3px 6px #3d3737,
                    background: linear-gradient(
                        45deg,
                        #e8c34e,
                        #ffa,
                        #cfa831,
                        #fbf1d8
                    );
                    line-height: 28px;
                    color: #453e38;
                    font-size: 16px;
                    text-shadow: 0 0 1px #000, 0 2px 2px #fff;
                    // padding-top: 5px;
                    &:before {
                        content: "";
                        display: block;
                        width: 21px;
                        height: 21px;
                        background-image: url(~imgPath/heart1.png);
                        background-size: 21px;
                        position: absolute;
                        left: calc(50% - 10px);
                        bottom: 4px;
                    }
                }
            }

            .list {
                list-style: none;
                margin: 0;
                padding: 0;
                display: block;
                width: 96%;
                // background: #625252;
                font-size: 14px;
                text-shadow: none;
                line-height: 25px;
                display: none;
                // height: 100%;
                background: #625252;
                margin: 0 2%;

                overflow-y: scroll;
                // height: calc(100% - 40px * 5);
                height: calc(420px - 40px * 4 - 48px);

                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
                    border-radius: 10px;
                    background-color: #7c665c;
                }
                &::-webkit-scrollbar {
                    width: 10px;
                    background-color: #9e8b7d;
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 3px #796b60;
                    //background-color: #edd372;
                    background: linear-gradient(
                        to right,
                        #fff,
                        #f5de80,
                        #f4b766,
                        #b26d12
                    );
                }

                .line {
                    color: #ddd;
                    padding: 0px 10px;
                    position: relative;
                    cursor: pointer;
                    text-transform: capitalize;

                    .heart {
                        content: "";
                        display: block;
                        width: 21px;
                        height: 21px;
                        background-image: url(~imgPath/heartB.png);
                        background-size: 21px;
                        position: absolute;
                        right: 7px;
                        top: 2px;
                        opacity: 0.4;
                    }
                    .heart.fav {
                        background-image: url(~imgPath/heart1.png);
                        background-size: 21px;
                        opacity: 1;
                    }
                    &:nth-child(even) {
                        background: #6d5d5e;
                    }

                    &.selected {
                        color: #625252;
                        background: #ddd;
                    }
                }
            }

            &.opened .list {
                display: block;
            }

            // &:first-child .list{
            //     display: block;
            // }
        }
    }

    .btn-add-image {
        display: inline-block;
        width: 320px;
        height: 35px;
        background: red;
        // position: absolute; left: calc(50% + 150px);
        position: absolute;
        left: calc(50% - 25px);
        top: 4px;
        line-height: 35px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        color: #582b07;
        @include prefix(border-radius, 7px);
        // background: linear-gradient(to bottom, #095488, #007ace, #095488);
        // box-shadow: inset 0 17px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0px #403d38, 0 0 1px #403d38, inset 0 0 10px rgba(255, 255, 255, 0.33),
        //     0 0 5px #746b64, 0 0 7px #746b64, 0 0 9px #746b64;
        background: linear-gradient(-15deg, #e8c34e, #f1da7c, #cfa831, #fbf1d8);
        box-shadow: 0 1px 0px #c87725, 0 0 3px #3d3737, 0 0 9px #746b64,
            0 0 9px #746b64, 0 0 4px #746b64, 0 0 4px #746b64;
        text-shadow: 0 1px 1px #ffa, 0 0 4px #ffa;
        // border: solid 3px #746b64;
        cursor: pointer;
        &:before {
            content: "";
            display: inline-block;
            width: 39px;
            height: 39px;
            background-image: url(~imgPath/m-ico-book.png);
            background-size: 39px;
            position: relative;
            top: -2px;
        }
        .text {
            display: inline-block;
            height: 30px;
            line-height: 30px;
            position: relative;
            top: -15px;
        }

        &:hover {
            // box-shadow: inset 0 -4px 0px #c87725, 0 0 3px #3d3737;
            // bottom:10px; height: 19px;
            box-shadow: inset 0 0px 0px #c87725, 0 0 5px #c87725,
                0 0 9px #c87725, 0 0 11px #c87725;
        }
        &:active {
            box-shadow: inset 0 0px 0px #c87725, inset 0 2px 2px #472a0c,
                0 0 5px #c87725, 0 0 9px #c87725, 0 0 11px #c87725;
            line-height: 19px;
            .text {
                top: -12px;
            }
            &:before {
                top: 0px;
            }
        }
    }

    .img-list {
        display: block;
        width: 710px;
        height: 457px;
        background: #746b64;
        position: absolute;
        right: 0px;
        top: 44px;
        list-style: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        overflow-y: scroll;
        padding: 5px;

        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            background-color: #7c665c;
        }
        &::-webkit-scrollbar {
            width: 10px;
            background-color: #9e8b7d;
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

        .img-box {
            list-style: none;
            margin: 0;
            padding: 0;
            display: inline-block;
            width: 223px;
            height: 297px;
            background: #9e8b7d;
            float: left;
            position: relative;
            margin: 2px;
            @include prefix(border-radius, 10px);
            border: solid 3px #e4cf76;
            box-shadow: inset 0 0 5px #c87725, 0 1px 3px #000,
                inset 0 77px 7px #bfb6ad;
            cursor: pointer;
            &.blocked {
                background-image: url(~imgPath/zagluska.jpg);
                background-size: 223px;
                cursor: default;
                box-shadow: none;
            }
            .im-text {
                display: block;
                background: #534a41;
                position: absolute;
                margin: 0 26px 0 24px;
                top: calc(50% + 24px);
                font-size: 12px;
                color: #ccc;
                padding: 10px 5px 5px 40px;
                line-height: 12px;
                box-shadow: inset 0 4px 0 #000, inset 0 24px 0 #5e564e;
                min-height: 30px;
                @include prefix(border-radius, 6px);
                &:before {
                    content: "";
                    display: block;
                    width: 24px;
                    height: 24px;
                    background-image: url(~imgPath/ic-lamp.png);
                    background-size: 24px;
                    position: absolute;
                    left: 6px;
                    top: 10px;
                }
            }

            &.landscape {
                width: 456px;
            }

            .fav-box {
                display: inline-block;
                width: 36px;
                height: 32px;
                position: absolute;
                right: -3px;
                top: -3px;
                box-shadow: 0 3px 0px #c87725, inset 0 3px 2px #ffa,
                    0 3px 4px #000;
                background: linear-gradient(
                    45deg,
                    #e8c34e,
                    #ffa,
                    #cfa831,
                    #fbf1d8
                );
                line-height: 28px;
                color: #453e38;
                font-size: 16px;
                text-shadow: 0 0 1px #000, 0 2px 2px #fff;
                @include prefix(border-radius, 4px);
                @include prefix(border-bottom-left-radius, 20px);
                cursor: pointer;
                &:before {
                    content: "";
                    display: block;
                    width: 21px;
                    height: 21px;
                    background-image: url(~imgPath/heartB.png);
                    background-size: 21px;
                    position: absolute;
                    right: 6px;
                    top: 6px;
                    opacity: 0.4;
                }
                &.fav:before {
                    background-image: url(~imgPath/heart1.png);
                    background-size: 21px;
                    opacity: 1;
                }
            }

            .price,
            .price:before,
            .price:after {
                content: "";
                display: inline-block;
                width: 29px;
                height: 29px;
                background-image: url(~imgPath/star1.png);
                background-size: 29px;

                position: absolute;
                left: calc(50% - 16px);
                top: 2px;
            }
            .price:before {
                position: absolute;
                top: 0;
                left: -30px;
            }
            .price:after {
                position: absolute;
                top: 0;
                left: 30px;
            }
            .price.p1 {
                &:before,
                &:after {
                    display: none;
                }
            }
            .price.p2 {
                left: calc(50%);
                &:after {
                    display: none;
                }
            }

            &.blocked .price {
                top: calc(50% - 85px);
            }

            .img {
                width: 100%;
                height: 100%;
                @include prefix(border-radius, 8px);
            }

            .info {
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.55);
                font-size: 14px;
                color: #fff;
                line-height: 17px;
                padding: 5px 50px;
                @include prefix(border-bottom-left-radius, 8px);
                @include prefix(border-bottom-right-radius, 8px);
            }
            .btn-fs {
                display: inline-block;
                width: 40px;
                height: 40px;
                position: absolute;
                bottom: 3px;
                left: 4px;
                background: none;
                background-image: url(~imgPath/chahge-fullscr.png);
                background-size: 100%;
                cursor: pointer;
            }

            .prog {
                display: block;
                height: 18px;
                background: #534a41;
                position: absolute;
                left: 5%;
                right: 5%;
                top: 50%;
                @include prefix(border-radius, 5px "/" 15px);
                box-shadow: inset 0 2px 10px #000;
                border: solid 2px #534a41;
                .prg {
                    display: block;
                    width: 33%;
                    height: 18px;
                    background: #d18d0e;
                    position: absolute;
                    @include prefix(border-radius, 3px "/" 15px);
                    box-shadow: inset 0 0 1px #000, inset 0 9px 0 #d8ac55,
                        inset 0 0 5px #6b420c;
                }
            }
            .num {
                display: none;
            }
            .text {
                display: block;
                // height: 18px;
                background: #534a41;
                position: absolute;
                left: 5%;
                right: 5%;
                top: calc(50% + 9px);
                font-size: 14px;
                color: #ccc;
                padding: 16px 5px 5px 40px;
                // padding-top: 15px;
                // padding-bottom: 5px;
                line-height: 17px;
                box-shadow: inset 0 30px 0 #5e564e;
                min-height: 30px;
                &:before {
                    content: "i";
                    display: block;
                    width: 28px;
                    height: 28px;
                    background: #097bd3;
                    @include prefix(border-radius, 100%);
                    position: absolute;
                    left: 6px;
                    top: 17px;
                    font-size: 26px;
                    color: #fff;
                    font-weight: normal;
                    font-family: serif;
                    text-align: center;
                    line-height: 28px;
                    text-shadow: 0 0 1px #fff, 0 0 1px #fff;
                    box-shadow: inset 0 0 5px #fff, 0 2px 1px #000;
                }
            }
        }
    }
}

.main .popup-layer #popupContainer {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

.main .popup-layer .img-lightbox-wrapper {
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    .scroll-controls {
        display: block;
        width: 100%;
        height: 0px;
        position: absolute;
        left: 0;
        top: calc(50% - 20px);
        // background: red;
        .scroll-left,
        .scroll-right {
            display: block;
            width: 40px;
            height: 38px;
            background: #ffc;
            position: absolute;
            left: 5px;
            top: 0;
            @include prefix(border-radius, 100%);
            background: linear-gradient(to top, #fff, #e4cf76, #bb8a25);
            box-shadow: 0 3px 0px #c87725, inset 0 3px 2px #ffa, 0 3px 4px #000;
            cursor: pointer;
            &.disabled {
                cursor: not-allowed;
                filter: grayscale(100%);
            }
            &:before,
            &:after {
                content: "";
                display: block;
                width: 13px;
                height: 14px;
                border: solid 7px #ffa;
                border-top: none;
                border-right: none;
                @include prefix(transform, rotate(45deg));
                position: absolute;
                left: 13px;
                top: 10px;
            }
            &:after {
                border: solid 5px #600;
                display: block;
                width: 13px;
                height: 14px;
                border-top: none;
                border-right: none;
                margin-top: 1px;
                margin-left: 1px;
            }

            &:not(.disabled):active {
                box-shadow: inset 0 3px 2px #ffa, 0 0px 4px #000,
                    0 0px 10px #ff0;
                top: 3px;
            }
        }
        .scroll-right {
            position: absolute;
            left: auto;
            right: 5px;
            top: 0;
            &:before,
            &:after {
                @include prefix(transform, rotate(-135deg));
                left: 7px;
            }
        }
    }
}

.main .popup-layer .img-lightbox {
    display: block;
    position: absolute;
    left: 5%;
    right: 5%;
    top: 5%;
    bottom: 5%;
    background: linear-gradient(to bottom, #fff, #e4cf76, #ddba62);
    @include prefix(border-radius, 15px);
    border: solid 3px #e4cf76;
    box-shadow: inset 0 0 5px #c87725, 0 1px 3px #000, 0 0 15px #000;
    // z-index:11;

    .place {
        position: absolute;
        left: 15px;
        right: 15px;
        top: 15px;
        bottom: 15px;
        // background: green;
        .img {
            &.zoom-in {
                cursor: url(~imgPath/cursor-plus.png), --moz-zoom-in;
                cursor: url(~imgPath/cursor-plus.png), --webkit-zoom-in;
                cursor: url(~imgPath/cursor-plus.png), zoom-in;
            }
            // width: 100%; height: 100%;
            // display: none;
            // border: solid 2px #e4cf76;
            max-height: 540px;
            max-width: 880px;
            @include prefix(border-radius, 10px);
            // box-shadow: 0 0 5px #e4cf76, 0 0 5px #e4cf76, 0 0 5px #e4cf76;
        }
    }
    .btn-close-x {
        display: inline-block;
        width: 30px;
        height: 30px;
        @include prefix(border-radius, 7px);
        position: absolute;
        right: -6px;
        top: -6px;
        background: linear-gradient(to bottom, #fff, #e4cf76, #bb8a25);
        box-shadow: 0 0 7px #000;
        cursor: pointer;
        &:before {
            content: "\2716";
            font-size: 28px;
            font-weight: bold;
            color: #600;
            line-height: 30px;
            text-shadow: 0 0 2px #fff;
        }
        &:after {
            content: "";
            display: block;
            width: 24px;
            height: 7px;
            background: rgba(255, 255, 255, 0.25);
            @include prefix(border-radius, 5px);
            position: absolute;
            left: 3px;
            top: 3px;
        }
    }
    .btn-fs {
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: 3px;
        left: 7px;
        background: none;
        background-image: url(~imgPath/chahge-fullscr.png);
        background-size: 100%;
        cursor: pointer;
    }

    .info {
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.55);
        text-align: left;
        padding: 13px;
        padding-top: 13px;
        padding-left: 50px;
        padding-right: 120px;
        color: #fff;
        font-size: 16px;
        @include prefix(border-bottom-left-radius, 12px);
        @include prefix(border-bottom-right-radius, 12px);
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
        .fav-box {
            display: inline-block;
            width: 40px;
            height: 32px;
            // @include prefix(border-radius, 5px '/' 15px);
            position: absolute;
            left: -7px;
            top: 2px;
            box-shadow: 0 3px 0px #c87725, inset 0 3px 2px #ffa, 0 3px 4px #000;
            background: linear-gradient(45deg, #e8c34e, #ffa, #cfa831, #fbf1d8);
            line-height: 28px;
            color: #453e38;
            font-size: 16px;
            text-shadow: 0 0 1px #000, 0 2px 2px #fff;
            @include prefix(border-radius, 4px);
            @include prefix(border-bottom-right-radius, 18px);
            @include prefix(border-top-right-radius, 18px);
            cursor: pointer;
            &:before {
                content: "";
                display: block;
                width: 21px;
                height: 21px;
                background-image: url(~imgPath/heartB.png);
                background-size: 21px;
                position: absolute;
                right: 10px;
                top: 7px;
                opacity: 0.4;
            }
            &.fav:before {
                background-image: url(~imgPath/heart1.png);
                background-size: 21px;
                opacity: 1;
            }
        }

        .price,
        .price:before,
        .price:after {
            content: "";
            display: inline-block;
            width: 29px;
            height: 29px;
            background-image: url(~imgPath/star1.png);
            background-size: 29px;
            position: absolute;
            right: 39px;
            top: 8px;
            filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
        }
        .price:before {
            position: absolute;
            top: 0;
            left: -30px;
        }
        .price:after {
            position: absolute;
            top: 0;
            left: 30px;
        }
        .price.p1 {
            right: 9px;
            &:before,
            &:after {
                display: none;
            }
        }
        .price.p2 {
            right: 9px;
            &:after {
                display: none;
            }
        }
    }
}
.main .popup-layer .m-popup.fav-popup {
    font-size: 17px;
    font-weight: bold;
    color: #ffa;
    bottom: auto;
    height: auto;
    // min-height: 280px;
    .title {
        &:before {
            content: "";
            display: block;
            width: 32px;
            height: 32px;
            background-image: url(~imgPath/heart1.png);
            background-size: 32px;
            position: absolute;
            left: 10px;
            top: 10px;
        }
    }
    .content {
        display: block;
        // background: red;
        // position: absolute; left: 45px; right: 45px;
        // top: 70px; bottom: 20px;
        // margin:0; padding: 0;
        margin-top: 80px;
        margin-bottom: 15px;
        // padding-bottom: 50px;
        position: relative;
    }
    h2 {
        margin: 5px 0;
        padding: 0;
        font-size: 22px;
        text-shadow: 0 1px 3px #500, 0 1px 10px #300;
    }
    p {
        display: block;
    }
    .warn {
        display: inline-block;
        background: #900;
        padding: 3px 5px;
        box-shadow: 0 0 10px #a00;
    }
    .btn-ok,
    .btn-cancel {
        display: inline-block;
        position: relative;
        left: auto;
        right: auto;
        top: auto;
        bottom: auto;
        margin: 20px 10px 30px 10px;
        float: left;
    }
    .btn-cancel {
        float: right;
    }

    &.fav-remove,
    &.fav-add-nospace {
        .b-box-red {
            display: inline-block;
            background: linear-gradient(to bottom, #f00, #900);
            padding: 2px 5px;
            margin-bottom: 5px;
            box-shadow: 0 0 2px #400;
            .btn-simple-gold,
            .btn-simple-silver {
                font-size: 16px;
            }
        }
        .btn-box {
            display: inline-block;
            padding: 2px 5px;
            margin-bottom: 5px;
            box-shadow: 0 0 2px #400;
            background: linear-gradient(to bottom, #c12600, #6e0303);
            @include prefix(border-radius, 10px);
            .btn-box-bg {
                display: inline-block;
                padding: 2px 5px;
                margin: 5px;
                @include prefix(border-radius, 7px);
                background: linear-gradient(to top, #c12600, #6e0303);
                box-shadow: 0 0 5px #feff58, inset 0 0 2px #feff58;
                border: 1px solid #feff58;
            }
            .btn-simple-gold,
            .btn-simple-silver {
                font-size: 12px;
                // width: 160px;
            }
        }
        .btn-ok,
        .btn-ok2,
        .btn-cancel {
            display: inline-block;
            position: relative;
            left: auto;
            right: auto;
            top: auto;
            bottom: auto;
            margin: 0;
            float: none;
            .price {
                display: inline-block;
                font-size: 14px;
                color: #500;
                position: relative;
                top: 1px;
                margin-left: 3px;
                &:before {
                    content: "";
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    background: #a47536;
                    border: solid 1px #a47536;
                    background-image: url(~imgPath/ico-real.png);
                    background-size: 22px;
                    vertical-align: text-bottom;
                    margin-right: 5px;
                    @include prefix(border-radius, 100%);
                    position: relative;
                    top: 3px;
                }
                &.diamonds {
                    &:before {
                        background-image: url(~imgPath/80-topup.png);
                        background-size: 24px;
                    }
                }
            }
            margin: 10px 7px;
        }
        .btn-cancel {
            display: none;
        }
    }
}

.fs-lightbox {
    overflow: hidden;
    // overflow-y: scroll;
    display: none;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10000;
    // display: none;
    .place {
        display: block;
        // background: white;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        // box-shadow: 0 0 7px #000;
        .img {
            position: absolute;
            box-shadow: 0 0 10px #000;
        }
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .zoom-in {
        cursor: url(~imgPath/cursor-plus.png), --moz-zoom-in;
        cursor: url(~imgPath/cursor-plus.png), --webkit-zoom-in;
        cursor: url(~imgPath/cursor-plus.png), zoom-in;
    }

    .zoom-out {
        cursor: url(~imgPath/cursor-minus.png), --moz-zoom-out;
        cursor: url(~imgPath/cursor-minus.png), --webkit-zoom-out;
        cursor: url(~imgPath/cursor-minus.png), zoom-out;
    }

    .btn-close-x {
        display: block;
        width: 50px;
        height: 50px;
        @include prefix(border-radius, 100%);
        position: absolute;
        right: 10px;
        top: 10px;
        background: #fff;
        text-align: center;
        cursor: pointer;
        &:before {
            content: "\2716";
            font-size: 32px;
            font-weight: bold;
            color: #000;
            line-height: 50px;
        }
    }

    .scroll-controls {
        display: block;
        width: 100%;
        height: 0px;
        position: absolute;
        left: 0;
        top: calc(50% - 25px);
        // background: #fff;
        // @include prefix(border-radius, 100%);
        // background: red;
        .scroll-left,
        .scroll-right {
            display: block;
            width: 50px;
            height: 50px;
            background: #fff;
            position: absolute;
            left: 10px;
            top: 0;
            @include prefix(border-radius, 100%);
            cursor: pointer;
            &.disabled {
                cursor: not-allowed;
                filter: grayscale(100%);
            }
            &:before {
                content: "";
                display: block;
                width: 14px;
                height: 14px;
                border: solid 5px #000;
                border-top: none;
                border-right: none;
                @include prefix(transform, rotate(45deg));
                position: absolute;
                left: 20px;
                top: 16px;
            }
        }
        .scroll-right {
            position: absolute;
            left: auto;
            right: 10px;
            top: 0;
            &:before,
            &:after {
                @include prefix(transform, rotate(-135deg));
                left: 13px;
            }
        }
    }
}

.firefox,
.ie,
.edge {
    .tab-panel.change-main .change-main-right-side.full_album .img-list {
        width: 719px;
    }
}

`;

export default ScreenAlbum;
