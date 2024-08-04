import React from "react";
import { useDispatch } from "../../templateComponents/GlobalStateStor";

import ItemBox from "../UIComponents/ItemBox";
import ResCount from "../UIComponents/ResCount";
import Scroll from "../UIComponents/Scroll";
import PersonAva from "../UIComponents/PersonAva";
import girlsInfo from "../../../scripts/FapTitansScripts/date_girlsInfo";
import ResizeTracker from "../../templateComponents/APIs/ResizeTracker";
import IntersectionTracker from "../../templateComponents/APIs/IntersectionTracker";

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
  const chatProgressHandleCondition = React.useRef(false);
  const firstMessageViewCount = React.useRef(0);
  const timeoutsRef = React.useRef([]);

  const btnBoxRef = React.useRef(null);
  const fallbackBoxRef = React.useRef(null);

  const [chatMapArray, setChatMapArray] = React.useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [girlIndex, setGirlIndex] = React.useState(2);
  const [chatProgress, setChatProgress] = React.useState(
    chatMapArray.length - 1
  );
  const [messageFallback, setMessageFallback] = React.useState("none"); // none, message, photo
  const [lastElements, setLastElements] = React.useState(-10);
  console.log("lastElements", lastElements);

  // variables
  const arrayFromChatProgress = [...Array(chatProgress + 1).keys()];
  const nextMessage =
    girlsInfo[girlIndex].chat.length >= chatProgress + 1
      ? girlsInfo[girlIndex].chat[chatProgress + 1]
      : false;

  const lastMessageIndices = chatMapArray.slice(lastElements); // items
  const lastMessagesFromChatProgress =
    arrayFromChatProgress.slice(lastElements); // indices
  const firstUnloadedIndexes = arrayFromChatProgress.slice(0, lastElements);

  const firstMessageIndex =
    lastMessagesFromChatProgress[
      lastMessageIndices.length - Math.abs(lastElements)
    ];
  const firstMessageIndexInArray =
    firstMessageIndex < 0 ? NaN : firstMessageIndex;

  // events
  const chatProgressHandle = (index) => {
    chatProgressHandleCondition.current = true;
    currentMessageIndex.current = index;

    if ("Girl" in nextMessage && messageFallback === "none") {
      girlsInfo[girlIndex].chat[chatProgress + 1].Girl[0] === "img"
        ? setMessageFallback("photo")
        : setMessageFallback("message");

      if (fallbackBoxRef.current) {
        const timeoutId3 = setTimeout(() => {
          fallbackBoxRef.current.classList.add("hiddenInner");
        }, nextMessage.Girl[0].split(" ")[0].length * 100 + 1400);
        timeoutsRef.current.push(timeoutId3);
      }
    }

    const timeoutId1 = setTimeout(() => {
      if (btnBoxRef.current) {
        btnBoxRef.current.classList.add("hiddenInner");
      }
    }, 100);
    timeoutsRef.current.push(timeoutId1);

    const timeoutId2 = setTimeout(() => {
      if (btnBoxRef.current) {
        btnBoxRef.current?.classList.remove("hiddenInner");
      }
      setChatProgress((prevChatProgress) => prevChatProgress + 1);
    }, 600);
    timeoutsRef.current.push(timeoutId2);

    chatProgressHandleCondition.current = false;
  };

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
    timeoutsRef.current = [];
  };

  // effects
  React.useEffect(() => {
    let timeoutId;

    if (nextMessage && !chatProgressHandleCondition.current) {
      if ("Girl" in nextMessage && messageFallback === "none") {
        timeoutId = setTimeout(() => {
          chatProgressHandle(0);
        }, 400);
      }
    }

    if (chatMapArray.length < arrayFromChatProgress.length) {
      setChatMapArray((prevChatProgress) => [
        ...prevChatProgress,
        currentMessageIndex.current,
      ]);
    }

    timeoutsRef.current.push(timeoutId);
  }, [chatProgress, messageFallback]);

  React.useEffect(() => {
    return () => {
      clearAllTimeouts();
    };
  }, []);

  // content
  const messageContent = (message, item, index) => {
    if ("Girl" in message) {
      return (
        <Delay
          key={`message${index}`}
          delay={
            messageFallback !== "none" && index === chatMapArray.length - 1
              ? message.Girl[item].split(" ")[0].length * 100 + 2100
              : index * 100
          }
          onTimeout={() => {
            fallbackBoxRef.current.classList.remove("hiddenInner");
            setMessageFallback("none");
          }}
        >
          {message.Girl[item] === "img" ? (
            <Message>
              <div className="photo">
                <div className="imgWrap">
                  <img
                    src={`img/images/superhero/suphero-${girlsInfo[girlIndex].id}/x1/sh-6.jpg`}
                    loading="lazy"
                  />
                </div>
              </div>
            </Message>
          ) : (
            <Message text={message.Girl[item]} />
          )}
        </Delay>
      );
    }

    if ("Hero" in message) {
      return (
        <Delay
          key={`message${index}`}
          delay={index === chatMapArray.length - 1 ? 100 : index * 100}
        >
          <Message position="right" text={message.Hero[item]} />
        </Delay>
      );
    }

    if ("Quest" in message) {
      return (
        <Delay
          key={`message${index}`}
          delay={index === chatMapArray.length - 1 ? 100 : index * 100}
        >
          <Message
            className="infoMessage questDone"
            text="The quest has been completed successfully!"
          />
        </Delay>
      );
    }
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
          scrollXY={[480, 496]}
          objectsWrapperMinSize={496}
          gap={[16, 0]}
          padding={[4, 20]}
          scrollTrigger="←→/←O→"
          scrollTop="end"
          // xDirection
        >
          {chatMapArray.map((item, index) => {
            const textIndex = arrayFromChatProgress[index];
            const message = girlsInfo[girlIndex].chat[index]; // undefined

            if (message) {
              if (
                (firstMessageIndexInArray || firstMessageIndexInArray === 0) &&
                index === firstMessageIndexInArray
              ) {
                return (
                  <IntersectionTracker
                    rootMargin={[0, 0]}
                    visibleContent
                    onVisible={() => {
                      firstMessageViewCount.current === 0
                        ? firstMessageViewCount.current++
                        : setLastElements((prev) => prev - 10);
                    }}
                    key={`message${textIndex}`}
                  >
                    {messageContent(message, item, index)}
                  </IntersectionTracker>
                );
              } else if (index === firstUnloadedIndexes[index]) {
                return null;
              } else {
                return messageContent(message, item, index);
              }
            }
          })}

          {nextMessage && (nextMessage.Hero || nextMessage.Quest) && (
            <ResizeTracker key="nextMessageBox">
              {(width, height) => (
                <div className="btnBox" ref={btnBoxRef}>
                  {nextMessage &&
                    "Hero" in nextMessage &&
                    messageFallback === "none" && (
                      <>
                        {nextMessage.Hero.map((text, index) => (
                          <Delay
                            key={`nextMessage${index}`}
                            delay={index * 100 + 500}
                          >
                            <Message
                              className="btnMessage"
                              text={text}
                              onClick={() => {
                                !chatProgressHandleCondition.current &&
                                  (btnBoxRef.current.style.height = `${height}px`);
                                chatProgressHandle(index);
                              }}
                            >
                              <PersonAva img={`img/dating/heroAva.jpg`} />
                            </Message>
                          </Delay>
                        ))}
                      </>
                    )}

                  {nextMessage &&
                    "Quest" in nextMessage &&
                    messageFallback === "none" && (
                      <>
                        {nextMessage.Quest.map((text, index) => (
                          <Delay
                            key={`nextMessage${index}`}
                            delay={index * 100 + 500}
                          >
                            <Message className="infoMessage quest" text={text}>
                              <Button
                                className="btnGold"
                                text={"Перейти"}
                                onClick={() => {
                                  !chatProgressHandleCondition.current &&
                                    chatProgressHandle(0);
                                }}
                              />
                              <ProgressBar
                                className="messageProgressBar"
                                text
                                currentProgress={4}
                                maxProgress={10}
                              />
                            </Message>
                          </Delay>
                        ))}
                      </>
                    )}
                </div>
              )}
            </ResizeTracker>
          )}
        </Scroll>

        <div className="fallbackBox" ref={fallbackBoxRef}>
          {messageFallback === "message" && (
            <Delay delay={600}>
              <div className="messageBack"></div>
              <Message
                className="infoMessage"
                condition="load"
                position="center"
              >
                <PersonAva
                  img={`img/images/superhero/suphero-${girlsInfo[girlIndex].id}/x1/avatar/sh-ava-1.jpg`}
                />
              </Message>
            </Delay>
          )}

          {messageFallback === "photo" && (
            <Delay delay={600}>
              <div className="messageBack"></div>
              <Message
                className="infoMessage"
                condition="photo"
                position="center"
              >
                <div className="imgIcon">•</div>
                <ProgressBar
                  className={"messageProgressBar fillingAnimation"}
                />
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
        scrollXY={[100, 530]}
        objectXY={[86, 86]}
        gap={10}
        padding={[4, 10]}
        scrollTrigger="←→/←O→"
        wrapAlignCenter
        scrollReverse
        scrollVisibility="↓<O>"
        // lazyRender
        // infiniteScroll
        // rootMargin={[0, 0]}
        // xDirection
        // suspending
        // fallback={<div>loading</div>}
        // contentAlignCenter
        // scrollTop={100}
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
  position, // "right", "center"
  text,
  condition, // "load", "photo",
  children,
}) => {
  const [active, setActive] = React.useState(false);

  return (
    <div
      className={`message ${className ? className : "simpleMessage"} ${
        position ? position : ""
      } ${active ? "active" : ""}`}
      onClick={() => {
        if (onClick) onClick(), setActive(!active);
      }}
    >
      {text && <div className="text">{text}</div>}

      {condition === "load" && (
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

const Delay = ({ delay = 0, children, onTimeout }) => {
  const [show, setShow] = React.useState(false);

  const onTimeoutHandler = () => {
    setShow(true);
  };

  React.useEffect(() => {
    onTimeout && show && onTimeout();
  }, [show]);

  React.useEffect(() => {
    const timer = setTimeout(onTimeoutHandler, 0);
    return () => clearTimeout(timer);
  }, []);

  return show ? children : null;
};

const ProgressBar = ({
  className,
  currentProgress,
  maxProgress,
  text,
  objectsPerProgress,
  children,
}) => {
  const widthPerProgress = 100 / maxProgress;

  return (
    <div className={`${className}`}>
      <div className="barScaleWrap">
        <div
          className="barScale"
          style={{ width: `${widthPerProgress * currentProgress}%` }}
        ></div>
      </div>

      {objectsPerProgress
        ? maxProgress.map((_, index) =>
            typeof objectsPerProgress === "object"
              ? objectsPerProgress
              : typeof objectsPerProgress === "array"
              ? objectsPerProgress.map((obj) => obj[index])
              : null
          )
        : null}

      {text ? (
        <div className="barText">{`${
          text === true ? "" : text
        } ${currentProgress}/${maxProgress}`}</div>
      ) : null}

      {children}
    </div>
  );
};

const Button = ({ className, text, onClick, children }) => {
  return (
    <div className={`btn ${className}`} onClick={onClick}>
      <div className="btnContentWrap">
        <div className="btnText">{text}</div>
        {children}
      </div>
    </div>
  );
};
