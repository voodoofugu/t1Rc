import React, { Suspense, lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import HelmetComponent from "./components/HelmetComponent.jsx";
import templateCss from "./styleComponents/TemplateComponentStyle.jsx";
import Loading from "./components/Loading.jsx";
const TemplateComponentLazy = lazy(() =>
  import(`./pagesComponents/TemplateComponent.jsx`)
);

import Message from "./components/RSC/Message.server.jsx";

const Root = document.getElementById("root");

if (Root) {
  if (!window.__REACT_ROOT__) {
    window.__REACT_ROOT__ = createRoot(Root);
  }

  window.__REACT_ROOT__.render(
    <StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <Suspense fallback={<Loading />}>
            <HelmetComponent>
              <style>{templateCss}</style>
            </HelmetComponent>
            <TemplateComponentLazy idForStyle="root" />
          </Suspense>
        </HelmetProvider>
      </BrowserRouter>
      <Message id={1} />
    </StrictMode>
  );
} else {
  console.warn("Element with id 'root' not found.");
}

if (module.hot) {
  module.hot.accept();
}
