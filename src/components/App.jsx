import React, { Suspense, lazy, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Loading from "./Loading.jsx";
const TemplateComponentLazy = lazy(() =>
  import(`../pagesComponents/TemplateComponent.jsx`)
);
const PageBox = lazy(() => import(`./PageBox.jsx`));

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = ["TemplateComponentStyles"];

export default function App() {
  return (
    // <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <HelmetForCss cssFiles={cssFiles}>
          <Suspense fallback={<Loading />}>
            <TemplateComponentLazy idForStyle="root">
              <PageBox />
            </TemplateComponentLazy>
          </Suspense>
        </HelmetForCss>
      </HelmetProvider>
    </BrowserRouter>
    // </StrictMode>
  );
}
