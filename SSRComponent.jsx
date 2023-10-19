const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const app = express();
const port = 4000;

const SomeObjectComponent = require("./src/components/SomeObject").default;

app.get("/", (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  const someObjectHtml = ReactDOMServer.renderToString(<SomeObjectComponent />);
  res.send(someObjectHtml + "\n qweqwe");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
