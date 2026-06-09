import DemoWorkbench from "demo-workbench";

import SvgFilters from "../../svg-filters/SvgFilters";
import DistortionFilter from "../../svg-filters/DistortionFilter";
import ComponToLoad from "../projetComponents/UIComponents/ComponToLoad";
import Page404 from "../projetComponents/pagesComponents/Page404";

export default function App() {
  return (
    <>
      <SvgFilters>
        <DistortionFilter />
      </SvgFilters>
      <DemoWorkbench
        title="Template"
        demoLoader={(name) => import(`@prCo/pagesComponents/${name}`)}
        styleLoader={(styleName) => import(`../../styles/css/${styleName}.css`)}
        baseCssFiles={[
          "v2-screen-main",
          "v2-screen-main-dark-world",
          "01-all-res",
          "01-all",
          "ui-elements",
          "keyframes-animations",
          "reset",
        ]}
        bodyBg="#9f8978"
        renderDemoContent={(pageName) => <ComponToLoad pageName={pageName} />}
        notFoundComponent={Page404}
      />
    </>
  );
}
