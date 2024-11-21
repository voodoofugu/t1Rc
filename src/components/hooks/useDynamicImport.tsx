import { useState, useEffect } from "react";

type UseDynamicImportResult<
  T extends Record<string, unknown> & { default?: unknown } = Record<
    string,
    unknown
  > & { default?: unknown }
> = {
  module: T | null;
  component: T["default"] | null;
  namedExport: (exportName: string) => unknown | null;
  error: Error | null;
  isLoading: boolean;
};

export default function useDynamicImport<
  T extends Record<string, unknown> & { default?: unknown } = Record<
    string,
    unknown
  > & { default?: unknown }
>(path: string | null): UseDynamicImportResult<T> {
  const [module, setModule] = useState<T | null>(null);
  const [component, setComponent] = useState<T["default"] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!path) return;

    const fetchModule = async () => {
      setIsLoading(true);
      setError(null);

      const timeout = setTimeout(() => {
        setError(new Error("Загрузка модуля превысила лимит времени."));
        setIsLoading(false);
      }, 10000);

      const fullPath = `../projetComponents/popupsContetnt/${path}`;
      try {
        const importedModule = (await import(
          /* webpackChunkName: "[request]" */ /* @vite-ignore */ `../projetComponents/popupsContetnt/${path}`
        )) as T;

        clearTimeout(timeout);
        setModule(importedModule || null);
        setComponent(importedModule.default || null);

        if (!importedModule.default) {
          console.warn(
            `В модуле "${fullPath}" отсутствует экспорт по умолчанию.`
          );
        }
      } catch (err) {
        clearTimeout(timeout);
        setError(err as Error);
        console.error(`Ошибка загрузки модуля "${fullPath}":`, err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchModule();

    return () => {
      setIsLoading(false);
      setError(null);
    };
  }, [path]);

  const namedExport = <E = unknown,>(exportName: string): E | null => {
    try {
      if (module && exportName in module) {
        return module[exportName] as E;
      } else {
        console.warn(
          `Экспорт с именем "${exportName}" не найден в модуле:`,
          module
        );
        return null;
      }
    } catch (err) {
      console.error(`Ошибка при попытке извлечь экспорт "${exportName}":`, err);
      return null;
    }
  };

  return { module, component, namedExport, error, isLoading };
}

/**
 * Хук для динамической загрузки модулей с поддержкой тайм-аутов и обработки ошибок.
 *
 * @template T Тип модуля, который должен быть загружен.
 * @param path Путь к модулю, который необходимо загрузить.
 * @param options Опциональные колбэки:
 * @returns Объект с данными модуля, компонентом, экспортами, состоянием загрузки и ошибками.
 */
