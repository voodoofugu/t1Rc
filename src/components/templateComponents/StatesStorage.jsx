import useStore from "./GlobalStateStor";

export default function StatesStorage() {
  const state = useStore();
  sessionStorage.setItem("initialStates", JSON.stringify(state));
}
