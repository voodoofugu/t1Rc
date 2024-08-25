const Button = ({
  className,
  text = "",
  crossedOutText = "",
  discountSticker,
  img,
  onClick,
  children,
}) => {
  return (
    <>
      <div className={`butn ${className}`} onClick={onClick}>
        <div className="btnContentWrap">
          {img && <img className="btnImg" src={img} loading="lazy" />}
          {text && (
            <div className="btnText">
              {text}
              {crossedOutText && (
                <div className="crossedOutText">{crossedOutText}</div>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
      {discountSticker && <div className="sale-banner">{discountSticker}</div>}
    </>
  );
};

export default Button;
