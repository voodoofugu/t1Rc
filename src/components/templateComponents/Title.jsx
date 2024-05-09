import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import { selectors } from "./GlobalStateStor";

export default memo(function Title() {
  const activePage = selectors.useActivePage();
  return (
    <Helmet>
      <title>{activePage ? activePage : "Template"}</title>
    </Helmet>
  );
});
