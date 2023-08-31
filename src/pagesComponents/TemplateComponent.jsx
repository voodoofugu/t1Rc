import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AaComponMap from "../components/AaComponMap.jsx";

const TemplateComponent = () => {
    const [stylesLoaded, setStylesLoaded] = useState(false);

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            import("../styles/notExported/template.css").then(() => {
                console.log("Styles loaded!");
                setStylesLoaded(true); // Отметить, что стили загружены
            });
            window.onload = () => {
                import("../scripts/notExported/template.js").then(() => {
                    console.log("Script loaded!");
                });
            };
        }

        return () => {
            // Здесь можно добавить код для очистки скриптов при размонтировании компонента
        };
    }, []);

    if (!stylesLoaded) {
        return null; // Возвращаем null, если стили и скрипты не загружены
    }

    const css = `
        body {
            background: #e6e7f1 !important;
            font-family: "Montserrat", sans-serif;
        }
        body.dark-theme {
            background: #2a3451 !important;
            color: #fff;
        }
    `;

    return (
        <HelmetProvider>
            <Helmet>
                <style>{css}</style>
            </Helmet>
            <div className="templateTit page-title">
                HTML Template
                <div
                    className="toggle-btn"
                    type="checkbox"
                    name="toggle"
                    id="theme-toggle">
                    <div className="btn-ic"></div>
                </div>
            </div>
            <div className="templatePage template-container">
                <AaComponMap.ProjectBox />
            </div>
        </HelmetProvider>
    );
};

const MemoizedTemplateComponent = React.memo(TemplateComponent);

export default MemoizedTemplateComponent;
