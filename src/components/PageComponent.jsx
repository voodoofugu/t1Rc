import React, { useEffect, useState, Suspense } from "react";
import LazyLoad from "react-lazy-load";
import { useParams } from "react-router-dom";
import { StylesLoadedProvider } from "./StylesLoadedProvider";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import TooltipProvider from "./TooltipProvider";

export default function PageComponent() {
  const [DynamicComponent, setDynamicComponent] = useState(undefined);
  const { pageName } = useParams();

  useEffect(() => {
    async function importPageComponent() {
      if (!pageName) {
        console.error("pageName is not defined.");
        return;
      }
      const pageNameToLoad = `${pageName}.jsx`;
      try {
        const module = await import(`../pagesComponents/${pageNameToLoad}`);
        if (module.default) {
          setDynamicComponent(() => module.default);
        } else {
          console.error("Dynamic component is not defined in", pageNameToLoad);
        }
      } catch (error) {
        console.error("Error importing page component:", error);
      }
    }
    importPageComponent();
  }, [pageName]);

  if (DynamicComponent) {
    return (
      <div className="pageBox" key={pageName} id={pageName}>
        <LazyLoad height={"inherit"} width={"inherit"} offset={100}>
          <Suspense key={pageName} fallback={<Loading />} timer={1000}>
            <div id={`${pageName}`} className="projectComponent">
              <StylesLoadedProvider>
                <DynamicComponent pageName={pageName} />
              </StylesLoadedProvider>
            </div>
          </Suspense>
        </LazyLoad>
      </div>
    );
  }

  return null;
}
