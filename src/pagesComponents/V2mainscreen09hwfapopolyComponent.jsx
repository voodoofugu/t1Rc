import React, { useEffect } from "react";
import screenFapopolyMain from "../styles/screen-fapopoly-main.scss";
import v2ScreenHwBtlpass from "../styles/v2-screen-hw-btlpass.scss";
import v2ScreenTower from "../styles/v2-screen-tower.scss";
import screenFapopolyRating from "../styles/screen-fapopoly-rating.scss";

const V2MainScreen09HwFapopolyComponent = () => {
    useEffect(() => {
        [...document.querySelectorAll(".popup-layer, .m-popup")].map((i) => {
            i.style.display = "none";
        });
        const po = document.getElementById("popupAll");
        const re = document.querySelector(".popup-layer");
        const hP = document.querySelector(".m-popup.hw-btlpass-pop");
        const rP = document.querySelector(".m-popup.fapop-rating");

        [
            ...document.querySelectorAll(
                ".m-popup, .ratingpop-box, .quest-popup, .popup, .reborn-popup"
            ),
        ].map((i) => {
            i.style.display = "none";

            // закрываем все попапы при клике на затемнение
            const blS = document.querySelector(".screen-blend-55");
            blS.addEventListener("click", () => {
                po.classList.remove("dialog-emersion-enter");
                po.classList.add("dialog-emersion-exit");
                setTimeout(function () {
                    re.style.display = "none";
                    i.style.display = "none";
                    po.classList.remove("dialog-emersion-exit");
                }, 100);
            });
        });
        [
            ...document.querySelectorAll(
                ".btn-close-x, .btn-close, .lbclose-btn, .ok-all-box, .openchest-btn-close, .color-btn.close, .ratingballon-box > div.color-btn, .error-popup > .btn-simple-gold, .btlpass-btn-box > div:nth-child(1), .fortuna-winpop2 > div.color-btn, .btlpass-info > div.color-btn"
            ),
        ].map((i) => {
            i.addEventListener("click", () => {
                po.classList.remove("dialog-emersion-enter");
                po.classList.add("dialog-emersion-exit");
                setTimeout(function () {
                    re.style.display = "none";
                    i.closest(
                        ".m-popup, .ratingpop-box, .quest-popup, .popup"
                    ).style.display = "none";
                    po.classList.remove("dialog-emersion-exit");
                }, 100);
            });
        });

        const hPb = document.querySelector(".bfIcon");
        hPb.addEventListener("click", () => {
            re.style.display = "block";
            setTimeout(function () {
                hP.style.display = "block";
                po.classList.add("dialog-emersion-enter");
            }, 100);
        });

        const rB = document.querySelector(".color-btn.rating");
        rB.addEventListener("click", () => {
            re.style.display = "block";
            setTimeout(function () {
                rP.style.display = "block";
                po.classList.add("dialog-emersion-enter");
            }, 100);
        });

        return () => {};
    }, []);
    return (
        <>
            <div className="main world1">
                <div
                    className="main-bg"
                    style={{
                        backgroundImage: "url('img/v2-fapop-hw1.jpg')",
                    }}></div>
                <div className="fapop-content-all">
                    <div>
                        <div
                            style={{
                                width: "1200px",
                                height: "640px",
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                            }}>
                            <div className="fp-portal disabled">
                                <div item="[object Object]" top_offset="100">
                                    <img
                                        className="fp-portal-img"
                                        src="img/v2-portal1.png"
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "150px",
                                    width: "100px",
                                    left: "429px",
                                    top: "328px",
                                    zIndex: "11",
                                }}>
                                <div
                                    className="fapop-player"
                                    style={{ width: "100%", height: "100%" }}>
                                    <div className="fapop-player-name">
                                        guest24783
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "389.5px",
                                    top: "346px",
                                    zIndex: "10",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic10.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "331.5px",
                                    top: "374px",
                                    zIndex: "11",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic03.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "273.5px",
                                    top: "346px",
                                    zIndex: "10",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic11.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "216.5px",
                                    top: "317px",
                                    zIndex: "9",
                                }}>
                                <div>
                                    <img
                                        src="img/fapop-ic02.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "272.5px",
                                    top: "288px",
                                    zIndex: "8",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic08.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "215.5px",
                                    top: "261px",
                                    zIndex: "7",
                                }}></div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "160.5px",
                                    top: "234px",
                                    zIndex: "6",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic10.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "218.5px",
                                    top: "207px",
                                    zIndex: "5",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic13.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "271.5px",
                                    top: "179px",
                                    zIndex: "4",
                                }}>
                                <div top_offset="50">
                                    <img
                                        src="img/fapop-ic12.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "330.5px",
                                    top: "206px",
                                    zIndex: "5",
                                }}>
                                <div>
                                    <img
                                        src="img/fapop-ic02.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "388.5px",
                                    top: "173px",
                                    zIndex: "4",
                                }}>
                                <div top_offset="50">
                                    <img
                                        src="img/fapop-ic06.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "445.5px",
                                    top: "202px",
                                    zIndex: "5",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic11.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "501.5px",
                                    top: "174px",
                                    zIndex: "4",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic08.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "558.5px",
                                    top: "146px",
                                    zIndex: "3",
                                }}>
                                <div>
                                    <img
                                        src="img/fapop-ic02.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "613.5px",
                                    top: "119px",
                                    zIndex: "2",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic07.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "667.5px",
                                    top: "91px",
                                    zIndex: "1",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic13.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "723.5px",
                                    top: "117px",
                                    zIndex: "2",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic07.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "779.5px",
                                    top: "147px",
                                    zIndex: "3",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic03.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "838.5px",
                                    top: "172px",
                                    zIndex: "4",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic10.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "895.5px",
                                    top: "194px",
                                    zIndex: "5",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic09.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "951.5px",
                                    top: "224px",
                                    zIndex: "6",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic05.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "1010.5px",
                                    top: "252px",
                                    zIndex: "7",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic07.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "953.5px",
                                    top: "280px",
                                    zIndex: "8",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic05.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "1010.5px",
                                    top: "308px",
                                    zIndex: "9",
                                }}></div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "954.5px",
                                    top: "336px",
                                    zIndex: "10",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic09.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "898.5px",
                                    top: "366px",
                                    zIndex: "11",
                                }}>
                                <div>
                                    <img
                                        src="img/fapop-ic02.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "842.5px",
                                    top: "335px",
                                    zIndex: "10",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic09.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "783.5px",
                                    top: "311px",
                                    zIndex: "9",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic11.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "728.5px",
                                    top: "330px",
                                    zIndex: "10",
                                }}></div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "672.5px",
                                    top: "366px",
                                    zIndex: "11",
                                }}>
                                <div top_offset="50">
                                    <img
                                        src="img/fapop-ic12.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "727.5px",
                                    top: "393px",
                                    zIndex: "12",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic03.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "672.5px",
                                    top: "419px",
                                    zIndex: "13",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic05.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "618.5px",
                                    top: "449px",
                                    zIndex: "14",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic09.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "558.5px",
                                    top: "421px",
                                    zIndex: "13",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic08.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    height: "100px",
                                    width: "67px",
                                    left: "505.5px",
                                    top: "398px",
                                    zIndex: "12",
                                }}>
                                <div item="[object Object]" top_offset="50">
                                    <img
                                        src="img/fapop-ic13.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="fapop-exit-box">
                            <a
                                className="color-btn active0"
                                aria-current="page"
                                href="#/">
                                <div className="color-btn-text">exit</div>
                            </a>
                        </div>
                        <div className="bfIcon">
                            <img className="icon" src="img/ic-hw.png" />
                        </div>
                        <div className="fapop-rating-tokens-box">
                            <div className="color-btn fl rating">
                                <div className="color-btn-text">rating</div>
                            </div>
                            <div className="color-btn fl token">
                                <img
                                    className="domik"
                                    src="img/fapop-token-ic.png"
                                />
                                <div className="color-btn-text">tokens</div>
                            </div>
                            <div
                                className="color-btn fr gblue fp"
                                style={{ width: "120px" }}>
                                <img
                                    className="domik"
                                    src="img/pse-epic3.png"
                                />
                                <div
                                    className="color-btn-text"
                                    style={{ width: "80px" }}>
                                    shop
                                </div>
                            </div>
                            <div
                                className="color-btn fr bordo"
                                style={{ width: "160px" }}>
                                <img
                                    className="domik"
                                    src="img/pse-keygirl.png"
                                />
                                <div
                                    className="color-btn-text"
                                    style={{ right: "5px", width: "128px" }}>
                                    Collections
                                </div>
                            </div>
                            <div
                                className="color-btn fr bordo magic"
                                style={{ width: "165px" }}>
                                <img
                                    className="domik"
                                    src="img/icn-dual-ball.png"
                                />
                                <div
                                    className="color-btn-text"
                                    style={{ right: "15px", width: "95px" }}>
                                    Dual Pack
                                </div>
                            </div>
                            <div
                                className="color-btn fr gblue"
                                style={{ width: "165px" }}>
                                <img
                                    className="domik"
                                    src="img/val2021_res1.png"
                                />
                                <div
                                    className="color-btn-text"
                                    style={{ right: "15px", width: "95px" }}>
                                    Craftery
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="fapop-times-around-box">
                                <div className="fapop-times-around-prgbar">
                                    <div
                                        className="fapop-times-around-prgbar-full"
                                        style={{ height: "17%" }}></div>
                                    <div className="fapop-times-around-text">
                                        Floor
                                        <br />
                                        1/13
                                        <br />
                                        Trips
                                        <br />
                                        0/13
                                    </div>
                                </div>
                            </div>
                            <div className="fapop-rewards-box-all">
                                <div className="fapop-rewards-text">
                                    rewards
                                </div>
                                <div className="fapop-rewards-box">
                                    <div className="fapop-rewards girl good">
                                        <div className="fapop-rew-pic">
                                            <img src="img/images/superhero/suphero-08/x1/avatar/08sh-ava-1.jpg" />
                                        </div>
                                        <div className="fapop-rew-pts">
                                            Sidzuki Yano
                                        </div>
                                        <div className="fapop-rew-good"></div>
                                        <div className="fapop-pts-num">75</div>
                                    </div>
                                    <div className="fapop-rewards">
                                        <div className="fapop-rew-pic">
                                            <img src="img/ic-abil-dps-plus@2x.png" />
                                        </div>
                                        <div className="fapop-rew-pts">x2</div>
                                        <div className="fapop-pts-num">50</div>
                                    </div>
                                    <div className="fapop-rewards">
                                        <div className="fapop-rew-pic">
                                            <img src="img/arrow_up1.png" />
                                        </div>
                                        <div className="fapop-rew-pts">15</div>
                                        <div className="fapop-pts-num">35</div>
                                    </div>
                                    <div className="fapop-rewards">
                                        <div className="fapop-rew-pic">
                                            <img src="img/sh-icon-chest-128.png" />
                                        </div>
                                        <div className="fapop-rew-pts">35</div>
                                        <div className="fapop-pts-num">20</div>
                                    </div>
                                    <div className="fapop-rewards">
                                        <div className="fapop-rew-pic">
                                            <img src="img/ic-abil-gold-up.png" />
                                        </div>
                                        <div className="fapop-rew-pts">
                                            10K%
                                        </div>
                                        <div className="fapop-pts-num">10</div>
                                    </div>
                                    <div className="fapop-rewards claim">
                                        <div className="fapop-rew-pic">
                                            <img src="img/sh-icon-chest-128.png" />
                                        </div>
                                        <div className="fapop-rew-pts">
                                            claim
                                        </div>
                                        <div className="fapop-pts-num">3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            position="bottom"
                            topdistance="75"
                            tagname="div"
                            tooltiptext="Daily quests reset every 24h!"
                            className="fapop-prgbar-box-all">
                            <div className="fapop-prgbar-reward-box">
                                <div className="fapop-prgbar-reward-pic">
                                    <img src="img/fapop-token-ic.png" />
                                </div>
                                <div className="fapop-prgbar-reward-text">
                                    1
                                </div>
                            </div>
                            <div className="fapop-prgbar-box">
                                <div
                                    className="fapop-prgbar-full"
                                    style={{ width: "40%" }}></div>
                                <div className="fapop-prgbar-text">
                                    Kill 50 minions
                                </div>
                                <div className="fapop-prgbar-text-count">
                                    0/50
                                </div>
                            </div>
                            <div className="fapop-noquest-box">
                                <div className="fapop-noquest-text">
                                    Quests completed. You'll get new quests with
                                    next event.
                                </div>
                            </div>
                        </div>
                        <div className="fapop-rolldice-box-all">
                            <div className="fapop-dice-2"></div>
                            <div className="fapop-dice-1"></div>
                            <div className="color-btn green">
                                <div className="color-btn-text">roll dice</div>
                                <div className="token-count-box">
                                    <div className="token-count">
                                        1/0<span className="f-token"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="color-btn green ten">
                                <div className="color-btn-text">
                                    ten dice rolls
                                </div>
                                <div className="token-count-box">
                                    <div className="token-count">
                                        10/0<span className="f-token"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="fapop-dice-end-1">
                                <img src="img/fapop-dice-end1.png" />
                            </div>
                            <div className="fapop-dice-end-2">
                                <img src="img/fapop-dice-end1.png" />
                            </div>
                            <div className="fapop-dice-end-rolled">
                                <div className="fapop-dice-rolled-text">
                                    you rolled
                                </div>
                            </div>
                        </div>
                        <div className="fapop-info-btn">?</div>
                        <div className="fapop-rewardx2">
                            <div className="fapop-rewardx2-text">
                                double reward
                            </div>
                        </div>
                    </div>
                </div>
                <div id="popupAll" className="popup-hiden popup-view">
                    <div id="popupWrapper" className="popup-layer show">
                        <div className="screen-blend-55"></div>
                        <div id="popupContainer" className="popup-in">
                            <div className="m-popup hw-btlpass-pop rpg__">
                                <div className="title">Fapopoly Event pass</div>
                                <div className="color-box rpg__"></div>
                                <div className="hw-btlpass-box-all">
                                    <div className="hw-btlpass-collect-box-all">
                                        <div className="bp-info-btn">?</div>
                                        <div className="hw-btlpass-collect-box">
                                            <div className="hw-btlpass-collect-box-text">
                                                Get 0/25.2K
                                                <span className="ic-pumpkins bf__"></span>
                                                to get these girls!
                                            </div>
                                        </div>
                                        <div className="hw-squad-holder">
                                            <div className="hw-hero-box">
                                                <div className="hero-avatar-box">
                                                    <img
                                                        className="hero-avatar"
                                                        src="img/unknown-hero-ava.jpg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="hw-hero-box">
                                                <div className="hero-avatar-box">
                                                    <img
                                                        className="hero-avatar"
                                                        src="img/images/superhero/suphero-653/x1/avatar/653sh-ava-1.jpg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="hw-hero-box">
                                                <div className="hero-avatar-box">
                                                    <img
                                                        className="hero-avatar"
                                                        src="img/images/superhero/suphero-656/x1/avatar/656sh-ava-1.jpg"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prgball-box">
                                            <div className="prgall-prom">
                                                <div
                                                    className="prg-all-bar"
                                                    style={{
                                                        width: "20%",
                                                    }}></div>
                                            </div>
                                            <div className="prg-all-text">
                                                <span>
                                                    you have 0/28
                                                    <span className="ic-pumpkins bf__"></span>
                                                    pumpkins
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hw-btlpass-level-box-all">
                                        <div className="hw-btlpass-sim-el-box">
                                            <div className="hw-btlpass-level">
                                                level
                                            </div>
                                            <div className="hw-btlpass-elite">
                                                rewards
                                            </div>
                                        </div>
                                        <div className="hw-btlpass-level-simple-box-scroll indiana-scroll-container">
                                            <div className="hw-btlpass-level-level">
                                                <div className="hw-btlpass-level-level-prg"></div>
                                                <div className="hw-btlpass-level-level-num-box">
                                                    <div className="hw-btlpass-level-level-num">
                                                        1
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        2
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        3
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        5
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        6
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        7
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        8
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        9
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        10
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        11
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        12
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        13
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        14
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        15
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        16
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        17
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        18
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        19
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        20
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        21
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        22
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        23
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        24
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        25
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        26
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        27
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        28
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        29
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        30
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        31
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        32
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        33
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        34
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        35
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        36
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        37
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        38
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        39
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        40
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        41
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        42
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        43
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        44
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        45
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        46
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        47
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        48
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        49
                                                    </div>
                                                    <div className="hw-btlpass-level-level-num">
                                                        50
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hw-btlpass-level-elite">
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ic-abil-gold@2x.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        67.2Q
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/sh-icon-chest-128.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        2
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/rpg-poly/item/1.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        3
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-orange.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        2
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-blue.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        2
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-green.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        2
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-pink.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        2
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ic-krasn-butil@2x.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        95
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ic-abil-gold@2x.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        67.2Q
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/sh-icon-chest-128.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        2
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/rpg-poly/item/2.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        3
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-orange.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        2
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-blue.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        2
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-green.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        2
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-pink.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        2
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ic-krasn-butil@2x.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        95
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ic-abil-gold@2x.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        67.2Q
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/sh-icon-chest-128.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        3
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/rpg-poly/item/3.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        3
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-orange.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-blue.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-green.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-pink.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ic-krasn-butil@2x.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        190
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block girl">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/images/superhero/suphero-652/x1/avatar/652sh-ava-1.jpg" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        700
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/sh-icon-chest-128.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        3
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/rpg-poly/item/1.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        6
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-orange.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-blue.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-green.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ic-diamond.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        50
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ic-krasn-butil@2x.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        190
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block girl">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/images/superhero/suphero-653/x1/avatar/653sh-ava-1.jpg" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        700
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/sh-icon-chest-128.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        3
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/rpg-poly/item/2.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        6
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-orange.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-blue.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-green.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-pink.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ic-krasn-butil@2x.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        190
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ic-abil-gold@2x.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        67.2Q
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/sh-icon-chest-128.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        3
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/rpg-poly/item/3.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        6
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-orange.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-blue.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-green.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ms-stone-pink.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        4
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ic-krasn-butil@2x.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        190
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/ic-diamond.png" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        100
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                                <div className="hw-btlpass-level-rew-box block girl">
                                                    <div className="hw-btlpass-level-rew-pic">
                                                        <img src="img/images/superhero/suphero-656/x1/avatar/656sh-ava-1.jpg" />
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-good"></div>
                                                    <div className="hw-btlpass-level-rew-num">
                                                        700
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-check"></div>
                                                    <div className="color-btn green">
                                                        <div className="color-btn-text">
                                                            собрать
                                                        </div>
                                                    </div>
                                                    <div className="hw-btlpass-level-rew-num-block"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hw-btlpass-girl">
                                    <img src="img/break-girl753-hw.png" />
                                </div>
                                <div className="hw-btlpass-btn-box">
                                    <div className="color-btn">
                                        <div className="color-btn-text">
                                            close
                                        </div>
                                    </div>
                                    <div
                                        className="color-btn"
                                        style={{ left: "552px" }}>
                                        <div className="color-btn-text">
                                            Buy Pumpkins
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>
                            <div className="m-popup fapop-rating">
                                <div className="title">rating</div>
                                <div className="btn-close-x"></div>
                                <div className="fapop-rating-content">
                                    <div className="fapop-rating-box-all">
                                        <div className="fapop-rating-box">
                                            <div className="rating-scroll-name-box">
                                                <div className="rating-scroll-name-box">
                                                    <div className="rating-scroll-name var1">
                                                        Место
                                                    </div>
                                                    <div className="rating-scroll-name var2">
                                                        Имя
                                                    </div>
                                                    <div className="rating-scroll-name var3">
                                                        Очки
                                                    </div>
                                                </div>
                                                <div className="rating-scroll-box">
                                                    <div className="rating-scroll">
                                                        <div>
                                                            <div className="rating-card-rank top">
                                                                <div className="top-name-diamond">
                                                                    top
                                                                </div>
                                                            </div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    1
                                                                </div>
                                                                <div className="name">
                                                                    great1962
                                                                    clan RUS
                                                                </div>
                                                                <div className="points">
                                                                    915200
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    2
                                                                </div>
                                                                <div className="name">
                                                                    Strannyk
                                                                    clan RUS
                                                                </div>
                                                                <div className="points">
                                                                    792365
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    3
                                                                </div>
                                                                <div className="name">
                                                                    Lalo-Reborn
                                                                </div>
                                                                <div className="points">
                                                                    470045
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card-rank gold">
                                                                <div className="">
                                                                    gold rank
                                                                </div>
                                                            </div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    4
                                                                </div>
                                                                <div className="name">
                                                                    BiocanonPT
                                                                </div>
                                                                <div className="points">
                                                                    454185
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    5
                                                                </div>
                                                                <div className="name">
                                                                    butterman5
                                                                </div>
                                                                <div className="points">
                                                                    395850
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    6
                                                                </div>
                                                                <div className="name">
                                                                    rage_k
                                                                </div>
                                                                <div className="points">
                                                                    392050
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    7
                                                                </div>
                                                                <div className="name">
                                                                    guest195157216
                                                                </div>
                                                                <div className="points">
                                                                    332695
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    8
                                                                </div>
                                                                <div className="name">
                                                                    seraph26
                                                                </div>
                                                                <div className="points">
                                                                    166255
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    9
                                                                </div>
                                                                <div className="name">
                                                                    Brandor
                                                                </div>
                                                                <div className="points">
                                                                    159065
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    10
                                                                </div>
                                                                <div className="name">
                                                                    Abaris
                                                                </div>
                                                                <div className="points">
                                                                    100240
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    11
                                                                </div>
                                                                <div className="name">
                                                                    vynil22
                                                                </div>
                                                                <div className="points">
                                                                    60355
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    12
                                                                </div>
                                                                <div className="name">
                                                                    dak2mee
                                                                </div>
                                                                <div className="points">
                                                                    49205
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    13
                                                                </div>
                                                                <div className="name">
                                                                    Ksirion
                                                                </div>
                                                                <div className="points">
                                                                    34375
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    14
                                                                </div>
                                                                <div className="name">
                                                                    wilfridsellars
                                                                </div>
                                                                <div className="points">
                                                                    28820
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    15
                                                                </div>
                                                                <div className="name">
                                                                    HH1488babar666
                                                                </div>
                                                                <div className="points">
                                                                    12275
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    16
                                                                </div>
                                                                <div className="name">
                                                                    DEVIL_VALAK
                                                                </div>
                                                                <div className="points">
                                                                    9630
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    17
                                                                </div>
                                                                <div className="name">
                                                                    Ron85
                                                                </div>
                                                                <div className="points">
                                                                    9605
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    18
                                                                </div>
                                                                <div className="name">
                                                                    joako33
                                                                </div>
                                                                <div className="points">
                                                                    9490
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    19
                                                                </div>
                                                                <div className="name">
                                                                    ElDarkikoulol
                                                                </div>
                                                                <div className="points">
                                                                    8880
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    20
                                                                </div>
                                                                <div className="name">
                                                                    kuroneko4110
                                                                </div>
                                                                <div className="points">
                                                                    8470
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card-rank silver">
                                                                <div className="">
                                                                    silver rank
                                                                </div>
                                                            </div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    21
                                                                </div>
                                                                <div className="name">
                                                                    4nubis
                                                                </div>
                                                                <div className="points">
                                                                    8250
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    22
                                                                </div>
                                                                <div className="name">
                                                                    J1MmY9
                                                                </div>
                                                                <div className="points">
                                                                    8230
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    23
                                                                </div>
                                                                <div className="name">
                                                                    Redpala23
                                                                </div>
                                                                <div className="points">
                                                                    8070
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    24
                                                                </div>
                                                                <div className="name">
                                                                    cjdkslagtqfhedkasj
                                                                </div>
                                                                <div className="points">
                                                                    4650
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    25
                                                                </div>
                                                                <div className="name">
                                                                    blubb5511
                                                                </div>
                                                                <div className="points">
                                                                    3645
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card active">
                                                                <div className="number">
                                                                    26
                                                                </div>
                                                                <div className="name">
                                                                    Voodoofugu
                                                                </div>
                                                                <div className="points">
                                                                    2760
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    27
                                                                </div>
                                                                <div className="name">
                                                                    Count_Dan99
                                                                </div>
                                                                <div className="points">
                                                                    1800
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    28
                                                                </div>
                                                                <div className="name">
                                                                    Aaa
                                                                </div>
                                                                <div className="points">
                                                                    1080
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    29
                                                                </div>
                                                                <div className="name">
                                                                    Noodlearms52
                                                                </div>
                                                                <div className="points">
                                                                    1000
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    30
                                                                </div>
                                                                <div className="name">
                                                                    aharond
                                                                </div>
                                                                <div className="points">
                                                                    1000
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    31
                                                                </div>
                                                                <div className="name">
                                                                    tecmogod
                                                                </div>
                                                                <div className="points">
                                                                    345
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    32
                                                                </div>
                                                                <div className="name">
                                                                    biker72
                                                                </div>
                                                                <div className="points">
                                                                    130
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    33
                                                                </div>
                                                                <div className="name">
                                                                    Fujisaki3986
                                                                </div>
                                                                <div className="points">
                                                                    80
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    34
                                                                </div>
                                                                <div className="name">
                                                                    Kojima2558
                                                                </div>
                                                                <div className="points">
                                                                    80
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    35
                                                                </div>
                                                                <div className="name">
                                                                    Bloodking6
                                                                </div>
                                                                <div className="points">
                                                                    80
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    36
                                                                </div>
                                                                <div className="name">
                                                                    roromomo2
                                                                </div>
                                                                <div className="points">
                                                                    80
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    37
                                                                </div>
                                                                <div className="name">
                                                                    lxa06
                                                                </div>
                                                                <div className="points">
                                                                    80
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card">
                                                                <div className="number">
                                                                    38
                                                                </div>
                                                                <div className="name">
                                                                    TheOwO
                                                                </div>
                                                                <div className="points">
                                                                    80
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="rating-card color2">
                                                                <div className="number">
                                                                    39
                                                                </div>
                                                                <div className="name">
                                                                    Ogava6114
                                                                </div>
                                                                <div className="points">
                                                                    40
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rating-ped-box">
                                            <div className="ped-box rate1">
                                                <div className="ped-box-noreward">
                                                    нет награды
                                                </div>
                                                <div className="rating-ped-box-num">
                                                    <div className="ped-box-num-text var1">
                                                        51-100
                                                    </div>
                                                </div>
                                                <div className="ped-box-portrait"></div>
                                            </div>
                                            <div className="ped-box rate2 active">
                                                <div className="ped-box-prize"></div>
                                                <div className="rating-ped-box-num">
                                                    <div className="ped-box-num-text var2">
                                                        21-50
                                                    </div>
                                                </div>
                                                <div className="ped-box-portrait"></div>
                                            </div>
                                            <div className="ped-box rate3">
                                                <div className="ped-box-prize"></div>
                                                <div className="rating-ped-box-num">
                                                    <div className="ped-box-num-text var3">
                                                        4-20
                                                    </div>
                                                </div>
                                                <div className="ped-box-portrait"></div>
                                            </div>
                                            <div className="ped-box rate4">
                                                <div className="ped-box-prize"></div>
                                                <div className="rating-ped-box-num">
                                                    <div className="ped-box-num-text var4">
                                                        1-3
                                                    </div>
                                                </div>
                                                <div className="ped-box-portrait"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fapop-topreward-box-all">
                                        <div className="cardnameback">
                                            <div className="card-text">
                                                top reward
                                            </div>
                                        </div>
                                        <div className="lhero-box">
                                            <div className="lhero-pic">
                                                <img src="img/images/superhero/suphero-250/x2/250sh-1.jpg" />
                                            </div>
                                            <div className="topname-box">
                                                <div className="lrare-box common"></div>
                                                <div className="sh2-icon left">
                                                    <img src="img/cur-c.png" />
                                                </div>
                                                <div className="sh2-icon-forgirl right">
                                                    <img src="img/cur2-gun.png" />
                                                </div>
                                                <div className="lhero-name-box">
                                                    <div className="lhero-name">
                                                        Tanigawa Kazue
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bottom-star-box-girl-count-box">
                                                <div className="sh2-prgbar-all undefined">
                                                    <div
                                                        className="sh2-prgbar"
                                                        style={{
                                                            width: "0%",
                                                        }}></div>
                                                    <div className="sh2-prgbar-text">
                                                        0/30
                                                    </div>
                                                </div>
                                                <div className="girl-bonus-box">
                                                    <div className="girl-bonus-pic">
                                                        <img src="img/images/superhero/suphero-250/x2/avatar/250sh-ava-1.jpg" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sv-sale-bonus-box-all">
                                                <div className="ashero-bonus-box">
                                                    <div className="acbonus-box">
                                                        <div className="lvlbox-name">
                                                            Undercover cop
                                                        </div>
                                                        <div className="bonus-lvl-box-bonus-box">
                                                            <div className="bonus-lvl-box-bonus">
                                                                +330%
                                                                <div className="ff-sh2-icon gold"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="acbonus-box second">
                                                        <div className="lvlbox-name">
                                                            Dangerous thing
                                                        </div>
                                                        <div className="bonus-lvl-box-bonus-box">
                                                            <div className="bonus-lvl-box-bonus">
                                                                +4.1% dps to
                                                                <div className="ff-sh2-icon">
                                                                    <img src="img/cur2-gun.png" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="color-btn">
                                    <div className="color-btn-text">
                                        закрыть
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(V2MainScreen09HwFapopolyComponent);
