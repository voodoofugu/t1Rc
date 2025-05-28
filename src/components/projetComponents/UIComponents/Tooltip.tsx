import React from "react";
import { createPortal } from "react-dom";

import useIdent from "../../hooks/useIdent";

// !!! доделать тип "auto" для позиции
// !!! решить проблему удаления tooltip при наведении на него
// !!! понять как обработать tooltip хвостик
// !!! вернуть правильное добавление fadeIn

type PositionT =
  | [
      "top" | "bottom" | "left" | "right" | "auto",
      "center" | "start" | "end" | "auto"
    ]
  | "auto";

type TooltipT = {
  className?: string;
  targetContent?: React.ReactElement;
  position?: PositionT;
  children: React.ReactNode;
};

type TooltipInstance = {
  id: string;
  visible: boolean;
  style: React.CSSProperties;
  className: string;
  content: React.ReactNode;
};

export default function Tooltip({
  className = "",
  targetContent,
  position,
  children,
}: TooltipT) {
  const tooltipCallerRef = React.useRef<HTMLDivElement | null>(null);
  const style = React.useRef<React.CSSProperties>({});
  const timer = React.useRef<ReturnType<typeof setTimeout>>(null);

  const [tooltips, setTooltips] = React.useState<TooltipInstance[]>([]);
  console.log("tooltips", tooltips);

  const tooltipId = useIdent();
  const tooltipCallerClass = `tlp-${tooltipId}`;
  const tooltipLayer = document.querySelector(".tooltip-layer");

  const tlpStyleLocal: React.CSSProperties | undefined = React.useMemo(() => {
    if (!position) return undefined;

    return tlpStyle(position);
  }, [position]);

  const handleEnterLocal = React.useCallback(() => {
    tooltipCallerRef.current = document.querySelector(`.${tooltipCallerClass}`);
    if (!tooltipCallerRef.current || !targetContent) return;

    handleEnter(
      tooltipCallerRef.current,
      style,
      position,
      tlpStyleLocal,
      () => {
        setTooltips((prev) => [
          ...prev,
          {
            id: tooltipId,
            visible: true,
            style: style.current,
            className: `${
              React.isValidElement<{ className?: string }>(targetContent)
                ? targetContent.props.className || ""
                : ""
            } ${position?.[0] || ""}`,
            content: targetContent,
          },
        ]);
      }
    );
  }, [position, tooltipCallerClass]);

  const removeTooltip = (id: string) => {
    setTooltips((prev) => prev.filter((tlp) => tlp.id !== id));
  };

  const handleLeave = () => {
    if (timer.current) clearTimeout(timer.current);

    Array.from(tooltipLayer?.children || []).forEach((child) => {
      if (child.classList.contains("fadeOut")) return;

      child.classList.remove("fadeIn");
      child.classList.add("fadeOut");
    });

    style.current = {};
    tooltipCallerRef.current = null;
    timer.current = setTimeout(() => {
      removeTooltip(tooltipId);
    }, 1000);
  };

  const isSingleValidElement =
    React.isValidElement(children) && !Array.isArray(children);

  const commonProps = {
    onMouseEnter: handleEnterLocal,
    onMouseLeave: handleLeave,
    className: [
      React.isValidElement(children) && (children.props as any).className,
      className,
      tooltipCallerClass,
    ]
      .filter(Boolean)
      .join(" "),
  };

  // оборачиваемый объект копируется для того, чтобы навешать на него обработчики событий
  // и классы чтобы не создавать лишний div
  // но если это массив элементов или например текст, то оборачиваем в div
  // чтобы не нарушать структуру DOM
  const wrappedChild = isSingleValidElement ? (
    React.cloneElement(children, commonProps)
  ) : (
    <div {...commonProps}>{children}</div>
  );

  React.useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  React.useEffect(() => {
    const children = tooltipLayer?.children;
    if (children && children.length > 0) {
      const lastChild = children[children.length - 1];
      lastChild.classList.add("fadeIn", position?.[0] || "");
    }
  }, [tooltipLayer, position, tooltips.length]);

  // копирование стилей для того, чтобы не менять оригинальный объект
  // просто налету добавляем вычисленные стили
  return typeof window !== "undefined" ? (
    <React.Fragment>
      {wrappedChild}
      {tooltipLayer && targetContent
        ? tooltips.map((tlp) =>
            createPortal(
              React.cloneElement(
                tlp.content as React.ReactElement<
                  React.HTMLAttributes<HTMLElement>
                >,
                {
                  style: tlp.style,
                  className: tlp.className,
                }
              ),
              tooltipLayer,
              tlp.id // key
            )
          )
        : null}
    </React.Fragment>
  ) : (
    children
  );
}

function handleEnter(
  tooltipCallerRef: HTMLElement,
  style: React.MutableRefObject<React.CSSProperties>,
  position?: PositionT,
  tlpStyle?: React.CSSProperties,
  callback?: () => void
) {
  const rect = tooltipCallerRef.getBoundingClientRect();
  // разница от экрана игры
  const differenceLeft =
    window.innerWidth < 1200 ? 0 : (window.innerWidth - 1200) / 2;

  const [neededRectLeft, neededRectTop] = (() => {
    let left = rect.left;
    let top = rect.bottom;
    if (!position) return [left, top];

    const [offset, align] = position;

    // Смещение
    if (["top", "bottom"].includes(offset)) {
      top = offset === "top" ? rect.top : rect.bottom;

      if (align === "center") {
        left = rect.left + tooltipCallerRef.offsetWidth / 2;
      } else if (align === "end") {
        left = rect.right;
      } else left = rect.left;
    }

    // Выравнивание
    if (offset === "left" || offset === "right") {
      left = offset === "left" ? rect.left : rect.right;

      if (align === "center") {
        top = rect.top + tooltipCallerRef.offsetHeight / 2;
      } else if (align === "end") {
        top = rect.bottom;
      } else top = rect.top;
    }

    return [left, top];
  })();

  style.current = {
    left: `${neededRectLeft + window.scrollX - differenceLeft}px`,
    top: `${neededRectTop + window.scrollY}px`,
    ...tlpStyle,
  };

  callback && callback();
}

function tlpStyle(position: PositionT): React.CSSProperties {
  return {
    transform: `translate(${
      ["top", "bottom"].includes(position[0])
        ? position[1] === "center"
          ? "-50%"
          : position[1] === "end"
          ? "-99%"
          : "0"
        : position[0] === "left"
        ? "-99%"
        : "0"
    }, ${
      ["left", "right"].includes(position[0])
        ? position[1] === "center"
          ? "-50%"
          : position[1] === "end"
          ? "-99%"
          : "0"
        : position[0] === "top"
        ? "-99%"
        : "0"
    })`,
  };
}
