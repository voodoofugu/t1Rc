import React from "react";

type SerializedElement = {
  type: string;
  props: Record<string, any>;
  children: SerializedElement[] | string | null;
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

  const serializeChildren = (
    children: React.ReactNode
  ): SerializedElement[] | string | null => {
    if (!children) return null;
    if (typeof children === "string") return children;
    if (Array.isArray(children)) {
      return children.map((child) =>
        serializeReactElement(child as React.ReactElement)
      );
    }
    // Если children - это отдельный React-элемент, то вызываем serializeReactElement
    if (React.isValidElement(children)) {
      return [serializeReactElement(children)];
    }
    // Возвращаем children как есть, если это не React-элемент
    return children;
  };

  return {
    type:
      typeof type === "string"
        ? type
        : (type as React.FunctionComponent).displayName ||
          (type as React.ComponentClass).name ||
          "Unknown",
    props: serializeProps(props),
    children: serializeChildren(props.children),
  };
};

export default serializeReactElement;
