// < --!!! гидрация элемента App со старым hydrate !!!-- >

// import React from "react";
// import ReactDOM from "react-dom";
// import { hydrate } from "react-dom";

// // import axios from "axios";
// // async function fetchHTML(url) {
// //   try {
// //     const response = await axios.get(url);
// //     return response.data;
// //   } catch (error) {
// //     console.error("Ошибка при получении HTML:", error);
// //     return null;
// //   }
// // }
// // // Получение indexHTML с сервера
// // fetchHTML("http://localhost:4000/").then((html) => {
// //   if (html) {
// //     const rootElement = document.getElementById("root");
// //     rootElement.innerHTML = html;
// //   }
// // });

// // import App from "./components/App";
// import MainScreen16FortunaHtml from "./components/RSC/MainScreen16FortunaHtml";

// const container = document.getElementById("root");
// hydrate(<MainScreen16FortunaHtml />, container);

// < --!!! гидрация элемента App с новым hydrateRoot !!!-- >

// import React from "react";
// import { hydrateRoot } from "react-dom/client";
// // import App from "./components/App";
// import MainScreen16FortunaHtml from "./components/RSC/MainScreen16FortunaHtml";

// hydrateRoot(document.getElementById("root"), <MainScreen16FortunaHtml />);

// < --!!! рендер элемента App !!!-- >

import React, { Profiler, Suspense } from "react";
import { createRoot } from "react-dom/client";

import Loading from "./components/Loading.jsx";
import App from "./components/App";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
  //   <Profiler id="App">
  <App />
  //   </Profiler>
);
