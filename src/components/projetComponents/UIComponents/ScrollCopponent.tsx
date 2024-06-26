import React, { useEffect, useRef, useState } from "react";
import LazyRender from "./LazyRender";

interface ScrollComponentType {
  className?: string;
  width: number;
  height: number;
  scrollingObjectSize: number; // it is for X or Y
  xDirection?: boolean;
  gap?: number;
  paddingX?: number;
  paddingY?: number;
  scrollReverse?: boolean;
  draggableScroll?: boolean;
  scrollOnHover?: boolean;
  lazyRender?: boolean;
  rootMargin?: string;
  children: React.ReactNode;
}

export default function ScrollComponent({
  className = "",
  width,
  height,
  scrollingObjectSize,
  xDirection = false,
  gap = 0,
  paddingX = 0,
  paddingY = 0,
  scrollReverse = false,
  draggableScroll = false,
  scrollOnHover = false,
  lazyRender = false,
  rootMargin = "0px 0px 0px 0px",
  children,
}: ScrollComponentType) {
  const scrollElementRef = useRef<HTMLDivElement | null>(null);
  const objectsWrapperRef = useRef<HTMLDivElement | null>(null);
  const customScrollRef = useRef<HTMLDivElement | null>(null);

  const updateMeasurementsCounterRef = useRef(0);
  const objectsWrapperSize = useRef(0);
  const thumbSize = useRef(0);

  const [thumbMeasuring, setThumbMeasuring] = useState(0);
  const [scroll, setScroll] = useState(0);

  const translateProperty = width / 2 - height / 2;
  const rowsQuantity = xDirection
    ? Math.ceil(height / scrollingObjectSize)
    : Math.ceil(width / scrollingObjectSize);

  const handleScroll = () => {
    const xy = xDirection ? width : height;
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
    document.body.style.cursor = "auto";
    customScrollRef.current!.classList.remove("dragging");
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = "grabbing";
    customScrollRef.current!.classList.add("dragging");
  };

  useEffect(() => {
    let animationFrameId: number;

    const updateMeasurements = () => {
      // size error handling
      updateMeasurementsCounterRef.current += 1;
      if (updateMeasurementsCounterRef.current > 800) {
        updateMeasurementsCounterRef.current = 0;
        cancelAnimationFrame(animationFrameId);
        console.error("🚫 ScrollComponent hasn`t defined the size parameters");
        return;
      }

      if (objectsWrapperRef.current) {
        const objectsWrapperRect =
          objectsWrapperRef.current.getBoundingClientRect();
        const childrenCount = objectsWrapperRef.current.childElementCount;

        function getThumbSize(
          objWrapXY: number,
          paddingXY: number,
          xy: number
        ) {
          objectsWrapperSize.current = Math.round(objWrapXY);

          if (
            objectsWrapperSize.current === rowsQuantity
              ? scrollingObjectSize * childrenCount +
                gap * (childrenCount - 1) +
                paddingXY * 2
              : scrollingObjectSize * Math.ceil(childrenCount / rowsQuantity) +
                gap *
                  (rowsQuantity
                    ? Math.ceil(childrenCount / rowsQuantity)
                    : childrenCount - 1) +
                paddingXY * 2
          ) {
            thumbSize.current = (xy / objectsWrapperSize.current) * xy;

            setThumbMeasuring(thumbSize.current);
            cancelAnimationFrame(animationFrameId);
          } else {
            animationFrameId = requestAnimationFrame(updateMeasurements);
          }
        }

        if (xDirection) {
          getThumbSize(objectsWrapperRect.width, paddingX, width);
        } else {
          getThumbSize(objectsWrapperRect.height, paddingY, height);
        }
      }
    };

    updateMeasurements();
  }, [xDirection, width, height, scrollingObjectSize, gap]);

  return (
    <div
      className={`customScroll${xDirection ? " xDirection" : " yDirection"}${
        draggableScroll ? " draggableScroll" : ""
      }${scrollOnHover ? " scrollOnHover" : ""} ${className}`}
      ref={customScrollRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {thumbMeasuring > 0 && (
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
                width: `${height}px`,
                height: `${width}px`,
                transform: `rotate(-90deg) translate(${translateProperty}px, ${translateProperty}px) scaleX(-1)`,
              }
            : {
                width: `${width}px`,
                height: `${height}px`,
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
          }}
        >
          {React.Children.map(children, (child) =>
            lazyRender ? (
              <LazyRender
                refObject={scrollElementRef}
                width={scrollingObjectSize}
                height={scrollingObjectSize}
                rootMargin={rootMargin}
              >
                {child}
              </LazyRender>
            ) : (
              <div>{child}</div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
