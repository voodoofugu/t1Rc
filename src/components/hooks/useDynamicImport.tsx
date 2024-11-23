import { useEffect, useState } from "react";

const PATH_MAP = {
  pagesComponents: "pagesComponents",
  popupsContetnt: "popupsContetnt",
};

const useDynamicImport = (name: string, pathType: keyof typeof PATH_MAP) => {
  const [module, setModule] = useState<null | Record<string, any>>(null);

  useEffect(() => {
    let isActive = true;

    if (!name) {
      setModule(null);
      return;
    }

    (async () => {
      try {
        const data = await import(
          `@/src/components/projetComponents/${PATH_MAP[pathType]}/${name}`
        );

        if (isActive) {
          setModule(data);
        }
      } catch (error) {
        if (isActive) {
          console.error(`Модуль "${name}" не найден.`, error);
          setModule(null);
        }
      }
    })();

    return () => {
      isActive = false;
    };
  }, [name, pathType]);

  return module;
};

export default useDynamicImport;
