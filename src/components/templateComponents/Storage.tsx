import { useEffect, useRef } from "react";
import { useNexus, nexusDispatch } from "nexus-state";
import useStorage, { StorageItemT } from "../../components/hooks/useStorage";

type StorageType = {
  watch?: boolean;
  storageData?: [keyof StatesT, type?: "local" | "session"][];
};

export default function Storage({ watch, storageData }: StorageType): null {
  const nexusAll = useNexus();
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!storageData?.length || hasInitialized.current) return;

    const dataToUpdate: Partial<StatesT> = {};
    storageData.forEach(([key, storageType]) => {
      const storage = storageType === "local" ? localStorage : sessionStorage;
      const rawData = storage.getItem(key as string);

      if (rawData) {
        try {
          const parsedData = JSON.parse(rawData);
          dataToUpdate[key as keyof StatesT] = parsedData;
        } catch (error) {
          console.error(`Ошибка парсинга данных для ключа "${key}":`, error);
        }
      }
    });

    if (Object.keys(dataToUpdate).length > 0) {
      console.log("dataToUpdate", dataToUpdate);
      nexusDispatch({
        type: "STATES_UPDATE",
        payload: dataToUpdate,
      });
    }

    hasInitialized.current = true; // Предотвращаем повторное выполнение эффекта
  }, [storageData]);

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
