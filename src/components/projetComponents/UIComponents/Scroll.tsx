import React from "react";
import IntersectionTracking from "../../templateComponents/APIs/IntersectionTracking";
import ResizeTracking from "../../templateComponents/APIs/ResizeTracking";

interface ScrollType {
  className?: string;
  scrollXY?: number[];
  objectXY?: number[];
  xDirection?: boolean;
  gap?: number[] | number;
  padding?: number[] | number;
  scrollReverse?: boolean;
  scrollTrigger?:
    | "←→" // mouse wheel (default)
    | "←→/←O→" // mouse wheel + scroll bar
    | "<c>" // content
    | "<c>/←O→" // content + scroll bar
    | "◄|►" // arrows
    | "◄|►/<c>"; // arrows + content
  scrollVisibility?:
    | "<O>" // visible (default)
    | "↓<O>" // visible on hover
    | "<Ø>"; // hidden
  lazyRender?: boolean;
  rootMargin?: number[] | number;
  suspending?: boolean;
  fallback?: React.ReactNode;
  scrollTop?: number | "end";
  // multipleDirectionQuantity?: boolean;
  // onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  // autoSize?: boolean;
  // overflowEdgeGradient?: boolean | string;
  infiniteScroll?: boolean;
  contentAlignCenter?: boolean;
  wrapAlignCenter?: boolean;
  objectsWrapperMinSize?: number; // px
  children: React.ReactNode;
}

