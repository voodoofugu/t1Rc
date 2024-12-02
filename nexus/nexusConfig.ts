// actions
import handlePopup from "./actions/handlePopup";
// states
import popupState from "./states/popupState";
import sAndLStates from "./states/sAndLStates";
import pageData from "./states/pageData";

type InitialStatesT = typeof initialStates;
type InitialActionsT = typeof actions;
declare global {
  interface StatesT extends InitialStatesT {}
  interface ActionsT extends InitialActionsT {}
}

export const initialStates = {
  // template
  darkTheme: false,
  searchText: "",
  activePage: "",
  searchData: [] as string[],
  pageData,

  // project
  popupState,
  sAndLStates,
  notif: null as {} | null,
  warpop: null as {} | null,
};

export const actions = {
  handlePopup,
};
