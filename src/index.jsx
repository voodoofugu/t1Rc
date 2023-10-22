import React, { Suspense, lazy, StrictMode } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import HelmetComponent from "./components/HelmetComponent.jsx";
import templateCss from "./styleComponents/TemplateComponentStyle.jsx";
import Loading from "./components/Loading.jsx";
const TemplateComponentLazy = lazy(() =>
  import(`./pagesComponents/TemplateComponent.jsx`)
);

import MainScreen16FortunaHtml from "./components/RSC/MainScreen16FortunaHtml.jsx";
import Message from "./components/RSC/Message.server.jsx";

function App() {
  return (
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
    </StrictMode>
  );
}

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(<App />);

const container = document.getElementById("MainScreen16FortunaHtml");
const reactRootMainScreen16 = createRoot(container);
reactRootMainScreen16.render(<Message id={1} />);
