import React from "react";
import IntersectionTracking from "./IntersectionTracking";

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
  suspending?: boolean;
  fallback?: React.ReactNode;
  scrollTop?: number;
  // multipleDirectionQuantity?: boolean;
  // draggableContent?: boolean;
  // onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  // autoSize?: boolean;
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
  suspending = false,
  fallback = null,
  scrollTop = 0,
  children,
}) => {
  const scrollElementRef = React.useRef<HTMLDivElement | null>(null);
  const objectsWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const customScrollRef = React.useRef<HTMLDivElement | null>(null);

  const thumbSize = React.useRef(0);
  const scrollDirectionMove = React.useRef(0);

  const [thumbMeasuring, setThumbMeasuring] = React.useState(0);
  const [scroll, setScroll] = React.useState(scrollTop);

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
  const xyReverse = xDirection ? localScrollXY[1] : localScrollXY[0];

  const childsPerScrollXY = xDirection
    ? localScrollXY[1] > objectXY[1]
      ? Math.ceil(
          childCount /
            Math.floor(
              (localScrollXY[1] - xyPaddingAll + gap) / (objectXY[1] + gap)
            )
        )
      : childCount
    : localScrollXY[0] > objectXY[0]
    ? Math.ceil(
        childCount /
          Math.floor(
            (localScrollXY[0] - xyPaddingAll + gap) / (objectXY[0] + gap)
          )
      )
    : childCount;

  const objectsWrapperWidth =
    // for style only
    directionQuantity > 1
      ? scrollXY &&
        xy < xyObject * directionQuantity + gapAllX &&
        xyObject * directionQuantity + gapAllX + xyPaddingAll
      : NaN;

  const objectsWrapperSizeXY =
    scrollXY && directionQuantity === 1
      ? xyObject * childsPerScrollXY +
        (childsPerScrollXY - 1) * gap +
        xyPaddingAll
      : xyObject * childsPerDirection + gapAllY + xyPaddingAll;

  const handleScroll = React.useCallback(() => {
    if (!scrollMute) {
      const newScroll = Math.abs(
        Math.round(
          (scrollElementRef.current!.scrollTop / (xy - objectsWrapperSizeXY)) *
            (xy - thumbSize.current)
        )
      );

      if (newScroll !== scroll) {
        setScroll(newScroll);
      }
    }
  }, [scrollMute, xy, objectsWrapperSizeXY, scroll]);

  const translateProperty = localScrollXY[0] / 2 - localScrollXY[1] / 2;

  const handleMouseMove = (e: MouseEvent) => {
    xDirection
      ? (scrollElementRef.current!.scrollTop +=
          e.movementX * scrollDirectionMove.current)
      : (scrollElementRef.current!.scrollTop +=
          e.movementY * scrollDirectionMove.current);
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    document.body.style.removeProperty("cursor");
    customScrollRef.current!.classList.remove("dragging");
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    scrollDirectionMove.current = Math.round(
      objectsWrapperRef.current!.clientHeight /
        scrollElementRef.current!.clientHeight
    );

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = "grabbing";
    customScrollRef.current!.classList.add("dragging");
  };

  React.useEffect(() => {
    // warn handling
    function warn(prop: string, missingProp: string) {
      console.warn(`🧰👷‍♂️ You are using the ${prop} without ${missingProp}...`);
    }
    if (!lazyRender && rootMargin != "0px 0px 0px 0px") {
      scrollReverse && warn("rootMargin", "scrollMute");
    }
    if (scrollMute) {
      scrollReverse && warn("scrollReverse", "scrollMute");
      draggableScroll && warn("draggableScroll", "scrollMute");
      scrollOnHover && warn("scrollOnHover", "scrollMute");
    }
    if (!suspending && fallback) {
      scrollReverse && warn("fallback", "suspending");
    }
  }, []);

  React.useEffect(() => {
    if (!scrollMute) {
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
            ...(objectsWrapperWidth
              ? { width: `${objectsWrapperWidth}px` }
              : {}),
          }}
        >
          {React.Children.map(children, (child) => (
            <ScrollObjectWrapper
              {...{
                child,
                xyObject,
                xyObjectReverse,
                objectXY,
                suspending,
                fallback,
                lazyRender,
                scrollElementRef,
                rootMargin,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ScrollObjectWrapperProps
  extends Pick<
    ScrollType,
    "objectXY" | "suspending" | "fallback" | "lazyRender" | "rootMargin"
  > {
  child: React.ReactNode;
  xyObject: number;
  xyObjectReverse: number;
  scrollElementRef?: React.RefObject<HTMLDivElement>;
}

const ScrollObjectWrapper: React.FC<ScrollObjectWrapperProps> = React.memo(
  ({
    child,
    xyObject,
    xyObjectReverse,
    objectXY,
    suspending,
    fallback,
    lazyRender,
    scrollElementRef,
    rootMargin,
  }) => {
    return lazyRender ? (
      <IntersectionTracking
        root={scrollElementRef?.current}
        width={objectXY[0]}
        height={objectXY[1]}
        rootMargin={rootMargin}
      >
        <div
          style={{
            width: `${xyObjectReverse}px`,
            height: `${xyObject}px`,
          }}
        >
          {suspending ? (
            <React.Suspense fallback={fallback}>{child}</React.Suspense>
          ) : (
            child
          )}
        </div>
      </IntersectionTracking>
    ) : (
      <div
        style={{
          width: `${xyObjectReverse}px`,
          height: `${xyObject}px`,
        }}
      >
        <div
          style={{
            width: `${objectXY[0]}px`,
            height: `${objectXY[1]}px`,
          }}
        >
          {suspending ? (
            <React.Suspense fallback={fallback}>{child}</React.Suspense>
          ) : (
            child
          )}
        </div>
      </div>
    );
  }
);

export default Scroll;
