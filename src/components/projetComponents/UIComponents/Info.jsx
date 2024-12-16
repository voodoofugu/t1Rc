import React from "react";

export default function Info({ className, img, text, children }) {
  return (
    <div className={`infoWrap${className ? ` ${className}` : ""}`}>
      <div className="infoText">{text}</div>
      {children}
    </div>
  );
}
