const ProgressBar = ({
  className,
  progressSize: [width, height] = [0, 0],
  currentProgress,
  maxProgress,
  text,
  textIcn,
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
          >
            {`${text === true ? "" : `${text} `}`}
            {`${
              textWithMaxProgress
                ? `${currentProgress}/${maxProgress} `
                : `${currentProgress} `
            }`}
            {textIcn ? <img className="icn" src={`${textIcn}`} /> : ""}
          </div>
        )}

        {children && <div className="childrenWrap">{children}</div>}
      </div>
    </div>
  );
};

export default ProgressBar;
