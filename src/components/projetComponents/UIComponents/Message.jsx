import React from "react";

const Message = ({
  className = "simpleMessage", // simpleMessage d*, btnMessage, infoMessage
  onClick,
  position, // "right", "center"
  text,
  condition, // "load", "photo",
  style,
  children,
}) => {
  const [active, setActive] = React.useState(false);

  return (
    <div
      style={style}
      className={`message ${className} ${position ? position : ""} ${
        active ? "active" : ""
      }`}
      onClick={() => {
        if (onClick) {
          onClick();
          setActive(!active);
        }
      }}
    >
      {text && <div className="text">{text}</div>}

      {condition === "load" && (
        <div className="messageFallback">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      {children}
    </div>
  );
};

export default Message;
