import { useState, useEffect } from "react";

/**
 * Хук для управления состоянием с использованием localStorage или sessionStorage.
 * @param {string} storageKey - Ключ, используемый для хранения в localStorage или sessionStorage.
 * @param {string} storageType - Тип хранилища: "local" или "session".
 * @returns {[string, (value: string) => void]} - Массив, содержащий текущее значение и функцию для его обновления.
 */

export default function useStorage(
  storItem: {
    name: string;
    value?:
      | Record<string, unknown>
      | unknown[]
      | string
      | number
      | boolean
      | null;
    type?: "local" | "session";
    remove?: boolean;
    setState?: (state: any) => void;
  }[],
  callback?: (item: {
    name: string;
    value: unknown;
    type: "local" | "session";
  }) => void
) {
  const [currentValues, setCurrentValues] = useState(() =>
    storItem.reduce((acc, { name, type }) => {
      const storageType = type === "local" ? localStorage : sessionStorage;
      const storedValue = storageType.getItem(name);
      acc[name] = storedValue ? JSON.parse(storedValue) : null;
      return acc;
    }, {} as Record<string, unknown>)
  );

  useEffect(() => {
    storItem.forEach((item) => {
      if (item.setState) {
        const storageType =
          item.type === "local" ? localStorage : sessionStorage;
        const storedValue = storageType.getItem(item.name);

        if (storedValue) {
          const parsedValue = JSON.parse(storedValue);
          item.setState(parsedValue);
        }
      }
    });
  }, []);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !window.localStorage ||
      !window.sessionStorage
    ) {
      console.warn("Storage is not available in this environment.");
      return;
    }

    storItem.forEach((item) => {
      try {
        const storageType =
          item.type === "local" ? localStorage : sessionStorage;

        if (item.remove) {
          storageType.removeItem(item.name);
          setCurrentValues((prev) => {
            if (prev[item.name] !== null) {
              return { ...prev, [item.name]: null };
            }
            return prev;
          });
          return;
        }

        if (item.value) {
          const serializedValue = JSON.stringify(item.value);
          if (storageType.getItem(item.name) !== serializedValue) {
            storageType.setItem(item.name, serializedValue);
            setCurrentValues((prev) => ({ ...prev, [item.name]: item.value }));
          }
        } else {
          storageType.removeItem(item.name);
        }

        // Вызов коллбека
        if (callback) {
          callback({
            name: item.name,
            value: item.value ?? null,
            type: item.type || "session",
          });
        }
      } catch (error) {
        console.error(
          `Failed to save item "${item.name}" to ${
            item.type || "local"
          } storage:`,
          error
        );
      }
    });
  }, [storItem, callback]);

  return currentValues;
}

export type StorageItemT = Parameters<typeof useStorage>[0];
