import { nexusAction } from "nexus-state";
import { PopupState, SAndLT } from "./types";

import {
  POPUP_OPEN,
  POPUP_CLOSE,
  POPUP_FOR_CLOSE,
  POPUP_CHANGE,
} from "./actions/POPUP";

import {
  ACTIVE_PLATE,
  ACTIVE_TIME,
  ANIM_IN_PROG,
  ANIM_PORTAL,
} from "./actions/SANDL";

type InitialStatesT = typeof initialStates;
type InitialActionsT = typeof actions;
declare global {
  interface StatesT extends InitialStatesT {}
  interface ActionsT extends InitialActionsT {}
}

// Начальное состояние
export const initialStates = {
  activePage: "",
  searchData: [] as string[],
  pageData: {
    scrollTop: 0,
    top: 0,
    left: 0,
  },

  // project initial states
  popupState: {} as PopupState,

  sAndLStates: {
    activePlate: 0,
    activeTime: 0,
    animInProgress: false,
    animPortal: false,
  },

  dateGirlIndex: 0,

  booleanState: false,

  increment: 0,
  notif: {},
};

export const actions = {
  ACTIVE_PAGE: nexusAction((state, action) => ({
    ...state,
    activePage: action.payload,
  })),

  SEARCH_DATA: nexusAction((state, action) => ({
    ...state,
    searchData: action.payload,
  })),

  PAGE_DATA: nexusAction((state, action) => ({
    ...state,
    pageData: action.payload,
  })),

  POPUP_OPEN,
  POPUP_CLOSE,
  POPUP_FOR_CLOSE,
  POPUP_CHANGE,

  ACTIVE_PLATE,
  ACTIVE_TIME,
  ANIM_IN_PROG,
  ANIM_PORTAL,

  BOOL_STATE: nexusAction((state) => ({
    ...state,
    booleanState: !state.booleanState,
  })),

  DATE_GIRL_INDEX: nexusAction((state, action) => ({
    ...state,
    dateGirlIndex: action.payload,
  })),

  INCREMENT: nexusAction((state, action) => ({
    ...state,
    increment: state.increment + action.payload,
  })),

  NOTIF_VIEW: nexusAction((state, action) => ({
    ...state,
    notif: action.payload,
  })),
};
