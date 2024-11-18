import { useEffect } from "react";
import { useNexus, nexusDispatch } from "nexus-state";
import useStorage, { StorageItemT } from "../../components/hooks/useStorage";

export type nexusStorageItemT = {
  name: keyof StatesT;
  type?: "local" | "session";
};

type StorageType = {
  watch?: boolean;
  storageData?: nexusStorageItemT | nexusStorageItemT[];
};

export default function Storage({ watch, storageData }: StorageType): null {
  const nexusAll = useNexus();

  const popupStateStor = JSON.parse(sessionStorage.getItem("popupState"));

  useEffect(() => {
    if (popupStateStor && popupStateStor.popupVisible) {
      nexusDispatch({
        type: "POPUP_OPEN",
        payload: popupStateStor,
      });
    }
  }, []);

  const processedStorageData = (
    Array.isArray(storageData) ? storageData : [storageData]
  )
    .map((item) => ({
      name: item.name as string,
      value:
        item.name && nexusAll ? nexusAll[item.name as keyof StatesT] : null,
      type: item.type ? (item.type as "local" | "session") : "session",
    }))
    .filter((item) => item.name && item.value !== null);

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
