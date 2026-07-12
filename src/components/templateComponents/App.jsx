import DemoWorkbench from "demo-workbench";

import ComponToLoad from "./ComponToLoad";
import demos from "./demos.js";

export default function App() {
  return (
    <DemoWorkbench
      title="T1 Template"
      demos={demos}
      styleLoader="/workbench-css/"
      baseStyles={[
        "v2-screen-main",
        "v2-screen-main-dark-world",
        "01-all-res",
        "01-all",
        "ui-elements",
        "keyframes-animations",
        "reset",
      ]}
      autoScale={{ width: 1200, height: 640 }}
      bodyBg="#9f8978"
      renderDemoContent={(pageName) => <ComponToLoad pageName={pageName} />}
    />
  );
}
