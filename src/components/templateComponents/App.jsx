import { StyleCore, StyledAtom } from "styled-atom";

import Template from "./Template";
import TitlePage from "./Title";

import SvgFilters from "../../../src/svg-filters/SvgFilters";
import DistortionFilter from "../../../src/svg-filters/DistortionFilter";

import Storage from "../../components/templateComponents/Storage";

export default function App() {
  return (
    <>
      <SvgFilters>
        <DistortionFilter />
      </SvgFilters>

      <StyleCore path={(name) => import(`../../styles/css/${name}.css`)} />
      <StyledAtom fileNames={["output"]} />
      <Storage
        watch
        storageData={[
          ["darkTheme", "local"],
          ["searchText"],
          ["pageData"],
          ["popupState"],
        ]}
      />
      <TitlePage />
      <Template />
    </>
  );
}
