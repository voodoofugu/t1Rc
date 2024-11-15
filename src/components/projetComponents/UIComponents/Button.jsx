import React from "react";

const BtnWrap = ({ className, onClick, href, children }) => {
  return (
    <>
      {href ? (
        <a className={`butn ${className}`} onClick={onClick} href={href}>
          {children}
        </a>
      ) : (
        <div className={`butn ${className}`} onClick={onClick}>
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
  img = false,
  onClick,
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
    <BtnWrap className={className} onClick={onClick} href={href}>
      <div className="btnContentWrap">
        {img ? (
          typeof img === "string" ? (
            <img className="btnImg" src={img} loading="lazy" />
          ) : (
            <div className="btnImg"></div>
          )
        ) : (
          ""
        )}
        {text && (
          <div className="btnText">
            {wrappedText}
            {crossedOutText && (
              <div className="crossedOutText">{crossedOutText}</div>
            )}
          </div>
        )}
        {textIcn && (
          <div
            className="textIcnWrap"
            style={
              text && typeof text === "string" ? { marginLeft: "-6px" } : {}
            }
          >
            {typeof textIcn === "string" ? (
              <img className="textIcn" src={textIcn} />
            ) : (
              <div className="textIcn"></div>
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
