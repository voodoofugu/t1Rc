import React from "react";

const ProgressBar = ({
  className,
  progressSize: [width, height],
  currentProgress,
  maxProgress,
  text,
  serifsPerProgress,
  itemsBoxFirst,
  itemsBoxLast,
  yDirection,
  children,
}) => {
  const widthPerProgress = width / maxProgress;
  const progressWidth = widthPerProgress * currentProgress;
  const itemsBoxWidth = width - widthPerProgress;

  const renderItemsBox = (items, className) => (
    <div
      className={`itemsBoxWrap ${className}`}
      style={{ width: itemsBoxWidth }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="itemWrap"
          style={{
            transform: `translateX(calc(-50% + ${widthPerProgress}px * ${index})) ${
              yDirection ? "rotate(90deg)" : ""
            }`,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`${className ? className : ""}${
        yDirection ? " yDirection" : ""
      }`}
    >
      <div className="progressScaleWrap" style={{ width, height }}>
        <div
          className="progressScale"
          style={{ width: `${progressWidth}px` }}
        />
      </div>

      {serifsPerProgress && (
        <div className="serifWrap" style={{ width: itemsBoxWidth }}>
          {Array.from({ length: maxProgress }, (_, index) => (
            <div className="serif" key={index} />
          ))}
        </div>
      )}

      {itemsBoxFirst && renderItemsBox(itemsBoxFirst, "first")}
      {itemsBoxLast && renderItemsBox(itemsBoxLast, "last")}

      {text && (
        <div className="text">{`${
          text === true ? "" : text
        } ${currentProgress}/${maxProgress}`}</div>
      )}

      {children}
    </div>
  );
};

export default ProgressBar;
