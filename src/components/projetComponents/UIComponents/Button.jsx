const Button = ({ className, text, onClick, children }) => {
  return (
    <div className={`btn ${className}`} onClick={onClick}>
      <div className="btnContentWrap">
        <div className="btnText">{text}</div>
        {children}
      </div>
    </div>
  );
};

export default Button;
