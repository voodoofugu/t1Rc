import React from "react";
import { createPortal } from "react-dom";

import useIdent from "../../hooks/useIdent";

export default function Tooltip({ className = "", targetContent, children }) {
  const tooltipRef = React.useRef(null);
  const style = React.useRef({});
  const timer = React.useRef(null);

  const [visible, setVisible] = React.useState(false);

  const tooltipId = useIdent();
  const tooltipLayer = document.querySelector(".tooltip-layer");

  const handleEnter = () => {
    if (!tooltipLayer) return;
    tooltipRef.current = document.querySelector(`.tooltip-${tooltipId}`);
    if (!tooltipRef.current) return;

    const rect = tooltipRef.current.getBoundingClientRect();
    const difference =
      window.innerWidth < 1200 ? 0 : (window.innerWidth - 1200) / 2;

    style.current = {
      left: `${rect.left + window.scrollX - difference}px`,
      top: `${rect.bottom + window.scrollY}px`,
    };

    setVisible(true);
  };

  const handleLeave = () => {
    Array.from(tooltipLayer?.children || []).forEach((child) => {
      child.classList.remove("fadeIn");
    });
    style.current = {};
    tooltipRef.current = null;

    timer.current = setTimeout(() => setVisible(false), 100);
  };

  const isSingleValidElement =
    React.isValidElement(children) && !Array.isArray(children);

  const commonProps = {
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    className: `${
      children.props?.className ?? ""
    } ${className} tooltip-${tooltipId}`.trim(),
  };

  const wrappedChild = isSingleValidElement ? (
    React.cloneElement(children, commonProps)
  ) : (
    <div {...commonProps}>{children}</div>
  );

  React.useEffect(() => {
    if (visible) {
      Array.from(tooltipLayer?.children || []).forEach((child) => {
        child.classList.add("fadeIn");
      });
    }

    return () => {
      clearTimeout(timer.current);
    };
  }, [visible]);

  return (
    <>
      {wrappedChild}
      {typeof window !== "undefined" && tooltipLayer && visible && targetContent
        ? createPortal(
            React.cloneElement(targetContent, {
              style: {
                ...(targetContent.props.style || {}),
                ...style.current,
              },
            }),
            tooltipLayer
          )
        : null}
    </>
  );
}
