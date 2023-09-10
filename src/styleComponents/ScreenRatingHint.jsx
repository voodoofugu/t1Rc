
import styled from "styled-components";

const ScreenRatingHint = styled.div`
  @charset "utf-8";
@import "sass_commons.scss";

.rating-hint-box-rel,
.rating-hint-box {
    font-size: 0;
    position: relative;
    top: 10px;
    left: 10px;
    z-index: 100;
    background: linear-gradient(0deg, #938274 0%, #dbc2ad 100%);
    padding: 10px;
    max-width: 962px;
    min-width: 310px;
    @include prefix(border-radius, 10px);
    border: solid 4px #4b3f35;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
    .rating-hint-box-name {
        width: 100%;
        height: 30px;
        position: relative;
        color: #3c332c;
        text-shadow: 0 0 16px #fff;
        text-align: center;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
    }
    .rating-hint-video-box {
        width: 200px;
        height: auto;
        position: absolute;
        left: 10px;
        .rb-rating-slot-box {
            width: 100%;
            height: 152px;
            position: relative;
            top: 0;
            left: 0;
            display: inline-block;
            background-color: #dbc2ad;
            .rb-rating-slot-name {
                width: 100%;
                height: 30px;
                position: absolute;
                background-color: #938274;
                color: #fff;
                font-size: 16px;
                font-weight: bold;
                text-transform: uppercase;
                line-height: 30px;
            }
            .rb-rating-slot {
                width: 94px;
                height: 72px;
                position: relative;
                display: inline-block;
                margin: 5px;
                top: 48px;
                @include background-gold;
                @include prefix(border-radius, 10px);
                box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.55);
                &:before {
                    content: "";
                    width: 90px;
                    height: 68px;
                    position: absolute;
                    @include prefix(border-radius, 6px);
                    background: linear-gradient(
                        180deg,
                        #95877d 0%,
                        #665c56 100%
                    );
                    top: 2px;
                    left: 2px;
                }
                .rb-rating-video {
                    width: 84px;
                    height: 62px;
                    position: absolute;
                    top: 5px;
                    left: 5px;
                    img {
                        width: 84px;
                        height: 62px;
                    }
                    .rating-video-play {
                        width: 30px;
                        height: 30px;
                        position: absolute;
                        top: 16px;
                        left: 27px;
                        @include prefix(border-radius, 100%);
                        background-color: rgba(0, 0, 0, 0.7);
                        cursor: pointer;
                        &:before {
                            content: "";
                            width: 0;
                            height: 0;
                            border-top: 6px solid transparent;
                            border-left: 12px solid rgba(255, 255, 255, 0.55);
                            border-bottom: 6px solid transparent;
                            position: absolute;
                            top: 9px;
                            margin-left: -4px;
                        }
                    }
                }
                .rb-lock {
                    width: 102px;
                    height: 44px;
                    position: absolute;
                    top: 20px;
                    left: -4px;
                    background-image: url(~imgPath/legendary-lock.png);
                    background-size: 100%;
                    display: none;
                }
                &.lock {
                    filter: grayscale(100%);
                    .rb-lock {
                        display: block;
                    }
                }
            }
        }
    }
}
.rating-hint-box-rel {
    padding: 10px 20px;
    font-size: initial;
    min-width: initial;
}

.rating-hint-r1 {
    width: 310px;
    height: 470px;
    position: relative;
    left: 580px;
    &.video {
        left: 210px;
        width: 620px;
        height: auto;
    }
}

.hint-box {
    margin: 1px;
    width: 300px;
    height: 70px;
    position: relative;
    display: inline-block;
    background: linear-gradient(45deg, #e3d9d2 0%, #fbf9f8 100%);
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
    border: solid 2px #cd9c30;
    .hint-prize-box {
        width: 60px;
        height: 60px;
        position: absolute;
        top: 6px;
        margin-left: 6px;
        @include background-gold;
        @include prefix(border-radius, 6px);
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
        img {
            width: 56px;
            top: 2px;
            margin-left: -28px;
            position: absolute;
            height: 57px;
        }
    }
    .prize-name-text-box {
        width: 220px;
        height: 66px;
        position: absolute;
        overflow: hidden;
        top: 2px;
        margin-left: 74px;
        .hint-prize-name {
            text-transform: capitalize;
            width: 100%;
            height: 20px;
            position: absolute;
            top: 0px;
            font-size: 14px;
            font-weight: bold;
            color: #db0024;
            text-align: center;
        }
        .hint-prize-text {
            width: 100%;
            position: absolute;
            top: 20px;
            color: #3c332c;
            font-size: 12px;
            text-align: center;
        }
    }
    &.empty {
        background: #d9c0ab;
        border: solid 2px #d9c0ab;
        .hint-prize-box {
            display: none;
        }
        .prize-name-text-box {
            display: none;
        }
    }
    .newtime {
        width: 45px;
        background-size: 45px;
        z-index: 1;
        height: 32px;
        top: 33px;
        left: 25px;
        .newclocktime {
            top: 20px;
            margin-left: 13px;
        }
    }
    .rank-reward-num {
        background: linear-gradient(0deg, #858585 0%, #ffffff 100%);
        padding: 2px;
        color: #42372f;
        position: absolute;
        top: 45px;
        font-size: 12px;
        font-weight: bold;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
        @include prefix(border-radius, 6px);
        width: auto;
        right: 231px;
        margin-left: 0;
    }
}

.prize-one-box-all-rel,
.prize-one-box-all {
    width: 480px;
    height: 380px;
    position: absolute;
    left: 50px;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    .girl-box {
        width: 198px;
        height: 290px;
        position: absolute;
        top: 4px;
        margin-left: 10px;
        @include background-gold;
        @include prefix(border-radius, 10px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        .girl-prize {
            width: 190px;
            height: 282px;
            position: absolute;
            top: 4px;
            margin-left: -95px;
            @include prefix(border-radius, 8px);
        }
    }
    .prize-name-box {
        width: 252px;
        height: 36px;
        position: absolute;
        top: 2px;
        margin-left: -16px;
        background-image: url(~imgPath/wpck-ram.png);
        background-size: 100%;
        font-size: 16px;
        color: #ffd200;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 26px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
        &.small {
            font-size: 12px;
            top: 270px;
            color: #fff;
        }
    }
    .prize-dps-box {
        width: 150px;
        height: 80px;
        position: absolute;
        top: 298px;
        margin-left: 6px;
        background-image: url(~imgPath/wpck-dps.png);
        background-size: 100%;
        .prize-dps-text {
            width: 70px;
            height: 26px;
            position: absolute;
            top: 10px;
            margin-left: 70px;
            color: #a3e7fa;
            font-size: 20px;
            font-weight: bold;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
        }
    }
    .prize-promote-box {
        width: 60px;
        height: 80px;
        position: absolute;
        top: 298px;
        margin-left: 154px;
        background-image: url(~imgPath/wpck-promote.png);
        background-size: 100%;
        .prize-promote-text {
            width: 60px;
            height: 20px;
            position: absolute;
            top: 8px;
            margin-left: 0px;
            color: #311400;
            font-size: 18px;
            font-weight: bold;
            text-shadow: 0 0 4px #fff;
        }
    }
    .unique-skill-box-all {
        width: 220px;
        height: 380px;
        position: absolute;
        margin-left: 260px;
        .prize-name-box {
            top: 2px;
            margin-left: -16px;
        }
        .unique-skill-box {
            width: 210px;
            height: 340px;
            position: absolute;
            top: 40px;
            font-size: 0px;
            .unique-skill {
                width: 210px;
                height: 76px;
                position: relative;
                display: inline-block;
                background: linear-gradient(0deg, #e9b039 0%, #fffe9a 100%);
                margin-bottom: 8px;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.35);
                .skill-pic-box {
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    top: 8px;
                    margin-left: 8px;
                    @include prefix(border-radius, 8px);
                    background-color: #4c4c4c;
                    .skill-pic {
                        width: 56px;
                        height: 56px;
                        position: absolute;
                        top: 2px;
                        margin-left: -28px;
                        @include prefix(border-radius, 6px);
                    }
                }
                .skill-text-box {
                    width: 120px;
                    height: 60px;
                    position: absolute;
                    top: 8px;
                    margin-left: 78px;
                    display: table;
                    .skill-text {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        display: table-cell;
                        vertical-align: middle;
                        font-size: 12px;
                        color: #572f14;
                        font-weight: bold;
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
}

.prize-one-box-all-rel {
    position: relative;
    left: 0;
}

`;

export default ScreenRatingHint;
