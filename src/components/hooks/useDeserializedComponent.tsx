import React from "react";
import useWebSocket from "./useWebSocket";
import { deserializeReactElement } from "../../scripts/server/reactToJSON";

export default function useDeserializedComponent(
  myRequest: string,
  componentPath: string
) {
  const { data, loading, error } = useWebSocket(myRequest);
  const [reactElement, setReactElement] = React.useState(null);

  React.useEffect(() => {
    if (data && data.answer) {
      try {
        const element = deserializeReactElement(data.answer, componentPath);
        setReactElement(element);
      } catch (error) {
        console.error("Error parsing or deserializing:", error);
      }
    }
  }, [data, componentPath]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return reactElement;
}
