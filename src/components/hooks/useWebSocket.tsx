import React from "react";

export default function useWebSocket(request: string) {
  const [state, setState] = React.useState({
    data: null,
    loading: true,
    error: null,
  });

  React.useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("✅ WebSocket connected");
      socket.send(JSON.stringify(request));
    };

    socket.onmessage = (event) => {
      try {
        const newData = JSON.parse(event.data);
        setState({ data: newData, loading: false, error: null });
      } catch (error) {
        console.error("🚫 Error parsing data:", error);
        setState({ data: null, loading: false, error: null });
      }
    };

    socket.onerror = (error) => {
      console.error("🚫 WebSocket error:", error);
      setState({ data: null, loading: false, error: null });
    };

    socket.onclose = () => {
      console.log("❎ WebSocket closed");
    };

    return () => {
      socket.close();
    };
  }, [request]);

  return state;
}
