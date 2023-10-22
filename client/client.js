import React from "react";
import { createRoot } from "react-dom/client";

function client() {
  return (
    <App />
  );
}

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(<App />);
