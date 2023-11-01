import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PageBox from "../components/PageBox";
import PageComponent from "../components/PageComponent";
const TemplateComponentLazy = lazy(() =>
  import(`../pagesComponents/TemplateComponent.jsx`)
);

export default function RoutesApp() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TemplateComponentLazy>
            <PageBox />
          </TemplateComponentLazy>
        }
      />
      <Route
        path="/:pageName"
        element={
          <TemplateComponentLazy prop="onePage">
            <PageComponent />
          </TemplateComponentLazy>
        }
      />
    </Routes>
  );
}
