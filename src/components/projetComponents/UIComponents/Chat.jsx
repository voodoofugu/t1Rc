import React from "react";

import { useDispatch } from "../../templateComponents/GlobalStateStor";

import Scroll from "../UIComponents/Scroll";
import PersonAva from "../UIComponents/PersonAva";
import ResizeTracker from "../../templateComponents/APIs/ResizeTracker";
import IntersectionTracker from "../../templateComponents/APIs/IntersectionTracker";
import Button from "../UIComponents/Button";
import ProgressBar from "../UIComponents/ProgressBar";
import Delay from "./Delay";
import Message from "../UIComponents/Message";
import ScrollThumb from "../UIComponents/ScrollThumb";

const Chat = ({ girlInfo }) => {
  const dispatch = useDispatch();

  const currentMessageIndex = React.useRef(NaN);
  const chatProgressHandleCondition = React.useRef(false);
  const timeoutsRef = React.useRef([]);

  const btnBoxRef = React.useRef(null);
  const fallbackBoxRef = React.useRef(null);

  const [chatMapArray, setChatMapArray] = React.useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [chatProgress, setChatProgress] = React.useState(
    chatMapArray.length - 1
  );
  const [messageFallback, setMessageFallback] = React.useState("none"); // none, message, photo

  const [lastElements, setLastElements] = React.useState({
    [girlInfo.id]: -10,
    loadingReady: false,
  });
  if (lastElements[girlInfo.id] === undefined) {
    setLastElements({
      [girlInfo.id]: -10,
      loadingReady: false,
    });
  }

  // variables
  const arrayFromChatProgress = [...Array(chatProgress + 1).keys()];
  const nextMessage =
    girlInfo.chat.length >= chatProgress + 1
      ? girlInfo.chat[chatProgress + 1]
      : false;

  const lastMessageIndices = chatMapArray.slice(lastElements[girlInfo.id]);
  const lastMessagesFromChatProgress = arrayFromChatProgress.slice(
    lastElements[girlInfo.id]
  );

  const firstUnloadedIndexes = React.useMemo(() => {
    return arrayFromChatProgress.slice(0, lastElements[girlInfo.id]);
  }, [lastElements[girlInfo.id]]);

  const firstMessageIndex =
    lastMessagesFromChatProgress[
      lastMessageIndices.length - Math.abs(lastElements[girlInfo.id])
    ];

  const firstMessageIndexInArray = React.useMemo(() => {
    return firstMessageIndex < 0 ? NaN : firstMessageIndex;
  }, [lastElements[girlInfo.id]]);

  // events
  const chatProgressHandle = (index) => {
    chatProgressHandleCondition.current = true;
    currentMessageIndex.current = index;

    if ("Girl" in nextMessage && messageFallback === "none") {
      girlInfo.chat[chatProgress + 1].Girl[0] === "img"
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
    if (!lastElements.loadingReady) {
      const timeout = setTimeout(() => {
        setLastElements((prev) => ({
          ...prev,
          loadingReady: true,
        }));
      }, 1000);
      timeoutsRef.current.push(timeout);
    }
  }, [girlInfo.id]);

  React.useEffect(() => {
    return () => {
      clearAllTimeouts();
    };
  }, []);

  // content
  const messageContent = (message, item, index) => {
    const delayStyle = {
      visibility: "hidden",
      animation: "none",
    };
    const lastIndex = chatMapArray.length - 1;
    const lastIndexCheck = lastIndex === index ? true : false;
    const lastIndexToDeley =
      index in arrayFromChatProgress.slice(0, -9)
        ? 0
        : lastMessagesFromChatProgress.indexOf(index) * 60;

    if ("Girl" in message) {
      return (
        <Delay
          key={`message${index}`}
          delay={
            messageFallback !== "none" && lastIndexCheck
              ? message.Girl[item].split(" ")[0].length * 100 + 1400
              : lastIndexToDeley
          }
          onTimeout={() => {
            fallbackBoxRef.current.classList.remove("hiddenInner");
            setMessageFallback("none");
          }}
          styleBeforeTimeout={delayStyle}
          renderOnTimeout={lastIndexCheck}
        >
          {message.Girl[item] === "img" ? (
            <Message
              onClick={() => {
                dispatch({
                  type: "POPUP_OPEN",
                  payload: {
                    mpopClass: "m-popup uki-story-popup contentOnly",
                    popCont: ["DatingImgPop"],
                    props: {
                      img: `img/images/superhero/suphero-${girlInfo.id}/x1/sh-6.jpg`,
                    },
                  },
                });
              }}
            >
              <div className="photo">
                <div className="imgWrap">
                  <img
                    src={`img/images/superhero/suphero-${girlInfo.id}/x1/sh-6.jpg`}
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
          delay={lastIndexCheck ? 100 : lastIndexToDeley}
          styleBeforeTimeout={delayStyle}
          renderOnTimeout={lastIndexCheck}
        >
          <Message position="right" text={message.Hero[item]} />
        </Delay>
      );
    }

    if ("Quest" in message) {
      return (
        <Delay
          key={`message${index}`}
          delay={lastIndexCheck ? 100 : lastIndexToDeley}
          styleBeforeTimeout={delayStyle}
          renderOnTimeout={lastIndexCheck}
        >
          <Message
            className="infoMessage questDone"
            text="The quest has been completed successfully!"
          />
        </Delay>
      );
    }
  };

  const chatCondition = girlInfo.condition === "closed" ? false : true;

  return (
    <div className="scrollChatWrap" key={girlInfo.id}>
      {!chatCondition ? (
        <div className="chatClosed">
          <Message
            className="infoMessage closed"
            text={`Here you can start a chat with ${girlInfo.name}!`}
          />
        </div>
      ) : (
        <>
          <Scroll
            className="chatDaiting"
            scrollXY={[490, 496]}
            objectsWrapperMinSize={496}
            padding={[0, 20]}
            scrollTrigger="←→/←O→"
            scrollTop="end"
            thumbElement={<ScrollThumb className="centerImg" />}
            // onScrollValue={[
            //   [
            //     (scrollTop) => scrollTop <= 1,
            //     () =>
            //       setLastElements((prevState) => ({
            //         ...prevState,
            //         [girlInfo.id]: prevState[girlInfo.id] - 10,
            //       })),
            //   ],
            // ]}
            // xDirection
            // contentAlignCenter
            // wrapAlignCenter
          >
            {chatMapArray.map((item, index) => {
              const textIndex = arrayFromChatProgress[index];
              const message = girlInfo.chat[index];

              if (message) {
                if (
                  firstMessageIndexInArray !== undefined &&
                  index === firstMessageIndexInArray
                ) {
                  return (
                    <IntersectionTracker
                      key={`message${textIndex}`}
                      visibleContent
                      // intersectionDeley={100}
                      onVisible={() => {
                        lastElements.loadingReady &&
                          setLastElements((prevState) => ({
                            ...prevState,
                            [girlInfo.id]: prevState[girlInfo.id] - 10,
                          }));
                      }}
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

            <ResizeTracker key="nextMessageBox">
              {(width, height) => (
                <>
                  {nextMessage && (nextMessage.Hero || nextMessage.Quest) && (
                    <div className="btnBox" ref={btnBoxRef}>
                      {nextMessage &&
                        "Hero" in nextMessage &&
                        messageFallback === "none" && (
                          <Delay delay={800} renderOnTimeout>
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
                          </Delay>
                        )}

                      {nextMessage &&
                        "Quest" in nextMessage &&
                        messageFallback === "none" && (
                          <Delay delay={800} renderOnTimeout>
                            {nextMessage.Quest.map((text, index) => (
                              <Delay
                                key={`nextMessage${index}`}
                                delay={index * 100 + 500}
                              >
                                <Message
                                  className="infoMessage quest"
                                  text={text}
                                >
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
                                    progressSize={[312, 6]}
                                    text
                                    textWithMaxProgress
                                    currentProgress={4}
                                    maxProgress={10}
                                  />
                                </Message>
                              </Delay>
                            ))}
                          </Delay>
                        )}
                    </div>
                  )}
                </>
              )}
            </ResizeTracker>
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
                    img={`img/images/superhero/suphero-${girlInfo.id}/x1/avatar/sh-ava-1.jpg`}
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
                    className="messageProgressBar fillingAnimation"
                    progressSize={[28, 4]}
                  />
                  <PersonAva
                    img={`img/images/superhero/suphero-${girlInfo.id}/x1/avatar/sh-ava-1.jpg`}
                  />
                </Message>
              </Delay>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
