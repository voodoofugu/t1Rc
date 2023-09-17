import React, { useEffect, useState, Suspense, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import ProjectBoxTwo from "../components/ProjectBoxTwo.jsx";
const ProjectBoxTwo = lazy(() => import(`../components/ProjectBoxTwo.jsx`));
import Loading from "../components/Loading.jsx";

const TemplateComponent = () => {
  const [stylesLoaded, setStylesLoaded] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("../styles/notExported/template.css").then(() => {
        console.log("Styles loaded!");
        setStylesLoaded(true); // Отметить, что стили загружены
      });
    }

    return () => {};
  }, []);

  if (!stylesLoaded) {
    return null; // Возвращаем null, если стили и скрипты не загружены
  }

  const css = `
        body {
            background: #e6e7f1 !important;
            font-family: "Montserrat", sans-serif;
        }
        body.dark-theme {
            background: #2a3451 !important;
            color: #fff;
        }
    `;
  const templateJs = `
        import("../scripts/notExported/template.js").then(() => {
            console.log("Script loaded!");
        });
    `;

  return (
    <HelmetProvider>
      <Helmet>
        <style>{css}</style>
      </Helmet>
      <div className="templateTit page-title">
        HTML Template
        <div
          className="toggle-btn"
          type="checkbox"
          name="toggle"
          id="theme-toggle"
        >
          <div className="btn-ic"></div>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <div className="templatePage template-container">
          {/* <AaComponMap.ProjectBox /> */}
          <ProjectBoxTwo />
        </div>
      </Suspense>
      <Helmet>
        <script>{templateJs}</script>
      </Helmet>
    </HelmetProvider>
  );
};

export default React.memo(TemplateComponent);
