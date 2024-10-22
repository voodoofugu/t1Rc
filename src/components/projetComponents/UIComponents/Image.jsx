const Image = ({ className, img, children }) => {
  return (
    <div className={`imageWrap ${className ? className : ""}`}>
      {img ? (
        typeof img === "string" ? (
          <img className="image" src={`${img}`} loading="lazy" alt="img" />
        ) : (
          <div className="image"></div>
        )
      ) : (
        ""
      )}

      {children}
    </div>
  );
};

export default Image;
