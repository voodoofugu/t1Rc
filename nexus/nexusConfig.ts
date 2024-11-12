import { createAction } from "nexus-state";
import { PopupState } from "./types";

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
  popupState: {
    mpopClass: "",
    popStyle: {},
    popTit: "",
    popCont: [] as any[],
    btnXClass: "",
    infBtn: false,
    timer: false,
    count: 0,
    popupVisible: false,
    dialogEmersion: "",
    popOpen: () => {},
    popClose: () => {},
    props: [] as any[],
  },

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

  POPUP_OPEN: createAction((state, action) => ({
    ...state,
    popupState: {
      ...action.payload,
      popupVisible: true,
      dialogEmersion: "show dialog-emersion-enter",
      btnXClass: state.popupState.btnXClass || "btn-close-x",
      popClose: (nexusDispatch: (action: any) => void) => {
        nexusDispatch({ type: "POPUP_FOR_CLOSE" });
        setTimeout(() => nexusDispatch({ type: "POPUP_CLOSE" }), 200);
      },
      popOpen: (nexusDispatch: (action: any) => void, actionStates?: any) => {
        nexusDispatch({ type: "POPUP_FOR_CLOSE" });
        setTimeout(() => {
          nexusDispatch({
            type: "POPUP_OPEN",
            payload: actionStates,
          });
        }, 200);
      },
    },
  })),

  POPUP_FOR_CLOSE: createAction((state) => ({
    ...state,
    popupState: {
      ...state.popupState,
      dialogEmersion: "show dialog-emersion-exit",
    },
  })),

  POPUP_CLOSE: createAction((state) => ({
    ...state,
    popupState: initialStates.popupState,
  })),

  POPUP_CHANGE: createAction((state, action) => ({
    ...state,
    popupState: {
      ...state.popupState,
      mpopClass: action.payload,
    },
  })),

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
