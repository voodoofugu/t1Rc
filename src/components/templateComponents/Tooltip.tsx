import { useState } from "react";
import { createPortal } from "react-dom";

import FileIcn from "./FileIcn";

type TooltipProps = {
  children: React.ReactNode;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
};

type TooltipData = {
  top: number;
  left: number;
  text: string;
  positionClassX: string;
  positionClassY?: string;
};

export function addTooltipData(
  event: React.MouseEvent,
  setTooltipData: React.Dispatch<React.SetStateAction<TooltipData>>,
  render: boolean,
  setRender: React.Dispatch<React.SetStateAction<boolean>>,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  text: TooltipProps["text"],
  position: TooltipProps["position"]
) {
  if (!render) {
    // get info object
    const target = event.target as HTMLElement;
    const { left, top, height, width } = target.getBoundingClientRect();
    const centerY = top + height / 2;
    const centerX = left + width / 2;

    const halfHeight = window.innerHeight / 2;
    const oneFreethWidth = window.innerWidth / 3;

    const newTooltipData = {
      text: text,
      top: 0,
      left: 0,
      positionClassY: "",
      positionClassX: "",
    };

    if (position) {
      if (position === "top") {
        newTooltipData.top = top;
        newTooltipData.positionClassY =
          "after:border-t-8 after:border-t-indigo-200 dark:after:border-t-indigo-900 after:bottom-[-7px] -translate-y-full mt-[-8px]";
        newTooltipData.left = centerX;
        newTooltipData.positionClassX =
          "after:left-1/2 after:-translate-x-1/2 -translate-x-1/2";
      } else if (position === "bottom") {
        newTooltipData.top = top + height;
        newTooltipData.positionClassY =
          "after:border-b-8 after:border-b-indigo-50 dark:after:border-b-indigo-600 after:top-[-7px] mt-[8px]";
        newTooltipData.left = centerX;
        newTooltipData.positionClassX =
          "after:left-1/2 after:-translate-x-1/2 -translate-x-1/2";
      } else if (position === "left") {
        newTooltipData.top = centerY;
        newTooltipData.positionClassY =
          "after:border-t-8 after:border-t-indigo-50 dark:after:border-t-indigo-700 after:inset-y-1/2 after:-translate-y-1/2 after:rotate-90 -translate-y-1/2";
        newTooltipData.left = left + width;
        newTooltipData.positionClassX = "after:left-[-11px] ml-[8px]";
      } else if (position === "right") {
        newTooltipData.top = centerY;
        newTooltipData.positionClassY =
          "after:border-b-8 after:border-b-indigo-200 dark:after:border-b-indigo-900 after:inset-y-1/2 after:-translate-y-1/2 after:rotate-90 -translate-y-1/2";
        newTooltipData.left = left;
        newTooltipData.positionClassX =
          "after:right-[-11px] -translate-x-full ml-[-8px]";
      }
    } else {
      // Y
      if (position === "top" || centerY < halfHeight) {
        // top positioning
        newTooltipData.top = top + height;
        newTooltipData.positionClassY =
          "after:border-b-8 after:border-b-indigo-50 dark:after:border-b-indigo-600 after:top-[-7px] mt-[8px]";
      } else if (position === "bottom" || centerY > halfHeight) {
        // bottom positioning
        newTooltipData.top = top;
        newTooltipData.positionClassY =
          "after:border-t-8 after:border-t-indigo-200 dark:after:border-t-indigo-900 after:bottom-[-7px] -translate-y-full mt-[-8px]";
      }

      // X
      if (centerX < oneFreethWidth) {
        // left positioning
        newTooltipData.left = left;
        newTooltipData.positionClassX = "after:left-16 ml-[-16px]";
      } else if (centerX > oneFreethWidth * 2) {
        // right positioning
        newTooltipData.left = left + width;
        newTooltipData.positionClassX =
          "after:right-16 -translate-x-full ml-[16px]";
      } else {
        // center positioning
        newTooltipData.left = centerX;
        newTooltipData.positionClassX =
          "after:left-1/2 after:-translate-x-1/2 -translate-x-1/2";
      }
    }

    setTimeout(() => {
      setTooltipData(newTooltipData);
      setRender(true);
    }, 100);
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }
}

export function removeTooltipData(
  setTooltipData: React.Dispatch<React.SetStateAction<TooltipData | null>>,
  setRender: React.Dispatch<React.SetStateAction<boolean>>,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
) {
  setVisible(false);
  setTimeout(() => {
    setRender(false);
    setTooltipData(null);
  }, 200);
}

export default function Tooltip({ children, text, position }: TooltipProps) {
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);
  const [render, setRender] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div
      onMouseEnter={(e) =>
        addTooltipData(
          e,
          setTooltipData as any,
          render,
          setRender,
          setVisible,
          text,
          position
        )
      }
      onMouseLeave={() =>
        removeTooltipData(setTooltipData, setRender, setVisible)
      }
    >
      {children}
      {render
        ? createPortal(
            <div
              className={`absolute px-14 py-10 rounded-10 bg-indigo-100 shadow-tooltipTemplate drop-shadow-tooltipDS text-indigo-600 text-shadow-tS1 transition-all1 text-sm font-bold pointer-events-none flex dark:bg-indigo-800 dark:shadow-tooltipTemplateDark dark:text-indigo-400 dark:text-shadow-tS1Black after:w-0 after:h-0 after:absolute z-10 ${
                tooltipData?.positionClassY
                  ? tooltipData.positionClassY +
                    " after:border-x-8 after:border-x-transparent"
                  : "m-0"
              } ${tooltipData?.positionClassX} ${
                visible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90 mt-[0px]"
              }`}
              style={{
                top: tooltipData?.top,
                left: tooltipData?.left,
              }}
              id={text}
            >
              <FileIcn
                className="inline-block w-14 fill-indigo-500 dark:fill-indigo-400 drop-shadow-dS1 dark:drop-shadow-darkDS1 mr-6"
                style={null}
              />
              {tooltipData?.text}
            </div>,
            document.querySelector("#templateBody > main") as HTMLElement
          )
        : ""}
    </div>
  );
}
