import { nexusAction } from "nexus-state";

const ACTIVE_PLATE = nexusAction((state, action) => ({
  ...state,
  sAndLStates: {
    ...state.sAndLStates,
    activePlate: action.payload,
  },
}));

const ACTIVE_TIME = nexusAction((state, action) => ({
  ...state,
  sAndLStates: {
    ...state.sAndLStates,
    activeTime: action.payload,
  },
}));

const ANIM_IN_PROG = nexusAction((state, action) => ({
  ...state,
  sAndLStates: {
    ...state.sAndLStates,
    animInProgress: action.payload,
  },
}));

const ANIM_PORTAL = nexusAction((state, action) => ({
  ...state,
  sAndLStates: {
    ...state.sAndLStates,
    animPortal: action.payload,
  },
}));

export { ACTIVE_PLATE, ACTIVE_TIME, ANIM_IN_PROG, ANIM_PORTAL };
