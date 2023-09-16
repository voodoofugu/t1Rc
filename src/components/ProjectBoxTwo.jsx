import React, { useEffect, useState, Suspense, lazy } from "react";
import Loading from "../components/Loading.jsx";

const ProjectBoxTwo = () => {
  const [pageList, setPageList] = useState([]);

  useEffect(() => {
    const importPageComponents = async () => {
      try {
        // Получаем список файлов из папки pagesComponents
        const context = require.context("../pagesComponents/", false, /\.jsx$/);
        const components = context
          .keys()
          .filter(
            (key) =>
              ![
                "./AaPagesComponentMap.jsx",
                "./TemplateComponent.jsx",
              ].includes(key)
          )
          .map((key) => key.replace("./", "").replace(".jsx", ""));
        setPageList(components);
      } catch (error) {
        console.error("Error importing page components:", error);
      }
    };

    importPageComponents();
  }, []);

  return (
    <>
      {pageList.map((pageName) => {
        const PageComponent = lazy(() =>
          import(`../pagesComponents/${pageName}.jsx`)
        );

        return (
          <div className="project-box" key={pageName}>
            <a href={pageName}>{pageName}</a>
            <div id={`root-${pageName}`} className="projectComponent noScripts">
              <Suspense fallback={<Loading />}>
                <PageComponent />
              </Suspense>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectBoxTwo;
