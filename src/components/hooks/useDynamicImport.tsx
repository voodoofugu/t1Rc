import { useEffect, useState } from "react";

type ImportFileT = (fileName: string) => Promise<Record<string, any>>;

const useDynamicImport = (name: string, importFile: ImportFileT) => {
  const [module, setModule] = useState<null | Record<string, any>>(null);

  useEffect(() => {
    let isActive = true;

    if (!name) {
      setModule(null);
      return;
    }

    (async () => {
      try {
        const data = await importFile(name);

        if (isActive) {
          setModule(data);
        }
      } catch (error) {
        if (isActive) {
          console.error(`Module "${name}" not found`, error);
          setModule(null);
        }
      }
    })();

    return () => {
      isActive = false;
    };
  }, [name, importFile]);

  return module;
};

export default useDynamicImport;
