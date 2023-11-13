import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function TooltipProvider({ children, text }) {
  const refSetTimeout = useRef(null);
  const tooltipRef = useRef(null);
  const [visibleClass, setVisibleClass] = useState("");
  const [showToolTip, setShowToolTip] = useState(false);
  const [tooltipData, setTooltipData] = useState({
    left: 0,
    top: 0,
    tooltipWidth: 0,
    tooltipHeight: 0,
  });

  useEffect(() => {
    if (showToolTip) {
      updateTooltipData();
    }
    return () => {
      if (refSetTimeout.current) {
        clearTimeout(refSetTimeout.current);
      }
    };
  }, [showToolTip, tooltipRef.current]);

  async function updateTooltipData() {
    if (tooltipRef.current) {
      const tooltipWidth = tooltipRef.current.offsetWidth;
      const tooltipHeight = tooltipRef.current.offsetHeight;

      // Обновляем данные
      setTooltipData((prevData) => ({
        ...prevData,
        tooltipWidth,
        tooltipHeight,
      }));

      // Ждем рендера после обновления данных
      await new Promise((resolve) => setTimeout(resolve, 0));

      setVisibleClass("visible");
    }
  }

  function calculateTooltipPosition({ left, top, height, width }) {
    const { innerHeight } = window;
    const halfHeight = innerHeight / 2;

    let newTooltipData = { left: 0, top: 0 };

    if (top < halfHeight) {
      newTooltipData.top = top + height + 16;
    } else {
      newTooltipData.top = top - tooltipData.tooltipHeight - 16;
    }

    newTooltipData.left = left - tooltipData.tooltipWidth / 2 + width / 2;

    return newTooltipData;
  }

  function onMouseEnterHandler(event) {
    const boundingRect = event.target.getBoundingClientRect();

    if (refSetTimeout.current) {
      clearTimeout(refSetTimeout.current);
    }

    refSetTimeout.current = setTimeout(() => {
      // Сначала обновляем данные тултипа
      setTooltipData(calculateTooltipPosition(boundingRect));

      // Затем устанавливаем видимость
      setShowToolTip(true);
    }, 300);
  }

  function onMouseLeaveHandler() {
    if (refSetTimeout.current) {
      clearTimeout(refSetTimeout.current);
    }

    setVisibleClass("");

    refSetTimeout.current = setTimeout(() => {
      setShowToolTip(false);
    }, 200);
  }

  return (
    <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      {children}
      {showToolTip &&
        createPortal(
          <div
            className={`tooltipTemplate ${visibleClass}`}
            style={tooltipData}
            ref={tooltipRef}
          >
            {text}
          </div>,
          document.querySelector("#root > div > main")
        )}
    </div>
  );
}
