import React, { useState, useEffect } from "react";
import HelmetComponent from "../components/HelmetComponent.jsx";

const templateJs = `
        import("../scripts/forBild/template.js").then(() => {});
    `;

export default function TemplateComponent({
  propClass = "",
  propClassDiasable = "",
  children,
}) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  useEffect(() => {
    eval(templateJs);
    <HelmetComponent>
      <script>{templateJs}</script>
    </HelmetComponent>;
    setScriptLoaded(true);
  }, []);

  return (
    <>
      <main>
        <div className={`templateTit ${propClassDiasable}`}>
          Template
          <div
            className="toggle-btn"
            type="checkbox"
            name="toggle"
            id="theme-toggle"
          >
            <div className="btn-ic"></div>
          </div>
          {scriptLoaded}
        </div>
        <div className={`template-container ${propClass}`}>{children}</div>
      </main>
    </>
  );
}
