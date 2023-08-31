import "./stylesMap";
import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AaPagesComponentMap from "./pagesComponents/AaPagesComponentMap";
import AaComponMap from "./components/AaComponMap.jsx";

// Функция для приведения первой буквы к верхнему регистру
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Функция для генерации имени компонента на основе имени страницы
function generateComponentName(pageName) {
    const cleanedName =
        pageName
            .replace(".html", "")
            .replace(/[-_](\w)/g, (_, letter) => letter.toUpperCase())
            .replace(/^\w/, (c) => c.toUpperCase()) + "Component";
    return cleanedName;
}

(async () => {
    const currentPage =
        document.getElementById("root").getAttribute("data-page") + ".html";
    console.log("Current Page:", currentPage);

    const PageComponent =
        AaPagesComponentMap[generateComponentName(currentPage)] ||
        AaPagesComponentMap.Page404Component;

    const Root = document.getElementById("root");
    if (Root) {
        if (!window.__REACT_ROOT__) {
            window.__REACT_ROOT__ = createRoot(Root);
        }

        window.__REACT_ROOT__.render(
            // <StrictMode>
            <BrowserRouter>
                <Suspense fallback={<AaComponMap.Loading />}>
                    <PageComponent />
                </Suspense>
            </BrowserRouter>
            // </StrictMode>
        );
    } else {
        console.warn("Element with id 'root' not found.");
    }
})();

if (module.hot) {
    module.hot.accept();
}
