import React, { lazy } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import PageBox from "../components/PageBox";
import PageComponent from "../components/PageComponent";
import HelmetComponent from "../components/HelmetComponent";

import SearchButton from "../components/SearchButton";
import ToggleButton from "../components/ToggleButton";

const TemplateLazy = lazy(() =>
  import(`../pagesComponents/Template.jsx`)
);

export default function RoutesApp() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TemplateLazy
            searchButtonComponent={<SearchButton />}
            toggleButtonComponent={<ToggleButton />}
          >
            <PageBox />
          </TemplateLazy>
        }
      />
      <Route
        path="/:pageName"
        element={
          <TemplateLazy
            propClass="onePage"
            propClassDiasable="onePageDiasable"
          >
            <TitlePage />
            <PageComponent />
          </TemplateLazy>
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
