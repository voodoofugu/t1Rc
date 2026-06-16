import DemoWorkbench from "demo-workbench";

import ComponToLoad from "../projetComponents/UIComponents/ComponToLoad";
import Page404 from "../projetComponents/pagesComponents/Page404";

const styleReloadManifestUrl =
  __ENV__ === "development"
    ? "/workbench-css/demo-workbench-style-reload.json"
    : undefined;

async function loadWorkbenchCssFromDevServer(styleName) {
  const response = await fetch(
    `/workbench-css/${encodeURIComponent(styleName)}.css`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to load workbench style "${styleName}"`);
  }

  return response.text();
}

const workbenchStyleLoader =
  __ENV__ === "development"
    ? loadWorkbenchCssFromDevServer
    : (styleName) => import(`../../styles/workbench-css/${styleName}.css`);

export default function App() {
  return (
    <DemoWorkbench
      title="T1 Template"
      demoLoader={(name) => import(`@prCo/pagesComponents/${name}`)}
      styleLoader={workbenchStyleLoader}
      styleReloadManifestUrl={styleReloadManifestUrl}
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
      baseCss="background: #9f8978;"
      renderDemoContent={(pageName) => <ComponToLoad pageName={pageName} />}
      notFoundComponent={Page404}
    />
  );
}
