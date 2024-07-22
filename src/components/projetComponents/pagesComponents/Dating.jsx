import React from "react";
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
  const currentMessageIndex = React.useRef(NaN);
  const clickedRef = React.useRef(false);

  const [chatMapArray, setChatMapArray] = React.useState([0]);
  console.log("chatMapArray", chatMapArray);
  const [girlIndex, setGirlIndex] = React.useState(0);
  const [chatProgress, setChatProgress] = React.useState(
    chatMapArray.length - 1
  );
  const [messageFallback, setMessageFallback] = React.useState(false);

  const arrayFromChatProgress = [...Array(chatProgress + 1).keys()];
  const nextMessage = girlsInfo[girlIndex].chat[chatProgress + 1];

  React.useEffect(() => {
    if ("Girl" in nextMessage && !messageFallback) {
      clickedRef.current = true;
      setMessageFallback(true);
      setTimeout(() => {
        currentMessageIndex.current = 0; // если будет логика смены сообщения для Girl то заменить на нужное значение
        setChatProgress((prevChatProgress) => prevChatProgress + 1);
      }, 2000);
    }

    if (chatMapArray.length < arrayFromChatProgress.length) {
      setChatMapArray((prevChatProgress) => [
        ...prevChatProgress,
        currentMessageIndex.current,
      ]);
    }
  }, [chatProgress]);

  const handleClick = (index) => {
    clickedRef.current = true;
    currentMessageIndex.current = index;
    setChatProgress((prevChatProgress) => prevChatProgress + 1);
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

      <div className="scrollChatWrap" key={girlsInfo[girlIndex].id}>
        <Scroll
          className="scrollChat"
          scrollXY={[500, 480]}
          objectXY={[460, 86]}
          gap={10}
          padding={10}
          scrollTrigger="←→/←O→"
          scrollTop="end"
        >
          {chatMapArray.map((item, index) => {
            const message = girlsInfo[girlIndex].chat[index];

            if ("Girl" in message) {
              return (
                <Delay
                  key={index}
                  delay={
                    clickedRef.current
                      ? message.Girl[item].split(" ")[0].length * 100 + 500
                      : index * 100 + 100
                  }
                  onTimeout={() =>
                    messageFallback &&
                    clickedRef.current &&
                    (setMessageFallback(false), (clickedRef.current = false))
                  }
                >
                  <Message right text={message.Girl[item]} />
                </Delay>
              );
            }

            if ("Hero" in message) {
              return (
                <Delay key={index} delay={index * 100 + 100}>
                  <Message text={message.Hero[item]} />
                </Delay>
              );
            }
          })}
        </Scroll>

        <div className="btnBox">
          {"Hero" in nextMessage && !messageFallback && (
            <Delay delay={chatProgress * 100 + 400}>
              {nextMessage.Hero.map((text, index) => (
                <Delay key={index} delay={index * 100 + 100}>
                  <Message
                    className="btnMessage"
                    text={text}
                    onClick={() => handleClick(index)}
                  >
                    <PersonAva img={`img/dating/heroAva.jpg`} />
                  </Message>
                </Delay>
              ))}
            </Delay>
          )}

          {"Girl" in nextMessage && messageFallback && (
            <Delay delay={600}>
              <Message className="infoMessage" right>
                <PersonAva
                  img={`img/images/superhero/suphero-${girlsInfo[girlIndex].id}/x1/avatar/sh-ava-1.jpg`}
                />
              </Message>
            </Delay>
          )}
        </div>
      </div>

      <div className="girlName">
        <div className="addText">with</div>
        <div className="nameWrap">
          <div className="name" key={girlsInfo[girlIndex].name}>
            {girlsInfo[girlIndex].name}
          </div>
        </div>
      </div>

      <Scroll
        className="scrollAvatars"
        scrollXY={[92, 530]}
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
        scrollTop={100}
      >
        {girlsInfo.map((item, index) => (
          <PersonAva
            key={item.id}
            className={index === girlIndex ? "active" : item.condition}
            img={`img/images/superhero/suphero-${item.id}/x1/avatar/sh-ava-1.jpg`}
            onClick={() => !item.condition && setGirlIndex(index)}
          />
        ))}
      </Scroll>
    </>
  );
};

const Message = ({
  className, // simpleMessage d*, btnMessage, infoMessage
  onClick,
  right,
  text,
  children,
}) => {
  return (
    <div
      className={`message ${className ? className : "simpleMessage"} ${
        right ? "right" : ""
      }`}
      onClick={onClick}
    >
      {text ? (
        <div className="text">{text}</div>
      ) : (
        <div className="messageFallback">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {children}
    </div>
  );
};

const Delay = ({ delay, children, onTimeout }) => {
  const [show, setShow] = React.useState(false);

  const onTimeoutHandler = () => {
    setShow(true);
    onTimeout && onTimeout();
  };

  React.useEffect(() => {
    const timer = setTimeout(onTimeoutHandler, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return show ? children : null;
};
