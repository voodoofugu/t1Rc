import React from "react";

import Scroll from "../UIComponents/Scroll";
import PersonAva from "../UIComponents/PersonAva";
import ResizeTracker from "../../templateComponents/APIs/ResizeTracker";
import IntersectionTracker from "../../templateComponents/APIs/IntersectionTracker";
import Button from "../UIComponents/Button";
import ProgressBar from "../UIComponents/ProgressBar";
import Delay from "./Delay";
import Message from "../UIComponents/Message";

const Chat = ({ girlsInfo, girlIndex }) => {
  const currentMessageIndex = React.useRef(NaN);
  const chatProgressHandleCondition = React.useRef(false);
  const firstMessageViewCount = React.useRef(0);
  const timeoutsRef = React.useRef([]);

  const btnBoxRef = React.useRef(null);
  const fallbackBoxRef = React.useRef(null);

  const [chatMapArray, setChatMapArray] = React.useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ]);
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

  const lastMessageIndices = chatMapArray.slice(lastElements);
  const lastMessagesFromChatProgress =
    arrayFromChatProgress.slice(lastElements);

  const firstUnloadedIndexes = React.useMemo(() => {
    return arrayFromChatProgress.slice(0, lastElements);
  }, [lastElements]);

  const firstMessageIndex =
    lastMessagesFromChatProgress[
      lastMessageIndices.length - Math.abs(lastElements)
    ];

  const firstMessageIndexInArray = React.useMemo(() => {
    return firstMessageIndex < 0 ? NaN : firstMessageIndex;
  }, [lastElements]);

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
          style={{ visibility: "hidden" }}
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
          style={{ visibility: "hidden" }}
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
          style={{ visibility: "hidden" }}
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
              firstMessageIndexInArray !== undefined &&
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
            <Message className="infoMessage" condition="load" position="center">
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
              <ProgressBar className={"messageProgressBar fillingAnimation"} />
              <PersonAva
                img={`img/images/superhero/suphero-${girlsInfo[girlIndex].id}/x1/avatar/sh-ava-1.jpg`}
              />
            </Message>
          </Delay>
        )}
      </div>
    </div>
  );
};

export default Chat;
