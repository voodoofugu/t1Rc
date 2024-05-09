import React from "react";

export const cssFiles = [];

const inlineStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  margin: "0",
  fontSize: "150px",
};

export default function Page404() {
  return <h1 style={inlineStyles}>-____-</h1>;
}
