import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import commStyle from "../../styles/tailwind/output.css";

export default memo(function HelmetComponent() {
  return (
    <Helmet>
      <style sourceName="commStule" type="text/css">{`${commStyle}`}</style>
    </Helmet>
  );
});
