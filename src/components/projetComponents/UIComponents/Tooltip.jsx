import React from "react";
import { createPortal } from "react-dom";

export default function Tooltip({ className = "", children, targetContent }) {
  const tooltipRef = React.useRef(null);
  const layerRef = React.useRef(null);
  const style = React.useRef({});

  const [visible, setVisible] = React.useState(false);

  const handleEnter = () => {
    console.log("handleEnter");
    if (!tooltipRef.current) return;
    layerRef.current = document.querySelector(".tooltip-layer");
    if (!layerRef.current) return;

    const rect = tooltipRef.current.getBoundingClientRect();
    const difference =
      window.innerWidth < 1200 ? 0 : (window.innerWidth - 1200) / 2;
    console.log("window.width", window);
    style.current = {
      left: `${rect.left + window.scrollX - difference}px`,
      top: `${rect.bottom + window.scrollY}px`,
    };
    console.log("rect", rect);

    setVisible(true);
  };

  const handleLeave = () => {
    style.current = {};
    setVisible(false);
  };

  // const isSingleValidElement =
  //   React.isValidElement(children) && !Array.isArray(children);
  // const wrappedChild = isSingleValidElement ? (
  //   React.cloneElement(children, {
  //     onMouseEnter: handleEnter,
  //     onMouseLeave: handleLeave,
  //     className: `${children.props.className ?? ""} ${className}`.trim(),
  //   })
  // ) : (
  //   <div
  //     onMouseEnter={handleEnter}
  //     onMouseLeave={handleLeave}
  //     className={`tooltipWrap${className ? ` ${className}` : ""}`}
  //     style={{
  //       position: "absolute",
  //       width: "fit-content",
  //       height: "fit-content",
  //     }}
  //   >
  //     {children}
  //   </div>
  // );
  const isDOMElement = typeof children?.type === "string";
  const wrappedChild = isDOMElement
    ? React.cloneElement(children, {
        ref: tooltipRef,
        onMouseEnter: handleEnter,
        onMouseLeave: handleLeave,
        className: `${children.props.className ?? ""} ${className}`.trim(),
      })
    : React.cloneElement(children, {
        onMouseEnter: handleEnter,
        onMouseLeave: handleLeave,
        className: `${children.props?.className ?? ""} ${className}`.trim(),
      });

  return (
    <>
      {wrappedChild}
      {typeof window !== "undefined" &&
      visible &&
      layerRef.current &&
      targetContent
        ? createPortal(
            React.cloneElement(targetContent, {
              style: {
                ...(targetContent.props.style || {}),
                ...style.current,
              },
            }),
            layerRef.current
          )
        : null}
    </>
  );
}
