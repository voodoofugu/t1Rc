import React from "react";
import LazyRender from "./LazyRender";

interface ScrollComponentType {
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

const ScrollComponent: React.FC<ScrollComponentType> = ({
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

  const updateMeasurementsCounterRef = React.useRef(0);
  const objectsWrapperSize = React.useRef(0);
  const thumbSize = React.useRef(0);

  const [thumbMeasuring, setThumbMeasuring] = React.useState(0);
  const [scroll, setScroll] = React.useState(0);

  const translateProperty = scrollXY[0] / 2 - scrollXY[1] / 2;
  const childCount = React.Children.count(children);
  const objectsWrapperSizeXY = xDirection
    ? childCount * objectXY[0] + gap * (childCount - 1) + paddingX * 2
    : childCount * objectXY[1] + gap * (childCount - 1) + paddingY * 2;
  console.log("objectsWrapperSizeXY", objectsWrapperSizeXY);

  const handleScroll = () => {
    if (!scrollMute) {
      const xy = xDirection ? scrollXY[0] : scrollXY[1];
      let newScroll: number;

      (function (xy: number) {
        newScroll = Math.abs(
          Math.round(
            (scrollElementRef.current.scrollTop /
              (xy - objectsWrapperSize.current)) *
              (xy - thumbSize.current)
          )
        );
      })(xy);

      newScroll !== scroll && setScroll(newScroll);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (xDirection) {
      scrollElementRef.current!.scrollTop += e.movementX;
    } else {
      scrollElementRef.current!.scrollTop += e.movementY;
    }
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
      console.warn(`🧰 You are using the ${propsName} without scrollMute...`);
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
      let animationFrameId: number;

      const updateMeasurements = () => {
        console.log("updateMeasurements");
        // size error handling
        if (xDirection) {
          if (rowsQuantity * objectXY[1] > scrollXY[1]) {
            console.error("🚫 rowsQuantity needs more scrolling height!");
            return;
          }
        } else if (!xDirection) {
          if (rowsQuantity * objectXY[0] > scrollXY[0]) {
            console.error("🚫 rowsQuantity needs more scrolling width!");
            return;
          }
        }
        updateMeasurementsCounterRef.current += 1;
        if (updateMeasurementsCounterRef.current > 800) {
          updateMeasurementsCounterRef.current = 0;
          cancelAnimationFrame(animationFrameId);

          console.error(
            "🚫 ScrollComponent hasn`t defined the size parameters!"
          );
          return;
        }

        // update measurements
        if (objectsWrapperRef.current) {
          const objectsWrapperRect =
            objectsWrapperRef.current.getBoundingClientRect();

          function getThumbSize(
            objectWrapperXY: number,
            paddingXY: number,
            xy: number
          ) {
            objectsWrapperSize.current = Math.round(objectWrapperXY);

            if (
              objectsWrapperSize.current ===
              (rowsQuantity
                ? objectXY[0] * Math.ceil(childCount / rowsQuantity) +
                  gap * (Math.ceil(childCount / rowsQuantity) - 1) +
                  paddingXY * 2
                : objectXY[1] * childCount +
                  gap * (childCount - 1) +
                  paddingXY * 2)
            ) {
              thumbSize.current = Math.round(
                (xy / objectsWrapperSize.current) * xy
              );

              setThumbMeasuring(thumbSize.current);
              cancelAnimationFrame(animationFrameId);
            } else {
              animationFrameId = requestAnimationFrame(updateMeasurements);
            }
          }

          if (xDirection) {
            getThumbSize(objectsWrapperRect.width, paddingX, scrollXY[0]);
          } else {
            getThumbSize(objectsWrapperRect.height, paddingY, scrollXY[1]);
          }
        }
      };

      updateMeasurements();
    }
  }, [xDirection, scrollXY, objectXY, gap, scrollMute]);

  return (
    <div
      className={`customScroll${xDirection ? " xDirection" : " yDirection"}${
        draggableScroll ? " draggableScroll" : ""
      }${scrollOnHover ? " scrollOnHover" : ""} ${className}`}
      ref={customScrollRef}
      style={{
        width: `${scrollXY[0]}px`,
        height: `${scrollXY[1]}px`,
      }}
    >
      {!scrollMute &&
        !!thumbMeasuring &&
        (xDirection
          ? thumbMeasuring <= scrollXY[0]
          : thumbMeasuring <= scrollXY[1]) && (
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
                width: `${scrollXY[1]}px`,
                height: `${scrollXY[0]}px`,
                transform: `rotate(-90deg) translate(${translateProperty}px, ${translateProperty}px) scaleX(-1)`,
              }
            : {
                width: `${scrollXY[0]}px`,
                height: `${scrollXY[1]}px`,
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

export default ScrollComponent;
