import React from "react";

export default function PersonAva({ img, className, onClick }) {
  React.useEffect(() => {
    if (img) {
      const image = new Image();
      image.src = img;
    }
  }, [img]);

  return (
    <div
      className={`personAva ${className ? className : ""}`}
      onClick={onClick}
    >
      <div className="avaBg">
        <div className="avaBgExtra"></div>
      </div>
      <div className="imgWrap">
        <img src={img} loading="lazy" alt="ava" />
      </div>
    </div>
  );
}
