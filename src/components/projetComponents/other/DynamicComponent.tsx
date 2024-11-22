import React from "react";

const PATH_MAP = {
  pageComponents: "pagesComponents",
  popupComponents: "popupsContetnt",
};

interface DynamicComponentProps {
  name: string;
  props?: Record<string, any>;
  path: keyof typeof PATH_MAP;
}

export default function DynamicComponent({
  name,
  props,
  path,
}: DynamicComponentProps) {
  const [LoadedComponent, setLoadedComponent] =
    React.useState<React.ComponentType<any> | null>(null);

  React.useEffect(() => {
    if (!name) return;

    (async () => {
      try {
        const module = await import(
          `@/src/components/projetComponents/${PATH_MAP[path]}/${name}`
        );
        const Component = module.default;

        if (!Component) {
          throw new Error(`Компонент по умолчанию для ${name} не найден`);
        }

        setLoadedComponent(() => Component);
      } catch (error) {
        console.error(`Ошибка загрузки компонента "${name}":`, error);
      }
    })();
  }, [name]);

  if (!LoadedComponent) {
    return "🔄";
  }

  return <LoadedComponent {...props} />;
}
