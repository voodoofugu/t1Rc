import React from "react";

export default function useFetchWS(request: string) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("✅ WebSocket connected");
      socket.send(JSON.stringify(request));
    };

    socket.onmessage = (event) => {
      try {
        const newData = JSON.parse(event.data);
        setData(newData);
        setLoading(false);
      } catch (error) {
        console.error("🚫 Error parsing data:", error);
        setError(error);
        setLoading(false);
      }
    };

    socket.onerror = (error) => {
      console.error("🚫 WebSocket error:", error);
      setError(error);
      setLoading(false);
    };

    socket.onclose = () => {
      console.log("❎ WebSocket closed");
    };

    return () => {
      socket.close();
    };
  }, [request]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return data;
}
