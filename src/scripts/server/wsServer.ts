import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("Client connected");

  ws.on("message", function incoming(message: string) {
    console.log("received: %s", message);

    let receivedData;
    try {
      receivedData = JSON.parse(message);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return;
    }

    if (receivedData === "myRequest") {
      ws.send(JSON.stringify({ answer: "Hello, client!" }));
    } else {
      ws.send(JSON.stringify({ answer: "Unknown action" }));
    }
  });

  ws.send(JSON.stringify({ message: "Yo!" }));
});
