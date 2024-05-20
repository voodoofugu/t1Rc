import React from "react";

type SerializedElement = {
  type: string;
  props: Record<string, any>;
};

const serializeReactElement = (
  element: React.ReactElement
): SerializedElement => {
  const { type, props } = element;
  const serializeProps = (props: Record<string, any>): Record<string, any> => {
    const serializedProps: Record<string, any> = {};
    for (const [key, value] of Object.entries(props)) {
      if (key !== "children") {
        serializedProps[key] = value;
      }
    }
    return serializedProps;
  };
  return {
    type:
      typeof type === "string"
        ? type
        : (type as React.FunctionComponent).displayName ||
          (type as React.ComponentClass).name ||
          "Unknown",
    props: serializeProps(props),
  };
};

const deserializeReactElement = (
  element: SerializedElement,
  componentPath: string
): React.ReactElement | null => {
  if (!element) {
    console.error("Element is undefined");
    return null;
  }
  const { type, props } = element;

  if (!type) {
    console.error("Type is undefined in element:", element);
    return null;
  } else if (!componentPath) {
    console.error(`Component path for ${type} is not defined.`);
    return null;
  }

  const Component = React.lazy(() =>
    import(`${componentPath}${type}`).then((module) => ({
      default: module.default,
    }))
  );

  return React.createElement(Component, props);
};

export { serializeReactElement, deserializeReactElement };
