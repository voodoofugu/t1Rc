import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";

import Template from "./Template";
import Loading from "./Loading";
import StatesStorage from "./StatesStorage";
import { GlobalStateProvider } from "./GlobalStateStor";
import { reducer, initialState } from "../../scripts/templateScripts/reducer";
import transformCssFileNames from "../../scripts/templateScripts/transformCssFileNames";

import HelmetForCss from "./HelmetForCss";
export const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",
];

const transformedCssFiles = transformCssFileNames(cssFiles).join(" ");

export default function App() {
  const [stylesLoaded, setStylesLoaded] = useState(false);
  const states = !!sessionStorage.getItem("initialStates")
    ? JSON.parse(sessionStorage.getItem("initialStates"))
    : initialState;

  return (
    // <StrictMode>
    <GlobalStateProvider reducer={reducer} initialState={states}>
      <StatesStorage />
      <HelmetProvider>
        <div
          className={`likeBody ${transformedCssFiles} absolute overflow-hidden`}
          id="templateBody"
        >
          <HelmetForCss cssFiles={cssFiles} setStylesLoaded={setStylesLoaded} />
          {!stylesLoaded ? <Loading noBG /> : <Template />}
        </div>
      </HelmetProvider>
    </GlobalStateProvider>
  );
}
