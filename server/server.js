import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";

const app = express();
const port = 4000;

// import App from "../src/components/App";
import App from "../src/components/RSC/MainScreen16FortunaHtml";

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
