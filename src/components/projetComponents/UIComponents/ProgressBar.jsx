import React from "react";

const ProgressBar = ({
  className,
  progressSize: [width, height],
  currentProgress,
  maxProgress,
  text,
  textWithMaxProgress,
  serifsPerProgress,
  itemsBoxFirst,
  itemsBoxLast,
  yDirection,
  children,
}) => {
  const widthPerProgress = yDirection
    ? height / maxProgress
    : width / maxProgress;
  const progressWidth = widthPerProgress * currentProgress;
  const itemsBoxWidth = yDirection
    ? height - widthPerProgress
    : width - widthPerProgress;

  const localProgressSize = yDirection ? [height, width] : [width, height];

  const renderItemsBox = (items, className) => (
    <div
      className={`itemsBoxWrap ${className}`}
      style={{ width: `${itemsBoxWidth}px` }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`itemWrap${
            index > currentProgress - 1 ? " disabled" : ""
          }`}
          style={{
            transform: `translateX(calc(-50% + ${widthPerProgress}px * ${index}))`,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`progresBarWrap`}
      style={{
        width: `${width + 6}px`,
        height: `${height + 6}px`,
      }}
    >
      <div
        className={`${className ? className : ""}${
          yDirection ? " yDirection" : ""
        }${itemsBoxFirst || itemsBoxLast ? " head" : ""}`}
        style={{
          ...(text && yDirection ? { paddingLeft: `29px` } : {}),
          ...(itemsBoxFirst || itemsBoxLast ? { paddingRight: `25px` } : {}),
        }}
      >
        <div
          className="container"
          style={{
            width: `${localProgressSize[0]}px`,
            height: `${localProgressSize[1]}px`,
          }}
        >
          {itemsBoxFirst && renderItemsBox(itemsBoxFirst, "first")}
          {itemsBoxLast && renderItemsBox(itemsBoxLast, "last")}

          <div
            className="progressScaleWrap"
            style={{
              width: `${localProgressSize[0]}px`,
              height: `${localProgressSize[1]}px`,
            }}
          >
            <div
              className="progressScale"
              style={{ width: `${progressWidth}px` }}
            />
          </div>
          {serifsPerProgress && (
            <div className="serifWrap" style={{ width: `${itemsBoxWidth}px` }}>
              {Array.from({ length: maxProgress }, (_, index) => (
                <div className="serif" key={index} />
              ))}
            </div>
          )}
        </div>

        {text && (
          <div
            className="text"
            style={{ lineHeight: `${localProgressSize[1]}px` }}
          >{`${text === true ? "" : text} ${
            textWithMaxProgress
              ? `${currentProgress}/${maxProgress}`
              : currentProgress
          }`}</div>
        )}

        {children}
      </div>
    </div>
  );
};

export default ProgressBar;
