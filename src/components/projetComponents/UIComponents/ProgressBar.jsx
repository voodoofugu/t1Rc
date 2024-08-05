const ProgressBar = ({
  className,
  currentProgress,
  maxProgress,
  text,
  objectsPerProgress,
  children,
}) => {
  const widthPerProgress = 100 / maxProgress;

  return (
    <div className={`${className}`}>
      <div className="barScaleWrap">
        <div
          className="barScale"
          style={{ width: `${widthPerProgress * currentProgress}%` }}
        ></div>
      </div>

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
