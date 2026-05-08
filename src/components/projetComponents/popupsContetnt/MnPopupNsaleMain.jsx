import { useState, useEffect, useRef } from "react";
import nexus from "nexus";
import ItemBox from "../UIComponents/ItemBox";
import FraimedTitle from "../UIComponents/FraimedTitle";
import Button from "../UIComponents/Button";

import MorphScroll from "../../../../morphing-scroll/src/components/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

function GateElement({ hole, handleMenuClick, num }) {
  return (
    <div
      className={`gateElement${hole ? " hole" : ""}${num < 3 ? " open" : ""}`}
    >
      <div
        className="nm-pop-stupen-buble-box"
        onClick={() => handleMenuClick("magicStage")}
      >
        <div className="nm-pop-stupen-buble"></div>
        <div className="nm-pop-stupen-name">gate {num}</div>
      </div>
      {hole ? null : (
        <div className="lanternsLight">
          <div className="backLight" />
        </div>
      )}
    </div>
  );
}

const elementsArr = (count) => {
  return Array.from({ length: count }, (_, i) => i + 1);
};

function NmPopContentChest({ hole }) {
  // - refs
  const popContentRef = useRef(null);
  const controllerRef = useRef(null); // для очищения анимаций

  // - funcs
  const chestHandler = () => {
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();
    const { signal } = controllerRef.current;

    popContentRef.current?.classList.add("anim-chest");
    setTimeout(() => {
      if (signal.aborted) return;

      popContentRef.current?.classList.add("open-chest");
      setTimeout(() => {
        if (signal.aborted) return;

        // открываем попап с наградами
        nexus.acts.handlePopup({
          type: "open",
          data: {
            mpopClass: "m-popup contentOnly framedPop heroRewardPop",
            popCont: "CongraPop",
            props: {
              rewardsData: [
                {
                  itemPic: `${hole ? "img/hole/holeCoin.png" : "img/v2-ns-coin2.png"}`,
                  count: "150",
                },
                {
                  itemPic: "img/change-ic-gem-master.png",
                  count: "x20",
                },
                {
                  itemPic: "img/change-ic-gold.png",
                  count: "1h",
                },
              ],
            },
          },
        });
        setTimeout(() => {
          if (signal.aborted) return;

          popContentRef.current?.classList.remove("anim-chest");
          popContentRef.current?.classList.remove("open-chest");
        }, 600);
      }, 600);
    }, 600);
  };

  // - vars
  const chestsValue = 150; // просто пример

  return (
    <div className="nm-pop-content" ref={popContentRef}>
      <ItemBox className="wh260 simpleItem maim-chest" itemPic={true}>
        <Button className="info" text="i" />

        <div className="rewards-box">
          <div className="rewards-tit">Possible Rewards:</div>
          <div className="rewards-wrap">
            <ItemBox
              className="wh68"
              count="1"
              countOut="16.67%"
              itemPic={hole ? "img/hole/holeCoin.png" : "img/v2-ns-coin2.png"}
            />
            <ItemBox
              className="wh68"
              count="gems"
              countOut="16.67%"
              itemPic="img/change-ic-gem-master.png"
            />
            <ItemBox
              className="wh68"
              count="1h"
              countOut="16.67%"
              itemPic="img/change-ic-gold.png"
            />
            <ItemBox
              className="wh68"
              count="pack"
              countOut="16.67%"
              itemPic="img/change-ic-essence.png"
            />
            <ItemBox
              className="wh68"
              count="15K"
              countOut="16.67%"
              itemPic="img/v2-res-mithril2.png"
            />
            <ItemBox
              className="wh68"
              count="1"
              countOut="16.67%"
              itemPic="img/change-ic-ticket.png"
            />
            <ItemBox
              className="wh68"
              count="1"
              countOut="100%"
              itemPic={hole ? "img/hole/holeKay.png" : "img/v2-ns-ball.png"}
            />
          </div>
        </div>
      </ItemBox>

      <Button
        className={`max j-blue open-btn${!chestsValue ? " disabled" : ""}`}
        text={`Open Chest ${chestsValue}`}
        onClick={chestHandler}
      />
      <Button
        className={`max j-violet open-btn${!chestsValue ? " disabled" : ""} last`}
        text="Open All"
        onClick={chestHandler}
      />
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

      <MorphScroll
        className="stageWrap"
        size={[750, 350]}
        objectsSize={[150, "size"]}
        progressTrigger={{
          arrows: {
            element: <div className="koi-arrow" />,
            contentReduce: false,
            loop: true,
            size: 50,
          },
          progressElement: <div className="stage-progress" />,
          content: true,
        }}
        type="slider"
        edgeGradient={true}
        direction="x"
      >
        {elementsArr(15).map((v) => {
          return (
            <GateElement
              key={v}
              hole={hole}
              handleMenuClick={handleMenuClick}
              num={v}
            />
          );
        })}
      </MorphScroll>
    </div>
  );
}

