const React = require("react");
const ReactDOMServer = require("react-dom/server");
const express = require("express");
const path = require("path");
const fs = require("fs");
const MainScreen16FortunaHtml = require("../src/pagesComponents/CommonJS/MainScreen16FortunaHtml.js");

const app = express();
const port = 4000;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("*", (req, res) => {
  const indexHTML = fs.readFileSync(
    path.resolve(__dirname, "../src/htmlContent.ejs"),
    { encoding: "utf8" }
  );

  const renderedObject = ReactDOMServer.renderToString(
    React.createElement(MainScreen16FortunaHtml, null)
  );

  const finalHTML = indexHTML.replace(
    '<div id="root"></div>',
    `<div id="root">${renderedObject}</div>`
  );

  sendHTML(res, finalHTML);
});

async function sendHTML(res, html) {
  res.setHeader("Content-Type", "text/html");
  res.end(html);
}

// Маршрут для получения MainScreen16FortunaHtml
// app.get("/MainScreen16FortunaHtml", (req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.send(renderedObject);
// });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
