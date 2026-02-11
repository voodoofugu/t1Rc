import { useState, useEffect } from "react";
import nexus from "nexus";
import ItemBox from "../UIComponents/ItemBox";

function NmPopContentChest({ hole }) {
  return (
    <div className="nm-pop-content">
      <div className="nsale-main-left-box">
        <ItemBox
          className="wh130"
          count="27"
          itemPic={hole ? "img/hole/holeChest@2x.png" : "img/v2-ns-chest.png"}
        />
        <div className="color-btn ">
          <div className="color-btn-text">
            {hole ? "open chest" : "open box"}
          </div>
        </div>
        <div className="color-btn ">
          <div className="color-btn-text">open all</div>
        </div>
        <ItemBox
          count="1"
          itemPic={hole ? "img/hole/holeKay.png" : "img/v2-ns-ball.png"}
        />
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
          <ItemBox
            count="1"
            countOut="16.67%"
            itemPic={hole ? "img/hole/holeCoin.png" : "img/v2-ns-coin2.png"}
          />
          <ItemBox
            count="gems"
            countOut="16.67%"
            itemPic="img/change-ic-gem-master.png"
          />
          <ItemBox
            count="1h"
            countOut="16.67%"
            itemPic="img/change-ic-gold.png"
          />
          <ItemBox
            count="pack"
            countOut="16.67%"
            itemPic="img/change-ic-essence.png"
          />
          <ItemBox
            count="15K"
            countOut="16.67%"
            itemPic="img/v2-res-mithril2.png"
          />
          <ItemBox
            count="1"
            countOut="16.67%"
            itemPic="img/change-ic-ticket.png"
          />
        </div>
      </div>
      <div className="nsale-plus"></div>
    </div>
  );
}

function NmPopContentMagic({ handleMenuClick, hole }) {
  return (
    <div className="nm-pop-content">
      <div className="nmPopCount">
        <div className="countPic"></div>
        <div className="countValue">0</div>
      </div>
      {hole ? (
        ""
      ) : (
        <div className="nmPopCount countTwo">
          <div className="countPic"></div>
          <div className="countValue">0</div>
        </div>
      )}
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
      {hole ? (
        ""
      ) : (
        <div className="nmPopCount countTwo">
          <div className="countPic"></div>
          <div className="countValue">0</div>
        </div>
      )}
      <div className="np-pop-stupen-pop-m-text">
        Unlock the next stage by claiming any 2 items
      </div>
      <div className="np-pop-stupen-pop-rew-box-all">
        <div className="np-pop-stupen-pop-rew-box">
          <ItemBox
            className="new"
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
        {addedReward === true ? (
          <ItemBox count="120" itemPic="img/v2-res-mithril2.png" />
        ) : null}
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
      </div>
      <div className="nm-pop-fon-coin-box right">
        <div className="nm-pop-fon-coin">
          <div className="nm-pop-fon-coin-text">Toss 100</div>
          <img
            src={hole ? "img/hole/holeCoin2.png" : "img/v2-ns-coin2.png"}
          ></img>
        </div>
      </div>
      <div className="nm-pop-fon-rew-box-all">
        <ItemBox
          className="check"
          count="5000"
          countOut="10"
          itemPic="img/evPopArts/potion_yellow.png"
        />
        <ItemBox
          className="check"
          count="giga x5"
          countOut="20"
          itemPic="img/ms-stone-all.png"
        />
        <ItemBox count="10K%" countOut="50" itemPic="img/ic-abil-gold-up.png" />
        <ItemBox
          count="100"
          countOut="100"
          itemPic="img/images/superhero/suphero-01/x2/avatar/01sh-ava-1.jpg"
        />
        <ItemBox count="15" countOut="200" itemPic="img/arrow_up1.png" />
        <ItemBox
          count="1"
          countOut="500"
          itemPic="img/images/hero-all/tithero-58/x2/ava/tithero-58-1-ava.jpg"
        />
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
              <ItemBox
                count="300"
                itemPic={hole ? "img/hole/holeKay.png" : "img/v2-ns-ball.png"}
              />
              <ItemBox
                count="25"
                itemPic={hole ? "img/hole/holeCoin.png" : "img/v2-ns-coin2.png"}
              />
              <ItemBox count="25" itemPic="img/card-ic-koloda2@2x.png" />
            </div>
            <div className="store-button">
              <div className="but-price">$19.99</div>
            </div>
          </div>
          <div className="nm-pop-offer-box-all">
            <div className="n-sale-box">
              <ItemBox
                count="1250"
                itemPic={hole ? "img/hole/holeKay.png" : "img/v2-ns-ball.png"}
              />
              <ItemBox
                count="100"
                itemPic={hole ? "img/hole/holeCoin.png" : "img/v2-ns-coin2.png"}
              />
              <ItemBox count="50" itemPic="img/card-ic-koloda2@2x.png" />
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
  const [activeMenu, setActiveMenu] = useState("chest");

  useEffect(() => {
    nexus.set((prev) => ({
      popupState: {
        ...prev.popupState,
        mpopClass: `mn-popup ${
          activeMenu === "magic"
            ? "nsale-stupen"
            : activeMenu === "magicStage"
              ? "nsale-stupen pop"
              : activeMenu === "fountain"
                ? "nsale-fountain"
                : activeMenu === "offer"
                  ? "nsale-shop"
                  : "nsale-main"
        }${hole ? " hole" : ""}`,
      },
    }));
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
            {hole ? (
              ""
            ) : (
              <img src="img/evPopArts/magicBall_icn.png" alt="Magic" />
            )}
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
