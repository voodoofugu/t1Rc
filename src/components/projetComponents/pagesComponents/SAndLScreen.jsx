import React from "react";
import nexus from "nexus";

import ItemBox from "../UIComponents/ItemBox";
import SVGIcon from "../UIComponents/SVGIcon";
import Button from "../UIComponents/Button";
import ProgressBar from "../UIComponents/ProgressBar";

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
  const sAndLStates = nexus.use("sAndLStates");

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
          className: "wh44",
          itemPic: "img/sAndL/whiteDice_icn1.png",
          count: 1,
        },
        {
          className: "wh44",
          itemPic: "img/images/superhero/suphero-762/x2/avatar/762sh-ava-1.jpg",
          count: 700,
          rare: "u",
        },
        {
          className: "wh44",
          itemPic: "img/images/superhero/suphero-948/x2/avatar/sh-ava-1.jpg",
          count: 700,
          rare: "e",
        },
        {
          className: "wh44 piecesHero",
          itemPic: "img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg",
          count: 100,
        },
        {
          className: "wh44 check",
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
          indexes.includes(index),
        );
        additionalClass = matchingEntry ? matchingEntry[1] : "";
      }

      const matchingEntryForItems = specialIndexesForItems.find(([indexes]) =>
        indexes.includes(index),
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
    },
  );

  const activePathName = Object.keys(pathsPositions)[sAndLStates.activePlate]; // получаем текущую ячейку
  const activePlateStyles = pathsPositions[activePathName];

  function addRollClass() {
    const diceNum = getRandomNumber();
    const diceClass = diceColor ? "gold" : "white";

    setDiceStateClass(`roll ${diceClass}`);
    setTimeout(() => {
      setDiceStateClass(`${diceClass}_diceNum${diceNum} ${diceClass}`);
      setDiceValue(diceNum);
      setTimeout(
        () => {
          setDiceStateClass(`${diceClass}_diceNum${diceNum} ${diceClass} off`);
          setTimeout(() => {
            setDiceStateClass("");
            setDiceValue(0);
            setDiceColor(false);
          }, 400);
        },
        sAndLStates.activeTime * diceNum + 1200,
      );
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
            // dispatch={nexus.acts}
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
            <Button
              className="white max diceBtn"
              text={`white dice<p>12`}
              onClick={() => !sAndLStates.animInProgress && addRollClass()}
            />
            <Button
              className="gold max diceBtn"
              text={`gold dice<p>10`}
              onClick={() => !sAndLStates.animInProgress && setDiceColor(true)}
            />
            <div className={`diceWrap ${diceStateClass}`}>
              <div className="dice"></div>
              <div className="dice"></div>
            </div>
          </div>
        </div>
        <div className="head">
          <ProgressBar
            className="progressBarOfSympathy sAndL-progresBar"
            progressSize={[280, 24]}
            maxProgress={10}
            currentProgress={4}
            textWithProgress={"max"}
            text="quest chain:"
          >
            <ItemBox
              className="wh44"
              itemPic="img/sAndL/whiteDice_icn1.png"
              count={1}
              // get={true}
            />
          </ProgressBar>
          <Button
            className="darkOrange questBtn notif"
            text="quest chain"
            img="img/questChainIcn.png"
            onClick={() => {
              nexus.acts.handlePopup({
                type: "open",
                data: {
                  mpopClass: "m-popup questChain",
                  popTit: "Quest Chain",
                  popCont: "QuestChain",
                },
              });
            }}
          />

          <Button
            className="orange craftBtn"
            text="craft room"
            img="img/sAndL/anvilIcn.png"
            onClick={() => {
              nexus.acts.handlePopup({
                type: "open",
                data: {
                  mpopClass: "m-popup psemain sAndL",
                  popTit: "Craft Room",
                  popCont: "CraftPop",
                },
              });
            }}
          />

          <Button
            className="blue ratingBtn"
            text="rating"
            img="img/sAndL/ratingIcn.png"
            onClick={() => {
              nexus.acts.handlePopup({
                type: "open",
                data: {
                  mpopClass: "m-popup fapop-rating",
                  popTit: "rating",
                  popCont: "FapopRating",
                },
              });
            }}
          />

          <Button className="exit" text="✖" />
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

          <div className="boxTitle gold">Новый мир 1 lvl</div>
        </div>

        <div className="offerWrap">
          <Button
            className="imgOnly"
            img="img/sAndL/ev_duPack_ic.png"
            onClick={() => {
              nexus.acts.handlePopup({
                type: "open",
                data: {
                  mpopClass: "m-popup fortuna-main uni-sale",
                  popTit: "Dual pack",
                  popCont: ["DualPack", { event: "uni-sale" }],
                },
              });
            }}
          />

          <Button
            className="imgOnly"
            img="img/sAndL/whiteDice_shop.png"
            onClick={() => {
              nexus.acts.handlePopup({
                type: "open",
                data: {
                  mpopClass: "m-popup  contentOnly framedPop essence-buy",
                  popCont: "BuyShop",
                  props: {
                    img1: "sAndL/whiteDice_shop1",
                    img2: "sAndL/whiteDice_shop2",
                    img3: "sAndL/whiteDice_shop3",
                    img4: "sAndL/whiteDice_shop4",
                  },
                },
              });
            }}
          />

          <Button
            className="imgOnly"
            img="img/sAndL/goldDice_shop.png"
            onClick={() => {
              nexus.acts.handlePopup({
                type: "open",
                data: {
                  mpopClass: "m-popup  contentOnly framedPop essence-buy",
                  popCont: "BuyShop",
                  props: {
                    img1: "sAndL/goldDice_shop1",
                    img2: "sAndL/goldDice_shop2",
                    img3: "sAndL/goldDice_shop3",
                    img4: "sAndL/goldDice_shop4",
                  },
                },
              });
            }}
          />
        </div>
      </div>
      {children}
    </div>
  );
}
