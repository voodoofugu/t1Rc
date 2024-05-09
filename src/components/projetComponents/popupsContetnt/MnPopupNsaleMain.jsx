import React, { useState, useEffect } from "react";
import { useDispatch } from "../../templateComponents/GlobalStateStor";
import NsalePrBox from "../UIComponents/NsalePrBox";
import ItemBox from "../UIComponents/ItemBox";

function NmPopContentChest({ hole }) {
  return (
    <div className="nm-pop-content">
      <div className="nsale-main-left-box">
        <div className="nsale-gift-box">
          <div className="nsale-gift-box-pic">
            <img
              src={hole ? "img/hole/holeChest@2x.png" : "img/v2-ns-chest.png"}
            ></img>
          </div>
          <div className="nsale-pr-box-count">27</div>
        </div>
        <div className="color-btn ">
          <div className="color-btn-text">
            {hole ? "open chest" : "open box"}
          </div>
        </div>
        <div className="color-btn ">
          <div className="color-btn-text">open all</div>
        </div>
        <div className="nsale-pr-box">
          <div className="nsale-pr-box-pic-box">
            <div className="nsale-pr-box-pic">
              <img
                src={hole ? "img/hole/holeKay.png" : "img/v2-ns-ball.png"}
              ></img>
            </div>
            <div className="nsale-pr-box-count">1</div>
          </div>
        </div>
      </div>
      <div className="nsale-main-r-top-box">
        <div className="nsale-main-r-top-text2">
          {hole ? (
            <>
              During the event, you will receive Sacred Chests upon defeating
              monsters in the depths of <b>the abyss</b>. Open these{" "}
              <b>Sacred Chests</b> to obtain <b>Spiritual Keys</b>, which can be
              used to <b>unlock the Gates</b> and reveal{" "}
              <b>bountiful rewards</b> within. In addition to the Spiritual
              Keys, there are also other generous gifts waiting for you inside
              the Sacred Chests!
            </>
          ) : (
            <>
              During the event, you'll obtain Magic Boxes when killing monsters
              in&nbsp;
              <b style={{ color: "rgb(84, 71, 70)", fontSize: "16px" }}>
                {hole ? "Dark Hole" : "Dark Tower"}
              </b>
              .<br />
              Open boxes to get generous rewards, collect magic energy and
              exchange it for unique girls and prizes!
            </>
          )}
        </div>
        <div className="color-btn gblue koi-rb">
          <img
            className="domik"
            src={hole ? "img/hole/holeIcn.png" : "img/rating-sign-gold@1x.png"}
          ></img>
          <div className="color-btn-text">
            {hole ? "Forbidden ABYSS" : "Dark Tower"}
          </div>
        </div>
      </div>
      <div className="nsale-main-r-bottom-box">
        <div className="nsale-main-r-bottom-posrew">possible rewards</div>
        <div className="nsale-pr-box-all">
          <div className="nsale-pr-box">
            <div className="nsale-pr-box-pic-box">
              <div className="nsale-pr-box-pic">
                <img
                  src={hole ? "img/hole/holeCoin.png" : "img/v2-ns-coin2.png"}
                ></img>
              </div>
              <div className="nsale-pr-box-count">1</div>
            </div>
            <div className="nsale-pr-box-text">16.67%</div>
          </div>
          <div className="nsale-pr-box">
            <div className="nsale-pr-box-pic-box">
              <div className="nsale-pr-box-pic">
                <img src="img/change-ic-gem-master.png"></img>
              </div>
              <div className="nsale-pr-box-count">gems</div>
            </div>
            <div className="nsale-pr-box-text">16.67%</div>
          </div>
          <div className="nsale-pr-box">
            <div className="nsale-pr-box-pic-box">
              <div className="nsale-pr-box-pic">
                <img src="img/change-ic-gold.png"></img>
              </div>
              <div className="nsale-pr-box-count">1h</div>
            </div>
            <div className="nsale-pr-box-text">16.67%</div>
          </div>
          <div className="nsale-pr-box">
            <div className="nsale-pr-box-pic-box">
              <div className="nsale-pr-box-pic">
                <img src="img/change-ic-essence.png"></img>
              </div>
              <div className="nsale-pr-box-count">pack</div>
            </div>
            <div className="nsale-pr-box-text">16.67%</div>
          </div>
          <div className="nsale-pr-box">
            <div className="nsale-pr-box-pic-box">
              <div className="nsale-pr-box-pic">
                <img src="img/v2-res-mithril2.png"></img>
              </div>
              <div className="nsale-pr-box-count">15K</div>
            </div>
            <div className="nsale-pr-box-text">16.67%</div>
          </div>
          <div className="nsale-pr-box">
            <div className="nsale-pr-box-pic-box">
              <div className="nsale-pr-box-pic">
                <img src="img/change-ic-ticket.png"></img>
              </div>
              <div className="nsale-pr-box-count">1</div>
            </div>
            <div className="nsale-pr-box-text">16.67%</div>
          </div>
        </div>
      </div>
      <div className="nsale-plus"></div>
    </div>
  );
}

