const ProgressBar = ({
  className,
  currentProgress,
  maxProgress,
  text,
  objectsPerProgress,
  serifsPerProgress,
  children,
}) => {
  const widthPerProgress = 100 / maxProgress;
  const arrayFromMaxProgress = [...Array(maxProgress + 1).keys()];

  return (
    <div className={`${className}`}>
      <div className="barScaleWrap">
        <div
          className="barScale"
          style={{ width: `${widthPerProgress * currentProgress}%` }}
        ></div>
      </div>

      {serifsPerProgress ? (
        <div className="barSerifWrap">
          {arrayFromMaxProgress.map(() => (
            <div className="barSerif"></div>
          ))}
        </div>
      ) : null}

      {objectsPerProgress
        ? maxProgress.map((_, index) =>
            typeof objectsPerProgress === "object"
              ? objectsPerProgress
              : typeof objectsPerProgress === "array"
              ? objectsPerProgress.map((obj) => obj[index])
              : null
          )
        : null}

      {text ? (
        <div className="barText">{`${
          text === true ? "" : text
        } ${currentProgress}/${maxProgress}`}</div>
      ) : null}

      {children}
    </div>
  );
};

export default ProgressBar;
