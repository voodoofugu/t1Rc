import { StrictMode } from "react";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { NexusProvider } from "nexus-state";

import Template from "./Template";
import Loading from "./Loading";
import transformCssFileNames from "../../scripts/templateScripts/transformCssFileNames";

import { initialStates, actions } from "../../../nexus/nexusConfig";
import Storage from "../../components/templateComponents/Storage";

import HelmetForCss from "./HelmetForCss";
export const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",
  "keyframes-animations",
  "customScroll",
  "ui-elements",
];

const transformedCssFiles = transformCssFileNames(cssFiles).join(" ");

export default function App() {
  const [stylesLoaded, setStylesLoaded] = useState(false);

  return (
    <StrictMode>
      <NexusProvider initialStates={initialStates} actions={actions}>
        <Storage
          watch
          storageData={[
            {
              name: "pageData",
            },
            {
              name: "popupState",
            },
          ]}
        />
        <HelmetProvider>
          <div
            className={`likeBody ${transformedCssFiles} absolute overflow-hidden`}
            id="templateBody"
          >
            <HelmetForCss
              cssFiles={cssFiles}
              setStylesLoaded={setStylesLoaded}
            />
            {!stylesLoaded ? <Loading noBG /> : <Template />}
          </div>
        </HelmetProvider>
      </NexusProvider>
    </StrictMode>
  );
}
