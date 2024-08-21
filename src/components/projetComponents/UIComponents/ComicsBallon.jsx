export default function ComicsBallon({
  text,
  style = {},
  changeDirectionArrow = false,
  arrowdirection = "yDirection", // xDirection, yDirection d*
  align = "start", // start d*, center, end
  arrowPosition = "first", // first d*, last
}) {
  return (
    <div
      className={`journal-comics-ballon-box ${align} ${arrowdirection} ${arrowPosition}`}
      style={style}
    >
      <div
        className={`ballonArrow${changeDirectionArrow ? " reverse" : ""}`}
      ></div>
      <div className="cornerOne"></div>
      {align === "center" ? <div className="cornerTwo"></div> : ""}
      <div className="journal-comics-ballon-text">{text}</div>
    </div>
  );
}
