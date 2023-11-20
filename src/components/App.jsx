import React, { Suspense, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import RoutesApp from "../routes/RoutesApp";

import Loading from "./Loading.jsx";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = ["TemplateStyles"];

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <HelmetForCss cssFiles={cssFiles}>
            <Suspense fallback={<Loading />}>
              <RoutesApp />
            </Suspense>
          </HelmetForCss>
        </HelmetProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
