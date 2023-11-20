import React from "react";

const inlineStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  fontSize: "calc( (100vw - 480px)/(1280 - 480) * (42 - 16) + 16px)",
};

export default function Page404Component() {
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
