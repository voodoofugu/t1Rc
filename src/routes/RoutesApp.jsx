import React, { lazy } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import PageBox from "../components/PageBox";
import PageComponent from "../components/PageComponent";
import HelmetComponent from "../components/HelmetComponent";

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
          <TemplateComponentLazy
            propClass="onePage"
            propClassDiasable="onePageDiasable"
          >
            <TitlePage />
            <PageComponent />
          </TemplateComponentLazy>
        }
      />
    </Routes>
  );
}

function TitlePage() {
  const { pageName } = useParams();

  return (
    <HelmetComponent>
      <title>{pageName}</title>
    </HelmetComponent>
  );
}
