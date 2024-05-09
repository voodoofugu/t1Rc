import { useImmerReducer } from "use-immer";
import { createContext, useContextSelector } from "use-context-selector";
import { initialState } from "../../scripts/templateScripts/reducer";

const GlobalStateStorContext = createContext();

export default function useStore() {
  return useContextSelector(GlobalStateStorContext, (state) => state[0]);
}

export function GlobalStateStorProvider({ reducer, initialState, children }) {
  return (
    <GlobalStateStorContext.Provider
      value={useImmerReducer(reducer, initialState)}
    >
      {children}
    </GlobalStateStorContext.Provider>
  );
}

function generateSelectors(initialState) {
  const selectors = {};

  Object.keys(initialState).forEach((key) => {
    selectors[`use${key.charAt(0).toUpperCase() + key.slice(1)}`] = () =>
      useContextSelector(GlobalStateStorContext, (state) => state[0][key]);
  });

  return selectors;
}

export const selectors = generateSelectors(initialState);

export function useDispatch() {
  return useContextSelector(GlobalStateStorContext, ([, dispatch]) => dispatch);
}
