// import React from "react";
// import { hydrate } from "react-dom";

// import App from "./components/App";

// const container = document.getElementById("root");
// hydrate(<App />, container);

//

// import React from "react";
// import { hydrateRoot } from "react-dom/client";
// import App from "./components/App";
// hydrateRoot(document.getElementById("root"), <App />);

//

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(<App />);
