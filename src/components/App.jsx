import React, { Suspense, lazy, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import HelmetComponent from "./HelmetComponent.jsx";
import templateCss from "../styleComponents/TemplateComponentStyle.jsx";
import Loading from "./Loading.jsx";
const TemplateComponentLazy = lazy(() =>
  import(`../pagesComponents/TemplateComponent.jsx`)
);

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

            <div id="MainScreen16"></div>
          </Suspense>
        </HelmetProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
