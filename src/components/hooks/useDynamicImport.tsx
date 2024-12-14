import { useEffect, useState } from "react";

import {
  importPage,
  importPopup,
} from "../../scripts/templateScripts/importFuncs";

const PATHS_MAP = {
  pagesComponents: "pagesComponents",
  popupsContetnt: "popupsContetnt",
};

const useDynamicImport = (name: string, pathType: keyof typeof PATHS_MAP) => {
  const [module, setModule] = useState<null | Record<string, any>>(null);

  useEffect(() => {
    let isActive = true;

    if (!name) {
      setModule(null);
      return;
    }

    (async () => {
      try {
        const data =
          pathType === "pagesComponents"
            ? await importPage({ fileName: name })
            : await importPopup({ fileName: name });

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
