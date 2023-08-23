import React, { useEffect } from "react";
import AaComponMap from "../components/AaComponMap.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

const TemplateComponent = () => {
    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            import("../styles/notExported/template.css").then(() => {
                // Здесь можно добавить код для инициализации скриптов
                console.log("Styles loaded!");
            });
            import("../scripts/notExported/template.js").then(() => {
                console.log("Script loaded!");
            });
        }

        return () => {
            // Здесь можно добавить код для очистки скриптов при размонтировании компонента
        };
    }, []);

    const css = `
        body {
            background: #e6e7f1;
            font-family: "Montserrat", sans-serif;
        }
        body.dark-theme {
            background: #2a3451;
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
            <AaComponMap.ProjectBox />
        </HelmetProvider>
    );
};

export default React.memo(TemplateComponent);
