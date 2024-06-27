import React from "react";
import LazyRender from "./LazyRender";

interface ScrollType {
  className?: string;
  scrollXY?: number[];
  objectXY: number[];
  xDirection?: boolean;
  directionQuantity?: number;
  gap?: number;
  paddingX?: number;
  paddingY?: number;
  scrollReverse?: boolean;
  draggableScroll?: boolean;
  scrollOnHover?: boolean;
  scrollMute?: boolean;
  lazyRender?: boolean;
  rootMargin?: string;
  children: React.ReactNode;
}

const Scroll: React.FC<ScrollType> = ({
  className = "",
  scrollXY,
  objectXY,
  xDirection = false,
  directionQuantity = 1,
  gap = 0,
  paddingX = 0,
  paddingY = 0,
  scrollReverse = false,
  draggableScroll = false,
  scrollOnHover = false,
  scrollMute = false,
  lazyRender = false,
  rootMargin = "0px 0px 0px 0px",
  children,
}) => {
  const scrollElementRef = React.useRef<HTMLDivElement | null>(null);
  const objectsWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const customScrollRef = React.useRef<HTMLDivElement | null>(null);

  const thumbSize = React.useRef(0);

  const [thumbMeasuring, setThumbMeasuring] = React.useState(0);
  const [scroll, setScroll] = React.useState(0);

  const childCount = React.Children.count(children);
  const childsPerDirection = directionQuantity
    ? Math.ceil(childCount / directionQuantity)
    : childCount;
  const paddingXAll = paddingX * 2;
  const xyPaddingYAll = paddingY * 2;
  const xyPaddingAll = xDirection ? paddingXAll : xyPaddingYAll;

  const gapAllX = (directionQuantity - 1) * gap;
  const gapAllY = (childsPerDirection - 1) * gap;

  const xyObject = xDirection ? objectXY[0] : objectXY[1];
  const xyObjectReverse = xDirection ? objectXY[1] : objectXY[0];

  let localScrollXY = scrollXY
    ? [scrollXY[0] + paddingXAll, scrollXY[1] + xyPaddingYAll]
    : [objectXY[0] + paddingXAll, objectXY[1] + xyPaddingYAll];

  const childsPerDirectionScrollXY = Math.ceil(
    childCount /
      Math.round(
        ((xDirection ? localScrollXY[1] : localScrollXY[0]) - xyPaddingAll) /
          (xyObject + gap)
      )
  );
  const objectsWrapperSizeXY =
    scrollXY && directionQuantity === 1
      ? xyObject * childsPerDirectionScrollXY +
        (childsPerDirectionScrollXY - 1) * gap +
        xyPaddingAll
      : xyObject * childsPerDirection + gapAllY + xyPaddingAll;

  if (directionQuantity > 1) {
    const adjustedX =
      xyObjectReverse * directionQuantity + gapAllX + paddingXAll;
    const adjustedY =
      xyObjectReverse * directionQuantity + gapAllX + xyPaddingYAll;
    localScrollXY = (() => {
      const [x, y] = scrollXY || objectXY;
      return xDirection
        ? [x + paddingXAll, y < adjustedY ? adjustedY : y]
        : [x < adjustedX ? adjustedX : x, y + xyPaddingYAll];
    })();
  }

  const xy = xDirection ? localScrollXY[0] : localScrollXY[1];
  const translateProperty = localScrollXY[0] / 2 - localScrollXY[1] / 2;
  console.log(
    "qwe",
    objectXY[0] * directionQuantity +
      gap * (directionQuantity - 1) +
      xyPaddingYAll
  );
  console.log("scrollXY[0]", scrollXY[0]);
  console.log(
    "qweqwe",
    objectXY[0] * directionQuantity + gapAllX + xyPaddingYAll
  );

  const handleScroll = () => {
    if (!scrollMute) {
      let newScroll: number;

      (function (xy: number) {
        newScroll = Math.abs(
          Math.round(
            (scrollElementRef.current.scrollTop / (xy - objectsWrapperSizeXY)) *
              (xy - thumbSize.current)
          )
        );
      })(xy);

      newScroll !== scroll && setScroll(newScroll);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    xDirection
      ? (scrollElementRef.current!.scrollTop += e.movementX)
      : (scrollElementRef.current!.scrollTop += e.movementY);
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    document.body.style.removeProperty("cursor");
    customScrollRef.current!.classList.remove("dragging");
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = "grabbing";
    customScrollRef.current!.classList.add("dragging");
  };

  React.useEffect(() => {
    // warn handling
    function warn(propsName: string) {
      console.warn(`🧰👷‍♂️ You are using the ${propsName} without scrollMute...`);
    }
    if (!lazyRender && rootMargin != "0px 0px 0px 0px") {
      scrollReverse && warn("rootMargin");
    }
    if (scrollMute) {
      scrollReverse && warn("scrollReverse");
      draggableScroll && warn("draggableScroll");
      scrollOnHover && warn("scrollOnHover");
    }
  }, []);

  React.useEffect(() => {
    if (!scrollMute) {
      // size error handling
      // if (xDirection) {
      //   if (directionQuantity * objectXY[1] > scrollXY[1]) {
      //     console.error(
      //       `⛔👷‍♂️ directionQuantity needs more height in scrollXY!\nvalue ${scrollXY[1]}`
      //     );
      //     // return;
      //   }
      // }

      // update measurements
      if (objectsWrapperRef.current) {
        (function (xy: number) {
          thumbSize.current = Math.round((xy / objectsWrapperSizeXY) * xy);
          setThumbMeasuring(thumbSize.current);
        })(xy);
      }
    }
  }, [xDirection, scrollXY, objectXY, gap, scrollMute]);

  return (
    <div
      className={`customScroll${xDirection ? " xDirection" : " yDirection"}${
        draggableScroll ? " draggableScroll" : ""
      }${scrollOnHover ? " scrollOnHover" : ""} ${className}`}
      ref={customScrollRef}
      style={{
        width: `${localScrollXY[0]}px`,
        height: `${localScrollXY[1]}px`,
      }}
    >
      {!scrollMute && !!thumbMeasuring && thumbMeasuring < xy && (
        <div className={`scrollBar ${scrollReverse ? "first" : "last"}`}>
          <div
            className="scrollBarThumb"
            onMouseDown={(e) => draggableScroll && handleMouseDown(e)}
            style={
              xDirection
                ? { width: `${thumbMeasuring}px`, left: `${scroll}px` }
                : { height: `${thumbMeasuring}px`, top: `${scroll}px` }
            }
          />
        </div>
      )}
      <div
        className="scrollElement"
        ref={scrollElementRef}
        onScroll={handleScroll}
        style={
          xDirection
            ? {
                width: `${localScrollXY[1]}px`,
                height: `${localScrollXY[0]}px`,
                transform: `rotate(-90deg) translate(${translateProperty}px, ${translateProperty}px) scaleX(-1)`,
              }
            : {
                width: `${localScrollXY[0]}px`,
                height: `${localScrollXY[1]}px`,
              }
        }
      >
        <div
          className="objectsWrapper"
          ref={objectsWrapperRef}
          style={{
            gap: `${gap}px`,
            padding: xDirection
              ? `${paddingX}px ${paddingY}px`
              : `${paddingY}px ${paddingX}px`,
            ...(directionQuantity > 1 &&
              scrollXY[0] <
                objectXY[0] * directionQuantity +
                  gap * (directionQuantity - 1) +
                  xyPaddingYAll && {
                width: `${
                  objectXY[0] * directionQuantity + gapAllX + xyPaddingYAll
                }px`,
              }),
          }}
        >
          {React.Children.map(children, (child) =>
            lazyRender ? (
              <LazyRender
                refObject={scrollElementRef}
                width={objectXY[0]}
                height={objectXY[1]}
                rootMargin={rootMargin}
              >
                {child}
              </LazyRender>
            ) : (
              <div
                style={{
                  width: `${objectXY[0]}px`,
                  height: `${objectXY[1]}px`,
                }}
              >
                {child}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
