import { useEffect } from "react";

/**
 * Хук для управления состоянием с использованием localStorage или sessionStorage.
 * @param {string} storageKey - Ключ, используемый для хранения в localStorage или sessionStorage.
 * @param {string} storageType - Тип хранилища: "local" или "session".
 * @returns {[string, (value: string) => void]} - Массив, содержащий текущее значение и функцию для его обновления.
 */

export type StorageItemT = {
  name: string;
  value: Record<string, unknown> | unknown[] | string | number | boolean;
  type?: "local" | "session";
};

export default function useStorage(storItem: StorageItemT[]) {
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
      } catch (error) {
        console.error(
          `Failed to save item "${item.name}" to ${
            item.type || "local"
          } storage:`,
          error
        );
      }
    });
  }, [storItem]);
}
