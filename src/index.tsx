import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/templateComponents/App";

const root = document.getElementById("root") as HTMLElement;
const reactRoot = createRoot(root);
reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