const Scroll: React.FC<ScrollType> = ({
  className = "",
  scrollXY,
  objectXY,
  xDirection = false,
  gap = [0, 0],
  padding = [0, 0, 0, 0],
  scrollReverse = false,
  scrollTrigger = "←→",
  scrollVisibility = "<O>",
  lazyRender = false,
  rootMargin = null,
  suspending = false,
  fallback = null,
  scrollTop = 0,
  infiniteScroll = false,
  contentAlignCenter = false,
  wrapAlignCenter = false,
  // overflowEdgeGradient = "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
  objectsWrapperMinSize,
  children,
}) => {
  const scrollElementRef = React.useRef<HTMLDivElement | null>(null);
  const objectsWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const customScrollRef = React.useRef<HTMLDivElement | null>(null);

  let objectsWrapperAligning = false;
  const clickedObject = React.useRef("");

  const [scroll, setScroll] = React.useState(0);
  const [receivedObjectsWrapperSize, setReceivedObjectsWrapperSize] =
    React.useState(0);

  const childCount = React.useMemo(() => {
    return React.Children.toArray(children).filter(
      (child) => child !== null && child !== undefined
    ).length;
  }, [children]);

  // variables
  const pLocal =
    typeof padding === "number"
      ? [padding, padding, padding, padding]
      : padding.length === 2
      ? [padding[0], padding[1], padding[0], padding[1]]
      : padding.length === 3
      ? [padding[0], padding[1], padding[2], padding[1]]
      : padding;
  const [pT, pR, pB, pL] = xDirection
    ? [pLocal[1], pLocal[2], pLocal[3], pLocal[0]]
    : pLocal;
  const [pX, pY] = [pLocal[0] + pLocal[2], pLocal[1] + pLocal[3]];
  const pLocalXY = pT + pB;

  const [gapX, gapY] =
    typeof gap === "number" ? [gap, gap] : xDirection ? [gap[1], gap[0]] : gap;

  const localObjectXY = objectXY
    ? objectXY
    : xDirection
    ? [NaN, scrollXY[1] - pY]
    : [scrollXY[0] - pY, NaN];

  const xyObject = localObjectXY
    ? xDirection
      ? localObjectXY[0]
      : localObjectXY[1]
    : NaN;
  const xyObjectReverse = localObjectXY
    ? xDirection
      ? localObjectXY[1]
      : localObjectXY[0]
    : NaN;

  const mRootLocal = rootMargin
    ? typeof rootMargin === "number"
      ? [rootMargin, rootMargin, rootMargin, rootMargin]
      : xDirection
      ? rootMargin.length === 2
        ? [rootMargin[0], rootMargin[1], rootMargin[0], rootMargin[1]]
        : [rootMargin[1], rootMargin[0], rootMargin[3], rootMargin[2]]
      : rootMargin.length === 2
      ? [rootMargin[1], rootMargin[0], rootMargin[1], rootMargin[0]]
      : rootMargin
    : null;

  const [mRootX, mRootY] = rootMargin
    ? xDirection
      ? [mRootLocal[3], mRootLocal[1]]
      : [mRootLocal[2], mRootLocal[0]]
    : [0, 0];

  const localScrollXY = React.useMemo(() => {
    const [x, y] = scrollXY || localObjectXY;
    return [x, y];
  }, []);

  // calculations
  const objectsPerDirection = localObjectXY
    ? React.useMemo(() => {
        const objects = xDirection
          ? Math.abs(
              Math.floor((localScrollXY[1] - pY) / (localObjectXY[0] + gapX))
            )
          : Math.abs(
              Math.floor((localScrollXY[0] - pY) / (localObjectXY[0] + gapX))
            );

        return objects > childCount ? childCount : objects < 1 ? 1 : objects;
      }, [])
    : childCount;

  const xy = xDirection ? localScrollXY[0] : localScrollXY[1];

  const splitIndices = React.useMemo(() => {
    if (!infiniteScroll || objectsPerDirection <= 1) {
      return [];
    }

    const indices = React.Children.toArray(children)
      .filter((child) => child !== null && child !== undefined)
      .map((_, index) => index);

    if (!indices) return [];

    const result: number[][] = Array.from(
      { length: objectsPerDirection },
      () => []
    );

    indices.forEach((index) => {
      result[index % objectsPerDirection].push(index);
    });

    return result;
  }, [children, objectsPerDirection, infiniteScroll]);

  const childsPerDirection = React.useMemo(() => {
    return objectsPerDirection > 1
      ? Math.ceil(childCount / objectsPerDirection)
      : childCount;
  }, [childCount, objectsPerDirection]);

  const objectsWrapperWidth = React.useMemo(() => {
    return (
      xyObjectReverse * objectsPerDirection + (objectsPerDirection - 1) * gapY
    );
  }, [xyObjectReverse, objectsPerDirection, gapY]);

  const objectsWrapperHeight = objectXY
    ? React.useMemo(() => {
        return xyObject * childsPerDirection + (childsPerDirection - 1) * gapX;
      }, [xyObject, childsPerDirection, gapX])
    : React.useMemo(() => {
        return receivedObjectsWrapperSize;
      }, [receivedObjectsWrapperSize]);

  const thumbSize = React.useMemo(() => {
    if (scrollVisibility === "<O>" || scrollVisibility === "↓<O>") {
      if (objectsWrapperHeight === 0) return 0;
      return Math.round((xy / (objectsWrapperHeight + pLocalXY)) * xy);
    } else {
      return NaN;
    }
  }, [xy, objectsWrapperHeight, pLocalXY, scrollVisibility]);

  const translateProperty = React.useMemo(() => {
    return localScrollXY[0] / 2 - localScrollXY[1] / 2;
  }, [localScrollXY]);

  const memoizedChildrenData = React.useMemo(() => {
    let lastIndices: number[] = [];
    let balanceHeight: number = 0;

    const validChildren = React.Children.toArray(children).filter(
      (child) => child !== null && child !== undefined
    );
    const validChildCount = validChildren.length;

    if (infiniteScroll && contentAlignCenter) {
      const indices = Array.from(
        { length: validChildCount },
        (_, index) => index
      );
      const lastChildsInDirection = Math.abs(
        Math.floor(validChildCount / objectsPerDirection) *
          objectsPerDirection -
          validChildCount
      );
      lastIndices = lastChildsInDirection
        ? indices.slice(-lastChildsInDirection)
        : [];
      balanceHeight =
        ((xyObjectReverse + gapY) *
          (objectsPerDirection - lastChildsInDirection)) /
        2;
    }

    return validChildren.map((_, index) => {
      const indexAndSubIndex = (function (
        index: number,
        splitIndices: number[][]
      ) {
        if (!splitIndices) {
          return [0, index];
        }
        for (
          let arrayIndex = 0;
          arrayIndex < splitIndices.length;
          arrayIndex++
        ) {
          const indexInArray = splitIndices[arrayIndex].indexOf(index);
          if (indexInArray !== -1) {
            return [arrayIndex, indexInArray];
          }
        }
        return [null, null];
      })(index, splitIndices);

      const elementTop = (function (index: number) {
        return index !== null ? (xyObject + gapX) * index + pT : null;
      })(
        infiniteScroll
          ? objectsPerDirection > 1
            ? indexAndSubIndex[1]
            : index
          : null
      );

      const elementBottom = (function () {
        return infiniteScroll ? elementTop + localObjectXY[1] : null;
      })();

      const left =
        infiniteScroll && objectsPerDirection > 1
          ? xyObjectReverse * indexAndSubIndex[0] +
            gapY * indexAndSubIndex[0] +
            (xDirection ? pLocal[0] : pLocal[1]) +
            (contentAlignCenter && lastIndices.length > 0
              ? lastIndices.includes(index)
                ? balanceHeight
                : 0
              : 0)
          : null;

      return {
        elementTop,
        elementBottom,
        left,
      };
    });
  }, [
    children,
    splitIndices,
    localObjectXY,
    gap,
    infiniteScroll,
    objectsPerDirection,
  ]);

  objectsWrapperAligning = React.useMemo(() => {
    if (wrapAlignCenter && scrollXY) {
      if (xDirection) {
        if (localScrollXY[0] > objectsWrapperHeight + pLocalXY) {
          return true;
        }
      } else {
        if (localScrollXY[1] > objectsWrapperHeight + pLocalXY) {
          return true;
        }
      }
    }
    return false;
  }, [xDirection, localScrollXY, localObjectXY, gap]);

  const scrollingSizeToObjectsWrapper = React.useMemo(() => {
    return xDirection
      ? Math.round(objectsWrapperHeight / localScrollXY[0])
      : Math.round(objectsWrapperHeight / localScrollXY[1]);
  }, [xDirection, localScrollXY, localObjectXY, gap]);

  // events
  const handleScroll = React.useCallback(() => {
    if (
      (scrollElementRef.current &&
        thumbSize !== 0 &&
        scrollVisibility === "<O>") ||
      scrollVisibility === "↓<O>"
    ) {
      const newScroll = Math.abs(
        Math.round(
          (scrollElementRef.current.scrollTop /
            (xy - (objectsWrapperHeight + pY))) *
            (xy - thumbSize)
        )
      );

      if (newScroll !== scroll) {
        setScroll(newScroll);
      }
    }
  }, [xy, scroll]);

  const handleMouseMove = React.useCallback(
    (e: MouseEvent) => {
      const plusMinus = clickedObject.current === "thumb" ? 1 : -1;
      if (xDirection) {
        scrollElementRef.current!.scrollTop +=
          e.movementX * scrollingSizeToObjectsWrapper * plusMinus;
      } else {
        scrollElementRef.current!.scrollTop +=
          e.movementY * scrollingSizeToObjectsWrapper * plusMinus;
      }
    },
    [xDirection, scrollElementRef, scrollingSizeToObjectsWrapper]
  );

  const handleMouseUp = React.useCallback(() => {
    clickedObject.current === "thumb" &&
      customScrollRef.current.classList.remove("grabbingScroll");
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    document.body.style.removeProperty("cursor");
  }, [handleMouseMove, customScrollRef]);

  const handleMouseDown = React.useCallback(
    (e: React.MouseEvent, clicked: "thumb" | "wrapp") => {
      clickedObject.current = clicked;
      scrollVisibility === "↓<O>" &&
        customScrollRef.current.classList.add("grabbingScroll");
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "grabbing";
    },
    [handleMouseMove, handleMouseUp, customScrollRef]
  );

  const handleResize = React.useCallback(
    (width: number, height: number) => {
      setReceivedObjectsWrapperSize(xDirection ? width - pY : height - pY);
    },
    [xDirection, pL, pR, pT, pB]
  );

  // effects
  React.useEffect(() => {
    // warn handling
    function warn(prop: string, missingProp: string) {
      console.warn(`🧰👷‍♂️ You are using the ${prop} without ${missingProp}...`);
    }
    if (!lazyRender && rootMargin) {
      scrollReverse && warn("rootMargin", "lazyRender");
    }
    if (scrollVisibility === "<Ø>") {
      scrollReverse && warn("scrollReverse", "scrollVisibility <O>");
      scrollTrigger === "←→" ||
        (scrollTrigger === "←→/←O→" &&
          warn("scrollTrigger ←→ or ←→/←O→", "scrollVisibility <O>"));
    }
    if (!suspending && fallback) {
      scrollReverse && warn("fallback", "suspending");
    }
  }, []);

  React.useEffect(() => {
    if (scrollTop && scrollElementRef.current) {
      let animationId: number;

      const localScrollTop =
        typeof scrollTop === "number"
          ? scrollTop
          : scrollTop === "end"
          ? objectsWrapperHeight + pY > xy
            ? Math.abs(objectsWrapperHeight + pY - xy)
            : 0
          : 0;

      const smoothScroll = (targetScrollTop: number, duration: number) => {
        if (!scrollElementRef.current) return;

        const startScrollTop = scrollElementRef.current.scrollTop;
        const startTime = performance.now();

        const scrollStep = (currentTime: number) => {
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          scrollElementRef.current.scrollTop =
            startScrollTop + (targetScrollTop - startScrollTop) * progress;

          if (timeElapsed < duration) {
            animationId = requestAnimationFrame(scrollStep);
          } else {
            const newScroll = Math.abs(
              Math.round(
                (targetScrollTop / (xy - (objectsWrapperHeight + pY))) *
                  (xy - thumbSize)
              )
            );
            if (newScroll !== scroll) {
              setScroll(newScroll);
            }
          }
        };

        animationId = requestAnimationFrame(scrollStep);
      };

      smoothScroll(localScrollTop, 100);

      return () => cancelAnimationFrame(animationId);
    }
  }, [scrollTop, scrollElementRef.current, objectsWrapperHeight]);

  const objectsWrapper = React.useMemo(
    () => (
      <div
        className="objectsWrapper"
        ref={objectsWrapperRef}
        onMouseDown={(e) =>
          (scrollTrigger === "<c>" || scrollTrigger === "<c>/←O→") &&
          handleMouseDown(e, "wrapp")
        }
        style={{
          gap: `${gapX}px ${gapY}px`,
          padding: `${pT}px ${pR}px ${pB}px ${pL}px`,
          ...(objectsWrapperWidth ? { width: `${objectsWrapperWidth}px` } : {}),
          ...(objectXY &&
            objectsWrapperHeight && {
              position: "absolute",
              height: `${objectsWrapperHeight}px`,
            }),
          ...(objectsWrapperMinSize && {
            minHeight: `calc(${objectsWrapperMinSize}px - ${pY}px)`,
          }),
          ...(!infiniteScroll &&
            contentAlignCenter && {
              justifyContent: "center",
            }),
        }}
      >
        {React.Children.toArray(children)
          .filter((child) => child !== null && child !== undefined)
          .map((child, index) => {
            if (infiniteScroll && scrollElementRef.current) {
              const { elementTop, elementBottom, left } =
                memoizedChildrenData[index];

              const isElementVisible =
                (xDirection ? localScrollXY[0] : localScrollXY[1]) + mRootX >
                  elementTop - scrollElementRef.current.scrollTop &&
                elementBottom - scrollElementRef.current.scrollTop > 0 - mRootY;

              return (
                isElementVisible && (
                  <InfiniteScrollObjectWrapper
                    key={index}
                    {...{
                      child,
                      xyObjectReverse,
                      xyObject,
                      suspending,
                      fallback,
                      scrollElementRef: scrollElementRef.current,
                      rootMargin: mRootLocal,
                      top: elementTop,
                      left: left,
                    }}
                  />
                )
              );
            } else {
              return (
                <ScrollObjectWrapper
                  key={index}
                  {...{
                    child,
                    localObjectXY,
                    xDirection,
                    suspending,
                    fallback,
                    lazyRender,
                    scrollElementRef: scrollElementRef.current,
                    rootMargin: mRootLocal,
                  }}
                />
              );
            }
          })}
      </div>
    ),
    [
      children,
      contentAlignCenter,
      gapX,
      gapY,
      infiniteScroll,
      lazyRender,
      localScrollXY,
      mRootX,
      mRootY,
      mRootLocal,
    ]
  );

  return (
    <div
      className={`customScroll${xDirection ? " xDirection" : " yDirection"}${
        scrollTrigger === "←→/←O→"
          ? " draggableScroll"
          : scrollTrigger === "<c>" || scrollTrigger === "◄|►/<c>"
          ? " draggableContent"
          : scrollTrigger === "<c>/←O→"
          ? " draggableContent draggableScroll"
          : ""
      }${scrollVisibility === "↓<O>" ? " scrollOnHover" : ""} ${className}`}
      ref={customScrollRef}
      style={{
        width: `${localScrollXY[0]}px`,
        height: `${localScrollXY[1]}px`,
      }}
    >
      {(scrollVisibility === "<O>" || scrollVisibility === "↓<O>") &&
        thumbSize < xy && (
          <div
            className={`scrollBar ${scrollReverse ? "first" : "last"}`}
            style={
              scrollTrigger === "←→/←O→" || scrollTrigger === "<c>/←O→"
                ? {}
                : { pointerEvents: "none" }
            }
          >
            <div
              className="scrollBarThumb"
              onMouseDown={(e) =>
                (scrollTrigger === "←→/←O→" || scrollTrigger === "<c>/←O→") &&
                handleMouseDown(e, "thumb")
              }
              style={
                xDirection
                  ? { width: `${thumbSize}px`, left: `${scroll}px` }
                  : { height: `${thumbSize}px`, top: `${scroll}px` }
              }
            />
          </div>
        )}

      <div
        className="scrollElement"
        ref={scrollElementRef}
        onScroll={handleScroll}
        style={{
          width: xDirection ? `${localScrollXY[1]}px` : `${localScrollXY[0]}px`,
          height: xDirection
            ? `${localScrollXY[0]}px`
            : `${localScrollXY[1]}px`,
          ...(xDirection && {
            transform: `rotate(-90deg) translate(${translateProperty}px, ${translateProperty}px) scaleX(-1)`,
          }),
          ...(objectsWrapperAligning && {
            alignItems: "center",
          }),
          ...(scrollTrigger === "←→" || scrollTrigger === "←→/←O→"
            ? {
                overflow: "hidden auto",
              }
            : { overflow: "hidden hidden" }),
        }}
      >
        {objectXY ? (
          objectsWrapper
        ) : (
          <ResizeTracking
            onResize={handleResize}
            style={{
              minHeight: `${localScrollXY[1]}px`,
            }}
          >
            {(width, height) => objectsWrapper}
          </ResizeTracking>
        )}
      </div>
    </div>
  );
};

