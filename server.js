const express = require("express");
const React = require("react");
const path = require("path");
const { renderToString } = require("react-dom/server");
const Message = require("./src/components/RSC/Message.server.jsx").default;

const MainScreen16FortunaHtml =
  require("./src/components/RSC/MainScreen16FortunaHtml").default;

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  const messageComponent = React.createElement(Message, {
    id: 2,
  });
  const messageHtml = renderToString(messageComponent);

  const Screen16FortunaComponent = React.createElement(MainScreen16FortunaHtml);
  const Screen16FortunaHtml = renderToString(Screen16FortunaComponent);

  res.send(`
    <html>
      <head></head>
      <body>
        <div id="root">
        ${messageHtml}
        ${Screen16FortunaHtml}
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
