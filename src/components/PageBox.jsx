import React, {
  useEffect,
  useState,
  Suspense,
  lazy,
  useTransition,
} from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { StylesLoadedProvider } from "./StylesLoadedProvider";
import Loading from "./Loading";
import TooltipProvider from "./TooltipProvider";

export default function PageBox() {
  const [isPending, startTransition] = useTransition();
  const [pageList, setPageList] = useState([null]);

  useEffect(() => {
    async function importDynamicComponents() {
      try {
        const context = require.context("../pagesComponents/", false, /\.jsx$/);
        const components = context
          .keys()
          .filter((key) => !["./TemplateComponent.jsx"].includes(key))
          .map((key) => key.replace("./", "").replace(".jsx", ""));
        startTransition(() => {
          setPageList(components);
        });
      } catch (error) {
        console.error("Error importing page components:", error);
      }
    }
    importDynamicComponents();
  }, []);

  return (
    <>
      {pageList.map((pageName) => {
        const DynamicComponent = React.memo(
          lazy(() => import(`../pagesComponents/${pageName}.jsx`))
        );

        return (
          <div className="pageBox" key={pageName} id={pageName}>
            <div className="LazyLoadWrapp">
              <LazyLoad height={"inherit"} width={"inherit"} offset={100}>
                <Suspense key={pageName} fallback={<Loading />} timer={1000}>
                  <div id={`${pageName}`} className="projectComponent">
                    <StylesLoadedProvider>
                      <DynamicComponent pageName={pageName} />
                    </StylesLoadedProvider>
                  </div>
                  <Link className="pageBoxLink" to={pageName}>
                    {pageName}
                  </Link>
                  <TooltipProvider text={pageName}>
                    <div className="infoPageBox">i</div>
                  </TooltipProvider>
                </Suspense>
              </LazyLoad>
            </div>
          </div>
        );
      })}
    </>
  );
}
