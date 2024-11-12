import { createAction } from "nexus-state";
import { PopupState } from "./types";

import {
  POPUP_OPEN,
  POPUP_CLOSE,
  POPUP_FOR_CLOSE,
  POPUP_CHANGE,
} from "./actions/POPUP";

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
  ACTIVE_PAGE: createAction((state, action) => ({
    ...state,
    activePage: action.payload,
  })),

  SEARCH_DATA: createAction((state, action) => ({
    ...state,
    searchData: action.payload,
  })),

  PAGE_DATA: createAction((state, action) => ({
    ...state,
    pageData: action.payload,
  })),

  POPUP_OPEN,
  POPUP_CLOSE,
  POPUP_FOR_CLOSE,
  POPUP_CHANGE,

  ACTIVE_PLATE: createAction((state, action) => ({
    ...state,
    sAndLStates: {
      ...state.sAndLStates,
      activePlate: action.payload,
    },
  })),

  ACTIVE_TIME: createAction((state, action) => ({
    ...state,
    sAndLStates: {
      ...state.sAndLStates,
      activeTime: action.payload,
    },
  })),

  ANIM_IN_PROG: createAction((state, action) => ({
    ...state,
    sAndLStates: {
      ...state.sAndLStates,
      animInProgress: action.payload,
    },
  })),

  ANIM_PORTAL: createAction((state, action) => ({
    ...state,
    sAndLStates: {
      ...state.sAndLStates,
      animPortal: action.payload,
    },
  })),

  BOOL_STATE: createAction((state) => ({
    ...state,
    booleanState: !state.booleanState,
  })),

  DATE_GIRL_INDEX: createAction((state, action) => ({
    ...state,
    dateGirlIndex: action.payload,
  })),

  INCREMENT: createAction((state, action) => ({
    ...state,
    increment: state.increment + action.payload,
  })),

  NOTIF_VIEW: createAction((state, action) => ({
    ...state,
    notif: action.payload,
  })),
};
