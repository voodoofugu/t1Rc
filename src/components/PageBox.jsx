import React, { useEffect, useState, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { StylesLoadedProvider } from "./StylesLoadedProvider";
import Loading from "./Loading";
import TooltipProvider from "./TooltipProvider";

export default function PageBox() {
  const [pageList, setPageList] = useState([null]);

  useEffect(() => {
    async function importDynamicComponents() {
      try {
        const context = require.context("../pagesComponents/", false, /\.jsx$/);
        const components = context
          .keys()
          .filter((key) => !["./TemplateComponent.jsx"].includes(key))
          .map((key) => key.replace("./", "").replace(".jsx", ""));
        setPageList(components);
      } catch (error) {
        console.error("Error importing page components:", error);
      }
    }
    importDynamicComponents();
  }, []);

  return (
    <>
      {pageList.map((pageName) => {
        const DynamicComponent = lazy(() =>
          import(`../pagesComponents/${pageName}.jsx`)
        );

        return (
          <div className="pageBox" key={pageName}>
            <LazyLoad height={"inherit"} width={"inherit"} offset={100}>
              <Suspense key={pageName} fallback={<Loading />} timer={1000}>
                <div id={`${pageName}`} className="projectComponent noScripts">
                  <StylesLoadedProvider>
                    <DynamicComponent pageName={pageName} />
                  </StylesLoadedProvider>
                </div>
                <Link to={pageName}>{pageName}</Link>
                <TooltipProvider text={pageName}>
                  <div className="infoPageBox">i</div>
                </TooltipProvider>
              </Suspense>
            </LazyLoad>
          </div>
        );
      })}
    </>
  );
}
