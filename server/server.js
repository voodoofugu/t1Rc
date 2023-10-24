const express = require("express");
const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const app = express();
const port = 4000;

const App = require("../src/components/App").default;

app.use("*", (req, res) => {
  let indexHTML = fs.readFileSync(
    path.resolve(__dirname, "../src/htmlContent.ejs"),
    { encoding: "utf8" }
  );

  let rootHTML = ReactDOMServer.renderToString(<App />);
  indexHTML = indexHTML.replace(
    '<div id="root"></div>',
    `<div id="root">${rootHTML}</div>`
  );

  res.contentType("text/html");
  res.status(200);

  return res.send(indexHTML);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
