import { useState, useEffect } from "react";

/**
 * Хук для управления состоянием с использованием localStorage или sessionStorage.
 * @param {string} storageKey - Ключ, используемый для хранения в localStorage или sessionStorage.
 * @param {string} defaultValue - Значение по умолчанию, используемое, если нет сохраненного значения.
 * @param {boolean} storageType - Если true, используется localStorage; если false, sessionStorage.
 * @returns {[string, (value: string) => void]} - Массив, содержащий текущее значение и функцию для его обновления.
 */

export default function useStorage(
  storageKey: string,
  defaultValue: string,
  storageType: boolean
): [string, (value: string) => void] {
  const storage = storageType ? localStorage : sessionStorage;

  const [value, setValue] = useState(() => {
    const storedValue = storage.getItem(storageKey);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    storage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, value, storage]);

  return [value, setValue];
}
