import "./stylesMap";
import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import TemplateComponent from "./pagesComponents/TemplateComponent";
const TemplateComponentLazy = lazy(() =>
  import(`./pagesComponents/TemplateComponent.jsx`)
);

import Loading from "./components/Loading.jsx";

const Root = document.getElementById("root");

if (Root) {
  if (!window.__REACT_ROOT__) {
    window.__REACT_ROOT__ = createRoot(Root);
  }

  window.__REACT_ROOT__.render(
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <TemplateComponentLazy />
      </Suspense>
    </BrowserRouter>
  );
} else {
  console.warn("Element with id 'root' not found.");
}

if (module.hot) {
  module.hot.accept();
}
