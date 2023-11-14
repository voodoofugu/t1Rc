import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import Stylus from "../img/template/svg/Stylus";

export default function TooltipProvider({ children, text }) {
  const refSetTimeout = useRef(null);
  const tooltipRef = useRef(null);
  const [visibleClass, setVisibleClass] = useState("");
  const [positionClassY, setPositionClassY] = useState("");
  const [positionClassX, setPositionClassX] = useState("");
  const [showToolTip, setShowToolTip] = useState(false);
  const [tooltipData, setTooltipData] = useState({
    left: 0,
    top: 0,
    tooltipWidth: 0,
    tooltipHeight: 0,
  });

  function updateTooltipData() {
    if (tooltipRef.current) {
      setTooltipData((prevData) => ({
        ...prevData,
        tooltipWidth: tooltipRef.current.offsetWidth,
        tooltipHeight: tooltipRef.current.offsetHeight,
      }));
    }
  }

  function addNewData(event) {
    setTooltipData((prevData) => {
      const { left, top, height, width } = event.target.getBoundingClientRect();
      const infoPageBoxCenterY = top + height / 2;
      const infoPageBoxCenterX = left + width / 2;

      const { innerHeight, innerWidth } = window;
      const halfHeight = innerHeight / 2;
      const oneFreethWidth = innerWidth / 3;

      let newTooltipData = { ...prevData };

      if (infoPageBoxCenterY < halfHeight) {
        newTooltipData.top = top + height + 16;
        setPositionClassY("top");
      } else {
        newTooltipData.top = top - prevData.tooltipHeight - 16;
        setPositionClassY("bottom");
      }

      newTooltipData.left = left - prevData.tooltipWidth / 2 + width / 2;

      if (infoPageBoxCenterX < oneFreethWidth) {
        newTooltipData.left = left - width;
        setPositionClassX("left");
      }
      if (infoPageBoxCenterX > oneFreethWidth * 2) {
        newTooltipData.left = left - prevData.tooltipWidth + width * 2;
        setPositionClassX("right");
      }

      return newTooltipData;
    });
  }

  function onMouseEnterHandler(event) {
    if (refSetTimeout.current) {
      clearTimeout(refSetTimeout.current);
    }

    refSetTimeout.current = setTimeout(() => {
      setShowToolTip(true);
      refSetTimeout.current = setTimeout(() => {
        updateTooltipData();
      }, 50);
      refSetTimeout.current = setTimeout(() => {
        addNewData(event);
      }, 100);
      refSetTimeout.current = setTimeout(() => {
        setVisibleClass("visible");
      }, 350);
    }, 200);
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
            className={`tooltipTemplate ${visibleClass} ${positionClassY} ${positionClassX}`}
            style={tooltipData}
            ref={tooltipRef}
          >
            <div className="icn">
              <Stylus />
            </div>
            {text}
          </div>,
          document.querySelector("#root > div > main")
        )}
    </div>
  );
}
