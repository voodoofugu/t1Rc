import { useEffect } from "react";
import { useNexus, nexusDispatch } from "nexus-state";
import useStorage, { StorageItemT } from "../../components/hooks/useStorage";

type StorageType = {
  watch?: boolean;
  storageData?: [keyof StatesT, type?: "local" | "session"][];
};

export default function Storage({ watch, storageData }: StorageType): null {
  const nexusAll = useNexus();

  const popupStateStor = sessionStorage.getItem("popupState");
  const parsedPopupState = popupStateStor ? JSON.parse(popupStateStor) : null;

  useEffect(() => {
    if (parsedPopupState && parsedPopupState.popupVisible) {
      nexusDispatch({
        type: "POPUP_OPEN",
        payload: parsedPopupState,
      });
    }
  }, []);

  const processedStorageData: StorageItemT[] =
    storageData && Array.isArray(storageData)
      ? storageData.map((item) => ({
          name: item[0] as string,
          value: item[0] && nexusAll ? nexusAll[item[0] as keyof StatesT] : {},
          type: item[1] ? (item[1] as "local" | "session") : "session",
        }))
      : [];

  const storageItems: StorageItemT[] = [
    ...processedStorageData,
    ...(watch
      ? [
          {
            name: "NEXUS_ALL",
            value: nexusAll,
          },
        ]
      : []),
  ];

  useStorage(storageItems);

  return null;
}
