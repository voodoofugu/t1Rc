import { nexusAction, nexusDispatch } from "nexus-state";

const POPUP_OPEN = nexusAction((state, action) => ({
  ...state,
  popupState: {
    ...action.payload,
    popupVisible: true,
    dialogEmersion: "show dialog-emersion-enter",
    btnXClass:
      state.popupState && "btnXClass" in state.popupState
        ? state.popupState.btnXClass
        : "btn-close-x",
    popClose: () => {
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
}));

const POPUP_FOR_CLOSE = nexusAction((state) => ({
  ...state,
  popupState: {
    ...state.popupState,
    dialogEmersion: "show dialog-emersion-exit",
  },
}));

const POPUP_CLOSE = nexusAction((state) => ({
  ...state,
  popupState: {},
}));

const POPUP_CHANGE = nexusAction((state, action) => ({
  ...state,
  popupState: {
    ...state.popupState,
    mpopClass: action.payload,
  },
}));

export { POPUP_OPEN, POPUP_FOR_CLOSE, POPUP_CLOSE, POPUP_CHANGE };
