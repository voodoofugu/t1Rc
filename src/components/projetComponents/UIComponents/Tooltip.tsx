import React from "react";
import { createPortal } from "react-dom";

import useIdent from "../../hooks/useIdent";

type PositionT = [
  "top" | "bottom" | "left" | "right",
  "center" | "start" | "end"
];
type TooltipT = {
  className?: string;
  targetContent?: React.ReactElement;
  position?: PositionT;
  children: React.ReactNode;
};

export default function Tooltip({
  className = "",
  targetContent,
  position,
  children,
}: TooltipT) {
  const tooltipRef = React.useRef<HTMLDivElement | null>(null);
  const style = React.useRef<Record<string, string>>({});
  const timer = React.useRef<ReturnType<typeof setTimeout>>(null);

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

    const [tooltipRefHalfWidth, tooltipRefHalfHeight] = (() => {
      let width = 0,
        height = 0;
      if (!position || position.length !== 2) return [width, height];

      if (["top", "bottom"].includes(position[0])) {
        width = tooltipRef.current.offsetWidth / 2;
      } else {
        height = tooltipRef.current.offsetHeight / 2;
      }

      return [width, height];
    })();

    const [neededRectLeft, neededRectTop] = (() => {
      let left = rect.left,
        top = rect.bottom;

      if (position) {
        if (position[0] === "top") {
          top = rect.top;
        } else if (position[0] === "bottom") {
          top = rect.bottom;
        } else if (position[0] === "left") {
          top = rect.left;
        } else if (position[0] === "right") {
          top = rect.right;
        }
      }
      return [left, top];
    })();

    style.current = {
      left: `${
        neededRectLeft + window.scrollX - difference + tooltipRefHalfWidth
      }px`,
      top: `${neededRectTop + window.scrollY + tooltipRefHalfHeight}px`,
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
      React.isValidElement<{ className?: string }>(children)
        ? children.props.className
        : ""
    }${className ? ` ${className}` : ""} tooltip-${tooltipId}`,
  };

  const wrappedChild = isSingleValidElement ? (
    React.cloneElement(children, commonProps)
  ) : (
    <div {...commonProps}>{children}</div>
  );

  React.useEffect(() => {
    if (visible) {
      Array.from(tooltipLayer?.children || []).forEach((child) => {
        child.classList.add("fadeIn", `${position && position[0]}`);
      });
    }

    return () => {
      clearTimeout(timer.current ? timer.current : undefined);
    };
  }, [visible]);

  return (
    <>
      {wrappedChild}
      {typeof window !== "undefined" && tooltipLayer && visible && targetContent
        ? createPortal(
            React.cloneElement<React.HTMLAttributes<HTMLElement>>(
              targetContent as React.ReactElement<
                React.HTMLAttributes<HTMLElement>
              >,
              {
                style: {
                  ...(React.isValidElement<{ style?: React.CSSProperties }>(
                    targetContent
                  )
                    ? targetContent.props.style
                    : {}),
                  ...style.current,
                },
              }
            ),
            tooltipLayer
          )
        : null}
    </>
  );
}
