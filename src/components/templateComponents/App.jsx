import { StyleCore, StyledAtom } from "styled-atom";

import Template from "./Template";
import TitlePage from "./Title";

import Storage from "../../components/templateComponents/Storage";

export default function App() {
  return (
    <>
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
