import React from "react";

const BtnWrap = ({
  className,
  onMouseEnter,
  onMouseLeave,
  onClick,
  href,
  children,
}) => {
  const btnClass = `butn${className ? ` ${className}` : ""}`;

  return (
    <>
      {href ? (
        <a
          className={btnClass}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          href={href}
        >
          {children}
        </a>
      ) : (
        <div
          className={btnClass}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </div>
      )}
    </>
  );
};

const Button = ({
  className,
  text = "",
  textIcn = "",
  crossedOutText = "",
  discountSticker,
  img,
  onClick,
  onMouseEnter,
  onMouseLeave,
  href,
  children,
}) => {
  const wrappedText = React.useMemo(() => {
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
  }, [text]);

  return (
    <BtnWrap
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href}
    >
      <div className="btnContentWrap">
        {img ? (
          typeof img === "string" ? (
            <img className="btnImg" src={img} loading="lazy" />
          ) : Array.isArray(img) ? (
            img.map((i, index) => (
              <img key={index} className="btnImg" src={i} loading="lazy" />
            ))
          ) : (
            <div className="btnImg"></div>
          )
        ) : (
          ""
        )}
        {textIcn && (
          <div className={`textIcnWrap${text && " withText"}`}>
            {typeof textIcn === "string" ? (
              <img className="textIcn" src={textIcn} />
            ) : (
              <div className="textIcn"></div>
            )}
          </div>
        )}
        {text && (
          <div className={`btnText${textIcn && " withTextIcn"}`}>
            {wrappedText}
            {crossedOutText && (
              <div className="crossedOutText">{crossedOutText}</div>
            )}
          </div>
        )}
        {children}
      </div>
      {discountSticker && <div className="sale-banner">{discountSticker}</div>}
    </BtnWrap>
  );
};

export default Button;
