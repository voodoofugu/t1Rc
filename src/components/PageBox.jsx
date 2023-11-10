// PageBox.js
import React, { useEffect, useState, Suspense, lazy } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { StylesLoadedProvider } from "./StylesLoadedProvider";
import Loading from "./Loading";
import TooltipTemplate from "./TooltipTemplate";
import { useTooltip } from "./TooltipProvider";

export default function PageBox() {
  const [pageList, setPageList] = useState([null]);
  const { tooltipData, setTooltip } = useTooltip();

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
                <Link to={pageName}>{pageName}</Link>
                <div
                  className="infoPageBox"
                  onMouseEnter={() =>
                    setTooltip({
                      visible: true,
                      x: 100,
                      y: 100,
                      text: pageName,
                      console: console.log(tooltipData),
                    })
                  }
                  onMouseLeave={() =>
                    setTooltip({
                      visible: false,
                      x: 0,
                      y: 0,
                      text: "",
                    })
                  }
                >
                  i
                </div>
                <div id={`${pageName}`} className="projectComponent noScripts">
                  <StylesLoadedProvider>
                    <DynamicComponent pageName={pageName} />
                  </StylesLoadedProvider>
                </div>
              </Suspense>
            </LazyLoad>
          </div>
        );
      })}
      {createPortal(
        <TooltipTemplate
          text={tooltipData.text}
          x={tooltipData.x}
          y={tooltipData.y}
        />,
        document.body
      )}
    </>
  );
}
