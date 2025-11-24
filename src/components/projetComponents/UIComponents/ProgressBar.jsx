import React from "react";

const ProgressBar = ({
  className,
  progressSize: [width, height] = [0, 0],
  currentProgress,
  maxProgress,
  text,
  textIcn,
  textWithProgress, // current, max
  serifsPerProgress,
  itemsBoxFirst,
  itemsBoxLast,
  yDirection,
  children,
}) => {
  const heightOrWidth = yDirection ? height : width;
  const widthPerProgress = heightOrWidth / maxProgress;
  const progressWidth = widthPerProgress * currentProgress;
  const itemsBoxWidth = heightOrWidth - widthPerProgress;

  const localProgressSize = yDirection ? [height, width] : [width, height];

  const renderItemsBox = (items, className) =>
    items && (
      <div
        className={`itemsBoxWrap ${className}`}
        style={{
          width: `${heightOrWidth - heightOrWidth / items.length}px`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="itemWrap"
            style={{
              transform: `translateX(calc(-50% + ${
                heightOrWidth / items.length
              }px * ${index}))`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    );

  return (
    <div
      className={`progresBarWrap ${className ? className : ""}${
        yDirection ? " yDirection" : ""
      }`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="progresBar">
        <div
          className="contentContainer"
          style={{
            width: `${localProgressSize[0]}px`,
            height: `${localProgressSize[1]}px`,
          }}
        >
          {renderItemsBox(itemsBoxFirst, "first")}
          {renderItemsBox(itemsBoxLast, "last")}

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

        {(text || textWithProgress) && (
          <div
            className={`text${serifsPerProgress ? " withBG" : ""}`}
            style={{ lineHeight: `${localProgressSize[1]}px` }}
          >
            {text}
            {textWithProgress === "current" ? ` ${currentProgress}` : ""}
            {textWithProgress === "max"
              ? ` ${currentProgress}/${maxProgress} `
              : ""}
            {textIcn ? (
              typeof textIcn === "string" ? (
                <img className="icn" src={`${textIcn}`} />
              ) : (
                <div className="icn"></div>
              )
            ) : (
              ""
            )}
          </div>
        )}

        {children && <div className="childrenWrap">{children}</div>}
      </div>
    </div>
  );
};

export default ProgressBar;
