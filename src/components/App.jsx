import React, { Suspense, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import RoutesApp from "../routes/RoutesApp";
import { TooltipProvider } from "./TooltipProvider";

import Loading from "./Loading.jsx";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = ["TemplateComponentStyles"];

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <HelmetForCss cssFiles={cssFiles}>
            <Suspense fallback={<Loading />}>
              <TooltipProvider>
                <RoutesApp />
              </TooltipProvider>
            </Suspense>
          </HelmetForCss>
        </HelmetProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
