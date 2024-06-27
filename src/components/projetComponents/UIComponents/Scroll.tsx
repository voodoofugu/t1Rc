import React from "react";
import LazyRender from "./LazyRender";

interface ScrollType {
  className?: string;
  scrollXY: number[];
  objectXY: number[];
  xDirection?: boolean;
  rowsQuantity?: number;
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
  rowsQuantity = 1,
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

  let localScrollXY = scrollXY;

  const childCount = React.Children.count(children);
  const xyObject = xDirection ? objectXY[0] : objectXY[1];
  const xyObjectReverse = xDirection ? objectXY[1] : objectXY[0];
  const paddingXAll = paddingX * 2;
  const xyPaddingYAll = paddingY * 2;
  const xyPaddingAll = xDirection ? paddingXAll : xyPaddingYAll;
  const gapAll = gap * (rowsQuantity - 1);

  const childsPerRow = rowsQuantity
    ? Math.ceil(childCount / rowsQuantity)
    : childCount;
  const objectsWrapperSizeXY = xyObject * childsPerRow + gapAll + xyPaddingAll;
  console.log("childsPerRow", childsPerRow);
  console.log("rowsQuantity", rowsQuantity);

  if (rowsQuantity > 1) {
    localScrollXY = (() => {
      const [x, y] = scrollXY;
      const adjustedX =
        x < xyObjectReverse * rowsQuantity + gapAll + paddingXAll
          ? xyObjectReverse * rowsQuantity + gapAll + paddingXAll
          : x;
      const adjustedY =
        y < xyObjectReverse * rowsQuantity + gapAll + xyPaddingYAll
          ? xyObjectReverse * rowsQuantity + gapAll + xyPaddingYAll
          : y;

      return xDirection ? [x, adjustedY] : [adjustedX, y];
    })();
  }

  const xy = xDirection ? localScrollXY[0] : localScrollXY[1];
  const translateProperty = localScrollXY[0] / 2 - localScrollXY[1] / 2;

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
      if (xDirection) {
        if (rowsQuantity * objectXY[1] > scrollXY[1]) {
          console.error(
            `⛔👷‍♂️ rowsQuantity needs more height in scrollXY!\nvalue ${scrollXY[1]}`
          );
          // return;
        }
      } else {
        if (rowsQuantity * objectXY[0] > scrollXY[0]) {
          console.error(
            `⛔👷‍♂️ rowsQuantity needs more width in scrollXY!\nvalue ${scrollXY[0]}`
          );
          // return;
        }
      }

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
            width: xDirection
              ? `${objectXY[1] * rowsQuantity + gap * (rowsQuantity - 1)}px`
              : `${objectXY[0] * rowsQuantity + gap * (rowsQuantity - 1)}px`,
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
