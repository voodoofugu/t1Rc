import React, { useEffect, useRef, useState } from "react";

interface ScrollComponentType {
  className?: string;
  width: number;
  height: number;
  scrollObjectSize: number; // it is for X or Y
  gap?: number;
  xDirection?: boolean;
  scrollReverse?: boolean;
  draggable?: boolean;
  children: React.ReactNode;
}

export default function ScrollComponent({
  className = "",
  width,
  height,
  scrollObjectSize,
  gap = 0,
  xDirection = false,
  scrollReverse = false,
  draggable = false,
  children,
}: ScrollComponentType) {
  const scrollElementRef = useRef<HTMLDivElement | null>(null);
  const objectsWrapperRef = useRef<HTMLDivElement | null>(null);

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
      scrollElementRef.current!.scrollTop =
        scrollElementRef.current.scrollTop - -e.movementX;
    } else {
      scrollElementRef.current!.scrollTop =
        scrollElementRef.current.scrollTop - -e.movementY;
    }
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = "auto";
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = "grabbing";
  };

  useEffect(() => {
    let animationFrameId: number;

    const updateMeasurements = () => {
      if (objectsWrapperRef.current) {
        const objectsWrapperRect =
          objectsWrapperRef.current.getBoundingClientRect();
        const childrenCount = objectsWrapperRef.current.childElementCount;

        if (xDirection) {
          const objectsWrapperWidth = Math.round(objectsWrapperRect.width);

          if (
            objectsWrapperWidth ===
            scrollObjectSize * childrenCount + gap * (childrenCount - 1)
          ) {
            const widthDifference = width - objectsWrapperWidth;
            const objectsWrapperNewWidth = width - Math.abs(widthDifference);

            setMeasuring(objectsWrapperNewWidth);
          } else {
            animationFrameId = requestAnimationFrame(updateMeasurements);
          }
        }

        if (!xDirection) {
          const objectsWrapperHeight = Math.round(objectsWrapperRect.height);

          if (
            objectsWrapperHeight ===
            scrollObjectSize * childrenCount + gap * (childrenCount - 1)
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
  }, [xDirection, width, height, scrollObjectSize, gap]);

  return (
    <div
      className={`customScroll ${
        xDirection ? "xDirection" : "yDirection"
      } ${className}`}
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
            onMouseDown={(e) => draggable && handleMouseDown(e)}
            onMouseUp={handleMouseUp}
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
                transform: `rotate(-90deg) translate(${translateProperty}px, ${translateProperty}px)`,
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
            xDirection
              ? {
                  gap: `${gap}px`,
                }
              : { gap: `${gap}px` }
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
