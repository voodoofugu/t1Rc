import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HelmetStyleTagWhitWrap = ({ idForStyle, pageStyles, children }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <style>{`#${idForStyle} { ${pageStyles.styles} }`}</style>
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

export default HelmetStyleTagWhitWrap;
