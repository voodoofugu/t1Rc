import React, { useEffect, useState, Suspense, lazy } from "react";
import LazyLoad from "react-lazy-load";
import Loading from "../components/Loading.jsx";

export default function PageBox() {
  const [pageList, setPageList] = useState([null]);

  useEffect(() => {
    async function importPageComponents() {
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
    importPageComponents();
  }, []);

  return (
    <>
      {pageList.map((pageName) => {
        const PageComponent = lazy(() =>
          import(`../pagesComponents/${pageName}.jsx`)
        );

        return (
          <div className="pageBox" key={pageName}>
            <LazyLoad height={"inherit"} width={"inherit"} offset={100}>
              <Suspense key={pageName} fallback={<Loading />} timer={1000}>
                <a href={pageName}>{pageName}</a>
                <div id={`${pageName}`} className="projectComponent noScripts">
                  <PageComponent />
                </div>
              </Suspense>
            </LazyLoad>
          </div>
        );
      })}
    </>
  );
}

// import React, { useEffect, useState, Suspense, lazy } from "react";
// import LazyLoad from "react-lazy-load";
// import Loading from "../components/Loading.jsx";

// export default function PageBox() {
//   const [componentsData, setComponentsData] = useState([]);
//   const pagesComponentsPath = "../../pagesComponents/";

//   useEffect(() => {
//     async function importPageComponents() {
//       try {
//         const context = require.context(pagesComponentsPath, false, /\.jsx$/);
//         const componentsData = context
//           .keys()
//           .filter((key) => !["./TemplateComponent.jsx"].includes(key))
//           .map((key) => {
//             const pageName = key.replace("./", "").replace(".jsx", "");
//             const PageComponent = lazy(() =>
//               import(`${pagesComponentsPath}${pageName}.jsx`)
//             );
//             return { pageName, PageComponent };
//           });
//         setComponentsData(componentsData);
//       } catch (error) {
//         console.error("Error importing page components:", error);
//       }
//     }

//     importPageComponents();
//   }, []);

//   return (
//     <>
//       {componentsData.map(({ pageName, PageComponent }) => (
//         <div className="pageBox" key={pageName}>
//           <LazyLoad height={"inherit"} width={"inherit"} offset={100}>
//             <Suspense key={pageName} fallback={<Loading />} timer={1000}>
//               <a href={pageName}>{pageName}</a>
//               <div id={`${pageName}`} className="projectComponent noScripts">
//                 <PageComponent />
//               </div>
//             </Suspense>
//           </LazyLoad>
//         </div>
//       ))}
//     </>
//   );
// }
