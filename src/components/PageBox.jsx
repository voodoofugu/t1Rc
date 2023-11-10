// PageBox.js
import React, { useEffect, useState, Suspense, lazy } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { StylesLoadedProvider } from "./StylesLoadedProvider";
import Loading from "./Loading";
import TooltipTemplate from "./TooltipTemplate";

export default function PageBox() {
  const [pageList, setPageList] = useState([null]);
  // const [tooltipData, setTooltipData] = useState({
  //   visible: false,
  //   x: 0,
  //   y: 0,
  //   text: "",
  // });

  // const handleMouseEnter = (e, pageName) => {
  //   setTooltipData({
  //     visible: true,
  //     x: e.clientX,
  //     y: e.clientY,
  //     text: pageName,
  //   });
  // };

  // const handleMouseLeave = () => {
  //   setTooltipData({ visible: false, x: 0, y: 0, text: "" });
  // };

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
                  // onMouseEnter={(e) => handleMouseEnter(e, pageName)}
                  // onMouseLeave={handleMouseLeave}
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
      {createPortal(<TooltipTemplate text="test" x={0} y={0} />, document.body)}
      {/* {tooltipData.visible &&
        createPortal(
          <TooltipTemplate
            text={tooltipData.text}
            x={tooltipData.x}
            y={tooltipData.y}
          />,
          document.body
        )} */}
    </>
  );
}
