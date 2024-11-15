import { useEffect } from "react";
import { useNexus, nexusDispatch } from "nexus-state";
import useStorage from "../../components/hooks/useStorage";

type StorageType = {
  watch?: boolean;
};

export default function Storage({ watch }: StorageType): null {
  const allStates = useNexus();

  const popupStateStor = JSON.parse(sessionStorage.getItem("popupState"));

  useEffect(() => {
    if (popupStateStor && popupStateStor.popupVisible) {
      nexusDispatch({
        type: "POPUP_OPEN",
        payload: popupStateStor,
      });
    }
  }, []);

  useStorage([
    {
      name: "pageData",
      value: allStates.pageData,
      type: "session",
    },
    {
      name: "popupState",
      value: allStates.popupState,
      type: "session",
    },
    watch && {
      name: "allStates✨",
      value: allStates,
      type: "session",
    },
  ]);

  return null;
}
