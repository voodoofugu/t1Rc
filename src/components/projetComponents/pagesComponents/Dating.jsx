import React, { useRef } from "react";
import {
  selectors,
  useDispatch,
} from "../../templateComponents/GlobalStateStor";

import ItemBox from "../UIComponents/ItemBox";
import ResCount from "../UIComponents/ResCount";
import Scroll from "../UIComponents/Scroll";
import PersonAva from "../UIComponents/PersonAva";
import girlsInfo from "../../../scripts/FapTitansScripts/date_girlsInfo";

export const cssFiles = [
  "customScroll",
  "dating",
  "screen-superhero",
  "screen-unipop-subscription",
];

export default function Dating({ pageName, children }) {
  const dispatch = useDispatch();

  return (
    <div className="main world1">
      <div className="main-bg dating"></div>
      <div className="dating_content">
        <div className="dating_title">Your date</div>
        <div className="counterBox">
          <ResCount
            img="img/dating/datingCoin.png"
            value="234"
            plus
            onClick={() => {
              dispatch({
                type: "POPUP_OPEN",
                payload: {
                  mpopClass: "m-popup essence-buy",
                  popTit: "Buy Dices",
                  popCont: [
                    "BuyShop",
                    {
                      img1: "dating/datingCoin_1",
                      img2: "dating/datingCoin_2",
                      img3: "dating/datingCoin_3",
                      img4: "dating/datingCoin_4",
                    },
                  ],
                },
              });
            }}
          />
        </div>
        <div className="color-btn exit">
          <div className="color-btn-text"></div>
        </div>
        <div className="btnI" />

        <div className="heroFigure"></div>

        <GirlIndexDependencies girlsInfo={girlsInfo} />
      </div>
      {children}
    </div>
  );
}

const GirlIndexDependencies = ({ girlsInfo }) => {
  const [girlIndex, setGirlIndex] = React.useState(0);
  const [chatProgress, setChatProgress] = React.useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = React.useState(0);

  const chatMapArray = useRef(Array(girlsInfo[girlIndex].chat.length).fill(0));
  console.log("chatMapArray", chatMapArray.current);

  const arrayFromChatProgress = [...Array(chatProgress + 1).keys()];
  const nextMessage = girlsInfo[girlIndex].chat[chatProgress + 1];

  React.useEffect(() => {
    if ("Girl" in nextMessage) {
      setChatProgress(chatProgress + 1);
    }
  }, [chatProgress]);

  React.useEffect(() => {
    chatMapArray.current = chatMapArray.current.map((item, index) => {
      return index === chatProgress ? currentMessageIndex : item;
    });
  }, [currentMessageIndex]);

  const handleClick = (index) => {
    setChatProgress((prevChatProgress) => prevChatProgress + 1);
    setCurrentMessageIndex(index);
  };

  return (
    <>
      <div className="girlFigure">
        <img
          key={girlsInfo[girlIndex].id}
          src={`img/breakGirls/break-girl${girlsInfo[girlIndex].id}.png`}
          loading="lazy"
        />
      </div>

      <div className="progBar"></div>

      <div className="scrollChatWrap">
        <Scroll
          className="scrollChat"
          scrollXY={[500, 480]}
          objectXY={[460, 86]}
          gap={10}
          padding={10}
          scrollTrigger="←→/←O→"
        >
          {arrayFromChatProgress.map((item, index) => {
            const message = girlsInfo[girlIndex].chat[item];

            if ("Girl" in message) {
              return message.Girl.map((text) => (
                <div key={index} className="messageBox right">
                  <div className="message">{text}</div>
                </div>
              ));
            } else if ("Hero" in message) {
              return message.Hero.map(
                (text, i) =>
                  i === chatMapArray.current[index] && (
                    <div key={index + i} className="messageBox">
                      <div className="message">{text}</div>
                    </div>
                  )
              );
            }
          })}
        </Scroll>
        {"Hero" in nextMessage && (
          <div className="btnBox">
            {nextMessage.Hero.map((item, index) => (
              <div className="btnMessage" onClick={() => handleClick(index)}>
                {item}
                <PersonAva img={`img/dating/heroAva.jpg`} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="girlName">
        <div className="name">{girlsInfo[girlIndex].name}</div>
      </div>

      <Scroll
        className="scrollAvatars"
        scrollXY={[92, 526]}
        objectXY={[86, 86]}
        gap={10}
        padding={[4, 10]}
        scrollTrigger="←→/←O→"
        wrapAlignCenter
        // scrollVisibility="↓<O>"
        // lazyRender
        // infiniteScroll
        // rootMargin={[0, 0]}
        // xDirection
        // suspending
        // fallback={<div>loading</div>}
        // contentAlignCenter
      >
        {girlsInfo.map((item, index) => (
          <PersonAva
            key={item.id}
            className={index === girlIndex ? "active" : item.condition}
            img={`img/images/${item.type}/suphero-${item.id}/x1/avatar/sh-ava-1.jpg`}
            onClick={() => !item.condition && setGirlIndex(index)}
          />
        ))}
      </Scroll>
    </>
  );
};
