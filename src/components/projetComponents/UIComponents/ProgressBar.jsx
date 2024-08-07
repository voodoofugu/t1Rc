import React from "react";

const ProgressBar = ({
  className,
  progressSize,
  currentProgress,
  maxProgress,
  text,
  serifsPerProgress,
  itemsBoxFirst,
  itemsBoxLast,
  children,
}) => {
  const widthPerProgress = 100 / maxProgress;

  return (
    <div className={`${className}`}>
      <div
        className="progressScaleWrap"
        style={{ width: progressSize[0], height: progressSize[1] }}
      >
        <div
          className="progressScale"
          style={{ width: `${widthPerProgress * currentProgress}%` }}
        ></div>
      </div>

      {serifsPerProgress ? (
        <div
          className="serifWrap"
          style={{
            width: `${progressSize[0] - progressSize[0] / maxProgress}px`,
          }}
        >
          {[...Array(maxProgress)].map((_, index) => (
            <div className="serif" key={index}></div>
          ))}
        </div>
      ) : null}

      {Array.isArray(itemsBoxFirst) ? (
        <div
          className="itemsBoxWrap first"
          style={{
            width: `${progressSize[0] - progressSize[0] / maxProgress}px`,
          }}
        >
          {itemsBoxFirst.map((item, index) => (
            <div
              key={index}
              className="itemWrap"
              style={{
                transform: `translateX(calc(-50% + ${
                  progressSize[0] / maxProgress
                }px * ${index}))`,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}

      {Array.isArray(itemsBoxLast) ? (
        <div
          className="itemsBoxWrap last"
          style={{
            width: `${progressSize[0] - progressSize[0] / maxProgress}px`,
          }}
        >
          {itemsBoxLast.map((item, index) => (
            <div key={index} className="itemWrap">
              {item}
            </div>
          ))}
        </div>
      ) : null}

      {text ? (
        <div className="text">{`${
          text === true ? "" : text
        } ${currentProgress}/${maxProgress}`}</div>
      ) : null}

      {children}
    </div>
  );
};

export default ProgressBar;
