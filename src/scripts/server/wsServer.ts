import React from "react";
import { WebSocketServer } from "ws";
import serializeReactElement from "./serializeReactElement";
import TestCompon from "./TestCompon";

const compon = React.createElement(TestCompon);
const serializedAppElement = serializeReactElement(compon);

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
    } else if (receivedData === "myRequest") {
      ws.send(
        JSON.stringify({
          answer: JSON.stringify(serializedAppElement, null, 2),
        })
      );
    } else {
      ws.send(JSON.stringify({ answer: "❔ Unknown action" }));
    }
  });
});
