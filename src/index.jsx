// < -- гидрация элемента App со старым hydrate -- >

// import React from "react";
// import { hydrate } from "react-dom";

// import App from "./components/App";

// const container = document.getElementById("root");
// hydrate(<App />, container);

// < -- гидрация элемента App с новым hydrateRoot -- >

// import React from "react";
// import { hydrateRoot } from "react-dom/client";
// import App from "./components/App";
// hydrateRoot(document.getElementById("root"), <App />);

// < -- рендер элемента App -- >

import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

import Loading from "./components/Loading.jsx";
import App from "./components/App";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(<App />);
