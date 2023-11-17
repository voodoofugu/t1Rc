import React from "react";

export default function TemplateComponent({
  propClass = "",
  propClassDiasable = "",
  children,
  searchButtonComponent,
  toggleButtonComponent,
}) {
  return (
    <>
      <main>
        <div className={`templateTit ${propClassDiasable}`}>
          {searchButtonComponent}
          <div className="title">Template</div>
          {toggleButtonComponent}
        </div>
        <div className={`template-container ${propClass}`}>{children}</div>
      </main>
    </>
  );
}
