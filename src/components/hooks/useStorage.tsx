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

export default function useStorage(storItem: StorageItemT | StorageItemT[]) {
  useEffect(() => {
    const items = Array.isArray(storItem) ? storItem : [storItem];

    items.forEach((item) => {
      const storageType = item.type === "local" ? localStorage : sessionStorage;
      storageType.setItem(item.name, JSON.stringify(item.value));
    });
  }, [storItem]);
}
