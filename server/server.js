import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import fs from "fs";
import path from "path";

const htmlContent = path.join(__dirname, "..", "src", "htmlContent.ejs");
const htmlOutput = path.join(__dirname, "..", "src", "index.html");
import MainScreen16FortunaHtml from "../src/components/RSC/MainScreen16FortunaHtml";
// import { V2MainScreen02GuildClanTrophiesComponent } from "../src/pagesComponents/V2MainScreen02GuildClanTrophiesComponent";

const app = express();
const port = 4000;

app.get("/", async (req, res) => {
  const MyComponent = React.createElement(MainScreen16FortunaHtml, {
    prop: "value",
  });
  const jsxString = ReactDOMServer.renderToString(MyComponent);
  // const template = fs.readFileSync(htmlContent, "utf-8");

  // const additionalDiv = "<div>My App</div>";

  // const page = template.replace("<!-- CONTENT -->", jsxString + additionalDiv);

  res.send(jsxString);

  // fs.writeFileSync(htmlOutput, page);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
