import DemoWorkbench from "demo-workbench";
import "demo-workbench/styles.css";

import SvgFilters from "../../svg-filters/SvgFilters";
import DistortionFilter from "../../svg-filters/DistortionFilter";
import t1RcDemos from "../projetComponents/demoManifest";
import ComponToLoad from "../projetComponents/UIComponents/ComponToLoad";
import Page404 from "../projetComponents/pagesComponents/Page404";

export default function App() {
  return (
    <DemoWorkbench
      title="Template"
      demos={t1RcDemos}
      cssLoader={(cssName) => import(`../../styles/css/${cssName}.css`)}
      renderSvgDefs={() => (
        <SvgFilters>
          <DistortionFilter />
        </SvgFilters>
      )}
      renderDemoContent={(pageName) => <ComponToLoad pageName={pageName} />}
      notFoundComponent={Page404}
    />
  );
}