function NmPopContentMagicStage({ handleMenuClick, hole }) {
  const currencyValue = 150; // просто пример валюты ивента

  const Card = ({ itemClass, img, count, cost, rare, cardType, purchased }) => {
    return (
      <div className={`np-pop-stupen-pop-rew-box${purchased ? " sold" : ""}`}>
        <ItemBox
          className={`wh94${itemClass ? " " + itemClass : ""}${purchased ? " check" : ""}`}
          count={count}
          itemPic={img}
          rare={rare}
          cardType={cardType}
        />
        <Button
          className={`buy-btn${currencyValue < cost && !purchased ? " disabled" : ""}${purchased ? " green check" : ""}`}
          textIcn={purchased ? "" : "img/v2-ns-ball.png"}
          text={purchased ? "sold" : `${cost}`}
        />
      </div>
    );
  };

  return (
    <div className="nm-pop-content">
      <FraimedTitle
        className={`banner ${hole ? "blue" : "red"} gate-tit`}
        text="gate 1"
      />

      <div className="nmPopCount">
        <div className="countPic"></div>
        <div className="countValue">{currencyValue}</div>
      </div>
      {hole ? (
        ""
      ) : (
        <div className="nmPopCount countTwo">
          <div className="countPic"></div>
          <div className="countValue">{currencyValue}</div>
        </div>
      )}
      <div className="np-pop-stupen-pop-m-text">
        Unlock the next stage by claiming any 2 items
      </div>
      <div className="np-pop-stupen-pop-rew-box-all">
        <Card
          itemClass="new"
          img="img/images/goddess/goddess-4/x2/ava/goddess-ava-1.jpg"
          count="50"
          cost="100"
          cardType="a"
          purchased
        />
        <Card
          img="img/images/superhero/suphero-1009/x1/avatar/sh-ava-1.jpg"
          count="20"
          cost="150"
          rare="e"
          cardType="s"
        />
        <Card img="img/evPopArts/angel_spirit_1.png" count="10" cost="200" />
      </div>

      <Button className="back" text onClick={() => handleMenuClick("magic")} />
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
  const ExampleOffer = () => {
    return (
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
    );
  };

  return (
    <div className="nm-pop-content">
      <div className="nm-pop-offer-scroll-box">
        <MorphScroll
          className="nm-pop-offer"
          size={[750, 350]}
          objectsSize={[650, 114]}
          progressTrigger={{
            wheel: true,
            progressElement: <ScrollThumb />,
          }}
          edgeGradient={true}
          wrapperAlign={"center"}
          wrapperMargin={20}
          gap={20}
          scrollBarEdge={20}
        >
          {elementsArr(3).map((v) => {
            return <ExampleOffer key={v} />;
          })}
        </MorphScroll>
      </div>
    </div>
  );
}

function MnPopupNsaleMain({ hole }) {
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

      <Button
        className="info"
        text="i"
        onClick={() => {
          nexus.acts.handlePopup({
            type: "open",
            data: {
              mpopClass: "m-popup contentOnly framedPop",
              popCont: "InfoPopFramed",
              props: {
                inner:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
                girlImg: "img/break-girls/break-girl915.png",
              },
            },
          });
        }}
      />
      <Button
        className="exit"
        text="✖"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      />

      <div className="mn-pop-menu-box">
        <div
          className={`mn-pop-menu ${hole && "chest"} ${
            activeMenu === "chest" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("chest")}
        >
          <div className="mn-pop-menu-pic" />
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
          <div className="mn-pop-menu-pic" />
          <div className="mn-pop-menu-text">gates</div>
        </div>
        <div
          className={`mn-pop-menu ${hole && "source"} ${
            activeMenu === "fountain" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("fountain")}
        >
          <div className="mn-pop-menu-pic" />
          <div className="mn-pop-menu-text">{hole ? "source" : "fountain"}</div>
        </div>
        <div
          className={`mn-pop-menu ${hole && "offer"} ${
            activeMenu === "offer" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("offer")}
        >
          <div className="mn-pop-menu-pic" />
          <div className="mn-pop-menu-text">offer</div>
        </div>
      </div>

      {contentComponent}
    </>
  );
}

export default MnPopupNsaleMain;
