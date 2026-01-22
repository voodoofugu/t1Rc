import { createReactNexus } from "nexus-state";

import handlePopup from "./actions/handlePopup";

import popupState from "./states/popupState";
import sAndLStates from "./states/sAndLStates";
import pageData from "./states/pageData";

type MyState = {
  darkTheme: boolean;
  searchText: string;
  activePage: string;
  searchData: string[] | null;
  pageData: typeof pageData;

  popupState: typeof popupState;
  sAndLStates: typeof sAndLStates;
  notif: {} | null;
  warpop: {} | null;
  windowScale: number | null;
};

type MyActs = {
  handlePopup: typeof handlePopup;
};

const nexus = createReactNexus<MyState, MyActs>({
  state: {
    darkTheme: false,
    searchText: "",
    activePage: "",
    searchData: null,
    pageData,

    popupState,
    sAndLStates,
    notif: null,
    warpop: null,
    windowScale: null,
  },

  acts: [handlePopup],
});

export default nexus;
export type { MyState, MyActs };
