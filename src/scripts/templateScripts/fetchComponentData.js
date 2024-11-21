import React from "react";

const useFetchComponentData = (name) => {
  const [moduleImport, setModuleImport] = React.useState(null);
  const [defaultImport, setDefaultImport] = React.useState(null);

  React.useEffect(() => {
    if (!name) return;

    const fetchData = async () => {
      try {
        const module = await import(
          `../../components/projetComponents/popupsContet/${name}`
        );

        setModuleImport(module || null);
        setDefaultImport(module.default || null);
      } catch (error) {
        console.error(`Модуль "${name}" не найден.`);
      }
    };

    fetchData();
  }, [name]);

  return { moduleImport, defaultImport };
};

export default useFetchComponentData;
