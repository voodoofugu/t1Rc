import { useEffect, useLayoutEffect, useRef, useState } from "react";

type DataT =
  | Record<string, unknown>
  | unknown[]
  | string
  | number
  | boolean
  | null;

export default function useStorage(
  storItem: {
    name: string;
    value?: DataT;
    type?: "local" | "session";
    remove?: boolean;
    onLoad?: (data: DataT) => void;
  }[],
  callback?: (item: {
    name: string;
    value: unknown;
    type: "local" | "session";
  }) => void,
) {
  const restoredRef = useRef(false);

  const [currentValues, setCurrentValues] = useState<Record<string, unknown>>(
    () => {
      if (typeof window === "undefined") return {};

      return storItem.reduce(
        (acc, { name, type = "session" }) => {
          const storage = type === "local" ? localStorage : sessionStorage;
          const storedValue = storage.getItem(name);

          acc[name] = storedValue ? JSON.parse(storedValue) : null;

          return acc;
        },
        {} as Record<string, unknown>,
      );
    },
  );

  useLayoutEffect(() => {
    storItem.forEach((item) => {
      if (!item.onLoad) return;

      const storage = item.type === "local" ? localStorage : sessionStorage;

      const storedValue = storage.getItem(item.name);

      if (storedValue !== null) {
        item.onLoad(JSON.parse(storedValue));
      }
    });

    restoredRef.current = true;
  }, []);

  useEffect(() => {
    if (!restoredRef.current) return;

    storItem.forEach((item) => {
      try {
        const storage = item.type === "local" ? localStorage : sessionStorage;

        if (item.remove) {
          storage.removeItem(item.name);
          setCurrentValues((prev) => ({ ...prev, [item.name]: null }));
          return;
        }

        if (!("value" in item)) return;

        const serializedValue = JSON.stringify(item.value);

        if (storage.getItem(item.name) !== serializedValue) {
          storage.setItem(item.name, serializedValue);
          setCurrentValues((prev) => ({
            ...prev,
            [item.name]: item.value,
          }));
        }

        callback?.({
          name: item.name,
          value: item.value,
          type: item.type || "session",
        });
      } catch (error) {
        console.error(`Failed to save item "${item.name}"`, error);
      }
    });
  }, [storItem, callback]);

  return currentValues;
}
