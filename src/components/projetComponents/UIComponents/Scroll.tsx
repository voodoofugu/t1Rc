import React from "react";
import IntersectionTracker from "../../templateComponents/APIs/IntersectionTracker";
import ResizeTracker from "../../templateComponents/APIs/ResizeTracker";

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
  infiniteScroll?: boolean; // not working
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
  scrollTop,
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
  const prevKey = React.useRef<string | null>(null);

  const [scroll, setScroll] = React.useState(0);
  const [receivedObjectsWrapperSize, setReceivedObjectsWrapperSize] =
    React.useState(0);
  const [infiniteScrollState, setInfiniteScrollState] = React.useState(false);

  const validChildren = React.useMemo(() => {
    return React.Children.toArray(children).filter(
      (child) => child !== null && child !== undefined
    );
  }, [children]);

  const firstChildKey = React.useMemo(() => {
    if (validChildren.length > 0) {
      const firstChild = validChildren[0];

      if (React.isValidElement(firstChild)) {
        return firstChild.key;
      }
    }
  }, [validChildren]);

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
              Math.floor((localScrollXY[1] - pY) / (localObjectXY[1] + gapX))
            )
          : Math.abs(
              Math.floor((localScrollXY[0] - pY) / (localObjectXY[0] + gapX))
            );

        return objects > validChildren.length
          ? validChildren.length
          : objects < 1
          ? 1
          : objects;
      }, [])
    : validChildren.length;

  const xy = xDirection ? localScrollXY[0] : localScrollXY[1];

  const splitIndices = React.useMemo(() => {
    if (!infiniteScroll || objectsPerDirection <= 1) {
      return [];
    }

    const indices = validChildren.map((_, index) => index);

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
      ? Math.ceil(validChildren.length / objectsPerDirection)
      : validChildren.length;
  }, [validChildren.length, objectsPerDirection]);

  const objectsWrapperWidth = React.useMemo(() => {
    return (
      xyObjectReverse * objectsPerDirection + (objectsPerDirection - 1) * gapY
    );
  }, [xyObjectReverse, objectsPerDirection, gapY]);

  const objectsWrapperHeight = React.useMemo(() => {
    return objectXY
      ? xyObject * childsPerDirection + (childsPerDirection - 1) * gapX
      : receivedObjectsWrapperSize;
  }, [xyObject, childsPerDirection, gapX, receivedObjectsWrapperSize]);

  const thumbSize = React.useMemo(() => {
    if (scrollVisibility === "<O>" || scrollVisibility === "↓<O>") {
      if (objectsWrapperHeight === 0) return 0;
      return Math.round((xy / (objectsWrapperHeight + pLocalXY)) * xy);
    } else {
      return NaN;
    }
  }, [xy, objectsWrapperHeight, pLocalXY, scrollVisibility]);

  const localScrollTop = React.useMemo(() => {
    if (scrollTop) {
      return typeof scrollTop === "number"
        ? scrollTop
        : scrollTop === "end"
        ? objectsWrapperHeight + pLocalXY > xy
          ? objectsWrapperHeight + pLocalXY - xy
          : 0
        : 0;
    }
  }, [scrollTop, objectsWrapperHeight]);

  const translateProperty = React.useMemo(() => {
    return localScrollXY[0] / 2 - localScrollXY[1] / 2;
  }, [localScrollXY]);

  const memoizedChildrenData = React.useMemo(() => {
    let lastIndices: number[] = [];
    let balanceHeight: number = 0;

    if (infiniteScroll && contentAlignCenter) {
      const indices = Array.from(
        { length: validChildren.length },
        (_, index) => index
      );
      const firstChildsInDirection = Math.abs(
        Math.floor(validChildren.length / objectsPerDirection) *
          objectsPerDirection -
          validChildren.length
      );
      lastIndices = firstChildsInDirection
        ? indices.slice(-firstChildsInDirection)
        : [];
      balanceHeight =
        ((xyObjectReverse + gapY) *
          (objectsPerDirection - firstChildsInDirection)) /
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
      scrollElementRef.current &&
      thumbSize !== 0 &&
      (scrollVisibility === "<O>" || scrollVisibility === "↓<O>")
    ) {
      const newScroll = Math.abs(
        Math.round(
          (scrollElementRef.current.scrollTop /
            (xy - (objectsWrapperHeight + pLocalXY))) *
            (xy - thumbSize)
        )
      );

      if (newScroll !== scroll) {
        setScroll(newScroll);
      }

      if (scrollElementRef.current.scrollTop === 0 && !clickedObject.current) {
        scrollElementRef.current.scrollTop = 1;
      }
    }
  }, [xy, thumbSize]);

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
      (scrollVisibility === "↓<O>" || scrollVisibility === "<O>") &&
        customScrollRef.current.classList.add("grabbingScroll");
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "grabbing";
    },
    [handleMouseMove, handleMouseUp, customScrollRef]
  );

  const handleResize = React.useCallback(
    (width: number, height: number) => {
      const newSize = xDirection ? width - pLocalXY : height - pLocalXY;
      setReceivedObjectsWrapperSize(newSize);
    },
    [xDirection, pLocalXY, objectsWrapperHeight]
  );

  const smoothScroll = React.useCallback(
    (duration: number, targetScrollTop: number, callback: () => void) => {
      if (!scrollElementRef.current) return;

      const startScrollTop = scrollElementRef.current.scrollTop;
      const startTime = performance.now();

      const scrollStep = (currentTime: number) => {
        if (!scrollElementRef.current) return;

        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        if (targetScrollTop) {
          scrollElementRef.current.scrollTop =
            startScrollTop + (targetScrollTop - startScrollTop) * progress;
        }

        if (timeElapsed < duration) {
          requestAnimationFrame(scrollStep);
        } else {
          callback();
        }
      };

      requestAnimationFrame(scrollStep);
    },
    [scrollElementRef]
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
      (scrollTrigger === "←→" || scrollTrigger === "←→/←O→") &&
        warn("scrollTrigger ←→ or ←→/←O→", "scrollVisibility <O>");
    }
    if (!suspending && fallback) {
      scrollReverse && warn("fallback", "suspending");
    }
  }, []);

  React.useEffect(() => {
    if (
      scrollTop &&
      scrollElementRef.current &&
      validChildren.length > 0 &&
      scrollTop === "end"
    ) {
      let animationId: number;

      const scrollCallback = () => {
        prevKey.current = firstChildKey;
      };

      if (prevKey.current === null) {
        animationId = requestAnimationFrame(() =>
          smoothScroll(200, localScrollTop, scrollCallback)
        );
      } else if (prevKey.current !== firstChildKey) {
        smoothScroll(200, NaN, scrollCallback);
      } else if (prevKey.current === firstChildKey) {
        animationId = requestAnimationFrame(() =>
          smoothScroll(200, localScrollTop, () => {})
        );
      }

      return () => cancelAnimationFrame(animationId);
    }
  }, [objectsWrapperHeight]);

  React.useEffect(() => {
    if (
      scrollTop &&
      scrollElementRef.current &&
      validChildren.length > 0 &&
      typeof scrollTop === "number" &&
      scrollTop
    ) {
      let animationId: number;

      smoothScroll(200, localScrollTop, () => {});

      return () => cancelAnimationFrame(animationId);
    }

    if (infiniteScroll) {
      setInfiniteScrollState(true);
    }
  }, []);

  // contents
  const infiniteScrollObjectWrapper = (
    child: React.ReactNode,
    key: string,
    elementTop: number,
    left: number
  ) => {
    return (
      <IntersectionTracker
        root={scrollElementRef.current}
        rootMargin={rootMargin}
        style={{
          position: "absolute",
          width: `${xyObjectReverse}px`,
          height: `${xyObject}px`,
          top: `${elementTop}px`,
          ...(left !== null ? { left: `${left}px` } : {}),
        }}
        key={key}
      >
        <div
          key={key}
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
      </IntersectionTracker>
    );
  };

  const scrollObjectWrapper = (child: React.ReactNode, key: string) => {
    const wrapStyle1 = {
      width: `${localObjectXY[0]}px`,
      height: `${localObjectXY[1]}px`,
    };
    const wrapStyle2 = {
      width: `${xyObjectReverse}px`,
      height: `${xyObject}px`,
    };

    return lazyRender ? (
      <IntersectionTracker
        root={scrollElementRef.current}
        rootMargin={mRootLocal}
        style={wrapStyle1}
      >
        <div style={wrapStyle2}>
          {suspending ? (
            <React.Suspense fallback={fallback}>{child}</React.Suspense>
          ) : (
            child
          )}
        </div>
      </IntersectionTracker>
    ) : (
      <div key={key} style={wrapStyle2}>
        <div style={wrapStyle1}>
          {suspending ? (
            <React.Suspense fallback={fallback}>{child}</React.Suspense>
          ) : (
            child
          )}
        </div>
      </div>
    );
  };

  const objectsWrapper = (
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
          minHeight: `calc(${objectsWrapperMinSize}px - ${pLocalXY}px)`,
        }),
        ...(!infiniteScroll &&
          contentAlignCenter && {
            flexDirection: "row",
            justifyContent: "center",
          }),
        ...(!xDirection && {
          flexDirection: "column",
        }),
      }}
    >
      {validChildren.map((child, index) => {
        const key = (child as React.ReactElement).key;

        if (infiniteScroll) {
          const { elementTop, elementBottom, left } =
            memoizedChildrenData[index];

          const isElementVisible =
            (xDirection ? localScrollXY[0] : localScrollXY[1]) + mRootX >
              elementTop - scrollElementRef.current?.scrollTop &&
            elementBottom - scrollElementRef.current?.scrollTop > 0 - mRootY;

          if (isElementVisible) {
            return (
              infiniteScrollState &&
              infiniteScrollObjectWrapper(child, key, elementTop, left)
            );
          }
        } else {
          return scrollObjectWrapper(child, key);
        }
      })}
    </div>
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
          // не реализовано
          <ResizeTracker
            onResize={handleResize}
            style={{
              minHeight: `${localScrollXY[1]}px`,
            }}
          >
            {(width, height) => objectsWrapper}
          </ResizeTracker>
        )}
      </div>
    </div>
  );
};

export default Scroll;
