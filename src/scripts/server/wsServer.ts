import React from "react";
import ReactDOMServer from "react-dom/server";
import { WebSocketServer } from "ws";
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
      ws.send(JSON.stringify({ answer: "📧 Hello, client!" }));
    } else {
      switch (receivedData) {
        case "TestCompon": {
          const component = React.createElement(TestCompon);
          ws.send(JSON.stringify({ answer: serializeReactElement(component) }));
          break;
        }

        case "TestCompServer": {
          const renderedComponent = ReactDOMServer.renderToString(
            React.createElement(TestCompon)
          );
          ws.send(
            JSON.stringify({ componentName: receivedData, renderedComponent })
          );
          break;
        }

        default:
          ws.send(JSON.stringify({ answer: "❔ Unknown action" }));
      }
    }
  });
});
