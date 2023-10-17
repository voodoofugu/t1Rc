import React from "react";
import { Helmet } from "react-helmet-async";
import templateCss from "../../styleComponents/TemplateComponentStyle.jsx";

export default function HelmetComponentRSC() {
  return (
    <Helmet>
      <style>{templateCss}</style>
    </Helmet>
  );
}
