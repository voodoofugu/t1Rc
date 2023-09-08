import React, { useEffect } from "react";
import v2ScreenMineEventChest from "../styles/v2-screen-mine-event-chest.scss";
import screenInfoPop from "../styles/screen-info-pop.scss";

const V2MainScreen18MineChestComponent = () => {
    // создаём такой же айди как у родителя здесь и так попадаем к нему
    const currentUrl = window.location.href;
    const fileNameWithoutExtension = currentUrl.split("/").pop().split(".")[0];
    const pageContainerId = `root-${fileNameWithoutExtension}`;
    const pageContainer = document.getElementById(pageContainerId);

    useEffect(() => {
        if (pageContainer && !pageContainer.classList.contains("noScripts")) {
            [...document.querySelectorAll(".m-popup")].map((i) => {
                i.style.display = "none";
            });
            const aC = document.querySelector(".m-popup.angel-chests-info");
            const aI = document.querySelector(".m-popup.info-pop");
            const re = document.querySelector(".popup-layer");

            [
                ...document.querySelectorAll(".btn-close-x, .screen-blend-55"),
            ].map((i) => {
                i.addEventListener("click", () => {
                    re.style.display = "none";
                    aC.style.display = "none";
                    aI.style.display = "none";
                });
            });

            [...document.querySelectorAll(".mn-btn-box .x-info-btn")].map(
                (i) => {
                    i.addEventListener("click", () => {
                        re.style.display = "block";
                        aC.style.display = "block";
                    });
                }
            );

            const aIb = document.querySelector(
                ".mine-event-screen-head .x-info-btn"
            );
            aIb.addEventListener("click", () => {
                re.style.display = "block";
                aI.style.display = "block";
            });
            return;
        }
        return () => {};
    }, []);
    return (
        <>
            <div className="main world1">
                <div className="mine-event-screen-chest">
                    <div className="pretty-holder"></div>
                    <div className="mine-event-screen-head-box">
                        <div className="mine-event-screen-head">
                            <div className="x-info-btn">i</div>
                            <div className="gray-holder first"></div>
                            <div className="color-btn goddess disabled">
                                <div className="color-btn-icon"></div>
                                <div className="color-btn-text">Claim</div>
                            </div>
                            <div className="mn-ch-duh-count-box">
                                <div className="mn-ch-duh-count-pic"></div>
                                <div className="mn-ch-duh-count">19.2K</div>
                            </div>
                            <div className="color-btn duhbuy duhbuy2">
                                <div className="color-btn-icon">
                                    <img src="img/v2-mn-soul-sg-160.png" />
                                </div>
                                <div className="color-btn-text">Buy</div>
                            </div>
                            <div className="gray-holder third"></div>
                            <div className="color-btn duhbuy bp">
                                <div className="color-btn-icon">
                                    <img src="img/v2-mn-ic-mine.png" />
                                </div>
                                <div className="color-btn-text">
                                    Battle Pass
                                </div>
                            </div>
                            <div className="color-btn duhbuy">
                                <div className="color-btn-icon">
                                    <img src="img/v2-mn-pr-100-in.png" />
                                </div>
                                <div className="color-btn-text">Mine</div>
                            </div>
                            <div className="color-btn exit">
                                <div className="color-btn-text">Back</div>
                            </div>
                        </div>
                    </div>
                    <div className="gacha-quest-prg">
                        <div
                            className="gacha-quest-prgbar"
                            style={{ width: "0%" }}></div>
                        <div className="gacha-quest-prg-text">0/1000</div>
                    </div>
                    <div className="mn-chest-box chest-silver"></div>
                    <div className="mn-chest-box chest-gold"></div>
                    <div className="mn-chest-box chest-bronze"></div>
                    <div className="mn-btn-box silver">
                        <div className="x-info-btn">?</div>
                        <div className="color-btn green">
                            <div className="color-btn-text">
                                <div className="duh">
                                    <span className="f-duh"></span>100
                                </div>
                                <div className="color-btn-text1">open x1</div>
                            </div>
                        </div>
                        <div className="color-btn green">
                            <div className="color-btn-text">
                                <div className="duh">
                                    <span className="f-duh"></span>900
                                </div>
                                <div className="color-btn-text1">open x10</div>
                            </div>
                        </div>
                    </div>
                    <div className="mn-btn-box gold">
                        <div className="x-info-btn">?</div>
                        <div className="color-btn green">
                            <div className="color-btn-text">
                                <div className="duh">
                                    <span className="f-duh"></span>200
                                </div>
                                <div className="color-btn-text1">open x1</div>
                            </div>
                        </div>
                        <div className="color-btn green">
                            <div className="color-btn-text">
                                <div className="duh">
                                    <span className="f-duh"></span>1.8K
                                </div>
                                <div className="color-btn-text1">open x10</div>
                            </div>
                        </div>
                    </div>
                    <div className="mn-btn-box bronze">
                        <div className="x-info-btn">?</div>
                        <div className="color-btn green">
                            <div className="color-btn-text">
                                <div className="duh">
                                    <span className="f-duh"></span>50
                                </div>
                                <div className="color-btn-text1">open x1</div>
                            </div>
                        </div>
                        <div className="color-btn green">
                            <div className="color-btn-text">
                                <div className="duh">
                                    <span className="f-duh"></span>450
                                </div>
                                <div className="color-btn-text1">open x10</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div id="popupWrapper" className="popup-layer">
                        <div className="screen-blend-55"></div>
                        <div id="popupContainer" className="popup-in">
                            <div className="m-popup angel-chests-info">
                                <div className="title">Angel Chests Info</div>
                                <div className="content">
                                    <div className="header-box">
                                        <div className="header-text-wrap">
                                            <div className="header-text">
                                                You Can Get From
                                                <div>1</div>
                                                to
                                                <div>10</div>
                                                Pieces This Angels:
                                            </div>
                                        </div>
                                    </div>
                                    <div className="angels-skrollbox-wrap">
                                        <div className="angels-skrollbox">
                                            <div className="angel-avatar-box">
                                                <div className="angel-avatar-wrap">
                                                    <img
                                                        className="angel-avatar"
                                                        src="img/images/goddess/goddess-1/x2/ava/goddess-1-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="angel-card-progress-bar-wrap">
                                                    <div className="progress">
                                                        <div
                                                            className="fulfilled"
                                                            style={{
                                                                width: "40%",
                                                            }}></div>
                                                    </div>
                                                    <div className="value">
                                                        <div className="from">
                                                            40
                                                        </div>
                                                        <div className="to">
                                                            100
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="angel-avatar-box">
                                                <div className="angel-avatar-wrap">
                                                    <img
                                                        className="angel-avatar"
                                                        src="img/images/goddess/goddess-1/x2/ava/goddess-1-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="angel-card-progress-bar-wrap">
                                                    <div className="progress">
                                                        <div
                                                            className="fulfilled"
                                                            style={{
                                                                width: "40%",
                                                            }}></div>
                                                    </div>
                                                    <div className="value">
                                                        <div className="from">
                                                            40
                                                        </div>
                                                        <div className="to">
                                                            100
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="angel-avatar-box">
                                                <div className="angel-avatar-wrap">
                                                    <img
                                                        className="angel-avatar"
                                                        src="img/images/goddess/goddess-1/x2/ava/goddess-1-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="angel-card-progress-bar-wrap">
                                                    <div className="progress">
                                                        <div
                                                            className="fulfilled"
                                                            style={{
                                                                width: "40%",
                                                            }}></div>
                                                    </div>
                                                    <div className="value">
                                                        <div className="from">
                                                            40
                                                        </div>
                                                        <div className="to">
                                                            100
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="angel-avatar-box">
                                                <div className="angel-avatar-wrap">
                                                    <img
                                                        className="angel-avatar"
                                                        src="img/images/goddess/goddess-1/x2/ava/goddess-1-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="angel-card-progress-bar-wrap">
                                                    <div className="progress">
                                                        <div
                                                            className="fulfilled"
                                                            style={{
                                                                width: "40%",
                                                            }}></div>
                                                    </div>
                                                    <div className="value">
                                                        <div className="from">
                                                            40
                                                        </div>
                                                        <div className="to">
                                                            100
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="angel-avatar-box">
                                                <div className="angel-avatar-wrap">
                                                    <img
                                                        className="angel-avatar"
                                                        src="img/images/goddess/goddess-1/x2/ava/goddess-1-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="angel-card-progress-bar-wrap">
                                                    <div className="progress">
                                                        <div
                                                            className="fulfilled"
                                                            style={{
                                                                width: "40%",
                                                            }}></div>
                                                    </div>
                                                    <div className="value">
                                                        <div className="from">
                                                            40
                                                        </div>
                                                        <div className="to">
                                                            100
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="angel-avatar-box">
                                                <div className="angel-avatar-wrap">
                                                    <img
                                                        className="angel-avatar"
                                                        src="img/images/goddess/goddess-1/x2/ava/goddess-1-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="angel-card-progress-bar-wrap">
                                                    <div className="progress">
                                                        <div
                                                            className="fulfilled"
                                                            style={{
                                                                width: "40%",
                                                            }}></div>
                                                    </div>
                                                    <div className="value">
                                                        <div className="from">
                                                            40
                                                        </div>
                                                        <div className="to">
                                                            100
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="angel-avatar-box">
                                                <div className="angel-avatar-wrap">
                                                    <img
                                                        className="angel-avatar"
                                                        src="img/images/goddess/goddess-1/x2/ava/goddess-1-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="angel-card-progress-bar-wrap">
                                                    <div className="progress">
                                                        <div
                                                            className="fulfilled"
                                                            style={{
                                                                width: "40%",
                                                            }}></div>
                                                    </div>
                                                    <div className="value">
                                                        <div className="from">
                                                            40
                                                        </div>
                                                        <div className="to">
                                                            100
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="angel-avatar-box">
                                                <div className="angel-avatar-wrap">
                                                    <img
                                                        className="angel-avatar"
                                                        src="img/images/goddess/goddess-1/x2/ava/goddess-1-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="angel-card-progress-bar-wrap">
                                                    <div className="progress">
                                                        <div
                                                            className="fulfilled"
                                                            style={{
                                                                width: "40%",
                                                            }}></div>
                                                    </div>
                                                    <div className="value">
                                                        <div className="from">
                                                            40
                                                        </div>
                                                        <div className="to">
                                                            100
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="angel-avatar-box">
                                                <div className="angel-avatar-wrap">
                                                    <img
                                                        className="angel-avatar"
                                                        src="img/images/goddess/goddess-1/x2/ava/goddess-1-1-ava.jpg"
                                                    />
                                                </div>
                                                <div className="angel-card-progress-bar-wrap">
                                                    <div className="progress">
                                                        <div
                                                            className="fulfilled"
                                                            style={{
                                                                width: "40%",
                                                            }}></div>
                                                    </div>
                                                    <div className="value">
                                                        <div className="from">
                                                            40
                                                        </div>
                                                        <div className="to">
                                                            100
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chest-points-box">
                                        <div className="drop-angels-info">
                                            <div className="info-icn">i</div>
                                            <div className="info-text-box">
                                                <div className="info-header">
                                                    Chest Has a Chance of
                                                    Dropping:
                                                </div>
                                                <div className="text-content">
                                                    <div className="text">
                                                        <div className="text-selected">
                                                            100%
                                                        </div>
                                                        to Drop
                                                        <div className="text-selected selected2">
                                                            1
                                                        </div>
                                                        Angel Pieces
                                                    </div>
                                                    <div className="text">
                                                        <div className="text-selected">
                                                            70%
                                                        </div>
                                                        to Drop
                                                        <div className="text-selected selected2">
                                                            2
                                                        </div>
                                                        Angel Pieces
                                                    </div>
                                                    <div className="text">
                                                        <div className="text-selected">
                                                            50%
                                                        </div>
                                                        to Drop
                                                        <div className="text-selected selected2">
                                                            3
                                                        </div>
                                                        Angel Pieces
                                                    </div>
                                                    <div className="text">
                                                        <div className="text-selected">
                                                            30%
                                                        </div>
                                                        to Drop
                                                        <div className="text-selected selected2">
                                                            4
                                                        </div>
                                                        Angel Pieces
                                                    </div>
                                                    <div className="text">
                                                        <div className="text-selected">
                                                            5%
                                                        </div>
                                                        to Drop
                                                        <div className="text-selected selected2">
                                                            5
                                                        </div>
                                                        Angel Pieces
                                                    </div>
                                                    <div className="text">
                                                        <div className="text-selected">
                                                            1%
                                                        </div>
                                                        to Drop
                                                        <div className="text-selected selected2">
                                                            10
                                                        </div>
                                                        Angel Pieces
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chest-points-icn"></div>
                                        <div className="chest-points-value">
                                            +15
                                            <div className="chest-points-text">
                                                Chest Points
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>

                            <div
                                className="m-popup info-pop"
                                style={{ display: "block" }}>
                                <div className="title">Angels Info</div>
                                <div className="content">
                                    <div className="text-box">
                                        <div className="text">
                                            <li>
                                                Angels are unique girls who are
                                                among the elite. They help our
                                                heroines fight monsters.
                                            </li>
                                            <br />
                                            <li>
                                                You can get Angel and her Stars
                                                by collecting Angel Soul Pieces
                                                from Angel Chests in the Dark
                                                Angel Garden. You will need
                                                Angel Spirit to open chests.
                                                Angel Spirit can be collected
                                                from various events in the game
                                                and at the Spirit Shop. The buff
                                                multiplier increases
                                                significantly when Angels gain
                                                new stars.
                                            </li>
                                            <br />
                                            <li>
                                                Each Angel has six Heroines
                                                attached to her. You can add
                                                more heroines to each Angel. You
                                                can buff each Heroine. Also,
                                                Superheroines can be attached to
                                                each Angel. Combine them in such
                                                a way as to get the most power.
                                            </li>
                                            <br />
                                            <li>
                                                You will need Angel Essence to
                                                buff Dark DPS. Angel Essence can
                                                be collected from Events and
                                                Angel Chests.
                                            </li>
                                            <br />
                                            <li>
                                                Each buff increases Angel's
                                                level required to unlock Angel's
                                                Erotic Album.
                                            </li>
                                        </div>
                                    </div>
                                    <div className="color-btn gold close">
                                        <div className="color-btn-text">
                                            Закрыть
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-close-x"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(V2MainScreen18MineChestComponent);
