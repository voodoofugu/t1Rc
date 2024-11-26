import { useEffect } from "react";

/**
 * Хук для управления состоянием с использованием localStorage или sessionStorage.
 * @param {string} storageKey - Ключ, используемый для хранения в localStorage или sessionStorage.
 * @param {string} storageType - Тип хранилища: "local" или "session".
 * @returns {[string, (value: string) => void]} - Массив, содержащий текущее значение и функцию для его обновления.
 */

export default function useStorage(
  storItem: {
    name: string;
    value: Record<string, unknown> | unknown[] | string | number | boolean;
    type?: "local" | "session";
  }[],
  callback?: (item: {
    name: string;
    value: unknown;
    type: "local" | "session";
  }) => void
) {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !window.localStorage ||
      !window.sessionStorage
    ) {
      console.warn("Storage is not available in this environment.");
      return;
    }

    const items = Array.isArray(storItem) ? storItem : [storItem];

    items.forEach((item) => {
      try {
        const storageType =
          item.type === "local" ? localStorage : sessionStorage;
        const serializedValue = JSON.stringify(item.value);

        // Записываем данные в хранилище
        storageType.setItem(item.name, serializedValue);

        // Вызов коллбека
        if (callback) {
          callback({
            name: item.name,
            value: item.value,
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
  }, [JSON.stringify(storItem), callback]);
}

export type StorageItemT = Parameters<typeof useStorage>[0];
