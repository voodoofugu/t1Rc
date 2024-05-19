import { WebSocketServer } from "ws";
import React from "react";
import { serializeReactElement } from "./reactToJSON";

import TestCompon from "./TestCompon";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("✅ Client connected");

  ws.on("message", function incoming(message?: string) {
    console.log("📧 received: %s", message);

    let receivedData;
    try {
      receivedData = JSON.parse(message);
    } catch (error) {
      console.error("🚫 Error parsing JSON:", error);
      return;
    }

    if (!receivedData) {
      ws.send(JSON.stringify({ message: "📧 Hello, client!" }));
    } else if (receivedData === "TestCompon") {
      const component = React.createElement(TestCompon);
      const serializedComponent = serializeReactElement(component);
      ws.send(JSON.stringify({ answer: serializedComponent }));
    } else {
      ws.send(JSON.stringify({ answer: "❔ Unknown action" }));
    }
  });
});
