import React, { useState, useEffect, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
const ProjectBoxTwo = lazy(() => import(`../components/ProjectBoxTwo.jsx`));
import HelmetStyleTagWhitWrap from "../components/HelmetStyleTagWhitWrap.jsx";
import pageStyles from "../styleComponents/TemplateComponentStyle.jsx";
import Loading from "../components/Loading.jsx";

const templateJs = `
        import("../scripts/forBild/template.js").then(() => {});
    `;

const TemplateComponent = ({ idForStyle }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  useEffect(() => {
    eval(templateJs);
    <Helmet>
      <script>{templateJs}</script>
    </Helmet>;
    setScriptLoaded(true);
  }, []);

  return (
    <HelmetStyleTagWhitWrap idForStyle={idForStyle} pageStyles={pageStyles}>
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
          <div className="templatePage template-container">
            <ProjectBoxTwo />
          </div>
        </Suspense>
      </main>
    </HelmetStyleTagWhitWrap>
  );
};

export default React.memo(TemplateComponent);
