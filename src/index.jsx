import "./stylesMap"; //это можно только для режима разработки добавить
import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AaPagesComponentMap from "./pagesComponents/AaPagesComponentMap";

// Функция для приведения первой буквы к верхнему регистру
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

(async () => {
    const currentPage =
        document.getElementById("root").getAttribute("data-page") + ".html";
    console.log("Current Page:", currentPage);

    // Динамически создаем pageComponents из AaPagesComponentMap
    const pageComponents = Object.entries(AaPagesComponentMap).reduce(
        (components, [key, Component]) => {
            const pageName =
                key === "template.html"
                    ? ""
                    : key.replace("Component", "").toLowerCase() + ".html";
            components[pageName] = AaPagesComponentMap[key];
            return components;
        },
        {}
    );

    // Функция для рендеринга страницы
    async function renderPage(currentPage) {
        try {
            const Root = document.getElementById("root");
            if (Root) {
                if (!window.__REACT_ROOT__) {
                    window.__REACT_ROOT__ = createRoot(Root);
                }

                let PageComponent;

                // Используем TemplateComponent только для главной страницы
                if (currentPage === "") {
                    PageComponent = AaPagesComponentMap.TemplateComponent;
                } else {
                    PageComponent =
                        pageComponents[currentPage] ||
                        AaPagesComponentMap.Page404Component;
                }

                window.__REACT_ROOT__.render(
                    <StrictMode>
                        <BrowserRouter>
                            <Suspense fallback={<div>Loading...</div>}>
                                <PageComponent />
                            </Suspense>
                        </BrowserRouter>
                    </StrictMode>
                );
            } else {
                console.warn("Element with id 'root' not found.");
            }
        } catch (error) {
            console.error("Error rendering page:", error);
        }
    }

    await renderPage(currentPage); // Вызываем функцию для рендеринга компонентов на текущей странице
})();

if (module.hot) {
    module.hot.accept();
}
