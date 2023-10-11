import React from "react";

const inlineStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
};

const Page404Component = () => {
  return (
    <h1 className="error404" style={inlineStyles}>
      -____-
      <br />
      NOT FOUND
      <br />
      404
    </h1>
  );
};

export default React.memo(Page404Component);
