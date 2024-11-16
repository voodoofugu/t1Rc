import { nexusAction } from "nexus-state";

export type InitialState = typeof initialStates;

export const initialStates = {
  activePage: "",
  searchData: {},
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
    popCont: {},
    btnXClass: "",
    infBtn: false,
    timer: false,
    count: false,
    popupVisible: false,
    dialogEmersion: "",
    popOpen: () => {},
    popClose: () => {},
    props: {},
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
};

export const actions = {
  SOME_ACTION1: nexusAction(),
  INCREMENT: nexusAction((state, action) => ({
    ...state,
    increment: state.increment + action.payload.increment,
  })),
};
