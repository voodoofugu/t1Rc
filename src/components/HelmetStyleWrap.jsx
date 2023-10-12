import React from "react";
import HelmetComponent from "./HelmetComponent.jsx";

const HelmetStyleWrap = ({ idForStyle, pageStyles, children }) => {
  return (
    <>
      <HelmetComponent>
        <style>{`#${idForStyle} { ${pageStyles} }`}</style>
      </HelmetComponent>
      {children}
    </>
  );
};

export default HelmetStyleWrap;
