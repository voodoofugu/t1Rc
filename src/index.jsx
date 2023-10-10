import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Loading from "./components/Loading.jsx";
const TemplateComponentLazy = lazy(() =>
  import(`./pagesComponents/TemplateComponent.jsx`)
);

const Root = document.getElementById("root");

if (Root) {
  if (!window.__REACT_ROOT__) {
    window.__REACT_ROOT__ = createRoot(Root);
  }

  window.__REACT_ROOT__.render(
    <BrowserRouter>
      <HelmetProvider>
        <Suspense fallback={<Loading />}>
          <TemplateComponentLazy idForStyle="root" />
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  );
} else {
  console.warn("Element with id 'root' not found.");
}

if (module.hot) {
  module.hot.accept();
}