export default Scroll;

interface ScrollObjectWrapperProps
  extends Pick<
    ScrollType,
    "suspending" | "fallback" | "lazyRender" | "rootMargin" | "xDirection"
  > {
  child: React.ReactNode;
  scrollElementRef?: Element | null;
  localObjectXY?: number[];
}

const ScrollObjectWrapper: React.FC<ScrollObjectWrapperProps> = React.memo(
  ({
    child,
    localObjectXY,
    xDirection,
    suspending,
    fallback,
    lazyRender,
    scrollElementRef,
    rootMargin,
  }) => {
    const xyObject = localObjectXY
      ? xDirection
        ? localObjectXY[0]
        : localObjectXY[1]
      : NaN;
    const xyObjectReverse = localObjectXY
      ? xDirection
        ? localObjectXY[1]
        : localObjectXY[0]
      : NaN;

    return lazyRender ? (
      <IntersectionTracking
        root={scrollElementRef}
        rootMargin={rootMargin}
        wrapSyle={{
          width: `${localObjectXY[0]}px`,
          height: `${localObjectXY[1]}px`,
        }}
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
            width: `${localObjectXY[0]}px`,
            height: `${localObjectXY[1]}px`,
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

interface InfiniteScrollObjectWrapperProps
  extends Pick<ScrollType, "suspending" | "fallback" | "rootMargin"> {
  child: React.ReactNode;
  xyObject: number;
  xyObjectReverse: number;
  scrollElementRef?: Element | null;
  top: number;
  left: number;
}

const InfiniteScrollObjectWrapper: React.FC<InfiniteScrollObjectWrapperProps> =
  React.memo(
    ({
      child,
      xyObject,
      xyObjectReverse,
      suspending,
      fallback,
      scrollElementRef,
      rootMargin,
      top,
      left,
    }) => {
      return (
        <IntersectionTracking
          root={scrollElementRef}
          rootMargin={rootMargin}
          wrapSyle={{
            position: "absolute",
            width: `${xyObjectReverse}px`,
            height: `${xyObject}px`,
            top: `${top}px`,
            ...(left !== null ? { left: `${left}px` } : {}),
          }}
        >
          <div
            style={{
              width: `${xyObjectReverse}px`,
            }}
          >
            {suspending ? (
              <React.Suspense fallback={fallback}>{child}</React.Suspense>
            ) : (
              child
            )}
          </div>
        </IntersectionTracking>
      );
    }
  );
