import React from "react";
import { nexusDispatch, useNexus } from "nexus-state";

import ItemBox from "../UIComponents/ItemBox";
import SVGIcon from "../UIComponents/SVGIcon.jsx";

import SAndLSVGPlates, { pathsPositions } from "../UIComponents/SAndLSVGPlates";

export const cssFiles = [
  "sAndL-screen",
  "screen-info-pop",
  "screen-fortuna-dual-pack",
  "screen-superhero",
  "screen-unipop-subscription",
  "quest_chain_pop",
  "v2-screen-pse-main",
  "pop-wpck-all",
  "screen-fapopoly-rating",
  "screen-rating",
];

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

export default function SAndLScreen({ pageName, children }) {
  const sAndLStates = useNexus("sAndLStates");

  const [diceStateClass, setDiceStateClass] = React.useState("");
  const [diceValue, setDiceValue] = React.useState(0);
  const [diceColor, setDiceColor] = React.useState(false);

  const specialIndexes = [
    [[88, 98], "portalRed"],
    [[17, 59], "portalOrange"],
    [[28, 66], "portalEllow"],
    [[77, 93], "portalGreen"],
    [[74, 82], "portalBlue"],
    [[5, 14, 21, 37, 50, 70], "chest"],
    [[10, 20, 30, 40, 60, 80], "itemBox"],
  ];

  const specialIndexesForItems = [
    [
      [10, 20, 30, 40, 60],
      [
        {
          itemClass: "wh44",
          itemPic: "img/sAndL/whiteDice_icn1.png",
          count: 1,
        },
        {
          itemClass: "wh44",
          itemPic: "img/images/superhero/suphero-762/x2/avatar/762sh-ava-1.jpg",
          count: 700,
          rare: "u",
        },
        {
          itemClass: "wh44",
          itemPic: "img/images/superhero/suphero-948/x2/avatar/sh-ava-1.jpg",
          count: 700,
          rare: "e",
        },
        {
          itemClass: "wh44 piecesHero",
          itemPic: "img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg",
          count: 100,
        },
        {
          itemClass: "wh44 check",
          itemPic: "img/evPopArts/potion_green.png",
          count: 1000,
        },
      ],
    ],
  ];

  const plateComponents = Object.entries(pathsPositions).map(
    ([pathName, { top, left }], index) => {
      let additionalClass = "";
      let additionalObject = null;

      if (specialIndexes.some(([indexes]) => indexes.includes(index))) {
        const matchingEntry = specialIndexes.find(([indexes]) =>
          indexes.includes(index)
        );
        additionalClass = matchingEntry ? matchingEntry[1] : "";
      }

      const matchingEntryForItems = specialIndexesForItems.find(([indexes]) =>
        indexes.includes(index)
      );

      if (matchingEntryForItems) {
        const matchingIndex = matchingEntryForItems[0].indexOf(index);
        if (matchingIndex !== -1) {
          additionalObject = matchingEntryForItems[1][matchingIndex];
        }
      }

      return (
        <div
          key={index}
          style={{ top: top || 0, left: left || 0 }}
          className={`plateElem ${pathName} ${additionalClass} ${
            index === sAndLStates.activePlate && !sAndLStates.animInProgress
              ? "active"
              : ""
          }`}
        >
          <div className="plateNum">{index + 1}</div>
          {additionalObject && <ItemBox {...additionalObject} />}
        </div>
      );
    }
  );

  const activePathName = Object.keys(pathsPositions)[sAndLStates.activePlate];
  const activePlateStyles = pathsPositions[activePathName];

  function addRollClass() {
    const diceNum = getRandomNumber();
    const diceClass = diceColor ? "gold" : "white";

    nexusDispatch({
      type: "ANIM_IN_PROG",
      payload: true,
    });

    setDiceStateClass(`roll ${diceClass}`);
    setTimeout(() => {
      setDiceStateClass(`${diceClass}_diceNum${diceNum} ${diceClass}`);
      setDiceValue(diceNum);
      setTimeout(() => {
        setDiceStateClass(`${diceClass}_diceNum${diceNum} ${diceClass} off`);
        setTimeout(() => {
          setDiceStateClass("");
          setDiceValue(0);
          setDiceColor(false);
        }, 400);
      }, sAndLStates.activeTime * diceNum + 1200);
    }, 800);
  }

  React.useEffect(() => {
    if (diceColor) {
      addRollClass();
    }
  }, [diceColor]);

  return (
    <div className="main world1">
      <div
        className="main-bg"
        style={{
          backgroundImage: "url('../img/sAndL/map01.jpg')",
        }}
      ></div>
      <SVGIcon svgID="arrow_circle_left" />
      <div className="sAndLWrap">
        <div className="sAndL">
          <SAndLSVGPlates
            sAndLStates={sAndLStates}
            dispatch={nexusDispatch}
            diceValue={diceValue}
            specialIndexes={specialIndexes}
            pageName={pageName}
          />
          <div className="platesContent">{plateComponents}</div>
          <div
            className={`heroFigure ${
              sAndLStates.animPortal ? "unvisible" : ""
            }`}
            style={{
              top: activePlateStyles.top,
              left: activePlateStyles.left,
              transition: `all ${sAndLStates.activeTime}ms linear`,
            }}
          ></div>
        </div>
        <div className="bott">
          <div className="diceBox">
            <div
              className="color-btn green"
              onClick={() => {
                sAndLStates.animInProgress && addRollClass();
              }}
            >
              <div className="color-btn-text">
                white dice
                <div className="diceCount">12</div>
              </div>
            </div>
            <div
              className="color-btn gold"
              onClick={() => {
                sAndLStates.animInProgress && setDiceColor(true);
              }}
            >
              <div className="color-btn-text">
                gold dice
                <div className="diceCount">221</div>
              </div>
            </div>
            <div className={`diceWrap ${diceStateClass}`}>
              <div className="dice"></div>
              <div className="dice"></div>
              {diceValue ? (
                <div
                  className="boxTitle blue"
                  style={{
                    animation: `topUpAnim ${
                      sAndLStates.activeTime * diceValue + 1200
                    }ms ease-in-out forwards`,
                  }}
                >
                  {diceValue}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="head">
          <div className="progresBar">
            <ItemBox
              itemClass="wh44"
              itemPic="img/sAndL/whiteDice_icn1.png"
              count={1}
              // get={true}
            />
            <div className="bar-scale">
              <div className="bar-scale-patf" style={{ width: "40%" }}></div>
            </div>
            <div className="bar-value">6 quests in quest chain 0/6</div>
          </div>
          <div
            className="color-btn questBtn"
            onClick={() => {
              nexusDispatch({
                type: "POPUP_OPEN",
                payload: {
                  mpopClass: "m-popup questChain",
                  popTit: "Quest Chain",
                  popCont: "QuestChain",
                },
              });
            }}
          >
            <img className="icn" src="img/questChainIcn.png" loading="lazy" />
            <div className="color-btn-text">Quest Chain</div>
            <div className="notif"></div>
          </div>

          <div
            className="color-btn craftBtn"
            onClick={() => {
              nexusDispatch({
                type: "POPUP_OPEN",
                payload: {
                  mpopClass: "m-popup psemain sAndL",
                  popTit: "Craft Room",
                  popCont: "CraftPop",
                  infBtn: true,
                },
              });
            }}
          >
            <img className="icn" src="img/sAndL/anvilIcn.png" loading="lazy" />
            <div className="color-btn-text">Craft Room</div>
          </div>

          <div
            className="color-btn ratingBtn"
            onClick={() => {
              nexusDispatch({
                type: "POPUP_OPEN",
                payload: {
                  mpopClass: "m-popup fapop-rating",
                  popTit: "rating",
                  popCont: "FapopRating",
                },
              });
            }}
          >
            <img className="icn" src="img/sAndL/ratingIcn.png" loading="lazy" />
            <div className="color-btn-text">Rating</div>
          </div>

          <div className="btnX"></div>
          <div className="boxTitle gold">Новый мир 1 lvl</div>
          <div
            className="btnI"
            onClick={() => {
              nexusDispatch({
                type: "POPUP_OPEN",
                payload: {
                  mpopClass: "m-popup info-pop",
                  popTit: "Info",
                  popCont: [
                    "InfoPop",
                    {
                      text: "Here you can raise your character's stats, upgrade your abilities, and get an interesting look from events.",
                      btnText1: "I understand",
                    },
                  ],
                },
              });
            }}
          ></div>
        </div>
        <div className="offerWrap">
          <div
            className="offerBtn"
            onClick={() => {
              nexusDispatch({
                type: "POPUP_OPEN",
                payload: {
                  mpopClass: "m-popup fortuna-main uni-sale",
                  popTit: "Dual pack",
                  popCont: ["DualPack", { event: "uni-sale" }],
                },
              });
            }}
          >
            <img
              className="icon"
              src="img/sAndL/ev_duPack_ic.png"
              loading="lazy"
            />
          </div>
          <div
            className="offerBtn"
            onClick={() => {
              nexusDispatch({
                type: "POPUP_OPEN",
                payload: {
                  mpopClass: "m-popup essence-buy",
                  popTit: "Buy White Dices",
                  popCont: [
                    "BuyShop",
                    {
                      img1: "sAndL/whiteDice_shop1",
                      img2: "sAndL/whiteDice_shop2",
                      img3: "sAndL/whiteDice_shop3",
                      img4: "sAndL/whiteDice_shop4",
                    },
                  ],
                },
              });
            }}
          >
            <img
              className="icon"
              src="img/sAndL/whiteDice_shop.png"
              loading="lazy"
            />
          </div>
          <div
            className="offerBtn"
            onClick={() => {
              nexusDispatch({
                type: "POPUP_OPEN",
                payload: {
                  mpopClass: "m-popup essence-buy",
                  popTit: "Buy Gold Dices",
                  popCont: [
                    "BuyShop",
                    {
                      img1: "sAndL/goldDice_shop1",
                      img2: "sAndL/goldDice_shop2",
                      img3: "sAndL/goldDice_shop3",
                      img4: "sAndL/goldDice_shop4",
                    },
                  ],
                },
              });
            }}
          >
            <img
              className="icon"
              src="img/sAndL/goldDice_shop.png"
              loading="lazy"
            />
            <div className="notif"></div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
