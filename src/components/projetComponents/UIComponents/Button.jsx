import React from "react";

const Button = ({
  className,
  text = "",
  crossedOutText = "",
  discountSticker,
  img,
  onClick,
  children,
}) => {
  const wrapTextWithP = (text) => {
    if (typeof text === "string") {
      if (text.includes("<p>")) {
        const lines = text.split("<p>").filter((line) => line.trim() !== "");

        return lines.map((line, index) => {
          const cleanLine = line.replace(/<\/?p>/g, "").trim();
          return <p key={index}>{cleanLine}</p>;
        });
      } else {
        return text;
      }
    }

    return text;
  };

  const wrappedText = wrapTextWithP(text);

  return (
    <div className={`butn ${className}`} onClick={onClick}>
      <div className="btnContentWrap">
        {img && <img className="btnImg" src={img} loading="lazy" />}
        {text && (
          <div className="btnText">
            {wrappedText}
            {crossedOutText && (
              <div className="crossedOutText">{crossedOutText}</div>
            )}
          </div>
        )}
        {children}
      </div>
      {discountSticker && <div className="sale-banner">{discountSticker}</div>}
    </div>
  );
};

export default Button;
