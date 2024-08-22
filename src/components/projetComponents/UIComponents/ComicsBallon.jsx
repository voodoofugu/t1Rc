export default function ComicsBallon({
  text = "",
  style = {},
  className = "",
  changeDirectionArrow = false,
  arrowDirection = "yDirection", // xDirection, yDirection d*
  arrowPosition = "first", // first d*, last
  align = "start", // start d*, center, end
}) {
  return (
    <div
      className={`journal-comics-ballon-box${
        className && ` ${className}`
      } ${arrowDirection} ${arrowPosition} ${align}`}
      style={style}
    >
      <div
        className={`ballonArrow${changeDirectionArrow ? " reverse" : ""}`}
      ></div>
      <div className="cornerWrap">
        <div className="cornerOne"></div>
        {align === "center" ? <div className="cornerTwo"></div> : ""}
      </div>
      <div className="journal-comics-ballon-text">{text}</div>
    </div>
  );
}
