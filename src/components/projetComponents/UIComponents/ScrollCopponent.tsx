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
  children,
}: ScrollComponentType) {
  const updateMeasurementsCounterRef = useRef(0);
  const scrollElementRef = useRef<HTMLDivElement | null>(null);
  const objectsWrapperRef = useRef<HTMLDivElement | null>(null);
  const customScrollRef = useRef<HTMLDivElement | null>(null);

  const [measuring, setMeasuring] = useState(0);
  const [scroll, setScroll] = useState(0);

  const translateProperty = width / 2 - height / 2;

  const handleScroll = () => {
    if (scrollElementRef.current) {
      const newScroll = Math.floor(scrollElementRef.current.scrollTop);
      if (newScroll !== scroll) {
        setScroll(newScroll);
      }
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
      if (updateMeasurementsCounterRef.current > 1000) {
        updateMeasurementsCounterRef.current = 0;
        cancelAnimationFrame(animationFrameId);
        console.error("🚫 ScrollComponent hasn`t defined the size parameters");
        return;
      }

      if (objectsWrapperRef.current) {
        const objectsWrapperRect =
          objectsWrapperRef.current.getBoundingClientRect();
        const childrenCount = objectsWrapperRef.current.childElementCount;

        if (xDirection) {
          const objectsWrapperWidth = Math.round(objectsWrapperRect.width);

          if (
            objectsWrapperWidth ===
            scrollingObjectSize * childrenCount +
              gap * (childrenCount - 1) +
              paddingX * 2
          ) {
            const widthDifference = width - objectsWrapperWidth;
            const objectsWrapperNewWidth = width - Math.abs(widthDifference);

            setMeasuring(objectsWrapperNewWidth);
          } else {
            animationFrameId = requestAnimationFrame(updateMeasurements);
          }
        } else {
          const objectsWrapperHeight = Math.round(objectsWrapperRect.height);

          if (
            objectsWrapperHeight ===
            scrollingObjectSize * childrenCount +
              gap * (childrenCount - 1) +
              paddingY * 2
          ) {
            const heightDifference = height - objectsWrapperHeight;
            const objectsWrapperNewHeight = height - Math.abs(heightDifference);

            setMeasuring(objectsWrapperNewHeight);
            cancelAnimationFrame(animationFrameId);
          } else {
            animationFrameId = requestAnimationFrame(updateMeasurements);
          }
        }
      }
    };

    updateMeasurements();
  }, [xDirection, width, height, scrollingObjectSize, gap]);

  return (
    <div
      className={`customScroll${xDirection ? " xDirection" : " yDirection"}${
        draggableScroll && " draggableScroll"
      }${scrollOnHover && " scrollOnHover"} ${className}`}
      ref={customScrollRef}
      style={
        xDirection
          ? {
              width: `${width}px`,
              height: `${height}px`,
            }
          : {
              width: `${width}px`,
              height: `${height}px`,
            }
      }
    >
      {measuring > 0 && (
        <div className={scrollReverse ? "scrollBar first" : "scrollBar last"}>
          <div
            className="scrollBarThumb"
            onMouseDown={(e) => draggableScroll && handleMouseDown(e)}
            style={
              xDirection
                ? { width: `${measuring}px`, left: `${scroll}px` }
                : { height: `${measuring}px`, top: `${scroll}px` }
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
          style={
            (xDirection && paddingX > 0) || (xDirection && paddingY > 0)
              ? {
                  gap: `${gap}px`,
                  padding: `${paddingX}px ${paddingY}px`,
                }
              : {
                  gap: `${gap}px`,
                  padding: `${paddingY}px ${paddingX}px`,
                }
          }
        >
          {React.Children.map(children, (child) =>
            lazyRender ? (
              <LazyRender
                refObject={scrollElementRef}
                width={scrollingObjectSize}
                height={scrollingObjectSize}
                rootMargin={`${scrollingObjectSize}px 0px ${scrollingObjectSize}px 0px`}
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
