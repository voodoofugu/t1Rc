import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import { useNexus } from "nexus-state";

export default memo(function Title() {
  const activePage = useNexus("activePage");
  return (
    <Helmet>
      <title>{activePage ? activePage : "Template"}</title>
    </Helmet>
  );
});
