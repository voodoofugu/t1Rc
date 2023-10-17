import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loading from "../Loading.jsx";

const TemplateComponentLazy = lazy(() =>
  import(`../../pagesComponents/TemplateComponent.jsx`)
);

export default async function TemplateComponentRSC() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <TemplateComponentLazy idForStyle="root" />
      </Suspense>
    </BrowserRouter>
  );
}
