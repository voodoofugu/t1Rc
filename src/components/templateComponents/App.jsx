import { StrictMode } from "react";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { NexusProvider } from "nexus-state";
import { StyleCore, StyledAtom } from "styled-atom";

import Template from "./Template";
import Loading from "./Loading";
import transformCssFileNames from "../../scripts/templateScripts/transformCssFileNames";

import { initialStates, initialFuncs } from "../../../nexus/nexusConfig";
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
      <StyleCore
        watch
        path={(name) => import(`../../styles/css/${name}.css`)}
      />
      <NexusProvider initialStates={initialStates} initialFuncs={initialFuncs}>
        <Storage
          watch
          storageData={[
            ["darkTheme", "local"],
            ["searchText"],
            ["pageData"],
            ["popupState"],
          ]}
        />
        <StyledAtom fileNames={["keyframes-animations"]} />
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
