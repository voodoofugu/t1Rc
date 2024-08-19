const Button = ({ className, text, img, onClick, children }) => {
  return (
    <div className={`btn ${className}`} onClick={onClick}>
      <div className="btnContentWrap">
        {img && <img className="btnImg" src={img} loading="lazy" />}
        {text && <div className="btnText">{text}</div>}
        {children}
      </div>
    </div>
  );
};

export default Button;
