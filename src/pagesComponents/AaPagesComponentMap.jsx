import React from "react";
const File1Component = React.lazy(() => import("./File1Component.jsx"));
const File2Component = React.lazy(() => import("./File2Component.jsx"));
const Page_404Component = React.lazy(() => import("./Page_404Component.jsx"));
const TemplateComponent = React.lazy(() => import("./TemplateComponent.jsx"));

const AaPagesComponentMap = {
      File1Component,
  File2Component,
  Page_404Component,
  TemplateComponent,
};

export default AaPagesComponentMap;