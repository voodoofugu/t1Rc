import React, { useEffect, useState } from "react";
import useFetchWS from "./useWebSocket";
import { deserializeReactElement } from "../../scripts/server/reactToJSON";

export default function useDeserializedComponent(
  myRequest: string,
  componentPath: string
) {
  const data = useFetchWS(myRequest);
  const [reactElement, setReactElement] = useState<React.ReactElement | null>(
    null
  );

  useEffect(() => {
    if (data && data.answer) {
      try {
        const element = deserializeReactElement(data.answer, componentPath);
        setReactElement(element);
      } catch (error) {
        console.error("Error parsing or deserializing:", error);
      }
    }
  }, [data, componentPath]);

  return reactElement;
}
