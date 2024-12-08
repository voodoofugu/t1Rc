import handlePopup from "./actions/handlePopup";

import popupState from "./states/popupState";
import sAndLStates from "./states/sAndLStates";
import pageData from "./states/pageData";

type InitialStatesT = typeof initialStates;
type InitialFuncsT = typeof initialFuncs;
declare global {
  interface StatesT extends InitialStatesT {}
  interface FuncsT extends InitialFuncsT {}
}

export const initialStates = {
  // template
  darkTheme: false,
  searchText: "",
  activePage: "",
  searchData: null as string[] | null,
  pageData,

  // project
  popupState,
  sAndLStates,
  notif: null as {} | null,
  warpop: null as {} | null,
};

export const initialFuncs = {
  handlePopup,
};
