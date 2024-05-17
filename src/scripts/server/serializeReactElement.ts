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

  const getTypeName = (type: React.ElementType): string => {
    if (typeof type === "string") {
      return type;
    }
    if (typeof type === "function") {
      return type.name || "AnonymousComponent";
    }
    return "UnknownType";
  };

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
    return [serializeReactElement(children as React.ReactElement)];
  };

  return {
    type: getTypeName(type as React.ElementType),
    props: serializeProps(props),
    children: serializeChildren(props.children),
  };
};

export default serializeReactElement;
