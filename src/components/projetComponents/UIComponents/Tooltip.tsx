import React from "react";
import { createPortal } from "react-dom";

import useIdent from "../../hooks/useIdent";

// !!! доделать тип "auto" для позиции
// !!! понять как обработать tooltip хвостик
// !!! добавить обработчики для touch событий
// !!! разобрать вариант интерактивного tooltip на котором можно что-то кликнуть

type PositionT =
  | [
      "top" | "bottom" | "left" | "right" | "auto",
      "center" | "start" | "end" | "auto"
    ]
  | "auto";

type TooltipT = {
  className?: string;
  targetContent?: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  position?: PositionT;
  children: React.ReactNode;
};

export default function Tooltip({
  className = "",
  targetContent,
  position,
  children,
}: TooltipT) {
  if (typeof window === "undefined") {
    return <>{children}</>;
  }

  const tooltipCallerRef = React.useRef<HTMLElement | null>(null);
  const tooltipRef = React.useRef<HTMLElement | null>(null);
  const style = React.useRef<React.CSSProperties>({});
  const timers = React.useRef<Record<string, ReturnType<typeof setTimeout>>>(
    {}
  );

  const [tooltip, setTooltip] = React.useState<{
    visible: boolean;
  } | null>(null);

  const tooltipId = useIdent();
  const tooltipCallerClass = `tlp-${tooltipId}`;

  const tlpUpdate = (visible: false | null) => {
    setTooltip((prev) => {
      if (!prev || visible === null) return null;

      return {
        ...prev,
        visible: visible,
      };
    });
  };

  // обработчики таймеров
  const setTimer = (id: string, callback: () => void, delay: number) => {
    // Если таймер с таким id уже есть — удалим его
    if (timers.current[id]) {
      clearTimeout(timers.current[id]);
    }

    timers.current[id] = setTimeout(() => {
      callback();
      delete timers.current[id]; // удалим после выполнения
    }, delay);
  };
  const clearTimer = (id: string) => {
    if (timers.current[id]) {
      clearTimeout(timers.current[id]);
      delete timers.current[id];
    }
  };
  const clearAllTimers = () => {
    Object.values(timers.current).forEach(clearTimeout);
    timers.current = {};
  };

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
        setTooltip((prev) => (prev?.visible ? prev : { visible: true }));
      }
    );
  }, [position, tooltipCallerClass]);

  const handleLeave = () => {
    clearTimer("leaveTimer");

    tooltipCallerRef.current = null;
    tlpUpdate(false);

    if (tooltipRef.current) {
      tooltipRef.current.classList.remove("fadeIn");
      tooltipRef.current.classList.add("fadeOut");
    }

    setTimer(
      "leaveTimer",
      () => {
        // удаляем tooltip, если на нем класс fadeOut
        if (tooltipRef.current) {
          tooltipRef.current.classList.contains("fadeOut") && tlpUpdate(null);
        }
      },
      200
    );
  };

  const isSingleValidElement =
    React.isValidElement(children) && !Array.isArray(children);

  const childClassName = isSingleValidElement
    ? (children.props as any).className
    : "";

  const commonProps = {
    onMouseEnter: handleEnterLocal,
    onMouseLeave: handleLeave,
    className: [childClassName, className, tooltipCallerClass]
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

  // копирование стилей для того, чтобы не менять оригинальный объект
  // просто налету добавляем вычисленные стили
  const clonedProps: React.HTMLAttributes<HTMLElement> & {
    "data-tooltip"?: string;
  } =
    targetContent && tooltip
      ? {
          className: [targetContent.props.className, position?.[0]]
            .filter(Boolean)
            .join(" "),
          style: {
            ...style.current,
          },
          "data-tooltip": tooltipId,
        }
      : {};

  React.useEffect(() => {
    return () => {
      clearAllTimers();
    };
  }, []);

  const isVisible = tooltip?.visible === true;
  React.useEffect(() => {
    if (tooltip?.visible) {
      const tlp = document.querySelector(
        `[data-tooltip="${tooltipId}"]`
      ) as HTMLElement | null;
      tooltipRef.current = tlp;

      clearTimer("viewTimer");

      setTimer(
        "viewTimer",
        () => {
          // нужна задержка для "fadeIn"
          if (tlp && !tlp.classList.contains("fadeIn")) {
            tlp.classList.remove("fadeOut");
            tlp.classList.add("fadeIn");
          }
        },
        20
      );
    }
  }, [isVisible, tooltipId]);

  return (
    <React.Fragment>
      {wrappedChild}
      {tooltipLayer && targetContent
        ? tooltip &&
          createPortal(
            React.cloneElement(targetContent, clonedProps),
            tooltipLayer
          )
        : null}
    </React.Fragment>
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
