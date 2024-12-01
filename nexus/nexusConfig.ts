import { nexusAction } from "nexus-state";

// actions
import handlePopup from "./actions/handlePopup";
// states
import popupState from "./states/popupState";
import sAndLStates from "./states/sAndLStates";

type InitialStatesT = typeof initialStates;
type InitialActionsT = typeof actions;
declare global {
  interface StatesT extends InitialStatesT {}
  interface ActionsT extends InitialActionsT {}
}

// initial states
export const initialStates = {
  // template
  darkTheme: false,
  searchText: "",
  activePage: "",
  searchData: [] as string[],
  pageData: {
    scrollTop: 0,
    top: 0,
    left: 0,
  },

  // project
  popupState,
  sAndLStates,
  notif: null as {} | null,
  warpop: null as {} | null,
};

export const actions = {
  handlePopup,
};
