import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { StylesLoadedProvider } from "./StylesLoadedProvider";
import RoutesApp from "../routes/RoutesApp";

import Loading from "./Loading.jsx";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = ["TemplateComponentStyles"];

export default function App() {
  return (
    // <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <StylesLoadedProvider>
          <HelmetForCss cssFiles={cssFiles}>
            <Suspense fallback={<Loading />}>
              <RoutesApp />
            </Suspense>
          </HelmetForCss>
        </StylesLoadedProvider>
      </HelmetProvider>
    </BrowserRouter>
    // </StrictMode>
  );
}
