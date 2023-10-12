import React, { useState, useEffect, Suspense, lazy } from "react";

import HelmetComponent from "../components/HelmetComponent.jsx";
const ProjectBoxTwo = lazy(() => import(`../components/ProjectBoxTwo.jsx`));
import Loading from "../components/Loading.jsx";
// import HelmetForCss from "../components/HelmetForCss.jsx";
// const cssFiles = [];

const templateJs = `
        import("../scripts/forBild/template.js").then(() => {});
    `;

const TemplateComponent = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  useEffect(() => {
    eval(templateJs);
    <HelmetComponent>
      <script>{templateJs}</script>
    </HelmetComponent>;
    setScriptLoaded(true);
  }, []);

  return (
    <>
      <main>
        <div className="templateTit page-title">
          {scriptLoaded}
          Template
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
          {/* <HelmetForCss cssFiles={cssFiles}> */}
          <div className="templatePage template-container">
            <ProjectBoxTwo />
          </div>
          {/* </HelmetForCss> */}
        </Suspense>
      </main>
    </>
  );
};

export default React.memo(TemplateComponent);
