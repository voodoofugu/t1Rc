import React, { useEffect, useRef, useState } from "react";

interface ScrollComponentType {
  className?: string;
  width: number;
  height: number;
  scrollDirection: "x" | "y";
  alignment: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
}

export default function ScrollComponent({
  className = "",
  width,
  height,
  scrollDirection = "y",
  children,
  alignment = "right",
}: ScrollComponentType) {
  const customScrollRef = useRef<HTMLDivElement | null>(null);
  const objectsWrapperRef = useRef<HTMLDivElement | null>(null);

  const [loaded, setLoaded] = useState(false);
  const [measuring, setMeasuring] = useState(0);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    if (objectsWrapperRef.current) {
      const rect = objectsWrapperRef.current.getBoundingClientRect();
      if (scrollDirection === "x") {
        setScroll(rect.left);
      } else {
        setScroll(rect.top);
      }
    }
  };

  const updateMeasurements = () => {
    console.log("updateMeasurements");
    if (customScrollRef.current && objectsWrapperRef.current) {
      const objectsWrapperRect =
        objectsWrapperRef.current.getBoundingClientRect();

      if (scrollDirection === "x") {
        const widthDifference = width - objectsWrapperRect.width;
        if (widthDifference < 0) {
          setMeasuring(width - Math.abs(widthDifference));
        }
      }

      if (scrollDirection === "y") {
        const heightDifference = height - objectsWrapperRect.height;
        const objectsWrapperWidth = objectsWrapperRect.width;

        if (objectsWrapperWidth === width) {
          if (heightDifference < 0) {
            setMeasuring(height - Math.abs(heightDifference));
          }
        }
      }
    }
  };

  useEffect(() => {
    let animationFrameId: number;
    let timeoutId: NodeJS.Timeout;

    const checkCondition = () => {
      if (customScrollRef.current) {
        const customScrollRect =
          customScrollRef.current.getBoundingClientRect();
        if (
          customScrollRect.width === width &&
          customScrollRect.height === height
        ) {
          timeoutId = setTimeout(() => setLoaded(true), 0);
        } else {
          animationFrameId = requestAnimationFrame(checkCondition);
          () => animationFrameId;
        }
      }
    };

    checkCondition();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [width, height]);

  useEffect(() => {
    if (loaded) {
      updateMeasurements();
      handleScroll();
      const handleResize = () => {
        updateMeasurements();
        handleScroll();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [loaded, scrollDirection]);

  useEffect(() => {
    if (loaded) {
      handleScroll();
    }
  }, [measuring]);

  return (
    <div
      className={`customScroll ${alignment} ${className}`}
      ref={customScrollRef}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {measuring > 0 && (
        <div
          className="scrollbarSlider"
          style={
            scrollDirection === "x"
              ? { width: `${measuring}px` }
              : { height: `${measuring}px` }
          }
        />
      )}
      <div
        className="objectsWrapper"
        ref={objectsWrapperRef}
        onScroll={handleScroll}
      >
        {children}
      </div>
    </div>
  );
}
