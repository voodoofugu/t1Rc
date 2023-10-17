import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loading from "../Loading.jsx";

const TemplateComponentLazy = lazy(() =>
  import(`../../pagesComponents/TemplateComponent.jsx`)
);

// async function fetchData() {
//   const response = await axios.get('/api/items');
//   return response.data;
// }

export default function TemplateComponentRSC() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <TemplateComponentLazy idForStyle="root" />
      </Suspense>
    </BrowserRouter>
  );
}
