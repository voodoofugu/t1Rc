import { useEffect, useRef } from "react";
import nexus from "../../../nexus/nexusConfig";
import useStorage, { StorageItemT } from "../../components/hooks/useStorage";

import type { MyState } from "../../../nexus/nexusConfig";

type StorageType = {
  watch?: boolean;
  storageData?: [keyof MyState, type?: "local" | "session"][];
};

export default function Storage({ watch, storageData }: StorageType): null {
  const nexusAll = nexus.use();
  const hasInitialized = useRef(false);

  useEffect(() => {
    // берем данные из хранилища и обновляем состояния
    if (!storageData?.length || hasInitialized.current) return;

    const dataToUpdate: Partial<MyState> = {};
    storageData.forEach(([key, storageType]) => {
      const storage = storageType === "local" ? localStorage : sessionStorage;
      const rawData = storage.getItem(key as string);

      if (rawData) {
        try {
          const parsedData = JSON.parse(rawData);
          dataToUpdate[key as keyof MyState] = parsedData;
        } catch (error) {
          console.error(`Ошибка парсинга данных для ключа "${key}":`, error);
        }
      }
    });

    // !!! проверить зачем оно
    // if (Object.keys(dataToUpdate).length > 0) {
    //   nexus.set({
    //     _NEXUS_: dataToUpdate,
    //   });
    // }

    hasInitialized.current = true; // Предотвращаем повторное выполнение эффекта
  }, [storageData]);

  const processedStorageData: StorageItemT =
    storageData && Array.isArray(storageData)
      ? storageData.map((item) => ({
          name: item[0] as string,
          value: item[0] && nexusAll ? nexusAll[item[0] as keyof MyState] : {},
          type: item[1] ? (item[1] as "local" | "session") : "session",
        }))
      : [];

  const storageItems = [
    ...processedStorageData,
    ...(watch
      ? [
          {
            name: "✨NEXUS✨",
            value: nexusAll,
          },
        ]
      : []),
  ];

  useStorage(storageItems as StorageItemT);

  return null;
}