function NmPopContentMagic({ handleMenuClick, hole }) {
  return (
    <div className="nm-pop-content">
      <div className="koi-arrow slick-disabled"></div>
      <div className="koi-arrow right"></div>
      <div className="stageWrap">
        <div style={{ width: "max-content", display: "flex" }}>
          <div style={{ width: "152px" }}>
            <div
              className="nm-pop-stupen-buble-box one open"
              onClick={() => handleMenuClick("magicStage")}
            >
              <div className="nm-pop-stupen-buble">
                <img
                  src={hole ? "img/hole/holeKay.png" : "img/v2-ns-ball.png"}
                ></img>
              </div>
              <div className="nm-pop-stupen-name">
                {hole ? "gate 1" : "stage 1"}
              </div>
            </div>
          </div>
          <div style={{ width: "152px" }}>
            <div
              className="nm-pop-stupen-buble-box two"
              onClick={() => handleMenuClick("magicStage")}
            >
              <div className="nm-pop-stupen-buble">
                <img src="img/v2-lock-ic.png"></img>
              </div>
              <div className="nm-pop-stupen-name">
                {hole ? "gate 2" : "stage 2"}
              </div>
            </div>
          </div>
          <div style={{ width: "152px" }}>
            <div
              className="nm-pop-stupen-buble-box three"
              onClick={() => handleMenuClick("magicStage")}
            >
              <div className="nm-pop-stupen-buble">
                <img src="img/v2-lock-ic.png"></img>
              </div>
              <div className="nm-pop-stupen-name">
                {hole ? "gate 3" : "stage 3"}
              </div>
            </div>
          </div>
          <div style={{ width: "152px" }}>
            <div
              className="nm-pop-stupen-buble-box four"
              onClick={() => handleMenuClick("magicStage")}
            >
              <div className="nm-pop-stupen-buble">
                <img src="img/v2-lock-ic.png"></img>
              </div>
              <div className="nm-pop-stupen-name">
                {hole ? "gate 4" : "stage 4"}
              </div>
            </div>
          </div>
          <div style={{ width: "152px" }}>
            <div
              className="nm-pop-stupen-buble-box five"
              onClick={() => handleMenuClick("magicStage")}
            >
              <div className="nm-pop-stupen-buble">
                <img src="img/v2-lock-ic.png"></img>
              </div>
              <div className="nm-pop-stupen-name">
                {hole ? "gate 5" : "stage 5"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function NmPopContentMagicStage({ handleMenuClick, hole }) {
  return (
    <div className="nm-pop-content">
      <div className="np-pop-stupen-pop-stage">
        {hole ? "gate 1" : "stage 1"}
      </div>
      <div className="nmPopCount">
        <div className="countPic"></div>
        <div className="countValue">0</div>
      </div>
      <div className="np-pop-stupen-pop-m-text">
        Unlock the next stage by claiming any 2 items
      </div>
      <div className="np-pop-stupen-pop-rew-box-all">
        <div className="np-pop-stupen-pop-rew-box">
          <ItemBox
            itemClass="new"
            count="50"
            itemPic="img/images/goddess/goddess-4/x2/ava/goddess-ava-1.jpg"
          />
          <div className="np-pop-stupen-pop-rew-box-limit">limit: 1</div>
          <div className="color-btn">
            <div className="color-btn-text">
              <div>
                buy
                <span className="f-ball"></span>
                100
              </div>
            </div>
          </div>
        </div>
        <div className="np-pop-stupen-pop-rew-box">
          <ItemBox count="20" itemPic="img/trophy/trophy/ava/003_ava_1.png" />
          <div className="np-pop-stupen-pop-rew-box-limit">limit: 1</div>
          <div className="color-btn" style={{ filter: "grayscale(1)" }}>
            <div className="color-btn-text">
              <div>
                buy
                <span className="f-ball"></span>
                100
              </div>
            </div>
          </div>
        </div>
        <div className="np-pop-stupen-pop-rew-box">
          <ItemBox
            count="10"
            itemPic="img/images/superhero/suphero-10/x1/avatar/10sh-ava-1.jpg"
          />
          <div className="np-pop-stupen-pop-rew-box-limit">limit: 1</div>
          <div className="color-btn" style={{ filter: "grayscale(1)" }}>
            <div className="color-btn-text">
              <div>
                buy
                <span className="f-ball"></span>
                100
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="color-btn back" onClick={() => handleMenuClick("magic")}>
        <div className="color-btn-text">back</div>
      </div>
    </div>
  );
}

function NmPopContentFountain({ hole }) {
  const [addedReward, setAddedReward] = useState(null);

  return (
    <div className="nm-pop-content">
      <div className="nmPopCount">
        <div className="countPic"></div>
        <div className="countValue">0</div>
      </div>
      <div className="nm-pop-fon-rew-pop">
        {addedReward === true ? <NsalePrBox /> : null}
        <div className="nm-pop-fon-rew-pop-text">0 coins tossed</div>
      </div>
      <div className="nm-pop-fon-coin-box silver0">
        <div
          className="nm-pop-fon-coin"
          onClick={() => {
            setAddedReward(null);
            setTimeout(() => {
              setAddedReward(true);
            }, 10);
          }}
        >
          <div className="nm-pop-fon-coin-text">Toss</div>
          <img
            src={hole ? "img/hole/holeCoin.png" : "img/v2-ns-coin2.png"}
          ></img>
        </div>
        {/* <div className="nm-pop-fon-coin-count">0</div> */}
      </div>
      <div className="nm-pop-fon-coin-box right">
        <div className="nm-pop-fon-coin">
          <div className="nm-pop-fon-coin-text">Toss 100</div>
          <img
            src={hole ? "img/hole/holeCoin2.png" : "img/v2-ns-coin2.png"}
          ></img>
        </div>
        {/* <div className="nm-pop-fon-coin-count">0</div> */}
      </div>
      <div className="nm-pop-fon-rew-box-all">
        {/* <div className="nm-pop-fon-rew-box-line"></div> */}
        <div className="nsale-pr-box check">
          <div
            className="nsale-pr-box-pic-box"
            item="[object Object]"
            hero_id="0"
            top_offset="10"
          >
            <div className="nsale-pr-box-pic">
              <img src="img/evPopArts/potion_yellow.png"></img>
            </div>
            <div className="nsale-pr-box-count">5000</div>
          </div>
          <div className="nm-pop-fon-rew-box-count">10</div>
          <div className="nm-pop-fon-rew-box-check"></div>
        </div>
        <div className="nsale-pr-box check">
          <div
            className="nsale-pr-box-pic-box"
            item="[object Object]"
            hero_id="0"
            top_offset="10"
          >
            <div className="nsale-pr-box-pic">
              <img src="img/ms-stone-all.png"></img>
            </div>
            <div className="nsale-pr-box-count">giga x 5</div>
          </div>
          <div className="nm-pop-fon-rew-box-count">20</div>
          <div className="nm-pop-fon-rew-box-check"></div>
        </div>
        <div className="nsale-pr-box ">
          <div
            className="nsale-pr-box-pic-box"
            item="[object Object]"
            hero_id="0"
            top_offset="10"
          >
            <div className="nsale-pr-box-pic">
              <img src="img/ic-abil-gold-up.png"></img>
            </div>
            <div className="nsale-pr-box-count">10K%</div>
          </div>
          <div className="nm-pop-fon-rew-box-count">50</div>
          <div className="nm-pop-fon-rew-box-check"></div>
        </div>
        <div className="nsale-pr-box ">
          <div className="nsale-pr-box-pic-box">
            <div className="nsale-pr-box-pic">
              <img src="img/images/superhero/suphero-01/x2/avatar/01sh-ava-1.jpg"></img>
            </div>
            <div className="nsale-pr-box-count">100</div>
          </div>
          <div className="nm-pop-fon-rew-box-count">100</div>
          <div className="nm-pop-fon-rew-box-check"></div>
        </div>
        <div className="nsale-pr-box ">
          <div
            className="nsale-pr-box-pic-box"
            item="[object Object]"
            hero_id="0"
            top_offset="10"
          >
            <div className="nsale-pr-box-pic">
              <img src="img/arrow_up1.png"></img>
            </div>
            <div className="nsale-pr-box-count">15</div>
          </div>
          <div className="nm-pop-fon-rew-box-count">200</div>
          <div className="nm-pop-fon-rew-box-check"></div>
        </div>
        <div className="nsale-pr-box ">
          <div className="nsale-pr-box-pic-box">
            <div className="nsale-pr-box-pic">
              <img src="img/images/hero-all/tithero-58/x2/ava/tithero-58-1-ava.jpg"></img>
            </div>
            <div className="nsale-pr-box-count">1</div>
          </div>
          <div className="nm-pop-fon-rew-box-count">500</div>
          <div className="nm-pop-fon-rew-box-check"></div>
        </div>
      </div>
    </div>
  );
}

function NmPopContentOffer({ hole }) {
  return (
    <div className="nm-pop-content">
      <div className="nm-pop-offer-scroll-box">
        <div className="nm-pop-offer-scroll">
          <div className="nm-pop-offer-box-all">
            <div className="n-sale-box">
              <div className="nsale-pr-box">
                <div className="nsale-pr-box-pic-box">
                  <div className="nsale-pr-box-pic">
                    <img
                      src={hole ? "img/hole/holeKay.png" : "img/v2-ns-ball.png"}
                    ></img>
                  </div>
                  <div className="nsale-pr-box-count">300</div>
                </div>
              </div>
              <div className="nsale-pr-box">
                <div className="nsale-pr-box-pic-box">
                  <div className="nsale-pr-box-pic">
                    <img
                      src={
                        hole ? "img/hole/holeCoin.png" : "img/v2-ns-coin2.png"
                      }
                    ></img>
                  </div>
                  <div className="nsale-pr-box-count">25</div>
                </div>
              </div>
              <div className="nsale-pr-box">
                <div className="nsale-pr-box-pic-box">
                  <div className="nsale-pr-box-pic">
                    <img src="img/card-ic-koloda2@2x.png"></img>
                  </div>
                  <div className="nsale-pr-box-count">25</div>
                </div>
              </div>
            </div>
            <div className="store-button">
              <div className="but-price">$19.99</div>
            </div>
          </div>
          <div className="nm-pop-offer-box-all">
            <div className="n-sale-box">
              <div className="nsale-pr-box">
                <div className="nsale-pr-box-pic-box">
                  <div className="nsale-pr-box-pic">
                    <img
                      src={hole ? "img/hole/holeKay.png" : "img/v2-ns-ball.png"}
                    ></img>
                  </div>
                  <div className="nsale-pr-box-count">1250</div>
                </div>
              </div>
              <div className="nsale-pr-box">
                <div className="nsale-pr-box-pic-box">
                  <div className="nsale-pr-box-pic">
                    <img
                      src={
                        hole ? "img/hole/holeCoin.png" : "img/v2-ns-coin2.png"
                      }
                    ></img>
                  </div>
                  <div className="nsale-pr-box-count">100</div>
                </div>
              </div>
              <div className="nsale-pr-box">
                <div className="nsale-pr-box-pic-box">
                  <div className="nsale-pr-box-pic">
                    <img src="img/card-ic-koloda2@2x.png"></img>
                  </div>
                  <div className="nsale-pr-box-count">50</div>
                </div>
              </div>
            </div>
            <div className="store-button">
              <div className="but-price">$49.99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MnPopupNsaleMain({ hole }) {
  const dispatch = useDispatch();

  const [activeMenu, setActiveMenu] = useState("chest");

  useEffect(() => {
    dispatch({
      type: "POPUP_CHANGE",
      payload: `mn-popup ${
        activeMenu === "magic"
          ? "nsale-stupen"
          : activeMenu === "magicStage"
          ? "nsale-stupen pop"
          : activeMenu === "fountain"
          ? "nsale-fountain"
          : activeMenu === "offer"
          ? "nsale-shop"
          : "nsale-main"
      } ${hole ? "hole" : ""}`,
    });
  }, [activeMenu, hole]);

  function handleMenuClick(menuSectionName) {
    setActiveMenu(menuSectionName);
  }

  let contentComponent;

  switch (activeMenu) {
    case "chest":
      contentComponent = <NmPopContentChest hole={hole} />;
      break;
    case "magic":
      contentComponent = (
        <NmPopContentMagic handleMenuClick={handleMenuClick} hole={hole} />
      );
      break;
    case "magicStage":
      contentComponent = (
        <NmPopContentMagicStage handleMenuClick={handleMenuClick} hole={hole} />
      );
      break;
    case "fountain":
      contentComponent = <NmPopContentFountain hole={hole} />;
      break;
    case "offer":
      contentComponent = <NmPopContentOffer hole={hole} />;
      break;
    default:
      contentComponent = null;
  }

  return (
    <>
      <div className="mn-pop-bg-all">
        <div className="mn-pop-bg"></div>
      </div>
      <div className="mn-pop-timer">
        <div className="mn-pop-timer-text">time left:</div>
        <div className="mn-pop-timer-time">
          <span className="t">00:00:00</span>
        </div>
      </div>
      <div className="mn-pop-title">
        {hole ? "Tower Magic Chest Event" : "Tower Magic Box Event"}
      </div>
      <div className="mn-pop-menu-box">
        <div
          className={`mn-pop-menu ${hole && "chest"} ${
            activeMenu === "chest" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("chest")}
        >
          <div className="mn-pop-menu-pic">
            {hole ? "" : <img src="img/v2-ns-chest.png" alt="Chest" />}
          </div>
          <div className="mn-pop-menu-text">chest</div>
        </div>
        <div
          className={`mn-pop-menu ${hole && "gates"} ${
            (activeMenu === "magic") | (activeMenu === "magicStage")
              ? "active"
              : ""
          }`}
          onClick={() => handleMenuClick("magic")}
        >
          <div className="mn-pop-menu-pic">
            {hole ? "" : <img src="img/v2-ns-ball.png" alt="Magic" />}
          </div>
          <div className="mn-pop-menu-text">{hole ? "gates" : "magic"}</div>
        </div>
        <div
          className={`mn-pop-menu ${hole && "source"} ${
            activeMenu === "fountain" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("fountain")}
        >
          <div className="mn-pop-menu-pic">
            {hole ? "" : <img src="img/v2-ns-coin2.png" alt="Fountain" />}
          </div>
          <div className="mn-pop-menu-text">{hole ? "source" : "fountain"}</div>
        </div>
        <div
          className={`mn-pop-menu ${hole && "offer"} ${
            activeMenu === "offer" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("offer")}
        >
          <div className="mn-pop-menu-pic">
            {hole ? "" : <img src="img/v2-ns-money.png" alt="Offer" />}
          </div>
          <div className="mn-pop-menu-text">offer</div>
        </div>
      </div>
      {contentComponent}
    </>
  );
}
